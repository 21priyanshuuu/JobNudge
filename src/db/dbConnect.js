import mongoose from "mongoose";
const connection = {};
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("db connect error", error);
  }
}
export default dbConnect;
