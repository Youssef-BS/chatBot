from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.pipeline import Pipeline
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS
import os

app = Flask(__name__)
CORS(app)

# Setup logging
logging.basicConfig(level=logging.INFO)

# Function to load training data and labels from text files
def load_training_data(data_file, labels_file):
    if not os.path.exists(data_file):
        raise FileNotFoundError(f"Data file '{data_file}' not found.")
    if not os.path.exists(labels_file):
        raise FileNotFoundError(f"Labels file '{labels_file}' not found.")
    
    with open(data_file, 'r') as df, open(labels_file, 'r') as lf:
        train_data = [line.strip() for line in df.readlines()]
        train_labels = [line.strip() for line in lf.readlines()]

    if not train_data:
        raise ValueError(f"Data file '{data_file}' is empty.")
    if not train_labels:
        raise ValueError(f"Labels file '{labels_file}' is empty.")
    if len(train_data) != len(train_labels):
        raise ValueError("The number of lines in data and labels files do not match.")

    logging.info(f"Raw training data: {train_data}")
    logging.info(f"Raw training labels: {train_labels}")

    # Filter out empty lines and lines with only stop words
    filtered_data = []
    filtered_labels = []
    for data, label in zip(train_data, train_labels):
        words = data.split()
        if words and not all(word in ENGLISH_STOP_WORDS for word in words):
            filtered_data.append(data)
            filtered_labels.append(label)

    logging.info(f"Filtered training data: {filtered_data}")
    logging.info(f"Filtered training labels: {filtered_labels}")

    return filtered_data, filtered_labels

# Load training data and labels
train_data, train_labels = load_training_data('train_data.txt', 'train_labels.txt')

# Check if training data is empty after filtering
if not train_data:
    raise ValueError("Training data is empty after filtering out empty and stop-word-only lines.")

logging.info(f"Training data size: {len(train_data)}")
logging.info(f"Training labels size: {len(train_labels)}")

# Create a pipeline with CountVectorizer, TfidfTransformer, and MultinomialNB
model = Pipeline([
    ('vect', CountVectorizer()),
    ('tfidf', TfidfTransformer()),
    ('clf', MultinomialNB()),
])

# Fit the model
try:
    model.fit(train_data, train_labels)
    logging.info("Model training complete.")
except ValueError as e:
    logging.error(f"Error fitting the model: {e}")
    raise

# Function to generate responses with preprocessing
def generate_response(text):
    text = text.lower()  # Convert text to lowercase
    try:
        predicted_label = model.predict([text])[0]
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        predicted_label = "I'm not sure how to respond to that."
    return predicted_label

# Route to handle chat messages
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        if 'message' not in data:
            raise ValueError("No message field provided in JSON payload.")

        message = data['message']
        response = generate_response(message)
        return jsonify({'message': response})

    except Exception as e:
        logging.error(f"Error processing request: {e}")
        return jsonify({'error': 'An error occurred while processing your request.'}), 500

# Route to add new training data
@app.route('/add_response', methods=['POST'])
def add_response():
    try:
        data = request.get_json()
        if 'new_message' not in data or 'new_response' not in data:
            raise ValueError("Both 'new_message' and 'new_response' fields are required in JSON payload.")

        new_message = data['new_message'].lower()
        new_response = data['new_response']

        # Append new data to training sets
        train_data.append(new_message)
        train_labels.append(new_response)

        # Retrain the model with the updated data
        try:
            model.fit(train_data, train_labels)
            logging.info("Model retrained with new data.")
        except ValueError as e:
            logging.error(f"Error re-training the model: {e}")
            return jsonify({'error': 'An error occurred while retraining the model.'}), 500

        # Update training data files
        with open('train_data.txt', 'a') as df, open('train_labels.txt', 'a') as lf:
            df.write(f"{new_message}\n")
            lf.write(f"{new_response}\n")

        return jsonify({'status': 'success', 'message': 'New response added and model retrained.'})

    except Exception as e:
        logging.error(f"Error adding new response: {e}")
        return jsonify({'error': 'An error occurred while adding the new response.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
