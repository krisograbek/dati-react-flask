"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[806],{806:(e,t,r)=>{function o(e,t){for(var r=0;r<t.length;r++){const o=t[r];if("string"!=typeof o&&!Array.isArray(o))for(const t in o)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(o,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>o[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}r.r(t),r.d(t,{i:()=>x});!function(e){var t=function(e){var t,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch{c=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var n=t&&t.prototype instanceof g?t:g,a=Object.create(n.prototype),i=new L(o||[]);return a._invoke=function(e,t,r){var o=p;return function(n,a){if(o===h)throw new Error("Generator is already running");if(o===m){if("throw"===n)throw a;return C()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var c=f(e,t,r);if("normal"===c.type){if(o=r.done?m:u,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=m,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(o){return{type:"throw",arg:o}}}e.wrap=l;var p="suspendedStart",u="suspendedYield",h="executing",m="completed",d={};function g(){}function y(){}function w(){}var v={};c(v,a,(function(){return this}));var b=Object.getPrototypeOf,F=b&&b(b(O([])));F&&F!==r&&o.call(F,a)&&(v=F);var j=w.prototype=g.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(n,a,i,s){var c=f(e[n],e,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&o.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var n;this._invoke=function(e,o){function a(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(a,a):a()}}function P(e,r){var o=e.iterator[r.method];if(o===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var a=n.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return y.prototype=w,c(j,"constructor",w),c(w,"constructor",y),y.displayName=c(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},E(x.prototype),c(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new x(l(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(j),c(j,s,"Generator"),c(j,a,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:O(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}({exports:{}});const i={name:"@ffmpeg/ffmpeg",version:"0.11.6",description:"FFmpeg WebAssembly version",main:"src/index.js",types:"src/index.d.ts",directories:{example:"examples"},scripts:{start:"node scripts/server.js","start:worker":"node scripts/worker-server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},browser:{"./src/node/index.js":"./src/browser/index.js"},repository:{type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},keywords:["ffmpeg","WebAssembly","video"],author:"Jerome Wu <jeromewus@gmail.com>",license:"MIT",bugs:{url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},engines:{node:">=12.16.1"},homepage:"https://github.com/ffmpegwasm/ffmpeg.wasm#readme",dependencies:{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},devDependencies:{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}},s={corePath:"https://unpkg.com/@ffmpeg/core@".concat(i.devDependencies["@ffmpeg/core"].substring(1),"/dist/ffmpeg-core.js")};let c=!1,l=()=>{};var f=(e,t)=>{l({type:e,message:t}),c&&console.log("[".concat(e,"] ").concat(t))};var p=e=>"\ncreateFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ".concat(e,". Use another URL when calling createFFmpeg():\n\nconst ffmpeg = createFFmpeg({\n  corePath: 'http://localhost:3000/ffmpeg-core.js',\n});\n");const u=async(e,t)=>{f("info","fetch ".concat(e));const r=await(await fetch(e)).arrayBuffer();f("info","".concat(e," file size = ").concat(r.byteLength," bytes"));const o=new Blob([r],{type:t}),n=URL.createObjectURL(o);return f("info","".concat(e," blob URL = ").concat(n)),n},h=a(Object.freeze(Object.defineProperty({__proto__:null,defaultOptions:s,fetchFile:async e=>{let t=e;return typeof e>"u"?new Uint8Array:("string"==typeof e?t=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0))):await(await fetch(new URL(e,"file:///home/kris/dev/horeca/fs_app/client/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href)).arrayBuffer():(e instanceof File||e instanceof Blob)&&(t=await(e=>new Promise(((t,r)=>{const o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=e=>{let{target:{error:{code:t}}}=e;r(Error("File could not be read! Code=".concat(t)))},o.readAsArrayBuffer(e)})))(e)),new Uint8Array(t))},getCreateFFmpegCore:async e=>{let{corePath:t,workerPath:r,wasmPath:o}=e;if(typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope){if("string"!=typeof t)throw Error("corePath should be a string!");const e=new URL(t,"file:///home/kris/dev/horeca/fs_app/client/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href,n=await u(e,"application/javascript"),a=await u(void 0!==o?o:e.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),i=await u(void 0!==r?r:e.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise((t=>{if(globalThis.importScripts(n),typeof createFFmpegCore>"u")throw Error(p(e));f("info","ffmpeg-core.js script loaded"),t({createFFmpegCore:createFFmpegCore,corePath:n,wasmPath:a,workerPath:i})})):(f("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:n,wasmPath:a,workerPath:i}))}if("string"!=typeof t)throw Error("corePath should be a string!");const n=new URL(t,"file:///home/kris/dev/horeca/fs_app/client/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href,a=await u(n,"application/javascript"),i=await u(void 0!==o?o:n.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),s=await u(void 0!==r?r:n.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise((e=>{const t=document.createElement("script"),r=()=>{if(t.removeEventListener("load",r),typeof createFFmpegCore>"u")throw Error(p(n));f("info","ffmpeg-core.js script loaded"),e({createFFmpegCore:createFFmpegCore,corePath:a,wasmPath:i,workerPath:s})};t.src=a,t.type="text/javascript",t.addEventListener("load",r),document.getElementsByTagName("head")[0].appendChild(t)})):(f("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:a,wasmPath:i,workerPath:s}))}},Symbol.toStringTag,{value:"Module"}))),{defaultArgs:m,baseOptions:d}={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},g=(e,t)=>{const r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach(((t,o)=>{const n=e.lengthBytesUTF8(t)+1,a=e._malloc(n);e.stringToUTF8(t,a,n),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*o,a,"i32")})),[t.length,r]},{defaultOptions:y,getCreateFFmpegCore:w}=h,{version:v}=i,b=Error("ffmpeg.wasm is not ready, make sure you have completed load().");const F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{log:t,logger:r,progress:o,...n}={...d,...y,...e};let a=null,i=null,s=null,c=null,l=!1,f=()=>{},p=t,u=o,h=0,F=0,j=!1,E=0;const x=(e,t)=>{f({type:e,message:t}),p&&console.log("[".concat(e,"] ").concat(t))},P=e=>{const[t,r,o]=e.split(":");return 60*parseFloat(t)*60+60*parseFloat(r)+parseFloat(o)},_=e=>{let{type:t,message:r}=e;x(t,r),((e,t)=>{if("string"==typeof e)if(e.startsWith("  Duration")){const r=e.split(", ")[0].split(": ")[1],o=P(r);t({duration:o,ratio:E}),(0===h||h>o)&&(h=o,j=!0)}else if(j&&e.startsWith("    Stream")){const t=e.match(/([\d.]+) fps/);if(t){const e=parseFloat(t[1]);F=h*e}else F=0;j=!1}else if(e.startsWith("frame")||e.startsWith("size")){const r=e.split("time=")[1].split(" ")[0],o=P(r),n=e.match(/frame=\s*(\d+)/);if(F&&n){const e=parseFloat(n[1]);E=Math.min(e/F,1)}else E=o/h;t({ratio:E,time:o})}else e.startsWith("video:")&&(t({ratio:1}),h=0)})(r,u),(e=>{"FFMPEG_END"===e&&null!==s&&(s(),s=null,c=null,l=!1)})(r)};return x("info","use ffmpeg.wasm v".concat(v)),{setProgress:e=>{u=e},setLogger:e=>{f=e},setLogging:e=>{p=e},load:async()=>{if(x("info","load ffmpeg-core"),null!==a)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{x("info","loading ffmpeg-core");const{createFFmpegCore:e,corePath:t,workerPath:r,wasmPath:o}=await w(n);a=await e({mainScriptUrlOrBlob:t,printErr:e=>_({type:"fferr",message:e}),print:e=>_({type:"ffout",message:e}),locateFile:(e,t)=>{if(typeof window<"u"||typeof WorkerGlobalScope<"u"){if(typeof o<"u"&&e.endsWith("ffmpeg-core.wasm"))return o;if(typeof r<"u"&&e.endsWith("ffmpeg-core.worker.js"))return r}return t+e}}),i=a.cwrap(n.mainName||"proxy_main","number",["number","number"]),x("info","ffmpeg-core loaded")}},isLoaded:()=>null!==a,run:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(x("info","run ffmpeg command: ".concat(t.join(" "))),null===a)throw b;if(l)throw Error("ffmpeg.wasm can only run one command at a time");return l=!0,new Promise(((e,r)=>{const o=[...m,...t].filter((e=>0!==e.length));s=e,c=r,i(...g(a,o))}))},exit:()=>{if(null===a)throw b;c&&c("ffmpeg has exited"),l=!1;try{a.exit(1)}catch(e){x(e.message),c&&c(e)}finally{a=null,i=null,s=null,c=null}},FS:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(x("info","run FS.".concat(e," ").concat(r.map((e=>"string"==typeof e?e:"<".concat(e.length," bytes binary file>"))).join(" "))),null===a)throw b;{let t=null;try{t=a.FS[e](...r)}catch{throw Error("readdir"===e?"ffmpeg.FS('readdir', '".concat(r[0],"') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')"):"readFile"===e?"ffmpeg.FS('readFile', '".concat(r[0],"') error. Check if the path exists"):"Oops, something went wrong in FS operation.")}return t}}}},{fetchFile:j}=h;var E={createFFmpeg:F,fetchFile:j};const x=o({__proto__:null,default:n(E)},[E])}}]);
//# sourceMappingURL=806.f85deec1.chunk.js.map