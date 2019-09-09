const express = require('express')
const { College } = require('../database')
const router = express.Router()

// GET all colleges
router.get('/', async (req, res, next) => {
    try {
      res.json(await College.findAll())
    } catch (err) {
      next(err)
    }
  })

  // GET a single college by id
  router.get('/:id', async (req, res, next) => {
    try {
      const college = await College.findByPk(+req.params.id)
      if (!college) return res.sendStatus(404)
      res.json(college)
    } catch (err) {
      next(err)
    }
  })

  // POST a new college
  router.post('/', async (req, res, next) => {
    try {
      const { name, city } = req.body
      res.status(201)
      res.json(await College.create({ name, city }))
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
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router
