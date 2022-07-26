const { Sequelize } = require('sequelize');

module.exports = {
  start() {
    const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
      host: 'localhost',
      port: 5433,
      dialect: 'postgres',
      logging: false
    })
      
      // 'postgres://postgres:@localhost:5432/postgres')

    return sequelize;
  }
}
