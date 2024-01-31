import LavaLampMenu from "../lavalamp-menu/lavalamp-menu.js";
import ListMenu from "../list-menu/list-menu.js";
import Component from "../../lib/component/component.js";

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

export default class Menu extends Component{
  constructor() {
    super();

    this.lavaLampMenu = new LavaLampMenu(menuItems);
    this.listMenu = new ListMenu(menuItems);

    this.useMobile = this.useMobile.bind(this);
    this.useDesktop = this.useDesktop.bind(this);

    this.responsiveHelper = new Component.ResposiveHelper(
      '(max-width: 1023px)',
      this.useMobile,
      this.useDesktop,
    )

  }

  useMobile() {
    if(this.lavaLampMenu) {
      this.lavaLampMenu.destroy();
      this.lavaLampMenu = null;
    }
    if(!this.listMenu) {
      this.listMenu = new ListMenu(menuItems);
    }
  }

  useDesktop() {
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

