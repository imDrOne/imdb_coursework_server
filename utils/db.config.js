const {Sequelize} = require('sequelize')

const DATABASE = process.env.DATABASE || 'postgres'
const USER = process.env.USER || 'postgres'
const PSWD = process.env.PSWD || '967207'
const options = {
    host: process.env.HOST || 'localhost',
    dialect: 'postgres',
    schema: 'main',
    define: {
        timestamps: false
    },
}

const sequelize = new Sequelize(DATABASE, USER, PSWD, options)

module.exports = sequelize
