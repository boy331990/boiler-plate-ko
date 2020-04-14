var express = require('express');
var app = express();
var port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ukss:abcd1234@youtubeclone-ajxbf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world 할룽~');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))