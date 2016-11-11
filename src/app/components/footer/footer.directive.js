export function FooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/components/footer/footer.html',
    scope: {}
    // controller: FooterController,
    // controllerAs: 'vm',
    // bindToController: true
  };

  return directive;
}

// class FooterController {
//   constructor (moment) {
//     'ngInject';

//     // "this.creationDate" is available by directive option "bindToController: true"
//     this.relativeDate = moment(this.creationDate).fromNow();
//   }
// }
