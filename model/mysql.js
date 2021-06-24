const Sequelize = require('sequelize')
const {mysql} = require('../config/config.defalut')

const sequelize = new Sequelize(mysql.dbname,mysql.username,mysql.password,{
  host:mysql.host,
  dialect:"mysql",
  logging:false,
  timezone: '+08:00',
  define:{
    freezeTableName:true
  }
})

sequelize.authenticate().then(()=>{
  console.log('数据库连接成功')
}).catch(err=>{
  console.log('数据库连接失败')
})


module.exports = sequelize