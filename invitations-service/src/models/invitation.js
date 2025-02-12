import mongoose from 'mongoose';

const invitationSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  sentAt: { type: Date, default: Date.now }
});

const Invitation = mongoose.model('Invitation', invitationSchema, 'invitations');

export default Invitation;
