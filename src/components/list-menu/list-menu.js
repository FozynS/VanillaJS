export default class ListMenu {
  constructor(menuItems) {
    this.wrapper = document.querySelector('[data-module="list-menu"]');
    const fragment = document.createDocumentFragment();

    for (const item of menuItems) {
      const link = document.createElement('a');
      const { text, bgColor } = item;

      link.classList.add('list-menu--item');
      link.href = '#';
      link.innerText = text;
      link.style = `
        background-color: ${bgColor};
      `;

      fragment.appendChild(link);
    }

    const onClick = (e) => {
      e.preventDefault();
    }

    this.wrapper.appendChild(fragment);
    this.wrapper.addEventListener('click', onClick);
  }

  destroy() {
    this.wrapper.removeEventListener('click', this.onClick);
    this.wrapper.innerHTML = '';
  }
}
