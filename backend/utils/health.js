import mongoose from "mongoose";

export const pingDB = async (req, res) => {
  await mongoose.connection.db.admin().ping();
  res.status(200).json({
    status: "OK",
    db: "connected",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
