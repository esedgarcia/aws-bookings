require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const Room = require("./models/Room");

const app = express();
connectDB();
app.use(express.json());

app.put("/update/:id", async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando la habitación" });
  }
});

app.listen(process.env.PORT, () => console.log(`Update Service corriendo en ${process.env.PORT}`));



