import express from 'express';
import { createInvitation, getInvitations, updateInvitation, deleteInvitation } from '../controllers/invitationController.js';

const router = express.Router();

router.post('/', createInvitation);
router.get('/', getInvitations);
router.put('/:id', updateInvitation);
router.delete('/:id', deleteInvitation);

export default router;
