function counter() {
  const timer = document.getElementById('timer');
  let totalSeconds= 59;
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  function updateTimer() {
    const hours1 = hours < 10 ? '0' + hours : hours;
    const minutes1 = minutes < 10 ? '0' + minutes : minutes;
    const seconds1 = seconds < 10 ? '0' + seconds : seconds;
    
    let time = `${hours1}:${minutes1}:${seconds1}`
  
    timer.textContent = time;
    if(seconds >= 0){
      seconds -= 1
    }
    else{
      timer.textContent = '00:00:00'
      alert('Вы выиграли в конкурсе');
      location.assign('https://www.sanrio.com/collections/hello-kitty');
    }
  }
  setInterval(updateTimer, 1000)
}

counter()