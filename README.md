# cartaoVaibemMarvel-Projeto

/* 
 Para inicializar o servidor, favor usar o comando NPM START, ele inicializará o Nodemon e o LocalHost irá rodar na porta 7777, mostrando no console os status.

Aqui se encontra o repositório do que nomeei de "CartaoVaiBemMarvel-Projeto". Nele usei NodeJs no Back-end e HTML5 e CSS no Front-End, infelizmente não consegui 
dar lindos acabamentos no Front End com o próprio CSS e nem com Bootstrap, pois o tempo era corrido e necessitava-se de empenho para a codificação do back-end
para atingir o objetivo proposto.

nas bibliotecas do NodeJs, usei a Express e a Cors que libera uma aplicação consumir recursos de outra mesmo estando em domínio diferente.
Usei o .use(express.static()) para o Node pegar o caminho estático da pasta "views" e mandar para o front mesmo sem precisar acessar a função .render presente
somente no express-mustache e assim poder-se usar o simples "res.SEND('index')".

Usei a função express.json() para que fosse possível passar um objeto e o "urlencoded({extended:true})" para que o NodeJs usasse o package qs.


*/
