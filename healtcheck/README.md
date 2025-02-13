# Healthcheck Microservice

## Description
This is a simple health check microservice written in Go. It provides an endpoint to verify the health and availability of the AWS Bookings application. The service returns an "OK" status when accessed.

## Technologies Used
- **Language:** Go
- **Framework:** None (Standard Go library)

## Installation and Execution
### Prerequisites
- Go 1.16+ installed

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/healthcheck
   ```
2. Build the Go application:
   ```sh
   go build -o healthcheck
   ```

### Running the Microservice
```sh
./healthcheck
```
The service will run at `http://localhost:8087/health`.

## Usage
### Health Check Endpoint
**Endpoint:** `GET /health`
```sh
curl http://localhost:8087/health
```

**Response:**
```text
OK
```

## Docker Support

### Pulling the Docker Image
To pull the Healthcheck Docker image from DockerHub:
```sh
docker pull esedgarcia/healthcheck
```

### Running the Docker Container
To run the Healthcheck container:
```sh
docker run -d -p 8087:8087 esedgarcia/healthcheck
```
The service will be available at `http://localhost:8087`.

## Architecture
- The user sends a GET request to the `/health` endpoint.
- The microservice returns an "OK" response indicating the service is healthy.

## Common Errors
- **Service not running:** Ensure the service is up and listening on the correct port.
- **Invalid endpoint:** Make sure the correct endpoint `/health` is being called.

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
      - "8087:8087"
    restart: always
```
