const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    title     : { type: String, default: 'Gollum' },
    tengoDolor: { type: Boolean, default: true },
    dia_semana: { type: String, default: 'Lunes' },
    es_resaca : { type: Boolean, default: true },
    locales   : [
        {
            type: Schema.Types.ObjectId,
            ref : 'locales'
        }
    ],
    cubatas:[
        {
            tipo_bebida: {
                type: Schema.Types.ObjectId,
                ref : 'bebida'
            },
            cantidad: {
                type   : Number,
                default: 1
            }
        }
    ]
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('noches', Esquema);

module.exports = model


/*
{
    "id" : 1,
    "title" : "Hola, Ibuprofeno",
    "tengoDolor" : true,
    "dia_semana" : "Domingo",
    "es_resaca" : true,
    "locales":{
        "grietas":true,
        "mosquito":false,
        "dul_coruna":true,
        "sham_rock":true,
        "studio_80":true,
        "garibaldi":true,
        "claro_boba":true
    },
    "cubatas" : [
        {
            "ron" : 10
        },
        {
            "rtvg" : 1
        },
        {
            "ronroneo" : 5
        },
        {
            "cervezas" : 666
        }
    ],
    "monedas" : [
        1,
        2,
        5,
        10,
        20,
        50,
        100,
        200,
        500
    ]
}

//*/