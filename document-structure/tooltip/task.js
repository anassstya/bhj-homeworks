const tips = [...document.querySelectorAll('.has-tooltip')];
const activeTip = null;
const tipText = document.createElement('div');
tipText.classList.add('tooltip');

tips.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    tipText.innerHTML = el.title;
    tipText.classList.add('tooltip_active');
    const parent = el.parentElement;
    parent.appendChild(tipText);

    const {top, bottom, left, right} = el.getBoundingClientRect();

    const position = el.getAttribute('data-position')
    if (position === 'right') {
      tipText.style.left = `${right}px`;
      tipText.style.top = `${top}px`;
    }
    if (position === 'left') {
      tipText.style.left = `${left - tipText.offsetWidth}px`;
      tipText.style.top = `${top}px`;
    }
    if (position === 'top') {
      tipText.style.left = `${left}px`;
      tipText.style.top = `${top - tipText.offsetHeight}px`; 
    }
    if (position === 'bottom') {
      tipText.style.left = `${left}px`;
      tipText.style.top = `${bottom}px`;
    }
  })
})
