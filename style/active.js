const start = document.querySelector(".button__start");
const stop = document.querySelector(".button__stop");
const main = document.querySelector("body");


start.addEventListener("click", event => {
  event.target.classList.add("active");
  stop.classList.remove("active");
  main.classList.add("color");
})

stop.addEventListener("click", event => {
  event.target.classList.add("active");
  start.classList.remove("active");
  main.classList.remove("color");
})
