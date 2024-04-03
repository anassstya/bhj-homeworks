function mole_Game(){
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');
  
  function getHole(index){
    return hole = document.getElementById(`hole${index}`);
  };

  function check(hole){
    if(hole.className.includes('hole_has-mole')){
      dead.textContent ++;
    } else {
      lost.textContent ++;
    }

    if(dead.textContent == 10){
      alert('Congrats!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if(lost.textContent == 5){
      alert('Try again!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }

  for(let i = 1; i<=9; i++){
    const hole = getHole(i);
    hole.onclick = function(){
      check(hole);
    }
  }
} 
mole_Game();