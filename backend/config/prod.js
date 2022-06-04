require('dotenv').config()

module.exports = {
  dbURL: `mongodb+srv://${process.env.DB_KEY}.ellxz.mongodb.net/?retryWrites=true&w=majority`,
}
