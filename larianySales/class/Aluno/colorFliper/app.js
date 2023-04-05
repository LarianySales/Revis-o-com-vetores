const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// vetor com as cores da página

const btn = document.getElementById('btn')//para pegar a interação no botão
const color = document.querySelector('.color')//pegar e mudar o span
//dois paramentros o evento e a função
btn.addEventListener('click', ()=> {
    //para diminuir a quantidade de mudanças,só que assim fica statico,mas agora ele vai altera a cor de maneira com menos alterações
const randomNumber = getRandomNumber()
// referenciamento da function que fez um calculo de indice aleatorio que irá sortear as cores dentro do vetor onde será usada para mudar as cores ao apertar o botão


//ter acesso a todas as tags html com o document:
// console.log(document.body)



//para acessar o array e mudar a cor de fundo da página:
document.body.style.backgroundColor = colors[randomNumber]
//<-foi colocado dentro o referenciamento da function que fez um calculo de indice aleatorio que irá sortear as cores dentro do vetor;
// o backgroundColor é sempre junto e com color com letra maiuscula.

//para mudar o texto da pagina que sinalize o nome das cores junto com a mudança do fundo,no caso o texto na tag span:
color.textContent = colors[randomNumber]
//<-foi colocado dentro o referenciamento da function que fez um calculo de indice aleatorio que irá sortear as cores dentro do vetor


})
// console.log(Math.random()*4)
//o Math junto com o random vai até o indice que queremos(4),e vai ajudar a sortear

//mas para apagar os numeros das caixas decimaais e levar paa baixo:
console.log(Math.floor(Math.random()*4))

function getRandomNumber(){
    //funcão que irá fazer o calculo aleatorio do indice para escolher sem precisar fazer mais calculos ao adicionar mais cores ao vetor :

    return Math.floor(Math.random()* colors.length)
    //para ter acesso a uma quantidade aleatoria de cores sem precisar computar tudo quando for adicionar mais cores

}