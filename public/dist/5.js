webpackJsonp([5],{348:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return t.name===e}}function l(e,t){return e?e instanceof Array?e.find(i(t))||{}:e[t]||"":{}}function o(e){var t=e.sections,n=t.list,a=t.total,i=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:i}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(355),c=a(r),d=n(36),s=a(d),u=n(39),f=a(u),p=n(37),m=a(p),g=n(38),x=a(g),_=n(0),b=a(_),v=n(151),h=n(385),k=a(h),y=n(388),w=a(y),E=n(881),N=a(E),z=n(882),P=a(z),j=n(885),R=a(j),q=n(888),L=a(q),Q=n(891),M=a(Q),D=n(894),C=a(D),O=n(897),Y=a(O),I=n(391),V=a(I),S=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,x.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list,a=(e.loading,l(n,"navigation").value),i=(l(n,"slider").value,l(n,"news").value),o=l(n,"dubbers").value,r=l(n,"team_others").value,c=l(n,"slogan").value,d=l(n,"banner_video").value,s=[b.default.createElement(w.default,{triggerFixedElementSelector:"#banner",location:t,navs:a}),b.default.createElement(N.default,{slogan:c}),b.default.createElement(P.default,null),b.default.createElement(R.default,{video:d}),b.default.createElement(L.default,{list:i}),b.default.createElement(M.default,{list:o,team:r}),b.default.createElement(C.default,null),b.default.createElement(Y.default,{moreLink:"/about"}),b.default.createElement(V.default,null)];return b.default.createElement(k.default,{sections:s})}}]),t}(_.Component);t.default=(0,v.connect)(o)(S),e.exports=t.default},355:function(e,t,n){e.exports={default:n(154),__esModule:!0}},356:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},357:function(e,t,n){"use strict";n(150)},358:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},359:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},360:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},361:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},362:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},364:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},365:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},369:function(e,t,n){var a=n(398);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},385:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=(a(m),n(386)),x=(a(g),function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return this.props.sections.map(function(e,t){return e})}}]),t}(m.Component));t.default=x,e.exports=t.default},386:function(e,t,n){var a=n(387);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},387:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,"",""])},388:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(389),_=a(x),b=function(e){function t(e){(0,r.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={hideMenu:!0},n}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&(window.addEventListener("touchmove",this.fixNavigationBar.bind(this)),window.addEventListener("scroll",this.fixNavigationBar.bind(this)))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"toogleMenu",value:function(){this.setState({hideMenu:!this.state.hideMenu})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=(e.fixed,this.state),i=(a.navigationBarFixed,a.hideMenu),l=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],i=e.link.split("/")[1],l=a&&-1!=i.indexOf(a)||a==i?_.default.item+" "+_.default.cur:_.default.item;return g.default.createElement("a",{href:e.link,key:n,className:l},e.title)}),o=this,r=i?""+_.default["list-icon"]:_.default["list-icon"]+" "+_.default["list-icon--close"],c=i?""+_.default.items:_.default.items+" "+_.default.show,d=_.default.wraper+" "+_.default.fixed;return g.default.createElement("div",{className:d,ref:this.navigation},g.default.createElement("div",{className:_.default.list},g.default.createElement("a",{href:n&&n[0].link,className:_.default.logo}),g.default.createElement("div",{className:r,onClick:o.toogleMenu.bind(this)},g.default.createElement("div",{className:_.default["list-icon-0"]}),g.default.createElement("div",{className:_.default["list-icon-1"]}),g.default.createElement("div",{className:_.default["list-icon-2"]})),g.default.createElement("div",{className:c},l)))}}]),t}(m.Component);t.default=b,e.exports=t.default},389:function(e,t,n){var a=n(390);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},390:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".wraper_2l8pV3_7e-djnL1jEMn5sQ {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  transition: 400ms; }\n\n.fixed_3GE-tKOu2Cyvb1pwFPgBs_ {\n  background: rgba(26, 26, 26, 0.98);\n  transform: translateY(0); }\n  .fixed_3GE-tKOu2Cyvb1pwFPgBs_ .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 20px 0; }\n\n.static_2y5v-9XHl7_1ug_hZ3J8rT {\n  position: static;\n  background: #1a1a1a; }\n  .static_2y5v-9XHl7_1ug_hZ3J8rT .list_2k-8UShTlFnqTMrh4Sttyq {\n    padding: 8px 0; }\n\n.logo_2lIQRO_qL5AKjcdCPNBuFl {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(361))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  transform: scale(0.5);\n  position: absolute; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2lIQRO_qL5AKjcdCPNBuFl {\n    background-image: url("+a(n(362))+"); } }\n\n.list_2k-8UShTlFnqTMrh4Sttyq {\n  width: 100%;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms;\n  height: 56px; }\n\n.items_3eSI-_Rg9tpq35QIQmXEj7 {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  top: 100%;\n  transform: translateY(-130%);\n  transition: 400ms; }\n  .items_3eSI-_Rg9tpq35QIQmXEj7.show_3UlAGEkB4f6esXSe-AlVSP {\n    background: rgba(26, 26, 26, 0.98);\n    padding-bottom: 10px;\n    transform: translateY(-1px); }\n\n.item_1jdyoHU5WqryCAAUUkDP8J {\n  color: #ccc;\n  font-size: 16px;\n  margin: 8px 17px;\n  display: block;\n  width: 100%;\n  text-align: center; }\n\n.cur_18IUetdFBF7qFe5RKlJuxq,\n.item_1jdyoHU5WqryCAAUUkDP8J:hover {\n  color: #fff; }\n\n.list-icon_IX6RaaYuel0Qqh0lDxUfQ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 16px;\n  opacity: .8;\n  position: absolute;\n  left: 30px; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-1_1tdoog6rT8fomyPYrqwxMa,\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    width: 20px;\n    height: 2px;\n    border-radius: 2px;\n    background: #fff;\n    transition: 400ms;\n    opacity: 1; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE {\n    transform: translateY(7px) rotate(135deg); }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-1_1tdoog6rT8fomyPYrqwxMa {\n    opacity: 0; }\n  .list-icon_IX6RaaYuel0Qqh0lDxUfQ.list-icon--close_3SmNZ25uD-ywPPKYxDWkq5 .list-icon-2_d1DpGs0jIaATS9EG1iRRD {\n    transform: translateY(-7px) rotate(225deg); }\n",""]),t.locals={wraper:"wraper_2l8pV3_7e-djnL1jEMn5sQ",fixed:"fixed_3GE-tKOu2Cyvb1pwFPgBs_",list:"list_2k-8UShTlFnqTMrh4Sttyq",static:"static_2y5v-9XHl7_1ug_hZ3J8rT",logo:"logo_2lIQRO_qL5AKjcdCPNBuFl",items:"items_3eSI-_Rg9tpq35QIQmXEj7",show:"show_3UlAGEkB4f6esXSe-AlVSP",item:"item_1jdyoHU5WqryCAAUUkDP8J",cur:"cur_18IUetdFBF7qFe5RKlJuxq","list-icon":"list-icon_IX6RaaYuel0Qqh0lDxUfQ","list-icon-0":"list-icon-0_uK5ZJfYG-_ZhyQVLTfgbE","list-icon-1":"list-icon-1_1tdoog6rT8fomyPYrqwxMa","list-icon-2":"list-icon-2_d1DpGs0jIaATS9EG1iRRD","list-icon--close":"list-icon--close_3SmNZ25uD-ywPPKYxDWkq5"}},391:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(152),l=a(i),o=n(355),r=a(o),c=n(36),d=a(c),s=n(39),u=a(s),f=n(37),p=a(f),m=n(38),g=a(m);n(357);var x=n(0),_=a(x),b=n(392),v=a(b),h=(n(153),n(360)),k=a(h),y=function(e){function t(e){(0,d.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,u.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=(this.toggleQR,this.state.show),t=(new Date).getFullYear();return _.default.createElement("div",{className:v.default.container,id:"contact"},_.default.createElement("div",{className:v.default.contact},_.default.createElement("div",{className:v.default.logo}),_.default.createElement("div",{className:v.default.way},_.default.createElement("a",{className:v.default["contact-way"],href:"tel:021-52527144"},"电话：021-52527144"),_.default.createElement("a",{href:"mailto:springmedia@163.com",className:v.default["contact-way"]},"邮箱：springmedia@163.com")),_.default.createElement("div",{className:v.default.focus},_.default.createElement("img",{className:v.default.qrcode,src:k.default,alt:""}),_.default.createElement("div",{className:v.default.wechat+(e?" "+v.default.active:"")},_.default.createElement(l.default,{type:"wechat"})," 微信公众号"),_.default.createElement("a",{href:"https://weibo.com/springmedia",className:""+v.default.weibo,target:"_blank"},_.default.createElement(l.default,{type:"weibo"})," 微博"))),_.default.createElement("p",{className:v.default.copyright},"Copyright © 1997-",t," Spring Media Ltd. All Rights Reserved."),_.default.createElement("div",{className:v.default.copyright},_.default.createElement("div",{className:v.default.gap},"沪ICP备16047667号"),_.default.createElement("div",null,"沪公网备31010702003953号")))}}]),t}(x.Component);t.default=y,e.exports=t.default},392:function(e,t,n){var a=n(393);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},393:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_Kiapyj-VPuCI231-g9Qat {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_1d-SClMyz61i3n3TyvB7hS {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 12px;\n  width: 200px;\n  margin: 0 auto; }\n\n.contact-title_32JTfnUvsgG6kOnm3_CoEg {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_2oYzXd2VaXan0EliHzBbBq {\n  font-size: 14px;\n  color: #fff;\n  display: block; }\n\n.logo_2i_max4TOPGaplh6ZhWQCZ {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(358))+");\n  background-repeat: no-repeat;\n  width: 100%; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_2i_max4TOPGaplh6ZhWQCZ {\n    background-image: url("+a(n(359))+"); } }\n\n.copyright_1FJVbN_DqmBC4bJqv7HmmM {\n  padding-top: 10px;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_15IcNXB3JQXLXqGBrLYiVT {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: 12px; }\n\n.wechat_1fssAwabEpocGldX8kwLkc,\n.weibo_2geuFjNw5CXVhLzGoDx06D {\n  color: #eee;\n  font-size: 14px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_1fssAwabEpocGldX8kwLkc {\n  margin-top: 5px;\n  margin-bottom: 10px; }\n\n.weibo_2geuFjNw5CXVhLzGoDx06D:hover {\n  color: #EA4225; }\n\n.wechatqrcode_1b-nziQtIVzDOOoT2wlBmH {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_1b-nziQtIVzDOOoT2wlBmH:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1sjRNUheu9adaSDWrGU05D {\n  width: 80px; }\n\n.show_2krLss29KLVQN--VLR1Z6O {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_3739S1Bk4cLgZ9cQkYvFcv {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_fXpIpXCKWd40nk_ptRJZl {\n  margin-right: 1.7em; }\n\n.link___HUPU9EHdFzCrinIJCRh {\n  color: #b2804d; }\n",""]),t.locals={container:"container_Kiapyj-VPuCI231-g9Qat",contact:"contact_1d-SClMyz61i3n3TyvB7hS","contact-title":"contact-title_32JTfnUvsgG6kOnm3_CoEg","contact-way":"contact-way_2oYzXd2VaXan0EliHzBbBq",logo:"logo_2i_max4TOPGaplh6ZhWQCZ",copyright:"copyright_1FJVbN_DqmBC4bJqv7HmmM",focus:"focus_15IcNXB3JQXLXqGBrLYiVT",wechat:"wechat_1fssAwabEpocGldX8kwLkc",weibo:"weibo_2geuFjNw5CXVhLzGoDx06D",wechatqrcode:"wechatqrcode_1b-nziQtIVzDOOoT2wlBmH",qrcode:"qrcode_1sjRNUheu9adaSDWrGU05D",show:"show_2krLss29KLVQN--VLR1Z6O",follow:"follow_3739S1Bk4cLgZ9cQkYvFcv",gap:"gap_fXpIpXCKWd40nk_ptRJZl",link:"link___HUPU9EHdFzCrinIJCRh"}},398:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".tag_2-K9PCuLT8vQUpvXzPNIFw {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(364))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_2-K9PCuLT8vQUpvXzPNIFw {\n    background-image: url("+a(n(365))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2Klk9ZKiH3x_ZtZtOAhgst {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding: 30px 15px; }\n\n.title_1v27YkkqdrEzlq_nuz2yCW {\n  padding: 15px 0 4px;\n  font-size: 24px;\n  color: #333; }\n",""]),t.locals={tag:"tag_2-K9PCuLT8vQUpvXzPNIFw",container:"container_2Klk9ZKiH3x_ZtZtOAhgst",title:"title_1v27YkkqdrEzlq_nuz2yCW"}},411:function(e,t,n){e.exports=n.p+"30d90732ba392884a349cb7f30ff9fbf.png"},412:function(e,t,n){e.exports=n.p+"17880ac025fda99546a457a3ee8f39d1.png"},511:function(e,t,n){e.exports=n.p+"f920df09de8d06f691deba25260cd974.png"},512:function(e,t,n){e.exports=n.p+"2806953e602fb9180df28060da0ad083.jpg"},513:function(e,t,n){e.exports=n.p+"9cd26de12201d0defea33f8f6c1fe8d4.png"},514:function(e,t,n){e.exports=n.p+"da8761149804ada25e8f1f50258e1f34.png"},515:function(e,t,n){e.exports=n.p+"a6e535a819f1ff8d31a146bc9ec19973.png"},516:function(e,t,n){e.exports=n.p+"88e61a252dc44e2244b3cfaf19ce84e7.png"},517:function(e,t,n){e.exports=n.p+"d66a6e10e7c164e38b76d47ba031f709.png"},518:function(e,t,n){e.exports=n.p+"52893379e8c9a0678e6f903fdd41ba6e.png"},519:function(e,t,n){e.exports=n.p+"0e15e653aa21ece37aca392ec730fcce.png"},520:function(e,t,n){e.exports=n.p+"bf28af21fb33f10e233ccf240fbf33e4.png"},521:function(e,t,n){e.exports=n.p+"3a378e2cf50e90e40bbe7691efa2fe5a.png"},522:function(e,t,n){e.exports=n.p+"66fb16388ec8574e439e13db9198463e.png"},523:function(e,t,n){e.exports=n.p+"512f4a0af236b966b75f4b21c8d957cd.png"},524:function(e,t,n){e.exports=n.p+"2cfbaab3baf86814b74b48d9276b1662.jpg"},525:function(e,t,n){e.exports=n.p+"f30bc6cfcb426a3c7844037c46153d76.jpg"},581:function(e,t,n){var a=n(582);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},582:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".banner_1c7Yl5Fn6O6MxPuURpKgzY {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  background-size: cover;\n  background-color: #000;\n  background-position: center 56px;\n  background-repeat: no-repeat;\n  background-image: url("+a(n(583))+"); }\n  .banner_1c7Yl5Fn6O6MxPuURpKgzY:before {\n    content: '';\n    display: block;\n    background: rgba(0, 0, 0, 0.6);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.slogan_2GIFlOEmMtIj9Nxm58YQjj {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  text-align: center;\n  color: #fff;\n  width: 100%; }\n\n.title_3GcCaOyPqIfIjDVH_Fl3b_ {\n  font-size: 24px;\n  margin-bottom: 0; }\n\n.subtitle_2ZAtYYRRMMJ8Upgm9Dbe70 {\n  font-size: 18px;\n  font-weight: 200;\n  margin-bottom: 0;\n  margin-top: 20px; }\n\n.space0_3vA9VvaH_YkLAQnneUqVE {\n  letter-spacing: .8em;\n  text-align: center;\n  width: 100%;\n  text-indent: .8em; }\n\n.space1_1eNsXrmEO0xH5n_uLL3iPq {\n  letter-spacing: 0.5em;\n  text-indent: .5em;\n  width: 100%;\n  text-align: center;\n  position: relative; }\n",""]),t.locals={banner:"banner_1c7Yl5Fn6O6MxPuURpKgzY",slogan:"slogan_2GIFlOEmMtIj9Nxm58YQjj",title:"title_3GcCaOyPqIfIjDVH_Fl3b_",subtitle:"subtitle_2ZAtYYRRMMJ8Upgm9Dbe70",space0:"space0_3vA9VvaH_YkLAQnneUqVE",space1:"space1_1eNsXrmEO0xH5n_uLL3iPq"}},583:function(e,t,n){e.exports=n.p+"16bf579bab53e4081a4413f8aae0d3be.jpg"},881:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(581),_=a(x),b=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.slogan;if(console.info("slogan__",e),!e||e.length<1)return"";return e=e[0],g.default.createElement("div",{className:_.default.banner,id:"banner"},g.default.createElement("div",{className:_.default.slogan},g.default.createElement("p",{className:_.default.title+" "+_.default.space0},e.title),g.default.createElement("p",{className:_.default.subtitle+" "+_.default.space1},e.subtitle)))}}]),t}(m.Component);t.default=b,e.exports=t.default},882:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(369),_=a(x),b=n(883),v=a(b),h=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return g.default.createElement("div",{className:_.default.container},g.default.createElement("div",{className:_.default.tag}),g.default.createElement("div",{className:_.default.title+" "+v.default.title},"清泉配音工作室"),g.default.createElement("div",{className:v.default.content},"Spring Media（清泉工作室）成立于一九九七年（香港），是一间提供专业影视制作服务的公司。于2006年开办上海分公司，专门从事广告音频制作、影视剧配音、音频缩混、游戏语音制作、翻译、音乐制作等。"),g.default.createElement("a",{href:"/about",className:v.default.button},"了解更多"))}}]),t}(m.Component);t.default=h,e.exports=t.default},883:function(e,t,n){var a=n(884);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},884:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".title_VLL-dLgTh54rUiUo2PhYq {\n  font-size: 24px; }\n\n.content_34t_bzIMRqSy33V1sRLt9U {\n  line-height: 2em;\n  color: #333; }\n\n.button_1KXyXq5vzq1dvglYKVL8my {\n  margin: 20px auto 40px;\n  width: 160px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 50px;\n  text-align: center;\n  background: #1a1a1a;\n  color: #fff;\n  display: block; }\n",""]),t.locals={title:"title_VLL-dLgTh54rUiUo2PhYq",content:"content_34t_bzIMRqSy33V1sRLt9U",button:"button_1KXyXq5vzq1dvglYKVL8my"}},885:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(886),_=a(x),b=n(512),v=(a(b),function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.video;if(console.info("__IndexVideo",e),!e)return"";e=e[0];var t={backgroundImage:"url("+e.cover+")"};return g.default.createElement("a",{target:"_blank",href:e.link,style:t,className:_.default.container},g.default.createElement("div",{className:_.default.button}))}}]),t}(m.Component));t.default=v,e.exports=t.default},886:function(e,t,n){var a=n(887);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},887:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_2aJRPi8e1LBtaoQKSvNBLP {\n  background: #000;\n  position: relative;\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 180px; }\n  .container_2aJRPi8e1LBtaoQKSvNBLP:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.5); }\n  .container_2aJRPi8e1LBtaoQKSvNBLP:hover .button_2XGYH0fj00xJvpkjtInylr {\n    opacity: 1; }\n\n.button_2XGYH0fj00xJvpkjtInylr {\n  width: 80px;\n  height: 80px;\n  background-image: url("+a(n(411))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  z-index: 10;\n  opacity: .4;\n  transition: 400ms; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .button_2XGYH0fj00xJvpkjtInylr {\n    background-image: url("+a(n(511))+"); } }\n",""]),t.locals={container:"container_2aJRPi8e1LBtaoQKSvNBLP",button:"button_2XGYH0fj00xJvpkjtInylr"}},888:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(369),_=a(x),b=n(889),v=a(b),h=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.list,t=(e||[]).map(function(e,t){var n={backgroundImage:"url('"+e.thumb+"')"};return g.default.createElement("a",{className:v.default.item,href:e.link,key:t,target:"_blank"},g.default.createElement("div",{className:v.default["item-cover"],style:n}),g.default.createElement("div",{className:v.default["item-text"]},g.default.createElement("div",{className:v.default["item-title"]},e.title),g.default.createElement("div",{className:v.default["item-desc"]},e.description),g.default.createElement("div",{className:v.default["item-update"]},g.default.createElement("span",{className:v.default["item-update--icon"]}),g.default.createElement("span",{className:v.default["item-update--text"]},e.publish))))});return g.default.createElement("div",{className:_.default.container},g.default.createElement("div",{className:_.default.tag}),g.default.createElement("div",{className:_.default.title},"最新动态"),g.default.createElement("div",{className:v.default.list},t))}}]),t}(m.Component);t.default=h,e.exports=t.default},889:function(e,t,n){var a=n(890);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},890:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".item_1yVfPSCy-OHDU1L6w11RHm {\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 30px;\n  text-decoration: none; }\n  .item_1yVfPSCy-OHDU1L6w11RHm:hover,\n  .item_1yVfPSCy-OHDU1L6w11RHm a:active {\n    text-decoration: none; }\n\n.item_1yVfPSCy-OHDU1L6w11RHm:first-child {\n  margin-top: 10px; }\n\n.item-cover_ScvKXyhtOb-z9avrXLvkn {\n  width: 100%;\n  height: 160px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.item-text_3TjC8ebspaMKHh1aiaMafZ {\n  position: relative;\n  border: 1px solid #f4f4f4;\n  padding: 0 10px;\n  border-top: 0; }\n\n.item-title_3ojpieM3TYwiROokDkSQkR {\n  font-size: 16px;\n  color: #333;\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  padding: 10px 0;\n  line-height: 1.6em; }\n\n.item-desc_F7OofP5wRAx9UeYuPTnFy {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  font-size: 14px;\n  text-align: justify;\n  line-height: 22px;\n  color: #666; }\n\n.item-update_163QZWU36TcPqeQcmISubn {\n  width: 100%;\n  background: #fff;\n  font-size: 14px;\n  color: #999;\n  padding: 5px 0;\n  line-height: 1.6em; }\n\n.item-update--icon_2rCc_dkK7aUpwSMlhoQGQz {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  background-image: url("+a(n(412))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  margin-right: 5px; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .item-update--icon_2rCc_dkK7aUpwSMlhoQGQz {\n    background-image: url("+a(n(513))+"); } }\n\n.item-update--text_3i-CRS6C6A3St5zzE08dhL {\n  vertical-align: middle; }\n",""]),t.locals={item:"item_1yVfPSCy-OHDU1L6w11RHm","item-cover":"item-cover_ScvKXyhtOb-z9avrXLvkn","item-text":"item-text_3TjC8ebspaMKHh1aiaMafZ","item-title":"item-title_3ojpieM3TYwiROokDkSQkR","item-desc":"item-desc_F7OofP5wRAx9UeYuPTnFy","item-update":"item-update_163QZWU36TcPqeQcmISubn","item-update--icon":"item-update--icon_2rCc_dkK7aUpwSMlhoQGQz","item-update--text":"item-update--text_3i-CRS6C6A3St5zzE08dhL"}},891:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(369),_=a(x),b=n(892),v=a(b),h=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.team,a=(t||[]).map(function(e,t){var n={backgroundImage:"url("+e.avatar+")"},a=e.homepage?e.homepage:"/dubber?id="+e.id,i="";return 0==t&&(i=g.default.createElement("pre",{className:""+v.default["team-desc"]},e.desc)),g.default.createElement("a",{className:v.default.item,href:a,key:t,target:"_blank"},g.default.createElement("div",{className:v.default["item-avatar"],src:e.avatar,alt:e.name,style:n}),g.default.createElement("div",{className:v.default["item-text"]},g.default.createElement("div",{className:v.default["item-name"]},g.default.createElement("div",{className:v.default["item-name--text"]},e.name),g.default.createElement("div",{className:v.default["item-title"]},e.job),i)))}),i=(n||[]).map(function(e,t){var n={backgroundImage:"url("+e.photo+")"};return g.default.createElement("div",{className:v.default["team-item"],key:t},g.default.createElement("div",{className:v.default["team-item-avatar"],src:e.photo,style:n}),g.default.createElement("div",{className:v.default["team-item-text"]},g.default.createElement("div",{className:v.default["team-item-name"]},g.default.createElement("div",{className:v.default["item-name--text"]},e.name)),g.default.createElement("pre",{className:""+v.default["team-desc"]},e.desc)))});return g.default.createElement("div",{className:_.default.container+" "+v.default.container},g.default.createElement("div",{className:_.default.tag}),g.default.createElement("div",{className:_.default.title},"核心团队"),g.default.createElement("div",{className:v.default.list},a),g.default.createElement("div",{className:v.default["team-list"]},i))}}]),t}(m.Component);t.default=h,e.exports=t.default},892:function(e,t,n){var a=n(893);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},893:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".container_3ogQoeohz0R6hcEOIFDcuR {\n  padding-bottom: 0; }\n\n.item_1D20VBZ917b2GK0OWv6d9T {\n  display: inline-block;\n  position: relative;\n  margin-top: 40px;\n  vertical-align: top;\n  border: 1px solid #f4f4f4;\n  width: 100%;\n  border-radius: 3px; }\n\n.item_1D20VBZ917b2GK0OWv6d9T:first-child {\n  margin-top: 10px; }\n\n.team-item_4_zKqvRXcnIbCtu4MQVO3 {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  vertical-align: top;\n  margin-top: 12px; }\n\n.item-avatar_1lN0PGlDyaRpj9DYtfrmER {\n  width: 120px;\n  height: 113px;\n  border-radius: 3px;\n  float: left;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.team-item-avatar_3RP2Z6_EitP5nduQDjmu_w {\n  width: 100%;\n  height: 330px;\n  border-radius: 5px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0 auto; }\n\n.team-item_4_zKqvRXcnIbCtu4MQVO3:last-child .team-item-avatar_3RP2Z6_EitP5nduQDjmu_w {\n  background-position: 94%; }\n\n.item-text_twHqoHb_JZ01PVDdiM7zD {\n  margin-left: 130px;\n  text-align: justify;\n  padding-right: .4em;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 113px; }\n\n.item-name_Nyfvl-5iDHVibVbmwuA7_ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: left;\n  justify-content: left;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-align: start;\n  align-items: start;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.team-item-name_2ZdQ2bjaFTrb4i0JVdmtNm {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: left;\n  justify-content: left;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 12px 0 4px; }\n\n.item-name--text_1oAvofH36r46eGNlI_EYrh {\n  font-size: 18px;\n  color: #333;\n  white-space: nowrap; }\n\n.item-title_LV8GtFHqpyLVdZgV904dM {\n  font-size: 14px;\n  color: #b2804d; }\n\n.item-desc_3mtNqCXXG-Jz1y76BOkn5N {\n  font-size: 14px;\n  line-height: 21px;\n  color: #666;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  white-space: pre-wrap;\n  margin-bottom: 0; }\n\n.team-desc_ghEEcOuAsjkm-GRRPqwdR {\n  font-size: 13px;\n  line-height: 21px;\n  color: #666;\n  white-space: pre-wrap;\n  text-align: justify;\n  letter-spacing: .1em; }\n\n.team-list_1TbWkXh1AXCK2p48d3k3IZ {\n  margin-top: 30px;\n  padding-top: 30px;\n  border-top: 1px solid #f1f1f1; }\n",""]),t.locals={container:"container_3ogQoeohz0R6hcEOIFDcuR",item:"item_1D20VBZ917b2GK0OWv6d9T","team-item":"team-item_4_zKqvRXcnIbCtu4MQVO3","item-avatar":"item-avatar_1lN0PGlDyaRpj9DYtfrmER","team-item-avatar":"team-item-avatar_3RP2Z6_EitP5nduQDjmu_w","item-text":"item-text_twHqoHb_JZ01PVDdiM7zD","item-name":"item-name_Nyfvl-5iDHVibVbmwuA7_","team-item-name":"team-item-name_2ZdQ2bjaFTrb4i0JVdmtNm","item-name--text":"item-name--text_1oAvofH36r46eGNlI_EYrh","item-title":"item-title_LV8GtFHqpyLVdZgV904dM","item-desc":"item-desc_3mtNqCXXG-Jz1y76BOkn5N","team-desc":"team-desc_ghEEcOuAsjkm-GRRPqwdR","team-list":"team-list_1TbWkXh1AXCK2p48d3k3IZ"}},894:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(369),_=a(x),b=n(895),v=a(b),h=n(514),k=a(h),y=n(515),w=a(y),E=n(516),N=a(E),z=n(517),P=a(z),j=n(518),R=a(j),q=n(519),L=a(q),Q=n(520),M=(a(Q),n(521)),D=a(M),C=n(522),O=a(C),Y=n(523),I=a(Y),V=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=(this.props.list,[k.default,w.default,N.default,P.default,R.default,L.default,D.default,O.default,I.default]),t=e.map(function(e,t){return g.default.createElement("div",{className:v.default.item,key:t},g.default.createElement("img",{className:v.default["item-pic"],src:e,alt:""}))});return g.default.createElement("div",{className:_.default.container},g.default.createElement("div",{className:_.default.tag}),g.default.createElement("div",{className:_.default.title},"合作伙伴"),g.default.createElement("div",{className:v.default.list},t))}}]),t}(m.Component);t.default=V,e.exports=t.default},895:function(e,t,n){var a=n(896);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},896:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".list_2WeoMY15fzPoT_aFLHVZQi {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.item_2n3vL5SPBczsL0vj5CNBpW {\n  width: 224px;\n  height: 224px;\n  display: inline-block;\n  background: #f4f4f4;\n  vertical-align: top;\n  position: relative;\n  margin-top: 10px; }\n\n.item_2n3vL5SPBczsL0vj5CNBpW:nth-child(2n) {\n  background: #fafbfc; }\n\n.item-pic_2Y6zoL9AkMOtLgM2IZJWTw {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: scale(0.5) translate3d(-100%, -100%, 0); }\n",""]),t.locals={list:"list_2WeoMY15fzPoT_aFLHVZQi",item:"item_2n3vL5SPBczsL0vj5CNBpW","item-pic":"item-pic_2Y6zoL9AkMOtLgM2IZJWTw"}},897:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),c=n(39),d=a(c),s=n(37),u=a(s),f=n(38),p=a(f),m=n(0),g=a(m),x=n(898),_=a(x),b=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.moreLink;return g.default.createElement("div",{className:_.default.container},g.default.createElement("div",{className:_.default.content},g.default.createElement("div",{className:_.default.title},"如果你想进一步了解清泉配音工作室"),g.default.createElement("a",{href:e,className:_.default.subtitle},"联系我们 >")))}}]),t}(m.Component);t.default=b,e.exports=t.default},898:function(e,t,n){var a=n(899);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},899:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_F8KiVL9Fbczjj-t3DDswE {\n  background-color: #000;\n  width: 100%;\n  height: 232px;\n  background-image: url("+a(n(524))+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .container_F8KiVL9Fbczjj-t3DDswE {\n    background-image: url("+a(n(525))+"); } }\n\n.title_1vOYBmRC4Md2Wtlkwsq03x {\n  font-size: 18px;\n  color: #fff;\n  margin-bottom: 20px; }\n\n.subtitle_2uBD1OGZel0UzaOMlQ4Ebe {\n  font-size: 14px;\n  color: #fff; }\n",""]),t.locals={container:"container_F8KiVL9Fbczjj-t3DDswE",title:"title_1vOYBmRC4Md2Wtlkwsq03x",subtitle:"subtitle_2uBD1OGZel0UzaOMlQ4Ebe"}}});