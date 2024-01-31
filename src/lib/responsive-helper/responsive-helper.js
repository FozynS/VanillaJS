let responsiveHelperInstance;

export default class {
  cases = [];
  constructor(mediaQuery, use, destroy) {
    this.cases.push([mediaQuery, use, destroy]);
    this.matchCase(mediaQuery, use, destroy);

    if(responsiveHelperInstance) {
      return responsiveHelperInstance;
    }

    responsiveHelperInstance = this;

    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    for (const item of this.cases) {
      this.matchCase(...item);
    }
  }

  matchCase(mediaQuery, use, destroy) {
    if(window.matchMedia(mediaQuery).matches) {
      use();
    } else {
      destroy();
    }
  }

  clearCase(mediaQuery, use, destroy) {
    const indexToRemove = this.cases.findIndex(([_mediaQuery, _use, _destroy]) => {
      return mediaQuery === _mediaQuery && use === _use && destroy === _destroy;
    });
    if(indexToRemove > -1) {
      this.cases.splice(indexToRemove, 1);
    }
  }
}