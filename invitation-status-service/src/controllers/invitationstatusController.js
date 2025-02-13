import InvitationStatus from '../models/invitationstatus.js';

// Obtener todos los estados de invitación
export const getAllStatuses = async (req, res) => {
  try {
    const statuses = await InvitationStatus.find();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estados de invitación', error });
  }
};

// Obtener un estado por ID
export const getStatusById = async (req, res) => {
  try {
    const status = await InvitationStatus.findById(req.params.id);
    if (!status) return res.status(404).json({ message: 'Estado no encontrado' });

    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el estado de invitación', error });
  }
};

// Crear un nuevo estado de invitación
export const createStatus = async (req, res) => {
  try {
    const newStatus = new InvitationStatus(req.body);
    await newStatus.save();
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el estado de invitación', error });
  }
};

// Actualizar un estado de invitación por ID
export const updateStatus = async (req, res) => {
  try {
    const updatedStatus = await InvitationStatus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStatus) return res.status(404).json({ message: 'Estado no encontrado' });

    res.status(200).json(updatedStatus);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estado de invitación', error });
  }
};

// Eliminar un estado de invitación por ID
export const deleteStatus = async (req, res) => {
  try {
    const deletedStatus = await InvitationStatus.findByIdAndDelete(req.params.id);
    if (!deletedStatus) return res.status(404).json({ message: 'Estado no encontrado' });

    res.status(200).json({ message: 'Estado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el estado de invitación', error });
  }
};
