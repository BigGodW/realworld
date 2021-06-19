const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const error = require('./middleware/error-handler')

const app = express()
// 请求日志
app.use(morgan('dev'))
// 跨域请求
app.use(cors())
// 解析请求体中的json数据
app.use(express.json())


// 挂载路由
app.use('/api',require('./router'))


// 统一错误处理
app.use(error())
app.listen(3001,()=>{
    console.log('running localhost')
})