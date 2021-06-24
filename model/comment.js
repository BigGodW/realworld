const db = require('./mysql')
const {DataTypes} = require('sequelize')


const Comment = db.define('comment',{
  body:{
    type:DataTypes.STRING
  }
})



module.exports = Comment