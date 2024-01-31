import EventEmittor from "../event-emittor/event-emittor.js";
import ResponsiveHelper from "../responsive-helper/responsive-helper.js";

export default class extends EventEmittor{
  static ResposiveHelper = ResponsiveHelper;
  constructor() {
    super();

  }

  upgrade() {}

  destroy() {}
}