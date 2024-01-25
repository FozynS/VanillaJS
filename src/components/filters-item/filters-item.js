export default class FilterItem {
  constructor(filterName) {
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

  update() {}

  destroy() {}
}