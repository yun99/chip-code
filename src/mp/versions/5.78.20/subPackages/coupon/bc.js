function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}var r={},t={},n={},s=e(!0),a={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};function o(e,t){var n=t?"Error in "+t+" extension->":"Error in unnamed extension",s={valid:!0,error:""};r.helper.isArray(e)||(e=[e]);for(var a=0;a<e.length;++a){var o=n+" sub-extension "+a+": ",i=e[a];if("object"!=typeof i)return s.valid=!1,s.error=o+"must be an object, but "+typeof i+" given",s;if(!r.helper.isString(i.type))return s.valid=!1,s.error=o+'property "type" must be a string, but '+typeof i.type+" given",s;var l=i.type=i.type.toLowerCase();if("language"===l&&(l=i.type="lang"),"html"===l&&(l=i.type="output"),"lang"!==l&&"output"!==l&&"listener"!==l)return s.valid=!1,s.error=o+"type "+l+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',s;if("listener"===l){if(r.helper.isUndefined(i.listeners))return s.valid=!1,s.error=o+'. Extensions of type "listener" must have a property called "listeners"',s}else if(r.helper.isUndefined(i.filter)&&r.helper.isUndefined(i.regex))return s.valid=!1,s.error=o+l+' extensions must define either a "regex" property or a "filter" method',s;if(i.listeners){if("object"!=typeof i.listeners)return s.valid=!1,s.error=o+'"listeners" property must be an object but '+typeof i.listeners+" given",s;for(var c in i.listeners)if(i.listeners.hasOwnProperty(c)&&"function"!=typeof i.listeners[c])return s.valid=!1,s.error=o+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+c+" must be a function but "+typeof i.listeners[c]+" given",s}if(i.filter){if("function"!=typeof i.filter)return s.valid=!1,s.error=o+'"filter" must be a function, but '+typeof i.filter+" given",s}else if(i.regex){if(r.helper.isString(i.regex)&&(i.regex=new RegExp(i.regex,"g")),!i.regex instanceof RegExp)return s.valid=!1,s.error=o+'"regex" property must either be a string or a RegExp object, but '+typeof i.regex+" given",s;if(r.helper.isUndefined(i.replace))return s.valid=!1,s.error=o+'"regex" extensions must implement a replace string or function',s}}return s}function i(e,r){return"~E"+r.charCodeAt(0)+"E"}r.helper={},r.extensions={},r.setOption=function(e,r){return s[e]=r,this},r.getOption=function(e){return s[e]},r.getOptions=function(){return s},r.resetOptions=function(){s=e(!0)},r.setFlavor=function(e){if(a.hasOwnProperty(e)){var r=a[e];for(var t in r)r.hasOwnProperty(t)&&(s[t]=r[t])}},r.getDefaultOptions=function(r){return e(r)},r.subParser=function(e,n){if(r.helper.isString(e)){if(void 0===n){if(t.hasOwnProperty(e))return t[e];throw Error("SubParser named "+e+" not registered!")}t[e]=n}},r.extension=function(e,t){if(!r.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=r.helper.stdExtName(e),r.helper.isUndefined(t)){if(!n.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return n[e]}"function"==typeof t&&(t=t()),r.helper.isArray(t)||(t=[t]);var s=o(t,e);if(!s.valid)throw Error(s.error);n[e]=t},r.getAllExtensions=function(){return n},r.removeExtension=function(e){delete n[e]},r.resetExtensions=function(){n={}},r.validateExtension=function(e){return!!o(e,null).valid},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(e){return"string"==typeof e||e instanceof String},r.helper.isFunction=function(e){return e&&"[object Function]"==={}.toString.call(e)},r.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},r.helper.isArray=function(e){return e.constructor===Array},r.helper.isUndefined=function(e){return void 0===e},r.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},r.helper.escapeCharactersCallback=i,r.helper.escapeCharacters=function(e,r,t){var n="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";t&&(n="\\\\"+n);var s=new RegExp(n,"g");return e=e.replace(s,i)};var l=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};r.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=l(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},r.helper.replaceRecursiveRegExp=function(e,t,n,s,a){if(!r.helper.isFunction(t)){var o=t;t=function(){return o}}var i=l(e,n,s,a),c=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(t(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),c=p.join("")}return c},r.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),r.Converter=function(e){var t={},i=[],l=[],c={};function u(e,t){if(t=t||null,r.helper.isString(e)){if(t=e=r.helper.stdExtName(e),r.extensions[e])return void function(e,t){"function"==typeof e&&(e=e(new r.Converter));r.helper.isArray(e)||(e=[e]);var n=o(e,t);if(!n.valid)throw Error(n.error);for(var s=0;s<e.length;++s)switch(e[s].type){case"lang":i.push(e[s]);break;case"output":l.push(e[s]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}(r.extensions[e],e);if(r.helper.isUndefined(n[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=n[e]}"function"==typeof e&&(e=e()),r.helper.isArray(e)||(e=[e]);var s=o(e,t);if(!s.valid)throw Error(s.error);for(var a=0;a<e.length;++a){switch(e[a].type){case"lang":i.push(e[a]);break;case"output":l.push(e[a])}if(e[a].hasOwnProperty(c))for(var u in e[a].listeners)e[a].listeners.hasOwnProperty(u)&&p(u,e[a].listeners[u])}}function p(e,t){if(!r.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof t)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof t+" given");c.hasOwnProperty(e)||(c[e]=[]),c[e].push(t)}!function(){for(var n in e=e||{},s)s.hasOwnProperty(n)&&(t[n]=s[n]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);t.extensions&&r.helper.forEach(t.extensions,u)}(),this._dispatch=function(e,r,t,n){if(c.hasOwnProperty(e))for(var s=0;s<c[e].length;++s){var a=c[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return p(e,r),this},this.makeHtml=function(e){if(!e)return e;var n={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:i,outputModifiers:l,converter:this,ghCodeBlocks:[]};return e=(e=(e=(e=e.replace(/~/g,"~T")).replace(/\$/g,"~D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n"),t.smartIndentationFix&&(e=function(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}(e)),e=e,e=r.subParser("detab")(e,t,n),e=r.subParser("stripBlankLines")(e,t,n),r.helper.forEach(i,(function(s){e=r.subParser("runExtension")(s,e,t,n)})),e=r.subParser("hashPreCodeTags")(e,t,n),e=r.subParser("githubCodeBlocks")(e,t,n),e=r.subParser("hashHTMLBlocks")(e,t,n),e=r.subParser("hashHTMLSpans")(e,t,n),e=r.subParser("stripLinkDefinitions")(e,t,n),e=r.subParser("blockGamut")(e,t,n),e=r.subParser("unhashHTMLSpans")(e,t,n),e=(e=(e=r.subParser("unescapeSpecialChars")(e,t,n)).replace(/~D/g,"$$")).replace(/~T/g,"~"),r.helper.forEach(l,(function(s){e=r.subParser("runExtension")(s,e,t,n)})),e},this.setOption=function(e,r){t[e]=r},this.getOption=function(e){return t[e]},this.getOptions=function(){return t},this.addExtension=function(e,r){u(e,r=r||null)},this.useExtension=function(e){u(e)},this.setFlavor=function(e){if(a.hasOwnProperty(e)){var r=a[e];for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}},this.removeExtension=function(e){r.helper.isArray(e)||(e=[e]);for(var t=0;t<e.length;++t){for(var n=e[t],s=0;s<i.length;++s)i[s]===n&&i[s].splice(s,1);for(;0<l.length;++s)l[0]===n&&l[0].splice(s,1)}},this.getAllExtensions=function(){return{language:i,output:l}}},r.subParser("anchors",(function(e,t,n){var s=function(e,t,s,a,o,i,l,c){r.helper.isUndefined(c)&&(c=""),e=t;var u=s,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,r.helper.isUndefined(n.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=n.gUrls[p],r.helper.isUndefined(n.gTitles[p])||(d=n.gTitles[p]);var f='<a href="'+(h=r.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=r.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=(e=(e=n.converter._dispatch("anchors.before",e,t,n)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,s)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s)).replace(/(\[([^\[\]]+)])()()()()()/g,s),e=n.converter._dispatch("anchors.after",e,t,n)})),r.subParser("autoLinks",(function(e,t,n){function s(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,t){var n=r.subParser("unescapeSpecialChars")(t);return r.subParser("encodeEmailAddress")(n)}return e=(e=(e=n.converter._dispatch("autoLinks.before",e,t,n)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,s)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,a),t.simplifiedAutoLink&&(e=(e=e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,s)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,a)),e=n.converter._dispatch("autoLinks.after",e,t,n)})),r.subParser("blockGamut",(function(e,t,n){e=n.converter._dispatch("blockGamut.before",e,t,n),e=r.subParser("blockQuotes")(e,t,n),e=r.subParser("headers")(e,t,n);var s=r.subParser("hashBlock")("<hr />",t,n);return e=(e=(e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,s)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,s)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,s),e=r.subParser("lists")(e,t,n),e=r.subParser("codeBlocks")(e,t,n),e=r.subParser("tables")(e,t,n),e=r.subParser("hashHTMLBlocks")(e,t,n),e=r.subParser("paragraphs")(e,t,n),e=n.converter._dispatch("blockGamut.after",e,t,n)})),r.subParser("blockQuotes",(function(e,t,n){return e=(e=n.converter._dispatch("blockQuotes.before",e,t,n)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,(function(e,s){var a=s;return a=(a=(a=a.replace(/^[ \t]*>[ \t]?/gm,"~0")).replace(/~0/g,"")).replace(/^[ \t]+$/gm,""),a=r.subParser("githubCodeBlocks")(a,t,n),a=(a=(a=r.subParser("blockGamut")(a,t,n)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,(function(e,r){var t=r;return t=(t=t.replace(/^  /gm,"~0")).replace(/~0/g,"")})),r.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",t,n)})),e=n.converter._dispatch("blockQuotes.after",e,t,n)})),r.subParser("codeBlocks",(function(e,t,n){e=n.converter._dispatch("codeBlocks.before",e,t,n);return e=(e=(e+="~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,(function(e,s,a){var o=s,i=a,l="\n";return o=r.subParser("outdent")(o),o=r.subParser("encodeCode")(o),o=(o=(o=r.subParser("detab")(o)).replace(/^\n+/g,"")).replace(/\n+$/g,""),t.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",r.subParser("hashBlock")(o,t,n)+i}))).replace(/~0/,""),e=n.converter._dispatch("codeBlocks.after",e,t,n)})),r.subParser("codeSpans",(function(e,t,n){return void 0===(e=n.converter._dispatch("codeSpans.before",e,t,n))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,(function(e,t,n,s){var a=s;return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),t+"<code>"+(a=r.subParser("encodeCode")(a))+"</code>"})),e=n.converter._dispatch("codeSpans.after",e,t,n)})),r.subParser("detab",(function(e){return e=(e=(e=(e=(e=e.replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"~A~B")).replace(/~B(.+?)~A/g,(function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}))).replace(/~A/g,"    ")).replace(/~B/g,"")})),r.subParser("encodeAmpsAndAngles",(function(e){return e=(e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?\$!])/gi,"&lt;")})),r.subParser("encodeBackslashEscapes",(function(e){return e=(e=e.replace(/\\(\\)/g,r.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g,r.helper.escapeCharactersCallback)})),r.subParser("encodeCode",(function(e){return e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),e=r.helper.escapeCharacters(e,"*_{}[]\\",!1)})),r.subParser("encodeEmailAddress",(function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=(e='<a href="'+(e=(e="mailto:"+e).replace(/./g,(function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e})))+'">'+e+"</a>").replace(/">.+:/g,'">')})),r.subParser("escapeSpecialCharsWithinTagAttributes",(function(e){return e=e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi,(function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=r.helper.escapeCharacters(t,"\\`*_",!1)}))})),r.subParser("githubCodeBlocks",(function(e,t,n){return t.ghCodeBlocks?(e=n.converter._dispatch("githubCodeBlocks.before",e,t,n),e=(e=(e+="~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,(function(e,s,a){var o=t.omitExtraWLInCodeBlocks?"":"\n";return a=r.subParser("encodeCode")(a),a="<pre><code"+(s?' class="'+s+" language-"+s+'"':"")+">"+(a=(a=(a=r.subParser("detab")(a)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+o+"</code></pre>",a=r.subParser("hashBlock")(a,t,n),"\n\n~G"+(n.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}))).replace(/~0/,""),n.converter._dispatch("githubCodeBlocks.after",e,t,n)):e})),r.subParser("hashBlock",(function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"})),r.subParser("hashElement",(function(e,r,t){return function(e,r){var n=r;return n=(n=(n=n.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}})),r.subParser("hashHTMLBlocks",(function(e,t,n){for(var s=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=function(e,r,t,s){var a=e;return-1!==t.search(/\bmarkdown\b/)&&(a=t+n.converter.makeHtml(r)+s),"\n\n~K"+(n.gHtmlBlocks.push(a)-1)+"K\n\n"},o=0;o<s.length;++o)e=r.helper.replaceRecursiveRegExp(e,a,"^(?: |\\t){0,3}<"+s[o]+"\\b[^>]*>","</"+s[o]+">","gim");return e=(e=(e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,t,n))).replace(/(<!--[\s\S]*?-->)/g,r.subParser("hashElement")(e,t,n))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,t,n))})),r.subParser("hashHTMLSpans",(function(e,t,n){for(var s=r.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<s.length;++a)e=e.replace(s[a][0],"~L"+(n.gHtmlSpans.push(s[a][0])-1)+"L");return e})),r.subParser("unhashHTMLSpans",(function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e})),r.subParser("hashPreCodeTags",(function(e,t,n){return e=r.helper.replaceRecursiveRegExp(e,(function(e,t,s,a){var o=s+r.subParser("encodeCode")(t)+a;return"\n\n~G"+(n.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"}),"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")})),r.subParser("headers",(function(e,t,n){e=n.converter._dispatch("headers.before",e,t,n);var s=t.prefixHeaderId,a=isNaN(parseInt(t.headerLevelStart))?1:parseInt(t.headerLevelStart),o=t.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=t.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;function l(e){var t,a=e.replace(/[^\w]/g,"").toLowerCase();return n.hashLinkCounts[a]?t=a+"-"+n.hashLinkCounts[a]++:(t=a,n.hashLinkCounts[a]=1),!0===s&&(s="section"),r.helper.isString(s)?s+t:t}return e=(e=(e=e.replace(o,(function(e,s){var o=r.subParser("spanGamut")(s,t,n),i=t.noHeaderId?"":' id="'+l(s)+'"',c="<h"+a+i+">"+o+"</h"+a+">";return r.subParser("hashBlock")(c,t,n)}))).replace(i,(function(e,s){var o=r.subParser("spanGamut")(s,t,n),i=t.noHeaderId?"":' id="'+l(s)+'"',c=a+1,u="<h"+c+i+">"+o+"</h"+c+">";return r.subParser("hashBlock")(u,t,n)}))).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,(function(e,s,o){var i=r.subParser("spanGamut")(o,t,n),c=t.noHeaderId?"":' id="'+l(o)+'"',u=a-1+s.length,p="<h"+u+c+">"+i+"</h"+u+">";return r.subParser("hashBlock")(p,t,n)})),e=n.converter._dispatch("headers.after",e,t,n)})),r.subParser("images",(function(e,t,n){function s(e,t,s,a,o,i,l,c){var u=n.gUrls,p=n.gTitles,h=n.gDimensions;if(s=s.toLowerCase(),c||(c=""),""===a||null===a){if(""!==s&&null!==s||(s=t.toLowerCase().replace(/ ?\n/g," ")),a="#"+s,r.helper.isUndefined(u[s]))return e;a=u[s],r.helper.isUndefined(p[s])||(c=p[s]),r.helper.isUndefined(h[s])||(o=h[s].width,i=h[s].height)}t=t.replace(/"/g,"&quot;"),t=r.helper.escapeCharacters(t,"*_",!1);var d='<img src="'+(a=r.helper.escapeCharacters(a,"*_",!1))+'" alt="'+t+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=r.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}return e=(e=(e=n.converter._dispatch("images.before",e,t,n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,s)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,s),e=n.converter._dispatch("images.after",e,t,n)})),r.subParser("italicsAndBold",(function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)})),r.subParser("lists",(function(e,t,n){function s(e,s){n.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var a=/\n[ \t]*\n(?!~0)/.test(e+="~0");return e=(e=e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,(function(e,s,o,i,l,c,u){u=u&&""!==u.trim();var p=r.subParser("outdent")(l,t,n),h="";return c&&t.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,(function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"}))),s||p.search(/\n{2,}/)>-1?(p=r.subParser("githubCodeBlocks")(p,t,n),p=r.subParser("blockGamut")(p,t,n)):(p=(p=r.subParser("lists")(p,t,n)).replace(/\n$/,""),p=a?r.subParser("paragraphs")(p,t,n):r.subParser("spanGamut")(p,t,n)),p="\n<li"+h+">"+p+"</li>\n"}))).replace(/~0/g,""),n.gListLevel--,s&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var n="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(n)){!function e(a){var i=a.search(n);-1!==i?(o+="\n\n<"+r+">"+s(a.slice(0,i),!!t)+"</"+r+">\n\n",n="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+s(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+s(e,!!t)+"</"+r+">\n\n";return o}e=n.converter._dispatch("lists.before",e,t,n),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return n.gListLevel?e=e.replace(o,(function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)})):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,(function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")}))),e=e.replace(/~0/,""),e=n.converter._dispatch("lists.after",e,t,n)})),r.subParser("outdent",(function(e){return e=(e=e.replace(/^(\t|[ ]{1,4})/gm,"~0")).replace(/~0/g,"")})),r.subParser("paragraphs",(function(e,t,n){for(var s=(e=(e=(e=n.converter._dispatch("paragraphs.before",e,t,n)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=s.length,i=0;i<o;i++){var l=s[i];l.search(/~(K|G)(\d+)\1/g)>=0||(l=(l=r.subParser("spanGamut")(l,t,n)).replace(/^([ \t]*)/g,"<p>"),l+="</p>"),a.push(l)}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?n.gHtmlBlocks[d]:p?r.subParser("encodeCode")(n.ghCodeBlocks[d].text):n.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=(e=(e=a.join("\n\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),n.converter._dispatch("paragraphs.after",e,t,n)})),r.subParser("runExtension",(function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r})),r.subParser("spanGamut",(function(e,t,n){return e=n.converter._dispatch("spanGamut.before",e,t,n),e=r.subParser("codeSpans")(e,t,n),e=r.subParser("escapeSpecialCharsWithinTagAttributes")(e,t,n),e=r.subParser("encodeBackslashEscapes")(e,t,n),e=r.subParser("images")(e,t,n),e=r.subParser("anchors")(e,t,n),e=r.subParser("autoLinks")(e,t,n),e=r.subParser("encodeAmpsAndAngles")(e,t,n),e=r.subParser("italicsAndBold")(e,t,n),e=(e=r.subParser("strikethrough")(e,t,n)).replace(/  +\n/g," <br />\n"),e=n.converter._dispatch("spanGamut.after",e,t,n)})),r.subParser("strikethrough",(function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e})),r.subParser("stripBlankLines",(function(e){return e.replace(/^[ \t]+$/gm,"")})),r.subParser("stripLinkDefinitions",(function(e,t,n){return e=(e=(e+="~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm,(function(e,s,a,o,i,l,c){return s=s.toLowerCase(),n.gUrls[s]=r.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(n.gTitles[s]=c.replace(/"|'/g,"&quot;")),t.parseImgDimensions&&o&&i&&(n.gDimensions[s]={width:o,height:i}),"")}))).replace(/~0/,"")})),r.subParser("tables",(function(e,t,n){if(!t.tables)return e;function s(e,s){return"<td"+s+">"+r.subParser("spanGamut")(e,t,n)+"</td>\n"}return e=(e=n.converter._dispatch("tables.before",e,t,n)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm,(function(e){var a,o=e.split("\n");for(a=0;a<o.length;++a)/^[ \t]{0,3}\|/.test(o[a])&&(o[a]=o[a].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(o[a])&&(o[a]=o[a].replace(/\|[ \t]*$/,""));var i,l,c,u,p=o[0].split("|").map((function(e){return e.trim()})),h=o[1].split("|").map((function(e){return e.trim()})),d=[],f=[],g=[],b=[];for(o.shift(),o.shift(),a=0;a<o.length;++a)""!==o[a].trim()&&d.push(o[a].split("|").map((function(e){return e.trim()})));if(p.length<h.length)return e;for(a=0;a<h.length;++a)g.push((i=h[a],/^:[ \t]*--*$/.test(i)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(i)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(i)?' style="text-align:center;"':""));for(a=0;a<p.length;++a)r.helper.isUndefined(g[a])&&(g[a]=""),f.push((l=p[a],c=g[a],u=void 0,u="",l=l.trim(),t.tableHeaderId&&(u=' id="'+l.replace(/ /g,"_").toLowerCase()+'"'),"<th"+u+c+">"+(l=r.subParser("spanGamut")(l,t,n))+"</th>\n"));for(a=0;a<d.length;++a){for(var v=[],m=0;m<f.length;++m)r.helper.isUndefined(d[a][m]),v.push(s(d[a][m],g[m]));b.push(v)}return function(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+"</tbody>\n</table>\n"}(f,b)})),e=n.converter._dispatch("tables.after",e,t,n)})),r.subParser("unescapeSpecialChars",(function(e){return e=e.replace(/~E(\d+)E/g,(function(e,r){var t=parseInt(r);return String.fromCharCode(t)}))})),module.exports=r;