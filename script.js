
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const form = document.getElementById("multiStepForm");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");

function showStep(step) {
  steps.forEach((s, i) => s.classList.toggle("active", i === step));
  prevBtn.style.display = step > 0 ? "inline-block" : "none";
  nextBtn.style.display = step < steps.length - 1 ? "inline-block" : "none";
  submitBtn.style.display = step === steps.length - 1 ? "inline-block" : "none";
}

function nextStep() {
  saveStepData();
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

function saveStepData() {
  const inputs = steps[currentStep].querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    let hidden = form.querySelector(`input[name="${input.name}"][type="hidden"]`);
    if (!hidden) {
      hidden = document.createElement("input");
      hidden.type = "hidden";
      hidden.name = input.name;
      form.appendChild(hidden);
    }
    hidden.value = input.value;
  });
}

showStep(currentStep);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  saveStepData();
  const formData = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycbxgWUHJ1YoZk9ZDWkHZx3dHrarbCq07IeygA9drTq7W-J_zK-7CNrsIWcMz43HQu3fL/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(formData)
  }).then(() => {
    window.location.href = "thankyou.html";
  });
});
