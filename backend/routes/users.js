const express = require('express')
const router = express.Router()
const hasAuth = require('../middleware/auth-middleware');

const {
  register,
  login,
  confirmLogin,
  logout,
} = require('../controllers/users-controller')

router.get('/', hasAuth, (req, res) => res.send('👍'))

router.post('/register', express.json(), register)

router.post('/login', express.json(), login, confirmLogin)

router.post('/logout', logout)

router.get('/hi', hasAuth, (req, res) => {
  res.send('accessing!')
})

module.exports = router
