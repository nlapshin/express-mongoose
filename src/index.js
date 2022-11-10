const express = require('express');
const app = express();

const { mognoose, sequelize } = require('./db')
const comment = require('./entities/comment')
const user = require('./entities/user')

;(async() => {
  const mognooseClient = await mognoose.start()
  const sequilizeClient = sequelize.start()

  app.use(express.json());

  // app - сервер, sequilizeClient - клиент для postgres
  comment.register(app, sequilizeClient)
  // app - сервер, mognooseClient - клиент для mongodb
  user.register(app, mognooseClient)

  app.use((err, req, res, next) => {
    if (err instanceof HTTPError) {
      return res.status(400).send({ success: false, error: { msg: 'err' }})
    }
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(8080, (err) => {
    if (err) {
      console.error('Server started with error', err)
      
      return
    }

    console.log('Server started on 8080 port')
  })
})()
