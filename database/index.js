const Sequelize = require('sequelize')
/*
const db = new Sequelize(`postgres://localhost:5432/fitness-tracker`, {
  logging: false,
  operatorsAliases: false,
})
*/

/*
  The first databaseURL is for deployed links.
  Second one is for localhost
*/
const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/sequelize-prac'
const db = new Sequelize(
  databaseUrl,
  {
    logging: false,
    operatorsAliases: false,
  }
)

/***** DEFINING DATABASE SCHEMA *****/

const College = db.define('colleges', {
  name: Sequelize.STRING,
  city: Sequelize.STRING,
})

const Student = db.define('students', {
  name: Sequelize.STRING,
  major: Sequelize.TEXT
})

// define relationships between two tables in database
College.hasMany(Student)
Student.belongsTo(College)

// can now set up routes in /routes directory

module.exports = {
  College,
  Student,
  db,
}
