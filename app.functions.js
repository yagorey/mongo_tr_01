const ejs   = require('ejs')
const model = require('./models/frase.model')

let mostrar_frase = (req, res) => {
    const {query, params, body} = req
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)


    // Renderizar la pagina de frase aleatoria
    let queries = {
        frase: 'fasfasf asf asf asf asf asf asf asf as fas fas',
        author: 'M.R.R. Martin'
    }
   ejs.renderFile('./templates/mostrar_frase.ejs', queries, {}, (err, str) => {
        if (err) {
         console.log(err)
        }
        res.send(str)
       })

}
let insertar_frase = (req, res) => {

    let callback = (error, str) => {
        if (error) {
            console.log(error)
           }
           res.send(str)
    }

    ejs.renderFile('./templates/insertar_frase.ejs', {}, {}, callback)
 }

 let recoge_datos = async (req, res) => {
    const {query, params, body} = req
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)

    // Esto es lo que hay que guardar en la base de datos
    const author = body.author
    const frase = body.frase

    // Guardar en la base de datos
    let modelo = new model()
    modelo.author = author
    modelo.frase = frase
    modelo = await modelo.save()

    modelo.save().then((data)=>{
        console.log('Datos guardados')
        console.debug(data)

         // redireccionar a /insertar
        res.redirect('/insertar')
    }).catch((error)=>{
        console.error(error)
    })


}

const mostrar_slug = (req, res) => {
    const {query, params, body} = req
    console.log('===================')
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)
    console.log('===================')

    res.redirect('/insertar')
}

exports.mostrar_slug   = mostrar_slug
exports.recoge_datos   = recoge_datos
exports.insertar_frase = insertar_frase
exports.mostrar_frase  = mostrar_frase


