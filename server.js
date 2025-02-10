const express = require('express')
require('dotenv').config()
const port = process.env.PORT||5000
const app = express();

app.use(express.json())

app.listen(port,()=>{
    console.log(`connected Successfully ${port}`)
})

app.get('/item',(req,res)=>{
    res.status(200).json({Message:'Hello vijay'})
})

app.post('/item',(req,res)=>{
    const {Email,Password} = req.body
    if(!Email)
        return res.status(400).json({Message:'Email not found'})
    if(!Password)
        return res.status(400).json({Message:'password incorrect'})
    if(Password.length < 8 || Password.length > 40)
        return res.status(400).json({Message:'Password not verified'})

    return res.status(200).json({Message:'Everything is correct'})
})