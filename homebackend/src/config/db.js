const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.set('strictQuery', true)
    return mongoose.connect('mongodb://127.0.0.1:27017/homellc')
}

module.exports = connect;