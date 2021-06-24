const express = require('express')
const auth = require('../middleware/auth')

const router = express.Router()

router.use(require('./user'))
router.use('/articles',require('./articles'))
router.use('/profiles',auth,require('./profile'))
router.use('/tags',require('./tags'))



module.exports = router