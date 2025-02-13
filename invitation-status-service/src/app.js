import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import invitationStatusRoutes from './routes/invitationstatusRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/invitation-status', invitationStatusRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((error) => console.error('❌ Could not connect to MongoDB:', error));

  const PORT = process.env.PORT || 4082; // Define un puerto por defecto si no está en las variables de entorno

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
