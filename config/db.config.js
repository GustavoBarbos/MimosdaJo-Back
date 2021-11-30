const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://gustavobs:22722722gu@cluster0.naiwk.mongodb.net/lojajey?retryWrites=true&w=majority"

const connect = async () => {

    const connection = await mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`DataBase connected`)

}

connect()