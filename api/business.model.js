const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Business
let Business = new Schema({
    businessId: {
        type: String
    },
    personName: {
        type: String
    },
    businessName: {
        type: String
    },
    gstNumber: {
        type: String
    }
}, {
    collection: 'business'
})

module.exports = mongoose.model('Business', Business)