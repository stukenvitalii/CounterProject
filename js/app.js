const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown")

let countdownDate = new Date(2022,9,31,16,0,0).getTime();
console.log(countdownDate);
function getCountdownTime() {
    const currentTime = new Date().getTime();
    console.log(currentTime);
    const difference = countdownDate - currentTime;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(difference / oneDay);
    let hours = Math.floor((difference % oneDay) / oneHour);
    let minutes = Math.floor((difference % oneHour) / oneMinute);
    let seconds = Math.floor((difference % oneMinute) / oneSecond);

    const values = [days,hours,minutes,seconds];
    console.log(values);

    items.forEach(function (item, index) {
        item.textContent = values[index];
    });
    if(difference < 0){
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class = 'expired'>Ура! Савватан приехал!</h4>";
    }
}

let countdown = setInterval(getCountdownTime,1000);

getCountdownTime();