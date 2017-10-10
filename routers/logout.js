const express = require('express')
const router = express.Router()
const model = require('../models')


router.get('/', function(req, res){
  req.session.destroy(()=>{
    console.log('You are logout');
  })
    res.redirect('/login')
})



module.exports = router
