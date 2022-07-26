const mongoose = require('mongoose');

module.exports = {
  start() {
    return mongoose.connect('mongodb://admin:admin@localhost:27018');
  }
}
