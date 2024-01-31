import Component from '../../lib/component/component.js';
import ProductsListItem from '../products-list-item/products-list-item.js';

export default class ProductList extends Component{
  constructor(productsList) {
    super();
    this.wrapper = document.querySelector('[data-module="products-list"]');
    this.updateList(productsList);
  }

  createList(productsList) {
    const fragment = document.createDocumentFragment();

    for (const item of productsList) {
      const itemInstance = new ProductsListItem(item);
      fragment.appendChild(itemInstance.productItem);
    }

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(fragment);
  }

  updateList() {
    const [productsList, count, sort] = arguments;

    if(typeof count !== undefined) {
      const amount = Number(count);
      const limitedProductsList = amount ? productsList.slice(0, amount) : productsList;
      this.createList(limitedProductsList);

    } else if(typeof productsList !== undefined) {
      this.createList(productsList);

    } else if(typeof sort !== undefined) {
      //** Продумать логику */
      // this.createList(sortProductList);
    }
  }

};
