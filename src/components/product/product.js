import FilterPanel from '../filter-panel/filter-panel.js';
import ProductList from '../products-list/products-list.js';
import ProductListJSON from './data.js';

const productsList = [...ProductListJSON];
const filters = ['tech', 'it', 'e-commerce', 'gambling', 'gaming'];

export default class Product {
  constructor() {
    this.productListInstance = new ProductList(productsList);
    this.filtersInstance = new FilterPanel(filters);

    this.updateList = this.updateList.bind(this);
    this.listByCount = this.listByCount.bind(this);

    this.filtersInstance.on('change', this.updateList);
    this.filtersInstance.on('count', this.listByCount);

  }

  updateList(newFilters) {
    this.filteredProductList = !newFilters.length
      ? productsList
      : productsList.filter(({category}) => category.includes(newFilters));

    this.productListInstance.updateList(this.filteredProductList);
  }

  listByCount(count) {
    if(!count) {
      return productsList;
    } else {
      this.productListInstance.updateList(productsList, count);
    }
  }

  update() {}

  destroy() {
    this.filtersInstance.off('change', this.updateList);
  }

}