import Payment from '../models/payment.js';

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

const createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
};

export { getPayments, createPayment };