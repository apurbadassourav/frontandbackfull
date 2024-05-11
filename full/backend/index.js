const express = require('express');
var cors = require('cors')
const app = express();
const port =4545;

app.use(cors())

const user =[
    {
        firstname : "apurba",
        lastname :"das",
        email :'apurba@gmail.com',
        password : '123456'
    },
    {
        firstname : "sourav",
        lastname :"diu",
        email :'apurba@gmail.com',
        password : '123456'
    },
    {
        firstname : "anik",
        lastname :"dutta",
        email :'apurba@gmail.com',
        password : '123456'
    },
    {
        firstname : "ovik",
        lastname :"gupto",
        email :'apurba@gmail.com',
        password : '123456'
    },
    {
        firstname : "ayan",
        lastname :"roy",
        email :'apurba@gmail.com',
        password : '123456'
    },
    {
        firstname :'apurba',
        lastname : 'das',
        email :'apurbadasourav@gmail.com',
        password : '123456'
    },
    {
        firstname :'tomal',
        lastname : 'das',
        email :'tomal@gmail.com',
        password : '123456'
    },
    {
        firstname :'sourav',
        lastname : 'das',
        email :'sourav@gmail.com',
        password : '123456'
    },
    {
        firstname :'prantho',
        lastname : 'das',
        email :'pranto@gmail.com',
        password : '123456'
    },
    {
        firstname :'simanto',
        lastname : 'das',
        email :'simanto@gmail.com',
        password : '123456'
    }

]

app.get('/',(req,res)=>{
    res.send('this my landing page')
})
app.get('/user',(req,res)=>{
    res.send(user)
})
app.listen(port,()=>{
    console.log(`this is ${port} is cool`)
})