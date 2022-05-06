const tooltips = document.querySelectorAll('.has-tooltip')

for(const el of tooltips) {
    const elText = el.title
   
    if (el) {
        el.addEventListener('click', (e) => {
           e.preventDefault()
           
           const msgs = document.querySelectorAll('.tooltip')

           if(msgs.length != 0) {
               for(const each of msgs) {
                   each.remove()
               }
           }

           /* const currentMsg = document.querySelector('.tooltip_active')
           if (currentMsg) {
                currentMsg.classList.remove('tooltip_active')
           }*/
           
            let msg = document.createElement('div')
            msg.textContent = elText
            msg.classList.add('tooltip')
            msg.classList.add('tooltip_active')
            el.insertAdjacentElement('beforebegin', msg)
            
            const coords = el.getBoundingClientRect();
            
            msg.style.cssText = "position: absolute";
            msg.style.left = coords.left + "50px";
            msg.style.top = coords.bottom;

        })
    }
}
