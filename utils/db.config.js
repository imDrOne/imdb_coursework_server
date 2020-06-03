const {Sequelize} = require('sequelize')

const DATABASE = 'postgres'
const USER = 'postgres'
const PSWD = '967207'
const options = {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'main',
    define: {
        timestamps: false
    },
}

const sequelize = new Sequelize(DATABASE, USER, PSWD, options)

module.exports = sequelize
