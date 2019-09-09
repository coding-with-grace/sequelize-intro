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

  module.exports = router
