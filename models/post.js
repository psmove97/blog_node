const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type:String
    }
},
     {
        timestamps: true
    }
     
);88

module.exports = mongoose.model('Post', schema);