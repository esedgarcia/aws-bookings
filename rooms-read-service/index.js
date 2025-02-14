require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const Room = require("./models/Room");

const app = express();
connectDB();
app.use(express.json());

app.get("/read", async (req, res) => {
  try {
    const rooms = await Room.find(); // Devuelve todas las habitaciones
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo habitaciones" });
  }
});

app.listen(process.env.PORT, () => console.log(`Read Service corriendo en ${process.env.PORT}`));
