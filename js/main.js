let button = document.querySelector(".mobile-nav-button");
let span = document.querySelector(".mobile-nav-button__icon");
button.onclick = function () {
  span.classList.toggle("active");
};

let button = document.querySelector(".play-btn");
let video = document.querySelector(".story__video-object");
let buttonImg = document.querySelector(".button-btn-img");
button.onclick = function () {
  if (video.paused) {
    video.play();
    buttonImg.src = "images/play-btn.svg";
  } else {
    video.pause();
    buttonImg.src = "images/pause-icon.svg";
  }
};
