let menu = document.querySelector('.dropdown__value')
let dropdown = document.querySelector ('.dropdown__list')
let menuItems = document.getElementsByClassName('dropdown__link')

function handler1() {
    dropdown.className = "dropdown__list dropdown__list_active"
    return false
    }

function handler2() {
    dropdown.className = "dropdown__list"
    }

menu.addEventListener ('click', handler1)
dropdown.addEventListener ('mouseover', handler1) 
dropdown.addEventListener ('mouseout', handler2) 

menuItems.item.onclick = function () {
    dropdown.className = "dropdown__list"
}
