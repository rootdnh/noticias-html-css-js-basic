const Sequelize = require('sequelize');
const db = require('./connection_db');
const Categorias = require('./categorias');

const Noticias = db.define('Noticias', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    noticia: {  
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: Categorias,
            key: Categorias.id
        }
    }
})

Noticias.sync();

module.exports = Noticias;