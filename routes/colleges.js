const express = require('express')
const { College, Student } = require('../database')
const router = express.Router()

// GET all colleges
router.get('/', async (req, res, next) => {
    try {
      res.json(await College.findAll({include: [{model: Student}]}))
    } catch (err) {
      next(err)
    }
  })

  // GET a single college by id
  router.get('/:id', async (req, res, next) => {
    try {
      const college = await College.findByPk(+req.params.id, {include: [{model: Student}]})
      if (!college) return res.sendStatus(404)
      res.json(college)
    } catch (err) {
      next(err)
    }
  })

  // POST a new college
  router.post('/', async (req, res, next) => {
    try {
      // req.body is an object with keys of 'name' and 'city'
      const { name, city } = req.body
      res.status(201) // new POST request successfully made by the server
      res.json(await College.create({ name, city }))
      /*
        long-hand form of code above:
        res.json(await College.create({
          name: name,
          city: city
        }))
      */
    } catch (err) {
      next(err)
    }
  })

  // DELETE a college by id
  router.delete('/:id', async (req, res, next) => {
    try {
      const college = await College.findByPk(+req.params.id)
      if (!college) res.sendStatus(404)
      await college.destroy()
      res.sendStatus(204) // DELETE request successfully made by server
    } catch (err) {
      next(err)
    }
  })

  module.exports = router
