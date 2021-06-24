const md5 = require('md5')
const {User} = require('../model')
const {TOKEN} = require('../config/config.defalut')
const jwt = require('../util/jwt')
const filter = require('../util/filter')

// 登录 login
module.exports.login = async(req,res,next)=>{
    try{
        const {username,password} = req.body
        const user = await User.findOne({
            where:{username,password:md5(password)}
        })
        if(!user){
           return res.status(202).json({mess:'账号或密码错误'})
        }
        const token = await jwt.sign({userId:user.id},TOKEN.keySecret,{
            expiresIn:TOKEN.time
        })
        res.status(200).json({...filter(user,['email','username','bio','image']),token})
    }catch(err){
        next(err)
    }
}

// 注册 register
module.exports.register = async(req,res,next) =>{
    try{
        const {username,password,email} = req.body
        const result = await User.create({username,password,email})
        
        res.json({result})


    }catch(err){
        next(err)
    }
}

// 获取用户信息 userInfo
module.exports.userInfo = async(req,res,next) =>{
    try{
        res.status(200).json({...filter(req.user,['username','email','bio','image'])})
    }catch(err){
        next(err)
    }
}

// 更新用户信息 userUpdate
module.exports.userUpdate = async(req,res,next) =>{
    try{
        const user = await User.update(
            {...filter(req.body,['email','password','bio','image'])},
            {where:{id:req.user.id}}
        )
        res.status('200').send('信息更新成功')
    }catch(err){
        next(err)
    }
}