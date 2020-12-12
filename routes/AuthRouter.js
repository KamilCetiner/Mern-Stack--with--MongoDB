const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.auth_register);

router.post("/login", AuthController.auth_login)


module.exports = router;