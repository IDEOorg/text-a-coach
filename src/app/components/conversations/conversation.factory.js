export function ConversationFactory($q, DS, DSHttpAdapter, configApiBase) {
  'ngInject';

  return DS.defineResource({
    name: 'conversation',
    endpoint: 'conversations',
    meta: {
      search: function(query, flavor, page) {
        let searchAbort = $q.defer();
        let params = {};
        if (query) {
          params.query = query;
        }
        params.flavor_id = flavor || 1;
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
          id : this.id
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
