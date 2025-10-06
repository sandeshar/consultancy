import mongoose from "mongoose";

const connectDB = async () => {
    // Already connected or connecting? Skip
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        // Optional: exit the process in case of a fatal error
        // process.exit(1);
    }
};

export default connectDB;