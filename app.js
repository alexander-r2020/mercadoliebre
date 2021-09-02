const express = require('express');
const app= express();
const path = require('path');
const port=3030;

/*******Estableciendo carpeta estatica PUBLIC*** */
app.use(express.static('public'));

/*******Estableciendo mi Pagina HOME como inicio*** */
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))

/**********Estableciendo pagina Register  y login*********/
app.get('/register',(req,res)=>res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html')))

/********Iniciando Servidor al final de todo****** */
app.listen(port,()=> console.log("estoy en el puerto " + port))
