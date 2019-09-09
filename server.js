const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { db } = require('./database')

const collegeRoutes = require('./routes/colleges')
const studentRoutes = require('./routes/students')

const app = express()

// Use morgan for logging
app.use(morgan('dev'))

// Make sure we can parse JSON request bodies
app.use(bodyParser.json())

/* Mount the workout and exercise routes. For instance, when a request begins with
   /workouts, we'll hand it off to the router defined in ./routes/workouts.js
  */
app.use('/colleges', collegeRoutes)
app.use('/students', studentRoutes)

// Serve the index.html file in ./public as a homepage
app.use(express.static('public'))

app.use('/', (req, res, next) => {
  res.redirect('/colleges')
})

// If the environment has a PORT defined, use that (otherwise, default to 3030)
const PORT = process.env.PORT || 3030

/*
app.listen(PORT, () => {
  console.log(`Getting swole on port ${PORT}`)
})
*/

/*
  every time the server starts, we want to sync up
  with the database before it starts listening for requests.
  Remember, db.sync() is asynchronous, so we need to create an async function
*/

/*
  when adding fields to model, put { force: true }
  as an argument in db.sync() function.
  THEN remove when done creating schema
*/

// Remember that we aren't able to use await outside of an async function.
async function startServer() {
  try {
    await db.sync()
    app.listen(PORT, () => {
      console.log(`Getting studious on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}
startServer()
