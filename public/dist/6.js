webpackJsonp([6],{337:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(t){return t.name===e}}function d(e,t){return e?e instanceof Array?e.find(l(t))||{}:e[t]||"":{}}function i(e){var t=e.sections,a=t.list,n=t.total,l=t.page;return{loading:e.loading.models.sections,list:a,total:n,page:l}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(343),r=n(o),c=a(35),u=n(c),s=a(38),f=n(s),m=a(36),p=n(m),b=a(37),g=n(b),x=a(0),_=n(x),v=a(151),h=a(361),E=n(h),N=a(486),k=n(N),w=a(364),y=n(w),P=a(483),z=n(P),j=a(690),K=n(j),C=a(699),M=n(C),F=a(704),X=n(F),S=a(705),A=n(S),B=a(355),U=n(B),I=function(e){function t(){return(0,u.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.list,n=(e.loading,d(a,"navigation").value),l=(d(a,"slider").value,d(a,"news").value,d(a,"dubbers").value,_.default.createElement(K.default,null)),i=_.default.createElement(M.default,null),o=[_.default.createElement(y.default,{fixed:!0,location:t,navs:n}),_.default.createElement(z.default,{bg:X.default,bg2x:A.default,title:"配音培训班"}),_.default.createElement(k.default,{left:l,right:i}),_.default.createElement(U.default,null)];return _.default.createElement(E.default,{sections:o})}}]),t}(x.Component);t.default=(0,v.connect)(i)(I),e.exports=t.default},343:function(e,t,a){e.exports={default:a(156),__esModule:!0}},344:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},346:function(e,t,a){"use strict";a(150)},349:function(e,t,a){var n=a(371);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},355:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(152),d=n(l),i=a(343),o=n(i),r=a(35),c=n(r),u=a(38),s=n(u),f=a(36),m=n(f),p=a(37),b=n(p);a(346);var g=a(0),x=n(g),_=a(356),v=n(_),h=(a(154),a(360)),E=n(h),N=function(e){function t(e){(0,c.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.toggleQR=a.toggleQR.bind(a),a.state={show:!1},a}return(0,b.default)(t,e),(0,s.default)(t,[{key:"toggleQR",value:function(){var e=this.state.show||!1;console.info("toggleQR__!",e,!e),this.setState({show:!e})}},{key:"render",value:function(){var e=this.toggleQR,t=this.state.show,a=(new Date).getFullYear();return x.default.createElement("div",{className:v.default.container,id:"contact"},x.default.createElement("div",{className:v.default.contact},x.default.createElement("div",{className:v.default.logo}),x.default.createElement("div",{className:v.default.way},x.default.createElement("div",{className:v.default["contact-title"]},"联系我们"),x.default.createElement("div",{className:v.default["contact-way"]},"电话：021-52527144"),x.default.createElement("div",{className:v.default["contact-way"]},"邮箱：springmedia@163.com")),x.default.createElement("div",{className:v.default.focus},x.default.createElement("div",{className:v.default["contact-title"]},"关注我们"),x.default.createElement("div",{className:v.default.wechatqrcode+(t?" "+v.default.show:"")},x.default.createElement("img",{className:v.default.qrcode,src:E.default,alt:""})),x.default.createElement("a",{href:"javasript:;",onClick:e,className:v.default.wechat+(t?" "+v.default.active:"")},x.default.createElement(d.default,{type:"wechat"})),x.default.createElement("a",{href:"https://weibo.com/springmedia",className:v.default.weibo,target:"_blank"},x.default.createElement(d.default,{type:"weibo"})))),x.default.createElement("p",{className:v.default.copyright},"Copyright © 1997-",a," Spring Media Ltd. All Rights Reserved."),x.default.createElement("p",{className:v.default.copyright},x.default.createElement("span",{className:v.default.gap},"沪ICP备16047667号"),x.default.createElement("span",null,"沪公网备31010702003953号")))}}]),t}(g.Component);t.default=N,e.exports=t.default},356:function(e,t,a){var n=a(357);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},357:function(e,t,a){var n=a(344);t=e.exports=a(324)(!1),t.push([e.i,".container_1Lkfxjvi0bNWMgaUqglmto {\n  width: 100%;\n  min-height: 50px;\n  padding: 66px 0 40px;\n  background: #1a1a1a;\n  color: #fafafa;\n  position: relative; }\n\n.contact_2RA1wZ1EiZ--1Q-oBuwKjJ {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-bottom: 60px; }\n\n.contact-title_2ApLUXW3l1nQgbYVKS-7 {\n  font-size: 18px;\n  color: #ccc;\n  padding-bottom: 26px; }\n\n.contact-way_36VZD04kSuH6cqTJhsCX7T {\n  font-size: 14px;\n  color: #fff; }\n\n.logo_3LjBNMDfpvGOFl_yIOfNAP {\n  width: 289px;\n  height: 99px;\n  background-size: contain;\n  background-image: url("+n(a(358))+");\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3LjBNMDfpvGOFl_yIOfNAP {\n    background-image: url("+n(a(359))+"); } }\n\n.copyright_3d72H7tK_BftER0XBVl_jw {\n  padding-top: 10px;\n  width: 960px;\n  margin: 0 auto;\n  text-align: center;\n  color: #aaa; }\n\n.focus_20nika0805fynjTqBCjP0c {\n  position: relative; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS,\n.weibo_30dOnxXSfrF9mAoHIfmPwe {\n  color: #eee;\n  font-size: 34px;\n  margin-right: 28px;\n  z-index: 2;\n  position: relative;\n  vertical-align: middle; }\n\n.wechat_2gvsGjxcBtt9cu6hU05nwS:hover, .wechat_2gvsGjxcBtt9cu6hU05nwS.active_2625rBPIfvFjNGK3RM8P83 {\n  color: #609700; }\n\n.weibo_30dOnxXSfrF9mAoHIfmPwe:hover {\n  color: #EA4225; }\n\n.wechatqrcode_rhKE1lWJO6Z78kQx1nGQp {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 56px;\n  top: -70px;\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 400ms;\n  border-radius: 2px;\n  pointer-events: none; }\n  .wechatqrcode_rhKE1lWJO6Z78kQx1nGQp:after {\n    content: '';\n    position: absolute;\n    bottom: -12px;\n    right: 44%;\n    border: 6px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.7); }\n\n.qrcode_1jbsC8dkrWRfvzMRH_c35c {\n  width: 100%; }\n\n.show_1PbMFvqTNpLJGpJ1SE6pGD {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.follow_1NoHkmbF4iAlMWYdYKanrE {\n  color: rgba(255, 255, 255, 0.7);\n  margin-right: 1em; }\n\n.gap_2Kgf6iamJNUNor9ad83OuE {\n  margin-right: 1.7em; }\n",""]),t.locals={container:"container_1Lkfxjvi0bNWMgaUqglmto",contact:"contact_2RA1wZ1EiZ--1Q-oBuwKjJ","contact-title":"contact-title_2ApLUXW3l1nQgbYVKS-7","contact-way":"contact-way_36VZD04kSuH6cqTJhsCX7T",logo:"logo_3LjBNMDfpvGOFl_yIOfNAP",copyright:"copyright_3d72H7tK_BftER0XBVl_jw",focus:"focus_20nika0805fynjTqBCjP0c",wechat:"wechat_2gvsGjxcBtt9cu6hU05nwS",weibo:"weibo_30dOnxXSfrF9mAoHIfmPwe",active:"active_2625rBPIfvFjNGK3RM8P83",wechatqrcode:"wechatqrcode_rhKE1lWJO6Z78kQx1nGQp",qrcode:"qrcode_1jbsC8dkrWRfvzMRH_c35c",show:"show_1PbMFvqTNpLJGpJ1SE6pGD",follow:"follow_1NoHkmbF4iAlMWYdYKanrE",gap:"gap_2Kgf6iamJNUNor9ad83OuE"}},358:function(e,t,a){e.exports=a.p+"15d15bb956be66fed3979640457b08e3.png"},359:function(e,t,a){e.exports=a.p+"530c222433ad690286417f4fd491e73d.png"},360:function(e,t,a){e.exports=a.p+"b981dac5c6e6d95626aa94a65daabf7f.jpg"},361:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(362),x=(n(g),function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.map(function(e,t){return b.default.createElement("div",{key:t},e)});return b.default.createElement("div",null,t)}}]),t}(p.Component));t.default=x,e.exports=t.default},362:function(e,t,a){var n=a(363);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},363:function(e,t,a){t=e.exports=a(324)(!1),t.push([e.i,"",""])},364:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(365),x=n(g),_=a(369),v=(n(_),function(e){function t(e){(0,o.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return a.navigation=b.default.createRef(),a.state={},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.triggerFixedElementSelector&&window.addEventListener("scroll",this.fixNavigationBar.bind(this))}},{key:"fixNavigationBar",value:function(){var e=this.props.triggerFixedElementSelector,t=document.querySelector(e),a=t.offsetTop+t.offsetHeight,n=this.navigation.current.offsetHeight;if(document.documentElement.scrollTop>a-n)return this.setState({navigationBarFixed:!0});this.setState({navigationBarFixed:!1})}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.navs,n=e.fixed,l=this.state.navigationBarFixed,d=(a||[]).map(function(e,a){var n=-1!=t.pathname.indexOf(e.link)?x.default.item+" "+x.default.cur:x.default.item;return b.default.createElement("a",{href:e.link,key:a,className:n},e.title)}),i=l?x.default.wraper+" "+x.default.fixed:""+x.default.wraper;return n&&(i=x.default.wraper+" "+x.default.static),b.default.createElement("div",{className:i,ref:this.navigation},b.default.createElement("div",{className:x.default.list},b.default.createElement("a",{href:"",className:x.default.logo}),b.default.createElement("div",{className:x.default.items},d)))}}]),t}(p.Component));t.default=v,e.exports=t.default},365:function(e,t,a){var n=a(366);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},366:function(e,t,a){var n=a(344);t=e.exports=a(324)(!1),t.push([e.i,".wraper__sPE1r1EZFBHNEc-ruty0 {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  transition: 400ms; }\n\n.fixed_14YMhzbgzW6eFKXzm8m72O {\n  background: #1a1a1a; }\n  .fixed_14YMhzbgzW6eFKXzm8m72O .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.static_2VQr_BPhAN1lFxOU_ncbob {\n  position: static;\n  background: #1a1a1a; }\n  .static_2VQr_BPhAN1lFxOU_ncbob .list_1u4UqLS4eYSv-AciPCQuyK {\n    padding: 8px 0; }\n\n.logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n  width: 132px;\n  height: 45px;\n  display: inline-block;\n  background-image: url("+n(a(367))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .logo_3G39Cp8Mp7p9VJB_O08Nc0 {\n    background-image: url("+n(a(368))+"); } }\n\n.list_1u4UqLS4eYSv-AciPCQuyK {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  background: transparent;\n  padding-top: 24px;\n  padding-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  transition: 400ms; }\n\n.item_uj7NWTTeT-ql8S2rVfTed {\n  color: #ccc;\n  font-size: 16px;\n  margin: 0 17px; }\n\n.cur_1Drw5Qxfg2nWlxdoEFeM5Y,\n.item_uj7NWTTeT-ql8S2rVfTed:hover {\n  color: #fff; }\n",""]),t.locals={wraper:"wraper__sPE1r1EZFBHNEc-ruty0",fixed:"fixed_14YMhzbgzW6eFKXzm8m72O",list:"list_1u4UqLS4eYSv-AciPCQuyK",static:"static_2VQr_BPhAN1lFxOU_ncbob",logo:"logo_3G39Cp8Mp7p9VJB_O08Nc0",item:"item_uj7NWTTeT-ql8S2rVfTed",cur:"cur_1Drw5Qxfg2nWlxdoEFeM5Y"}},367:function(e,t,a){e.exports=a.p+"a4d902d9298f044d543234d1ae5b11d3.png"},368:function(e,t,a){e.exports=a.p+"cd6d388cf77c8645c7b80ddea25c6823.png"},369:function(e,t,a){e.exports=a.p+"8401e7566c4eb1504d92683fe97ad833.png"},371:function(e,t,a){var n=a(344);t=e.exports=a(324)(!1),t.push([e.i,".tag_jqzc8Va2wKUUt2zeu3mpZ {\n  width: 20px;\n  height: 13px;\n  background-image: url("+n(a(372))+");\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .tag_jqzc8Va2wKUUt2zeu3mpZ {\n    background-image: url("+n(a(373))+"); } }\n\nimg {\n  max-width: 100%; }\n\n.container_2LkQ5MLt-xJszr6hy7I1Vg {\n  /*width: 63%;*/\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 60px;\n  padding-bottom: 90px; }\n\n.title_26hq9hDolnMkdGQhV4l8Mv {\n  padding: 15px 0;\n  font-size: 28px;\n  color: #333; }\n",""]),t.locals={tag:"tag_jqzc8Va2wKUUt2zeu3mpZ",container:"container_2LkQ5MLt-xJszr6hy7I1Vg",title:"title_26hq9hDolnMkdGQhV4l8Mv"}},372:function(e,t,a){e.exports=a.p+"fb3d0606740b76a286d7057c031bd474.png"},373:function(e,t,a){e.exports=a.p+"b62ff30214fe84956a27b87b138b855b.png"},483:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(484),x=n(g),_=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.bg,n=e.bg2x;console.info("CompositionBanner",a,n);var l=2===window.devicePixelRatio?n:a;return b.default.createElement("div",{style:{backgroundImage:"url("+l+")"},className:x.default.container},b.default.createElement("div",{className:x.default.title},t))}}]),t}(p.Component);t.default=_,e.exports=t.default},484:function(e,t,a){var n=a(485);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},485:function(e,t,a){t=e.exports=a(324)(!1),t.push([e.i,".container_jb1YFWCuvX_fcNxmm57pB {\n  width: 100%;\n  height: 170px;\n  /*background-image: url('../../../assets/list_banner_bg.jpg');*/\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .container_jb1YFWCuvX_fcNxmm57pB {\n    /*background-image: url('../../../assets/list_banner_bg_2x.jpg');*/ } }\n\n.title_3kcaSIRr6Fz4kXMy231aFr {\n  font-size: 60px;\n  color: #fff;\n  font-weight: 700;\n  text-align: center; }\n",""]),t.locals={container:"container_jb1YFWCuvX_fcNxmm57pB",title:"title_3kcaSIRr6Fz4kXMy231aFr"}},486:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(349),x=n(g),_=a(487),v=n(_),h=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.left,a=e.right;return b.default.createElement("div",{className:x.default.container+" "+v.default.contianer},b.default.createElement("div",{className:v.default.left},t),b.default.createElement("div",{className:v.default.right},a))}}]),t}(p.Component);t.default=h,e.exports=t.default},487:function(e,t,a){var n=a(488);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},488:function(e,t,a){t=e.exports=a(324)(!1),t.push([e.i,".contianer_3TatzCuKtWgyNhqDKFB6G3 {\n  position: relative;\n  overflow: hidden;\n  font-size: 0; }\n\n.left_vBREnzOwjF_i4o0kFwx0i {\n  display: inline-block;\n  width: 900px;\n  box-sizing: border-box;\n  padding-right: 60px;\n  vertical-align: top; }\n\n.right_chy3wHrVCiZSM1rSuOibS {\n  display: inline-block;\n  width: 300px;\n  vertical-align: top; }\n",""]),t.locals={contianer:"contianer_3TatzCuKtWgyNhqDKFB6G3",left:"left_vBREnzOwjF_i4o0kFwx0i",right:"right_chy3wHrVCiZSM1rSuOibS"}},690:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(349),x=(n(g),a(691)),_=n(x),v=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return b.default.createElement("div",{className:""},b.default.createElement("div",{className:_.default.titles},b.default.createElement("div",{className:_.default["co-title"]},"正在招生课程"),b.default.createElement("div",{className:_.default.title},"配音培训班第20期"),b.default.createElement("div",{className:_.default["sub-title"]},"欢迎热爱配音的你来参加")),b.default.createElement("div",{className:_.default.mod},b.default.createElement("div",{className:_.default["mod-title"]},"导师阵容"),b.default.createElement("div",{className:_.default.dubbers},b.default.createElement("a",{className:_.default.dubber,href:"https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent"},b.default.createElement("div",{className:_.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")'}}),b.default.createElement("div",{className:_.default["dubber-title"]},b.default.createElement("div",{className:_.default["dubber-name"]},"徐敏"),b.default.createElement("div",{className:_.default["dubber-desc"]},"香港国语著名配音演员"))),b.default.createElement("a",{className:_.default.dubber,href:"https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent"},b.default.createElement("div",{className:_.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")'}}),b.default.createElement("div",{className:_.default["dubber-title"]},b.default.createElement("div",{className:_.default["dubber-name"]},"徐敏"),b.default.createElement("div",{className:_.default["dubber-desc"]},"香港国语著名配音演员"))),b.default.createElement("a",{className:_.default.dubber,href:"https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent"},b.default.createElement("div",{className:_.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")'}}),b.default.createElement("div",{className:_.default["dubber-title"]},b.default.createElement("div",{className:_.default["dubber-name"]},"徐敏"),b.default.createElement("div",{className:_.default["dubber-desc"]},"香港国语著名配音演员"))),b.default.createElement("a",{className:_.default.dubber,href:"https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent"},b.default.createElement("div",{className:_.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")'}}),b.default.createElement("div",{className:_.default["dubber-title"]},b.default.createElement("div",{className:_.default["dubber-name"]},"徐敏"),b.default.createElement("div",{className:_.default["dubber-desc"]},"香港国语著名配音演员"))),b.default.createElement("a",{className:_.default.dubber,href:"https://baike.baidu.com/item/%E5%BE%90%E6%95%8F/5834561#viewPageContent"},b.default.createElement("div",{className:_.default["dubber-avatar"],target:"_blank",style:{backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/xm1.jpg")'}}),b.default.createElement("div",{className:_.default["dubber-title"]},b.default.createElement("div",{className:_.default["dubber-name"]},"徐敏"),b.default.createElement("div",{className:_.default["dubber-desc"]},"香港国语著名配音演员"))))),b.default.createElement("div",{className:_.default.mod},b.default.createElement("div",{className:_.default["mod-title"]},"招生信息"),b.default.createElement("div",{className:_.default.status},b.default.createElement("div",{className:_.default["mod-card"]},b.default.createElement("div",{className:_.default["mod-card-title"]},"招聘人数"),b.default.createElement("div",{className:_.default["mod-card-icon"]+" "+_.default["mod-card-icon--person"]}),b.default.createElement("div",{className:_.default["mod-card-content"]},"20人")),b.default.createElement("div",{className:_.default["mod-card"]},b.default.createElement("div",{className:_.default["mod-card-title"]},"开课日期"),b.default.createElement("div",{className:_.default["mod-card-icon"]+" "+_.default["mod-card-icon--clock"]}),b.default.createElement("div",{className:_.default["mod-card-content"]+" "+_.default.highlight},"2018.04.08")),b.default.createElement("div",{className:_.default["mod-card"]},b.default.createElement("div",{className:_.default["mod-card-title"]},"报名截止日期"),b.default.createElement("div",{className:_.default["mod-card-icon"]+" "+_.default["mod-card-icon--date"]}),b.default.createElement("div",{className:_.default["mod-card-content"]+" "+_.default.highlight},"2018.05.01"))),b.default.createElement("div",{className:_.default.states},b.default.createElement("div",{className:_.default.state},b.default.createElement("div",{className:_.default["state-label"]},"录取名额"),b.default.createElement("div",{className:_.default["state-content"]},"择优录取，每班不超过20人")),b.default.createElement("div",{className:_.default.state},b.default.createElement("div",{className:_.default["state-label"]},"授课时间"),b.default.createElement("div",{className:_.default["state-content"]},"周六全天 周日上午： 上午9:00 —— 20：30（中间有休息时间）")),b.default.createElement("div",{className:_.default.state},b.default.createElement("div",{className:_.default["state-label"]},"报名截止"),b.default.createElement("div",{className:_.default["state-content"]},"报名截止日期为：2018年5月1日")),b.default.createElement("div",{className:_.default.state},b.default.createElement("div",{className:_.default["state-label"]},"其他说明"),b.default.createElement("div",{className:_.default["state-content"]},"具体上课老师以实际安排为准")))),b.default.createElement("div",{className:_.default.mod},b.default.createElement("div",{className:_.default["mod-title"]},"招生简章"),b.default.createElement("div",{className:_.default["mod-p"]},b.default.createElement("div",{className:_.default["mod-p-title"]},"报名要求："),b.default.createElement("p",{className:_.default["mod-p-content"]},"1、热爱配音；",b.default.createElement("br",null),"2、普通话标准流畅；",b.default.createElement("br",null),"3、年满16周岁，无专业和基础限制。")),b.default.createElement("div",{className:_.default["mod-p"]},b.default.createElement("div",{className:_.default["mod-p-title"]},"课程安排："),b.default.createElement("p",{className:_.default["mod-p-content"]},"1、周末班开课时间：2018年3月中上旬。",b.default.createElement("br",null),"2、录取名额：择优录取，每班不超过20人。",b.default.createElement("br",null),"3、授课时间：周六全天 周日上午： 上午9:00 —— 20：30（中间有休息时间）",b.default.createElement("br",null),"4、授课地点：上海市普陀区江宁路1306弄富丽大厦1602室（13号线地铁江宁路，学员食宿需自理）",b.default.createElement("br",null),"5、培训费用：10,000 RMB",b.default.createElement("br",null)))))}}]),t}(p.Component);t.default=v,e.exports=t.default},691:function(e,t,a){var n=a(692);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},692:function(e,t,a){var n=a(344);t=e.exports=a(324)(!1),t.push([e.i,".highlight_1NvfFKKuZD0udq0Yei4FcY {\n  color: #b2804d !important; }\n\n.co-title_2Fk4j03xKkKxfaFEsRI75b {\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 10px; }\n\n.title_3SgnMKUdrruw9P7xEDr5WG {\n  font-size: 28px;\n  color: #333; }\n\n.sub-title_1PqppDcMpvbjwDxz91MFno {\n  font-size: 16px;\n  color: #999; }\n\n.titles_HCzNifdcK_-hlrVsZI1n9 {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f0f0; }\n\n.mod_3Hqle1AbXrgKX2Hfkt5VVl {\n  border-bottom: 1px solid #f0f0f0; }\n\n.mod-title_2nyxYC8XoGT02iT5JSoBb_ {\n  font-size: 18px;\n  color: #b2804d;\n  padding: 16px 0; }\n\n.dubbers_3w14yzwuo_5x2Kx8ONM-_A {\n  overflow: hidden;\n  padding-bottom: 12px; }\n\n.dubber_1mZWglAixfirlbhP1Wa841 {\n  display: block;\n  overflow: hidden;\n  float: left;\n  margin-right: 36px;\n  margin-bottom: 16px; }\n\n.dubber-avatar_2UTrPjZ0inZ6CuiC_PPghg {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  float: left; }\n\n.dubber-title_2yq6eH02Kx9ipjhdcPQFrh {\n  margin-left: 82px;\n  padding-top: 15px; }\n\n.dubber-name_3B6u2P3k_2XFG8mGXPuuZp {\n  font-size: 18px;\n  color: #333; }\n\n.dubber-desc_17AH3DhhS1coKx1rh21DoW {\n  font-size: 14px;\n  color: #b2804d; }\n\n.status_1jdl9Mdl9QYslIApID7PAI {\n  padding-bottom: 36px; }\n\n.mod-card_3zyWBjJF_HNigGYLFZerbO {\n  position: relative;\n  border: 1px solid #e8e8e8;\n  border-radius: 5px;\n  width: 168px;\n  height: 84px;\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 16px 8px;\n  margin-right: 18px; }\n\n.mod-card-title_V7tsNx0ICIUUgCP-cDJVY {\n  font-size: 14px;\n  color: #333; }\n\n.mod-card-content_2cn8PNHAC0jbP-4ZCnBoKV {\n  font-size: 14px;\n  color: #666;\n  margin-top: 10px; }\n\n.mod-card-icon_29rAYrgZNf-U1ZImjUgnm8 {\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  right: 8px;\n  top: 16px; }\n\n.mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO {\n  width: 15px;\n  height: 15px;\n  background-image: url("+n(a(693))+"); }\n\n.mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh {\n  width: 16px;\n  height: 16px;\n  background-image: url("+n(a(694))+"); }\n\n.mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD {\n  width: 16px;\n  height: 16px;\n  background-image: url("+n(a(695))+"); }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO {\n    background-image: url("+n(a(696))+"); }\n  .mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh {\n    background-image: url("+n(a(697))+"); }\n  .mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD {\n    background-image: url("+n(a(698))+"); } }\n\n.states_2XAFC6L-IZfo60X8sxYtXg {\n  padding-bottom: 20px; }\n\n.state_3fK8bop2vPXcAU-U8DcQY1 {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 20px; }\n\n.state-label_4SbIRnk-zN11gHWyxV7WV {\n  font-size: 16px;\n  color: #666;\n  float: left; }\n\n.state-content_pMUrkR8uK8a7bRkS48j2A {\n  font-size: 16px;\n  color: #333;\n  margin-left: 120px; }\n\n.mod-p-title_2EYun5eaQFm488TfHW1AEm {\n  font-size: 16px;\n  color: #666;\n  margin: 20px 0; }\n\n.mod-p-content_2Ts6qCOGok6km4FRHjlSh2 {\n  font-size: 16px;\n  line-height: 1.4em;\n  color: #999;\n  margin: 20px 0; }\n",""]),t.locals={highlight:"highlight_1NvfFKKuZD0udq0Yei4FcY","co-title":"co-title_2Fk4j03xKkKxfaFEsRI75b",title:"title_3SgnMKUdrruw9P7xEDr5WG","sub-title":"sub-title_1PqppDcMpvbjwDxz91MFno",titles:"titles_HCzNifdcK_-hlrVsZI1n9",mod:"mod_3Hqle1AbXrgKX2Hfkt5VVl","mod-title":"mod-title_2nyxYC8XoGT02iT5JSoBb_",dubbers:"dubbers_3w14yzwuo_5x2Kx8ONM-_A",dubber:"dubber_1mZWglAixfirlbhP1Wa841","dubber-avatar":"dubber-avatar_2UTrPjZ0inZ6CuiC_PPghg","dubber-title":"dubber-title_2yq6eH02Kx9ipjhdcPQFrh","dubber-name":"dubber-name_3B6u2P3k_2XFG8mGXPuuZp","dubber-desc":"dubber-desc_17AH3DhhS1coKx1rh21DoW",status:"status_1jdl9Mdl9QYslIApID7PAI","mod-card":"mod-card_3zyWBjJF_HNigGYLFZerbO","mod-card-title":"mod-card-title_V7tsNx0ICIUUgCP-cDJVY","mod-card-content":"mod-card-content_2cn8PNHAC0jbP-4ZCnBoKV","mod-card-icon":"mod-card-icon_29rAYrgZNf-U1ZImjUgnm8","mod-card-icon--person":"mod-card-icon--person_1PnGK9SCiXwMU3tGy-uePO","mod-card-icon--date":"mod-card-icon--date_3PAW8clfuTENDDI0ifKmVh","mod-card-icon--clock":"mod-card-icon--clock_1vYKq-kUOKaA-vjxUXs7dD",states:"states_2XAFC6L-IZfo60X8sxYtXg",state:"state_3fK8bop2vPXcAU-U8DcQY1","state-label":"state-label_4SbIRnk-zN11gHWyxV7WV","state-content":"state-content_pMUrkR8uK8a7bRkS48j2A","mod-p-title":"mod-p-title_2EYun5eaQFm488TfHW1AEm","mod-p-content":"mod-p-content_2Ts6qCOGok6km4FRHjlSh2"}},693:function(e,t,a){e.exports=a.p+"41ab14676e3d1ed6edd4c29a3b3e32fa.png"},694:function(e,t,a){e.exports=a.p+"25e99121816b1447e2efb2454220f79c.png"},695:function(e,t,a){e.exports=a.p+"adbb3100dba211aed0e92f6a94747f1a.png"},696:function(e,t,a){e.exports=a.p+"ef84e66415a2efe5b63f09ce793ab6f4.png"},697:function(e,t,a){e.exports=a.p+"ca8e392dbde5474fb96f0d8f33575a77.png"},698:function(e,t,a){e.exports=a.p+"ded8883be1926d31bcc051a9540fb93e.png"},699:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(343),d=n(l),i=a(35),o=n(i),r=a(38),c=n(r),u=a(36),s=n(u),f=a(37),m=n(f),p=a(0),b=n(p),g=a(349),x=(n(g),a(700)),_=n(x),v=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e={backgroundImage:'url("http://oezn2ph4e.bkt.clouddn.com/yt1.jpg")'};return b.default.createElement("div",null,b.default.createElement("div",{className:_.default.info},b.default.createElement("div",{className:_.default["info-content"]},"要参加我们的培训班？",b.default.createElement("br",null),b.default.createElement("a",{href:"",className:_.default.link},"点击这里"),"去下载报名资料"),b.default.createElement("div",{className:_.default["info-icon"]})),b.default.createElement("div",{className:_.default.title},"往期优秀学员"),b.default.createElement("div",{className:_.default.list},b.default.createElement("div",{className:_.default.item},b.default.createElement("div",{className:_.default.avatar,style:e}),b.default.createElement("div",{className:_.default.name},"张昱"),b.default.createElement("div",{className:_.default.subname},"清泉配音演员、导演")),b.default.createElement("div",{className:_.default.item},b.default.createElement("div",{className:_.default.avatar,style:e}),b.default.createElement("div",{className:_.default.name},"张昱"),b.default.createElement("div",{className:_.default.subname},"清泉配音演员、导演"))))}}]),t}(p.Component);t.default=v,e.exports=t.default},700:function(e,t,a){var n=a(701);"string"==typeof n&&(n=[[e.i,n,""]]);var l={};l.transform=void 0;a(325)(n,l);n.locals&&(e.exports=n.locals)},701:function(e,t,a){var n=a(344);t=e.exports=a(324)(!1),t.push([e.i,".title_31QQzpRMxpHIjxEsJmrgJn {\n  font-size: 28px;\n  color: #333; }\n\n.subtitle_3I5aTZp2AgClanz3ozSh3c {\n  font-size: 14px;\n  color: #b2804d;\n  line-height: 24px; }\n\n.list_1Tq9gi1rCfoxS-NBrNEdP2 {\n  position: relative;\n  overflow: hidden; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW {\n  width: 144px;\n  float: left; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW:nth-child(2n) {\n  margin-left: 12px; }\n\n.avatar_kJJEk3udONJ6XiiMsP2WK {\n  width: 144px;\n  height: 138px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px; }\n\n.name_gJXo53V7G_25_vr4_gXdP {\n  font-size: 16px;\n  color: #1a1a1a;\n  text-align: center;\n  line-height: 28px; }\n\n.subname_2-670A65Ul9IWTXfVL1Rtw {\n  font-size: 14px;\n  color: #999;\n  text-align: center;\n  line-height: 26px; }\n\n.item_3Y1PINXmmrP5gkyCx42xrW {\n  margin-top: 20px; }\n\n.info_2gp4wP-hLKziUuX31ogXox {\n  width: 100%;\n  border: 1px solid #e8e8e8;\n  padding: 20px; }\n\n.info-content_1emJKhHQPwk2S_XVyS5nC_ {\n  font-size: 14px;\n  color: #666; }\n\n.link_l_5k31n9Xj9DB2184Y65D {\n  font-size: 14px;\n  color: #b2804d;\n  padding-bottom: .1em;\n  border-bottom: 1px solid #b2804d; }\n\n.info_2gp4wP-hLKziUuX31ogXox {\n  position: relative;\n  margin-bottom: 52px; }\n\n.info-icon_u7pMgC-HxD4yR4p9y9VXg {\n  background-image: url("+n(a(702))+");\n  width: 51px;\n  height: 54px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 20px;\n  bottom: 20px; }\n\n@media (device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .info-icon_u7pMgC-HxD4yR4p9y9VXg {\n    background-image: url("+n(a(703))+"); } }\n",""]),t.locals={title:"title_31QQzpRMxpHIjxEsJmrgJn",subtitle:"subtitle_3I5aTZp2AgClanz3ozSh3c",list:"list_1Tq9gi1rCfoxS-NBrNEdP2",item:"item_3Y1PINXmmrP5gkyCx42xrW",avatar:"avatar_kJJEk3udONJ6XiiMsP2WK",name:"name_gJXo53V7G_25_vr4_gXdP",subname:"subname_2-670A65Ul9IWTXfVL1Rtw",info:"info_2gp4wP-hLKziUuX31ogXox","info-content":"info-content_1emJKhHQPwk2S_XVyS5nC_",link:"link_l_5k31n9Xj9DB2184Y65D","info-icon":"info-icon_u7pMgC-HxD4yR4p9y9VXg"}},702:function(e,t,a){e.exports=a.p+"99f44961351b5f50bf3dace986f00c35.jpg"},703:function(e,t,a){e.exports=a.p+"b6cbdecd07dde2b89dae1ac965dbe646.jpg"},704:function(e,t,a){e.exports=a.p+"a827a2704403bd6359c49e884aea1e2d.jpg"},705:function(e,t,a){e.exports=a.p+"fb890d5057febf0e9e8ceaf10b8d7f13.jpg"}});