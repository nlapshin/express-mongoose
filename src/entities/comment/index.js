const CommentInstance = require('./instance')
const commentRoutes = require('./routes')

module.exports = {
  async register(express, sequelize) {
    const commentInstance = new CommentInstance(sequelize)
    await commentInstance.init()

    commentRoutes.register(express, commentInstance)
  }
}
