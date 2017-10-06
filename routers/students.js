const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/', function(req,res){
  model.student.findAll().then(dataStudents=>{
    res.render('students/students',{dataStudents:dataStudents})
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

module.exports = router
// Player.find({where: {idFbUser: request.idFbUser}}).then((player) => {
//             //create one more
//             Player.create({idFbUser: "invalidInteger"}).then((player) => {
//                    defer.resolve(false);
//             }).catch((error) => {
//                 defer.reject('catches only equals validator.');
//             });
//
// }).catch((error) => {
//      defer.reject('invalidInteger catch only here');
// });
