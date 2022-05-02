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