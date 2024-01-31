import Component from '../../lib/component/component.js';
import FiltersItem from '../filters-item/filters-item.js';

export default class ByTopic extends Component{
  constructor(filters) {
    super();
    const wrapper = document.querySelector('[data-module="filter-by-topic"]')
    const fragment = document.createDocumentFragment();

    const instances = [];

    for (const filter of filters) {
      const instance = new FiltersItem(filter);

      fragment.appendChild(instance.domElement);
      instances.push(instance);
    }

    this.instances = instances;

    wrapper.appendChild(fragment);
  }

}