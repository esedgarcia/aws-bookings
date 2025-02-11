import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import invitationRoutes from './routes/invitationRoutes.js';
import swaggerDocs from './config/swagger.js';

// Add Swagger documentation to the app
swaggerDocs(app);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/invitations', invitationRoutes);

const PORT = process.env.PORT || 4081;
app.listen(PORT, () => console.log(`invitations-service server running on ${PORT}`));
