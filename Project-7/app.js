const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 
let int = setInterval(bluring, 30) //to progress 30 seconds

function bluring(){
    load++

    if(load > 99){
        clearInterval(int) //ıt means to stop progress
    }
    console.log(load)
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load,0, 100, 1, 0)
    bg.style.filter =`blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax){
    return(number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}