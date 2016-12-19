export function config ($compileProvider, $logProvider, toastrConfig, DSProvider, DSHttpAdapterProvider, configApiBase, mixpanelToken) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // Configure Mixpanel
  // We do it here so we can use the Angular environment constants  
	mixpanel.init(mixpanelToken);   // 8bffd0 = dev, aec266 = prod
    
  //Set super properties
  mixpanel.register({
    "Current Domain": window.location.hostname
  });


  // Whitelist SMS protocol
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/);

  angular.extend(DSProvider.defaults, {});
  // TODO: Use config for API path
  angular.extend(DSHttpAdapterProvider.defaults, {
    basePath: configApiBase
  });
}
