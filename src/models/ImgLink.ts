import {Schema, model} from 'mongoose'
const schema = new Schema({
    imgSrc: {type: String},
    userId: {type: String}
})

module.exports = model('ImgLink', schema)