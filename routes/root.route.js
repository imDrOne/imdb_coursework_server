const {Router} = require('express')

const router = Router()
const rootController = require('../controller/root.controller')

router.get('/', rootController.getRoot)

module.exports = router
