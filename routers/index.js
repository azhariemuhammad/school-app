const express = require('express')
const router = express.Router()
const model = require('../models')



router.use(function(req, res,next){
  if(req.session && req.session.hasOwnProperty('username')){
    next()
  }else{
    res.redirect('/login')
  }
})


router.get('/', function(req,res){
  //res.send('booo')
  res.render('index',{session:req.session});
})



module.exports = router;
