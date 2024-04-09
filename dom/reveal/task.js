const reveal = [...document.querySelectorAll('.reveal')]
const body =document.querySelector('body')

function visible(){
  reveal.forEach((el) =>{
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom > 0){
      el.classList.toggle('reveal_active');
    } 
  })
}
body.onscroll = visible;