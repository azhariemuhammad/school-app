
const express = require('express')
const router = express.Router()
let model = require('../models')


router.get('/', function(req,res){
  model.teacher.findAll().then(dataTeachers => {
    // console.log(dataTeachers);
    res.render('teachers', {dataTeachers:dataTeachers})
  // projects will be an array of all Project instances
  })
})



module.exports = router
