// const { validate } = require('express-validation')
// const dto = require('./dto')
// validate(dto.userCreate, {}, {}),

// {
//   success: boolean,
//   data?: any,
//   error?: {
//     msg: String,
//     statusExt?: Number
//   }
// }

// class HTTPError extends Error {

// }

// class HTTP400Error extends Error {

// }

// const validator = require('express-joi-validation').createValidator({})

// const querySchema = Joi.object({
//   name: Joi.string().required()
// })

// Валидация - подключить пакет


module.exports = {
  register(express, userInstance) {
    
    // create
    // express.post(path, handler)
    // express.post(path, validator, handler) 
    express.post('/user/', async (req, res) => {
      const instance = await userInstance.create(req.body)

      throw new HTTP400Error('error')

      res.send({ success: true, data: { id: instance._id.toString() } })
    });

    // read
    // 404 Not Found если не найден
    express.get('/user/:id', async (req, res) => {
      const instance = await userInstance.findOneById(req.params.id)

      res.send({ success: true, data: instance })
    });

    // update
    express.put('/user/:id', async (req, res) => {
      const instance = await userInstance.updateOneById(req.params.id, req.body)

      res.send({ success: true, data: instance })
    });

    // delete
    express.delete('/user/:id', async (req, res) => {
      const instance = await userInstance.deleteOneById(req.params.id)

      res.send({ success: true, data: instance })
    });

    // 200 Статус на любой успешный поиск, даже если пустой массив
    // Get данные через query-string
    express.get('/user/search', async (req, res) => {
      const instance = await userInstance.findOneById(req.params.id)

      res.send({ success: true, data: instance })
    });
  }
}
