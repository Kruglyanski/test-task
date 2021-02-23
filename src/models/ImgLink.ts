import {Schema, model} from 'mongoose'
const schema = new Schema({
    avatar: {type: String},
    userId: {type: String}
})

module.exports = model('ImgLink', schema)