import mongoose from 'mongoose';

// MongoDB connection URI
const uri =
  'mongodb+srv://challenge:v9vQpYbAcmOYAvGo@development.8jpnw.mongodb.net/pulppo';

// Connect to the database
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return; // Already connected
  mongoose
    .connect(uri, {
      dbName: 'pulppo',
      autoIndex: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: any) => console.error('Error connecting to MongoDB:', err));
};
