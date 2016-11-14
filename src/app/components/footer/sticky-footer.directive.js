export function StickyFooterDirective($window, _) {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/components/footer/sticky-footer.html',
    scope: {
      active: '=?'
    },
    link: (scope, element, attrs) => {
      let scrollTarget = angular.element(attrs.scrollTarget),
          windowEl = angular.element($window);
      let scrollFn = () => {
        if ((scrollTarget.offset().top - (windowEl.height() * 0.9)) - windowEl.scrollTop() < 0) {
          scope.active = true;
        } else {
          scope.active = false;
        }
        scope.$apply();
      }
      let throttled = _.throttle(scrollFn, 250, {leading: true, trailing: true});
      windowEl.on('scroll', throttled);
    }
  };

  return directive;
}

