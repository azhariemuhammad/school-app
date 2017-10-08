
const express = require('express')
const router = express.Router()
let model = require('../models')


router.get('/', function(req,res){
  model.teacher.findAll({
     include:[
      {model: model.subject}
    ]})
   .then(dataTeachers => {
    res.render('teachers/teachers', {dataTeachers:dataTeachers})
  })
})

router.get ('/addTeacher', function(req, res){
  res.render('teachers/addTeacher', {error:null})
})

router.post('/addTeacher', function(req, res){
  model.student.create(req.body)
   .then(dataStudents=>{
      res.redirect('/teachers')
    })
    .catch((err)=>{
      res.render('teachers/addTeacher',{error:err})
    })
})


router.get('/edit/:id', function(req, res){
  model.teacher.findById(req.params.id).then(dataTeachers => {
    model.subject.findAll().then(dataSubjects =>{
      res.render('teachers/editTeacher', {dataTeachers:dataTeachers, dataSubjects:dataSubjects, error:null})
    })
  })
})


router.post('/editTeacher/:id', function(req, res){
  // console.log('---------------------------',req.params.id);
  model.teacher.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email: req.body.email,
    SubjectId: req.body.subject_name
  }
  , {
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/teachers')
  }).catch((err)=>{
    res.render('error',{error:err})
  })
})

router.get('/delete/:id', function(req, res){
  model.teacher.destroy({where:req.params}).then(()=>{
    res.redirect('/teachers')
  })
})





module.exports = router
