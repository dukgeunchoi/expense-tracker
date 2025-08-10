import cron from "cron";
import axios from "axios";

export const startCron = (backendUrl) => {
  const healthCheckJob = new cron.CronJob("*/14 * * * *", async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/health`);
      console.log("Health check performed:", response.data);
    } catch (error) {
      console.error("Health check failed:", error.message);
    }
  });

  healthCheckJob.start();
  console.log("Health check cron job scheduled for every 14 minutes");

  return healthCheckJob;
};
