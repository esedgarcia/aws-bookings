# Healthcheck Microservice

## Description
This microservice is designed to monitor the health of the AWS Bookings application. It provides a simple endpoint to check the status and availability of the service.

## Features
- **Health Check Endpoint:** `/health` to verify service status.
- **Simple and Lightweight:** Easy to deploy with minimal dependencies.
- **Integration Ready:** Compatible with monitoring tools and load balancers.

## Installation and Execution
### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/healthcheck
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Microservice
```sh
npm start
```
The service will be available at `http://localhost:3000/health`.

## Usage
To check the health of the service, make a GET request to the `/health` endpoint:
```sh
curl http://localhost:3000/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2023-10-05T12:34:56.789Z"
}
```

## Deployment
Deploy this microservice to AWS using services like AWS Lambda or ECS. Configure API Gateway to expose the `/health` endpoint.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
