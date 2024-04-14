const tips = [...document.querySelectorAll('.has-tooltip')];
const activeTip = null;

tips.forEach(el => {
  const tipText = document.createElement('div');
  tipText.innerHTML = el.title;
  tipText.classList.add('tooltip');
  el.addEventListener('click', (event) => {
    event.preventDefault();
    tipText.classList.toggle('tooltip_active');
    el.appendChild(tipText);
  })
})