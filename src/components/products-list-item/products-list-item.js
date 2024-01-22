export default class ProductsListItem {
  constructor(productsList) {
    const wrapper = document.querySelector('[data-module="products-list"]');

    const createProductsList = () => {
      const productList = [];

      for (const item of productsList) {
        const productItem = document.createElement('div');
        const { title, description } = item;

        productItem.className = 'products-list--item';

        productItem.innerHTML = `
          <h3 class="products-list--title">${title}</h3>
            <img
              src="https://placehold.co/300x300"
              class="products-list--image"
              alt=""
            />
            <p class="products-list--description">${description}</p>
          <button class="products-list--button-more">read more</button>
        `;

        productList.push(productItem);
      }

      return productList;
    };

    createProductsList().forEach((item) => {
      wrapper.appendChild(item);
    });
  }
}
