require('dotenv').config();
require('./config/database');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use((req,res,next) => {
  res.locals.data = {}
  next()
})
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/teslas', require('./routes/api/teslas'))
app.use('/api/reservations', require('./routes/api/reservations'))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests is made to express 
app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//Note: Since this route is a "catch all" that matches every GETrequest, 
//be sure to mount API or other routes before it!

//Set the port for development to use 3001 
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
//so that React's dev server can continue to use 3000
//and finally, tell the Express app to listen for incoming requests
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});


