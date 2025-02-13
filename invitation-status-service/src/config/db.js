import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    console.log(`🔍 Trying to connect to MongoDB with: ${MONGO_URI}`);
    
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Connection lost, try again:", err);
    process.exit(1);
  }
};

export default connectDB;