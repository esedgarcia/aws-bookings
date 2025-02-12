/**
 * @swagger
 * components:
 *   schemas:
 *     Invitation:
 *       type: object
 *       required:
 *         - eventId
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado por MongoDB
 *         eventId:
 *           type: string
 *           description: ID del evento
 *         email:
 *           type: string
 *           description: Correo del invitado
 *         status:
 *           type: string
 *           enum: [pending, accepted, declined]
 *           description: Estado de la invitación
 *         sentAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de envío
 *       example:
 *         id: "60f7f8f8f8f8f8f8f8f8f8f8"
 *         eventId: "123456"
 *         email: "example@mail.com"
 *         status: "pending"
 *         sentAt: "2023-02-10T12:00:00Z"
 */

/**
 * @swagger
 * /invitations:
 *   get:
 *     summary: Obtener todas las invitaciones
 *     tags: [Invitations]
 *     responses:
 *       200:
 *         description: Lista de todas las invitaciones
 */


import express from 'express';
import { createInvitation, getInvitations, updateInvitation, deleteInvitation } from '../controllers/invitationController.js';

const router = express.Router();

router.post('/', createInvitation);
router.get('/', getInvitations);
router.put('/:id', updateInvitation);
router.delete('/:id', deleteInvitation);

export default router;
