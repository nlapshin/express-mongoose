const UserInstance = require('./instance')
const userRoutes = require('./routes')

module.exports = {
  register(express, mongoose) {
    const userInstance = new UserInstance(mongoose)

    userRoutes.register(express, userInstance)
  }
}
