!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3),n(1);var r=document,a=r.getElementById("btnChengeTheme"),o=r.querySelectorAll(".keynumber"),l=r.querySelectorAll(".keyoperations"),u=r.getElementById("keyac"),c=r.getElementById("keydot"),i=r.getElementById("display"),f=0,d="",s=!1;function v(e){s?(i.value=e,s=!1):"0"===i.value?i.value=e:i.value+=e}function y(e){var t=i.value;if(s&&"="!==d)i.value=f,d=e;else{switch(s=!0,d){case"+":f+=parseFloat(t);break;case"-":f-=parseFloat(t);break;case"*":f*=parseFloat(t);break;case"/":f/=parseFloat(t);break;default:f=parseFloat(t)}i.value=+f.toFixed(10),d=e}}a.addEventListener("click",function(){var e=r.getElementById("calc");e.classList.toggle("dark"),e.classList.toggle("light")});for(var p=0;p<o.length;p++){o[p].addEventListener("click",function(e){v(e.target.textContent)})}for(p=0;p<l.length;p++){l[p].addEventListener("click",function(e){y(e.target.textContent)})}u.addEventListener("click",function(){i.value=0,f=0,d="",s=!0}),c.addEventListener("click",function(e){!function(e){var t=i.value;s?(t="0.",s=!1):-1===t.indexOf(".")&&(t+="."),i.value=t}(e.target.textContent)})}]);
//# sourceMappingURL=app.js.map