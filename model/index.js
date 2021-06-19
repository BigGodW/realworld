const mongoose = require('mongoose')
const {mongodb} = require('../config/config.defalut')


mongoose.connect(`mongodb://${mongodb.url}:27017/${mongodb.dbname}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
const db = mongoose.connection

db.on('error',err=>{ console.log('数据库连接失败',err)})
db.once('open',()=>{
    console.log('数据库连接成功')
})

module.exports = {
    User: require('./user')
}