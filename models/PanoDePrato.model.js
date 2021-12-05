const { Schema, model } = require('mongoose')


const PanoDePratoSchema = new Schema(
    {
        name: String,
        oldprice : Number,
        price: Number,
        image: String,
        images: [String],
        desc: String,
        quantidade: String

    }
)

module.exports = model("PanoDePrato", PanoDePratoSchema)