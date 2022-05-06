function chooseItem() {

    const ads = document.getElementsByClassName('rotator__case')
    const activeItem = document.querySelector ('.rotator__case_active')
    const arrAds = Array.from(ads)
    let index = arrAds.indexOf(activeItem)
    index = (index + 1) % arrAds.length 

    const color = ads.item(index).dataset.color
    ads.item(index).style.color = color
    activeItem.className = "rotator__case"
    ads.item(index).className = "rotator__case rotator__case_active"
    const speed = ads.item(index).dataset.speed

    setTimeout(chooseItem, speed)
    }

function getInt() {
    const ads = document.getElementsByClassName('rotator__case')
    let speedSum = 0
    for (let i = 0; i < ads.length; i++) {
    speedSum = speedSum + (ads.item(i).dataset.speed) * 1
    }
    return speedSum
    }
    
    setInterval(chooseItem, getInt()) 
    

    /*let i = 0
while ( i < arr.length) {
    
        setTimeout (() => {
            showItem(i)
            }, getSpeed())
        i = (index + 1) % arr.length

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