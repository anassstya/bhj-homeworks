const product = [...document.querySelectorAll('.product')];
const  control = [...document.querySelectorAll('.product__quantity-control')];
const value = [...document.querySelectorAll('.product__quantity-value')];
const btnsAdd = [...document.querySelectorAll('.product__add')]
const cartProducts = document.querySelector('.cart__products')
const btnsDelete = [...document.querySelectorAll('.product__delete')]

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

btnsAdd.forEach((el, index) => {
  el.addEventListener('click', () => {
    mainElement = el.closest('.product');
    const productId = mainElement.getAttribute('data-id')
    const quantity = value[index].textContent;
    const checkProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`)
    
    if(!cartProducts.contains(checkProduct)){
      cartProducts.insertAdjacentHTML('afterbegin', 
    `<div class='cart__product' data-id = ${productId}>
    <img class="cart__product-image" src="">
    <div class="cart__product-count"></div>
    </div>`)

    const cartImg = cartProducts.querySelector('img')
    cartImg.setAttribute('src', mainElement.querySelector('.product__image').getAttribute('src'));
    let cartCount = cartProducts.querySelector('.cart__product-count');
    cartCount.textContent = parseInt(quantity);

    } else{
      let cartCount = cartProducts.querySelector('.cart__product-count');
      let cartCountInt = parseInt(cartCount.textContent)
      cartCountInt += parseInt(quantity)
      cartCount.textContent = cartCountInt
    }
  });
});

btnsDelete.forEach(el => {
  el.addEventListener('click', () => {
    const mainElement = el.closest('.product');
    const productId = mainElement.getAttribute('data-id');
    let checkProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

    if (checkProduct) {
      checkProduct.remove();
    }
  });
});

