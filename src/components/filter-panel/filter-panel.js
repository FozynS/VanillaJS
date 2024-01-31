import FilterByTopic from '../filter-by-topic/filter-by-topic.js';
import FilterByCount from '../filter-by-count/filter-by-count.js';
import FilterBySort from '../sort-by/sort-by.js';
import Component from '../../lib/component/component.js';

export default class FilterPanel extends Component {
  constructor(filters) {
    super();

    this.FilterByTopic = new FilterByTopic(filters);
    this.FilterByCount = new FilterByCount();
    this.FilterBySort = new FilterBySort();

    const wrapper = document.querySelector('[data-module="filter-panel"]');

    this.checkChange = this.checkChange.bind(this);

    wrapper.addEventListener('change', this.checkChange);
  }

  checkChange(e) {
    if(e.target.tagName === 'INPUT') {
      this.onItemChange();
    } else if(e.target.classList.contains('select')) {
      this.onItemChangeByCount();
    } else if(e.target.getAttribute('data-module') === 'select_sort-by') {
      this.sortBy();
    }
  }

  onItemChange() {
    this.emit(
      'change',
      this.FilterByTopic.instances.filter((i) => i.getState()).map((i) => i.getId())
    );
  }

  onItemChangeByCount() {
    this.emit(
      'count',
      this.FilterByCount.getValue()
    );
  }

  sortBy() {
    this.emit(
      'sort',
      this.FilterBySort.getItemsValue()
    );
  }
}
