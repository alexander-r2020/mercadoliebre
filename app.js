const express = require('express');
const app= express();
const path = require('path');
const port=3030;

/*******Estableciendo carpeta estatica PUBLIC*** */
app.use(express.static('public'));

/*******Estableciendo mi Pagina HOME como inicio*** */
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))

/********Iniciando Servidor****** */
app.listen(port,()=> console.log("estoy en el puerto " + port))
