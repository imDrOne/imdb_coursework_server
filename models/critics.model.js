const { DataTypes } = require('sequelize')
const db = require('../utils/db.config')

const BadCritics = db.define('bad_critics', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nick_name: {
        type: DataTypes.STRING
    }
})

module.exports = BadCritics
