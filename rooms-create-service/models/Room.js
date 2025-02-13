const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  capacidad: { type: Number, required: true }
});

module.exports = mongoose.model("Room", RoomSchema);
