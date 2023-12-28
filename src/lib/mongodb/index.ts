import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

// Initialize connection
const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1);
  }
}

export default connectToDB;