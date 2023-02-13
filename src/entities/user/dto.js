const { validate, ValidationError, Joi } = require('express-validation');

const userCreate = {
  body: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
  }),
}

// body - это объект, есть поле name - это строка объязательная

module.exports = {
  userCreate
}
