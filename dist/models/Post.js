"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    text: { type: String, required: true },
    date: { type: Date, required: true },
    userName: { type: String, required: true },
    avatar: { type: String },
    isFlood: { type: Boolean, required: true }
});
module.exports = mongoose_1.model('Post', schema); //
