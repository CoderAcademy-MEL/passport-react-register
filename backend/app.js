const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')
const cors = require('cors')

const app = express()

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

module.exports = app