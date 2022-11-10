const { validate, ValidationError, Joi } = require('express-validation');

const userCreate = {
  body: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min().required(),
  }),
}

module.exports = {
  userCreate
}
