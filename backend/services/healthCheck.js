import { healthCheckJob } from "../utils/health.js";

export const startCron = (backendUrl) => {
  healthCheckJob.start();
  console.log("Health check cron job scheduled for every 14 minutes");

  return healthCheckJob;
};
