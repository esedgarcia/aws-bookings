const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Ruta para crear una nueva habitación
router.post('/create', async (req, res) => {
  try {
    const { id, nombre, capacidad } = req.body;

    // Verificar si la habitación con el mismo id ya existe
    const roomExists = await Room.findOne({ id });
    if (roomExists) {
      return res.status(400).json({ message: 'Room with this ID already exists' });
    }

    // Crear la nueva habitación
    const newRoom = new Room({
      id,
      nombre,
      capacidad,
    });

    // Guardar la habitación en la base de datos
    await newRoom.save();

    // Responder con la habitación creada
    res.status(201).json(newRoom);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
