const router = require("express").Router();
//Import des controllers
const stuffCtrl = require("../controllers/stuff");

//Enregistre un objet dans la DB
router.post("/", stuffCtrl.createThing);

//Mettre à jour un objet
router.put("/:id", stuffCtrl.modifyThing);

//Supprimer un objet dans la DB
router.delete("/:id", stuffCtrl.deleteThing);

//Récupérer un objet dans la DB
router.get("/:id", stuffCtrl.getOneThing);

//Récupérer les objets dans la DB
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
