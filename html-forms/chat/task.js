const btn = document.querySelector('.chat-widget__side')
const chat = document.querySelector(".chat-widget")
const msgInput = document.getElementById ('chat-widget__input')
let cl = ""
let msgTxt = ""
const replies = ['иди домой', 'закурить есть?', 'че? не понял', 'what???', 'ты устал, досвидос!', 'Herr Professor, lecken Sie mich am Arsch!']

btn.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

function addMsg(cl, txt) {
  let t = new Date()
   let h = t.getHours().toString().padStart(2,0)
   let m = t.getMinutes().toString().padStart(2,0)
   let time = `${h}:${m}`
const messages = document.querySelector( '.chat-widget__messages' );
messages.innerHTML += `
  <div class="${cl}">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${txt}
    </div>
  </div>
`; 

messages.dataset.time = t
const mc = document.querySelector('.chat-widget__messages-container') 
const ma = document.getElementById('chat-widget__messages') 
const msg = document.getElementsByClassName('message')
const cBottom = mc.getBoundingClientRect().bottom
let msgBottom = ma.getBoundingClientRect().bottom
if(msgBottom >= cBottom) {
msg[msg.length - 1].scrollIntoView()
}
}

function chooseRepl () {
  let index = Math.floor(Math.random() * replies.length)
  return replies[index]
}

msgInput.addEventListener ('input', () => {
   msgTxt = msgInput.value
   return msgTxt
})

msgInput.addEventListener ('keydown', (e) => {
if (e.key === 'Enter') {
  if (msgTxt != "") {
    cl = "message message_client"
   addMsg(cl, msgTxt)
   msgInput.value = ""
   msgTxt = ""
  

   setInterval(() => {
      let t = new Date().getTime()
      const ma = document.getElementById('chat-widget__messages')
      let maTime = new Date (ma.dataset.time).getTime()
      if ((t - maTime) > 30000) {
        addMsg("message", "ты тут вообще?")
      }
    }, 3000)

   setTimeout(()=> {
     cl = "message"
    addMsg(cl, chooseRepl())
   
   }, Math.random() * 2000) 
  }

}
})


