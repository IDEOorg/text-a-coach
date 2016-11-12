export class MainSearchController {
  constructor ($scope, $log, Conversation) {
    'ngInject';

    this.$scope = $scope;
    this.$log = $log;
    this.Conversation = Conversation;

    this.activate();
  }

  activate() {
    this.pending = true;
    this.Conversation.findAll({platform_id: 1}).then( (conversations) => {
      this.conversations = conversations;
      this.pending = false;
      return conversations;
    });

    this.$scope.$watch('vm.searchText', () => { this.refreshConversations() });
  }

  refreshConversations() {
    this.pending = true;
    this.Conversation.meta.search(this.searchText, 1).then( (conversations) => {
      this.$log.debug(conversations);
      this.conversations = conversations;
      this.pending = false;
      return conversations;
    });
  }

}
