const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
            // res.send("<h1>Hello this is Express server</h1>")
            res.write("<h1>Hello</h1>");
            res.end();
});
app.listen(PORT,console.log('server listening'))