

// 用户信息 userInfo
module.exports.userInfo = async(req,res,next)=>{
    try{
        res.send('用户信息')
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


