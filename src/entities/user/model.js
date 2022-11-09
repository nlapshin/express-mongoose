const { Schema } = require('mongoose')

module.exports = (mongoose) => {
  const User = new Schema({
    name: { type: String, required: true, index: true},
    surname: { type: String, required: true, index: true},
    age: { type: Number, min: 6, index: true },
    // foreignId: { type: ObjectId /*, ref*/ } // ссылка на другую коллекцию.
  }, { autoIndex: true });

  // составной индекс: name + age.
  // pre и post валидацию.
  // Виртуальные поля.
  // Ссылки на другие другие коллекции.

  return mongoose.model('User', User)
}

// Создали схему -> Модель с название(User -> users).

// Наше приложение обратывает много запросов на вставку.
// В таких случаях рекомендуют вставлять так называемыми batch-ами или 
// собирать несколько записей и вставлять всем скопомом.
// вместо insertOne делать insertMany.
// нужно временно хранить состояние на сервере.
