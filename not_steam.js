var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'login.html'))
})

app.post('/home',(req,res)=>{
    //add logic to check if username and password are correct
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/newUser',(req,res)=>{
    res.sendFile(path.join(__dirname, 'newUser.html'))
})

app.listen(8080,()=>{
    console.log('Server started...')
})