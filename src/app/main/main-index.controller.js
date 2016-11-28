export class MainIndexController {
  constructor ($scope, $state, $log, $anchorScroll, $timeout) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;
    this.$anchorScroll = $anchorScroll;
    this.$timeout = $timeout;


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
      }
    });
    $scope.$on('$viewContentLoaded', (event) => {
      if (this.scrollToConversations) {
        this.$timeout( () => {
          this.$anchorScroll('main-subview');
        });
      }
    });
    this.makeLink();
  }

  makeLink() {
    this.smsLink = 'sms:16462916384&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
