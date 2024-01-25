import FilterByTopic from '../filter-by-topic/filter-by-topic.js';
import FilterByCount from '../filter-by-count/filter-by-count.js';
import FilterBySort from '../sort-by/sort-by.js';


export default class FilterPanel {
  constructor(filters) {
    this.FilterByTopic = new FilterByTopic(filters);
    this.FilterByCount = new FilterByCount();
    this.FilterBySort = new FilterBySort();

    const wrapper = document.querySelector('[data-module="filter-panel"]');

    wrapper.addEventListener('change', this.FilterByTopic.onItemChange);
  }

  onItemChange() {
    console.log(
      'CHANGED',
      this.FilterByTopic.instances.filter((i) => i.getState()).map((i) => i.getId())
    );
  }

  update() {}

  destroy() {}
}
