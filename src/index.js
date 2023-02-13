const express = require('express');
const app = express();

// mongodb через mongoose
// postgresql через sequelize
const { mongoose, sequelize } = require('./db')
const comment = require('./entities/comment')
const user = require('./entities/user')

;(async() => {
  const mognooseClient = await mongoose.start()
  const sequilizeClient = sequelize.start()

  app.use(express.json());

  comment.register(app, sequilizeClient)
  user.register(app, mognooseClient)

  app.listen(8080, (err) => {
    if (err) {
      console.error('Server started with error', err)
      
      return
    }

    console.log('Server started on 8080 port')
  })
})()
