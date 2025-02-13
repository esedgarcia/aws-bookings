Statics Service Microservice

Description

This microservice is responsible for serving static files for the booking application. It provides efficient access to CSS, JavaScript, images, and other assets needed for the frontend.

Technologies Used

Language: Python

Framework: Flask

Static File Management: Flask's built-in static file handling

Installation and Execution

Prerequisites

Python 3.8+

Installed dependencies

Installation

Clone the repository:

git clone https://github.com/esedgarcia/aws-bookings.git
cd aws-bookings/statics-service

Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Running the Microservice

python app.py

The microservice will run at http://localhost:5000.

Usage

Access a Static File

Endpoint: GET /static/<filename>

curl -X GET http://localhost:5000/static/style.css

Response:
The requested static file will be returned.

Architecture

The user requests a static file via an HTTP request.

The microservice locates the file in the static directory and serves it.

Common Errors

File not found: Ensure the requested file exists in the static/ directory.

Invalid file path: Avoid requesting files outside the allowed directories.

Contribution

If you want to contribute, fork the repository and submit a pull request with improvements.

License

This project is licensed under the MIT License.

