const Sequelize = require('sequelize');
const db = require('./connection_db');

const Categorias = db.define('Categorias', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

Categorias.sync();

module.exports = Categorias;