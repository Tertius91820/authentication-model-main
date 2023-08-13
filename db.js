const Mongoose = require("mongoose")
require('dotenv').config()
const RemoteDB = process.env.DB_CONNECTION
const connectDB = async () => {
  await Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected")
  })
}

module.exports = connectDB