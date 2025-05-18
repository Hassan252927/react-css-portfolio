const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('MongoDB URI not found in environment variables.');
      console.log('Using memory storage for development. Data will not persist between restarts.');
      return;
    }
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.log('Using memory storage for development. Data will not persist between restarts.');
  }
};

module.exports = connectDB; 