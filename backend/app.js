const express = require("express");
const cors = require("cors");
const database = require("./database");
const userRoutes = require("./routes/user-routes");



const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", userRoutes);










app.listen(5036, async() => {
  await database();
  console.log("Server running on port 5036");
});