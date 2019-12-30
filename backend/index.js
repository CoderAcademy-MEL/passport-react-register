const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
require('dotenv').config()
const app = require('./app')

// mongoose
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/express-passport-react-gentech', dbOptions, (err) => {
  if (err) {
    console.log('not connected ❌')
  } else {
    console.log('connected ✅')
  }
})

app.listen(PORT, () => console.log('listening on port 5000'))