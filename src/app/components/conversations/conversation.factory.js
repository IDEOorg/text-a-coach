export function ConversationFactory(DS, DSHttpAdapter) {
  'ngInject';

  return DS.defineResource({
    name: 'conversation',
    endpoint: 'conversations',
    meta: {
      search: function(query, platform, page) {
        // if (searchPromise) { // && searchPromise.isPending() ?? TODO: https://github.com/kriskowal/q/wiki/API-Reference#promiseispending
        //   searchPromise.reject('cancel');
        // }
        let params = {};
        if (query) {
          params.query = query;
        }
        params.platform_id = platform || 1;
        params.page = page || 1;
        // TODO: Use config for API path
        let searchPromise = DSHttpAdapter
          .GET('http://localhost:3333/api/v1/conversations/search', { params: params })
          .then(function(response) {
            if (response.data && response.data.length > 0) {
              return DS.inject('conversation', response.data);
            } else {
              return [];
            }
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
