const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

router.get("/me", verifyToken, (req, res) => {
  res.json({ message: "Karibu " + req.user.id });
});

module.exports = router;
