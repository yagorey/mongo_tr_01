const express  = require('express')
const mongoose = require('mongoose')

const database = "mongodb+srv://dev:A.joker.1@dev.kdfi4.mongodb.net/frases_aleatorias?retryWrites=true&w=majority"
//const database = "mongodb+srv://dev:12dev@cluster0.ne2og.mongodb.net/test"
const lanzarApp  =()=> {
    const app     = express()
const port    = 3000

// express body json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app static dir /public
app.use(express.static('public'))

// Routing
const router = require('./app.routing')
app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

const manejaError = (error) => {
    console.error(error)
}

mongoose.connect(database)
.then(lanzarApp)
.catch(manejaError)
