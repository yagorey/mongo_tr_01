const express = require('express');
const router  = express.Router();

const fn = require('./app.functions');
const fData = require('./data.functions')

router.get('/jugar', fn.jugar_con_find)
router.get('/insertar', fn.insertar_frase)
router.get('/mostrar/:slug', fn.mostrar_slug)
router.get('/', fn.mostrar_frase)
router.post('/', fn.recoge_datos)

router.get('/crear_locales', fData.crear_locales)

module.exports = router;