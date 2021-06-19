
// 获取文章 articles
module.exports.articles = async(req,res,next)=>{
    try{
        res.send('文章列表')
    }catch(err){
        next(err)
    }
}

// 文章订阅 feed
module.exports.feed = async(req,res,next)=>{
    try{
        res.send('文章订阅')
    }catch(err){
        next(err)
    }
}

// 创建文章 articleAdd
module.exports.articleAdd = async(req,res,next)=>{
    try{
        res.send('添加文章')
    }catch(err){
        next(err)
    }
}
// 更新文章 articleUpdate
module.exports.articleUpate = async(req,res,next)=>{
    try{
        res.send('更新文章')
    }catch(err){
        next(err)
    }
}
// 删除文章 articleRemove
module.exports.articleRemove = async(req,res,next)=>{
    try{
        res.send('删除文章')
    }catch(err){
        next(err)
    }
}
// 添加评论 comment
module.exports.comment = async(req,res,next)=>{
    try{
        res.send('添加评论')
    }catch(err){
        next(err)
    }
}
// 获取评论 comments
module.exports.comments = async(req,res,next)=>{
    try{
        res.send('获取评论')
    }catch(err){
        next(err)
    }
}
// 删除评论 commentRemove
module.exports.commentRemove = async(req,res,next)=>{
    try{
        res.send('删除评论')
    }catch(err){
        next(err)
    }
}
// 文章收藏 favorite
module.exports.favorite = async(req,res,next)=>{
    try{
        res.send('文章收藏')
    }catch(err){
        next(err)
    }
}
// 取消文章关注 favoriteRemove
module.exports.favoriteRemove = async(req,res,next)=>{
    try{
        res.send('取消文章关注')
    }catch(err){
        next(err)
    }
}




