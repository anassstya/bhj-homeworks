const product = [...document.querySelectorAll('.product')];
const  control = [...document.querySelectorAll('.product__quantity-control')];
const value = [...document.querySelectorAll('.product__quantity-value')];
const btns = [...document.querySelectorAll('.product__add')]
const cartProducts = document.querySelector('.cart__products')

control.forEach(el => {
  el.addEventListener('click', () => {
    if(el.classList.contains('product__quantity-control_dec')){
      const next = el.nextElementSibling
      if(next.textContent > 1){
        next.textContent --
      }
    } else if(el.classList.contains('product__quantity-control_inc')){
      const previous = el.previousElementSibling
      previous.textContent ++
    }
  })
})

btns.forEach((el, index) => {
  el.addEventListener('click', () => {
    const mainElement = el.closest('.product');
    const productId = mainElement.getAttribute('data-id')
    const cartProductItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    const quantity = value[index].textContent;

    if (cartProductItem) {
      const cartQuantity = cartProductItem.querySelector('.cart__product__quantity');
      cartQuantity.textContent = quantity;
    } else {
      const cartProductItem = document.createElement('div');
      const cartProductImage = document.createElement('img');
      cartProductImage.style.width = '100px'; 
      cartProductImage.style.height = 'auto';
      cartProductItem.classList.add('cart__product');
      cartProductItem.setAttribute('data-id', productId);

      cartProductImage.classList.add('cart__product__image');
      cartProductImage.setAttribute('src', mainElement.querySelector('.product__image').getAttribute('src'));

      const cartQuantity = document.createElement('div');
      cartQuantity.classList.add('cart__product__quantity');
      cartQuantity.textContent = quantity;

      cartProductItem.appendChild(cartProductImage);
      cartProductItem.appendChild(cartQuantity);

      cartProducts.appendChild(cartProductItem);
    }
  });
});