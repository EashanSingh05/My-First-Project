const express = require("express");
const cors = require("cors");
const database = require("./database");
const userRoutes = require("./routes/user-routes");
const adminRoutes = require("./routes/admin-routes")



const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRoutes);
// /user/create-user
// /user/get-user

app.use('/admin', adminRoutes)








app.listen(5036, async() => {
  await database();
  console.log("Server running on port 5036");
});