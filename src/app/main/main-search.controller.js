export class MainSearchController {
  constructor ($scope, $log, Conversation) {
    'ngInject';

    this.$log = $log;
    this.Conversation = Conversation;

    this.activate();
  }

  activate() {
    this.Conversation.findAll({platform_id: 1}).then( (conversations) => {
      this.conversations = conversations;
      return conversations;
    });
  }

}
