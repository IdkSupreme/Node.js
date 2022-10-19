const express = require('express');
const dotenv = express('dotenv');
const server = express();
dotenv.config();

const port = process.env.PORT

server.get('/',(request, res)=>{
    res.send('hola mundo')
});

server.listen(port,()=>{
    console.log(`Estoy en el puerto ${port}` .red);
})

