const dropdown__value = document.querySelector('.dropdown__value');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__items = document.querySelectorAll('.dropdown__item');
const dropdown = document.querySelector('.dropdown');
const arrItems = Array.from(dropdown__items);

dropdown.addEventListener('click', () => {
  dropdown__list.classList.toggle('dropdown__list_active');
  arrItems.forEach((el) => {
    el.addEventListener('click', function(event){
      dropdown__value.textContent = el.textContent;
      event.preventDefault();
    })
    });
});
