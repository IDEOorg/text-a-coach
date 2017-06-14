export function AutoFocusDirective($timeout) {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: (scope, element, attrs) => {
      $timeout( () => {
        element[0].focus();
      });
    }
  };

  return directive;
}

