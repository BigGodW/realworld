const express = require('express')
const userCont = require('../controller/user')
const userVal = require('../validate/user')
const auth = require('../middleware/auth')



const router = express.Router()

router.get('/',(req,res)=>[
  res.status(200).json({mess:'用户接口'})
])
// 用户登录
router.post('/users/login',userVal.login,userCont.login)
// 用户注册
router.post('/users/register',userVal.register,userCont.register)
// 获取当前用户信息
router.get('/user',auth,userCont.userInfo)
// 更新用户信息
router.put('/user',auth,userVal.update,userCont.userUpdate)


module.exports = router