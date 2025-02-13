Healthcheck Microservice
This is a simple health check microservice designed to monitor the status of the AWS Bookings application. It provides an endpoint to verify the health and availability of the service.

Overview
The healthcheck microservice is a lightweight component that responds to HTTP requests with the status of the service. It is typically used to ensure that the application is running correctly and is accessible.

Features
Health Check Endpoint: Provides a /health endpoint to check the service status.

Simple and Lightweight: Minimal dependencies and easy to deploy.

Integration Ready: Designed to integrate with monitoring tools and load balancers.

Getting Started
Prerequisites
Node.js (version 14 or higher)

npm or yarn

AWS account (if deploying to AWS)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/esedgarcia/aws-bookings.git
cd aws-bookings/healtcheck
Install dependencies:

bash
Copy
npm install
Start the service:

bash
Copy
npm start
The service will be available at http://localhost:3000/health.

Usage
To check the health of the service, make a GET request to the /health endpoint:

bash
Copy
curl http://localhost:3000/health
Response:

json
Copy
{
  "status": "OK",
  "timestamp": "2023-10-05T12:34:56.789Z"
}
Deployment
This microservice can be deployed to AWS using services like AWS Lambda, API Gateway, or ECS. Ensure that the necessary IAM roles and permissions are configured.

Example: Deploying with AWS Lambda
Package the application:

bash
Copy
npm run package
Deploy using the AWS CLI or AWS Management Console.

Configure API Gateway to expose the /health endpoint.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.