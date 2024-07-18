const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// This will set how long the blur effect lasts
let int = setInterval(blurring, 3)

function blurring() {
    load++;

    if(load > 99) {
        // This function will stop the interval
        clearInterval(int); // We pass in int because that represents the interval
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // This will map the amount of time, 0 to 100, to the blur which is 30 to 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/* Here is the function for the mapping. 
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
This will map the time which is 0 to 100, to the opacity which is 1 to 0*/
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}