import {Schema, model, } from 'mongoose'

const schema = new Schema({
    text: {type: String, required: true},
    date: {type: Date, required: true},
    userName: {type: String, required: true},
    avatar: {type: String},
    isFlood:{type: Boolean, required: true}

})

module.exports = model('Post', schema)//