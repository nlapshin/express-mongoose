const model = require('./model')

// 1 Уровень. DB collection(table) или ORM(ODM) схема. 
// Записывались и считывались корректно.
// 2 Уровень. Repository - контроллер для коллекции.
// 3 Уровень(возможный). Это бизнес-логика(сервисы и т.д.).
// 4 Уровень. Это endpoints или routes. Обрабатываем входные данные + готовим ответ.

module.exports = class UserInstance {
  constructor(mongoose) {
    this.mongoose = mongoose
    this.model = model(mongoose)
  }

  findOneById(id) {
    return this.model.findOne({ _id: id })
  }

  findAll() {
    return this.model.find()
  }

  create(user) {
    const instance = new this.model(user)

    return instance.save()
  }

  updateOneById(id, user) {
    return this.model.updateOne({ _id: id }, { $set: user })
  }

  deleteOneById(id) {
    return this.model.deleteOne({ _id: id })
  }
}
