# Statics Service Microservice

## Description
This microservice is responsible for serving static files for the booking application. It provides efficient access to CSS, JavaScript, images, and other assets needed for the frontend.

## Technologies Used
- **Language:** Python
- **Framework:** Flask
- **Static File Management:** Flask's built-in static file handling

## Installation and Execution
### Prerequisites
- Python 3.8+
- Installed dependencies

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/statics-service
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

### Running the Microservice
```sh
python app.py
```
The microservice will run at `http://localhost:5000`.

## Usage
### Access a Static File
**Endpoint:** `GET /static/<filename>`
```sh
curl -X GET http://localhost:5000/static/style.css
```

**Response:**  
The requested static file will be returned.

## Docker Support

### Pulling the Docker Image
To pull the Statics Service Docker image from DockerHub:
```sh
docker pull esedgarcia/statics-service
```

### Running the Docker Container
To run the Statics Service container:
```sh
docker run -d -p 5000:5000 esedgarcia/statics-service
```
The service will be available at `http://localhost:5000`.

## Architecture
- The user requests a static file via an HTTP request.
- The microservice locates the file in the static directory and serves it.

## Common Errors
- **File not found:** Ensure the requested file exists in the `static/` directory.
- **Invalid file path:** Avoid requesting files outside the allowed directories.

## Contribution
If you want to contribute, fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License.

## Docker Compose Configuration
To run the application with Docker Compose, add the following configuration to your `docker-compose.yml`:

```yaml
version: "3.8"
services:
  go-app:
    build: .
    ports:
      - "8082:8082"
    restart: always
```
