webpackJsonp([4],{337:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return t.name===e}}function l(e,t){return e?e instanceof Array?e.find(i(t))||{}:e[t]||"":{}}function o(e){var t=e.sections,n=t.list,a=t.total,i=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:i}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(355),d=a(r),c=n(36),u=a(c),s=n(39),f=a(s),p=n(37),m=a(p),g=n(38),v=a(g),b=n(0),x=a(b),h=n(151),_=n(378),k=a(_),w=n(381),y=a(w),E=n(699),N=a(E),M=n(700),j=a(M),z=n(703),B=a(z),O=n(706),L=a(O),Q=n(709),R=a(Q),q=n(712),J=a(q),P=n(715),Z=a(P),S=n(371),G=a(S),H=function(e){function t(){return(0,u.default)(this,t),(0,m.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list,a=(e.loading,l(n,"navigation").value),i=(l(n,"slider").value,l(n,"news").value),o=l(n,"dubbers").value,r=l(n,"team_others").value,d=l(n,"slogan").value,c=l(n,"banner_video").value,u=[x.default.createElement(y.default,{triggerFixedElementSelector:"#banner",location:t,navs:a}),x.default.createElement(N.default,{slogan:d}),x.default.createElement(j.default,null),x.default.createElement(B.default,{video:c}),x.default.createElement(L.default,{list:i}),x.default.createElement(R.default,{list:o,team:r}),x.default.createElement(J.default,null),x.default.createElement(Z.default,{moreLink:"/about"}),x.default.createElement(G.default,null)];return x.default.createElement(k.default,{sections:u})}}]),t}(b.Component);t.default=(0,h.connect)(o)(H),e.exports=t.default},355:function(e,t,n){e.exports={default:n(154),__esModule:!0}},356:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},357:function(e,t,n){"use strict";n(150)},358:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},359:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},360:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},361:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},362:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},364:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},365:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},368:function(e,t,n){var a=n(394);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},371:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(152),l=a(i),o=n(355),r=a(o),d=n(36),c=a(d),u=n(39),s=a(u),f=n(37),p=a(f),m=n(38),g=a(m);n(357);var v=n(0),b=a(v),x=n(372),h=a(x),_=(n(153),n(360)),k=a(_),w=function(e){function t(e){(0,c.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,s.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,n=(new Date).getFullYear();return b.default.createElement("div",{className:h.default.container,id:"contact"},b.default.createElement("div",{className:h.default.contact},b.default.createElement("div",{className:h.default.logo}),b.default.createElement("div",{className:h.default.way},b.default.createElement("div",{className:h.default["contact-title"]},"联系我们"),b.default.createElement("div",{className:h.default["contact-way"]},"电话：021-52527144"),b.default.createElement("div",{className:h.default["contact-way"]},"邮箱：springmedia@163.com")),b.default.createElement("div",{className:h.default.focus},b.default.createElement("div",{className:h.default["contact-title"]},"关注我们"),b.default.createElement("div",{className:h.default.wechatqrcode+(t?" "+h.default.show:"")},b.default.createElement("img",{className:h.default.qrcode,src:k.default,alt:""})),b.default.createElement("a",{href:"javasript:;",onClick:e,className:h.default.wechat+(t?" "+h.default.active:"")},b.default.createElement(l.default,{type:"wechat"})),b.default.createElement("a",{href:"https://weibo.com/springmedia",className:h.default.weibo,target:"_blank"},b.default.createElement(l.default,{type:"weibo"})))),b.default.createElement("p",{className:h.default.copyright},"Copyright © 1997-",n," Spring Media Ltd. All Rights Reserved."),b.default.createElement("p",{className:h.default.copyright},b.default.createElement("span",{className:h.default.gap},"沪ICP备16047667号"),b.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(v.Component);t.default=w,e.exports=t.default},372:function(e,t,n){var a=n(373);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},373:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(358))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+a(n(359))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},378:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(379),b=(a(v),function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return g.default.createElement("div",{key:t},e)});return g.default.createElement("div",null,t)}}]),t}(m.Component));t.default=b,e.exports=t.default},379:function(e,t,n){var a=n(380);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},380:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,"",""])},381:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(382),b=a(v),x=n(384),h=(a(x),function(e){function t(e){(0,r.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={},n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=e.fixed,i=this.state.navigationBarFixed,l=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],i=e.link.split("/")[1],l=a&&-1!=i.indexOf(a)||a==i?b.default.item+" "+b.default.cur:b.default.item;return g.default.createElement("a",{href:e.link,key:n,className:l},e.title)}),o=i?b.default.wraper+" "+b.default.fixed:""+b.default.wraper;return a&&(o=b.default.wraper+" "+b.default.static),g.default.createElement("div",{className:o,ref:this.navigation},g.default.createElement("div",{className:b.default.list},g.default.createElement("a",{href:n&&n[0].link,className:b.default.logo}),g.default.createElement("div",{className:b.default.items},l)))}}]),t}(m.Component));t.default=h,e.exports=t.default},382:function(e,t,n){var a=n(383);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},383:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(361))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+a(n(362))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},384:function(e,t,n){e.exports=n.p+"8401e7566c4eb1504d92683fe97ad833.png"},394:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".tag_jqzc8Va2wKUUt2zeu3mpZ {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(364))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_jqzc8Va2wKUUt2zeu3mpZ {\n    background-image: url("+a(n(365))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2LkQ5MLt-xJszr6hy7I1Vg {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px; }\n\n.title_26hq9hDolnMkdGQhV4l8Mv {\n  padding: 15px 0;\n  font-size: 28px;\n  color: #333; }\n",""]),t.locals={tag:"tag_jqzc8Va2wKUUt2zeu3mpZ",container:"container_2LkQ5MLt-xJszr6hy7I1Vg",title:"title_26hq9hDolnMkdGQhV4l8Mv"}},411:function(e,t,n){e.exports=n.p+"30d90732ba392884a349cb7f30ff9fbf.png"},412:function(e,t,n){e.exports=n.p+"17880ac025fda99546a457a3ee8f39d1.png"},509:function(e,t,n){var a=n(510);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},510:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".banner_LM2QtTIj40Ne1clAqgtLj {\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #000;\n  background-position: center;\n  background-attachment: fixed;\n  /*&:hover::before{\n    background: transparent;\n  }*/ }\n  .banner_LM2QtTIj40Ne1clAqgtLj:before {\n    content: '';\n    display: block;\n    background: rgba(0, 0, 0, 0.42);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*transition: 400ms;*/ }\n\n.slogan_2VAZ6XzWLz-6n3J6M3NDf5 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  text-align: center;\n  color: #fff;\n  width: 100%; }\n\n.title_2RZr8LkMLxdTwAZjFOzEcd {\n  font-size: 56px;\n  margin-bottom: 0; }\n\n.subtitle_3tc7G-sAoLGI8kI024hTnQ {\n  font-size: 22px;\n  margin-bottom: 0; }\n\n.space0_dLee0B5KCuxdH7zZmZBtM {\n  letter-spacing: .8em;\n  text-align: center;\n  width: 100%; }\n\n.space1_1S7z2J0I24HWPRmWmi1HXB {\n  letter-spacing: 0.5em;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  left: -1em; }\n",""]),t.locals={banner:"banner_LM2QtTIj40Ne1clAqgtLj",slogan:"slogan_2VAZ6XzWLz-6n3J6M3NDf5",title:"title_2RZr8LkMLxdTwAZjFOzEcd",subtitle:"subtitle_3tc7G-sAoLGI8kI024hTnQ",space0:"space0_dLee0B5KCuxdH7zZmZBtM",space1:"space1_1S7z2J0I24HWPRmWmi1HXB"}},511:function(e,t,n){e.exports=n.p+"f920df09de8d06f691deba25260cd974.png"},512:function(e,t,n){e.exports=n.p+"2806953e602fb9180df28060da0ad083.jpg"},513:function(e,t,n){e.exports=n.p+"9cd26de12201d0defea33f8f6c1fe8d4.png"},514:function(e,t,n){e.exports=n.p+"da8761149804ada25e8f1f50258e1f34.png"},515:function(e,t,n){e.exports=n.p+"a6e535a819f1ff8d31a146bc9ec19973.png"},516:function(e,t,n){e.exports=n.p+"88e61a252dc44e2244b3cfaf19ce84e7.png"},517:function(e,t,n){e.exports=n.p+"d66a6e10e7c164e38b76d47ba031f709.png"},518:function(e,t,n){e.exports=n.p+"52893379e8c9a0678e6f903fdd41ba6e.png"},519:function(e,t,n){e.exports=n.p+"0e15e653aa21ece37aca392ec730fcce.png"},520:function(e,t,n){e.exports=n.p+"bf28af21fb33f10e233ccf240fbf33e4.png"},521:function(e,t,n){e.exports=n.p+"3a378e2cf50e90e40bbe7691efa2fe5a.png"},522:function(e,t,n){e.exports=n.p+"66fb16388ec8574e439e13db9198463e.png"},523:function(e,t,n){e.exports=n.p+"512f4a0af236b966b75f4b21c8d957cd.png"},524:function(e,t,n){e.exports=n.p+"2cfbaab3baf86814b74b48d9276b1662.jpg"},525:function(e,t,n){e.exports=n.p+"f30bc6cfcb426a3c7844037c46153d76.jpg"},699:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(509),b=a(v),x=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.slogan;if(!e||e.length<1)return"";var t={backgroundImage:"url('http://cdn.springmedia.com.cn/banner_3.jpg')"};return e=e[0],g.default.createElement("div",{className:b.default.banner,id:"banner",style:t},g.default.createElement("div",{className:b.default.slogan},g.default.createElement("p",{className:b.default.title+" "+b.default.space0},e.title),g.default.createElement("p",{className:b.default.subtitle+" "+b.default.space1},e.subtitle)))}}]),t}(m.Component);t.default=x,e.exports=t.default},700:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(368),b=a(v),x=n(701),h=a(x),_=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return g.default.createElement("div",{className:b.default.container},g.default.createElement("div",{className:b.default.tag}),g.default.createElement("div",{className:b.default.title},"清泉配音工作室"),g.default.createElement("div",{className:h.default.content},"Spring Media（清泉工作室）成立于一九九七年（香港），是一间提供专业影视制作服务的公司。于2006年开办上海分公司，专门从事广告音频制作、影视剧配音、音频缩混、游戏语音制作、翻译、音乐制作等。"),g.default.createElement("a",{href:"/about",className:h.default.button},"关于清泉"))}}]),t}(m.Component);t.default=_,e.exports=t.default},701:function(e,t,n){var a=n(702);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},702:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".content_-J6pPfV0NLoG5qCCbXQlX {\n  line-height: 2em;\n  color: #333; }\n\n.button_4jRmmVy1U5_Gs9xHoTD2r {\n  margin-top: 35px;\n  width: 160px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 50px;\n  text-align: center;\n  background: #1a1a1a;\n  color: #fff;\n  display: block; }\n",""]),t.locals={content:"content_-J6pPfV0NLoG5qCCbXQlX",button:"button_4jRmmVy1U5_Gs9xHoTD2r"}},703:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(704),b=a(v),x=n(512),h=(a(x),function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.video;return console.info("__IndexVideo",e),e?(e=e[0],g.default.createElement("a",{target:"_blank",href:e.link,className:b.default.container},g.default.createElement("img",{src:e.cover,alt:""}),g.default.createElement("div",{className:b.default.button}))):""}}]),t}(m.Component));t.default=h,e.exports=t.default},704:function(e,t,n){var a=n(705);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},705:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_3evuxbyyq5nrPV5jMrK4db {\n  background: #000;\n  position: relative;\n  display: block; }\n  .container_3evuxbyyq5nrPV5jMrK4db:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.5); }\n  .container_3evuxbyyq5nrPV5jMrK4db:hover .button_3rRveMJB6uiDMaMrVor6Di {\n    opacity: 1; }\n\n.button_3rRveMJB6uiDMaMrVor6Di {\n  width: 99px;\n  height: 99px;\n  background-image: url("+a(n(411))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  z-index: 10;\n  opacity: .8;\n  transition: 400ms; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .button_3rRveMJB6uiDMaMrVor6Di {\n    background-image: url("+a(n(511))+"); } }\n",""]),t.locals={container:"container_3evuxbyyq5nrPV5jMrK4db",button:"button_3rRveMJB6uiDMaMrVor6Di"}},706:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(368),b=a(v),x=n(707),h=a(x),_=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.list,t=(e||[]).map(function(e,t){var n={backgroundImage:"url('"+e.thumb+"')"};return g.default.createElement("a",{className:h.default.item,href:e.link,key:t,target:"_blank"},g.default.createElement("div",{className:h.default["item-cover"],style:n}),g.default.createElement("div",{className:h.default["item-text"]},g.default.createElement("div",{className:h.default["item-title"]},e.title),g.default.createElement("div",{className:h.default["item-desc"]},e.description),g.default.createElement("div",{className:h.default["item-update"]},g.default.createElement("span",{className:h.default["item-update--icon"]}),g.default.createElement("span",{className:h.default["item-update--text"]},e.publish))))});return g.default.createElement("div",{className:b.default.container},g.default.createElement("div",{className:b.default.tag}),g.default.createElement("div",{className:b.default.title},"最新动态"),g.default.createElement("div",{className:h.default.list},t))}}]),t}(m.Component);t.default=_,e.exports=t.default},707:function(e,t,n){var a=n(708);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},708:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".item_2htBuOnWr06-J_hv0CqBRU {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 50%;\n  height: 160px;\n  overflow: hidden;\n  margin-top: 30px;\n  text-decoration: none; }\n  .item_2htBuOnWr06-J_hv0CqBRU:hover,\n  .item_2htBuOnWr06-J_hv0CqBRU a:active {\n    text-decoration: none; }\n\n.item-cover_3ObjubqMujGVfktBDh8kdw {\n  width: 213px;\n  height: 100%;\n  float: left;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.item-text_3ZOh-hMXTRWbSjgAIbs2Ib {\n  margin-left: 225px;\n  height: 100%;\n  position: relative; }\n\n.item-title_19OJiEbF1Qyx77dfudv4M_ {\n  font-size: 18px;\n  color: #333;\n  word-wrap: break-word;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  padding: 15px 0; }\n\n.item-desc_cljmGX3dNwVf15lvNYVTS {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  font-size: 16px;\n  line-height: 22px;\n  color: #666;\n  padding-bottom: 12px; }\n\n.item-update_3gGDX6DAenEenp3x55Jast {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n  bottom: 0;\n  left: 0;\n  font-size: 14px;\n  color: #999; }\n\n.item-update--icon_PFXJZ30XAdQHoHu6ipRme {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  background-image: url("+a(n(412))+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  margin-right: 5px; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .item-update--icon_PFXJZ30XAdQHoHu6ipRme {\n    background-image: url("+a(n(513))+"); } }\n\n.item-update--text_FA8Yth5YlQ_dX6sUgBiYu {\n  vertical-align: middle; }\n",""]),t.locals={item:"item_2htBuOnWr06-J_hv0CqBRU","item-cover":"item-cover_3ObjubqMujGVfktBDh8kdw","item-text":"item-text_3ZOh-hMXTRWbSjgAIbs2Ib","item-title":"item-title_19OJiEbF1Qyx77dfudv4M_","item-desc":"item-desc_cljmGX3dNwVf15lvNYVTS","item-update":"item-update_3gGDX6DAenEenp3x55Jast","item-update--icon":"item-update--icon_PFXJZ30XAdQHoHu6ipRme","item-update--text":"item-update--text_FA8Yth5YlQ_dX6sUgBiYu"}},709:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(368),b=a(v),x=n(710),h=a(x),_=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.team,a=(t||[]).map(function(e,t){var n={backgroundImage:"url("+e.avatar+")"},a=e.homepage?e.homepage:"/dubber?id="+e.id;return g.default.createElement("a",{className:h.default.item,href:a,key:t,target:"_blank"},g.default.createElement("div",{className:h.default["item-avatar"],src:e.avatar,alt:e.name,style:n}),g.default.createElement("div",{className:h.default["item-text"]},g.default.createElement("div",{className:h.default["item-name"]},g.default.createElement("div",{className:h.default["item-name--text"]},e.name),g.default.createElement("div",{className:h.default["item-title"]},e.job)),g.default.createElement("pre",{className:h.default["item-desc"]},e.desc)))}),i=(n||[]).map(function(e,t){var n={backgroundImage:"url("+e.photo+")"};return g.default.createElement("div",{className:h.default["team-item"],key:t},g.default.createElement("div",{className:h.default["team-item-avatar"],src:e.photo,style:n}),g.default.createElement("div",{className:h.default["item-text"]},g.default.createElement("div",{className:h.default["item-name"]},g.default.createElement("div",{className:h.default["item-name--text"]},e.name)),g.default.createElement("pre",{className:""+h.default["team-desc"]},e.desc)))});return g.default.createElement("div",{className:b.default.container},g.default.createElement("div",{className:b.default.tag}),g.default.createElement("div",{className:b.default.title},"核心团队"),g.default.createElement("div",{className:h.default.list},a),g.default.createElement("div",{className:h.default.list},i))}}]),t}(m.Component);t.default=_,e.exports=t.default},710:function(e,t,n){var a=n(711);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},711:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".item_j4ahwUGA4IKjgpRJlGvgw {\n  display: inline-block;\n  width: 33.3%;\n  position: relative;\n  padding-right: 65px;\n  margin-top: 40px;\n  vertical-align: top; }\n\n.team-item_1vzHoLwHsItjMZWb9eDJzP {\n  display: inline-block;\n  width: 50%;\n  position: relative;\n  padding-right: 65px;\n  margin-top: 100px;\n  vertical-align: top; }\n\n.item-avatar_2Kjk8ZDOHhmsigqoayyvoW {\n  width: 110px;\n  height: 110px;\n  border-radius: 100%;\n  float: left;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.team-item-avatar_21tREnYgi71mRNB9RvO8gM {\n  width: 110px;\n  height: 110px;\n  border-radius: 5px;\n  float: left;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.item-text_3tAZoTxef4FfoWz0v4sGav {\n  margin-left: 130px; }\n\n.item-name_2pbb63ClNjgOblxsJJWPnW {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: left;\n  justify-content: left;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.item-name--text_z9JZmynF0Ig4DqNn-wMrx {\n  font-size: 18px;\n  color: #333;\n  white-space: nowrap; }\n\n.item-title_276wN6-N6XWyr7TmYI85Sk {\n  font-size: 14px;\n  color: #b2804d;\n  padding-left: 10px; }\n\n.item-desc_32nsZrCRH66bTHTLtegsbt {\n  font-size: 14px;\n  line-height: 21px;\n  color: #666;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n  white-space: pre-wrap; }\n\n.team-desc_1x0hypSE5qK0lSQAjYWLO2 {\n  font-size: 14px;\n  line-height: 21px;\n  color: #666;\n  white-space: pre-wrap; }\n",""]),t.locals={item:"item_j4ahwUGA4IKjgpRJlGvgw","team-item":"team-item_1vzHoLwHsItjMZWb9eDJzP","item-avatar":"item-avatar_2Kjk8ZDOHhmsigqoayyvoW","team-item-avatar":"team-item-avatar_21tREnYgi71mRNB9RvO8gM","item-text":"item-text_3tAZoTxef4FfoWz0v4sGav","item-name":"item-name_2pbb63ClNjgOblxsJJWPnW","item-name--text":"item-name--text_z9JZmynF0Ig4DqNn-wMrx","item-title":"item-title_276wN6-N6XWyr7TmYI85Sk","item-desc":"item-desc_32nsZrCRH66bTHTLtegsbt","team-desc":"team-desc_1x0hypSE5qK0lSQAjYWLO2"}},712:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(368),b=a(v),x=n(713),h=a(x),_=n(514),k=a(_),w=n(515),y=a(w),E=n(516),N=a(E),M=n(517),j=a(M),z=n(518),B=a(z),O=n(519),L=a(O),Q=n(520),R=a(Q),q=n(521),J=a(q),P=n(522),Z=a(P),S=n(523),G=a(S),H=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=(this.props.list,[k.default,y.default,N.default,j.default,B.default,L.default,R.default,J.default,Z.default,G.default]),t=e.map(function(e,t){return g.default.createElement("div",{className:h.default.item,key:t},g.default.createElement("img",{className:h.default["item-pic"],src:e,alt:""}))});return g.default.createElement("div",{className:b.default.container},g.default.createElement("div",{className:b.default.tag}),g.default.createElement("div",{className:b.default.title},"这些品牌",g.default.createElement("br",null),"与我们合作"),g.default.createElement("div",{className:h.default.list},t))}}]),t}(m.Component);t.default=H,e.exports=t.default},713:function(e,t,n){var a=n(714);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},714:function(e,t,n){t=e.exports=n(324)(!1),t.push([e.i,".item_Qabe3HXNp9Q_LUGQCkdYZ {\n  width: 224px;\n  height: 224px;\n  display: inline-block;\n  background: #f4f4f4;\n  vertical-align: top;\n  position: relative;\n  margin-top: 20px; }\n\n.item_Qabe3HXNp9Q_LUGQCkdYZ:nth-child(5n+2) {\n  background: #fafbfc;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.item_Qabe3HXNp9Q_LUGQCkdYZ:nth-child(5n+4) {\n  background: #fafbfc;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.item-pic_2H47BDh9sUZR6RZSP60g00 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: scale(0.5) translate3d(-100%, -100%, 0); }\n",""]),t.locals={item:"item_Qabe3HXNp9Q_LUGQCkdYZ","item-pic":"item-pic_2H47BDh9sUZR6RZSP60g00"}},715:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),l=a(i),o=n(36),r=a(o),d=n(39),c=a(d),u=n(37),s=a(u),f=n(38),p=a(f),m=n(0),g=a(m),v=n(716),b=a(v),x=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.moreLink;return g.default.createElement("div",{className:b.default.container},g.default.createElement("div",{className:b.default.content},g.default.createElement("div",{className:b.default.title},"如果你想进一步了解清泉配音工作室"),g.default.createElement("a",{href:e,className:b.default.subtitle},"联系我们 >")))}}]),t}(m.Component);t.default=x,e.exports=t.default},716:function(e,t,n){var a=n(717);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;n(325)(a,i);a.locals&&(e.exports=a.locals)},717:function(e,t,n){var a=n(356);t=e.exports=n(324)(!1),t.push([e.i,".container_3DGnYOpuSkBvwL29qtXhpg {\n  background-color: #000;\n  width: 100%;\n  height: 232px;\n  background-image: url("+a(n(524))+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .container_3DGnYOpuSkBvwL29qtXhpg {\n    background-image: url("+a(n(525))+"); } }\n\n.title_1uj-Lz6EZD6vZtXgzEDBWH {\n  font-size: 28px;\n  color: #fff;\n  margin-bottom: 35px; }\n\n.subtitle_2v91RZojuPkJ7RxVJndzSL {\n  font-size: 16px;\n  color: #fff; }\n",""]),t.locals={container:"container_3DGnYOpuSkBvwL29qtXhpg",title:"title_1uj-Lz6EZD6vZtXgzEDBWH",subtitle:"subtitle_2v91RZojuPkJ7RxVJndzSL"}}});