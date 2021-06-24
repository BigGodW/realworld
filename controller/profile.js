const {User} = require('../model')
const filter = require('../util/filter')

// 用户信息 userInfo
module.exports.userInfo = async(req,res,next)=>{
    try{
        const userId = req.params.username
        console.log(userId)
        const user =await User.findByPk(Number.parseInt(userId))
        if(!user){
            return res.status(404).json({mess:'用户不存在'})
        }
        res.status(200).json({...filter(user,['username','email','bio','image'])})
    }catch(err){
        next(err)
    }
}
// 用户关注 follow
module.exports.follow = async(req,res,next)=>{
    try{
        res.send('用户关注')
    }catch(err){
        next(err)
    }
}
// 取消关注 followOut
module.exports.followOut = async(req,res,next)=>{
    try{
        res.send('取消用户关注')
    }catch(err){
        next(err)
    }
}


