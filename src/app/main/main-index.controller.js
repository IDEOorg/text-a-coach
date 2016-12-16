export class MainIndexController {
  constructor ($scope, $state, $log, $anchorScroll, $timeout, Conversation) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;
    this.$anchorScroll = $anchorScroll;
    this.$timeout = $timeout;
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
  }

  makeLink() {
    this.smsLink = 'sms:16462916384&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
