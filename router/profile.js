const router = require('express').Router()
const profileCont = require('../controller/profile')

// 获取用户资源
router.get('/:username',profileCont.userInfo)

// 获取关注用户
router.post('/:username/follow',profileCont.follow)

// 取消用户关注
router.delete('/:username/follow',profileCont.followOut)


module.exports = router