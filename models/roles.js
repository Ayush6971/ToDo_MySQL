const Sequelize = require('sequelize')
const sequelize = require('./index').sequelize

const roles = sequelize.define('roles', {
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = roles