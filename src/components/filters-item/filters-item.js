import Component from "../../lib/component/component.js";

export default class FilterItem extends Component{
  constructor(filterName) {
    super();
    const domElement = document.createElement('label');
    const checkbox = document.createElement('input');

    domElement.dataset.module = 'filters-item';
    domElement.innerHTML = filterName;
    checkbox.type = 'checkbox';
    domElement.appendChild(checkbox);

    this.domElement = domElement;
    this.checkbox = checkbox;
    this.id = filterName;
  }

  getState() {
    return this.checkbox.checked;
  }

  getId() {
    return this.id;
  }

}