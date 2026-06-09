require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("../logging_middleware/logger");
const notificationRoutes = require(
  "./routes/notificationRoutes"
);
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(
  "/api/v1/notifications",
  notificationRoutes
);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) =>
    console.log(err)
  );
app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});
