const {DataTypes} = require('sequelize')
const db = require('../utils/db.config')

const TopFilms = db.define('tops', {
    id_film: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    avgfilm: {
        type: DataTypes.INTEGER
    },
    img: {
        type: DataTypes.STRING
    }
})

const FilmsAndTags = db.define('films_and_tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    film_name: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    release: {
        type: DataTypes.DATE
    },
    tag_name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    }
})

module.exports = {
    TopFilms,
    FilmsAndTags
}
