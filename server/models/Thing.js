const mongoose = require("mongoose");

//Permet de créer un schéma pour notre base de données MongoDB
const thingShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//Méthode model transforme le schéma en modèle utilisable
module.exports = mongoose.model("Thing", thingShema);
