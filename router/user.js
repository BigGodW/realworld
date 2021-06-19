const express = require('express')
const userCont = require('../controller/user')
const userVal = require('../validate/user')



const router = express.Router()

// 用户登录
router.post('/users/login',userVal.login,userCont.login)
// 用户注册
router.post('/users',userVal.register,userCont.register)
// 获取当前用户信息
router.get('/user',userCont.userInfo)
// 更新用户信息
router.put('/user',userCont.userUpdate)


module.exports = router