const {User} = require('../model')

// 登录 login
module.exports.login = async(req,res,next)=>{
    try{
        res.send('用户登录')
    }catch(err){
        next(err)
    }
}

// 注册 register
module.exports.register = async(req,res,next) =>{
    try{
        const user = req.body
        console.log(user)
        const result = await User.create(user)
        res.json({result})


    }catch(err){
        next(err)
    }
}

// 获取用户信息 userInfo
module.exports.userInfo = async(req,res,next) =>{
    try{
        res.send('用户信息')
    }catch(err){
        next(err)
    }
}

// 更新用户信息 userUpdate
module.exports.userUpdate = async(req,res,next) =>{
    try{
        res.send('用户信息修改')
    }catch(err){
        next(err)
    }
}