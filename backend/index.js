const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");
const courseRoutes = require("./routes/course.route")
const cors = require("cors");

const PORT = 5505;
const uri = "mongodb://localhost:27017/academy";
app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

mongoose.connect(uri).then(() => console.log("Successfully Connected"));

app.listen(PORT, () => {
  console.log(`Running port ${PORT}`);
});
