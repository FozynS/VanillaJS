const menuItems = [
  {
    text: 'home',
    bgColor: '#1abc9c',
  },
  {
    text: 'products',
    bgColor: '#e74c3c',
  },
  {
    text: 'about',
    bgColor: '#3498db',
  },
  {
    text: 'portfolio',
    bgColor: '#9b59b6',
  },
  {
    text: 'contact us',
    bgColor: '#e67e22',
  },
];

export default () => {
  const wrapper = document.querySelector('[data-module="menu"]');
  const fragment = document.createDocumentFragment();
  const lavaEffect = document.querySelector('.effect');

  let itemWidthProcent = Math.ceil((wrapper.offsetWidth / menuItems.length - 1) / wrapper.offsetWidth * 100);

  const getIndexByLink = (link) => {
    return menuItems.findIndex(el => {
      return el.bgColor === link.dataset.bgColor;
    });
  }

  for (const item of menuItems) {

    const link = document.createElement('a');
    const {text, bgColor} = item;

    link.classList.add('menu--item');
    link.href = '#';
    link.innerText = text;
    link.dataset.bgColor = bgColor;

    fragment.appendChild(link);
  }

  wrapper.appendChild(fragment);

  const setActualWidth = () => {
    const widthForLine = wrapper.offsetWidth / menuItems.length;
    lavaEffect.style.cssText += `
      width: ${widthForLine}px;
    `;
  }
  setActualWidth();

  const onClick = (e) => {
    e.preventDefault();

    const index = getIndexByLink(e.target);
    const widthProcent = itemWidthProcent * index;
    const widthForLine = wrapper.offsetWidth / menuItems.length;

    const currentLink = e.target;
    const bgColor = currentLink.dataset.bgColor;

    lavaEffect.style.cssText += `
      box-shadow: inset 0 -50px 50px -50px ${bgColor};
      left: ${widthProcent}%;
      width: ${widthForLine}px;
      border-color: ${bgColor};
    `;
  }

  wrapper.addEventListener('click', onClick);
};
