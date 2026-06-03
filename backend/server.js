const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Project = require("./models/Project");
const Contact = require("./models/Contact");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Flora & Fauna Maharashtra",
      description: "Educational website about Maharashtra wildlife"
    },
    {
      id: 2,
      title: "Instability",
      description: "Book recommendation platform"
    }
  ]);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message
  });

  await newContact.save();

  res.json({ message: "Message saved successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});