webpackJsonp([12],{369:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(t){return t.name===e}}function o(e,t){return e?e instanceof Array?e.find(r(t))||{}:e[t]||"":{}}function i(e){var t=e.sections,n=t.list,a=t.total,r=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:r}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(430),c=a(l),u=n(385),s=a(u),d=n(38),f=a(d),p=n(41),m=a(p),g=n(39),_=a(g),x=n(40),v=a(x),h=n(0),b=a(h),y=n(162),w=n(408),k=a(w),E=n(411),N=a(E),j=n(576),B=a(j),F=n(767),O=a(F),M=n(579),P=a(M),z=n(768),G=a(z),S=n(771),W=a(S),C=n(401),R=a(C),U=n(425),X=a(U),A=function(e){function t(){return(0,f.default)(this,t),(0,_.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list,a=(e.loading,o(n,"navigation").value),r=o(n,"compositions").value,i=X.default.parse(t.search.split("?")[1]),l=[],u={movie:"电影",game:"游戏",teleplay:"电视剧",animation:"动画",stage:"舞台剧",ad:"广告"};if(!r)return"";r.map(function(e){e.category&&-1===l.indexOf(e.category)&&l.push(e.category)});var s=[];(0,c.default)(u).map(function(e){return-1!=l.indexOf(u[e])&&s.push(u[e]),e});var d=[b.default.createElement(N.default,{fixed:!0,location:t,navs:a}),b.default.createElement(B.default,{bg:O.default,bg2x:P.default,title:"我们的配音作品集"}),b.default.createElement(G.default,{tabs:s,current_category:i.category}),b.default.createElement(W.default,{compositions:r,current_category:i.category}),b.default.createElement(R.default,null)];return b.default.createElement(k.default,{sections:d})}}]),t}(h.Component);t.default=(0,y.connect)(i)(A),e.exports=t.default},385:function(e,t,n){e.exports={default:n(165),__esModule:!0}},386:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},387:function(e,t,n){"use strict";n(161)},388:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},389:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},390:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},391:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},392:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},401:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(163),o=a(r),i=n(385),l=a(i),c=n(38),u=a(c),s=n(41),d=a(s),f=n(39),p=a(f),m=n(40),g=a(m);n(387);var _=n(0),x=a(_),v=n(402),h=a(v),b=(n(164),n(390)),y=a(b),w=function(e){function t(e){(0,u.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,d.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,n=(new Date).getFullYear();return x.default.createElement("div",{className:h.default.container,id:"contact"},x.default.createElement("div",{className:h.default.contact},x.default.createElement("div",{className:h.default.logo}),x.default.createElement("div",{className:h.default.way},x.default.createElement("div",{className:h.default["contact-title"]},"联系我们"),x.default.createElement("div",{className:h.default["contact-way"]},"电话：021-52527144"),x.default.createElement("div",{className:h.default["contact-way"]},"邮箱：springmedia@163.com")),x.default.createElement("div",{className:h.default.focus},x.default.createElement("div",{className:h.default["contact-title"]},"关注我们"),x.default.createElement("div",{className:h.default.wechatqrcode+(t?" "+h.default.show:"")},x.default.createElement("img",{className:h.default.qrcode,src:y.default,alt:""})),x.default.createElement("a",{href:"javasript:;",onClick:e,className:h.default.wechat+(t?" "+h.default.active:"")},x.default.createElement(o.default,{type:"wechat"})),x.default.createElement("a",{href:"https://weibo.com/springmedia",className:h.default.weibo,target:"_blank"},x.default.createElement(o.default,{type:"weibo"})))),x.default.createElement("p",{className:h.default.copyright},"Copyright © 1997-",n," Spring Media Ltd. All Rights Reserved."),x.default.createElement("p",{className:h.default.copyright},x.default.createElement("span",{className:h.default.gap},"沪ICP备16047667号"),x.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(_.Component);t.default=w,e.exports=t.default},402:function(e,t,n){var a=n(403);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},403:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(388))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+a(n(389))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},408:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(385),o=a(r),i=n(38),l=a(i),c=n(41),u=a(c),s=n(39),d=a(s),f=n(40),p=a(f),m=n(0),g=a(m),_=n(409),x=(a(_),function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return g.default.createElement("div",{key:t},e)});return g.default.createElement("div",null,t)}}]),t}(m.Component));t.default=x,e.exports=t.default},409:function(e,t,n){var a=n(410);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},410:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,"",""])},411:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(385),o=a(r),i=n(38),l=a(i),c=n(41),u=a(c),s=n(39),d=a(s),f=n(40),p=a(f),m=n(0),g=a(m),_=n(412),x=a(_),v=n(414),h=(a(v),function(e){function t(e){(0,l.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={},n}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=e.fixed,r=this.state.navigationBarFixed,o=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],r=e.link.split("/")[1],o=a&&-1!=r.indexOf(a)||a==r?x.default.item+" "+x.default.cur:x.default.item;return g.default.createElement("a",{href:e.link,key:n,className:o},e.title)}),i=r?x.default.wraper+" "+x.default.fixed:""+x.default.wraper;return a&&(i=x.default.wraper+" "+x.default.static),g.default.createElement("div",{className:i,ref:this.navigation},g.default.createElement("div",{className:x.default.list},g.default.createElement("a",{href:n&&n[0].link,className:x.default.logo}),g.default.createElement("div",{className:x.default.items},o)))}}]),t}(m.Component));t.default=h,e.exports=t.default},412:function(e,t,n){var a=n(413);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},413:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(391))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+a(n(392))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},414:function(e,t,n){e.exports=n.p+"8401e7566c4eb1504d92683fe97ad833.png"},425:function(e,t,n){"use strict";t.decode=t.parse=n(426),t.encode=t.stringify=n(427)},426:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var l=/\+/g;e=e.split(t);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var s=0;s<u;++s){var d,f,p,m,g=e[s].replace(l,"%20"),_=g.indexOf(n);_>=0?(d=g.substr(0,_),f=g.substr(_+1)):(d=g,f=""),p=decodeURIComponent(d),m=decodeURIComponent(f),a(i,p)?r(i[p])?i[p].push(m):i[p]=[i[p],m]:i[p]=m}return i};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},427:function(e,t,n){"use strict";function a(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(i(e),function(i){var l=encodeURIComponent(r(i))+n;return o(e[i])?a(e[i],function(e){return l+encodeURIComponent(r(e))}).join(t):l+encodeURIComponent(r(e[i]))}).join(t):l?encodeURIComponent(r(l))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},430:function(e,t,n){e.exports={default:n(56),__esModule:!0}},444:function(e,t,n){e.exports=n.p+"17880ac025fda99546a457a3ee8f39d1.png"},576:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(385),o=a(r),i=n(38),l=a(i),c=n(41),u=a(c),s=n(39),d=a(s),f=n(40),p=a(f),m=n(0),g=a(m),_=n(577),x=a(_),v=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.bg,a=e.bg2x;console.info("CompositionBanner",n,a);var r=2===window.devicePixelRatio?a:n;return g.default.createElement("div",{style:{backgroundImage:"url("+r+")"},className:x.default.container},g.default.createElement("div",{className:x.default.title},t))}}]),t}(m.Component);t.default=v,e.exports=t.default},577:function(e,t,n){var a=n(578);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},578:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_jb1YFWCuvX_fcNxmm57pB {\n  width: 100%;\n  height: 170px;\n  /*background-image: url('../../../assets/list_banner_bg.jpg');*/\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .container_jb1YFWCuvX_fcNxmm57pB {\n    /*background-image: url('../../../assets/list_banner_bg_2x.jpg');*/ } }\n\n.title_3kcaSIRr6Fz4kXMy231aFr {\n  font-size: 60px;\n  color: #fff;\n  font-weight: 700;\n  text-align: center; }\n",""]),t.locals={container:"container_jb1YFWCuvX_fcNxmm57pB",title:"title_3kcaSIRr6Fz4kXMy231aFr"}},579:function(e,t,n){e.exports=n.p+"a9181ccc39189a43e22a885a62539e62.jpg"},580:function(e,t,n){e.exports=n.p+"434d7460ff9eb8e49112ed513c36800b.jpg"},767:function(e,t,n){e.exports=n.p+"c62260dc8c4740eeba8f2ad67bb7e549.jpg"},768:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(430),o=a(r),i=n(385),l=a(i),c=n(38),u=a(c),s=n(41),d=a(s),f=n(39),p=a(f),m=n(40),g=a(m),_=n(0),x=a(_),v=n(769),h=a(v),b=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.current_category,a={movie:"电影",game:"游戏",teleplay:"电视剧",animation:"动画",stage:"舞台剧",ad:"广告"},r=t.map(function(e,t){var r="";(0,o.default)(a).map(function(t){a[t]===e&&(r=t)});var i=""+h.default.item;n||0!==t||(i=h.default.item+" "+h.default.cur),n&&n===r&&(i=h.default.item+" "+h.default.cur);var l="/compositions?category="+r;return x.default.createElement("a",{href:l,className:i,key:t},e)});return x.default.createElement("div",{className:h.default.container},x.default.createElement("div",{className:h.default.items},r))}}]),t}(_.Component);t.default=b,e.exports=t.default},769:function(e,t,n){var a=n(770);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},770:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_3tlA4a1U0NPnpkkpgIbK05 {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-bottom: 1px solid #eee; }\n\n.item_3JicxaeZc9k5wSGDe0ryf8 {\n  height: 60px;\n  line-height: 60px;\n  font-size: 18px;\n  color: #333;\n  margin: 0 30px;\n  display: inline-block;\n  position: relative; }\n  .item_3JicxaeZc9k5wSGDe0ryf8.cur_1nI0JcFFz2fxriFz2qas4D, .item_3JicxaeZc9k5wSGDe0ryf8:hover {\n    color: #b2804d; }\n    .item_3JicxaeZc9k5wSGDe0ryf8.cur_1nI0JcFFz2fxriFz2qas4D:after, .item_3JicxaeZc9k5wSGDe0ryf8:hover:after {\n      content: '';\n      display: block;\n      width: 30px;\n      height: 2px;\n      background: #b2804d;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      transform: translateX(-50%); }\n",""]),t.locals={container:"container_3tlA4a1U0NPnpkkpgIbK05",item:"item_3JicxaeZc9k5wSGDe0ryf8",cur:"cur_1nI0JcFFz2fxriFz2qas4D"}},771:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(385),o=a(r),i=n(38),l=a(i),c=n(41),u=a(c),s=n(39),d=a(s),f=n(40),p=a(f),m=n(0),g=a(m),_=n(772),x=a(_),v=n(444),h=a(v),b=n(580),y=(a(b),function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e={animation:"动画",game:"游戏",stage:"舞台剧",teleplay:"电视剧",ad:"广告",movie:"电影"},t=this.props,n=t.current_category,a=t.compositions;console.info("**current_category",n);var r=a.filter(function(t){var a=t.category;return e[n||"movie"]===a}),o=r.map(function(e,t){var n={backgroundImage:"url("+(e.cover_l||e.cover)+")"},r=a.findIndex(function(t){return t.name===e.name}),o=e.publish_date?g.default.createElement("div",{className:x.default.info},g.default.createElement("img",{className:x.default.icon,src:h.default,alt:""}),g.default.createElement("span",{className:x.default.date},e.publish_date)):"";return g.default.createElement("a",{href:e.nolink?"javascript:;":e.homepage||"/composition?index="+r,target:e.homepage?"_blank":"",className:x.default.item,key:t},g.default.createElement("div",{className:x.default.cover,style:n}),g.default.createElement("div",{className:x.default.content},g.default.createElement("div",{className:x.default.title},e.name),g.default.createElement("pre",{className:x.default.desc},e.desc),o))});return g.default.createElement("div",{className:x.default.container},g.default.createElement("div",{className:x.default.items},o))}}]),t}(m.Component));t.default=y,e.exports=t.default},772:function(e,t,n){var a=n(773);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(355)(a,r);a.locals&&(e.exports=a.locals)},773:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_1d_DwX9vEbU4oJWQLBqWir {\n  background: #f9f9f9;\n  padding: 30px 0 60px; }\n\n.items_16M4rReRHXUBXt3syX9Z2j {\n  width: 1200px;\n  margin: 0 auto; }\n\n.item_1UvGW4xQOXHPYGiBOLNjDW {\n  width: 290px;\n  height: 360px;\n  border: 1px solid #e8e8e8;\n  background: #fff;\n  transition: 400ms;\n  position: relative;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 13px;\n  margin-bottom: 20px;\n  vertical-align: top;\n  overflow: hidden; }\n  .item_1UvGW4xQOXHPYGiBOLNjDW:nth-child(4n+4) {\n    margin-right: 0px; }\n  .item_1UvGW4xQOXHPYGiBOLNjDW:hover {\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2); }\n\n.content_2_I_dlwG-agyC1fjIgg_PH {\n  padding: 12px; }\n\n.cover_i2rWnm9t_j98PyVu6mhAj {\n  width: 288px;\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.title_3FOfE7MEeGUsbtUBBgThXA {\n  font-size: 18px;\n  line-height: 23px;\n  color: #333;\n  margin-bottom: 12px;\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden; }\n\n.desc_2BxWeB8LZXwzqntDRTThoZ {\n  color: #666;\n  font-size: 16px;\n  line-height: 19px; }\n\n.icon_2ez3IuBF4ExjuYMe5gCsf3 {\n  vertical-align: middle;\n  margin-right: 6px; }\n\n.info_2-5WTbGo_FGYEmCbP40H3u {\n  position: absolute;\n  bottom: 7px;\n  left: 12px; }\n\n.desc_2BxWeB8LZXwzqntDRTThoZ {\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  -webkit-line-clamp: 5;\n  display: -webkit-box;\n  overflow: hidden;\n  font-weight: 200;\n  white-space: pre-wrap; }\n\n.date_s3pgT8mssvVsi8jtzRdR2 {\n  font-size: 14px;\n  line-height: 1em;\n  color: #999;\n  vertical-align: middle; }\n",""]),t.locals={container:"container_1d_DwX9vEbU4oJWQLBqWir",items:"items_16M4rReRHXUBXt3syX9Z2j",item:"item_1UvGW4xQOXHPYGiBOLNjDW",content:"content_2_I_dlwG-agyC1fjIgg_PH",cover:"cover_i2rWnm9t_j98PyVu6mhAj",title:"title_3FOfE7MEeGUsbtUBBgThXA",desc:"desc_2BxWeB8LZXwzqntDRTThoZ",icon:"icon_2ez3IuBF4ExjuYMe5gCsf3",info:"info_2-5WTbGo_FGYEmCbP40H3u",date:"date_s3pgT8mssvVsi8jtzRdR2"}}});