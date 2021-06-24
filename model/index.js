const db = require('./mysql')

const User = require('./user')
const Article = require('./article')
const Comment = require('./comment')

User.hasMany(Article)
Article.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Article.hasMany(Comment)
Comment.belongsTo(Article)

db.sync({alter:true})

module.exports = {
  User,
  Article,
  Comment
}