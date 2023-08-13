const Mongoose = require("mongoose")
const RemoteDB = process.env.DB_CONNECTION
const connectDB = async () => {
  Mongoose.connect(
    RemoteDB, 
    { useNewUrlParser: true }, 
    () => {console.log("Connected to db!");}
  )
}

module.exports = connectDB