(function(){"use strict";var e={222:function(e,o,t){var n=t(3751),r=t(641);const i={id:"app"};function a(e,o,t,n,a,s){const l=(0,r.g2)("MovieList");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(l)])}var s=t(33);const l=e=>((0,r.Qi)("data-v-d135d242"),e=e(),(0,r.jt)(),e),c={class:"movie-list"},u=l((()=>(0,r.Lk)("h1",{class:"title"},"Popular Movies",-1))),d=["src","alt"],v={class:"movie-info"},f={class:"movie-title"},p=["onClick"];function b(e,o,t,n,i,a){const l=(0,r.g2)("MovieModal");return(0,r.uX)(),(0,r.CE)("div",c,[u,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.movies,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"movie-item"},[(0,r.Lk)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.title,class:"movie-poster"},null,8,d),(0,r.Lk)("div",v,[(0,r.Lk)("h2",f,(0,s.v_)(e.title),1),(0,r.Lk)("button",{onClick:o=>n.openBarcodeModal(e.id),class:"generate-btn"},"Generate Barcode",8,p)])])))),128)),n.showModal?((0,r.uX)(),(0,r.Wv)(l,{key:0,isVisible:n.showModal,barcodeValue:n.barcodeValue,onClose:o[0]||(o[0]=e=>n.showModal=!1)},null,8,["isVisible","barcodeValue"])):(0,r.Q3)("",!0)])}var m=t(953);const h={key:0,class:"modal-overlay"},g={class:"modal-content"},y={class:"barcode-container"},k={ref:"barcodeContainer"};function w(e,o,t,n,i,a){return t.isVisible?((0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("div",g,[(0,r.Lk)("button",{class:"close-btn",onClick:o[0]||(o[0]=o=>e.$emit("close"))},"Close"),(0,r.Lk)("div",y,[((0,r.uX)(),(0,r.CE)("svg",k,null,512))])])])):(0,r.Q3)("",!0)}var M=t(6129),_=t.n(M),C={props:{isVisible:{type:Boolean,required:!0},barcodeValue:{type:String,default:""}},emits:["close"],setup(e){const o=(0,m.KR)(null);(0,r.wB)((()=>e.barcodeValue),(async e=>{await(0,r.dY)(),t(e)}),{immediate:!0});const t=e=>{o.value&&e&&_()(o.value,e,{format:"CODE128",displayValue:!0,width:2,height:60,margin:10})};return{barcodeContainer:o}}},O=t(6262);const E=(0,O.A)(C,[["render",w],["__scopeId","data-v-42e77322"]]);var V=E,j={components:{MovieModal:V},setup(){const e=(0,m.KR)([]),o=(0,m.KR)(!1),t=(0,m.KR)("");(0,r.sV)((async()=>{try{const o=await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",{headers:{Authorization:"Bearer YOUR_BEARER_TOKEN"}}),t=await o.json();e.value=t.results}catch(o){console.error("Error fetching movies:",o)}}));const n=e=>{t.value=`${e}`,o.value=!0};return{movies:e,showModal:o,barcodeValue:t,openBarcodeModal:n}}};const L=(0,O.A)(j,[["render",b],["__scopeId","data-v-d135d242"]]);var B=L,R={components:{MovieList:B}};const S=(0,O.A)(R,[["render",a]]);var X=S,K=t(2753);const P=(0,n.Ef)(X);P.use(K.ModalPlugin),P.mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var u=l(t)}for(o&&o(n);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self["webpackChunkmovie_app"]=self["webpackChunkmovie_app"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(222)}));n=t.O(n)})();
//# sourceMappingURL=app.62c13b9e.js.map