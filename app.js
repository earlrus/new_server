const express = require("express");
const cors = require("cors");
const userRouter = require("./router/userRoute");

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.use(userRouter);

app.listen(port, () => console.log("server is running on port " + port));
