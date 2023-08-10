function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll untuk melihat";

  document.getElementById("icon-up").style.display = "none";

  document.getElementById("icon-down").style.display = "block";
}
function changeImage(element) {
  element.setAttribute("src", "jumbo2.png");
}
function changeImageBack(element) {
  element.setAttribute("src", "jumbo1.png");
}
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove(".active");

    buttons.forEach((btn) => {
      btn.classList.remove(".active");
    });
  });

  slides[manual].classList.add(".active");
  buttons[manual].classList.add(".active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = 1;
  });
});
buttons.forEach(function (btn, i) {
  btn.addEventListener("click ", function () {
    manualNav(i);
    currentSlide = i;
  });
});
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");

  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
var codingProject = document.querySelectorAll(".project");
codingProject.forEach((project) => {
  project.dataset.aos = "fade-down";
});

function modelAppear() {
  var model = document.getElementById("container-model");
  var button = document.getElementById("submit");
  var btnClose = document.getElementById("span");
  console.log(model);
  model.style.visibility = "visible";
}

var animate = document.querySelector(".astronaut-takeoff");

if (animate) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      animate.classList.add(".animation");
    }, 400);
  });
}
var splash = document.querySelector(".splash");
if (splash) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      splash.style.display = "none";
    }, 3000);
  });
}
var animate = document.querySelector(".astronaut-takeoff");
if (animate) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      animate.classList.add("animation");
    }, 400);
  });
}
var splashText = document.querySelector(".splash-text");
if (splashText) {
  setTimeout(function () {
    splashText.innerHTML = "Come in!";
  }, 2000);
}
AOS.init();
