export function config ($compileProvider, $logProvider, toastrConfig, DSProvider, DSHttpAdapterProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // Whitelist SMS protocol
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/);

  angular.extend(DSProvider.defaults, {});
  // TODO: Use config for API path
  angular.extend(DSHttpAdapterProvider.defaults, {
    basePath: 'http://localhost:3333/api/v1/' // configApiBase // https://text-a-coach-backend.herokuapp.com
  });
}
