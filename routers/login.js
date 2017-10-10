const express = require('express')
const router = express.Router()
const model = require('../models')
const crypto = require('crypto');
//
router.use(function(req, res, next){
  if(req.session.hasOwnProperty('username')){
    res.render('index')
  }else{
    next()
  }
})

router.get('/', function(req, res){
  res.render('login')
})

router.post('/', function(req, res){

  model.User.findAll(
    {
    where:{
      username : req.body.username,
      password : req.body.password
    }
  })
  .then(dataUser =>{
    // let secret = dataUser.salt
    // let nakedPassword = req.body.password

    // const passwordInput = crypto.createHmac('sha256', secret)
    //                             .update(nakedPassword)
    //                             .digest('hex')
    //
    if(dataUser.length > 0){
      req.session.username = dataUser[0].username
      //next()
    //console.log(dataUser);
    // if(passwordInput === dataUser.password){
        req.session.username = dataUser[0].username
        req.session.role = dataUser[0].role
    //res.send(dataUser)
      res.redirect('/')
    }else{
         res.render('login');
     }
  })

})


module.exports = router
