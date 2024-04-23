const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = function() {
    progress.value = 0.5; 
  };
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { 
      progress.value = 1; 
    }
  };

  xhr.upload.onerror = function() {
    progress.value = 0; 
  };

  xhr.send(formData);
});

