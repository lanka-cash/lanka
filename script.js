let currentStep = 0;
const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector("button[onclick='nextStep()']");
const prevBtn = document.querySelector("button[onclick='prevStep()']");
const submitBtn = document.querySelector("button[type='submit']");

function showStep(step) {
  steps.forEach((s, i) => s.classList.toggle("active", i === step));
  prevBtn.style.display = step > 0 ? "inline-block" : "none";
  nextBtn.style.display = step < steps.length - 1 ? "inline-block" : "none";
  submitBtn.style.display = step === steps.length - 1 ? "inline-block" : "none";
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

showStep(currentStep);

document.getElementById("multiStepForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("https://script.google.com/macros/s/AKfycbw5iVxf8HCDXNls1yYt-ZWHiWuuD_e_KClg4Wl7i4i65aXGmN775avUnNU8PJdUSWgJ/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(formData)
  }).then(() => {
    window.location.href = "thankyou.html";
  });
});
