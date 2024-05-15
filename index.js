const express = require('express');
const PORT = 3000;
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello from Express Server!');
});

app.listen(PORT,()=>{
    console.log('Node server is listening on ${PORT}');
});