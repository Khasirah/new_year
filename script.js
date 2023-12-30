const container = document.querySelector('.fireworks')
const fireworks = new Fireworks.default(container, {
  acceleration: 1.00,
  gravity: 1.5,
  particles: 150,
  intensity: 45,
})
fireworks.start()

const titleBox = document.getElementById('title-box');
setInterval(() => {
  const year = new Date().getFullYear();
  const titleTex = "THANK YOU " + year;
  if (titleBox.innerText == "THANK YOU 2023") {
    titleBox.innerText = "GOOD BYE " + year;
  } else {
    titleBox.innerText = titleTex;
  }
}, 3000);


function getDistanceFromNow() {
  
  const year = new Date().getFullYear();
  const countDownDate = new Date(year + 1, 0, 1);
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days, hours, minutes, seconds
  }
}

const timerBox = document.getElementById("timer-box");
setInterval(() => {
  const distance = getDistanceFromNow();
  timerBox.innerText = distance.days + "d " + distance.hours + "h " + distance.minutes + "m " + distance.seconds + "s";
}, 1000);