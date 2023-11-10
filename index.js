const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(logger('dev'));
app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
  return res.status(200).json({ message: "GET request to the homepare"});
});
app.post('/', (req,res)=>{
    return res.status(200).json({ message: "POST request to the homepare"});
});
app.put('/', (req,res)=>{
    return res.status(200).json({ message: "PUT request to the homepare"});
});
app.delete('/', (req,res)=>{
    return res.status(200).json({ message: "DELETE request to the homepare"});
});

app.listen(port,  ()=> {
    console.log(`Server runing at http://localhost:${port}`)
});