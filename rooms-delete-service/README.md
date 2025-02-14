# Rooms Delete Service

This microservice handles deleting room records from the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Docker

## Setup Instructions

### Clone the Repository
git clone <repository-url>
cd rooms-delete-service

### Install Dependencies
npm install

### Create a `.env` File
PORT=4094
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rooms_db

### Run the Microservice Locally
npm start

### Run with Docker
docker-compose up --build

### API Endpoints
- **DELETE /rooms/:id** - Delete a room by ID.
