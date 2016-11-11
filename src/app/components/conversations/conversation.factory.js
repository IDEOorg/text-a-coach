export function ConversationFactory(DS) {
  'ngInject';

  return DS.defineResource({
    name: 'conversation',
    endpoint: 'conversations',
    meta: {},
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
