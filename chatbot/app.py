from flask import Flask, request, jsonify
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import Pipeline
from sklearn.naive_bayes import MultinomialNB
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Training data
train_data = [
    "Hello",
    "How are you?",
    "Good morning",
    "Good evening",
    "Nice to meet you",
    "What's up?",
    "How's your day going?",
    "Greetings!",
    "Good afternoon",
    "How can I assist you?",
    "Pleasure to see you",
    "Is there anything I can help with?"
]

train_labels = [
    "Hi",
    "I'm fine, how about you?",
    "Good morning to you",
    "Good evening, how can I help you?",
    "Nice to meet you too",
    "Not much, just hanging out",
    "It's going well, thank you",
    "Hello!",
    "Good afternoon to you too",
    "I'm here to assist you",
    "Likewise!",
    "Yes, I have a question"
]

# Create a pipeline with CountVectorizer, TfidfTransformer, and MultinomialNB
model = Pipeline([
    ('vect', CountVectorizer()),
    ('tfidf', TfidfTransformer()),
    ('clf', MultinomialNB()),
])

# Fit the model
model.fit(train_data, train_labels)

# Function to generate responses
def generate_response(text):
    predicted_label = model.predict([text])[0]
    return predicted_label

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data['message']
    response = generate_response(message)
    return jsonify({'message': response})

if __name__ == '__main__':
    app.run(debug=True)
