const express = require('express')
const router = express.Router()
const model = require('../models')
const crypto = require('crypto');
const randomString = require('../helper/randomString')

router.use(function(req, res, next){
  if(req.session.hasOwnProperty('username')){
    res.render('index')
  }else{
    next()
  }
})

router.get('/', function(req, res){
  res.render('signup')
})

// router.post('/', function(req, res){
//   let secret = randomString(8)
//   console.log(secret,'ini secret');
//   let nakedPass = req.body.password
//   const password = crypto.createHmac('sha256', secret)
//                          .update('I love cupcakes')
//                          .digest('hex');
//   model.User.create(
//     {
//     username: req.body.username,
//     password: password,
//     role: req.body.role,
//     salt: secret
//   }).then(()=>{
//     res.redirect('/login')
//   })
// })


module.exports = router
