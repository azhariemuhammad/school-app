const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const teachers = require('./routers/teachers')
const subjects = require('./routers/subjects')
const students = require('./routers/students')
const index = require('./routers/index')
const login = require('./routers/login')
const logout  = require('./routers/logout')
const signup  = require('./routers/signup')
var session = require('express-session')

app.use(session({
  secret: 'lively-fox',
  resave: false,
  saveUninitialized: true,
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')

//
app.use('/login', login)
app.use('/signup', signup)
app.use('/logout', logout)
app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)
app.use('/', index)



app.listen(3000)
