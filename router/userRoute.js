const express = require("express");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/user", authMiddleware, (req, res) => {
  res.status(200).send(`Welcome ${req.name}`);
});

module.exports = userRouter;
