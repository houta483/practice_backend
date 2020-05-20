const messageController = require('./MessageController');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3307;

app.use(cookieParser())
app.use(bodyParser.json())

app.get('/tanner', (req, res) => {
  res.status(200).send('test')
  }
)

app.post('/message', messageController.postMessage, (req, res) => {
  res.status(200).json(res.locals.posted)
  }
)

app.get('/message', messageController.getMessage, (req, res) => {
  console.log(res.locals.messages)
  res.status(200).json(res.locals.messages)
  }
)

app.delete('/message', messageController.deleteMessage, (req, res) => {
  res.status(200).json(res.locals.delete)
  }
)

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`))