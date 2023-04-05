const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//vetor com os caracteres de cores hexadecimais,no caso os valores randomicos

const btn = document.getElementById('btn')//para pegar a interação no botão
const color = document.querySelector('.color')//pegar e mudar o span
//dois paramentros o evento e a função

//foi adcionado evento para colocar o evento no botão
btn.addEventListener('click',()=>{
let hexColor = '#'
 //foi colocado # por ser o primeiro caratere usado em cores hexa... para referencia-las

 //vai ser usada uma estruturad de repetição para que não precise digitar a cor quando for mudar e só aleatorizar,começando só com zero e ir mudando com o click
 
 for(let i=0; i<6 ;i++){
    hexColor += hex[getRandomNumber()]//vai gerar uma cor diferente com os caracteres especificados  com uma quantidade de 6 caracteres fora a # ,no primeiro vetor sem precisar digitar as combinações,os que ta dentro do array,
 }

    //para acessar o array e mudar a cor de fundo da página:
document.body.style.backgroundColor = hexColor//- é diferente pois necessitam de certa atenção
//ainda quando estava com o zero era pq não tinha sido feita a questão de fazer indices em ordem aleatorias,posis são cores hexadecimais.Mas agr foi atribuido a variavel por ela já ter as cores que serão usadas. 


// o backgroundColor é sempre junto e com color com letra maiuscula.

//para mudar o texto da pagina que sinalize o nome das cores junto com a mudança do fundo,no caso o texto na tag span:
color.textContent = hexColor
//foi atribuido a variavel por ela já ter as cores que serão usadas. 


})

function getRandomNumber(){
    //funcão que irá fazer o calculo aleatorio do indice para escolher sem precisar fazer mais calculos ao adicionar mais cores ao vetor :

    return Math.floor(Math.random()* hex.length)//foi mudado o valor para hex para que funcione
    //para ter acesso a uma quantidade aleatoria de cores sem precisar computar tudo quando for adicionar mais cores

}