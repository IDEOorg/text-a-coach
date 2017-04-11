export function StickyHeaderDirective($window, $log, _, phoneNumber) {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/components/header/sticky-header.html',
    scope: {
      active: '=?',
      alwaysOn: '=?'
    },
    link: (scope, element, attrs) => {
      let windowEl = angular.element($window);
      let parentEl = angular.element(element).parent();

      scope.smsLink = 'sms:1' + phoneNumber + '&body=' + encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");
      scope.atTop = true;
      let scrollFn = (el) => {
        scope.atTop = (el.scrollTop() < 10);
        if (scope.alwaysOn) {
          scope.active = true;
        } else {
          if (el.scrollTop() > 100) {
            scope.active = true;
          } else {
            scope.active = false;
          }
        }
        scope.$apply();
      }

      let throttled1 = _.throttle(() => { scrollFn(windowEl) }, 250, {leading: true, trailing: true});
      let throttled2 = _.throttle(() => { scrollFn(parentEl) }, 250, {leading: true, trailing: true});
      windowEl.on('scroll', throttled1);
      parentEl.on('scroll', throttled2);
      throttled1();
    }
  };

  return directive;
}

