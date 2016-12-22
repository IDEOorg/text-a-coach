export class MainIndexController {
  constructor ($scope, $state, $log, $timeout, Conversation, $window) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$window = $window;
    this.Conversation = Conversation;

    this.limitTo = 4;

    this.activate($scope);
  }

  activate($scope) {
    this.makeLink();
    this.pending = true;
    this.Conversation.findAll({flavor_id: 1}).then( (conversations) => {
      this.conversations = conversations;
      this.pending = false;
      return conversations;
    });
  }

  startConversation() {
    mixpanel.track("Start Conversation Button Clicked");
    this.$window.open(this.smsLink, '_self');
  }

  makeLink() {
    this.smsLink = 'sms:16462916384&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
