// run `node seed` after creating seed file

const { College, Student, db } = require('./database')

const seedColleges = [
  {
    college_name: 'Cornell',
    city: 'Ithaca',
  },
  {
    college_name: 'Harvard',
    city: 'Cambridge',
  }
]

const seedStudents = [
  {
    name: 'Becky H',
    major: 'Policies'
  },
  {
    name: 'Samuel L',
    major: 'Economics'
  }
]

// Remember that we aren't able to use await outside of an async function.
async function seed() {
  try {
    console.log('Seeding the database...')
    await db.sync({ force: true })
    // 👇 Write some code below this line 👇
    await College.bulkCreate(seedColleges)
    await Student.bulkCreate(seedStudents)
    // ☝️️️ Write some code above this line ☝️️
    await db.close()
    console.log('Database was successfully seeded!')
  } catch (err) {
    console.error(err)
  }
}
seed()