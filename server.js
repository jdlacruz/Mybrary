if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()   // Load all variables from ENV file
}

const express = require ('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const { mongo } = require('mongoose')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')           // Set up view engine
app.set('views', __dirname + '/views')  // Location of views
app.set('layout', 'layouts/layout')     // Location of layout files, that will allow reuse of view portions
app.use(expressLayouts)
app.use(express.static('public'))       // Folder 

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000 )            // Set up listening port of server

