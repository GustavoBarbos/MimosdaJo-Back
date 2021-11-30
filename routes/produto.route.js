const {Router} = require('express')
const Produto = require('./models/Produto.model')
const router = Router()

router.post('/jokes',async (req,res) => {
    
    try {
        const newProduto = await Produto.create(req.body)
        res.status(201).json({msg: "criado"})

    } catch (error) {
        res.status(500).json(error)
    }

    
})

router.get('/jokes',async (req,res) => {
    
    try {
        const newProduto = await Produto.find()
        res.status(201).json(newProduto)

    } catch (error) {
        res.status(500).json(error)
    }

    
})

module.exports = router