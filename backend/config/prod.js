require('dotenv').config()

module.exports = {
  // dbURL: 'mongodb+srv://test:1234@cluster1.ellxz.mongodb.net/?retryWrites=true&w=majority',
  dbURL: `mongodb+srv://${process.env.DB_KEY}.ellxz.mongodb.net/?retryWrites=true&w=majority`,
}
