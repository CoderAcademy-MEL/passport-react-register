// custom middleware to be used on routes that need authentication
const hasAuth = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(403).send('not authorized!')
  }
}

module.exports = hasAuth
