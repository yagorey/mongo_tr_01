const ejs   = require('ejs')
const model = require('./models/frase.model')

let jugar_con_find = (req, res) => {
    const {query, params, body} = req
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)

    const q1 = {
        author:'Anonimo'
    }
    // Solo devuelve las frases que tengan Author = 'Anonimo'
    const fn1 = await model.find(q1)
    // Solo devuelve una frase
    const fs = await model.findOne(q1)

    const q2 = {
        author:{$regex : "oni"}
    }
    const q3 = {
        author: { '$regex': 'oni', '$options': 'i' }
    }
    const fn2 = await model.find(q2)
    const fn3 = await model.find(q3)


    // Less Than => lt
    // Less Than Equals => lte
    // Greater Than => gt
    // Greater Than Equals => gte
    // Equals => eq
    // Not Equals => ne

    // data in [1,2,3,4,5,6,7,8,9]
    // In => in
    // Not In => nin

    // que el valor tenga un valor entre...
    // Between => between (array)
    // Not Between => nbetween (array)

    // Devuelve todas las frases que tengan el atributo
    // Exists => exists
    // Not Exists => notexists

    // Busqueda por frase creada antes de 1990
    const fecha = new Date(1990, 1, 1)
    const q4 = {
        createdAt: { $lt: fecha },
        frase:{ $regex : "oni" }
    }
    const fn4 = await model.find(q4)

   // And => and
   // Or => or

   // que tenga el texto 'oni' en la frase y el autor sea 'Anonimo'
    const q5 = {
        $and: [
            { frase: { $regex: 'oni' } },
            { author: 'Anonimo' }
        ]
    }
    // que tenga el texto 'oni' en la frase o el autor sea 'Anonimo'
    const q6 = {
        $or: [
            { frase: { $regex: 'oni' } },
            { author: 'Anonimo' }
        ]
    }

    // solo devuelve los autores
    const fn5 = await model.find(q4).select('_id author')



}

let mostrar_frase = (req, res) => {
    const {query, params, body} = req
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)

    const frases = await model.find({})
    // dame una frase aleatoria
    const amount = await model.find({}).count()

    const random = Math.floor(Math.random() * amount)
    const frase = await model.findOne({}).skip(random)

    // Renderizar la pagina de frase aleatoria
   ejs.renderFile('./templates/mostrar_frase.ejs', frase, {}, (err, str) => {
        if (err) {
         console.log(err)
        }
        res.send(str)
       })

}
let insertar_frase = async (request, response) => {
    // const {query, params, body} = req
    const query = req.query
    const params = req.params
    const body = req.body
    console.log('Query: ', query)
    console.log('Params: ', params)
    console.log('Body: ', body)

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
    const author = body.author || 'Anonimo'
    const frase = body.frase || 'No hay frase'

    // Guardar en la base de datos
    let modelo = new model()
    modelo.author = author
    modelo.frase = frase

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
exprots.jugar_con_find = jugar_con_find

