const reveal = [...document.querySelectorAll('.reveal')]
const body =document.querySelector('body')

function visible(){
  reveal.forEach((el) =>{
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight){
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  })
}
body.onscroll = visible;