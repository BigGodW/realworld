const { body,param } = require('express-validator')
const validate = require('../middleware/validate')

module.exports.add = validate([
  body('title').not().isEmpty().withMessage('文章标题不能为空'),
  body('description').not().isEmpty().withMessage('文章描述不能为空'),
  body('body').not().isEmpty().withMessage('文章内容不能为空')
])

module.exports.update = exports.add

// 添加评论
module.exports.addComment = validate([

  body('body').not().isEmpty().withMessage('评论不能为空'),
  param('id').not().isEmpty().withMessage('文章ID不能为空'),
])