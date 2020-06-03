/* Models */
const {TopFilms, FilmsAndTags} = require('../models/films.model')
const {ActersAtTopFilms, ActersAtTopDirectors, ActersAndAwards, ActersWithOscar} = require('../models/acters.model')
const BadCritics = require('../models/critics.model')

/* Services */
const {ReformatedActersList, ActersInformation} = require('../services/acters.service')
const {FilmsInformation} = require('../services/films.service')



exports.getRoot = async function (req, res) {
    try {
        const tops = await TopFilms.findAll()
        const actersAtTopFilms = await ActersAtTopFilms.findAll()
        const actersAtTopDirectors = await ActersAtTopDirectors.findAll()
        const badCritics = await BadCritics.findAll()
        const actersAndAwards = await ActersAndAwards.findAll()
        const actersWithOscars = await ActersWithOscar.findAll()
        const filmsAndTags = await FilmsAndTags.findAll()

        const payload = {
            tops,
            actersAtTopFilms,
            actersAtTopDirectors,
            badCritics,
            actersInformation: ActersInformation(actersAndAwards),
            actersWithOscars: ReformatedActersList(actersWithOscars),
            filmsAndTags: FilmsInformation(filmsAndTags)
        }
        res.status(200).json(payload)
    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: 'Server error!'
        })
    }
}
