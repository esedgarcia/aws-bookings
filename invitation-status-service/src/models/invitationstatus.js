import mongoose from 'mongoose';

const InvitationStatusSchema = new mongoose.Schema(
  {
    invitationId: { type: String, required: true },
    status: { type: String, required: true, enum: ["pending", "accepted", "declined"] },
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: "InvitationStatus" }
);

export default mongoose.model("invitationstatus", InvitationStatusSchema);