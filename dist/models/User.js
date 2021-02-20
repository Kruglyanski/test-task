var _a = require('mongoose'), Schema = _a.Schema, model = _a.model, Types = _a.Types;
var schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
module.exports = model('User', schema);
