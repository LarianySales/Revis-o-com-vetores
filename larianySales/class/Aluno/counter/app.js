// let diminui = document.querySelector('btn decrase')
// let adicionar = document.querySelector('btn incrase')
// let reset = document.querySelector('btn reset')

// reset.addEventListener('click', ()=>{

// })

let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

// console.log(btns)//nodeList == array
// console.log(value)

btns.forEach((btn) =>{
//   console.log(btn)
btn.addEventListener('click', (e)=>{//faz com que todos os botoes tenham o evento click
    // alert('oi')
const style = e.currentTarget.classList
// console.log(style)

if(style.contains('decrase')){
    count--
}else if(style.contains('incrase')){
    count++
}else{
    count = 0
}


if(count > 0){
    //blue
    value.style.color = 'blue'
}else if( count < 0){
    //red
    value.style.color = 'red'
}else if(count === 0){
    //hsl(209,61%,61%)
    value.style.color = 'hsl(209,61%,61%)'
}
})
});




 
