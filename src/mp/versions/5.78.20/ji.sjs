var e=function e(t,r){if(!t||!r)return"";var a=r.split(".");var n="",o=t;for(var i=0;i<a.length;i++){n=o[a[i]];if(!n)return"";o=o[a[i]]}return n};var t=function e(t){var r=t||{};return{"isNeedShare":r.isNeedShare||false,"showSepa":r.showSepa||false,"isCustomShareEvent":r.isCustomShareEvent||false,"unSaveRecId":r.unSaveRecId||false,"shouldGetHighlight":r.shouldGetHighlight||false,"sharePosition":r.sharePosition||-1,"shareButtonObject":r.shareButtonObject||"","jumpOptions":r.jumpOptions||null,"customOpCartParams":r.customOpCartParams||null}};var r=function t(r,a){var n=[];if(a){n.push({"styleText":{"text":a},"colorType":1})}if(e(r,"v3Tags.length")){for(var o=0;o<r.v3Tags.length;o++){var i=r.v3Tags[o];if(!(i.type===1&&e(r,"topTagInfo.type")===4)){n.push(i)}}}return n};var a=function t(r,a,n,o){n=n||{};var i=n.hiddenTypes||[];var s=e(r,a+o);var f=+e(r,a+".type");if(s&&i.indexOf(f)<0){return s}else{return""}};var n=function t(r,a){if(typeof a.condition==="undefined"){return true}var n=e(a,"condition.showByMode");var o=e(a,"condition.showByKeyVal");var i=n==="allKeyVal"?true:false;if(n==="allKeyVal"){if(o){for(var s=0;s<o.length;s++){if(!(e(r,o[s]["key"])===o[s]["value"])){return false}}}}else if(n==="someKeyVal"){if(o){for(var f=0;f<o.length;f++){if(e(r,o[f]["key"])===o[f]["value"]){return true}}}}return i};var o=function e(t){if(!t)return"19rpx";var r="";for(var a=0;a<t.length-3;a++){r+=t[a]}var n={"351":"f_26","300":"f_26","222":"f_18","200":"f_18","196":"f_18","160":"f_18"};return n[r]?n[r]:"f_19"};var i=function t(r){var a=[];a=e(r,"bottomTagInfoOf3ColList.tags");if(a&&a.length>0){var n={"1":"折","9":"省"};var o=a[0];return{"type":o.type,"text":o.styleText.text,"iconText":n[""+o.type]}}return""};var s=function e(t){t.useWebp=false;t.quality=100;return t};module.exports={"transProxyData":t,"getSkuTagV2":r,"getDataByPath":e,"topLeftTagInfo":a,"showCondition":n,"getRadioTextSize":o,"transBottomTag":i,"unUseWebp":s};