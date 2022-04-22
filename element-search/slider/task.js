const left = document.querySelector(".slider__arrow_prev")
const right = document.querySelector(".slider__arrow_next")



let pict = Array.from(document.querySelectorAll('.slider__item'))
let current_picture = document.querySelector(".slider__item_active")
let number = pict.indexOf(current_picture)
let next_picture = document.querySelectorAll('.slider__item').item(number + 1)

right.onclick = function() {
    document.querySelectorAll('.slider__item').item(number).className = "slider__item"
    if (number < pict.length - 1) {
        number ++
    } else if (number === pict.length - 1 ) {
        number = 0
    } 
    document.querySelectorAll('.slider__item').item(number).className = "slider__item slider__item_active"
} 

left.onclick = function() {
    document.querySelectorAll('.slider__item').item(number).className = "slider__item"
    if (number > 0) {
        number --
    } else if (number === 0 ) {
        number = pict.length - 1
    } 
    document.querySelectorAll('.slider__item').item(number).className = "slider__item slider__item_active"
} 

console.log(left)
console.log(right)
console.log(pict)
console.log(number)
console.log(next_picture)