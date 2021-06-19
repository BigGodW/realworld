const express = require('express')

const router = express.Router()

router.use(require('./user'))
router.use('/articles',require('./articles'))
router.use('/profile',require('./profile'))
router.use('/tags',require('./tags'))



module.exports = router