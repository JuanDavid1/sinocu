const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/upload", (req, res) => {

    setTimeout(() =>{
        console.log('Archivo Cargado')
        return res.status(200).json({result: true, msg: 'Archivo Cargado'});
    }, 3000);
});

app.delete("/upload", (req, res) =>{
    console.log(`Archivo Eliminado`)
    return res.status(200).json({result: true, msg: 'Archivo Eliminado'})
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});
