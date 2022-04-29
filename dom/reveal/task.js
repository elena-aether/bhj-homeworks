let blocks = document.getElementsByClassName('reveal')
let a = blocks.length
for(let i = 0; i < a; i++)
{
    document.addEventListener('scroll', () =>{
        let top = blocks.item(i).getBoundingClientRect().top
        let bottom = blocks.item(i).getBoundingClientRect().bottom
        const viewportHeight = window.innerHeight
        if(top < viewportHeight && 0 < bottom) {
            if (!blocks.item(i).classList.contains('reveal_active')) {
            blocks.item(i).classList.add('reveal_active')
            }   
        } else if(top > viewportHeight || 0 > bottom) {
            if (blocks.item(i).classList.contains('reveal_active')) {
            blocks.item(i).classList.remove('reveal_active')
            }   
        } 
//console.log(top, bottom)
    })
}
