import LavaLampMenu from "../lavalamp-menu/lavalamp-menu.js";
import ListMenu from "../list-menu/list-menu.js";

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

export default class Menu {
  constructor() {
    this.lavaLampMenu = new LavaLampMenu(menuItems);
    this.listMenu = new ListMenu(menuItems);
    this.handleWindowWidth = this.handleWindowWidth.bind(this);
    this.handleWindowWidth();

    window.addEventListener('resize', this.handleWindowWidth);
  }

  isDektopViewActive() {
    return window.innerWidth >= 1024;
  }

  handleWindowWidth() {
    if(this.isDektopViewActive()) {
      if(this.listMenu) {
        this.listMenu.destroy();
        this.listMenu = null;
      }
      if(!this.lavaLampMenu) {
        this.lavaLampMenu = new LavaLampMenu(menuItems);
      } else {
        this.lavaLampMenu.refreshSizes();
      }
    }


    if(!this.isDektopViewActive()){
      if(this.lavaLampMenu) {
        this.lavaLampMenu.destroy();
        this.lavaLampMenu = null;
      }
      if(!this.listMenu) {
        this.listMenu = new ListMenu(menuItems);
      }

    }
  }

  update() {

  }

  destroy() {

    if(this.lavaLampMenu) {
      this.lavaLampMenu.destroy();
      this.lavaLampMenu = null;
    }

    if(this.listMenu) {
      this.listMenu.destroy();
      this.listMenu = null;
    }
  }
}

