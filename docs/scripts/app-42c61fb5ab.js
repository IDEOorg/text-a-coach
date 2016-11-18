/******/!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";var i=t(1),o=t(2),s=t(3),a=t(4),r=t(5),c=t(6),l=t(7),v=t(8);t(9),t(14),t(18);var u=["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ui.router","mm.foundation","toastr","js-data","infoStates","mainStates","components.environment"];angular.module("coachApp",u).constant("_",_).constant("moment",moment).config(i.config).config(o.routerConfig).run(s.runBlock).service("viewportService",a.ViewportService).factory("Conversation",r.ConversationFactory).factory("Message",c.MessageFactory).directive("footer",l.FooterDirective).directive("stickyFooter",v.StickyFooterDirective)},function(e,n){"use strict";function t(e,n,t,i,o,s){"ngInject";n.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/),angular.extend(i.defaults,{}),angular.extend(o.defaults,{basePath:s})}t.$inject=["$compileProvider","$logProvider","toastrConfig","DSProvider","DSHttpAdapterProvider","configApiBase"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=t},function(e,n){"use strict";function t(e,n){"ngInject";n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e,n,t){"ngInject";e.resize()}t.$inject=["viewportService","Message","Conversation"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.ViewportService=function(){function e(n,i,o){"ngInject";t(this,e),this.$log=n,this.$window=angular.element(o),this.$rootScope=i,this.$window.resize(this.resize)}return e.$inject=["$log","$rootScope","$window"],i(e,[{key:"resize",value:function(){this.height=this.$window.innerHeight(),this.width=this.$window.innerWidth(),(this.$rootScope.viewportHeight!=this.height||this.$rootScope.viewportWidth!=this.width)&&(this.$rootScope.viewportHeight=this.height,this.$rootScope.viewportWidth=this.width,this.$rootScope.$apply())}}]),e}()},function(e,n){"use strict";function t(e,n,t,i){"ngInject";return n.defineResource({name:"conversation",endpoint:"conversations",meta:{search:function(o,s,a){var r=e.defer(),c={};o&&(c.query=o),c.platform_id=s||1,c.page=a||1;var l=t.GET(i+"/conversations/search",{params:c,timeout:r.promise}).then(function(e){return e.data&&e.data.length>0?n.inject("conversation",e.data):[]});return l.abort=function(){r.resolve()},l["finally"](function(){l.abort=angular.noop}),l}},computed:{},methods:{cloneFields:function(){return{id:this.id}}},relations:{hasMany:{message:[{localField:"messages",foreignKey:"conversation_id"}]}}})}t.$inject=["$q","DS","DSHttpAdapter","configApiBase"],Object.defineProperty(n,"__esModule",{value:!0}),n.ConversationFactory=t},function(e,n){"use strict";function t(e){"ngInject";return e.defineResource({name:"message",endpoint:"messages",meta:{},computed:{},methods:{cloneFields:function(){return{id:this.id,conversation_id:this.conversation_id,direction:this.direction,message:this.message}}},relations:{belongsTo:{conversation:[{localKey:"conversation_id",localField:"conversation"}]}}})}t.$inject=["DS"],Object.defineProperty(n,"__esModule",{value:!0}),n.MessageFactory=t},function(e,n){"use strict";function t(){"ngInject";var e={restrict:"A",templateUrl:"app/components/footer/footer.html",scope:{}};return e}Object.defineProperty(n,"__esModule",{value:!0}),n.FooterDirective=t},function(e,n){"use strict";function t(e,n){"ngInject";var t={restrict:"A",templateUrl:"app/components/footer/sticky-footer.html",scope:{active:"=?"},link:function(t,i,o){t.smsLink="sms:16462916384&body="+encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");var s=angular.element(o.scrollTarget),a=angular.element(e),r=function(){s.offset().top-.9*a.height()-a.scrollTop()<0?t.active=!0:t.active=!1,t.$apply()},c=n.throttle(r,250,{leading:!0,trailing:!0});a.on("scroll",c)}};return t}t.$inject=["$window","_"],Object.defineProperty(n,"__esModule",{value:!0}),n.StickyFooterDirective=t},function(e,n,t){"use strict";var i=t(10),o=t(11),s=t(12),a=t(13);angular.module("mainStates",[]).config(i.routerConfig).controller("MainConversationController",o.MainConversationController).controller("MainIndexController",s.MainIndexController).controller("MainSearchController",a.MainSearchController)},function(e,n){"use strict";function t(e){"ngInject";e.state("main",{"abstract":!0,url:"",templateUrl:"app/main/main-index.html",controller:"MainIndexController",controllerAs:"vm"}).state("main.search",{url:"/",views:{"subview@main":{templateUrl:"app/main/main-search.html",controller:"MainSearchController",controllerAs:"vm"}}}).state("main.conversation",{url:"/conversation/:conversation_id",views:{"subview@main":{templateUrl:"app/main/main-conversation.html",controller:"MainConversationController",controllerAs:"vm"}},resolve:{conversation:["$stateParams","Conversation",function(e,n){return n.find(e.conversation_id).then(function(e){return e.DSLoadRelations("messages")})}]}})}t.$inject=["$stateProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.MainConversationController=function(){function e(n,i,o,s,a){"ngInject";t(this,e),this.$log=o,this.$window=i,this.$anchorScroll=s,this.conversation=a,this.activate()}return e.$inject=["$scope","$window","$log","$anchorScroll","conversation"],i(e,[{key:"activate",value:function(){this.$anchorScroll()}},{key:"goBack",value:function(){this.$window.history.back()}}]),e}()},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.MainIndexController=function(){function e(n,i,o){"ngInject";t(this,e),this.$state=i,this.$log=o,this.activate(n)}return e.$inject=["$scope","$state","$log"],i(e,[{key:"activate",value:function(e){var n=this;e.$watch("vm.searchText",function(){n.makeLink()}),e.$watch("vm.$state.current.name",function(e){n.stateName="state-"+e.toString().replace(".","-")}),this.makeLink()}},{key:"makeLink",value:function(){this.smsLink="sms:16462916384&body="+encodeURIComponent("I'd like to chat about money with one of your coaches. 💰")}}]),e}()},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.MainSearchController=function(){function e(n,i,o,s){"ngInject";t(this,e),this.$scope=n,this.$log=i,this.Conversation=s,this.limitTo=3,this.searchTextCache="",this.searchPromise=null,this.debounceSearch=o.throttle(this.search,500,{leading:!0,trailing:!0}),this.activate()}return e.$inject=["$scope","$log","_","Conversation"],i(e,[{key:"activate",value:function(){var e=this;this.pending=!0,this.Conversation.findAll({platform_id:1}).then(function(n){return e.conversations=n,e.pending=!1,n}),this.$scope.$watch("vm.searchText",function(){e.debounceSearch()})}},{key:"search",value:function(){var e=this;return this.searchTextCache===this.searchText?!0:(this.searchPromise&&this.searchPromise.abort&&this.searchPromise.abort(),this.pending=!0,this.searchTextCache=this.searchText,this.searchPromise=this.Conversation.meta.search(this.searchText,1),this.searchPromise.then(function(n){return e.conversations=n,e.pending=!1,n}),this.searchPromise)}}]),e}()},function(e,n,t){"use strict";var i=t(15),o=t(16),s=t(17);angular.module("infoStates",[]).config(i.routerConfig).controller("InfoIndexController",o.InfoIndexController).controller("InfoAboutController",s.InfoAboutController)},function(e,n){"use strict";function t(e){"ngInject";e.state("info",{"abstract":!0,url:"",templateUrl:"app/info/info-index.html",controller:"InfoIndexController",controllerAs:"vm"}).state("info.about",{url:"/about",templateUrl:"app/info/info-about.html",controller:"InfoAboutController",controllerAs:"vm"})}t.$inject=["$stateProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.InfoIndexController=function(){function e(){"ngInject";t(this,e),this.activate()}return i(e,[{key:"activate",value:function(){}}]),e}()},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.InfoAboutController=function(){function e(){"ngInject";t(this,e),this.activate()}return i(e,[{key:"activate",value:function(){}}]),e}()},function(e,n){"use strict";angular.module("components.environment",[]).constant("env","production").constant("configApiBase","https://text-a-coach-backend.herokuapp.com/api/v1")}]),angular.module("coachApp").run(["$templateCache",function(e){e.put("app/info/info-about.html",'<div class="info-about container"><div class="row align-center"><div class="small-8 columns text-center"><h3>About Us</h3></div></div><div class="row align-center"><div class="small-10 columns text-left">Lorem ipsum dolor sit amet...</div></div></div>'),e.put("app/info/info-index.html","<div class=page-info-index><div class=info-subview><div class=uiview ui-view></div><div sticky-footer scroll-target=.main-subview></div></div></div>"),e.put("app/main/main-conversation.html",'<div class="main-conversation container"><div class="row align-center"><div class="small-10 columns text-center"><a class="hollow-button teal all-caps" ng-click=vm.goBack()><i class=material-icons>chevron_left</i> Back To Conversations</a></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class=conversation><div ng-if="vm.conversation.messages.length > 0"><div class=message ng-repeat="message in vm.conversation.messages" ng-class=message.direction><div class="person text-center" ng-show="message.direction === \'direction_out\'"><small><span class=all-caps>{{vm.conversation.agent.name}}</span>, {{vm.conversation.agent.job_title}}</small></div><div class="person text-center" ng-show="message.direction === \'direction_in\'"><small><span class=all-caps>{{vm.conversation.user.name}}</span> in {{vm.conversation.user.city}}</small></div>{{message.message}}</div></div><div ng-if="vm.conversation.messages.length === 0"><div class="message direction_in"><div class="person text-center"><small><span class=all-caps>{{vm.conversation.user.name}}</span> in {{vm.conversation.user.city}}</small></div>{{vm.conversation.summary_question}}</div><div class="message direction_out"><div class="person text-center"><small><span class=all-caps>{{vm.conversation.agent.name}}</span>, {{vm.conversation.agent.job_title}}</small></div><p>{{vm.conversation.summary_answer}}</p></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-center"><a class="hollow-button teal all-caps" ng-click=vm.goBack()><i class=material-icons>chevron_left</i> Back To Conversations</a></div></div></div>'),e.put("app/main/main-index.html",'<div class=main-index ng-class=vm.stateName><div class=main-intro><div class=container><div class="row align-center"><div class="medium-7 small-9 columns text-center"><div><img class=logo src=assets/images/logo.png></div><h1>We are a network of<br>financial coaches providing<br>FREE money advice.</h1><div><a class=learn-more href=#>LEARN MORE</a></div><div class=start-conversation><!-- Desktop/tablet view show SMS form --><div class=show-for-medium><div ng-if=false><div class=input-container><input type=text ng-model=vm.searchText placeholder="I\'d like to know about..."><div class=background><div style=text-align:center><label>?</label>&nbsp;<!-- <span ng-hide="vm.searchText.length > 0">What can we help you with?</span> --></div></div></div><div class=input-container><input type=text ng-model=vm.phoneNumber placeholder="My phone number"><div class=background><div style=text-align:center><label>#</label>&nbsp;<!-- <span ng-hide="vm.phoneNumber.length > 0">(xxx) xxx-xxxx</span> --></div></div></div></div><p>Text us at:<br>(646) 291-6384</p><div><a class="button expanded all-caps" ng-href={{vm.smsLink}}><img class=chat-bubble src=assets/images/icon-chat-bubble.png> Text A Coach</a></div></div><!-- Mobile view direct-link to SMS --><div class=hide-for-medium><div><a class="button expanded all-caps" ng-href={{vm.smsLink}}><img class=chat-bubble src=assets/images/icon-chat-bubble.png> Text A Coach</a></div></div></div></div></div></div><div footer></div></div><div class=main-subview><div class=uiview ui-view=subview></div></div><div sticky-footer scroll-target=.main-subview></div><!--\n  <div class="recent-questions">\n    <div class="row">\n      <div class="small-12 columns">\n        <p align="center"><small>Filter by topic or search keywords or questions</small></p>\n      </div>\n    </div>\n\n    <div class="row align-center">\n      <div class="small-9 columns text-center">\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-1.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-2.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-3.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-4.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-5.svg);"\n        ></div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n    </div>\n  </div>\n  --></div>'),e.put("app/main/main-search.html",'<div class="main-search container"><div class="row align-center"><div class="small-8 columns text-center"><h3>Money conversations we\'re having&hellip;</h3></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class=input-container><input type=text ng-model=vm.searchText placeholder="Search by keyword or question..."><div class=background><div style=text-align:center><label><i class=material-icons>search</i></label>&nbsp;<!-- <span ng-hide="vm.searchText.length > 0">(xxx) xxx-xxxx</span> --></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class="spinner light spin-cw slow infinite fade-in fade-out" ng-if=vm.pending></div><div class="fade-in fade-out" ng-if=!vm.pending><div class=conversation ng-repeat="convo in vm.conversations | limitTo: vm.limitTo"><div class="message direction_in"><div class="person text-center"><small><span class=all-caps>{{convo.user.name}}</span> in {{convo.user.city}}</small></div>{{convo.summary_question}}</div><div class="message direction_out summary"><div class="person text-center"><small><span class=all-caps>{{convo.agent.name}}</span>, {{convo.agent.job_title}}</small></div><p>{{convo.teaser_answer}}</p><a class="hollow-button dark expanded all-caps" ui-sref="^.conversation({conversation_id: convo.id})">See Full Conversation</a></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-center"><!-- TODO: Implement results paging with API --> <a class="hollow-button teal all-caps" ng-show="vm.limitTo !== false" ng-click="vm.limitTo = false">Show More Conversations</a></div></div></div>'),e.put("app/components/footer/footer.html",'<section class=footer><ul class="menu align-center all-caps"><li><a>&copy;2016</a></li><li><a ui-sref=#>Privacy</a></li><li><a ui-sref=#>Terms</a></li><li><a ui-sref=info.about>About Us</a></li></ul></section>'),e.put("app/components/footer/sticky-footer.html",'<section class=sticky-footer ng-show=active><div class=container><div class="row align-center"><!--\n      <div class="small-4 columns text-center">\n        <a class="hollow-button expanded dark all-caps" ng-href="{{vm.smsLink}}">\n          Search\n        </a>\n      </div>\n      --><div class="small-12 columns text-center"><a class="button expanded all-caps" ng-href={{smsLink}}>Text A Coach</a></div></div></div></section>')}]);
//# sourceMappingURL=../maps/scripts/app-42c61fb5ab.js.map
