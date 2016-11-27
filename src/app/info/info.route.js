export function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('info', {
      abstract: true,
      url: '',
      templateUrl: 'app/info/info-index.html',
      controller: 'InfoIndexController',
      controllerAs: 'vm'
    })
    .state('info.about', {
      url: '/about',
      templateUrl: 'app/info/info-about.html',
      controller: 'InfoAboutController',
      controllerAs: 'vm'
    })
    .state('info.terms', {
      url: '/terms',
      templateUrl: 'app/info/info-terms.html'
    });

}
