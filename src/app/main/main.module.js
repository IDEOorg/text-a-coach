import { routerConfig } from './main.route';
import { MainConversationController } from './main-conversation.controller';
import { MainIndexController } from './main-index.controller';
import { MainSearchController } from './main-search.controller';

angular.module('mainStates', [])
  .config(routerConfig)
  .controller('MainConversationController', MainConversationController)
  .controller('MainIndexController', MainIndexController)
  .controller('MainSearchController', MainSearchController);
