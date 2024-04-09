const fontSize = [...document.querySelectorAll('.font-size')]
const bookContent = document.querySelector('.book__content')
const color = document.querySelectorAll('.book__control_color > *');
const bg = document.querySelectorAll('.book__control_background > *');

fontSize.forEach((link) => {
  link.addEventListener('click', function(event){
    event.preventDefault();

    fontSize.forEach(el => {
      el.classList.remove('font-size_active');
    });
    link.classList.add('font-size_active');
    
    const size = link.getAttribute('data-size');
    bookContent.classList.remove('book_fs-small', 'book_fs-big');

    if(size === 'small'){
      bookContent.classList.add('book_fs-small')
    }
    if(size === 'big'){
      bookContent.classList.add('book_fs-big')
    }
  })
})

color.forEach((link) => {
  link.addEventListener('click', function(event){
    event.preventDefault();

    color.forEach(el => {
      el.classList.remove('color_active');
    });
    link.classList.add('color_active');
    
    const clr = link.getAttribute('data-text-color');
    bookContent.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

   if (clr === 'black') {
    bookContent.classList.add('book_color-black');
  } else if (clr === 'gray') {
    bookContent.classList.add('book_color-gray');
  } else if (clr === 'whitesmoke') {
    bookContent.classList.add('book_color-whitesmoke');
  }
  })
})

bg.forEach((link) => {
  link.addEventListener('click', function(event){
    event.preventDefault();

    bg.forEach(el => {
      el.classList.remove('color_active')
    })
    link.classList.add('color_active');
    const bgData = link.getAttribute('data-bg-color');
    bookContent.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white')

    if(bgData === 'black'){
      bookContent.classList.add('book_bg-black')
    } else if(bgData === 'gray'){
      bookContent.classList.add('book_bg-gray')
    } else if(bgData === 'white'){
      bookContent.classList.add()
    }
  })
})