// const body = document.querySelector("body")



// const gray = document.querySelector("#one")
// gray.addEventListener('click',()=>{
//     body.style.backgroundColor="gray"
// })

// const white = document.querySelector("#two")
// white.addEventListener('click',()=>{
//     body.style.backgroundColor="white"
// })

// const blue = document.querySelector("#three")
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor="blue"
// })

// const yellow = document.querySelector("#four")
// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor="yellow"
// })



const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        
        let color=e.target.id;

        switch(color)
        {
            case "grey":{
                body.style.backgroundColor="gray"
                break;
            }
            case "white":{
                body.style.backgroundColor="white"
                break;
            }
            case "blue":{
                body.style.backgroundColor="blue"
                break;
            }
            case "yellow":{
                body.style.backgroundColor="yellow"
                break;
            }
        }
       
    })
}
)