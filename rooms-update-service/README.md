# Rooms Update Service

This microservice handles updating existing room records in the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Docker

## Setup Instructions

### Clone the Repository
git clone <repository-url>
cd rooms-update-service

### Install Dependencies
npm install

### Create a `.env` File
PORT=4093
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rooms_db

### Run the Microservice Locally
npm start

### Run with Docker
docker-compose up --build

### API Endpoints
- **PUT /rooms/:id** - Update a room by ID.
