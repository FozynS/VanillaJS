const productsList = [...ProductListJSON];
const filters = ['tech', 'it', 'e-commerce', 'gambling', 'gaming'];

import FilterPanel from '../filter-panel/filter-panel.js';
import ProductList from '../products-list/products-list.js';
import ProductListJSON from './data.js';

export default class Product {
  constructor() {
    const productListInstance = new ProductList(productsList);
    const filtersInstance = new FilterPanel(filters);

  }

}