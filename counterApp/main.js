const timeH = document.querySelector('h1')

let timeSec = 10;

timeH.innerHTML = `00:${timeSec}`;


const countDown = setInterval(() => {
    timeSec--;
    timeH.innerHTML = `00:${timeSec}`;

    if (timeSec <= 0 || timeSec < 1) {
        timeH.innerHTML = "TIME OUT"
        clearInterval()
    }
}, 1000);