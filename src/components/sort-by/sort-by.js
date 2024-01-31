import Component from "../../lib/component/component.js";

export default class FilterBySort extends Component{
  constructor() {
    super();

    this.wrapper = document.querySelector('[data-module="select_sort-by"]');

    this.getItemsValue = this.getItemsValue.bind(this);
    this.wrapper.addEventListener('change', this.getItemsValue);
  }

  getItemsValue() {
    return this.wrapper.value;
  }
}