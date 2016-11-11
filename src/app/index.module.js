/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { ViewportService } from './components/viewport/viewport.service';
import { ConversationFactory } from './components/conversations/conversation.factory';
import { MessageFactory } from './components/conversations/message.factory';
import { FooterDirective } from './components/footer/footer.directive';

import './main/main.module.js';

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
  'mainStates'
];

angular.module('coachApp', dependencies)
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('viewportService', ViewportService)
  .factory('Conversation', ConversationFactory)
  .factory('Message', MessageFactory)
  .directive('footer', FooterDirective);
