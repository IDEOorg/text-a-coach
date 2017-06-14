export function ScrollFixDirective($rootScope, $anchorScroll, $log) {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: (scope, element, attrs) => {
      scope.$on('$stateChangeSuccess', (e) => {
        $anchorScroll();
        $log.info("state change success");
      });
    }
  };

  return directive;
}

