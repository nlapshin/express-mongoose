const UserInstance = require('./instance')
const userRoutes = require('./routes')

module.exports = {
  async register(express, mongoose) {
    // repository
    const userInstance = new UserInstance(mongoose)

    // controller
    userRoutes.register(express, userInstance)
  }
}
