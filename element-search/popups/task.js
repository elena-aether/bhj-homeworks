const modalMain = document.getElementById ("modal_main")
const showSuccess = document.querySelector (".show-success")
//console.log(showSuccess)
//const modalClose = document.querySelector (".modal__close")
//console.log(modalClose)


let modalCloseArr = Array.from(document.getElementsByClassName ("modal__close"))
//console.log(modalCloseArr)

const modalSuccess = document.getElementById ("modal_success")

modalMain.className = "modal modal_active"

modalCloseArr[0].onclick = function(){
    modalMain.className = "modal"
    //console.log(modalMain.className)
}

showSuccess.onclick = function(){
    modalMain.className = "modal"
    modalSuccess.className = "modal modal_active"
}

modalCloseArr[2].onclick = function(){
    modalMain.className = "modal"
    modalSuccess.className = "modal modal__close"
    //console.log(modalSuccess.className)
}