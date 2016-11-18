export class MainIndexController {
  constructor ($scope, $state, $log) {
    'ngInject';

    this.$state = $state;
    this.$log = $log;

    this.activate($scope);
  }

  activate($scope) {
    $scope.$watch('vm.searchText', () => { this.makeLink(); });
    $scope.$watch('vm.$state.current.name', (newValue) => { this.stateName = 'state-' + newValue.toString().replace(".", "-"); });
    this.makeLink();
  }

  makeLink() {
    this.smsLink = 'sms:16462916384&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
  }

}
