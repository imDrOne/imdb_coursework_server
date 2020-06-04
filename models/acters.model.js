const { DataTypes, QueryTypes } = require('sequelize')
const db = require('../utils/db.config')

const ActersAtTopFilms = db.define('topacters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    acter: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    }
})

const ActersAtTopDirectors = db.define('acters_from_tops_directors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    acter: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.INTEGER
    },
    acter_avatar: {
        type: DataTypes.STRING
    },
    id_film: {
        type: DataTypes.INTEGER
    },
    film_name: {
        type: DataTypes.STRING
    },
    director_id: {
        type: DataTypes.INTEGER
    },
    director_name: {
        type: DataTypes.STRING
    },
    director_avatar: {
        type: DataTypes.STRING
    }
})

const ActersAndAwards = db.define('actres_and_awards', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    acter: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    id_film: {
        type: DataTypes.INTEGER,
    },
    film: {
        type: DataTypes.STRING
    },
    img_film: {
        type: DataTypes.STRING
    },
    release_date: {
        type: DataTypes.DATE
    },
    categories: {
        type: DataTypes.STRING
    }
})

const ActersWithOscar = db.define('acters_only_with_oscars', {
    id_person: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    acter: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    id_film: {
        type: DataTypes.INTEGER
    },
    film_name: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    id_oscar: {
        type: DataTypes.INTEGER
    },
    oscar_name: {
        type: DataTypes.STRING
    }
})



module.exports = {
    ActersAtTopFilms: ActersAtTopFilms,
    ActersAtTopDirectors,
    ActersAndAwards,
    ActersWithOscar
}
