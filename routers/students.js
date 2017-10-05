const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/', function(req,res){
  model.student.findAll().then(dataStudents=>{
    res.render('students',{dataStudents:dataStudents})
  })
})

router.get('/addStudent', function(req, res){
    res.render('addStudent')
})

router.post('/addStudent', function(req, res){
  model.student.create(req.body).then(dataStudents=>{
    res.redirect('/students')
  })

router.get('/editStudent/:id', function(req,res){
  res.send('helo')
  // model.student.findById(req.params.id).then(dataStudents=>{
  //   res.render('/editStudent', {dataStudents:dataStudents})
  // })
})

// Project.findById(123).then(project => {
//   // project will be an instance of Project and stores the content of the table entry
//   // with id 123. if such an entry is not defined you will get null
// })

})
module.exports = router
