const express = require('express')
const app = express()
const port = 3000


app.get('/',(req, res) =>{
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send(`hello world may dm ${c}`)
})

app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})