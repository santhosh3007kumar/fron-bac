const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend/src")));

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Santhosh DevOps App 🚀" });
});

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});