export class MainConversationController {
  constructor ($scope, $window, $log, $anchorScroll, conversation) {
    'ngInject';

    this.$log = $log;
    this.$window = $window;
    this.$anchorScroll = $anchorScroll;
    this.conversation = conversation;

    this.activate();
  }

  activate() {
    this.$anchorScroll();
  }

  goBack() {
    this.$window.history.back();
  }

}
