from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Create a Flask web application
app = Flask(__name__)

# Configure CORS with a list of allowed origins
cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "https://example.com"]}})

# Define the directory where you want to save the uploaded files
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Define a route for the home page
@app.route('/')
def hello_world():
    return 'Working!'

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    # You can process the uploaded file here.
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Ensure the 'uploads' directory exists
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    # Save the uploaded file to the 'uploads' directory
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    # For example, you can save it to a specific directory.

    # For demonstration, let's just return a success message.
    return jsonify({'message': 'File successfully uploaded'})

@app.route('/head_of_file', methods=['get'])
def head_of_file():
    try:
        with open("uploads/"+request.args.get("filename")) as f:
            linesList = list()
            for x in range(10):
                linesList.append(f.readline())
            
        linesList = list(map(str.strip, linesList))
        
        return jsonify({
            "fileName": request.args.get("filename"),
            "lines": linesList
        })
    except Exception as e:
        return jsonify({"status":"error" + e })
    
# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
