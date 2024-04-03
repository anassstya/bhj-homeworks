function increaseCookie(){
  const cookie = document.getElementById('cookie');
  const clicker__counter = document.getElementById('clicker__counter');
  const speed__counter = document.getElementById('speed__counter');
  let totalClicks = 0;
  let totalTime = 0;
  let lastClickTime = new Date();
  
  function updateClickSpeed() {
    const currentTime = new Date();
    const timeDifference = (currentTime - lastClickTime) / 1000; 
    const clicksPerSecond = 1 / timeDifference;
    speed__counter.textContent = clicksPerSecond.toFixed(2); 
    lastClickTime = currentTime;
  }

  function countClicks(){
    totalClicks += 1;
    clicker__counter.textContent = totalClicks;
    updateClickSpeed();

    if(clicker__counter.textContent % 2 === 0){
      cookie.width = 250;
      cookie.height = 250;
    } else{
      cookie.width = 300;
      cookie.height = 300;
    }
  }
  cookie.onclick = countClicks;
}

increaseCookie();