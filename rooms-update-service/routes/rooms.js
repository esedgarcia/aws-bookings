const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Ruta para actualizar una habitación
router.put('/update/:id', async (req, res) => {
  try {
    const { nombre, capacidad } = req.body;

    // Buscar la habitación por id y actualizar
    const room = await Room.findOneAndUpdate(
      { id: req.params.id },
      { nombre, capacidad },
      { new: true } // Devuelve el objeto actualizado
    );

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json(room);
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

