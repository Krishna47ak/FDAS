const mongoose = require('mongoose')

const FdasSchema = new mongoose.Schema({
    data: [
        {
            name: {
                type: String,
                default: 'Base 1'
            },
            node1: {
                temp: {
                    type: Number
                },
                humidity: {
                    type: Number
                },
                co: {
                    type: Number
                },
                trigger: {
                    type: Boolean,
                    default: false
                }
            },
            node2: {
                temp: {
                    type: Number
                },
                humidity: {
                    type: Number
                },
                co: {
                    type: Number
                },
                trigger: {
                    type: Boolean,
                    default: false
                }
            }
        },
        {
            name: {
                type: String,
                default: 'Base 2'
            },
            node1: {
                temp: {
                    type: Number
                },
                humidity: {
                    type: Number
                },
                co: {
                    type: Number
                },
                trigger: {
                    type: Boolean,
                    default: false
                }
            },
            node2: {
                temp: {
                    type: Number
                },
                humidity: {
                    type: Number
                },
                co: {
                    type: Number
                },
                trigger: {
                    type: Boolean,
                    default: false
                }
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

// const FdasSchema = new mongoose.Schema({
//     temp: {
//         type: Number,
//         required: true
//     },
//     humidity: {
//         type: Number,
//         required: true
//     },
//     co: {
//         type: Number,
//         required: true
//     },
//     triggers: {
//         type: Boolean,
//         default: false
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

module.exports = Fdas = mongoose.model('Fdas', FdasSchema)