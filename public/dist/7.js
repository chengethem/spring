webpackJsonp([7],{338:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(t){return t.name===e}}function o(e,t){return e?e instanceof Array?e.find(r(t))||{}:e[t]||"":{}}function i(e){var t=e.sections,n=t.list,a=t.total,r=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:r}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(343),c=a(l),d=n(35),u=a(d),s=n(38),f=a(s),p=n(36),m=a(p),g=n(37),v=a(g),h=n(0),_=a(h),x=n(151),b=n(361),w=a(b),y=n(710),k=a(y),E=n(364),N=a(E),j=n(713),O=a(j),M=n(355),q=a(M),B=n(720),Y=a(B),A=n(447),C=a(A),R=function(e){function t(){return(0,u.default)(this,t),(0,m.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list,a=(e.loading,o(n,"navigation").value),r=(o(n,"slider").value,o(n,"news").value,o(n,"dubbers").value),i=C.default.parse(t.search.split("?")[1]);if(!r)return"";var l=r[i.index];console.info("__dubber",r,l,i);var c=_.default.createElement(O.default,{dubber:l}),d=_.default.createElement(Y.default,{compositions:l.compositions}),u=[_.default.createElement(N.default,{fixed:!0,location:t,navs:a}),_.default.createElement(k.default,{left:c,right:d}),_.default.createElement(q.default,null)];return _.default.createElement(w.default,{sections:u})}}]),t}(h.Component);t.default=(0,x.connect)(i)(R),e.exports=t.default},343:function(e,t,n){e.exports={default:n(156),__esModule:!0}},344:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},346:function(e,t,n){"use strict";n(150)},349:function(e,t,n){var a=n(371);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},355:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(152),o=a(r),i=n(343),l=a(i),c=n(35),d=a(c),u=n(38),s=a(u),f=n(36),p=a(f),m=n(37),g=a(m);n(346);var v=n(0),h=a(v),_=n(356),x=a(_),b=(n(154),n(360)),w=a(b),y=function(e){function t(e){(0,d.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,s.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,n=(new Date).getFullYear();return h.default.createElement("div",{className:x.default.container,id:"contact"},h.default.createElement("div",{className:x.default.contact},h.default.createElement("div",{className:x.default.logo}),h.default.createElement("div",{className:x.default.way},h.default.createElement("div",{className:x.default["contact-title"]},"联系我们"),h.default.createElement("div",{className:x.default["contact-way"]},"电话：021-52527144"),h.default.createElement("div",{className:x.default["contact-way"]},"邮箱：springmedia@163.com")),h.default.createElement("div",{className:x.default.focus},h.default.createElement("div",{className:x.default["contact-title"]},"关注我们"),h.default.createElement("div",{className:x.default.wechatqrcode+(t?" "+x.default.show:"")},h.default.createElement("img",{className:x.default.qrcode,src:w.default,alt:""})),h.default.createElement("a",{href:"javasript:;",onClick:e,className:x.default.wechat+(t?" "+x.default.active:"")},h.default.createElement(o.default,{type:"wechat"})),h.default.createElement("a",{href:"https://weibo.com/springmedia",className:x.default.weibo,target:"_blank"},h.default.createElement(o.default,{type:"weibo"})))),h.default.createElement("p",{className:x.default.copyright},"Copyright © 1997-",n," Spring Media Ltd. All Rights Reserved."),h.default.createElement("p",{className:x.default.copyright},h.default.createElement("span",{className:x.default.gap},"沪ICP备16047667号"),h.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(v.Component);t.default=y,e.exports=t.default},356:function(e,t,n){var a=n(357);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},357:function(e,t,n){var a=n(344);t=e.exports=n(324)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(358))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+a(n(359))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},358:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},359:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},360:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},361:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(343),o=a(r),i=n(35),l=a(i),c=n(38),d=a(c),u=n(36),s=a(u),f=n(37),p=a(f),m=n(0),g=a(m),v=n(362),h=(a(v),function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return g.default.createElement("div",{key:t},e)});return g.default.createElement("div",null,t)}}]),t}(m.Component));t.default=h,e.exports=t.default},362:function(e,t,n){var a=n(363);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},363:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,"",""])},364:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(343),o=a(r),i=n(35),l=a(i),c=n(38),d=a(c),u=n(36),s=a(u),f=n(37),p=a(f),m=n(0),g=a(m),v=n(365),h=a(v),_=n(369),x=(a(_),function(e){function t(e){(0,l.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={},n}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=e.fixed,r=this.state.navigationBarFixed,o=(n||[]).map(function(e,n){var a=-1!=t.pathname.indexOf(e.link)?h.default.item+" "+h.default.cur:h.default.item;return g.default.createElement("a",{href:e.link,key:n,className:a},e.title)}),i=r?h.default.wraper+" "+h.default.fixed:""+h.default.wraper;return a&&(i=h.default.wraper+" "+h.default.static),g.default.createElement("div",{className:i,ref:this.navigation},g.default.createElement("div",{className:h.default.list},g.default.createElement("a",{href:"",className:h.default.logo}),g.default.createElement("div",{className:h.default.items},o)))}}]),t}(m.Component));t.default=x,e.exports=t.default},365:function(e,t,n){var a=n(366);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},366:function(e,t,n){var a=n(344);t=e.exports=n(324)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(367))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+a(n(368))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},367:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},368:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},369:function(e,t,n){e.exports=n.p+"8401e7566c4eb1504d92683fe97ad833.png"},371:function(e,t,n){var a=n(344);t=e.exports=n(324)(!1),t.push([e.i,".tag_jqzc8Va2wKUUt2zeu3mpZ {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(372))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_jqzc8Va2wKUUt2zeu3mpZ {\n    background-image: url("+a(n(373))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2LkQ5MLt-xJszr6hy7I1Vg {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px; }\n\n.title_26hq9hDolnMkdGQhV4l8Mv {\n  padding: 15px 0;\n  font-size: 28px;\n  color: #333; }\n",""]),t.locals={tag:"tag_jqzc8Va2wKUUt2zeu3mpZ",container:"container_2LkQ5MLt-xJszr6hy7I1Vg",title:"title_26hq9hDolnMkdGQhV4l8Mv"}},372:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},373:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},447:function(e,t,n){"use strict";t.decode=t.parse=n(448),t.encode=t.stringify=n(449)},448:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var l=/\+/g;e=e.split(t);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var d=e.length;c>0&&d>c&&(d=c);for(var u=0;u<d;++u){var s,f,p,m,g=e[u].replace(l,"%20"),v=g.indexOf(n);v>=0?(s=g.substr(0,v),f=g.substr(v+1)):(s=g,f=""),p=decodeURIComponent(s),m=decodeURIComponent(f),a(i,p)?r(i[p])?i[p].push(m):i[p]=[i[p],m]:i[p]=m}return i};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},449:function(e,t,n){"use strict";function a(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(i(e),function(i){var l=encodeURIComponent(r(i))+n;return o(e[i])?a(e[i],function(e){return l+encodeURIComponent(r(e))}).join(t):l+encodeURIComponent(r(e[i]))}).join(t):l?encodeURIComponent(r(l))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},489:function(e,t,n){e.exports={default:n(164),__esModule:!0}},710:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(343),o=a(r),i=n(35),l=a(i),c=n(38),d=a(c),u=n(36),s=a(u),f=n(37),p=a(f),m=n(0),g=a(m),v=n(349),h=(a(v),n(711)),_=a(h),x=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.right;return g.default.createElement("div",{className:""+_.default.wraper},g.default.createElement("div",{className:_.default.container},g.default.createElement("div",{className:_.default.left},t),g.default.createElement("div",{className:_.default.right},n)))}}]),t}(m.Component);t.default=x,e.exports=t.default},711:function(e,t,n){var a=n(712);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},712:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".wraper_3jwOLfBUKLa66JHOYCYWDH {\n  background-color: #f9f9f9; }\n\n.container_1h-rpNWfO0HpW3-CdhnfTu {\n  width: 1200px;\n  overflow: hidden;\n  font-size: 0;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px; }\n\n.left_1TtkvAaG0yQYRCaEqs_Yxb {\n  display: inline-block;\n  box-sizing: border-box;\n  padding-right: 60px;\n  vertical-align: top;\n  width: 405px; }\n\n.right_gq0-zjXqxaQGAvaCHYPTj {\n  display: inline-block;\n  vertical-align: top;\n  width: 795px; }\n",""]),t.locals={wraper:"wraper_3jwOLfBUKLa66JHOYCYWDH",container:"container_1h-rpNWfO0HpW3-CdhnfTu",left:"left_1TtkvAaG0yQYRCaEqs_Yxb",right:"right_gq0-zjXqxaQGAvaCHYPTj"}},713:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(343),o=a(r),i=n(35),l=a(i),c=n(38),d=a(c),u=n(36),s=a(u),f=n(37),p=a(f),m=n(0),g=a(m),v=(n(151),n(714)),h=a(v),_=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.dubber,t={backgroundImage:'url("'+e.avatar+'")'};return g.default.createElement("div",{className:h.default.container},g.default.createElement("div",{className:h.default.pane},g.default.createElement("div",{className:h.default.avatar,style:t}),g.default.createElement("a",{href:e.weibo_url,target:"_blank",className:h.default.name},e.name),g.default.createElement("div",{className:h.default.title},e.job),g.default.createElement("pre",{className:h.default.desc},e.desc)))}}]),t}(m.Component);t.default=_,e.exports=t.default},714:function(e,t,n){var a=n(715);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},715:function(e,t,n){var a=n(344);t=e.exports=n(324)(!1),t.push([e.i,".container_Rl3pW_qpJIWQ77QautVWE {\n  width: 100%;\n  padding-right: 55px; }\n\n.pane_3llBb-7UZZiw1k0dN47tHS {\n  width: 350px;\n  padding: 20px 30px 50px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 5px; }\n\n.name_3sYyHsERYI-O-TqBpFhARD {\n  display: block;\n  text-decoration: none;\n  font-size: 18px;\n  color: #333;\n  text-align: center; }\n  .name_3sYyHsERYI-O-TqBpFhARD:after {\n    content: '';\n    background-image: url("+a(n(716))+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 26px;\n    height: 20px;\n    display: inline-block;\n    position: relative;\n    top: 2px;\n    margin-left: .3em; }\n  .name_3sYyHsERYI-O-TqBpFhARD:hover, .name_3sYyHsERYI-O-TqBpFhARD:active {\n    color: #b2804d; }\n  .name_3sYyHsERYI-O-TqBpFhARD:hover::after {\n    background-image: url("+a(n(717))+"); }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .name_3sYyHsERYI-O-TqBpFhARD:after {\n    background-image: url("+a(n(718))+"); }\n  .name_3sYyHsERYI-O-TqBpFhARD:hover::after {\n    background-image: url("+a(n(719))+"); } }\n\n.title_1yZysmHY0ZhkAvgN-xCCOa {\n  font-size: 14px;\n  color: #b2804d;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 18px; }\n\n.avatar_2ExZ3eM2ySmXkXmrweE7v8 {\n  width: 115px;\n  height: 115px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: 0 auto;\n  border-radius: 100%;\n  margin-bottom: 25px; }\n\n.desc_2v4Xw_1eapPGJ0jLM7UIFr {\n  font-size: 14px;\n  line-height: 22px;\n  color: #666;\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n",""]),t.locals={container:"container_Rl3pW_qpJIWQ77QautVWE",pane:"pane_3llBb-7UZZiw1k0dN47tHS",name:"name_3sYyHsERYI-O-TqBpFhARD",title:"title_1yZysmHY0ZhkAvgN-xCCOa",avatar:"avatar_2ExZ3eM2ySmXkXmrweE7v8",desc:"desc_2v4Xw_1eapPGJ0jLM7UIFr"}},716:function(e,t,n){e.exports=n.p+"50ae8c1e8a0972761e42267a74ec7f4a.png"},717:function(e,t,n){e.exports=n.p+"fc22df2b15d26e006719cf026ea23243.png"},718:function(e,t,n){e.exports=n.p+"31dfdfabba5c2395b125e67810fc4167.png"},719:function(e,t,n){e.exports=n.p+"d08120f72cc73386888a556227c1433b.png"},720:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(489),o=a(r),i=n(343),l=a(i),c=n(35),d=a(c),u=n(38),s=a(u),f=n(36),p=a(f),m=n(37),g=a(m),v=n(0),h=a(v),_=(n(151),n(721)),x=a(_),b=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.compositions,t={};e.map(function(e){var n=e.composition_classify;return t[n]||(t[n]=[]),t[n].push(e)});var n=(0,o.default)(t).map(function(e,n){var a=t[e],r=a.map(function(e,t){var n={backgroundImage:'url("'+e.composition_cover+'")'};return h.default.createElement("div",{className:x.default.item,key:t},h.default.createElement("div",{className:x.default.cover,style:n}),h.default.createElement("div",{className:x.default.name},e.composition_name),h.default.createElement("a",{href:e.composition_link,target:"_blank",className:x.default["mask-link"]}))});return h.default.createElement("div",{className:x.default.list,key:n},h.default.createElement("div",{className:x.default.title},e),h.default.createElement("div",{className:x.default.items},r))});return h.default.createElement("div",{className:x.default.container},n)}}]),t}(v.Component);t.default=b,e.exports=t.default},721:function(e,t,n){var a=n(722);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(325)(a,r);a.locals&&(e.exports=a.locals)},722:function(e,t,n){var a=n(344);t=e.exports=n(324)(!1),t.push([e.i,".title_28fBWUfT6npZn-uc65g14J {\n  font-size: 18px;\n  color: #b2804d;\n  line-height: 22px; }\n\n.title_28fBWUfT6npZn-uc65g14J:after {\n  content: '';\n  display: inline-block;\n  width: 16px;\n  height: 10px;\n  background-image: url("+a(n(723))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-left: .2em; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .title_28fBWUfT6npZn-uc65g14J:after {\n    background-image: url("+a(n(724))+"); } }\n\n.list_1mfNTc2MwoSUKoCdJLWD8D {\n  padding-top: 20px;\n  border-bottom: 1px solid #e8e8e8; }\n  .list_1mfNTc2MwoSUKoCdJLWD8D:last-child {\n    border-bottom: 0; }\n\n.items_3dzKHqB5pXVc3weQyFaRcq {\n  padding-top: 10px; }\n\n.item_1qjWheevyjAwvN6JOrPftG {\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: 20px;\n  margin-right: 30px;\n  width: 245px;\n  position: relative; }\n  .item_1qjWheevyjAwvN6JOrPftG:nth-child(3n) {\n    margin-right: 0; }\n\n.cover_1t5Xivxnt-0Ah6lWMyZVni {\n  width: 245px;\n  height: 200px;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.name_1k7XmCbwLHaV1tfbBJ76M8 {\n  font-size: 16px;\n  line-height: 22px;\n  color: #333333;\n  margin-top: 12px; }\n\n.mask-link_bXvlX7PFojrIEn2POSmY5 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0; }\n",""]),t.locals={title:"title_28fBWUfT6npZn-uc65g14J",list:"list_1mfNTc2MwoSUKoCdJLWD8D",items:"items_3dzKHqB5pXVc3weQyFaRcq",item:"item_1qjWheevyjAwvN6JOrPftG",cover:"cover_1t5Xivxnt-0Ah6lWMyZVni",name:"name_1k7XmCbwLHaV1tfbBJ76M8","mask-link":"mask-link_bXvlX7PFojrIEn2POSmY5"}},723:function(e,t,n){e.exports=n.p+"d48d744634330b440e4c9e750ae8eba7.png"},724:function(e,t,n){e.exports=n.p+"45ebef3d74186a683a1c010e0d78b673.png"}});