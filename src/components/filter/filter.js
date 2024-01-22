import ByTopic from './byTopic/byTopic.js';
import ByCount from './byCount/byCount.js';

export default class Filet {
  constructor() {
    this.ByTopic = new ByTopic();
    this.ByCount = new ByCount();
  }
}