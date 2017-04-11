export class MainConversationController {
  constructor ($scope, $state, $window, $log, conversation) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.$window = $window;
    this.conversation = conversation;

    this.activate();
  }

  activate() {
  }

  goBack() {
    // this.$window.history.back();
    this.$state.go('main.search', {returning: 1});
  }

}
