Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();exports.default=function(n){var t=function(){function n(e,t,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.level=e,this.levelStr=t,this.colour=r}return e(n,[{key:"toString",value:function(){return this.levelStr}},{key:"isLessThanOrEqualTo",value:function(e){return"string"==typeof e&&(e=l(e)),this.level<=e.level}},{key:"isGreaterThanOrEqualTo",value:function(e){return"string"==typeof e&&(e=l(e)),this.level>=e.level}},{key:"isEqualTo",value:function(e){return"string"==typeof e&&(e=l(e)),this.level===e.level}}]),n}(),r={ALL:new t(Number.MIN_VALUE,"ALL","grey"),TRACE:new t(5e3,"TRACE","blue"),DEBUG:new t(1e4,"DEBUG","cyan"),INFO:new t(2e4,"INFO","green"),WARN:new t(3e4,"WARN","yellow"),ERROR:new t(4e4,"ERROR","red"),FATAL:new t(5e4,"FATAL","magenta"),MARK:new t(9007199254740992,"MARK","grey"),OFF:new t(Number.MAX_VALUE,"OFF","grey")};n&&Object.keys(n).forEach((function(e){r[e.toUpperCase()]=new t(n[e].value,e.toUpperCase(),n[e].colour)}));function l(e,n){return e?e instanceof t?e:"string"==typeof e?r[e.toUpperCase()]||n:l(e.toString()):n}var o=Object.keys(r).sort((function(e,n){return n.level-e.level}));return r.getLevel=l,r.levels=o,r};