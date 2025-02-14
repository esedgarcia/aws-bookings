# Rooms Read Service

This microservice handles retrieving room records from the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Docker

## Setup Instructions

### Clone the Repository
git clone <repository-url>
cd rooms-read-service

### Install Dependencies
npm install

### Create a `.env` File
PORT=4092
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rooms_db

### Run the Microservice Locally
npm start

### Run with Docker
docker-compose up --build

### API Endpoints
- **GET /rooms** - Retrieve all rooms.
- **GET /rooms/:id** - Retrieve a specific room by ID.
