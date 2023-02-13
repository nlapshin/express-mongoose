const { validate } = require('express-validation')
const dto = require('./dto')


module.exports = {
  register(express, userInstance) {
    // create
    express.post('/user/', validate(dto.userCreate, {}, {}), async (req, res) => {
      const instance = await userInstance.create(req.body)

      res.send({ success: true, data: { id: instance._id.toString() } })
    });

    // read
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
  }
}


// Basic-Auth - user и password в запросе
// Oauth - делегируем доступы сторонним ресурсам.
// Token based - это JWT(JSON Web Token).
// Access и Refresh токены.
// Access - это доступа и он имеет короткую жизнь
// Refresh - обновление access token.
