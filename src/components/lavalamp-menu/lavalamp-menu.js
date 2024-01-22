//** ДЗ Передалать код так чтобы было как можно меньше this */

export default class LavaLampMenu {
  constructor(menuItems) {
    this.wrapper = document.querySelector('[data-module="menu"]');
    this.lavaEffect = document.createElement('div');
    this.menuItems = menuItems;

    const fragment = document.createDocumentFragment();

    this.wrapperOffsetWidth = this.wrapper.offsetWidth;
    this.menuItemsLength = this.menuItems.length;

    this.itemWidthProcent = Math.ceil(
      ((this.wrapperOffsetWidth / this.menuItemsLength - 1) / this.wrapperOffsetWidth) * 100
    );

    for (const item of this.menuItems) {
      const link = document.createElement('a');
      const { text, bgColor } = item;

      link.classList.add('menu--item');
      link.href = '#';
      link.innerText = text;
      link.dataset.bgColor = bgColor;

      fragment.appendChild(link);
    }

    this.wrapper.appendChild(this.lavaEffect);
    this.wrapper.appendChild(fragment);
    this.setActualWidth();
    this.onClick = this.onClick.bind(this);

    this.wrapper.addEventListener('click', this.onClick);
  }

  getIndexByLink(link) {
    return this.menuItems.findIndex((el) => {
      return el.bgColor === link.dataset.bgColor;
    });
  }

  setActualWidth() {
    const widthForLine = this.wrapperOffsetWidth / this.menuItemsLength;
    this.lavaEffect.classList.add('effect');
    this.lavaEffect.style.cssText += `
      width: ${widthForLine}px;
    `;
  }

  onClick(e) {
    e.preventDefault();
    this.setActualWidth();

    const index = this.getIndexByLink(e.target);
    const widthProcent = this.itemWidthProcent * index;
    const widthForLine = this.wrapperOffsetWidth / this.menuItemsLength;

    const currentLink = e.target;
    const bgColor = currentLink.dataset.bgColor;

    this.lavaEffect.style.cssText += `
      box-shadow: inset 0 -50px 50px -50px ${bgColor};
      left: ${widthProcent}%;
      width: ${widthForLine}px;
      border-color: ${bgColor};
    `;
  }

  destroy() {
    this.wrapper.removeEventListener('click', this.onClick);
    this.wrapper.innerHTML = '';
  }
};
