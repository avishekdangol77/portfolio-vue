import { ScrollbarPlugin } from 'smooth-scrollbar'

class DisableScroll extends ScrollbarPlugin {
  static pluginName = 'DisableScroll'

  transformDelta(delta, fromEvent) {
    delta.x = 0

    return delta
  }
}

export default DisableScroll
