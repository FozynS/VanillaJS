import FiltersItem from '../filters-item/filters-item.js';

export default class ByTopic {
  constructor(filters) {
    const wrapper = document.querySelector('[data-module="filter-by-topic"]')
    const fragment = document.createDocumentFragment();

    const instances = [];

    for (const filter of filters) {
      const instance = new FiltersItem(filter);

      fragment.appendChild(instance.domElement);
      instances.push(instance);
    }

    wrapper.appendChild(fragment);

    this.instances = instances;
    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange() {
    console.log(
      'CHANGED',
      this.instances.filter((i) => i.getState()).map((i) => i.getId())
    );
  }
}