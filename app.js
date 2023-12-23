let hEl = document.getElementById("hrs");
let minEl = document.getElementById("min"); 
let secEl = document.getElementById("sec"); 
let ampmEl = document.getElementById("ampm");   

function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12 ) {
        h = h - 12;
        ampm = "PM";
    }

    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    h = h < 10 ? "0" + h : h;

    hEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=> {
        updateTime()
    }, 1000)
}

updateTime();