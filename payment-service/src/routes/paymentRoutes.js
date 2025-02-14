import express from 'express';
import { getPayments, createPayment } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/payments', getPayments);
router.post('/payments', createPayment);

export default router;