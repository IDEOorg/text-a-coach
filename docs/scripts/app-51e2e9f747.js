/******/!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";var o=i(1),n=i(2),a=i(3),s=i(4),r=i(5),l=i(6),c=i(7),u=i(8);i(9),i(14),i(18);var h=["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ui.router","mm.foundation","toastr","js-data","infoStates","mainStates","components.environment"];angular.module("coachApp",h).constant("_",_).constant("moment",moment).config(o.config).config(n.routerConfig).run(a.runBlock).service("viewportService",s.ViewportService).factory("Conversation",r.ConversationFactory).factory("Message",l.MessageFactory).directive("footer",c.FooterDirective).directive("stickyFooter",u.StickyFooterDirective)},function(e,t){"use strict";function i(e,t,i,o,n,a){"ngInject";t.debugEnabled(!0),i.allowHtml=!0,i.timeOut=3e3,i.positionClass="toast-top-right",i.preventDuplicates=!0,i.progressBar=!0,e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/),angular.extend(o.defaults,{}),angular.extend(n.defaults,{basePath:a})}i.$inject=["$compileProvider","$logProvider","toastrConfig","DSProvider","DSHttpAdapterProvider","configApiBase"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=i},function(e,t){"use strict";function i(e,t){"ngInject";t.otherwise("/")}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=i},function(e,t){"use strict";function i(e,t,i){"ngInject";e.resize()}i.$inject=["viewportService","Message","Conversation"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=i},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.ViewportService=function(){function e(t,o,n){"ngInject";i(this,e),this.$log=t,this.$window=angular.element(n),this.$rootScope=o,this.$window.resize(this.resize)}return e.$inject=["$log","$rootScope","$window"],o(e,[{key:"resize",value:function(){this.height=this.$window.innerHeight(),this.width=this.$window.innerWidth(),(this.$rootScope.viewportHeight!=this.height||this.$rootScope.viewportWidth!=this.width)&&(this.$rootScope.viewportHeight=this.height,this.$rootScope.viewportWidth=this.width,this.$rootScope.$apply())}}]),e}()},function(e,t){"use strict";function i(e,t,i,o){"ngInject";return t.defineResource({name:"conversation",endpoint:"conversations",meta:{search:function(n,a,s){var r=e.defer(),l={};n&&(l.query=n),l.platform_id=a||1,l.page=s||1;var c=i.GET(o+"/conversations/search",{params:l,timeout:r.promise}).then(function(e){return e.data&&e.data.length>0?t.inject("conversation",e.data):[]});return c.abort=function(){r.resolve()},c["finally"](function(){c.abort=angular.noop}),c}},computed:{},methods:{cloneFields:function(){return{id:this.id}}},relations:{hasMany:{message:[{localField:"messages",foreignKey:"conversation_id"}]}}})}i.$inject=["$q","DS","DSHttpAdapter","configApiBase"],Object.defineProperty(t,"__esModule",{value:!0}),t.ConversationFactory=i},function(e,t){"use strict";function i(e){"ngInject";return e.defineResource({name:"message",endpoint:"messages",meta:{},computed:{},methods:{cloneFields:function(){return{id:this.id,conversation_id:this.conversation_id,direction:this.direction,message:this.message}}},relations:{belongsTo:{conversation:[{localKey:"conversation_id",localField:"conversation"}]}}})}i.$inject=["DS"],Object.defineProperty(t,"__esModule",{value:!0}),t.MessageFactory=i},function(e,t){"use strict";function i(){"ngInject";var e={restrict:"A",templateUrl:"app/components/footer/footer.html",scope:{}};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.FooterDirective=i},function(e,t){"use strict";function i(e,t){"ngInject";var i={restrict:"A",templateUrl:"app/components/footer/sticky-footer.html",scope:{active:"=?"},link:function(i,o,n){i.smsLink="sms:16462916384&body="+encodeURIComponent("I'd like to chat about money with one of your coaches. 💰");var a=angular.element(n.scrollTarget),s=angular.element(e),r=function(){a.offset().top-.9*s.height()-s.scrollTop()<0?i.active=!0:i.active=!1,i.$apply()},l=t.throttle(r,250,{leading:!0,trailing:!0});s.on("scroll",l)}};return i}i.$inject=["$window","_"],Object.defineProperty(t,"__esModule",{value:!0}),t.StickyFooterDirective=i},function(e,t,i){"use strict";var o=i(10),n=i(11),a=i(12),s=i(13);angular.module("mainStates",[]).config(o.routerConfig).controller("MainConversationController",n.MainConversationController).controller("MainIndexController",a.MainIndexController).controller("MainSearchController",s.MainSearchController)},function(e,t){"use strict";function i(e){"ngInject";e.state("main",{"abstract":!0,url:"",templateUrl:"app/main/main-index.html",controller:"MainIndexController",controllerAs:"vm"}).state("main.search",{url:"/",views:{"subview@main":{templateUrl:"app/main/main-search.html",controller:"MainSearchController",controllerAs:"vm"}}}).state("main.conversation",{url:"/conversation/:conversation_id",views:{"subview@main":{templateUrl:"app/main/main-conversation.html",controller:"MainConversationController",controllerAs:"vm"}},resolve:{conversation:["$stateParams","Conversation",function(e,t){return t.find(e.conversation_id).then(function(e){return e.DSLoadRelations("messages")})}]}})}i.$inject=["$stateProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=i},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.MainConversationController=function(){function e(t,o,n,a,s,r){"ngInject";i(this,e),this.$log=a,this.$state=o,this.$window=n,this.$anchorScroll=s,this.conversation=r,this.activate()}return e.$inject=["$scope","$state","$window","$log","$anchorScroll","conversation"],o(e,[{key:"activate",value:function(){this.$anchorScroll()}},{key:"goBack",value:function(){this.$state.go("main.search",{returning:1})}}]),e}()},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.MainIndexController=function(){function e(t,o,n,a,s){"ngInject";i(this,e),this.$state=o,this.$log=n,this.$anchorScroll=a,this.$timeout=s,this.activate(t)}return e.$inject=["$scope","$state","$log","$anchorScroll","$timeout"],o(e,[{key:"activate",value:function(e){var t=this;this.scrollToConversations=!1,e.$watch("vm.searchText",function(){t.makeLink()}),e.$watch("vm.$state.current.name",function(e){t.stateName="state-"+e.toString().replace(".","-")}),e.$on("$stateChangeSuccess",function(e,i,o,n,a){"main.search"===i.name&&"main.conversation"===n.name?t.scrollToConversations=!0:t.scrollToConversations=!1}),e.$on("$viewContentLoaded",function(e){t.scrollToConversations?t.$timeout(function(){t.$anchorScroll("main-subview")},100):t.$timeout(function(){t.$anchorScroll()},100)}),this.makeLink()}},{key:"makeLink",value:function(){this.smsLink="sms:16462916384&body="+encodeURIComponent("I'd like to chat about money with one of your coaches. 💰")}}]),e}()},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.MainSearchController=function(){function e(t,o,n,a){"ngInject";i(this,e),this.$scope=t,this.$log=o,this.Conversation=a,this.limitTo=3,this.searchTextCache="",this.searchPromise=null,this.debounceSearch=n.throttle(this.search,500,{leading:!0,trailing:!0}),this.activate()}return e.$inject=["$scope","$log","_","Conversation"],o(e,[{key:"activate",value:function(){var e=this;this.pending=!0,this.Conversation.findAll({platform_id:1}).then(function(t){return e.conversations=t,e.pending=!1,t}),this.$scope.$watch("vm.searchText",function(){e.debounceSearch()})}},{key:"search",value:function(){var e=this;return this.searchTextCache===this.searchText?!0:(this.searchPromise&&this.searchPromise.abort&&this.searchPromise.abort(),this.pending=!0,this.searchTextCache=this.searchText,this.searchPromise=this.Conversation.meta.search(this.searchText,1),this.searchPromise.then(function(t){return e.conversations=t,e.pending=!1,t}),this.searchPromise)}}]),e}()},function(e,t,i){"use strict";var o=i(15),n=i(16),a=i(17);angular.module("infoStates",[]).config(o.routerConfig).controller("InfoIndexController",n.InfoIndexController).controller("InfoAboutController",a.InfoAboutController)},function(e,t){"use strict";function i(e){"ngInject";e.state("info",{"abstract":!0,url:"",templateUrl:"app/info/info-index.html",controller:"InfoIndexController",controllerAs:"vm"}).state("info.about",{url:"/about",templateUrl:"app/info/info-about.html",controller:"InfoAboutController",controllerAs:"vm"}).state("info.terms",{url:"/terms",templateUrl:"app/info/info-terms.html"})}i.$inject=["$stateProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=i},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.InfoIndexController=function(){function e(){"ngInject";i(this,e),this.activate()}return o(e,[{key:"activate",value:function(){}}]),e}()},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.InfoAboutController=function(){function e(){"ngInject";i(this,e),this.activate()}return o(e,[{key:"activate",value:function(){}}]),e}()},function(e,t){"use strict";angular.module("components.environment",[]).constant("env","production").constant("configApiBase","https://text-a-coach-backend.herokuapp.com/api/v1")}]),angular.module("coachApp").run(["$templateCache",function(e){e.put("app/info/info-about.html",'<div class="container page-info page-info-about"><h1 ui-sref=main.search>Text a Coach</h1><div class="row align-center"><div class="small-8 columns"><h2>Talking about money is hard. We make the toughest questions easier to ask.</h2><p>With their 24/7 financial coaches, getting access to financial advice that fits your life is only a text message away. Ask a question, create goals, and plan for the future with our coaches.</p><p>Please note this service is still in beta. By texting us you agree to our terms.</p><p>Text a Coach is brought to you by the financial health tools team at IDEO.org. As a 501(c)(3) nonprofit organization, our mission is to improve the lives of people in poor and vulnerable communities through design.</p><p>For feedback or to learn more about our organization feel free to email us at letstalk@IDEO.org.</p></div></div><div style="padding-top: 1em"><p class=text-center><a class="hollow-button with-icon dark all-caps" ui-sref=main.search><i class=material-icons>chevron_left</i> Back to All Questions</a></p></div><div footer></div></div>'),e.put("app/info/info-index.html","<div class=page-info-index><div class=info-subview><div class=uiview ui-view></div></div></div>"),e.put("app/info/info-terms.html",'<div class="container page-info page-info-about"><h1 ui-sref=main.search>Text a Coach</h1><div class="row align-center"><div class="small-8 columns"><h2>Terms</h2><p>Welcome to the Text-A-Coach Website</p><p>Please read these Terms of Service ("Terms") carefully before using the Text-A-Coach website operated by IDEO.org ("us", "we", or "our"). These Terms are a legal contract between you and us (collectively, "Everyone") and govern your use of all the text, data, information, software, graphics, photographs and more (all of which We refer to as “Materials”) that we and our affiliates may make available to you, as well as any services (“Services”) we may provide through any of our websites (all of which, together with all Materials and Services made available through any such websites are referred to in these Terms as this “Website”).</p><p>[The Website is intended to provide financial and money management information but we do not warrant that any of the advice or recommendations are accurate or error-free. Any decisions that you make with the use of Materials and Services is at your own risk and we have no liability for the results or consequences of any of those decisions.]</p><p>By accessing or using the Website you agree to be bound by these Terms, as well as our Privacy Policy. These Terms apply to all visitors to the Website and to all users and others who wish to access or use the Service. If you disagree with any part of the Terms or Privacy Policy, then do not access the Website or the Service. USING THIS WEBSITE INDICATES THAT YOU HAVE BOTH READ AND ACCEPT THESE TERMS. YOU CANNOT USE THIS WEBSITE IF YOU DO NOT ACCEPT THESE TERMS.</p><h2>Changes</h2><p>We may alter the Website we offer you or choose to modify, suspend or discontinue this Website at any time and without notifying you. We may also change, update, add or remove provisions (collectively, “modifications”) of these Terms from time to time. All changes are effective immediately when posted to the Website. We promise to inform you of any modifications to these Terms by posting them on this Website.</p><p>If you object to any such modifications, your sole recourse shall be to cease using this Website. Continued use of this Website following notice of any such modifications indicates you acknowledge and agree to be bound by the modifications.</p><h2>General Use</h2><p>Our Website is solely for users age 18 and older. By using the Website, you represent and guarantee that you are at least 18 years of age and that you have the authority and capacity to enter into and agree to these Terms.</p><h2>Ideo.org Intellectual Property</h2><p>The text, data, information, software, graphics, photographs, features, functionality and other content that we make available through the Website (the “Materials”) are and will remain the exclusive property of IDEO.org and its licensors. All rights not expressly granted herein are reserved. The Website is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of IDEO.org.</p><p>In these Terms we are granting You a limited, personal, non-exclusive and non-transferable license to use and to display the Materials. Your right to use the Materials is conditioned on Your compliance with these Terms. You may freely use the Materials in any way you want, but please keep in mind that you do so at your own risk. We will not be liable for the accuracy or reliability of any information contained within the Materials, or for any use of the Materials beyond their intended purpose.</p><h2>User Content and License Grant</h2><p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. Any Content that you post or otherwise make available through the Service is publicly accessible and not subject to the terms of our Privacy Policy. You represent and warrant that: (i) any Content posted on or through the Service is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity, (iii) you voluntarily agree to waive all "moral rights" that you may have in your Content. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p><p>By posting Content using the Service, you grant us a perpetual, irrevocable, transferable, non-exclusive, fully paid, worldwide right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content for any purpose and in any medium and format now known or later developed, for no compensation or royalties, and with no rights to further approve of our use of such Content. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.</p><p>IDEO.org has the right, but not the obligation, to monitor and edit, refuse or remove all Content provided by users of the Service.</p><p>A partial listing of prohibited content, or content that may be refused or removed from the Website, includes that which is vulgar, obscene, profane, offensive, is threatening or promotes physical harm, contains junk mail, spam or other forms of solicitation, infringes on another’s copyright, or is illegal or promotes illegal activities.</p><h2>Unauthorized Activities</h2><p>To be clear, we authorize your use of this Website only as expressly permitted in these Terms. Any other use of this Website beyond such use is prohibited and, therefore, constitutes unauthorized use of this Website.</p><p>Unauthorized use of this Website may result in violation of various United States and international copyright laws. Because we prefer keeping this relationship drama-free, we want to give you examples of things to avoid. So, unless you have written permission from us stating otherwise, you are not authorized to use this Website in any of the following ways (these are examples only and the list below is not a complete list of everything that you are not permitted to do):</p><ul><li>For any public or commercial purpose which includes use of this Website on another site or through a networked computer environment;</li><li>In a manner that violates any local, state, national, foreign, or international statute, regulation, rule, order, treaty, or other law;</li><li>To stalk, harass, or harm another individual;</li><li>To impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity;</li><li>To interfere with or disrupt this Website or servers or networks connected to this Website;</li><li>To use any data mining, robots, or similar data gathering or extraction methods in connection with this Website; or</li><li>Attempt to gain unauthorized access to any portion of this Website or any other accounts, computer systems, or networks connected to this Website, whether through hacking, password mining, or any other means.</li></ul><h2>Privacy Policy</h2><p>We respect the information that you provide to us, and want to be sure you fully understand exactly how we use that information. So, please review our Privacy Policy (“Privacy Policy”) which explains everything.</p><h2>Links To Other Web Sites</h2><p>Our Website may contain links to third party web sites or services that are not owned or controlled by IDEO.org.</p><p>IDEO.org has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p><p>You acknowledge and agree that IDEO.org shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.</p><p>We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.</p><h2>Mobile Devices</h2><p>If you access the Website or Services from a mobile device, you must have a wireless subscription or other network access. You are solely and personally responsible for any fees or charges from your wireless or network provider, as well as for any necessary equipment or software requirements associated with accessing our Service through your mobile device.</p><h2>Termination</h2><p>We may terminate or suspend your account and bar access to the Website or any Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p><p>If you wish to terminate your account, you may simply discontinue using the Website and Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p><h2>Disclaimer of Warranties</h2><p>THIS WEBSITE IS PROVIDED "AS IS" AND "WITH ALL FAULTS" AND THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THIS WEBSITE IS WITH YOU.</p><p>WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND (EXPRESS, IMPLIED OR STATUTORY) WITH RESPECT TO THIS SERVICE, WHICH INCLUDES BUT IS NOT LIMITED TO, ANY IMPLIED OR STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS.</p><p>THIS MEANS THAT WE DO NOT PROMISE YOU THAT THE WEBSITE IS FREE OF PROBLEMS. Without limiting the generality of the foregoing, We make no warranty that this Website will meet Your requirements or that this Website will be uninterrupted, timely, secure, or error free or that defects in this Website will be corrected. We make no warranty as to the results that may be obtained from the use of this Website or as to the accuracy or reliability of any information obtained through this Website. No advice or information, whether oral or written, obtained by You through this Website or from Us or Our subsidiaries/other affiliated companies shall create any warranty. We disclaim all equitable indemnities.</p><p>IDEO.org its subsidiaries, affiliates, and its licensors do not warrant that a) the Website will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Website is free of viruses or other harmful components; or d) the results of using the Website will meet your requirements.</p><h2>Limitation Of Liability</h2><p>WE SHALL NOT BE LIABLE TO YOU FOR ANY DAMAGES RESULTING FROM YOUR USE OF THE WEBSITE. WE MAKE NO WARRANTIES ABOUT THE ACCURACY OR OUTCOME OF ANY ADVICE THAT YOU MAY RECEIVE FROM THE USE OF THE WEBSITE. WE MAKE NO GUARANTEES REGARDING PORTFOLIO PERFORMANCE OR RATES OF RETURN. YOU ALONE BEAR THE RISK OF ANY INVESTMENT DECISIONS MADE IN RELIANCE ON INFORMATION OR ADVICE THAT YOU RECEIVE FROM THE WEBSITE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE TO YOU FOR ANY INDIRECT, EXTRAORDINARY, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE) HOWEVER ARISING, EVEN IF WE KNOW THERE IS A POSSIBILITY OF SUCH DAMAGE. UNDER NO CIRCUMSTANCES WILL OUR AGGREGATE LIABILITY FOR YOUR USE OF THE SERVICE EXCEED THE SUM OF $1000.00.</p><h2>Intellectual Property Infringement</h2><p>We respect the intellectual property rights of others and encourage you to do the same. Accordingly, we have a policy of removing Content that violate intellectual property rights of others, suspending access to this Website (or any portion thereof) to any user who uses this Website in violation of someone’s intellectual property rights, and/or terminating in appropriate circumstances the account of any user who uses the this Website in violation of someone’s intellectual property rights.</p><p>Pursuant to Title 17 of the United States Code, Section 512, we have implemented procedures for receiving written notification of claimed copyright infringement and for processing such claims in accordance with such law. If you believe your copyright or other intellectual property right is being infringed by a user of this Website, please provide written notice to our agent for notice of claims of infringement:</p><p>Attn: Matt Taylor, DMCA Agent Email: legal@ideo.org</p><p>To be sure the matter is handled immediately, your written notice must:</p><ul><li>Contain your physical or electronic signature;</li><li>Identify the copyrighted work or other intellectual property alleged to have been infringed;</li><li>Identify the allegedly infringing material in a sufficiently precise manner to allow us to locate that material;</li><li>Contain adequate information by which we can contact you (including postal address, telephone number, and e-mail address);</li><li>Contain a statement that you have a good faith belief that use of the copyrighted material or other intellectual property is not authorized by the owner, the owner\'s agent or the law;</li><li>Contain a statement that the information in the written notice is accurate; and</li><li>Contain statement, under penalty of perjury, that you are authorized to act on behalf of the copyright or other intellectual property right owner.</li></ul><p>Unless the notice pertains to copyright or other intellectual property infringement, the Agent will be unable to address the listed concern.</p><p>i. Submitting a DMCA Counter-Notification</p><p>We will notify you that we have removed or disabled access to copyright-protected material that you provided, if such removal is pursuant to a validly received DMCA take-down notice. In response, you may provide our agent with a written counter-notification that includes the following information:</p><ul><li>Your physical or electronic signature;</li><li>Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled;</li><li>A statement from you under the penalty of perjury, that You have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and</li><li>Your name, physical address and telephone number, and a statement that you consent to the jurisdiction of a court for the judicial district in which your physical address is located, or if your physical address is outside of the United States, for any judicial district in which we may be located, and that you will accept service of process from the person who provided notification of allegedly infringing material or an agent of such person.</li></ul><p>ii. Termination of Repeat Infringers</p><p>We reserve the right, in our sole discretion, to terminate the account or access of any user of this Website or Service who is the subject of repeated DMCA or other infringement notifications.</p><p>iii. Indemnification</p><p>You agree to defend, indemnify and hold harmless IDEO.org and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees), resulting from or arising out of a) your use and access of the Website or Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content that you post on the Service.</p><h2>Local Laws; Export Control</h2><p>We control and operate this Website from our headquarters in the United States of America and the entirety of this Website may not be appropriate or available for use in other locations. If you use this Website outside the United States of America, you are solely responsible for following applicable local laws.</p><h2>Feedback</h2><p>Any submissions by you to us (e.g., comments, questions, suggestions, materials – collectively, “Feedback”) through any communication whatsoever (e.g., call, fax, email) will be treated as both non-confidential and non-proprietary. You hereby assign all right, title, and interest in, and we are free to use, without any attribution or compensation to you, any ideas, know-how, concepts, techniques, or other intellectual property and proprietary rights contained in the Feedback, whether or not patentable, for any purpose whatsoever, including but not limited to, developing, manufacturing, having manufactured, licensing, marketing, and selling, directly or indirectly, products and services using such Feedback. You understand and agree that we are not obligated to use, display, reproduce, or distribute any such ideas, know-how, concepts, or techniques contained in the Feedback, and you have no right to compel such use, display, reproduction, or distribution.</p><h2>Governing Law</h2><p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p><p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Website, and supersede and replace any prior agreements we might have had between us regarding the Service.</p><h2>Contact Us</h2><p>If you have any questions about these Terms, please contact us at: <a href=mailto:letstalk@ideo.org>letstalk@ideo.org</a></p></div></div><div style="padding-top: 1em"><p class=text-center><a class="hollow-button with-icon dark all-caps" ui-sref=main.search><i class=material-icons>chevron_left</i> Back to All Questions</a></p></div><div footer></div></div>'),e.put("app/main/main-conversation.html",'<div class="main-conversation container"><div class="row align-center"><div class="small-10 columns text-center"><a class="hollow-button with-icon teal all-caps" ng-click=vm.goBack()><i class=material-icons>chevron_left</i> Back To Conversations</a></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class=conversation><div ng-if="vm.conversation.messages.length > 0"><div class=message ng-repeat="message in vm.conversation.messages" ng-class=message.direction><div class="person text-center" ng-show="message.direction === \'direction_out\'"><small><span class=all-caps>{{vm.conversation.agent.name}}</span>, {{vm.conversation.agent.job_title}}</small></div><div class="person text-center" ng-show="message.direction === \'direction_in\'"><small><span class=all-caps>{{vm.conversation.user.name}}</span> in {{vm.conversation.user.city}}</small></div>{{message.message}}</div></div><div ng-if="vm.conversation.messages.length === 0"><div class="message direction_in"><div class="person text-center"><small><span class=all-caps>{{vm.conversation.user.name}}</span> in {{vm.conversation.user.city}}</small></div>{{vm.conversation.summary_question}}</div><div class="message direction_out"><div class="person text-center"><small><span class=all-caps>{{vm.conversation.agent.name}}</span>, {{vm.conversation.agent.job_title}}</small></div><p>{{vm.conversation.summary_answer}}</p></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-center"><a class="hollow-button with-icon teal all-caps" ng-click=vm.goBack()><i class=material-icons>chevron_left</i> Back To Conversations</a></div></div></div>'),
e.put("app/main/main-index.html",'<div class=main-index ng-class=vm.stateName><div class=main-intro><div class=container><div class="row align-center"><div class="medium-7 small-9 columns text-center"><div><img class=logo src=assets/images/logo.png></div><h1>We are a network of<br>financial coaches providing<br>FREE money advice.</h1><div><a class=learn-more ui-sref=info.about>LEARN MORE</a></div><div class=start-conversation><!-- Desktop/tablet view show SMS form --><div class=show-for-medium><div ng-if=false><div class=input-container><input type=text ng-model=vm.searchText placeholder="I\'d like to know about..."><div class=background><div style=text-align:center><label>?</label>&nbsp;<!-- <span ng-hide="vm.searchText.length > 0">What can we help you with?</span> --></div></div></div><div class=input-container><input type=text ng-model=vm.phoneNumber placeholder="My phone number"><div class=background><div style=text-align:center><label>#</label>&nbsp;<!-- <span ng-hide="vm.phoneNumber.length > 0">(xxx) xxx-xxxx</span> --></div></div></div></div>Text a Coach at:<div style="padding-top: 0.5em"><a class="button expanded all-caps"><img class=chat-bubble src=assets/images/icon-chat-bubble.png> (646) 291-6384</a></div></div><!-- Mobile view direct-link to SMS --><div class=hide-for-medium><div><a class="button expanded all-caps" ng-href={{vm.smsLink}}><img class=chat-bubble src=assets/images/icon-chat-bubble.png> Text A Coach</a></div></div></div></div></div></div><div footer></div></div><div class=main-subview id=main-subview><div class=uiview ui-view=subview></div></div><div sticky-footer scroll-target=.main-subview></div><!--\n  <div class="recent-questions">\n    <div class="row">\n      <div class="small-12 columns">\n        <p align="center"><small>Filter by topic or search keywords or questions</small></p>\n      </div>\n    </div>\n\n    <div class="row align-center">\n      <div class="small-9 columns text-center">\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-1.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-2.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-3.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-4.svg);"\n        ></div>\n        <div class="icon-btn"\n          style="background-image: url(assets/images/icon-5.svg);"\n        ></div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n      <div class="small-6 columns">\n        <div class="question">\n          <strong>Q:</strong><br />\n          Question related to starting a business for the first time?<br />\n          &mdash; Brooklyn NY\n        </div>\n      </div>\n    </div>\n  </div>\n  --></div>'),e.put("app/main/main-search.html",'<div class="main-search container"><div class="row align-center"><div class="small-8 columns text-center"><h3>Money conversations we\'re having&hellip;</h3></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class=input-container><input type=text ng-model=vm.searchText placeholder="Search conversations"><div class=background><div style=text-align:center><label><i class=material-icons>search</i></label>&nbsp;<!-- <span ng-hide="vm.searchText.length > 0">(xxx) xxx-xxxx</span> --></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-left"><div class="spinner light spin-cw slow infinite fade-in fade-out" ng-if=vm.pending></div><div class="fade-in fade-out" ng-if=!vm.pending><div class=conversation ng-repeat="convo in vm.conversations | limitTo: vm.limitTo"><div class="message direction_in"><div class="person text-center"><small><span class=all-caps>{{convo.user.name}}</span> in {{convo.user.city}}</small></div>{{convo.summary_question}}</div><div class="message direction_out summary"><div class="person text-center"><small><span class=all-caps>{{convo.agent.name}}</span>, {{convo.agent.job_title}}</small></div><p>{{convo.teaser_answer}}</p><a class="hollow-button dark expanded all-caps" ui-sref="^.conversation({conversation_id: convo.id})">See Full Conversation</a></div></div></div></div></div><div class="row align-center"><div class="small-10 columns text-center"><!-- TODO: Implement results paging with API --> <a class="hollow-button teal all-caps" ng-show="vm.limitTo !== false" ng-click="vm.limitTo = false">Show More Conversations</a></div></div></div>'),e.put("app/components/footer/footer.html",'<section class=footer><ul class="menu align-center all-caps"><li><a>&copy;2016</a></li><li><a ui-sref=#>Privacy</a></li><li><a ui-sref=info.terms>Terms</a></li><li><a ui-sref=info.about>About Us</a></li></ul></section>'),e.put("app/components/footer/sticky-footer.html",'<section class=sticky-footer ng-show=active><div class=container><div class="row align-center"><!--\n      <div class="small-4 columns text-center">\n        <a class="hollow-button expanded dark all-caps" ng-href="{{vm.smsLink}}">\n          Search\n        </a>\n      </div>\n      --><div class="small-12 columns text-center"><a class="button expanded all-caps" ng-href={{smsLink}}>Text A Coach</a></div></div></div></section>')}]);
//# sourceMappingURL=../maps/scripts/app-51e2e9f747.js.map