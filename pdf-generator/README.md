PDF Generator Microservice

Description

This microservice is responsible for generating PDF documents for the booking application. It allows the creation of dynamic PDFs based on templates and provided data.

Technologies Used

Language: Python

Framework: Flask

PDF Generation Library: ReportLab

Installation and Execution

Prerequisites

Python 3.8+

Installed dependencies

Installation

Clone the repository:

git clone https://github.com/esedgarcia/aws-bookings.git
cd aws-bookings/pdf-generator

Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Running the Microservice

python app.py

The microservice will run at http://localhost:5000.

Usage

Generate a PDF Document

Endpoint: POST /generate

curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Booking Confirmation",
  "content": "Your booking is confirmed for 2025-02-15."
}' http://localhost:5000/generate

Response:
A downloadable PDF file will be returned.

Architecture

The user sends a request with the title and content for the PDF.

The microservice generates the PDF dynamically and returns it.

Common Errors

Missing request parameters: Ensure all required fields are provided in the request body.

PDF generation failure: Check for library dependencies and valid data inputs.

Contribution

If you want to contribute, fork the repository and submit a pull request with improvements.

License

This project is licensed under the MIT License.

