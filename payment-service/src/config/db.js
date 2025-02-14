import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI_P = process.env.MONGO_URI_P;

if (!MONGO_URI_P) {
  console.error("❌ ERROR: La variable MONGO_URI_P no está definida.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    console.log(`🔍 Intentando conectar a MongoDB con la URI: ${MONGO_URI_P}`);
    
    await mongoose.connect(MONGO_URI_P, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (err) {
    console.error("❌ Error de conexión:", err);
    process.exit(1);
  }
};

export default connectDB;