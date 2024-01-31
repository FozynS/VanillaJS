import Component from "../../lib/component/component.js";

export default class ByCount extends Component{
  constructor() {
    super();

    this.wrapper = document.querySelector('select');

    this.getValue = this.getValue.bind(this);
    this.wrapper.addEventListener('change', this.getValue);
  }

  getValue() {
    return this.wrapper.value;
  }
}