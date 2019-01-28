const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const useSchema = new Schema({
    email: {
        type: String,
        required:true
    },
    name : {
        type: String,
        required:true
    },
    password : {
        type: String,
        required:true
    },
    createdEvent: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
})
module.exports = mongoose.model('User', useSchema);