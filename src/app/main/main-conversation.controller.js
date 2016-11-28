export class MainConversationController {
  constructor ($scope, $state, $window, $log, $anchorScroll, conversation) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.$window = $window;
    this.$anchorScroll = $anchorScroll;
    this.conversation = conversation;

    this.activate();
  }

  activate() {
    this.$anchorScroll();
  }

  goBack() {
    // this.$window.history.back();
    this.$state.go('main.search', {returning: 1});
  }

}
