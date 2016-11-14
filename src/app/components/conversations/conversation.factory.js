export function ConversationFactory($q, DS, DSHttpAdapter, configApiBase) {
  'ngInject';

  return DS.defineResource({
    name: 'conversation',
    endpoint: 'conversations',
    meta: {
      search: function(query, platform, page) {
        let searchAbort = $q.defer();
        let params = {};
        if (query) {
          params.query = query;
        }
        params.platform_id = platform || 1;
        params.page = page || 1;
        let searchPromise = DSHttpAdapter
          .GET(configApiBase+'/conversations/search', {
            params: params,
            timeout: searchAbort.promise
          })
          .then(function(response) {
            if (response.data && response.data.length > 0) {
              return DS.inject('conversation', response.data);
            } else {
              return [];
            }
          });

        searchPromise.abort = function() {
          searchAbort.resolve();
        };

        searchPromise.finally(() => {
          searchPromise.abort = angular.noop;
        });

        return searchPromise;
      }
    },
    computed: {},
    methods: {
      cloneFields: function() {
        return {
          id                 : this.id,
          user_id            : this.user_id,
          collection_id      : this.collection_id,
          collection_item_id : this.collection_item_id,
          item_type          : this.item_type,
          conversation_type  : this.conversation_type
        };
      }
    },
    relations: {
      hasMany: {
        message: [{
          localField: 'messages',
          foreignKey: 'conversation_id'
        }]
      }
    }
  });
}
