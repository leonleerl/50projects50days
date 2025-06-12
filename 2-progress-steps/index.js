const circles = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

let currentActive = 1;

const updateProgress = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

const handlePrev = () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
};

const handleNext = () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
};

updateProgress();
