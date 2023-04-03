const Sequelize = require('sequelize')
const sequelize = require('./index').sequelize

const roles = sequelize.define('roles', {
    authority: {
        type: Sequelize.ENUM('ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_USER'),
        allowNull: false,
    }
})
module.exports = roles