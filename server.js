// Basic modules required:
var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var morgan     = require('morgan')
var mongoose   = require('mongoose')
var config     = require('./config')
var path       = require('path')


//Connect to the database (using mongoose)
mongoose.connect(config.database)

// App Configuration
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//Configuration our app to handle CORS requests/errors

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization')
  next()
})

// Middleware
//log all requests to the console
app.use(morgan('dev'))

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'))

// API Routes
// var apiRoutes = require('./app/routes/api')(app,express)
// app.use('/api', apiRoutes)

// Redirects invalid URLS to Index.html
app.get('*', function (req,res){
  res.sendFile(path.join(__dirname+ '/public/app/views/index.html'))
})

app.get('/', function(req, res){
  res.render('index')
})

//Start the Server
// Server Listen crap
app.listen(config.port)
  console.log('it is up and running on port 3000')
