export default class ProductsListItem {
  constructor({ product, description, picture}) {
    const productItem = document.createElement('div');

    productItem.className = 'products-list--item';

    productItem.innerHTML = `
      <h3 class="products-list--title">${product}</h3>
        <img
          src=${picture}
          class="products-list--image"
          alt=""
        />
        <p class="products-list--description">${description}</p>
      <button class="products-list--button-more">read more</button>
    `;

    this.productItem = productItem;
  }
}
