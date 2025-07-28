const express = require("express");
const { login, register } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register); // Puedes eliminar esto si no necesitas registrar desde frontend

module.exports = router;
