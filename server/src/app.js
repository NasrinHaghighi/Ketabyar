const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/hello',(req,res)=>{
res.send('hhhh')
    })
const PORT = 5000;
app.use(cors());     
app.use(bodyParser.json());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});