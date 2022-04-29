let ads = document.getElementsByClassName('rotator__case')
let arrAds = Array.from(ads)
let length = ads.length

function showItem(number) {
let speed = ads.item(number).dataset.speed
    
function chooseItem() {
    let color = ads.item(number).dataset.color
    let activeItem = document.querySelector ('.rotator__case_active')
    ads.item(number).style.color = color
    activeItem.className = "rotator__case"
    ads.item(number).className = "rotator__case rotator__case_active"
    }
    setTimeout(chooseItem, speed)
    }

    function getSpeed() {
        let speedSum = 0
        for (let i = 0; i < arrAds.length; i++) {
        speedSum = speedSum + (ads.item(i).dataset.speed) * 1
        }
        return speedSum
    }

for (let i = arrAds.length; i >= 0; i--) {
        setInterval (() => {
            showItem(i)
        }, getSpeed())
    }

    

  //let interval = setInterval (showAds, 1000)

  /*function getNumber(length) {
     return Math.floor(Math.random() * length);
  }
  
  function showAds() {
    number = getNumber(length)
    let color = getColor(number)
    ads.item(oldNumber).className = "rotator__case"
    ads.item(number).className = "rotator__case rotator__case_active"
    ads.item(number).style.color = color
    oldNumber = number
    return oldNumber
}*/