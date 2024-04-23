const subscribe = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

window.addEventListener('DOMContentLoaded', () => {
  if(!document.cookie){
    subscribe.classList.add('modal_active');
  }
})

close.addEventListener('click', () => {
  subscribe.classList.remove('modal_active');
  document.cookie = 'subscribe=closed';
})


