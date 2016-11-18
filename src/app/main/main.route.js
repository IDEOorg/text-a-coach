export function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/main-index.html',
      controller: 'MainIndexController',
      controllerAs: 'vm'
    })
    .state('main.search', {
      url: '/',
      views: {
        "subview@main" : {
          templateUrl: 'app/main/main-search.html',
          controller: 'MainSearchController',
          controllerAs: 'vm'
        }
      }
    })
    .state('main.conversation', {
      url: '/conversation/:conversation_id',
      views: {
        "subview@main" : {
          templateUrl: 'app/main/main-conversation.html',
          controller: 'MainConversationController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        conversation: ($stateParams, Conversation) => {
          return Conversation.find($stateParams.conversation_id).then(function(conversation) {
            return conversation.DSLoadRelations('messages');
          });
        }
      }
    });

}
