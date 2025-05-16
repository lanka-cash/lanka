const scriptURL = 'https://script.google.com/macros/s/AKfycbxgWUHJ1YoZk9ZDWkHZx3dHrarbCq07IeygA9drTq7W-J_zK-7CNrsIWcMz43HQu3fL/exec';
const form = document.getElementById('data-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      msg.textContent = 'සාර්ථකව යොමු විය!';
      form.reset();
    })
    .catch(error => {
      msg.textContent = 'දෝෂයකි: ' + error.message;
    });
});
