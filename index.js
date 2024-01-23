require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const authServer = express()
authServer.use(cors())
authServer.use(express.json())
authServer.use(router)
const PORT  = 4000 || process.env.PORT
authServer.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT} and waiting for request...`)
})

authServer.get('/',(req,res)=>{
    res.send(`<h3>Server started...</h3>`)
})