const express = require("express");
const authRouter = require("./routes/auth.js");
const taskRouter = require("./routes/task.js");

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!!");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
