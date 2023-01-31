let bgColor = document.querySelector('.color');
let colors = [0,1,2,3,4,5,6,'a','b','c','d','e','f']
let changeBtn = document.querySelector('.btn')
let body = document.querySelector('.container')
let newArr = []

changeBtn.addEventListener('click',()=>{
//    bgColor.textContent = 
    let hexColor = "#"
    
    for(let i=0;i<=5;i++){
        const random = getRandomValue()
        hexColor+= colors[random]        
    }
    bgColor.textContent = hexColor
    body.style.backgroundColor = hexColor
})


function getRandomValue(){
    const randomColor = Math.floor(Math.random()*colors.length)
    console.log(randomColor)
    return randomColor
}
