export class ViewportService {
  constructor ($log, $rootScope, $window) {
    'ngInject';

    this.$log = $log;
    this.$window = angular.element($window);
    this.$rootScope = $rootScope;

    this.$window.resize(this.resize);
  }

  resize () {
    this.height = this.$window.innerHeight()
    this.width  = this.$window.innerWidth()
    if (
      this.$rootScope.viewportHeight != this.height ||
      this.$rootScope.viewportWidth != this.width
    ) {
      this.$rootScope.viewportHeight = this.height;
      this.$rootScope.viewportWidth  = this.width;
      this.$rootScope.$apply();
    }
  }
}
