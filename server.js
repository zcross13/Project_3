// require the modules;
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//create the Express app
const app = express();

//mount the morgan logging middleware and 
app.use(logger('dev'));
//express.json()middleware that processes JSON data 
//sent in the AJAX request and adds it to the req.body
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html when any non-AJAX request is made to express
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

