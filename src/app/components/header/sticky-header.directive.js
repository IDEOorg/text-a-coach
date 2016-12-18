export function StickyHeaderDirective($window, $log, _) {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/components/header/sticky-header.html',
    scope: {
      active: '=?'
    },
    link: (scope, element, attrs) => {
      let windowEl = angular.element($window);
      let parentEl = angular.element(element).parent();

      let scrollFn = (el) => {
        $log.info(el.scrollTop());
        if (el.scrollTop() > 100) {
          scope.active = true;
        } else {
          scope.active = false;
        }
        scope.$apply();
      }

      let throttled1 = _.throttle(() => { scrollFn(windowEl) }, 250, {leading: true, trailing: true});
      let throttled2 = _.throttle(() => { scrollFn(parentEl) }, 250, {leading: true, trailing: true});
      windowEl.on('scroll', throttled1);
      parentEl.on('scroll', throttled2);
    }
  };

  return directive;
}

