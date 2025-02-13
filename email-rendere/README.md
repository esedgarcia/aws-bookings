# Invitation Microservice

## Description
This microservice is responsible for rendering a simple HTML invitation for an event. It serves as a lightweight service for displaying an invitation message.

## Technologies Used
- **Language:** PHP
- **Framework:** None (Standalone PHP)

## Installation and Execution
### Prerequisites
- PHP 7.4+ or higher

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/invitation-service
   ```

2. Running the Microservice:
   ```sh
   php -S localhost:8080
   ```
   The microservice will run at `http://localhost:8080`.

## Usage
### View Invitation
Simply visit the URL `http://localhost:8080` to view the HTML invitation.

## Docker Support

### Pulling the Docker Image
To pull the Invitation Docker image from DockerHub:
```sh
docker pull esedgarcia/invitation-service
```

### Running the Docker Container
To run the Invitation service container:
```sh
docker run -d -p 8080:8080 esedgarcia/invitation-service
```
The service will be available at `http://localhost:8080`.

## Architecture
- **The user simply requests the URL and the service responds with an invitation in HTML format.**

## Contribution
If you want to contribute, fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License.

## Docker Compose Configuration
To run the application with Docker Compose, add the following configuration to your `docker-compose.yml`:

```yaml
version: "3.8"
services:
  invitation-service:
    build: .
    ports:
      - "8080:8080"
    restart: always
```


