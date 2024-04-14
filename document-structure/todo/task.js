const form = document.querySelector('form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');
const body = document.querySelector('body')

form.addEventListener('submit', (event) => {  
  event.preventDefault();
})

body.addEventListener('keydown', (event) => {
  if(event.key == 'Enter'){
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = ("<div class='task__title'></div> <a href='#' class='task__remove'>&times;</a>");
  const title = Array.from(task.children)[0];
  const remove = Array.from(task.children)[1];
  title.textContent = input.value;
  form.reset()
  list.appendChild(task);
  
    remove.addEventListener('click', () => {
      task.remove()
    })
  } 
})




