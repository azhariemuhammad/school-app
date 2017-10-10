const express = require('express')
const router = express.Router()

let model = require('../models')


router.use(function(req, res, next){
  if(req.session.hasOwnProperty('username')){
    next()
  }else{
    res.render('login')
  }
})

router.get('/', function(req,res){
  model.subject.findAll({
    include:[model.teacher]})
    .then(dataSubjects=>{
      res.render('subjects/subjects', {session:req.session,dataSubjects:dataSubjects})
      // res.send(dataSubjects)
  })
})

router.get('/enrolledStudent/:id', function(req,res){
  model.subject.findById(req.params.id).then(dataSubjects=>{
    model.studentSubject.findAll(
      {
      attributes:['id', 'StudentId', 'SubjectId'],
      include: [model.student],
      where:{SubjectId: req.params.id}
   }
  ).then(dataStudentSubjects =>{
       res.render('subjects/enrolledStudent', {session:req.session,dataSubjects:dataSubjects, dataStudentSubjects:dataStudentSubjects})
      // res.send(dataStudentSubjects)
    })
  })
})

router.get('/giveScores/:id', function(req, res){
  model.studentSubject.findAll({
    include:[{
      model:model.student
    }],
    where:{
      SubjectId:req.params.id
    }
  })
  .then(dataStudentSubjects =>{
    //res.send(dataStudentSubjects)
    res.render('giveScore',{dataStudentSubjects:dataStudentSubjects})
  })
})

// router.get('/giveScores/:id', function(req, res){
//   model.
// })




module.exports = router
