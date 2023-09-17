from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import predicciones

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    json_file = './KREND.json'
    result = predicciones(json_file)
    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(port=5000)
