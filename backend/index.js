const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// mongoose
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/express-passport-react-gentech', dbOptions, (err) => {
  if (err) {
    console.log('not connected ❌')
  } else {
    console.log('connected ✅')
  }
})

app.use(morgan('dev'))

// express session
app.use(
  session({
    secret: 'your session secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  }),
)

// passport
const passport = require('./initializers/passport')
app.use(passport.initialize())
app.use(passport.session())

app.use((cors({
  origin: "http://localhost:3000",
  credentials: true
})))

// require all routes
app.use(require('./routes'))

app.listen(PORT, () => console.log('listening on port 5000'))
