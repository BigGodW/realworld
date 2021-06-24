const jwt = require('../util/jwt')
const {TOKEN} = require("../config/config.defalut")
const { User } = require('../model')

module.exports = async(req,res,next)=>{
  try{
    const token = req.headers['authorization'] || null
    if(!token){
      return res.status(400).json({mess:"请提供token信息"})
    }
    const codeToken =await jwt.verify(token,TOKEN.keySecret)
    req.user = await User.findByPk(Number.parseInt(codeToken.userId))
    next()

  }catch(err){
    res.status(400).json({mess:"请完成登录"})
  }

}