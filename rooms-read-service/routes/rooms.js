const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Ruta para obtener todas las habitaciones
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find(); // Obtener todas las habitaciones
    res.status(200).json(rooms); // Responder con las habitaciones
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Ruta para obtener una habitación por su id
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findOne({ id: req.params.id }); // Buscar por id

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json(room); // Responder con la habitación encontrada
  } catch (error) {
    console.error('Error fetching room:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
