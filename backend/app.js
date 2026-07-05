const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./database");
const User = require("./schema/user");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(
      `Received Post Request with name: ${name}, email: ${email}, password: ${password}`
    );

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(user);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

app.get("/", async(req, res) => {
    const totalUsers = await User.find()
    res.json(totalUsers)
});

app.listen(5036, async() => {
  await database();
  console.log("Server running on port 5036");
});