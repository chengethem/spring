webpackJsonp([8],{371:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t){return t.name===e}}function i(e,t){return e?e instanceof Array?e.find(o(t))||{}:e[t]||"":{}}function l(e){var t=e.sections,n=t.list,a=t.total,o=t.page;return{loading:e.loading.models.sections,list:n,total:a,page:o}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(385),d=a(r),c=n(38),u=a(c),s=n(41),f=a(s),p=n(39),m=a(p),g=n(40),_=a(g),b=n(0),x=a(b),v=n(162),h=n(408),k=a(h),N=n(581),E=a(N),w=n(411),y=a(w),P=n(576),z=a(P),j=n(780),K=a(j),M=n(783),C=a(M),X=n(592),F=a(X),S=n(593),A=a(S),U=n(401),V=a(U),W=function(e){function t(){return(0,u.default)(this,t),(0,m.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.list,a=(e.loading,i(n,"navigation").value),o=i(n,"previous").value,l=i(n,"course").value,r=i(n,"download").value,d=x.default.createElement(K.default,{course:l}),c=x.default.createElement(C.default,{previous:o,download:r}),u=[x.default.createElement(y.default,{fixed:!0,location:t,navs:a}),x.default.createElement(z.default,{bg:F.default,bg2x:A.default,title:"配音培训班"}),x.default.createElement(E.default,{left:d,right:c}),x.default.createElement(V.default,null)];return x.default.createElement(k.default,{sections:u})}}]),t}(b.Component);t.default=(0,v.connect)(l)(W),e.exports=t.default},385:function(e,t,n){e.exports={default:n(165),__esModule:!0}},386:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},387:function(e,t,n){"use strict";n(161)},388:function(e,t,n){e.exports=n.p+"15d15bb956be66fed3979640457b08e3.png"},389:function(e,t,n){e.exports=n.p+"530c222433ad690286417f4fd491e73d.png"},390:function(e,t,n){e.exports=n.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},391:function(e,t,n){e.exports=n.p+"a4d902d9298f044d543234d1ae5b11d3.png"},392:function(e,t,n){e.exports=n.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},395:function(e,t,n){e.exports=n.p+"fb3d0606740b76a286d7057c031bd474.png"},396:function(e,t,n){e.exports=n.p+"b62ff30214fe84956a27b87b138b855b.png"},398:function(e,t,n){var a=n(424);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},401:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),i=a(o),l=n(385),r=a(l),d=n(38),c=a(d),u=n(41),s=a(u),f=n(39),p=a(f),m=n(40),g=a(m);n(387);var _=n(0),b=a(_),x=n(402),v=a(x),h=(n(164),n(390)),k=a(h),N=function(e){function t(e){(0,c.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.toggleQR=n.toggleQR.bind(n),n.state={show:!1},n}return(0,g.default)(t,e),(0,s.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,n=(new Date).getFullYear();return b.default.createElement("div",{className:v.default.container,id:"contact"},b.default.createElement("div",{className:v.default.contact},b.default.createElement("div",{className:v.default.logo}),b.default.createElement("div",{className:v.default.way},b.default.createElement("div",{className:v.default["contact-title"]},"联系我们"),b.default.createElement("div",{className:v.default["contact-way"]},"电话：021-52527144"),b.default.createElement("div",{className:v.default["contact-way"]},"邮箱：springmedia@163.com")),b.default.createElement("div",{className:v.default.focus},b.default.createElement("div",{className:v.default["contact-title"]},"关注我们"),b.default.createElement("div",{className:v.default.wechatqrcode+(t?" "+v.default.show:"")},b.default.createElement("img",{className:v.default.qrcode,src:k.default,alt:""})),b.default.createElement("a",{href:"javasript:;",onClick:e,className:v.default.wechat+(t?" "+v.default.active:"")},b.default.createElement(i.default,{type:"wechat"})),b.default.createElement("a",{href:"https://weibo.com/springmedia",className:v.default.weibo,target:"_blank"},b.default.createElement(i.default,{type:"weibo"})))),b.default.createElement("p",{className:v.default.copyright},"Copyright © 1997-",n," Spring Media Ltd. All Rights Reserved."),b.default.createElement("p",{className:v.default.copyright},b.default.createElement("span",{className:v.default.gap},"沪ICP备16047667号"),b.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(_.Component);t.default=N,e.exports=t.default},402:function(e,t,n){var a=n(403);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},403:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+a(n(388))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+a(n(389))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},408:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(409),b=(a(_),function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return g.default.createElement("div",{key:t},e)});return g.default.createElement("div",null,t)}}]),t}(m.Component));t.default=b,e.exports=t.default},409:function(e,t,n){var a=n(410);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},410:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,"",""])},411:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(412),b=a(_),x=n(414),v=(a(x),function(e){function t(e){(0,r.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.navigation=g.default.createRef(),n.state={},n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),n=t.offsetTop+t.offsetHeight,a=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>n-a)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.navs,a=e.fixed,o=this.state.navigationBarFixed,i=(n||[]).map(function(e,n){var a=t.pathname.split("/")[1],o=e.link.split("/")[1],i=a&&-1!=o.indexOf(a)||a==o?b.default.item+" "+b.default.cur:b.default.item;return g.default.createElement("a",{href:e.link,key:n,className:i},e.title)}),l=o?b.default.wraper+" "+b.default.fixed:""+b.default.wraper;return a&&(l=b.default.wraper+" "+b.default.static),g.default.createElement("div",{className:l,ref:this.navigation},g.default.createElement("div",{className:b.default.list},g.default.createElement("a",{href:n&&n[0].link,className:b.default.logo}),g.default.createElement("div",{className:b.default.items},i)))}}]),t}(m.Component));t.default=v,e.exports=t.default},412:function(e,t,n){var a=n(413);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},413:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+a(n(391))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+a(n(392))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},414:function(e,t,n){e.exports=n.p+"8401e7566c4eb1504d92683fe97ad833.png"},424:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".tag_jqzc8Va2wKUUt2zeu3mpZ {\n  width: 20px;\n  height: 13px;\n  background-image: url("+a(n(395))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_jqzc8Va2wKUUt2zeu3mpZ {\n    background-image: url("+a(n(396))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2LkQ5MLt-xJszr6hy7I1Vg {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px;\n  overflow: hidden; }\n\n.title_26hq9hDolnMkdGQhV4l8Mv {\n  padding: 15px 0;\n  font-size: 28px;\n  color: #333; }\n",""]),t.locals={tag:"tag_jqzc8Va2wKUUt2zeu3mpZ",container:"container_2LkQ5MLt-xJszr6hy7I1Vg",title:"title_26hq9hDolnMkdGQhV4l8Mv"}},576:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(577),b=a(_),x=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.bg,a=e.bg2x;console.info("CompositionBanner",n,a);var o=2===window.devicePixelRatio?a:n;return g.default.createElement("div",{style:{backgroundImage:"url("+o+")"},className:b.default.container},g.default.createElement("div",{className:b.default.title},t))}}]),t}(m.Component);t.default=x,e.exports=t.default},577:function(e,t,n){var a=n(578);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},578:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".container_jb1YFWCuvX_fcNxmm57pB {\n  width: 100%;\n  height: 170px;\n  /*background-image: url('../../../assets/list_banner_bg.jpg');*/\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .container_jb1YFWCuvX_fcNxmm57pB {\n    /*background-image: url('../../../assets/list_banner_bg_2x.jpg');*/ } }\n\n.title_3kcaSIRr6Fz4kXMy231aFr {\n  font-size: 60px;\n  color: #fff;\n  font-weight: 700;\n  text-align: center; }\n",""]),t.locals={container:"container_jb1YFWCuvX_fcNxmm57pB",title:"title_3kcaSIRr6Fz4kXMy231aFr"}},581:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(398),b=a(_),x=n(582),v=a(x),h=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.right;return g.default.createElement("div",{className:b.default.container+" "+v.default.contianer},g.default.createElement("div",{className:v.default.left},t),g.default.createElement("div",{className:v.default.right},n))}}]),t}(m.Component);t.default=h,e.exports=t.default},582:function(e,t,n){var a=n(583);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},583:function(e,t,n){t=e.exports=n(354)(!1),t.push([e.i,".contianer_3TatzCuKtWgyNhqDKFB6G3 {\n  position: relative;\n  overflow: hidden;\n  font-size: 0; }\n\n.left_vBREnzOwjF_i4o0kFwx0i {\n  display: inline-block;\n  width: 900px;\n  box-sizing: border-box;\n  padding-right: 60px;\n  vertical-align: top; }\n\n.right_chy3wHrVCiZSM1rSuOibS {\n  display: inline-block;\n  width: 300px;\n  vertical-align: top; }\n",""]),t.locals={contianer:"contianer_3TatzCuKtWgyNhqDKFB6G3",left:"left_vBREnzOwjF_i4o0kFwx0i",right:"right_chy3wHrVCiZSM1rSuOibS"}},584:function(e,t,n){e.exports=n.p+"41ab14676e3d1ed6edd4c29a3b3e32fa.png"},585:function(e,t,n){e.exports=n.p+"25e99121816b1447e2efb2454220f79c.png"},586:function(e,t,n){e.exports=n.p+"adbb3100dba211aed0e92f6a94747f1a.png"},587:function(e,t,n){e.exports=n.p+"ef84e66415a2efe5b63f09ce793ab6f4.png"},588:function(e,t,n){e.exports=n.p+"ca8e392dbde5474fb96f0d8f33575a77.png"},589:function(e,t,n){e.exports=n.p+"ded8883be1926d31bcc051a9540fb93e.png"},590:function(e,t,n){e.exports=n.p+"99f44961351b5f50bf3dace986f00c35.jpg"},591:function(e,t,n){e.exports=n.p+"b6cbdecd07dde2b89dae1ac965dbe646.jpg"},592:function(e,t,n){e.exports=n.p+"a827a2704403bd6359c49e884aea1e2d.jpg"},593:function(e,t,n){e.exports=n.p+"fb890d5057febf0e9e8ceaf10b8d7f13.jpg"},780:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(398),b=(a(_),n(781)),x=a(b),v=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.course;if(!e||e.length<1)return"";e=e[0];var t=e.teacher.map(function(e,t){return g.default.createElement("a",{className:x.default.dubber,href:e.homepage,target:"_blank",key:t},g.default.createElement("div",{className:x.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("'+e.avatar+'")'}}),g.default.createElement("div",{className:x.default["dubber-title"]},g.default.createElement("div",{className:x.default["dubber-name"]},e.name),g.default.createElement("div",{className:x.default["dubber-desc"]},e.desc)))}),n=e.recruit_info.map(function(e,t){return g.default.createElement("div",{className:x.default.state,key:t},g.default.createElement("div",{className:x.default["state-label"]},e.info_title),g.default.createElement("div",{className:x.default["state-content"]},e.info_content))});return g.default.createElement("div",{className:""},g.default.createElement("div",{className:x.default.titles},g.default.createElement("div",{className:x.default["co-title"]},"正在招生课程"),g.default.createElement("div",{className:x.default.title},e.course_name),g.default.createElement("div",{className:x.default["sub-title"]},e.course_slogan)),g.default.createElement("div",{className:x.default.mod},g.default.createElement("div",{className:x.default["mod-title"]},"导师阵容"),g.default.createElement("div",{className:x.default.dubbers},t)),g.default.createElement("div",{className:x.default.mod},g.default.createElement("div",{className:x.default["mod-title"]},"招生信息"),g.default.createElement("div",{className:x.default.status},g.default.createElement("div",{className:x.default["mod-card"]},g.default.createElement("div",{className:x.default["mod-card-title"]},"招聘人数"),g.default.createElement("div",{className:x.default["mod-card-icon"]+" "+x.default["mod-card-icon--person"]}),g.default.createElement("div",{className:x.default["mod-card-content"]},e.students_number,"人")),g.default.createElement("div",{className:x.default["mod-card"]},g.default.createElement("div",{className:x.default["mod-card-title"]},"开课日期"),g.default.createElement("div",{className:x.default["mod-card-icon"]+" "+x.default["mod-card-icon--clock"]}),g.default.createElement("div",{className:x.default["mod-card-content"]+" "+x.default.highlight},e.start_date)),g.default.createElement("div",{className:x.default["mod-card"]},g.default.createElement("div",{className:x.default["mod-card-title"]},"报名截止日期"),g.default.createElement("div",{className:x.default["mod-card-icon"]+" "+x.default["mod-card-icon--date"]}),g.default.createElement("div",{className:x.default["mod-card-content"]+" "+x.default.highlight},e.deadline))),g.default.createElement("div",{className:x.default.states},n)),g.default.createElement("div",{className:x.default.mod},g.default.createElement("div",{className:x.default["mod-title"]},"招生简章"),g.default.createElement("div",{className:x.default["mod-p"]},g.default.createElement("div",{className:x.default["mod-p-title"]},"报名要求："),g.default.createElement("pre",{className:x.default["mod-p-content"]},e.require)),g.default.createElement("div",{className:x.default["mod-p"]},g.default.createElement("div",{className:x.default["mod-p-title"]},"课程安排："),g.default.createElement("pre",{className:x.default["mod-p-content"]},e.arrange))))}}]),t}(m.Component);t.default=v,e.exports=t.default},781:function(e,t,n){var a=n(782);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},782:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".highlight_1NvfFKKuZD0udq0Yei4FcY {\n  color: #b2804d !important; }\n\n.co-title_2Fk4j03xKkKxfaFEsRI75b {\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 10px; }\n\n.title_3SgnMKUdrruw9P7xEDr5WG {\n  font-size: 28px;\n  color: #333; }\n\n.sub-title_1PqppDcMpvbjwDxz91MFno {\n  font-size: 16px;\n  color: #999; }\n\n.titles_HCzNifdcK_-hlrVsZI1n9 {\n  border-bottom: 1px solid #f0f0f0; }\n\n.mod_3Hqle1AbXrgKX2Hfkt5VVl {\n  border-bottom: 1px solid #f0f0f0; }\n\n.mod-title_2nyxYC8XoGT02iT5JSoBb_ {\n  font-size: 18px;\n  color: #b2804d;\n  padding: 16px 0; }\n\n.dubbers_3w14yzwuo_5x2Kx8ONM-_A {\n  overflow: hidden;\n  padding-bottom: 12px; }\n\n.dubber_1mZWglAixfirlbhP1Wa841 {\n  display: block;\n  overflow: hidden;\n  float: left;\n  padding-right: 36px;\n  margin-bottom: 16px;\n  width: 50%;\n  box-sizing: border-box; }\n\n.dubber-avatar_2UTrPjZ0inZ6CuiC_PPghg {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  float: left; }\n\n.dubber-title_2yq6eH02Kx9ipjhdcPQFrh {\n  margin-left: 82px; }\n\n.dubber-name_3B6u2P3k_2XFG8mGXPuuZp {\n  font-size: 18px;\n  color: #333; }\n\n.dubber-desc_17AH3DhhS1coKx1rh21DoW {\n  font-size: 14px;\n  color: #b2804d; }\n\n.status_1jdl9Mdl9QYslIApID7PAI {\n  padding-bottom: 36px; }\n\n.mod-card_3zyWBjJF_HNigGYLFZerbO {\n  position: relative;\n  border: 1px solid #e8e8e8;\n  border-radius: 5px;\n  width: 168px;\n  height: 84px;\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 16px 8px;\n  margin-right: 18px; }\n\n.mod-card-title_V7tsNx0ICIUUgCP-cDJVY {\n  font-size: 14px;\n  color: #333; }\n\n.mod-card-content_2cn8PNHAC0jbP-4ZCnBoKV {\n  font-size: 14px;\n  color: #666;\n  margin-top: 10px; }\n\n.mod-card-icon_29rAYrgZNf-U1ZImjUgnm8 {\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  right: 8px;\n  top: 16px; }\n\n.mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO {\n  width: 15px;\n  height: 15px;\n  background-image: url("+a(n(584))+"); }\n\n.mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh {\n  width: 16px;\n  height: 16px;\n  background-image: url("+a(n(585))+"); }\n\n.mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD {\n  width: 16px;\n  height: 16px;\n  background-image: url("+a(n(586))+"); }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO {\n    background-image: url("+a(n(587))+"); }\n  .mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh {\n    background-image: url("+a(n(588))+"); }\n  .mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD {\n    background-image: url("+a(n(589))+"); } }\n\n.states_2XAFC6L-IZfo60X8sxYtXg {\n  padding-bottom: 20px; }\n\n.state_3fK8bop2vPXcAU-U8DcQY1 {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 20px; }\n\n.state-label_4SbIRnk-zN11gHWyxV7WV {\n  font-size: 16px;\n  color: #666;\n  float: left; }\n\n.state-content_pMUrkR8uK8a7bRkS48j2A {\n  font-size: 16px;\n  color: #333;\n  margin-left: 120px; }\n\n.mod-p-title_2EYun5eaQFm488TfHW1AEm {\n  font-size: 16px;\n  color: #666;\n  margin: 20px 0; }\n\n.mod-p-content_2Ts6qCOGok6km4FRHjlSh2 {\n  font-size: 16px;\n  line-height: 1.4em;\n  color: #999;\n  margin: 20px 0; }\n",""]),t.locals={highlight:"highlight_1NvfFKKuZD0udq0Yei4FcY","co-title":"co-title_2Fk4j03xKkKxfaFEsRI75b",title:"title_3SgnMKUdrruw9P7xEDr5WG","sub-title":"sub-title_1PqppDcMpvbjwDxz91MFno",titles:"titles_HCzNifdcK_-hlrVsZI1n9",mod:"mod_3Hqle1AbXrgKX2Hfkt5VVl","mod-title":"mod-title_2nyxYC8XoGT02iT5JSoBb_",dubbers:"dubbers_3w14yzwuo_5x2Kx8ONM-_A",dubber:"dubber_1mZWglAixfirlbhP1Wa841","dubber-avatar":"dubber-avatar_2UTrPjZ0inZ6CuiC_PPghg","dubber-title":"dubber-title_2yq6eH02Kx9ipjhdcPQFrh","dubber-name":"dubber-name_3B6u2P3k_2XFG8mGXPuuZp","dubber-desc":"dubber-desc_17AH3DhhS1coKx1rh21DoW",status:"status_1jdl9Mdl9QYslIApID7PAI","mod-card":"mod-card_3zyWBjJF_HNigGYLFZerbO","mod-card-title":"mod-card-title_V7tsNx0ICIUUgCP-cDJVY","mod-card-content":"mod-card-content_2cn8PNHAC0jbP-4ZCnBoKV","mod-card-icon":"mod-card-icon_29rAYrgZNf-U1ZImjUgnm8","mod-card-icon--person":"mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO","mod-card-icon--date":"mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh","mod-card-icon--clock":"mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD",states:"states_2XAFC6L-IZfo60X8sxYtXg",state:"state_3fK8bop2vPXcAU-U8DcQY1","state-label":"state-label_4SbIRnk-zN11gHWyxV7WV","state-content":"state-content_pMUrkR8uK8a7bRkS48j2A","mod-p-title":"mod-p-title_2EYun5eaQFm488TfHW1AEm","mod-p-content":"mod-p-content_2Ts6qCOGok6km4FRHjlSh2"}},783:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(385),i=a(o),l=n(38),r=a(l),d=n(41),c=a(d),u=n(39),s=a(u),f=n(40),p=a(f),m=n(0),g=a(m),_=n(398),b=(a(_),n(784)),x=a(b),v=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.previous,n=e.download;if(!t)return"";var a=t.map(function(e,t){var n={backgroundImage:'url("'+e.avatar+'")'};return g.default.createElement("a",{className:x.default.item,href:e.homepage,key:t,target:"_blank"},g.default.createElement("div",{className:x.default.avatar,style:n}),g.default.createElement("div",{className:x.default.name},e.name),g.default.createElement("div",{className:x.default.subname},e.desc))}),o=t.length>0?g.default.createElement("div",null,g.default.createElement("div",{className:x.default.title},"往期优秀学员"),g.default.createElement("div",{className:x.default.list},a)):"";console.info("download__",n);var i=n[0].password?g.default.createElement("div",{className:x.default["info-content"]},"要参加我们的培训班？",g.default.createElement("br",null),g.default.createElement("a",{href:n[0].link,target:"_blank",className:x.default.link},"点击这里")," (密码: ",n[0].password,") 下载资料"):g.default.createElement("div",{className:x.default["info-content"]},"要参加我们的培训班？",g.default.createElement("br",null),g.default.createElement("a",{href:n[0].link,target:"_blank",className:x.default.link},"点击这里"),"下载报名资料");return g.default.createElement("div",null,g.default.createElement("div",{className:x.default.info},i,g.default.createElement("div",{className:x.default["info-icon"]})),o)}}]),t}(m.Component);t.default=v,e.exports=t.default},784:function(e,t,n){var a=n(785);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(355)(a,o);a.locals&&(e.exports=a.locals)},785:function(e,t,n){var a=n(386);t=e.exports=n(354)(!1),t.push([e.i,".title_31QQzpRMxpHIjxEsJmrgJn {\n  font-size: 28px;\n  color: #333; }\n\n.subtitle_3I5aTZp2AgClanz3ozSh3c {\n  font-size: 14px;\n  color: #b2804d;\n  line-height: 24px; }\n\n.list_1Tq9gi1rCfoxS-NBrNEdP2 {\n  position: relative;\n  overflow: hidden; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW {\n  width: 144px;\n  float: left; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW:nth-child(2n) {\n  margin-left: 12px; }\n\n.avatar_kJJEk3udONJ6XiiMsP2WK {\n  width: 144px;\n  height: 138px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px; }\n\n.name_gJXo53V7G_25_vr4_gXdP {\n  font-size: 16px;\n  color: #1a1a1a;\n  text-align: center;\n  line-height: 28px; }\n\n.subname_2-670A65Ul9IWTXfVL1Rtw {\n  font-size: 14px;\n  color: #999;\n  text-align: center;\n  line-height: 26px; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW {\n  margin-top: 20px; }\n\n.info_2gp4wP-hLKziUuX31ogXox {\n  width: 100%;\n  border: 1px solid #e8e8e8;\n  padding: 20px; }\n\n.info-content_1emJKhHQPwk2S_XVyS5nC_ {\n  font-size: 14px;\n  color: #666; }\n\n.link_l_5k31n9Xj9DB2184Y65D {\n  font-size: 14px;\n  color: #b2804d;\n  padding-bottom: .1em;\n  border-bottom: 1px solid #b2804d; }\n\n.info_2gp4wP-hLKziUuX31ogXox {\n  position: relative;\n  margin-bottom: 52px; }\n\n.info-icon_u7pMgC-HxD4yR4p9y9VXg {\n  background-image: url("+a(n(590))+");\n  width: 51px;\n  height: 54px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 20px;\n  bottom: 20px; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .info-icon_u7pMgC-HxD4yR4p9y9VXg {\n    background-image: url("+a(n(591))+"); } }\n",""]),t.locals={title:"title_31QQzpRMxpHIjxEsJmrgJn",subtitle:"subtitle_3I5aTZp2AgClanz3ozSh3c",list:"list_1Tq9gi1rCfoxS-NBrNEdP2",item:"item_3Y1PINXmmrP5gkyCx42xrW",avatar:"avatar_kJJEk3udONJ6XiiMsP2WK",name:"name_gJXo53V7G_25_vr4_gXdP",subname:"subname_2-670A65Ul9IWTXfVL1Rtw",info:"info_2gp4wP-hLKziUuX31ogXox","info-content":"info-content_1emJKhHQPwk2S_XVyS5nC_",link:"link_l_5k31n9Xj9DB2184Y65D","info-icon":"info-icon_u7pMgC-HxD4yR4p9y9VXg"}}});