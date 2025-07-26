const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/registrar', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado ✅' });
  } catch (err) {
    res.status(400).json({ error: 'No se pudo registrar', detalle: err.message });
  }
});

module.exports = router;
