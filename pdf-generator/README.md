# PDF Generator Microservice

## Description
This microservice generates dynamic PDF documents using Go. It accepts a request, generates a PDF document with custom content, and returns it as a downloadable PDF.

## Technologies Used
- **Language:** Go
- **PDF Generation Library:** gofpdf

## Installation and Execution
### Prerequisites
- Go 1.16+ installed
- Installed dependencies

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/pdf-generator
   ```
2. Build the Go application:
   ```sh
   go build -o pdf-generator .
   ```

### Running the Microservice
```sh
./pdf-generator
```
The microservice will run at `http://localhost:8081`.

## Usage
### Generate a PDF Document
**Endpoint:** `GET /pdf`
```sh
curl -X GET http://localhost:8081/pdf
```
**Response:**
A downloadable PDF file will be returned.

## Docker Support

### Pulling the Docker Image
To pull the PDF Generator Docker image from DockerHub:
```sh
docker pull esedgarcia/pdf-generator
```

### Running the Docker Container
To run the PDF Generator container:
```sh
docker run -d -p 8081:8081 esedgarcia/pdf-generator
```
The service will be available at `http://localhost:8081`.

## Architecture
- The user sends a GET request to the `/pdf` endpoint.
- The microservice generates the PDF document dynamically and returns it.

## Common Errors
- **Missing request:** Ensure you are sending the request to the correct endpoint `/pdf`.
- **PDF generation failure:** Check for issues in the PDF generation logic.

## Contribution
If you want to contribute, fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License.

## Docker Compose Configuration
To run the application with Docker Compose, add the following configuration to your `docker-compose.yml`:

```yaml
version: "3.8"
services:
  pdf-generator:
    build: .
    ports:
      - "8081:8081"
    restart: always
```

