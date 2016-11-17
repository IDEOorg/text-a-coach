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
    this.smsLink = 'sms:12096626224&body=' + encodeURIComponent("Enter your question");
  }

}
