import { routerConfig } from './info.route';
import { InfoIndexController } from './info-index.controller';
import { InfoAboutController } from './info-about.controller';

angular.module('infoStates', [])
  .config(routerConfig)
  .controller('InfoIndexController', InfoIndexController)
  .controller('InfoAboutController', InfoAboutController);
