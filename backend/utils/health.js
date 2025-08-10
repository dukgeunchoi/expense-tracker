import cron from "cron";
import axios from "axios";

export const pingDB = async (req, res) => {
  await mongoose.connection.db.admin().ping();
  res.status(200).json({
    status: "OK",
    db: "connected",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};

export const healthCheckJob = new cron.CronJob("*/14 * * * *", async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/health`);
    console.log("Health check performed:", response.data);
  } catch (error) {
    console.error("Health check failed:", error.message);
  }
});
