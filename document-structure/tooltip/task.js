const tips = [...document.querySelectorAll('.has-tooltip')];
let activeTip = null;
const tipText = document.createElement('div');
tipText.classList.add('tooltip');

tips.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    const check= activeTip && activeTip.previousElementSibling === el;

    if (check) {
      activeTip.classList.toggle('tooltip_active');
      return; 
    }

    tipText.innerHTML = el.title;

    const parent = el.parentElement;
    parent.appendChild(tipText);
    
    const { top, bottom, left, right } = el.getBoundingClientRect();
    const position = el.getAttribute('data-position');

    
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

    tipText.classList.add('tooltip_active');

    activeTip = tipText;
  });
});