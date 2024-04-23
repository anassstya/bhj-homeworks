const editor = document.getElementById('editor');
const btn = document.getElementById('btn');

editor.addEventListener('change', () => {
  localStorage.setItem('text', editor.value);
})

window.addEventListener('load', () => {
  editor.textContent = localStorage.getItem('text')
})

btn.addEventListener('click', () => {
  editor.textContent ='';
  localStorage.removeItem('text');
})

