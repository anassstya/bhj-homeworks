const tab = document.querySelectorAll('.tab')
const tab__content = document.querySelectorAll('.tab__content')
const ArrayTab = Array.from(tab)
const ArrayTabContent = Array.from(tab__content)

ArrayTab.forEach((tab, index) => {
  tab.addEventListener('click', function(){
    ArrayTab.forEach(t => 
      t.classList.remove('tab_active'));

      tab.classList.add('tab_active');

      ArrayTabContent.forEach(content => {
        content.classList.remove('tab__content_active');
      });

      ArrayTabContent[index].classList.add('tab__content_active');
    });
});
