let count = 0;
const container = document.querySelector("span")
container.innerHTML = count;

document.querySelector('#add').addEventListener('click',()=>{
    if(count<20)count = count + 1
    container.innerHTML = count;
})

document.querySelector('#minus').addEventListener('click',()=>{
    if(count>0)count = count - 1
    container.innerHTML = count;
})