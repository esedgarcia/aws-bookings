const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Ruta para eliminar una habitación
router.delete('/delete/:id', async (req, res) => {
  try {
    const room = await Room.findOneAndDelete({ id: req.params.id });

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
