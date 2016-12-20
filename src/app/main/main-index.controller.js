export class MainIndexController {
  constructor ($scope, $state, $log, $timeout, Conversation, $window, phoneNumber) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$window = $window;
    this.Conversation = Conversation;
    this.phoneNumber = phoneNumber;

    this.limitTo = 3;

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
    ga('send', 'event', 'Start Conversation', 'Go to SMS');
    fbq('track', 'Lead', {
      value: 0.00,
      currency: 'USD'
    });
    this.$window.open(this.smsLink, '_self');
  }

  makeLink() {
    this.smsLink = 'sms:1' + this.phoneNumber + '&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
