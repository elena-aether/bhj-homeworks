const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let oldTime = 0
const clicksPerS = document.getElementById("clicks__pers");

cookie.onclick = function() {
let number = Number(clickerCounter.textContent)
let date = Date.now()
let clickTime = Number(date)

number++

if (number % 2 != 0) {
    cookie.width = 175
} else {
    cookie.width = 200
}

clickerCounter.textContent = number
     
if (number === 1) {
    clicksPerS.textContent = 0
} else {
    clicksPerS.textContent = (1000 / (clickTime - oldTime)).toFixed(2)
    }
oldTime = clickTime

}
