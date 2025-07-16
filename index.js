const express = require('express');
const app = express();
const products = require('./src/utils/products.json')
console.log('products',products)
app.get("/hy-testing",(req,res)=>{
    res.status(200).send('Hy test response');
})

app.get("/next-hy-testing",(req,res)=>{
    res.status(200).send('Hy next test response');
});


app.get('/fetch-products',(req,res)=>{
    res.status(200).send(products);
})
app.listen(3000,()=>{
    console.log('server is running')
})