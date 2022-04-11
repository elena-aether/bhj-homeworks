let holes = []
function getHole() {
    for (let i = 1; i <=9; i++) {
        let id = 'hole'+i
        const hole = document.getElementById(id)
        holes.push(hole)
    }
    return(holes)
}

getHole()

let dead = Number(document.getElementById("dead").textContent)
let lost = Number(document.getElementById("lost").textContent)

for (let i = 0; i < 9; i++) {
    holes[i].onclick = function() {
        if (holes[i].classList.contains( 'hole_has-mole' )) {
        dead++
        document.getElementById("dead").textContent = dead
    } else {
        lost++
        document.getElementById("lost").textContent = lost
    }
}
}