export class MainIndexController {
  constructor ($scope, $state, $log, $anchorScroll, $timeout, $window) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;
    this.$anchorScroll = $anchorScroll;
    this.$timeout = $timeout;
    this.$window = $window;


    this.activate($scope);
  }

  activate($scope) {
    this.scrollToConversations = false;

    $scope.$watch('vm.searchText', () => { this.makeLink(); });
    $scope.$watch('vm.$state.current.name', (newValue) => { this.stateName = 'state-' + newValue.toString().replace(".", "-"); });
    $scope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
      if (toState.name === "main.search" && fromState.name === "main.conversation") {
        // scroll to main conversations list on mobile
        // when returning from a conversation details page
        this.scrollToConversations = true;
      } else {
        this.scrollToConversations = false;
      }
    });
    $scope.$on('$viewContentLoaded', (event) => {
      if (this.scrollToConversations) {
        this.$timeout( () => {
          this.$anchorScroll('main-subview');
        }, 100);
      } else {
        this.$timeout( () => {
          this.$anchorScroll();
        }, 100);
      }
    });
    this.makeLink();
  }

  startConversation() {
    mixpanel.track("Start Conversation Button Clicked");
    this.$window.open(this.smsLink, '_self');
  }

  makeLink() {
    this.smsLink = 'sms:16462916384&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
