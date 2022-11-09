const { Sequelize } = require('sequelize');

module.exports = {
  start() {
    const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
      host: 'localhost',
      port: 5433,
      dialect: 'postgres',
      logging: false
    })

    return sequelize;
  }
}
