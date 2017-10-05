const express = require('express')
const router = express.Router()

let model = require('../models')

router.get('/', function(req,res){
  model.subject.findAll().then(dataSubjects=>{
    res.render('subjects', {dataSubjects:dataSubjects})
  })
})


module.exports = router
