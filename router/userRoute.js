const express = require("express");
const authMiddleware = require("../middleware/auth");
const {Worker} =require("worker_threads")

const userRouter = express.Router();

userRouter.post("/user", authMiddleware, (req, res) => {
  res.status(200).send(`Welcome ${req.name}`);
});

// threads example routes

userRouter.get("/non-blocking", (req, res) => {
  res.status(200).send("non blocking");
});

userRouter.get("/blocking", (req, res) => {
   const worker=new Worker("../threads/abc.js");

   worker.on("message",(data)=>res.status(200).send(`Non Blocking Counter: ${data}`))

   worker.on("error",(error)=>res.status(400).send("Error",error.message))
});

module.exports = userRouter;
