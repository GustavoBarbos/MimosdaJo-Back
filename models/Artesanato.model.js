const { Schema, model } = require('mongoose')


const ArtesanatoSchema = new Schema(
    {
        name: { type: String, unique: true, required: true },
        oldprice : Number,
        price: Number,
        image: String,
        images: [String],
        desc: String,
        quantidade: String

    }
)

module.exports = model("Artesanato", ArtesanatoSchema)