import express from 'express';
import connectDB from './config/db.js';
import paymentRoutes from './routes/paymentRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json' assert { type: "json" };

const app = express();

connectDB();

app.use(express.json());
app.use('/api', paymentRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4083;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));