export class MainIndexController {
  constructor ($scope, $log) {
    'ngInject';

    $log.info("index");
    this.activate($scope);
  }

  activate($scope) {
    $scope.$watch('vm.searchText', () => { this.makeLink(); });
    this.makeLink();
  }

  makeLink() {
    this.smsLink = 'sms:12096626224&body=' + encodeURIComponent(this.searchText);
  }

}
