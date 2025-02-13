# Email Renderer Microservice

## Description
This microservice is responsible for rendering and formatting email templates for the booking application in AWS. It allows dynamic content insertion into predefined email templates and generates the final HTML output ready for sending.

## Technologies Used
- **Language:** Python
- **Framework:** Flask
- **Template Engine:** Jinja2

## Installation and Execution
### Prerequisites
- Python 3.8+
- AWS CLI configured with valid credentials
- Installed dependencies

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/email-renderer
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

### Environment Variables Configuration
Create a `.env` file with the following values:
```ini
TEMPLATE_DIRECTORY=templates/
```

### Running the Microservice
```sh
python app.py
```
The microservice will run at `http://localhost:5000`.

## Usage
### Render an Email Template
**Endpoint:** `POST /render`
```sh
curl -X POST -H "Content-Type: application/json" -d '{
  "template": "booking_confirmation",
  "variables": {"name": "John Doe", "date": "2025-02-15"}
}' http://localhost:5000/render
```
**Response:**
```json
{
  "html": "<html><body><h1>Booking Confirmation</h1><p>Hello John Doe, your booking is confirmed for 2025-02-15.</p></body></html>"
}
```

## Architecture
- **The user sends a request with a template name and variables.**
- **The microservice loads the corresponding template, injects the variables, and returns the final HTML.**

## Common Errors
- **Missing template:** Ensure the requested template exists in the `templates/` directory.
- **Invalid JSON request:** Verify the request body structure.

## Contribution
If you want to contribute, fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License.


