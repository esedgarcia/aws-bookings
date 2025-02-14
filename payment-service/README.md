# Payment Service

A payment microservice built with Node.js, MongoDB Atlas, Express, and Swagger.

## Technologies Used
- Node.js
- Express
- MongoDB Atlas
- Docker
- Swagger

## How to Run Locally
```bash
npm install
node app.js
```

## How to Build and Run the Docker Container
```bash
docker build -t payment-service .
docker run -p 4083:4083 payment-service
```

## How to Push the Container to Docker Hub
```bash
docker tag payment-service user/payment-service
 docker login
 docker push user/payment-service
```

## How to Pull and Run from Docker Hub
```bash
docker pull user/payment-service
docker run -p 4083:4083 user/payment-service
```
