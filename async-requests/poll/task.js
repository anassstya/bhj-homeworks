const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(){
  let values = (Object.values(xhr.response))[1];
  let titleText = values['title'];
  let answerText = values['answers'];
  let id = (Object.values(xhr.response))[0];
  title.textContent = titleText;
  
  answerText.forEach(el => {
    answers.insertAdjacentHTML('afterbegin', 
    `<button class="poll__answer">${el}</button>`);
  });

  const btns = [...document.querySelectorAll('.poll__answer')];
  btns.forEach((el,index) => {
    el.onclick = () => {
      alert('Спасибо, ваш голос засчитан!');
      
      const xhr2 = new XMLHttpRequest();
      xhr2.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
      xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhr2.responseType = 'json';
      xhr2.send(`vote=${id}&answer=${index}`);
      xhr2.onload = function(){
        let values = (Object.values(xhr2.response))[0];
        answers.innerHTML = ''
        values.forEach(el => {
          console.log(el['answer'], el['votes']);
          answers.innerHTML += `<div>${el['answer']}:  ${el['votes']}%</div>`
        });
      }
    }
  });
}
  