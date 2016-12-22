/* global _:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { ViewportService } from './components/viewport/viewport.service';
import { ConversationFactory } from './components/conversations/conversation.factory';
import { MessageFactory } from './components/conversations/message.factory';
import { FooterDirective } from './components/footer/footer.directive';
import { StickyFooterDirective } from './components/footer/sticky-footer.directive';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';
import { AutoFocusDirective } from './components/auto-focus.directive';
import { ScrollFixDirective } from './components/scroll-fix.directive';

import './main/main.module.js';
import './info/info.module.js';
import './components/config.js';

let dependencies = [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ui.router',
  'mm.foundation',
  'toastr',
  'js-data',
  'infoStates',
  'mainStates',
  'components.environment'
];

angular.module('coachApp', dependencies)
  .constant('_', _)
  .constant('moment', moment)
  .constant('phoneNumber', '6463626665')
  .constant('phoneNumberFormatted', '646-362-6665')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('viewportService', ViewportService)
  .factory('Conversation', ConversationFactory)
  .factory('Message', MessageFactory)
  .directive('footer', FooterDirective)
  .directive('stickyFooter', StickyFooterDirective)
  .directive('stickyHeader', StickyHeaderDirective)
  .directive('autoFocus', AutoFocusDirective)
  .directive('scrollFix', ScrollFixDirective);
