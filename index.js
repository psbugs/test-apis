const express = require('express');
const app = express();


app.get("/hy-testing",(req,res)=>{
    res.status(200).send('Hy test response');
})

app.get("/next-hy-testing",(req,res)=>{
    res.status(200).send('Hy next test response');
});

app.listen(3000,()=>{
    console.log('server is running')
})