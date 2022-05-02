const mLocales = require('./models/locales.model')

const crear_locales = async (req, res) => {

    const locales = [
        { nombre: 'grietas', direccion: 'Calle 01' },
        { nombre: 'mosquito', direccion: 'Calle 01' },
        { nombre: 'dul_coruna', direccion: 'Calle 01' },
        { nombre: 'sham_rock', direccion: 'Calle 01' },
        { nombre: 'studio_80', direccion: 'Calle 01' },
        { nombre: 'garibaldi', direccion: 'Calle 01' },
        { nombre: 'claro_boba', direccion: 'Calle 01' }
    ]
    for (let idx = 0; idx < locales.length; idx++) {
        const local = locales[idx]
        const local_nuevo = new mLocales(local)
        await local_nuevo.save()
    }

    res.send('ok')
}

exports.crear_locales = crear_locales

const mBebidas = require('./models/bebidas.model')

const crear_bebidas = async (req, res) => {

    const bebidas = [
        { nombre: 'alcohol1', tipo: 'cerveza' },
        { nombre: 'alcohol2', tipo: 'cachaça' },
        { nombre: 'alcohol3', tipo: 'absenta' },
        { nombre: 'alcohol4', tipo: 'ron' },
        { nombre: 'alcohol5', tipo: 'tequila' },
        { nombre: 'alcohol6', tipo: 'vodka' },
        { nombre: 'alcohol7', tipo: 'ginebra' }
    ]
    for (let idx = 0; idx < bebidas.length; idx++) {
        const bebida = bebidas[idx]
        const bebida_nuevo = new mBebidass(bebida)
        await bebida_nuevo.save()
    }

    res.send('ok')
}
//const database = "mongodb+srv://dev:12dev@cluster0.ne2og.mongodb.net/test"
exports.crear_bebidas = crear_bebidas