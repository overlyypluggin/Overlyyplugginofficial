document.addEventListener('DOMContentLoaded', () => {
  let cartCount = localStorage.getItem('cartCount') || 0;
  document.getElementById('cart-count').textContent = cartCount;

  // Simulate adding to cart
  document.addEventListener('click', () => {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;
  });
});
