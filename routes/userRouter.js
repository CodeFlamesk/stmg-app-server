const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userController")

router.post("/registration", UserController.registration)
router.post("/login" , UserController.login)
router.post("/logout", UserController.logout)
router.get("/activate/:link", UserController.activate)
router.get("/refresh", UserController.refresh)

module.exports = router