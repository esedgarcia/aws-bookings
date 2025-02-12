import Invitation from '../models/invitation.js';

export const createInvitation = async (req, res) => {
  try {
    const invitation = new Invitation(req.body);
    await invitation.save();
    res.status(201).json(invitation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getInvitations = async (req, res) => {
  const invitations = await Invitation.find();
  res.json(invitations);
};

export const updateInvitation = async (req, res) => {
  try {
    const invitation = await Invitation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(invitation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteInvitation = async (req, res) => {
  try {
    await Invitation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Invitation deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
