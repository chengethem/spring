webpackJsonp([15],{351:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return t.name===e}}function o(e,t){return e?e instanceof Array?e.find(i(t))||{}:e[t]||"":{}}function l(e){var t=e.sections,n=t.list,a=t.total,i=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:i}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(355),c=a(r),s=n(36),d=a(s),u=n(39),f=a(u),p=n(37),m=a(p),_=n(38),g=a(_),v=n(0),h=a(v),x=n(151),b=n(385),y=a(b),w=n(587),k=a(w),E=n(388),N=a(E),q=n(920),Q=a(q),z=n(923),I=a(z),C=n(391),P=a(C),j=n(395),U=a(j),X=function(e){function t(){return(0,d.default)(this,t),(0,m.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list;e.loading;if(n.length<1)return"";var a=U.default.parse(t.search.split("?")[1]).index||0,i=o(n,"navigation").value,l=o(n,"compositions").value,r=l[a],c=(o(n,"dubbers").value,h.default.createElement(Q.default,{composition:r})),s=h.default.createElement(I.default,{cast:r.cast}),d=[h.default.createElement(N.default,{fixed:!0,location:t,navs:i}),h.default.createElement(k.default,{left:c,right:s}),h.default.createElement(P.default,null)];return h.default.createElement(y.default,{sections:d})}}]),t}(v.Component);t.default=(0,x.connect)(l)(X),e.exports=t.default},355:function(e,t,n){e.exports={default:n(154),__esModule:!0}},356:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},357:function(e,t,n){"use strict";n(150)},358:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},359:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},360:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},361:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},362:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},364:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},365:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},369:function(e,t,n){var a=n(398);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},385:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),o=a(i),l=n(36),r=a(l),c=n(39),s=a(c),d=n(37),u=a(d),f=n(38),p=a(f),m=n(0),_=(a(m),n(386)),g=(a(_),function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return this.props.sections.map(function(e,t){return e})}}]),t}(m.Component));t.default=g,e.exports=t.default},386:function(e,t,n){var a=n(387);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},387:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,"",""])},388:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),o=a(i),l=n(36),r=a(l),c=n(39),s=a(c),d=n(37),u=a(d),f=n(38),p=a(f),m=n(0),_=a(m),g=n(389),v=a(g),h=function(e){function t(e){(0,r.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.navigation=_.default.createRef(),n.state={hideMenu:!0},n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&(window.addEventListener("touchmove",this.fixNavigationBar.bind(this)),window.addEventListener("scroll",this.fixNavigationBar.bind(this)))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"toogleMenu",value:function(){this.setState({hideMenu:!this.state.hideMenu})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=(e.fixed,this.state),i=(a.navigationBarFixed,a.hideMenu),o=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],i=e.link.split("/")[1],o=a&&-1!=i.indexOf(a)||a==i?v.default.item+" "+v.default.cur:v.default.item;return _.default.createElement("a",{href:e.link,key:n,className:o},e.title)}),l=this,r=i?""+v.default["list-icon"]:v.default["list-icon"]+" "+v.default["list-icon--close"],c=i?""+v.default.items:v.default.items+" "+v.default.show,s=v.default.wraper+" "+v.default.fixed;return _.default.createElement("div",{className:s,ref:this.navigation},_.default.createElement("div",{className:v.default.list},_.default.createElement("a",{href:n&&n[0].link,className:v.default.logo}),_.default.createElement("div",{className:r,onClick:l.toogleMenu.bind(this)},_.default.createElement("div",{className:v.default["list-icon-0"]}),_.default.createElement("div",{className:v.default["list-icon-1"]}),_.default.createElement("div",{className:v.default["list-icon-2"]})),_.default.createElement("div",{className:c},o)))}}]),t}(m.Component);t.default=h,e.exports=t.default},389:function(e,t,n){var a=n(390);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},390:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".wraper_2l8pV3_7e-djnL1jEMn5sQ {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  transition: 400ms; }\n\n.fixed_3GE-tKOu2Cyvb1pwFPgBs_ {\n  background: rgba(26, 26, 26, 0.98);\n  transform: translateY(0); }\n  .fixed_3GE-tKOu2Cyvb1pwFPgBs_ .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 20px 0; }\n\n.static_2y5v-9XHl7_1ug_hZ3J8rT {\n  position: static;\n  background: #1a1a1a; }\n  .static_2y5v-9XHl7_1ug_hZ3J8rT .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 8px 0; }\n\n.logo_2lIQRO_qL5AKjcdCPNBuFl {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(361))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  transform: scale(0.5);\n  position: absolute; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2lIQRO_qL5AKjcdCPNBuFl {\n    background-image: url("+a(n(362))+"); } }\n\n.list_2k-8UShTlFnqTMrh4Sttyq {\n  width: 100%;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms;\n  height: 56px; }\n\n.items_3eSI-_Rg9tpq35QIQmXEj7 {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  top: 100%;\n  transform: translateY(-130%);\n  transition: 400ms; }\n  .items_3eSI-_Rg9tpq35QIQmXEj7.show_3UlAGEkB4f6esXSe-AlVSP {\n    background: rgba(26, 26, 26, 0.98);\n    padding-bottom: 10px;\n    transform: translateY(-1px); }\n\n.item_1jdyoHU5WqryCAAUUkDP8J {\n  color: #ccc;\n  font-size: 16px;\n  margin: 8px 17px;\n  display: block;\n  width: 100%;\n  text-align: center; }\n\n.cur_18IUetdFBF7qFe5RKlJuxq,\n.item_1jdyoHU5WqryCAAUUkDP8J:hover {\n  color: #fff; }\n\n.list-icon_IX6RaaYuel0Qqh0lDxUfQ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 16px;\n  opacity: .8;\n  position: absolute;\n  left: 30px; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-1_1tdoog6rT8fomyPYrqwxMa,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    width: 20px;\n    height: 2px;\n    border-radius: 2px;\n    background: #fff;\n    transition: 400ms;\n    opacity: 1; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE {\n    transform: translateY(7px) rotate(135deg); }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-1_1tdoog6rT8fomyPYrqwxMa {\n    opacity: 0; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    transform: translateY(-7px) rotate(225deg); }\n",""]),t.locals={wraper:"wraper_2l8pV3_7e-djnL1jEMn5sQ",fixed:"fixed_3GE-tKOu2Cyvb1pwFPgBs_",list:"list_2k-8UShTlFnqTMrh4Sttyq",static:"static_2y5v-9XHl7_1ug_hZ3J8rT",logo:"logo_2lIQRO_qL5AKjcdCPNBuFl",items:"items_3eSI-_Rg9tpq35QIQmXEj7",show:"show_3UlAGEkB4f6esXSe-AlVSP",item:"item_1jdyoHU5WqryCAAUUkDP8J",cur:"cur_18IUetdFBF7qFe5RKlJuxq","list-icon":"list-icon_IX6RaaYuel0Qqh0lDxUfQ","list-icon-0":"list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE","list-icon-1":"list-icon-1_1tdoog6rT8fomyPYrqwxMa","list-icon-2":"list-icon-2_d1DpGs0jIaATS9EG1iRRD","list-icon--close":"list-icon--close_3SmNZ25uD-ywPPKYxDWkq5"}},391:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(152),o=a(i),l=n(355),r=a(l),c=n(36),s=a(c),d=n(39),u=a(d),f=n(37),p=a(f),m=n(38),_=a(m);n(357);var g=n(0),v=a(g),h=n(392),x=a(h),b=(n(153),n(360)),y=a(b),w=function(e){function t(e){(0,s.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,_.default)(t,e),(0,u.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=(this.toggleQR,this.state.show),t=(new Date).getFullYear();return v.default.createElement("div",{className:x.default.container,id:"contact"},v.default.createElement("div",{className:x.default.contact},v.default.createElement("div",{className:x.default.logo}),v.default.createElement("div",{className:x.default.way},v.default.createElement("a",{className:x.default["contact-way"],href:"tel:021-52527144"},"电话：021-52527144"),v.default.createElement("a",{href:"mailto:springmedia@163.com",className:x.default["contact-way"]},"邮箱：springmedia@163.com")),v.default.createElement("div",{className:x.default.focus},v.default.createElement("img",{className:x.default.qrcode,src:y.default,alt:""}),v.default.createElement("div",{className:x.default.wechat+(e?" "+x.default.active:"")},v.default.createElement(o.default,{type:"wechat"})," 微信公众号"),v.default.createElement("a",{href:"https://weibo.com/springmedia",className:""+x.default.weibo,target:"_blank"},v.default.createElement(o.default,{type:"weibo"})," 微博"))),v.default.createElement("p",{className:x.default.copyright},"Copyright © 1997-",t," Spring Media Ltd. All Rights Reserved."),v.default.createElement("div",{className:x.default.copyright},v.default.createElement("div",{className:x.default.gap},"沪ICP备16047667号"),v.default.createElement("div",null,"沪公网备31010702003953号")))}}]),t}(g.Component);t.default=w,e.exports=t.default},392:function(e,t,n){var a=n(393);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},393:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_Kiapyj-VPuCI231-g9Qat {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_1d-SClMyz61i3n3TyvB7hS {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 12px;\n  width: 200px;\n  margin: 0 auto; }\n\n.contact-title_32JTfnUvsgG6kOnm3_CoEg {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_2oYzXd2VaXan0EliHzBbBq {\n  font-size: 14px;\n  color: #fff;\n  display: block; }\n\n.logo_2i_max4TOPGaplh6ZhWQCZ {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(358))+");\n  background-repeat: no-repeat;\n  width: 100%; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2i_max4TOPGaplh6ZhWQCZ {\n    background-image: url("+a(n(359))+"); } }\n\n.copyright_1FJVbN_DqmBC4bJqv7HmmM {\n  padding-top: 10px;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_15IcNXB3JQXLXqGBrLYiVT {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: 12px; }\n\n.wechat_1fssAwabEpocGldX8kwLkc,\n.weibo_2geuFjNw5CXVhLzGoDx06D {\n  color: #eee;\n  font-size: 14px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_1fssAwabEpocGldX8kwLkc {\n  margin-top: 5px;\n  margin-bottom: 10px; }\n\n.weibo_2geuFjNw5CXVhLzGoDx06D:hover {\n  color: #EA4225; }\n\n.wechatqrcode_1b-nziQtIVzDOOoT2wlBmH {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_1b-nziQtIVzDOOoT2wlBmH:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1sjRNUheu9adaSDWrGU05D {\n  width: 80px; }\n\n.show_2krLss29KLVQN--VLR1Z6O {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_3739S1Bk4cLgZ9cQkYvFcv {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_fXpIpXCKWd40nk_ptRJZl {\n  margin-right: 1.7em; }\n\n.link___HUPU9EHdFzCrinIJCRh {\n  color: #b2804d; }\n",""]),t.locals={container:"container_Kiapyj-VPuCI231-g9Qat",contact:"contact_1d-SClMyz61i3n3TyvB7hS","contact-title":"contact-title_32JTfnUvsgG6kOnm3_CoEg","contact-way":"contact-way_2oYzXd2VaXan0EliHzBbBq",logo:"logo_2i_max4TOPGaplh6ZhWQCZ",copyright:"copyright_1FJVbN_DqmBC4bJqv7HmmM",focus:"focus_15IcNXB3JQXLXqGBrLYiVT",wechat:"wechat_1fssAwabEpocGldX8kwLkc",weibo:"weibo_2geuFjNw5CXVhLzGoDx06D",wechatqrcode:"wechatqrcode_1b-nziQtIVzDOOoT2wlBmH",qrcode:"qrcode_1sjRNUheu9adaSDWrGU05D",show:"show_2krLss29KLVQN--VLR1Z6O",follow:"follow_3739S1Bk4cLgZ9cQkYvFcv",gap:"gap_fXpIpXCKWd40nk_ptRJZl",link:"link___HUPU9EHdFzCrinIJCRh"}},395:function(e,t,n){"use strict";t.decode=t.parse=n(396),t.encode=t.stringify=n(397)},396:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var l={};if("string"!=typeof e||0===e.length)return l;var r=/\+/g;e=e.split(t);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var s=e.length;c>0&&s>c&&(s=c);for(var d=0;d<s;++d){var u,f,p,m,_=e[d].replace(r,"%20"),g=_.indexOf(n);g>=0?(u=_.substr(0,g),f=_.substr(g+1)):(u=_,f=""),p=decodeURIComponent(u),m=decodeURIComponent(f),a(l,p)?i(l[p])?l[p].push(m):l[p]=[l[p],m]:l[p]=m}return l};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},397:function(e,t,n){"use strict";function a(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(l(e),function(l){var r=encodeURIComponent(i(l))+n;return o(e[l])?a(e[l],function(e){return r+encodeURIComponent(i(e))}).join(t):r+encodeURIComponent(i(e[l]))}).join(t):r?encodeURIComponent(i(r))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},l=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},398:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".tag_2-K9PCuLT8vQUpvXzPNIFw {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(364))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_2-K9PCuLT8vQUpvXzPNIFw {\n    background-image: url("+a(n(365))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2Klk9ZKiH3x_ZtZtOAhgst {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding: 30px 15px; }\n\n.title_1v27YkkqdrEzlq_nuz2yCW {\n  padding: 15px 0 4px;\n  font-size: 24px;\n  color: #333; }\n",""]),t.locals={tag:"tag_2-K9PCuLT8vQUpvXzPNIFw",container:"container_2Klk9ZKiH3x_ZtZtOAhgst",title:"title_1v27YkkqdrEzlq_nuz2yCW"}},411:function(e,t,n){e.exports=n.p+"30d90732ba392884a349cb7f30ff9fbf.png"},587:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),o=a(i),l=n(36),r=a(l),c=n(39),s=a(c),d=n(37),u=a(d),f=n(38),p=a(f),m=n(0),_=a(m),g=n(369),v=a(g),h=n(588),x=a(h),b=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.left;e.right;return _.default.createElement("div",{className:v.default.container+" "+x.default.contianer},_.default.createElement("div",{className:x.default.left},t))}}]),t}(m.Component);t.default=b,e.exports=t.default},588:function(e,t,n){var a=n(589);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},589:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".contianer_2q19Botc3mNW9nrKX7ZVzc {\n  position: relative;\n  overflow: hidden;\n  font-size: 0;\n  padding-top: 20px; }\n\n.left_18uV1fmRu0qPL6UlpK53WI {\n  display: inline-block;\n  box-sizing: border-box;\n  vertical-align: top;\n  width: 100%; }\n",""]),t.locals={contianer:"contianer_2q19Botc3mNW9nrKX7ZVzc",left:"left_18uV1fmRu0qPL6UlpK53WI"}},920:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),o=a(i),l=n(36),r=a(l),c=n(39),s=a(c),d=n(37),u=a(d),f=n(38),p=a(f),m=n(0),_=a(m),g=(n(151),n(921)),v=a(g),h=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.composition;console.info("composition__",e);var t={backgroundImage:"url("+e.cover+")"},n=e.info,a=e.clips,i=n.map(function(e,t){return e.content?_.default.createElement("div",{className:v.default.info,key:t},_.default.createElement("div",{className:v.default.label},e.info_caption),_.default.createElement("div",{className:v.default.value},e.info_content)):""}),o=a[0]&&a[0].cover&&a.map(function(e,t){var n={backgroundImage:"url("+e.cover+")"},a="",i="";return a=e.video?_.default.createElement("a",{className:v.default["item-cover"],style:n,href:e.video,target:"_blank"},_.default.createElement("div",{className:v.default["icon-play"]+" "+v.default["item-play"]})):_.default.createElement("div",{className:v.default["item-cover"]+" "+v.default["item-pic"],style:n,target:"_blank"}),e.clips_desc&&(i=_.default.createElement("div",{className:v.default["item-content"]},e.clips_desc)),_.default.createElement("div",{className:v.default["mod-item"],key:t},a,i)}),l=o?_.default.createElement("div",{className:""},_.default.createElement("div",{className:v.default["mod-title"]},"精彩片段"),_.default.createElement("div",{className:v.default["mod-pics"]},o)):"";return console.info("__",a,o),_.default.createElement("div",{className:v.default.container},_.default.createElement("div",{className:v.default.overview},_.default.createElement("div",{className:v.default.cover,style:t}),_.default.createElement("div",{className:v.default.content},_.default.createElement("div",{className:v.default.title},e.name),_.default.createElement("div",{className:v.default.subtitle},e.desc),_.default.createElement("div",{className:v.default.infos},i))),_.default.createElement("div",{className:v.default.desc},_.default.createElement("div",{className:v.default["mod-title"]},"剧情简介"),_.default.createElement("div",{className:v.default["mod-content"]},e.story)),l)}}]),t}(m.Component);t.default=h,e.exports=t.default},921:function(e,t,n){var a=n(922);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},922:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,"@charset \"UTF-8\";\n.container_3QKZKWk8LSlwrSsqtxYXkG {\n  padding-top: 56px;\n  position: relative;\n  overflow: hidden; }\n\n.overview_1P4nHQkBrqJNXLg9LWunL2 {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e8e8e8;\n  overflow: hidden; }\n\n.cover_32rV1SK4vtNrRaUNQTGDqw {\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center; }\n\n.title_33oz0oPZhohP60eVfLAcJA {\n  color: #333333;\n  line-height: 1.12em;\n  text-align: center;\n  font-size: 22px;\n  padding: .5em 0; }\n\n.subtitle_3jCYdBzBQBORWSTKuDPGKb {\n  font-size: 14px;\n  color: #999999; }\n\n.infos_spJpxm2lewXxLsPH75QHq {\n  margin-top: 20px;\n  position: relative;\n  overflow: hidden; }\n\n.info_37dyb7kGKOuL55vWzA34Y6 {\n  overflow: hidden;\n  position: relative;\n  font-size: 14px;\n  color: #333;\n  margin-bottom: 8px; }\n\n.label_3jIw4QmVk-5q_QhLgbp_ck::after {\n  content: '\\FF1A'; }\n\n.label_3jIw4QmVk-5q_QhLgbp_ck,\n.value_2JD1QbVzVZZDRiMrhk0h0s {\n  float: left; }\n\n.value_2JD1QbVzVZZDRiMrhk0h0s {\n  color: #b2804d; }\n\n.mod-pics_1uHj5mRYvn9FvwlZ4IVK5W {\n  white-space: nowrap;\n  overflow: auto; }\n\n.mod-item_2ZWqXHIPbqceuN2vlm_6FY {\n  width: 254px;\n  margin-right: 20px;\n  display: inline-block;\n  white-space: normal;\n  vertical-align: top; }\n  .mod-item_2ZWqXHIPbqceuN2vlm_6FY:last-child {\n    margin-right: 0; }\n\n.mod-title_33OVj-ze6r27voEdAYm9av {\n  font-size: 18px;\n  color: #b2804d;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.mod-content_24fttKGF0y1SM1TTWCX_7F {\n  font-size: 16px;\n  color: #333333;\n  line-height: 1.8em;\n  text-align: justify; }\n\n.item-cover_1Iny_ove_VNy2QfHvd0zq8 {\n  width: 100%;\n  height: 180px;\n  display: block;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-radius: 3px;\n  overflow: hidden; }\n\n.item-cover_1Iny_ove_VNy2QfHvd0zq8:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: transparent;\n  position: absolute;\n  transition: 400ms; }\n\n.item-pic_2m43NnEXRP9yGiV-OEtQB-:after {\n  display: none; }\n\n.icon-play_1lwwxOa33hmUtInCkG25lO {\n  background-image: url("+a(n(411))+");\n  width: 60px;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.item-play_2sO26cCu-UWkijn_XfkSr3 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  opacity: .3;\n  transition: 400ms;\n  z-index: 10; }\n\n.item-cover_1Iny_ove_VNy2QfHvd0zq8:hover::after {\n  background: rgba(0, 0, 0, 0.3); }\n\n.item-cover_1Iny_ove_VNy2QfHvd0zq8:hover .icon-play_1lwwxOa33hmUtInCkG25lO {\n  opacity: 1; }\n\n.item-content_34AYLw_7DJwyfC_Lvqhltg {\n  font-size: 14px;\n  line-height: 17px;\n  color: #666;\n  margin-top: 10px; }\n",""]),t.locals={container:"container_3QKZKWk8LSlwrSsqtxYXkG",overview:"overview_1P4nHQkBrqJNXLg9LWunL2",cover:"cover_32rV1SK4vtNrRaUNQTGDqw",title:"title_33oz0oPZhohP60eVfLAcJA",subtitle:"subtitle_3jCYdBzBQBORWSTKuDPGKb",infos:"infos_spJpxm2lewXxLsPH75QHq",info:"info_37dyb7kGKOuL55vWzA34Y6",label:"label_3jIw4QmVk-5q_QhLgbp_ck",value:"value_2JD1QbVzVZZDRiMrhk0h0s","mod-pics":"mod-pics_1uHj5mRYvn9FvwlZ4IVK5W","mod-item":"mod-item_2ZWqXHIPbqceuN2vlm_6FY","mod-title":"mod-title_33OVj-ze6r27voEdAYm9av","mod-content":"mod-content_24fttKGF0y1SM1TTWCX_7F","item-cover":"item-cover_1Iny_ove_VNy2QfHvd0zq8","item-pic":"item-pic_2m43NnEXRP9yGiV-OEtQB-","icon-play":"icon-play_1lwwxOa33hmUtInCkG25lO","item-play":"item-play_2sO26cCu-UWkijn_XfkSr3","item-content":"item-content_34AYLw_7DJwyfC_Lvqhltg"}},923:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),o=a(i),l=n(36),r=a(l),c=n(39),s=a(c),d=n(37),u=a(d),f=n(38),p=a(f),m=n(0),_=a(m),g=(n(151),n(924)),v=a(g),h=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.cast;if(!e)return"";if(!e[0].name)return"";var t=e.map(function(e){var t={backgroundImage:"url("+e.avatar+")"};return _.default.createElement("a",{href:e.homepage?e.homepage:"javascript:;",target:e.homepage&&-1!=e.homepage.indexOf("http")?"_blank":"",className:v.default.item},_.default.createElement("div",{className:v.default.avatar,style:t}),_.default.createElement("div",{className:v.default.name},e.name),_.default.createElement("div",{className:v.default.acting,title:e.role},e.role))});return _.default.createElement("div",{className:""},_.default.createElement("div",{className:v.default.title},"配音演员表"),_.default.createElement("div",{className:v.default.list},t))}}]),t}(m.Component);t.default=h,e.exports=t.default},924:function(e,t,n){var a=n(925);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},925:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".title_3Nh55CyIYkr5ZBtsk7Fttf {\n  font-size: 28px;\n  color: #333333; }\n\n.subtitle_3quYjzEBgfgeiSl5DXJsRW {\n  font-size: 14px;\n  color: #b2804d; }\n\n.item_5GwQiS70xEV7Byb3WdjXp {\n  width: 110px;\n  float: left;\n  margin-right: 10px;\n  margin-top: 20px;\n  display: block; }\n  .item_5GwQiS70xEV7Byb3WdjXp:nth-child(2n) {\n    margin-right: 0; }\n\n.avatar_1yyUws8yx0N9vQqsvzp0Cf {\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px; }\n\n.name_2yYPET3tTWdHMyUAew7fk0 {\n  font-size: 16px;\n  color: #1a1a1a;\n  text-align: center;\n  line-height: 28px; }\n\n.acting_zL3ZvMIcpMMTafyI528DU {\n  font-size: 14px;\n  color: #999999;\n  text-align: center;\n  width: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n",""]),t.locals={title:"title_3Nh55CyIYkr5ZBtsk7Fttf",subtitle:"subtitle_3quYjzEBgfgeiSl5DXJsRW",item:"item_5GwQiS70xEV7Byb3WdjXp",avatar:"avatar_1yyUws8yx0N9vQqsvzp0Cf",name:"name_2yYPET3tTWdHMyUAew7fk0",acting:"acting_zL3ZvMIcpMMTafyI528DU"}}});