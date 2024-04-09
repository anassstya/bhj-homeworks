const rotators = document.querySelectorAll('.rotator__case');
const rotatorsArray = Array.from(rotators)

let currentIndex = 0

setInterval(function(){
  rotatorsArray.forEach((el,index) => {
    
    if(currentIndex === index){
      el.classList.add('rotator__case_active');
      el.style.color = el.dataset.color
    }
    else{
      el.classList.remove('rotator__case_active')
    }
  })
  currentIndex = (currentIndex + 1) % rotatorsArray.length;

}, 1000)
