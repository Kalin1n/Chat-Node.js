var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var htttp = require('http');

app.use(express.static('public'));
app.use(bodyParser.json())
var messages = [{
    nickname : "Vasya",
    messege : "Some text from Vasya"
  },
  {
    nickname : "Ivan",
    message : "Some text from Ivan "
  }
];  // массив для сообщений


app.get('/message', function (req, res) {
  res.send(messages);
});


app.post('/message',function(req, res){
  app.use(bodyParser.json())

  req.body.timestamp = new Date().getTime();
  messages.push(req.body)
  res.status(201).send(req.body)
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
/*POST BY FETCH
  fetch("http://localhost:3000/message",
  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({a: 1, b: 2})
  })
  .then(function(res){ console.log(res) })
  .catch(function(res){ console.log(res) })
*/
