/*O que foi feito: Segundo as instruções da api da marvel, precisou-se pegar uma TimeStamp,
que usei o Math.floor(Date.now / 1 por conta de que ela pede 1 segundo.
Em seguida, pega-se a chave pública, e a privada e coloca-se em um gerador de hash md5, usei um gerador online.
Em seguida, crio constantes e atribuo seus devidos valores. Em seguida, passo para dentro da URL.

*/


const timeStamp = '1622238093019';
const marvelPublicKey = '594ca6c8dc5aa193f56f8447309be9af';
const md5 = 'a80dd4a754a4ada4d9426e697fb745f7';


fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${marvelPublicKey}&hash=${md5}`)
.then((resposta)=>{
    return resposta.json();
}).then((jsonParsed)=>{ 

 /*Aqui peguei o ID que criei na tag html e atribui à constante "herois"*/
    const herois = document.querySelector('#herois');
/*Aqui usei a função ForEach para que cada heroi seja alocado na função funcaoCriarHeroi,
usando um loop para cada item (element)*/
    jsonParsed.data.results.forEach((element) => {
    const fonteImagem = element.thumbnail.path +'.'+ element.thumbnail.extension
    const nomedoHeroi = element.name

    funcaoCriarHeroi(fonteImagem, nomedoHeroi, herois)
});

    console.log(jsonParsed);
})
 

/*Nesta função criei as divs que alocam as imagens advindas da API MARVEL e em seguida
atribui os parâmetros que serão trocados na codificação acima*/


function funcaoCriarHeroi(srcImage, nameHero, divToAppend){
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const textName = document.createElement('text')
    const divImg = document.createElement('img')

    textName.textContent = nameHero;
    divImg.src = srcImage

    div2.appendChild(divImg)
    div2.appendChild(textName)
    div1.appendChild(div2)
    divToAppend.appendChild(div1)

    div1.classList.add('personagens')
}

 