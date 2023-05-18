const express = require('express');
const app = express();
const booksRouter=require('./routes/books')
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/hello',(req,res)=>{
res.send('hhhh')
    })
const PORT = 5000;
app.use(cors());     
app.use(bodyParser.json());
app.use('/api/v1/books', booksRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});