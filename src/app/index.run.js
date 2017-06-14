export function runBlock ($rootScope, viewportService, Message, Conversation, phoneNumber, phoneNumberFormatted) {
  'ngInject';

  $rootScope.phoneNumber = phoneNumber;
  $rootScope.phoneNumberFormatted = phoneNumberFormatted;
  viewportService.resize();
}
