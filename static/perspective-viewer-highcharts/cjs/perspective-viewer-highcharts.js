!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("@finos/perspective/dist/esm/config"),require("core-js/modules/web.dom-collections.iterator"),require("highcharts-more"),require("highcharts/modules/heatmap"),require("highcharts/modules/boost"),require("highcharts/modules/treemap"),require("highcharts/modules/sunburst"),require("highcharts-grouped-categories"),require("gradient-parser"),require("@finos/perspective-viewer/dist/esm/utils"),require("detectie"),require("@finos/perspective-viewer/dist/esm/utils.js"),require("core-js/modules/es.string.replace")):"function"==typeof define&&define.amd?define(["highcharts","@finos/perspective/dist/esm/config","core-js/modules/web.dom-collections.iterator","highcharts-more","highcharts/modules/heatmap","highcharts/modules/boost","highcharts/modules/treemap","highcharts/modules/sunburst","highcharts-grouped-categories","gradient-parser","@finos/perspective-viewer/dist/esm/utils","detectie","@finos/perspective-viewer/dist/esm/utils.js","core-js/modules/es.string.replace"],t):"object"==typeof exports?exports["perspective-viewer-highcharts"]=t(require("highcharts"),require("@finos/perspective/dist/esm/config"),require("core-js/modules/web.dom-collections.iterator"),require("highcharts-more"),require("highcharts/modules/heatmap"),require("highcharts/modules/boost"),require("highcharts/modules/treemap"),require("highcharts/modules/sunburst"),require("highcharts-grouped-categories"),require("gradient-parser"),require("@finos/perspective-viewer/dist/esm/utils"),require("detectie"),require("@finos/perspective-viewer/dist/esm/utils.js"),require("core-js/modules/es.string.replace")):e["perspective-viewer-highcharts"]=t(e.highcharts,e["@finos/perspective/dist/esm/config"],e["core-js/modules/web.dom-collections.iterator"],e["highcharts-more"],e["highcharts/modules/heatmap"],e["highcharts/modules/boost"],e["highcharts/modules/treemap"],e["highcharts/modules/sunburst"],e["highcharts-grouped-categories"],e["gradient-parser"],e["@finos/perspective-viewer/dist/esm/utils"],e.detectie,e["@finos/perspective-viewer/dist/esm/utils.js"],e["core-js/modules/es.string.replace"])}(window,(function(e,t,i,s,n,o,r,l,a,c,h,u,p,d){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=17)}([function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t,i){(e.exports=i(15)(!1)).push([e.i,":host{background-color:var(--plugin--background,#fff)}:host #container{position:absolute;width:calc(100% - 30px);height:calc(100% - 30px);display:grid;margin:15px;justify-content:stretch;grid-template-rows:repeat(auto-fit,minmax(400px,1fr));grid-template-columns:repeat(auto-fit,minmax(400px,1fr));overflow-y:auto}:host .chart{position:relative;width:100%;height:100%;min-width:0;min-height:0}:host .chart:last-child:first-child{position:absolute;top:0;left:0;right:0;bottom:0}:host text,:host tspan{font-family:var(--interface--font-family,Arial,sans-serif);fill:var(--highcharts-label--fill,#666)!important}:host .highcharts-null-point{fill:none}:host .highcharts-background{display:none}:host .highcharts-label-box.highcharts-tooltip-box:not([isShadow]){fill:var(--highcharts-tooltip--background,#fff)}:host .highcharts-yaxis-grid path.highcharts-grid-line{stroke:var(--highcharts-grid-line--stroke,#e6e6e6)}:host .highcharts-sunburst-series path,:host .highcharts-treemap-series rect{stroke:var(--plugin--background,#fff)}:host rect,:host svg image{opacity:var(--highcharts-rect--opacity,.5)}:host circle,:host path{opacity:var(--highcharts-circle--opacity,.8)}",""])},function(e,t){e.exports='<template id="perspective-highcharts">\n    <div id="container">\n\n    </div>\n</template>'},function(e,t){e.exports=s},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=l},function(e,t){e.exports=a},function(e,t){e.exports=c},function(e,t){e.exports=h},function(e,t){e.exports=u},function(e,t){e.exports=p},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",s=e[3];if(!s)return i;if(t&&"function"==typeof btoa){var n=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=s.sources.map((function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"}));return[i].concat(o).concat([n]).join("\n")}var r;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(s[o]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&s[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(e,t){e.exports=d},function(e,t,i){"use strict";i.r(t);i(2);var s=i(0),n=i.n(s),o=i(3),r=i.n(o),l=i(4),a=i.n(l),c=i(5),h=i.n(c),u=i(6),p=i.n(u),d=i(7),f=i.n(d),g=i(8),m=i.n(g),b=i(9),_=i.n(b),y=i(10),x=i.n(y);const v=n.a;let w=v.Axis.prototype,O=w.render;h()(n.a),p()(n.a),m()(n.a),_()(n.a),x()(n.a),f()(n.a);const j=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],k=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"];v.setOptions({colors:k}),function(e){e.wrap(e.seriesTypes.scatter.prototype,"translate",(function(e){e.apply(this,Array.prototype.slice.call(arguments,1)),"colored"===this.chart.userOptions.chart.type.slice(0,7)&&this.translateColors.call(this)}));var t=e.seriesTypes,i=e.merge,s=e.extendClass,n=e.getOptions().plotOptions,o={optionalAxis:"colorAxis",colorKey:"colorValue",translateColors:t.heatmap&&t.heatmap.prototype.translateColors};n.coloredColumn=i(n.column,{}),t.coloredColumn=s(t.column,i(o,{type:"coloredColumn",axisTypes:["xAxis","yAxis","colorAxis"]})),n.coloredScatter=i(n.scatter,{}),t.coloredScatter=s(t.scatter,i(o,{type:"coloredScatter",axisTypes:["xAxis","yAxis","colorAxis"]})),n.coloredBubble=i(n.bubble,{}),t.coloredBubble=s(t.bubble,i(o,{type:"coloredBubble",axisTypes:["xAxis","yAxis","colorAxis"]})),e.wrap(e.seriesTypes.sunburst.prototype,"translate",(function(e,t){e.call(this,t),this.translateColors()})),e.seriesTypes.sunburst.prototype.translateColors=function(){var t=this,i=this.options.nullColor,s=this.colorAxis,n=this.colorKey;e.each(this.data,(function(e){var o,r=e[n];(o=e.options.color||(e.value?s&&void 0!==r?s.toColor(r,e):e.color||t.color:i))&&(e.color=o)}))},e.seriesTypes.sunburst.prototype.colorKey="colorValue",w.render=function(){if(this.isGrouped&&(this.labelsGridPath=[]),void 0===this.originalTickLength&&(this.originalTickLength=this.options.tickLength),this.options.tickLength=this.isGrouped?.001:this.originalTickLength,O.call(this),!this.isGrouped)return this.labelsGrid&&this.labelsGrid.attr({visibility:"hidden"}),!1;var e=this,t=e.options,i=e.hasVisibleSeries||e.hasData,s=e.labelsGrid,n=e.labelsGridPath,o=e.tickWidth;return s||(s=e.labelsGrid=e.chart.renderer.path().attr({strokeWidth:o,"stroke-width":o,stroke:t.tickColor||""}).add(e.axisGroup),t.tickColor||s.addClass("highcharts-tick")),s.attr({d:n,visibility:i?"visible":"hidden"}),e.labelGroup.attr({visibility:i?"visible":"hidden"}),function e(t,i,s){for(var n,o=t.length;o--;)(n=t[o][i])&&e(n,i,s),s(t[o])}(e.categoriesTree,"categories",(function(t){var s=t.tick;return!!s&&(s.startAt+s.leaves-1<e.min||s.startAt>e.max?(s.label.hide(),s.destroyed=0):s.label.attr({visibility:i?"visible":"hidden"}),!0)})),!0}}(v);var A=i(11);function T(e){let t;t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,`--highcharts-${e}--gradient`):getComputedStyle(this).getPropertyValue(`--highcharts-${e}--gradient`);const i=A.parse(t)[0].colorStops;return i.map((e,t)=>{let s;return s="rgb"===e.type?`rgb(${e.value.join(",")})`:`#${e.value}`,[Number.parseFloat(e.length?e.length.value/100:`${t/(i.length-1)}`),s]})}const S=(()=>{let e;return function(t){if(t||void 0===e){e={};for(let t of["positive","negative","full"])e[t]=T.bind(this)(t)}return e}})();function C(e,t,i){let s,{positive:n,negative:o,full:r}=S.bind(this)(i);s=t[0]>=0?n:t[1]<=0?o:r,Object.assign(e,{colorAxis:{min:t[0],max:t[1],stops:s,reversed:!1,startOnTick:!1,endOnTick:!1}}),e.legend.reversed=!0,e.legend.floating=!1,e.legend.enabled=!0}const M="|";function P(e,t,i){let s,n=0;for(;n<e.length;n++){let o=void 0===i||e[n].stack===i;if(e[n].name==t&&o){s=e[n];break}}return n==e.length&&(s={name:t,connectNulls:!0,data:[]},i&&(s.stack=i),e.push(s)),s}function q(e,t,i){let s={name:t,connectNulls:!0,data:e};return i&&(s.stack=i),s}function z(e){return null===e?"-":e}class W{constructor(e,t){this.depth=e,this.json=t,this.top={name:"",depth:0,categories:[]}}add_label(e){let t={name:e[e.length-1],depth:e.length,categories:[]};for(var i=this.top,s=0;s<e.length-1;s++)for(var n=0;n<i.categories.length;n++)if(i.categories[n].name===e[s]){i=i.categories[n];break}return i.categories.push(t),t}*[Symbol.iterator](){let e=this.top;for(let t of this.json){let i=t.__ROW_PATH__||[""];i.length>0&&i.length<this.depth?e=this.add_label(i):i.length>=this.depth&&(e.categories.push(z(i[i.length-1])),yield t)}}}class L{constructor(e,t){this.columns=e,this.depth=t,this.axis={name:"",depth:0,categories:[]},this.fill_axis()}add_label(e){let t={name:e[e.length-1],depth:e.length,categories:[]};for(var i=this.axis,s=0;s<e.length-1;s++)for(var n=0;n<i.categories.length;n++)if(i.categories[n].name===e[s]){i=i.categories[n];break}return i.categories.push(t),t}fill_axis(){let e=this.axis;if(void 0!==this.columns.__ROW_PATH__)for(let t of this.columns.__ROW_PATH__)if(t.length>0&&t.length<this.depth)e=this.add_label(t);else if(t.length>=this.depth){e.categories.push(z(t[t.length-1]));continue}}}class N{constructor(e){this.rows=e}*[Symbol.iterator](){for(let e of this.rows)void 0===this.columns&&(this.columns=Object.keys(e).filter(e=>"__ROW_PATH__"!==e),this.is_stacked=this.columns.map(e=>e.substr(e.lastIndexOf(M)+1,e.length)).filter((e,t,i)=>i.indexOf(e)===t).length>1),yield e}}class R{constructor(e,t){this.columns=e,this.column_names=Object.keys(this.columns).filter(e=>"__ROW_PATH__"!==e),this.is_stacked=this.column_names.map(e=>e.substr(e.lastIndexOf(M)+1,e.length)).filter((e,t,i)=>i.indexOf(e)===t).length>1,this.pivot_length=t}*[Symbol.iterator](){for(let e of this.column_names){let t=this.columns[e];if(this.columns.__ROW_PATH__){let e=[];for(let i=0;i<t.length;i++)this.columns.__ROW_PATH__[i].length===this.pivot_length&&e.push(t[i]);t=e}yield{name:e,data:t}}}}class H{constructor(e){this.dict={},this.names=[],this.type=e}clean(e){return"string"===this.type?(e in this.dict||(this.dict[e]=Object.keys(this.dict).length,this.names.push(z(e))),this.dict[e]):void 0===e||""===e||isNaN(e)?null:e}}class ${constructor(e,t){this.schema=e,this.xaxis_clean=new H(e[t[0]]),this.yaxis_clean=new H(e[t[1]]),this.color_clean=new H(e[t[2]])}make(e,t,i){let s={};if(s.x=e[t[0]],null!==s.x||null!==e[t[1]]){if(s.x=this.xaxis_clean.clean(s.x),s.y=0,t.length>1&&(s.y=e[t[1]],s.y=this.yaxis_clean.clean(s.y)),t.length>2){let n=e[t[2]];if("string"===this.schema[t[2]]){let e=this.color_clean.clean(n);s.marker={lineColor:e,fillColor:e}}else isNaN(n)||(i[0]=Math.min(i[0],n),i[1]=Math.max(i[1],n)),s.colorValue=n}return t.length>3&&(s.z=isNaN(e[t[3]])?1:e[t[3]]),"__ROW_PATH__"in e&&(s.name=e.__ROW_PATH__.join(", ")),s}}make_col(e,t,i,s,n,o,r=!1){let l=[],a=e;if(0===e.length)return l;if(void 0===e.length){a=[];for(let i of t)a.push(e[i])}for(let e=0;e<a[0].length;e++){if(null===a[0][e]||void 0===a[0][e]||""===a[0][e])continue;let c={};if(n){if(n[e].length!==s)continue;c.name=n[e].join(", ")}if(c.x=this.xaxis_clean.clean(a[0][e]),i>1&&(c.y=this.yaxis_clean.clean(a[1][e])),t.length>2&&null!==t[2]){let i=a[2][e];if("string"===this.schema[t[2]])if(r)c.colorValue=i;else{let e=this.color_clean.clean(i);c.marker={lineColor:e,fillColor:e},c.colorValue=e}else isNaN(i)||(o[0]=Math.min(o[0],i),o[1]=Math.max(o[1],i)),c.colorValue=i}if(t.length>3&&null!==t[3]){let t=a[3][e];c.z=r?t:isNaN(t)?1:t}let h=3;for(;"string"==typeof t[++h];)c.tooltip=[]||!1,c.tooltip.push(a[h][e]);l.push(c)}return l}}function V(e,t,i,s,n){const o=new R(e,s.length);let r=[];const l=i.filter(e=>null!==e);let a=[1/0,-1/0],c=new $(t,o.column_names),h=o.columns.__ROW_PATH__;if(0===n.length){let e=q(c.make_col(o.columns,i,l.length,o.pivot_length,h,a,!0)," ");r.push(e)}else{let e={};if(h){let e=[];for(let t=0;t<h.length;t++)h[t].length===o.pivot_length&&e.push(h[t]);h=e}let t=0;for(let s of o){let n=s.name.split(M),u=n.slice(0,n.length-1).join(", ")||" ";for(void 0===e[u]&&(e[u]=[]),e[u].push(s.data);null===i[++t];)e[u].push(null);if(e[u].length===i.length){let s=c.make_col(e[u],i,l.length,o.pivot_length,h,a);t=0;let n=q(s,u);r.push(n)}}}return[r,{categories:c.xaxis_clean.names},a,{categories:c.yaxis_clean.names}]}function G(e,t,i){let[s,n]=function(e,t){let i=new W(t.length,e),s=new N(i);var n=[];for(let e of s)for(let t of s.columns){let i=t.split(M),o=i[i.length-1];i=s.is_stacked?i.join(", ")||o:i.slice(0,i.length-1).join(", ")||" ";let r=P(n,i,o),l=e[t];l=void 0===l||""===l?null:l,r.data.push(l)}return[n,i.top]}(e,t);"string"!==i&&void 0!==i&&(s=s.reverse());let o=[1/0,-1/0],r=function(e){let t=e.map(e=>e.name.split(",")),i={name:null,depth:0,categories:[]},s=t[0].length;for(let e=0;e<t.length;++e){let n=t[e],o=i;for(let e=0;e<n.length;++e){let t=n[e];if(e===s-1)o.categories.push(t);else{let i=o.categories.length;if(i>0&&o.categories[i-1].name==t)o=o.categories[i-1];else{let i={name:t,depth:e+1,categories:[]};o.categories.push(i),o=i}}}}return i}(s),l=[];for(let e=0;e<s[0].data.length;++e)for(let t=0;t<s.length;++t){let i=s[t].data[e];l.push([e,t,i]),o[0]=Math.min(o[0],i),o[1]=Math.max(o[1],i)}if(o[0]*o[1]<0){let e=Math.max(Math.abs(o[0]),Math.abs(o[1]));o=[-e,e]}return s=l,[s,n,r,o]}class Y extends W{*[Symbol.iterator](){let e=this.top;for(let t of this.json){let i=t.__ROW_PATH__||[""];i.length>0&&i.length<this.depth?e=this.add_label(i):i.length>=this.depth&&e.categories.push(z(i[i.length-1])),yield t}}}function E(e,t,i,s){let n=new Y(t.length,e),o=new N(n),r=[];for(let e of o){let s=e.__ROW_PATH__.map(e=>null===e?"-":e),n=s.join(", "),l=s.slice(-1)[0],a=s.slice(0,-1).join(", ");for(let s=0;s<o.columns.length;s++){let c=o.columns[s],h=c.split(M),u=h[h.length-1];if(h=h.slice(0,h.length-1).join(", ")||" ",s%i.length==0){P(r,h,u).data.push({id:n,name:l,value:e[c],colorValue:i.length>1?e[o.columns[s+1]]:void 0,parent:a,leaf:e.__ROW_PATH__.length===t.length})}}}let l=function(e,t){let i=[];for(let s of e){let e=s.name.split(M);i.push({layoutAlgorithm:"squarified",allowDrillToNode:!0,alternateStartingDirection:!0,data:s.data.slice(1),levels:t,title:e,stack:s.stack})}return i}(r,function(e){let t=[];for(let i=0;i<e.length;i++)t.push({level:i+1,borderWidth:2*(e.length-i),dataLabels:{enabled:!0,allowOverlap:!0,style:{opacity:[1,.3][i]||0,fontSize:`${[14,10][i]||0}px`,textOutline:null}}});return t}(t)),a=function(e,t,i){let s;if(e.length>=2){s=[1/0,-1/0];for(let e of t){let t=e.data;for(let e=1;e<t.length;++e)(i&&t[e].leaf||!i)&&(s[0]=Math.min(s[0],t[e].colorValue),s[1]=Math.max(s[1],t[e].colorValue));if(s[0]*s[1]<0){let e=Math.max(Math.abs(s[0]),Math.abs(s[1]));s=[-e,e]}}}return s}(i,r,s);return[l,n.top,a]}i(16);var D=i(1);function F(e,t,i){const s=K(t,I(e,i));return"NaN"===s||null==s?"":`<span>${e}: <b>${s}</b></span><br/>`}function X(e,t){if(t.length<=0)return"";let i=[];for(let s=0;s<e.length;s++)i.push(`<span>${e[s]}: <b>${t[s]}</b></span><br/>`);return i.join("")}function B(e){let t=[],i=e.parent;for(t.unshift(e.name);void 0!==i;)void 0!==i.name&&t.unshift(i.name),i=i.parent;return t}function I(e,t){return t[e]}function U(e){return null!=e&&" "!==e}function K(e,t){return"datetime"===t?new Date(e).toLocaleString("en-us",Object(D.get_type_config)("datetime").format):"date"===t?new Date(e).toLocaleString("en-us",Object(D.get_type_config)("date").format):"float"===t||"integer"===t?(i=e,"float"===t?Number.parseFloat(i).toLocaleString(Object(D.get_type_config)("float").format):Number.parseInt(i).toLocaleString(Object(D.get_type_config)("float").format)):e;var i}function J(e,t,...i){if((e.series[0].data?e.series[0].data.length*e.series.length:e.series.length)>5e3)return Object.assign(e,{boost:{useGPUTranslations:-1===i.indexOf("datetime")&&-1===i.indexOf("date"),usePreAllocated:-1===i.indexOf("datetime")&&-1===i.indexOf("date")}}),e.plotOptions.series.boostThreshold=1,e.plotOptions.series.turboThreshold=0,!0}function Z(e){let t=Math.min(6,Math.max(3,Math.floor((this.clientWidth+this.clientHeight)/Math.max(300,e.series[0].data.length/3))));e.plotOptions.coloredScatter={marker:{radius:t}},e.plotOptions.scatter={marker:{radius:t}}}function Q(e,t,i,s,n,o){"string"===s?ee(e,t,n,o):function(e,t,i,s){let n={type:["datetime","date"].indexOf(s)>-1?"datetime":void 0,startOnTick:!1,endOnTick:!1,title:{style:{color:"#666666",fontSize:"14px"},text:i}};"yAxis"===t&&Object.assign(n,{labels:{overflow:"justify"}});Object.assign(e,{[t]:n})}(e,t,i,s)}function ee(e,t,i,s){if("datetime"===i)Object.assign(e,{[t]:{categories:s.categories.map(e=>new Date(e).toLocaleString("en-us",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),labels:{enabled:s.categories.length>0,autoRotation:[-5]}}});else if("date"===i)Object.assign(e,{[t]:{categories:s.categories.map(e=>new Date(e).toLocaleString("en-us",{year:"numeric",month:"numeric",day:"numeric"})),labels:{enabled:s.categories.length>0,autoRotation:[-5]}}});else{let i={categories:s.categories,labels:{enabled:s.categories.length>0,padding:0,autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}};"yAxis"!==t||e.hasOwnProperty("boost")&&"heatmap"!==e.chart.type||Object.assign(i,{title:null,tickWidth:1,reversed:!0}),Object.assign(e,{[t]:i})}}function te(e,t){let i="scatter",s="xy";"y_line"===t?(s="y",i="line"):"y_area"===t?(s="y",i="area"):"y_scatter"===t?(s="y",i="scatter"):t.indexOf("bar")>-1?(s="y",i="column"):"treemap"==t?(s="hierarchy",i="treemap"):"sunburst"==t?(s="hierarchy",i="sunburst"):"scatter"===t?(s="xy",i=e.length<=3||null===e[3]?"scatter":"bubble"):"heatmap"===t&&(s="xyz",i="heatmap");const n=this,o=this._config,r=(l=o.row_pivots,a=o.column_pivots,{row:l,column:a});var l,a;return{chart:{type:i,inverted:"x_"===t.slice(0,2),animation:!1,zoomType:"scatter"===t?"xy":"x",resetZoomButton:{position:{align:"left"}}},navigation:{buttonOptions:{enabled:!1}},credits:{enabled:!1},title:{text:null},legend:{align:"right",verticalAlign:"top",y:10,layout:"vertical",enabled:!1,itemStyle:{fontWeight:"normal"}},boost:{enabled:!1},plotOptions:{area:{stacking:"normal",marker:{enabled:!1,radius:0}},line:{marker:{enabled:!1,radius:0}},coloredScatter:{},scatter:{},column:{stacking:"normal",states:{hover:{brightness:-.1,borderColor:"#000000"}}},heatmap:{nullColor:"rgba(0,0,0,0)"},series:{animation:!1,nullColor:"rgba(0,0,0,0)",boostThreshold:0,turboThreshold:6e4,borderWidth:0,connectNulls:!0,lineWidth:-1===t.indexOf("line")?0:1.5,states:{hover:{lineWidthPlus:0}},point:{events:{click:async function(){let s=[],r=[];if("bubble"===i&&"scatter"===t||"scatter"===i&&"scatter"===t||"scatter"===i&&"line"===t)r=this.series.userOptions.name.split(", "),s=this.name?this.name.split(", "):[];else{if("column"!==i&&"line"!==i&&"scatter"!==i&&"area"!==i)return void console.log(`Click dispatch for ${t} ${i} not supported.`);r=this.series.userOptions.name.split(", "),s=B(this.category)}const l=o.row_pivots.map((e,t)=>[e,"==",s[t]]),a=o.column_pivots.map((e,t)=>[e,"==",r[t]]),c=o.filter.concat(l).concat(a).filter(e=>!!e[e.length-1]),h=this.index+1,u=h+1;let p=[];if("bubble"===i&&"scatter"===t||"scatter"===i&&"scatter"===t||"scatter"===i&&"line"===t)p=e;else{const e=this.series.userOptions?this.series.userOptions.stack:"",t=r[r.length-1];(e=>""==e.replace(/\s/g,""))(t)?p.push(e):p.push(t)}const d=await n._view.to_json({start_row:h,end_row:u});n.dispatchEvent(new CustomEvent("perspective-click",{bubbles:!0,composed:!0,detail:{column_names:p,config:{filters:c},row:d[0]}}))}}}}},tooltip:{animation:!1,backgroundColor:"#FFFFFF",borderColor:"#777777",followPointer:!1,valueDecimals:2,formatter:function(t){return n._view.schema(!1).then(i=>{let n=function(e,t,i,s,n){const o=n.row,r=n.column,l=o.length>0,a=r.length>0;if("y"===t){let t="",s="";if(l){t=X(o,B(e.key))}if(a){s=X(r,e.series.userOptions.name.split(", "))}const n=e.series.userOptions.stack,c=I(n,i);return`${t}\n                ${s}\n                <span>${n}: </span><b>${K(e.y,c)}</b>`}if("xy"===t){const t=U(s[0]),n=U(s[1]),c=U(s[2]),h=U(s[3]);let u="",p="",d="",f="",g="",m="",b="";if(l){u=X(o,e.key.split(","))}if(a){p=X(r,e.point.series.name.split(","))}if(t){f=F(s[0],e.x,i)}if(n){g=F(s[1],e.y,i)}if(c){m=F(s[2],e.point.colorValue,i)}if(h){b=F(s[3],e.point.z,i)}if(e.point.tooltip&&e.point.tooltip.length>0)for(let t=0;t<e.point.tooltip.length;t++)d+=F(s[4+t],e.point.tooltip[t],i);return[u,p,f,g,m,b,d].join("")}if("xyz"===t)return`<span>${K(e.point.value)}</span>`;if("hierarchy"===t)return`<span>${e.point.id}: </span><b>${K(e.x)}</b>`;let c;return c=e.x?e.x:e.y,c}(this,s,i,e,r);t.label.attr({text:n})}).catch(e=>console.error(e)),"Loading..."},positioner:function(e,t,i){let s,n,o=this.chart;return s=i.plotX+e>o.plotWidth?i.plotX+o.plotLeft-e-5:i.plotX+o.plotLeft,n=i.plotY+t>o.plotHeight?i.plotY+o.plotTop-t:i.plotY+o.plotTop,{x:s,y:n}}}}}var ie,se=i(12),ne=i(13),oe=i.n(ne);function re(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(re.prototype,HTMLElement.prototype),Object.setPrototypeOf(re,HTMLElement);const le=Symbol("Highcharts private");function ae(e){let t;return this[le]=this[le]||{},t=this[le].chart?this[le].chart:this[le].chart=document.createElement("perspective-highcharts"),document.body.contains(t)||(e.innerHTML="",e.appendChild(t)),t}const ce=(e,t,i)=>(async function(s,n,o,r,l){if(t&&(this._config=await n.get_config(),o.cancelled))return;const a=await n.get_config(),c=a.row_pivots,h=a.column_pivots,u=a.columns,p=JSON.parse(this.getAttribute("columns")),[d,f]=await Promise.all([n.schema(!1),this._table.schema(!1)]);let g;if(o.cancelled)return;let m=[],b=u.length>0?u[0]:void 0,_=d[b],y=u.length>1?u[1]:void 0,x=d[y],v=f[c.length>0?c[c.length-1]:void 0],w=f[h.length>0?h[h.length-1]:void 0],O=u.length;try{if("scatter"===e){let t;t=r||l?await n.to_columns({end_col:r,end_row:l,leaves_only:!0}):await n.to_columns();const s=m[0]=te.call(this,p,e),[o,a,u,f]=V(t,d,p,c,h);s.legend.floating=o.length<=20,s.legend.enabled=h.length>0,s.series=o,s.colors=o.length<=10?j:k,u[0]!==1/0?(p.length<=3||null===p[3]?s.chart.type="coloredScatter":s.chart.type="coloredBubble",C.call(this,s,u,i)):p.length>3&&null!==p[3]&&(s.chart.type="bubble"),O<3&&J(s,0,x),Q(s,"xAxis",b,_,_,a),Q(s,"yAxis",y,x,x,f),Z.call(this,s)}else if("heatmap"===e){let t;t=r||l?await n.to_json({end_col:r,end_row:l,leaves_only:!1}):await n.to_json();let s=m[0]=te.call(this,u,e),[o,a,h,p]=G(t,c,w);s.series=[{name:null,data:o,nullColor:"none"}],s.legend.enabled=!0,s.legend.floating=!1,C.call(this,s,p,i),J(s,0,x),ee(s,"xAxis",v,a),ee(s,"yAxis",w,h)}else if("treemap"===e||"sunburst"===e){let t;t=r||l?await n.to_json({end_col:r,end_row:l,leaves_only:!1}):await n.to_json();let[s,,o]=E(t,c,u,"treemap"===e);for(let t of s){let n=te.call(this,u,e);n.series=[t],s.length>1&&(n.title.text=t.title),n.plotOptions.series.borderWidth=1,n.legend.floating=!1,o&&C.call(this,n,o,i),m.push(n)}}else if("line"===e){let t,i=m[0]=te.call(this,u,e);if(0===h.length){let e;e=r||l?await n.to_columns({end_col:r,end_row:l,leaves_only:!0}):await n.to_columns(),t=await V(e,d,u,c,h)}else{let e;e=r||l?await n.to_json({end_col:r,end_row:l,leaves_only:!1}):await n.to_json(),t=await function(e,t,i,s,n){let o=new W(s.length,e),r=new N(o),l=[],a=[1/0,-1/0],c=new $(t,i);if(0===n.length){let e=P(l," ");for(let t of r){let s=c.make(t,i,a);s&&e.data.push(s)}}else{let t,i,s=[],n=Object.keys(e[0]).filter(e=>"__ROW_PATH__"!==e);for(let e of n){let n=e.split(M),o=n.slice(0,n.length-1).join(", ")||" ";if(void 0===t&&(t=o),i=P(l,t),t===o)s.push(e);else{for(let e of r){let t=c.make(e,s,a);t&&i.data.push(t)}t=o,s=[e]}}for(let e of r){let t=c.make(e,s,a);t&&i.data.push(t)}}return[l,{categories:c.xaxis_clean.names},a,{categories:c.yaxis_clean.names}]}(e,d,u,c,h)}const s=t[0],o=t[1],a=t[3],p=s.length<=10?j:k;i.legend.floating=s.length<=20,i.legend.enabled=h.length>0,i.series=s,i.plotOptions.scatter.marker={enabled:!1,radius:0},i.colors=p,J(i,0,x)&&delete i.chart.type,Q(i,"xAxis",b,_,_,o),Q(i,"yAxis",y,x,x,a)}else{let t,i=m[0]=te.call(this,u,e);t=r||l?await n.to_columns({end_col:r,end_row:l,leaves_only:!1}):await n.to_columns();let[s,o]=function(e,t){let i=[],s=new L(e,t.length),n=new R(e,t.length);for(let e of n){let t=e.name.split(M),s=t[t.length-1];t=n.is_stacked?t.join(", ")||s:t.slice(0,t.length-1).join(", ")||" ";let o=q(e.data.map(e=>void 0===e||""===e?null:e),t,s);i.push(o)}return[i,s.axis]}(t,c);i.series=s,i.colors=s.length<=10?j:k,i.legend.enabled=h.length>0||s.length>1,i.legend.floating=s.length<=20,i.plotOptions.series.dataLabels={allowOverlap:!1,padding:10},(e.indexOf("scatter")>-1||e.indexOf("line")>-1)&&J(i,0,x),ee(i,"xAxis",v,o),Object.assign(i,{yAxis:{startOnTick:!1,endOnTick:!1,title:{text:u.join(",  "),style:{color:"#666666",fontSize:"14px"}},labels:{overflow:"justify"}}})}}finally{g=ae.call(this,s),(i||this.hasAttribute("updating"))&&g.delete()}g.render(e,m,this)});Object(se.bindTemplate)(a.a,r.a)(ie=class extends re{constructor(){super(),this._charts=[]}connectedCallback(){this._container=this.shadowRoot.querySelector("#container")}render(e,t,i){if(this._charts.length>0&&this._charts.length===t.length){let s=0;for(let o=0;o<this._charts.length;o++){const r=this._charts[o];let l=t[s++];if(l.boost){let e=r.renderTo;try{r.destroy()}catch(e){console.warn("Scatter plot destroy() call failed - this is probably leaking memory")}this._charts[o]=n.a.chart(e,l)}else if("scatter"===e){let e={series:l.series,plotOptions:{}};Z.call(i,e),r.update(e)}else{let e={series:l.series,xAxis:l.xAxis,yAxis:l.yAxis};r.update(e)}}}else{this.delete();for(let e of t){let t=document.createElement("div");t.className="chart",this._container.appendChild(t),this._charts.push(()=>n.a.chart(t,e))}for(let e=0;e<this._charts.length;e++)this._charts[e]=this._charts[e]()}this._charts.every(e=>this._container.contains(e.renderTo))||(this.remove(),this._charts.map(e=>this._container.appendChild(e.renderTo))),t.length>1&&this.resize(),oe()()&&setTimeout(()=>this.resize())}resize(){this._charts&&this._charts.length>0&&this._charts.map(e=>e.reflow())}remove(){this._charts=[];for(let e of Array.prototype.slice.call(this._container.children))"DIV"===e.tagName&&this._container.removeChild(e)}delete(){for(let e of this._charts)try{e.destroy()}catch(e){console.warn("Scatter plot destroy() call failed - this is probably leaking memory")}this.remove()}});var he=i(14);function ue(){this[le]&&this[le].chart.resize()}function pe(){this[le]&&this[le].chart.delete()}const de=25e3,fe=25e3,ge=1e5,me=25e3,be=2500,_e=1e3,ye=2e4,xe=100,ve=100,we=100,Oe=100,je=24,ke=24,Ae=24,Te={x_bar:{name:"X Bar Chart",create:ce("x_bar",!0),update:ce("x_bar",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:me,max_columns:Oe},y_bar:{name:"Y Bar Chart",create:ce("y_bar",!0),update:ce("y_bar",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:me,max_columns:Oe},y_line:{name:"Y Line Chart",create:ce("y_line",!0),update:ce("y_line",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:de,max_columns:xe},y_scatter:{name:"Y Scatter Chart",create:ce("y_scatter",!0),update:ce("y_scatter",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:ge,max_columns:we},y_area:{name:"Y Area Chart",create:ce("y_area",!0),update:ce("y_area",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:fe,max_columns:ve},xy_line:{name:"X/Y Line Chart",create:ce("line",!0),update:ce("line",!1),resize:ue,initial:{type:"number",count:2,names:["X Axis","Y Axis","Tooltip"]},selectMode:"toggle",delete:pe,max_cells:ge,max_columns:we},xy_scatter:{name:"X/Y Scatter Chart",create:ce("scatter",!0),update:ce("scatter",!1),resize:ue,styleElement:ce("scatter",!1,!0),initial:{type:"number",count:2,names:["X Axis","Y Axis","Color","Size","Tooltip"]},selectMode:"toggle",delete:pe,max_cells:ge,max_columns:we},treemap:{name:"Treemap",create:ce("treemap",!0),update:ce("treemap",!1),resize:ue,styleElement:ce("treemap",!1,!0),initial:{type:"number",count:1,names:["Size","Color"]},selectMode:"toggle",delete:function(){},max_cells:be,max_columns:je},sunburst:{name:"Sunburst",create:ce("sunburst",!0),update:ce("sunburst",!1),styleElement:ce("sunburst",!1,!0),resize:ue,initial:{type:"number",count:1,names:["Size","Color"]},selectMode:"toggle",delete:function(){},max_cells:_e,max_columns:ke},heatmap:{name:"Heatmap",create:ce("heatmap",!0),update:ce("heatmap",!1),resize:ue,initial:{type:"number",count:1},selectMode:"select",delete:pe,max_cells:ye,max_columns:Ae}};!function(...e){e=e.length>0?e:Object.keys(Te);for(const t of e)Object(he.registerPlugin)(t,Te[t])}()}])}));
//# sourceMappingURL=perspective-viewer-highcharts.js.map