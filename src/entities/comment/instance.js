const { Op } = require('sequelize')
const model = require('./model')

module.exports = class CommentInstance {
  constructor(sequilize) {
    this.sequilize = sequilize
    this.model = model(sequilize)
  }

  async init() {
    return await this.model.sync();
  }

  create(comment) {
    return this.model.create(comment)
  }
  
  search(message) {
    return this.model.findAll({
      where: {
        message: {[Op.iLike]: `%${message}%`}
      }
    })
  }
}
