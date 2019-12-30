const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')

beforeEach(() => {
  const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
  mongoose.connect('mongodb://localhost:27017/express-passport-react-gentech-test', dbOptions, (err) => {
    if (err) {
      console.log('not connected ❌')
    } else {
      console.log('connected ✅')
    }
  })
})

afterEach(() => {
  mongoose.connection.close()
})

const login = async () => {
    const response = await request(app)
      .post('/users/login')
      .send({
        username: 'harrison',
        password: 'password'
      })
      return response.headers['set-cookie']
}

test('testing if cookie variable works', async () => {
  let cookie = await login()
  const response = await request(app)
    .get('/users/hi')
    .set('cookie', cookie)
    expect(response.text).toBe('accessing!')
})