"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    avatar: { type: String },
    userId: { type: String }
});
module.exports = mongoose_1.model('ImgLink', schema);
