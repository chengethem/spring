webpackJsonp([13],{370:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t){return t.name===e}}function i(e,t){return e?e instanceof Array?e.find(o(t))||{}:e[t]||"":{}}function r(e){var t=e.sections,n=t.list,a=t.total,o=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:o}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(385),c=a(l),d=n(38),s=a(d),u=n(41),f=a(u),p=n(39),m=a(p),g=n(40),v=a(g),h=n(0),_=a(h),x=n(162),b=n(408),w=a(b),y=n(581),N=a(y),k=n(411),E=a(k),P=n(774),j=a(P),z=n(777),O=a(z),S=n(401),M=a(S),U=n(425),F=a(U),B=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list;e.loading;if(n.length<1)return"";var a=F.default.parse(t.search.split("?")[1]).index||0,o=i(n,"navigation").value,r=i(n,"compositions").value,l=r[a],c=(i(n,"dubbers").value,_.default.createElement(j.default,{composition:l})),d=_.default.createElement(O.default,{cast:l.cast}),s=[_.default.createElement(E.default,{fixed:!0,location:t,navs:o}),_.default.createElement(N.default,{left:c,right:d}),_.default.createElement(M.default,null)];return _.default.createElement(w.default,{sections:s})}}]),t}(h.Component);t.default=(0,x.connect)(r)(B),e.exports=t.default},385:function(e,t,n){e.exports={default:n(165),__esModule:!0}},386:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},387:function(e,t,n){"use strict";n(161)},388:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},389:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},390:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},391:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},392:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},395:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},396:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},398:function(e,t,n){var a=n(424);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},401:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),i=a(o),r=n(385),l=a(r),c=n(38),d=a(c),s=n(41),u=a(s),f=n(39),p=a(f),m=n(40),g=a(m);n(387);var v=n(0),h=a(v),_=n(402),x=a(_),b=(n(164),n(390)),w=a(b),y=function(e){function t(e){(0,d.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,u.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,n=(new Date).getFullYear();return h.default.createElement("div",{className:x.default.container,id:"contact"},h.default.createElement("div",{className:x.default.contact},h.default.createElement("div",{className:x.default.logo}),h.default.createElement("div",{className:x.default.way},h.default.createElement("div",{className:x.default["contact-title"]},"联系我们"),h.default.createElement("div",{className:x.default["contact-way"]},"电话：021-52527144"),h.default.createElement("div",{className:x.default["contact-way"]},"邮箱：springmedia@163.com")),h.default.createElement("div",{className:x.default.focus},h.default.createElement("div",{className:x.default["contact-title"]},"关注我们"),h.default.createElement("div",{className:x.default.wechatqrcode+(t?" "+x.default.show:"")},h.default.createElement("img",{className:x.default.qrcode,src:w.default,alt:""})),h.default.createElement("a",{href:"javasript:;",onClick:e,className:x.default.wechat+(t?" "+x.default.active:"")},h.default.createElement(i.default,{type:"wechat"})),h.default.createElement("a",{href:"https://weibo.com/springmedia",className:x.default.weibo,target:"_blank"},h.default.createElement(i.default,{type:"weibo"})))),h.default.createElement("p",{className:x.default.copyright},"Copyright © 1997-",n," Spring Media Ltd. All Rights Reserved."),h.default.createElement("p",{className:x.default.copyright},h.default.createElement("span",{className:x.default.gap},"沪ICP备16047667号"),h.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(v.Component);t.default=y,e.exports=t.default},402:function(e,t,n){var a=n(403);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},403:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(388))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+a(n(389))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},408:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),d=a(c),s=n(39),u=a(s),f=n(40),p=a(f),m=n(0),g=a(m),v=n(409),h=(a(v),function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return g.default.createElement("div",{key:t},e)});return g.default.createElement("div",null,t)}}]),t}(m.Component));t.default=h,e.exports=t.default},409:function(e,t,n){var a=n(410);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},410:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,"",""])},411:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),d=a(c),s=n(39),u=a(s),f=n(40),p=a(f),m=n(0),g=a(m),v=n(412),h=a(v),_=n(414),x=(a(_),function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={},n}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=e.fixed,o=this.state.navigationBarFixed,i=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],o=e.link.split("/")[1],i=a&&-1!=o.indexOf(a)||a==o?h.default.item+" "+h.default.cur:h.default.item;return g.default.createElement("a",{href:e.link,key:n,className:i},e.title)}),r=o?h.default.wraper+" "+h.default.fixed:""+h.default.wraper;return a&&(r=h.default.wraper+" "+h.default.static),g.default.createElement("div",{className:r,ref:this.navigation},g.default.createElement("div",{className:h.default.list},g.default.createElement("a",{href:n&&n[0].link,className:h.default.logo}),g.default.createElement("div",{className:h.default.items},i)))}}]),t}(m.Component));t.default=x,e.exports=t.default},412:function(e,t,n){var a=n(413);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},413:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(391))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+a(n(392))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},414:function(e,t,n){e.exports=n.p+"8401e7566c4eb1504d92683fe97ad833.png"},424:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".tag_jqzc8Va2wKUUt2zeu3mpZ {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(395))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_jqzc8Va2wKUUt2zeu3mpZ {\n    background-image: url("+a(n(396))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2LkQ5MLt-xJszr6hy7I1Vg {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px;\n  overflow: hidden; }\n\n.title_26hq9hDolnMkdGQhV4l8Mv {\n  padding: 15px 0;\n  font-size: 28px;\n  color: #333; }\n",""]),t.locals={tag:"tag_jqzc8Va2wKUUt2zeu3mpZ",container:"container_2LkQ5MLt-xJszr6hy7I1Vg",title:"title_26hq9hDolnMkdGQhV4l8Mv"}},425:function(e,t,n){"use strict";t.decode=t.parse=n(426),t.encode=t.stringify=n(427)},426:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var r={};if("string"!=typeof e||0===e.length)return r;var l=/\+/g;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var d=e.length;c>0&&d>c&&(d=c);for(var s=0;s<d;++s){var u,f,p,m,g=e[s].replace(l,"%20"),v=g.indexOf(n);v>=0?(u=g.substr(0,v),f=g.substr(v+1)):(u=g,f=""),p=decodeURIComponent(u),m=decodeURIComponent(f),a(r,p)?o(r[p])?r[p].push(m):r[p]=[r[p],m]:r[p]=m}return r};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},427:function(e,t,n){"use strict";function a(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(r(e),function(r){var l=encodeURIComponent(o(r))+n;return i(e[r])?a(e[r],function(e){return l+encodeURIComponent(o(e))}).join(t):l+encodeURIComponent(o(e[r]))}).join(t):l?encodeURIComponent(o(l))+n+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},443:function(e,t,n){e.exports=n.p+"30d90732ba392884a349cb7f30ff9fbf.png"},581:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),d=a(c),s=n(39),u=a(s),f=n(40),p=a(f),m=n(0),g=a(m),v=n(398),h=a(v),_=n(582),x=a(_),b=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.right;return g.default.createElement("div",{className:h.default.container+" "+x.default.contianer},g.default.createElement("div",{className:x.default.left},t),g.default.createElement("div",{className:x.default.right},n))}}]),t}(m.Component);t.default=b,e.exports=t.default},582:function(e,t,n){var a=n(583);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},583:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".contianer_3TatzCuKtWgyNhqDKFB6G3 {\n  position: relative;\n  overflow: hidden;\n  font-size: 0; }\n\n.left_vBREnzOwjF_i4o0kFwx0i {\n  display: inline-block;\n  width: 900px;\n  box-sizing: border-box;\n  padding-right: 60px;\n  vertical-align: top; }\n\n.right_chy3wHrVCiZSM1rSuOibS {\n  display: inline-block;\n  width: 300px;\n  vertical-align: top; }\n",""]),t.locals={contianer:"contianer_3TatzCuKtWgyNhqDKFB6G3",left:"left_vBREnzOwjF_i4o0kFwx0i",right:"right_chy3wHrVCiZSM1rSuOibS"}},774:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),d=a(c),s=n(39),u=a(s),f=n(40),p=a(f),m=n(0),g=a(m),v=(n(162),n(775)),h=a(v),_=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.composition;console.info("composition__",e);var t={backgroundImage:"url("+e.cover+")"},n=e.info,a=e.clips,o=n.map(function(e,t){return g.default.createElement("div",{className:h.default.info,key:t},g.default.createElement("div",{className:h.default.label},e.info_caption),g.default.createElement("div",{className:h.default.value},e.info_content))}),i=a[0]&&a[0].cover&&a.map(function(e,t){var n={backgroundImage:"url("+e.cover+")"},a="",o="";return a=e.video?g.default.createElement("a",{className:h.default["item-cover"],style:n,href:e.video,target:"_blank"},g.default.createElement("div",{className:h.default["icon-play"]+" "+h.default["item-play"]})):g.default.createElement("div",{className:h.default["item-cover"]+" "+h.default["item-pic"],style:n,target:"_blank"}),e.clips_desc&&(o=g.default.createElement("div",{className:h.default["item-content"]},e.clips_desc)),g.default.createElement("div",{className:h.default["mod-item"],key:t},a,o)}),r=i?g.default.createElement("div",{className:""},g.default.createElement("div",{className:h.default["mod-title"]},"精彩片段"),g.default.createElement("div",{className:h.default["mod-pics"]},i)):"";return console.info("__",a,i),g.default.createElement("div",{className:h.default.container},g.default.createElement("div",{className:h.default.overview},g.default.createElement("div",{className:h.default.cover,style:t}),g.default.createElement("div",{className:h.default.content},g.default.createElement("div",{className:h.default.title},e.name),g.default.createElement("div",{className:h.default.subtitle},e.desc),g.default.createElement("div",{className:h.default.infos},o))),g.default.createElement("div",{className:h.default.desc},g.default.createElement("div",{className:h.default["mod-title"]},"剧情简介"),g.default.createElement("div",{className:h.default["mod-content"]},e.story)),r)}}]),t}(m.Component);t.default=_,e.exports=t.default},775:function(e,t,n){var a=n(776);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},776:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,"@charset \"UTF-8\";\n.container_3RhwGcmdsldruwWbzMK3St {\n  position: relative;\n  overflow: hidden; }\n\n.overview_2pt_PBetSSwdATtpl_6aXQ {\n  padding-bottom: 30px;\n  border-bottom: 1px solid #e8e8e8;\n  overflow: hidden; }\n\n.cover_iT-ETkBwfU4OD6gJtW-l6 {\n  width: 210px;\n  height: 264px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  float: left; }\n\n.content_1hKY8C1ri0jSTVv7T2Wcj5 {\n  margin-left: 230px; }\n\n.title_3NahHItVpRes2UABInqMDA {\n  color: #333333;\n  font-size: 28px; }\n\n.subtitle_3LnmQcR030E3dXr2uXhoXl {\n  font-size: 14px;\n  color: #999999; }\n\n.infos_1asjMWYXLQ2BvMAjxYDm6P {\n  margin-top: 20px;\n  position: relative;\n  overflow: hidden; }\n\n.info_3jrvPl109fwFPtyir50JT5 {\n  overflow: hidden;\n  position: relative;\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 8px; }\n\n.label_BqHBw5VmaSfQF1tumX0fh::after {\n  content: '\\FF1A'; }\n\n.label_BqHBw5VmaSfQF1tumX0fh,\n.value_1uY5iITluuaOK2T6YZaF5v {\n  float: left; }\n\n.value_1uY5iITluuaOK2T6YZaF5v {\n  color: #b2804d; }\n\n.mod-pics_1MjLIirHLYYmUWzqOFCQ13 {\n  white-space: nowrap;\n  overflow: auto; }\n\n.mod-item_2mxsz1rTs_yxiP9qXYIzc7 {\n  width: 254px;\n  margin-right: 20px;\n  display: inline-block;\n  white-space: normal;\n  vertical-align: top; }\n  .mod-item_2mxsz1rTs_yxiP9qXYIzc7:last-child {\n    margin-right: 0; }\n\n.mod-title_2DO2HrWEgDPyN4Q3JDZn- {\n  font-size: 18px;\n  color: #b2804d;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.mod-content_2Oa0ryMvPgJerLg8cWY02Y {\n  font-size: 16px;\n  color: #333333;\n  line-height: 1.8em; }\n\n.item-cover_UPGP8SZGGUqC7mGiolcLF {\n  width: 100%;\n  height: 180px;\n  display: block;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-radius: 3px;\n  overflow: hidden; }\n\n.item-cover_UPGP8SZGGUqC7mGiolcLF:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  transition: 400ms; }\n\n.item-pic_3shXbpCDXZzlrtSn_Cf5NO:after {\n  display: none; }\n\n.icon-play_1GvYNWhDLNxYLTUpPzJsw {\n  background-image: url("+a(n(443))+");\n  width: 60px;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.item-play_3PbpuhNgfcSPhiUUn4QNJL {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  opacity: .3;\n  transition: 400ms;\n  z-index: 10; }\n\n.item-cover_UPGP8SZGGUqC7mGiolcLF:hover::after {\n  background: rgba(0, 0, 0, 0.3); }\n\n.item-cover_UPGP8SZGGUqC7mGiolcLF:hover .icon-play_1GvYNWhDLNxYLTUpPzJsw {\n  opacity: 1; }\n\n.item-content_3B8Xt4Zog_I-a83o-WMPG5 {\n  font-size: 14px;\n  line-height: 17px;\n  color: #666;\n  margin-top: 10px; }\n",""]),t.locals={container:"container_3RhwGcmdsldruwWbzMK3St",overview:"overview_2pt_PBetSSwdATtpl_6aXQ",cover:"cover_iT-ETkBwfU4OD6gJtW-l6",content:"content_1hKY8C1ri0jSTVv7T2Wcj5",title:"title_3NahHItVpRes2UABInqMDA",subtitle:"subtitle_3LnmQcR030E3dXr2uXhoXl",infos:"infos_1asjMWYXLQ2BvMAjxYDm6P",info:"info_3jrvPl109fwFPtyir50JT5",label:"label_BqHBw5VmaSfQF1tumX0fh",value:"value_1uY5iITluuaOK2T6YZaF5v","mod-pics":"mod-pics_1MjLIirHLYYmUWzqOFCQ13","mod-item":"mod-item_2mxsz1rTs_yxiP9qXYIzc7","mod-title":"mod-title_2DO2HrWEgDPyN4Q3JDZn-","mod-content":"mod-content_2Oa0ryMvPgJerLg8cWY02Y","item-cover":"item-cover_UPGP8SZGGUqC7mGiolcLF","item-pic":"item-pic_3shXbpCDXZzlrtSn_Cf5NO","icon-play":"icon-play_1GvYNWhDLNxYLTUpPzJsw","item-play":"item-play_3PbpuhNgfcSPhiUUn4QNJL","item-content":"item-content_3B8Xt4Zog_I-a83o-WMPG5"}},777:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),d=a(c),s=n(39),u=a(s),f=n(40),p=a(f),m=n(0),g=a(m),v=(n(162),n(778)),h=a(v),_=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.cast;if(!e)return"";if(!e[0].name)return"";var t=e.map(function(e){var t={backgroundImage:"url("+e.avatar+")"};return g.default.createElement("a",{href:e.homepage?e.homepage:"javascript:;",target:e.homepage&&-1!=e.homepage.indexOf("http")?"_blank":"",className:h.default.item},g.default.createElement("div",{className:h.default.avatar,style:t}),g.default.createElement("div",{className:h.default.name},e.name),g.default.createElement("div",{className:h.default.acting,title:e.role},e.role))});return g.default.createElement("div",{className:""},g.default.createElement("div",{className:h.default.title},"配音演员表"),g.default.createElement("div",{className:h.default.list},t))}}]),t}(m.Component);t.default=_,e.exports=t.default},778:function(e,t,n){var a=n(779);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},779:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".title_2Yh9zxS-nTjD0X6sDOjfOg {\n  font-size: 28px;\n  color: #333333; }\n\n.subtitle_1GXykAlbhqMqdefp4C66yb {\n  font-size: 14px;\n  color: #b2804d; }\n\n.item_c13aOl48j-X6aot8s9V6w {\n  width: 110px;\n  float: left;\n  margin-right: 10px;\n  margin-top: 20px;\n  display: block; }\n  .item_c13aOl48j-X6aot8s9V6w:nth-child(2n) {\n    margin-right: 0; }\n\n.avatar_3mWy7zB8vKRlR5fJmraXRH {\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px; }\n\n.name_3gU-9An4k50h-vPOx3PtQk {\n  font-size: 16px;\n  color: #1a1a1a;\n  text-align: center;\n  line-height: 28px; }\n\n.acting_SRSNHG-5NFPk5Tz_YwBLv {\n  font-size: 14px;\n  color: #999999;\n  text-align: center;\n  width: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n",""]),t.locals={title:"title_2Yh9zxS-nTjD0X6sDOjfOg",subtitle:"subtitle_1GXykAlbhqMqdefp4C66yb",item:"item_c13aOl48j-X6aot8s9V6w",avatar:"avatar_3mWy7zB8vKRlR5fJmraXRH",name:"name_3gU-9An4k50h-vPOx3PtQk",acting:"acting_SRSNHG-5NFPk5Tz_YwBLv"}}});