Object.defineProperty(exports,"__esModule",{value:!0});var e=console.log.bind(console);exports.default={configure:function(o,t){var n=t.basicLayout;return o.layout&&(n=t.layout(o.layout.type,o.layout)),function(o,t){return function(n){e(o(n,t))}}(n,o.timezoneOffset)}};