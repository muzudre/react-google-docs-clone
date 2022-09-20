const { Schema, model } = require('mongoose')

const Document = new Schema({
    _id: String,
    date: Object
})

model.exports = model('Document', Document)