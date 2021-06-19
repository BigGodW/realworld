const router = require('express').Router()
const articlesCont = require('../controller/articles')

// 文章路由接口前缀:"articles"

// 文章列表 articles
router.get('/',articlesCont.articles)

// 文章feed
router.get('/feed',articlesCont.feed)

// 创建文章 articleAdd
router.post('/',articlesCont.articleAdd)
// 更新文章 articleUpdate
router.put('/:slug',articlesCont.articleUpate)

// 删除文章 articleRemove
router.delete('/:slug',articlesCont.articleRemove)
// 添加评论 commentAdd
router.post('/:slug/comments',articlesCont.comment)

// 获取文章所有评论 comments
router.get('/:slug/comments',articlesCont.comments)

// 删除评论 commentRemove
router.delete('/:slug/comments/:id',articlesCont.commentRemove)

// 文章特别关注 favorite
router.post('/Lslug/favorite',articlesCont.favorite)

// 取消文章特别关注 favoriteRemove
router.delete('/:slug/favorite',articlesCont.favoriteRemove)



module.exports = router