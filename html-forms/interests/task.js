const checkbox = document.querySelectorAll('.interest__check')
let arrCheck = []
let arrUp = []
let siblings = []
let arrDown = []
function lookUp(el) {
    const up1 = el.closest('.interest')
    const up2 = up1.closest('.interests').closest('.interest')
    if(up2) {
      const upCb = up2.querySelector('.interest__check')
      arrUp.push(upCb)
      lookUp(upCb)
      } else {
      }
    return arrUp
}

function lookDown(el) {
    const up1 = el.closest('.interest')
    const down1 = up1.querySelector('.interests')
  
    if(down1) {
      const down = down1.querySelectorAll('.interest__check')
        arrDown = Array.from(down)
      } else {
    }
    return arrDown
}
    
function checkPathDown (path, el) {
    console.log(path)
  for (const step of path) { 
      step.checked = el.checked
  }
}

function checkPathUp (path, el) {
for (const step of path) { 
    step.checked = el.checked
    let a = lookDown(step)
    const some = a.some(sibl => sibl.checked === el.checked)
     const every = a.every(sibl => sibl.checked === el.checked)

    if (some) {
        step.indeterminate = true
        if(every) {
            step.checked = el.checked
            step.indeterminate = false   
        }
      }  
    }
}

for (const cb of checkbox) {
    cb.addEventListener('change', () => {  
    arrUp = lookUp(cb)
    arrDown = lookDown(cb)
    checkPathDown (arrDown,cb)
    checkPathUp (arrUp, cb)
        arrCheck = []
        arrDown = []
        arrUp = []
    })
}
