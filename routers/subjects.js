const express = require('express')
const router = express.Router()

let model = require('../models')

router.get('/', function(req,res){
  model.subject.findAll({
    include:[model.teacher]})
    .then(dataSubjects=>{
       //res.send(dataSubjects)
res.render('subjects', {dataSubjects:dataSubjects})
  })
})



module.exports = router
