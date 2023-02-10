require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const exerciseRoutes = require("./routes/exerciseRoute");

// express app
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/exercises", exerciseRoutes);

// port
const port = process.env.PORT || 8000;

// connect to db
mongoose.set("strictQuery", false); // optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to db & listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
