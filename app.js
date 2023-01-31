let bgColor = document.querySelector('.color');
let colors = ['red','blue','green','yellow','lime','aqua']
let changeBtn = document.querySelector('.btn')
let body = document.querySelector('.container')
let newArr = []

changeBtn.addEventListener('click',()=>{
//    bgColor.textContent = 
    const random = getRandomValue()
    bgColor.textContent = colors[random]
    body.style.backgroundColor = colors[random]
})


function getRandomValue(){
    const randomColor = Math.floor(Math.random()*colors.length)
    console.log(randomColor)
    return randomColor
}

