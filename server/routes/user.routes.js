const router = require("express").Router();
const userCtrl = require("../controllers/user.controllers");

router.post("/signup", userCtrl.signUpUser);
router.post("/login", userCtrl.logInUser);

module.exports = router;
