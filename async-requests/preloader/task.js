const items = document.getElementById('items');
const img = document.getElementById('loader');
const requestUrl = "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

let xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === 4){
    img.classList.remove('loader_active')
    let text = xhr.response.response.Valute;
    let values = Object.values(text)
    values.forEach(el => {
      let CharCode = el['CharCode'];
      /*localStorage.setItem('CharCode', `${CharCode}`)*/
      let Value = el['Value'];
      /*localStorage.setItem('Value', `${Value}`)*/
      items.insertAdjacentHTML('afterbegin', 
      `<div class=-item>
      <div class="item__code"'>${CharCode}</div>
      <div class="item__value">${Value}</div>
      <div class="item__currency">руб.</div>
      </div>`);
    });
  }
});

