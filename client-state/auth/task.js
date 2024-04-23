const sign = document.getElementById('signin');
const btn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');
const removeBtn= document.getElementById('remove__btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

btn.addEventListener('click', () => {
  let data = new FormData(form); 

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.onload = () => {
    let responsePars = JSON.parse(xhr.response);

    if(localStorage.getItem('id')){
      user.textContent = localStorage.getItem('id');
      welcome.classList.add('welcome_active');
      sign.classList.remove('signin_active');
    } else {
      if(Object.values(responsePars)[0] === true){
        let userId = Object.values(responsePars)[1];
        localStorage.setItem('id', userId);
      } else {
        alert('Неверный логин или пароль')
      }
    }  
  }
  xhr.send(data);
});

removeBtn.addEventListener('click', () => {
  localStorage.removeItem('id');
})