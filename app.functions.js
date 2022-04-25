const ejs      = require('ejs')

let mostrar_frase = (req, res) => {
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

 let recoge_datos = (req, res) => {
    const {query, params, body} = req
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)

    // Esto es lo que hay que guardar en la base de datos
    const author = body.author
    const frase = body.frase

    // redireccionar a /insertar
    res.redirect('/insertar')
}

exports.recoge_datos   = recoge_datos
exports.insertar_frase = insertar_frase
exports.mostrar_frase  = mostrar_frase


