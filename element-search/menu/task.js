const menuLink = document.querySelectorAll('.menu__link')
let menuLinkArr = Array.from(menuLink)

menuLinkArr.forEach((item) => {
    
    let p = item.closest('.menu__item')
    let a = p.querySelector("ul")
   
    if (a) {

        p.onmouseover = function() {
        a.className = "menu menu_sub menu_active"
        }
        p.onmouseout = function() {
            a.className = "menu menu_sub" 
        }
    } else {
        item.onclick = function() {}
   }
})
