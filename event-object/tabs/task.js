let tabs = Array.from(document.getElementsByClassName('tab'))
let content = document.getElementsByClassName('tab__content')

tabs.forEach((item) => {
    item.onclick = function() {
        let a = tabs.indexOf(item)
        const tabActive = document.querySelector('.tab_active')
        const contActive = document.querySelector('.tab__content_active')
        content.item(a).className = "tab__content tab__content_active"
        item.className = "tab tab_active"
        tabActive.className = 'tab'
        contActive.className = 'tab__content'
    }
})
