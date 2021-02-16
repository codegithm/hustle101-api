const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const clientRoutes = require("./routes/clientRoutes");
const requestRoutes = require("./routes/requestRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/client", clientRoutes);
app.use("/requests", requestRoutes);

mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("app running...");
    });
  })
  .catch((err) => console.log(err));
