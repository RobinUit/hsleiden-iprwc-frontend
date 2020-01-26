import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';


export class HammerJSConfig extends HammerGestureConfig {
    overrides = <any> {
      'swipe': { direction: Hammer.DIRECTION_HORIZONTAL },
      'pinch': { enable: false },
      'rotate': { enable: false },
      'pan': { enable: true }
    };
  }