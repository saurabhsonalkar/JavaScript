//* clock

// const date = new Date();
// let time = date.toLocaleTimeString()

// const box = document.querySelector("#box")
// box.innerHTML = time






//* digital clock

const box = document.querySelector("#box")

setInterval(() => {
    const date = new Date()
    let time = date.toLocaleTimeString()
    box.innerHTML = time
    
}, 1000);