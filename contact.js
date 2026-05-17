const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact — Save contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// GET /api/contact — Get all messages (protected in real use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
