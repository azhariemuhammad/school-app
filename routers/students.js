const express = require('express')
const router = express.Router()
const model = require('../models')

router.use(function(req, res, next){
  if(req.session.hasOwnProperty('username')){
    next()
  }else{
    res.render('login')
  }
})

router.get('/', function(req,res){
  model.student.findAll().then(dataStudents=>{
    res.render('students/students',{session:req.session,dataStudents:dataStudents})
  })
})

router.get('/addStudent', function(req, res){
    res.render('students/addStudent', {error:null})
})

router.post('/addStudent', function(req, res){
  model.student.create(req.body)
   .then(dataStudents=>{
      res.redirect('/students')
    })
    .catch((err)=>{
      res.render('students/addStudent',{error:err})
    })
})

router.get('/edit/:id', function(req,res){
  model.student.findById(req.params.id).then(dataStudents=>{
    res.render('students/editStudent', {dataStudents:dataStudents})
  })
})

router.post('/editStudent/:id', function(req, res){
  model.student.update(req.body, {where:req.params}).then(()=>{
    res.redirect('/students')
  }).catch((err)=>{
    res.render('error',{error:err})
  })

})

router.get('/delete/:id', function(req, res){
  model.student.destroy({where:req.params}).then(()=>{
    res.redirect('/students')
  })
})


//GET /students/:id/addsubject (menampilkan data student dan pilihan subject)
router.get('/addSubject/:id', function(req, res){
  model.student.findById(req.params.id)
   .then(dataStudents => {
     model.subject.findAll()
     .then(dataSubjects=>{
      res.render('students/addSubject', {dataStudents:dataStudents, dataSubjects:dataSubjects})
    })
  })
})

router.post('/addSubject/:id', function(req, res){
  // res.send('HAHAHHAA')
  //model.StudentSubject.create(studentId:req.params.id, subjectId:req.body.subject.name})
  model.studentSubject.create(req.body)
   .then(() => {
     //console.log(req.params.id);
    res.redirect('/students')
  })
})


module.exports = router
//
//
// model.studentSubject.create({
//   SubjectId: req.body.SubjectId,
//   StudentId: req.params.id
// })
//  .then(() => {
//    console.log(req.params.id);
//   res.redirect('/students')
// })
// })
