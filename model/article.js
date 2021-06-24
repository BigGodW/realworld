const db = require('./mysql')
const {DataTypes} = require('sequelize')
const User = require('./user')

const Article = db.define('article',{
  slug: {
    type:DataTypes.STRING
  },
  title:{
    type:DataTypes.STRING
  },
  description: {
    type:DataTypes.STRING
  },
  body: {
    type:DataTypes.TEXT
  },
  tagList: {
    type:DataTypes.STRING
  },
  favorited: {
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  favoritesCount: {
    type:DataTypes.INTEGER
  },

})



module.exports = Article