let controls = Array.from(document.querySelectorAll('.font-size'))
let textWindow = document.querySelector('.book')

controls.forEach((element) => {

function handler (event) {
    event.preventDefault()
    const controlActive = document.querySelector('.font-size_active')
    controlActive.classList.remove('font-size_active')
    element.classList.add('font-size_active')
    if (element.classList.contains('font-size_small')) {
        textWindow.classList.add('book_fs-small')
        textWindow.classList.remove('book_fs-big')
    } else if (element.classList.contains('font-size_big')) {
        textWindow.classList.add('book_fs-big')
        textWindow.classList.remove('book_fs-small')
} else {
    textWindow.className = 'book'
}

}
    element.addEventListener('click', handler)
    })
