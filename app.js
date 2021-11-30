const express = require('express')
require('./config/db.config')

const Produto = require('./models/Produto.model')
const Artesanato = require('./models/Artesanato.model')
const Toalhas = require('./models/Toalhas.model')
const PanoDePrato = require('./models/PanoDePrato.model')



const app =  express()

const cors = (req,res,next) => {

    res.setHeader('access-control-allow-origin', '*')
    next()

}
app.use(express.json())

app.use(cors)

app.post('/produtos',async (req,res) => {
    
    try {
        const newProduto = await Produto.create(req.body)
        res.status(201).json({msg: "criado"})

    } catch (error) {
        res.status(500).json(error)
    }

    
})

app.get('/produtos',async (req,res) => {
    
    try {
        const newProduto = await Produto.find()
        res.status(201).json(newProduto)

    } catch (error) {
        res.status(500).json(error)
    }

})

app.post('/artesanatos',async (req,res) => {
    
    try {
        const newProduto = await Artesanato.create(req.body)
        res.status(201).json({msg: "criado"})

    } catch (error) {
        res.status(500).json(error)
    }

    
})

app.get('/artesanatos',async (req,res) => {
    
    try {
        const newProduto = await Artesanato.find()
        res.status(201).json(newProduto)

    } catch (error) {
        res.status(500).json(error)
    }

})

app.post('/toalhas',async (req,res) => {
    
    try {
        const newProduto = await Toalhas.create(req.body)
        res.status(201).json({msg: "criado"})

    } catch (error) {
        res.status(500).json(error)
    }

    
})

app.get('/toalhas',async (req,res) => {
    
    try {
        const newProduto = await Toalhas.find()
        res.status(201).json(newProduto)

    } catch (error) {
        res.status(500).json(error)
    }

})

app.post('/panodeprato',async (req,res) => {
    
    try {
        const newProduto = await PanoDePrato.create(req.body)
        res.status(201).json({msg: "criado"})

    } catch (error) {
        res.status(500).json(error)
    }

    
})

app.get('/panodeprato',async (req,res) => {
    
    try {
        const newProduto = await PanoDePrato.find()
        res.status(201).json(newProduto)

    } catch (error) {
        res.status(500).json(error)
    }

})




app.listen(5000, () => console.log('server listen 5000'))