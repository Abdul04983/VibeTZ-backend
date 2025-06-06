const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vibetz_user:vibetz2255@cluster0.isvxnjn.mongodb.net/vibetz_db?retryWrites=true&w=majority")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
