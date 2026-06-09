const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["PLACEMENT", "EVENT", "RESULT", "GENERAL"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model(
  "Notification",
  notificationSchema
);
