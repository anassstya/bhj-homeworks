const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === 2){
      progress.value = 0,2
    } else if (xhr.readyState === 3){
      progress.value = 0,5
    } else if(xhr.readyState === 4){
      progress.value = 1
    }
  })
  xhr.send(formData);
})








