webpackJsonp([14],{380:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t){return t.name===e}}function i(e,t){return e?e instanceof Array?e.find(o(t))||{}:e[t]||"":{}}function r(e){var t=e.sections,n=t.list,a=t.total,o=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:o}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(430),c=a(l),s=n(385),d=a(s),u=n(38),f=a(u),p=n(41),m=a(p),g=n(39),_=a(g),x=n(40),h=a(x),b=n(0),v=a(b),y=n(162),k=n(415),w=a(k),E=n(418),N=a(E),Q=n(618),j=a(Q),D=n(947),U=a(D),q=n(579),I=(a(q),n(948)),C=a(I),X=n(951),Z=a(X),M=n(421),O=a(M),S=n(425),A=a(S),B=n(177),R=a(B),T=function(e){function t(e){(0,f.default)(this,t);var n=(0,_.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return n.state={tab:""},n}return(0,h.default)(t,e),(0,m.default)(t,[{key:"changeTab",value:function(e){this.setState({tab:e}),(0,R.default)().push("/compositions?category="+e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.location,a=t.list,o=(t.loading,i(a,"navigation").value),r=i(a,"compositions").value,l=A.default.parse(n.search.split("?")[1]),s=[],d={movie:"电影",game:"游戏",teleplay:"电视剧",animation:"动画",stage:"舞台剧",ad:"广告"};if(!r)return"";r.map(function(e){e.category&&-1===s.indexOf(e.category)&&s.push(e.category)});var u=[];(0,c.default)(d).map(function(e){return-1!=s.indexOf(d[e])&&u.push(d[e]),e}),console.info("_this.state.tab_",e.state.tab);var f=[v.default.createElement(N.default,{fixed:!0,location:n,navs:o}),v.default.createElement(j.default,{bg:U.default,title:"我们的配音作品集"}),v.default.createElement(C.default,{tabs:u,changeTab:e.changeTab,current_category:e.state.tab||l.category}),v.default.createElement(Z.default,{compositions:r,current_category:e.state.tab||l.category}),v.default.createElement(O.default,null)];return v.default.createElement(w.default,{sections:f})}}]),t}(b.Component);t.default=(0,y.connect)(r)(T),e.exports=t.default},385:function(e,t,n){e.exports={default:n(165),__esModule:!0}},386:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},387:function(e,t,n){"use strict";n(161)},388:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},389:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},390:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},391:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},392:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},415:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),s=a(c),d=n(39),u=a(d),f=n(40),p=a(f),m=n(0),g=(a(m),n(416)),_=(a(g),function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return this.props.sections.map(function(e,t){return e})}}]),t}(m.Component));t.default=_,e.exports=t.default},416:function(e,t,n){var a=n(417);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},417:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,"",""])},418:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),s=a(c),d=n(39),u=a(d),f=n(40),p=a(f),m=n(0),g=a(m),_=n(419),x=a(_),h=function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={hideMenu:!0},n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&(window.addEventListener("touchmove",this.fixNavigationBar.bind(this)),window.addEventListener("scroll",this.fixNavigationBar.bind(this)))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"toogleMenu",value:function(){this.setState({hideMenu:!this.state.hideMenu})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=(e.fixed,this.state),o=(a.navigationBarFixed,a.hideMenu),i=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],o=e.link.split("/")[1],i=a&&-1!=o.indexOf(a)||a==o?x.default.item+" "+x.default.cur:x.default.item;return g.default.createElement("a",{href:e.link,key:n,className:i},e.title)}),r=this,l=o?""+x.default["list-icon"]:x.default["list-icon"]+" "+x.default["list-icon--close"],c=o?""+x.default.items:x.default.items+" "+x.default.show,s=o?""+x.default["nav-mask"]:x.default["nav-mask"]+" "+x.default.show,d=x.default.wraper+" "+x.default.fixed;return g.default.createElement("div",{className:d,ref:this.navigation},g.default.createElement("div",{className:x.default.list},g.default.createElement("a",{href:n&&n[0].link,className:x.default.logo}),g.default.createElement("div",{className:l,onClick:r.toogleMenu.bind(this)},g.default.createElement("div",{className:x.default["list-icon-0"]}),g.default.createElement("div",{className:x.default["list-icon-1"]}),g.default.createElement("div",{className:x.default["list-icon-2"]})),g.default.createElement("div",{className:c},i)),g.default.createElement("div",{onClick:r.toogleMenu.bind(this),className:s}))}}]),t}(m.Component);t.default=h,e.exports=t.default},419:function(e,t,n){var a=n(420);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},420:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".wraper_2l8pV3_7e-djnL1jEMn5sQ {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n  transition: 400ms; }\n\n.nav-mask_OgiBavOerBYbL_7l5OIuD {\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 56px;\n  z-index: -1;\n  display: none; }\n\n.nav-mask_OgiBavOerBYbL_7l5OIuD.show_3UlAGEkB4f6esXSe-AlVSP {\n  display: block; }\n\n.fixed_3GE-tKOu2Cyvb1pwFPgBs_ {\n  background: rgba(26, 26, 26, 0.98);\n  transform: translateY(0); }\n  .fixed_3GE-tKOu2Cyvb1pwFPgBs_ .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 20px 0; }\n\n.static_2y5v-9XHl7_1ug_hZ3J8rT {\n  position: static;\n  background: #1a1a1a; }\n  .static_2y5v-9XHl7_1ug_hZ3J8rT .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 8px 0; }\n\n.logo_2lIQRO_qL5AKjcdCPNBuFl {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(391))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  transform: scale(0.5);\n  position: absolute; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2lIQRO_qL5AKjcdCPNBuFl {\n    background-image: url("+a(n(392))+"); } }\n\n.list_2k-8UShTlFnqTMrh4Sttyq {\n  width: 100%;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms;\n  height: 56px; }\n\n.items_3eSI-_Rg9tpq35QIQmXEj7 {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  top: 100%;\n  transform: translateY(-130%);\n  transition: 400ms; }\n  .items_3eSI-_Rg9tpq35QIQmXEj7.show_3UlAGEkB4f6esXSe-AlVSP {\n    background: rgba(26, 26, 26, 0.98);\n    padding-bottom: 10px;\n    transform: translateY(-1px); }\n\n.item_1jdyoHU5WqryCAAUUkDP8J {\n  color: #ccc;\n  font-size: 16px;\n  margin: 8px 17px;\n  display: block;\n  width: 100%;\n  text-align: center; }\n\n.cur_18IUetdFBF7qFe5RKlJuxq,\n.item_1jdyoHU5WqryCAAUUkDP8J:hover {\n  color: #fff; }\n\n.list-icon_IX6RaaYuel0Qqh0lDxUfQ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 16px;\n  opacity: .8;\n  position: absolute;\n  left: 30px; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-1_1tdoog6rT8fomyPYrqwxMa,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    width: 20px;\n    height: 2px;\n    border-radius: 2px;\n    background: #fff;\n    transition: 400ms;\n    opacity: 1; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE {\n    transform: translateY(7px) rotate(135deg); }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-1_1tdoog6rT8fomyPYrqwxMa {\n    opacity: 0; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    transform: translateY(-7px) rotate(225deg); }\n",""]),t.locals={wraper:"wraper_2l8pV3_7e-djnL1jEMn5sQ","nav-mask":"nav-mask_OgiBavOerBYbL_7l5OIuD",show:"show_3UlAGEkB4f6esXSe-AlVSP",fixed:"fixed_3GE-tKOu2Cyvb1pwFPgBs_",list:"list_2k-8UShTlFnqTMrh4Sttyq",static:"static_2y5v-9XHl7_1ug_hZ3J8rT",logo:"logo_2lIQRO_qL5AKjcdCPNBuFl",items:"items_3eSI-_Rg9tpq35QIQmXEj7",item:"item_1jdyoHU5WqryCAAUUkDP8J",cur:"cur_18IUetdFBF7qFe5RKlJuxq","list-icon":"list-icon_IX6RaaYuel0Qqh0lDxUfQ","list-icon-0":"list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE","list-icon-1":"list-icon-1_1tdoog6rT8fomyPYrqwxMa","list-icon-2":"list-icon-2_d1DpGs0jIaATS9EG1iRRD","list-icon--close":"list-icon--close_3SmNZ25uD-ywPPKYxDWkq5"}},421:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),i=a(o),r=n(385),l=a(r),c=n(38),s=a(c),d=n(41),u=a(d),f=n(39),p=a(f),m=n(40),g=a(m);n(387);var _=n(0),x=a(_),h=n(422),b=a(h),v=(n(164),n(390)),y=a(v),k=function(e){function t(e){(0,s.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,u.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;this.setState({show:!e})}},{key:"render",value:function(){var e=(this.toggleQR,this.state.show),t=(new Date).getFullYear();return x.default.createElement("div",{className:b.default.container,id:"contact"},x.default.createElement("div",{className:b.default.contact},x.default.createElement("div",{className:b.default.logo}),x.default.createElement("div",{className:b.default.way},x.default.createElement("a",{className:b.default["contact-way"],href:"tel:021-52527144"},"电话：021-52527144"),x.default.createElement("a",{href:"mailto:springmedia@163.com",className:b.default["contact-way"]},"邮箱：springmedia@163.com")),x.default.createElement("div",{className:b.default.focus},x.default.createElement("img",{className:b.default.qrcode,src:y.default,alt:""}),x.default.createElement("div",{className:b.default.wechat+(e?" "+b.default.active:"")},x.default.createElement(i.default,{type:"wechat"})," 微信公众号"),x.default.createElement("a",{href:"https://weibo.com/springmedia",className:""+b.default.weibo,target:"_blank"},x.default.createElement(i.default,{type:"weibo"})," 微博"))),x.default.createElement("p",{className:b.default.copyright},"Copyright © 1997-",t," Spring Media Ltd. All Rights Reserved."),x.default.createElement("div",{className:b.default.copyright},x.default.createElement("div",{className:b.default.gap},"沪ICP备16047667号"),x.default.createElement("div",null,"沪公网备31010702003953号")))}}]),t}(_.Component);t.default=k,e.exports=t.default},422:function(e,t,n){var a=n(423);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},423:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".container_Kiapyj-VPuCI231-g9Qat {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_1d-SClMyz61i3n3TyvB7hS {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 12px;\n  width: 200px;\n  margin: 0 auto; }\n\n.contact-title_32JTfnUvsgG6kOnm3_CoEg {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_2oYzXd2VaXan0EliHzBbBq {\n  font-size: 14px;\n  color: #fff;\n  display: block; }\n\n.logo_2i_max4TOPGaplh6ZhWQCZ {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(388))+");\n  background-repeat: no-repeat;\n  width: 100%; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2i_max4TOPGaplh6ZhWQCZ {\n    background-image: url("+a(n(389))+"); } }\n\n.copyright_1FJVbN_DqmBC4bJqv7HmmM {\n  padding-top: 10px;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_15IcNXB3JQXLXqGBrLYiVT {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: 12px; }\n\n.wechat_1fssAwabEpocGldX8kwLkc,\n.weibo_2geuFjNw5CXVhLzGoDx06D {\n  color: #eee;\n  font-size: 14px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_1fssAwabEpocGldX8kwLkc {\n  margin-top: 5px;\n  margin-bottom: 10px; }\n\n.weibo_2geuFjNw5CXVhLzGoDx06D:hover {\n  color: #EA4225; }\n\n.wechatqrcode_1b-nziQtIVzDOOoT2wlBmH {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_1b-nziQtIVzDOOoT2wlBmH:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1sjRNUheu9adaSDWrGU05D {\n  width: 80px; }\n\n.show_2krLss29KLVQN--VLR1Z6O {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_3739S1Bk4cLgZ9cQkYvFcv {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_fXpIpXCKWd40nk_ptRJZl {\n  margin-right: 1.7em; }\n\n.link___HUPU9EHdFzCrinIJCRh {\n  color: #b2804d; }\n",""]),t.locals={container:"container_Kiapyj-VPuCI231-g9Qat",contact:"contact_1d-SClMyz61i3n3TyvB7hS","contact-title":"contact-title_32JTfnUvsgG6kOnm3_CoEg","contact-way":"contact-way_2oYzXd2VaXan0EliHzBbBq",logo:"logo_2i_max4TOPGaplh6ZhWQCZ",copyright:"copyright_1FJVbN_DqmBC4bJqv7HmmM",focus:"focus_15IcNXB3JQXLXqGBrLYiVT",wechat:"wechat_1fssAwabEpocGldX8kwLkc",weibo:"weibo_2geuFjNw5CXVhLzGoDx06D",wechatqrcode:"wechatqrcode_1b-nziQtIVzDOOoT2wlBmH",qrcode:"qrcode_1sjRNUheu9adaSDWrGU05D",show:"show_2krLss29KLVQN--VLR1Z6O",follow:"follow_3739S1Bk4cLgZ9cQkYvFcv",gap:"gap_fXpIpXCKWd40nk_ptRJZl",link:"link___HUPU9EHdFzCrinIJCRh"}},425:function(e,t,n){"use strict";t.decode=t.parse=n(426),t.encode=t.stringify=n(427)},426:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var r={};if("string"!=typeof e||0===e.length)return r;var l=/\+/g;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var s=e.length;c>0&&s>c&&(s=c);for(var d=0;d<s;++d){var u,f,p,m,g=e[d].replace(l,"%20"),_=g.indexOf(n);_>=0?(u=g.substr(0,_),f=g.substr(_+1)):(u=g,f=""),p=decodeURIComponent(u),m=decodeURIComponent(f),a(r,p)?o(r[p])?r[p].push(m):r[p]=[r[p],m]:r[p]=m}return r};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},427:function(e,t,n){"use strict";function a(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(r(e),function(r){var l=encodeURIComponent(o(r))+n;return i(e[r])?a(e[r],function(e){return l+encodeURIComponent(o(e))}).join(t):l+encodeURIComponent(o(e[r]))}).join(t):l?encodeURIComponent(o(l))+n+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},430:function(e,t,n){e.exports={default:n(56),__esModule:!0}},444:function(e,t,n){e.exports=n.p+"17880ac025fda99546a457a3ee8f39d1.png"},579:function(e,t,n){e.exports=n.p+"a9181ccc39189a43e22a885a62539e62.jpg"},580:function(e,t,n){e.exports=n.p+"434d7460ff9eb8e49112ed513c36800b.jpg"},618:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),s=a(c),d=n(39),u=a(d),f=n(40),p=a(f),m=n(0),g=a(m),_=n(619),x=a(_),h=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.bg;e.bg2x;return g.default.createElement("div",{style:{backgroundImage:"url("+n+")"},className:x.default.container},g.default.createElement("div",{className:x.default.title},t))}}]),t}(m.Component);t.default=h,e.exports=t.default},619:function(e,t,n){var a=n(620);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},620:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_3yZgnS2wKxlDzHePUHIWtk {\n  width: 100%;\n  height: 170px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-top: 56px; }\n\n.title_QGADwUjbQVw2UksJ5IQ5W {\n  font-size: 30px;\n  color: #fff;\n  font-weight: 700;\n  text-align: center; }\n",""]),t.locals={container:"container_3yZgnS2wKxlDzHePUHIWtk",title:"title_QGADwUjbQVw2UksJ5IQ5W"}},947:function(e,t,n){e.exports=n.p+"cf360fd101c493d4e9147c295a50930f.jpg"},948:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(430),i=a(o),r=n(385),l=a(r),c=n(38),s=a(c),d=n(41),u=a(d),f=n(39),p=a(f),m=n(40),g=a(m),_=n(0),x=a(_),h=n(949),b=a(h),v=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.current_category,a={movie:"电影",game:"游戏",teleplay:"电视剧",animation:"动画",stage:"舞台剧",ad:"广告"},o=t.map(function(e,t){var o="";(0,i.default)(a).map(function(t){a[t]===e&&(o=t)});var r=""+b.default.item;n||0!==t||(r=b.default.item+" "+b.default.cur),n&&n===o&&(r=b.default.item+" "+b.default.cur);var l="/compositions?category="+o;return x.default.createElement("a",{href:l,className:r,key:t},e)});return x.default.createElement("div",{className:b.default.container},o)}}]),t}(_.Component);t.default=v,e.exports=t.default},949:function(e,t,n){var a=n(950);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},950:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_1rWC3MxRXvijnHBTX5p93s {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-bottom: 1px solid #eee;\n  -ms-flex-pack: distribute;\n  justify-content: space-around; }\n\n.item_2UogWyy_-Z1NnHNQrgKlfe {\n  height: 60px;\n  line-height: 60px;\n  font-size: 18px;\n  color: #333;\n  display: inline-block;\n  position: relative; }\n  .item_2UogWyy_-Z1NnHNQrgKlfe.cur_3_AZ7j6wQnZbEAydH57liy, .item_2UogWyy_-Z1NnHNQrgKlfe:hover {\n    color: #b2804d; }\n    .item_2UogWyy_-Z1NnHNQrgKlfe.cur_3_AZ7j6wQnZbEAydH57liy:after, .item_2UogWyy_-Z1NnHNQrgKlfe:hover:after {\n      content: '';\n      display: block;\n      width: 30px;\n      height: 2px;\n      background: #b2804d;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      transform: translateX(-50%); }\n",""]),t.locals={container:"container_1rWC3MxRXvijnHBTX5p93s",item:"item_2UogWyy_-Z1NnHNQrgKlfe",cur:"cur_3_AZ7j6wQnZbEAydH57liy"}},951:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),r=n(38),l=a(r),c=n(41),s=a(c),d=n(39),u=a(d),f=n(40),p=a(f),m=n(0),g=a(m),_=n(952),x=a(_),h=n(444),b=a(h),v=n(580),y=(a(v),n(164),function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e={animation:"动画",game:"游戏",stage:"舞台剧",teleplay:"电视剧",ad:"广告",movie:"电影"},t=this.props,n=t.current_category,a=t.compositions,o=a.filter(function(t){var a=t.category;return e[n||"movie"]===a}),i=o.map(function(e,t){var n=(e.cover_l||e.cover,a.findIndex(function(t){return t.name===e.name})),o=e.publish_date?g.default.createElement("div",{className:x.default.info},g.default.createElement("img",{className:x.default.icon,src:b.default,alt:""}),g.default.createElement("span",{className:x.default.date},e.publish_date)):"";return g.default.createElement("a",{href:e.nolink?"javascript:;":e.homepage||"/composition?index="+n,target:e.homepage?"_blank":"",className:x.default.item,key:t},g.default.createElement("div",{className:x.default.cover},g.default.createElement("img",{className:x.default["cover-pic"],src:e.cover_l||e.cover})),g.default.createElement("div",{className:x.default.content},g.default.createElement("div",{className:x.default.title},e.name),g.default.createElement("pre",{className:x.default.desc},e.desc),o))});return g.default.createElement("div",{className:x.default.container},g.default.createElement("div",{className:x.default.items},i))}}]),t}(m.Component));t.default=y,e.exports=t.default},952:function(e,t,n){var a=n(953);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},953:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_2AyAN2d5vw4f9Xx1_DqfGq {\n  background: #f9f9f9;\n  padding: 30px 0 60px; }\n\n.items_3_Se8fnq1imDz0SkfwxXz0 {\n  margin: 0 auto; }\n\n.item_3mrAM24gVuek9wROZIJ6N {\n  border: 1px solid #e8e8e8;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  background: #fff;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n  overflow: hidden; }\n\n.content_2Ub42VojMBWsIYaZfS4awI {\n  padding: 12px; }\n\n.cover_6Xr604-ZTD2zb7oAcrGZQ {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.cover-pic_1GC7XHUCegtfJOMVFiLYkx {\n  width: 100%; }\n\n.title_ALWe6WCyJDOQlcXm41CYc {\n  font-size: 18px;\n  line-height: 23px;\n  color: #333;\n  margin-bottom: 6px;\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  text-align: center; }\n\n.desc_1X6ZrmGkbZxneP4wbkebNY {\n  color: #666;\n  font-size: 14px;\n  line-height: 1.8em;\n  text-align: justify;\n  letter-spacing: .12em;\n  margin-bottom: .6em; }\n\n.icon_1cdMnc_loiobDMEL7sIDem {\n  vertical-align: middle;\n  margin-right: 6px; }\n\n.info_1pNNjBMFkWWp6BHU1-5XKs {\n  position: absolute;\n  bottom: 7px;\n  left: 12px; }\n\n.desc_1X6ZrmGkbZxneP4wbkebNY {\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  display: -webkit-box;\n  font-weight: 200;\n  white-space: pre-wrap; }\n\n.date_18QTVdpno1ebkTBnZAT-G8 {\n  font-size: 14px;\n  line-height: 1em;\n  color: #999;\n  vertical-align: middle; }\n",""]),t.locals={container:"container_2AyAN2d5vw4f9Xx1_DqfGq",items:"items_3_Se8fnq1imDz0SkfwxXz0",item:"item_3mrAM24gVuek9wROZIJ6N",content:"content_2Ub42VojMBWsIYaZfS4awI",cover:"cover_6Xr604-ZTD2zb7oAcrGZQ","cover-pic":"cover-pic_1GC7XHUCegtfJOMVFiLYkx",title:"title_ALWe6WCyJDOQlcXm41CYc",desc:"desc_1X6ZrmGkbZxneP4wbkebNY",icon:"icon_1cdMnc_loiobDMEL7sIDem",info:"info_1pNNjBMFkWWp6BHU1-5XKs",date:"date_18QTVdpno1ebkTBnZAT-G8"}}});