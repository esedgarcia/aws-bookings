/**
 * @swagger
 * components:
 *   schemas:
 *     InvitationStatus:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The ID of the invitation status.
 *           example: 64f1b2c8e4b0f5a9c8f1b2c8
 *         invitationId:
 *           type: string
 *           description: The ID of the associated invitation.
 *           example: 64f1b2c8e4b0f5a9c8f1b2c8
 *         status:
 *           type: string
 *           enum: [pending, accepted, declined]
 *           description: The status of the invitation.
 *           example: pending
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the status.
 *           example: 2023-09-01T12:00:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the status.
 *           example: 2023-09-01T12:00:00Z
 *       required:
 *         - _id
 *         - invitationId
 *         - status
 *
 * /api/invitations-status:
 *   post:
 *     summary: Create a new invitation status
 *     description: Creates a new status record for an invitation.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               invitationId:
 *                 type: string
 *                 description: The ID of the invitation.
 *                 example: 64f1b2c8e4b0f5a9c8f1b2c8
 *               status:
 *                 type: string
 *                 enum: [pending, accepted, declined]
 *                 default: pending
 *                 description: The status of the invitation.
 *                 example: pending
 *     responses:
 *       201:
 *         description: Invitation status created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvitationStatus'
 *       400:
 *         description: Invalid request (e.g., missing invitationId).
 *       500:
 *         description: Internal server error.
 *
 * /api/invitations-status/{invitationId}/status:
 *   put:
 *     summary: Update the status of an invitation
 *     description: Updates the status of an existing invitation.
 *     parameters:
 *       - name: invitationId
 *         in: path
 *         required: true
 *         description: The ID of the invitation.
 *         schema:
 *           type: string
 *         example: 64f1b2c8e4b0f5a9c8f1b2c8
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, accepted, declined]
 *                 description: The new status of the invitation.
 *                 example: accepted
 *     responses:
 *       200:
 *         description: Invitation status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvitationStatus'
 *       404:
 *         description: Invitation status not found.
 *       400:
 *         description: Invalid request (e.g., invalid status).
 *       500:
 *         description: Internal server error.
 *
 * /api/invitations-status/{invitationId}:
 *   get:
 *     summary: Get the status of an invitation
 *     description: Retrieves the status of a specific invitation.
 *     parameters:
 *       - name: invitationId
 *         in: path
 *         required: true
 *         description: The ID of the invitation.
 *         schema:
 *           type: string
 *         example: 64f1b2c8e4b0f5a9c8f1b2c8
 *     responses:
 *       200:
 *         description: Invitation status retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvitationStatus'
 *       404:
 *         description: Invitation status not found.
 *       500:
 *         description: Internal server error.
 */

import express from 'express';
import {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
} from '../controllers/invitationstatusController.js';

const router = express.Router();

router.get('/', getAllStatuses);
router.get('/:id', getStatusById);
router.post('/', createStatus);
router.put('/:id', updateStatus);
router.delete('/:id', deleteStatus);

export default router;
