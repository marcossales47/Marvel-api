/*Aqui instanciei o express e sua função de roteamento, atribuindo à '/' a pagina principal
do LocalHost*/

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
res.send('index')
 })

 //Exportei o módulo
module.exports = router;      