const express = require('express');
const app = express();

const { mognoose } = require('./db')
const user = require('./entities/user')

;(async() => {
  const mognooseClient = await mognoose.start()

  app.use(express.json());

  user.register(app, mognooseClient)

  app.listen(8080, (err) => {
    if (err) {
      console.error('Server started with error', err)
      
      return
    }

    console.log('Server started on 8080 port')
  })
})()
