const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

function validateMongoUri(uri) {
  if (!uri) return "MONGO_URI is missing";
  const trimmed = uri.trim();
  if (trimmed.includes("<") || trimmed.includes(">")) {
    return "Replace <db_password> with your real Atlas password";
  }
  if (!trimmed.startsWith("mongodb://") && !trimmed.startsWith("mongodb+srv://")) {
    return "MONGO_URI must start with mongodb+srv://";
  }
  if (!trimmed.includes(".mongodb.net")) {
    return "MONGO_URI must include cluster0.brkpl.mongodb.net";
  }
  if (/\s/.test(trimmed)) return "MONGO_URI must not contain spaces";
  return null;
}

const mongoUri = (process.env.MONGO_URI || "").trim();
const uriError = validateMongoUri(mongoUri);

app.get("/api/health", (_req, res) => {
  const dbReady = mongoose.connection.readyState === 1;
  res.json({
    ok: true,
    db: dbReady ? "connected" : "disconnected",
    mongoConfigured: Boolean(mongoUri),
    mongoUriError: uriError || null,
  });
});

app.use("/api/contact", require("./routes/contact"));

if (isProduction) {
  const distPath = path.join(__dirname, "../frontend/dist");
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    console.error("frontend/dist not found — run build step first");
  }
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  if (uriError) {
    console.error("MONGO_URI problem:", uriError);
    console.error("Fix in Render → Environment → MONGO_URI");
  } else if (mongoUri) {
    connectMongo();
  } else if (isProduction) {
    console.error("MONGO_URI not set. Add it in Render Environment variables.");
  } else {
    connectMongo("mongodb://127.0.0.1:27017/portfolio");
  }
});

function connectMongo(uri = mongoUri) {
  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("MongoDB error:", err.message);
      console.error("Check password is URL-encoded (@ → %40). Retry in 10s...");
      setTimeout(() => connectMongo(uri), 10000);
    });
}
