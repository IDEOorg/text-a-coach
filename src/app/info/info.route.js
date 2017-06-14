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
    })
    .state('info.privacy', {
      url: '/privacy',
      templateUrl: 'app/info/info-privacy.html'
    })
    .state('info.service', {
      url: '/service-terms',
      templateUrl: 'app/info/info-service-terms.html'
    });

}
