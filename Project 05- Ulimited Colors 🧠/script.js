// way - 1
/*
const colors = ["Red","Green","Blue","Yellow","Orange","Purple","Pink","Brown","Black","White","Gray","Cyan","Magenta","Teal","Lavender","Coral"];

let intervalId;
document.querySelector('#start').addEventListener('click',()=>{
    intervalId = setInterval(()=>{
            let index = Math.floor(Math.random()*colors.length)
            document.body.style.backgroundColor=colors[index]
    },500)
})

document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(intervalId)
})

*/

// way - 2
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    // document.body.style.backgroundColor=color
    return color;
    
}
let intervalId;

const startChnagingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click',startChnagingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

