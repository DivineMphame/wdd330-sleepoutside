import { getLocalStorage } from './utils.mjs';

// Render the contents of the cart page
function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');

  //  Fix: check if the cart is empty
  if (!cartItems || cartItems.length === 0) {
    document.querySelector('.product-list').innerHTML =
      '<p>Your cart is empty.</p>';
    return;
  }

  // Otherwise, show the items
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

// Template for a cart item
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();