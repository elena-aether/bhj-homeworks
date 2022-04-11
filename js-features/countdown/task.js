let startTime = document.getElementById("timer");
let t = startTime.textContent;

//console.log(h+':'+m+':'+s)
    let nh = Number(t.substring(0, 2))
    let nm = Number(t.substring(3, 5))
    let ns = Number(t.substring(6, 8))
    
    function toTime(ns, nm, nh, twoDigits) {
        function twoDigits(a) {
            if( a >= 0 && a <= 9) {
          return "0" + a;
         } else { 
         return "" + a;
         }
        }
    let s = twoDigits(ns)
    let m = twoDigits(nm)
    let h = twoDigits(nh)
    let t = h+':'+m+':'+s;
    startTime.textContent = t;
    }
   
    if (ns > 0 & ns < 60){
    let interval = setInterval(() => {
        ns--;
        toTime(ns, nm, nh)
        if (ns === -1 & nm != 0) {
            ns = 59
            nm = nm - 1
            toTime(ns, nm, nh)
        } else if (ns === -1 & nm === 0 & nh != 0) {
            ns = 59
            nm = 59
            nh = nh - 1
            toTime(ns, nm, nh)
        } if (ns === 0 & nm === 0 & nh === 0) {
            toTime(ns, nm, nh)
            clearInterval(interval)
            alert ('Winner!')
        } 
       
}, 1000);
}  

/*
let startTime = document.getElementById("timer");
let t = Number(startTime.textContent);
let interval = setInterval(() => {
    if (t > 0) {
        console.log(t - 1)
        t--;
        startTime.textContent = t;
    } 
    if (t === 0) {
        clearInterval(interval)
        alert('You are the Winner!')
    }
}, 1000);*/
