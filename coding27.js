var btnNext = document.getElementById("btnNext");
var btnPrev = document.getElementById("btnPrev");
var stepLine = document.getElementById("step-line1");
var circles = document.querySelectorAll(".circle");

let currentStep = 1;

btnNext.addEventListener("click", () => {
  currentStep++;

  if (currentStep == circles.length) {
    currentStep = 4;
  }
  updateStep();
});

btnPrev.addEventListener("click", () => {
  currentStep--;

  if (currentStep < 1) {
    currentStep = 0;
  }
  updateStep();
  console.log(currentStep);
});

function updateStep() {
  if (currentStep == 1) {
    btnPrev.disabled = true;
  } else if (currentStep == circles.length) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }

  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  var activeCircles = document.querySelectorAll(".active");
  console.log(activeCircles.length);
  stepLine.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
}
