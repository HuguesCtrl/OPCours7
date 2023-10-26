const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const stuffRoutes = require("./routes/stuff.routes");
const userRoutes = require("./routes/user.routes");

//Liaison à la DB
mongoose
  .connect(
    "mongodb+srv://Hugues:WcuB6Byz8NiYo5Yh@cluster0.udxjyha.mongodb.net/Thing",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//Paramétrer les headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Interprêter le JSON
app.use(express.json());

//Import des routes
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
