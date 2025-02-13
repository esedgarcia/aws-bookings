# Rooms Create Service

This microservice handles the creation of room records in the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- Docker

## Setup Instructions

### Clone the Repository
git clone <repository-url>
cd rooms-create-service

### Install Dependencies
npm install

### Create a `.env` File
PORT=4091
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rooms_db

### Run the Microservice Locally
npm start

### Run with Docker
docker-compose up --build

### API Endpoints
- **POST /rooms** - Create a new room.
