const Sequelize = require('sequelize')
/*
const db = new Sequelize(`postgres://localhost:5432/fitness-tracker`, {
  logging: false,
  operatorsAliases: false,
})
*/

const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/sequelize-prac'
const db = new Sequelize(
  databaseUrl,
  {
    logging: false,
    operatorsAliases: false,
  }
)

const College = db.define('college', {
  name: Sequelize.STRING,
  city: Sequelize.STRING,
})

const Student = db.define('student', {
  name: Sequelize.STRING,
  major: Sequelize.TEXT
})

College.hasMany(Student)
Student.belongsTo(College)

module.exports = {
  College,
  Student,
  db,
}
