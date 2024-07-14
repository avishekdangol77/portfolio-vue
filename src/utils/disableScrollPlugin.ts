import { ScrollbarPlugin } from 'smooth-scrollbar'

class DisableScroll extends ScrollbarPlugin {
  static pluginName = 'DisableScroll'

  // eslint-disable-next-line class-methods-use-this, no-unused-vars, @typescript-eslint/no-unused-vars
  transformDelta(delta:any, _fromEvent:any) {
    // eslint-disable-next-line no-param-reassign
    delta.x = 0

    return delta
  }
}

export default DisableScroll
