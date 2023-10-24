const express = require("express");
const mongoose = require("mongoose");
const app = express();
const stuffRoutes = require("./routes/stuff");

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

module.exports = app;
