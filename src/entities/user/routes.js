module.exports = {
  register(express, userInstance) {
    
    express.post('/user/', async (req, res) => {
      // Шаг валидации для роутов.

      const instance = await userInstance.create(req.body)

      res.send({ success: true, data: { id: instance._id.toString() } })
    });

    express.get('/user/:id', async (req, res) => {
      // случайно отдать token
      const instance = await userInstance.findOneById(req.params.id)

      res.send({ success: true, data: instance })
    });

    express.put('/user/:id', async (req, res) => {
      const instance = await userInstance.updateOneById(req.params.id, req.body)

      res.send({ success: true, data: instance })
    });


    express.delete('/user/:id', async (req, res) => {
      const instance = await userInstance.deleteOneById(req.params.id)

      if (instance?.deletedCount === 0) {
        res.status(404).send({ })
      } else {
        res.send({})
      }
    });
  }
}

// 1. REST стиль названий
// 2. Использовать всю мощь методов и статусов.
// 3. Не забывать про валидацию и сериализацию + документации.

/*
{
  "productId": 1, // int
  "productName": "A green door", // string
  "price": 12.50, // float
  "tags": [ "home", "green" ] // array of string
  "email": "nik@nik.ru" // email
}
*/

// JSONSchema + ajv - валидация.

// express.get('/person/1/order') - это все заказы
// express.get('/person/1/order/:id') - это конкретный заказ. Может вызваться обработчик с id = all

// express.get('/person/1/order/list|search|all')
// express.get('/person/1/order/retrieve/:id')


// const schema = Joi.object({
//   username: Joi.string()
//       .alphanum()
//       .min(3)
//       .max(30)
//       .required(),

//   password: Joi.string()
//       .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//   repeat_password: Joi.ref('password'),

//   access_token: [
//       Joi.string(),
//       Joi.number()
//   ],

//   birth_year: Joi.number()
//       .integer()
//       .min(1900)
//       .max(2013),

//   email: Joi.string()
//       .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// })
//   .with('username', 'birth_year')
//   .xor('password', 'access_token')
//   .with('password', 'repeat_password');
