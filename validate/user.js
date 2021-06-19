const { body } = require('express-validator')
const validate = require('../middleware/validate')
const { User } = require('../model')


module.exports.login = validate([
    body('username').not().isEmpty().withMessage('用户名不能为空'),
    body('password', '密码不能为空').notEmpty()
])

module.exports.register = validate([
    body('username').not().isEmpty()
        .custom(async (value) => {
            const user = await User.findOne({ username: value })
            if (user) {
                console.log(user)
                return Promise.reject('用户已存在')
            }

        }),
    body('email').isEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value })
            if (user) {
                console.log(user)
                return Promise.reject('邮箱已存在')
            }

        }),
    body('password').notEmpty()
])