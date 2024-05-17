

require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require('../src/Routers/routers');
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/tasks', taskRoutes); 
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));



app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
