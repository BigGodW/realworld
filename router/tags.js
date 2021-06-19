const router = require('express').Router()
const tagsCont = require('../controller/tags')

router.get('/',tagsCont.tags)


module.exports = router