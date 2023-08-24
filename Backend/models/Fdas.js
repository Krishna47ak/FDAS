const mongoose = require('mongoose')

const FdasSchema = new mongoose.Schema({
    temp: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    co: {
        type: Number,
        required: true
    },
    triggers: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Fdas = mongoose.model('Fdas', FdasSchema)