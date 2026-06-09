const axios = require("axios");
const LOG_API = "http://4.224.186.213/evaluation-service/logs";
const AUTH_TOKEN = "cXuqht";
async function Log(stack, level, pkg, message) {
  try {
    const payload = {
      stack,
      level,
      package: pkg,
      message,
    };

    await axios.post(LOG_API, payload, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to send log:", error.message);
  }
}

module.exports = Log;