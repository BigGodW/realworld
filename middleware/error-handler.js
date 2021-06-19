const util = require('util')

module.exports = ()=>{
    return (err,req,res,next)=>{
        res.status(500).json({
            mess:'服务端错误',
            error: util.format(err)
        })
    }
}