import { pingDB } from "../utils/health.js";

export const checkHealth = async (req, res) => {
  try {
    pingDB(req, res);
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(500).json({
      status: "Error",
      db: "disconnected",
      error: error.message,
    });
  }
};
