const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_udemy', 'root', 'Cocosweet0123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;