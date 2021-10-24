const library = require('./library')

module.exports = app => {
  app.use('/library/books', library)
}
