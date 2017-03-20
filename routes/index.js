var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  let meal = ['Nasi Goreng', 'Bakso', 'Mie Ayam', 'Martabak', 'Roti Bakar']
  res.json({meal: meal})
})

module.exports = router
