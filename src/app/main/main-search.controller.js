export class MainSearchController {
  constructor ($scope, $log, _, Conversation) {
    'ngInject';

    this.$scope = $scope;
    this.$log = $log;
    this.Conversation = Conversation;

    this.searchTextCache = '';
    this.searchPromise = null;
    this.debounceSearch = _.throttle(this.search, 500, {leading: true, trailing: true});

    this.activate();
  }

  activate() {
    this.pending = true;
    this.Conversation.findAll({platform_id: 1}).then( (conversations) => {
      this.conversations = conversations;
      this.pending = false;
      return conversations;
    });

    this.$scope.$watch('vm.searchText', () => { this.debounceSearch() });
  }

  search() {
    if (this.searchTextCache === this.searchText) return true;
    if (this.searchPromise && this.searchPromise.abort) this.searchPromise.abort();
    this.pending = true;
    this.searchTextCache = this.searchText;
    this.searchPromise = this.Conversation.meta.search(this.searchText, 1);
    this.searchPromise.then( (conversations) => {
      this.conversations = conversations;
      this.pending = false;
      return conversations;
    });
    return this.searchPromise;
  }

}
