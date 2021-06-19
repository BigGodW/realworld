
// 标签 tags
module.exports.tags = async(req,res,next)=>{
    try{
        res.send('tags')
    }catch(err){
        next(err)
    }
}
