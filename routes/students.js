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

  module.exports = router
  