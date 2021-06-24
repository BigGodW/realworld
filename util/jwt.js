const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const {TOKEN} = require('../config/config.defalut')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)