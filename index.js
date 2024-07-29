var express = require('express');
var app = express();
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://top105222:2024dlfcjs!@cluster0.fgswlig.mongodb.net/', {
    // useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world 하이하이');
});

app.listen(port, () => console.log(`Example ${port}`))