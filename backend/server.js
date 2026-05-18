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

function validateMongoUri(uri) {
  if (!uri || typeof uri !== "string") {
    return "MONGO_URI is missing.";
  }
  const trimmed = uri.trim();
  if (trimmed.includes("<") || trimmed.includes(">")) {
    return "MONGO_URI still contains <db_password>. Replace it with your real Atlas password.";
  }
  if (!trimmed.startsWith("mongodb://") && !trimmed.startsWith("mongodb+srv://")) {
    return "MONGO_URI must start with mongodb+srv:// or mongodb://";
  }
  if (!trimmed.includes(".mongodb.net")) {
    return "MONGO_URI must include your Atlas host (e.g. cluster0.brkpl.mongodb.net)";
  }
  if (trimmed.includes(" ") || trimmed.includes("\n")) {
    return "MONGO_URI must not contain spaces or line breaks.";
  }
  return null;
}

const mongoUri = (process.env.MONGO_URI || "").trim();
const uriError = validateMongoUri(mongoUri);

if (uriError && isProduction) {
  console.error(uriError);
  console.error("Example: mongodb+srv://ravi2622:YOUR_PASSWORD@cluster0.brkpl.mongodb.net/portfolio?retryWrites=true&w=majority");
  process.exit(1);
}

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
    if (isProduction) {
      console.error("Check MONGO_URI on Render. Password with @ # % must be URL-encoded.");
      process.exit(1);
    }
    console.log("Starting without MongoDB (dev only)");
    startServer();
  });
