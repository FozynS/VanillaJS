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
    this.sortingBy = this.sortingBy.bind(this);

    this.filtersInstance.on('change', this.updateList);
    this.filtersInstance.on('count', this.listByCount);
    this.filtersInstance.on('sort', this.sortingBy);

  }

  updateList(newFilters) {
    this.filteredProductList = !newFilters.length
      ? productsList
      : productsList.filter(({category}) => category.includes(newFilters));

    this.productListInstance.createList(this.filteredProductList);
  }

  listByCount(count) {
    if(!count) {
      return this.filteredProductList || productsList;
    } else {
      const productList = this.filteredProductList || productsList;
      this.productListInstance.updateList(productList, count);
    }
  }

  sortingBy(sort) {
    const productList = this.filteredProductList || productsList;
    this.productListInstance.updateList(productList, sort);
  }

  update() {}

  destroy() {
    this.filtersInstance.off('change', this.updateList);
  }

}