webpackJsonp([0],{26:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(624),a=n(o),i=r(42),s=n(i),u=r(643),c=n(u),f=r(645),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(f);e.default={namespace:"sections",state:{list:[],total:null,page:null},reducers:{save:function(t,e){var r=e.payload,n=r.data,o=r.total,a=r.page;return(0,s.default)({},t,{list:n,total:o,page:a})}},effects:{fetch:a.default.mark(function t(e,r){var n,o,i,s=e.payload.page,u=void 0===s?1:s,c=r.call,f=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(d.fetch);case 2:return n=t.sent,o=n.data,i=n.headers,t.next=7,f({type:"save",payload:{data:o,total:parseInt(i["x-total-count"],10),page:parseInt(u,10)}});case 7:case"end":return t.stop()}},t,this)}),remove:a.default.mark(function t(e,r){var n=e.payload,o=r.call,i=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(d.remove,n);case 2:return t.next=4,i({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),removeItem:a.default.mark(function t(e,r){var n=e.payload,o=n.index,i=n.id,s=r.call,u=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(d.removeItem,{index:o,id:i});case 2:return t.next=4,u({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),patch:a.default.mark(function t(e,r){var n=e.payload,o=r.call,i=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(d.patch,n);case 2:return t.next=4,i({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),create:a.default.mark(function t(e,r){var n=e.payload,o=r.call,i=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.info("*create_put",n),t.next=3,o(d.create,n);case 3:return t.next=5,i({type:"reload"});case 5:case"end":return t.stop()}},t,this)}),reload:a.default.mark(function t(e,r){var n,o=r.put,i=r.select;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.sections});case 2:return n=t.sent,t.next=5,o({type:"fetch",payload:{page:1}});case 5:case"end":return t.stop()}},t,this)})},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){var r=(t.pathname,t.search),n=c.default.parse(r);e({type:"fetch",payload:n})})}}},t.exports=e.default},624:function(t,e,r){t.exports=r(94)},643:function(t,e,r){"use strict";function n(t){switch(t.arrayFormat){case"index":return function(e,r,n){return null===r?[a(e,t),"[",n,"]"].join(""):[a(e,t),"[",a(n,t),"]=",a(r,t)].join("")};case"bracket":return function(e,r){return null===r?a(e,t):[a(e,t),"[]=",a(r,t)].join("")};default:return function(e,r){return null===r?a(e,t):[a(e,t),"=",a(r,t)].join("")}}}function o(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(n[t]=r);void 0===n[t]&&(n[t]={}),n[t][e[1]]=r};case"bracket":return function(t,r,n){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===n[t]?void(n[t]=[r]):void(n[t]=[].concat(n[t],r)):void(n[t]=r)};default:return function(t,e,r){if(void 0===r[t])return void(r[t]=e);r[t]=[].concat(r[t],e)}}}function a(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function i(t){return Array.isArray(t)?t.sort():"object"==typeof t?i(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var s=r(644),u=r(91);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=u({arrayFormat:"none"},e);var r=o(e),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),a=e.length>0?e.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),r(decodeURIComponent(o),a,n)}),Object.keys(n).sort().reduce(function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=i(r):t[e]=r,t},Object.create(null))):n},e.stringify=function(t,e){e=u({encode:!0,strict:!0,arrayFormat:"none"},e);var r=n(e);return t?Object.keys(t).sort().map(function(n){var o=t[n];if(void 0===o)return"";if(null===o)return a(n,e);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(t){void 0!==t&&i.push(r(n,t,i.length))}),i.join("&")}return a(n,e)+"="+a(o,e)}).filter(function(t){return t.length>0}).join("&"):""}},644:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},645:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(){return(0,l.default)("/api/sections")}function a(t){return(0,l.default)("/api/section",{method:"DELETE",body:(0,f.default)(t)})}function i(t,e){return(0,l.default)("/api/section_value",{method:"DELETE",body:(0,f.default)(t,e)})}function s(t){return(0,l.default)("/api/section",{method:"PATCH",body:(0,f.default)(t)})}function u(t){return(0,l.default)("/api/sections",{method:"POST",body:(0,f.default)(t)})}Object.defineProperty(e,"__esModule",{value:!0});var c=r(646),f=n(c);e.fetch=o,e.remove=a,e.removeItem=i,e.patch=s,e.create=u;var d=r(648),l=n(d);r(654)},646:function(t,e,r){t.exports={default:r(647),__esModule:!0}},647:function(t,e,r){var n=r(1),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},648:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}Object.defineProperty(e,"__esModule",{value:!0});var a=r(624),i=n(a),s=r(169),u=n(s),c=r(649),f=n(c),d=r(651),l=n(d);e.default=function(){function t(t,r){return e.apply(this,arguments)}var e=(0,f.default)(i.default.mark(function t(e,r){var n,a,s,c,f;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Headers({"Content-Type":"application/json"}),a=(0,u.default)({},r,{headers:n}),t.next=4,(0,l.default)(e,a);case 4:return s=t.sent,o(s),t.next=8,s.json();case 8:return c=t.sent,f={data:c,headers:{}},s.headers.get("x-total-count")&&(f.headers["x-total-count"]=s.headers.get("x-total-count")),t.abrupt("return",f);case 12:case"end":return t.stop()}},t,this)}));return t}(),t.exports=e.default},649:function(t,e,r){"use strict";e.__esModule=!0;var n=r(650),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(a,i){try{var s=e[a](i),u=s.value}catch(t){return void r(t)}if(!s.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},650:function(t,e,r){t.exports={default:r(95),__esModule:!0}},651:function(t,e,r){t.exports=r(652)},652:function(t,e,r){r(653),t.exports=self.fetch.bind(self)},653:function(t,e,r){"use strict";function n(t){return t&&DataView.prototype.isPrototypeOf(t)}function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function i(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return _.iterable&&(e[Symbol.iterator]=function(){return e}),e}function s(t){this.map={},t instanceof s?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function d(t){var e=new FileReader,r=c(e);return e.readAsText(t),r}function l(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:_.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:_.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:_.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():_.arrayBuffer&&_.blob&&n(t)?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):_.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||A(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):_.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},_.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return d(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},_.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return E.indexOf(e)>-1?e:t}function b(t,e){e=e||{};var r=e.body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new s;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new s(e.headers),this.url=e.url||"",this._initBody(t)}function x(t,e){return new Promise(function(r,n){function o(){i.abort()}var a=new b(t,e);if(a.signal&&a.signal.aborted)return n(new T("Aborted","AbortError"));var i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new w(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new T("Aborted","AbortError"))},i.open(a.method,a.url,!0),"include"===a.credentials?i.withCredentials=!0:"omit"===a.credentials&&(i.withCredentials=!1),"responseType"in i&&_.blob&&(i.responseType="blob"),a.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),a.signal&&(a.signal.addEventListener("abort",o),i.onreadystatechange=function(){4===i.readyState&&a.signal.removeEventListener("abort",o)}),i.send(void 0===a._bodyInit?null:a._bodyInit)})}Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=s,e.Request=b,e.Response=w,r.d(e,"DOMException",function(){return T}),e.fetch=x;var _={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(_.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],A=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};s.prototype.append=function(t,e){t=o(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},s.prototype.delete=function(t){delete this.map[o(t)]},s.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},s.prototype.set=function(t,e){this.map[o(t)]=a(e)},s.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},s.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),i(t)},s.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),i(t)},s.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),i(t)},_.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},h.call(b.prototype),h.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];w.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},T.prototype=Object.create(Error.prototype),T.prototype.constructor=T}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=s,self.Request=b,self.Response=w)},654:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PAGE_SIZE=3}});