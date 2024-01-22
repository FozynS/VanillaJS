import Menu from './components/common-menu/common-menu.js';
import ProductsList from './components/products-list/products-list.js';
import Filter from './components/filter/filter.js';

document.addEventListener('DOMContentLoaded', async () => {
  const menu = new Menu();
  const productList = new ProductsList();
  const filter = new Filter();
});
