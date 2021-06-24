const db = require('./mysql')
const {DataTypes} = require('sequelize')
const md5 = require('md5')


const User = db.define('user',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        set(value){
            this.setDataValue('password',md5(value))
        }
    },
    email:{
        type: DataTypes.STRING
    }, 
    bio: { 
        type: DataTypes.STRING
     },
    image: { 
        type: DataTypes.STRING
    }

},{
    defaultScope: {
        attributes: {
            // 排除密码，不返回密码
            exclude: ['password']
        }
    }
})




module.exports = User