const express = require('express')
const { Student } = require('../database')
const router = express.Router()

// GET all students
router.get('/', async (req, res, next) => {
    try {
      res.json(await Student.findAll())
    } catch (err) {
      next(err)
    }
  })
  
  // GET a single student by id
  router.get('/:id', async (req, res, next) => {
    try {
      const student = await Student.findByPk(+req.params.id)
      if (!student) return res.sendStatus(404)
      res.json(student)
    } catch (err) {
      next(err)
    }
  })

  // POST a new student
  router.post('/', async (req, res, next) => {
    try {
      const { name, major } = req.body
      res.send(201)
      res.json(await Student.create({ name, major }))
    } catch (err) {
      next(err)
    }
  })

  // DELETE a student by id
  router.delete('/:id', async (req, res, next) => {
    try {
      const student = await Student.findByPk(+req.params.id)
      if (!student) res.sendStatus(404)
      await student.destroy()
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router
