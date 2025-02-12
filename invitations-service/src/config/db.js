import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: La variable MONGO_URI no está definida.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    console.log(`🔍 Intentando conectar a MongoDB con la URI: ${MONGO_URI}`);
    
    await mongoose.connect(MONGO_URI, {
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
