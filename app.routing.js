const express = require('express');
const router  = express.Router();

const fn = require('./app.functions');

router.get('/insertar', fn.insertar_frase)
router.get('/mostrar/:slug', fn.mostrar_slug)
router.get('/', fn.mostrar_frase)
router.post('/', fn.recoge_datos)

module.exports = router;