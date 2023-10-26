const router = require("express").Router();
const authorization = require("../middlewares/auth");
const multer = require("../middlewares/multer.config");

//Import des controllers
const stuffCtrl = require("../controllers/stuff.controllers");

//Récupérer les objets dans la DB
router.get("/", authorization, stuffCtrl.getAllThings);

//Enregistre un objet dans la DB
router.post("/", authorization, multer, stuffCtrl.createThing);

//Récupérer un objet dans la DB
router.get("/:id", authorization, stuffCtrl.getOneThing);

//Mettre à jour un objet
router.put("/:id", authorization, multer, stuffCtrl.modifyThing);

//Supprimer un objet dans la DB
router.delete("/:id", authorization, stuffCtrl.deleteThing);

module.exports = router;
