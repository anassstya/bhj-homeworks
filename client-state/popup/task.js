const subscribe = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

window.addEventListener('DOMContentLoaded', () => {
  const getCookie = (name) => {
    let value = ';' + document.cookie;
    let parts = value.split(';' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift(); 
    } 
  }
  if(getCookie('subscribe') !== 'closed'){
    subscribe.classList.add('modal_active');
  }
})

close.addEventListener('click', () => {
  subscribe.classList.remove('modal_active');
  document.cookie = 'subscribe=closed';
})