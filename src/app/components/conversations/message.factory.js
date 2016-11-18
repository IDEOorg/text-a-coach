export function MessageFactory(DS) {
  'ngInject';

  return DS.defineResource({
    name: 'message',
    endpoint: 'messages',
    meta: {},
    computed: {},
    methods: {
      cloneFields: function() {
        return {
          id              : this.id,
          conversation_id : this.conversation_id,
          direction       : this.direction,
          message         : this.message
        };
      }
    },
    relations: {
      belongsTo: {
        conversation: [{
          localKey   : 'conversation_id',
          localField : 'conversation'
        }]
      }
    }
  });
}
