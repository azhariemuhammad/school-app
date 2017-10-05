const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const teachers = require('./routers/teachers')
const subjects = require('./routers/subjects')
const students = require('./routers/students')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')



app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)

app.listen(3003)
