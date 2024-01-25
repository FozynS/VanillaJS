import ProductsListItem from '../products-list-item/products-list-item.js';

export default class ProductList {
  constructor(productsList) {
    const wrapper = document.querySelector('[data-module="products-list"]');
    const fragment = document.createDocumentFragment();
    this.productsList = productsList;

    for (const item of this.productsList) {
      const itemInstance = new ProductsListItem(item);
      fragment.appendChild(itemInstance.productItem);
    }

    wrapper.appendChild(fragment);

  }
};
