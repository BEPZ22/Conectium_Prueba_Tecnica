Joi = require('joi')

const create_schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),

    password: Joi.string()
        .min(6)
        .required(),

    repeat_password: Joi.any().valid(Joi.ref('password')),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
});


module.exports = {
    create_schema: create_schema,
};