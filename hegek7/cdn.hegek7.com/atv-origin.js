!function(){function t(t,n){function i(t){var e,n=null;try{e=t.createRequest(),e?t.sendRequest(e)||(n=r("sendRequest failed.",e,t.getVersion(),t.getVersionParamName(),t.at_script)):n=r("createRequest failed.",e,t.getVersion(),t.getVersionParamName(),t.at_script)}catch(i){n=r(i.name+": "+i.message,e,t.getVersion(),t.getVersionParamName(),t?t.at_script:null,i)}return n}function r(t,n,i,r,a,o){var d={};return d[r]=i,d.atp_jsErrMsg=encodeURIComponent(t),a&&a.parentElement&&a.parentElement.tagName&&"HEAD"==a.parentElement.tagName&&(d.atp_isOnHead="1"),n&&(d.atp_jsErrUrl=n),a&&(d.cid=e(a.src,"cid"),d.nid=e(a.src,"nid")),o.stack&&(d.atp_jsErrMsg=encodeURIComponent(o.stack)),d}function a(t){var e=window._at_win.at_config,n=0,i=!1;if(e.handlerVersionSpecific){for(var r=0;r<t.length;r++)if(t[r].handler.getVersion()==e.handlerVersionSpecific){i=!0,n=r;break}}else if(e.handlerVersionByTimeIntervalMinutes){var a=e.handlerVersionByTimeInputDate||new Date,o=a.getUTCHours(),d=a.getUTCMinutes();n=Math.floor((60*o+d)/e.handlerVersionByTimeIntervalMinutes)%(t.length+1),n!=t.length&&(i=!0)}else for(var s=e.handlerVersionRandom||100*Math.random(),r=0;r<t.length;r++)if(s>=t[r].minRate&&s<t[r].maxRate){i=!0,n=r;break}return 1==i&&t[n].handler.isApplicable()?t[n].handler:null}this.handle=function(){var e=[],r=a(t);if(r){var o=i(r);if(null===o)return e;r.onFailure(),e.push(o)}var d=i(n);return d&&(d.atp_isLostImp=1,e.push(d)),e}}function e(t,e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)",i=new RegExp(n,"i"),r=i.exec(t);return null==r?null:r[1]}function n(t,e){for(var n=t.length;n--;)if(t[n]===e)return!0;return!1}function i(t){try{for(var e=new RegExp("[\\?&](atp_[^&]*=[^&#]*)","gi"),n=e.exec(t),i=new Array;null!=n;)i.push(n[1]),n=e.exec(t);return i}catch(r){return[]}}function r(){return((new Date).getTime()+""+Math.floor(1e6*Math.random())).substr(0,16)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n],r=o(t,i);d(r)}}function o(t,n){var i="";for(key in n)if(n.hasOwnProperty(key))if(-1==key.indexOf("atp_jsErrUrl"))i+="&"+key+"="+n[key];else for(var r=["cid","nid"],a=0;a<r.length;a++){var o=e(n[key],r[a]);o&&(i+="&"+r[a]+"="+o)}var d=window._at_win.location.protocol+"//"+t+i;return d}function d(t){(new Image).src=t}function s(t){document.write('<script type="text/javascript" src="'+t+'"></script>')}function c(){this.domUtilities=new function(){this.addImage=function(e,n,i){var r=n.ownerDocument.createElement("img");r.width=0,r.height=0,r.style.display="none",r.src=t(e),r.onload=r.onerror=r.onreadystatechange=function(){/loaded|complete|undefined/.test(r.readyState)&&function(){r.onload=r.onerror=r.onreadystatechange=null,r.parentNode.removeChild(r),r=void 0,i&&i()}()},n.insertBefore(r,n.firstChild)},this.addScriptResource=function(e,n){var i=n.ownerDocument.createElement("script");i.type="text/javascript",i.src=t(e),n.insertBefore(i,n.firstChild)},this.addScriptCode=function(t,e){var n=e.ownerDocument.createElement("script");n.type="text/javascript",n.innerHTML=t,e.insertBefore(n,e.firstChild)},this.addHtml=function(t,e){var n=e.ownerDocument.createElement("div");n.style="display: inline",n.innerHTML=t,e.insertBefore(n,e.firstChild)},this.getObject=function(t){return window.document[t]?window.document[t]:-1!=navigator.appName.indexOf("Microsoft Internet")?document.getElementById(t):document.embeds&&document.embeds[t]?document.embeds[t]:void 0}},this.settings=new function(){},this.Enums={BrowserId:{Others:0,IE:1,Firefox:2,Chrome:3,Opera:4,Safari:5},TrafficScenario:{OnPage:1,SameDomain:2,CrossDomain:128}},this.CommonData={};var t=function(t){return void 0!==t&&null!==t&&"http"==t.match("^http")&&(t+=-1!==t.indexOf("?")?"&"==t.slice(-1)?"cbust="+r():"&cbust="+r():"?cbust="+r()),t}}function w(){function t(t){window[t.callbackName]=function(e){var n=window._at_win.at_config.bs_renderingMethod||function(t){document.write(t)};switch(e.ResultID){case 1:e.callback&&window[e.callback]&&window[e.callback](),n(t.tagPassback?t.tagPassback:e.Passback?decodeURIComponent(e.Passback):decodeURIComponent("%3Cstyle%3E%0A.container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%09%2F*%20for%20IE%20*%2F%0A%09background%3A%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23315d8c)%2C%20to(%2384aace))%3B%0A%09%2F*%20for%20webkit%20browsers%20*%2F%0A%09background%3A%20-moz-linear-gradient(top%2C%20%23315d8c%2C%20%2384aace)%3B%0A%09%2F*%20for%20firefox%203.6%2B%20*%2F%0A%7D%0A.cloud%20%7B%0A%09color%3A%20%23fff%3B%0A%09position%3A%20relative%3B%0A%09font%3A%20100%25%22Times%20New%20Roman%22%2C%20Times%2C%20serif%3B%0A%09text-shadow%3A%200px%200px%2010px%20%23fff%3B%0A%09line-height%3A%200%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%09function%0A%20%20%20%20cloud()%7B%0A%09%09var%20b1%20%3D%20%22%3Cdiv%20class%3D%5C%22cloud%5C%22%20style%3D%5C%22font-size%3A%22%3B%0A%09%09var%20b2%3D%22px%3B%20position%3A%20absolute%3B%20top%3A%20%22%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2234px%3B%20left%3A%2028px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A%2010px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A50px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%09%09document.write(b1%20%2B%20%22400px%3B%20width%3A%20400px%3B%20height%3A%20400%22%20%2B%20b2%20%2B%20%2224px%3B%20left%3A20px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%09function%20clouds()%7B%0A%20%20%20%20%20%20%20%20var%20top%20%3D%20%5B%27-80%27%2C%2780%27%2C%27240%27%2C%27400%27%5D%3B%0A%09%09var%20left%20%3D%20-10%3B%0A%20%20%20%20%20%20%20%20var%20a1%20%3D%20%22%3Cdiv%20style%3D%5C%22position%3A%20relative%3B%20top%3A%20%22%3B%0A%09%09var%20a2%20%3D%20%22px%3B%20left%3A%20%22%3B%0A%20%20%20%20%20%20%20%20var%20a3%3D%20%22px%3B%5C%22%3E%3Cscr%22%2B%22ipt%20type%3D%5C%22text%5C%2Fjavascr%22%2B%22ipt%5C%22%3Ecloud()%3B%3C%5C%2Fscr%22%2B%22ipt%3E%3C%5C%2Fdiv%3E%22%3B%0A%20%20%20%20%20%20%20%20for(i%3D0%3B%20i%20%3C%208%3B%20i%2B%2B)%20%7B%0A%09%09%09document.write(a1%2Btop%5B0%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B1%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B2%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B3%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09if(i%3D%3D4)%0A%09%09%09%7B%0A%09%09%09%09left%20%3D-%2090%3B%0A%09%09%09%09top%20%3D%20%5B%270%27%2C%27160%27%2C%27320%27%2C%27480%27%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20%0A%09%09%09%09left%20%2B%3D%20160%3B%0A%09%09%7D%0A%09%7D%0A%0A%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22container%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%3E%0A%09%3Cscript%20type%3D%22text%2Fjavascript%22%3Eclouds()%3B%3C%2Fscript%3E%0A%3C%2Fdiv%3E"));break;case 2:case 3:t.tagAdtag&&n(decodeURIComponent(t.tagAdtag));break;case 4:n(decodeURIComponent("%3Cstyle%3E%0A.container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22container%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%3E%09%0A%3C%2Fdiv%3E"))}}}function r(t){var e,n=null,i=null;e=/<\/scr\+ipt>/g;var r=function(t){return t.replace(/^\s+|\s+$/g,"")},a=function(t){if(!(t=t.previousSibling)||"#text"!=t.nodeName||null!=t.nodeValue&&void 0!=t.nodeValue&&0!=r(t.nodeValue).length||(t=t.previousSibling),t){var o=t.getAttribute("type");o&&(o=o.toLowerCase())}return t&&"SCRIPT"==t.tagName&&(o&&"text/tag"==o||"text/passback"==o)&&""!=r(t.innerHTML)?"text/tag"==o?(n=t.innerHTML.replace(e,"</script>"),{isBadImp:!1,hasPassback:!1,tagAdTag:n,tagPassback:i}):null!=i?{isBadImp:!0,hasPassback:!1,tagAdTag:n,tagPassback:i}:(i=t.innerHTML.replace(e,"</script>"),t=a(t),t.hasPassback=!0,t):{isBadImp:!0,hasPassback:!1,tagAdTag:n,tagPassback:i}};return a(t)}function a(t,n,r,a,s,c,w,u,f){var p,g,m;void 0==n.atregion&&(n.atregion=0);var h,_,v;try{for(m=a,g=0;10>g&&m!=window._at_win.top;)g++,m=m.parent;a.depth=g,p=o(a),h="&aUrl="+encodeURIComponent(p.url),_="&aUrlD="+p.depth,v=a.depth+s,c&&a.depth--}catch(A){_=h=v=a.depth=""}if(s=n.script.src,c="&cid="+(e(s,"cid")||"")+"&nid="+(e(s,"nid")||"")+"&uid="+n.uid+"&guid="+n.guid,(m=e(s,"xff"))&&(c+="&xff="+m),(m=e(s,"useragent"))&&(c+="&useragent="+m),void 0!=window._at_win.$atbs.CommonData.BrowserId&&void 0!=window._at_win.$atbs.CommonData.BrowserVersion&&void 0!=window._at_win.$atbs.CommonData.BrowserIdFromUserAgent)p=window._at_win.$atbs.CommonData.BrowserId,g=window._at_win.$atbs.CommonData.BrowserVersion,m=window._at_win.$atbs.CommonData.BrowserIdFromUserAgent;else{var b=m?decodeURIComponent(m):navigator.userAgent;p=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],m=0,g="";for(var B=0;B<p.length;B++)if(null!=b.match(RegExp(p[B].brRegex))){if(m=p[B].id,null==p[B].verRegex)break;b=b.match(RegExp(p[B].verRegex+"[0-9]*")),null!=b&&(g=b[0].match(RegExp(p[B].verRegex)),g=b[0].replace(g[0],""));break}p=B=l(),g=B===m?g:"",window._at_win.$atbs.CommonData.BrowserId=p,window._at_win.$atbs.CommonData.BrowserVersion=g,window._at_win.$atbs.CommonData.BrowserIdFromUserAgent=m}if(c+="&brid="+p+"&brver="+g+"&bridua="+m,(m=e(s,"turl"))&&(c+="&turl="+m),(m=e(s,"tagformat"))&&(c+="&tagformat="+m),(m=e(s,"pid"))&&(c+="&pid="+m),n=(window._at_win.at_config.verifyJSURL||n.protocol+"//"+(window._at_win.at_config.bsAddress||n.url)+"/verify.js")+"?jsCallback="+n.callbackName+c+"&srcurlD="+a.depth+"&ssl="+n.ssl+"&refD="+v+n.tagIntegrityFlag+n.tagHasPassbackFlag+"&htmlmsging="+(w?"1":"0"),(a=i(s).join("&"))&&(n+="&"+a),(!1===u||f)&&(n=n+("&atp_isBodyExistOnLoad="+(u?"1":"0"))+("&atp_isOnHead="+(f?"1":"0"))),r="srcurl="+encodeURIComponent(r),(u=window._at_win[d("=@42E:@?")][d("2?46DE@C~C:8:?D")])&&0<u.length){for(f=[],f[0]=window._at_win.location.protocol+"//"+window._at_win.location.hostname,a=0;a<u.length;a++)f[a+1]=u[a];u=f.reverse().join(",")}else u=null;u&&(r+="&ancChain="+encodeURIComponent(u)),u=4e3,/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(u=2e3),n+="&callback="+e(s,"callback"),(s=e(s,"referrer"))&&(s="&referrer="+s,n.length+s.length<=u&&(n+=s));var C=window[d("5@4F>6?E")][d(":>286D")],x=[];if(C)for(var y=0;y<C.length;y++)2>y&&x.push(encodeURIComponent(C[y].src));return x&&(r+="&args="+x.join("###")),h.length+_.length+n.length<=u&&(n+=_,r+=h),n+="&eparams="+encodeURIComponent(d(r))+"&"+t.getVersionParamName()+"="+t.getVersion()}function o(t){try{if(1>=t.depth)return{url:"",depth:""};var e,n=[];n.push({win:window._at_win.top,depth:0});for(var i,r=1,a=0;r>0&&100>a;){try{if(a++,i=n.shift(),r--,0<i.win.location.toString().length&&i.win!=t)return 0==i.win.document.referrer.length||0==i.depth?{url:i.win.location,depth:i.depth}:{url:i.win.document.referrer,depth:i.depth-1}}catch(o){}e=i.win.frames.length;for(var d=0;e>d;d++)n.push({win:i.win.frames[d],depth:i.depth+1}),r++}return{url:"",depth:""}}catch(s){return{url:"",depth:""}}}function d(t){new String;var e,n,i,r=new String;for(e=0;e<t.length;e++)i=t.charAt(e),n="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(i),n>=0&&(i="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((n+47)%94)),r+=i;return r}function c(){for(var t=[],e="0123456789abcdef",n=0;36>n;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var i=t.join("");return i}function w(){return Math.floor(1e12*(Math.random()+""))}function l(){try{if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(1==document.webkitHidden||0==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject))return 1;if("function"==typeof window.callPhantom)return 99;try{if("function"==typeof window.top.callPhantom)return 99}catch(t){}var e=!1;try{new Text("!")}catch(n){e=!0}var i=!1;try{var r=document.createElement("p");r.innerText=".",r.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px",i=void 0!=r.style.textShadow}catch(a){}return 0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&e&&i&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(o){return 0}}this.createRequest=function(){var e;e=window._at_win.at_config?window._at_win.at_config.bst2tid?window._at_win.at_config.bst2tid:window._at_win.at_config.at_GetRnd?window._at_win.at_config.at_GetRnd():w():w();var i,o=window.parent.postMessage&&window.JSON,d=!0;if(o)try{var s,l=window._at_win.at_config.bst2turl||"",u="bst2t_"+e;if(document.createElement&&(s=document.createElement("iframe"))&&(s.name=s.id=window._at_win.at_config.emptyIframeID||"iframe_"+w(),s.width=0,s.height=0,s.id=u,s.style.display="none",s.src=l),i=s,window._at_win.document.body)window._at_win.document.body.insertBefore(i,window._at_win.document.body.firstChild),d=!0;else{var f=0,p=function(){if(window._at_win.document.body)try{window._at_win.document.body.insertBefore(i,window._at_win.document.body.firstChild)}catch(t){}else f++,150>f&&setTimeout(p,20)};setTimeout(p,20),d=!1}}catch(g){}var m=!1,l=window._at_win,u=0;s=!1;try{for(at_i=0;10>=at_i;at_i++){if(null==l.parent||l.parent==l){0==at_i&&(m=!0);break}if(!(0<l.parent.location.toString().length)){m=!1;break}l=l.parent,u++,m=!0}}catch(h){m=!1}0==l.document.referrer.length?m=l.location:m?m=l.location:(m=l.document.referrer,s=!0),window._at_win._atScripts||(window._at_win._atScripts=[]);var _=document.getElementsByTagName("script");for(at_i in _){var v=_[at_i].src,A=window._at_win.at_config.reqex||/^[ \t]*(http(s)?:\/\/)?[a-z\-]*cdn(s)?\.hegek7\.com:?[0-9]*\/atv.js/;if(v&&v.match(A)&&!n(window._at_win._atScripts,_[at_i])){this.at_script=_[at_i],window._at_win._atScripts.push(_[at_i]);var b;A={};try{for(var B=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),C=B.exec(v);null!=C;)"eparams"!==C[1]&&(A[C[1]]=C[2]),C=B.exec(v);b=A}catch(x){b=A}return b.uid=e,b.guid=c(),b.script=this.at_script,b.callbackName="__verify_callback_"+b.uid,b.tagAdtag=null,b.tagPassback=null,b.tagIntegrityFlag="",b.tagHasPassbackFlag="",0==(null!=b.tagformat&&"2"==b.tagformat)&&(e=r(b.script),b.tagAdtag=e.tagAdTag,b.tagPassback=e.tagPassback,e.isBadImp?b.tagIntegrityFlag="&isbadimp=1":e.hasPassback&&(b.tagHasPassbackFlag="&tagpb=1")),b.protocol="http:",b.ssl="0","https"==b.script.src.match("^https")&&"https"==window._at_win.location.toString().match("^https")&&(b.protocol="https:",b.ssl="1"),t(b),a(this,b,m,l,u,s,o,d,_[at_i]&&_[at_i].parentElement&&_[at_i].parentElement.tagName&&"HEAD"===_[at_i].parentElement.tagName)}}},this.sendRequest=function(t){var n=e(t,"tagformat");return n&&"2"==n?$atbs.domUtilities.addScriptResource(t,document.body):s(t),!0},this.isApplicable=function(){return!0},this.onFailure=function(){var t=window._at_win._atScripts,e=this.at_script;null!=t&&void 0!=t&&e&&(e=t.at_indexOf(e),-1!=e&&t.splice(e,1))},window.debugScript&&(window.CreateUrl=a),this.getVersionParamName=function(){return"ver"},this.getVersion=function(){return"1.3.4"}}function l(e,n){this.bs_baseHandlerIns=e,this.bs_handlersDefs=n,this.exec=function(){try{window._at_win=window._at_win||window,window._at_win.$atbs=window._at_win.$atbs||new c,window._at_win.at_config=window._at_win.at_config||{},window._at_win.at_config.bsAddress=window._at_win.at_config.bsAddress||"v.hegek7.com",window._at_win.at_config.bsErrAddress=window._at_win.at_config.bsErrAddress||window._at_win.at_config.bsAddress||"error.hegek7.com";var e=new t(this.bs_handlersDefs,this.bs_baseHandlerIns).handle();e&&e.length>0&&a(window._at_win.at_config.bsErrAddress+"/error.gif?a=ve",e)}catch(n){try{a(window._at_win.at_config.bsErrAddress+"/error.gif?a=ve",{atp_jsErrMsg:encodeURIComponent(n)})}catch(n){}}}}function d(t){(new Image).src=t}try{window._at_win=window._at_win||window;var u=new w,f=[];new l(u,f).exec()}catch(p){}var a=function(t,e){var n;for(n=0;n<e.length;n++){var i=o(t,e[n]);d(i)}};try{}catch(g){}}();