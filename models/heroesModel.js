var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name: { type : String, required : true },
    costume: String,
    powers: { type : Array, default : [] },
    facialHair: { type : Boolean, default : false },
    backStory: String
    // sidekick: {}
});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');
