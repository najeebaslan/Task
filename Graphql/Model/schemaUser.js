

const mongoose = require('mongoose');
const Joi = require('@hapi/joi')
const packagesSchema = mongoose.Schema({
    name: { type: String, required: true, },
    username: { type: String, required: true, }
})
const validationUser = (data) => {
    const Schema = {
        name: Joi.string().min(3).max(35).required(),
        username: Joi.string().min(6).max(255).required(),
    };
    return Joi.validate(data.userInput, Schema)
};
module.exports = mongoose.model('Cat', packagesSchema);
module.exports.validationUser = validationUser;


