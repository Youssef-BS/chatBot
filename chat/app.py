from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response  # Import the get_response function

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    message = data['message']
    response = get_response(message)  # Use the get_response function
    return jsonify({'answer': response})

if __name__ == '__main__':
    app.run(debug=True)
