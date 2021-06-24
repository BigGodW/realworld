const router = require('express').Router()
const articlesCont = require('../controller/articles')
const auth = require('../middleware/auth')
const articlesVal = require('../validate/article')

// 文章路由接口前缀:"articles"

// 文章列表 articles
router.get('/',articlesCont.articles)

// 获取指定文章
router.get('/:id',articlesCont.article)

// 文章feed
router.get('/feed',articlesCont.feed)

// 创建文章 articleAdd
router.post('/',auth,articlesVal.add,articlesCont.articleAdd)
// 更新文章 articleUpdate
router.put('/:id',auth,articlesVal.update,articlesCont.articleUpate)

// 删除文章 articleRemove
router.delete('/:id',auth,articlesCont.articleRemove)
// 添加评论 commentAdd
router.post('/:id/comments',articlesCont.comment)

// 获取文章所有评论 comments
router.get('/:id/comments',articlesCont.comments)

// 删除评论 commentRemove
router.delete('/:id/comments/:commentId',articlesCont.commentRemove)

// 文章特别关注 favorite
router.post('/Lslug/favorite',articlesCont.favorite)

// 取消文章特别关注 favoriteRemove
router.delete('/:slug/favorite',articlesCont.favoriteRemove)



module.exports = router