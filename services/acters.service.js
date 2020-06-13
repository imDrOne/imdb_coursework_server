function ActersInformation(p_arr) {
    const arr = []
    const IDs = []
    let iterator = 0
    for (let i = 0; i <= p_arr.length - 1; i++) {
        const tmp = IDs.find(el => el === p_arr[i].id)

        if (IDs.length > 0 && tmp !== undefined) continue
        const currObj = p_arr[i]

        arr.push({
            id: currObj.id,
            acter: currObj.acter,
            avatar: currObj.avatar,
            filmInfo: [{
                film: currObj.film,
                id_film: currObj.id_film,
                img_film: currObj.img_film,
                release_date: currObj.release_date,
                category: currObj.categories
            }]
        })

        for (let j = 0; j <= p_arr.length - 1; j++) {
            if (i === j) continue
            if (currObj.id === p_arr[j].id) {

                arr[iterator].filmInfo.push({
                    film: p_arr[j].film,
                    id_film: p_arr[j].id_film,
                    img_film: p_arr[j].img_film,
                    release_date: p_arr[j].release_date,
                    category: p_arr[j].categories
                })
            }
        }
        iterator++
        IDs.push(currObj.id)
    }

    return arr
}

function ReformatedActersList(p_arr) {
    const acters = []
    const IDs = []
    let iterator = 0

    for (let i = 0; i <= p_arr.length - 1; i++) {
        const tmp = IDs.find(el => el === p_arr[i].id_person)

        if (IDs.length > 0 && tmp !== undefined) continue
        const currObj = p_arr[i]

        acters.push({
            id: currObj.id_person,
            acter: currObj.acter,
            avatar: currObj.avatar,
            filmInfo: [{
                id_film: currObj.id_film,
                film: currObj.film_name,
                img_film: currObj.img,
                id_oscar: currObj.id_oscar,
                oscar_name: currObj.oscar_name
            }],
        })
        acters[iterator]['cnt'] = acters[iterator].filmInfo.length

        for (let j = 0; j <= p_arr.length - 1; j++) {
            if (i === j) continue
            if (currObj.id_person === p_arr[j].id_person) {

                acters[iterator].filmInfo.push({
                    id_film: p_arr[j].id_film,
                    film: p_arr[j].film_name,
                    img_film: p_arr[j].img,
                    id_oscar: p_arr[j].id_oscar,
                    oscar_name: p_arr[j].oscar_name
                })

                acters[iterator]['cnt'] = acters[iterator].filmInfo.length
            }
        }
        iterator++
        IDs.push(currObj.id_person)
    }

    return acters
}

// TODO

function ActersFromTopDirectors(p_arr) {
    let iterator = 0
    const
        directors = [],
        directorsIDs = [],
        filmsIDs = []

    const srcArr = [...p_arr]

    for (const pArrElement of srcArr) {
        const directorID = directorsIDs.find(el => el === pArrElement.director_id)

        if (directorsIDs.length && directorID) {
            continue
        }

        directors.push({
            directorId: pArrElement.director_id,
            directorName: pArrElement.director_name,
            directorAvatar: pArrElement.director_avatar,
            films: []
        })

        directorsIDs.push(pArrElement.director_id)

        directorsIDs.filter((value, index) => directorsIDs.indexOf(value) !== index)

        iterator++
    }

    iterator = 0
    for (const director of directors) {
        for (const srcArrElement of srcArr) {
            const filmID = filmsIDs.find(value => value === srcArrElement.id_film)

            if (filmID) continue
            directors[iterator].films.push({
                filmName: srcArrElement.film_name,
                idFilm: srcArrElement.id_film,
                acters: []
            })
            filmsIDs.push(srcArrElement.id_film)

            filmsIDs.filter((value, index) => filmsIDs.indexOf(value) !== index)

        }
        iterator++
    }

    iterator = 0
    for (const film of directors[iterator].films) {
        for (const srcArrElement of srcArr) {
            if (srcArrElement.id_film === film.idFilm) {
                film.acters.push({
                    id: srcArrElement.id,
                    acter: srcArrElement.acter,
                    role: srcArrElement.role,
                    acter_avatar: srcArrElement.acter_avatar
                })
            }
        }
        iterator++
    }

    return directors
}

module.exports  = {
    ActersInformation,
    ReformatedActersList,
    ActersFromTopDirectors
}
