export class MainSearchController {
  constructor ($scope, $log, Conversation) {
    'ngInject';

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
  }

}
