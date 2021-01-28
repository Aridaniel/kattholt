const mongoose = require('mongoose')

const tyndurKisi = new mongoose.Schema({
    HeitiKattar:{
        type:String,
        required:true
    },
    Kyn:{
        type:String,
        required:true
    },
    Aldur:{
        type:String,
        required:true
    },
    Örmerking:{
        type:String,
        required:False
    },
    Nr:{
        type:String,
        required:true
    },
    Litur:{
        type:String,
        required:true
    }
   
})

module.exports = mongoose.model('kisurtable',tyndurKisi )