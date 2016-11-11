export class MainConversationController {
  constructor ($scope, $window, $log, conversation) {
    'ngInject';

    this.$log = $log;
    this.$window = $window;
    this.conversation = conversation;

    this.activate();
  }

  activate() {

  }

  goBack() {
    this.$window.history.back();
  }

}
