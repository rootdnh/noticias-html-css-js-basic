const express = require('express');
const routes = express.Router();
const db = require('./models/connection_db')
const Categorias = require('./models/categorias')
const Noticias = require('./models/noticias')



routes.get('/', (req, res)=>{
    return res.json({
        hello: "World"
    })
})
routes.post('/cadastro-de-noticia', async (req, res)=>{
    await Noticias.create(req.body);
    res.sendStatus(200);
});

routes.get('/noticias',async (req, res)=>{
    var noticias = await Noticias.findAll();
    res.send(noticias);
});

module.exports = routes;