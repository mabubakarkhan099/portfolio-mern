const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MongoUri;
const projectRoutes = require("./routes/projectRoutes");
// const corsOptions = { origin: 'http://localhost:3001/',
//   domainmethods: 'GET,HEAD,PUT,PATCH,POST,DELETE', allowedHeaders: ['Content-Type', 'Authorization'], credentials: true, };
// app.use(cors(corsOptions));
app.use(cors());

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use project routes
app.use("/api", projectRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
