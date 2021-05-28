/*Usei a livraria Dotenv para requisitar as variáveis do documento .env*/
require('dotenv').config({path:'variables.env'})


const app = require('./api')


app.listen(process.env.PORT, ()=>{
    console.log('Servidor Marvel rodando na porta: ' + process.env.PORT)
})