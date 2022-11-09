const express = require('express');
const app = express();

const { mognoose, sequelize } = require('./db')

const comment = require('./entities/comment')
const user = require('./entities/user')

// Скрипт старта
;(async() => {
  // Старт зависимостей
  const mognooseClient = await mognoose.start()
  const sequilizeClient = sequelize.start()

  // Прогрева

  // Настройка
  app.use(express.json()); // body-parser для работы с json

  // регистрирую мои модули.
  await user.register(app, mognooseClient)
  await comment.register(app, sequilizeClient)

  // Старт
  app.listen(8080, (err) => {
    if (err) {
      console.error('Server started with error', err)
      
      return
    }

    console.log('Server started on 8080 port')
  })
})()
