const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas successfully connected with authServer");
}).catch((err)=>{
    console.log(`MongoDB connection failed!!! Error ${err}`)
})