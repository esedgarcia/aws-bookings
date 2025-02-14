require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const Room = require("./models/Room");

const app = express();
connectDB();
app.use(express.json()); // Para recibir datos en formato JSON

app.post("/create", async (req, res) => {
  try {
    const { nombre, capacidad } = req.body;
    const newRoom = new Room({ nombre, capacidad });
    await newRoom.save();
    res.status(201).json(newRoom); // Retorna la habitación creada
  } catch (error) {
    res.status(400).json({ message: "Error creando la habitación" });
  }
});

app.listen(process.env.PORT, () => console.log(`Create Service corriendo en ${process.env.PORT}`));
