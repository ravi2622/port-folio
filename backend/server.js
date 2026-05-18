const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/contact", require("./routes/contact"));

if (isProduction) {
  const distPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
};

const mongoUri = process.env.MONGO_URI;

if (!mongoUri && isProduction) {
  console.error("MONGO_URI is missing. Add it in Render Environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoUri || "mongodb://127.0.0.1:27017/portfolio")
  .then(() => {
    console.log("MongoDB connected");
    startServer();
  })
  .catch((err) => {
    console.error("MongoDB error:", err.message);
    if (isProduction) process.exit(1);
    console.log("Starting without MongoDB (dev only)");
    startServer();
  });
