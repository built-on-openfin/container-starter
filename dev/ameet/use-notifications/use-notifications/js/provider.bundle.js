/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/workspace/notifications.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@openfin/workspace/notifications.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(()=>{var e={847:(e,t)=>{var a={2346:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getMostReadable=t.darkenColor=t.lightenColor=void 0;const r=n(a(6535));t.lightenColor=(e,t)=>o(e,"lighten",t),t.darkenColor=(e,t)=>o(e,"darken",t);const o=(e,t,a)=>{if(a&&(a<0||a>100))throw new Error(`${a} must be a number between 0 and 100`);return(0,r.default)(e)[t](a).toString()};t.getMostReadable=(e,t)=>r.default.mostReadable(e,t).toHexString()},2317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IconSize=t.Transition=t.LineHeight=t.FontWeight=t.FontSize=t.FontFamily=t.Shadow=t.Radius=t.UnitPx=t.Unit=t.SizeName=t.Size=t.Color=void 0,t.Color={white:"#FFFFFF",lightGray1:"#FAFBFE",lightGray2:"#F3F5F8",lightGray3:"#ECEEF1",lightGray4:"#DDDFE4",lightGray5:"#C9CBD2",neutralGray:"#7D808A",neutralGray80:"rgba(125,128,138,0.8)",silverGray:"#C0C1C2",darkGray1:"#53565F",darkGray2:"#383A40",darkGray3:"#2F3136",darkGray4:"#24262B",darkGray5:"#1E1F23",darkGray6:"#111214",openFinDarkest:"#3D39CD",openFinDarker:"#4642E0",openFin:"#504CFF",openFinLight:"#5254FB",openFinLighter:"#5C5EFE",openFinLightest:"#6864FF",functional1:"#207735",functional2:"#46C8F1",functional3:"#0A76D3",functional4:"#6CADE5",functional5:"#0A76D3",functional6:"#882BFE",functional7:"#F31818",functional8:"#C93400",functional9:"#FF5E60",functional10:"#F48F00",purple:"#8C61FF",lightblue:"#36C3FE",aqua:"#00CC88",yellow:"#FFEB00",salmon:"#FF8C4C",pink:"#FF5E60",lightpink:"#FF8FB8",white00:"rgba(255,255,255,0.0)",white10:"rgba(255,255,255,0.1)",white20:"rgba(255,255,255,0.2)",white30:"rgba(255,255,255,0.3)",white40:"rgba(255,255,255,0.4)",white50:"rgba(255,255,255,0.5)",white60:"rgba(255,255,255,0.6)",white70:"rgba(255,255,255,0.7)",white80:"rgba(255,255,255,0.8)",white90:"rgba(255,255,255,0.9)",black00:"rgba(0,0,0,0.0)",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",transparent:"transparent"},t.Size={xsmall:"xsmall",small:"small",base:"base",large:"large",xlarge:"xlarge",xxlarge:"xxlarge",xxxlarge:"xxxlarge",xxxxlarge:"xxxxlarge"},t.SizeName={[t.Size.xsmall]:"Extra Small",[t.Size.small]:"Small",[t.Size.base]:"Base",[t.Size.large]:"Large",[t.Size.xlarge]:"Extra Large",[t.Size.xxlarge]:"2X Large",[t.Size.xxxlarge]:"3X Large",[t.Size.xxxxlarge]:"4X Large"},t.Unit={[t.Size.xsmall]:4,[t.Size.small]:8,[t.Size.base]:12,[t.Size.large]:16,[t.Size.xlarge]:20,[t.Size.xxlarge]:24,[t.Size.xxxlarge]:32,[t.Size.xxxxlarge]:48},t.UnitPx={[t.Size.xsmall]:"4px",[t.Size.small]:"8px",[t.Size.base]:"12px",[t.Size.large]:"16px",[t.Size.xlarge]:"20px",[t.Size.xxlarge]:"24px",[t.Size.xxxlarge]:"32px",[t.Size.xxxxlarge]:"48px"},t.Radius={[t.Size.xsmall]:"2px",[t.Size.small]:"4px",[t.Size.base]:"8px",[t.Size.large]:"24px",pill:"100vh",round:"50%",none:"0"},t.Shadow={[t.Size.base]:"0 4px 4px rgba(0, 0, 0, 0.25)"},t.FontFamily=["Inter","system-ui","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","sans-serif"].join(","),t.FontSize={[t.Size.xsmall]:"8px",[t.Size.small]:"10px",[t.Size.base]:"12px",[t.Size.large]:"14px",[t.Size.xlarge]:"16px",[t.Size.xxlarge]:"18px",[t.Size.xxxlarge]:"20px",[t.Size.xxxxlarge]:"40px"},t.FontWeight={normal:400,bold:600},t.LineHeight={ui:1,heading:1.2,text:1.5},t.Transition={base:"200ms cubic-bezier(0.16, 1, 0.3, 1)",none:"0ms"},t.IconSize={[t.Size.xsmall]:t.UnitPx.small,[t.Size.small]:t.UnitPx.base,[t.Size.base]:"15px",[t.Size.large]:t.UnitPx.xlarge,[t.Size.xlarge]:t.UnitPx.xxlarge,[t.Size.xxlarge]:t.UnitPx.xxxlarge,[t.Size.xxxlarge]:t.UnitPx.xxxxlarge}},6893:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;const n=a(2317),r=a(2346),o=a(5939),i={fontFamily:n.FontFamily,fontSize:n.FontSize,fontWeight:n.FontWeight,lineHeight:n.LineHeight,iconSize:n.IconSize,radius:n.Radius,shadow:n.Shadow,transition:n.Transition,unit:n.Unit,px:n.UnitPx},s=(e,t)=>({[`${e}Active`]:(0,r.darkenColor)(t,2),[`${e}Hover`]:(0,r.lightenColor)(t,5),[`${e}Focused`]:(0,r.getMostReadable)(t,[n.Color.white,n.Color.darkGray5]),[`${e}Text`]:(0,r.getMostReadable)(t,[n.Color.white,n.Color.darkGray5])});t.createTheme=e=>Object.assign(Object.assign({},i),{palette:Object.assign(Object.assign(Object.assign({},e),s(o.Palette.brandPrimary,e.brandPrimary)),s(o.Palette.brandSecondary,e.brandSecondary))})},5939:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Palette=void 0,t.Palette={background1:"background1",background2:"background2",background3:"background3",background4:"background4",background5:"background5",background6:"background6",brandPrimary:"brandPrimary",brandSecondary:"brandSecondary",brandPrimaryActive:"brandPrimaryActive",brandPrimaryHover:"brandPrimaryHover",brandPrimaryFocused:"brandPrimaryFocused",brandPrimaryText:"brandPrimaryText",brandSecondaryActive:"brandSecondaryActive",brandSecondaryHover:"brandSecondaryHover",brandSecondaryFocused:"brandSecondaryFocused",brandSecondaryText:"brandSecondaryText",inputBackground:"inputBackground",inputColor:"inputColor",inputPlaceholder:"inputPlaceholder",inputDisabled:"inputDisabled",inputFocused:"inputFocused",inputBorder:"inputBorder",statusSuccess:"statusSuccess",statusWarning:"statusWarning",statusCritical:"statusCritical",statusActive:"statusActive",textDefault:"textDefault",textHelp:"textHelp",textInactive:"textInactive",borderNeutral:"borderNeutral",contentBackground1:"contentBackground1",contentBackground2:"contentBackground2",contentBackground3:"contentBackground3",contentBackground4:"contentBackground4",contentBackground5:"contentBackground5",linkDefault:"linkDefault",linkHover:"linkHover"}},6535:function(e){e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=/^\s+/,a=/\s+$/;function n(r,o){if(o=o||{},(r=r||"")instanceof n)return r;if(!(this instanceof n))return new n(r,o);var i=function(n){var r,o,i,s={r:0,g:0,b:0},c=1,l=null,d=null,u=null,h=!1,g=!1;return"string"==typeof n&&(n=function(e){e=e.replace(t,"").replace(a,"").toLowerCase();var n,r=!1;if(k[e])e=k[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(n=D.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=D.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=D.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=D.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=D.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=D.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=D.hex8.exec(e))?{r:x(n[1]),g:x(n[2]),b:x(n[3]),a:M(n[4]),format:r?"name":"hex8"}:(n=D.hex6.exec(e))?{r:x(n[1]),g:x(n[2]),b:x(n[3]),format:r?"name":"hex"}:(n=D.hex4.exec(e))?{r:x(n[1]+""+n[1]),g:x(n[2]+""+n[2]),b:x(n[3]+""+n[3]),a:M(n[4]+""+n[4]),format:r?"name":"hex8"}:!!(n=D.hex3.exec(e))&&{r:x(n[1]+""+n[1]),g:x(n[2]+""+n[2]),b:x(n[3]+""+n[3]),format:r?"name":"hex"}}(n)),"object"==e(n)&&(B(n.r)&&B(n.g)&&B(n.b)?(r=n.r,o=n.g,i=n.b,s={r:255*P(r,255),g:255*P(o,255),b:255*P(i,255)},h=!0,g="%"===String(n.r).substr(-1)?"prgb":"rgb"):B(n.h)&&B(n.s)&&B(n.v)?(l=F(n.s),d=F(n.v),s=function(e,t,a){e=6*P(e,360),t=P(t,100),a=P(a,100);var n=Math.floor(e),r=e-n,o=a*(1-t),i=a*(1-r*t),s=a*(1-(1-r)*t),c=n%6;return{r:255*[a,i,o,o,s,a][c],g:255*[s,a,a,i,o,o][c],b:255*[o,o,s,a,a,i][c]}}(n.h,l,d),h=!0,g="hsv"):B(n.h)&&B(n.s)&&B(n.l)&&(l=F(n.s),u=F(n.l),s=function(e,t,a){var n,r,o;function i(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e}if(e=P(e,360),t=P(t,100),a=P(a,100),0===t)n=r=o=a;else{var s=a<.5?a*(1+t):a+t-a*t,c=2*a-s;n=i(c,s,e+1/3),r=i(c,s,e),o=i(c,s,e-1/3)}return{r:255*n,g:255*r,b:255*o}}(n.h,l,u),h=!0,g="hsl"),n.hasOwnProperty("a")&&(c=n.a)),c=v(c),{ok:h,format:n.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:c}}(r);this._originalInput=r,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||i.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function r(e,t,a){e=P(e,255),t=P(t,255),a=P(a,255);var n,r,o=Math.max(e,t,a),i=Math.min(e,t,a),s=(o+i)/2;if(o==i)n=r=0;else{var c=o-i;switch(r=s>.5?c/(2-o-i):c/(o+i),o){case e:n=(t-a)/c+(t<a?6:0);break;case t:n=(a-e)/c+2;break;case a:n=(e-t)/c+4}n/=6}return{h:n,s:r,l:s}}function o(e,t,a){e=P(e,255),t=P(t,255),a=P(a,255);var n,r,o=Math.max(e,t,a),i=Math.min(e,t,a),s=o,c=o-i;if(r=0===o?0:c/o,o==i)n=0;else{switch(o){case e:n=(t-a)/c+(t<a?6:0);break;case t:n=(a-e)/c+2;break;case a:n=(e-t)/c+4}n/=6}return{h:n,s:r,v:s}}function i(e,t,a,n){var r=[A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function s(e,t,a,n){return[A(_(n)),A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))].join("")}function c(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.s-=t/100,a.s=C(a.s),n(a)}function l(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.s+=t/100,a.s=C(a.s),n(a)}function d(e){return n(e).desaturate(100)}function u(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.l+=t/100,a.l=C(a.l),n(a)}function h(e,t){t=0===t?0:t||10;var a=n(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-t/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-t/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-t/100*255))),n(a)}function g(e,t){t=0===t?0:t||10;var a=n(e).toHsl();return a.l-=t/100,a.l=C(a.l),n(a)}function p(e,t){var a=n(e).toHsl(),r=(a.h+t)%360;return a.h=r<0?360+r:r,n(a)}function f(e){var t=n(e).toHsl();return t.h=(t.h+180)%360,n(t)}function m(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=n(e).toHsl(),r=[n(e)],o=360/t,i=1;i<t;i++)r.push(n({h:(a.h+i*o)%360,s:a.s,l:a.l}));return r}function w(e){var t=n(e).toHsl(),a=t.h;return[n(e),n({h:(a+72)%360,s:t.s,l:t.l}),n({h:(a+216)%360,s:t.s,l:t.l})]}function y(e,t,a){t=t||6,a=a||30;var r=n(e).toHsl(),o=360/a,i=[n(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(n(r));return i}function b(e,t){t=t||6;for(var a=n(e).toHsv(),r=a.h,o=a.s,i=a.v,s=[],c=1/t;t--;)s.push(n({h:r,s:o,v:i})),i=(i+c)%1;return s}n.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,a,n=this.toRgb();return e=n.r/255,t=n.g/255,a=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(e){return this._a=v(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=o(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=o(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+a+"%, "+n+"%)":"hsva("+t+", "+a+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=r(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=r(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+a+"%, "+n+"%)":"hsla("+t+", "+a+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return i(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,a,n,r){var o=[A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16)),A(_(n))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*P(this._r,255))+"%",g:Math.round(100*P(this._g,255))+"%",b:Math.round(100*P(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%)":"rgba("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(S[i(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+s(this._r,this._g,this._b,this._a),a=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=n(e);a="#"+s(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+a+")"},toString:function(e){var t=!!e;e=e||this._format;var a=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(a=this.toRgbString()),"prgb"===e&&(a=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(a=this.toHexString()),"hex3"===e&&(a=this.toHexString(!0)),"hex4"===e&&(a=this.toHex8String(!0)),"hex8"===e&&(a=this.toHex8String()),"name"===e&&(a=this.toName()),"hsl"===e&&(a=this.toHslString()),"hsv"===e&&(a=this.toHsvString()),a||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return n(this.toString())},_applyModification:function(e,t){var a=e.apply(null,[this].concat([].slice.call(t)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(u,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(g,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(l,arguments)},greyscale:function(){return this._applyModification(d,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(f,arguments)},monochromatic:function(){return this._applyCombination(b,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(m,[3])},tetrad:function(){return this._applyCombination(m,[4])}},n.fromRatio=function(t,a){if("object"==e(t)){var r={};for(var o in t)t.hasOwnProperty(o)&&(r[o]="a"===o?t[o]:F(t[o]));t=r}return n(t,a)},n.equals=function(e,t){return!(!e||!t)&&n(e).toRgbString()==n(t).toRgbString()},n.random=function(){return n.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},n.mix=function(e,t,a){a=0===a?0:a||50;var r=n(e).toRgb(),o=n(t).toRgb(),i=a/100;return n({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},n.readability=function(e,t){var a=n(e),r=n(t);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)},n.isReadable=function(e,t,a){var r,o,i,s,c,l=n.readability(e,t);switch(o=!1,(i=a,"AA"!==(s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==s&&(s="AA"),"small"!==(c=(i.size||"small").toLowerCase())&&"large"!==c&&(c="small"),r={level:s,size:c}).level+r.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},n.mostReadable=function(e,t,a){var r,o,i,s,c=null,l=0;o=(a=a||{}).includeFallbackColors,i=a.level,s=a.size;for(var d=0;d<t.length;d++)(r=n.readability(e,t[d]))>l&&(l=r,c=n(t[d]));return n.isReadable(e,c,{level:i,size:s})||!o?c:(a.includeFallbackColors=!1,n.mostReadable(e,["#fff","#000"],a))};var k=n.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},S=n.hexNames=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}(k);function v(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function P(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var a=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function C(e){return Math.min(1,Math.max(0,e))}function x(e){return parseInt(e,16)}function A(e){return 1==e.length?"0"+e:""+e}function F(e){return e<=1&&(e=100*e+"%"),e}function _(e){return Math.round(255*parseFloat(e)).toString(16)}function M(e){return x(e)/255}var I,W,O,D=(W="[\\s|\\(]+("+(I="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",O="[\\s|\\(]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",{CSS_UNIT:new RegExp(I),rgb:new RegExp("rgb"+W),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+W),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+W),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function B(e){return!!D.CSS_UNIT.exec(e)}return n}()}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return a[e].call(o.exports,o,o.exports,r),o.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.createTheme=e.Palette=e.Color=void 0;var t=r(2317);Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.Color}});var a=r(5939);Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return a.Palette}});var n=r(6893);Object.defineProperty(e,"createTheme",{enumerable:!0,get:function(){return n.createTheme}})})();var i=t;for(var s in o)i[s]=o[s];o.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})},877:()=>{},67:()=>{},317:(e,t,a)=>{"use strict";var n=a(189),r=a(522);const o=a(675).qT.System,i=e=>Object.entries(e).reduce(((e,[t,a])=>`${e}--workspace-palette-${t}: ${a};`),""),s=(e,t)=>({selectedTab:"dark"===t?e.background3:e.background1});new class{constructor(e){this.providerStorage=e,this.getVarsByScheme=e=>"dark"===e?this.darkPaletteVars:this.lightPaletteVars,this.setWorkspaceStorageProxy=e=>{this.workspaceStorage=e},this.trySynchronizeWorkspaceStorage=async()=>{if(this.workspaceStorage){const e=this.getScheme();if(await this.workspaceStorage.setItem(r.A.SelectedColorScheme,e),this.darkPaletteVars&&this.lightPaletteVars)if("dark"===e||"light"===e)await this.workspaceStorage.setItem(r.A.ThemePaletteSheet,`:root{${this.getVarsByScheme(e)}}`);else{const e=`@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`,t=`@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;await this.workspaceStorage.setItem(r.A.ThemePaletteSheet,`${t}${e}`)}}},this.setPalettes=async({light:e,dark:t})=>{this.lightPaletteVars=i({...e,...s(e,"light")}),this.darkPaletteVars=i({...t,...s(t,"dark")})}}setScheme(e){this.providerStorage.setItem(r.A.SelectedColorScheme,e)}getScheme(){return null===this.providerStorage.getItem(r.A.SelectedColorScheme)&&this.providerStorage.setItem(r.A.SelectedColorScheme,o),this.providerStorage.getItem(r.A.SelectedColorScheme)}}(n)},367:(e,t,a)=>{"use strict";a.d(t,{N:()=>w,A:()=>m});var n=a(723),r=a(79),o=a(675),i=a(70),s=a(786),c=a(333);var l=a(326);const d=(0,a(102).A)(`${"undefined"!=typeof fin&&fin?.me.identity.uuid}-enterprise-bookmarks`);var u=a(141);const h=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),_bookmarks:{_createBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.CreateBookmarkNode,e))(e),_getBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.GetBookmarkNode,e))(e),_searchBookmarkNodes:async e=>(async e=>(await d()).dispatch(l.Hc.SearchBookmarkNodes,e))(e),_updateBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.UpdateBookmarkNode,e))(e),_deleteBookmarkNode:async e=>(async e=>(await d()).dispatch(l.Hc.DeleteBookmarkNode,e))(e)},getPages:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetPagesForWindow,e),getPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>(0,u.Nt)().Browser.wrapSync(e)._addPage(t),_addPage:async(t,a)=>{const n=await(0,r.bW)(e),o={identity:e,page:t,insertionIndex:a?.index,multiInstanceViewBehavior:a?.multiInstanceViewBehavior};return n.dispatch(r.OF.AddPage,o)},removePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.DetachPagesFromWindow,{identity:e,pageIds:[t]}),reparentPage:async t=>(0,u.Nt)().Browser.wrapSync(e)._reparentPage(t),_reparentPage:async t=>{const{pageId:a}=t,n=await(0,r.bW)(e),o=(await n.dispatch(r.OF.GetAllAttachedPages,void 0)).find((({pageId:e})=>e===a));if(!o)throw new Error(`Reparent Page Error: Target page with pageId ${a} not found`);o.multiInstanceViewBehavior="reparent";const i={identity:e,pages:[o],insertionIndex:t.index};return n.dispatch(r.OF.AttachPagesToWindow,i)},setActivePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.UpdatePageForWindow,t)},reorderPages:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await(0,r.bW)(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await(0,r.bW)(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},updateBrowserWindowTitle:async t=>{const a=fin.Window.wrapSync(e);"string"!=typeof t?await a.updateOptions({workspacePlatform:{title:t}}):console.warn("Type string for window title is deprecated, please use WindowTitle type instead",t)},_openViewTabContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await(0,r.bW)(e);return(await(0,l.p4)(e)).dispatch(l.aQ.OpenSaveModalInternal,t)},_getLayoutsWithSelectedViews:async()=>(await(0,l.p4)(e)).dispatch(l.aQ.GetLayoutsWithSelectedViewsInternal,e),_openSaveButtonContextMenu:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.OpenSaveButtonContextMenuInternal,t)},_addDefaultPage:async t=>{const a=await(0,r.bW)(e);return t.identity=e,a.dispatch(r.OF.AddDefaultPage,t)},_trackRemovedTab:async t=>(await(0,r.bW)(e)).dispatch(r.OF.TrackRemovedTabInternal,t),_restoreRemovedTab:async t=>(await(0,r.bW)(e)).dispatch(r.OF.RestoreRemovedTabInternal,t),_trackVisitedSite:async t=>(await(0,r.bW)(e)).dispatch(r.OF.TrackVisitedSiteInternal,t),_getRecentlyVisitedSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetRecentlyVisitedSitesInternal,t),_getFrequentlyVisitedSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetFrequentlyVisitedSitesInternal,t),_searchSites:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SearchSitesInternal,{identity:e,req:t}),_getSearchProviders:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetSearchProvidersInternal,{identity:e}),_getCuratedContent:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetCuratedContentInternal,{identity:e,req:t}),_handleRequestNavigation:async t=>(await(0,r.bW)(e)).dispatch(r.OF.HandleRequestNavigationInternal,t)}),g=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>h(e),createWindow:async a=>{const n=(()=>{const e=`browser-window-startup-${(0,c.N)()}`;return s.A.markStart(e),e})();(e=>{fin.Application.wrapSync({uuid:fin.me.identity.uuid}).once("window-shown",(()=>{s.A.markAndMeasure("browser-window-shown",e)}))})(n),await(0,r.bW)(e);const o=await t.createWindow(a);return(e=>{s.A.markAndMeasure("browser-window-started",e)})(n),h(o.identity)},getAllAttachedPages:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetAllAttachedPages,void 0),getAllWindows:async()=>{await(0,r.bW)(e);return(await(0,i.Io)()).map((e=>h(e.identity)))},getUniquePageTitle:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await(0,r.bW)(e)).dispatch(r.OF.GetLastFocusedBrowserWindow,void 0)}},p=e=>({createPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.CreateSavedPageInternal,t),deletePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.DeleteSavedPageInternal,t),updatePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.UpdateSavedPageInternal,t),getPage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetSavedPage,t),getPages:async t=>(await(0,r.bW)(e)).dispatch(r.OF.GetSavedPages,t),savePage:async t=>(await(0,r.bW)(e)).dispatch(r.OF.SavePage,t),createWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.CreateSavedWorkspace,t),deleteWorkspace:async t=>{const a=w(),n=await a.getCurrentWorkspace();if(n.workspaceId===t)throw new Error(`Cannot delete current active workspace ${n.title}`);return(await(0,r.N)(e)).dispatch(r.OF.DeleteSavedWorkspace,t)},updateWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateSavedWorkspace,t),getWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetSavedWorkspace,t),getWorkspaces:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetSavedWorkspaces,t),saveWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.SaveWorkspace,t),getDockProviderConfig:async t=>(await(0,r.N)(e)).dispatch(r.OF.GetDockProviderConfig,t),saveDockProviderConfig:async t=>(await(0,r.N)(e)).dispatch(r.OF.SaveDockProviderConfig,t)});var f=a(396);const m=e=>{const t=fin.Platform.wrapSync(e);let a;return Object.assign(t,{applySnapshot:async(t,a)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,a)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),getViewSnapshot:t=>fin.Platform.wrapSync(e).getViewSnapshot(t),createView:(t,a,n)=>fin.Platform.wrapSync(e).createView(t,a,n),launchApp:async t=>{console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."),t.target||(t.target={uuid:n.$h,name:n.vL,entityType:n.fT||"unknown"});return(await(0,r.N)(e)).dispatch(r.OF.LaunchApp,t)},_invokeCustomAction:async(t,a)=>{const n=await(0,r.N)(e),i={actionId:t,payload:{...a,callerType:a.callerType||o.vc.API}};return n.dispatch(r.OF.InvokeCustomActionInternal,i)},_requestQuitPlatformDialog:async t=>(await(0,r.N)(e)).dispatch(r.OF.RequestQuitPlatformDialogInternal,t),getCurrentWorkspace:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetCurrentWorkspace,void 0),applyWorkspace:async(t,a)=>(await(0,r.N)(e)).dispatch(r.OF.ApplyWorkspace,{...t,options:a}),setActiveWorkspace:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetActiveWorkspace,t),getLanguage:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetLanguage),_getLanguageResources:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetLanguageResourcesInternal),setLanguage:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetLanguage,t),_raiseAnalytics:async t=>{if(a||(a=await(0,r.KZ)(e)),"object"==typeof a&&a?.analytics?.isSupported){return(await(0,r.N)(e)).dispatch(r.OF.Analytics,t)}e.uuid},getNotificationsConfig:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetNotificationsConfig),_refreshBookmarksInternal:async()=>(await(0,r.N)(e)).dispatch(r.OF.RefreshBookmarksInternal),_launchBookmarkInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.LaunchBookmarkInternal,t),_updateDockFavoritesInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateDockFavoritesInternal,t),_updateContentMenuInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.UpdateContentMenuInternal,t),_launchDockEntryInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.LaunchDockEntryInternal,t),_setDockFavoritesInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetDockFavoritesOrderInternal,t),_setDockWorkspaceButtonsOrderInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.SetDockWorkspaceButtonsOrderInternal,t),_removeDockFavoriteInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.RemoveDockFavoriteInternal,t),_addDockFavoriteInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.AddDockFavoriteInternal,t),_navigateContentMenuInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.NavigateContentMenuInternal,t),_openDockWorkspacesContextMenuInternal:async()=>(await(0,r.N)(e)).dispatch(r.OF.GetDockWorkspacesContextMenuInternal),_handleDockWorkspacesMenuResponseInternal:async t=>(await(0,r.N)(e)).dispatch(r.OF.HandleDockWorkspacesMenuResponseInternal,t),Theme:(0,f.NA)(e),Browser:g(e),Storage:p(e)})},w=()=>m(fin.me.identity)},396:(e,t,a)=>{"use strict";a.d(t,{NA:()=>i});a(181),a(70),a(326);var n=a(102);var r;!function(e){e.UpdatePlatformThemeScheme="update-platform-theme-scheme"}(r||(r={}));(0,n.A)("of-workspace-notifications-sync");a(695);var o=a(79);a(317);const i=e=>({getThemes:async()=>(await(0,o.N)(e)).dispatch(o.OF.GetThemes,void 0),setSelectedScheme:async t=>(await(0,o.N)(e)).dispatch(o.OF.SetSelectedScheme,t),getSelectedScheme:async()=>(await(0,o.N)(e)).dispatch(o.OF.GetSelectedScheme,void 0)})},141:(e,t,a)=>{"use strict";a.d(t,{Nt:()=>u.N,Ag:()=>u.A});a(675);var n=a(723);a(181);var r=a(70);a(365);const o=(e,t=0)=>{let a,n,r=!1;const o=async n=>{const i=await e(...n);if(r){await new Promise((e=>setTimeout(e,t)));const e=a;return a=void 0,r=!1,o(e)}return i};return(...e)=>(n?(r=!0,a=e):n=o(e).catch((e=>{throw console.error("makeDebouncedFunc",e),e})).finally((()=>{n=void 0})),n)};var i;!function(e){e.Top="top",e.Below="below"}(i||(i={}));const s=async(e,t)=>{try{return e?await e.getBounds():t}catch(e){return console.warn("getParentWindowBounds - Failed to get parent window bounds",e),t}},c=async e=>{try{return!!e&&"maximized"===await e.getState()}catch(e){return console.warn("parentWindowMaximized - Failed to get parent window state",e),!1}};o((async function(e,t,a,n,o){const l=t.getBoundingClientRect(),d=await async function(e,t,a,n,o,l){const d=!!e&&(0,r.Iq)(e),u=await s(d,l);if(n===i.Below){if(!d||await c(d)){const e=d?(await(0,r.ur)(u)).availableRect:(await fin.System.getMonitorInfo()).primaryMonitor.availableRect;return{left:(0,r.V1)(e).left-t/2,top:o?e.bottom-128:e.bottom+12,width:t,height:a}}return{left:(0,r.V1)(u).left-t/2,top:o?u.bottom-128:u.bottom+12,width:t,height:a}}if(!d||await c(d)){const e=d?(await(0,r.ur)(u)).availableRect:(await fin.System.getMonitorInfo()).primaryMonitor.availableRect;return{left:(0,r.V1)(e).left-t/2,top:e.top+20,width:t,height:a}}return{left:(0,r.V1)(u).left-t/2,top:u.top+20,width:t,height:a}}(e,l.width,l.height,a,n,o);if(0===d.width||0===d.height)return;const u=(0,r.Tv)();await u.setBounds(d),await u.show();const h=setTimeout((()=>u.close()),n?5e3:3e3),g=()=>{clearTimeout(h),u.close()};if(e){const t=(0,r.Iq)(e);t.on("bounds-changing",(()=>g())),t.on("blurred",(()=>g())),t.on("maximized",(()=>g())),t.on("minimized",(()=>g())),t.on("restored",(()=>g()))}}),10);a(277),a(957);var l=a(438);a(940);__webpack_require__(/*! react-i18next */ "../../node_modules/react-i18next/dist/es/index.js");const d=__webpack_require__(/*! i18next */ "../../node_modules/i18next/dist/cjs/i18next.js");a.n(d)().t;a(678),a(326);a(79);var u=a(367);new class{constructor(){this.queue=[],this.locked=!1}lock(){return new Promise((e=>{this.locked?this.queue.push(e):(this.locked=!0,e())}))}unlock(){if(this.queue.length>0){const e=this.queue.shift();e&&e()}else this.locked=!1}};new Map;const h=((e,t)=>{const a=e;return a.workspacePlatform||(a.workspacePlatform={}),a.workspacePlatform._internalDeferShowOptions={setAsForeground:!!t,deferShowEnabled:!0,autoShow:a.workspacePlatform?._internalAutoShow||a.workspacePlatform?._internalDeferShowOptions?.autoShow||void 0===a.autoShow||a.autoShow},a.autoShow=!1,a})({alwaysOnTop:!0,autoShow:!1,frame:!1,resizable:!1,showTaskbarIcon:!1});!function(e=h){const t=new Map}();var g=a(522),p=a(189);a(523);function f(e,t){return async(a,...n)=>{e.has(a)&&e.get(a).forEach((e=>e(...n))),t&&await t({event:a,payload:n})}}function m(e,t){return t&&t((t=>{const{event:a,payload:n}=t;e.has(a)&&e.get(a).forEach((e=>e(...n)))})),(t,a)=>{e.has(t)||e.set(t,new Set),e.get(t).add(a)}}function w(e){return(t,a)=>{e.has(t)||e.set(t,new Set);const n=e.get(t),r=(...e)=>{a(...e),n.delete(r)};n.add(r)}}function y(e){return(t,a)=>{e.has(t)&&e.get(t).delete(a)}}r.Q.BrowserMenu;(function(e){const t=new Map;f(t,(t=>n.cI&&fin.InterApplicationBus.publish(e,t))),m(t,(t=>n.cI&&fin.InterApplicationBus.subscribe({uuid:fin.me.uuid},e,t))),y(t),w(t)})("window.menu"),o((()=>(0,l.v1)().getChildWindows()),500);new Map;a(317);var b=a(236);a.n(b)()((async()=>{const e=await fin.Platform.getCurrentSync().Application.getChildWindows();let t,a=!1;for(const n of e)if(n.identity.name===r.Q.BrowserMenu||n.identity.name===r.Q.BrowserSaveMenu?t=n:await(0,r.hb)(n.identity)&&(a=!0),a)break;!a&&t&&t.close()}),100,{leading:!1,trailing:!0});var k,S;!function(e){e.Save="Save",e.SaveAs="SaveAs"}(k||(k={})),function(e){e.GlobalMenu="global-menu",e.ContextMenu="context-menu",e.RenameSupertab="rename-supertab",e.AddEditBookmark="add-edit-bookmark",e.DropdownMenu="dropdown-menu"}(S||(S={}));a(862);const v=__webpack_require__(/*! idb-keyval */ "../../node_modules/idb-keyval/dist/index.js"),P=(e,t)=>(0,v.createStore)(e+"-"+fin.me.uuid,t),C=(e,t)=>{const a=P(e,t);return(async(e,t,a)=>{const n=p.getItem(g.A.HasMovedStore),r=n?JSON.parse(n):{};if(r&&r[a])return;r[a]=!0,p.setItem(g.A.HasMovedStore,JSON.stringify(r));const o=await(0,v.entries)(e);await(0,v.setMany)(o,t)})((0,v.createStore)(e,t),a,e),a};n.AT&&n.cI&&C("openfin-home-pages","pages");n.AT&&n.cI&&P("openfin-enterprise-tab-history","removed-tab-stack"),n.AT&&n.cI&&P("openfin-enterprise-site-history","visited-sites");var x;!function(e){e.Label="normal",e.Separator="separator",e.Submenu="submenu",e.Checkbox="checkbox"}(x||(x={}));x.Separator;a(257);var A;!function(e){e[e.TopLeft=0]="TopLeft",e[e.TopRight=1]="TopRight",e[e.BottomLeft=2]="BottomLeft",e[e.BottomRight=3]="BottomRight",e[e.Center=4]="Center"}(A||(A={}));var F=a(102);(0,F.A)(`${"undefined"!=typeof fin&&fin?.me.identity.uuid}-enterprise-dock`),n.AT&&n.cI&&P("dock-provider-configs","dock-provider-configs");a(396);n.AT&&n.cI&&C("openfin-workspace-platform-workspaces","workspaces");a(250);r.$p.uuid,r.Q.BrowserAddressSearchPrefix;a(413),a(179)},413:(e,t,a)=>{"use strict"},675:(e,t,a)=>{"use strict";a.d(t,{qT:()=>o,vc:()=>g});var n,r,o,i,s,c,l,d,u,h,g;a(179),a(250);!function(e){e.UrlChange="URL_CHANGE",e.ViewAdded="VIEW_ADDED",e.ViewRemoved="VIEW_REMOVED",e.PageContextAdded="PAGE_CONTEXT_ADDED",e.PageContextRemoved="PAGE_CONTEXT_REMOVED"}(n||(n={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.Downloads="Downloads",e.OpenStorefront="OpenStorefront",e.Appearance="Appearance",e.Quit="Quit",e.Custom="Custom"}(r||(r={})),function(e){e.Light="light",e.Dark="dark",e.System="system"}(o||(o={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.NewPage="New Page",e.DeletePage="Delete Page",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Refresh="Refresh",e.CloseOthers="Close others",e.Delete="Delete",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.Custom="Custom"}(i||(i={})),function(e){e.Lock="Lock",e.ShowHideTabs="ShowHideTabs",e.AddToChanel="AddToChannel",e.Print="Print",e.Pin="Pin"}(s||(s={})),function(e){e.EditName="Edit Name",e.Move="Move",e.Delete="Delete"}(c||(c={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Back="Back",e.Forward="Forward",e.Print="Print",e.PrintAll="PrintAll",e.PrintScreen="PrintScreen",e.Custom="Custom"}(l||(l={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(d||(d={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(u||(u={})),function(e){e.Browser="browser",e.Platform="platform"}(h||(h={})),function(e){e.CustomButton="CustomButton",e.StoreCustomButton="StoreCustomButton",e.CustomDropdownItem="CustomDropdownItem",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(g||(g={}));var p;!function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(p||(p={}))},129:()=>{"use strict";var e,t,a;!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(e||(e={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(t||(t={})),function(e){e.Active="active",e.Default="default"}(a||(a={}))},600:(e,t,a)=>{"use strict";var n;!function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(n||(n={}))},872:(e,t,a)=>{"use strict";var n,r,o;!function(e){e.Suggestion="suggestion"}(n||(n={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(o||(o={}))},179:(e,t,a)=>{"use strict";a(129),a(872),a(710),a(184),a(600)},710:(e,t,a)=>{"use strict";var n,r;!function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(n||(n={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},184:(e,t,a)=>{"use strict";var n;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(n||(n={}))},678:(e,t,a)=>{"use strict";a.d(t,{BG:()=>s});var n=a(940),r=a(862),o=a(333);a(695);const i=async e=>({...e,layoutDetails:{machineId:await(0,r.D1)(),machineName:(0,r.fC)()}}),s=async e=>{const t=await(async(e,t)=>({pageId:(0,o.N)(),title:e,layout:await i(t),isReadOnly:!1}))(e.title,(0,n.xP)(e.layout));return e.panels&&(t.panels=e.panels.map((e=>({...e,viewOptions:(0,n.fh)(e.viewOptions)})))),{...e,...t}}},250:(e,t,a)=>{"use strict";var n;!function(e){e.Left="Left",e.Right="Right",e.Top="Top",e.Bottom="Bottom"}(n||(n={}))},326:(e,t,a)=>{"use strict";a.d(t,{Hc:()=>d,aQ:()=>h,p4:()=>i});var n=a(102);a(70);const r=(e,t)=>t?`${t}-${e.uuid}-${e.name}`:`__browser_window__-${e.uuid}-${e.name}`,o=new Map,i=(e,t)=>{const a=r(e,t);return i=a,o.has(i)||o.set(i,(0,n.A)(i)),o.get(i)();var i};var s,c,l,d,u;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page",e.SetSelectedScheme="set-selected-scheme",e.ShowBrowserIndicator="show-browser-indicator",e.SetSelectedLanguage="set-selected-language",e.RefreshBookmarksInternal="refresh-bookmarks",e.GetLayoutsWithSelectedViewsInternal="get-layouts-with-selected-views"}(s||(s={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(c||(c={})),function(e){e.GetApps="get-apps",e.GetCuratedContent="get-curated-content",e.GetRecentlyVisited="get-recently-visited",e.GetSearchProviders="get-search-providers"}(l||(l={})),function(e){e.CreateBookmarkNode="create-bookmark-node",e.GetBookmarkNode="get-bookmark-node",e.SearchBookmarkNodes="search-bookmark-nodes",e.UpdateBookmarkNode="update-bookmark-node",e.DeleteBookmarkNode="delete-bookmark-node"}(d||(d={})),function(e){e.UpdateFavoriteEntries="update-favorite-entries",e.UpdateContentMenu="update-content-menu",e.NavigateContentMenu="navigate-content-menu"}(u||(u={}));const h={...s,...c,...u}},79:(e,t,a)=>{"use strict";var n;a.d(t,{KZ:()=>o,N:()=>i,OF:()=>n,bW:()=>s}),function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.AddPage="addPage",e.AddDefaultPage="addDefaultPage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.GetSelectedScheme="getSelectedScheme",e.SetSelectedScheme="setSelectedScheme",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.RequestQuitPlatformDialogInternal="requestQuitPlatformDialogInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized",e.Analytics="analyticsInternal",e.GetLanguage="getLanguage",e.GetLanguageResourcesInternal="getLanguageResourcesInternal",e.SetLanguage="setLanguage",e.GetDockProviderConfig="getDockProviderConfig",e.SaveDockProviderConfig="saveDockProviderConfig",e.HandleSaveModalOnPageClose="handleSaveModalOnPageClose",e.ShouldPageClose="shouldPageClose",e.ShouldWindowClose="shouldWindowClose",e.CopyPage="copyPage",e.HandlePageChanges="handlePageChanges",e.MarkUnsavedPagesAsSavedInternal="markUnsavedPagesAsSavedInternal",e.TrackRemovedTabInternal="trackRemovedTabInternal",e.RestoreRemovedTabInternal="restoreRemovedTabInternal",e.TrackVisitedSiteInternal="trackVisitedSiteInternal",e.GetRecentlyVisitedSitesInternal="getRecentlyVisitedSitesInternal",e.GetFrequentlyVisitedSitesInternal="getFrequentlyVisitedSitesInternal",e.SearchSitesInternal="searchSitesInternal",e.GetSearchProvidersInternal="getSearchProvidersInternal",e.GetCuratedContentInternal="getCuratedContentInternal",e.HandleRequestNavigationInternal="handleRequestNavigationInternal",e.RefreshBookmarksInternal="refreshBookmarksInternal",e.LaunchBookmarkInternal="launchBookmarkInternal",e.GetNotificationsConfig="getNotificationsConfig",e.UpdateDockFavoritesInternal="updateDockFavoritesInternal",e.UpdateContentMenuInternal="updateContentMenuInternal",e.LaunchDockEntryInternal="launchDockEntryInternal",e.SetDockFavoritesOrderInternal="setDockFavoritesOrderInternal",e.NavigateContentMenuInternal="navigateContentMenuInternal",e.SetDockWorkspaceButtonsOrderInternal="setDockWorkspaceButtonsOrderInternal",e.GetDockWorkspacesContextMenuInternal="getDockWorkspacesContextMenuInternal",e.HandleDockWorkspacesMenuResponseInternal="handleDockWorkspacesMenuResponseInternal",e.RemoveDockFavoriteInternal="removeDockFavoriteInternal",e.AddDockFavoriteInternal="addDockFavoriteInternal"}(n||(n={}));const r=async e=>fin.Platform.wrapSync(e).getClient(),o=async e=>{const t=await r(e),a="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let n;try{n=await t.dispatch("isWorkspacePlatform")}catch(e){throw new Error(a)}if("boolean"==typeof n&&n)return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."),n;if("object"==typeof n&&n.isWorkspacePlatform)return n;throw new Error(a)},i=async e=>(await o(e),r(e)),s=async e=>{const t=await o(e);if("object"==typeof t&&!0!==t?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return r(e)}},695:(e,t,a)=>{"use strict";var n=a(102),r=(a(723),a(70),a(905));(0,n.A)("__of_workspace_protocol__"),(0,n.A)(r.BT)},905:(e,t,a)=>{"use strict";a.d(t,{BT:()=>n});const n="__search-openfin-browser-home-topic__";var r,o;!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(r||(r={})),function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(o||(o={}))},257:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});var n=a(365);const r=e=>{const t=fin.Platform.Layout.wrapSync(e);return{show:async()=>{const a=await t.getConfig(),{settings:r,dimensions:o}=a,i=await(0,n.Ae)(e);await t.replace({...a,settings:{...r,hasHeaders:!0,reorderEnabled:!0},dimensions:{...o,headerHeight:i?28:30}})},hide:async e=>{const a=await t.getConfig(),{settings:n,dimensions:r}=await a;await t.replace({...a,settings:{...n,hasHeaders:!1,reorderEnabled:e?.settings?.reorderEnabled??!1},dimensions:{...r,headerHeight:0}})},isShowingTabs:async()=>{try{const e=await t.getConfig(),{settings:a}=await e;return a.hasHeaders}catch(e){return console.error("failed to get layout config: ",e),!0}}}}},957:(e,t,a)=>{"use strict";a.d(t,{qq:()=>k});var n=a(847),r=a(898),o=a(70),i=a(141),s=(a(675),a(877)),c=a.n(s),l=a(67),d=a.n(l);const u={light:{symbol:d()?.src||""},dark:{symbol:c()?.src||""}};a(695),a(79);const h="dark",g={[n.Palette.brandPrimary]:"#0A76D3",[n.Palette.statusSuccess]:n.Color.functional1,[n.Palette.statusWarning]:n.Color.functional10,[n.Palette.statusCritical]:n.Color.functional7,[n.Palette.statusActive]:n.Color.functional3,[n.Palette.contentBackground1]:"#0A76D3",[n.Palette.contentBackground2]:"#000000",[n.Palette.contentBackground3]:"#000000",[n.Palette.contentBackground4]:"#000000",[n.Palette.contentBackground5]:"#000000"},p={...g,[n.Palette.background1]:n.Color.white,[n.Palette.background2]:n.Color.lightGray1,[n.Palette.background3]:n.Color.lightGray2,[n.Palette.background4]:n.Color.lightGray3,[n.Palette.background5]:n.Color.lightGray4,[n.Palette.background6]:n.Color.lightGray5,[n.Palette.brandSecondary]:n.Color.lightGray4,[n.Palette.inputBackground]:n.Color.lightGray3,[n.Palette.inputColor]:n.Color.darkGray5,[n.Palette.inputPlaceholder]:n.Color.darkGray2,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.inputBorder]:n.Color.neutralGray,[n.Palette.textDefault]:n.Color.darkGray5,[n.Palette.textHelp]:n.Color.darkGray3,[n.Palette.textInactive]:n.Color.neutralGray},f={...g,[n.Palette.background1]:n.Color.darkGray6,[n.Palette.background2]:n.Color.darkGray5,[n.Palette.background3]:n.Color.darkGray4,[n.Palette.background4]:n.Color.darkGray3,[n.Palette.background5]:n.Color.darkGray2,[n.Palette.background6]:n.Color.darkGray1,[n.Palette.brandSecondary]:n.Color.darkGray2,[n.Palette.inputBackground]:n.Color.darkGray1,[n.Palette.inputColor]:n.Color.white,[n.Palette.inputPlaceholder]:n.Color.lightGray5,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.inputBorder]:n.Color.neutralGray,[n.Palette.textDefault]:n.Color.white,[n.Palette.textHelp]:n.Color.lightGray5,[n.Palette.textInactive]:n.Color.neutralGray},m=[{label:"OpenFin Default Light and Dark Theme",palettes:{light:{...p,brandPrimary:"#0A76D3",brandSecondary:n.Color.lightGray4,backgroundPrimary:n.Color.darkGray5},dark:{...f,brandPrimary:"#0A76D3",brandSecondary:n.Color.darkGray2,backgroundPrimary:n.Color.darkGray5}}}],w=e=>{const{background:t,foreground:a}=e;return{background:t,foreground:a??"#FFFFFF"}},y=(e,t)=>({icons:{symbol:e.brand?.icons?.[t]?.symbol||u[t].symbol}}),b=e=>{const{light:t,dark:a}="palettes"in e?e.palettes:{light:e.palette,dark:e.palette},o=(0,r.KD)(f,a),i=(0,r.KD)(p,t),s=((e,t)=>{const a={...e},n={...t};let o=t.backgroundPrimary?(0,r.pu)(t.backgroundPrimary,!0):{},i=e.backgroundPrimary?(0,r.pu)(e.backgroundPrimary):{};return o={...o,...n},i={...i,...a},{light:{...t,...o},dark:{...e,...i}}})(a,t),c={...(0,n.createTheme)({...o,...s?.dark}),brand:y(e,"dark")},l={...(0,n.createTheme)({...i,...s?.light}),brand:y(e,"light")},{light:d,dark:u}=(e=>{const t=Object.keys(e.notificationIndicatorColors??{});if(t?.length){const a={},n={};return t.forEach((t=>{const r=e.notificationIndicatorColors[t];"background"in r?(a[t]=w(r),n[t]=w(r)):(a[t]=w(r.dark??r.light),n[t]=w(r.light??r.dark))})),{light:n,dark:a}}return{light:null,dark:null}})(e);return c.notificationIndicatorColors=u,l.notificationIndicatorColors=d,{dark:c,light:l}},k=async e=>{const{themes:t,selectedScheme:a}=await(async e=>{const t=fin?.__internal_?.initialOptions?.workspacePlatform?._themeData;if(!t||e.uuid!==o.$p.uuid)return{themes:await(0,i.Ag)(e).Theme.getThemes(),selectedScheme:await(0,i.Ag)(e).Theme.getSelectedScheme()};return t})(e);var n,r;return(n=t?.length?t:m,r=a,n.map((e=>{const t="palettes"in e?e.default:h,{light:a,dark:n}=b(e);return{label:e.label,logoUrl:e.logoUrl,theme:{dark:n,light:a},defaultScheme:r??t}})))[0]}},438:(e,t,a)=>{"use strict";a.d(t,{MW:()=>n,v1:()=>c});var n,r,o=a(723);!function(e){e.Workspace="openfin-workspace",e.OldWorkspace="openfin-browser"}(n||(n={})),function(e){e.FinProtocol="fin-protocol"}(r||(r={}));const i={uuid:o.$h},s=(n.Workspace,e=>{if(!o.cI)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)}),c=()=>s(i)},102:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var n=a(723);const r=n.YY&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function o(e){let t;const a=new Set;return()=>{if(!n.cI)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const o={clientAPIVersion:n.et},i=await fin.InterApplicationBus.Channel.connect(e,{payload:o});return i.onDisconnection((async()=>{a.forEach((e=>e())),a.clear(),console.warn(`disconnected from channel provider ${e}`),t=void 0})),i})().then((e=>(e.addDisconnectionListener=e=>{a.add(e)},e))).catch((a=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${a}`)}))),t}}},365:(e,t,a)=>{"use strict";a.d(t,{Ae:()=>n});a(181),a(70);const n=async e=>{const t=e?fin.Window.wrapSync(e):fin.Window.getCurrentSync(),a=await t.getOptions();return a.workspacePlatform?.windowType&&"enterprise"===a.workspacePlatform.windowType}},723:(e,t,a)=>{"use strict";var n;a.d(t,{$h:()=>c,AT:()=>i,YY:()=>o,cI:()=>r,et:()=>h,fT:()=>d,vL:()=>l}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(n||(n={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,o=("undefined"==typeof process||process.env,"undefined"!=typeof window),i=o&&"undefined"!=typeof indexedDB,s=o?window.origin:n.Local,c=r&&fin.me.uuid,l=r&&fin.me.name,d=r&&fin.me.entityType,u=(n.Local,n.Dev,n.Staging,n.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e),h=(u("https://workspace.openfin.co/workspace/20.5.4"),u("https://workspace.openfin.co/workspace/20.5.4"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&u(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&u(WORKSPACE_DOCS_CLIENT_URL),"20.5.4");"undefined"!=typeof WORKSPACE_BUILD_SHA&&WORKSPACE_BUILD_SHA},940:(e,t,a)=>{"use strict";a.d(t,{fh:()=>d,xP:()=>u});var n=a(236),r=a.n(n),o=(a(365),a(723),a(70)),i=a(678),s=a(257),c=a(367);a(413);const l=(e,t)=>e.content?{...e,content:e.content.map((e=>l(e,t)))}:{...e,componentState:t(e.componentState)},d=e=>({...e,name:void 0}),u=e=>{const t={...e};return l(t,d)},h=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const a=h(e.content);t.push(...a)})),t};new Map,new Map;r()((async e=>{try{const t=await(async e=>fin.Platform.Layout.wrapSync({...fin.me.identity,layoutName:e}).getConfig())(e.layoutContainerKey),a=t.content?h(t.content):[],n=a.length;n>1?(e=>{"multiView"!==e.attachedPageType&&(0,c.N)().Browser.wrapSync(o.$p).updatePage({pageId:e.pageId,page:{singleViewName:null,attachedPageType:"multiView"}})})(e):1===n&&(async(e,t)=>{const a=(0,c.N)().Browser.wrapSync(o.$p);if("singleView"!==e.attachedPageType){const n=await(0,i.BG)(e),r=await(0,c.N)().Browser.getUniquePageTitle();delete n.layout;const o={...n,singleViewName:t,title:r,hasUnsavedChanges:!1,attachedPageType:"singleView"};await a.updatePage({pageId:e.pageId,page:o})}})(e,a[0].name),await(async(e,t)=>{const a=(0,s.F)({...o.$p,layoutName:e.layoutContainerKey}),n=await a.isShowingTabs();t>1?n||await a.show():1===t&&n&&await a.hide({settings:{reorderEnabled:!0}})})(e,n)}catch(e){}}),50,{leading:!1,trailing:!0})},522:(e,t,a)=>{"use strict";var n;a.d(t,{A:()=>r}),function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition",e.SelectedColorScheme="SelectedColorScheme",e.ThemePaletteSheet="ThemePaletteSheet",e.HasMovedStore="HasMovedStore",e.PageDragState="BrowserPageDragState"}(n||(n={}));const r=n},189:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getItem:()=>o,removeItem:()=>i,setItem:()=>r});var n=a(723);const r=(e,t)=>{localStorage.setItem(`${n.$h}-${e}`,t)},o=e=>localStorage.getItem(`${n.$h}-${e}`),i=e=>localStorage.removeItem(`${n.$h}-${e}`)},786:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});const n="of-workspace-";const r=new class{mark(e){performance.mark(`${n}${e}`)}markStart(e){performance.mark(`${n}${e}-start`)}markEnd(e){performance.mark(`${n}${e}-end`)}markEndAndMeasure(e){performance.mark(`${n}${e}-end`);try{return performance.measure(`${n}${e}`,`${n}${e}-start`,`${n}${e}-end`)}catch(e){0}}markAndMeasure(e,t){performance.mark(`${n}${e}`);try{return performance.measure(`${n}${e}-measure`,`${n}${t}-start`,`${n}${e}`)}catch(e){0}}reportWorkspacePerformanceEntries(){return performance.getEntriesByType("measure").filter((e=>e.name.startsWith(n)))}reportWorkspacePerformance(){return this.reportWorkspacePerformanceEntries().map((e=>({name:e.name.replace(`${n}`,"").replace("-measure",""),duration:e.duration})))}}},181:(e,t,a)=>{"use strict";var n,r;!function(e){e.Home="/home/",e.HomeSearch="/home/?deeplink=search",e.HomePagesRename="/home/pages/rename/",e.Dock="/dock/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/",e.Analytics="/provider/analytics/",e.Provider="/provider/"}(n||(n={})),function(e){e.Browser="/browser/",e.BrowserPopupMenu="/popup-menu/",e.BrowserPopupMenuSaveModal="/popup-menu/save-modal/",e.BrowserPopupMenuLayouts="/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/indicator/",e.BrowserPopupMenuAddressSearchResultsView="/popup-menu/address-search-results-view/",e.ResponseModal="/popup-menu/response-modal/",e.CloseConfirmationModal="/popup-menu/close-confirmation-modal/",e.EnterpriseBrowser="/enterprise/",e.EnterpriseContextMenu="/context-menu/",e.EnterpriseBookmarkDialog="/bookmark-dialog/",e.EnterpriseStorageProxy="/enterprise/storage-proxy",e.DropdownMenu="/dropdown-menu/",e.EnterpriseDock="/dock/"}(r||(r={}));var o;!function(e){e.Search="search"}(o||(o={}))},523:(e,t,a)=>{"use strict";var n;a(723);!function(e){e.Home="/home",e.Browser="/browser",e.Enterprise="/enterprise",e.Provider="/provider",e.Storefront="/storefront",e.Dock="/dock"}(n||(n={}))},862:(e,t,a)=>{"use strict";a.d(t,{D1:()=>i,fC:()=>r});a(940);var n=a(522);function r(){return localStorage.getItem(n.A.MachineName)??"unknown"}let o;async function i(){return o||(o=await fin.System.getMachineId()),o}},898:(e,t,a)=>{"use strict";a.d(t,{KD:()=>s,pu:()=>i});const n=e=>e.replace(/[^\d,]/g,"").split(","),r=e=>{if(e.length<2)throw new Error("Invalid color object, cannot convert to HSL.");const t=e[0]/255,a=e[1]/255,n=e[2]/255,r=Math.min(t,a,n),o=Math.max(t,a,n),i=o-r;let s=0,c=0,l=0;return s=0===i?0:o===t?(a-n)/i%6:o===a?(n-t)/i+2:(t-a)/i+4,s=Math.round(60*s),s<0&&(s+=360),l=(o+r)/2,c=0==i?0:i/(1-Math.abs(2*l-1)),c=+(100*c).toFixed(1),l=+(100*l).toFixed(1),{hsl:`hsl(${s}, ${c}%, ${l}%)`,hsla:`hsl(${s}, ${c}%, ${l}%, 1)`,hue:s,lightness:l,saturation:c}},o=e=>{if(!e)throw new Error("Color is not defined");const t=e.toLowerCase();let a;if(t.includes("rgb")){const e=n(t);e.length>3&&e.pop(),a=r(e).hue}if(t.includes("#")){const e=(e=>{if(!e.includes("#"))throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");let t=0,a=0,n=0;if(4===e.length)t=`0x${e[1]}${e[1]}`,a=`0x${e[2]}${e[2]}`,n=`0x${e[3]}${e[3]}`;else{if(7!==e.length)throw new Error("Invalid hex string length, cannot convert to RGB.");t=`0x${e[1]}${e[2]}`,a=`0x${e[3]}${e[4]}`,n=`0x${e[5]}${e[6]}`}return[+t,+a,+n]})(t);a=r(e).hue}if(t.includes("hsl")){a=n(t)[0]}const o=a?.toString();if(!o)throw new Error(`Hue was unable to be extracted from "${t}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);return o},i=(e,t=!1)=>{const a=o(e);return t?{background1:`hsla(${a}, 0%, 100%, 1)`,background2:`hsla(${a}, 67%, 99%, 1)`,background3:`hsla(${a}, 26%, 96%, 1)`,background4:`hsla(${a}, 15%, 94%, 1)`,background5:`hsla(${a}, 10%, 88%, 1)`,background6:`hsla(${a}, 80%, 80%, 1)`}:{background1:`hsla(${a}, 8%, 7%, 1)`,background2:`hsla(${a}, 8%, 13%, 1)`,background3:`hsla(${a}, 9%, 15%, 1)`,background4:`hsla(${a}, 6%, 23%, 1)`,background5:`hsla(${a}, 21%, 28%, 1)`,background6:`hsla(${a}, 5%, 51%, 1)`}},s=(e,t)=>{const a={};return Object.keys(e).forEach((n=>{a[n]=t[n]?t[n]:e[n]})),a}},277:(e,t,a)=>{"use strict";a.d(t,{os:()=>i});var n,r=a(723);a(70),a(141);!function(e){e.Browser="Browser",e.Dock="Dock",e.EnterpriseDock="EnterpriseDock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming",e.Microflow="Microflow"}(n||(n={}));const o=async(e,t,a="workspace-licensing")=>{const n={apiVersion:t.apiVersion||r.et,componentName:e,componentVersion:t.componentVersion||r.et,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:a,data:n})};const i=e=>{o(n.Notification,e)};new Map},333:(e,t,a)=>{"use strict";function n(){return void 0!==typeof crypto&&"randomUUID"in crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}a.d(t,{N:()=>n})},70:(e,t,a)=>{"use strict";a.d(t,{$p:()=>c,Io:()=>u,Iq:()=>s,Q:()=>n,Tv:()=>l,V1:()=>i,hb:()=>d,ur:()=>h});var n,r=a(438),o=a(723);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserSaveMenu="openfin-browser-save-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window",e.ClassicWindow="internal-generated-classic-window",e.EnterpriseContextMenu="openfin-enterprise-context-menu",e.BrowserAddressSearchPrefix="openfin-browser-menu-address-search-",e.EnterpriseBookmarkDialogWindow="openfin-enterprise-bookmark-dialog",e.DropdownMenu="openfin-enterprise-dropdown-menu",e.DockCompanion="openfin-dock-companion"}(n||(n={}));const i=e=>({left:(e.left+(e.right??e.left+e.width))/2,top:(e.top+(e.bottom??e.top+e.height))/2});function s(e){if(!o.cI)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:o.vL,uuid:o.$h};function l(){return s(c)}n.Home,r.MW.Workspace,n.Dock,r.MW.Workspace,n.Storefront,r.MW.Workspace,r.MW.Workspace,r.MW.Workspace;const d=async e=>{try{const t=await fin.Window.wrapSync({name:e.name,uuid:e.uuid??fin.me.uuid}).getOptions();return("browser"===t.workspacePlatform?.windowType||"enterprise"===t.workspacePlatform?.windowType)&&t.workspacePlatform?.pages}catch(e){return console.warn("isBrowserWindow error: ",e),!1}};async function u(){const e=await fin.Application.getCurrentSync().getChildWindows(),t=await Promise.all(e.map((async e=>d(e.identity))));return e.filter(((e,a)=>t[a]))}async function h(e){const t=await fin.System.getMonitorInfo();return[t.primaryMonitor,...t.nonPrimaryMonitors].reduce(((t,a)=>{const n=function(e,t){const a=e.top,n=e.left,r=e.top+e.height,o=e.left+e.width,i=t.monitorRect.top,s=t.monitorRect.left,c=t.monitorRect.bottom,l=t.monitorRect.right;if(a>c||r<i||n>l||o<s)return 0;const d=Math.max(a,i),u=Math.max(n,s);return(Math.min(r,c)-d)*(Math.min(o,l)-u)/(e.height*e.width)}(e,a);return n>t.percentage?{percentage:n,monitor:a}:t}),{percentage:0,monitor:t.primaryMonitor}).monitor}},236:e=>{"use strict";e.exports=__webpack_require__(/*! lodash.debounce */ "../../node_modules/lodash.debounce/index.js")},432:e=>{"use strict";e.exports=__webpack_require__(/*! openfin-notifications/dist/client/without-auto-launch */ "../../node_modules/openfin-notifications/dist/client/without-auto-launch.js")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";a.r(n),a.d(n,{deregister:()=>g,register:()=>h});var e=a(432),t=a(277),r=a(957),o={};for(const t in e)["default","register","deregister"].indexOf(t)<0&&(o[t]=()=>e[t]);a.d(n,o);const i=async t=>{if(t instanceof Error){let a=t.message;if(t.message.includes("register-notifications-platform")){if(a="Notifications platforms are not supported in versions below 1.13.0, try updating your notifications-service.",e?.provider?.getStatus){const{version:t}=await e.provider.getStatus();a+=` Your version is: ${t}`}return a}return t.message}return"string"==typeof t?t:"unknown error registering Notifications"},s=async e=>{if(e instanceof Error&&e.message.includes("register-notifications-platform"))throw new Error(await i(e));throw e},c="of-notifications-service-v1",l="of-workspace-notifications-sync",d={channelName:l},u=async(e,t)=>{const a=t.notificationsVersion.startsWith("2")?d.channelName:c,n=await fin.InterApplicationBus.Channel.connect(a,{wait:!1}),r=t.notificationsVersion.startsWith("2")?"register-platform":"register-notifications-platform";await n.dispatch(r,e)};async function h(a){try{const n=a&&"notificationsCustomManifest"in a?{customManifest:a.notificationsCustomManifest}:void 0;n&&n.customManifest?.manifestUuid&&(d.channelName=`${n.customManifest.manifestUuid}-${l}`);const o=await e.register(n);if(a){const e=await(0,r.qq)(fin.me.identity),t="notificationsPlatformOptions"in a?a.notificationsPlatformOptions:a;await u({theme:e.theme,scheme:e.defaultScheme,...t,workspacePlatform:{identity:fin.Platform.getCurrentSync().identity,analytics:{isSupported:!0}}},{notificationsVersion:o.notificationsVersion})}return(0,t.os)({allowed:!0,apiVersion:e.VERSION,componentVersion:o.notificationsVersion}),o}catch(a){(0,t.os)({allowed:!1,rejectionCode:await i(a),apiVersion:e.VERSION}),await s(a)}}const g=async t=>{try{const{version:a}=await e.provider.getStatus();if(null===a)throw new Error("Notifications service is not currently running.");await(async(e,t)=>{const a=t.notificationsVersion.startsWith("2")?d.channelName:c,n=await fin.InterApplicationBus.Channel.connect(a,{wait:!1}),r=t.notificationsVersion.startsWith("2")?"deregister-platform":"deregister-notifications-platform";await n.dispatch(r,e)})({id:t},{notificationsVersion:a})}catch(e){await s(e)}}})(),module.exports=n})();
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ "../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! void-elements */ "../../node_modules/void-elements/index.js");
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);
//# sourceMappingURL=html-parse-stringify.module.js.map


/***/ }),

/***/ "../../node_modules/i18next/dist/cjs/i18next.js":
/*!******************************************************!*\
  !*** ../../node_modules/i18next/dist/cjs/i18next.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


const isString = obj => typeof obj === 'string';
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = object => {
  if (object == null) return '';
  return '' + object;
};
const copy = (a, s, t) => {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = key => key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = object => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split('.');
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
const escape = data => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [' ', ',', '?', '!', ';'];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function (obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    let next;
    let nextPath = '';
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = code => code && code.replace('_', '-');

const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      if (!this.observers[event]) this.observers[event] = new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(_ref => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers['*']) {
      const cloned = Array.from(this.observers['*'].entries());
      cloned.forEach(_ref2 => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === 'v1') return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key === undefined || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = {
      ...options
    };
    if (!options) options = {};
    if (keys === undefined || keys === null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = !isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy[m] === deepKey) copy[m] = res[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach(suffix => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== 'v1') {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== undefined && (isString(options.context) || typeof options.context === 'number') && options.context !== '';
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf('-') > -1) {
      if (typeof Intl !== 'undefined' && typeof Intl.getCanonicalLocales !== 'undefined') {
        try {
          let formattedCode = Intl.getCanonicalLocales(code)[0];
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
        } catch (e) {}
      }
      const specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let p = code.split('-');
      if (this.options.lowerCaseLng) {
        p = p.map(part => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join('-');
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

let sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: n => Number(n > 1),
  2: n => Number(n != 1),
  3: n => 0,
  4: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  5: n => Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5),
  6: n => Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
  7: n => Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  8: n => Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
  9: n => Number(n >= 2),
  10: n => Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
  11: n => Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3),
  12: n => Number(n % 10 != 1 || n % 100 == 11),
  13: n => Number(n !== 0),
  14: n => Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
  15: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  16: n => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
  17: n => Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1),
  18: n => Number(n == 0 ? 0 : n == 1 ? 1 : 2),
  19: n => Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3),
  20: n => Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2),
  21: n => Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0),
  22: n => Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3)
};
const nonIntlVersions = ['v1', 'v2', 'v3'];
const intlVersions = ['v4'];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const createRules = () => {
  const rules = {};
  sets.forEach(set => {
    set.lngs.forEach(l => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
      const type = options.ordinal ? 'ordinal' : 'cardinal';
      const cacheKey = JSON.stringify({
        cleanedCode,
        type
      });
      if (cacheKey in this.pluralRulesCache) {
        return this.pluralRulesCache[cacheKey];
      }
      let rule;
      try {
        rule = new Intl.PluralRules(cleanedCode, {
          type
        });
      } catch (err) {
        if (!code.match(/-|_/)) return;
        const lngPart = this.languageUtils.getLanguagePartFromCode(code);
        rule = this.getRule(lngPart, options);
      }
      this.pluralRulesCache[cacheKey] = rule;
      return rule;
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    return rule.numbers.map(number => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return '';
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = 'plural';
      } else if (suffix === 1) {
        suffix = '';
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === 'v1') {
      if (suffix === 1) return '';
      if (typeof suffix === 'number') return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === 'v2') {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}

const deepFindWithDefaults = function (data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = val => val.replace(/\$/g, '$$$$');
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || (value => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

const parseFormatStr = formatStr => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (opt) {
          const [key, ...rest] = opt.split(':');
          const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = fn => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: undefined
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ',';
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find(f => f.indexOf(')') > -1)) {
      const lastIndex = formats.findIndex(f => f.indexOf(')') > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

const removePending = (q, name) => {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

const get = () => ({
  debug: false,
  initImmediate: true,
  ns: ['translation'],
  defaultNS: ['translation'],
  fallbackLng: ['dev'],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: 'all',
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: '.',
  nsSeparator: ':',
  pluralSeparator: '_',
  contextSeparator: '_',
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: 'fallback',
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: args => {
    let ret = {};
    if (typeof args[1] === 'object') ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === 'object' || typeof args[3] === 'object') {
      const options = args[3] || args[2];
      Object.keys(options).forEach(key => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: value => value,
    prefix: '{{',
    suffix: '}}',
    formatSeparator: ',',
    unescapePrefix: '-',
    nestingPrefix: '$t(',
    nestingSuffix: ')',
    nestingOptionsSeparator: ',',
    maxReplaces: 1000,
    skipOnVariables: true
  }
});
const transformOptions = options => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
};

const noop = () => {};
const bindMemberFunctions = inst => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== 'v1') {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = ClassOrObject => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== 'undefined') {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = function () {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = function () {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        if (lng === 'cimode') return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach(l => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === 'function') {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === 'function') {
      callback = ns;
      ns = undefined;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = undefined;
        this.emit('languageChanged', l);
        this.logger.log('languageChanged', l);
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t(...arguments);
      });
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function (key, opts) {
      let options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== '') options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || '.';
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

module.exports = instance;


/***/ }),

/***/ "../../node_modules/idb-keyval/dist/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/idb-keyval/dist/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   delMany: () => (/* binding */ delMany),
/* harmony export */   entries: () => (/* binding */ entries),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getMany: () => (/* binding */ getMany),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   promisifyRequest: () => (/* binding */ promisifyRequest),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setMany: () => (/* binding */ setMany),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   values: () => (/* binding */ values)
/* harmony export */ });
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    let dbp;
    const getDB = () => {
        if (dbp)
            return dbp;
        const request = indexedDB.open(dbName);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName);
        dbp = promisifyRequest(request);
        dbp.then((db) => {
            // It seems like Safari sometimes likes to just close the connection.
            // It's supposed to fire this event when that happens. Let's hope it does!
            db.onclose = () => (dbp = undefined);
        }, () => { });
        return dbp;
    };
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}




/***/ }),

/***/ "../../node_modules/lodash.debounce/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash.debounce/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "../../node_modules/openfin-notifications/dist/client/without-auto-launch.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/openfin-notifications/dist/client/without-auto-launch.js ***!
  \***********************************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(()=>{return e={37007:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}m(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,{once:!0})}(e,r)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function l(e,t,n,i){var r,o,s,l;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,l=u,console&&console.warn&&console.warn(l)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=u.bind(i);return r.listener=n,i.wrapFn=r,r}function d(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):v(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function m(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(o){i.once&&e.removeEventListener(t,r),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var l=c.length,u=v(c,l);for(n=0;n<l;++n)i(u[n],this,t)}return!0},o.prototype.addListener=function(e,t){return l(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return l(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,s;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return d(this,e,!0)},o.prototype.rawListeners=function(e){return d(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},3089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){const e=new Promise(((e,t)=>{this._resolve=e,this._reject=t}));this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},22777:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(3089);async function r(e,t){let n=0;for(const i of e)await t(i,n,e),n++}async function o(e,t){await Promise.all(e.map(t))}function s(e,t,n){const r=new i.DeferredPromise,o=e.add(((...e)=>{t(...e)&&(o.remove(),r.resolve())}));return n&&n.catch((e=>{o.remove(),r.reject(e)})),a(r.promise)}function a(e){return e.catch((()=>{})),e}t.serialForEach=r,t.serialMap=async function(e,t){const n=[];return await r(e,(async(e,i,r)=>{n.push(await t(e,i,r))})),n},t.serialFilter=async function(e,t){const n=[];return await r(e,(async(e,i,r)=>{await t(e,i,r)&&n.push(e)})),n},t.parallelForEach=o,t.parallelMap=async function(e,t){const n=[];return await o(e,(async(e,i,r)=>{n[i]=await t(e,i,r)})),n},t.parallelFilter=async function(e,t){const n=[];return await o(e,(async(e,i,r)=>{n[i]=await t(e,i,r)})),e.filter(((e,t)=>n[t]))},t.withStrictTimeout=function(e,t,n){const i=new Promise(((t,i)=>setTimeout((()=>i(new Error(n))),e)));return a(Promise.race([i,t]))},t.withTimeout=function(e,t){const n=new Promise((t=>setTimeout((()=>t([!0,void 0])),e))),i=t.then((e=>[!1,e]));return Promise.race([n,i])},t.untilTrue=function(e,t,n){return t()?Promise.resolve():s(e,t,n)},t.untilSignal=s,t.allowReject=a},95785:(e,t,n)=>{"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(22777)),i(n(3089))},40651:e=>{e.exports=function(e,t){for(var n=e.split("."),i=t.split("."),r=0;r<3;r++){var o=Number(n[r]),s=Number(i[r]);if(o>s)return 1;if(s>o)return-1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return-1}return 0}},33657:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;const r=n(37007),o=n(11154),s=n(59603);class a{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){const{type:t,target:n}=e,r=i(e,["type","target"]);let a;if(!n)throw new Error("Invalid event, no target specified");if("default"===n)a=this._defaultEmitter;else{if(!this._emitterProviders[n.type])throw new Error(`Invalid target, no provider registered for '${n.type}'`);a=this._emitterProviders[n.type](n.id)}const c=Object.assign({type:t},r),l=this._deserializers[t];l?a.emit(t,l(c)):"notification-form-submitted"===t?function(e,t){let n=!1;e.preventDefault=()=>n=!0,t.emit("notification-form-submitted",e),n||(0,o.tryServiceDispatch)(s.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:e.notification.id})}(c,a):a.emit(t,c)}}let c;t.EventRouter=a,t.eventEmitter=new r.EventEmitter,t.getEventRouter=function(){return c||(c=new a(t.eventEmitter)),c}},86455:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(n=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",n.SELECT="select",n.CLOSE="close",n.EXPIRE="expire",n.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},27167:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelClient=t.clearAwaitedChannelClient=t.initAwaitedChannelClient=t.ChannelClientConfig=void 0;const i=n(59603),r=n(75762);t.ChannelClientConfig={serviceChannel:i.SERVICE_CHANNEL};const o=async({wait:e})=>{await r.Log.info("Connecting to Notifications...");const n=await fin.InterApplicationBus.Channel.connect(t.ChannelClientConfig.serviceChannel,{wait:e,payload:{version:"2.9.1-alpha-3825"}});return await r.Log.info("Successfully connected to Notifications."),n};let s,a;t.initAwaitedChannelClient=()=>s?{channelClientPromise:s,isInit:!1}:(s=o({wait:!0}),s.catch((e=>(0,t.clearAwaitedChannelClient)())),{channelClientPromise:s,isInit:!0}),t.clearAwaitedChannelClient=()=>{s=null},t.getChannelClient=async()=>s||(async()=>{if(!a){try{a=await o({wait:!1}),a.setDefaultAction((()=>!1))}catch(e){throw await r.Log.error('Could not find channel provider. Did you call "notifications.register()"?'),e}a.onDisconnection((()=>{a=null}))}return a})()},11154:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryServiceDispatch=t.getServicePromise=t.launchSystemApp=t.connectToNotifications=void 0;const i=n(95785),r=n(59603),o=n(33657),s=n(27167);let a;const c=new i.DeferredPromise;let l=!1;async function u(){if(window.navigator.appVersion.includes("Windows"))try{const e=await fin.System.getRvmInfo();parseInt(e.version.split(".")[0])>=6&&(fin.System.launchManifest?fin.System.launchManifest("fins://system-apps/notification-center",{noUi:!0}).catch((e=>{console.error("Unable to launch the Notification Center as a system app",e)})):fin.System.openUrlWithBrowser("fins://system-apps/notification-center").catch((()=>{})))}catch(e){}else fin.System.openUrlWithBrowser("fins://system-apps/notification-center")}async function f(){var e;if(await c.promise,!a){if("undefined"==typeof fin){const e="fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.";return a=Promise.reject(new Error(e)),a}fin.System.getVersion().then((e=>{const t=parseInt(e.split(".")[2]);t<53&&console.warn(`API version ${t} of OpenFin version ${e} is less than 53. Please upgrade the runtime version.`)}));const{name:t,uuid:n}=null!==(e=fin.me.identity)&&void 0!==e?e:fin.Window.me;if(n===r.SERVICE_IDENTITY.uuid&&t===r.SERVICE_IDENTITY.name)a=Promise.reject(new Error("Trying to connect to provider from provider"));else{const e=window.setTimeout((()=>{console.warn("Taking a long time to connect to Notifications service. Is the Notifications service running?")}),5e3);a=(0,s.initAwaitedChannelClient)().channelClientPromise.then((t=>{window.clearTimeout(e);const n=(0,o.getEventRouter)();return t.register("WARN",(e=>console.warn(e))),t.register("event",(e=>{n.dispatchEvent(e)})),t.setDefaultAction((()=>!1)),t.onDisconnection((()=>{console.warn("Disconnected from Notifications service"),(0,s.clearAwaitedChannelClient)(),l=!0,a=null,u(),setTimeout((()=>{console.log("Attempting to reconnect to Notifications service"),f()}),300)})),l?console.log("Reconnected to Notifications service"):console.log("Connected to Notifications service"),t}))}}return a}t.connectToNotifications=function(){"undefined"!=typeof fin&&"undefined"!=typeof window?(u(),f(),"loading"!==document.readyState?c.resolve():(window.addEventListener("DOMContentLoaded",(()=>{c.resolve()})),document.addEventListener("DOMContentLoaded",(()=>{c.resolve()})))):console.warn("Could not connect to notifications, `fin` is not defined")},t.launchSystemApp=u,t.getServicePromise=f,t.tryServiceDispatch=async function(e,t){return(await(0,s.getChannelClient)()).dispatch(e,t)}},87204:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},93955:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},68912:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(93955),t),r(n(33713),t)},33713:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},46865:(e,t)=>{"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(i=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",i.WARNING="warning",i.SUCCESS="success",(n=t.IndicatorColor||(t.IndicatorColor={})).RED="red",n.GREEN="green",n.YELLOW="yellow",n.BLUE="blue",n.PURPLE="purple",n.GRAY="gray",n.ORANGE="orange",n.MAGENTA="magenta",n.TEAL="teal"},59603:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(n=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",n.UPDATE_NOTIFICATION="update-notification",n.CLEAR_NOTIFICATION="clear-notification",n.GET_APP_NOTIFICATIONS="fetch-app-notifications",n.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",n.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",n.ADD_EVENT_LISTENER="add-event-listener",n.REMOVE_EVENT_LISTENER="remove-event-listener",n.GET_PROVIDER_STATUS="get-provider-status",n.GET_NOTIFICATIONS_COUNT="get-notifications-count",n.SHOW_NOTIFICATION_CENTER="show-notification-center",n.HIDE_NOTIFICATION_CENTER="hide-notification-center",n.REGISTER_PLATFORM="register-notifications-platform",n.DEREGISTER_PLATFORM="deregister-notifications-platform",n.SET_FORM_STATUS_OPTIONS="set-form-status-options",n.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",n.GET_USER_SETTINGS_STATUS="get-user-settings-status",n.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",n.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule"},75762:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Log=void 0;class n{static async error(e){try{const t=n.getPrefixedMessage(e);console.error(t),await fin.System.log("error",t)}catch(e){n.handleError(e,"Failed to log error")}}static async warn(e){try{const t=n.getPrefixedMessage(e);console.warn(t),await fin.System.log("warning",t)}catch(e){n.handleError(e,"Failed to log warning")}}static async info(e){try{const t=n.getPrefixedMessage(e);console.info(t),await fin.System.log("info",t)}catch(e){n.handleError(e,"Failed to log info")}}static getPrefixedMessage(e){return`${n.LOG_PREFIX} ${e}`}static handleError(e,t){e instanceof Error?console.error(`${t} - ${e.name}: ${e.message}`):console.error(`${t} - ${JSON.stringify(e)}`)}}t.Log=n,n.LOG_PREFIX="[openfin-notifications]"},40707:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},s=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;const c=n(86455),l=n(11154),u=n(59603),f=n(33657),d=o(n(46451));t.provider=d;const p=n(28173),v=n(46865);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return v.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return v.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return v.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return v.IndicatorColor}});const m=n(44415);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return m.NotificationOptions}});const g=o(n(86455));t.actions=g,s(n(86455),t),s(n(87204),t),s(n(50295),t),s(n(68912),t),s(n(13154),t),s(n(75050),t),s(n(90512),t),t.VERSION="2.9.1-alpha-3825";const y=(0,f.getEventRouter)();function h(e){const{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}y.registerDeserializer("notification-created",(e=>h(e))),y.registerDeserializer("notification-toast-dismissed",(e=>h(e))),y.registerDeserializer("notification-closed",(e=>h(e))),y.registerDeserializer("notification-action",(e=>{var t;const n=h(e),{controlSource:i,controlIndex:r}=n,o=a(n,["controlSource","controlIndex"]);return e.trigger===c.ActionTrigger.CONTROL?Object.assign(Object.assign({},o),{control:null===(t=e.notification[i])||void 0===t?void 0:t[r]}):o})),y.registerDeserializer("notifications-count-changed",(e=>e)),y.registerDeserializer("notification-reminder-created",(e=>{const t=h(e),{reminderDate:n}=t,i=a(t,["reminderDate"]);return Object.assign(Object.assign({},i),{reminderDate:new Date(n)})})),y.registerDeserializer("notification-reminder-removed",(e=>h(e))),y.registerDeserializer("notification-sound-toggled",(e=>e)),t.addEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t);const n=f.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(t=function(e){return t=>{const n=t.notification.id;t.setFormStatus=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:n})),e(t)}}(t)),"notification-form-values-changed"===e&&(t=function(e){return t=>{t.setErrors=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:e,notificationId:t.notification.id}),e(t)}}(t)),f.eventEmitter.addListener(e,t),0===n&&1===f.eventEmitter.listenerCount(e)&&await(0,l.tryServiceDispatch)(u.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t),1===f.eventEmitter.listenerCount(e)&&f.eventEmitter.listeners(e)[0]===t&&await(0,l.tryServiceDispatch)(u.APITopic.REMOVE_EVENT_LISTENER,e),f.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw new Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw new Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw new Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw new Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw new Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");const n=await(0,l.tryServiceDispatch)(u.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.valueOf()}));return Object.assign(Object.assign({},n),{date:new Date(n.date),expires:null!==n.expires?new Date(n.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw new Error('Invalid argument passed to create: "id" must be Id of previously created Notification');const t=await(0,l.tryServiceDispatch)(u.APITopic.UPDATE_NOTIFICATION,Object.assign({},e));return Object.assign({},t)},t.clear=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await(0,l.tryServiceDispatch)(u.APITopic.GET_APP_NOTIFICATIONS,void 0)).map((e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null})))},t.clearAll=async function(){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,l.tryServiceDispatch)(u.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,l.tryServiceDispatch)(u.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,l.tryServiceDispatch)(u.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,l.tryServiceDispatch)(u.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,l.tryServiceDispatch)(u.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},46451:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;const r=i(n(40651)),o=n(95785),s=n(11154),a=n(59603);function c(){return(0,o.withStrictTimeout)(500,(0,s.tryServiceDispatch)(a.APITopic.GET_PROVIDER_STATUS,void 0),"").catch((()=>({connected:!1,version:null,templateAPIVersion:null})))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){const t=await c();if(t.connected&&null!==t.version){const n=(0,r.default)(t.version,e);if(0===n||1===n)return!0}return!1}},5879:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.ChannelClientHandlers=void 0;const i=n(59603),r=n(33657),o=n(75762),s=n(27167),a=n(46451);class c{}t.ChannelClientHandlers=c,c.handleDefaultAction=()=>!1,c.handleEventAction=e=>{(0,r.getEventRouter)().dispatchEvent(e)},c.handleWarnAction=async e=>{await o.Log.warn(e)},c.handleDisconnection=async()=>{(0,s.getChannelClient)()&&(await o.Log.warn("Disconnected from Notifications. Reconnecting..."),(0,s.clearAwaitedChannelClient)(),await f(),await d())};let l=null;t.register=async e=>{if(l)return l;try{return l=u(e),await l}finally{l=null}};const u=async e=>{if(null==e?void 0:e.customManifest){if(!e.customManifest.manifestUrl)throw new Error("manifestUrl must be provided.");if(!e.customManifest.manifestUuid)throw new Error("manifestUuid must be provided and must not be an empty string.");if(e.customManifest.manifestUuid===i.SERVICE_CHANNEL)throw new Error(`manifestUuid must not be ${i.SERVICE_CHANNEL}`);s.ChannelClientConfig.serviceChannel=`${e.customManifest.manifestUuid}-${i.SERVICE_CHANNEL}`,await f(e.customManifest.manifestUrl)}else s.ChannelClientConfig.serviceChannel=i.SERVICE_CHANNEL,await f();return await d(),{clientAPIVersion:"2.9.1-alpha-3825",notificationsVersion:(await(0,a.getStatus)()).version||"unknown"}},f=async e=>{try{const t=window.navigator.userAgent.toLowerCase().includes("windows"),n=e||"fins://system-apps/notification-center";t?(await o.Log.info("Launching Notifications via fin.System.launchManifest..."),await fin.System.launchManifest(n,{noUi:!0})):(await o.Log.info("Launching Notifications via fin.System.openUrlWithBrowser..."),await fin.System.openUrlWithBrowser(n))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to launch Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to launch Notifications - ${JSON.stringify(e)}`),e}},d=async()=>{try{const{channelClientPromise:e,isInit:t}=(0,s.initAwaitedChannelClient)(),n=await e;t&&(n.setDefaultAction(c.handleDefaultAction),n.register("event",c.handleEventAction),n.register("WARN",c.handleWarnAction),n.onDisconnection(c.handleDisconnection),fin.Window.wrapSync(i.SERVICE_IDENTITY).once("closed",c.handleDisconnection))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to connect to Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to connect to Notifications - ${JSON.stringify(e)}`),e}}},13154:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},50295:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},75050:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},78364:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},71474:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},90512:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(78364),t),r(n(71474),t),r(n(44415),t),r(n(15915),t)},44415:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)},15915:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},28173:(e,t)=>{"use strict";function n(e,t){let n;try{n=JSON.stringify(e)}catch(e){n=t}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.safeStringify=t.validateEnvironment=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw new Error(`Invalid argument passed: ${n(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw new Error(`Invalid argument passed: ${n(e,"The provided event type")} is not a valid Notifications event type`)},t.validateEnvironment=function(){if("undefined"==typeof fin)throw new Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.safeStringify=n},80664:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsRegistration=t.register=void 0,r(n(40707),t);var o=n(5879);Object.defineProperty(t,"register",{enumerable:!0,get:function(){return o.register}}),Object.defineProperty(t,"NotificationsRegistration",{enumerable:!0,get:function(){return o.NotificationsRegistration}})}},t={},function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}(80664);var e,t}));

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/I18nextProvider.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/I18nextProvider.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nextProvider: () => (/* binding */ I18nextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");


function I18nextProvider(_ref) {
  let {
    i18n,
    defaultNS,
    children
  } = _ref;
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext.Provider, {
    value
  }, children);
}

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/Trans.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/Trans.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trans: () => (/* binding */ Trans),
/* harmony export */   nodesToString: () => (/* reexport safe */ _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.nodesToString)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransWithoutContext.js */ "../../node_modules/react-i18next/dist/es/TransWithoutContext.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");




function Trans(_ref) {
  let {
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions = {},
    values,
    defaults,
    components,
    ns,
    i18n: i18nFromProps,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  } = _ref;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_2__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.getI18n)();
  const t = tFromProps || i18n && i18n.t.bind(i18n);
  return (0,_TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.Trans)({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    ns: ns || t && t.ns || defaultNSFromContext || i18n && i18n.options && i18n.options.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/TransWithoutContext.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/TransWithoutContext.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trans: () => (/* binding */ Trans),
/* harmony export */   nodesToString: () => (/* binding */ nodesToString)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var html_parse_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-parse-stringify */ "../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/react-i18next/dist/es/utils.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults.js */ "../../node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18nInstance.js */ "../../node_modules/react-i18next/dist/es/i18nInstance.js");





const hasChildren = (node, checkLength) => {
  if (!node) return false;
  const base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
};
const getChildren = node => {
  if (!node) return [];
  const children = node.props ? node.props.children : node.children;
  return node.props && node.props.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = children => Array.isArray(children) && children.every(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement);
const getAsArray = data => Array.isArray(data) ? data : [data];
const mergeProps = (source, target) => {
  const newTarget = {
    ...target
  };
  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
};
const nodesToString = (children, i18nOptions) => {
  if (!children) return '';
  let stringNode = '';
  const childrenArray = getAsArray(children);
  const keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach((child, childIndex) => {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) {
      stringNode += `${child}`;
    } else if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      const {
        props,
        type
      } = child;
      const childPropsCount = Object.keys(props).length;
      const shouldKeepChild = keepArray.indexOf(type) > -1;
      const childChildren = props.children;
      if (!childChildren && shouldKeepChild && !childPropsCount) {
        stringNode += `<${type}/>`;
      } else if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
        stringNode += `<${childIndex}></${childIndex}>`;
      } else if (shouldKeepChild && childPropsCount === 1 && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(childChildren)) {
        stringNode += `<${type}>${childChildren}</${type}>`;
      } else {
        const content = nodesToString(childChildren, i18nOptions);
        stringNode += `<${childIndex}>${content}</${childIndex}>`;
      }
    } else if (child === null) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Trans: the passed in value is invalid - seems you passed in a null child.`);
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child)) {
      const {
        format,
        ...clone
      } = child;
      const keys = Object.keys(clone);
      if (keys.length === 1) {
        const value = format ? `${keys[0]}, ${format}` : keys[0];
        stringNode += `{{${value}}}`;
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.`, child);
      }
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.`, child);
    }
  });
  return stringNode;
};
const renderNodes = (children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
  if (targetString === '') return [];
  const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map(keep => `<${keep}`).join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
  const data = {};
  const getData = childs => {
    const childrenArray = getAsArray(childs);
    childrenArray.forEach(child => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && !(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) Object.assign(data, child);
    });
  };
  getData(children);
  const ast = html_parse_stringify__WEBPACK_IMPORTED_MODULE_1__["default"].parse(`<0>${targetString}</0>`);
  const opts = {
    ...data,
    ...combinedTOpts
  };
  const renderInner = (child, node, rootReactNode) => {
    const childs = getChildren(child);
    const mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props && child.props.i18nIsDynamicList ? childs : mappedChildren;
  };
  const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
    if (child.dummy) {
      child.children = inner;
      mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        key: i
      }, isVoid ? undefined : inner));
    } else {
      mem.push(...react__WEBPACK_IMPORTED_MODULE_0__.Children.map([child], c => {
        const props = {
          ...c.props
        };
        delete props.i18nIsDynamicList;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(c.type, {
          ...props,
          key: i,
          ref: c.ref
        }, isVoid ? null : inner);
      }));
    }
  };
  const mapAST = (reactNode, astNode, rootReactNode) => {
    const reactNodes = getAsArray(reactNode);
    const astNodes = getAsArray(astNode);
    return astNodes.reduce((mem, node, i) => {
      const translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === 'tag') {
        let tmp = reactNodes[parseInt(node.name, 10)];
        if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        const child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        const isElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child);
        const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && child.dummy && !isElement;
        const isKnownComponent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(children) && Object.hasOwnProperty.call(children, node.name);
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(child)) {
          const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          const inner = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (isEmptyTransWithHTML) {
          const inner = mapAST(reactNodes, node.children, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            const inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(node.name, {
                key: `${node.name}-${i}`
              }));
            } else {
              const inner = mapAST(reactNodes, node.children, rootReactNode);
              mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(node.name, {
                key: `${node.name}-${i}`
              }, inner));
            }
          } else if (node.voidElement) {
            mem.push(`<${node.name} />`);
          } else {
            const inner = mapAST(reactNodes, node.children, rootReactNode);
            mem.push(`<${node.name}>${inner}</${node.name}>`);
          }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(child) && !isElement) {
          const content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else {
          pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
        }
      } else if (node.type === 'text') {
        const wrapTextNodes = i18nOptions.transWrapTextNodes;
        const content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(wrapTextNodes, {
            key: `${node.name}-${i}`
          }, content));
        } else {
          mem.push(content);
        }
      }
      return mem;
    }, []);
  };
  const result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
};
function Trans(_ref) {
  let {
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions = {},
    values,
    defaults,
    components,
    ns,
    i18n: i18nFromProps,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  } = _ref;
  const i18n = i18nFromProps || (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_4__.getI18n)();
  if (!i18n) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }
  const t = tFromProps || i18n.t.bind(i18n) || (k => k);
  const reactI18nextOptions = {
    ...(0,_defaults_js__WEBPACK_IMPORTED_MODULE_3__.getDefaults)(),
    ...(i18n.options && i18n.options.react)
  };
  let namespaces = ns || t.ns || i18n.options && i18n.options.defaultNS;
  namespaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(namespaces) ? [namespaces] : namespaces || ['translation'];
  const nodeAsString = nodesToString(children, reactI18nextOptions);
  const defaultValue = defaults || nodeAsString || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  const {
    hashTransKey
  } = reactI18nextOptions;
  const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
  if (i18n.options && i18n.options.interpolation && i18n.options.interpolation.defaultVariables) {
    values = values && Object.keys(values).length > 0 ? {
      ...values,
      ...i18n.options.interpolation.defaultVariables
    } : {
      ...i18n.options.interpolation.defaultVariables
    };
  }
  const interpolationOverride = values || count !== undefined || !children ? tOptions.interpolation : {
    interpolation: {
      ...tOptions.interpolation,
      prefix: '#$?',
      suffix: '?$#'
    }
  };
  const combinedTOpts = {
    ...tOptions,
    context: context || tOptions.context,
    count,
    ...values,
    ...interpolationOverride,
    defaultValue,
    ns: namespaces
  };
  const translation = key ? t(key, combinedTOpts) : defaultValue;
  if (components) {
    Object.keys(components).forEach(c => {
      const comp = components[c];
      if (typeof comp.type === 'function' || !comp.props || !comp.props.children || translation.indexOf(`${c}/>`) < 0 && translation.indexOf(`${c} />`) < 0) return;
      function Componentized() {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, comp);
      }
      components[c] = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Componentized);
    });
  }
  const content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  const useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useAsParent, additionalProps, content) : content;
}

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/Translation.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/Translation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Translation: () => (/* binding */ Translation)
/* harmony export */ });
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTranslation.js */ "../../node_modules/react-i18next/dist/es/useTranslation.js");

function Translation(props) {
  const {
    ns,
    children,
    ...options
  } = props;
  const [t, i18n, ready] = (0,_useTranslation_js__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(ns, options);
  return children(t, {
    i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/context.js":
/*!***********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nContext: () => (/* binding */ I18nContext),
/* harmony export */   ReportNamespaces: () => (/* binding */ ReportNamespaces),
/* harmony export */   composeInitialProps: () => (/* binding */ composeInitialProps),
/* harmony export */   getDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_1__.getDefaults),
/* harmony export */   getI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.getI18n),
/* harmony export */   getInitialProps: () => (/* binding */ getInitialProps),
/* harmony export */   initReactI18next: () => (/* reexport safe */ _initReactI18next_js__WEBPACK_IMPORTED_MODULE_3__.initReactI18next),
/* harmony export */   setDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_1__.setDefaults),
/* harmony export */   setI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.setI18n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.js */ "../../node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18nInstance.js */ "../../node_modules/react-i18next/dist/es/i18nInstance.js");
/* harmony import */ var _initReactI18next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initReactI18next.js */ "../../node_modules/react-i18next/dist/es/initReactI18next.js");





const I18nContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach(ns => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces = () => Object.keys(this.usedNamespaces);
}
const composeInitialProps = ForComponent => async ctx => {
  const componentsInitialProps = ForComponent.getInitialProps ? await ForComponent.getInitialProps(ctx) : {};
  const i18nInitialProps = getInitialProps();
  return {
    ...componentsInitialProps,
    ...i18nInitialProps
  };
};
const getInitialProps = () => {
  const i18n = (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_2__.getI18n)();
  const namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  const ret = {};
  const initialI18nStore = {};
  i18n.languages.forEach(l => {
    initialI18nStore[l] = {};
    namespaces.forEach(ns => {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
};

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/defaults.js":
/*!************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/defaults.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaults: () => (/* binding */ getDefaults),
/* harmony export */   setDefaults: () => (/* binding */ setDefaults)
/* harmony export */ });
/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unescape.js */ "../../node_modules/react-i18next/dist/es/unescape.js");

let defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: _unescape_js__WEBPACK_IMPORTED_MODULE_0__.unescape
};
const setDefaults = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const getDefaults = () => defaultOptions;

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/i18nInstance.js":
/*!****************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/i18nInstance.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getI18n: () => (/* binding */ getI18n),
/* harmony export */   setI18n: () => (/* binding */ setI18n)
/* harmony export */ });
let i18nInstance;
const setI18n = instance => {
  i18nInstance = instance;
};
const getI18n = () => i18nInstance;

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/index.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nContext: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.I18nContext),
/* harmony export */   I18nextProvider: () => (/* reexport safe */ _I18nextProvider_js__WEBPACK_IMPORTED_MODULE_5__.I18nextProvider),
/* harmony export */   Trans: () => (/* reexport safe */ _Trans_js__WEBPACK_IMPORTED_MODULE_0__.Trans),
/* harmony export */   TransWithoutContext: () => (/* reexport safe */ _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__.Trans),
/* harmony export */   Translation: () => (/* reexport safe */ _Translation_js__WEBPACK_IMPORTED_MODULE_4__.Translation),
/* harmony export */   composeInitialProps: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.composeInitialProps),
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   getDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_9__.getDefaults),
/* harmony export */   getI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__.getI18n),
/* harmony export */   getInitialProps: () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_11__.getInitialProps),
/* harmony export */   initReactI18next: () => (/* reexport safe */ _initReactI18next_js__WEBPACK_IMPORTED_MODULE_8__.initReactI18next),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   plural: () => (/* binding */ plural),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectOrdinal: () => (/* binding */ selectOrdinal),
/* harmony export */   setDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_9__.setDefaults),
/* harmony export */   setI18n: () => (/* reexport safe */ _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__.setI18n),
/* harmony export */   time: () => (/* binding */ time),
/* harmony export */   useSSR: () => (/* reexport safe */ _useSSR_js__WEBPACK_IMPORTED_MODULE_7__.useSSR),
/* harmony export */   useTranslation: () => (/* reexport safe */ _useTranslation_js__WEBPACK_IMPORTED_MODULE_2__.useTranslation),
/* harmony export */   withSSR: () => (/* reexport safe */ _withSSR_js__WEBPACK_IMPORTED_MODULE_6__.withSSR),
/* harmony export */   withTranslation: () => (/* reexport safe */ _withTranslation_js__WEBPACK_IMPORTED_MODULE_3__.withTranslation)
/* harmony export */ });
/* harmony import */ var _Trans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trans.js */ "../../node_modules/react-i18next/dist/es/Trans.js");
/* harmony import */ var _TransWithoutContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransWithoutContext.js */ "../../node_modules/react-i18next/dist/es/TransWithoutContext.js");
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTranslation.js */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _withTranslation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withTranslation.js */ "../../node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _Translation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translation.js */ "../../node_modules/react-i18next/dist/es/Translation.js");
/* harmony import */ var _I18nextProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./I18nextProvider.js */ "../../node_modules/react-i18next/dist/es/I18nextProvider.js");
/* harmony import */ var _withSSR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withSSR.js */ "../../node_modules/react-i18next/dist/es/withSSR.js");
/* harmony import */ var _useSSR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useSSR.js */ "../../node_modules/react-i18next/dist/es/useSSR.js");
/* harmony import */ var _initReactI18next_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initReactI18next.js */ "../../node_modules/react-i18next/dist/es/initReactI18next.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaults.js */ "../../node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./i18nInstance.js */ "../../node_modules/react-i18next/dist/es/i18nInstance.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");












const date = () => '';
const time = () => '';
const number = () => '';
const select = () => '';
const plural = () => '';
const selectOrdinal = () => '';

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/initReactI18next.js":
/*!********************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/initReactI18next.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initReactI18next: () => (/* binding */ initReactI18next)
/* harmony export */ });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "../../node_modules/react-i18next/dist/es/defaults.js");
/* harmony import */ var _i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18nInstance.js */ "../../node_modules/react-i18next/dist/es/i18nInstance.js");


const initReactI18next = {
  type: '3rdParty',
  init(instance) {
    (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.setDefaults)(instance.options.react);
    (0,_i18nInstance_js__WEBPACK_IMPORTED_MODULE_1__.setI18n)(instance);
  }
};

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/unescape.js":
/*!************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/unescape.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unescape: () => (/* binding */ unescape)
/* harmony export */ });
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};
const unescapeHtmlEntity = m => htmlEntities[m];
const unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/useSSR.js":
/*!**********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/useSSR.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSSR: () => (/* binding */ useSSR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");


const useSSR = function (initialI18nStore, initialLanguage) {
  let props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getI18n)();
  if (i18n.options && i18n.options.isClone) return;
  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources) => {
      Object.keys(lngResources).forEach(ns => {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }
  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
};

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/useTranslation.js":
/*!******************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/useTranslation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTranslation: () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/react-i18next/dist/es/utils.js");



const usePrevious = (value, ignore) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = function (ns) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context_js__WEBPACK_IMPORTED_MODULE_1__.ReportNamespaces();
  if (!i18n) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');
    const notReadyT = (k, optsOrDefaultValue) => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(optsOrDefaultValue)) return optsOrDefaultValue;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(optsOrDefaultValue) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== undefined) (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const i18nOptions = {
    ...(0,_context_js__WEBPACK_IMPORTED_MODULE_1__.getDefaults)(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(namespaces) ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(n => (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasLoadedNamespace)(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const [t, setT] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadLanguages)(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadNamespaces)(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(e => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(e => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(resolve => {
    if (props.lng) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadLanguages)(i18n, props.lng, namespaces, () => resolve());
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadNamespaces)(i18n, namespaces, () => resolve());
    }
  });
};

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/utils.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDisplayName: () => (/* binding */ getDisplayName),
/* harmony export */   hasLoadedNamespace: () => (/* binding */ hasLoadedNamespace),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   loadLanguages: () => (/* binding */ loadLanguages),
/* harmony export */   loadNamespaces: () => (/* binding */ loadNamespaces),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
}
const alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (isString(args[0]) && alreadyWarned[args[0]]) return;
  if (isString(args[0])) alreadyWarned[args[0]] = new Date();
  warn(...args);
}
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off('initialized', initialized);
      }, 0);
      cb();
    };
    i18n.on('initialized', initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString(ns)) ns = [ns];
  ns.forEach(n => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const oldI18nextHasLoadedNamespace = function (ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const lng = i18n.languages[0];
  const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  const lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;
  const loadNotPending = (l, n) => {
    const loadState = i18n.services.backendConnector.state[`${l}|${n}`];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
};
const hasLoadedNamespace = function (ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }
  const isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
};
const getDisplayName = Component => Component.displayName || Component.name || (isString(Component) && Component.length > 0 ? Component : 'Unknown');
const isString = obj => typeof obj === 'string';
const isObject = obj => typeof obj === 'object' && obj !== null;

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/withSSR.js":
/*!***********************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/withSSR.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withSSR: () => (/* binding */ withSSR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _useSSR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSSR.js */ "../../node_modules/react-i18next/dist/es/useSSR.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "../../node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/react-i18next/dist/es/utils.js");




const withSSR = () => function Extend(WrappedComponent) {
  function I18nextWithSSR(_ref) {
    let {
      initialI18nStore,
      initialLanguage,
      ...rest
    } = _ref;
    (0,_useSSR_js__WEBPACK_IMPORTED_MODULE_1__.useSSR)(initialI18nStore, initialLanguage);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      ...rest
    });
  }
  I18nextWithSSR.getInitialProps = (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.composeInitialProps)(WrappedComponent);
  I18nextWithSSR.displayName = `withI18nextSSR(${(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getDisplayName)(WrappedComponent)})`;
  I18nextWithSSR.WrappedComponent = WrappedComponent;
  return I18nextWithSSR;
};

/***/ }),

/***/ "../../node_modules/react-i18next/dist/es/withTranslation.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/react-i18next/dist/es/withTranslation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withTranslation: () => (/* binding */ withTranslation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _useTranslation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTranslation.js */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/react-i18next/dist/es/utils.js");



const withTranslation = function (ns) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      let {
        forwardedRef,
        ...rest
      } = _ref;
      const [t, i18n, ready] = (0,_useTranslation_js__WEBPACK_IMPORTED_MODULE_1__.useTranslation)(ns, {
        ...rest,
        keyPrefix: options.keyPrefix
      });
      const passDownProps = {
        ...rest,
        t,
        i18n,
        tReady: ready
      };
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = `withI18nextTranslation(${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(WrappedComponent)})`;
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    const forwardRef = (props, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(I18nextWithTranslation, Object.assign({}, props, {
      forwardedRef: ref
    }));
    return options.withRef ? (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(forwardRef) : I18nextWithTranslation;
  };
};

/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react/cjs/react.development.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function () {
          console.warn(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            info[0],
            info[1]
          );
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance =
        ((publicInstance = publicInstance.constructor) &&
          (publicInstance.displayName || publicInstance.name)) ||
        "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] ||
        (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ),
        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if (
        "object" === typeof type &&
        null !== type &&
        type.$$typeof === REACT_LAZY_TYPE
      )
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(
      type,
      key,
      self,
      source,
      owner,
      props,
      debugStack,
      debugTask
    ) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        oldElement._owner,
        oldElement.props,
        oldElement._debugStack,
        oldElement._debugTask
      );
      oldElement._store &&
        (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return (
        "$" +
        key.replace(/[=:]/g, function (match) {
          return escaperLookup[match];
        })
      );
    }
    function getElementKey(element, index) {
      return "object" === typeof element &&
        null !== element &&
        null != element.key
        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
        : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (
            ("string" === typeof thenable.status
              ? thenable.then(noop$1, noop$1)
              : ((thenable.status = "pending"),
                thenable.then(
                  function (fulfilledValue) {
                    "pending" === thenable.status &&
                      ((thenable.status = "fulfilled"),
                      (thenable.value = fulfilledValue));
                  },
                  function (error) {
                    "pending" === thenable.status &&
                      ((thenable.status = "rejected"),
                      (thenable.reason = error));
                  }
                )),
            thenable.status)
          ) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = !1;
      if (null === children) invokeCallback = !0;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = !0;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = !0;
                break;
              case REACT_LAZY_TYPE:
                return (
                  (invokeCallback = children._init),
                  mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  )
                );
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey =
          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback)
          ? ((escapedPrefix = ""),
            null != childKey &&
              (escapedPrefix =
                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            }))
          : null != callback &&
            (isValidElement(callback) &&
              (null != callback.key &&
                ((invokeCallback && invokeCallback.key === callback.key) ||
                  checkKeyStringCoercion(callback.key)),
              (escapedPrefix = cloneAndReplaceKey(
                callback,
                escapedPrefix +
                  (null == callback.key ||
                  (invokeCallback && invokeCallback.key === callback.key)
                    ? ""
                    : ("" + callback.key).replace(
                        userProvidedKeyEscapeRegex,
                        "$&/"
                      ) + "/") +
                  childKey
              )),
              "" !== nameSoFar &&
                null != invokeCallback &&
                isValidElement(invokeCallback) &&
                null == invokeCallback.key &&
                invokeCallback._store &&
                !invokeCallback._store.validated &&
                (escapedPrefix._store.validated = 2),
              (callback = escapedPrefix)),
            array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          (nameSoFar = children[i]),
            (type = childKey + getElementKey(nameSoFar, i)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if (((i = getIteratorFn(children)), "function" === typeof i))
        for (
          i === children.entries &&
            (didWarnAboutMaps ||
              console.warn(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (didWarnAboutMaps = !0)),
            children = i.call(children),
            i = 0;
          !(nameSoFar = children.next()).done;

        )
          (nameSoFar = nameSoFar.value),
            (type = childKey + getElementKey(nameSoFar, i++)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === array
              ? "object with keys {" + Object.keys(children).join(", ") + "}"
              : array) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [],
        count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function (moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 1), (payload._result = moduleObject);
          },
          function (error) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 2), (payload._result = error);
          }
        );
        -1 === payload._status &&
          ((payload._status = 0), (payload._result = ctor));
      }
      if (1 === payload._status)
        return (
          (ctor = payload._result),
          void 0 === ctor &&
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ),
          "default" in ctor ||
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ),
          ctor.default
        );
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (null === enqueueTaskImpl)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(
            module,
            "timers"
          ).setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function (callback) {
            !1 === didWarnAboutMessageChannel &&
              ((didWarnAboutMessageChannel = !0),
              "undefined" === typeof MessageChannel &&
                console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(void 0);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && "function" === typeof AggregateError
        ? new AggregateError(errors)
        : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 &&
        console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (null !== queue)
        if (0 !== queue.length)
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length
        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          reject(queue))
        : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = !0;
        var i = 0;
        try {
          for (; i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = !1;
              var continuation = callback(!1);
              if (null !== continuation) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = !1;
        }
      }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      didWarnStateUpdateForUnmountedComponent = {},
      ReactNoopUpdateQueue = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function (publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function (publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function (publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      },
      assign = Object.assign,
      emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function (partialState, callback) {
      if (
        "object" !== typeof partialState &&
        "function" !== typeof partialState &&
        null != partialState
      )
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      },
      fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) &&
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray,
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      },
      hasOwnProperty = Object.prototype.hasOwnProperty,
      createTask = console.createTask
        ? console.createTask
        : function () {
            return null;
          };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function (callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs[
      "react-stack-bottom-frame"
    ].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1,
      userProvidedKeyEscapeRegex = /\/+/g,
      reportGlobalError =
        "function" === typeof reportError
          ? reportError
          : function (error) {
              if (
                "object" === typeof window &&
                "function" === typeof window.ErrorEvent
              ) {
                var event = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" === typeof error &&
                    null !== error &&
                    "string" === typeof error.message
                      ? String(error.message)
                      : String(error),
                  error: error
                });
                if (!window.dispatchEvent(event)) return;
              } else if (
                "object" === typeof process &&
                "function" === typeof process.emit
              ) {
                process.emit("uncaughtException", error);
                return;
              }
              console.error(error);
            },
      didWarnAboutMessageChannel = !1,
      enqueueTaskImpl = null,
      actScopeDepth = 0,
      didWarnNoAwaitAct = !1,
      isFlushing = !1,
      queueSeveralMicrotasks =
        "function" === typeof queueMicrotask
          ? function (callback) {
              queueMicrotask(function () {
                return queueMicrotask(callback);
              });
            }
          : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function (size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function (children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function (children) {
        var n = 0;
        mapChildren(children, function () {
          n++;
        });
        return n;
      },
      toArray: function (children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      },
      only: function (children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function (callback) {
      var prevActQueue = ReactSharedInternals.actQueue,
        prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = (ReactSharedInternals.actQueue =
          null !== prevActQueue ? prevActQueue : []),
        didAwaitActCall = !1;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          (popActScope(prevActQueue, prevActScopeDepth),
          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      if (
        null !== result &&
        "object" === typeof result &&
        "function" === typeof result.then
      ) {
        var thenable = result;
        queueSeveralMicrotasks(function () {
          didAwaitActCall ||
            didWarnNoAwaitAct ||
            ((didWarnNoAwaitAct = !0),
            console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
        });
        return {
          then: function (resolve, reject) {
            didAwaitActCall = !0;
            thenable.then(
              function (returnValue) {
                popActScope(prevActQueue, prevActScopeDepth);
                if (0 === prevActScopeDepth) {
                  try {
                    flushActQueue(queue),
                      enqueueTask(function () {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                  } catch (error$0) {
                    ReactSharedInternals.thrownErrors.push(error$0);
                  }
                  if (0 < ReactSharedInternals.thrownErrors.length) {
                    var _thrownError = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    );
                    ReactSharedInternals.thrownErrors.length = 0;
                    reject(_thrownError);
                  }
                } else resolve(returnValue);
              },
              function (error) {
                popActScope(prevActQueue, prevActScopeDepth);
                0 < ReactSharedInternals.thrownErrors.length
                  ? ((error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    )),
                    (ReactSharedInternals.thrownErrors.length = 0),
                    reject(error))
                  : reject(error);
              }
            );
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      0 === prevActScopeDepth &&
        (flushActQueue(queue),
        0 !== queue.length &&
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = !0),
              console.error(
                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
              ));
          }),
        (ReactSharedInternals.actQueue = null));
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      return {
        then: function (resolve, reject) {
          didAwaitActCall = !0;
          0 === prevActScopeDepth
            ? ((ReactSharedInternals.actQueue = queue),
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              }))
            : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function () {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function (element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " +
            element +
            "."
        );
      var props = assign({}, element.props),
        key = element.key,
        owner = element._owner;
      if (null != config) {
        var JSCompiler_inline_result;
        a: {
          if (
            hasOwnProperty.call(config, "ref") &&
            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) &&
            JSCompiler_inline_result.isReactWarning
          ) {
            JSCompiler_inline_result = !1;
            break a;
          }
          JSCompiler_inline_result = void 0 !== config.ref;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (key = "" + config.key));
        for (propName in config)
          !hasOwnProperty.call(config, propName) ||
            "key" === propName ||
            "__self" === propName ||
            "__source" === propName ||
            ("ref" === propName && void 0 === config.ref) ||
            (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0; i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(
        element.type,
        key,
        void 0,
        void 0,
        owner,
        props,
        element._debugStack,
        element._debugTask
      );
      for (key = 2; key < arguments.length; key++)
        (owner = arguments[key]),
          isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function (defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function (type, config, children) {
      for (var i = 2; i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (null != config)
        for (propName in (didWarnAboutOldJSXRuntime ||
          !("__self" in config) ||
          "key" in config ||
          ((didWarnAboutOldJSXRuntime = !0),
          console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )),
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (node = "" + config.key)),
        config))
          hasOwnProperty.call(config, propName) &&
            "key" !== propName &&
            "__self" !== propName &&
            "__source" !== propName &&
            (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) i.children = children;
      else if (1 < childrenLength) {
        for (
          var childArray = Array(childrenLength), _i = 0;
          _i < childrenLength;
          _i++
        )
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in ((childrenLength = type.defaultProps), childrenLength))
          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
      node &&
        defineKeyPropWarningGetter(
          i,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(
        type,
        node,
        void 0,
        void 0,
        getOwner(),
        i,
        propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    exports.createRef = function () {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function (render) {
      null != render && render.$$typeof === REACT_MEMO_TYPE
        ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" !== typeof render
          ? console.error(
              "forwardRef requires a render function but was given %s.",
              null === render ? "null" : typeof render
            )
          : 0 !== render.length &&
            2 !== render.length &&
            console.error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              1 === render.length
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
      null != render &&
        null != render.defaultProps &&
        console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
        ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          render.name ||
            render.displayName ||
            (Object.defineProperty(render, "name", { value: name }),
            (render.displayName = name));
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function (ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function (type, compare) {
      null == type &&
        console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          type.name ||
            type.displayName ||
            (Object.defineProperty(type, "name", { value: name }),
            (type.displayName = name));
        }
      });
      return compare;
    };
    exports.startTransition = function (scope) {
      var prevTransition = ReactSharedInternals.T,
        currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set();
      try {
        var returnValue = scope(),
          onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish &&
          onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue &&
          null !== returnValue &&
          "function" === typeof returnValue.then &&
          returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null === prevTransition &&
          currentTransition._updatedFibers &&
          ((scope = currentTransition._updatedFibers.size),
          currentTransition._updatedFibers.clear(),
          10 < scope &&
            console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )),
          (ReactSharedInternals.T = prevTransition);
      }
    };
    exports.unstable_useCacheRefresh = function () {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function (usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function (action, initialState, permalink) {
      return resolveDispatcher().useActionState(
        action,
        initialState,
        permalink
      );
    };
    exports.useCallback = function (callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function (Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE &&
        console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function (value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function (value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function (create, createDeps, update) {
      null == create &&
        console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      var dispatcher = resolveDispatcher();
      if ("function" === typeof update)
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function () {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function (ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function (create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function (passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function (reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function (initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function (initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function (
      subscribe,
      getSnapshot,
      getServerSnapshot
    ) {
      return resolveDispatcher().useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function () {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/react/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../../node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../../node_modules/void-elements/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/void-elements/index.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace/notifications */ "../../node_modules/@openfin/workspace/notifications.js");
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable linebreak-style */

const NOTIFICATION_SOUND_URL = "https://built-on-openfin.github.io/container-starter/dev/ameet/use-notifications/use-notifications/assets/notification.mp3";
// Keep track of notifications we are updating
const updatableNotifications = {};
let updatableNotificationTimer;
let loggingElement;
let codeElement;
let connected = false;
let connectedVersion;
let statusIntervalId;
let lastConnectionStatus;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
        await initializeNotifications();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initializes the DOM elements and sets up event listeners for UI controls.
 */
async function initDom() {
    loggingElement = document.querySelector("#logging");
    codeElement = document.querySelector("#code");
    const loggingContainer = document.querySelector("#logging-container");
    const codeContainer = document.querySelector("#code-container");
    if (!codeElement || !loggingElement || !loggingContainer || !codeContainer) {
        return;
    }
    loggingAddEntry(`Library Version: ${_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.VERSION}`);
    const btnLoggingClear = document.querySelector("#btnLoggingClear");
    if (btnLoggingClear) {
        btnLoggingClear.addEventListener("click", () => {
            if (loggingElement) {
                loggingElement.textContent = "";
            }
        });
    }
    const btnCodeCopy = document.querySelector("#btnCodeCopy");
    if (btnCodeCopy) {
        btnCodeCopy.addEventListener("click", async () => {
            if (codeElement) {
                await fin.Clipboard.writeText({ data: codeElement.value });
            }
        });
    }
    const btnCodeNotification = document.querySelector("#btnCodeNotification");
    if (btnCodeNotification) {
        btnCodeNotification.addEventListener("click", async () => {
            try {
                if (codeElement) {
                    const notificationOptions = JSON.parse(codeElement.value);
                    notificationOptions.id = randomUUID();
                    codeShowExample(notificationOptions);
                    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notificationOptions);
                }
            }
            catch { }
        });
    }
    codeElement.addEventListener("input", () => {
        if (codeElement) {
            try {
                JSON.parse(codeElement.value);
                codeElement.classList.remove("error");
            }
            catch {
                codeElement.classList.add("error");
            }
        }
    });
    codeContainer.style.display = "none";
    if (loggingContainer) {
        loggingContainer.style.display = "flex";
    }
    const btnViewLogging = document.querySelector("#btnViewLogging");
    if (btnViewLogging) {
        btnViewLogging.addEventListener("click", () => {
            loggingContainer.style.display = "flex";
            codeContainer.style.display = "none";
        });
    }
    const btnViewCode = document.querySelector("#btnViewCode");
    if (btnViewCode) {
        btnViewCode.addEventListener("click", () => {
            loggingContainer.style.display = "none";
            codeContainer.style.display = "flex";
        });
    }
    const btnNotificationSimple = document.querySelector("#btnNotificationSimple");
    if (btnNotificationSimple) {
        btnNotificationSimple.addEventListener("click", async () => showSimpleNotification());
    }
    const btnNotificationBodyDismiss = document.querySelector("#btnNotificationBodyDismiss");
    if (btnNotificationBodyDismiss) {
        btnNotificationBodyDismiss.addEventListener("click", async () => showSimpleNotificationBodyDismiss());
    }
    const btnNotificationBodyDismissAction = document.querySelector("#btnNotificationBodyDismissAction");
    if (btnNotificationBodyDismissAction) {
        btnNotificationBodyDismissAction.addEventListener("click", async () => showSimpleNotificationBodyDismissAction());
    }
    const btnNotificationActionable = document.querySelector("#btnNotificationActionable");
    if (btnNotificationActionable) {
        btnNotificationActionable.addEventListener("click", async () => showActionableNotification());
    }
    const btnNotificationForm = document.querySelector("#btnNotificationForm");
    if (btnNotificationForm) {
        btnNotificationForm.addEventListener("click", async () => showFormNotification());
    }
    const btnNotificationFormAdvanced = document.querySelector("#btnNotificationFormAdvanced");
    if (btnNotificationFormAdvanced) {
        btnNotificationFormAdvanced.addEventListener("click", async () => showFormAdvancedNotification());
    }
    const btnNotificationUpdatable = document.querySelector("#btnNotificationUpdatable");
    if (btnNotificationUpdatable) {
        btnNotificationUpdatable.addEventListener("click", async () => showUpdatableNotification());
    }
    const btnNotificationCustom = document.querySelector("#btnNotificationCustom");
    if (btnNotificationCustom) {
        btnNotificationCustom.addEventListener("click", async () => showCustomNotification());
    }
    const btnNotificationWithSound = document.querySelector("#btnNotificationWithSound");
    if (btnNotificationWithSound) {
        btnNotificationWithSound.addEventListener("click", async () => showSoundNotification(NOTIFICATION_SOUND_URL));
    }
    const btnNotificationCenterUserSettings = document.querySelector("#btnNotificationCenterUserSettings");
    if (btnNotificationCenterUserSettings) {
        btnNotificationCenterUserSettings.addEventListener("click", async () => getNotificationCenterUserSettings());
    }
    const btnNotificationWithIndicator = document.querySelector("#btnNotificationWithIndicator");
    if (btnNotificationWithIndicator) {
        btnNotificationWithIndicator.addEventListener("click", async () => showIndicatorNotification());
    }
    const btnNotificationWithCustomIndicator = document.querySelector("#btnNotificationWithCustomIndicator");
    if (btnNotificationWithCustomIndicator) {
        btnNotificationWithCustomIndicator.addEventListener("click", async () => showCustomIndicatorNotification());
    }
    const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
    if (btnNotificationsCenterShow) {
        btnNotificationsCenterShow.addEventListener("click", async () => {
            try {
                btnNotificationsCenterShow.disabled = true;
                await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.show();
            }
            catch (err) {
                loggingAddEntry(`${err}`);
            }
            finally {
                btnNotificationsCenterShow.disabled = false;
            }
        });
    }
    const btnNotificationsCenterHide = document.querySelector("#btnNotificationsCenterHide");
    if (btnNotificationsCenterHide) {
        btnNotificationsCenterHide.addEventListener("click", async () => {
            try {
                btnNotificationsCenterHide.disabled = true;
                await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.hide();
            }
            catch (err) {
                loggingAddEntry(`${err}`);
            }
            finally {
                btnNotificationsCenterHide.disabled = false;
            }
        });
    }
    const btnNotificationStudioOpen = document.querySelector("#btnNotificationStudioOpen");
    if (btnNotificationStudioOpen) {
        btnNotificationStudioOpen.addEventListener("click", async () => {
            try {
                btnNotificationStudioOpen.disabled = true;
                await fin.Application.startFromManifest("https://cdn.openfin.co/studio/notification/app.json");
            }
            finally {
                btnNotificationStudioOpen.disabled = false;
            }
        });
    }
}
/**
 * Initializes the notifications by registering and logging the count.
 */
async function initializeNotifications() {
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.register();
    await initializeListeners();
    console.log("Number of notifications:", await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.getNotificationsCount());
}
/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners() {
    // Listen for new notifications being created
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-created", (event) => {
        loggingAddEntry(`Created: ${event.notification.id}`);
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-closed", (event) => {
        loggingAddEntry(`Closed: ${event.notification.id}`);
        if (updatableNotifications[event.notification.id]) {
            delete updatableNotifications[event.notification.id];
            if (Object.keys(updatableNotifications).length === 0) {
                window.clearInterval(updatableNotificationTimer);
                updatableNotificationTimer = undefined;
            }
        }
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-action", async (event) => {
        if (event?.result?.actionId === "open-web-site") {
            await fin.System.openUrlWithBrowser(event?.result?.url);
        }
        else if (event?.result?.BODY_CLICK === "dismiss_event") {
            if (event.notification?.customData?.action) {
                loggingAddEntry(`\tData: ${event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"}`);
            }
            else {
                loggingAddEntry("\tNo action");
            }
            loggingAddEntry("\tBody click dismiss");
        }
        else {
            loggingAddEntry(`\tData: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`);
            loggingAddEntry(`\tTask: ${event?.result?.task ?? "None"}`);
            loggingAddEntry(`Action: ${event.notification.id}`);
        }
        console.log(event);
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-toast-dismissed", (event) => {
        loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-form-submitted", (event) => {
        loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
        loggingAddEntry(`Form: ${event.notification.id}`);
        console.log(event);
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notifications-count-changed", (event) => {
        showNotificationCount(event.count);
    });
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-sound-toggled", (event) => {
        loggingAddEntry(`Sound Enabled: ${event.notificationSoundEnabled}`);
    });
    addConnectionChangedEventListener((status) => {
        if (status.connected !== connected) {
            connected = status.connected;
            connectedVersion = status.version;
            updateConnectedState();
        }
    });
}
/**
 * Generates a random UUID string.
 * @returns A randomly generated UUID.
 */
function randomUUID() {
    if ("randomUUID" in window.crypto) {
        // If the browser supports window.crypto.randomUUID, use it
        // eslint-disable-next-line no-restricted-syntax
        return window.crypto.randomUUID();
    }
    // Polyfill the window.crypto.randomUUID if we are running in a non secure context that doesn't have it
    // we are still using window.crypto.getRandomValues which is always available
    // https://stackoverflow.com/a/2117523/2800218
    /**
     * Get random hex value.
     * @param c The number to base the random value on.
     * @returns The random value.
     */
    function getRandomHex(c) {
        // eslint-disable-next-line no-bitwise
        const rnd = window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4));
        return (
        // eslint-disable-next-line no-bitwise
        (Number(c) ^ rnd).toString(16));
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, getRandomHex);
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n${loggingElement.textContent}`;
    }
}
/**
 * Update the code example with the notification.
 * @param notificationOptions The options to show in the code example.
 */
function codeShowExample(notificationOptions) {
    if (codeElement) {
        codeElement.value = JSON.stringify(notificationOptions, undefined, "  ");
    }
}
/**
 * Update the connected state on the view.
 */
function updateConnectedState() {
    loggingAddEntry(`Is Connected: ${connected}`);
    if (connected) {
        loggingAddEntry(`Connected Version: ${connectedVersion}`);
    }
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.disabled = !connected;
    }
}
/**
 * Update the notification count on the view.
 * @param count The new count to display.
 */
function showNotificationCount(count) {
    const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
    if (btnNotificationsCenterShow) {
        btnNotificationsCenterShow.textContent = `Show [${count}]`;
    }
}
/**
 * Display a very basic simple notification.
 */
async function showSimpleNotification() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        soundOptions: {
            mode: "silent"
        }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which can be dismissed by clicking on the body.
 */
async function showSimpleNotificationBodyDismiss() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification that be dismissed by clicking the body",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        onSelect: { BODY_CLICK: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.ActionBodyClickType.DISMISS_EVENT }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which can be dismissed by clicking on the body and then trigger a custom action.
 */
async function showSimpleNotificationBodyDismissAction() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification that be dismissed by clicking the body and trigger custom action",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        onSelect: { BODY_CLICK: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.ActionBodyClickType.DISMISS_EVENT },
        customData: {
            action: "custom-action",
            data: {
                message: "Body click custom action"
            }
        }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has action buttons, the events returned will
 * be handled the the notification-action listener.
 */
async function showActionableNotification() {
    const notification = {
        title: "Actionable Notification",
        body: "This is a notification that has an action",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        buttons: [
            {
                title: "Acknowledged",
                type: "button",
                cta: true,
                onClick: {
                    task: "acknowledge-task",
                    customData: {
                        message: "This is the response data"
                    }
                }
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormNotification() {
    const notification = {
        title: "Form Notification",
        body: "This is a notification that has form data",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        form: [
            {
                key: "amount",
                label: "Amount",
                type: "number",
                widget: {
                    type: "Number",
                    max: 100,
                    min: 1
                },
                validation: {
                    min: {
                        arg: 1,
                        invalidMessage: "Must be at least 1"
                    },
                    max: {
                        arg: 100,
                        invalidMessage: "Cannot be more than 100"
                    },
                    required: {
                        arg: true
                    }
                }
            }
        ],
        buttons: [
            {
                title: "Save",
                type: "button",
                cta: true,
                submit: true
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormAdvancedNotification() {
    const notification = {
        title: "Form Advanced Notification",
        body: "This is a notification that has form data",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        form: [
            {
                type: "string",
                key: "book",
                label: "Book",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Text",
                    placeholder: "Book name"
                },
                validation: {
                    min: {
                        arg: 7,
                        invalidMessage: "Must be at least 7 chars long"
                    },
                    max: {
                        arg: 9,
                        invalidMessage: "Must be at most 9 chars long"
                    },
                    required: {
                        arg: true
                    }
                },
                value: "1234554"
            },
            {
                type: "time",
                key: "what_time",
                label: "Chose time?",
                helperText: "Some time choosing helper text",
                value: {
                    hour: 12
                },
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Time"
                }
            },
            {
                type: "date",
                key: "date_pickup",
                label: "When to pick up?",
                helperText: "Some date choosing helper text",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Date"
                }
            },
            {
                type: "string",
                key: "book2",
                label: "Book Type",
                helperText: "This is used to look up for book",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Dropdown",
                    options: [
                        {
                            value: "book1",
                            label: "Book 1"
                        },
                        {
                            value: "book2",
                            label: "Book 2"
                        },
                        {
                            value: "book3",
                            label: "Book 3"
                        }
                    ]
                }
            },
            {
                type: "radioGroup",
                key: "radioGroupDemo",
                label: "Chose one",
                helperText: "Some radio choosing helper text",
                value: "option_1",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "RadioGroup",
                    group: [
                        {
                            label: "Option 1",
                            value: "option_1"
                        },
                        {
                            label: "Option 2",
                            value: "option_2"
                        },
                        {
                            label: "Option 3",
                            value: "option_3"
                        }
                    ]
                }
            },
            {
                type: "checkboxGroup",
                key: "checkboxGroupDemo",
                label: "Chose Multiple",
                helperText: "Some checkbox choosing helper text",
                value: ["option_1", "option_2"],
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "CheckboxGroup",
                    group: [
                        {
                            label: "Option 1",
                            value: "option_1"
                        },
                        {
                            label: "Option 2",
                            value: "option_2"
                        },
                        {
                            label: "Option 3",
                            value: "option_3"
                        }
                    ]
                }
            },
            {
                type: "string",
                key: "description",
                label: "Description",
                value: "very long text....",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Text",
                    multiline: true,
                    placeholder: "Write description",
                    rows: 5
                }
            },
            {
                type: "number",
                key: "age",
                label: "Age",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Number",
                    placeholder: "Enter age",
                    min: 1,
                    max: 8
                },
                validation: {
                    min: {
                        arg: 0
                    },
                    max: {
                        arg: 9
                    },
                    required: {
                        arg: true
                    }
                }
            }
        ],
        buttons: [
            {
                title: "Save",
                type: "button",
                cta: true,
                submit: true
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification that can be updated.
 */
async function showUpdatableNotification() {
    const id = randomUUID();
    const notification = {
        title: "Updatable Notification",
        body: "This is an updatable notification",
        toast: "transient",
        category: "default",
        template: "markdown",
        customData: {
            count: 0
        },
        id
    };
    if (Object.keys(updatableNotifications).length === 0) {
        updatableNotificationTimer = window.setInterval(async () => {
            for (const notificationId in updatableNotifications) {
                updatableNotifications[notificationId].customData.count++;
                const notificationUpdate = {
                    template: "markdown",
                    body: `This is an updatable notification ${updatableNotifications[notificationId].customData.count}`,
                    id: notificationId
                };
                await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.update(notificationUpdate);
            }
        }, 1000);
    }
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
    updatableNotifications[id] = notification;
}
/**
 * Show a notification with custom content.
 */
async function showCustomNotification() {
    const notification = {
        title: "Custom Notification",
        toast: "transient",
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "subTitle",
                                    style: {
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "firstValueTitle",
                                            style: {
                                                fontSize: "12px"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "firstValue",
                                            style: {
                                                fontSize: "14px",
                                                color: "red"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "secondValueTitle",
                                            style: {
                                                fontSize: "12px"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "secondValue",
                                            style: {
                                                fontSize: "14px",
                                                color: "blue"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "image",
                                    dataKey: "exampleImageUrl",
                                    style: {
                                        height: "100px"
                                    }
                                },
                                {
                                    type: "actionableText",
                                    dataKey: "actionableUrlTitle",
                                    tooltipKey: "actionableUrlTooltip",
                                    onClick: {
                                        actionId: "open-web-site",
                                        url: "https://openfin.co"
                                    }
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "grid",
                                        flexDirection: "row",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        marginBottom: "10px",
                                        overflow: "auto"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "c0",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "green"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "c1",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "red"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "c2",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "blue"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d00",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d01",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d02",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d10",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d11",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d12",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        templateData: {
            subTitle: "Sub Title 🚀",
            firstValueTitle: "First Value",
            firstValue: "100",
            secondValueTitle: "Second Value",
            secondValue: "200",
            c0: "Col 1",
            c1: "Col 2",
            c2: "Col 3",
            d00: "50",
            d01: "150",
            d02: "250",
            d10: "550",
            d11: "650",
            d12: "750",
            exampleImageUrl: "https://built-on-openfin.github.io/container-starter/dev/ameet/use-notifications/use-notifications/images/example.png",
            actionableUrlTitle: "OpenFin Website",
            actionableUrlTooltip: "http://www.openfin.co"
        }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification and play a sound with it.
 * @param notificationSoundUrl The url of the sounds file to play.
 */
async function showSoundNotification(notificationSoundUrl) {
    // we disable the sound if it is enabled at the Notification Center level
    const notification = {
        title: "Sound Notification",
        body: "This is a notification with sound 🔉",
        toast: "transient",
        category: "default",
        template: "markdown",
        soundOptions: { mode: "silent" },
        id: randomUUID()
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
    await playNotification(notificationSoundUrl);
}
/**
 * Get the user settings for the notification center.
 */
async function getNotificationCenterUserSettings() {
    const status = await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.getUserSettingStatus("soundEnabled" /* Notifications.UserSettings.SOUND_ENABLED */);
    loggingAddEntry(`Sound Enabled: ${status}`);
}
/**
 * Display a notification that has an indicator bar on the left.
 */
async function showIndicatorNotification() {
    const notification = {
        title: "Indicator Notification",
        toast: "transient",
        indicator: {
            text: "Limit"
        },
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "content"
                                }
                            ]
                        }
                    }
                ]
            },
            indicator: {
                align: "left",
                color: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.IndicatorColor.RED
            }
        },
        templateData: {
            content: "This is a custom notification with a red indicator showing to the left of the toast"
        }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Display a notification that has an custom indicator bar color theme.
 */
async function showCustomIndicatorNotification() {
    const notification = {
        title: "Custom Indicator Notification",
        toast: "transient",
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "content"
                                }
                            ]
                        }
                    }
                ]
            },
            indicator: {
                align: "right"
            }
        },
        indicator: {
            color: "custom-indicator",
            fallback: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.IndicatorColor.RED,
            text: "ALERT!!!"
        },
        templateData: {
            content: "This is a custom notification with custom indicator styling"
        }
    };
    codeShowExample(notification);
    await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Play a sound.
 * @param notificationSoundUrl The url of the notification to play.
 */
async function playNotification(notificationSoundUrl) {
    const audio = new Audio(notificationSoundUrl);
    await audio.play();
}
/**
 * Add a listener which checks for the connection changed event.
 * @param callback The callback to call when the connection state changes.
 */
function addConnectionChangedEventListener(callback) {
    if (statusIntervalId === undefined) {
        statusIntervalId = window.setInterval(async () => {
            const status = await _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.provider.getStatus();
            if (status.connected !== lastConnectionStatus) {
                lastConnectionStatus = status.connected;
                callback(status);
            }
        }, 1000);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9C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eEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsSUFBSSxFQUFFLDhCQUE4QixFQUFFLGdCQUFnQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGdGQUFnRixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsYUFBYTtBQUM1RztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsRUFBRTtBQUN6RSxRQUFRO0FBQ1IsMkNBQTJDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxJQUFJO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLEVBQUUsR0FBRyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLGVBQWU7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaDBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXlIOzs7Ozs7Ozs7OztBQ2xNekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscUJBQU0sZ0JBQWdCLHFCQUFNLElBQUkscUJBQU0sc0JBQXNCLHFCQUFNOztBQUUxRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLFdBQVc7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUNBQXlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FB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RSxNQUFNO2dEQUNoQixZQUFZLEVBQUUsTUFBTTtnREFDcEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7Z0RBQ3BCLFVBQVUsRUFBRSxNQUFNO2dEQUNsQixlQUFlLEVBQUUsTUFBTTs2Q0FDdkI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7d0NBQ0Q7NENBQ0MsSUFBSSxFQUFFLE1BQU07NENBQ1osT0FBTyxFQUFFLEtBQUs7NENBQ2QsS0FBSyxFQUFFO2dEQUNOLFFBQVEsRUFBRSxNQUFNO2dEQUNoQixPQUFPLEVBQUUsS0FBSztnREFDZCxVQUFVLEVBQUUsUUFBUTs2Q0FDcEI7eUNBQ0Q7cUNBQ0Q7aUNBQ0Q7NkJBQ0Q7eUJBQ0Q7cUJBQ0Q7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsUUFBUSxFQUFFLGNBQWM7WUFDeEIsZUFBZSxFQUFFLGFBQWE7WUFDOUIsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsY0FBYztZQUNoQyxXQUFXLEVBQUUsS0FBSztZQUNsQixFQUFFLEVBQUUsT0FBTztZQUNYLEVBQUUsRUFBRSxPQUFPO1lBQ1gsRUFBRSxFQUFFLE9BQU87WUFDWCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxLQUFLO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixlQUFlLEVBQUUsMENBQTBDO1lBQzNELGtCQUFrQixFQUFFLGlCQUFpQjtZQUNyQyxvQkFBb0IsRUFBRSx1QkFBdUI7U0FDN0M7S0FDRCxDQUFDO0lBRUYsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLE1BQU0sb0VBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxvQkFBNEI7SUFDaEUseUVBQXlFO0lBQ3pFLE1BQU0sWUFBWSxHQUFzQztRQUN2RCxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsS0FBSyxFQUFFLFdBQVc7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtRQUNoQyxFQUFFLEVBQUUsVUFBVSxFQUFFO0tBQ2hCLENBQUM7SUFFRixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsTUFBTSxvRUFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxNQUFNLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGlDQUFpQztJQUMvQyxNQUFNLE1BQU0sR0FBRyxNQUFNLGtGQUFrQywrREFBMEMsQ0FBQztJQUNsRyxlQUFlLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLHlCQUF5QjtJQUN2QyxNQUFNLFlBQVksR0FBc0M7UUFDdkQsS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixLQUFLLEVBQUUsV0FBVztRQUNsQixTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsT0FBTztTQUNiO1FBQ0QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsRUFBRSxFQUFFLFVBQVUsRUFBRTtRQUNoQixlQUFlLEVBQUU7WUFDaEIsSUFBSSxFQUFFO2dCQUNMLFlBQVksRUFBRTtvQkFDYjt3QkFDQyxxQkFBcUIsRUFBRSxHQUFHO3dCQUMxQixNQUFNLEVBQUU7NEJBQ1AsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLEtBQUssRUFBRTtnQ0FDTixPQUFPLEVBQUUsTUFBTTtnQ0FDZixhQUFhLEVBQUUsUUFBUTtnQ0FDdkIsR0FBRyxFQUFFLE1BQU07NkJBQ1g7NEJBQ0QsUUFBUSxFQUFFO2dDQUNUO29DQUNDLElBQUksRUFBRSxNQUFNO29DQUNaLE9BQU8sRUFBRSxTQUFTO2lDQUNsQjs2QkFDRDt5QkFDRDtxQkFDRDtpQkFDRDthQUNEO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSw0RUFBNEIsQ0FBQyxHQUFHO2FBQ3ZDO1NBQ0Q7UUFDRCxZQUFZLEVBQUU7WUFDYixPQUFPLEVBQUUscUZBQXFGO1NBQzlGO0tBQ0QsQ0FBQztJQUVGLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixNQUFNLG9FQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSwrQkFBK0I7SUFDN0MsTUFBTSxZQUFZLEdBQXNDO1FBQ3ZELEtBQUssRUFBRSwrQkFBK0I7UUFDdEMsS0FBSyxFQUFFLFdBQVc7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsRUFBRSxFQUFFLFVBQVUsRUFBRTtRQUNoQixlQUFlLEVBQUU7WUFDaEIsSUFBSSxFQUFFO2dCQUNMLFlBQVksRUFBRTtvQkFDYjt3QkFDQyxxQkFBcUIsRUFBRSxHQUFHO3dCQUMxQixNQUFNLEVBQUU7NEJBQ1AsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLEtBQUssRUFBRTtnQ0FDTixPQUFPLEVBQUUsTUFBTTtnQ0FDZixhQUFhLEVBQUUsUUFBUTtnQ0FDdkIsR0FBRyxFQUFFLE1BQU07NkJBQ1g7NEJBQ0QsUUFBUSxFQUFFO2dDQUNUO29DQUNDLElBQUksRUFBRSxNQUFNO29DQUNaLE9BQU8sRUFBRSxTQUFTO2lDQUNsQjs2QkFDRDt5QkFDRDtxQkFDRDtpQkFDRDthQUNEO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLEtBQUssRUFBRSxPQUFPO2FBQ2Q7U0FDRDtRQUNELFNBQVMsRUFBRTtZQUNWLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsUUFBUSxFQUFFLDRFQUE0QixDQUFDLEdBQUc7WUFDMUMsSUFBSSxFQUFFLFVBQVU7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDYixPQUFPLEVBQUUsNkRBQTZEO1NBQ3RFO0tBQ0QsQ0FBQztJQUVGLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixNQUFNLG9FQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsb0JBQTRCO0lBQzNELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUMsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsaUNBQWlDLENBQ3pDLFFBQWlFO0lBRWpFLElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDcEMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNoRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHNFQUFzQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsRUFBRSxDQUFDO2dCQUMvQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNWLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi93b3Jrc3BhY2Uvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtcGFyc2Utc3RyaW5naWZ5L2Rpc3QvaHRtbC1wYXJzZS1zdHJpbmdpZnkubW9kdWxlLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvaTE4bmV4dC9kaXN0L2Nqcy9pMThuZXh0LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvaWRiLWtleXZhbC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvb3BlbmZpbi1ub3RpZmljYXRpb25zL2Rpc3QvY2xpZW50L3dpdGhvdXQtYXV0by1sYXVuY2guanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvSTE4bmV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL1RyYW5zLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL1RyYW5zV2l0aG91dENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9pMThuSW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvaW5pdFJlYWN0STE4bmV4dC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy91bmVzY2FwZS5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy91c2VTU1IuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdXNlVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvd2l0aFNTUi5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy93aXRoVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3ZvaWQtZWxlbWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpPT57dmFyIGU9ezg0NzooZSx0KT0+e3ZhciBhPXsyMzQ2OmZ1bmN0aW9uKGUsdCxhKXt2YXIgbj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmdldE1vc3RSZWFkYWJsZT10LmRhcmtlbkNvbG9yPXQubGlnaHRlbkNvbG9yPXZvaWQgMDtjb25zdCByPW4oYSg2NTM1KSk7dC5saWdodGVuQ29sb3I9KGUsdCk9Pm8oZSxcImxpZ2h0ZW5cIix0KSx0LmRhcmtlbkNvbG9yPShlLHQpPT5vKGUsXCJkYXJrZW5cIix0KTtjb25zdCBvPShlLHQsYSk9PntpZihhJiYoYTwwfHxhPjEwMCkpdGhyb3cgbmV3IEVycm9yKGAke2F9IG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxMDBgKTtyZXR1cm4oMCxyLmRlZmF1bHQpKGUpW3RdKGEpLnRvU3RyaW5nKCl9O3QuZ2V0TW9zdFJlYWRhYmxlPShlLHQpPT5yLmRlZmF1bHQubW9zdFJlYWRhYmxlKGUsdCkudG9IZXhTdHJpbmcoKX0sMjMxNzooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuSWNvblNpemU9dC5UcmFuc2l0aW9uPXQuTGluZUhlaWdodD10LkZvbnRXZWlnaHQ9dC5Gb250U2l6ZT10LkZvbnRGYW1pbHk9dC5TaGFkb3c9dC5SYWRpdXM9dC5Vbml0UHg9dC5Vbml0PXQuU2l6ZU5hbWU9dC5TaXplPXQuQ29sb3I9dm9pZCAwLHQuQ29sb3I9e3doaXRlOlwiI0ZGRkZGRlwiLGxpZ2h0R3JheTE6XCIjRkFGQkZFXCIsbGlnaHRHcmF5MjpcIiNGM0Y1RjhcIixsaWdodEdyYXkzOlwiI0VDRUVGMVwiLGxpZ2h0R3JheTQ6XCIjRERERkU0XCIsbGlnaHRHcmF5NTpcIiNDOUNCRDJcIixuZXV0cmFsR3JheTpcIiM3RDgwOEFcIixuZXV0cmFsR3JheTgwOlwicmdiYSgxMjUsMTI4LDEzOCwwLjgpXCIsc2lsdmVyR3JheTpcIiNDMEMxQzJcIixkYXJrR3JheTE6XCIjNTM1NjVGXCIsZGFya0dyYXkyOlwiIzM4M0E0MFwiLGRhcmtHcmF5MzpcIiMyRjMxMzZcIixkYXJrR3JheTQ6XCIjMjQyNjJCXCIsZGFya0dyYXk1OlwiIzFFMUYyM1wiLGRhcmtHcmF5NjpcIiMxMTEyMTRcIixvcGVuRmluRGFya2VzdDpcIiMzRDM5Q0RcIixvcGVuRmluRGFya2VyOlwiIzQ2NDJFMFwiLG9wZW5GaW46XCIjNTA0Q0ZGXCIsb3BlbkZpbkxpZ2h0OlwiIzUyNTRGQlwiLG9wZW5GaW5MaWdodGVyOlwiIzVDNUVGRVwiLG9wZW5GaW5MaWdodGVzdDpcIiM2ODY0RkZcIixmdW5jdGlvbmFsMTpcIiMyMDc3MzVcIixmdW5jdGlvbmFsMjpcIiM0NkM4RjFcIixmdW5jdGlvbmFsMzpcIiMwQTc2RDNcIixmdW5jdGlvbmFsNDpcIiM2Q0FERTVcIixmdW5jdGlvbmFsNTpcIiMwQTc2RDNcIixmdW5jdGlvbmFsNjpcIiM4ODJCRkVcIixmdW5jdGlvbmFsNzpcIiNGMzE4MThcIixmdW5jdGlvbmFsODpcIiNDOTM0MDBcIixmdW5jdGlvbmFsOTpcIiNGRjVFNjBcIixmdW5jdGlvbmFsMTA6XCIjRjQ4RjAwXCIscHVycGxlOlwiIzhDNjFGRlwiLGxpZ2h0Ymx1ZTpcIiMzNkMzRkVcIixhcXVhOlwiIzAwQ0M4OFwiLHllbGxvdzpcIiNGRkVCMDBcIixzYWxtb246XCIjRkY4QzRDXCIscGluazpcIiNGRjVFNjBcIixsaWdodHBpbms6XCIjRkY4RkI4XCIsd2hpdGUwMDpcInJnYmEoMjU1LDI1NSwyNTUsMC4wKVwiLHdoaXRlMTA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMSlcIix3aGl0ZTIwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsd2hpdGUzMDpcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiLHdoaXRlNDA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIix3aGl0ZTUwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsd2hpdGU2MDpcInJnYmEoMjU1LDI1NSwyNTUsMC42KVwiLHdoaXRlNzA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIix3aGl0ZTgwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCIsd2hpdGU5MDpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLGJsYWNrMDA6XCJyZ2JhKDAsMCwwLDAuMClcIixibGFjazEwOlwicmdiYSgwLDAsMCwwLjEpXCIsYmxhY2syMDpcInJnYmEoMCwwLDAsMC4yKVwiLGJsYWNrMzA6XCJyZ2JhKDAsMCwwLDAuMylcIixibGFjazQwOlwicmdiYSgwLDAsMCwwLjQpXCIsYmxhY2s1MDpcInJnYmEoMCwwLDAsMC41KVwiLGJsYWNrNjA6XCJyZ2JhKDAsMCwwLDAuNilcIixibGFjazcwOlwicmdiYSgwLDAsMCwwLjcpXCIsYmxhY2s4MDpcInJnYmEoMCwwLDAsMC44KVwiLGJsYWNrOTA6XCJyZ2JhKDAsMCwwLDAuOSlcIix0cmFuc3BhcmVudDpcInRyYW5zcGFyZW50XCJ9LHQuU2l6ZT17eHNtYWxsOlwieHNtYWxsXCIsc21hbGw6XCJzbWFsbFwiLGJhc2U6XCJiYXNlXCIsbGFyZ2U6XCJsYXJnZVwiLHhsYXJnZTpcInhsYXJnZVwiLHh4bGFyZ2U6XCJ4eGxhcmdlXCIseHh4bGFyZ2U6XCJ4eHhsYXJnZVwiLHh4eHhsYXJnZTpcInh4eHhsYXJnZVwifSx0LlNpemVOYW1lPXtbdC5TaXplLnhzbWFsbF06XCJFeHRyYSBTbWFsbFwiLFt0LlNpemUuc21hbGxdOlwiU21hbGxcIixbdC5TaXplLmJhc2VdOlwiQmFzZVwiLFt0LlNpemUubGFyZ2VdOlwiTGFyZ2VcIixbdC5TaXplLnhsYXJnZV06XCJFeHRyYSBMYXJnZVwiLFt0LlNpemUueHhsYXJnZV06XCIyWCBMYXJnZVwiLFt0LlNpemUueHh4bGFyZ2VdOlwiM1ggTGFyZ2VcIixbdC5TaXplLnh4eHhsYXJnZV06XCI0WCBMYXJnZVwifSx0LlVuaXQ9e1t0LlNpemUueHNtYWxsXTo0LFt0LlNpemUuc21hbGxdOjgsW3QuU2l6ZS5iYXNlXToxMixbdC5TaXplLmxhcmdlXToxNixbdC5TaXplLnhsYXJnZV06MjAsW3QuU2l6ZS54eGxhcmdlXToyNCxbdC5TaXplLnh4eGxhcmdlXTozMixbdC5TaXplLnh4eHhsYXJnZV06NDh9LHQuVW5pdFB4PXtbdC5TaXplLnhzbWFsbF06XCI0cHhcIixbdC5TaXplLnNtYWxsXTpcIjhweFwiLFt0LlNpemUuYmFzZV06XCIxMnB4XCIsW3QuU2l6ZS5sYXJnZV06XCIxNnB4XCIsW3QuU2l6ZS54bGFyZ2VdOlwiMjBweFwiLFt0LlNpemUueHhsYXJnZV06XCIyNHB4XCIsW3QuU2l6ZS54eHhsYXJnZV06XCIzMnB4XCIsW3QuU2l6ZS54eHh4bGFyZ2VdOlwiNDhweFwifSx0LlJhZGl1cz17W3QuU2l6ZS54c21hbGxdOlwiMnB4XCIsW3QuU2l6ZS5zbWFsbF06XCI0cHhcIixbdC5TaXplLmJhc2VdOlwiOHB4XCIsW3QuU2l6ZS5sYXJnZV06XCIyNHB4XCIscGlsbDpcIjEwMHZoXCIscm91bmQ6XCI1MCVcIixub25lOlwiMFwifSx0LlNoYWRvdz17W3QuU2l6ZS5iYXNlXTpcIjAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCJ9LHQuRm9udEZhbWlseT1bXCJJbnRlclwiLFwic3lzdGVtLXVpXCIsXCJCbGlua01hY1N5c3RlbUZvbnRcIixcIlNlZ29lIFVJXCIsXCJSb2JvdG9cIixcIk94eWdlbi1TYW5zXCIsXCJVYnVudHVcIixcIkNhbnRhcmVsbFwiLFwiSGVsdmV0aWNhIE5ldWVcIixcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksdC5Gb250U2l6ZT17W3QuU2l6ZS54c21hbGxdOlwiOHB4XCIsW3QuU2l6ZS5zbWFsbF06XCIxMHB4XCIsW3QuU2l6ZS5iYXNlXTpcIjEycHhcIixbdC5TaXplLmxhcmdlXTpcIjE0cHhcIixbdC5TaXplLnhsYXJnZV06XCIxNnB4XCIsW3QuU2l6ZS54eGxhcmdlXTpcIjE4cHhcIixbdC5TaXplLnh4eGxhcmdlXTpcIjIwcHhcIixbdC5TaXplLnh4eHhsYXJnZV06XCI0MHB4XCJ9LHQuRm9udFdlaWdodD17bm9ybWFsOjQwMCxib2xkOjYwMH0sdC5MaW5lSGVpZ2h0PXt1aToxLGhlYWRpbmc6MS4yLHRleHQ6MS41fSx0LlRyYW5zaXRpb249e2Jhc2U6XCIyMDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKVwiLG5vbmU6XCIwbXNcIn0sdC5JY29uU2l6ZT17W3QuU2l6ZS54c21hbGxdOnQuVW5pdFB4LnNtYWxsLFt0LlNpemUuc21hbGxdOnQuVW5pdFB4LmJhc2UsW3QuU2l6ZS5iYXNlXTpcIjE1cHhcIixbdC5TaXplLmxhcmdlXTp0LlVuaXRQeC54bGFyZ2UsW3QuU2l6ZS54bGFyZ2VdOnQuVW5pdFB4Lnh4bGFyZ2UsW3QuU2l6ZS54eGxhcmdlXTp0LlVuaXRQeC54eHhsYXJnZSxbdC5TaXplLnh4eGxhcmdlXTp0LlVuaXRQeC54eHh4bGFyZ2V9fSw2ODkzOihlLHQsYSk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNyZWF0ZVRoZW1lPXZvaWQgMDtjb25zdCBuPWEoMjMxNykscj1hKDIzNDYpLG89YSg1OTM5KSxpPXtmb250RmFtaWx5Om4uRm9udEZhbWlseSxmb250U2l6ZTpuLkZvbnRTaXplLGZvbnRXZWlnaHQ6bi5Gb250V2VpZ2h0LGxpbmVIZWlnaHQ6bi5MaW5lSGVpZ2h0LGljb25TaXplOm4uSWNvblNpemUscmFkaXVzOm4uUmFkaXVzLHNoYWRvdzpuLlNoYWRvdyx0cmFuc2l0aW9uOm4uVHJhbnNpdGlvbix1bml0Om4uVW5pdCxweDpuLlVuaXRQeH0scz0oZSx0KT0+KHtbYCR7ZX1BY3RpdmVgXTooMCxyLmRhcmtlbkNvbG9yKSh0LDIpLFtgJHtlfUhvdmVyYF06KDAsci5saWdodGVuQ29sb3IpKHQsNSksW2Ake2V9Rm9jdXNlZGBdOigwLHIuZ2V0TW9zdFJlYWRhYmxlKSh0LFtuLkNvbG9yLndoaXRlLG4uQ29sb3IuZGFya0dyYXk1XSksW2Ake2V9VGV4dGBdOigwLHIuZ2V0TW9zdFJlYWRhYmxlKSh0LFtuLkNvbG9yLndoaXRlLG4uQ29sb3IuZGFya0dyYXk1XSl9KTt0LmNyZWF0ZVRoZW1lPWU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxpKSx7cGFsZXR0ZTpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSxzKG8uUGFsZXR0ZS5icmFuZFByaW1hcnksZS5icmFuZFByaW1hcnkpKSxzKG8uUGFsZXR0ZS5icmFuZFNlY29uZGFyeSxlLmJyYW5kU2Vjb25kYXJ5KSl9KX0sNTkzOTooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuUGFsZXR0ZT12b2lkIDAsdC5QYWxldHRlPXtiYWNrZ3JvdW5kMTpcImJhY2tncm91bmQxXCIsYmFja2dyb3VuZDI6XCJiYWNrZ3JvdW5kMlwiLGJhY2tncm91bmQzOlwiYmFja2dyb3VuZDNcIixiYWNrZ3JvdW5kNDpcImJhY2tncm91bmQ0XCIsYmFja2dyb3VuZDU6XCJiYWNrZ3JvdW5kNVwiLGJhY2tncm91bmQ2OlwiYmFja2dyb3VuZDZcIixicmFuZFByaW1hcnk6XCJicmFuZFByaW1hcnlcIixicmFuZFNlY29uZGFyeTpcImJyYW5kU2Vjb25kYXJ5XCIsYnJhbmRQcmltYXJ5QWN0aXZlOlwiYnJhbmRQcmltYXJ5QWN0aXZlXCIsYnJhbmRQcmltYXJ5SG92ZXI6XCJicmFuZFByaW1hcnlIb3ZlclwiLGJyYW5kUHJpbWFyeUZvY3VzZWQ6XCJicmFuZFByaW1hcnlGb2N1c2VkXCIsYnJhbmRQcmltYXJ5VGV4dDpcImJyYW5kUHJpbWFyeVRleHRcIixicmFuZFNlY29uZGFyeUFjdGl2ZTpcImJyYW5kU2Vjb25kYXJ5QWN0aXZlXCIsYnJhbmRTZWNvbmRhcnlIb3ZlcjpcImJyYW5kU2Vjb25kYXJ5SG92ZXJcIixicmFuZFNlY29uZGFyeUZvY3VzZWQ6XCJicmFuZFNlY29uZGFyeUZvY3VzZWRcIixicmFuZFNlY29uZGFyeVRleHQ6XCJicmFuZFNlY29uZGFyeVRleHRcIixpbnB1dEJhY2tncm91bmQ6XCJpbnB1dEJhY2tncm91bmRcIixpbnB1dENvbG9yOlwiaW5wdXRDb2xvclwiLGlucHV0UGxhY2Vob2xkZXI6XCJpbnB1dFBsYWNlaG9sZGVyXCIsaW5wdXREaXNhYmxlZDpcImlucHV0RGlzYWJsZWRcIixpbnB1dEZvY3VzZWQ6XCJpbnB1dEZvY3VzZWRcIixpbnB1dEJvcmRlcjpcImlucHV0Qm9yZGVyXCIsc3RhdHVzU3VjY2VzczpcInN0YXR1c1N1Y2Nlc3NcIixzdGF0dXNXYXJuaW5nOlwic3RhdHVzV2FybmluZ1wiLHN0YXR1c0NyaXRpY2FsOlwic3RhdHVzQ3JpdGljYWxcIixzdGF0dXNBY3RpdmU6XCJzdGF0dXNBY3RpdmVcIix0ZXh0RGVmYXVsdDpcInRleHREZWZhdWx0XCIsdGV4dEhlbHA6XCJ0ZXh0SGVscFwiLHRleHRJbmFjdGl2ZTpcInRleHRJbmFjdGl2ZVwiLGJvcmRlck5ldXRyYWw6XCJib3JkZXJOZXV0cmFsXCIsY29udGVudEJhY2tncm91bmQxOlwiY29udGVudEJhY2tncm91bmQxXCIsY29udGVudEJhY2tncm91bmQyOlwiY29udGVudEJhY2tncm91bmQyXCIsY29udGVudEJhY2tncm91bmQzOlwiY29udGVudEJhY2tncm91bmQzXCIsY29udGVudEJhY2tncm91bmQ0OlwiY29udGVudEJhY2tncm91bmQ0XCIsY29udGVudEJhY2tncm91bmQ1OlwiY29udGVudEJhY2tncm91bmQ1XCIsbGlua0RlZmF1bHQ6XCJsaW5rRGVmYXVsdFwiLGxpbmtIb3ZlcjpcImxpbmtIb3ZlclwifX0sNjUzNTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3JldHVybihlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KSh0KX12YXIgdD0vXlxccysvLGE9L1xccyskLztmdW5jdGlvbiBuKHIsbyl7aWYobz1vfHx7fSwocj1yfHxcIlwiKWluc3RhbmNlb2YgbilyZXR1cm4gcjtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG4ocixvKTt2YXIgaT1mdW5jdGlvbihuKXt2YXIgcixvLGkscz17cjowLGc6MCxiOjB9LGM9MSxsPW51bGwsZD1udWxsLHU9bnVsbCxoPSExLGc9ITE7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWZ1bmN0aW9uKGUpe2U9ZS5yZXBsYWNlKHQsXCJcIikucmVwbGFjZShhLFwiXCIpLnRvTG93ZXJDYXNlKCk7dmFyIG4scj0hMTtpZihrW2VdKWU9a1tlXSxyPSEwO2Vsc2UgaWYoXCJ0cmFuc3BhcmVudFwiPT1lKXJldHVybntyOjAsZzowLGI6MCxhOjAsZm9ybWF0OlwibmFtZVwifTtyZXR1cm4obj1ELnJnYi5leGVjKGUpKT97cjpuWzFdLGc6blsyXSxiOm5bM119OihuPUQucmdiYS5leGVjKGUpKT97cjpuWzFdLGc6blsyXSxiOm5bM10sYTpuWzRdfToobj1ELmhzbC5leGVjKGUpKT97aDpuWzFdLHM6blsyXSxsOm5bM119OihuPUQuaHNsYS5leGVjKGUpKT97aDpuWzFdLHM6blsyXSxsOm5bM10sYTpuWzRdfToobj1ELmhzdi5leGVjKGUpKT97aDpuWzFdLHM6blsyXSx2Om5bM119OihuPUQuaHN2YS5leGVjKGUpKT97aDpuWzFdLHM6blsyXSx2Om5bM10sYTpuWzRdfToobj1ELmhleDguZXhlYyhlKSk/e3I6eChuWzFdKSxnOngoblsyXSksYjp4KG5bM10pLGE6TShuWzRdKSxmb3JtYXQ6cj9cIm5hbWVcIjpcImhleDhcIn06KG49RC5oZXg2LmV4ZWMoZSkpP3tyOngoblsxXSksZzp4KG5bMl0pLGI6eChuWzNdKSxmb3JtYXQ6cj9cIm5hbWVcIjpcImhleFwifToobj1ELmhleDQuZXhlYyhlKSk/e3I6eChuWzFdK1wiXCIrblsxXSksZzp4KG5bMl0rXCJcIituWzJdKSxiOngoblszXStcIlwiK25bM10pLGE6TShuWzRdK1wiXCIrbls0XSksZm9ybWF0OnI/XCJuYW1lXCI6XCJoZXg4XCJ9OiEhKG49RC5oZXgzLmV4ZWMoZSkpJiZ7cjp4KG5bMV0rXCJcIituWzFdKSxnOngoblsyXStcIlwiK25bMl0pLGI6eChuWzNdK1wiXCIrblszXSksZm9ybWF0OnI/XCJuYW1lXCI6XCJoZXhcIn19KG4pKSxcIm9iamVjdFwiPT1lKG4pJiYoQihuLnIpJiZCKG4uZykmJkIobi5iKT8ocj1uLnIsbz1uLmcsaT1uLmIscz17cjoyNTUqUChyLDI1NSksZzoyNTUqUChvLDI1NSksYjoyNTUqUChpLDI1NSl9LGg9ITAsZz1cIiVcIj09PVN0cmluZyhuLnIpLnN1YnN0cigtMSk/XCJwcmdiXCI6XCJyZ2JcIik6QihuLmgpJiZCKG4ucykmJkIobi52KT8obD1GKG4ucyksZD1GKG4udikscz1mdW5jdGlvbihlLHQsYSl7ZT02KlAoZSwzNjApLHQ9UCh0LDEwMCksYT1QKGEsMTAwKTt2YXIgbj1NYXRoLmZsb29yKGUpLHI9ZS1uLG89YSooMS10KSxpPWEqKDEtcip0KSxzPWEqKDEtKDEtcikqdCksYz1uJTY7cmV0dXJue3I6MjU1KlthLGksbyxvLHMsYV1bY10sZzoyNTUqW3MsYSxhLGksbyxvXVtjXSxiOjI1NSpbbyxvLHMsYSxhLGldW2NdfX0obi5oLGwsZCksaD0hMCxnPVwiaHN2XCIpOkIobi5oKSYmQihuLnMpJiZCKG4ubCkmJihsPUYobi5zKSx1PUYobi5sKSxzPWZ1bmN0aW9uKGUsdCxhKXt2YXIgbixyLG87ZnVuY3Rpb24gaShlLHQsYSl7cmV0dXJuIGE8MCYmKGErPTEpLGE+MSYmKGEtPTEpLGE8MS82P2UrNioodC1lKSphOmE8LjU/dDphPDIvMz9lKyh0LWUpKigyLzMtYSkqNjplfWlmKGU9UChlLDM2MCksdD1QKHQsMTAwKSxhPVAoYSwxMDApLDA9PT10KW49cj1vPWE7ZWxzZXt2YXIgcz1hPC41P2EqKDErdCk6YSt0LWEqdCxjPTIqYS1zO249aShjLHMsZSsxLzMpLHI9aShjLHMsZSksbz1pKGMscyxlLTEvMyl9cmV0dXJue3I6MjU1Km4sZzoyNTUqcixiOjI1NSpvfX0obi5oLGwsdSksaD0hMCxnPVwiaHNsXCIpLG4uaGFzT3duUHJvcGVydHkoXCJhXCIpJiYoYz1uLmEpKSxjPXYoYykse29rOmgsZm9ybWF0Om4uZm9ybWF0fHxnLHI6TWF0aC5taW4oMjU1LE1hdGgubWF4KHMuciwwKSksZzpNYXRoLm1pbigyNTUsTWF0aC5tYXgocy5nLDApKSxiOk1hdGgubWluKDI1NSxNYXRoLm1heChzLmIsMCkpLGE6Y319KHIpO3RoaXMuX29yaWdpbmFsSW5wdXQ9cix0aGlzLl9yPWkucix0aGlzLl9nPWkuZyx0aGlzLl9iPWkuYix0aGlzLl9hPWkuYSx0aGlzLl9yb3VuZEE9TWF0aC5yb3VuZCgxMDAqdGhpcy5fYSkvMTAwLHRoaXMuX2Zvcm1hdD1vLmZvcm1hdHx8aS5mb3JtYXQsdGhpcy5fZ3JhZGllbnRUeXBlPW8uZ3JhZGllbnRUeXBlLHRoaXMuX3I8MSYmKHRoaXMuX3I9TWF0aC5yb3VuZCh0aGlzLl9yKSksdGhpcy5fZzwxJiYodGhpcy5fZz1NYXRoLnJvdW5kKHRoaXMuX2cpKSx0aGlzLl9iPDEmJih0aGlzLl9iPU1hdGgucm91bmQodGhpcy5fYikpLHRoaXMuX29rPWkub2t9ZnVuY3Rpb24gcihlLHQsYSl7ZT1QKGUsMjU1KSx0PVAodCwyNTUpLGE9UChhLDI1NSk7dmFyIG4scixvPU1hdGgubWF4KGUsdCxhKSxpPU1hdGgubWluKGUsdCxhKSxzPShvK2kpLzI7aWYobz09aSluPXI9MDtlbHNle3ZhciBjPW8taTtzd2l0Y2gocj1zPi41P2MvKDItby1pKTpjLyhvK2kpLG8pe2Nhc2UgZTpuPSh0LWEpL2MrKHQ8YT82OjApO2JyZWFrO2Nhc2UgdDpuPShhLWUpL2MrMjticmVhaztjYXNlIGE6bj0oZS10KS9jKzR9bi89Nn1yZXR1cm57aDpuLHM6cixsOnN9fWZ1bmN0aW9uIG8oZSx0LGEpe2U9UChlLDI1NSksdD1QKHQsMjU1KSxhPVAoYSwyNTUpO3ZhciBuLHIsbz1NYXRoLm1heChlLHQsYSksaT1NYXRoLm1pbihlLHQsYSkscz1vLGM9by1pO2lmKHI9MD09PW8/MDpjL28sbz09aSluPTA7ZWxzZXtzd2l0Y2gobyl7Y2FzZSBlOm49KHQtYSkvYysodDxhPzY6MCk7YnJlYWs7Y2FzZSB0Om49KGEtZSkvYysyO2JyZWFrO2Nhc2UgYTpuPShlLXQpL2MrNH1uLz02fXJldHVybntoOm4sczpyLHY6c319ZnVuY3Rpb24gaShlLHQsYSxuKXt2YXIgcj1bQShNYXRoLnJvdW5kKGUpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKHQpLnRvU3RyaW5nKDE2KSksQShNYXRoLnJvdW5kKGEpLnRvU3RyaW5nKDE2KSldO3JldHVybiBuJiZyWzBdLmNoYXJBdCgwKT09clswXS5jaGFyQXQoMSkmJnJbMV0uY2hhckF0KDApPT1yWzFdLmNoYXJBdCgxKSYmclsyXS5jaGFyQXQoMCk9PXJbMl0uY2hhckF0KDEpP3JbMF0uY2hhckF0KDApK3JbMV0uY2hhckF0KDApK3JbMl0uY2hhckF0KDApOnIuam9pbihcIlwiKX1mdW5jdGlvbiBzKGUsdCxhLG4pe3JldHVybltBKF8obikpLEEoTWF0aC5yb3VuZChlKS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZCh0KS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZChhKS50b1N0cmluZygxNikpXS5qb2luKFwiXCIpfWZ1bmN0aW9uIGMoZSx0KXt0PTA9PT10PzA6dHx8MTA7dmFyIGE9bihlKS50b0hzbCgpO3JldHVybiBhLnMtPXQvMTAwLGEucz1DKGEucyksbihhKX1mdW5jdGlvbiBsKGUsdCl7dD0wPT09dD8wOnR8fDEwO3ZhciBhPW4oZSkudG9Ic2woKTtyZXR1cm4gYS5zKz10LzEwMCxhLnM9QyhhLnMpLG4oYSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gbihlKS5kZXNhdHVyYXRlKDEwMCl9ZnVuY3Rpb24gdShlLHQpe3Q9MD09PXQ/MDp0fHwxMDt2YXIgYT1uKGUpLnRvSHNsKCk7cmV0dXJuIGEubCs9dC8xMDAsYS5sPUMoYS5sKSxuKGEpfWZ1bmN0aW9uIGgoZSx0KXt0PTA9PT10PzA6dHx8MTA7dmFyIGE9bihlKS50b1JnYigpO3JldHVybiBhLnI9TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsYS5yLU1hdGgucm91bmQoLXQvMTAwKjI1NSkpKSxhLmc9TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsYS5nLU1hdGgucm91bmQoLXQvMTAwKjI1NSkpKSxhLmI9TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsYS5iLU1hdGgucm91bmQoLXQvMTAwKjI1NSkpKSxuKGEpfWZ1bmN0aW9uIGcoZSx0KXt0PTA9PT10PzA6dHx8MTA7dmFyIGE9bihlKS50b0hzbCgpO3JldHVybiBhLmwtPXQvMTAwLGEubD1DKGEubCksbihhKX1mdW5jdGlvbiBwKGUsdCl7dmFyIGE9bihlKS50b0hzbCgpLHI9KGEuaCt0KSUzNjA7cmV0dXJuIGEuaD1yPDA/MzYwK3I6cixuKGEpfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9bihlKS50b0hzbCgpO3JldHVybiB0Lmg9KHQuaCsxODApJTM2MCxuKHQpfWZ1bmN0aW9uIG0oZSx0KXtpZihpc05hTih0KXx8dDw9MCl0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCB0byBwb2x5YWQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtmb3IodmFyIGE9bihlKS50b0hzbCgpLHI9W24oZSldLG89MzYwL3QsaT0xO2k8dDtpKyspci5wdXNoKG4oe2g6KGEuaCtpKm8pJTM2MCxzOmEucyxsOmEubH0pKTtyZXR1cm4gcn1mdW5jdGlvbiB3KGUpe3ZhciB0PW4oZSkudG9Ic2woKSxhPXQuaDtyZXR1cm5bbihlKSxuKHtoOihhKzcyKSUzNjAsczp0LnMsbDp0Lmx9KSxuKHtoOihhKzIxNiklMzYwLHM6dC5zLGw6dC5sfSldfWZ1bmN0aW9uIHkoZSx0LGEpe3Q9dHx8NixhPWF8fDMwO3ZhciByPW4oZSkudG9Ic2woKSxvPTM2MC9hLGk9W24oZSldO2ZvcihyLmg9KHIuaC0obyp0Pj4xKSs3MjApJTM2MDstLXQ7KXIuaD0oci5oK28pJTM2MCxpLnB1c2gobihyKSk7cmV0dXJuIGl9ZnVuY3Rpb24gYihlLHQpe3Q9dHx8Njtmb3IodmFyIGE9bihlKS50b0hzdigpLHI9YS5oLG89YS5zLGk9YS52LHM9W10sYz0xL3Q7dC0tOylzLnB1c2gobih7aDpyLHM6byx2Oml9KSksaT0oaStjKSUxO3JldHVybiBzfW4ucHJvdG90eXBlPXtpc0Rhcms6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCk8MTI4fSxpc0xpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNEYXJrKCl9LGlzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb2t9LGdldE9yaWdpbmFsSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3JpZ2luYWxJbnB1dH0sZ2V0Rm9ybWF0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Zvcm1hdH0sZ2V0QWxwaGE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYX0sZ2V0QnJpZ2h0bmVzczpmdW5jdGlvbigpe3ZhciBlPXRoaXMudG9SZ2IoKTtyZXR1cm4oMjk5KmUucis1ODcqZS5nKzExNCplLmIpLzFlM30sZ2V0THVtaW5hbmNlOmZ1bmN0aW9uKCl7dmFyIGUsdCxhLG49dGhpcy50b1JnYigpO3JldHVybiBlPW4uci8yNTUsdD1uLmcvMjU1LGE9bi5iLzI1NSwuMjEyNiooZTw9LjAzOTI4P2UvMTIuOTI6TWF0aC5wb3coKGUrLjA1NSkvMS4wNTUsMi40KSkrLjcxNTIqKHQ8PS4wMzkyOD90LzEyLjkyOk1hdGgucG93KCh0Ky4wNTUpLzEuMDU1LDIuNCkpKy4wNzIyKihhPD0uMDM5Mjg/YS8xMi45MjpNYXRoLnBvdygoYSsuMDU1KS8xLjA1NSwyLjQpKX0sc2V0QWxwaGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2E9dihlKSx0aGlzLl9yb3VuZEE9TWF0aC5yb3VuZCgxMDAqdGhpcy5fYSkvMTAwLHRoaXN9LHRvSHN2OmZ1bmN0aW9uKCl7dmFyIGU9byh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYik7cmV0dXJue2g6MzYwKmUuaCxzOmUucyx2OmUudixhOnRoaXMuX2F9fSx0b0hzdlN0cmluZzpmdW5jdGlvbigpe3ZhciBlPW8odGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpLHQ9TWF0aC5yb3VuZCgzNjAqZS5oKSxhPU1hdGgucm91bmQoMTAwKmUucyksbj1NYXRoLnJvdW5kKDEwMCplLnYpO3JldHVybiAxPT10aGlzLl9hP1wiaHN2KFwiK3QrXCIsIFwiK2ErXCIlLCBcIituK1wiJSlcIjpcImhzdmEoXCIrdCtcIiwgXCIrYStcIiUsIFwiK24rXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvSHNsOmZ1bmN0aW9uKCl7dmFyIGU9cih0aGlzLl9yLHRoaXMuX2csdGhpcy5fYik7cmV0dXJue2g6MzYwKmUuaCxzOmUucyxsOmUubCxhOnRoaXMuX2F9fSx0b0hzbFN0cmluZzpmdW5jdGlvbigpe3ZhciBlPXIodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpLHQ9TWF0aC5yb3VuZCgzNjAqZS5oKSxhPU1hdGgucm91bmQoMTAwKmUucyksbj1NYXRoLnJvdW5kKDEwMCplLmwpO3JldHVybiAxPT10aGlzLl9hP1wiaHNsKFwiK3QrXCIsIFwiK2ErXCIlLCBcIituK1wiJSlcIjpcImhzbGEoXCIrdCtcIiwgXCIrYStcIiUsIFwiK24rXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvSGV4OmZ1bmN0aW9uKGUpe3JldHVybiBpKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLGUpfSx0b0hleFN0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cIiNcIit0aGlzLnRvSGV4KGUpfSx0b0hleDg6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxhLG4scil7dmFyIG89W0EoTWF0aC5yb3VuZChlKS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZCh0KS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZChhKS50b1N0cmluZygxNikpLEEoXyhuKSldO3JldHVybiByJiZvWzBdLmNoYXJBdCgwKT09b1swXS5jaGFyQXQoMSkmJm9bMV0uY2hhckF0KDApPT1vWzFdLmNoYXJBdCgxKSYmb1syXS5jaGFyQXQoMCk9PW9bMl0uY2hhckF0KDEpJiZvWzNdLmNoYXJBdCgwKT09b1szXS5jaGFyQXQoMSk/b1swXS5jaGFyQXQoMCkrb1sxXS5jaGFyQXQoMCkrb1syXS5jaGFyQXQoMCkrb1szXS5jaGFyQXQoMCk6by5qb2luKFwiXCIpfSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYix0aGlzLl9hLGUpfSx0b0hleDhTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIjXCIrdGhpcy50b0hleDgoZSl9LHRvUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6TWF0aC5yb3VuZCh0aGlzLl9yKSxnOk1hdGgucm91bmQodGhpcy5fZyksYjpNYXRoLnJvdW5kKHRoaXMuX2IpLGE6dGhpcy5fYX19LHRvUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrTWF0aC5yb3VuZCh0aGlzLl9yKStcIiwgXCIrTWF0aC5yb3VuZCh0aGlzLl9nKStcIiwgXCIrTWF0aC5yb3VuZCh0aGlzLl9iKStcIilcIjpcInJnYmEoXCIrTWF0aC5yb3VuZCh0aGlzLl9yKStcIiwgXCIrTWF0aC5yb3VuZCh0aGlzLl9nKStcIiwgXCIrTWF0aC5yb3VuZCh0aGlzLl9iKStcIiwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b1BlcmNlbnRhZ2VSZ2I6ZnVuY3Rpb24oKXtyZXR1cm57cjpNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX3IsMjU1KSkrXCIlXCIsZzpNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2csMjU1KSkrXCIlXCIsYjpNYXRoLnJvdW5kKDEwMCpQKHRoaXMuX2IsMjU1KSkrXCIlXCIsYTp0aGlzLl9hfX0sdG9QZXJjZW50YWdlUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9yLDI1NSkpK1wiJSwgXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9nLDI1NSkpK1wiJSwgXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9iLDI1NSkpK1wiJSlcIjpcInJnYmEoXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9yLDI1NSkpK1wiJSwgXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9nLDI1NSkpK1wiJSwgXCIrTWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9iLDI1NSkpK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b05hbWU6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuX2E/XCJ0cmFuc3BhcmVudFwiOiEodGhpcy5fYTwxKSYmKFNbaSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiwhMCldfHwhMSl9LHRvRmlsdGVyOmZ1bmN0aW9uKGUpe3ZhciB0PVwiI1wiK3ModGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsdGhpcy5fYSksYT10LHI9dGhpcy5fZ3JhZGllbnRUeXBlP1wiR3JhZGllbnRUeXBlID0gMSwgXCI6XCJcIjtpZihlKXt2YXIgbz1uKGUpO2E9XCIjXCIrcyhvLl9yLG8uX2csby5fYixvLl9hKX1yZXR1cm5cInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcIityK1wic3RhcnRDb2xvcnN0cj1cIit0K1wiLGVuZENvbG9yc3RyPVwiK2ErXCIpXCJ9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3ZhciB0PSEhZTtlPWV8fHRoaXMuX2Zvcm1hdDt2YXIgYT0hMSxuPXRoaXMuX2E8MSYmdGhpcy5fYT49MDtyZXR1cm4gdHx8IW58fFwiaGV4XCIhPT1lJiZcImhleDZcIiE9PWUmJlwiaGV4M1wiIT09ZSYmXCJoZXg0XCIhPT1lJiZcImhleDhcIiE9PWUmJlwibmFtZVwiIT09ZT8oXCJyZ2JcIj09PWUmJihhPXRoaXMudG9SZ2JTdHJpbmcoKSksXCJwcmdiXCI9PT1lJiYoYT10aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpKSxcImhleFwiIT09ZSYmXCJoZXg2XCIhPT1lfHwoYT10aGlzLnRvSGV4U3RyaW5nKCkpLFwiaGV4M1wiPT09ZSYmKGE9dGhpcy50b0hleFN0cmluZyghMCkpLFwiaGV4NFwiPT09ZSYmKGE9dGhpcy50b0hleDhTdHJpbmcoITApKSxcImhleDhcIj09PWUmJihhPXRoaXMudG9IZXg4U3RyaW5nKCkpLFwibmFtZVwiPT09ZSYmKGE9dGhpcy50b05hbWUoKSksXCJoc2xcIj09PWUmJihhPXRoaXMudG9Ic2xTdHJpbmcoKSksXCJoc3ZcIj09PWUmJihhPXRoaXMudG9Ic3ZTdHJpbmcoKSksYXx8dGhpcy50b0hleFN0cmluZygpKTpcIm5hbWVcIj09PWUmJjA9PT10aGlzLl9hP3RoaXMudG9OYW1lKCk6dGhpcy50b1JnYlN0cmluZygpfSxjbG9uZTpmdW5jdGlvbigpe3JldHVybiBuKHRoaXMudG9TdHJpbmcoKSl9LF9hcHBseU1vZGlmaWNhdGlvbjpmdW5jdGlvbihlLHQpe3ZhciBhPWUuYXBwbHkobnVsbCxbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwodCkpKTtyZXR1cm4gdGhpcy5fcj1hLl9yLHRoaXMuX2c9YS5fZyx0aGlzLl9iPWEuX2IsdGhpcy5zZXRBbHBoYShhLl9hKSx0aGlzfSxsaWdodGVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHUsYXJndW1lbnRzKX0sYnJpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oaCxhcmd1bWVudHMpfSxkYXJrZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZyxhcmd1bWVudHMpfSxkZXNhdHVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGMsYXJndW1lbnRzKX0sc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obCxhcmd1bWVudHMpfSxncmV5c2NhbGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZCxhcmd1bWVudHMpfSxzcGluOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHAsYXJndW1lbnRzKX0sX2FwcGx5Q29tYmluYXRpb246ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbCh0KSkpfSxhbmFsb2dvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih5LGFyZ3VtZW50cyl9LGNvbXBsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihmLGFyZ3VtZW50cyl9LG1vbm9jaHJvbWF0aWM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihiLGFyZ3VtZW50cyl9LHNwbGl0Y29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHcsYXJndW1lbnRzKX0sdHJpYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihtLFszXSl9LHRldHJhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKG0sWzRdKX19LG4uZnJvbVJhdGlvPWZ1bmN0aW9uKHQsYSl7aWYoXCJvYmplY3RcIj09ZSh0KSl7dmFyIHI9e307Zm9yKHZhciBvIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShvKSYmKHJbb109XCJhXCI9PT1vP3Rbb106Rih0W29dKSk7dD1yfXJldHVybiBuKHQsYSl9LG4uZXF1YWxzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuISghZXx8IXQpJiZuKGUpLnRvUmdiU3RyaW5nKCk9PW4odCkudG9SZ2JTdHJpbmcoKX0sbi5yYW5kb209ZnVuY3Rpb24oKXtyZXR1cm4gbi5mcm9tUmF0aW8oe3I6TWF0aC5yYW5kb20oKSxnOk1hdGgucmFuZG9tKCksYjpNYXRoLnJhbmRvbSgpfSl9LG4ubWl4PWZ1bmN0aW9uKGUsdCxhKXthPTA9PT1hPzA6YXx8NTA7dmFyIHI9bihlKS50b1JnYigpLG89bih0KS50b1JnYigpLGk9YS8xMDA7cmV0dXJuIG4oe3I6KG8uci1yLnIpKmkrci5yLGc6KG8uZy1yLmcpKmkrci5nLGI6KG8uYi1yLmIpKmkrci5iLGE6KG8uYS1yLmEpKmkrci5hfSl9LG4ucmVhZGFiaWxpdHk9ZnVuY3Rpb24oZSx0KXt2YXIgYT1uKGUpLHI9bih0KTtyZXR1cm4oTWF0aC5tYXgoYS5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpLyhNYXRoLm1pbihhLmdldEx1bWluYW5jZSgpLHIuZ2V0THVtaW5hbmNlKCkpKy4wNSl9LG4uaXNSZWFkYWJsZT1mdW5jdGlvbihlLHQsYSl7dmFyIHIsbyxpLHMsYyxsPW4ucmVhZGFiaWxpdHkoZSx0KTtzd2l0Y2gobz0hMSwoaT1hLFwiQUFcIiE9PShzPSgoaT1pfHx7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifSkubGV2ZWx8fFwiQUFcIikudG9VcHBlckNhc2UoKSkmJlwiQUFBXCIhPT1zJiYocz1cIkFBXCIpLFwic21hbGxcIiE9PShjPShpLnNpemV8fFwic21hbGxcIikudG9Mb3dlckNhc2UoKSkmJlwibGFyZ2VcIiE9PWMmJihjPVwic21hbGxcIikscj17bGV2ZWw6cyxzaXplOmN9KS5sZXZlbCtyLnNpemUpe2Nhc2VcIkFBc21hbGxcIjpjYXNlXCJBQUFsYXJnZVwiOm89bD49NC41O2JyZWFrO2Nhc2VcIkFBbGFyZ2VcIjpvPWw+PTM7YnJlYWs7Y2FzZVwiQUFBc21hbGxcIjpvPWw+PTd9cmV0dXJuIG99LG4ubW9zdFJlYWRhYmxlPWZ1bmN0aW9uKGUsdCxhKXt2YXIgcixvLGkscyxjPW51bGwsbD0wO289KGE9YXx8e30pLmluY2x1ZGVGYWxsYmFja0NvbG9ycyxpPWEubGV2ZWwscz1hLnNpemU7Zm9yKHZhciBkPTA7ZDx0Lmxlbmd0aDtkKyspKHI9bi5yZWFkYWJpbGl0eShlLHRbZF0pKT5sJiYobD1yLGM9bih0W2RdKSk7cmV0dXJuIG4uaXNSZWFkYWJsZShlLGMse2xldmVsOmksc2l6ZTpzfSl8fCFvP2M6KGEuaW5jbHVkZUZhbGxiYWNrQ29sb3JzPSExLG4ubW9zdFJlYWRhYmxlKGUsW1wiI2ZmZlwiLFwiIzAwMFwiXSxhKSl9O3ZhciBrPW4ubmFtZXM9e2FsaWNlYmx1ZTpcImYwZjhmZlwiLGFudGlxdWV3aGl0ZTpcImZhZWJkN1wiLGFxdWE6XCIwZmZcIixhcXVhbWFyaW5lOlwiN2ZmZmQ0XCIsYXp1cmU6XCJmMGZmZmZcIixiZWlnZTpcImY1ZjVkY1wiLGJpc3F1ZTpcImZmZTRjNFwiLGJsYWNrOlwiMDAwXCIsYmxhbmNoZWRhbG1vbmQ6XCJmZmViY2RcIixibHVlOlwiMDBmXCIsYmx1ZXZpb2xldDpcIjhhMmJlMlwiLGJyb3duOlwiYTUyYTJhXCIsYnVybHl3b29kOlwiZGViODg3XCIsYnVybnRzaWVubmE6XCJlYTdlNWRcIixjYWRldGJsdWU6XCI1ZjllYTBcIixjaGFydHJldXNlOlwiN2ZmZjAwXCIsY2hvY29sYXRlOlwiZDI2OTFlXCIsY29yYWw6XCJmZjdmNTBcIixjb3JuZmxvd2VyYmx1ZTpcIjY0OTVlZFwiLGNvcm5zaWxrOlwiZmZmOGRjXCIsY3JpbXNvbjpcImRjMTQzY1wiLGN5YW46XCIwZmZcIixkYXJrYmx1ZTpcIjAwMDA4YlwiLGRhcmtjeWFuOlwiMDA4YjhiXCIsZGFya2dvbGRlbnJvZDpcImI4ODYwYlwiLGRhcmtncmF5OlwiYTlhOWE5XCIsZGFya2dyZWVuOlwiMDA2NDAwXCIsZGFya2dyZXk6XCJhOWE5YTlcIixkYXJra2hha2k6XCJiZGI3NmJcIixkYXJrbWFnZW50YTpcIjhiMDA4YlwiLGRhcmtvbGl2ZWdyZWVuOlwiNTU2YjJmXCIsZGFya29yYW5nZTpcImZmOGMwMFwiLGRhcmtvcmNoaWQ6XCI5OTMyY2NcIixkYXJrcmVkOlwiOGIwMDAwXCIsZGFya3NhbG1vbjpcImU5OTY3YVwiLGRhcmtzZWFncmVlbjpcIjhmYmM4ZlwiLGRhcmtzbGF0ZWJsdWU6XCI0ODNkOGJcIixkYXJrc2xhdGVncmF5OlwiMmY0ZjRmXCIsZGFya3NsYXRlZ3JleTpcIjJmNGY0ZlwiLGRhcmt0dXJxdW9pc2U6XCIwMGNlZDFcIixkYXJrdmlvbGV0OlwiOTQwMGQzXCIsZGVlcHBpbms6XCJmZjE0OTNcIixkZWVwc2t5Ymx1ZTpcIjAwYmZmZlwiLGRpbWdyYXk6XCI2OTY5NjlcIixkaW1ncmV5OlwiNjk2OTY5XCIsZG9kZ2VyYmx1ZTpcIjFlOTBmZlwiLGZpcmVicmljazpcImIyMjIyMlwiLGZsb3JhbHdoaXRlOlwiZmZmYWYwXCIsZm9yZXN0Z3JlZW46XCIyMjhiMjJcIixmdWNoc2lhOlwiZjBmXCIsZ2FpbnNib3JvOlwiZGNkY2RjXCIsZ2hvc3R3aGl0ZTpcImY4ZjhmZlwiLGdvbGQ6XCJmZmQ3MDBcIixnb2xkZW5yb2Q6XCJkYWE1MjBcIixncmF5OlwiODA4MDgwXCIsZ3JlZW46XCIwMDgwMDBcIixncmVlbnllbGxvdzpcImFkZmYyZlwiLGdyZXk6XCI4MDgwODBcIixob25leWRldzpcImYwZmZmMFwiLGhvdHBpbms6XCJmZjY5YjRcIixpbmRpYW5yZWQ6XCJjZDVjNWNcIixpbmRpZ286XCI0YjAwODJcIixpdm9yeTpcImZmZmZmMFwiLGtoYWtpOlwiZjBlNjhjXCIsbGF2ZW5kZXI6XCJlNmU2ZmFcIixsYXZlbmRlcmJsdXNoOlwiZmZmMGY1XCIsbGF3bmdyZWVuOlwiN2NmYzAwXCIsbGVtb25jaGlmZm9uOlwiZmZmYWNkXCIsbGlnaHRibHVlOlwiYWRkOGU2XCIsbGlnaHRjb3JhbDpcImYwODA4MFwiLGxpZ2h0Y3lhbjpcImUwZmZmZlwiLGxpZ2h0Z29sZGVucm9keWVsbG93OlwiZmFmYWQyXCIsbGlnaHRncmF5OlwiZDNkM2QzXCIsbGlnaHRncmVlbjpcIjkwZWU5MFwiLGxpZ2h0Z3JleTpcImQzZDNkM1wiLGxpZ2h0cGluazpcImZmYjZjMVwiLGxpZ2h0c2FsbW9uOlwiZmZhMDdhXCIsbGlnaHRzZWFncmVlbjpcIjIwYjJhYVwiLGxpZ2h0c2t5Ymx1ZTpcIjg3Y2VmYVwiLGxpZ2h0c2xhdGVncmF5OlwiNzg5XCIsbGlnaHRzbGF0ZWdyZXk6XCI3ODlcIixsaWdodHN0ZWVsYmx1ZTpcImIwYzRkZVwiLGxpZ2h0eWVsbG93OlwiZmZmZmUwXCIsbGltZTpcIjBmMFwiLGxpbWVncmVlbjpcIjMyY2QzMlwiLGxpbmVuOlwiZmFmMGU2XCIsbWFnZW50YTpcImYwZlwiLG1hcm9vbjpcIjgwMDAwMFwiLG1lZGl1bWFxdWFtYXJpbmU6XCI2NmNkYWFcIixtZWRpdW1ibHVlOlwiMDAwMGNkXCIsbWVkaXVtb3JjaGlkOlwiYmE1NWQzXCIsbWVkaXVtcHVycGxlOlwiOTM3MGRiXCIsbWVkaXVtc2VhZ3JlZW46XCIzY2IzNzFcIixtZWRpdW1zbGF0ZWJsdWU6XCI3YjY4ZWVcIixtZWRpdW1zcHJpbmdncmVlbjpcIjAwZmE5YVwiLG1lZGl1bXR1cnF1b2lzZTpcIjQ4ZDFjY1wiLG1lZGl1bXZpb2xldHJlZDpcImM3MTU4NVwiLG1pZG5pZ2h0Ymx1ZTpcIjE5MTk3MFwiLG1pbnRjcmVhbTpcImY1ZmZmYVwiLG1pc3R5cm9zZTpcImZmZTRlMVwiLG1vY2Nhc2luOlwiZmZlNGI1XCIsbmF2YWpvd2hpdGU6XCJmZmRlYWRcIixuYXZ5OlwiMDAwMDgwXCIsb2xkbGFjZTpcImZkZjVlNlwiLG9saXZlOlwiODA4MDAwXCIsb2xpdmVkcmFiOlwiNmI4ZTIzXCIsb3JhbmdlOlwiZmZhNTAwXCIsb3JhbmdlcmVkOlwiZmY0NTAwXCIsb3JjaGlkOlwiZGE3MGQ2XCIscGFsZWdvbGRlbnJvZDpcImVlZThhYVwiLHBhbGVncmVlbjpcIjk4ZmI5OFwiLHBhbGV0dXJxdW9pc2U6XCJhZmVlZWVcIixwYWxldmlvbGV0cmVkOlwiZGI3MDkzXCIscGFwYXlhd2hpcDpcImZmZWZkNVwiLHBlYWNocHVmZjpcImZmZGFiOVwiLHBlcnU6XCJjZDg1M2ZcIixwaW5rOlwiZmZjMGNiXCIscGx1bTpcImRkYTBkZFwiLHBvd2RlcmJsdWU6XCJiMGUwZTZcIixwdXJwbGU6XCI4MDAwODBcIixyZWJlY2NhcHVycGxlOlwiNjYzMzk5XCIscmVkOlwiZjAwXCIscm9zeWJyb3duOlwiYmM4ZjhmXCIscm95YWxibHVlOlwiNDE2OWUxXCIsc2FkZGxlYnJvd246XCI4YjQ1MTNcIixzYWxtb246XCJmYTgwNzJcIixzYW5keWJyb3duOlwiZjRhNDYwXCIsc2VhZ3JlZW46XCIyZThiNTdcIixzZWFzaGVsbDpcImZmZjVlZVwiLHNpZW5uYTpcImEwNTIyZFwiLHNpbHZlcjpcImMwYzBjMFwiLHNreWJsdWU6XCI4N2NlZWJcIixzbGF0ZWJsdWU6XCI2YTVhY2RcIixzbGF0ZWdyYXk6XCI3MDgwOTBcIixzbGF0ZWdyZXk6XCI3MDgwOTBcIixzbm93OlwiZmZmYWZhXCIsc3ByaW5nZ3JlZW46XCIwMGZmN2ZcIixzdGVlbGJsdWU6XCI0NjgyYjRcIix0YW46XCJkMmI0OGNcIix0ZWFsOlwiMDA4MDgwXCIsdGhpc3RsZTpcImQ4YmZkOFwiLHRvbWF0bzpcImZmNjM0N1wiLHR1cnF1b2lzZTpcIjQwZTBkMFwiLHZpb2xldDpcImVlODJlZVwiLHdoZWF0OlwiZjVkZWIzXCIsd2hpdGU6XCJmZmZcIix3aGl0ZXNtb2tlOlwiZjVmNWY1XCIseWVsbG93OlwiZmYwXCIseWVsbG93Z3JlZW46XCI5YWNkMzJcIn0sUz1uLmhleE5hbWVzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Zvcih2YXIgYSBpbiBlKWUuaGFzT3duUHJvcGVydHkoYSkmJih0W2VbYV1dPWEpO3JldHVybiB0fShrKTtmdW5jdGlvbiB2KGUpe3JldHVybiBlPXBhcnNlRmxvYXQoZSksKGlzTmFOKGUpfHxlPDB8fGU+MSkmJihlPTEpLGV9ZnVuY3Rpb24gUChlLHQpeyhmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmLTEhPWUuaW5kZXhPZihcIi5cIikmJjE9PT1wYXJzZUZsb2F0KGUpfSkoZSkmJihlPVwiMTAwJVwiKTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmLTEhPWUuaW5kZXhPZihcIiVcIil9KGUpO3JldHVybiBlPU1hdGgubWluKHQsTWF0aC5tYXgoMCxwYXJzZUZsb2F0KGUpKSksYSYmKGU9cGFyc2VJbnQoZSp0LDEwKS8xMDApLE1hdGguYWJzKGUtdCk8MWUtNj8xOmUldC9wYXJzZUZsb2F0KHQpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuIE1hdGgubWluKDEsTWF0aC5tYXgoMCxlKSl9ZnVuY3Rpb24geChlKXtyZXR1cm4gcGFyc2VJbnQoZSwxNil9ZnVuY3Rpb24gQShlKXtyZXR1cm4gMT09ZS5sZW5ndGg/XCIwXCIrZTpcIlwiK2V9ZnVuY3Rpb24gRihlKXtyZXR1cm4gZTw9MSYmKGU9MTAwKmUrXCIlXCIpLGV9ZnVuY3Rpb24gXyhlKXtyZXR1cm4gTWF0aC5yb3VuZCgyNTUqcGFyc2VGbG9hdChlKSkudG9TdHJpbmcoMTYpfWZ1bmN0aW9uIE0oZSl7cmV0dXJuIHgoZSkvMjU1fXZhciBJLFcsTyxEPShXPVwiW1xcXFxzfFxcXFwoXSsoXCIrKEk9XCIoPzpbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/KXwoPzpbLVxcXFwrXT9cXFxcZCslPylcIikrXCIpWyx8XFxcXHNdKyhcIitJK1wiKVssfFxcXFxzXSsoXCIrSStcIilcXFxccypcXFxcKT9cIixPPVwiW1xcXFxzfFxcXFwoXSsoXCIrSStcIilbLHxcXFxcc10rKFwiK0krXCIpWyx8XFxcXHNdKyhcIitJK1wiKVssfFxcXFxzXSsoXCIrSStcIilcXFxccypcXFxcKT9cIix7Q1NTX1VOSVQ6bmV3IFJlZ0V4cChJKSxyZ2I6bmV3IFJlZ0V4cChcInJnYlwiK1cpLHJnYmE6bmV3IFJlZ0V4cChcInJnYmFcIitPKSxoc2w6bmV3IFJlZ0V4cChcImhzbFwiK1cpLGhzbGE6bmV3IFJlZ0V4cChcImhzbGFcIitPKSxoc3Y6bmV3IFJlZ0V4cChcImhzdlwiK1cpLGhzdmE6bmV3IFJlZ0V4cChcImhzdmFcIitPKSxoZXgzOi9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg2Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxoZXg0Oi9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8saGV4ODovXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvfSk7ZnVuY3Rpb24gQihlKXtyZXR1cm4hIUQuQ1NTX1VOSVQuZXhlYyhlKX1yZXR1cm4gbn0oKX19LG49e307ZnVuY3Rpb24gcihlKXt2YXIgdD1uW2VdO2lmKHZvaWQgMCE9PXQpcmV0dXJuIHQuZXhwb3J0czt2YXIgbz1uW2VdPXtleHBvcnRzOnt9fTtyZXR1cm4gYVtlXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxyKSxvLmV4cG9ydHN9dmFyIG89e307KCgpPT57dmFyIGU9bztPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNyZWF0ZVRoZW1lPWUuUGFsZXR0ZT1lLkNvbG9yPXZvaWQgMDt2YXIgdD1yKDIzMTcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQ29sb3JcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5Db2xvcn19KTt2YXIgYT1yKDU5MzkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiUGFsZXR0ZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBhLlBhbGV0dGV9fSk7dmFyIG49cig2ODkzKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNyZWF0ZVRoZW1lXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3JlYXRlVGhlbWV9fSl9KSgpO3ZhciBpPXQ7Zm9yKHZhciBzIGluIG8paVtzXT1vW3NdO28uX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDg3NzooKT0+e30sNjc6KCk9Pnt9LDMxNzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49YSgxODkpLHI9YSg1MjIpO2NvbnN0IG89YSg2NzUpLnFULlN5c3RlbSxpPWU9Pk9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgoKGUsW3QsYV0pPT5gJHtlfS0td29ya3NwYWNlLXBhbGV0dGUtJHt0fTogJHthfTtgKSxcIlwiKSxzPShlLHQpPT4oe3NlbGVjdGVkVGFiOlwiZGFya1wiPT09dD9lLmJhY2tncm91bmQzOmUuYmFja2dyb3VuZDF9KTtuZXcgY2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5wcm92aWRlclN0b3JhZ2U9ZSx0aGlzLmdldFZhcnNCeVNjaGVtZT1lPT5cImRhcmtcIj09PWU/dGhpcy5kYXJrUGFsZXR0ZVZhcnM6dGhpcy5saWdodFBhbGV0dGVWYXJzLHRoaXMuc2V0V29ya3NwYWNlU3RvcmFnZVByb3h5PWU9Pnt0aGlzLndvcmtzcGFjZVN0b3JhZ2U9ZX0sdGhpcy50cnlTeW5jaHJvbml6ZVdvcmtzcGFjZVN0b3JhZ2U9YXN5bmMoKT0+e2lmKHRoaXMud29ya3NwYWNlU3RvcmFnZSl7Y29uc3QgZT10aGlzLmdldFNjaGVtZSgpO2lmKGF3YWl0IHRoaXMud29ya3NwYWNlU3RvcmFnZS5zZXRJdGVtKHIuQS5TZWxlY3RlZENvbG9yU2NoZW1lLGUpLHRoaXMuZGFya1BhbGV0dGVWYXJzJiZ0aGlzLmxpZ2h0UGFsZXR0ZVZhcnMpaWYoXCJkYXJrXCI9PT1lfHxcImxpZ2h0XCI9PT1lKWF3YWl0IHRoaXMud29ya3NwYWNlU3RvcmFnZS5zZXRJdGVtKHIuQS5UaGVtZVBhbGV0dGVTaGVldCxgOnJvb3R7JHt0aGlzLmdldFZhcnNCeVNjaGVtZShlKX19YCk7ZWxzZXtjb25zdCBlPWBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXs6cm9vdCB7JHt0aGlzLmdldFZhcnNCeVNjaGVtZShcImRhcmtcIil9fX1gLHQ9YEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KXs6cm9vdHske3RoaXMuZ2V0VmFyc0J5U2NoZW1lKFwibGlnaHRcIil9fX1gO2F3YWl0IHRoaXMud29ya3NwYWNlU3RvcmFnZS5zZXRJdGVtKHIuQS5UaGVtZVBhbGV0dGVTaGVldCxgJHt0fSR7ZX1gKX19fSx0aGlzLnNldFBhbGV0dGVzPWFzeW5jKHtsaWdodDplLGRhcms6dH0pPT57dGhpcy5saWdodFBhbGV0dGVWYXJzPWkoey4uLmUsLi4ucyhlLFwibGlnaHRcIil9KSx0aGlzLmRhcmtQYWxldHRlVmFycz1pKHsuLi50LC4uLnModCxcImRhcmtcIil9KX19c2V0U2NoZW1lKGUpe3RoaXMucHJvdmlkZXJTdG9yYWdlLnNldEl0ZW0oci5BLlNlbGVjdGVkQ29sb3JTY2hlbWUsZSl9Z2V0U2NoZW1lKCl7cmV0dXJuIG51bGw9PT10aGlzLnByb3ZpZGVyU3RvcmFnZS5nZXRJdGVtKHIuQS5TZWxlY3RlZENvbG9yU2NoZW1lKSYmdGhpcy5wcm92aWRlclN0b3JhZ2Uuc2V0SXRlbShyLkEuU2VsZWN0ZWRDb2xvclNjaGVtZSxvKSx0aGlzLnByb3ZpZGVyU3RvcmFnZS5nZXRJdGVtKHIuQS5TZWxlY3RlZENvbG9yU2NoZW1lKX19KG4pfSwzNjc6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtOOigpPT53LEE6KCk9Pm19KTt2YXIgbj1hKDcyMykscj1hKDc5KSxvPWEoNjc1KSxpPWEoNzApLHM9YSg3ODYpLGM9YSgzMzMpO3ZhciBsPWEoMzI2KTtjb25zdCBkPSgwLGEoMTAyKS5BKShgJHtcInVuZGVmaW5lZFwiIT10eXBlb2YgZmluJiZmaW4/Lm1lLmlkZW50aXR5LnV1aWR9LWVudGVycHJpc2UtYm9va21hcmtzYCk7dmFyIHU9YSgxNDEpO2NvbnN0IGg9ZT0+KHtpZGVudGl0eTplLG9wZW5maW5XaW5kb3c6ZmluLldpbmRvdy53cmFwU3luYyhlKSxfYm9va21hcmtzOntfY3JlYXRlQm9va21hcmtOb2RlOmFzeW5jIGU9Pihhc3luYyBlPT4oYXdhaXQgZCgpKS5kaXNwYXRjaChsLkhjLkNyZWF0ZUJvb2ttYXJrTm9kZSxlKSkoZSksX2dldEJvb2ttYXJrTm9kZTphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5HZXRCb29rbWFya05vZGUsZSkpKGUpLF9zZWFyY2hCb29rbWFya05vZGVzOmFzeW5jIGU9Pihhc3luYyBlPT4oYXdhaXQgZCgpKS5kaXNwYXRjaChsLkhjLlNlYXJjaEJvb2ttYXJrTm9kZXMsZSkpKGUpLF91cGRhdGVCb29rbWFya05vZGU6YXN5bmMgZT0+KGFzeW5jIGU9Pihhd2FpdCBkKCkpLmRpc3BhdGNoKGwuSGMuVXBkYXRlQm9va21hcmtOb2RlLGUpKShlKSxfZGVsZXRlQm9va21hcmtOb2RlOmFzeW5jIGU9Pihhc3luYyBlPT4oYXdhaXQgZCgpKS5kaXNwYXRjaChsLkhjLkRlbGV0ZUJvb2ttYXJrTm9kZSxlKSkoZSl9LGdldFBhZ2VzOmFzeW5jKCk9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFBhZ2VzRm9yV2luZG93LGUpLGdldFBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0UGFnZUZvcldpbmRvdyx7aWRlbnRpdHk6ZSxwYWdlSWQ6dH0pLGFkZFBhZ2U6YXN5bmMgdD0+KDAsdS5OdCkoKS5Ccm93c2VyLndyYXBTeW5jKGUpLl9hZGRQYWdlKHQpLF9hZGRQYWdlOmFzeW5jKHQsYSk9Pntjb25zdCBuPWF3YWl0KDAsci5iVykoZSksbz17aWRlbnRpdHk6ZSxwYWdlOnQsaW5zZXJ0aW9uSW5kZXg6YT8uaW5kZXgsbXVsdGlJbnN0YW5jZVZpZXdCZWhhdmlvcjphPy5tdWx0aUluc3RhbmNlVmlld0JlaGF2aW9yfTtyZXR1cm4gbi5kaXNwYXRjaChyLk9GLkFkZFBhZ2Usbyl9LHJlbW92ZVBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuRGV0YWNoUGFnZXNGcm9tV2luZG93LHtpZGVudGl0eTplLHBhZ2VJZHM6W3RdfSkscmVwYXJlbnRQYWdlOmFzeW5jIHQ9PigwLHUuTnQpKCkuQnJvd3Nlci53cmFwU3luYyhlKS5fcmVwYXJlbnRQYWdlKHQpLF9yZXBhcmVudFBhZ2U6YXN5bmMgdD0+e2NvbnN0e3BhZ2VJZDphfT10LG49YXdhaXQoMCxyLmJXKShlKSxvPShhd2FpdCBuLmRpc3BhdGNoKHIuT0YuR2V0QWxsQXR0YWNoZWRQYWdlcyx2b2lkIDApKS5maW5kKCgoe3BhZ2VJZDplfSk9PmU9PT1hKSk7aWYoIW8pdGhyb3cgbmV3IEVycm9yKGBSZXBhcmVudCBQYWdlIEVycm9yOiBUYXJnZXQgcGFnZSB3aXRoIHBhZ2VJZCAke2F9IG5vdCBmb3VuZGApO28ubXVsdGlJbnN0YW5jZVZpZXdCZWhhdmlvcj1cInJlcGFyZW50XCI7Y29uc3QgaT17aWRlbnRpdHk6ZSxwYWdlczpbb10saW5zZXJ0aW9uSW5kZXg6dC5pbmRleH07cmV0dXJuIG4uZGlzcGF0Y2goci5PRi5BdHRhY2hQYWdlc1RvV2luZG93LGkpfSxzZXRBY3RpdmVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlNldEFjdGl2ZVBhZ2Use2lkZW50aXR5OmUscGFnZUlkOnR9KSx1cGRhdGVQYWdlOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuVXBkYXRlUGFnZUZvcldpbmRvdyx0KX0scmVvcmRlclBhZ2VzOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuUmVvcmRlclBhZ2VzRm9yV2luZG93LHQpfSxfb3Blbkdsb2JhbENvbnRleHRNZW51OmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuT3Blbkdsb2JhbENvbnRleHRNZW51SW50ZXJuYWwsdCl9LHJlcGxhY2VUb29sYmFyT3B0aW9uczphc3luYyB0PT57YXdhaXQoMCxyLmJXKShlKTtjb25zdCBhPWZpbi5XaW5kb3cud3JhcFN5bmMoZSk7YXdhaXQgYS51cGRhdGVPcHRpb25zKHt3b3Jrc3BhY2VQbGF0Zm9ybTp7dG9vbGJhck9wdGlvbnM6dH19KX0scmVwbGFjZVdpbmRvd1N0YXRlQnV0dG9uT3B0aW9uczphc3luYyB0PT57YXdhaXQoMCxyLmJXKShlKTtjb25zdCBhPWZpbi5XaW5kb3cud3JhcFN5bmMoZSk7YXdhaXQgYS51cGRhdGVPcHRpb25zKHt3b3Jrc3BhY2VQbGF0Zm9ybTp7d2luZG93U3RhdGVCdXR0b25PcHRpb25zOnR9fSl9LHVwZGF0ZUJyb3dzZXJXaW5kb3dUaXRsZTphc3luYyB0PT57Y29uc3QgYT1maW4uV2luZG93LndyYXBTeW5jKGUpO1wic3RyaW5nXCIhPXR5cGVvZiB0P2F3YWl0IGEudXBkYXRlT3B0aW9ucyh7d29ya3NwYWNlUGxhdGZvcm06e3RpdGxlOnR9fSk6Y29uc29sZS53YXJuKFwiVHlwZSBzdHJpbmcgZm9yIHdpbmRvdyB0aXRsZSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFdpbmRvd1RpdGxlIHR5cGUgaW5zdGVhZFwiLHQpfSxfb3BlblZpZXdUYWJDb250ZXh0TWVudTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLk9wZW5WaWV3VGFiQ29udGV4dE1lbnVJbnRlcm5hbCx0KX0sX29wZW5QYWdlVGFiQ29udGV4dE1lbnU6YXN5bmMgdD0+e2NvbnN0IGE9YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4gdC5pZGVudGl0eT1lLGEuZGlzcGF0Y2goci5PRi5PcGVuUGFnZVRhYkNvbnRleHRNZW51SW50ZXJuYWwsdCl9LF9vcGVuU2F2ZU1vZGFsOmFzeW5jIHQ9Pnthd2FpdCgwLHIuYlcpKGUpO3JldHVybihhd2FpdCgwLGwucDQpKGUpKS5kaXNwYXRjaChsLmFRLk9wZW5TYXZlTW9kYWxJbnRlcm5hbCx0KX0sX2dldExheW91dHNXaXRoU2VsZWN0ZWRWaWV3czphc3luYygpPT4oYXdhaXQoMCxsLnA0KShlKSkuZGlzcGF0Y2gobC5hUS5HZXRMYXlvdXRzV2l0aFNlbGVjdGVkVmlld3NJbnRlcm5hbCxlKSxfb3BlblNhdmVCdXR0b25Db250ZXh0TWVudTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLk9wZW5TYXZlQnV0dG9uQ29udGV4dE1lbnVJbnRlcm5hbCx0KX0sX2FkZERlZmF1bHRQYWdlOmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuQWRkRGVmYXVsdFBhZ2UsdCl9LF90cmFja1JlbW92ZWRUYWI6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuVHJhY2tSZW1vdmVkVGFiSW50ZXJuYWwsdCksX3Jlc3RvcmVSZW1vdmVkVGFiOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlJlc3RvcmVSZW1vdmVkVGFiSW50ZXJuYWwsdCksX3RyYWNrVmlzaXRlZFNpdGU6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuVHJhY2tWaXNpdGVkU2l0ZUludGVybmFsLHQpLF9nZXRSZWNlbnRseVZpc2l0ZWRTaXRlczphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRSZWNlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsLHQpLF9nZXRGcmVxdWVudGx5VmlzaXRlZFNpdGVzOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldEZyZXF1ZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbCx0KSxfc2VhcmNoU2l0ZXM6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuU2VhcmNoU2l0ZXNJbnRlcm5hbCx7aWRlbnRpdHk6ZSxyZXE6dH0pLF9nZXRTZWFyY2hQcm92aWRlcnM6YXN5bmMoKT0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2VhcmNoUHJvdmlkZXJzSW50ZXJuYWwse2lkZW50aXR5OmV9KSxfZ2V0Q3VyYXRlZENvbnRlbnQ6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0Q3VyYXRlZENvbnRlbnRJbnRlcm5hbCx7aWRlbnRpdHk6ZSxyZXE6dH0pLF9oYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbjphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5IYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbkludGVybmFsLHQpfSksZz1lPT57Y29uc3QgdD1maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSk7cmV0dXJue3dyYXBTeW5jOmU9PmgoZSksY3JlYXRlV2luZG93OmFzeW5jIGE9Pntjb25zdCBuPSgoKT0+e2NvbnN0IGU9YGJyb3dzZXItd2luZG93LXN0YXJ0dXAtJHsoMCxjLk4pKCl9YDtyZXR1cm4gcy5BLm1hcmtTdGFydChlKSxlfSkoKTsoZT0+e2Zpbi5BcHBsaWNhdGlvbi53cmFwU3luYyh7dXVpZDpmaW4ubWUuaWRlbnRpdHkudXVpZH0pLm9uY2UoXCJ3aW5kb3ctc2hvd25cIiwoKCk9PntzLkEubWFya0FuZE1lYXN1cmUoXCJicm93c2VyLXdpbmRvdy1zaG93blwiLGUpfSkpfSkobiksYXdhaXQoMCxyLmJXKShlKTtjb25zdCBvPWF3YWl0IHQuY3JlYXRlV2luZG93KGEpO3JldHVybihlPT57cy5BLm1hcmtBbmRNZWFzdXJlKFwiYnJvd3Nlci13aW5kb3ctc3RhcnRlZFwiLGUpfSkobiksaChvLmlkZW50aXR5KX0sZ2V0QWxsQXR0YWNoZWRQYWdlczphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRBbGxBdHRhY2hlZFBhZ2VzLHZvaWQgMCksZ2V0QWxsV2luZG93czphc3luYygpPT57YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4oYXdhaXQoMCxpLklvKSgpKS5tYXAoKGU9PmgoZS5pZGVudGl0eSkpKX0sZ2V0VW5pcXVlUGFnZVRpdGxlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFVuaXF1ZVBhZ2VUaXRsZSx0KSxnZXRMYXN0Rm9jdXNlZFdpbmRvdzphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRMYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3csdm9pZCAwKX19LHA9ZT0+KHtjcmVhdGVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkNyZWF0ZVNhdmVkUGFnZUludGVybmFsLHQpLGRlbGV0ZVBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuRGVsZXRlU2F2ZWRQYWdlSW50ZXJuYWwsdCksdXBkYXRlUGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVTYXZlZFBhZ2VJbnRlcm5hbCx0KSxnZXRQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFNhdmVkUGFnZSx0KSxnZXRQYWdlczphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRTYXZlZFBhZ2VzLHQpLHNhdmVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlNhdmVQYWdlLHQpLGNyZWF0ZVdvcmtzcGFjZTphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkNyZWF0ZVNhdmVkV29ya3NwYWNlLHQpLGRlbGV0ZVdvcmtzcGFjZTphc3luYyB0PT57Y29uc3QgYT13KCksbj1hd2FpdCBhLmdldEN1cnJlbnRXb3Jrc3BhY2UoKTtpZihuLndvcmtzcGFjZUlkPT09dCl0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZWxldGUgY3VycmVudCBhY3RpdmUgd29ya3NwYWNlICR7bi50aXRsZX1gKTtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkRlbGV0ZVNhdmVkV29ya3NwYWNlLHQpfSx1cGRhdGVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVTYXZlZFdvcmtzcGFjZSx0KSxnZXRXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRTYXZlZFdvcmtzcGFjZSx0KSxnZXRXb3Jrc3BhY2VzOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2F2ZWRXb3Jrc3BhY2VzLHQpLHNhdmVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TYXZlV29ya3NwYWNlLHQpLGdldERvY2tQcm92aWRlckNvbmZpZzphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldERvY2tQcm92aWRlckNvbmZpZyx0KSxzYXZlRG9ja1Byb3ZpZGVyQ29uZmlnOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2F2ZURvY2tQcm92aWRlckNvbmZpZyx0KX0pO3ZhciBmPWEoMzk2KTtjb25zdCBtPWU9Pntjb25zdCB0PWZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKTtsZXQgYTtyZXR1cm4gT2JqZWN0LmFzc2lnbih0LHthcHBseVNuYXBzaG90OmFzeW5jKHQsYSk9PntpZihcInN0cmluZ1wiIT10eXBlb2YgdCYmIXQ/LndpbmRvd3MpdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgYnJvd3NlciBzbmFwc2hvdFwiKTtyZXR1cm4gZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpLmFwcGx5U25hcHNob3QodCxhKX0sZ2V0U25hcHNob3Q6KCk9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5nZXRTbmFwc2hvdCgpLnRoZW4oKGU9PmUpKSxnZXRWaWV3U25hcHNob3Q6dD0+ZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpLmdldFZpZXdTbmFwc2hvdCh0KSxjcmVhdGVWaWV3Oih0LGEsbik9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5jcmVhdGVWaWV3KHQsYSxuKSxsYXVuY2hBcHA6YXN5bmMgdD0+e2NvbnNvbGUud2FybihcImxhdW5jaEFwcCBtZXRob2QgaXMgZGVwcmVjYXRlZC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIGNyZWF0ZVZpZXcgLSBodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvcGxhdGZvcm0tZ2V0dGluZy1zdGFydGVkI2FkZC1hLXZpZXctdG8tYW4tZXhpc3Rpbmctd2luZG93IG9yICBjcmVhdGVXaW5kb3cgLSBodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvcGxhdGZvcm0tZ2V0dGluZy1zdGFydGVkI2NyZWF0ZS1hLXBsYXRmb3JtLXdpbmRvdyBpbnN0ZWFkLlwiKSx0LnRhcmdldHx8KHQudGFyZ2V0PXt1dWlkOm4uJGgsbmFtZTpuLnZMLGVudGl0eVR5cGU6bi5mVHx8XCJ1bmtub3duXCJ9KTtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkxhdW5jaEFwcCx0KX0sX2ludm9rZUN1c3RvbUFjdGlvbjphc3luYyh0LGEpPT57Y29uc3Qgbj1hd2FpdCgwLHIuTikoZSksaT17YWN0aW9uSWQ6dCxwYXlsb2FkOnsuLi5hLGNhbGxlclR5cGU6YS5jYWxsZXJUeXBlfHxvLnZjLkFQSX19O3JldHVybiBuLmRpc3BhdGNoKHIuT0YuSW52b2tlQ3VzdG9tQWN0aW9uSW50ZXJuYWwsaSl9LF9yZXF1ZXN0UXVpdFBsYXRmb3JtRGlhbG9nOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVxdWVzdFF1aXRQbGF0Zm9ybURpYWxvZ0ludGVybmFsLHQpLGdldEN1cnJlbnRXb3Jrc3BhY2U6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRDdXJyZW50V29ya3NwYWNlLHZvaWQgMCksYXBwbHlXb3Jrc3BhY2U6YXN5bmModCxhKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5BcHBseVdvcmtzcGFjZSx7Li4udCxvcHRpb25zOmF9KSxzZXRBY3RpdmVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXRBY3RpdmVXb3Jrc3BhY2UsdCksZ2V0TGFuZ3VhZ2U6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXRMYW5ndWFnZSksX2dldExhbmd1YWdlUmVzb3VyY2VzOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0TGFuZ3VhZ2VSZXNvdXJjZXNJbnRlcm5hbCksc2V0TGFuZ3VhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXRMYW5ndWFnZSx0KSxfcmFpc2VBbmFseXRpY3M6YXN5bmMgdD0+e2lmKGF8fChhPWF3YWl0KDAsci5LWikoZSkpLFwib2JqZWN0XCI9PXR5cGVvZiBhJiZhPy5hbmFseXRpY3M/LmlzU3VwcG9ydGVkKXtyZXR1cm4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkFuYWx5dGljcyx0KX1lLnV1aWR9LGdldE5vdGlmaWNhdGlvbnNDb25maWc6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXROb3RpZmljYXRpb25zQ29uZmlnKSxfcmVmcmVzaEJvb2ttYXJrc0ludGVybmFsOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVmcmVzaEJvb2ttYXJrc0ludGVybmFsKSxfbGF1bmNoQm9va21hcmtJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkxhdW5jaEJvb2ttYXJrSW50ZXJuYWwsdCksX3VwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlVwZGF0ZURvY2tGYXZvcml0ZXNJbnRlcm5hbCx0KSxfdXBkYXRlQ29udGVudE1lbnVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlVwZGF0ZUNvbnRlbnRNZW51SW50ZXJuYWwsdCksX2xhdW5jaERvY2tFbnRyeUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuTGF1bmNoRG9ja0VudHJ5SW50ZXJuYWwsdCksX3NldERvY2tGYXZvcml0ZXNJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlNldERvY2tGYXZvcml0ZXNPcmRlckludGVybmFsLHQpLF9zZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWwsdCksX3JlbW92ZURvY2tGYXZvcml0ZUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuUmVtb3ZlRG9ja0Zhdm9yaXRlSW50ZXJuYWwsdCksX2FkZERvY2tGYXZvcml0ZUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuQWRkRG9ja0Zhdm9yaXRlSW50ZXJuYWwsdCksX25hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLk5hdmlnYXRlQ29udGVudE1lbnVJbnRlcm5hbCx0KSxfb3BlbkRvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbDphc3luYygpPT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldERvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbCksX2hhbmRsZURvY2tXb3Jrc3BhY2VzTWVudVJlc3BvbnNlSW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5IYW5kbGVEb2NrV29ya3NwYWNlc01lbnVSZXNwb25zZUludGVybmFsLHQpLFRoZW1lOigwLGYuTkEpKGUpLEJyb3dzZXI6ZyhlKSxTdG9yYWdlOnAoZSl9KX0sdz0oKT0+bShmaW4ubWUuaWRlbnRpdHkpfSwzOTY6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtOQTooKT0+aX0pO2EoMTgxKSxhKDcwKSxhKDMyNik7dmFyIG49YSgxMDIpO3ZhciByOyFmdW5jdGlvbihlKXtlLlVwZGF0ZVBsYXRmb3JtVGhlbWVTY2hlbWU9XCJ1cGRhdGUtcGxhdGZvcm0tdGhlbWUtc2NoZW1lXCJ9KHJ8fChyPXt9KSk7KDAsbi5BKShcIm9mLXdvcmtzcGFjZS1ub3RpZmljYXRpb25zLXN5bmNcIik7YSg2OTUpO3ZhciBvPWEoNzkpO2EoMzE3KTtjb25zdCBpPWU9Pih7Z2V0VGhlbWVzOmFzeW5jKCk9Pihhd2FpdCgwLG8uTikoZSkpLmRpc3BhdGNoKG8uT0YuR2V0VGhlbWVzLHZvaWQgMCksc2V0U2VsZWN0ZWRTY2hlbWU6YXN5bmMgdD0+KGF3YWl0KDAsby5OKShlKSkuZGlzcGF0Y2goby5PRi5TZXRTZWxlY3RlZFNjaGVtZSx0KSxnZXRTZWxlY3RlZFNjaGVtZTphc3luYygpPT4oYXdhaXQoMCxvLk4pKGUpKS5kaXNwYXRjaChvLk9GLkdldFNlbGVjdGVkU2NoZW1lLHZvaWQgMCl9KX0sMTQxOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7TnQ6KCk9PnUuTixBZzooKT0+dS5BfSk7YSg2NzUpO3ZhciBuPWEoNzIzKTthKDE4MSk7dmFyIHI9YSg3MCk7YSgzNjUpO2NvbnN0IG89KGUsdD0wKT0+e2xldCBhLG4scj0hMTtjb25zdCBvPWFzeW5jIG49Pntjb25zdCBpPWF3YWl0IGUoLi4ubik7aWYocil7YXdhaXQgbmV3IFByb21pc2UoKGU9PnNldFRpbWVvdXQoZSx0KSkpO2NvbnN0IGU9YTtyZXR1cm4gYT12b2lkIDAscj0hMSxvKGUpfXJldHVybiBpfTtyZXR1cm4oLi4uZSk9PihuPyhyPSEwLGE9ZSk6bj1vKGUpLmNhdGNoKChlPT57dGhyb3cgY29uc29sZS5lcnJvcihcIm1ha2VEZWJvdW5jZWRGdW5jXCIsZSksZX0pKS5maW5hbGx5KCgoKT0+e249dm9pZCAwfSkpLG4pfTt2YXIgaTshZnVuY3Rpb24oZSl7ZS5Ub3A9XCJ0b3BcIixlLkJlbG93PVwiYmVsb3dcIn0oaXx8KGk9e30pKTtjb25zdCBzPWFzeW5jKGUsdCk9Pnt0cnl7cmV0dXJuIGU/YXdhaXQgZS5nZXRCb3VuZHMoKTp0fWNhdGNoKGUpe3JldHVybiBjb25zb2xlLndhcm4oXCJnZXRQYXJlbnRXaW5kb3dCb3VuZHMgLSBGYWlsZWQgdG8gZ2V0IHBhcmVudCB3aW5kb3cgYm91bmRzXCIsZSksdH19LGM9YXN5bmMgZT0+e3RyeXtyZXR1cm4hIWUmJlwibWF4aW1pemVkXCI9PT1hd2FpdCBlLmdldFN0YXRlKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUud2FybihcInBhcmVudFdpbmRvd01heGltaXplZCAtIEZhaWxlZCB0byBnZXQgcGFyZW50IHdpbmRvdyBzdGF0ZVwiLGUpLCExfX07bygoYXN5bmMgZnVuY3Rpb24oZSx0LGEsbixvKXtjb25zdCBsPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZD1hd2FpdCBhc3luYyBmdW5jdGlvbihlLHQsYSxuLG8sbCl7Y29uc3QgZD0hIWUmJigwLHIuSXEpKGUpLHU9YXdhaXQgcyhkLGwpO2lmKG49PT1pLkJlbG93KXtpZighZHx8YXdhaXQgYyhkKSl7Y29uc3QgZT1kPyhhd2FpdCgwLHIudXIpKHUpKS5hdmFpbGFibGVSZWN0Oihhd2FpdCBmaW4uU3lzdGVtLmdldE1vbml0b3JJbmZvKCkpLnByaW1hcnlNb25pdG9yLmF2YWlsYWJsZVJlY3Q7cmV0dXJue2xlZnQ6KDAsci5WMSkoZSkubGVmdC10LzIsdG9wOm8/ZS5ib3R0b20tMTI4OmUuYm90dG9tKzEyLHdpZHRoOnQsaGVpZ2h0OmF9fXJldHVybntsZWZ0OigwLHIuVjEpKHUpLmxlZnQtdC8yLHRvcDpvP3UuYm90dG9tLTEyODp1LmJvdHRvbSsxMix3aWR0aDp0LGhlaWdodDphfX1pZighZHx8YXdhaXQgYyhkKSl7Y29uc3QgZT1kPyhhd2FpdCgwLHIudXIpKHUpKS5hdmFpbGFibGVSZWN0Oihhd2FpdCBmaW4uU3lzdGVtLmdldE1vbml0b3JJbmZvKCkpLnByaW1hcnlNb25pdG9yLmF2YWlsYWJsZVJlY3Q7cmV0dXJue2xlZnQ6KDAsci5WMSkoZSkubGVmdC10LzIsdG9wOmUudG9wKzIwLHdpZHRoOnQsaGVpZ2h0OmF9fXJldHVybntsZWZ0OigwLHIuVjEpKHUpLmxlZnQtdC8yLHRvcDp1LnRvcCsyMCx3aWR0aDp0LGhlaWdodDphfX0oZSxsLndpZHRoLGwuaGVpZ2h0LGEsbixvKTtpZigwPT09ZC53aWR0aHx8MD09PWQuaGVpZ2h0KXJldHVybjtjb25zdCB1PSgwLHIuVHYpKCk7YXdhaXQgdS5zZXRCb3VuZHMoZCksYXdhaXQgdS5zaG93KCk7Y29uc3QgaD1zZXRUaW1lb3V0KCgoKT0+dS5jbG9zZSgpKSxuPzVlMzozZTMpLGc9KCk9PntjbGVhclRpbWVvdXQoaCksdS5jbG9zZSgpfTtpZihlKXtjb25zdCB0PSgwLHIuSXEpKGUpO3Qub24oXCJib3VuZHMtY2hhbmdpbmdcIiwoKCk9PmcoKSkpLHQub24oXCJibHVycmVkXCIsKCgpPT5nKCkpKSx0Lm9uKFwibWF4aW1pemVkXCIsKCgpPT5nKCkpKSx0Lm9uKFwibWluaW1pemVkXCIsKCgpPT5nKCkpKSx0Lm9uKFwicmVzdG9yZWRcIiwoKCk9PmcoKSkpfX0pLDEwKTthKDI3NyksYSg5NTcpO3ZhciBsPWEoNDM4KTthKDk0MCk7cmVxdWlyZShcInJlYWN0LWkxOG5leHRcIik7Y29uc3QgZD1yZXF1aXJlKFwiaTE4bmV4dFwiKTthLm4oZCkoKS50O2EoNjc4KSxhKDMyNik7YSg3OSk7dmFyIHU9YSgzNjcpO25ldyBjbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMucXVldWU9W10sdGhpcy5sb2NrZWQ9ITF9bG9jaygpe3JldHVybiBuZXcgUHJvbWlzZSgoZT0+e3RoaXMubG9ja2VkP3RoaXMucXVldWUucHVzaChlKToodGhpcy5sb2NrZWQ9ITAsZSgpKX0pKX11bmxvY2soKXtpZih0aGlzLnF1ZXVlLmxlbmd0aD4wKXtjb25zdCBlPXRoaXMucXVldWUuc2hpZnQoKTtlJiZlKCl9ZWxzZSB0aGlzLmxvY2tlZD0hMX19O25ldyBNYXA7Y29uc3QgaD0oKGUsdCk9Pntjb25zdCBhPWU7cmV0dXJuIGEud29ya3NwYWNlUGxhdGZvcm18fChhLndvcmtzcGFjZVBsYXRmb3JtPXt9KSxhLndvcmtzcGFjZVBsYXRmb3JtLl9pbnRlcm5hbERlZmVyU2hvd09wdGlvbnM9e3NldEFzRm9yZWdyb3VuZDohIXQsZGVmZXJTaG93RW5hYmxlZDohMCxhdXRvU2hvdzphLndvcmtzcGFjZVBsYXRmb3JtPy5faW50ZXJuYWxBdXRvU2hvd3x8YS53b3Jrc3BhY2VQbGF0Zm9ybT8uX2ludGVybmFsRGVmZXJTaG93T3B0aW9ucz8uYXV0b1Nob3d8fHZvaWQgMD09PWEuYXV0b1Nob3d8fGEuYXV0b1Nob3d9LGEuYXV0b1Nob3c9ITEsYX0pKHthbHdheXNPblRvcDohMCxhdXRvU2hvdzohMSxmcmFtZTohMSxyZXNpemFibGU6ITEsc2hvd1Rhc2tiYXJJY29uOiExfSk7IWZ1bmN0aW9uKGU9aCl7Y29uc3QgdD1uZXcgTWFwfSgpO3ZhciBnPWEoNTIyKSxwPWEoMTg5KTthKDUyMyk7ZnVuY3Rpb24gZihlLHQpe3JldHVybiBhc3luYyhhLC4uLm4pPT57ZS5oYXMoYSkmJmUuZ2V0KGEpLmZvckVhY2goKGU9PmUoLi4ubikpKSx0JiZhd2FpdCB0KHtldmVudDphLHBheWxvYWQ6bn0pfX1mdW5jdGlvbiBtKGUsdCl7cmV0dXJuIHQmJnQoKHQ9Pntjb25zdHtldmVudDphLHBheWxvYWQ6bn09dDtlLmhhcyhhKSYmZS5nZXQoYSkuZm9yRWFjaCgoZT0+ZSguLi5uKSkpfSkpLCh0LGEpPT57ZS5oYXModCl8fGUuc2V0KHQsbmV3IFNldCksZS5nZXQodCkuYWRkKGEpfX1mdW5jdGlvbiB3KGUpe3JldHVybih0LGEpPT57ZS5oYXModCl8fGUuc2V0KHQsbmV3IFNldCk7Y29uc3Qgbj1lLmdldCh0KSxyPSguLi5lKT0+e2EoLi4uZSksbi5kZWxldGUocil9O24uYWRkKHIpfX1mdW5jdGlvbiB5KGUpe3JldHVybih0LGEpPT57ZS5oYXModCkmJmUuZ2V0KHQpLmRlbGV0ZShhKX19ci5RLkJyb3dzZXJNZW51OyhmdW5jdGlvbihlKXtjb25zdCB0PW5ldyBNYXA7Zih0LCh0PT5uLmNJJiZmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5wdWJsaXNoKGUsdCkpKSxtKHQsKHQ9Pm4uY0kmJmZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLnN1YnNjcmliZSh7dXVpZDpmaW4ubWUudXVpZH0sZSx0KSkpLHkodCksdyh0KX0pKFwid2luZG93Lm1lbnVcIiksbygoKCk9PigwLGwudjEpKCkuZ2V0Q2hpbGRXaW5kb3dzKCkpLDUwMCk7bmV3IE1hcDthKDMxNyk7dmFyIGI9YSgyMzYpO2EubihiKSgpKChhc3luYygpPT57Y29uc3QgZT1hd2FpdCBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKS5BcHBsaWNhdGlvbi5nZXRDaGlsZFdpbmRvd3MoKTtsZXQgdCxhPSExO2Zvcihjb25zdCBuIG9mIGUpaWYobi5pZGVudGl0eS5uYW1lPT09ci5RLkJyb3dzZXJNZW51fHxuLmlkZW50aXR5Lm5hbWU9PT1yLlEuQnJvd3NlclNhdmVNZW51P3Q9bjphd2FpdCgwLHIuaGIpKG4uaWRlbnRpdHkpJiYoYT0hMCksYSlicmVhazshYSYmdCYmdC5jbG9zZSgpfSksMTAwLHtsZWFkaW5nOiExLHRyYWlsaW5nOiEwfSk7dmFyIGssUzshZnVuY3Rpb24oZSl7ZS5TYXZlPVwiU2F2ZVwiLGUuU2F2ZUFzPVwiU2F2ZUFzXCJ9KGt8fChrPXt9KSksZnVuY3Rpb24oZSl7ZS5HbG9iYWxNZW51PVwiZ2xvYmFsLW1lbnVcIixlLkNvbnRleHRNZW51PVwiY29udGV4dC1tZW51XCIsZS5SZW5hbWVTdXBlcnRhYj1cInJlbmFtZS1zdXBlcnRhYlwiLGUuQWRkRWRpdEJvb2ttYXJrPVwiYWRkLWVkaXQtYm9va21hcmtcIixlLkRyb3Bkb3duTWVudT1cImRyb3Bkb3duLW1lbnVcIn0oU3x8KFM9e30pKTthKDg2Mik7Y29uc3Qgdj1yZXF1aXJlKFwiaWRiLWtleXZhbFwiKSxQPShlLHQpPT4oMCx2LmNyZWF0ZVN0b3JlKShlK1wiLVwiK2Zpbi5tZS51dWlkLHQpLEM9KGUsdCk9Pntjb25zdCBhPVAoZSx0KTtyZXR1cm4oYXN5bmMoZSx0LGEpPT57Y29uc3Qgbj1wLmdldEl0ZW0oZy5BLkhhc01vdmVkU3RvcmUpLHI9bj9KU09OLnBhcnNlKG4pOnt9O2lmKHImJnJbYV0pcmV0dXJuO3JbYV09ITAscC5zZXRJdGVtKGcuQS5IYXNNb3ZlZFN0b3JlLEpTT04uc3RyaW5naWZ5KHIpKTtjb25zdCBvPWF3YWl0KDAsdi5lbnRyaWVzKShlKTthd2FpdCgwLHYuc2V0TWFueSkobyx0KX0pKCgwLHYuY3JlYXRlU3RvcmUpKGUsdCksYSxlKSxhfTtuLkFUJiZuLmNJJiZDKFwib3BlbmZpbi1ob21lLXBhZ2VzXCIsXCJwYWdlc1wiKTtuLkFUJiZuLmNJJiZQKFwib3BlbmZpbi1lbnRlcnByaXNlLXRhYi1oaXN0b3J5XCIsXCJyZW1vdmVkLXRhYi1zdGFja1wiKSxuLkFUJiZuLmNJJiZQKFwib3BlbmZpbi1lbnRlcnByaXNlLXNpdGUtaGlzdG9yeVwiLFwidmlzaXRlZC1zaXRlc1wiKTt2YXIgeDshZnVuY3Rpb24oZSl7ZS5MYWJlbD1cIm5vcm1hbFwiLGUuU2VwYXJhdG9yPVwic2VwYXJhdG9yXCIsZS5TdWJtZW51PVwic3VibWVudVwiLGUuQ2hlY2tib3g9XCJjaGVja2JveFwifSh4fHwoeD17fSkpO3guU2VwYXJhdG9yO2EoMjU3KTt2YXIgQTshZnVuY3Rpb24oZSl7ZVtlLlRvcExlZnQ9MF09XCJUb3BMZWZ0XCIsZVtlLlRvcFJpZ2h0PTFdPVwiVG9wUmlnaHRcIixlW2UuQm90dG9tTGVmdD0yXT1cIkJvdHRvbUxlZnRcIixlW2UuQm90dG9tUmlnaHQ9M109XCJCb3R0b21SaWdodFwiLGVbZS5DZW50ZXI9NF09XCJDZW50ZXJcIn0oQXx8KEE9e30pKTt2YXIgRj1hKDEwMik7KDAsRi5BKShgJHtcInVuZGVmaW5lZFwiIT10eXBlb2YgZmluJiZmaW4/Lm1lLmlkZW50aXR5LnV1aWR9LWVudGVycHJpc2UtZG9ja2ApLG4uQVQmJm4uY0kmJlAoXCJkb2NrLXByb3ZpZGVyLWNvbmZpZ3NcIixcImRvY2stcHJvdmlkZXItY29uZmlnc1wiKTthKDM5Nik7bi5BVCYmbi5jSSYmQyhcIm9wZW5maW4td29ya3NwYWNlLXBsYXRmb3JtLXdvcmtzcGFjZXNcIixcIndvcmtzcGFjZXNcIik7YSgyNTApO3IuJHAudXVpZCxyLlEuQnJvd3NlckFkZHJlc3NTZWFyY2hQcmVmaXg7YSg0MTMpLGEoMTc5KX0sNDEzOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIn0sNjc1OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7cVQ6KCk9Pm8sdmM6KCk9Pmd9KTt2YXIgbixyLG8saSxzLGMsbCxkLHUsaCxnO2EoMTc5KSxhKDI1MCk7IWZ1bmN0aW9uKGUpe2UuVXJsQ2hhbmdlPVwiVVJMX0NIQU5HRVwiLGUuVmlld0FkZGVkPVwiVklFV19BRERFRFwiLGUuVmlld1JlbW92ZWQ9XCJWSUVXX1JFTU9WRURcIixlLlBhZ2VDb250ZXh0QWRkZWQ9XCJQQUdFX0NPTlRFWFRfQURERURcIixlLlBhZ2VDb250ZXh0UmVtb3ZlZD1cIlBBR0VfQ09OVEVYVF9SRU1PVkVEXCJ9KG58fChuPXt9KSksZnVuY3Rpb24oZSl7ZS5OZXdXaW5kb3c9XCJOZXdXaW5kb3dcIixlLk5ld1BhZ2U9XCJOZXdQYWdlXCIsZS5TYXZlUGFnZT1cIlNhdmVQYWdlXCIsZS5TYXZlUGFnZUFzPVwiU2F2ZVBhZ2VBc1wiLGUuUHJpbnQ9XCJQcmludFwiLGUuUHJpbnRBbGw9XCJQcmludEFsbFwiLGUuUHJpbnRTY3JlZW49XCJQcmludFNjcmVlblwiLGUuQ2xvc2VXaW5kb3c9XCJDbG9zZVdpbmRvd1wiLGUuUmVzdG9yZUNoYW5nZXM9XCJSZXN0b3JlQ2hhbmdlc1wiLGUuU2F2ZVdvcmtzcGFjZT1cIlNhdmVXb3Jrc3BhY2VcIixlLlNhdmVXb3Jrc3BhY2VBcz1cIlNhdmVXb3Jrc3BhY2VBc1wiLGUuUmVuYW1lV29ya3NwYWNlPVwiUmVuYW1lV29ya3NwYWNlXCIsZS5Td2l0Y2hXb3Jrc3BhY2U9XCJTd2l0Y2hXb3Jrc3BhY2VcIixlLkRlbGV0ZVdvcmtzcGFjZT1cIkRlbGV0ZVdvcmtzcGFjZVwiLGUuRG93bmxvYWRzPVwiRG93bmxvYWRzXCIsZS5PcGVuU3RvcmVmcm9udD1cIk9wZW5TdG9yZWZyb250XCIsZS5BcHBlYXJhbmNlPVwiQXBwZWFyYW5jZVwiLGUuUXVpdD1cIlF1aXRcIixlLkN1c3RvbT1cIkN1c3RvbVwifShyfHwocj17fSkpLGZ1bmN0aW9uKGUpe2UuTGlnaHQ9XCJsaWdodFwiLGUuRGFyaz1cImRhcmtcIixlLlN5c3RlbT1cInN5c3RlbVwifShvfHwobz17fSkpLGZ1bmN0aW9uKGUpe2UuQ2xvc2U9XCJDbG9zZVwiLGUuRHVwbGljYXRlPVwiRHVwbGljYXRlXCIsZS5SZW5hbWU9XCJSZW5hbWVcIixlLlNhdmU9XCJTYXZlXCIsZS5TYXZlQXM9XCJTYXZlIEFzXCIsZS5OZXdQYWdlPVwiTmV3IFBhZ2VcIixlLkRlbGV0ZVBhZ2U9XCJEZWxldGUgUGFnZVwiLGUuU2F2ZVdvcmtzcGFjZUFzPVwiU2F2ZVdvcmtzcGFjZUFzXCIsZS5SZWZyZXNoPVwiUmVmcmVzaFwiLGUuQ2xvc2VPdGhlcnM9XCJDbG9zZSBvdGhlcnNcIixlLkRlbGV0ZT1cIkRlbGV0ZVwiLGUuUHJpbnQ9XCJQcmludFwiLGUuUHJpbnRBbGw9XCJQcmludEFsbFwiLGUuUHJpbnRTY3JlZW49XCJQcmludFNjcmVlblwiLGUuQ3VzdG9tPVwiQ3VzdG9tXCJ9KGl8fChpPXt9KSksZnVuY3Rpb24oZSl7ZS5Mb2NrPVwiTG9ja1wiLGUuU2hvd0hpZGVUYWJzPVwiU2hvd0hpZGVUYWJzXCIsZS5BZGRUb0NoYW5lbD1cIkFkZFRvQ2hhbm5lbFwiLGUuUHJpbnQ9XCJQcmludFwiLGUuUGluPVwiUGluXCJ9KHN8fChzPXt9KSksZnVuY3Rpb24oZSl7ZS5FZGl0TmFtZT1cIkVkaXQgTmFtZVwiLGUuTW92ZT1cIk1vdmVcIixlLkRlbGV0ZT1cIkRlbGV0ZVwifShjfHwoYz17fSkpLGZ1bmN0aW9uKGUpe2UuTmV3Vmlldz1cIk5ld1ZpZXdcIixlLkR1cGxpY2F0ZVZpZXdzPVwiRHVwbGljYXRlVmlld1wiLGUuT3BlbldpdGhEZWZhdWx0QnJvd3Nlcj1cIk9wZW5XaXRoRGVmYXVsdEJyb3dzZXJcIixlLlJlbG9hZFZpZXdzPVwiUmVsb2FkVGFiXCIsZS5DbG9zZVZpZXdzPVwiQ2xvc2VUYWJcIixlLkFkZFRvQ2hhbm5lbD1cIkFkZFRvQ2hhbm5lbFwiLGUuUmVtb3ZlRnJvbUNoYW5uZWw9XCJSZW1vdmVGcm9tQ2hhbm5lbFwiLGUuQmFjaz1cIkJhY2tcIixlLkZvcndhcmQ9XCJGb3J3YXJkXCIsZS5QcmludD1cIlByaW50XCIsZS5QcmludEFsbD1cIlByaW50QWxsXCIsZS5QcmludFNjcmVlbj1cIlByaW50U2NyZWVuXCIsZS5DdXN0b209XCJDdXN0b21cIn0obHx8KGw9e30pKSxmdW5jdGlvbihlKXtlLlNob3dIaWRlVGFicz1cIlNob3dIaWRlVGFic1wiLGUuQ29sb3JMaW5raW5nPVwiQ29sb3JMaW5raW5nXCIsZS5QcmVzZXRMYXlvdXRzPVwiUHJlc2V0TGF5b3V0c1wiLGUuTG9ja1VubG9ja1BhZ2U9XCJMb2NrVW5sb2NrUGFnZVwiLGUuU2F2ZU1lbnU9XCJTYXZlTWVudVwiLGUuU2F2ZVBhZ2U9XCJTYXZlUGFnZVwiLGUuTWluaW1pc2U9XCJNaW5pbWlzZVwiLGUuTWF4aW1pc2U9XCJNYXhpbWlzZVwiLGUuQ2xvc2U9XCJDbG9zZVwiLGUuQ3VzdG9tPVwiQ3VzdG9tXCJ9KGR8fChkPXt9KSksZnVuY3Rpb24oZSl7ZS5TYXZlUGFnZT1cIlNhdmVQYWdlXCIsZS5TYXZlV29ya3NwYWNlPVwiU2F2ZVdvcmtzcGFjZVwiLGUuU2F2ZVBhZ2VBcz1cIlNhdmVQYWdlQXNcIixlLlNhdmVXb3Jrc3BhY2VBcz1cIlNhdmVXb3Jrc3BhY2VBc1wiLGUuQ3VzdG9tPVwiQ3VzdG9tXCJ9KHV8fCh1PXt9KSksZnVuY3Rpb24oZSl7ZS5Ccm93c2VyPVwiYnJvd3NlclwiLGUuUGxhdGZvcm09XCJwbGF0Zm9ybVwifShofHwoaD17fSkpLGZ1bmN0aW9uKGUpe2UuQ3VzdG9tQnV0dG9uPVwiQ3VzdG9tQnV0dG9uXCIsZS5TdG9yZUN1c3RvbUJ1dHRvbj1cIlN0b3JlQ3VzdG9tQnV0dG9uXCIsZS5DdXN0b21Ecm9wZG93bkl0ZW09XCJDdXN0b21Ecm9wZG93bkl0ZW1cIixlLkdsb2JhbENvbnRleHRNZW51PVwiR2xvYmFsQ29udGV4dE1lbnVcIixlLlZpZXdUYWJDb250ZXh0TWVudT1cIlZpZXdUYWJDb250ZXh0TWVudVwiLGUuUGFnZVRhYkNvbnRleHRNZW51PVwiUGFnZVRhYkNvbnRleHRNZW51XCIsZS5TYXZlQnV0dG9uQ29udGV4dE1lbnU9XCJTYXZlQnV0dG9uQ29udGV4dE1lbnVcIixlLkFQST1cIkFQSVwifShnfHwoZz17fSkpO3ZhciBwOyFmdW5jdGlvbihlKXtlLlNBVkVfUEFHRT1cIlNBVkVfUEFHRVwiLGUuU0FWRV9XT1JLU1BBQ0U9XCJTQVZFX1dPUktTUEFDRVwiLGUuU0FWRV9QQUdFX0FTPVwiU0FWRV9QQUdFX0FTXCIsZS5TQVZFX1dPUktTUEFDRV9BUz1cIlNBVkVfV09SS1NQQUNFX0FTXCIsZS5SRU5BTUVfUEFHRT1cIlJFTkFNRV9QQUdFXCIsZS5SRU5BTUVfV09SS1NQQUNFPVwiUkVOQU1FX1dPUktTUEFDRVwifShwfHwocD17fSkpfSwxMjk6KCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZSx0LGE7IWZ1bmN0aW9uKGUpe2UuRmV0Y2hpbmc9XCJmZXRjaGluZ1wiLGUuRmV0Y2hlZD1cImZldGNoZWRcIixlLkNvbXBsZXRlPVwiY29tcGxldGVcIn0oZXx8KGU9e30pKSxmdW5jdGlvbihlKXtlLlVzZXJBY3Rpb249XCJ1c2VyLWFjdGlvblwiLGUuRm9jdXNDaGFuZ2U9XCJmb2N1cy1jaGFuZ2VcIixlLlJlbG9hZD1cInJlbG9hZFwifSh0fHwodD17fSkpLGZ1bmN0aW9uKGUpe2UuQWN0aXZlPVwiYWN0aXZlXCIsZS5EZWZhdWx0PVwiZGVmYXVsdFwifShhfHwoYT17fSkpfSw2MDA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuOyFmdW5jdGlvbihlKXtlLkFjdGlvbkJ1dHRvbj1cIkFjdGlvbkJ1dHRvblwiLGUuRHJvcGRvd25CdXR0b249XCJEcm9wZG93bkJ1dHRvblwifShufHwobj17fSkpfSw4NzI6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuLHIsbzshZnVuY3Rpb24oZSl7ZS5TdWdnZXN0aW9uPVwic3VnZ2VzdGlvblwifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuQ29udGFjdD1cIkNvbnRhY3RcIixlLkN1c3RvbT1cIkN1c3RvbVwiLGUuTGlzdD1cIkxpc3RcIixlLlBsYWluPVwiUGxhaW5cIixlLlNpbXBsZVRleHQ9XCJTaW1wbGVUZXh0XCIsZS5Mb2FkaW5nPVwiTG9hZGluZ1wiLGUuRXJyb3I9XCJFcnJvclwifShyfHwocj17fSkpLGZ1bmN0aW9uKGUpe2UuTXVsdGlTZWxlY3Q9XCJNdWx0aVNlbGVjdFwifShvfHwobz17fSkpfSwxNzk6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EoMTI5KSxhKDg3MiksYSg3MTApLGEoMTg0KSxhKDYwMCl9LDcxMDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scjshZnVuY3Rpb24oZSl7ZS5TbmFwc2hvdD1cInNuYXBzaG90XCIsZS5NYW5pZmVzdD1cIm1hbmlmZXN0XCIsZS5WaWV3PVwidmlld1wiLGUuRXh0ZXJuYWw9XCJleHRlcm5hbFwifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuTGFuZGluZ1BhZ2U9XCJsYW5kaW5nUGFnZVwiLGUuQXBwR3JpZD1cImFwcEdyaWRcIn0ocnx8KHI9e30pKX0sMTg0OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjshZnVuY3Rpb24oZSl7ZS5QcmltYXJ5PVwicHJpbWFyeVwiLGUuU2Vjb25kYXJ5PVwic2Vjb25kYXJ5XCIsZS5UZXh0T25seT1cInRleHRPbmx5XCJ9KG58fChuPXt9KSl9LDY3ODooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0JHOigpPT5zfSk7dmFyIG49YSg5NDApLHI9YSg4NjIpLG89YSgzMzMpO2EoNjk1KTtjb25zdCBpPWFzeW5jIGU9Pih7Li4uZSxsYXlvdXREZXRhaWxzOnttYWNoaW5lSWQ6YXdhaXQoMCxyLkQxKSgpLG1hY2hpbmVOYW1lOigwLHIuZkMpKCl9fSkscz1hc3luYyBlPT57Y29uc3QgdD1hd2FpdChhc3luYyhlLHQpPT4oe3BhZ2VJZDooMCxvLk4pKCksdGl0bGU6ZSxsYXlvdXQ6YXdhaXQgaSh0KSxpc1JlYWRPbmx5OiExfSkpKGUudGl0bGUsKDAsbi54UCkoZS5sYXlvdXQpKTtyZXR1cm4gZS5wYW5lbHMmJih0LnBhbmVscz1lLnBhbmVscy5tYXAoKGU9Pih7Li4uZSx2aWV3T3B0aW9uczooMCxuLmZoKShlLnZpZXdPcHRpb25zKX0pKSkpLHsuLi5lLC4uLnR9fX0sMjUwOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjshZnVuY3Rpb24oZSl7ZS5MZWZ0PVwiTGVmdFwiLGUuUmlnaHQ9XCJSaWdodFwiLGUuVG9wPVwiVG9wXCIsZS5Cb3R0b209XCJCb3R0b21cIn0obnx8KG49e30pKX0sMzI2OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7SGM6KCk9PmQsYVE6KCk9PmgscDQ6KCk9Pml9KTt2YXIgbj1hKDEwMik7YSg3MCk7Y29uc3Qgcj0oZSx0KT0+dD9gJHt0fS0ke2UudXVpZH0tJHtlLm5hbWV9YDpgX19icm93c2VyX3dpbmRvd19fLSR7ZS51dWlkfS0ke2UubmFtZX1gLG89bmV3IE1hcCxpPShlLHQpPT57Y29uc3QgYT1yKGUsdCk7cmV0dXJuIGk9YSxvLmhhcyhpKXx8by5zZXQoaSwoMCxuLkEpKGkpKSxvLmdldChpKSgpO3ZhciBpfTt2YXIgcyxjLGwsZCx1OyFmdW5jdGlvbihlKXtlLkNsb3NlQnJvd3NlcldpbmRvdz1cImNsb3NlLWJyb3dzZXItd2luZG93XCIsZS5RdWl0UGxhdGZvcm09XCJxdWl0LXBsYXRmb3JtXCIsZS5DbG9zZVBhZ2U9XCJjbG9zZS1wYWdlXCIsZS5BZGRUb0NoYW5uZWw9XCJhZGQtdG8tY2hhbm5lbFwiLGUuUmVtb3ZlRnJvbUNoYW5uZWw9XCJyZW1vdmUtZnJvbS1jaGFubmVsXCIsZS5PcGVuU2F2ZU1vZGFsSW50ZXJuYWw9XCJvcGVuLXNhdmUtbW9kYWwtaW50ZXJuYWxcIixlLkR1cGxpY2F0ZVBhZ2U9XCJkdXBsaWNhdGUtcGFnZVwiLGUuU2V0U2VsZWN0ZWRTY2hlbWU9XCJzZXQtc2VsZWN0ZWQtc2NoZW1lXCIsZS5TaG93QnJvd3NlckluZGljYXRvcj1cInNob3ctYnJvd3Nlci1pbmRpY2F0b3JcIixlLlNldFNlbGVjdGVkTGFuZ3VhZ2U9XCJzZXQtc2VsZWN0ZWQtbGFuZ3VhZ2VcIixlLlJlZnJlc2hCb29rbWFya3NJbnRlcm5hbD1cInJlZnJlc2gtYm9va21hcmtzXCIsZS5HZXRMYXlvdXRzV2l0aFNlbGVjdGVkVmlld3NJbnRlcm5hbD1cImdldC1sYXlvdXRzLXdpdGgtc2VsZWN0ZWQtdmlld3NcIn0oc3x8KHM9e30pKSxmdW5jdGlvbihlKXtlLkdldFBhZ2VzPVwiZ2V0LXBhZ2VzXCIsZS5HZXRBY3RpdmVQYWdlRm9yV2luZG93PVwiZ2V0LWFjdGl2ZS1wYWdlLWZvci13aW5kb3dcIixlLkF0dGFjaFBhZ2VzVG9XaW5kb3c9XCJhdHRhY2gtcGFnZXMtdG8td2luZG93XCIsZS5EZXRhY2hQYWdlc0Zyb21XaW5kb3c9XCJkZXRhY2gtcGFnZXMtZnJvbS13aW5kb3dcIixlLlNldEFjdGl2ZVBhZ2VGb3JXaW5kb3c9XCJzZXQtYWN0aXZlLXBhZ2UtZm9yLXdpbmRvd1wiLGUuUmVuYW1lUGFnZT1cInJlbmFtZS1wYWdlXCIsZS5SZW9yZGVyUGFnZXNGb3JXaW5kb3c9XCJyZW9yZGVyLXBhZ2VzLWZvci13aW5kb3dcIixlLlVwZGF0ZVBhZ2VGb3JXaW5kb3c9XCJ1cGRhdGUtcGFnZS1mb3Itd2luZG93XCIsZS5VcGRhdGVQYWdlc1dpbmRvd09wdGlvbnM9XCJ1cGRhdGUtcGFnZXMtd2luZG93LW9wdGlvbnNcIixlLklzRGV0YWNoaW5nUGFnZXM9XCJpcy1kZXRhY2hpbmctcGFnZXNcIixlLklzQWN0aXZlUGFnZUNoYW5naW5nPVwiaXMtYWN0aXZlLXBhZ2UtY2hhbmdpbmdcIn0oY3x8KGM9e30pKSxmdW5jdGlvbihlKXtlLkdldEFwcHM9XCJnZXQtYXBwc1wiLGUuR2V0Q3VyYXRlZENvbnRlbnQ9XCJnZXQtY3VyYXRlZC1jb250ZW50XCIsZS5HZXRSZWNlbnRseVZpc2l0ZWQ9XCJnZXQtcmVjZW50bHktdmlzaXRlZFwiLGUuR2V0U2VhcmNoUHJvdmlkZXJzPVwiZ2V0LXNlYXJjaC1wcm92aWRlcnNcIn0obHx8KGw9e30pKSxmdW5jdGlvbihlKXtlLkNyZWF0ZUJvb2ttYXJrTm9kZT1cImNyZWF0ZS1ib29rbWFyay1ub2RlXCIsZS5HZXRCb29rbWFya05vZGU9XCJnZXQtYm9va21hcmstbm9kZVwiLGUuU2VhcmNoQm9va21hcmtOb2Rlcz1cInNlYXJjaC1ib29rbWFyay1ub2Rlc1wiLGUuVXBkYXRlQm9va21hcmtOb2RlPVwidXBkYXRlLWJvb2ttYXJrLW5vZGVcIixlLkRlbGV0ZUJvb2ttYXJrTm9kZT1cImRlbGV0ZS1ib29rbWFyay1ub2RlXCJ9KGR8fChkPXt9KSksZnVuY3Rpb24oZSl7ZS5VcGRhdGVGYXZvcml0ZUVudHJpZXM9XCJ1cGRhdGUtZmF2b3JpdGUtZW50cmllc1wiLGUuVXBkYXRlQ29udGVudE1lbnU9XCJ1cGRhdGUtY29udGVudC1tZW51XCIsZS5OYXZpZ2F0ZUNvbnRlbnRNZW51PVwibmF2aWdhdGUtY29udGVudC1tZW51XCJ9KHV8fCh1PXt9KSk7Y29uc3QgaD17Li4ucywuLi5jLC4uLnV9fSw3OTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47YS5kKHQse0taOigpPT5vLE46KCk9PmksT0Y6KCk9Pm4sYlc6KCk9PnN9KSxmdW5jdGlvbihlKXtlLkxhdW5jaEFwcD1cImxhdW5jaEFwcFwiLGUuU2F2ZVBhZ2U9XCJzYXZlUGFnZVwiLGUuR2V0U2F2ZWRQYWdlPVwiZ2V0U2F2ZWRQYWdlXCIsZS5DcmVhdGVTYXZlZFBhZ2U9XCJjcmVhdGVTYXZlZFBhZ2VcIixlLlVwZGF0ZVNhdmVkUGFnZT1cInVwZGF0ZVNhdmVkUGFnZVwiLGUuRGVsZXRlU2F2ZWRQYWdlPVwiZGVsZXRlU2F2ZWRQYWdlXCIsZS5HZXRTYXZlZFBhZ2VzPVwiZ2V0U2F2ZWRQYWdlc1wiLGUuQ3JlYXRlU2F2ZWRQYWdlSW50ZXJuYWw9XCJjcmVhdGVTYXZlZFBhZ2VJbnRlcm5hbFwiLGUuVXBkYXRlU2F2ZWRQYWdlSW50ZXJuYWw9XCJ1cGRhdGVTYXZlZFBhZ2VJbnRlcm5hbFwiLGUuRGVsZXRlU2F2ZWRQYWdlSW50ZXJuYWw9XCJkZWxldGVTYXZlZFBhZ2VJbnRlcm5hbFwiLGUuVXBkYXRlUGFnZUZvcldpbmRvdz1cInVwZGF0ZVBhZ2VGb3JXaW5kb3dcIixlLkF0dGFjaFBhZ2VzVG9XaW5kb3c9XCJhdHRhY2hQYWdlc1RvV2luZG93XCIsZS5EZXRhY2hQYWdlc0Zyb21XaW5kb3c9XCJkZXRhY2hQYWdlc0Zyb21XaW5kb3dcIixlLlJlb3JkZXJQYWdlc0ZvcldpbmRvdz1cInJlb3JkZXJQYWdlc0ZvcldpbmRvd1wiLGUuU2V0QWN0aXZlUGFnZT1cInNldEFjdGl2ZVBhZ2VcIixlLkFkZFBhZ2U9XCJhZGRQYWdlXCIsZS5BZGREZWZhdWx0UGFnZT1cImFkZERlZmF1bHRQYWdlXCIsZS5HZXRBbGxBdHRhY2hlZFBhZ2VzPVwiZ2V0QWxsQXR0YWNoZWRQYWdlc1wiLGUuR2V0QWN0aXZlUGFnZUlkRm9yV2luZG93PVwiZ2V0QWN0aXZlUGFnZUlkRm9yV2luZG93XCIsZS5HZXRQYWdlc0ZvcldpbmRvdz1cImdldFBhZ2VzRm9yV2luZG93XCIsZS5HZXRQYWdlRm9yV2luZG93PVwiZ2V0UGFnZUZvcldpbmRvd1wiLGUuR2V0U2F2ZWRQYWdlTWV0YWRhdGE9XCJnZXRTYXZlZFBhZ2VNZXRhZGF0YVwiLGUuR2V0VW5pcXVlUGFnZVRpdGxlPVwiZ2V0VW5pcXVlUGFnZVRpdGxlXCIsZS5HZXRMYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3c9XCJnZXRMYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3dcIixlLkdldFRoZW1lcz1cImdldFRoZW1lc1wiLGUuR2V0U2VsZWN0ZWRTY2hlbWU9XCJnZXRTZWxlY3RlZFNjaGVtZVwiLGUuU2V0U2VsZWN0ZWRTY2hlbWU9XCJzZXRTZWxlY3RlZFNjaGVtZVwiLGUuT3Blbkdsb2JhbENvbnRleHRNZW51SW50ZXJuYWw9XCJvcGVuR2xvYmFsQ29udGV4dE1lbnVJbnRlcm5hbFwiLGUuT3BlblZpZXdUYWJDb250ZXh0TWVudUludGVybmFsPVwib3BlblZpZXdUYWJDb250ZXh0TWVudUludGVybmFsXCIsZS5PcGVuUGFnZVRhYkNvbnRleHRNZW51SW50ZXJuYWw9XCJvcGVuUGFnZVRhYkNvbnRleHRNZW51SW50ZXJuYWxcIixlLk9wZW5TYXZlQnV0dG9uQ29udGV4dE1lbnVJbnRlcm5hbD1cIm9wZW5TYXZlQnV0dG9uQ29udGV4dE1lbnVJbnRlcm5hbFwiLGUuSW52b2tlQ3VzdG9tQWN0aW9uSW50ZXJuYWw9XCJpbnZva2VDdXN0b21BY3Rpb25JbnRlcm5hbFwiLGUuUmVxdWVzdFF1aXRQbGF0Zm9ybURpYWxvZ0ludGVybmFsPVwicmVxdWVzdFF1aXRQbGF0Zm9ybURpYWxvZ0ludGVybmFsXCIsZS5HZXRTYXZlZFdvcmtzcGFjZT1cImdldFNhdmVkV29ya3NwYWNlXCIsZS5DcmVhdGVTYXZlZFdvcmtzcGFjZT1cImNyZWF0ZVNhdmVkV29ya3NwYWNlXCIsZS5VcGRhdGVTYXZlZFdvcmtzcGFjZT1cInVwZGF0ZVNhdmVkV29ya3NwYWNlXCIsZS5EZWxldGVTYXZlZFdvcmtzcGFjZT1cImRlbGV0ZVNhdmVkV29ya3NwYWNlXCIsZS5HZXRTYXZlZFdvcmtzcGFjZXM9XCJnZXRTYXZlZFdvcmtzcGFjZXNcIixlLlNhdmVXb3Jrc3BhY2U9XCJzYXZlV29ya3NwYWNlXCIsZS5HZXRDdXJyZW50V29ya3NwYWNlPVwiZ2V0Q3VycmVudFdvcmtzcGFjZVwiLGUuQXBwbHlXb3Jrc3BhY2U9XCJhcHBseVdvcmtzcGFjZVwiLGUuU2V0QWN0aXZlV29ya3NwYWNlPVwic2V0QWN0aXZlV29ya3NwYWNlXCIsZS5Jc0Jyb3dzZXJJbml0aWFsaXplZD1cImlzQnJvd3NlckluaXRpYWxpemVkXCIsZS5BbmFseXRpY3M9XCJhbmFseXRpY3NJbnRlcm5hbFwiLGUuR2V0TGFuZ3VhZ2U9XCJnZXRMYW5ndWFnZVwiLGUuR2V0TGFuZ3VhZ2VSZXNvdXJjZXNJbnRlcm5hbD1cImdldExhbmd1YWdlUmVzb3VyY2VzSW50ZXJuYWxcIixlLlNldExhbmd1YWdlPVwic2V0TGFuZ3VhZ2VcIixlLkdldERvY2tQcm92aWRlckNvbmZpZz1cImdldERvY2tQcm92aWRlckNvbmZpZ1wiLGUuU2F2ZURvY2tQcm92aWRlckNvbmZpZz1cInNhdmVEb2NrUHJvdmlkZXJDb25maWdcIixlLkhhbmRsZVNhdmVNb2RhbE9uUGFnZUNsb3NlPVwiaGFuZGxlU2F2ZU1vZGFsT25QYWdlQ2xvc2VcIixlLlNob3VsZFBhZ2VDbG9zZT1cInNob3VsZFBhZ2VDbG9zZVwiLGUuU2hvdWxkV2luZG93Q2xvc2U9XCJzaG91bGRXaW5kb3dDbG9zZVwiLGUuQ29weVBhZ2U9XCJjb3B5UGFnZVwiLGUuSGFuZGxlUGFnZUNoYW5nZXM9XCJoYW5kbGVQYWdlQ2hhbmdlc1wiLGUuTWFya1Vuc2F2ZWRQYWdlc0FzU2F2ZWRJbnRlcm5hbD1cIm1hcmtVbnNhdmVkUGFnZXNBc1NhdmVkSW50ZXJuYWxcIixlLlRyYWNrUmVtb3ZlZFRhYkludGVybmFsPVwidHJhY2tSZW1vdmVkVGFiSW50ZXJuYWxcIixlLlJlc3RvcmVSZW1vdmVkVGFiSW50ZXJuYWw9XCJyZXN0b3JlUmVtb3ZlZFRhYkludGVybmFsXCIsZS5UcmFja1Zpc2l0ZWRTaXRlSW50ZXJuYWw9XCJ0cmFja1Zpc2l0ZWRTaXRlSW50ZXJuYWxcIixlLkdldFJlY2VudGx5VmlzaXRlZFNpdGVzSW50ZXJuYWw9XCJnZXRSZWNlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsXCIsZS5HZXRGcmVxdWVudGx5VmlzaXRlZFNpdGVzSW50ZXJuYWw9XCJnZXRGcmVxdWVudGx5VmlzaXRlZFNpdGVzSW50ZXJuYWxcIixlLlNlYXJjaFNpdGVzSW50ZXJuYWw9XCJzZWFyY2hTaXRlc0ludGVybmFsXCIsZS5HZXRTZWFyY2hQcm92aWRlcnNJbnRlcm5hbD1cImdldFNlYXJjaFByb3ZpZGVyc0ludGVybmFsXCIsZS5HZXRDdXJhdGVkQ29udGVudEludGVybmFsPVwiZ2V0Q3VyYXRlZENvbnRlbnRJbnRlcm5hbFwiLGUuSGFuZGxlUmVxdWVzdE5hdmlnYXRpb25JbnRlcm5hbD1cImhhbmRsZVJlcXVlc3ROYXZpZ2F0aW9uSW50ZXJuYWxcIixlLlJlZnJlc2hCb29rbWFya3NJbnRlcm5hbD1cInJlZnJlc2hCb29rbWFya3NJbnRlcm5hbFwiLGUuTGF1bmNoQm9va21hcmtJbnRlcm5hbD1cImxhdW5jaEJvb2ttYXJrSW50ZXJuYWxcIixlLkdldE5vdGlmaWNhdGlvbnNDb25maWc9XCJnZXROb3RpZmljYXRpb25zQ29uZmlnXCIsZS5VcGRhdGVEb2NrRmF2b3JpdGVzSW50ZXJuYWw9XCJ1cGRhdGVEb2NrRmF2b3JpdGVzSW50ZXJuYWxcIixlLlVwZGF0ZUNvbnRlbnRNZW51SW50ZXJuYWw9XCJ1cGRhdGVDb250ZW50TWVudUludGVybmFsXCIsZS5MYXVuY2hEb2NrRW50cnlJbnRlcm5hbD1cImxhdW5jaERvY2tFbnRyeUludGVybmFsXCIsZS5TZXREb2NrRmF2b3JpdGVzT3JkZXJJbnRlcm5hbD1cInNldERvY2tGYXZvcml0ZXNPcmRlckludGVybmFsXCIsZS5OYXZpZ2F0ZUNvbnRlbnRNZW51SW50ZXJuYWw9XCJuYXZpZ2F0ZUNvbnRlbnRNZW51SW50ZXJuYWxcIixlLlNldERvY2tXb3Jrc3BhY2VCdXR0b25zT3JkZXJJbnRlcm5hbD1cInNldERvY2tXb3Jrc3BhY2VCdXR0b25zT3JkZXJJbnRlcm5hbFwiLGUuR2V0RG9ja1dvcmtzcGFjZXNDb250ZXh0TWVudUludGVybmFsPVwiZ2V0RG9ja1dvcmtzcGFjZXNDb250ZXh0TWVudUludGVybmFsXCIsZS5IYW5kbGVEb2NrV29ya3NwYWNlc01lbnVSZXNwb25zZUludGVybmFsPVwiaGFuZGxlRG9ja1dvcmtzcGFjZXNNZW51UmVzcG9uc2VJbnRlcm5hbFwiLGUuUmVtb3ZlRG9ja0Zhdm9yaXRlSW50ZXJuYWw9XCJyZW1vdmVEb2NrRmF2b3JpdGVJbnRlcm5hbFwiLGUuQWRkRG9ja0Zhdm9yaXRlSW50ZXJuYWw9XCJhZGREb2NrRmF2b3JpdGVJbnRlcm5hbFwifShufHwobj17fSkpO2NvbnN0IHI9YXN5bmMgZT0+ZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpLmdldENsaWVudCgpLG89YXN5bmMgZT0+e2NvbnN0IHQ9YXdhaXQgcihlKSxhPVwiVGFyZ2V0IGlzIG5vdCBhIFdvcmtzcGFjZSBQbGF0Zm9ybS4gVGFyZ2V0IG11c3QgY2FsbCBXb3Jrc3BhY2VQbGF0Zm9ybS5pbml0XCI7bGV0IG47dHJ5e249YXdhaXQgdC5kaXNwYXRjaChcImlzV29ya3NwYWNlUGxhdGZvcm1cIil9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKGEpfWlmKFwiYm9vbGVhblwiPT10eXBlb2YgbiYmbilyZXR1cm4gY29uc29sZS53YXJuKFwiWW91IGFyZSB1c2luZyBhbiBvbGRlciB2ZXJzaW9uIG9mIHRoZSB3b3Jrc3BhY2UgcGxhdGZvcm0uIFBsZWFzZSB1cGRhdGUgeW91ciB3b3Jrc3BhY2UgcGxhdGZvcm0uXCIpLG47aWYoXCJvYmplY3RcIj09dHlwZW9mIG4mJm4uaXNXb3Jrc3BhY2VQbGF0Zm9ybSlyZXR1cm4gbjt0aHJvdyBuZXcgRXJyb3IoYSl9LGk9YXN5bmMgZT0+KGF3YWl0IG8oZSkscihlKSkscz1hc3luYyBlPT57Y29uc3QgdD1hd2FpdCBvKGUpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0JiYhMCE9PXQ/LmlzQnJvd3NlckluaXRpYWxpemVkKXRocm93IG5ldyBFcnJvcihcIlRhcmdldCBpcyBub3QgYSBCcm93c2VyLWVuYWJsZWQgV29ya3NwYWNlIFBsYXRmb3JtLlwiKTtyZXR1cm4gcihlKX19LDY5NTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49YSgxMDIpLHI9KGEoNzIzKSxhKDcwKSxhKDkwNSkpOygwLG4uQSkoXCJfX29mX3dvcmtzcGFjZV9wcm90b2NvbF9fXCIpLCgwLG4uQSkoci5CVCl9LDkwNTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0JUOigpPT5ufSk7Y29uc3Qgbj1cIl9fc2VhcmNoLW9wZW5maW4tYnJvd3Nlci1ob21lLXRvcGljX19cIjt2YXIgcixvOyFmdW5jdGlvbihlKXtlLkZldGNoaW5nPVwiZmV0Y2hpbmdcIixlLkZldGNoZWQ9XCJmZXRjaGVkXCIsZS5Db21wbGV0ZT1cImNvbXBsZXRlXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZVtlLkluaXRpYWw9MF09XCJJbml0aWFsXCIsZVtlLk9wZW49MV09XCJPcGVuXCIsZVtlLkNsb3NlPTJdPVwiQ2xvc2VcIn0ob3x8KG89e30pKX0sMjU3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7RjooKT0+cn0pO3ZhciBuPWEoMzY1KTtjb25zdCByPWU9Pntjb25zdCB0PWZpbi5QbGF0Zm9ybS5MYXlvdXQud3JhcFN5bmMoZSk7cmV0dXJue3Nob3c6YXN5bmMoKT0+e2NvbnN0IGE9YXdhaXQgdC5nZXRDb25maWcoKSx7c2V0dGluZ3M6cixkaW1lbnNpb25zOm99PWEsaT1hd2FpdCgwLG4uQWUpKGUpO2F3YWl0IHQucmVwbGFjZSh7Li4uYSxzZXR0aW5nczp7Li4ucixoYXNIZWFkZXJzOiEwLHJlb3JkZXJFbmFibGVkOiEwfSxkaW1lbnNpb25zOnsuLi5vLGhlYWRlckhlaWdodDppPzI4OjMwfX0pfSxoaWRlOmFzeW5jIGU9Pntjb25zdCBhPWF3YWl0IHQuZ2V0Q29uZmlnKCkse3NldHRpbmdzOm4sZGltZW5zaW9uczpyfT1hd2FpdCBhO2F3YWl0IHQucmVwbGFjZSh7Li4uYSxzZXR0aW5nczp7Li4ubixoYXNIZWFkZXJzOiExLHJlb3JkZXJFbmFibGVkOmU/LnNldHRpbmdzPy5yZW9yZGVyRW5hYmxlZD8/ITF9LGRpbWVuc2lvbnM6ey4uLnIsaGVhZGVySGVpZ2h0OjB9fSl9LGlzU2hvd2luZ1RhYnM6YXN5bmMoKT0+e3RyeXtjb25zdCBlPWF3YWl0IHQuZ2V0Q29uZmlnKCkse3NldHRpbmdzOmF9PWF3YWl0IGU7cmV0dXJuIGEuaGFzSGVhZGVyc31jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihcImZhaWxlZCB0byBnZXQgbGF5b3V0IGNvbmZpZzogXCIsZSksITB9fX19fSw5NTc6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtxcTooKT0+a30pO3ZhciBuPWEoODQ3KSxyPWEoODk4KSxvPWEoNzApLGk9YSgxNDEpLHM9KGEoNjc1KSxhKDg3NykpLGM9YS5uKHMpLGw9YSg2NyksZD1hLm4obCk7Y29uc3QgdT17bGlnaHQ6e3N5bWJvbDpkKCk/LnNyY3x8XCJcIn0sZGFyazp7c3ltYm9sOmMoKT8uc3JjfHxcIlwifX07YSg2OTUpLGEoNzkpO2NvbnN0IGg9XCJkYXJrXCIsZz17W24uUGFsZXR0ZS5icmFuZFByaW1hcnldOlwiIzBBNzZEM1wiLFtuLlBhbGV0dGUuc3RhdHVzU3VjY2Vzc106bi5Db2xvci5mdW5jdGlvbmFsMSxbbi5QYWxldHRlLnN0YXR1c1dhcm5pbmddOm4uQ29sb3IuZnVuY3Rpb25hbDEwLFtuLlBhbGV0dGUuc3RhdHVzQ3JpdGljYWxdOm4uQ29sb3IuZnVuY3Rpb25hbDcsW24uUGFsZXR0ZS5zdGF0dXNBY3RpdmVdOm4uQ29sb3IuZnVuY3Rpb25hbDMsW24uUGFsZXR0ZS5jb250ZW50QmFja2dyb3VuZDFdOlwiIzBBNzZEM1wiLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQyXTpcIiMwMDAwMDBcIixbbi5QYWxldHRlLmNvbnRlbnRCYWNrZ3JvdW5kM106XCIjMDAwMDAwXCIsW24uUGFsZXR0ZS5jb250ZW50QmFja2dyb3VuZDRdOlwiIzAwMDAwMFwiLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQ1XTpcIiMwMDAwMDBcIn0scD17Li4uZyxbbi5QYWxldHRlLmJhY2tncm91bmQxXTpuLkNvbG9yLndoaXRlLFtuLlBhbGV0dGUuYmFja2dyb3VuZDJdOm4uQ29sb3IubGlnaHRHcmF5MSxbbi5QYWxldHRlLmJhY2tncm91bmQzXTpuLkNvbG9yLmxpZ2h0R3JheTIsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNF06bi5Db2xvci5saWdodEdyYXkzLFtuLlBhbGV0dGUuYmFja2dyb3VuZDVdOm4uQ29sb3IubGlnaHRHcmF5NCxbbi5QYWxldHRlLmJhY2tncm91bmQ2XTpuLkNvbG9yLmxpZ2h0R3JheTUsW24uUGFsZXR0ZS5icmFuZFNlY29uZGFyeV06bi5Db2xvci5saWdodEdyYXk0LFtuLlBhbGV0dGUuaW5wdXRCYWNrZ3JvdW5kXTpuLkNvbG9yLmxpZ2h0R3JheTMsW24uUGFsZXR0ZS5pbnB1dENvbG9yXTpuLkNvbG9yLmRhcmtHcmF5NSxbbi5QYWxldHRlLmlucHV0UGxhY2Vob2xkZXJdOm4uQ29sb3IuZGFya0dyYXkyLFtuLlBhbGV0dGUuaW5wdXREaXNhYmxlZF06bi5Db2xvci5uZXV0cmFsR3JheSxbbi5QYWxldHRlLmlucHV0Rm9jdXNlZF06bi5Db2xvci5saWdodEdyYXk1LFtuLlBhbGV0dGUuaW5wdXRCb3JkZXJdOm4uQ29sb3IubmV1dHJhbEdyYXksW24uUGFsZXR0ZS50ZXh0RGVmYXVsdF06bi5Db2xvci5kYXJrR3JheTUsW24uUGFsZXR0ZS50ZXh0SGVscF06bi5Db2xvci5kYXJrR3JheTMsW24uUGFsZXR0ZS50ZXh0SW5hY3RpdmVdOm4uQ29sb3IubmV1dHJhbEdyYXl9LGY9ey4uLmcsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kMV06bi5Db2xvci5kYXJrR3JheTYsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kMl06bi5Db2xvci5kYXJrR3JheTUsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kM106bi5Db2xvci5kYXJrR3JheTQsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNF06bi5Db2xvci5kYXJrR3JheTMsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNV06bi5Db2xvci5kYXJrR3JheTIsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNl06bi5Db2xvci5kYXJrR3JheTEsW24uUGFsZXR0ZS5icmFuZFNlY29uZGFyeV06bi5Db2xvci5kYXJrR3JheTIsW24uUGFsZXR0ZS5pbnB1dEJhY2tncm91bmRdOm4uQ29sb3IuZGFya0dyYXkxLFtuLlBhbGV0dGUuaW5wdXRDb2xvcl06bi5Db2xvci53aGl0ZSxbbi5QYWxldHRlLmlucHV0UGxhY2Vob2xkZXJdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLmlucHV0RGlzYWJsZWRdOm4uQ29sb3IubmV1dHJhbEdyYXksW24uUGFsZXR0ZS5pbnB1dEZvY3VzZWRdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLmlucHV0Qm9yZGVyXTpuLkNvbG9yLm5ldXRyYWxHcmF5LFtuLlBhbGV0dGUudGV4dERlZmF1bHRdOm4uQ29sb3Iud2hpdGUsW24uUGFsZXR0ZS50ZXh0SGVscF06bi5Db2xvci5saWdodEdyYXk1LFtuLlBhbGV0dGUudGV4dEluYWN0aXZlXTpuLkNvbG9yLm5ldXRyYWxHcmF5fSxtPVt7bGFiZWw6XCJPcGVuRmluIERlZmF1bHQgTGlnaHQgYW5kIERhcmsgVGhlbWVcIixwYWxldHRlczp7bGlnaHQ6ey4uLnAsYnJhbmRQcmltYXJ5OlwiIzBBNzZEM1wiLGJyYW5kU2Vjb25kYXJ5Om4uQ29sb3IubGlnaHRHcmF5NCxiYWNrZ3JvdW5kUHJpbWFyeTpuLkNvbG9yLmRhcmtHcmF5NX0sZGFyazp7Li4uZixicmFuZFByaW1hcnk6XCIjMEE3NkQzXCIsYnJhbmRTZWNvbmRhcnk6bi5Db2xvci5kYXJrR3JheTIsYmFja2dyb3VuZFByaW1hcnk6bi5Db2xvci5kYXJrR3JheTV9fX1dLHc9ZT0+e2NvbnN0e2JhY2tncm91bmQ6dCxmb3JlZ3JvdW5kOmF9PWU7cmV0dXJue2JhY2tncm91bmQ6dCxmb3JlZ3JvdW5kOmE/P1wiI0ZGRkZGRlwifX0seT0oZSx0KT0+KHtpY29uczp7c3ltYm9sOmUuYnJhbmQ/Lmljb25zPy5bdF0/LnN5bWJvbHx8dVt0XS5zeW1ib2x9fSksYj1lPT57Y29uc3R7bGlnaHQ6dCxkYXJrOmF9PVwicGFsZXR0ZXNcImluIGU/ZS5wYWxldHRlczp7bGlnaHQ6ZS5wYWxldHRlLGRhcms6ZS5wYWxldHRlfSxvPSgwLHIuS0QpKGYsYSksaT0oMCxyLktEKShwLHQpLHM9KChlLHQpPT57Y29uc3QgYT17Li4uZX0sbj17Li4udH07bGV0IG89dC5iYWNrZ3JvdW5kUHJpbWFyeT8oMCxyLnB1KSh0LmJhY2tncm91bmRQcmltYXJ5LCEwKTp7fSxpPWUuYmFja2dyb3VuZFByaW1hcnk/KDAsci5wdSkoZS5iYWNrZ3JvdW5kUHJpbWFyeSk6e307cmV0dXJuIG89ey4uLm8sLi4ubn0saT17Li4uaSwuLi5hfSx7bGlnaHQ6ey4uLnQsLi4ub30sZGFyazp7Li4uZSwuLi5pfX19KShhLHQpLGM9ey4uLigwLG4uY3JlYXRlVGhlbWUpKHsuLi5vLC4uLnM/LmRhcmt9KSxicmFuZDp5KGUsXCJkYXJrXCIpfSxsPXsuLi4oMCxuLmNyZWF0ZVRoZW1lKSh7Li4uaSwuLi5zPy5saWdodH0pLGJyYW5kOnkoZSxcImxpZ2h0XCIpfSx7bGlnaHQ6ZCxkYXJrOnV9PShlPT57Y29uc3QgdD1PYmplY3Qua2V5cyhlLm5vdGlmaWNhdGlvbkluZGljYXRvckNvbG9ycz8/e30pO2lmKHQ/Lmxlbmd0aCl7Y29uc3QgYT17fSxuPXt9O3JldHVybiB0LmZvckVhY2goKHQ9Pntjb25zdCByPWUubm90aWZpY2F0aW9uSW5kaWNhdG9yQ29sb3JzW3RdO1wiYmFja2dyb3VuZFwiaW4gcj8oYVt0XT13KHIpLG5bdF09dyhyKSk6KGFbdF09dyhyLmRhcms/P3IubGlnaHQpLG5bdF09dyhyLmxpZ2h0Pz9yLmRhcmspKX0pKSx7bGlnaHQ6bixkYXJrOmF9fXJldHVybntsaWdodDpudWxsLGRhcms6bnVsbH19KShlKTtyZXR1cm4gYy5ub3RpZmljYXRpb25JbmRpY2F0b3JDb2xvcnM9dSxsLm5vdGlmaWNhdGlvbkluZGljYXRvckNvbG9ycz1kLHtkYXJrOmMsbGlnaHQ6bH19LGs9YXN5bmMgZT0+e2NvbnN0e3RoZW1lczp0LHNlbGVjdGVkU2NoZW1lOmF9PWF3YWl0KGFzeW5jIGU9Pntjb25zdCB0PWZpbj8uX19pbnRlcm5hbF8/LmluaXRpYWxPcHRpb25zPy53b3Jrc3BhY2VQbGF0Zm9ybT8uX3RoZW1lRGF0YTtpZighdHx8ZS51dWlkIT09by4kcC51dWlkKXJldHVybnt0aGVtZXM6YXdhaXQoMCxpLkFnKShlKS5UaGVtZS5nZXRUaGVtZXMoKSxzZWxlY3RlZFNjaGVtZTphd2FpdCgwLGkuQWcpKGUpLlRoZW1lLmdldFNlbGVjdGVkU2NoZW1lKCl9O3JldHVybiB0fSkoZSk7dmFyIG4scjtyZXR1cm4obj10Py5sZW5ndGg/dDptLHI9YSxuLm1hcCgoZT0+e2NvbnN0IHQ9XCJwYWxldHRlc1wiaW4gZT9lLmRlZmF1bHQ6aCx7bGlnaHQ6YSxkYXJrOm59PWIoZSk7cmV0dXJue2xhYmVsOmUubGFiZWwsbG9nb1VybDplLmxvZ29VcmwsdGhlbWU6e2Rhcms6bixsaWdodDphfSxkZWZhdWx0U2NoZW1lOnI/P3R9fSkpKVswXX19LDQzODooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse01XOigpPT5uLHYxOigpPT5jfSk7dmFyIG4scixvPWEoNzIzKTshZnVuY3Rpb24oZSl7ZS5Xb3Jrc3BhY2U9XCJvcGVuZmluLXdvcmtzcGFjZVwiLGUuT2xkV29ya3NwYWNlPVwib3BlbmZpbi1icm93c2VyXCJ9KG58fChuPXt9KSksZnVuY3Rpb24oZSl7ZS5GaW5Qcm90b2NvbD1cImZpbi1wcm90b2NvbFwifShyfHwocj17fSkpO2NvbnN0IGk9e3V1aWQ6by4kaH0scz0obi5Xb3Jrc3BhY2UsZT0+e2lmKCFvLmNJKXRocm93IG5ldyBFcnJvcihcImdldEFwcGxpY2F0aW9uIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uIE9wZW5GaW4gZW52LiBBdm9pZCB1c2luZyB0aGlzIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gZmluLkFwcGxpY2F0aW9uLndyYXBTeW5jKGUpfSksYz0oKT0+cyhpKX0sMTAyOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7QTooKT0+b30pO3ZhciBuPWEoNzIzKTtjb25zdCByPW4uWVkmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJm5ldyBQcm9taXNlKChlPT5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCgoKT0+e1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmUoKX0pKSkpO2Z1bmN0aW9uIG8oZSl7bGV0IHQ7Y29uc3QgYT1uZXcgU2V0O3JldHVybigpPT57aWYoIW4uY0kpdGhyb3cgbmV3IEVycm9yKFwiZ2V0Q2hhbm5lbENsaWVudCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGFuIE9wZW5GaW4gZW52LiBBdm9pZCB1c2luZyB0aGlzIG1ldGhvZCBkdXJpbmcgcHJlLXJlbmRlcmluZy5cIik7cmV0dXJuIHR8fCh0PShhc3luYygpPT57YXdhaXQgcjtjb25zdCBvPXtjbGllbnRBUElWZXJzaW9uOm4uZXR9LGk9YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGUse3BheWxvYWQ6b30pO3JldHVybiBpLm9uRGlzY29ubmVjdGlvbigoYXN5bmMoKT0+e2EuZm9yRWFjaCgoZT0+ZSgpKSksYS5jbGVhcigpLGNvbnNvbGUud2FybihgZGlzY29ubmVjdGVkIGZyb20gY2hhbm5lbCBwcm92aWRlciAke2V9YCksdD12b2lkIDB9KSksaX0pKCkudGhlbigoZT0+KGUuYWRkRGlzY29ubmVjdGlvbkxpc3RlbmVyPWU9PnthLmFkZChlKX0sZSkpKS5jYXRjaCgoYT0+e3Rocm93IHQ9dm9pZCAwLG5ldyBFcnJvcihgZmFpbGVkIHRvIGNvbm5lY3QgdG8gY2hhbm5lbCBwcm92aWRlciAke2V9OiAke2F9YCl9KSkpLHR9fX0sMzY1OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7QWU6KCk9Pm59KTthKDE4MSksYSg3MCk7Y29uc3Qgbj1hc3luYyBlPT57Y29uc3QgdD1lP2Zpbi5XaW5kb3cud3JhcFN5bmMoZSk6ZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpLGE9YXdhaXQgdC5nZXRPcHRpb25zKCk7cmV0dXJuIGEud29ya3NwYWNlUGxhdGZvcm0/LndpbmRvd1R5cGUmJlwiZW50ZXJwcmlzZVwiPT09YS53b3Jrc3BhY2VQbGF0Zm9ybS53aW5kb3dUeXBlfX0sNzIzOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjthLmQodCx7JGg6KCk9PmMsQVQ6KCk9PmksWVk6KCk9Pm8sY0k6KCk9PnIsZXQ6KCk9PmgsZlQ6KCk9PmQsdkw6KCk9Pmx9KSxmdW5jdGlvbihlKXtlLkxvY2FsPVwibG9jYWxcIixlLkRldj1cImRldlwiLGUuU3RhZ2luZz1cInN0YWdpbmdcIixlLlByb2Q9XCJwcm9kXCJ9KG58fChuPXt9KSk7Y29uc3Qgcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZmluLG89KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBwcm9jZXNzfHxwcm9jZXNzLmVudixcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KSxpPW8mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpbmRleGVkREIscz1vP3dpbmRvdy5vcmlnaW46bi5Mb2NhbCxjPXImJmZpbi5tZS51dWlkLGw9ciYmZmluLm1lLm5hbWUsZD1yJiZmaW4ubWUuZW50aXR5VHlwZSx1PShuLkxvY2FsLG4uRGV2LG4uU3RhZ2luZyxuLlByb2QsZT0+ZS5zdGFydHNXaXRoKFwiaHR0cDovL1wiKXx8ZS5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIik/ZTpzK2UpLGg9KHUoXCJodHRwczovL3dvcmtzcGFjZS5vcGVuZmluLmNvL3dvcmtzcGFjZS8yMC41LjRcIiksdShcImh0dHBzOi8vd29ya3NwYWNlLm9wZW5maW4uY28vd29ya3NwYWNlLzIwLjUuNFwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgV09SS1NQQUNFX0RPQ1NfUExBVEZPUk1fVVJMJiZ1KFdPUktTUEFDRV9ET0NTX1BMQVRGT1JNX1VSTCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9ET0NTX0NMSUVOVF9VUkwmJnUoV09SS1NQQUNFX0RPQ1NfQ0xJRU5UX1VSTCksXCIyMC41LjRcIik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9CVUlMRF9TSEEmJldPUktTUEFDRV9CVUlMRF9TSEF9LDk0MDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse2ZoOigpPT5kLHhQOigpPT51fSk7dmFyIG49YSgyMzYpLHI9YS5uKG4pLG89KGEoMzY1KSxhKDcyMyksYSg3MCkpLGk9YSg2NzgpLHM9YSgyNTcpLGM9YSgzNjcpO2EoNDEzKTtjb25zdCBsPShlLHQpPT5lLmNvbnRlbnQ/ey4uLmUsY29udGVudDplLmNvbnRlbnQubWFwKChlPT5sKGUsdCkpKX06ey4uLmUsY29tcG9uZW50U3RhdGU6dChlLmNvbXBvbmVudFN0YXRlKX0sZD1lPT4oey4uLmUsbmFtZTp2b2lkIDB9KSx1PWU9Pntjb25zdCB0PXsuLi5lfTtyZXR1cm4gbCh0LGQpfSxoPWU9Pntjb25zdCB0PVtdO3JldHVybihlJiZBcnJheS5pc0FycmF5KGUpP2U6W10pLmZvckVhY2goKGU9PntpZihcImNvbXBvbmVudFwiPT09ZS50eXBlKXJldHVybiB0LnB1c2goZS5jb21wb25lbnRTdGF0ZSk7Y29uc3QgYT1oKGUuY29udGVudCk7dC5wdXNoKC4uLmEpfSkpLHR9O25ldyBNYXAsbmV3IE1hcDtyKCkoKGFzeW5jIGU9Pnt0cnl7Y29uc3QgdD1hd2FpdChhc3luYyBlPT5maW4uUGxhdGZvcm0uTGF5b3V0LndyYXBTeW5jKHsuLi5maW4ubWUuaWRlbnRpdHksbGF5b3V0TmFtZTplfSkuZ2V0Q29uZmlnKCkpKGUubGF5b3V0Q29udGFpbmVyS2V5KSxhPXQuY29udGVudD9oKHQuY29udGVudCk6W10sbj1hLmxlbmd0aDtuPjE/KGU9PntcIm11bHRpVmlld1wiIT09ZS5hdHRhY2hlZFBhZ2VUeXBlJiYoMCxjLk4pKCkuQnJvd3Nlci53cmFwU3luYyhvLiRwKS51cGRhdGVQYWdlKHtwYWdlSWQ6ZS5wYWdlSWQscGFnZTp7c2luZ2xlVmlld05hbWU6bnVsbCxhdHRhY2hlZFBhZ2VUeXBlOlwibXVsdGlWaWV3XCJ9fSl9KShlKToxPT09biYmKGFzeW5jKGUsdCk9Pntjb25zdCBhPSgwLGMuTikoKS5Ccm93c2VyLndyYXBTeW5jKG8uJHApO2lmKFwic2luZ2xlVmlld1wiIT09ZS5hdHRhY2hlZFBhZ2VUeXBlKXtjb25zdCBuPWF3YWl0KDAsaS5CRykoZSkscj1hd2FpdCgwLGMuTikoKS5Ccm93c2VyLmdldFVuaXF1ZVBhZ2VUaXRsZSgpO2RlbGV0ZSBuLmxheW91dDtjb25zdCBvPXsuLi5uLHNpbmdsZVZpZXdOYW1lOnQsdGl0bGU6cixoYXNVbnNhdmVkQ2hhbmdlczohMSxhdHRhY2hlZFBhZ2VUeXBlOlwic2luZ2xlVmlld1wifTthd2FpdCBhLnVwZGF0ZVBhZ2Uoe3BhZ2VJZDplLnBhZ2VJZCxwYWdlOm99KX19KShlLGFbMF0ubmFtZSksYXdhaXQoYXN5bmMoZSx0KT0+e2NvbnN0IGE9KDAscy5GKSh7Li4uby4kcCxsYXlvdXROYW1lOmUubGF5b3V0Q29udGFpbmVyS2V5fSksbj1hd2FpdCBhLmlzU2hvd2luZ1RhYnMoKTt0PjE/bnx8YXdhaXQgYS5zaG93KCk6MT09PXQmJm4mJmF3YWl0IGEuaGlkZSh7c2V0dGluZ3M6e3Jlb3JkZXJFbmFibGVkOiEwfX0pfSkoZSxuKX1jYXRjaChlKXt9fSksNTAse2xlYWRpbmc6ITEsdHJhaWxpbmc6ITB9KX0sNTIyOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjthLmQodCx7QTooKT0+cn0pLGZ1bmN0aW9uKGUpe2UuQ3VycmVudFdvcmtzcGFjZUlkPVwiY3VycmVudFdvcmtzcGFjZUlkXCIsZS5MYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3c9XCJsYXN0Rm9jdXNlZEJyb3dzZXJXaW5kb3dcIixlLk1hY2hpbmVOYW1lPVwibWFjaGluZU5hbWVcIixlLk5ld1RhYlBhZ2VMYXlvdXQ9XCJOZXdUYWJQYWdlTGF5b3V0XCIsZS5OZXdUYWJQYWdlU29ydD1cIk5ld1RhYlBhZ2VTb3J0XCIsZS5Eb2NrUG9zaXRpb249XCJEb2NrUG9zaXRpb25cIixlLlNlbGVjdGVkQ29sb3JTY2hlbWU9XCJTZWxlY3RlZENvbG9yU2NoZW1lXCIsZS5UaGVtZVBhbGV0dGVTaGVldD1cIlRoZW1lUGFsZXR0ZVNoZWV0XCIsZS5IYXNNb3ZlZFN0b3JlPVwiSGFzTW92ZWRTdG9yZVwiLGUuUGFnZURyYWdTdGF0ZT1cIkJyb3dzZXJQYWdlRHJhZ1N0YXRlXCJ9KG58fChuPXt9KSk7Y29uc3Qgcj1ufSwxODk6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2Eucih0KSxhLmQodCx7Z2V0SXRlbTooKT0+byxyZW1vdmVJdGVtOigpPT5pLHNldEl0ZW06KCk9PnJ9KTt2YXIgbj1hKDcyMyk7Y29uc3Qgcj0oZSx0KT0+e2xvY2FsU3RvcmFnZS5zZXRJdGVtKGAke24uJGh9LSR7ZX1gLHQpfSxvPWU9PmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke24uJGh9LSR7ZX1gKSxpPWU9PmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke24uJGh9LSR7ZX1gKX0sNzg2OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7QTooKT0+cn0pO2NvbnN0IG49XCJvZi13b3Jrc3BhY2UtXCI7Y29uc3Qgcj1uZXcgY2xhc3N7bWFyayhlKXtwZXJmb3JtYW5jZS5tYXJrKGAke259JHtlfWApfW1hcmtTdGFydChlKXtwZXJmb3JtYW5jZS5tYXJrKGAke259JHtlfS1zdGFydGApfW1hcmtFbmQoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX0tZW5kYCl9bWFya0VuZEFuZE1lYXN1cmUoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX0tZW5kYCk7dHJ5e3JldHVybiBwZXJmb3JtYW5jZS5tZWFzdXJlKGAke259JHtlfWAsYCR7bn0ke2V9LXN0YXJ0YCxgJHtufSR7ZX0tZW5kYCl9Y2F0Y2goZSl7MH19bWFya0FuZE1lYXN1cmUoZSx0KXtwZXJmb3JtYW5jZS5tYXJrKGAke259JHtlfWApO3RyeXtyZXR1cm4gcGVyZm9ybWFuY2UubWVhc3VyZShgJHtufSR7ZX0tbWVhc3VyZWAsYCR7bn0ke3R9LXN0YXJ0YCxgJHtufSR7ZX1gKX1jYXRjaChlKXswfX1yZXBvcnRXb3Jrc3BhY2VQZXJmb3JtYW5jZUVudHJpZXMoKXtyZXR1cm4gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm1lYXN1cmVcIikuZmlsdGVyKChlPT5lLm5hbWUuc3RhcnRzV2l0aChuKSkpfXJlcG9ydFdvcmtzcGFjZVBlcmZvcm1hbmNlKCl7cmV0dXJuIHRoaXMucmVwb3J0V29ya3NwYWNlUGVyZm9ybWFuY2VFbnRyaWVzKCkubWFwKChlPT4oe25hbWU6ZS5uYW1lLnJlcGxhY2UoYCR7bn1gLFwiXCIpLnJlcGxhY2UoXCItbWVhc3VyZVwiLFwiXCIpLGR1cmF0aW9uOmUuZHVyYXRpb259KSkpfX19LDE4MTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scjshZnVuY3Rpb24oZSl7ZS5Ib21lPVwiL2hvbWUvXCIsZS5Ib21lU2VhcmNoPVwiL2hvbWUvP2RlZXBsaW5rPXNlYXJjaFwiLGUuSG9tZVBhZ2VzUmVuYW1lPVwiL2hvbWUvcGFnZXMvcmVuYW1lL1wiLGUuRG9jaz1cIi9kb2NrL1wiLGUuRG9jcz1cIi9wcm92aWRlci9kb2NzL1wiLGUuU3RvcmVmcm9udD1cIi9zdG9yZWZyb250L1wiLGUuRGVwcmVjYXRlZEFsZXJ0PVwiL3Byb3ZpZGVyL2RlcHJlY2F0ZWQtYWxlcnQvXCIsZS5BbmFseXRpY3M9XCIvcHJvdmlkZXIvYW5hbHl0aWNzL1wiLGUuUHJvdmlkZXI9XCIvcHJvdmlkZXIvXCJ9KG58fChuPXt9KSksZnVuY3Rpb24oZSl7ZS5Ccm93c2VyPVwiL2Jyb3dzZXIvXCIsZS5Ccm93c2VyUG9wdXBNZW51PVwiL3BvcHVwLW1lbnUvXCIsZS5Ccm93c2VyUG9wdXBNZW51U2F2ZU1vZGFsPVwiL3BvcHVwLW1lbnUvc2F2ZS1tb2RhbC9cIixlLkJyb3dzZXJQb3B1cE1lbnVMYXlvdXRzPVwiL3BvcHVwLW1lbnUvbGF5b3V0cy9sYXlvdXRzL1wiLGUuQnJvd3NlclBvcHVwTWVudUNvbG9yTGlua2luZz1cIi9wb3B1cC1tZW51L2NvbG9yLWxpbmtpbmcvY29sb3ItbGlua2luZy9cIixlLkJyb3dzZXJJbmRpY2F0b3I9XCIvaW5kaWNhdG9yL1wiLGUuQnJvd3NlclBvcHVwTWVudUFkZHJlc3NTZWFyY2hSZXN1bHRzVmlldz1cIi9wb3B1cC1tZW51L2FkZHJlc3Mtc2VhcmNoLXJlc3VsdHMtdmlldy9cIixlLlJlc3BvbnNlTW9kYWw9XCIvcG9wdXAtbWVudS9yZXNwb25zZS1tb2RhbC9cIixlLkNsb3NlQ29uZmlybWF0aW9uTW9kYWw9XCIvcG9wdXAtbWVudS9jbG9zZS1jb25maXJtYXRpb24tbW9kYWwvXCIsZS5FbnRlcnByaXNlQnJvd3Nlcj1cIi9lbnRlcnByaXNlL1wiLGUuRW50ZXJwcmlzZUNvbnRleHRNZW51PVwiL2NvbnRleHQtbWVudS9cIixlLkVudGVycHJpc2VCb29rbWFya0RpYWxvZz1cIi9ib29rbWFyay1kaWFsb2cvXCIsZS5FbnRlcnByaXNlU3RvcmFnZVByb3h5PVwiL2VudGVycHJpc2Uvc3RvcmFnZS1wcm94eVwiLGUuRHJvcGRvd25NZW51PVwiL2Ryb3Bkb3duLW1lbnUvXCIsZS5FbnRlcnByaXNlRG9jaz1cIi9kb2NrL1wifShyfHwocj17fSkpO3ZhciBvOyFmdW5jdGlvbihlKXtlLlNlYXJjaD1cInNlYXJjaFwifShvfHwobz17fSkpfSw1MjM6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuO2EoNzIzKTshZnVuY3Rpb24oZSl7ZS5Ib21lPVwiL2hvbWVcIixlLkJyb3dzZXI9XCIvYnJvd3NlclwiLGUuRW50ZXJwcmlzZT1cIi9lbnRlcnByaXNlXCIsZS5Qcm92aWRlcj1cIi9wcm92aWRlclwiLGUuU3RvcmVmcm9udD1cIi9zdG9yZWZyb250XCIsZS5Eb2NrPVwiL2RvY2tcIn0obnx8KG49e30pKX0sODYyOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7RDE6KCk9PmksZkM6KCk9PnJ9KTthKDk0MCk7dmFyIG49YSg1MjIpO2Z1bmN0aW9uIHIoKXtyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0obi5BLk1hY2hpbmVOYW1lKT8/XCJ1bmtub3duXCJ9bGV0IG87YXN5bmMgZnVuY3Rpb24gaSgpe3JldHVybiBvfHwobz1hd2FpdCBmaW4uU3lzdGVtLmdldE1hY2hpbmVJZCgpKSxvfX0sODk4OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7S0Q6KCk9PnMscHU6KCk9Pml9KTtjb25zdCBuPWU9PmUucmVwbGFjZSgvW15cXGQsXS9nLFwiXCIpLnNwbGl0KFwiLFwiKSxyPWU9PntpZihlLmxlbmd0aDwyKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3Igb2JqZWN0LCBjYW5ub3QgY29udmVydCB0byBIU0wuXCIpO2NvbnN0IHQ9ZVswXS8yNTUsYT1lWzFdLzI1NSxuPWVbMl0vMjU1LHI9TWF0aC5taW4odCxhLG4pLG89TWF0aC5tYXgodCxhLG4pLGk9by1yO2xldCBzPTAsYz0wLGw9MDtyZXR1cm4gcz0wPT09aT8wOm89PT10PyhhLW4pL2klNjpvPT09YT8obi10KS9pKzI6KHQtYSkvaSs0LHM9TWF0aC5yb3VuZCg2MCpzKSxzPDAmJihzKz0zNjApLGw9KG8rcikvMixjPTA9PWk/MDppLygxLU1hdGguYWJzKDIqbC0xKSksYz0rKDEwMCpjKS50b0ZpeGVkKDEpLGw9KygxMDAqbCkudG9GaXhlZCgxKSx7aHNsOmBoc2woJHtzfSwgJHtjfSUsICR7bH0lKWAsaHNsYTpgaHNsKCR7c30sICR7Y30lLCAke2x9JSwgMSlgLGh1ZTpzLGxpZ2h0bmVzczpsLHNhdHVyYXRpb246Y319LG89ZT0+e2lmKCFlKXRocm93IG5ldyBFcnJvcihcIkNvbG9yIGlzIG5vdCBkZWZpbmVkXCIpO2NvbnN0IHQ9ZS50b0xvd2VyQ2FzZSgpO2xldCBhO2lmKHQuaW5jbHVkZXMoXCJyZ2JcIikpe2NvbnN0IGU9bih0KTtlLmxlbmd0aD4zJiZlLnBvcCgpLGE9cihlKS5odWV9aWYodC5pbmNsdWRlcyhcIiNcIikpe2NvbnN0IGU9KGU9PntpZighZS5pbmNsdWRlcyhcIiNcIikpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBoZXggdmFsdWUsIGNhbm5vdCBjb252ZXJ0IHRvIFJHQi4gSGV4IHZhbHVlIGJlZ2lucyB3aXRoIGEgaGFzaHRhZy5cIik7bGV0IHQ9MCxhPTAsbj0wO2lmKDQ9PT1lLmxlbmd0aCl0PWAweCR7ZVsxXX0ke2VbMV19YCxhPWAweCR7ZVsyXX0ke2VbMl19YCxuPWAweCR7ZVszXX0ke2VbM119YDtlbHNle2lmKDchPT1lLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGhleCBzdHJpbmcgbGVuZ3RoLCBjYW5ub3QgY29udmVydCB0byBSR0IuXCIpO3Q9YDB4JHtlWzFdfSR7ZVsyXX1gLGE9YDB4JHtlWzNdfSR7ZVs0XX1gLG49YDB4JHtlWzVdfSR7ZVs2XX1gfXJldHVyblsrdCwrYSwrbl19KSh0KTthPXIoZSkuaHVlfWlmKHQuaW5jbHVkZXMoXCJoc2xcIikpe2E9bih0KVswXX1jb25zdCBvPWE/LnRvU3RyaW5nKCk7aWYoIW8pdGhyb3cgbmV3IEVycm9yKGBIdWUgd2FzIHVuYWJsZSB0byBiZSBleHRyYWN0ZWQgZnJvbSBcIiR7dH1cIiwgY2hlY2sgY29sb3IgZm9ybWF0LiBBY2NlcHRlZCBmb3JtYXRzIGFyZTogcmdiKCksIHJnYmEoKSwgaGV4LCBoc2woKSwgYW5kIGhzbGEoKWApO3JldHVybiBvfSxpPShlLHQ9ITEpPT57Y29uc3QgYT1vKGUpO3JldHVybiB0P3tiYWNrZ3JvdW5kMTpgaHNsYSgke2F9LCAwJSwgMTAwJSwgMSlgLGJhY2tncm91bmQyOmBoc2xhKCR7YX0sIDY3JSwgOTklLCAxKWAsYmFja2dyb3VuZDM6YGhzbGEoJHthfSwgMjYlLCA5NiUsIDEpYCxiYWNrZ3JvdW5kNDpgaHNsYSgke2F9LCAxNSUsIDk0JSwgMSlgLGJhY2tncm91bmQ1OmBoc2xhKCR7YX0sIDEwJSwgODglLCAxKWAsYmFja2dyb3VuZDY6YGhzbGEoJHthfSwgODAlLCA4MCUsIDEpYH06e2JhY2tncm91bmQxOmBoc2xhKCR7YX0sIDglLCA3JSwgMSlgLGJhY2tncm91bmQyOmBoc2xhKCR7YX0sIDglLCAxMyUsIDEpYCxiYWNrZ3JvdW5kMzpgaHNsYSgke2F9LCA5JSwgMTUlLCAxKWAsYmFja2dyb3VuZDQ6YGhzbGEoJHthfSwgNiUsIDIzJSwgMSlgLGJhY2tncm91bmQ1OmBoc2xhKCR7YX0sIDIxJSwgMjglLCAxKWAsYmFja2dyb3VuZDY6YGhzbGEoJHthfSwgNSUsIDUxJSwgMSlgfX0scz0oZSx0KT0+e2NvbnN0IGE9e307cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goKG49PnthW25dPXRbbl0/dFtuXTplW25dfSkpLGF9fSwyNzc6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtvczooKT0+aX0pO3ZhciBuLHI9YSg3MjMpO2EoNzApLGEoMTQxKTshZnVuY3Rpb24oZSl7ZS5Ccm93c2VyPVwiQnJvd3NlclwiLGUuRG9jaz1cIkRvY2tcIixlLkVudGVycHJpc2VEb2NrPVwiRW50ZXJwcmlzZURvY2tcIixlLkhvbWU9XCJIb21lXCIsZS5Ob3RpZmljYXRpb249XCJOb3RpZmljYXRpb25cIixlLlN0b3JlZnJvbnQ9XCJTdG9yZWZyb250XCIsZS5QbGF0Zm9ybT1cIlBsYXRmb3JtXCIsZS5UaGVtaW5nPVwiVGhlbWluZ1wiLGUuTWljcm9mbG93PVwiTWljcm9mbG93XCJ9KG58fChuPXt9KSk7Y29uc3Qgbz1hc3luYyhlLHQsYT1cIndvcmtzcGFjZS1saWNlbnNpbmdcIik9Pntjb25zdCBuPXthcGlWZXJzaW9uOnQuYXBpVmVyc2lvbnx8ci5ldCxjb21wb25lbnROYW1lOmUsY29tcG9uZW50VmVyc2lvbjp0LmNvbXBvbmVudFZlcnNpb258fHIuZXQsYWxsb3dlZDp0LmFsbG93ZWQscmVqZWN0aW9uQ29kZTp0LnJlamVjdGlvbkNvZGV9O2Zpbi5TeXN0ZW0ucmVnaXN0ZXJVc2FnZSh7dHlwZTphLGRhdGE6bn0pfTtjb25zdCBpPWU9PntvKG4uTm90aWZpY2F0aW9uLGUpfTtuZXcgTWFwfSwzMzM6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gdm9pZCAwIT09dHlwZW9mIGNyeXB0byYmXCJyYW5kb21VVUlEXCJpbiBjcnlwdG8mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNyeXB0by5yYW5kb21VVUlEP2NyeXB0by5yYW5kb21VVUlEKCk6XCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLChlPT4oZV5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSYxNT4+ZS80KS50b1N0cmluZygxNikpKX1hLmQodCx7TjooKT0+bn0pfSw3MDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQseyRwOigpPT5jLElvOigpPT51LElxOigpPT5zLFE6KCk9Pm4sVHY6KCk9PmwsVjE6KCk9PmksaGI6KCk9PmQsdXI6KCk9Pmh9KTt2YXIgbixyPWEoNDM4KSxvPWEoNzIzKTshZnVuY3Rpb24oZSl7ZS5Ib21lPVwib3BlbmZpbi1ob21lXCIsZS5Eb2NrPVwib3BlbmZpbi1kb2NrXCIsZS5TdG9yZWZyb250PVwib3BlbmZpbi1zdG9yZWZyb250XCIsZS5Ib21lSW50ZXJuYWw9XCJvcGVuZmluLWhvbWUtaW50ZXJuYWxcIixlLkJyb3dzZXJNZW51PVwib3BlbmZpbi1icm93c2VyLW1lbnVcIixlLkJyb3dzZXJTYXZlTWVudT1cIm9wZW5maW4tYnJvd3Nlci1zYXZlLW1lbnVcIixlLkJyb3dzZXJJbmRpY2F0b3I9XCJvcGVuZmluLWJyb3dzZXItaW5kaWNhdG9yXCIsZS5Ccm93c2VyV2luZG93PVwiaW50ZXJuYWwtZ2VuZXJhdGVkLXdpbmRvd1wiLGUuQ2xhc3NpY1dpbmRvdz1cImludGVybmFsLWdlbmVyYXRlZC1jbGFzc2ljLXdpbmRvd1wiLGUuRW50ZXJwcmlzZUNvbnRleHRNZW51PVwib3BlbmZpbi1lbnRlcnByaXNlLWNvbnRleHQtbWVudVwiLGUuQnJvd3NlckFkZHJlc3NTZWFyY2hQcmVmaXg9XCJvcGVuZmluLWJyb3dzZXItbWVudS1hZGRyZXNzLXNlYXJjaC1cIixlLkVudGVycHJpc2VCb29rbWFya0RpYWxvZ1dpbmRvdz1cIm9wZW5maW4tZW50ZXJwcmlzZS1ib29rbWFyay1kaWFsb2dcIixlLkRyb3Bkb3duTWVudT1cIm9wZW5maW4tZW50ZXJwcmlzZS1kcm9wZG93bi1tZW51XCIsZS5Eb2NrQ29tcGFuaW9uPVwib3BlbmZpbi1kb2NrLWNvbXBhbmlvblwifShufHwobj17fSkpO2NvbnN0IGk9ZT0+KHtsZWZ0OihlLmxlZnQrKGUucmlnaHQ/P2UubGVmdCtlLndpZHRoKSkvMix0b3A6KGUudG9wKyhlLmJvdHRvbT8/ZS50b3ArZS5oZWlnaHQpKS8yfSk7ZnVuY3Rpb24gcyhlKXtpZighby5jSSl0aHJvdyBuZXcgRXJyb3IoXCJnZXRPRldpbmRvdyBjYW4gb25seSBiZSB1c2VkIGluIGFuIE9wZW5GaW4gZW52LiBBdm9pZCBjYWxsaW5nIHRoaXMgbWV0aG9kIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gZmluLldpbmRvdy53cmFwU3luYyhlKX1jb25zdCBjPXtuYW1lOm8udkwsdXVpZDpvLiRofTtmdW5jdGlvbiBsKCl7cmV0dXJuIHMoYyl9bi5Ib21lLHIuTVcuV29ya3NwYWNlLG4uRG9jayxyLk1XLldvcmtzcGFjZSxuLlN0b3JlZnJvbnQsci5NVy5Xb3Jrc3BhY2Usci5NVy5Xb3Jrc3BhY2Usci5NVy5Xb3Jrc3BhY2U7Y29uc3QgZD1hc3luYyBlPT57dHJ5e2NvbnN0IHQ9YXdhaXQgZmluLldpbmRvdy53cmFwU3luYyh7bmFtZTplLm5hbWUsdXVpZDplLnV1aWQ/P2Zpbi5tZS51dWlkfSkuZ2V0T3B0aW9ucygpO3JldHVybihcImJyb3dzZXJcIj09PXQud29ya3NwYWNlUGxhdGZvcm0/LndpbmRvd1R5cGV8fFwiZW50ZXJwcmlzZVwiPT09dC53b3Jrc3BhY2VQbGF0Zm9ybT8ud2luZG93VHlwZSkmJnQud29ya3NwYWNlUGxhdGZvcm0/LnBhZ2VzfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLndhcm4oXCJpc0Jyb3dzZXJXaW5kb3cgZXJyb3I6IFwiLGUpLCExfX07YXN5bmMgZnVuY3Rpb24gdSgpe2NvbnN0IGU9YXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0Q2hpbGRXaW5kb3dzKCksdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcCgoYXN5bmMgZT0+ZChlLmlkZW50aXR5KSkpKTtyZXR1cm4gZS5maWx0ZXIoKChlLGEpPT50W2FdKSl9YXN5bmMgZnVuY3Rpb24gaChlKXtjb25zdCB0PWF3YWl0IGZpbi5TeXN0ZW0uZ2V0TW9uaXRvckluZm8oKTtyZXR1cm5bdC5wcmltYXJ5TW9uaXRvciwuLi50Lm5vblByaW1hcnlNb25pdG9yc10ucmVkdWNlKCgodCxhKT0+e2NvbnN0IG49ZnVuY3Rpb24oZSx0KXtjb25zdCBhPWUudG9wLG49ZS5sZWZ0LHI9ZS50b3ArZS5oZWlnaHQsbz1lLmxlZnQrZS53aWR0aCxpPXQubW9uaXRvclJlY3QudG9wLHM9dC5tb25pdG9yUmVjdC5sZWZ0LGM9dC5tb25pdG9yUmVjdC5ib3R0b20sbD10Lm1vbml0b3JSZWN0LnJpZ2h0O2lmKGE+Y3x8cjxpfHxuPmx8fG88cylyZXR1cm4gMDtjb25zdCBkPU1hdGgubWF4KGEsaSksdT1NYXRoLm1heChuLHMpO3JldHVybihNYXRoLm1pbihyLGMpLWQpKihNYXRoLm1pbihvLGwpLXUpLyhlLmhlaWdodCplLndpZHRoKX0oZSxhKTtyZXR1cm4gbj50LnBlcmNlbnRhZ2U/e3BlcmNlbnRhZ2U6bixtb25pdG9yOmF9OnR9KSx7cGVyY2VudGFnZTowLG1vbml0b3I6dC5wcmltYXJ5TW9uaXRvcn0pLm1vbml0b3J9fSwyMzY6ZT0+e1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1yZXF1aXJlKFwibG9kYXNoLmRlYm91bmNlXCIpfSw0MzI6ZT0+e1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1yZXF1aXJlKFwib3BlbmZpbi1ub3RpZmljYXRpb25zL2Rpc3QvY2xpZW50L3dpdGhvdXQtYXV0by1sYXVuY2hcIil9fSx0PXt9O2Z1bmN0aW9uIGEobil7dmFyIHI9dFtuXTtpZih2b2lkIDAhPT1yKXJldHVybiByLmV4cG9ydHM7dmFyIG89dFtuXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbbl0obyxvLmV4cG9ydHMsYSksby5leHBvcnRzfWEubj1lPT57dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlPygpPT5lLmRlZmF1bHQ6KCk9PmU7cmV0dXJuIGEuZCh0LHthOnR9KSx0fSxhLmQ9KGUsdCk9Pntmb3IodmFyIG4gaW4gdClhLm8odCxuKSYmIWEubyhlLG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtlbnVtZXJhYmxlOiEwLGdldDp0W25dfSl9LGEubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksYS5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTsoKCk9PntcInVzZSBzdHJpY3RcIjthLnIobiksYS5kKG4se2RlcmVnaXN0ZXI6KCk9PmcscmVnaXN0ZXI6KCk9Pmh9KTt2YXIgZT1hKDQzMiksdD1hKDI3Nykscj1hKDk1Nyksbz17fTtmb3IoY29uc3QgdCBpbiBlKVtcImRlZmF1bHRcIixcInJlZ2lzdGVyXCIsXCJkZXJlZ2lzdGVyXCJdLmluZGV4T2YodCk8MCYmKG9bdF09KCk9PmVbdF0pO2EuZChuLG8pO2NvbnN0IGk9YXN5bmMgdD0+e2lmKHQgaW5zdGFuY2VvZiBFcnJvcil7bGV0IGE9dC5tZXNzYWdlO2lmKHQubWVzc2FnZS5pbmNsdWRlcyhcInJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIikpe2lmKGE9XCJOb3RpZmljYXRpb25zIHBsYXRmb3JtcyBhcmUgbm90IHN1cHBvcnRlZCBpbiB2ZXJzaW9ucyBiZWxvdyAxLjEzLjAsIHRyeSB1cGRhdGluZyB5b3VyIG5vdGlmaWNhdGlvbnMtc2VydmljZS5cIixlPy5wcm92aWRlcj8uZ2V0U3RhdHVzKXtjb25zdHt2ZXJzaW9uOnR9PWF3YWl0IGUucHJvdmlkZXIuZ2V0U3RhdHVzKCk7YSs9YCBZb3VyIHZlcnNpb24gaXM6ICR7dH1gfXJldHVybiBhfXJldHVybiB0Lm1lc3NhZ2V9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDpcInVua25vd24gZXJyb3IgcmVnaXN0ZXJpbmcgTm90aWZpY2F0aW9uc1wifSxzPWFzeW5jIGU9PntpZihlIGluc3RhbmNlb2YgRXJyb3ImJmUubWVzc2FnZS5pbmNsdWRlcyhcInJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIikpdGhyb3cgbmV3IEVycm9yKGF3YWl0IGkoZSkpO3Rocm93IGV9LGM9XCJvZi1ub3RpZmljYXRpb25zLXNlcnZpY2UtdjFcIixsPVwib2Ytd29ya3NwYWNlLW5vdGlmaWNhdGlvbnMtc3luY1wiLGQ9e2NoYW5uZWxOYW1lOmx9LHU9YXN5bmMoZSx0KT0+e2NvbnN0IGE9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9kLmNoYW5uZWxOYW1lOmMsbj1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoYSx7d2FpdDohMX0pLHI9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9cInJlZ2lzdGVyLXBsYXRmb3JtXCI6XCJyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCI7YXdhaXQgbi5kaXNwYXRjaChyLGUpfTthc3luYyBmdW5jdGlvbiBoKGEpe3RyeXtjb25zdCBuPWEmJlwibm90aWZpY2F0aW9uc0N1c3RvbU1hbmlmZXN0XCJpbiBhP3tjdXN0b21NYW5pZmVzdDphLm5vdGlmaWNhdGlvbnNDdXN0b21NYW5pZmVzdH06dm9pZCAwO24mJm4uY3VzdG9tTWFuaWZlc3Q/Lm1hbmlmZXN0VXVpZCYmKGQuY2hhbm5lbE5hbWU9YCR7bi5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFV1aWR9LSR7bH1gKTtjb25zdCBvPWF3YWl0IGUucmVnaXN0ZXIobik7aWYoYSl7Y29uc3QgZT1hd2FpdCgwLHIucXEpKGZpbi5tZS5pZGVudGl0eSksdD1cIm5vdGlmaWNhdGlvbnNQbGF0Zm9ybU9wdGlvbnNcImluIGE/YS5ub3RpZmljYXRpb25zUGxhdGZvcm1PcHRpb25zOmE7YXdhaXQgdSh7dGhlbWU6ZS50aGVtZSxzY2hlbWU6ZS5kZWZhdWx0U2NoZW1lLC4uLnQsd29ya3NwYWNlUGxhdGZvcm06e2lkZW50aXR5OmZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLmlkZW50aXR5LGFuYWx5dGljczp7aXNTdXBwb3J0ZWQ6ITB9fX0se25vdGlmaWNhdGlvbnNWZXJzaW9uOm8ubm90aWZpY2F0aW9uc1ZlcnNpb259KX1yZXR1cm4oMCx0Lm9zKSh7YWxsb3dlZDohMCxhcGlWZXJzaW9uOmUuVkVSU0lPTixjb21wb25lbnRWZXJzaW9uOm8ubm90aWZpY2F0aW9uc1ZlcnNpb259KSxvfWNhdGNoKGEpeygwLHQub3MpKHthbGxvd2VkOiExLHJlamVjdGlvbkNvZGU6YXdhaXQgaShhKSxhcGlWZXJzaW9uOmUuVkVSU0lPTn0pLGF3YWl0IHMoYSl9fWNvbnN0IGc9YXN5bmMgdD0+e3RyeXtjb25zdHt2ZXJzaW9uOmF9PWF3YWl0IGUucHJvdmlkZXIuZ2V0U3RhdHVzKCk7aWYobnVsbD09PWEpdGhyb3cgbmV3IEVycm9yKFwiTm90aWZpY2F0aW9ucyBzZXJ2aWNlIGlzIG5vdCBjdXJyZW50bHkgcnVubmluZy5cIik7YXdhaXQoYXN5bmMoZSx0KT0+e2NvbnN0IGE9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9kLmNoYW5uZWxOYW1lOmMsbj1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoYSx7d2FpdDohMX0pLHI9dC5ub3RpZmljYXRpb25zVmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKT9cImRlcmVnaXN0ZXItcGxhdGZvcm1cIjpcImRlcmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiO2F3YWl0IG4uZGlzcGF0Y2gocixlKX0pKHtpZDp0fSx7bm90aWZpY2F0aW9uc1ZlcnNpb246YX0pfWNhdGNoKGUpe2F3YWl0IHMoZSl9fX0pKCksbW9kdWxlLmV4cG9ydHM9bn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3RpZmljYXRpb25zLmpzLm1hcCIsImltcG9ydCBlIGZyb21cInZvaWQtZWxlbWVudHNcIjt2YXIgdD0vXFxzKFteJ1wiL1xccz48XSs/KVtcXHMvPl18KFteXFxzPV0rKT1cXHM/KFwiLio/XCJ8Jy4qPycpL2c7ZnVuY3Rpb24gbihuKXt2YXIgcj17dHlwZTpcInRhZ1wiLG5hbWU6XCJcIix2b2lkRWxlbWVudDohMSxhdHRyczp7fSxjaGlsZHJlbjpbXX0saT1uLm1hdGNoKC88XFwvPyhbXlxcc10rPylbL1xccz5dLyk7aWYoaSYmKHIubmFtZT1pWzFdLChlW2lbMV1dfHxcIi9cIj09PW4uY2hhckF0KG4ubGVuZ3RoLTIpKSYmKHIudm9pZEVsZW1lbnQ9ITApLHIubmFtZS5zdGFydHNXaXRoKFwiIS0tXCIpKSl7dmFyIHM9bi5pbmRleE9mKFwiLS1cXHgzZVwiKTtyZXR1cm57dHlwZTpcImNvbW1lbnRcIixjb21tZW50Oi0xIT09cz9uLnNsaWNlKDQscyk6XCJcIn19Zm9yKHZhciBhPW5ldyBSZWdFeHAodCksYz1udWxsO251bGwhPT0oYz1hLmV4ZWMobikpOylpZihjWzBdLnRyaW0oKSlpZihjWzFdKXt2YXIgbz1jWzFdLnRyaW0oKSxsPVtvLFwiXCJdO28uaW5kZXhPZihcIj1cIik+LTEmJihsPW8uc3BsaXQoXCI9XCIpKSxyLmF0dHJzW2xbMF1dPWxbMV0sYS5sYXN0SW5kZXgtLX1lbHNlIGNbMl0mJihyLmF0dHJzW2NbMl1dPWNbM10udHJpbSgpLnN1YnN0cmluZygxLGNbM10ubGVuZ3RoLTEpKTtyZXR1cm4gcn12YXIgcj0vPFthLXpBLVowLTlcXC1cXCFcXC9dKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vZyxpPS9eXFxzKiQvLHM9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBhKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidGV4dFwiOnJldHVybiBlK3QuY29udGVudDtjYXNlXCJ0YWdcIjpyZXR1cm4gZSs9XCI8XCIrdC5uYW1lKyh0LmF0dHJzP2Z1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQucHVzaChuKyc9XCInK2Vbbl0rJ1wiJyk7cmV0dXJuIHQubGVuZ3RoP1wiIFwiK3Quam9pbihcIiBcIik6XCJcIn0odC5hdHRycyk6XCJcIikrKHQudm9pZEVsZW1lbnQ/XCIvPlwiOlwiPlwiKSx0LnZvaWRFbGVtZW50P2U6ZSt0LmNoaWxkcmVuLnJlZHVjZShhLFwiXCIpK1wiPC9cIit0Lm5hbWUrXCI+XCI7Y2FzZVwiY29tbWVudFwiOnJldHVybiBlK1wiXFx4M2MhLS1cIit0LmNvbW1lbnQrXCItLVxceDNlXCJ9fXZhciBjPXtwYXJzZTpmdW5jdGlvbihlLHQpe3R8fCh0PXt9KSx0LmNvbXBvbmVudHN8fCh0LmNvbXBvbmVudHM9cyk7dmFyIGEsYz1bXSxvPVtdLGw9LTEsbT0hMTtpZigwIT09ZS5pbmRleE9mKFwiPFwiKSl7dmFyIHU9ZS5pbmRleE9mKFwiPFwiKTtjLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDotMT09PXU/ZTplLnN1YnN0cmluZygwLHUpfSl9cmV0dXJuIGUucmVwbGFjZShyLGZ1bmN0aW9uKHIscyl7aWYobSl7aWYociE9PVwiPC9cIithLm5hbWUrXCI+XCIpcmV0dXJuO209ITF9dmFyIHUsZj1cIi9cIiE9PXIuY2hhckF0KDEpLGg9ci5zdGFydHNXaXRoKFwiXFx4M2MhLS1cIikscD1zK3IubGVuZ3RoLGQ9ZS5jaGFyQXQocCk7aWYoaCl7dmFyIHY9bihyKTtyZXR1cm4gbDwwPyhjLnB1c2godiksYyk6KCh1PW9bbF0pLmNoaWxkcmVuLnB1c2godiksYyl9aWYoZiYmKGwrKyxcInRhZ1wiPT09KGE9bihyKSkudHlwZSYmdC5jb21wb25lbnRzW2EubmFtZV0mJihhLnR5cGU9XCJjb21wb25lbnRcIixtPSEwKSxhLnZvaWRFbGVtZW50fHxtfHwhZHx8XCI8XCI9PT1kfHxhLmNoaWxkcmVuLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDplLnNsaWNlKHAsZS5pbmRleE9mKFwiPFwiLHApKX0pLDA9PT1sJiZjLnB1c2goYSksKHU9b1tsLTFdKSYmdS5jaGlsZHJlbi5wdXNoKGEpLG9bbF09YSksKCFmfHxhLnZvaWRFbGVtZW50KSYmKGw+LTEmJihhLnZvaWRFbGVtZW50fHxhLm5hbWU9PT1yLnNsaWNlKDIsLTEpKSYmKGwtLSxhPS0xPT09bD9jOm9bbF0pLCFtJiZcIjxcIiE9PWQmJmQpKXt1PS0xPT09bD9jOm9bbF0uY2hpbGRyZW47dmFyIHg9ZS5pbmRleE9mKFwiPFwiLHApLGc9ZS5zbGljZShwLC0xPT09eD92b2lkIDA6eCk7aS50ZXN0KGcpJiYoZz1cIiBcIiksKHg+LTEmJmwrdS5sZW5ndGg+PTB8fFwiIFwiIT09ZykmJnUucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Omd9KX19KSxjfSxzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrYShcIlwiLHQpfSxcIlwiKX19O2V4cG9ydCBkZWZhdWx0IGM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLXBhcnNlLXN0cmluZ2lmeS5tb2R1bGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzU3RyaW5nID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuY29uc3QgZGVmZXIgPSAoKSA9PiB7XG4gIGxldCByZXM7XG4gIGxldCByZWo7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzID0gcmVzb2x2ZTtcbiAgICByZWogPSByZWplY3Q7XG4gIH0pO1xuICBwcm9taXNlLnJlc29sdmUgPSByZXM7XG4gIHByb21pc2UucmVqZWN0ID0gcmVqO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG5jb25zdCBtYWtlU3RyaW5nID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiAnJyArIG9iamVjdDtcbn07XG5jb25zdCBjb3B5ID0gKGEsIHMsIHQpID0+IHtcbiAgYS5mb3JFYWNoKG0gPT4ge1xuICAgIGlmIChzW21dKSB0W21dID0gc1ttXTtcbiAgfSk7XG59O1xuY29uc3QgbGFzdE9mUGF0aFNlcGFyYXRvclJlZ0V4cCA9IC8jIyMvZztcbmNvbnN0IGNsZWFuS2V5ID0ga2V5ID0+IGtleSAmJiBrZXkuaW5kZXhPZignIyMjJykgPiAtMSA/IGtleS5yZXBsYWNlKGxhc3RPZlBhdGhTZXBhcmF0b3JSZWdFeHAsICcuJykgOiBrZXk7XG5jb25zdCBjYW5Ob3RUcmF2ZXJzZURlZXBlciA9IG9iamVjdCA9PiAhb2JqZWN0IHx8IGlzU3RyaW5nKG9iamVjdCk7XG5jb25zdCBnZXRMYXN0T2ZQYXRoID0gKG9iamVjdCwgcGF0aCwgRW1wdHkpID0+IHtcbiAgY29uc3Qgc3RhY2sgPSAhaXNTdHJpbmcocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLicpO1xuICBsZXQgc3RhY2tJbmRleCA9IDA7XG4gIHdoaWxlIChzdGFja0luZGV4IDwgc3RhY2subGVuZ3RoIC0gMSkge1xuICAgIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcihvYmplY3QpKSByZXR1cm4ge307XG4gICAgY29uc3Qga2V5ID0gY2xlYW5LZXkoc3RhY2tbc3RhY2tJbmRleF0pO1xuICAgIGlmICghb2JqZWN0W2tleV0gJiYgRW1wdHkpIG9iamVjdFtrZXldID0gbmV3IEVtcHR5KCk7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QgPSB7fTtcbiAgICB9XG4gICAgKytzdGFja0luZGV4O1xuICB9XG4gIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcihvYmplY3QpKSByZXR1cm4ge307XG4gIHJldHVybiB7XG4gICAgb2JqOiBvYmplY3QsXG4gICAgazogY2xlYW5LZXkoc3RhY2tbc3RhY2tJbmRleF0pXG4gIH07XG59O1xuY29uc3Qgc2V0UGF0aCA9IChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIGlmIChvYmogIT09IHVuZGVmaW5lZCB8fCBwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIG9ialtrXSA9IG5ld1ZhbHVlO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgbGV0IHAgPSBwYXRoLnNsaWNlKDAsIHBhdGgubGVuZ3RoIC0gMSk7XG4gIGxldCBsYXN0ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHAsIE9iamVjdCk7XG4gIHdoaWxlIChsYXN0Lm9iaiA9PT0gdW5kZWZpbmVkICYmIHAubGVuZ3RoKSB7XG4gICAgZSA9IGAke3BbcC5sZW5ndGggLSAxXX0uJHtlfWA7XG4gICAgcCA9IHAuc2xpY2UoMCwgcC5sZW5ndGggLSAxKTtcbiAgICBsYXN0ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHAsIE9iamVjdCk7XG4gICAgaWYgKGxhc3QgJiYgbGFzdC5vYmogJiYgdHlwZW9mIGxhc3Qub2JqW2Ake2xhc3Qua30uJHtlfWBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGFzdC5vYmogPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGxhc3Qub2JqW2Ake2xhc3Qua30uJHtlfWBdID0gbmV3VmFsdWU7XG59O1xuY29uc3QgcHVzaFBhdGggPSAob2JqZWN0LCBwYXRoLCBuZXdWYWx1ZSwgY29uY2F0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCk7XG4gIG9ialtrXSA9IG9ialtrXSB8fCBbXTtcbiAgb2JqW2tdLnB1c2gobmV3VmFsdWUpO1xufTtcbmNvbnN0IGdldFBhdGggPSAob2JqZWN0LCBwYXRoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvYmosXG4gICAga1xuICB9ID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgpO1xuICBpZiAoIW9iaikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIG9ialtrXTtcbn07XG5jb25zdCBnZXRQYXRoV2l0aERlZmF1bHRzID0gKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBnZXRQYXRoKGRhdGEsIGtleSk7XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBnZXRQYXRoKGRlZmF1bHREYXRhLCBrZXkpO1xufTtcbmNvbnN0IGRlZXBFeHRlbmQgPSAodGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSkgPT4ge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XG4gICAgaWYgKHByb3AgIT09ICdfX3Byb3RvX18nICYmIHByb3AgIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGlmIChwcm9wIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoaXNTdHJpbmcodGFyZ2V0W3Byb3BdKSB8fCB0YXJnZXRbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcgfHwgaXNTdHJpbmcoc291cmNlW3Byb3BdKSB8fCBzb3VyY2VbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICBpZiAob3ZlcndyaXRlKSB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSwgb3ZlcndyaXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbmNvbnN0IHJlZ2V4RXNjYXBlID0gc3RyID0+IHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xudmFyIF9lbnRpdHlNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5OycsXG4gICcvJzogJyYjeDJGOydcbn07XG5jb25zdCBlc2NhcGUgPSBkYXRhID0+IHtcbiAgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgcyA9PiBfZW50aXR5TWFwW3NdKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5jbGFzcyBSZWdFeHBDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKGNhcGFjaXR5KSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMucmVnRXhwTWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMucmVnRXhwUXVldWUgPSBbXTtcbiAgfVxuICBnZXRSZWdFeHAocGF0dGVybikge1xuICAgIGNvbnN0IHJlZ0V4cEZyb21DYWNoZSA9IHRoaXMucmVnRXhwTWFwLmdldChwYXR0ZXJuKTtcbiAgICBpZiAocmVnRXhwRnJvbUNhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZWdFeHBGcm9tQ2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IHJlZ0V4cE5ldyA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgaWYgKHRoaXMucmVnRXhwUXVldWUubGVuZ3RoID09PSB0aGlzLmNhcGFjaXR5KSB7XG4gICAgICB0aGlzLnJlZ0V4cE1hcC5kZWxldGUodGhpcy5yZWdFeHBRdWV1ZS5zaGlmdCgpKTtcbiAgICB9XG4gICAgdGhpcy5yZWdFeHBNYXAuc2V0KHBhdHRlcm4sIHJlZ0V4cE5ldyk7XG4gICAgdGhpcy5yZWdFeHBRdWV1ZS5wdXNoKHBhdHRlcm4pO1xuICAgIHJldHVybiByZWdFeHBOZXc7XG4gIH1cbn1cbmNvbnN0IGNoYXJzID0gWycgJywgJywnLCAnPycsICchJywgJzsnXTtcbmNvbnN0IGxvb2tzTGlrZU9iamVjdFBhdGhSZWdFeHBDYWNoZSA9IG5ldyBSZWdFeHBDYWNoZSgyMCk7XG5jb25zdCBsb29rc0xpa2VPYmplY3RQYXRoID0gKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcikgPT4ge1xuICBuc1NlcGFyYXRvciA9IG5zU2VwYXJhdG9yIHx8ICcnO1xuICBrZXlTZXBhcmF0b3IgPSBrZXlTZXBhcmF0b3IgfHwgJyc7XG4gIGNvbnN0IHBvc3NpYmxlQ2hhcnMgPSBjaGFycy5maWx0ZXIoYyA9PiBuc1NlcGFyYXRvci5pbmRleE9mKGMpIDwgMCAmJiBrZXlTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDApO1xuICBpZiAocG9zc2libGVDaGFycy5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICBjb25zdCByID0gbG9va3NMaWtlT2JqZWN0UGF0aFJlZ0V4cENhY2hlLmdldFJlZ0V4cChgKCR7cG9zc2libGVDaGFycy5tYXAoYyA9PiBjID09PSAnPycgPyAnXFxcXD8nIDogYykuam9pbignfCcpfSlgKTtcbiAgbGV0IG1hdGNoZWQgPSAhci50ZXN0KGtleSk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIGNvbnN0IGtpID0ga2V5LmluZGV4T2Yoa2V5U2VwYXJhdG9yKTtcbiAgICBpZiAoa2kgPiAwICYmICFyLnRlc3Qoa2V5LnN1YnN0cmluZygwLCBraSkpKSB7XG4gICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWQ7XG59O1xuY29uc3QgZGVlcEZpbmQgPSBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gIGxldCBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuJztcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChvYmpbcGF0aF0pIHJldHVybiBvYmpbcGF0aF07XG4gIGNvbnN0IHRva2VucyA9IHBhdGguc3BsaXQoa2V5U2VwYXJhdG9yKTtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDspIHtcbiAgICBpZiAoIWN1cnJlbnQgfHwgdHlwZW9mIGN1cnJlbnQgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgbmV4dFBhdGggPSAnJztcbiAgICBmb3IgKGxldCBqID0gaTsgaiA8IHRva2Vucy5sZW5ndGg7ICsraikge1xuICAgICAgaWYgKGogIT09IGkpIHtcbiAgICAgICAgbmV4dFBhdGggKz0ga2V5U2VwYXJhdG9yO1xuICAgICAgfVxuICAgICAgbmV4dFBhdGggKz0gdG9rZW5zW2pdO1xuICAgICAgbmV4dCA9IGN1cnJlbnRbbmV4dFBhdGhdO1xuICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXS5pbmRleE9mKHR5cGVvZiBuZXh0KSA+IC0xICYmIGogPCB0b2tlbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gaiAtIGkgKyAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuY29uc3QgZ2V0Q2xlYW5lZENvZGUgPSBjb2RlID0+IGNvZGUgJiYgY29kZS5yZXBsYWNlKCdfJywgJy0nKTtcblxuY29uc3QgY29uc29sZUxvZ2dlciA9IHtcbiAgdHlwZTogJ2xvZ2dlcicsXG4gIGxvZyhhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2xvZycsIGFyZ3MpO1xuICB9LFxuICB3YXJuKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnd2FybicsIGFyZ3MpO1xuICB9LFxuICBlcnJvcihhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgYXJncyk7XG4gIH0sXG4gIG91dHB1dCh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcbmNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMuaW5pdChjb25jcmV0ZUxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cbiAgaW5pdChjb25jcmV0ZUxvZ2dlcikge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLnByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8ICdpMThuZXh0Oic7XG4gICAgdGhpcy5sb2dnZXIgPSBjb25jcmV0ZUxvZ2dlciB8fCBjb25zb2xlTG9nZ2VyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWc7XG4gIH1cbiAgbG9nKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnbG9nJywgJycsIHRydWUpO1xuICB9XG4gIHdhcm4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnJywgdHJ1ZSk7XG4gIH1cbiAgZXJyb3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2Vycm9yJywgJycpO1xuICB9XG4gIGRlcHJlY2F0ZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnd2FybicsICdXQVJOSU5HIERFUFJFQ0FURUQ6ICcsIHRydWUpO1xuICB9XG4gIGZvcndhcmQoYXJncywgbHZsLCBwcmVmaXgsIGRlYnVnT25seSkge1xuICAgIGlmIChkZWJ1Z09ubHkgJiYgIXRoaXMuZGVidWcpIHJldHVybiBudWxsO1xuICAgIGlmIChpc1N0cmluZyhhcmdzWzBdKSkgYXJnc1swXSA9IGAke3ByZWZpeH0ke3RoaXMucHJlZml4fSAke2FyZ3NbMF19YDtcbiAgICByZXR1cm4gdGhpcy5sb2dnZXJbbHZsXShhcmdzKTtcbiAgfVxuICBjcmVhdGUobW9kdWxlTmFtZSkge1xuICAgIHJldHVybiBuZXcgTG9nZ2VyKHRoaXMubG9nZ2VyLCB7XG4gICAgICAuLi57XG4gICAgICAgIHByZWZpeDogYCR7dGhpcy5wcmVmaXh9OiR7bW9kdWxlTmFtZX06YFxuICAgICAgfSxcbiAgICAgIC4uLnRoaXMub3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGNsb25lKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5wcmVmaXggPSBvcHRpb25zLnByZWZpeCB8fCB0aGlzLnByZWZpeDtcbiAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cbn1cbnZhciBiYXNlTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICB9XG4gIG9uKGV2ZW50cywgbGlzdGVuZXIpIHtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB0aGlzLm9ic2VydmVyc1tldmVudF0gPSBuZXcgTWFwKCk7XG4gICAgICBjb25zdCBudW1MaXN0ZW5lcnMgPSB0aGlzLm9ic2VydmVyc1tldmVudF0uZ2V0KGxpc3RlbmVyKSB8fCAwO1xuICAgICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdLnNldChsaXN0ZW5lciwgbnVtTGlzdGVuZXJzICsgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSByZXR1cm47XG4gICAgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH1cbiAgZW1pdChldmVudCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAodGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB7XG4gICAgICBjb25zdCBjbG9uZWQgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzW2V2ZW50XS5lbnRyaWVzKCkpO1xuICAgICAgY2xvbmVkLmZvckVhY2goX3JlZiA9PiB7XG4gICAgICAgIGxldCBbb2JzZXJ2ZXIsIG51bVRpbWVzQWRkZWRdID0gX3JlZjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaW1lc0FkZGVkOyBpKyspIHtcbiAgICAgICAgICBvYnNlcnZlciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9ic2VydmVyc1snKiddKSB7XG4gICAgICBjb25zdCBjbG9uZWQgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzWycqJ10uZW50cmllcygpKTtcbiAgICAgIGNsb25lZC5mb3JFYWNoKF9yZWYyID0+IHtcbiAgICAgICAgbGV0IFtvYnNlcnZlciwgbnVtVGltZXNBZGRlZF0gPSBfcmVmMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaW1lc0FkZGVkOyBpKyspIHtcbiAgICAgICAgICBvYnNlcnZlci5hcHBseShvYnNlcnZlciwgW2V2ZW50LCAuLi5hcmdzXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBSZXNvdXJjZVN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBuczogWyd0cmFuc2xhdGlvbiddLFxuICAgICAgZGVmYXVsdE5TOiAndHJhbnNsYXRpb24nXG4gICAgfTtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZiAodGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID0gJy4nO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBhZGROYW1lc3BhY2VzKG5zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKSA8IDApIHtcbiAgICAgIHRoaXMub3B0aW9ucy5ucy5wdXNoKG5zKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlTmFtZXNwYWNlcyhucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm9wdGlvbnMubnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVzb3VyY2UobG5nLCBucywga2V5KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGNvbnN0IGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgY29uc3QgaWdub3JlSlNPTlN0cnVjdHVyZSA9IG9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlIDogdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmU7XG4gICAgbGV0IHBhdGg7XG4gICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKC4uLmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSAmJiBrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgICBwYXRoLnB1c2goLi4ua2V5LnNwbGl0KGtleVNlcGFyYXRvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKTtcbiAgICBpZiAoIXJlc3VsdCAmJiAhbnMgJiYgIWtleSAmJiBsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIGxuZyA9IHBhdGhbMF07XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgICBrZXkgPSBwYXRoLnNsaWNlKDIpLmpvaW4oJy4nKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCB8fCAhaWdub3JlSlNPTlN0cnVjdHVyZSB8fCAhaXNTdHJpbmcoa2V5KSkgcmV0dXJuIHJlc3VsdDtcbiAgICByZXR1cm4gZGVlcEZpbmQodGhpcy5kYXRhICYmIHRoaXMuZGF0YVtsbmddICYmIHRoaXMuZGF0YVtsbmddW25zXSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICB9XG4gIGFkZFJlc291cmNlKGxuZywgbnMsIGtleSwgdmFsdWUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgc2lsZW50OiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICBsZXQgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICBpZiAoa2V5KSBwYXRoID0gcGF0aC5jb25jYXQoa2V5U2VwYXJhdG9yID8ga2V5LnNwbGl0KGtleVNlcGFyYXRvcikgOiBrZXkpO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIHZhbHVlID0gbnM7XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgfVxuICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgc2V0UGF0aCh0aGlzLmRhdGEsIHBhdGgsIHZhbHVlKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywga2V5LCB2YWx1ZSk7XG4gIH1cbiAgYWRkUmVzb3VyY2VzKGxuZywgbnMsIHJlc291cmNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7XG4gICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IG0gaW4gcmVzb3VyY2VzKSB7XG4gICAgICBpZiAoaXNTdHJpbmcocmVzb3VyY2VzW21dKSB8fCBBcnJheS5pc0FycmF5KHJlc291cmNlc1ttXSkpIHRoaXMuYWRkUmVzb3VyY2UobG5nLCBucywgbSwgcmVzb3VyY2VzW21dLCB7XG4gICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgnYWRkZWQnLCBsbmcsIG5zLCByZXNvdXJjZXMpO1xuICB9XG4gIGFkZFJlc291cmNlQnVuZGxlKGxuZywgbnMsIHJlc291cmNlcywgZGVlcCwgb3ZlcndyaXRlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IHtcbiAgICAgIHNpbGVudDogZmFsc2UsXG4gICAgICBza2lwQ29weTogZmFsc2VcbiAgICB9O1xuICAgIGxldCBwYXRoID0gW2xuZywgbnNdO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIGRlZXAgPSByZXNvdXJjZXM7XG4gICAgICByZXNvdXJjZXMgPSBucztcbiAgICAgIG5zID0gcGF0aFsxXTtcbiAgICB9XG4gICAgdGhpcy5hZGROYW1lc3BhY2VzKG5zKTtcbiAgICBsZXQgcGFjayA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKSB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMuc2tpcENvcHkpIHJlc291cmNlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzb3VyY2VzKSk7XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIGRlZXBFeHRlbmQocGFjaywgcmVzb3VyY2VzLCBvdmVyd3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrID0ge1xuICAgICAgICAuLi5wYWNrLFxuICAgICAgICAuLi5yZXNvdXJjZXNcbiAgICAgIH07XG4gICAgfVxuICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCBwYWNrKTtcbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuICByZW1vdmVSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbG5nXVtuc107XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTmFtZXNwYWNlcyhucyk7XG4gICAgdGhpcy5lbWl0KCdyZW1vdmVkJywgbG5nLCBucyk7XG4gIH1cbiAgaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZ2V0UmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIGlmICghbnMpIG5zID0gdGhpcy5vcHRpb25zLmRlZmF1bHROUztcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgPT09ICd2MScpIHJldHVybiB7XG4gICAgICAuLi57fSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucylcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpO1xuICB9XG4gIGdldERhdGFCeUxhbmd1YWdlKGxuZykge1xuICAgIHJldHVybiB0aGlzLmRhdGFbbG5nXTtcbiAgfVxuICBoYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobG5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YUJ5TGFuZ3VhZ2UobG5nKTtcbiAgICBjb25zdCBuID0gZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKSB8fCBbXTtcbiAgICByZXR1cm4gISFuLmZpbmQodiA9PiBkYXRhW3ZdICYmIE9iamVjdC5rZXlzKGRhdGFbdl0pLmxlbmd0aCA+IDApO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cbnZhciBwb3N0UHJvY2Vzc29yID0ge1xuICBwcm9jZXNzb3JzOiB7fSxcbiAgYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpIHtcbiAgICB0aGlzLnByb2Nlc3NvcnNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuICB9LFxuICBoYW5kbGUocHJvY2Vzc29ycywgdmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcikge1xuICAgIHByb2Nlc3NvcnMuZm9yRWFjaChwcm9jZXNzb3IgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdKSB2YWx1ZSA9IHRoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdLnByb2Nlc3ModmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjaGVja2VkTG9hZGVkRm9yID0ge307XG5jbGFzcyBUcmFuc2xhdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VydmljZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgc3VwZXIoKTtcbiAgICBjb3B5KFsncmVzb3VyY2VTdG9yZScsICdsYW5ndWFnZVV0aWxzJywgJ3BsdXJhbFJlc29sdmVyJywgJ2ludGVycG9sYXRvcicsICdiYWNrZW5kQ29ubmVjdG9yJywgJ2kxOG5Gb3JtYXQnLCAndXRpbHMnXSwgc2VydmljZXMsIHRoaXMpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgndHJhbnNsYXRvcicpO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlKGxuZykge1xuICAgIGlmIChsbmcpIHRoaXMubGFuZ3VhZ2UgPSBsbmc7XG4gIH1cbiAgZXhpc3RzKGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICAgIH07XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXNvbHZlZCAmJiByZXNvbHZlZC5yZXMgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBleHRyYWN0RnJvbUtleShrZXksIG9wdGlvbnMpIHtcbiAgICBsZXQgbnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgIGlmIChuc1NlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSBuc1NlcGFyYXRvciA9ICc6JztcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGxldCBuYW1lc3BhY2VzID0gb3B0aW9ucy5ucyB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TIHx8IFtdO1xuICAgIGNvbnN0IHdvdWxkQ2hlY2tGb3JOc0luS2V5ID0gbnNTZXBhcmF0b3IgJiYga2V5LmluZGV4T2YobnNTZXBhcmF0b3IpID4gLTE7XG4gICAgY29uc3Qgc2VlbXNOYXR1cmFsTGFuZ3VhZ2UgPSAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yICYmICFvcHRpb25zLmtleVNlcGFyYXRvciAmJiAhdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkTnNTZXBhcmF0b3IgJiYgIW9wdGlvbnMubnNTZXBhcmF0b3IgJiYgIWxvb2tzTGlrZU9iamVjdFBhdGgoa2V5LCBuc1NlcGFyYXRvciwga2V5U2VwYXJhdG9yKTtcbiAgICBpZiAod291bGRDaGVja0Zvck5zSW5LZXkgJiYgIXNlZW1zTmF0dXJhbExhbmd1YWdlKSB7XG4gICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWVzcGFjZXM6IGlzU3RyaW5nKG5hbWVzcGFjZXMpID8gW25hbWVzcGFjZXNdIDogbmFtZXNwYWNlc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3BsaXQobnNTZXBhcmF0b3IpO1xuICAgICAgaWYgKG5zU2VwYXJhdG9yICE9PSBrZXlTZXBhcmF0b3IgfHwgbnNTZXBhcmF0b3IgPT09IGtleVNlcGFyYXRvciAmJiB0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihwYXJ0c1swXSkgPiAtMSkgbmFtZXNwYWNlcyA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICBrZXkgPSBwYXJ0cy5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBuYW1lc3BhY2VzOiBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXNcbiAgICB9O1xuICB9XG4gIHRyYW5zbGF0ZShrZXlzLCBvcHRpb25zLCBsYXN0S2V5KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyAmJiB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIoYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykgb3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwga2V5cyA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkga2V5cyA9IFtTdHJpbmcoa2V5cyldO1xuICAgIGNvbnN0IHJldHVybkRldGFpbHMgPSBvcHRpb25zLnJldHVybkRldGFpbHMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMucmV0dXJuRGV0YWlscyA6IHRoaXMub3B0aW9ucy5yZXR1cm5EZXRhaWxzO1xuICAgIGNvbnN0IGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgY29uc3Qge1xuICAgICAga2V5LFxuICAgICAgbmFtZXNwYWNlc1xuICAgIH0gPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGtleXNba2V5cy5sZW5ndGggLSAxXSwgb3B0aW9ucyk7XG4gICAgY29uc3QgbmFtZXNwYWNlID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGxuZyA9IG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGUgPSBvcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlIHx8IHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZTtcbiAgICBpZiAobG5nICYmIGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykge1xuICAgICAgaWYgKGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlKSB7XG4gICAgICAgIGNvbnN0IG5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvciB8fCB0aGlzLm9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlczogYCR7bmFtZXNwYWNlfSR7bnNTZXBhcmF0b3J9JHtrZXl9YCxcbiAgICAgICAgICAgIHVzZWRLZXk6IGtleSxcbiAgICAgICAgICAgIGV4YWN0VXNlZEtleToga2V5LFxuICAgICAgICAgICAgdXNlZExuZzogbG5nLFxuICAgICAgICAgICAgdXNlZE5TOiBuYW1lc3BhY2UsXG4gICAgICAgICAgICB1c2VkUGFyYW1zOiB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bmFtZXNwYWNlfSR7bnNTZXBhcmF0b3J9JHtrZXl9YDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzOiBrZXksXG4gICAgICAgICAgdXNlZEtleToga2V5LFxuICAgICAgICAgIGV4YWN0VXNlZEtleToga2V5LFxuICAgICAgICAgIHVzZWRMbmc6IGxuZyxcbiAgICAgICAgICB1c2VkTlM6IG5hbWVzcGFjZSxcbiAgICAgICAgICB1c2VkUGFyYW1zOiB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZShrZXlzLCBvcHRpb25zKTtcbiAgICBsZXQgcmVzID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzO1xuICAgIGNvbnN0IHJlc1VzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC51c2VkS2V5IHx8IGtleTtcbiAgICBjb25zdCByZXNFeGFjdFVzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC5leGFjdFVzZWRLZXkgfHwga2V5O1xuICAgIGNvbnN0IHJlc1R5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHJlcyk7XG4gICAgY29uc3Qgbm9PYmplY3QgPSBbJ1tvYmplY3QgTnVtYmVyXScsICdbb2JqZWN0IEZ1bmN0aW9uXScsICdbb2JqZWN0IFJlZ0V4cF0nXTtcbiAgICBjb25zdCBqb2luQXJyYXlzID0gb3B0aW9ucy5qb2luQXJyYXlzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmpvaW5BcnJheXMgOiB0aGlzLm9wdGlvbnMuam9pbkFycmF5cztcbiAgICBjb25zdCBoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCA9ICF0aGlzLmkxOG5Gb3JtYXQgfHwgdGhpcy5pMThuRm9ybWF0LmhhbmRsZUFzT2JqZWN0O1xuICAgIGNvbnN0IGhhbmRsZUFzT2JqZWN0ID0gIWlzU3RyaW5nKHJlcykgJiYgdHlwZW9mIHJlcyAhPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiByZXMgIT09ICdudW1iZXInO1xuICAgIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiByZXMgJiYgaGFuZGxlQXNPYmplY3QgJiYgbm9PYmplY3QuaW5kZXhPZihyZXNUeXBlKSA8IDAgJiYgIShpc1N0cmluZyhqb2luQXJyYXlzKSAmJiBBcnJheS5pc0FycmF5KHJlcykpKSB7XG4gICAgICBpZiAoIW9wdGlvbnMucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybignYWNjZXNzaW5nIGFuIG9iamVjdCAtIGJ1dCByZXR1cm5PYmplY3RzIG9wdGlvbnMgaXMgbm90IGVuYWJsZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIgPyB0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyKHJlc1VzZWRLZXksIHJlcywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgfSkgOiBga2V5ICcke2tleX0gKCR7dGhpcy5sYW5ndWFnZX0pJyByZXR1cm5lZCBhbiBvYmplY3QgaW5zdGVhZCBvZiBzdHJpbmcuYDtcbiAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICByZXNvbHZlZC5yZXMgPSByO1xuICAgICAgICAgIHJlc29sdmVkLnVzZWRQYXJhbXMgPSB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzVHlwZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHJlcyk7XG4gICAgICAgIGNvbnN0IGNvcHkgPSByZXNUeXBlSXNBcnJheSA/IFtdIDoge307XG4gICAgICAgIGNvbnN0IG5ld0tleVRvVXNlID0gcmVzVHlwZUlzQXJyYXkgPyByZXNFeGFjdFVzZWRLZXkgOiByZXNVc2VkS2V5O1xuICAgICAgICBmb3IgKGNvbnN0IG0gaW4gcmVzKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXMsIG0pKSB7XG4gICAgICAgICAgICBjb25zdCBkZWVwS2V5ID0gYCR7bmV3S2V5VG9Vc2V9JHtrZXlTZXBhcmF0b3J9JHttfWA7XG4gICAgICAgICAgICBjb3B5W21dID0gdGhpcy50cmFuc2xhdGUoZGVlcEtleSwge1xuICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgam9pbkFycmF5czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY29weVttXSA9PT0gZGVlcEtleSkgY29weVttXSA9IHJlc1ttXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzID0gY29weTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0ICYmIGlzU3RyaW5nKGpvaW5BcnJheXMpICYmIEFycmF5LmlzQXJyYXkocmVzKSkge1xuICAgICAgcmVzID0gcmVzLmpvaW4oam9pbkFycmF5cyk7XG4gICAgICBpZiAocmVzKSByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgbGFzdEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VkRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgbGV0IHVzZWRLZXkgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgIWlzU3RyaW5nKG9wdGlvbnMuY291bnQpO1xuICAgICAgY29uc3QgaGFzRGVmYXVsdFZhbHVlID0gVHJhbnNsYXRvci5oYXNEZWZhdWx0VmFsdWUob3B0aW9ucyk7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWVTdWZmaXggPSBuZWVkc1BsdXJhbEhhbmRsaW5nID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgobG5nLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKSA6ICcnO1xuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlU3VmZml4T3JkaW5hbEZhbGxiYWNrID0gb3B0aW9ucy5vcmRpbmFsICYmIG5lZWRzUGx1cmFsSGFuZGxpbmcgPyB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChsbmcsIG9wdGlvbnMuY291bnQsIHtcbiAgICAgICAgb3JkaW5hbDogZmFsc2VcbiAgICAgIH0pIDogJyc7XG4gICAgICBjb25zdCBuZWVkc1plcm9TdWZmaXhMb29rdXAgPSBuZWVkc1BsdXJhbEhhbmRsaW5nICYmICFvcHRpb25zLm9yZGluYWwgJiYgb3B0aW9ucy5jb3VudCA9PT0gMCAmJiB0aGlzLnBsdXJhbFJlc29sdmVyLnNob3VsZFVzZUludGxBcGkoKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG5lZWRzWmVyb1N1ZmZpeExvb2t1cCAmJiBvcHRpb25zW2BkZWZhdWx0VmFsdWUke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2BdIHx8IG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7ZGVmYXVsdFZhbHVlU3VmZml4fWBdIHx8IG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7ZGVmYXVsdFZhbHVlU3VmZml4T3JkaW5hbEZhbGxiYWNrfWBdIHx8IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSAmJiBoYXNEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdXNlZERlZmF1bHQgPSB0cnVlO1xuICAgICAgICByZXMgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZExvb2t1cChyZXMpKSB7XG4gICAgICAgIHVzZWRLZXkgPSB0cnVlO1xuICAgICAgICByZXMgPSBrZXk7XG4gICAgICB9XG4gICAgICBjb25zdCBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgPSBvcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5O1xuICAgICAgY29uc3QgcmVzRm9yTWlzc2luZyA9IG1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSAmJiB1c2VkS2V5ID8gdW5kZWZpbmVkIDogcmVzO1xuICAgICAgY29uc3QgdXBkYXRlTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgIT09IHJlcyAmJiB0aGlzLm9wdGlvbnMudXBkYXRlTWlzc2luZztcbiAgICAgIGlmICh1c2VkS2V5IHx8IHVzZWREZWZhdWx0IHx8IHVwZGF0ZU1pc3NpbmcpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKHVwZGF0ZU1pc3NpbmcgPyAndXBkYXRlS2V5JyA6ICdtaXNzaW5nS2V5JywgbG5nLCBuYW1lc3BhY2UsIGtleSwgdXBkYXRlTWlzc2luZyA/IGRlZmF1bHRWYWx1ZSA6IHJlcyk7XG4gICAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgICBjb25zdCBmayA9IHRoaXMucmVzb2x2ZShrZXksIHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGZrICYmIGZrLnJlcykgdGhpcy5sb2dnZXIud2FybignU2VlbXMgdGhlIGxvYWRlZCB0cmFuc2xhdGlvbnMgd2VyZSBpbiBmbGF0IEpTT04gZm9ybWF0IGluc3RlYWQgb2YgbmVzdGVkLiBFaXRoZXIgc2V0IGtleVNlcGFyYXRvcjogZmFsc2Ugb24gaW5pdCBvciBtYWtlIHN1cmUgeW91ciB0cmFuc2xhdGlvbnMgYXJlIHB1Ymxpc2hlZCBpbiBuZXN0ZWQgZm9ybWF0LicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsbmdzID0gW107XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZywgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2ZhbGxiYWNrJyAmJiBmYWxsYmFja0xuZ3MgJiYgZmFsbGJhY2tMbmdzWzBdKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWxsYmFja0xuZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxuZ3MucHVzaChmYWxsYmFja0xuZ3NbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICBsbmdzID0gdGhpcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsbmdzLnB1c2gob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VuZCA9IChsLCBrLCBzcGVjaWZpY0RlZmF1bHRWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRGb3JNaXNzaW5nID0gaGFzRGVmYXVsdFZhbHVlICYmIHNwZWNpZmljRGVmYXVsdFZhbHVlICE9PSByZXMgPyBzcGVjaWZpY0RlZmF1bHRWYWx1ZSA6IHJlc0Zvck1pc3Npbmc7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taXNzaW5nS2V5SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZW5kQ29ubmVjdG9yICYmIHRoaXMuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZykge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kQ29ubmVjdG9yLnNhdmVNaXNzaW5nKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVtaXQoJ21pc3NpbmdLZXknLCBsLCBuYW1lc3BhY2UsIGssIHJlcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nUGx1cmFscyAmJiBuZWVkc1BsdXJhbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICBsbmdzLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWZmaXhlcyA9IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4ZXMobGFuZ3VhZ2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwICYmIG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn16ZXJvYF0gJiYgc3VmZml4ZXMuaW5kZXhPZihgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gKSA8IDApIHtcbiAgICAgICAgICAgICAgICBzdWZmaXhlcy5wdXNoKGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN1ZmZpeGVzLmZvckVhY2goc3VmZml4ID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kKFtsYW5ndWFnZV0sIGtleSArIHN1ZmZpeCwgb3B0aW9uc1tgZGVmYXVsdFZhbHVlJHtzdWZmaXh9YF0gfHwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZChsbmdzLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgcmVzb2x2ZWQsIGxhc3RLZXkpO1xuICAgICAgaWYgKHVzZWRLZXkgJiYgcmVzID09PSBrZXkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleSkgcmVzID0gYCR7bmFtZXNwYWNlfToke2tleX1gO1xuICAgICAgaWYgKCh1c2VkS2V5IHx8IHVzZWREZWZhdWx0KSAmJiB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcih0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9NaXNzaW5nS2V5ID8gYCR7bmFtZXNwYWNlfToke2tleX1gIDoga2V5LCB1c2VkRGVmYXVsdCA/IHJlcyA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgcmVzb2x2ZWQucmVzID0gcmVzO1xuICAgICAgcmVzb2x2ZWQudXNlZFBhcmFtcyA9IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMob3B0aW9ucyk7XG4gICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXksIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5wYXJzZSkge1xuICAgICAgcmVzID0gdGhpcy5pMThuRm9ybWF0LnBhcnNlKHJlcywge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9LCBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlIHx8IHJlc29sdmVkLnVzZWRMbmcsIHJlc29sdmVkLnVzZWROUywgcmVzb2x2ZWQudXNlZEtleSwge1xuICAgICAgICByZXNvbHZlZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghb3B0aW9ucy5za2lwSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IuaW5pdCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBza2lwT25WYXJpYWJsZXMgPSBpc1N0cmluZyhyZXMpICYmIChvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzIDogdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzKTtcbiAgICAgIGxldCBuZXN0QmVmO1xuICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBuYiA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgbmVzdEJlZiA9IG5iICYmIG5iLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5yZXBsYWNlICYmICFpc1N0cmluZyhvcHRpb25zLnJlcGxhY2UpID8gb3B0aW9ucy5yZXBsYWNlIDogb3B0aW9ucztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSBkYXRhID0ge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9O1xuICAgICAgcmVzID0gdGhpcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUocmVzLCBkYXRhLCBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlIHx8IHJlc29sdmVkLnVzZWRMbmcsIG9wdGlvbnMpO1xuICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBuYSA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgY29uc3QgbmVzdEFmdCA9IG5hICYmIG5hLmxlbmd0aDtcbiAgICAgICAgaWYgKG5lc3RCZWYgPCBuZXN0QWZ0KSBvcHRpb25zLm5lc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5sbmcgJiYgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScgJiYgcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzKSBvcHRpb25zLmxuZyA9IHRoaXMubGFuZ3VhZ2UgfHwgcmVzb2x2ZWQudXNlZExuZztcbiAgICAgIGlmIChvcHRpb25zLm5lc3QgIT09IGZhbHNlKSByZXMgPSB0aGlzLmludGVycG9sYXRvci5uZXN0KHJlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0S2V5ICYmIGxhc3RLZXlbMF0gPT09IGFyZ3NbMF0gJiYgIW9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgIF90aGlzLmxvZ2dlci53YXJuKGBJdCBzZWVtcyB5b3UgYXJlIG5lc3RpbmcgcmVjdXJzaXZlbHkga2V5OiAke2FyZ3NbMF19IGluIGtleTogJHtrZXlbMF19YCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zbGF0ZSguLi5hcmdzLCBrZXkpO1xuICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5pbnRlcnBvbGF0aW9uKSB0aGlzLmludGVycG9sYXRvci5yZXNldCgpO1xuICAgIH1cbiAgICBjb25zdCBwb3N0UHJvY2VzcyA9IG9wdGlvbnMucG9zdFByb2Nlc3MgfHwgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzO1xuICAgIGNvbnN0IHBvc3RQcm9jZXNzb3JOYW1lcyA9IGlzU3RyaW5nKHBvc3RQcm9jZXNzKSA/IFtwb3N0UHJvY2Vzc10gOiBwb3N0UHJvY2VzcztcbiAgICBpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgcmVzICE9PSBudWxsICYmIHBvc3RQcm9jZXNzb3JOYW1lcyAmJiBwb3N0UHJvY2Vzc29yTmFtZXMubGVuZ3RoICYmIG9wdGlvbnMuYXBwbHlQb3N0UHJvY2Vzc29yICE9PSBmYWxzZSkge1xuICAgICAgcmVzID0gcG9zdFByb2Nlc3Nvci5oYW5kbGUocG9zdFByb2Nlc3Nvck5hbWVzLCByZXMsIGtleSwgdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5wb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZCA/IHtcbiAgICAgICAgaTE4blJlc29sdmVkOiB7XG4gICAgICAgICAgLi4ucmVzb2x2ZWQsXG4gICAgICAgICAgdXNlZFBhcmFtczogdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhvcHRpb25zKVxuICAgICAgICB9LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9IDogb3B0aW9ucywgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgcmVzb2x2ZShrZXlzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgdXNlZEtleTtcbiAgICBsZXQgZXhhY3RVc2VkS2V5O1xuICAgIGxldCB1c2VkTG5nO1xuICAgIGxldCB1c2VkTlM7XG4gICAgaWYgKGlzU3RyaW5nKGtleXMpKSBrZXlzID0gW2tleXNdO1xuICAgIGtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWRMb29rdXAoZm91bmQpKSByZXR1cm47XG4gICAgICBjb25zdCBleHRyYWN0ZWQgPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGssIG9wdGlvbnMpO1xuICAgICAgY29uc3Qga2V5ID0gZXh0cmFjdGVkLmtleTtcbiAgICAgIHVzZWRLZXkgPSBrZXk7XG4gICAgICBsZXQgbmFtZXNwYWNlcyA9IGV4dHJhY3RlZC5uYW1lc3BhY2VzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5mYWxsYmFja05TKSBuYW1lc3BhY2VzID0gbmFtZXNwYWNlcy5jb25jYXQodGhpcy5vcHRpb25zLmZhbGxiYWNrTlMpO1xuICAgICAgY29uc3QgbmVlZHNQbHVyYWxIYW5kbGluZyA9IG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCAmJiAhaXNTdHJpbmcob3B0aW9ucy5jb3VudCk7XG4gICAgICBjb25zdCBuZWVkc1plcm9TdWZmaXhMb29rdXAgPSBuZWVkc1BsdXJhbEhhbmRsaW5nICYmICFvcHRpb25zLm9yZGluYWwgJiYgb3B0aW9ucy5jb3VudCA9PT0gMCAmJiB0aGlzLnBsdXJhbFJlc29sdmVyLnNob3VsZFVzZUludGxBcGkoKTtcbiAgICAgIGNvbnN0IG5lZWRzQ29udGV4dEhhbmRsaW5nID0gb3B0aW9ucy5jb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgKGlzU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgfHwgdHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ251bWJlcicpICYmIG9wdGlvbnMuY29udGV4dCAhPT0gJyc7XG4gICAgICBjb25zdCBjb2RlcyA9IG9wdGlvbnMubG5ncyA/IG9wdGlvbnMubG5ncyA6IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSwgb3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgICB1c2VkTlMgPSBucztcbiAgICAgICAgaWYgKCFjaGVja2VkTG9hZGVkRm9yW2Ake2NvZGVzWzBdfS0ke25zfWBdICYmIHRoaXMudXRpbHMgJiYgdGhpcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UgJiYgIXRoaXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKHVzZWROUykpIHtcbiAgICAgICAgICBjaGVja2VkTG9hZGVkRm9yW2Ake2NvZGVzWzBdfS0ke25zfWBdID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBrZXkgXCIke3VzZWRLZXl9XCIgZm9yIGxhbmd1YWdlcyBcIiR7Y29kZXMuam9pbignLCAnKX1cIiB3b24ndCBnZXQgcmVzb2x2ZWQgYXMgbmFtZXNwYWNlIFwiJHt1c2VkTlN9XCIgd2FzIG5vdCB5ZXQgbG9hZGVkYCwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgICB9XG4gICAgICAgIGNvZGVzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICB1c2VkTG5nID0gY29kZTtcbiAgICAgICAgICBjb25zdCBmaW5hbEtleXMgPSBba2V5XTtcbiAgICAgICAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKSB7XG4gICAgICAgICAgICB0aGlzLmkxOG5Gb3JtYXQuYWRkTG9va3VwS2V5cyhmaW5hbEtleXMsIGtleSwgY29kZSwgbnMsIG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGx1cmFsU3VmZml4O1xuICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHBsdXJhbFN1ZmZpeCA9IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGNvZGUsIG9wdGlvbnMuY291bnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgemVyb1N1ZmZpeCA9IGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2A7XG4gICAgICAgICAgICBjb25zdCBvcmRpbmFsUHJlZml4ID0gYCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn1vcmRpbmFsJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfWA7XG4gICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyBwbHVyYWxTdWZmaXgpO1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vcmRpbmFsICYmIHBsdXJhbFN1ZmZpeC5pbmRleE9mKG9yZGluYWxQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goa2V5ICsgcGx1cmFsU3VmZml4LnJlcGxhY2Uob3JkaW5hbFByZWZpeCwgdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuZWVkc1plcm9TdWZmaXhMb29rdXApIHtcbiAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWRzQ29udGV4dEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRLZXkgPSBgJHtrZXl9JHt0aGlzLm9wdGlvbnMuY29udGV4dFNlcGFyYXRvcn0ke29wdGlvbnMuY29udGV4dH1gO1xuICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5KTtcbiAgICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgcGx1cmFsU3VmZml4KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vcmRpbmFsICYmIHBsdXJhbFN1ZmZpeC5pbmRleE9mKG9yZGluYWxQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgcGx1cmFsU3VmZml4LnJlcGxhY2Uob3JkaW5hbFByZWZpeCwgdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChjb250ZXh0S2V5ICsgemVyb1N1ZmZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwb3NzaWJsZUtleTtcbiAgICAgICAgICB3aGlsZSAocG9zc2libGVLZXkgPSBmaW5hbEtleXMucG9wKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkge1xuICAgICAgICAgICAgICBleGFjdFVzZWRLZXkgPSBwb3NzaWJsZUtleTtcbiAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldFJlc291cmNlKGNvZGUsIG5zLCBwb3NzaWJsZUtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICByZXM6IGZvdW5kLFxuICAgICAgdXNlZEtleSxcbiAgICAgIGV4YWN0VXNlZEtleSxcbiAgICAgIHVzZWRMbmcsXG4gICAgICB1c2VkTlNcbiAgICB9O1xuICB9XG4gIGlzVmFsaWRMb29rdXAocmVzKSB7XG4gICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5OdWxsICYmIHJlcyA9PT0gbnVsbCkgJiYgISghdGhpcy5vcHRpb25zLnJldHVybkVtcHR5U3RyaW5nICYmIHJlcyA9PT0gJycpO1xuICB9XG4gIGdldFJlc291cmNlKGNvZGUsIG5zLCBrZXkpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UpIHJldHVybiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VTdG9yZS5nZXRSZXNvdXJjZShjb2RlLCBucywga2V5LCBvcHRpb25zKTtcbiAgfVxuICBnZXRVc2VkUGFyYW1zRGV0YWlscygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY29uc3Qgb3B0aW9uc0tleXMgPSBbJ2RlZmF1bHRWYWx1ZScsICdvcmRpbmFsJywgJ2NvbnRleHQnLCAncmVwbGFjZScsICdsbmcnLCAnbG5ncycsICdmYWxsYmFja0xuZycsICducycsICdrZXlTZXBhcmF0b3InLCAnbnNTZXBhcmF0b3InLCAncmV0dXJuT2JqZWN0cycsICdyZXR1cm5EZXRhaWxzJywgJ2pvaW5BcnJheXMnLCAncG9zdFByb2Nlc3MnLCAnaW50ZXJwb2xhdGlvbiddO1xuICAgIGNvbnN0IHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSA9IG9wdGlvbnMucmVwbGFjZSAmJiAhaXNTdHJpbmcob3B0aW9ucy5yZXBsYWNlKTtcbiAgICBsZXQgZGF0YSA9IHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSA/IG9wdGlvbnMucmVwbGFjZSA6IG9wdGlvbnM7XG4gICAgaWYgKHVzZU9wdGlvbnNSZXBsYWNlRm9yRGF0YSAmJiB0eXBlb2Ygb3B0aW9ucy5jb3VudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRhdGEuY291bnQgPSBvcHRpb25zLmNvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcykge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCF1c2VPcHRpb25zUmVwbGFjZUZvckRhdGEpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBvcHRpb25zS2V5cykge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBzdGF0aWMgaGFzRGVmYXVsdFZhbHVlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwcmVmaXggPSAnZGVmYXVsdFZhbHVlJztcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIG9wdGlvbikgJiYgcHJlZml4ID09PSBvcHRpb24uc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpICYmIHVuZGVmaW5lZCAhPT0gb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgY2FwaXRhbGl6ZSA9IHN0cmluZyA9PiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG5jbGFzcyBMYW5ndWFnZVV0aWwge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN1cHBvcnRlZExuZ3MgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncyB8fCBmYWxzZTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdsYW5ndWFnZVV0aWxzJyk7XG4gIH1cbiAgZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICBjb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSk7XG4gICAgaWYgKCFjb2RlIHx8IGNvZGUuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICBpZiAocC5sZW5ndGggPT09IDIpIHJldHVybiBudWxsO1xuICAgIHAucG9wKCk7XG4gICAgaWYgKHBbcC5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpID09PSAneCcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwLmpvaW4oJy0nKSk7XG4gIH1cbiAgZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkge1xuICAgIGNvZGUgPSBnZXRDbGVhbmVkQ29kZShjb2RlKTtcbiAgICBpZiAoIWNvZGUgfHwgY29kZS5pbmRleE9mKCctJykgPCAwKSByZXR1cm4gY29kZTtcbiAgICBjb25zdCBwID0gY29kZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwWzBdKTtcbiAgfVxuICBmb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgIGlmIChpc1N0cmluZyhjb2RlKSAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMoY29kZSlbMF07XG4gICAgICAgICAgaWYgKGZvcm1hdHRlZENvZGUgJiYgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZykge1xuICAgICAgICAgICAgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdHRlZENvZGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvcm1hdHRlZENvZGUpIHJldHVybiBmb3JtYXR0ZWRDb2RlO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgY29uc3Qgc3BlY2lhbENhc2VzID0gWydoYW5zJywgJ2hhbnQnLCAnbGF0bicsICdjeXJsJywgJ2NhbnMnLCAnbW9uZycsICdhcmFiJ107XG4gICAgICBsZXQgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nKSB7XG4gICAgICAgIHAgPSBwLm1hcChwYXJ0ID0+IHBhcnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChzcGVjaWFsQ2FzZXMuaW5kZXhPZihwWzFdLnRvTG93ZXJDYXNlKCkpID4gLTEpIHBbMV0gPSBjYXBpdGFsaXplKHBbMV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChwWzFdLmxlbmd0aCA9PT0gMikgcFsxXSA9IHBbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHBbMF0gIT09ICdzZ24nICYmIHBbMl0ubGVuZ3RoID09PSAyKSBwWzJdID0gcFsyXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsyXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzJdID0gY2FwaXRhbGl6ZShwWzJdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHAuam9pbignLScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsZWFuQ29kZSB8fCB0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nID8gY29kZS50b0xvd2VyQ2FzZSgpIDogY29kZTtcbiAgfVxuICBpc1N1cHBvcnRlZENvZGUoY29kZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCA9PT0gJ2xhbmd1YWdlT25seScgfHwgdGhpcy5vcHRpb25zLm5vbkV4cGxpY2l0U3VwcG9ydGVkTG5ncykge1xuICAgICAgY29kZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy5zdXBwb3J0ZWRMbmdzIHx8ICF0aGlzLnN1cHBvcnRlZExuZ3MubGVuZ3RoIHx8IHRoaXMuc3VwcG9ydGVkTG5ncy5pbmRleE9mKGNvZGUpID4gLTE7XG4gIH1cbiAgZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGNvZGVzKSB7XG4gICAgaWYgKCFjb2RlcykgcmV0dXJuIG51bGw7XG4gICAgbGV0IGZvdW5kO1xuICAgIGNvZGVzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICAgIGNvbnN0IGNsZWFuZWRMbmcgPSB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKTtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgdGhpcy5pc1N1cHBvcnRlZENvZGUoY2xlYW5lZExuZykpIGZvdW5kID0gY2xlYW5lZExuZztcbiAgICB9KTtcbiAgICBpZiAoIWZvdW5kICYmIHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzKSB7XG4gICAgICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICBpZiAoZm91bmQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbG5nT25seSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkQ29kZShsbmdPbmx5KSkgcmV0dXJuIGZvdW5kID0gbG5nT25seTtcbiAgICAgICAgZm91bmQgPSB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncy5maW5kKHN1cHBvcnRlZExuZyA9PiB7XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZyA9PT0gbG5nT25seSkgcmV0dXJuIHN1cHBvcnRlZExuZztcbiAgICAgICAgICBpZiAoc3VwcG9ydGVkTG5nLmluZGV4T2YoJy0nKSA8IDAgJiYgbG5nT25seS5pbmRleE9mKCctJykgPCAwKSByZXR1cm47XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykgPiAwICYmIGxuZ09ubHkuaW5kZXhPZignLScpIDwgMCAmJiBzdXBwb3J0ZWRMbmcuc3Vic3RyaW5nKDAsIHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykpID09PSBsbmdPbmx5KSByZXR1cm4gc3VwcG9ydGVkTG5nO1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcuaW5kZXhPZihsbmdPbmx5KSA9PT0gMCAmJiBsbmdPbmx5Lmxlbmd0aCA+IDEpIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghZm91bmQpIGZvdW5kID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZylbMF07XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGdldEZhbGxiYWNrQ29kZXMoZmFsbGJhY2tzLCBjb2RlKSB7XG4gICAgaWYgKCFmYWxsYmFja3MpIHJldHVybiBbXTtcbiAgICBpZiAodHlwZW9mIGZhbGxiYWNrcyA9PT0gJ2Z1bmN0aW9uJykgZmFsbGJhY2tzID0gZmFsbGJhY2tzKGNvZGUpO1xuICAgIGlmIChpc1N0cmluZyhmYWxsYmFja3MpKSBmYWxsYmFja3MgPSBbZmFsbGJhY2tzXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWxsYmFja3MpKSByZXR1cm4gZmFsbGJhY2tzO1xuICAgIGlmICghY29kZSkgcmV0dXJuIGZhbGxiYWNrcy5kZWZhdWx0IHx8IFtdO1xuICAgIGxldCBmb3VuZCA9IGZhbGxiYWNrc1tjb2RlXTtcbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKV07XG4gICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzLmRlZmF1bHQ7XG4gICAgcmV0dXJuIGZvdW5kIHx8IFtdO1xuICB9XG4gIHRvUmVzb2x2ZUhpZXJhcmNoeShjb2RlLCBmYWxsYmFja0NvZGUpIHtcbiAgICBjb25zdCBmYWxsYmFja0NvZGVzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrQ29kZSB8fCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgfHwgW10sIGNvZGUpO1xuICAgIGNvbnN0IGNvZGVzID0gW107XG4gICAgY29uc3QgYWRkQ29kZSA9IGMgPT4ge1xuICAgICAgaWYgKCFjKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUoYykpIHtcbiAgICAgICAgY29kZXMucHVzaChjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYHJlamVjdGluZyBsYW5ndWFnZSBjb2RlIG5vdCBmb3VuZCBpbiBzdXBwb3J0ZWRMbmdzOiAke2N9YCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNTdHJpbmcoY29kZSkgJiYgKGNvZGUuaW5kZXhPZignLScpID4gLTEgfHwgY29kZS5pbmRleE9mKCdfJykgPiAtMSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScpIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnbGFuZ3VhZ2VPbmx5JyAmJiB0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2N1cnJlbnRPbmx5JykgYWRkQ29kZSh0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdjdXJyZW50T25seScpIGFkZENvZGUodGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb2RlKSkge1xuICAgICAgYWRkQ29kZSh0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKSk7XG4gICAgfVxuICAgIGZhbGxiYWNrQ29kZXMuZm9yRWFjaChmYyA9PiB7XG4gICAgICBpZiAoY29kZXMuaW5kZXhPZihmYykgPCAwKSBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGZjKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGVzO1xuICB9XG59XG5cbmxldCBzZXRzID0gW3tcbiAgbG5nczogWydhY2gnLCAnYWsnLCAnYW0nLCAnYXJuJywgJ2JyJywgJ2ZpbCcsICdndW4nLCAnbG4nLCAnbWZlJywgJ21nJywgJ21pJywgJ29jJywgJ3B0JywgJ3B0LUJSJywgJ3RnJywgJ3RsJywgJ3RpJywgJ3RyJywgJ3V6JywgJ3dhJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxXG59LCB7XG4gIGxuZ3M6IFsnYWYnLCAnYW4nLCAnYXN0JywgJ2F6JywgJ2JnJywgJ2JuJywgJ2NhJywgJ2RhJywgJ2RlJywgJ2RldicsICdlbCcsICdlbicsICdlbycsICdlcycsICdldCcsICdldScsICdmaScsICdmbycsICdmdXInLCAnZnknLCAnZ2wnLCAnZ3UnLCAnaGEnLCAnaGknLCAnaHUnLCAnaHknLCAnaWEnLCAnaXQnLCAna2snLCAna24nLCAna3UnLCAnbGInLCAnbWFpJywgJ21sJywgJ21uJywgJ21yJywgJ25haCcsICduYXAnLCAnbmInLCAnbmUnLCAnbmwnLCAnbm4nLCAnbm8nLCAnbnNvJywgJ3BhJywgJ3BhcCcsICdwbXMnLCAncHMnLCAncHQtUFQnLCAncm0nLCAnc2NvJywgJ3NlJywgJ3NpJywgJ3NvJywgJ3NvbicsICdzcScsICdzdicsICdzdycsICd0YScsICd0ZScsICd0aycsICd1cicsICd5byddLFxuICBucjogWzEsIDJdLFxuICBmYzogMlxufSwge1xuICBsbmdzOiBbJ2F5JywgJ2JvJywgJ2NnZycsICdmYScsICdodCcsICdpZCcsICdqYScsICdqYm8nLCAna2EnLCAna20nLCAna28nLCAna3knLCAnbG8nLCAnbXMnLCAnc2FoJywgJ3N1JywgJ3RoJywgJ3R0JywgJ3VnJywgJ3ZpJywgJ3dvJywgJ3poJ10sXG4gIG5yOiBbMV0sXG4gIGZjOiAzXG59LCB7XG4gIGxuZ3M6IFsnYmUnLCAnYnMnLCAnY25yJywgJ2R6JywgJ2hyJywgJ3J1JywgJ3NyJywgJ3VrJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA0XG59LCB7XG4gIGxuZ3M6IFsnYXInXSxcbiAgbnI6IFswLCAxLCAyLCAzLCAxMSwgMTAwXSxcbiAgZmM6IDVcbn0sIHtcbiAgbG5nczogWydjcycsICdzayddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogNlxufSwge1xuICBsbmdzOiBbJ2NzYicsICdwbCddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogN1xufSwge1xuICBsbmdzOiBbJ2N5J10sXG4gIG5yOiBbMSwgMiwgMywgOF0sXG4gIGZjOiA4XG59LCB7XG4gIGxuZ3M6IFsnZnInXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDlcbn0sIHtcbiAgbG5nczogWydnYSddLFxuICBucjogWzEsIDIsIDMsIDcsIDExXSxcbiAgZmM6IDEwXG59LCB7XG4gIGxuZ3M6IFsnZ2QnXSxcbiAgbnI6IFsxLCAyLCAzLCAyMF0sXG4gIGZjOiAxMVxufSwge1xuICBsbmdzOiBbJ2lzJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxMlxufSwge1xuICBsbmdzOiBbJ2p2J10sXG4gIG5yOiBbMCwgMV0sXG4gIGZjOiAxM1xufSwge1xuICBsbmdzOiBbJ2t3J10sXG4gIG5yOiBbMSwgMiwgMywgNF0sXG4gIGZjOiAxNFxufSwge1xuICBsbmdzOiBbJ2x0J10sXG4gIG5yOiBbMSwgMiwgMTBdLFxuICBmYzogMTVcbn0sIHtcbiAgbG5nczogWydsdiddLFxuICBucjogWzEsIDIsIDBdLFxuICBmYzogMTZcbn0sIHtcbiAgbG5nczogWydtayddLFxuICBucjogWzEsIDJdLFxuICBmYzogMTdcbn0sIHtcbiAgbG5nczogWydtbmsnXSxcbiAgbnI6IFswLCAxLCAyXSxcbiAgZmM6IDE4XG59LCB7XG4gIGxuZ3M6IFsnbXQnXSxcbiAgbnI6IFsxLCAyLCAxMSwgMjBdLFxuICBmYzogMTlcbn0sIHtcbiAgbG5nczogWydvciddLFxuICBucjogWzIsIDFdLFxuICBmYzogMlxufSwge1xuICBsbmdzOiBbJ3JvJ10sXG4gIG5yOiBbMSwgMiwgMjBdLFxuICBmYzogMjBcbn0sIHtcbiAgbG5nczogWydzbCddLFxuICBucjogWzUsIDEsIDIsIDNdLFxuICBmYzogMjFcbn0sIHtcbiAgbG5nczogWydoZScsICdpdyddLFxuICBucjogWzEsIDIsIDIwLCAyMV0sXG4gIGZjOiAyMlxufV07XG5sZXQgX3J1bGVzUGx1cmFsc1R5cGVzID0ge1xuICAxOiBuID0+IE51bWJlcihuID4gMSksXG4gIDI6IG4gPT4gTnVtYmVyKG4gIT0gMSksXG4gIDM6IG4gPT4gMCxcbiAgNDogbiA9PiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpLFxuICA1OiBuID0+IE51bWJlcihuID09IDAgPyAwIDogbiA9PSAxID8gMSA6IG4gPT0gMiA/IDIgOiBuICUgMTAwID49IDMgJiYgbiAlIDEwMCA8PSAxMCA/IDMgOiBuICUgMTAwID49IDExID8gNCA6IDUpLFxuICA2OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA+PSAyICYmIG4gPD0gNCA/IDEgOiAyKSxcbiAgNzogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMiksXG4gIDg6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogbiAhPSA4ICYmIG4gIT0gMTEgPyAyIDogMyksXG4gIDk6IG4gPT4gTnVtYmVyKG4gPj0gMiksXG4gIDEwOiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPCA3ID8gMiA6IG4gPCAxMSA/IDMgOiA0KSxcbiAgMTE6IG4gPT4gTnVtYmVyKG4gPT0gMSB8fCBuID09IDExID8gMCA6IG4gPT0gMiB8fCBuID09IDEyID8gMSA6IG4gPiAyICYmIG4gPCAyMCA/IDIgOiAzKSxcbiAgMTI6IG4gPT4gTnVtYmVyKG4gJSAxMCAhPSAxIHx8IG4gJSAxMDAgPT0gMTEpLFxuICAxMzogbiA9PiBOdW1iZXIobiAhPT0gMCksXG4gIDE0OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPT0gMyA/IDIgOiAzKSxcbiAgMTU6IG4gPT4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAlIDEwID49IDIgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyKSxcbiAgMTY6IG4gPT4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAhPT0gMCA/IDEgOiAyKSxcbiAgMTc6IG4gPT4gTnVtYmVyKG4gPT0gMSB8fCBuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IDEpLFxuICAxODogbiA9PiBOdW1iZXIobiA9PSAwID8gMCA6IG4gPT0gMSA/IDEgOiAyKSxcbiAgMTk6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDEgJiYgbiAlIDEwMCA8IDExID8gMSA6IG4gJSAxMDAgPiAxMCAmJiBuICUgMTAwIDwgMjAgPyAyIDogMyksXG4gIDIwOiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAwIHx8IG4gJSAxMDAgPiAwICYmIG4gJSAxMDAgPCAyMCA/IDEgOiAyKSxcbiAgMjE6IG4gPT4gTnVtYmVyKG4gJSAxMDAgPT0gMSA/IDEgOiBuICUgMTAwID09IDIgPyAyIDogbiAlIDEwMCA9PSAzIHx8IG4gJSAxMDAgPT0gNCA/IDMgOiAwKSxcbiAgMjI6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogKG4gPCAwIHx8IG4gPiAxMCkgJiYgbiAlIDEwID09IDAgPyAyIDogMylcbn07XG5jb25zdCBub25JbnRsVmVyc2lvbnMgPSBbJ3YxJywgJ3YyJywgJ3YzJ107XG5jb25zdCBpbnRsVmVyc2lvbnMgPSBbJ3Y0J107XG5jb25zdCBzdWZmaXhlc09yZGVyID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufTtcbmNvbnN0IGNyZWF0ZVJ1bGVzID0gKCkgPT4ge1xuICBjb25zdCBydWxlcyA9IHt9O1xuICBzZXRzLmZvckVhY2goc2V0ID0+IHtcbiAgICBzZXQubG5ncy5mb3JFYWNoKGwgPT4ge1xuICAgICAgcnVsZXNbbF0gPSB7XG4gICAgICAgIG51bWJlcnM6IHNldC5ucixcbiAgICAgICAgcGx1cmFsczogX3J1bGVzUGx1cmFsc1R5cGVzW3NldC5mY11cbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcnVsZXM7XG59O1xuY2xhc3MgUGx1cmFsUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihsYW5ndWFnZVV0aWxzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VVdGlscyA9IGxhbmd1YWdlVXRpbHM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdwbHVyYWxSZXNvbHZlcicpO1xuICAgIGlmICgoIXRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiB8fCBpbnRsVmVyc2lvbnMuaW5jbHVkZXModGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OKSkgJiYgKHR5cGVvZiBJbnRsID09PSAndW5kZWZpbmVkJyB8fCAhSW50bC5QbHVyYWxSdWxlcykpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9ICd2Myc7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignWW91ciBlbnZpcm9ubWVudCBzZWVtcyBub3QgdG8gYmUgSW50bCBBUEkgY29tcGF0aWJsZSwgdXNlIGFuIEludGwuUGx1cmFsUnVsZXMgcG9seWZpbGwuIFdpbGwgZmFsbGJhY2sgdG8gdGhlIGNvbXBhdGliaWxpdHlKU09OIHYzIGZvcm1hdCBoYW5kbGluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5ydWxlcyA9IGNyZWF0ZVJ1bGVzKCk7XG4gICAgdGhpcy5wbHVyYWxSdWxlc0NhY2hlID0ge307XG4gIH1cbiAgYWRkUnVsZShsbmcsIG9iaikge1xuICAgIHRoaXMucnVsZXNbbG5nXSA9IG9iajtcbiAgfVxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMucGx1cmFsUnVsZXNDYWNoZSA9IHt9O1xuICB9XG4gIGdldFJ1bGUoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgIGNvbnN0IGNsZWFuZWRDb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSA9PT0gJ2RldicgPyAnZW4nIDogY29kZSk7XG4gICAgICBjb25zdCB0eXBlID0gb3B0aW9ucy5vcmRpbmFsID8gJ29yZGluYWwnIDogJ2NhcmRpbmFsJztcbiAgICAgIGNvbnN0IGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjbGVhbmVkQ29kZSxcbiAgICAgICAgdHlwZVxuICAgICAgfSk7XG4gICAgICBpZiAoY2FjaGVLZXkgaW4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGVbY2FjaGVLZXldO1xuICAgICAgfVxuICAgICAgbGV0IHJ1bGU7XG4gICAgICB0cnkge1xuICAgICAgICBydWxlID0gbmV3IEludGwuUGx1cmFsUnVsZXMoY2xlYW5lZENvZGUsIHtcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghY29kZS5tYXRjaCgvLXxfLykpIHJldHVybjtcbiAgICAgICAgY29uc3QgbG5nUGFydCA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcbiAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZShsbmdQYXJ0LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGx1cmFsUnVsZXNDYWNoZVtjYWNoZUtleV0gPSBydWxlO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJ1bGVzW2NvZGVdIHx8IHRoaXMucnVsZXNbdGhpcy5sYW5ndWFnZVV0aWxzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpXTtcbiAgfVxuICBuZWVkc1BsdXJhbChjb2RlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICByZXR1cm4gcnVsZSAmJiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMubGVuZ3RoID4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA+IDE7XG4gIH1cbiAgZ2V0UGx1cmFsRm9ybXNPZktleShjb2RlLCBrZXkpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4ZXMoY29kZSwgb3B0aW9ucykubWFwKHN1ZmZpeCA9PiBgJHtrZXl9JHtzdWZmaXh9YCk7XG4gIH1cbiAgZ2V0U3VmZml4ZXMoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgIHJldHVybiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMuc29ydCgocGx1cmFsQ2F0ZWdvcnkxLCBwbHVyYWxDYXRlZ29yeTIpID0+IHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkxXSAtIHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkyXSkubWFwKHBsdXJhbENhdGVnb3J5ID0+IGAke3RoaXMub3B0aW9ucy5wcmVwZW5kfSR7b3B0aW9ucy5vcmRpbmFsID8gYG9yZGluYWwke3RoaXMub3B0aW9ucy5wcmVwZW5kfWAgOiAnJ30ke3BsdXJhbENhdGVnb3J5fWApO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS5udW1iZXJzLm1hcChudW1iZXIgPT4gdGhpcy5nZXRTdWZmaXgoY29kZSwgbnVtYmVyLCBvcHRpb25zKSk7XG4gIH1cbiAgZ2V0U3VmZml4KGNvZGUsIGNvdW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG4gICAgaWYgKHJ1bGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnByZXBlbmR9JHtvcHRpb25zLm9yZGluYWwgPyBgb3JkaW5hbCR7dGhpcy5vcHRpb25zLnByZXBlbmR9YCA6ICcnfSR7cnVsZS5zZWxlY3QoY291bnQpfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdWZmaXhSZXRyb0NvbXBhdGlibGUocnVsZSwgY291bnQpO1xuICAgIH1cbiAgICB0aGlzLmxvZ2dlci53YXJuKGBubyBwbHVyYWwgcnVsZSBmb3VuZCBmb3I6ICR7Y29kZX1gKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KSB7XG4gICAgY29uc3QgaWR4ID0gcnVsZS5ub0FicyA/IHJ1bGUucGx1cmFscyhjb3VudCkgOiBydWxlLnBsdXJhbHMoTWF0aC5hYnMoY291bnQpKTtcbiAgICBsZXQgc3VmZml4ID0gcnVsZS5udW1iZXJzW2lkeF07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgaWYgKHN1ZmZpeCA9PT0gMikge1xuICAgICAgICBzdWZmaXggPSAncGx1cmFsJztcbiAgICAgIH0gZWxzZSBpZiAoc3VmZml4ID09PSAxKSB7XG4gICAgICAgIHN1ZmZpeCA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXR1cm5TdWZmaXggPSAoKSA9PiB0aGlzLm9wdGlvbnMucHJlcGVuZCAmJiBzdWZmaXgudG9TdHJpbmcoKSA/IHRoaXMub3B0aW9ucy5wcmVwZW5kICsgc3VmZml4LnRvU3RyaW5nKCkgOiBzdWZmaXgudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjEnKSB7XG4gICAgICBpZiAoc3VmZml4ID09PSAxKSByZXR1cm4gJyc7XG4gICAgICBpZiAodHlwZW9mIHN1ZmZpeCA9PT0gJ251bWJlcicpIHJldHVybiBgX3BsdXJhbF8ke3N1ZmZpeC50b1N0cmluZygpfWA7XG4gICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPT09ICd2MicpIHtcbiAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnByZXBlbmQgJiYgaWR4LnRvU3RyaW5nKCkgPyB0aGlzLm9wdGlvbnMucHJlcGVuZCArIGlkeC50b1N0cmluZygpIDogaWR4LnRvU3RyaW5nKCk7XG4gIH1cbiAgc2hvdWxkVXNlSW50bEFwaSgpIHtcbiAgICByZXR1cm4gIW5vbkludGxWZXJzaW9ucy5pbmNsdWRlcyh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04pO1xuICB9XG59XG5cbmNvbnN0IGRlZXBGaW5kV2l0aERlZmF1bHRzID0gZnVuY3Rpb24gKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpIHtcbiAgbGV0IGtleVNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJy4nO1xuICBsZXQgaWdub3JlSlNPTlN0cnVjdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdHJ1ZTtcbiAgbGV0IHBhdGggPSBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpO1xuICBpZiAoIXBhdGggJiYgaWdub3JlSlNPTlN0cnVjdHVyZSAmJiBpc1N0cmluZyhrZXkpKSB7XG4gICAgcGF0aCA9IGRlZXBGaW5kKGRhdGEsIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkKSBwYXRoID0gZGVlcEZpbmQoZGVmYXVsdERhdGEsIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn07XG5jb25zdCByZWdleFNhZmUgPSB2YWwgPT4gdmFsLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpO1xuY2xhc3MgSW50ZXJwb2xhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2ludGVycG9sYXRvcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCAodmFsdWUgPT4gdmFsdWUpO1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaW50ZXJwb2xhdGlvbikgb3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgZXNjYXBlVmFsdWU6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHtcbiAgICAgIGVzY2FwZTogZXNjYXBlJDEsXG4gICAgICBlc2NhcGVWYWx1ZSxcbiAgICAgIHVzZVJhd1ZhbHVlVG9Fc2NhcGUsXG4gICAgICBwcmVmaXgsXG4gICAgICBwcmVmaXhFc2NhcGVkLFxuICAgICAgc3VmZml4LFxuICAgICAgc3VmZml4RXNjYXBlZCxcbiAgICAgIGZvcm1hdFNlcGFyYXRvcixcbiAgICAgIHVuZXNjYXBlU3VmZml4LFxuICAgICAgdW5lc2NhcGVQcmVmaXgsXG4gICAgICBuZXN0aW5nUHJlZml4LFxuICAgICAgbmVzdGluZ1ByZWZpeEVzY2FwZWQsXG4gICAgICBuZXN0aW5nU3VmZml4LFxuICAgICAgbmVzdGluZ1N1ZmZpeEVzY2FwZWQsXG4gICAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcixcbiAgICAgIG1heFJlcGxhY2VzLFxuICAgICAgYWx3YXlzRm9ybWF0XG4gICAgfSA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbjtcbiAgICB0aGlzLmVzY2FwZSA9IGVzY2FwZSQxICE9PSB1bmRlZmluZWQgPyBlc2NhcGUkMSA6IGVzY2FwZTtcbiAgICB0aGlzLmVzY2FwZVZhbHVlID0gZXNjYXBlVmFsdWUgIT09IHVuZGVmaW5lZCA/IGVzY2FwZVZhbHVlIDogdHJ1ZTtcbiAgICB0aGlzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgPSB1c2VSYXdWYWx1ZVRvRXNjYXBlICE9PSB1bmRlZmluZWQgPyB1c2VSYXdWYWx1ZVRvRXNjYXBlIDogZmFsc2U7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXggPyByZWdleEVzY2FwZShwcmVmaXgpIDogcHJlZml4RXNjYXBlZCB8fCAne3snO1xuICAgIHRoaXMuc3VmZml4ID0gc3VmZml4ID8gcmVnZXhFc2NhcGUoc3VmZml4KSA6IHN1ZmZpeEVzY2FwZWQgfHwgJ319JztcbiAgICB0aGlzLmZvcm1hdFNlcGFyYXRvciA9IGZvcm1hdFNlcGFyYXRvciB8fCAnLCc7XG4gICAgdGhpcy51bmVzY2FwZVByZWZpeCA9IHVuZXNjYXBlU3VmZml4ID8gJycgOiB1bmVzY2FwZVByZWZpeCB8fCAnLSc7XG4gICAgdGhpcy51bmVzY2FwZVN1ZmZpeCA9IHRoaXMudW5lc2NhcGVQcmVmaXggPyAnJyA6IHVuZXNjYXBlU3VmZml4IHx8ICcnO1xuICAgIHRoaXMubmVzdGluZ1ByZWZpeCA9IG5lc3RpbmdQcmVmaXggPyByZWdleEVzY2FwZShuZXN0aW5nUHJlZml4KSA6IG5lc3RpbmdQcmVmaXhFc2NhcGVkIHx8IHJlZ2V4RXNjYXBlKCckdCgnKTtcbiAgICB0aGlzLm5lc3RpbmdTdWZmaXggPSBuZXN0aW5nU3VmZml4ID8gcmVnZXhFc2NhcGUobmVzdGluZ1N1ZmZpeCkgOiBuZXN0aW5nU3VmZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnKScpO1xuICAgIHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPSBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvciB8fCAnLCc7XG4gICAgdGhpcy5tYXhSZXBsYWNlcyA9IG1heFJlcGxhY2VzIHx8IDEwMDA7XG4gICAgdGhpcy5hbHdheXNGb3JtYXQgPSBhbHdheXNGb3JtYXQgIT09IHVuZGVmaW5lZCA/IGFsd2F5c0Zvcm1hdCA6IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZWdFeHAoKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmluaXQodGhpcy5vcHRpb25zKTtcbiAgfVxuICByZXNldFJlZ0V4cCgpIHtcbiAgICBjb25zdCBnZXRPclJlc2V0UmVnRXhwID0gKGV4aXN0aW5nUmVnRXhwLCBwYXR0ZXJuKSA9PiB7XG4gICAgICBpZiAoZXhpc3RpbmdSZWdFeHAgJiYgZXhpc3RpbmdSZWdFeHAuc291cmNlID09PSBwYXR0ZXJuKSB7XG4gICAgICAgIGV4aXN0aW5nUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JlZ0V4cDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gICAgfTtcbiAgICB0aGlzLnJlZ2V4cCA9IGdldE9yUmVzZXRSZWdFeHAodGhpcy5yZWdleHAsIGAke3RoaXMucHJlZml4fSguKz8pJHt0aGlzLnN1ZmZpeH1gKTtcbiAgICB0aGlzLnJlZ2V4cFVuZXNjYXBlID0gZ2V0T3JSZXNldFJlZ0V4cCh0aGlzLnJlZ2V4cFVuZXNjYXBlLCBgJHt0aGlzLnByZWZpeH0ke3RoaXMudW5lc2NhcGVQcmVmaXh9KC4rPykke3RoaXMudW5lc2NhcGVTdWZmaXh9JHt0aGlzLnN1ZmZpeH1gKTtcbiAgICB0aGlzLm5lc3RpbmdSZWdleHAgPSBnZXRPclJlc2V0UmVnRXhwKHRoaXMubmVzdGluZ1JlZ2V4cCwgYCR7dGhpcy5uZXN0aW5nUHJlZml4fSguKz8pJHt0aGlzLm5lc3RpbmdTdWZmaXh9YCk7XG4gIH1cbiAgaW50ZXJwb2xhdGUoc3RyLCBkYXRhLCBsbmcsIG9wdGlvbnMpIHtcbiAgICBsZXQgbWF0Y2g7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCByZXBsYWNlcztcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzIHx8IHt9O1xuICAgIGNvbnN0IGhhbmRsZUZvcm1hdCA9IGtleSA9PiB7XG4gICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5mb3JtYXRTZXBhcmF0b3IpIDwgMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZGVlcEZpbmRXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGtleSwgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5hbHdheXNGb3JtYXQgPyB0aGlzLmZvcm1hdChwYXRoLCB1bmRlZmluZWQsIGxuZywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBrZXlcbiAgICAgICAgfSkgOiBwYXRoO1xuICAgICAgfVxuICAgICAgY29uc3QgcCA9IGtleS5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgICBjb25zdCBrID0gcC5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGYgPSBwLmpvaW4odGhpcy5mb3JtYXRTZXBhcmF0b3IpLnRyaW0oKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdChkZWVwRmluZFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwgaywgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciwgdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUpLCBmLCBsbmcsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gICAgY29uc3QgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyO1xuICAgIGNvbnN0IHNraXBPblZhcmlhYmxlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXM7XG4gICAgY29uc3QgdG9kb3MgPSBbe1xuICAgICAgcmVnZXg6IHRoaXMucmVnZXhwVW5lc2NhcGUsXG4gICAgICBzYWZlVmFsdWU6IHZhbCA9PiByZWdleFNhZmUodmFsKVxuICAgIH0sIHtcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cCxcbiAgICAgIHNhZmVWYWx1ZTogdmFsID0+IHRoaXMuZXNjYXBlVmFsdWUgPyByZWdleFNhZmUodGhpcy5lc2NhcGUodmFsKSkgOiByZWdleFNhZmUodmFsKVxuICAgIH1dO1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICByZXBsYWNlcyA9IDA7XG4gICAgICB3aGlsZSAobWF0Y2ggPSB0b2RvLnJlZ2V4LmV4ZWMoc3RyKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVkVmFyID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICB2YWx1ZSA9IGhhbmRsZUZvcm1hdChtYXRjaGVkVmFyKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcihzdHIsIG1hdGNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHZhbHVlID0gaXNTdHJpbmcodGVtcCkgPyB0ZW1wIDogJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBtYXRjaGVkVmFyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgICAgdmFsdWUgPSBtYXRjaFswXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBtaXNzZWQgdG8gcGFzcyBpbiB2YXJpYWJsZSAke21hdGNoZWRWYXJ9IGZvciBpbnRlcnBvbGF0aW5nICR7c3RyfWApO1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU3RyaW5nKHZhbHVlKSAmJiAhdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSBtYWtlU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzYWZlVmFsdWUgPSB0b2RvLnNhZmVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG1hdGNoWzBdLCBzYWZlVmFsdWUpO1xuICAgICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggKz0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4IC09IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVwbGFjZXMrKztcbiAgICAgICAgaWYgKHJlcGxhY2VzID49IHRoaXMubWF4UmVwbGFjZXMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgbmVzdChzdHIsIGZjKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGxldCBtYXRjaDtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGNsb25lZE9wdGlvbnM7XG4gICAgY29uc3QgaGFuZGxlSGFzT3B0aW9ucyA9IChrZXksIGluaGVyaXRlZE9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHNlcCA9IHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3I7XG4gICAgICBpZiAoa2V5LmluZGV4T2Yoc2VwKSA8IDApIHJldHVybiBrZXk7XG4gICAgICBjb25zdCBjID0ga2V5LnNwbGl0KG5ldyBSZWdFeHAoYCR7c2VwfVsgXSp7YCkpO1xuICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBgeyR7Y1sxXX1gO1xuICAgICAga2V5ID0gY1swXTtcbiAgICAgIG9wdGlvbnNTdHJpbmcgPSB0aGlzLmludGVycG9sYXRlKG9wdGlvbnNTdHJpbmcsIGNsb25lZE9wdGlvbnMpO1xuICAgICAgY29uc3QgbWF0Y2hlZFNpbmdsZVF1b3RlcyA9IG9wdGlvbnNTdHJpbmcubWF0Y2goLycvZyk7XG4gICAgICBjb25zdCBtYXRjaGVkRG91YmxlUXVvdGVzID0gb3B0aW9uc1N0cmluZy5tYXRjaCgvXCIvZyk7XG4gICAgICBpZiAobWF0Y2hlZFNpbmdsZVF1b3RlcyAmJiBtYXRjaGVkU2luZ2xlUXVvdGVzLmxlbmd0aCAlIDIgPT09IDAgJiYgIW1hdGNoZWREb3VibGVRdW90ZXMgfHwgbWF0Y2hlZERvdWJsZVF1b3Rlcy5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoLycvZywgJ1wiJyk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBjbG9uZWRPcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zU3RyaW5nKTtcbiAgICAgICAgaWYgKGluaGVyaXRlZE9wdGlvbnMpIGNsb25lZE9wdGlvbnMgPSB7XG4gICAgICAgICAgLi4uaW5oZXJpdGVkT3B0aW9ucyxcbiAgICAgICAgICAuLi5jbG9uZWRPcHRpb25zXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYGZhaWxlZCBwYXJzaW5nIG9wdGlvbnMgc3RyaW5nIGluIG5lc3RpbmcgZm9yIGtleSAke2tleX1gLCBlKTtcbiAgICAgICAgcmV0dXJuIGAke2tleX0ke3NlcH0ke29wdGlvbnNTdHJpbmd9YDtcbiAgICAgIH1cbiAgICAgIGlmIChjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZSAmJiBjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZS5pbmRleE9mKHRoaXMucHJlZml4KSA+IC0xKSBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gICAgd2hpbGUgKG1hdGNoID0gdGhpcy5uZXN0aW5nUmVnZXhwLmV4ZWMoc3RyKSkge1xuICAgICAgbGV0IGZvcm1hdHRlcnMgPSBbXTtcbiAgICAgIGNsb25lZE9wdGlvbnMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH07XG4gICAgICBjbG9uZWRPcHRpb25zID0gY2xvbmVkT3B0aW9ucy5yZXBsYWNlICYmICFpc1N0cmluZyhjbG9uZWRPcHRpb25zLnJlcGxhY2UpID8gY2xvbmVkT3B0aW9ucy5yZXBsYWNlIDogY2xvbmVkT3B0aW9ucztcbiAgICAgIGNsb25lZE9wdGlvbnMuYXBwbHlQb3N0UHJvY2Vzc29yID0gZmFsc2U7XG4gICAgICBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICBsZXQgZG9SZWR1Y2UgPSBmYWxzZTtcbiAgICAgIGlmIChtYXRjaFswXS5pbmRleE9mKHRoaXMuZm9ybWF0U2VwYXJhdG9yKSAhPT0gLTEgJiYgIS97Lip9Ly50ZXN0KG1hdGNoWzFdKSkge1xuICAgICAgICBjb25zdCByID0gbWF0Y2hbMV0uc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpLm1hcChlbGVtID0+IGVsZW0udHJpbSgpKTtcbiAgICAgICAgbWF0Y2hbMV0gPSByLnNoaWZ0KCk7XG4gICAgICAgIGZvcm1hdHRlcnMgPSByO1xuICAgICAgICBkb1JlZHVjZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IGZjKGhhbmRsZUhhc09wdGlvbnMuY2FsbCh0aGlzLCBtYXRjaFsxXS50cmltKCksIGNsb25lZE9wdGlvbnMpLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgIGlmICh2YWx1ZSAmJiBtYXRjaFswXSA9PT0gc3RyICYmICFpc1N0cmluZyh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB2YWx1ZSA9IG1ha2VTdHJpbmcodmFsdWUpO1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBtaXNzZWQgdG8gcmVzb2x2ZSAke21hdGNoWzFdfSBmb3IgbmVzdGluZyAke3N0cn1gKTtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChkb1JlZHVjZSkge1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdHRlcnMucmVkdWNlKCh2LCBmKSA9PiB0aGlzLmZvcm1hdCh2LCBmLCBvcHRpb25zLmxuZywge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbmtleTogbWF0Y2hbMV0udHJpbSgpXG4gICAgICAgIH0pLCB2YWx1ZS50cmltKCkpO1xuICAgICAgfVxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobWF0Y2hbMF0sIHZhbHVlKTtcbiAgICAgIHRoaXMucmVnZXhwLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuY29uc3QgcGFyc2VGb3JtYXRTdHIgPSBmb3JtYXRTdHIgPT4ge1xuICBsZXQgZm9ybWF0TmFtZSA9IGZvcm1hdFN0ci50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgY29uc3QgZm9ybWF0T3B0aW9ucyA9IHt9O1xuICBpZiAoZm9ybWF0U3RyLmluZGV4T2YoJygnKSA+IC0xKSB7XG4gICAgY29uc3QgcCA9IGZvcm1hdFN0ci5zcGxpdCgnKCcpO1xuICAgIGZvcm1hdE5hbWUgPSBwWzBdLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGNvbnN0IG9wdFN0ciA9IHBbMV0uc3Vic3RyaW5nKDAsIHBbMV0ubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGZvcm1hdE5hbWUgPT09ICdjdXJyZW5jeScgJiYgb3B0U3RyLmluZGV4T2YoJzonKSA8IDApIHtcbiAgICAgIGlmICghZm9ybWF0T3B0aW9ucy5jdXJyZW5jeSkgZm9ybWF0T3B0aW9ucy5jdXJyZW5jeSA9IG9wdFN0ci50cmltKCk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXROYW1lID09PSAncmVsYXRpdmV0aW1lJyAmJiBvcHRTdHIuaW5kZXhPZignOicpIDwgMCkge1xuICAgICAgaWYgKCFmb3JtYXRPcHRpb25zLnJhbmdlKSBmb3JtYXRPcHRpb25zLnJhbmdlID0gb3B0U3RyLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0cyA9IG9wdFN0ci5zcGxpdCgnOycpO1xuICAgICAgb3B0cy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgIGlmIChvcHQpIHtcbiAgICAgICAgICBjb25zdCBba2V5LCAuLi5yZXN0XSA9IG9wdC5zcGxpdCgnOicpO1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHJlc3Quam9pbignOicpLnRyaW0oKS5yZXBsYWNlKC9eJyt8JyskL2csICcnKTtcbiAgICAgICAgICBjb25zdCB0cmltbWVkS2V5ID0ga2V5LnRyaW0oKTtcbiAgICAgICAgICBpZiAoIWZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0pIGZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0gPSB2YWw7XG4gICAgICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgZm9ybWF0T3B0aW9uc1t0cmltbWVkS2V5XSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh2YWwgPT09ICd0cnVlJykgZm9ybWF0T3B0aW9uc1t0cmltbWVkS2V5XSA9IHRydWU7XG4gICAgICAgICAgaWYgKCFpc05hTih2YWwpKSBmb3JtYXRPcHRpb25zW3RyaW1tZWRLZXldID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdE5hbWUsXG4gICAgZm9ybWF0T3B0aW9uc1xuICB9O1xufTtcbmNvbnN0IGNyZWF0ZUNhY2hlZEZvcm1hdHRlciA9IGZuID0+IHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuICh2YWwsIGxuZywgb3B0aW9ucykgPT4ge1xuICAgIGxldCBvcHRGb3JDYWNoZSA9IG9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5ICYmIG9wdGlvbnMuZm9ybWF0UGFyYW1zICYmIG9wdGlvbnMuZm9ybWF0UGFyYW1zW29wdGlvbnMuaW50ZXJwb2xhdGlvbmtleV0gJiYgb3B0aW9uc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldKSB7XG4gICAgICBvcHRGb3JDYWNoZSA9IHtcbiAgICAgICAgLi4ub3B0Rm9yQ2FjaGUsXG4gICAgICAgIFtvcHRpb25zLmludGVycG9sYXRpb25rZXldOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IGxuZyArIEpTT04uc3RyaW5naWZ5KG9wdEZvckNhY2hlKTtcbiAgICBsZXQgZm9ybWF0dGVyID0gY2FjaGVba2V5XTtcbiAgICBpZiAoIWZvcm1hdHRlcikge1xuICAgICAgZm9ybWF0dGVyID0gZm4oZ2V0Q2xlYW5lZENvZGUobG5nKSwgb3B0aW9ucyk7XG4gICAgICBjYWNoZVtrZXldID0gZm9ybWF0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVyKHZhbCk7XG4gIH07XG59O1xuY2xhc3MgRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2Zvcm1hdHRlcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXRzID0ge1xuICAgICAgbnVtYmVyOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSksXG4gICAgICBjdXJyZW5jeTogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0LFxuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pLFxuICAgICAgZGF0ZXRpbWU6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pLFxuICAgICAgcmVsYXRpdmV0aW1lOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwsIG9wdC5yYW5nZSB8fCAnZGF5Jyk7XG4gICAgICB9KSxcbiAgICAgIGxpc3Q6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTGlzdEZvcm1hdChsbmcsIHtcbiAgICAgICAgICAuLi5vcHRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWwgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuICBpbml0KHNlcnZpY2VzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgIGludGVycG9sYXRpb246IHt9XG4gICAgfTtcbiAgICB0aGlzLmZvcm1hdFNlcGFyYXRvciA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICB9XG4gIGFkZChuYW1lLCBmYykge1xuICAgIHRoaXMuZm9ybWF0c1tuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IGZjO1xuICB9XG4gIGFkZENhY2hlZChuYW1lLCBmYykge1xuICAgIHRoaXMuZm9ybWF0c1tuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXSA9IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcihmYyk7XG4gIH1cbiAgZm9ybWF0KHZhbHVlLCBmb3JtYXQsIGxuZykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBjb25zdCBmb3JtYXRzID0gZm9ybWF0LnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKTtcbiAgICBpZiAoZm9ybWF0cy5sZW5ndGggPiAxICYmIGZvcm1hdHNbMF0uaW5kZXhPZignKCcpID4gMSAmJiBmb3JtYXRzWzBdLmluZGV4T2YoJyknKSA8IDAgJiYgZm9ybWF0cy5maW5kKGYgPT4gZi5pbmRleE9mKCcpJykgPiAtMSkpIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGZvcm1hdHMuZmluZEluZGV4KGYgPT4gZi5pbmRleE9mKCcpJykgPiAtMSk7XG4gICAgICBmb3JtYXRzWzBdID0gW2Zvcm1hdHNbMF0sIC4uLmZvcm1hdHMuc3BsaWNlKDEsIGxhc3RJbmRleCldLmpvaW4odGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRzLnJlZHVjZSgobWVtLCBmKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZvcm1hdE5hbWUsXG4gICAgICAgIGZvcm1hdE9wdGlvbnNcbiAgICAgIH0gPSBwYXJzZUZvcm1hdFN0cihmKTtcbiAgICAgIGlmICh0aGlzLmZvcm1hdHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IG1lbTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB2YWxPcHRpb25zID0gb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtcyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGwgPSB2YWxPcHRpb25zLmxvY2FsZSB8fCB2YWxPcHRpb25zLmxuZyB8fCBvcHRpb25zLmxvY2FsZSB8fCBvcHRpb25zLmxuZyB8fCBsbmc7XG4gICAgICAgICAgZm9ybWF0dGVkID0gdGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKG1lbSwgbCwge1xuICAgICAgICAgICAgLi4uZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAuLi52YWxPcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oYHRoZXJlIHdhcyBubyBmb3JtYXQgZnVuY3Rpb24gZm9yICR7Zm9ybWF0TmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW07XG4gICAgfSwgdmFsdWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgcmVtb3ZlUGVuZGluZyA9IChxLCBuYW1lKSA9PiB7XG4gIGlmIChxLnBlbmRpbmdbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlbGV0ZSBxLnBlbmRpbmdbbmFtZV07XG4gICAgcS5wZW5kaW5nQ291bnQtLTtcbiAgfVxufTtcbmNsYXNzIENvbm5lY3RvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGJhY2tlbmQsIHN0b3JlLCBzZXJ2aWNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmxhbmd1YWdlVXRpbHMgPSBzZXJ2aWNlcy5sYW5ndWFnZVV0aWxzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnYmFja2VuZENvbm5lY3RvcicpO1xuICAgIHRoaXMud2FpdGluZ1JlYWRzID0gW107XG4gICAgdGhpcy5tYXhQYXJhbGxlbFJlYWRzID0gb3B0aW9ucy5tYXhQYXJhbGxlbFJlYWRzIHx8IDEwO1xuICAgIHRoaXMucmVhZGluZ0NhbGxzID0gMDtcbiAgICB0aGlzLm1heFJldHJpZXMgPSBvcHRpb25zLm1heFJldHJpZXMgPj0gMCA/IG9wdGlvbnMubWF4UmV0cmllcyA6IDU7XG4gICAgdGhpcy5yZXRyeVRpbWVvdXQgPSBvcHRpb25zLnJldHJ5VGltZW91dCA+PSAxID8gb3B0aW9ucy5yZXRyeVRpbWVvdXQgOiAzNTA7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICBpZiAodGhpcy5iYWNrZW5kICYmIHRoaXMuYmFja2VuZC5pbml0KSB7XG4gICAgICB0aGlzLmJhY2tlbmQuaW5pdChzZXJ2aWNlcywgb3B0aW9ucy5iYWNrZW5kLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0b0xvYWQgPSB7fTtcbiAgICBjb25zdCBwZW5kaW5nID0ge307XG4gICAgY29uc3QgdG9Mb2FkTGFuZ3VhZ2VzID0ge307XG4gICAgY29uc3QgdG9Mb2FkTmFtZXNwYWNlcyA9IHt9O1xuICAgIGxhbmd1YWdlcy5mb3JFYWNoKGxuZyA9PiB7XG4gICAgICBsZXQgaGFzQWxsTmFtZXNwYWNlcyA9IHRydWU7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7bG5nfXwke25zfWA7XG4gICAgICAgIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdGhpcy5zdG9yZS5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVbbmFtZV0gPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPCAwKSA7IGVsc2UgaWYgKHRoaXMuc3RhdGVbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAocGVuZGluZ1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW25hbWVdID0gMTtcbiAgICAgICAgICBoYXNBbGxOYW1lc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRvTG9hZFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWRbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGlmICh0b0xvYWROYW1lc3BhY2VzW25zXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWROYW1lc3BhY2VzW25zXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYXNBbGxOYW1lc3BhY2VzKSB0b0xvYWRMYW5ndWFnZXNbbG5nXSA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRvTG9hZCkubGVuZ3RoIHx8IE9iamVjdC5rZXlzKHBlbmRpbmcpLmxlbmd0aCkge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgcGVuZGluZ0NvdW50OiBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgsXG4gICAgICAgIGxvYWRlZDoge30sXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvTG9hZDogT2JqZWN0LmtleXModG9Mb2FkKSxcbiAgICAgIHBlbmRpbmc6IE9iamVjdC5rZXlzKHBlbmRpbmcpLFxuICAgICAgdG9Mb2FkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0b0xvYWRMYW5ndWFnZXMpLFxuICAgICAgdG9Mb2FkTmFtZXNwYWNlczogT2JqZWN0LmtleXModG9Mb2FkTmFtZXNwYWNlcylcbiAgICB9O1xuICB9XG4gIGxvYWRlZChuYW1lLCBlcnIsIGRhdGEpIHtcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZmFpbGVkTG9hZGluZycsIGxuZywgbnMsIGVycik7XG4gICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgdGhpcy5zdG9yZS5hZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwge1xuICAgICAgICBza2lwQ29weTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGVbbmFtZV0gPSBlcnIgPyAtMSA6IDI7XG4gICAgaWYgKGVyciAmJiBkYXRhKSB0aGlzLnN0YXRlW25hbWVdID0gMDtcbiAgICBjb25zdCBsb2FkZWQgPSB7fTtcbiAgICB0aGlzLnF1ZXVlLmZvckVhY2gocSA9PiB7XG4gICAgICBwdXNoUGF0aChxLmxvYWRlZCwgW2xuZ10sIG5zKTtcbiAgICAgIHJlbW92ZVBlbmRpbmcocSwgbmFtZSk7XG4gICAgICBpZiAoZXJyKSBxLmVycm9ycy5wdXNoKGVycik7XG4gICAgICBpZiAocS5wZW5kaW5nQ291bnQgPT09IDAgJiYgIXEuZG9uZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhxLmxvYWRlZCkuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZFtsXSkgbG9hZGVkW2xdID0ge307XG4gICAgICAgICAgY29uc3QgbG9hZGVkS2V5cyA9IHEubG9hZGVkW2xdO1xuICAgICAgICAgIGlmIChsb2FkZWRLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9hZGVkS2V5cy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICBpZiAobG9hZGVkW2xdW25dID09PSB1bmRlZmluZWQpIGxvYWRlZFtsXVtuXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBxLmRvbmUgPSB0cnVlO1xuICAgICAgICBpZiAocS5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcS5jYWxsYmFjayhxLmVycm9ycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcS5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBsb2FkZWQpO1xuICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcihxID0+ICFxLmRvbmUpO1xuICB9XG4gIHJlYWQobG5nLCBucywgZmNOYW1lKSB7XG4gICAgbGV0IHRyaWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICAgIGxldCB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB0aGlzLnJldHJ5VGltZW91dDtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWxuZy5sZW5ndGgpIHJldHVybiBjYWxsYmFjayhudWxsLCB7fSk7XG4gICAgaWYgKHRoaXMucmVhZGluZ0NhbGxzID49IHRoaXMubWF4UGFyYWxsZWxSZWFkcykge1xuICAgICAgdGhpcy53YWl0aW5nUmVhZHMucHVzaCh7XG4gICAgICAgIGxuZyxcbiAgICAgICAgbnMsXG4gICAgICAgIGZjTmFtZSxcbiAgICAgICAgdHJpZWQsXG4gICAgICAgIHdhaXQsXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWFkaW5nQ2FsbHMrKztcbiAgICBjb25zdCByZXNvbHZlciA9IChlcnIsIGRhdGEpID0+IHtcbiAgICAgIHRoaXMucmVhZGluZ0NhbGxzLS07XG4gICAgICBpZiAodGhpcy53YWl0aW5nUmVhZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy53YWl0aW5nUmVhZHMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5yZWFkKG5leHQubG5nLCBuZXh0Lm5zLCBuZXh0LmZjTmFtZSwgbmV4dC50cmllZCwgbmV4dC53YWl0LCBuZXh0LmNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGlmIChlcnIgJiYgZGF0YSAmJiB0cmllZCA8IHRoaXMubWF4UmV0cmllcykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlYWQuY2FsbCh0aGlzLCBsbmcsIG5zLCBmY05hbWUsIHRyaWVkICsgMSwgd2FpdCAqIDIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBmYyA9IHRoaXMuYmFja2VuZFtmY05hbWVdLmJpbmQodGhpcy5iYWNrZW5kKTtcbiAgICBpZiAoZmMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0gZmMobG5nLCBucyk7XG4gICAgICAgIGlmIChyICYmIHR5cGVvZiByLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByLnRoZW4oZGF0YSA9PiByZXNvbHZlcihudWxsLCBkYXRhKSkuY2F0Y2gocmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmVyKG51bGwsIHIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzb2x2ZXIoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGZjKGxuZywgbnMsIHJlc29sdmVyKTtcbiAgfVxuICBwcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKCF0aGlzLmJhY2tlbmQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ05vIGJhY2tlbmQgd2FzIGFkZGVkIHZpYSBpMThuZXh0LnVzZS4gV2lsbCBub3QgbG9hZCByZXNvdXJjZXMuJyk7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGxhbmd1YWdlcykpIGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobGFuZ3VhZ2VzKTtcbiAgICBpZiAoaXNTdHJpbmcobmFtZXNwYWNlcykpIG5hbWVzcGFjZXMgPSBbbmFtZXNwYWNlc107XG4gICAgY29uc3QgdG9Mb2FkID0gdGhpcy5xdWV1ZUxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgaWYgKCF0b0xvYWQudG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKCF0b0xvYWQucGVuZGluZy5sZW5ndGgpIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdG9Mb2FkLnRvTG9hZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5sb2FkT25lKG5hbWUpO1xuICAgIH0pO1xuICB9XG4gIGxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7fSwgY2FsbGJhY2spO1xuICB9XG4gIHJlbG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5wcmVwYXJlTG9hZGluZyhsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIHtcbiAgICAgIHJlbG9hZDogdHJ1ZVxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuICBsb2FkT25lKG5hbWUpIHtcbiAgICBsZXQgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICBjb25zdCBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgIGNvbnN0IGxuZyA9IHNbMF07XG4gICAgY29uc3QgbnMgPSBzWzFdO1xuICAgIHRoaXMucmVhZChsbmcsIG5zLCAncmVhZCcsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aGlzLmxvZ2dlci53YXJuKGAke3ByZWZpeH1sb2FkaW5nIG5hbWVzcGFjZSAke25zfSBmb3IgbGFuZ3VhZ2UgJHtsbmd9IGZhaWxlZGAsIGVycik7XG4gICAgICBpZiAoIWVyciAmJiBkYXRhKSB0aGlzLmxvZ2dlci5sb2coYCR7cHJlZml4fWxvYWRlZCBuYW1lc3BhY2UgJHtuc30gZm9yIGxhbmd1YWdlICR7bG5nfWAsIGRhdGEpO1xuICAgICAgdGhpcy5sb2FkZWQobmFtZSwgZXJyLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBzYXZlTWlzc2luZyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBpc1VwZGF0ZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7fTtcbiAgICBsZXQgY2xiID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiAoKSA9PiB7fTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlcy51dGlscyAmJiB0aGlzLnNlcnZpY2VzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSAmJiAhdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UobmFtZXNwYWNlKSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgZGlkIG5vdCBzYXZlIGtleSBcIiR7a2V5fVwiIGFzIHRoZSBuYW1lc3BhY2UgXCIke25hbWVzcGFjZX1cIiB3YXMgbm90IHlldCBsb2FkZWRgLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwga2V5ID09PSAnJykgcmV0dXJuO1xuICAgIGlmICh0aGlzLmJhY2tlbmQgJiYgdGhpcy5iYWNrZW5kLmNyZWF0ZSkge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaXNVcGRhdGVcbiAgICAgIH07XG4gICAgICBjb25zdCBmYyA9IHRoaXMuYmFja2VuZC5jcmVhdGUuYmluZCh0aGlzLmJhY2tlbmQpO1xuICAgICAgaWYgKGZjLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgcjtcbiAgICAgICAgICBpZiAoZmMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICByID0gZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBmYyhsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHIgJiYgdHlwZW9mIHIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgci50aGVuKGRhdGEgPT4gY2xiKG51bGwsIGRhdGEpKS5jYXRjaChjbGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGIobnVsbCwgcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjbGIoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgY2xiLCBvcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsYW5ndWFnZXMgfHwgIWxhbmd1YWdlc1swXSkgcmV0dXJuO1xuICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2UobGFuZ3VhZ2VzWzBdLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gKCkgPT4gKHtcbiAgZGVidWc6IGZhbHNlLFxuICBpbml0SW1tZWRpYXRlOiB0cnVlLFxuICBuczogWyd0cmFuc2xhdGlvbiddLFxuICBkZWZhdWx0TlM6IFsndHJhbnNsYXRpb24nXSxcbiAgZmFsbGJhY2tMbmc6IFsnZGV2J10sXG4gIGZhbGxiYWNrTlM6IGZhbHNlLFxuICBzdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgbm9uRXhwbGljaXRTdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgbG9hZDogJ2FsbCcsXG4gIHByZWxvYWQ6IGZhbHNlLFxuICBzaW1wbGlmeVBsdXJhbFN1ZmZpeDogdHJ1ZSxcbiAga2V5U2VwYXJhdG9yOiAnLicsXG4gIG5zU2VwYXJhdG9yOiAnOicsXG4gIHBsdXJhbFNlcGFyYXRvcjogJ18nLFxuICBjb250ZXh0U2VwYXJhdG9yOiAnXycsXG4gIHBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzOiBmYWxzZSxcbiAgc2F2ZU1pc3Npbmc6IGZhbHNlLFxuICB1cGRhdGVNaXNzaW5nOiBmYWxzZSxcbiAgc2F2ZU1pc3NpbmdUbzogJ2ZhbGxiYWNrJyxcbiAgc2F2ZU1pc3NpbmdQbHVyYWxzOiB0cnVlLFxuICBtaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcjogZmFsc2UsXG4gIHBvc3RQcm9jZXNzOiBmYWxzZSxcbiAgcG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQ6IGZhbHNlLFxuICByZXR1cm5OdWxsOiBmYWxzZSxcbiAgcmV0dXJuRW1wdHlTdHJpbmc6IHRydWUsXG4gIHJldHVybk9iamVjdHM6IGZhbHNlLFxuICBqb2luQXJyYXlzOiBmYWxzZSxcbiAgcmV0dXJuZWRPYmplY3RIYW5kbGVyOiBmYWxzZSxcbiAgcGFyc2VNaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gIGFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleTogZmFsc2UsXG4gIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlOiBmYWxzZSxcbiAgb3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXI6IGFyZ3MgPT4ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdvYmplY3QnKSByZXQgPSBhcmdzWzFdO1xuICAgIGlmIChpc1N0cmluZyhhcmdzWzFdKSkgcmV0LmRlZmF1bHRWYWx1ZSA9IGFyZ3NbMV07XG4gICAgaWYgKGlzU3RyaW5nKGFyZ3NbMl0pKSByZXQudERlc2NyaXB0aW9uID0gYXJnc1syXTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMl0gPT09ICdvYmplY3QnIHx8IHR5cGVvZiBhcmdzWzNdID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3NbM10gfHwgYXJnc1syXTtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgcmV0W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgaW50ZXJwb2xhdGlvbjoge1xuICAgIGVzY2FwZVZhbHVlOiB0cnVlLFxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgcHJlZml4OiAne3snLFxuICAgIHN1ZmZpeDogJ319JyxcbiAgICBmb3JtYXRTZXBhcmF0b3I6ICcsJyxcbiAgICB1bmVzY2FwZVByZWZpeDogJy0nLFxuICAgIG5lc3RpbmdQcmVmaXg6ICckdCgnLFxuICAgIG5lc3RpbmdTdWZmaXg6ICcpJyxcbiAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjogJywnLFxuICAgIG1heFJlcGxhY2VzOiAxMDAwLFxuICAgIHNraXBPblZhcmlhYmxlczogdHJ1ZVxuICB9XG59KTtcbmNvbnN0IHRyYW5zZm9ybU9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgaWYgKGlzU3RyaW5nKG9wdGlvbnMubnMpKSBvcHRpb25zLm5zID0gW29wdGlvbnMubnNdO1xuICBpZiAoaXNTdHJpbmcob3B0aW9ucy5mYWxsYmFja0xuZykpIG9wdGlvbnMuZmFsbGJhY2tMbmcgPSBbb3B0aW9ucy5mYWxsYmFja0xuZ107XG4gIGlmIChpc1N0cmluZyhvcHRpb25zLmZhbGxiYWNrTlMpKSBvcHRpb25zLmZhbGxiYWNrTlMgPSBbb3B0aW9ucy5mYWxsYmFja05TXTtcbiAgaWYgKG9wdGlvbnMuc3VwcG9ydGVkTG5ncyAmJiBvcHRpb25zLnN1cHBvcnRlZExuZ3MuaW5kZXhPZignY2ltb2RlJykgPCAwKSB7XG4gICAgb3B0aW9ucy5zdXBwb3J0ZWRMbmdzID0gb3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmNvbmNhdChbJ2NpbW9kZSddKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IGJpbmRNZW1iZXJGdW5jdGlvbnMgPSBpbnN0ID0+IHtcbiAgY29uc3QgbWVtcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0KSk7XG4gIG1lbXMuZm9yRWFjaChtZW0gPT4ge1xuICAgIGlmICh0eXBlb2YgaW5zdFttZW1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnN0W21lbV0gPSBpbnN0W21lbV0uYmluZChpbnN0KTtcbiAgICB9XG4gIH0pO1xufTtcbmNsYXNzIEkxOG4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuc2VydmljZXMgPSB7fTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfTtcbiAgICBiaW5kTWVtYmVyRnVuY3Rpb25zKHRoaXMpO1xuICAgIGlmIChjYWxsYmFjayAmJiAhdGhpcy5pc0luaXRpYWxpemVkICYmICFvcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmluaXRJbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuICBpbml0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSB0cnVlO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdE5TICYmIG9wdGlvbnMuZGVmYXVsdE5TICE9PSBmYWxzZSAmJiBvcHRpb25zLm5zKSB7XG4gICAgICBpZiAoaXNTdHJpbmcob3B0aW9ucy5ucykpIHtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0TlMgPSBvcHRpb25zLm5zO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm5zLmluZGV4T2YoJ3RyYW5zbGF0aW9uJykgPCAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5uc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVmT3B0cyA9IGdldCgpO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZk9wdHMsXG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi50cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpXG4gICAgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgICAuLi5kZWZPcHRzLmludGVycG9sYXRpb24sXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLnVzZXJEZWZpbmVkS2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQ2xhc3NPbkRlbWFuZCA9IENsYXNzT3JPYmplY3QgPT4ge1xuICAgICAgaWYgKCFDbGFzc09yT2JqZWN0KSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICh0eXBlb2YgQ2xhc3NPck9iamVjdCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG5ldyBDbGFzc09yT2JqZWN0KCk7XG4gICAgICByZXR1cm4gQ2xhc3NPck9iamVjdDtcbiAgICB9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICh0aGlzLm1vZHVsZXMubG9nZ2VyKSB7XG4gICAgICAgIGJhc2VMb2dnZXIuaW5pdChjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZUxvZ2dlci5pbml0KG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybWF0dGVyO1xuICAgICAgaWYgKHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIpIHtcbiAgICAgICAgZm9ybWF0dGVyID0gdGhpcy5tb2R1bGVzLmZvcm1hdHRlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvcm1hdHRlciA9IEZvcm1hdHRlcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGx1ID0gbmV3IExhbmd1YWdlVXRpbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBzID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgIHMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICAgIHMucmVzb3VyY2VTdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICBzLmxhbmd1YWdlVXRpbHMgPSBsdTtcbiAgICAgIHMucGx1cmFsUmVzb2x2ZXIgPSBuZXcgUGx1cmFsUmVzb2x2ZXIobHUsIHtcbiAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgY29tcGF0aWJpbGl0eUpTT046IHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTixcbiAgICAgICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeFxuICAgICAgfSk7XG4gICAgICBpZiAoZm9ybWF0dGVyICYmICghdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9PT0gZGVmT3B0cy5pbnRlcnBvbGF0aW9uLmZvcm1hdCkpIHtcbiAgICAgICAgcy5mb3JtYXR0ZXIgPSBjcmVhdGVDbGFzc09uRGVtYW5kKGZvcm1hdHRlcik7XG4gICAgICAgIHMuZm9ybWF0dGVyLmluaXQocywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0ID0gcy5mb3JtYXR0ZXIuZm9ybWF0LmJpbmQocy5mb3JtYXR0ZXIpO1xuICAgICAgfVxuICAgICAgcy5pbnRlcnBvbGF0b3IgPSBuZXcgSW50ZXJwb2xhdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICBzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IHRoaXMuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQodGhpcylcbiAgICAgIH07XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBzLnJlc291cmNlU3RvcmUsIHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICBzLmJhY2tlbmRDb25uZWN0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpIHtcbiAgICAgICAgcy5sYW5ndWFnZURldGVjdG9yID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3Rvcik7XG4gICAgICAgIGlmIChzLmxhbmd1YWdlRGV0ZWN0b3IuaW5pdCkgcy5sYW5ndWFnZURldGVjdG9yLmluaXQocywgdGhpcy5vcHRpb25zLmRldGVjdGlvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCkge1xuICAgICAgICBzLmkxOG5Gb3JtYXQgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KTtcbiAgICAgICAgaWYgKHMuaTE4bkZvcm1hdC5pbml0KSBzLmkxOG5Gb3JtYXQuaW5pdCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKHRoaXMuc2VydmljZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwuZm9yRWFjaChtID0+IHtcbiAgICAgICAgaWYgKG0uaW5pdCkgbS5pbml0KHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0O1xuICAgIGlmICghY2FsbGJhY2spIGNhbGxiYWNrID0gbm9vcDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgIGNvbnN0IGNvZGVzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgIGlmIChjb2Rlcy5sZW5ndGggPiAwICYmIGNvZGVzWzBdICE9PSAnZGV2JykgdGhpcy5vcHRpb25zLmxuZyA9IGNvZGVzWzBdO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5vcHRpb25zLmxuZykge1xuICAgICAgdGhpcy5sb2dnZXIud2FybignaW5pdDogbm8gbGFuZ3VhZ2VEZXRlY3RvciBpcyB1c2VkIGFuZCBubyBsbmcgaXMgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZUFwaSA9IFsnZ2V0UmVzb3VyY2UnLCAnaGFzUmVzb3VyY2VCdW5kbGUnLCAnZ2V0UmVzb3VyY2VCdW5kbGUnLCAnZ2V0RGF0YUJ5TGFuZ3VhZ2UnXTtcbiAgICBzdG9yZUFwaS5mb3JFYWNoKGZjTmFtZSA9PiB7XG4gICAgICB0aGlzW2ZjTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdG9yZVtmY05hbWVdKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHN0b3JlQXBpQ2hhaW5lZCA9IFsnYWRkUmVzb3VyY2UnLCAnYWRkUmVzb3VyY2VzJywgJ2FkZFJlc291cmNlQnVuZGxlJywgJ3JlbW92ZVJlc291cmNlQnVuZGxlJ107XG4gICAgc3RvcmVBcGlDaGFpbmVkLmZvckVhY2goZmNOYW1lID0+IHtcbiAgICAgIHRoaXNbZmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc3RvcmVbZmNOYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmluaXNoID0gKGVyciwgdCkgPT4ge1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQgJiYgIXRoaXMuaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIHRoaXMubG9nZ2VyLndhcm4oJ2luaXQ6IGkxOG5leHQgaXMgYWxyZWFkeSBpbml0aWFsaXplZC4gWW91IHNob3VsZCBjYWxsIGluaXQganVzdCBvbmNlIScpO1xuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nsb25lKSB0aGlzLmxvZ2dlci5sb2coJ2luaXRpYWxpemVkJywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbWl0KCdpbml0aWFsaXplZCcsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgdCk7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzICYmIHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnICYmICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmaW5pc2gobnVsbCwgdGhpcy50LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSh0aGlzLm9wdGlvbnMubG5nLCBmaW5pc2gpO1xuICAgIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgIXRoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQobG9hZCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZDtcbiAgfVxuICBsb2FkUmVzb3VyY2VzKGxhbmd1YWdlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICAgIGxldCB1c2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBjb25zdCB1c2VkTG5nID0gaXNTdHJpbmcobGFuZ3VhZ2UpID8gbGFuZ3VhZ2UgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdmdW5jdGlvbicpIHVzZWRDYWxsYmFjayA9IGxhbmd1YWdlO1xuICAgIGlmICghdGhpcy5vcHRpb25zLnJlc291cmNlcyB8fCB0aGlzLm9wdGlvbnMucGFydGlhbEJ1bmRsZWRMYW5ndWFnZXMpIHtcbiAgICAgIGlmICh1c2VkTG5nICYmIHVzZWRMbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScgJiYgKCF0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCB0aGlzLm9wdGlvbnMucHJlbG9hZC5sZW5ndGggPT09IDApKSByZXR1cm4gdXNlZENhbGxiYWNrKCk7XG4gICAgICBjb25zdCB0b0xvYWQgPSBbXTtcbiAgICAgIGNvbnN0IGFwcGVuZCA9IGxuZyA9PiB7XG4gICAgICAgIGlmICghbG5nKSByZXR1cm47XG4gICAgICAgIGlmIChsbmcgPT09ICdjaW1vZGUnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxuZ3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxuZyk7XG4gICAgICAgIGxuZ3MuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICBpZiAobCA9PT0gJ2NpbW9kZScpIHJldHVybjtcbiAgICAgICAgICBpZiAodG9Mb2FkLmluZGV4T2YobCkgPCAwKSB0b0xvYWQucHVzaChsKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKCF1c2VkTG5nKSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrcyA9IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICAgIGZhbGxiYWNrcy5mb3JFYWNoKGwgPT4gYXBwZW5kKGwpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGVuZCh1c2VkTG5nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJlbG9hZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucHJlbG9hZC5mb3JFYWNoKGwgPT4gYXBwZW5kKGwpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5sb2FkKHRvTG9hZCwgdGhpcy5vcHRpb25zLm5zLCBlID0+IHtcbiAgICAgICAgaWYgKCFlICYmICF0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgJiYgdGhpcy5sYW5ndWFnZSkgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB1c2VkQ2FsbGJhY2soZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlZENhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfVxuICByZWxvYWRSZXNvdXJjZXMobG5ncywgbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIGlmICh0eXBlb2YgbG5ncyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBsbmdzO1xuICAgICAgbG5ncyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBucztcbiAgICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIWxuZ3MpIGxuZ3MgPSB0aGlzLmxhbmd1YWdlcztcbiAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5ucztcbiAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnJlbG9hZChsbmdzLCBucywgZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHBhc3NpbmcgYW4gdW5kZWZpbmVkIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAoIW1vZHVsZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgcGFzc2luZyBhIHdyb25nIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdiYWNrZW5kJykge1xuICAgICAgdGhpcy5tb2R1bGVzLmJhY2tlbmQgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xvZ2dlcicgfHwgbW9kdWxlLmxvZyAmJiBtb2R1bGUud2FybiAmJiBtb2R1bGUuZXJyb3IpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5sb2dnZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xhbmd1YWdlRGV0ZWN0b3InKSB7XG4gICAgICB0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3RvciA9IG1vZHVsZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZS50eXBlID09PSAnaTE4bkZvcm1hdCcpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdwb3N0UHJvY2Vzc29yJykge1xuICAgICAgcG9zdFByb2Nlc3Nvci5hZGRQb3N0UHJvY2Vzc29yKG1vZHVsZSk7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2Zvcm1hdHRlcicpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJzNyZFBhcnR5Jykge1xuICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLnB1c2gobW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UmVzb2x2ZWRMYW5ndWFnZShsKSB7XG4gICAgaWYgKCFsIHx8ICF0aGlzLmxhbmd1YWdlcykgcmV0dXJuO1xuICAgIGlmIChbJ2NpbW9kZScsICdkZXYnXS5pbmRleE9mKGwpID4gLTEpIHJldHVybjtcbiAgICBmb3IgKGxldCBsaSA9IDA7IGxpIDwgdGhpcy5sYW5ndWFnZXMubGVuZ3RoOyBsaSsrKSB7XG4gICAgICBjb25zdCBsbmdJbkxuZ3MgPSB0aGlzLmxhbmd1YWdlc1tsaV07XG4gICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsbmdJbkxuZ3MpID4gLTEpIGNvbnRpbnVlO1xuICAgICAgaWYgKHRoaXMuc3RvcmUuaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZ0luTG5ncykpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gbG5nSW5MbmdzO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hhbmdlTGFuZ3VhZ2UobG5nLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSBsbmc7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2luZycsIGxuZyk7XG4gICAgY29uc3Qgc2V0TG5nUHJvcHMgPSBsID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBsO1xuICAgICAgdGhpcy5sYW5ndWFnZXMgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGwpO1xuICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zZXRSZXNvbHZlZExhbmd1YWdlKGwpO1xuICAgIH07XG4gICAgY29uc3QgZG9uZSA9IChlcnIsIGwpID0+IHtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgIHRoaXMuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZygnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIudCguLi5hcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVyciwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TG5nID0gbG5ncyA9PiB7XG4gICAgICBpZiAoIWxuZyAmJiAhbG5ncyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpIGxuZ3MgPSBbXTtcbiAgICAgIGNvbnN0IGwgPSBpc1N0cmluZyhsbmdzKSA/IGxuZ3MgOiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGxuZ3MpO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgc2V0TG5nUHJvcHMobCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zbGF0b3IubGFuZ3VhZ2UpIHRoaXMudHJhbnNsYXRvci5jaGFuZ2VMYW5ndWFnZShsKTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UpIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5jYWNoZVVzZXJMYW5ndWFnZShsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZFJlc291cmNlcyhsLCBlcnIgPT4ge1xuICAgICAgICBkb25lKGVyciwgbCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmFzeW5jKSB7XG4gICAgICBzZXRMbmcodGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdCgpKTtcbiAgICB9IGVsc2UgaWYgKCFsbmcgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5hc3luYykge1xuICAgICAgaWYgKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKS50aGVuKHNldExuZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KHNldExuZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExuZyhsbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgZ2V0Rml4ZWRUKGxuZywgbnMsIGtleVByZWZpeCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgIGNvbnN0IGZpeGVkVCA9IGZ1bmN0aW9uIChrZXksIG9wdHMpIHtcbiAgICAgIGxldCBvcHRpb25zO1xuICAgICAgaWYgKHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIHJlc3RbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucyA9IF90aGlzMy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKFtrZXksIG9wdHNdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIC4uLm9wdHNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMubG5nID0gb3B0aW9ucy5sbmcgfHwgZml4ZWRULmxuZztcbiAgICAgIG9wdGlvbnMubG5ncyA9IG9wdGlvbnMubG5ncyB8fCBmaXhlZFQubG5ncztcbiAgICAgIG9wdGlvbnMubnMgPSBvcHRpb25zLm5zIHx8IGZpeGVkVC5ucztcbiAgICAgIGlmIChvcHRpb25zLmtleVByZWZpeCAhPT0gJycpIG9wdGlvbnMua2V5UHJlZml4ID0gb3B0aW9ucy5rZXlQcmVmaXggfHwga2V5UHJlZml4IHx8IGZpeGVkVC5rZXlQcmVmaXg7XG4gICAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBfdGhpczMub3B0aW9ucy5rZXlTZXBhcmF0b3IgfHwgJy4nO1xuICAgICAgbGV0IHJlc3VsdEtleTtcbiAgICAgIGlmIChvcHRpb25zLmtleVByZWZpeCAmJiBBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgcmVzdWx0S2V5ID0ga2V5Lm1hcChrID0+IGAke29wdGlvbnMua2V5UHJlZml4fSR7a2V5U2VwYXJhdG9yfSR7a31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdEtleSA9IG9wdGlvbnMua2V5UHJlZml4ID8gYCR7b3B0aW9ucy5rZXlQcmVmaXh9JHtrZXlTZXBhcmF0b3J9JHtrZXl9YCA6IGtleTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpczMudChyZXN1bHRLZXksIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGlzU3RyaW5nKGxuZykpIHtcbiAgICAgIGZpeGVkVC5sbmcgPSBsbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpeGVkVC5sbmdzID0gbG5nO1xuICAgIH1cbiAgICBmaXhlZFQubnMgPSBucztcbiAgICBmaXhlZFQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHJldHVybiBmaXhlZFQ7XG4gIH1cbiAgdCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdG9yICYmIHRoaXMudHJhbnNsYXRvci50cmFuc2xhdGUoLi4uYXJndW1lbnRzKTtcbiAgfVxuICBleGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvciAmJiB0aGlzLnRyYW5zbGF0b3IuZXhpc3RzKC4uLmFyZ3VtZW50cyk7XG4gIH1cbiAgc2V0RGVmYXVsdE5hbWVzcGFjZShucykge1xuICAgIHRoaXMub3B0aW9ucy5kZWZhdWx0TlMgPSBucztcbiAgfVxuICBoYXNMb2FkZWROYW1lc3BhY2UobnMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bmV4dCB3YXMgbm90IGluaXRpYWxpemVkJywgdGhpcy5sYW5ndWFnZXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubGFuZ3VhZ2VzIHx8ICF0aGlzLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bi5sYW5ndWFnZXMgd2VyZSB1bmRlZmluZWQgb3IgZW1wdHknLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxuZyA9IG9wdGlvbnMubG5nIHx8IHRoaXMucmVzb2x2ZWRMYW5ndWFnZSB8fCB0aGlzLmxhbmd1YWdlc1swXTtcbiAgICBjb25zdCBmYWxsYmFja0xuZyA9IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyA6IGZhbHNlO1xuICAgIGNvbnN0IGxhc3RMbmcgPSB0aGlzLmxhbmd1YWdlc1t0aGlzLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBsb2FkTm90UGVuZGluZyA9IChsLCBuKSA9PiB7XG4gICAgICBjb25zdCBsb2FkU3RhdGUgPSB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbYCR7bH18JHtufWBdO1xuICAgICAgcmV0dXJuIGxvYWRTdGF0ZSA9PT0gLTEgfHwgbG9hZFN0YXRlID09PSAwIHx8IGxvYWRTdGF0ZSA9PT0gMjtcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLnByZWNoZWNrKSB7XG4gICAgICBjb25zdCBwcmVSZXN1bHQgPSBvcHRpb25zLnByZWNoZWNrKHRoaXMsIGxvYWROb3RQZW5kaW5nKTtcbiAgICAgIGlmIChwcmVSZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHByZVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICAgIGlmICghdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgfHwgdGhpcy5vcHRpb25zLnJlc291cmNlcyAmJiAhdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobG9hZE5vdFBlbmRpbmcobG5nLCBucykgJiYgKCFmYWxsYmFja0xuZyB8fCBsb2FkTm90UGVuZGluZyhsYXN0TG5nLCBucykpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbG9hZE5hbWVzcGFjZXMobnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIGlmICghdGhpcy5vcHRpb25zLm5zKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhucykpIG5zID0gW25zXTtcbiAgICBucy5mb3JFYWNoKG4gPT4ge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG4pIDwgMCkgdGhpcy5vcHRpb25zLm5zLnB1c2gobik7XG4gICAgfSk7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKGVyciA9PiB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIGxvYWRMYW5ndWFnZXMobG5ncywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgaWYgKGlzU3RyaW5nKGxuZ3MpKSBsbmdzID0gW2xuZ3NdO1xuICAgIGNvbnN0IHByZWxvYWRlZCA9IHRoaXMub3B0aW9ucy5wcmVsb2FkIHx8IFtdO1xuICAgIGNvbnN0IG5ld0xuZ3MgPSBsbmdzLmZpbHRlcihsbmcgPT4gcHJlbG9hZGVkLmluZGV4T2YobG5nKSA8IDAgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmlzU3VwcG9ydGVkQ29kZShsbmcpKTtcbiAgICBpZiAoIW5ld0xuZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5wcmVsb2FkID0gcHJlbG9hZGVkLmNvbmNhdChuZXdMbmdzKTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoZXJyID0+IHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgZGlyKGxuZykge1xuICAgIGlmICghbG5nKSBsbmcgPSB0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgfHwgKHRoaXMubGFuZ3VhZ2VzICYmIHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLmxhbmd1YWdlc1swXSA6IHRoaXMubGFuZ3VhZ2UpO1xuICAgIGlmICghbG5nKSByZXR1cm4gJ3J0bCc7XG4gICAgY29uc3QgcnRsTG5ncyA9IFsnYXInLCAnc2h1JywgJ3NxcicsICdzc2gnLCAneGFhJywgJ3loZCcsICd5dWQnLCAnYWFvJywgJ2FiaCcsICdhYnYnLCAnYWNtJywgJ2FjcScsICdhY3cnLCAnYWN4JywgJ2FjeScsICdhZGYnLCAnYWRzJywgJ2FlYicsICdhZWMnLCAnYWZiJywgJ2FqcCcsICdhcGMnLCAnYXBkJywgJ2FyYicsICdhcnEnLCAnYXJzJywgJ2FyeScsICdhcnonLCAnYXV6JywgJ2F2bCcsICdheWgnLCAnYXlsJywgJ2F5bicsICdheXAnLCAnYmJ6JywgJ3BnYScsICdoZScsICdpdycsICdwcycsICdwYnQnLCAncGJ1JywgJ3BzdCcsICdwcnAnLCAncHJkJywgJ3VnJywgJ3VyJywgJ3lkZCcsICd5ZHMnLCAneWloJywgJ2ppJywgJ3lpJywgJ2hibycsICdtZW4nLCAneG1uJywgJ2ZhJywgJ2pwcicsICdwZW8nLCAncGVzJywgJ3BycycsICdkdicsICdzYW0nLCAnY2tiJ107XG4gICAgY29uc3QgbGFuZ3VhZ2VVdGlscyA9IHRoaXMuc2VydmljZXMgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzIHx8IG5ldyBMYW5ndWFnZVV0aWwoZ2V0KCkpO1xuICAgIHJldHVybiBydGxMbmdzLmluZGV4T2YobGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShsbmcpKSA+IC0xIHx8IGxuZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJy1hcmFiJykgPiAxID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuICBzdGF0aWMgY3JlYXRlSW5zdGFuY2UoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBuZXcgSTE4bihvcHRpb25zLCBjYWxsYmFjayk7XG4gIH1cbiAgY2xvbmVJbnN0YW5jZSgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICAgIGNvbnN0IGZvcmtSZXNvdXJjZVN0b3JlID0gb3B0aW9ucy5mb3JrUmVzb3VyY2VTdG9yZTtcbiAgICBpZiAoZm9ya1Jlc291cmNlU3RvcmUpIGRlbGV0ZSBvcHRpb25zLmZvcmtSZXNvdXJjZVN0b3JlO1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgLi4ue1xuICAgICAgICBpc0Nsb25lOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBJMThuKG1lcmdlZE9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmRlYnVnICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xvbmUubG9nZ2VyID0gY2xvbmUubG9nZ2VyLmNsb25lKG9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBtZW1iZXJzVG9Db3B5ID0gWydzdG9yZScsICdzZXJ2aWNlcycsICdsYW5ndWFnZSddO1xuICAgIG1lbWJlcnNUb0NvcHkuZm9yRWFjaChtID0+IHtcbiAgICAgIGNsb25lW21dID0gdGhpc1ttXTtcbiAgICB9KTtcbiAgICBjbG9uZS5zZXJ2aWNlcyA9IHtcbiAgICAgIC4uLnRoaXMuc2VydmljZXNcbiAgICB9O1xuICAgIGNsb25lLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiBjbG9uZS5oYXNMb2FkZWROYW1lc3BhY2UuYmluZChjbG9uZSlcbiAgICB9O1xuICAgIGlmIChmb3JrUmVzb3VyY2VTdG9yZSkge1xuICAgICAgY2xvbmUuc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZSh0aGlzLnN0b3JlLmRhdGEsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgY2xvbmUuc2VydmljZXMucmVzb3VyY2VTdG9yZSA9IGNsb25lLnN0b3JlO1xuICAgIH1cbiAgICBjbG9uZS50cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3IoY2xvbmUuc2VydmljZXMsIG1lcmdlZE9wdGlvbnMpO1xuICAgIGNsb25lLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG4gICAgICBjbG9uZS5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICB9KTtcbiAgICBjbG9uZS5pbml0KG1lcmdlZE9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICBjbG9uZS50cmFuc2xhdG9yLm9wdGlvbnMgPSBtZXJnZWRPcHRpb25zO1xuICAgIGNsb25lLnRyYW5zbGF0b3IuYmFja2VuZENvbm5lY3Rvci5zZXJ2aWNlcy51dGlscyA9IHtcbiAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogY2xvbmUuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQoY2xvbmUpXG4gICAgfTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgbGFuZ3VhZ2VzOiB0aGlzLmxhbmd1YWdlcyxcbiAgICAgIHJlc29sdmVkTGFuZ3VhZ2U6IHRoaXMucmVzb2x2ZWRMYW5ndWFnZVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IGluc3RhbmNlID0gSTE4bi5jcmVhdGVJbnN0YW5jZSgpO1xuaW5zdGFuY2UuY3JlYXRlSW5zdGFuY2UgPSBJMThuLmNyZWF0ZUluc3RhbmNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RhbmNlO1xuIiwiZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZpbGUgc2l6ZSBoYWNrc1xuICAgICAgICByZXF1ZXN0Lm9uY29tcGxldGUgPSByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gZmlsZSBzaXplIGhhY2tzXG4gICAgICAgIHJlcXVlc3Qub25hYm9ydCA9IHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGRiTmFtZSwgc3RvcmVOYW1lKSB7XG4gICAgbGV0IGRicDtcbiAgICBjb25zdCBnZXREQiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRicClcbiAgICAgICAgICAgIHJldHVybiBkYnA7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihkYk5hbWUpO1xuICAgICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgIGRicCA9IHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIGRicC50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgLy8gSXQgc2VlbXMgbGlrZSBTYWZhcmkgc29tZXRpbWVzIGxpa2VzIHRvIGp1c3QgY2xvc2UgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAgICAvLyBJdCdzIHN1cHBvc2VkIHRvIGZpcmUgdGhpcyBldmVudCB3aGVuIHRoYXQgaGFwcGVucy4gTGV0J3MgaG9wZSBpdCBkb2VzIVxuICAgICAgICAgICAgZGIub25jbG9zZSA9ICgpID0+IChkYnAgPSB1bmRlZmluZWQpO1xuICAgICAgICB9LCAoKSA9PiB7IH0pO1xuICAgICAgICByZXR1cm4gZGJwO1xuICAgIH07XG4gICAgcmV0dXJuICh0eE1vZGUsIGNhbGxiYWNrKSA9PiBnZXREQigpLnRoZW4oKGRiKSA9PiBjYWxsYmFjayhkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsIHR4TW9kZSkub2JqZWN0U3RvcmUoc3RvcmVOYW1lKSkpO1xufVxubGV0IGRlZmF1bHRHZXRTdG9yZUZ1bmM7XG5mdW5jdGlvbiBkZWZhdWx0R2V0U3RvcmUoKSB7XG4gICAgaWYgKCFkZWZhdWx0R2V0U3RvcmVGdW5jKSB7XG4gICAgICAgIGRlZmF1bHRHZXRTdG9yZUZ1bmMgPSBjcmVhdGVTdG9yZSgna2V5dmFsLXN0b3JlJywgJ2tleXZhbCcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEdldFN0b3JlRnVuYztcbn1cbi8qKlxuICogR2V0IGEgdmFsdWUgYnkgaXRzIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZ2V0KGtleSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0KGtleSkpKTtcbn1cbi8qKlxuICogU2V0IGEgdmFsdWUgd2l0aCBhIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBTZXQgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UuIFRoaXMgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBzZXQoKSBtdWx0aXBsZSB0aW1lcy5cbiAqIEl0J3MgYWxzbyBhdG9taWMg4oCTIGlmIG9uZSBvZiB0aGUgcGFpcnMgY2FuJ3QgYmUgYWRkZWQsIG5vbmUgd2lsbCBiZSBhZGRlZC5cbiAqXG4gKiBAcGFyYW0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzLCB3aGVyZSBlYWNoIGVudHJ5IGlzIGFuIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHNldE1hbnkoZW50cmllcywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHN0b3JlLnB1dChlbnRyeVsxXSwgZW50cnlbMF0pKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgbXVsdGlwbGUgdmFsdWVzIGJ5IHRoZWlyIGtleXNcbiAqXG4gKiBAcGFyYW0ga2V5c1xuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGdldE1hbnkoa2V5cywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IFByb21pc2UuYWxsKGtleXMubWFwKChrZXkpID0+IHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0KGtleSkpKSkpO1xufVxuLyoqXG4gKiBVcGRhdGUgYSB2YWx1ZS4gVGhpcyBsZXRzIHlvdSBzZWUgdGhlIG9sZCB2YWx1ZSBhbmQgdXBkYXRlIGl0IGFzIGFuIGF0b21pYyBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHVwZGF0ZXIgQSBjYWxsYmFjayB0aGF0IHRha2VzIHRoZSBvbGQgdmFsdWUgYW5kIHJldHVybnMgYSBuZXcgdmFsdWUuXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlKGtleSwgdXBkYXRlciwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiBcbiAgICAvLyBOZWVkIHRvIGNyZWF0ZSB0aGUgcHJvbWlzZSBtYW51YWxseS5cbiAgICAvLyBJZiBJIHRyeSB0byBjaGFpbiBwcm9taXNlcywgdGhlIHRyYW5zYWN0aW9uIGNsb3NlcyBpbiBicm93c2Vyc1xuICAgIC8vIHRoYXQgdXNlIGEgcHJvbWlzZSBwb2x5ZmlsbCAoSUUxMC8xMSkuXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzdG9yZS5nZXQoa2V5KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnB1dCh1cGRhdGVyKHRoaXMucmVzdWx0KSwga2V5KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KSk7XG59XG4vKipcbiAqIERlbGV0ZSBhIHBhcnRpY3VsYXIga2V5IGZyb20gdGhlIHN0b3JlLlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBkZWwoa2V5LCBjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkd3JpdGUnLCAoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogRGVsZXRlIG11bHRpcGxlIGtleXMgYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ga2V5cyBMaXN0IG9mIGtleXMgdG8gZGVsZXRlLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGRlbE1hbnkoa2V5cywgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiBzdG9yZS5kZWxldGUoa2V5KSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ2xlYXIgYWxsIHZhbHVlcyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBlYWNoQ3Vyc29yKHN0b3JlLCBjYWxsYmFjaykge1xuICAgIHN0b3JlLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhbGxiYWNrKHRoaXMucmVzdWx0KTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbn1cbi8qKlxuICogR2V0IGFsbCBrZXlzIGluIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24ga2V5cyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsS2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0QWxsS2V5cygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWFjaEN1cnNvcihzdG9yZSwgKGN1cnNvcikgPT4gaXRlbXMucHVzaChjdXJzb3Iua2V5KSkudGhlbigoKSA9PiBpdGVtcyk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdldCBhbGwgdmFsdWVzIGluIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiB7XG4gICAgICAgIC8vIEZhc3QgcGF0aCBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGlmIChzdG9yZS5nZXRBbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWFjaEN1cnNvcihzdG9yZSwgKGN1cnNvcikgPT4gaXRlbXMucHVzaChjdXJzb3IudmFsdWUpKS50aGVuKCgpID0+IGl0ZW1zKTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IGFsbCBlbnRyaWVzIGluIHRoZSBzdG9yZS4gRWFjaCBlbnRyeSBpcyBhbiBhcnJheSBvZiBgW2tleSwgdmFsdWVdYC5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZW50cmllcyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICAvLyAoYWx0aG91Z2gsIGhvcGVmdWxseSB3ZSdsbCBnZXQgYSBzaW1wbGVyIHBhdGggc29tZSBkYXkpXG4gICAgICAgIGlmIChzdG9yZS5nZXRBbGwgJiYgc3RvcmUuZ2V0QWxsS2V5cykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbEtleXMoKSksXG4gICAgICAgICAgICAgICAgcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGwoKSksXG4gICAgICAgICAgICBdKS50aGVuKChba2V5cywgdmFsdWVzXSkgPT4ga2V5cy5tYXAoKGtleSwgaSkgPT4gW2tleSwgdmFsdWVzW2ldXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goW2N1cnNvci5rZXksIGN1cnNvci52YWx1ZV0pKS50aGVuKCgpID0+IGl0ZW1zKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNsZWFyLCBjcmVhdGVTdG9yZSwgZGVsLCBkZWxNYW55LCBlbnRyaWVzLCBnZXQsIGdldE1hbnksIGtleXMsIHByb21pc2lmeVJlcXVlc3QsIHNldCwgc2V0TWFueSwgdXBkYXRlLCB2YWx1ZXMgfTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMubm90aWZpY2F0aW9ucz10KCk6ZS5ub3RpZmljYXRpb25zPXQoKX0odGhpcywoKCk9PntyZXR1cm4gZT17MzcwMDc6ZT0+e1widXNlIHN0cmljdFwiO3ZhciB0LG49XCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3Q/UmVmbGVjdDpudWxsLGk9biYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5hcHBseT9uLmFwcGx5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoZSx0LG4pfTt0PW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4ub3duS2V5cz9uLm93bktleXM6T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSkpfTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSl9O3ZhciByPU51bWJlci5pc05hTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPWV9O2Z1bmN0aW9uIG8oKXtvLmluaXQuY2FsbCh0aGlzKX1lLmV4cG9ydHM9byxlLmV4cG9ydHMub25jZT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixpKXtmdW5jdGlvbiByKG4pe2UucmVtb3ZlTGlzdGVuZXIodCxvKSxpKG4pfWZ1bmN0aW9uIG8oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnJlbW92ZUxpc3RlbmVyJiZlLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIixyKSxuKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9bShlLHQsbyx7b25jZTohMH0pLFwiZXJyb3JcIiE9PXQmJmZ1bmN0aW9uKGUsdCxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uJiZtKGUsXCJlcnJvclwiLHQse29uY2U6ITB9KX0oZSxyKX0pKX0sby5FdmVudEVtaXR0ZXI9byxvLnByb3RvdHlwZS5fZXZlbnRzPXZvaWQgMCxvLnByb3RvdHlwZS5fZXZlbnRzQ291bnQ9MCxvLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzPXZvaWQgMDt2YXIgcz0xMDtmdW5jdGlvbiBhKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSl9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gdm9pZCAwPT09ZS5fbWF4TGlzdGVuZXJzP28uZGVmYXVsdE1heExpc3RlbmVyczplLl9tYXhMaXN0ZW5lcnN9ZnVuY3Rpb24gbChlLHQsbixpKXt2YXIgcixvLHMsbDtpZihhKG4pLHZvaWQgMD09PShvPWUuX2V2ZW50cyk/KG89ZS5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksZS5fZXZlbnRzQ291bnQ9MCk6KHZvaWQgMCE9PW8ubmV3TGlzdGVuZXImJihlLmVtaXQoXCJuZXdMaXN0ZW5lclwiLHQsbi5saXN0ZW5lcj9uLmxpc3RlbmVyOm4pLG89ZS5fZXZlbnRzKSxzPW9bdF0pLHZvaWQgMD09PXMpcz1vW3RdPW4sKytlLl9ldmVudHNDb3VudDtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHM/cz1vW3RdPWk/W24sc106W3Msbl06aT9zLnVuc2hpZnQobik6cy5wdXNoKG4pLChyPWMoZSkpPjAmJnMubGVuZ3RoPnImJiFzLndhcm5lZCl7cy53YXJuZWQ9ITA7dmFyIHU9bmV3IEVycm9yKFwiUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiBcIitzLmxlbmd0aCtcIiBcIitTdHJpbmcodCkrXCIgbGlzdGVuZXJzIGFkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdFwiKTt1Lm5hbWU9XCJNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmdcIix1LmVtaXR0ZXI9ZSx1LnR5cGU9dCx1LmNvdW50PXMubGVuZ3RoLGw9dSxjb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihsKX1yZXR1cm4gZX1mdW5jdGlvbiB1KCl7aWYoIXRoaXMuZmlyZWQpcmV0dXJuIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSx0aGlzLndyYXBGbiksdGhpcy5maXJlZD0hMCwwPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpOnRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsYXJndW1lbnRzKX1mdW5jdGlvbiBmKGUsdCxuKXt2YXIgaT17ZmlyZWQ6ITEsd3JhcEZuOnZvaWQgMCx0YXJnZXQ6ZSx0eXBlOnQsbGlzdGVuZXI6bn0scj11LmJpbmQoaSk7cmV0dXJuIHIubGlzdGVuZXI9bixpLndyYXBGbj1yLHJ9ZnVuY3Rpb24gZChlLHQsbil7dmFyIGk9ZS5fZXZlbnRzO2lmKHZvaWQgMD09PWkpcmV0dXJuW107dmFyIHI9aVt0XTtyZXR1cm4gdm9pZCAwPT09cj9bXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiByP24/W3IubGlzdGVuZXJ8fHJdOltyXTpuP2Z1bmN0aW9uKGUpe2Zvcih2YXIgdD1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPHQubGVuZ3RoOysrbil0W25dPWVbbl0ubGlzdGVuZXJ8fGVbbl07cmV0dXJuIHR9KHIpOnYocixyLmxlbmd0aCl9ZnVuY3Rpb24gcChlKXt2YXIgdD10aGlzLl9ldmVudHM7aWYodm9pZCAwIT09dCl7dmFyIG49dFtlXTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiAxO2lmKHZvaWQgMCE9PW4pcmV0dXJuIG4ubGVuZ3RofXJldHVybiAwfWZ1bmN0aW9uIHYoZSx0KXtmb3IodmFyIG49bmV3IEFycmF5KHQpLGk9MDtpPHQ7KytpKW5baV09ZVtpXTtyZXR1cm4gbn1mdW5jdGlvbiBtKGUsdCxuLGkpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUub24paS5vbmNlP2Uub25jZSh0LG4pOmUub24odCxuKTtlbHNle2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUuYWRkRXZlbnRMaXN0ZW5lcil0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnK3R5cGVvZiBlKTtlLmFkZEV2ZW50TGlzdGVuZXIodCwoZnVuY3Rpb24gcihvKXtpLm9uY2UmJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LHIpLG4obyl9KSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdE1heExpc3RlbmVyc1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGV8fGU8MHx8cihlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrZStcIi5cIik7cz1lfX0pLG8uaW5pdD1mdW5jdGlvbigpe3ZvaWQgMCE9PXRoaXMuX2V2ZW50cyYmdGhpcy5fZXZlbnRzIT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHN8fCh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKSx0aGlzLl9tYXhMaXN0ZW5lcnM9dGhpcy5fbWF4TGlzdGVuZXJzfHx2b2lkIDB9LG8ucHJvdG90eXBlLnNldE1heExpc3RlbmVycz1mdW5jdGlvbihlKXtpZihcIm51bWJlclwiIT10eXBlb2YgZXx8ZTwwfHxyKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlK1wiLlwiKTtyZXR1cm4gdGhpcy5fbWF4TGlzdGVuZXJzPWUsdGhpc30sby5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIGModGhpcyl9LG8ucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXQucHVzaChhcmd1bWVudHNbbl0pO3ZhciByPVwiZXJyb3JcIj09PWUsbz10aGlzLl9ldmVudHM7aWYodm9pZCAwIT09bylyPXImJnZvaWQgMD09PW8uZXJyb3I7ZWxzZSBpZighcilyZXR1cm4hMTtpZihyKXt2YXIgcztpZih0Lmxlbmd0aD4wJiYocz10WzBdKSxzIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgczt2YXIgYT1uZXcgRXJyb3IoXCJVbmhhbmRsZWQgZXJyb3IuXCIrKHM/XCIgKFwiK3MubWVzc2FnZStcIilcIjpcIlwiKSk7dGhyb3cgYS5jb250ZXh0PXMsYX12YXIgYz1vW2VdO2lmKHZvaWQgMD09PWMpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYylpKGMsdGhpcyx0KTtlbHNle3ZhciBsPWMubGVuZ3RoLHU9dihjLGwpO2ZvcihuPTA7bjxsOysrbilpKHVbbl0sdGhpcyx0KX1yZXR1cm4hMH0sby5wcm90b3R5cGUuYWRkTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbCh0aGlzLGUsdCwhMSl9LG8ucHJvdG90eXBlLm9uPW8ucHJvdG90eXBlLmFkZExpc3RlbmVyLG8ucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiBsKHRoaXMsZSx0LCEwKX0sby5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLHQpe3JldHVybiBhKHQpLHRoaXMub24oZSxmKHRoaXMsZSx0KSksdGhpc30sby5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiBhKHQpLHRoaXMucHJlcGVuZExpc3RlbmVyKGUsZih0aGlzLGUsdCkpLHRoaXN9LG8ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7dmFyIG4saSxyLG8scztpZihhKHQpLHZvaWQgMD09PShpPXRoaXMuX2V2ZW50cykpcmV0dXJuIHRoaXM7aWYodm9pZCAwPT09KG49aVtlXSkpcmV0dXJuIHRoaXM7aWYobj09PXR8fG4ubGlzdGVuZXI9PT10KTA9PS0tdGhpcy5fZXZlbnRzQ291bnQ/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6KGRlbGV0ZSBpW2VdLGkucmVtb3ZlTGlzdGVuZXImJnRoaXMuZW1pdChcInJlbW92ZUxpc3RlbmVyXCIsZSxuLmxpc3RlbmVyfHx0KSk7ZWxzZSBpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXtmb3Iocj0tMSxvPW4ubGVuZ3RoLTE7bz49MDtvLS0paWYobltvXT09PXR8fG5bb10ubGlzdGVuZXI9PT10KXtzPW5bb10ubGlzdGVuZXIscj1vO2JyZWFrfWlmKHI8MClyZXR1cm4gdGhpczswPT09cj9uLnNoaWZ0KCk6ZnVuY3Rpb24oZSx0KXtmb3IoO3QrMTxlLmxlbmd0aDt0KyspZVt0XT1lW3QrMV07ZS5wb3AoKX0obixyKSwxPT09bi5sZW5ndGgmJihpW2VdPW5bMF0pLHZvaWQgMCE9PWkucmVtb3ZlTGlzdGVuZXImJnRoaXMuZW1pdChcInJlbW92ZUxpc3RlbmVyXCIsZSxzfHx0KX1yZXR1cm4gdGhpc30sby5wcm90b3R5cGUub2ZmPW8ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLG8ucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgdCxuLGk7aWYodm9pZCAwPT09KG49dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT1uLnJlbW92ZUxpc3RlbmVyKXJldHVybiAwPT09YXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCk6dm9pZCAwIT09bltlXSYmKDA9PS0tdGhpcy5fZXZlbnRzQ291bnQ/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6ZGVsZXRlIG5bZV0pLHRoaXM7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciByLG89T2JqZWN0LmtleXMobik7Zm9yKGk9MDtpPG8ubGVuZ3RoOysraSlcInJlbW92ZUxpc3RlbmVyXCIhPT0ocj1vW2ldKSYmdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMocik7cmV0dXJuIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKFwicmVtb3ZlTGlzdGVuZXJcIiksdGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCx0aGlzfWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHQ9bltlXSkpdGhpcy5yZW1vdmVMaXN0ZW5lcihlLHQpO2Vsc2UgaWYodm9pZCAwIT09dClmb3IoaT10Lmxlbmd0aC0xO2k+PTA7aS0tKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0W2ldKTtyZXR1cm4gdGhpc30sby5wcm90b3R5cGUubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybiBkKHRoaXMsZSwhMCl9LG8ucHJvdG90eXBlLnJhd0xpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm4gZCh0aGlzLGUsITEpfSxvLmxpc3RlbmVyQ291bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmxpc3RlbmVyQ291bnQ/ZS5saXN0ZW5lckNvdW50KHQpOnAuY2FsbChlLHQpfSxvLnByb3RvdHlwZS5saXN0ZW5lckNvdW50PXAsby5wcm90b3R5cGUuZXZlbnROYW1lcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ldmVudHNDb3VudD4wP3QodGhpcy5fZXZlbnRzKTpbXX19LDMwODk6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRlZmVycmVkUHJvbWlzZT1jbGFzc3tjb25zdHJ1Y3Rvcigpe2NvbnN0IGU9bmV3IFByb21pc2UoKChlLHQpPT57dGhpcy5fcmVzb2x2ZT1lLHRoaXMuX3JlamVjdD10fSkpO3RoaXMuX3Byb21pc2U9ZX1nZXQgcHJvbWlzZSgpe3JldHVybiB0aGlzLl9wcm9taXNlfWdldCByZXNvbHZlKCl7cmV0dXJuIHRoaXMuX3Jlc29sdmV9Z2V0IHJlamVjdCgpe3JldHVybiB0aGlzLl9yZWplY3R9fX0sMjI3Nzc6KGUsdCxuKT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGk9bigzMDg5KTthc3luYyBmdW5jdGlvbiByKGUsdCl7bGV0IG49MDtmb3IoY29uc3QgaSBvZiBlKWF3YWl0IHQoaSxuLGUpLG4rK31hc3luYyBmdW5jdGlvbiBvKGUsdCl7YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAodCkpfWZ1bmN0aW9uIHMoZSx0LG4pe2NvbnN0IHI9bmV3IGkuRGVmZXJyZWRQcm9taXNlLG89ZS5hZGQoKCguLi5lKT0+e3QoLi4uZSkmJihvLnJlbW92ZSgpLHIucmVzb2x2ZSgpKX0pKTtyZXR1cm4gbiYmbi5jYXRjaCgoZT0+e28ucmVtb3ZlKCksci5yZWplY3QoZSl9KSksYShyLnByb21pc2UpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGUuY2F0Y2goKCgpPT57fSkpLGV9dC5zZXJpYWxGb3JFYWNoPXIsdC5zZXJpYWxNYXA9YXN5bmMgZnVuY3Rpb24oZSx0KXtjb25zdCBuPVtdO3JldHVybiBhd2FpdCByKGUsKGFzeW5jKGUsaSxyKT0+e24ucHVzaChhd2FpdCB0KGUsaSxyKSl9KSksbn0sdC5zZXJpYWxGaWx0ZXI9YXN5bmMgZnVuY3Rpb24oZSx0KXtjb25zdCBuPVtdO3JldHVybiBhd2FpdCByKGUsKGFzeW5jKGUsaSxyKT0+e2F3YWl0IHQoZSxpLHIpJiZuLnB1c2goZSl9KSksbn0sdC5wYXJhbGxlbEZvckVhY2g9byx0LnBhcmFsbGVsTWFwPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgbyhlLChhc3luYyhlLGkscik9PntuW2ldPWF3YWl0IHQoZSxpLHIpfSkpLG59LHQucGFyYWxsZWxGaWx0ZXI9YXN5bmMgZnVuY3Rpb24oZSx0KXtjb25zdCBuPVtdO3JldHVybiBhd2FpdCBvKGUsKGFzeW5jKGUsaSxyKT0+e25baV09YXdhaXQgdChlLGkscil9KSksZS5maWx0ZXIoKChlLHQpPT5uW3RdKSl9LHQud2l0aFN0cmljdFRpbWVvdXQ9ZnVuY3Rpb24oZSx0LG4pe2NvbnN0IGk9bmV3IFByb21pc2UoKCh0LGkpPT5zZXRUaW1lb3V0KCgoKT0+aShuZXcgRXJyb3IobikpKSxlKSkpO3JldHVybiBhKFByb21pc2UucmFjZShbaSx0XSkpfSx0LndpdGhUaW1lb3V0PWZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1uZXcgUHJvbWlzZSgodD0+c2V0VGltZW91dCgoKCk9PnQoWyEwLHZvaWQgMF0pKSxlKSkpLGk9dC50aGVuKChlPT5bITEsZV0pKTtyZXR1cm4gUHJvbWlzZS5yYWNlKFtuLGldKX0sdC51bnRpbFRydWU9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0KCk/UHJvbWlzZS5yZXNvbHZlKCk6cyhlLHQsbil9LHQudW50aWxTaWduYWw9cyx0LmFsbG93UmVqZWN0PWF9LDk1Nzg1OihlLHQsbik9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe2Zvcih2YXIgbiBpbiBlKXQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPWVbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGkobigyMjc3NykpLGkobigzMDg5KSl9LDQwNjUxOmU9PntlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49ZS5zcGxpdChcIi5cIiksaT10LnNwbGl0KFwiLlwiKSxyPTA7cjwzO3IrKyl7dmFyIG89TnVtYmVyKG5bcl0pLHM9TnVtYmVyKGlbcl0pO2lmKG8+cylyZXR1cm4gMTtpZihzPm8pcmV0dXJuLTE7aWYoIWlzTmFOKG8pJiZpc05hTihzKSlyZXR1cm4gMTtpZihpc05hTihvKSYmIWlzTmFOKHMpKXJldHVybi0xfXJldHVybiAwfX0sMzM2NTc6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19yZXN0fHxmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgaSBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiZ0LmluZGV4T2YoaSk8MCYmKG5baV09ZVtpXSk7aWYobnVsbCE9ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9MDtmb3IoaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3I8aS5sZW5ndGg7cisrKXQuaW5kZXhPZihpW3JdKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxpW3JdKSYmKG5baVtyXV09ZVtpW3JdXSl9cmV0dXJuIG59O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZ2V0RXZlbnRSb3V0ZXI9dC5ldmVudEVtaXR0ZXI9dC5FdmVudFJvdXRlcj12b2lkIDA7Y29uc3Qgcj1uKDM3MDA3KSxvPW4oMTExNTQpLHM9big1OTYwMyk7Y2xhc3MgYXtjb25zdHJ1Y3RvcihlKXt0aGlzLl9lbWl0dGVyUHJvdmlkZXJzPXt9LHRoaXMuX2Rlc2VyaWFsaXplcnM9e30sdGhpcy5fZGVmYXVsdEVtaXR0ZXI9ZX1yZWdpc3RlckVtaXR0ZXJQcm92aWRlcihlLHQpe3RoaXMuX2VtaXR0ZXJQcm92aWRlcnNbZV09dH1yZWdpc3RlckRlc2VyaWFsaXplcihlLHQpe3RoaXMuX2Rlc2VyaWFsaXplcnNbZV09dH1kaXNwYXRjaEV2ZW50KGUpe2NvbnN0e3R5cGU6dCx0YXJnZXQ6bn09ZSxyPWkoZSxbXCJ0eXBlXCIsXCJ0YXJnZXRcIl0pO2xldCBhO2lmKCFuKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZXZlbnQsIG5vIHRhcmdldCBzcGVjaWZpZWRcIik7aWYoXCJkZWZhdWx0XCI9PT1uKWE9dGhpcy5fZGVmYXVsdEVtaXR0ZXI7ZWxzZXtpZighdGhpcy5fZW1pdHRlclByb3ZpZGVyc1tuLnR5cGVdKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0YXJnZXQsIG5vIHByb3ZpZGVyIHJlZ2lzdGVyZWQgZm9yICcke24udHlwZX0nYCk7YT10aGlzLl9lbWl0dGVyUHJvdmlkZXJzW24udHlwZV0obi5pZCl9Y29uc3QgYz1PYmplY3QuYXNzaWduKHt0eXBlOnR9LHIpLGw9dGhpcy5fZGVzZXJpYWxpemVyc1t0XTtsP2EuZW1pdCh0LGwoYykpOlwibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCI9PT10P2Z1bmN0aW9uKGUsdCl7bGV0IG49ITE7ZS5wcmV2ZW50RGVmYXVsdD0oKT0+bj0hMCx0LmVtaXQoXCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIixlKSxufHwoMCxvLnRyeVNlcnZpY2VEaXNwYXRjaCkocy5BUElUb3BpYy5TRVRfRk9STV9TVEFUVVNfT1BUSU9OUyx7Zm9ybVN0YXR1czpcInN1Ym1pdHRlZFwiLF9ub3RpZmljYXRpb25JZDplLm5vdGlmaWNhdGlvbi5pZH0pfShjLGEpOmEuZW1pdCh0LGMpfX1sZXQgYzt0LkV2ZW50Um91dGVyPWEsdC5ldmVudEVtaXR0ZXI9bmV3IHIuRXZlbnRFbWl0dGVyLHQuZ2V0RXZlbnRSb3V0ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gY3x8KGM9bmV3IGEodC5ldmVudEVtaXR0ZXIpKSxjfX0sODY0NTU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkFjdGlvbkJvZHlDbGlja1R5cGU9dC5BY3Rpb25Ob29wVHlwZT10LkFjdGlvblRyaWdnZXI9dm9pZCAwLChuPXQuQWN0aW9uVHJpZ2dlcnx8KHQuQWN0aW9uVHJpZ2dlcj17fSkpLkNPTlRST0w9XCJjb250cm9sXCIsbi5TRUxFQ1Q9XCJzZWxlY3RcIixuLkNMT1NFPVwiY2xvc2VcIixuLkVYUElSRT1cImV4cGlyZVwiLG4uUFJPR1JBTU1BVElDPVwicHJvZ3JhbW1hdGljXCIsKHQuQWN0aW9uTm9vcFR5cGV8fCh0LkFjdGlvbk5vb3BUeXBlPXt9KSkuRVZFTlRfRElTTUlTUz1cImV2ZW50X2Rpc21pc3NcIiwodC5BY3Rpb25Cb2R5Q2xpY2tUeXBlfHwodC5BY3Rpb25Cb2R5Q2xpY2tUeXBlPXt9KSkuRElTTUlTU19FVkVOVD1cImRpc21pc3NfZXZlbnRcIn0sMjcxNjc6KGUsdCxuKT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZ2V0Q2hhbm5lbENsaWVudD10LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQ9dC5pbml0QXdhaXRlZENoYW5uZWxDbGllbnQ9dC5DaGFubmVsQ2xpZW50Q29uZmlnPXZvaWQgMDtjb25zdCBpPW4oNTk2MDMpLHI9big3NTc2Mik7dC5DaGFubmVsQ2xpZW50Q29uZmlnPXtzZXJ2aWNlQ2hhbm5lbDppLlNFUlZJQ0VfQ0hBTk5FTH07Y29uc3Qgbz1hc3luYyh7d2FpdDplfSk9Pnthd2FpdCByLkxvZy5pbmZvKFwiQ29ubmVjdGluZyB0byBOb3RpZmljYXRpb25zLi4uXCIpO2NvbnN0IG49YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KHQuQ2hhbm5lbENsaWVudENvbmZpZy5zZXJ2aWNlQ2hhbm5lbCx7d2FpdDplLHBheWxvYWQ6e3ZlcnNpb246XCIyLjkuMS1hbHBoYS0zODI1XCJ9fSk7cmV0dXJuIGF3YWl0IHIuTG9nLmluZm8oXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIE5vdGlmaWNhdGlvbnMuXCIpLG59O2xldCBzLGE7dC5pbml0QXdhaXRlZENoYW5uZWxDbGllbnQ9KCk9PnM/e2NoYW5uZWxDbGllbnRQcm9taXNlOnMsaXNJbml0OiExfToocz1vKHt3YWl0OiEwfSkscy5jYXRjaCgoZT0+KDAsdC5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpKSkse2NoYW5uZWxDbGllbnRQcm9taXNlOnMsaXNJbml0OiEwfSksdC5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50PSgpPT57cz1udWxsfSx0LmdldENoYW5uZWxDbGllbnQ9YXN5bmMoKT0+c3x8KGFzeW5jKCk9PntpZighYSl7dHJ5e2E9YXdhaXQgbyh7d2FpdDohMX0pLGEuc2V0RGVmYXVsdEFjdGlvbigoKCk9PiExKSl9Y2F0Y2goZSl7dGhyb3cgYXdhaXQgci5Mb2cuZXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGNoYW5uZWwgcHJvdmlkZXIuIERpZCB5b3UgY2FsbCBcIm5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoKVwiPycpLGV9YS5vbkRpc2Nvbm5lY3Rpb24oKCgpPT57YT1udWxsfSkpfXJldHVybiBhfSkoKX0sMTExNTQ6KGUsdCxuKT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQudHJ5U2VydmljZURpc3BhdGNoPXQuZ2V0U2VydmljZVByb21pc2U9dC5sYXVuY2hTeXN0ZW1BcHA9dC5jb25uZWN0VG9Ob3RpZmljYXRpb25zPXZvaWQgMDtjb25zdCBpPW4oOTU3ODUpLHI9big1OTYwMyksbz1uKDMzNjU3KSxzPW4oMjcxNjcpO2xldCBhO2NvbnN0IGM9bmV3IGkuRGVmZXJyZWRQcm9taXNlO2xldCBsPSExO2FzeW5jIGZ1bmN0aW9uIHUoKXtpZih3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24uaW5jbHVkZXMoXCJXaW5kb3dzXCIpKXRyeXtjb25zdCBlPWF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnZtSW5mbygpO3BhcnNlSW50KGUudmVyc2lvbi5zcGxpdChcIi5cIilbMF0pPj02JiYoZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdD9maW4uU3lzdGVtLmxhdW5jaE1hbmlmZXN0KFwiZmluczovL3N5c3RlbS1hcHBzL25vdGlmaWNhdGlvbi1jZW50ZXJcIix7bm9VaTohMH0pLmNhdGNoKChlPT57Y29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBsYXVuY2ggdGhlIE5vdGlmaWNhdGlvbiBDZW50ZXIgYXMgYSBzeXN0ZW0gYXBwXCIsZSl9KSk6ZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIoXCJmaW5zOi8vc3lzdGVtLWFwcHMvbm90aWZpY2F0aW9uLWNlbnRlclwiKS5jYXRjaCgoKCk9Pnt9KSkpfWNhdGNoKGUpe31lbHNlIGZpbi5TeXN0ZW0ub3BlblVybFdpdGhCcm93c2VyKFwiZmluczovL3N5c3RlbS1hcHBzL25vdGlmaWNhdGlvbi1jZW50ZXJcIil9YXN5bmMgZnVuY3Rpb24gZigpe3ZhciBlO2lmKGF3YWl0IGMucHJvbWlzZSwhYSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGZpbil7Y29uc3QgZT1cImZpbiBpcyBub3QgZGVmaW5lZC4gVGhlIG9wZW5maW4tbm90aWZpY2F0aW9ucyBtb2R1bGUgaXMgb25seSBpbnRlbmRlZCBmb3IgdXNlIGluIGFuIE9wZW5GaW4gYXBwbGljYXRpb24uXCI7cmV0dXJuIGE9UHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGUpKSxhfWZpbi5TeXN0ZW0uZ2V0VmVyc2lvbigpLnRoZW4oKGU9Pntjb25zdCB0PXBhcnNlSW50KGUuc3BsaXQoXCIuXCIpWzJdKTt0PDUzJiZjb25zb2xlLndhcm4oYEFQSSB2ZXJzaW9uICR7dH0gb2YgT3BlbkZpbiB2ZXJzaW9uICR7ZX0gaXMgbGVzcyB0aGFuIDUzLiBQbGVhc2UgdXBncmFkZSB0aGUgcnVudGltZSB2ZXJzaW9uLmApfSkpO2NvbnN0e25hbWU6dCx1dWlkOm59PW51bGwhPT0oZT1maW4ubWUuaWRlbnRpdHkpJiZ2b2lkIDAhPT1lP2U6ZmluLldpbmRvdy5tZTtpZihuPT09ci5TRVJWSUNFX0lERU5USVRZLnV1aWQmJnQ9PT1yLlNFUlZJQ0VfSURFTlRJVFkubmFtZSlhPVByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlRyeWluZyB0byBjb25uZWN0IHRvIHByb3ZpZGVyIGZyb20gcHJvdmlkZXJcIikpO2Vsc2V7Y29uc3QgZT13aW5kb3cuc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLndhcm4oXCJUYWtpbmcgYSBsb25nIHRpbWUgdG8gY29ubmVjdCB0byBOb3RpZmljYXRpb25zIHNlcnZpY2UuIElzIHRoZSBOb3RpZmljYXRpb25zIHNlcnZpY2UgcnVubmluZz9cIil9KSw1ZTMpO2E9KDAscy5pbml0QXdhaXRlZENoYW5uZWxDbGllbnQpKCkuY2hhbm5lbENsaWVudFByb21pc2UudGhlbigodD0+e3dpbmRvdy5jbGVhclRpbWVvdXQoZSk7Y29uc3Qgbj0oMCxvLmdldEV2ZW50Um91dGVyKSgpO3JldHVybiB0LnJlZ2lzdGVyKFwiV0FSTlwiLChlPT5jb25zb2xlLndhcm4oZSkpKSx0LnJlZ2lzdGVyKFwiZXZlbnRcIiwoZT0+e24uZGlzcGF0Y2hFdmVudChlKX0pKSx0LnNldERlZmF1bHRBY3Rpb24oKCgpPT4hMSkpLHQub25EaXNjb25uZWN0aW9uKCgoKT0+e2NvbnNvbGUud2FybihcIkRpc2Nvbm5lY3RlZCBmcm9tIE5vdGlmaWNhdGlvbnMgc2VydmljZVwiKSwoMCxzLmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQpKCksbD0hMCxhPW51bGwsdSgpLHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIHJlY29ubmVjdCB0byBOb3RpZmljYXRpb25zIHNlcnZpY2VcIiksZigpfSksMzAwKX0pKSxsP2NvbnNvbGUubG9nKFwiUmVjb25uZWN0ZWQgdG8gTm90aWZpY2F0aW9ucyBzZXJ2aWNlXCIpOmNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE5vdGlmaWNhdGlvbnMgc2VydmljZVwiKSx0fSkpfX1yZXR1cm4gYX10LmNvbm5lY3RUb05vdGlmaWNhdGlvbnM9ZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgZmluJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93Pyh1KCksZigpLFwibG9hZGluZ1wiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9jLnJlc29sdmUoKTood2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCgpPT57Yy5yZXNvbHZlKCl9KSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKCk9PntjLnJlc29sdmUoKX0pKSkpOmNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBjb25uZWN0IHRvIG5vdGlmaWNhdGlvbnMsIGBmaW5gIGlzIG5vdCBkZWZpbmVkXCIpfSx0LmxhdW5jaFN5c3RlbUFwcD11LHQuZ2V0U2VydmljZVByb21pc2U9Zix0LnRyeVNlcnZpY2VEaXNwYXRjaD1hc3luYyBmdW5jdGlvbihlLHQpe3JldHVybihhd2FpdCgwLHMuZ2V0Q2hhbm5lbENsaWVudCkoKSkuZGlzcGF0Y2goZSx0KX19LDg3MjA0OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDkzOTU1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5GaWVsZFR5cGU9dm9pZCAwLHQuRmllbGRUeXBlPXtzdHJpbmc6XCJzdHJpbmdcIixudW1iZXI6XCJudW1iZXJcIixib29sZWFuOlwiYm9vbGVhblwiLGRhdGU6XCJkYXRlXCIsY2hlY2tib3hHcm91cDpcImNoZWNrYm94R3JvdXBcIixyYWRpb0dyb3VwOlwicmFkaW9Hcm91cFwiLHRpbWU6XCJ0aW1lXCJ9fSw2ODkxMjpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKTtyJiYhKFwiZ2V0XCJpbiByPyF0Ll9fZXNNb2R1bGU6ci53cml0YWJsZXx8ci5jb25maWd1cmFibGUpfHwocj17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHIpfTpmdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKSxlW2ldPXRbbl19KSxyPXRoaXMmJnRoaXMuX19leHBvcnRTdGFyfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiPT09bnx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil8fGkodCxlLG4pfTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyKG4oOTM5NTUpLHQpLHIobigzMzcxMyksdCl9LDMzNzEzOihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5XaWRnZXRUeXBlPXQuVGltZVdpZGdldFR5cGU9dC5EYXRlV2lkZ2V0VHlwZT10LlJhZGlvR3JvdXBXaWRnZXRUeXBlPXQuQ2hlY2tib3hHcm91cFdpZGdldFR5cGU9dC5Cb29sZWFuV2lkZ2V0VHlwZT10Lk51bWJlcldpZGdldFR5cGU9dC5TdHJpbmdXaWRnZXRUeXBlPXZvaWQgMCx0LlN0cmluZ1dpZGdldFR5cGU9e1RleHQ6XCJUZXh0XCIsRHJvcGRvd246XCJEcm9wZG93blwifSx0Lk51bWJlcldpZGdldFR5cGU9e051bWJlcjpcIk51bWJlclwifSx0LkJvb2xlYW5XaWRnZXRUeXBlPXtUb2dnbGU6XCJUb2dnbGVcIixDaGVja2JveDpcIkNoZWNrYm94XCJ9LHQuQ2hlY2tib3hHcm91cFdpZGdldFR5cGU9e0NoZWNrYm94R3JvdXA6XCJDaGVja2JveEdyb3VwXCJ9LHQuUmFkaW9Hcm91cFdpZGdldFR5cGU9e1JhZGlvR3JvdXA6XCJSYWRpb0dyb3VwXCJ9LHQuRGF0ZVdpZGdldFR5cGU9e0RhdGU6XCJEYXRlXCJ9LHQuVGltZVdpZGdldFR5cGU9e1RpbWU6XCJUaW1lXCJ9LHQuV2lkZ2V0VHlwZT1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQuU3RyaW5nV2lkZ2V0VHlwZSksdC5OdW1iZXJXaWRnZXRUeXBlKSx0LkJvb2xlYW5XaWRnZXRUeXBlKSx0LkNoZWNrYm94R3JvdXBXaWRnZXRUeXBlKSx0LlJhZGlvR3JvdXBXaWRnZXRUeXBlKSx0LkRhdGVXaWRnZXRUeXBlKSx0LlRpbWVXaWRnZXRUeXBlKX0sNDY4NjU6KGUsdCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbixpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuSW5kaWNhdG9yQ29sb3I9dC5JbmRpY2F0b3JUeXBlPXZvaWQgMCwoaT10LkluZGljYXRvclR5cGV8fCh0LkluZGljYXRvclR5cGU9e30pKS5GQUlMVVJFPVwiZmFpbHVyZVwiLGkuV0FSTklORz1cIndhcm5pbmdcIixpLlNVQ0NFU1M9XCJzdWNjZXNzXCIsKG49dC5JbmRpY2F0b3JDb2xvcnx8KHQuSW5kaWNhdG9yQ29sb3I9e30pKS5SRUQ9XCJyZWRcIixuLkdSRUVOPVwiZ3JlZW5cIixuLllFTExPVz1cInllbGxvd1wiLG4uQkxVRT1cImJsdWVcIixuLlBVUlBMRT1cInB1cnBsZVwiLG4uR1JBWT1cImdyYXlcIixuLk9SQU5HRT1cIm9yYW5nZVwiLG4uTUFHRU5UQT1cIm1hZ2VudGFcIixuLlRFQUw9XCJ0ZWFsXCJ9LDU5NjAzOihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5BUElUb3BpYz10LmdldENoYW5uZWxOYW1lPXQuU0VSVklDRV9DSEFOTkVMPXQuU0VSVklDRV9JREVOVElUWT12b2lkIDAsdC5TRVJWSUNFX0lERU5USVRZPXt1dWlkOlwibm90aWZpY2F0aW9ucy1zZXJ2aWNlXCIsbmFtZTpcIm5vdGlmaWNhdGlvbnMtc2VydmljZVwifSx0LlNFUlZJQ0VfQ0hBTk5FTD1cIm9mLW5vdGlmaWNhdGlvbnMtc2VydmljZS12MVwiLHQuZ2V0Q2hhbm5lbE5hbWU9ZT0+ZT09PXQuU0VSVklDRV9JREVOVElUWS51dWlkP3QuU0VSVklDRV9DSEFOTkVMOmAke2V9LSR7dC5TRVJWSUNFX0NIQU5ORUx9YCwobj10LkFQSVRvcGljfHwodC5BUElUb3BpYz17fSkpLkNSRUFURV9OT1RJRklDQVRJT049XCJjcmVhdGUtbm90aWZpY2F0aW9uXCIsbi5VUERBVEVfTk9USUZJQ0FUSU9OPVwidXBkYXRlLW5vdGlmaWNhdGlvblwiLG4uQ0xFQVJfTk9USUZJQ0FUSU9OPVwiY2xlYXItbm90aWZpY2F0aW9uXCIsbi5HRVRfQVBQX05PVElGSUNBVElPTlM9XCJmZXRjaC1hcHAtbm90aWZpY2F0aW9uc1wiLG4uQ0xFQVJfQVBQX05PVElGSUNBVElPTlM9XCJjbGVhci1hcHAtbm90aWZpY2F0aW9uc1wiLG4uVE9HR0xFX05PVElGSUNBVElPTl9DRU5URVI9XCJ0b2dnbGUtbm90aWZpY2F0aW9uLWNlbnRlclwiLG4uQUREX0VWRU5UX0xJU1RFTkVSPVwiYWRkLWV2ZW50LWxpc3RlbmVyXCIsbi5SRU1PVkVfRVZFTlRfTElTVEVORVI9XCJyZW1vdmUtZXZlbnQtbGlzdGVuZXJcIixuLkdFVF9QUk9WSURFUl9TVEFUVVM9XCJnZXQtcHJvdmlkZXItc3RhdHVzXCIsbi5HRVRfTk9USUZJQ0FUSU9OU19DT1VOVD1cImdldC1ub3RpZmljYXRpb25zLWNvdW50XCIsbi5TSE9XX05PVElGSUNBVElPTl9DRU5URVI9XCJzaG93LW5vdGlmaWNhdGlvbi1jZW50ZXJcIixuLkhJREVfTk9USUZJQ0FUSU9OX0NFTlRFUj1cImhpZGUtbm90aWZpY2F0aW9uLWNlbnRlclwiLG4uUkVHSVNURVJfUExBVEZPUk09XCJyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCIsbi5ERVJFR0lTVEVSX1BMQVRGT1JNPVwiZGVyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCIsbi5TRVRfRk9STV9TVEFUVVNfT1BUSU9OUz1cInNldC1mb3JtLXN0YXR1cy1vcHRpb25zXCIsbi5TRVRfRk9STV9WQUxJREFUSU9OX0VSUk9SUz1cInNldC1mb3JtLXZhbGlkYXRpb24tZXJyb3JzXCIsbi5HRVRfVVNFUl9TRVRUSU5HU19TVEFUVVM9XCJnZXQtdXNlci1zZXR0aW5ncy1zdGF0dXNcIixuLlNFVF9ERUZBVUxUX1BMQVRGT1JNX1NIT1JUQ1VUPVwic2V0LWRlZmF1bHQtcGxhdGZvcm0tc2hvcnRjdXRcIixuLlNFVF9OT1RJRklDQVRJT05fU0VDVVJJVFlfUlVMRT1cInNldC1ub3RpZmljYXRpb24tc2VjdXJpdHktcnVsZVwifSw3NTc2MjooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTG9nPXZvaWQgMDtjbGFzcyBue3N0YXRpYyBhc3luYyBlcnJvcihlKXt0cnl7Y29uc3QgdD1uLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLmVycm9yKHQpLGF3YWl0IGZpbi5TeXN0ZW0ubG9nKFwiZXJyb3JcIix0KX1jYXRjaChlKXtuLmhhbmRsZUVycm9yKGUsXCJGYWlsZWQgdG8gbG9nIGVycm9yXCIpfX1zdGF0aWMgYXN5bmMgd2FybihlKXt0cnl7Y29uc3QgdD1uLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLndhcm4odCksYXdhaXQgZmluLlN5c3RlbS5sb2coXCJ3YXJuaW5nXCIsdCl9Y2F0Y2goZSl7bi5oYW5kbGVFcnJvcihlLFwiRmFpbGVkIHRvIGxvZyB3YXJuaW5nXCIpfX1zdGF0aWMgYXN5bmMgaW5mbyhlKXt0cnl7Y29uc3QgdD1uLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLmluZm8odCksYXdhaXQgZmluLlN5c3RlbS5sb2coXCJpbmZvXCIsdCl9Y2F0Y2goZSl7bi5oYW5kbGVFcnJvcihlLFwiRmFpbGVkIHRvIGxvZyBpbmZvXCIpfX1zdGF0aWMgZ2V0UHJlZml4ZWRNZXNzYWdlKGUpe3JldHVybmAke24uTE9HX1BSRUZJWH0gJHtlfWB9c3RhdGljIGhhbmRsZUVycm9yKGUsdCl7ZSBpbnN0YW5jZW9mIEVycm9yP2NvbnNvbGUuZXJyb3IoYCR7dH0gLSAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApOmNvbnNvbGUuZXJyb3IoYCR7dH0gLSAke0pTT04uc3RyaW5naWZ5KGUpfWApfX10LkxvZz1uLG4uTE9HX1BSRUZJWD1cIltvcGVuZmluLW5vdGlmaWNhdGlvbnNdXCJ9LDQwNzA3OmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO3ImJiEoXCJnZXRcImluIHI/IXQuX19lc01vZHVsZTpyLndyaXRhYmxlfHxyLmNvbmZpZ3VyYWJsZSl8fChyPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscil9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLHI9dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksbz10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCIhPT1uJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmaSh0LGUsbik7cmV0dXJuIHIodCxlKSx0fSxzPXRoaXMmJnRoaXMuX19leHBvcnRTdGFyfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiPT09bnx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil8fGkodCxlLG4pfSxhPXRoaXMmJnRoaXMuX19yZXN0fHxmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgaSBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiZ0LmluZGV4T2YoaSk8MCYmKG5baV09ZVtpXSk7aWYobnVsbCE9ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9MDtmb3IoaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3I8aS5sZW5ndGg7cisrKXQuaW5kZXhPZihpW3JdKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxpW3JdKSYmKG5baVtyXV09ZVtpW3JdXSl9cmV0dXJuIG59O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuc2V0QWxsb3dlZE9yaWdpbnM9dC5nZXRVc2VyU2V0dGluZ1N0YXR1cz10LlVzZXJTZXR0aW5ncz10LmdldE5vdGlmaWNhdGlvbnNDb3VudD10LmhpZGU9dC5zaG93PXQuc2V0RGVmYXVsdFBsYXRmb3JtU2hvcnRjdXQ9dC50b2dnbGVOb3RpZmljYXRpb25DZW50ZXI9dC5jbGVhckFsbD10LmdldEFsbD10LmNsZWFyPXQudXBkYXRlPXQuY3JlYXRlPXQucmVtb3ZlRXZlbnRMaXN0ZW5lcj10LmFkZEV2ZW50TGlzdGVuZXI9dC5WRVJTSU9OPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yVHlwZT10LkluZGljYXRvckNvbG9yPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yPXQuTm90aWZpY2F0aW9uT3B0aW9ucz10LnByb3ZpZGVyPXQuYWN0aW9ucz12b2lkIDA7Y29uc3QgYz1uKDg2NDU1KSxsPW4oMTExNTQpLHU9big1OTYwMyksZj1uKDMzNjU3KSxkPW8obig0NjQ1MSkpO3QucHJvdmlkZXI9ZDtjb25zdCBwPW4oMjgxNzMpLHY9big0Njg2NSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJOb3RpZmljYXRpb25JbmRpY2F0b3JcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdi5Ob3RpZmljYXRpb25JbmRpY2F0b3J9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJOb3RpZmljYXRpb25JbmRpY2F0b3JXaXRoQ3VzdG9tQ29sb3JcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdi5Ob3RpZmljYXRpb25JbmRpY2F0b3JXaXRoQ3VzdG9tQ29sb3J9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJOb3RpZmljYXRpb25JbmRpY2F0b3JUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuSW5kaWNhdG9yVHlwZX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIkluZGljYXRvckNvbG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuSW5kaWNhdG9yQ29sb3J9fSk7Y29uc3QgbT1uKDQ0NDE1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbk9wdGlvbnNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbS5Ob3RpZmljYXRpb25PcHRpb25zfX0pO2NvbnN0IGc9byhuKDg2NDU1KSk7dC5hY3Rpb25zPWcscyhuKDg2NDU1KSx0KSxzKG4oODcyMDQpLHQpLHMobig1MDI5NSksdCkscyhuKDY4OTEyKSx0KSxzKG4oMTMxNTQpLHQpLHMobig3NTA1MCksdCkscyhuKDkwNTEyKSx0KSx0LlZFUlNJT049XCIyLjkuMS1hbHBoYS0zODI1XCI7Y29uc3QgeT0oMCxmLmdldEV2ZW50Um91dGVyKSgpO2Z1bmN0aW9uIGgoZSl7Y29uc3R7bm90aWZpY2F0aW9uOnR9PWU7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7bm90aWZpY2F0aW9uOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7ZGF0ZTpuZXcgRGF0ZSh0LmRhdGUpLGV4cGlyZXM6bnVsbCE9PXQuZXhwaXJlcz9uZXcgRGF0ZSh0LmV4cGlyZXMpOm51bGx9KX0pfXkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tY3JlYXRlZFwiLChlPT5oKGUpKSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi10b2FzdC1kaXNtaXNzZWRcIiwoZT0+aChlKSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tY2xvc2VkXCIsKGU9PmgoZSkpKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLWFjdGlvblwiLChlPT57dmFyIHQ7Y29uc3Qgbj1oKGUpLHtjb250cm9sU291cmNlOmksY29udHJvbEluZGV4OnJ9PW4sbz1hKG4sW1wiY29udHJvbFNvdXJjZVwiLFwiY29udHJvbEluZGV4XCJdKTtyZXR1cm4gZS50cmlnZ2VyPT09Yy5BY3Rpb25UcmlnZ2VyLkNPTlRST0w/T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG8pLHtjb250cm9sOm51bGw9PT0odD1lLm5vdGlmaWNhdGlvbltpXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnRbcl19KTpvfSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb25zLWNvdW50LWNoYW5nZWRcIiwoZT0+ZSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tcmVtaW5kZXItY3JlYXRlZFwiLChlPT57Y29uc3QgdD1oKGUpLHtyZW1pbmRlckRhdGU6bn09dCxpPWEodCxbXCJyZW1pbmRlckRhdGVcIl0pO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30saSkse3JlbWluZGVyRGF0ZTpuZXcgRGF0ZShuKX0pfSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tcmVtaW5kZXItcmVtb3ZlZFwiLChlPT5oKGUpKSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1zb3VuZC10b2dnbGVkXCIsKGU9PmUpKSx0LmFkZEV2ZW50TGlzdGVuZXI9YXN5bmMgZnVuY3Rpb24oZSx0KXsoMCxwLnZhbGlkYXRlRW52aXJvbm1lbnQpKCksZT0oMCxwLnNhbml0aXplRXZlbnRUeXBlKShlKSx0PSgwLHAuc2FuaXRpemVGdW5jdGlvbikodCk7Y29uc3Qgbj1mLmV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KGUpO1wibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCI9PT1lJiYodD1mdW5jdGlvbihlKXtyZXR1cm4gdD0+e2NvbnN0IG49dC5ub3RpZmljYXRpb24uaWQ7dC5zZXRGb3JtU3RhdHVzPWU9PigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9GT1JNX1NUQVRVU19PUFRJT05TLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7X25vdGlmaWNhdGlvbklkOm59KSksZSh0KX19KHQpKSxcIm5vdGlmaWNhdGlvbi1mb3JtLXZhbHVlcy1jaGFuZ2VkXCI9PT1lJiYodD1mdW5jdGlvbihlKXtyZXR1cm4gdD0+e3Quc2V0RXJyb3JzPWU9PigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9GT1JNX1ZBTElEQVRJT05fRVJST1JTLHtlcnJvcnM6ZSxub3RpZmljYXRpb25JZDp0Lm5vdGlmaWNhdGlvbi5pZH0pLGUodCl9fSh0KSksZi5ldmVudEVtaXR0ZXIuYWRkTGlzdGVuZXIoZSx0KSwwPT09biYmMT09PWYuZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoZSkmJmF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQUREX0VWRU5UX0xJU1RFTkVSLGUpfSx0LnJlbW92ZUV2ZW50TGlzdGVuZXI9YXN5bmMgZnVuY3Rpb24oZSx0KXsoMCxwLnZhbGlkYXRlRW52aXJvbm1lbnQpKCksZT0oMCxwLnNhbml0aXplRXZlbnRUeXBlKShlKSx0PSgwLHAuc2FuaXRpemVGdW5jdGlvbikodCksMT09PWYuZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoZSkmJmYuZXZlbnRFbWl0dGVyLmxpc3RlbmVycyhlKVswXT09PXQmJmF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuUkVNT1ZFX0VWRU5UX0xJU1RFTkVSLGUpLGYuZXZlbnRFbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGUsdCl9LHQuY3JlYXRlPWFzeW5jIGZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgYW5kIG11c3Qgbm90IGJlIG51bGxcIik7aWYodm9pZCAwIT09ZS5kYXRlJiYhKGUuZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBcImRhdGVcIiBtdXN0IGJlIGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZih2b2lkIDAhPT1lLmV4cGlyZXMmJm51bGwhPT1lLmV4cGlyZXMmJiEoZS5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IFwiZXhwaXJlc1wiIG11c3QgYmUgbnVsbCBvciBhIHZhbGlkIERhdGUgb2JqZWN0Jyk7aWYodCYmdC5yZW1pbmRlckRhdGUpe2lmKCExPT09ZS5hbGxvd1JlbWluZGVyKXRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IHNwZWNpZnkgYSByZW1pbmRlciBkYXRlIGZvciBhIG5vdGlmaWNhdGlvbiB3aXRoIFwiYWxsb3dSZW1pbmRlclwiIG9wdGlvbiBzZXQgdG8gZmFsc2UuJyk7aWYoISh0LnJlbWluZGVyRGF0ZSBpbnN0YW5jZW9mIERhdGUpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gcmVtaW5kZXIgT3B0aW9uczogXCJkYXRlXCIgbXVzdCBhIHZhbGlkIERhdGUgb2JqZWN0Jyk7aWYoZS5leHBpcmVzJiZlLmV4cGlyZXMuZ2V0VGltZSgpPHQucmVtaW5kZXJEYXRlLmdldFRpbWUoKSl0aHJvdyBuZXcgRXJyb3IoXCJFeHBpcmF0aW9uIGRhdGUgbXVzdCBub3QgYmUgZWFybGllciB0aGFuIHJlbWluZGVyIGRhdGUuXCIpfXZvaWQgMCE9PWUuY2F0ZWdvcnkmJm51bGwhPT1lLmNhdGVnb3J5fHwoZS5jYXRlZ29yeT1cImRlZmF1bHRcIik7Y29uc3Qgbj1hd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkNSRUFURV9OT1RJRklDQVRJT04sT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtkYXRlOmUuZGF0ZSYmZS5kYXRlLnZhbHVlT2YoKSxleHBpcmVzOmUuZXhwaXJlcyYmZS5leHBpcmVzLnZhbHVlT2YoKSxyZW1pbmRlcjoobnVsbD09dD92b2lkIDA6dC5yZW1pbmRlckRhdGUpJiZ0LnJlbWluZGVyRGF0ZS52YWx1ZU9mKCl9KSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxuKSx7ZGF0ZTpuZXcgRGF0ZShuLmRhdGUpLGV4cGlyZXM6bnVsbCE9PW4uZXhwaXJlcz9uZXcgRGF0ZShuLmV4cGlyZXMpOm51bGx9KX0sdC51cGRhdGU9YXN5bmMgZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgYW5kIG11c3Qgbm90IGJlIG51bGxcIik7aWYoIWUuaWQpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IFwiaWRcIiBtdXN0IGJlIElkIG9mIHByZXZpb3VzbHkgY3JlYXRlZCBOb3RpZmljYXRpb24nKTtjb25zdCB0PWF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuVVBEQVRFX05PVElGSUNBVElPTixPYmplY3QuYXNzaWduKHt9LGUpKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx0KX0sdC5jbGVhcj1hc3luYyBmdW5jdGlvbihlKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5DTEVBUl9OT1RJRklDQVRJT04se2lkOmV9KX0sdC5nZXRBbGw9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oYXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5HRVRfQVBQX05PVElGSUNBVElPTlMsdm9pZCAwKSkubWFwKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2luZGljYXRvcjplLmluZGljYXRvcnx8bnVsbCxkYXRlOm5ldyBEYXRlKGUuZGF0ZSksZXhwaXJlczpudWxsIT09ZS5leHBpcmVzP25ldyBEYXRlKGUuZXhwaXJlcyk6bnVsbH0pKSl9LHQuY2xlYXJBbGw9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5DTEVBUl9BUFBfTk9USUZJQ0FUSU9OUyx2b2lkIDApfSx0LnRvZ2dsZU5vdGlmaWNhdGlvbkNlbnRlcj1hc3luYyBmdW5jdGlvbigpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlRPR0dMRV9OT1RJRklDQVRJT05fQ0VOVEVSLHZvaWQgMCl9LHQuc2V0RGVmYXVsdFBsYXRmb3JtU2hvcnRjdXQ9ZnVuY3Rpb24oZSl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX0RFRkFVTFRfUExBVEZPUk1fU0hPUlRDVVQsZSl9LHQuc2hvdz1hc3luYyBmdW5jdGlvbihlKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TSE9XX05PVElGSUNBVElPTl9DRU5URVIsZSl9LHQuaGlkZT1hc3luYyBmdW5jdGlvbigpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkhJREVfTk9USUZJQ0FUSU9OX0NFTlRFUix2b2lkIDApfSx0LmdldE5vdGlmaWNhdGlvbnNDb3VudD1hc3luYyBmdW5jdGlvbigpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkdFVF9OT1RJRklDQVRJT05TX0NPVU5ULHZvaWQgMCl9LCh0LlVzZXJTZXR0aW5nc3x8KHQuVXNlclNldHRpbmdzPXt9KSkuU09VTkRfRU5BQkxFRD1cInNvdW5kRW5hYmxlZFwiLHQuZ2V0VXNlclNldHRpbmdTdGF0dXM9YXN5bmMgZnVuY3Rpb24oZSl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuR0VUX1VTRVJfU0VUVElOR1NfU1RBVFVTLGUpfSx0LnNldEFsbG93ZWRPcmlnaW5zPWFzeW5jIGU9PigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9OT1RJRklDQVRJT05fU0VDVVJJVFlfUlVMRSx7YWxsb3dlZE9yaWdpbnM6ZX0pfSw0NjQ1MTpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5pc0Nvbm5lY3RlZFRvQXRMZWFzdD10LmdldFN0YXR1cz12b2lkIDA7Y29uc3Qgcj1pKG4oNDA2NTEpKSxvPW4oOTU3ODUpLHM9bigxMTE1NCksYT1uKDU5NjAzKTtmdW5jdGlvbiBjKCl7cmV0dXJuKDAsby53aXRoU3RyaWN0VGltZW91dCkoNTAwLCgwLHMudHJ5U2VydmljZURpc3BhdGNoKShhLkFQSVRvcGljLkdFVF9QUk9WSURFUl9TVEFUVVMsdm9pZCAwKSxcIlwiKS5jYXRjaCgoKCk9Pih7Y29ubmVjdGVkOiExLHZlcnNpb246bnVsbCx0ZW1wbGF0ZUFQSVZlcnNpb246bnVsbH0pKSl9dC5nZXRTdGF0dXM9Yyx0LmlzQ29ubmVjdGVkVG9BdExlYXN0PWFzeW5jIGZ1bmN0aW9uKGUpe2NvbnN0IHQ9YXdhaXQgYygpO2lmKHQuY29ubmVjdGVkJiZudWxsIT09dC52ZXJzaW9uKXtjb25zdCBuPSgwLHIuZGVmYXVsdCkodC52ZXJzaW9uLGUpO2lmKDA9PT1ufHwxPT09bilyZXR1cm4hMH1yZXR1cm4hMX19LDU4Nzk6KGUsdCxuKT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQucmVnaXN0ZXI9dC5DaGFubmVsQ2xpZW50SGFuZGxlcnM9dm9pZCAwO2NvbnN0IGk9big1OTYwMykscj1uKDMzNjU3KSxvPW4oNzU3NjIpLHM9bigyNzE2NyksYT1uKDQ2NDUxKTtjbGFzcyBje310LkNoYW5uZWxDbGllbnRIYW5kbGVycz1jLGMuaGFuZGxlRGVmYXVsdEFjdGlvbj0oKT0+ITEsYy5oYW5kbGVFdmVudEFjdGlvbj1lPT57KDAsci5nZXRFdmVudFJvdXRlcikoKS5kaXNwYXRjaEV2ZW50KGUpfSxjLmhhbmRsZVdhcm5BY3Rpb249YXN5bmMgZT0+e2F3YWl0IG8uTG9nLndhcm4oZSl9LGMuaGFuZGxlRGlzY29ubmVjdGlvbj1hc3luYygpPT57KDAscy5nZXRDaGFubmVsQ2xpZW50KSgpJiYoYXdhaXQgby5Mb2cud2FybihcIkRpc2Nvbm5lY3RlZCBmcm9tIE5vdGlmaWNhdGlvbnMuIFJlY29ubmVjdGluZy4uLlwiKSwoMCxzLmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQpKCksYXdhaXQgZigpLGF3YWl0IGQoKSl9O2xldCBsPW51bGw7dC5yZWdpc3Rlcj1hc3luYyBlPT57aWYobClyZXR1cm4gbDt0cnl7cmV0dXJuIGw9dShlKSxhd2FpdCBsfWZpbmFsbHl7bD1udWxsfX07Y29uc3QgdT1hc3luYyBlPT57aWYobnVsbD09ZT92b2lkIDA6ZS5jdXN0b21NYW5pZmVzdCl7aWYoIWUuY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVcmwpdGhyb3cgbmV3IEVycm9yKFwibWFuaWZlc3RVcmwgbXVzdCBiZSBwcm92aWRlZC5cIik7aWYoIWUuY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVdWlkKXRocm93IG5ldyBFcnJvcihcIm1hbmlmZXN0VXVpZCBtdXN0IGJlIHByb3ZpZGVkIGFuZCBtdXN0IG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXCIpO2lmKGUuY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVdWlkPT09aS5TRVJWSUNFX0NIQU5ORUwpdGhyb3cgbmV3IEVycm9yKGBtYW5pZmVzdFV1aWQgbXVzdCBub3QgYmUgJHtpLlNFUlZJQ0VfQ0hBTk5FTH1gKTtzLkNoYW5uZWxDbGllbnRDb25maWcuc2VydmljZUNoYW5uZWw9YCR7ZS5jdXN0b21NYW5pZmVzdC5tYW5pZmVzdFV1aWR9LSR7aS5TRVJWSUNFX0NIQU5ORUx9YCxhd2FpdCBmKGUuY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVcmwpfWVsc2Ugcy5DaGFubmVsQ2xpZW50Q29uZmlnLnNlcnZpY2VDaGFubmVsPWkuU0VSVklDRV9DSEFOTkVMLGF3YWl0IGYoKTtyZXR1cm4gYXdhaXQgZCgpLHtjbGllbnRBUElWZXJzaW9uOlwiMi45LjEtYWxwaGEtMzgyNVwiLG5vdGlmaWNhdGlvbnNWZXJzaW9uOihhd2FpdCgwLGEuZ2V0U3RhdHVzKSgpKS52ZXJzaW9ufHxcInVua25vd25cIn19LGY9YXN5bmMgZT0+e3RyeXtjb25zdCB0PXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJ3aW5kb3dzXCIpLG49ZXx8XCJmaW5zOi8vc3lzdGVtLWFwcHMvbm90aWZpY2F0aW9uLWNlbnRlclwiO3Q/KGF3YWl0IG8uTG9nLmluZm8oXCJMYXVuY2hpbmcgTm90aWZpY2F0aW9ucyB2aWEgZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdC4uLlwiKSxhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaE1hbmlmZXN0KG4se25vVWk6ITB9KSk6KGF3YWl0IG8uTG9nLmluZm8oXCJMYXVuY2hpbmcgTm90aWZpY2F0aW9ucyB2aWEgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIuLi5cIiksYXdhaXQgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIobikpfWNhdGNoKGUpe3Rocm93IGUgaW5zdGFuY2VvZiBFcnJvcj9hd2FpdCBvLkxvZy5lcnJvcihgRmFpbGVkIHRvIGxhdW5jaCBOb3RpZmljYXRpb25zIC0gJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTphd2FpdCBvLkxvZy5lcnJvcihgRmFpbGVkIHRvIGxhdW5jaCBOb3RpZmljYXRpb25zIC0gJHtKU09OLnN0cmluZ2lmeShlKX1gKSxlfX0sZD1hc3luYygpPT57dHJ5e2NvbnN0e2NoYW5uZWxDbGllbnRQcm9taXNlOmUsaXNJbml0OnR9PSgwLHMuaW5pdEF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLG49YXdhaXQgZTt0JiYobi5zZXREZWZhdWx0QWN0aW9uKGMuaGFuZGxlRGVmYXVsdEFjdGlvbiksbi5yZWdpc3RlcihcImV2ZW50XCIsYy5oYW5kbGVFdmVudEFjdGlvbiksbi5yZWdpc3RlcihcIldBUk5cIixjLmhhbmRsZVdhcm5BY3Rpb24pLG4ub25EaXNjb25uZWN0aW9uKGMuaGFuZGxlRGlzY29ubmVjdGlvbiksZmluLldpbmRvdy53cmFwU3luYyhpLlNFUlZJQ0VfSURFTlRJVFkpLm9uY2UoXCJjbG9zZWRcIixjLmhhbmRsZURpc2Nvbm5lY3Rpb24pKX1jYXRjaChlKXt0aHJvdyBlIGluc3RhbmNlb2YgRXJyb3I/YXdhaXQgby5Mb2cuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvIE5vdGlmaWNhdGlvbnMgLSAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApOmF3YWl0IG8uTG9nLmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCB0byBOb3RpZmljYXRpb25zIC0gJHtKU09OLnN0cmluZ2lmeShlKX1gKSxlfX19LDEzMTU0OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDUwMjk1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDc1MDUwOihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDc4MzY0OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDcxNDc0OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDkwNTEyOmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO3ImJiEoXCJnZXRcImluIHI/IXQuX19lc01vZHVsZTpyLndyaXRhYmxlfHxyLmNvbmZpZ3VyYWJsZSl8fChyPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscil9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLHI9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIobig3ODM2NCksdCkscihuKDcxNDc0KSx0KSxyKG4oNDQ0MTUpLHQpLHIobigxNTkxNSksdCl9LDQ0NDE1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5UZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5QcmVzZW50YXRpb25UZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5Db250YWluZXJUZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5UZW1wbGF0ZU5hbWVzPXZvaWQgMCx0LlRlbXBsYXRlTmFtZXM9e21hcmtkb3duOlwibWFya2Rvd25cIixsaXN0OlwibGlzdFwiLGN1c3RvbTpcImN1c3RvbVwifSx0LkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lcz17Y29udGFpbmVyOlwiY29udGFpbmVyXCJ9LHQuUHJlc2VudGF0aW9uVGVtcGxhdGVGcmFnbWVudE5hbWVzPXt0ZXh0OlwidGV4dFwiLGltYWdlOlwiaW1hZ2VcIixsaXN0OlwibGlzdFwiLGFjdGlvbmFibGVUZXh0OlwiYWN0aW9uYWJsZVRleHRcIn0sdC5UZW1wbGF0ZUZyYWdtZW50TmFtZXM9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQuQ29udGFpbmVyVGVtcGxhdGVGcmFnbWVudE5hbWVzKSx0LlByZXNlbnRhdGlvblRlbXBsYXRlRnJhZ21lbnROYW1lcyl9LDE1OTE1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDI4MTczOihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2xldCBuO3RyeXtuPUpTT04uc3RyaW5naWZ5KGUpfWNhdGNoKGUpe249dH1yZXR1cm4gbn1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnNhZmVTdHJpbmdpZnk9dC52YWxpZGF0ZUVudmlyb25tZW50PXQuc2FuaXRpemVFdmVudFR5cGU9dC5zYW5pdGl6ZUZ1bmN0aW9uPXZvaWQgMCx0LnNhbml0aXplRnVuY3Rpb249ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXJndW1lbnQgcGFzc2VkOiAke24oZSxcIlRoZSBwcm92aWRlZCB2YWx1ZVwiKX0gaXMgbm90IGEgdmFsaWQgZnVuY3Rpb25gKTtyZXR1cm4gZX0sdC5zYW5pdGl6ZUV2ZW50VHlwZT1mdW5jdGlvbihlKXtpZihcIm5vdGlmaWNhdGlvbi1hY3Rpb25cIj09PWV8fFwibm90aWZpY2F0aW9uLWNyZWF0ZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tY2xvc2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbnMtY291bnQtY2hhbmdlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLXJlbWluZGVyLWNyZWF0ZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLXJlbWluZGVyLXJlbW92ZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLWZvcm0tdmFsdWVzLWNoYW5nZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLXNvdW5kLXRvZ2dsZWRcIj09PWUpcmV0dXJuIGU7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZDogJHtuKGUsXCJUaGUgcHJvdmlkZWQgZXZlbnQgdHlwZVwiKX0gaXMgbm90IGEgdmFsaWQgTm90aWZpY2F0aW9ucyBldmVudCB0eXBlYCl9LHQudmFsaWRhdGVFbnZpcm9ubWVudD1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBmaW4pdGhyb3cgbmV3IEVycm9yKFwiZmluIGlzIG5vdCBkZWZpbmVkLiBUaGUgb3BlbmZpbi1ub3RpZmljYXRpb25zIG1vZHVsZSBpcyBvbmx5IGludGVuZGVkIGZvciB1c2UgaW4gYW4gT3BlbkZpbiBhcHBsaWNhdGlvbi5cIil9LHQuc2FmZVN0cmluZ2lmeT1ufSw4MDY2NDpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKTtyJiYhKFwiZ2V0XCJpbiByPyF0Ll9fZXNNb2R1bGU6ci53cml0YWJsZXx8ci5jb25maWd1cmFibGUpfHwocj17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHIpfTpmdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKSxlW2ldPXRbbl19KSxyPXRoaXMmJnRoaXMuX19leHBvcnRTdGFyfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiPT09bnx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil8fGkodCxlLG4pfTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk5vdGlmaWNhdGlvbnNSZWdpc3RyYXRpb249dC5yZWdpc3Rlcj12b2lkIDAscihuKDQwNzA3KSx0KTt2YXIgbz1uKDU4NzkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmVnaXN0ZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gby5yZWdpc3Rlcn19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbnNSZWdpc3RyYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gby5Ob3RpZmljYXRpb25zUmVnaXN0cmF0aW9ufX0pfX0sdD17fSxmdW5jdGlvbiBuKGkpe3ZhciByPXRbaV07aWYodm9pZCAwIT09cilyZXR1cm4gci5leHBvcnRzO3ZhciBvPXRbaV09e2V4cG9ydHM6e319O3JldHVybiBlW2ldLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8uZXhwb3J0c30oODA2NjQpO3ZhciBlLHR9KSk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEkxOG5Db250ZXh0IH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmV4cG9ydCBmdW5jdGlvbiBJMThuZXh0UHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGkxOG4sXG4gICAgZGVmYXVsdE5TLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBpMThuLFxuICAgIGRlZmF1bHROU1xuICB9KSwgW2kxOG4sIGRlZmF1bHROU10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChJMThuQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZXNUb1N0cmluZywgVHJhbnMgYXMgVHJhbnNXaXRob3V0Q29udGV4dCB9IGZyb20gJy4vVHJhbnNXaXRob3V0Q29udGV4dC5qcyc7XG5pbXBvcnQgeyBnZXRJMThuLCBJMThuQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5leHBvcnQgeyBub2Rlc1RvU3RyaW5nIH07XG5leHBvcnQgZnVuY3Rpb24gVHJhbnMoX3JlZikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGNvdW50LFxuICAgIHBhcmVudCxcbiAgICBpMThuS2V5LFxuICAgIGNvbnRleHQsXG4gICAgdE9wdGlvbnMgPSB7fSxcbiAgICB2YWx1ZXMsXG4gICAgZGVmYXVsdHMsXG4gICAgY29tcG9uZW50cyxcbiAgICBucyxcbiAgICBpMThuOiBpMThuRnJvbVByb3BzLFxuICAgIHQ6IHRGcm9tUHJvcHMsXG4gICAgc2hvdWxkVW5lc2NhcGUsXG4gICAgLi4uYWRkaXRpb25hbFByb3BzXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgaTE4bjogaTE4bkZyb21Db250ZXh0LFxuICAgIGRlZmF1bHROUzogZGVmYXVsdE5TRnJvbUNvbnRleHRcbiAgfSA9IHVzZUNvbnRleHQoSTE4bkNvbnRleHQpIHx8IHt9O1xuICBjb25zdCBpMThuID0gaTE4bkZyb21Qcm9wcyB8fCBpMThuRnJvbUNvbnRleHQgfHwgZ2V0STE4bigpO1xuICBjb25zdCB0ID0gdEZyb21Qcm9wcyB8fCBpMThuICYmIGkxOG4udC5iaW5kKGkxOG4pO1xuICByZXR1cm4gVHJhbnNXaXRob3V0Q29udGV4dCh7XG4gICAgY2hpbGRyZW4sXG4gICAgY291bnQsXG4gICAgcGFyZW50LFxuICAgIGkxOG5LZXksXG4gICAgY29udGV4dCxcbiAgICB0T3B0aW9ucyxcbiAgICB2YWx1ZXMsXG4gICAgZGVmYXVsdHMsXG4gICAgY29tcG9uZW50cyxcbiAgICBuczogbnMgfHwgdCAmJiB0Lm5zIHx8IGRlZmF1bHROU0Zyb21Db250ZXh0IHx8IGkxOG4gJiYgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlMsXG4gICAgaTE4bixcbiAgICB0OiB0RnJvbVByb3BzLFxuICAgIHNob3VsZFVuZXNjYXBlLFxuICAgIC4uLmFkZGl0aW9uYWxQcm9wc1xuICB9KTtcbn0iLCJpbXBvcnQgeyBGcmFnbWVudCwgaXNWYWxpZEVsZW1lbnQsIGNsb25lRWxlbWVudCwgY3JlYXRlRWxlbWVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSFRNTCBmcm9tICdodG1sLXBhcnNlLXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBpc09iamVjdCwgaXNTdHJpbmcsIHdhcm4sIHdhcm5PbmNlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xuaW1wb3J0IHsgZ2V0STE4biB9IGZyb20gJy4vaTE4bkluc3RhbmNlLmpzJztcbmNvbnN0IGhhc0NoaWxkcmVuID0gKG5vZGUsIGNoZWNrTGVuZ3RoKSA9PiB7XG4gIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBiYXNlID0gbm9kZS5wcm9wcyA/IG5vZGUucHJvcHMuY2hpbGRyZW4gOiBub2RlLmNoaWxkcmVuO1xuICBpZiAoY2hlY2tMZW5ndGgpIHJldHVybiBiYXNlLmxlbmd0aCA+IDA7XG4gIHJldHVybiAhIWJhc2U7XG59O1xuY29uc3QgZ2V0Q2hpbGRyZW4gPSBub2RlID0+IHtcbiAgaWYgKCFub2RlKSByZXR1cm4gW107XG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5wcm9wcyA/IG5vZGUucHJvcHMuY2hpbGRyZW4gOiBub2RlLmNoaWxkcmVuO1xuICByZXR1cm4gbm9kZS5wcm9wcyAmJiBub2RlLnByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0ID8gZ2V0QXNBcnJheShjaGlsZHJlbikgOiBjaGlsZHJlbjtcbn07XG5jb25zdCBoYXNWYWxpZFJlYWN0Q2hpbGRyZW4gPSBjaGlsZHJlbiA9PiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5ldmVyeShpc1ZhbGlkRWxlbWVudCk7XG5jb25zdCBnZXRBc0FycmF5ID0gZGF0YSA9PiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbmNvbnN0IG1lcmdlUHJvcHMgPSAoc291cmNlLCB0YXJnZXQpID0+IHtcbiAgY29uc3QgbmV3VGFyZ2V0ID0ge1xuICAgIC4uLnRhcmdldFxuICB9O1xuICBuZXdUYXJnZXQucHJvcHMgPSBPYmplY3QuYXNzaWduKHNvdXJjZS5wcm9wcywgdGFyZ2V0LnByb3BzKTtcbiAgcmV0dXJuIG5ld1RhcmdldDtcbn07XG5leHBvcnQgY29uc3Qgbm9kZXNUb1N0cmluZyA9IChjaGlsZHJlbiwgaTE4bk9wdGlvbnMpID0+IHtcbiAgaWYgKCFjaGlsZHJlbikgcmV0dXJuICcnO1xuICBsZXQgc3RyaW5nTm9kZSA9ICcnO1xuICBjb25zdCBjaGlsZHJlbkFycmF5ID0gZ2V0QXNBcnJheShjaGlsZHJlbik7XG4gIGNvbnN0IGtlZXBBcnJheSA9IGkxOG5PcHRpb25zLnRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzICYmIGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yID8gaTE4bk9wdGlvbnMudHJhbnNLZWVwQmFzaWNIdG1sTm9kZXNGb3IgOiBbXTtcbiAgY2hpbGRyZW5BcnJheS5mb3JFYWNoKChjaGlsZCwgY2hpbGRJbmRleCkgPT4ge1xuICAgIGlmIChpc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgIHN0cmluZ05vZGUgKz0gYCR7Y2hpbGR9YDtcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgdHlwZVxuICAgICAgfSA9IGNoaWxkO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0NvdW50ID0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNob3VsZEtlZXBDaGlsZCA9IGtlZXBBcnJheS5pbmRleE9mKHR5cGUpID4gLTE7XG4gICAgICBjb25zdCBjaGlsZENoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICBpZiAoIWNoaWxkQ2hpbGRyZW4gJiYgc2hvdWxkS2VlcENoaWxkICYmICFjaGlsZFByb3BzQ291bnQpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBgPCR7dHlwZX0vPmA7XG4gICAgICB9IGVsc2UgaWYgKCFjaGlsZENoaWxkcmVuICYmICghc2hvdWxkS2VlcENoaWxkIHx8IGNoaWxkUHJvcHNDb3VudCkgfHwgcHJvcHMuaTE4bklzRHluYW1pY0xpc3QpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBgPCR7Y2hpbGRJbmRleH0+PC8ke2NoaWxkSW5kZXh9PmA7XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEtlZXBDaGlsZCAmJiBjaGlsZFByb3BzQ291bnQgPT09IDEgJiYgaXNTdHJpbmcoY2hpbGRDaGlsZHJlbikpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBgPCR7dHlwZX0+JHtjaGlsZENoaWxkcmVufTwvJHt0eXBlfT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG5vZGVzVG9TdHJpbmcoY2hpbGRDaGlsZHJlbiwgaTE4bk9wdGlvbnMpO1xuICAgICAgICBzdHJpbmdOb2RlICs9IGA8JHtjaGlsZEluZGV4fT4ke2NvbnRlbnR9PC8ke2NoaWxkSW5kZXh9PmA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgd2FybihgVHJhbnM6IHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW52YWxpZCAtIHNlZW1zIHlvdSBwYXNzZWQgaW4gYSBudWxsIGNoaWxkLmApO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZvcm1hdCxcbiAgICAgICAgLi4uY2xvbmVcbiAgICAgIH0gPSBjaGlsZDtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjbG9uZSk7XG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtYXQgPyBgJHtrZXlzWzBdfSwgJHtmb3JtYXR9YCA6IGtleXNbMF07XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYHt7JHt2YWx1ZX19fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKGByZWFjdC1pMThuZXh0OiB0aGUgcGFzc2VkIGluIG9iamVjdCBjb250YWluZWQgbW9yZSB0aGFuIG9uZSB2YXJpYWJsZSAtIHRoZSBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB7eyB2YWx1ZSwgZm9ybWF0IH19IHdoZXJlIGZvcm1hdCBpcyBvcHRpb25hbC5gLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oYFRyYW5zOiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGludmFsaWQgLSBzZWVtcyB5b3UgcGFzc2VkIGluIGEgdmFyaWFibGUgbGlrZSB7bnVtYmVyfSAtIHBsZWFzZSBwYXNzIGluIHZhcmlhYmxlcyBmb3IgaW50ZXJwb2xhdGlvbiBhcyBmdWxsIG9iamVjdHMgbGlrZSB7e251bWJlcn19LmAsIGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyaW5nTm9kZTtcbn07XG5jb25zdCByZW5kZXJOb2RlcyA9IChjaGlsZHJlbiwgdGFyZ2V0U3RyaW5nLCBpMThuLCBpMThuT3B0aW9ucywgY29tYmluZWRUT3B0cywgc2hvdWxkVW5lc2NhcGUpID0+IHtcbiAgaWYgKHRhcmdldFN0cmluZyA9PT0gJycpIHJldHVybiBbXTtcbiAgY29uc3Qga2VlcEFycmF5ID0gaTE4bk9wdGlvbnMudHJhbnNLZWVwQmFzaWNIdG1sTm9kZXNGb3IgfHwgW107XG4gIGNvbnN0IGVtcHR5Q2hpbGRyZW5CdXROZWVkc0hhbmRsaW5nID0gdGFyZ2V0U3RyaW5nICYmIG5ldyBSZWdFeHAoa2VlcEFycmF5Lm1hcChrZWVwID0+IGA8JHtrZWVwfWApLmpvaW4oJ3wnKSkudGVzdCh0YXJnZXRTdHJpbmcpO1xuICBpZiAoIWNoaWxkcmVuICYmICFlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZyAmJiAhc2hvdWxkVW5lc2NhcGUpIHJldHVybiBbdGFyZ2V0U3RyaW5nXTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICBjb25zdCBnZXREYXRhID0gY2hpbGRzID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbkFycmF5ID0gZ2V0QXNBcnJheShjaGlsZHMpO1xuICAgIGNoaWxkcmVuQXJyYXkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAoaXNTdHJpbmcoY2hpbGQpKSByZXR1cm47XG4gICAgICBpZiAoaGFzQ2hpbGRyZW4oY2hpbGQpKSBnZXREYXRhKGdldENoaWxkcmVuKGNoaWxkKSk7ZWxzZSBpZiAoaXNPYmplY3QoY2hpbGQpICYmICFpc1ZhbGlkRWxlbWVudChjaGlsZCkpIE9iamVjdC5hc3NpZ24oZGF0YSwgY2hpbGQpO1xuICAgIH0pO1xuICB9O1xuICBnZXREYXRhKGNoaWxkcmVuKTtcbiAgY29uc3QgYXN0ID0gSFRNTC5wYXJzZShgPDA+JHt0YXJnZXRTdHJpbmd9PC8wPmApO1xuICBjb25zdCBvcHRzID0ge1xuICAgIC4uLmRhdGEsXG4gICAgLi4uY29tYmluZWRUT3B0c1xuICB9O1xuICBjb25zdCByZW5kZXJJbm5lciA9IChjaGlsZCwgbm9kZSwgcm9vdFJlYWN0Tm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcyA9IGdldENoaWxkcmVuKGNoaWxkKTtcbiAgICBjb25zdCBtYXBwZWRDaGlsZHJlbiA9IG1hcEFTVChjaGlsZHMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuICAgIHJldHVybiBoYXNWYWxpZFJlYWN0Q2hpbGRyZW4oY2hpbGRzKSAmJiBtYXBwZWRDaGlsZHJlbi5sZW5ndGggPT09IDAgfHwgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuaTE4bklzRHluYW1pY0xpc3QgPyBjaGlsZHMgOiBtYXBwZWRDaGlsZHJlbjtcbiAgfTtcbiAgY29uc3QgcHVzaFRyYW5zbGF0ZWRKU1ggPSAoY2hpbGQsIGlubmVyLCBtZW0sIGksIGlzVm9pZCkgPT4ge1xuICAgIGlmIChjaGlsZC5kdW1teSkge1xuICAgICAgY2hpbGQuY2hpbGRyZW4gPSBpbm5lcjtcbiAgICAgIG1lbS5wdXNoKGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBrZXk6IGlcbiAgICAgIH0sIGlzVm9pZCA/IHVuZGVmaW5lZCA6IGlubmVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbS5wdXNoKC4uLkNoaWxkcmVuLm1hcChbY2hpbGRdLCBjID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgLi4uYy5wcm9wc1xuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgcHJvcHMuaTE4bklzRHluYW1pY0xpc3Q7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGMudHlwZSwge1xuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICByZWY6IGMucmVmXG4gICAgICAgIH0sIGlzVm9pZCA/IG51bGwgOiBpbm5lcik7XG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBtYXBBU1QgPSAocmVhY3ROb2RlLCBhc3ROb2RlLCByb290UmVhY3ROb2RlKSA9PiB7XG4gICAgY29uc3QgcmVhY3ROb2RlcyA9IGdldEFzQXJyYXkocmVhY3ROb2RlKTtcbiAgICBjb25zdCBhc3ROb2RlcyA9IGdldEFzQXJyYXkoYXN0Tm9kZSk7XG4gICAgcmV0dXJuIGFzdE5vZGVzLnJlZHVjZSgobWVtLCBub2RlLCBpKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGlvbkNvbnRlbnQgPSBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW5bMF0gJiYgbm9kZS5jaGlsZHJlblswXS5jb250ZW50ICYmIGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKG5vZGUuY2hpbGRyZW5bMF0uY29udGVudCwgb3B0cywgaTE4bi5sYW5ndWFnZSk7XG4gICAgICBpZiAobm9kZS50eXBlID09PSAndGFnJykge1xuICAgICAgICBsZXQgdG1wID0gcmVhY3ROb2Rlc1twYXJzZUludChub2RlLm5hbWUsIDEwKV07XG4gICAgICAgIGlmIChyb290UmVhY3ROb2RlLmxlbmd0aCA9PT0gMSAmJiAhdG1wKSB0bXAgPSByb290UmVhY3ROb2RlWzBdW25vZGUubmFtZV07XG4gICAgICAgIGlmICghdG1wKSB0bXAgPSB7fTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzKS5sZW5ndGggIT09IDAgPyBtZXJnZVByb3BzKHtcbiAgICAgICAgICBwcm9wczogbm9kZS5hdHRyc1xuICAgICAgICB9LCB0bXApIDogdG1wO1xuICAgICAgICBjb25zdCBpc0VsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudChjaGlsZCk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRUcmFuc2xhdGlvbldpdGhDaGlsZHJlbiA9IGlzRWxlbWVudCAmJiBoYXNDaGlsZHJlbihub2RlLCB0cnVlKSAmJiAhbm9kZS52b2lkRWxlbWVudDtcbiAgICAgICAgY29uc3QgaXNFbXB0eVRyYW5zV2l0aEhUTUwgPSBlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZyAmJiBpc09iamVjdChjaGlsZCkgJiYgY2hpbGQuZHVtbXkgJiYgIWlzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaXNLbm93bkNvbXBvbmVudCA9IGlzT2JqZWN0KGNoaWxkcmVuKSAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjaGlsZHJlbiwgbm9kZS5uYW1lKTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUoY2hpbGQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuICAgICAgICAgIG1lbS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNDaGlsZHJlbihjaGlsZCkgfHwgaXNWYWxpZFRyYW5zbGF0aW9uV2l0aENoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3QgaW5uZXIgPSByZW5kZXJJbm5lcihjaGlsZCwgbm9kZSwgcm9vdFJlYWN0Tm9kZSk7XG4gICAgICAgICAgcHVzaFRyYW5zbGF0ZWRKU1goY2hpbGQsIGlubmVyLCBtZW0sIGkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRW1wdHlUcmFuc1dpdGhIVE1MKSB7XG4gICAgICAgICAgY29uc3QgaW5uZXIgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG4gICAgICAgICAgcHVzaFRyYW5zbGF0ZWRKU1goY2hpbGQsIGlubmVyLCBtZW0sIGkpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc05hTihwYXJzZUZsb2F0KG5vZGUubmFtZSkpKSB7XG4gICAgICAgICAgaWYgKGlzS25vd25Db21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyID0gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgICAgcHVzaFRyYW5zbGF0ZWRKU1goY2hpbGQsIGlubmVyLCBtZW0sIGksIG5vZGUudm9pZEVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaTE4bk9wdGlvbnMudHJhbnNTdXBwb3J0QmFzaWNIdG1sTm9kZXMgJiYga2VlcEFycmF5LmluZGV4T2Yobm9kZS5uYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAobm9kZS52b2lkRWxlbWVudCkge1xuICAgICAgICAgICAgICBtZW0ucHVzaChjcmVhdGVFbGVtZW50KG5vZGUubmFtZSwge1xuICAgICAgICAgICAgICAgIGtleTogYCR7bm9kZS5uYW1lfS0ke2l9YFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IG1hcEFTVChyZWFjdE5vZGVzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICAgICAgICAgICAgbWVtLnB1c2goY3JlYXRlRWxlbWVudChub2RlLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGAke25vZGUubmFtZX0tJHtpfWBcbiAgICAgICAgICAgICAgfSwgaW5uZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudm9pZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1lbS5wdXNoKGA8JHtub2RlLm5hbWV9IC8+YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyID0gbWFwQVNUKHJlYWN0Tm9kZXMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgICAgbWVtLnB1c2goYDwke25vZGUubmFtZX0+JHtpbm5lcn08LyR7bm9kZS5uYW1lfT5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoY2hpbGQpICYmICFpc0VsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gbm9kZS5jaGlsZHJlblswXSA/IHRyYW5zbGF0aW9uQ29udGVudCA6IG51bGw7XG4gICAgICAgICAgaWYgKGNvbnRlbnQpIG1lbS5wdXNoKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCB0cmFuc2xhdGlvbkNvbnRlbnQsIG1lbSwgaSwgbm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgIXRyYW5zbGF0aW9uQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgY29uc3Qgd3JhcFRleHROb2RlcyA9IGkxOG5PcHRpb25zLnRyYW5zV3JhcFRleHROb2RlcztcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNob3VsZFVuZXNjYXBlID8gaTE4bk9wdGlvbnMudW5lc2NhcGUoaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKSkgOiBpMThuLnNlcnZpY2VzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShub2RlLmNvbnRlbnQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuICAgICAgICBpZiAod3JhcFRleHROb2Rlcykge1xuICAgICAgICAgIG1lbS5wdXNoKGNyZWF0ZUVsZW1lbnQod3JhcFRleHROb2Rlcywge1xuICAgICAgICAgICAga2V5OiBgJHtub2RlLm5hbWV9LSR7aX1gXG4gICAgICAgICAgfSwgY29udGVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbS5wdXNoKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIFtdKTtcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gbWFwQVNUKFt7XG4gICAgZHVtbXk6IHRydWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuIHx8IFtdXG4gIH1dLCBhc3QsIGdldEFzQXJyYXkoY2hpbGRyZW4gfHwgW10pKTtcbiAgcmV0dXJuIGdldENoaWxkcmVuKHJlc3VsdFswXSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjb3VudCxcbiAgICBwYXJlbnQsXG4gICAgaTE4bktleSxcbiAgICBjb250ZXh0LFxuICAgIHRPcHRpb25zID0ge30sXG4gICAgdmFsdWVzLFxuICAgIGRlZmF1bHRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgbnMsXG4gICAgaTE4bjogaTE4bkZyb21Qcm9wcyxcbiAgICB0OiB0RnJvbVByb3BzLFxuICAgIHNob3VsZFVuZXNjYXBlLFxuICAgIC4uLmFkZGl0aW9uYWxQcm9wc1xuICB9ID0gX3JlZjtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgZ2V0STE4bigpO1xuICBpZiAoIWkxOG4pIHtcbiAgICB3YXJuT25jZSgnWW91IHdpbGwgbmVlZCB0byBwYXNzIGluIGFuIGkxOG5leHQgaW5zdGFuY2UgYnkgdXNpbmcgaTE4bmV4dFJlYWN0TW9kdWxlJyk7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIGNvbnN0IHQgPSB0RnJvbVByb3BzIHx8IGkxOG4udC5iaW5kKGkxOG4pIHx8IChrID0+IGspO1xuICBjb25zdCByZWFjdEkxOG5leHRPcHRpb25zID0ge1xuICAgIC4uLmdldERlZmF1bHRzKCksXG4gICAgLi4uKGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMucmVhY3QpXG4gIH07XG4gIGxldCBuYW1lc3BhY2VzID0gbnMgfHwgdC5ucyB8fCBpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmRlZmF1bHROUztcbiAgbmFtZXNwYWNlcyA9IGlzU3RyaW5nKG5hbWVzcGFjZXMpID8gW25hbWVzcGFjZXNdIDogbmFtZXNwYWNlcyB8fCBbJ3RyYW5zbGF0aW9uJ107XG4gIGNvbnN0IG5vZGVBc1N0cmluZyA9IG5vZGVzVG9TdHJpbmcoY2hpbGRyZW4sIHJlYWN0STE4bmV4dE9wdGlvbnMpO1xuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0cyB8fCBub2RlQXNTdHJpbmcgfHwgcmVhY3RJMThuZXh0T3B0aW9ucy50cmFuc0VtcHR5Tm9kZVZhbHVlIHx8IGkxOG5LZXk7XG4gIGNvbnN0IHtcbiAgICBoYXNoVHJhbnNLZXlcbiAgfSA9IHJlYWN0STE4bmV4dE9wdGlvbnM7XG4gIGNvbnN0IGtleSA9IGkxOG5LZXkgfHwgKGhhc2hUcmFuc0tleSA/IGhhc2hUcmFuc0tleShub2RlQXNTdHJpbmcgfHwgZGVmYXVsdFZhbHVlKSA6IG5vZGVBc1N0cmluZyB8fCBkZWZhdWx0VmFsdWUpO1xuICBpZiAoaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIGkxOG4ub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMgJiYgT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPiAwID8ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgLi4uaTE4bi5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlc1xuICAgIH0gOiB7XG4gICAgICAuLi5pMThuLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzXG4gICAgfTtcbiAgfVxuICBjb25zdCBpbnRlcnBvbGF0aW9uT3ZlcnJpZGUgPSB2YWx1ZXMgfHwgY291bnQgIT09IHVuZGVmaW5lZCB8fCAhY2hpbGRyZW4gPyB0T3B0aW9ucy5pbnRlcnBvbGF0aW9uIDoge1xuICAgIGludGVycG9sYXRpb246IHtcbiAgICAgIC4uLnRPcHRpb25zLmludGVycG9sYXRpb24sXG4gICAgICBwcmVmaXg6ICcjJD8nLFxuICAgICAgc3VmZml4OiAnPyQjJ1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY29tYmluZWRUT3B0cyA9IHtcbiAgICAuLi50T3B0aW9ucyxcbiAgICBjb250ZXh0OiBjb250ZXh0IHx8IHRPcHRpb25zLmNvbnRleHQsXG4gICAgY291bnQsXG4gICAgLi4udmFsdWVzLFxuICAgIC4uLmludGVycG9sYXRpb25PdmVycmlkZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgbnM6IG5hbWVzcGFjZXNcbiAgfTtcbiAgY29uc3QgdHJhbnNsYXRpb24gPSBrZXkgPyB0KGtleSwgY29tYmluZWRUT3B0cykgOiBkZWZhdWx0VmFsdWU7XG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaChjID0+IHtcbiAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnRzW2NdO1xuICAgICAgaWYgKHR5cGVvZiBjb21wLnR5cGUgPT09ICdmdW5jdGlvbicgfHwgIWNvbXAucHJvcHMgfHwgIWNvbXAucHJvcHMuY2hpbGRyZW4gfHwgdHJhbnNsYXRpb24uaW5kZXhPZihgJHtjfS8+YCkgPCAwICYmIHRyYW5zbGF0aW9uLmluZGV4T2YoYCR7Y30gLz5gKSA8IDApIHJldHVybjtcbiAgICAgIGZ1bmN0aW9uIENvbXBvbmVudGl6ZWQoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjb21wKTtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudHNbY10gPSBjcmVhdGVFbGVtZW50KENvbXBvbmVudGl6ZWQpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJOb2Rlcyhjb21wb25lbnRzIHx8IGNoaWxkcmVuLCB0cmFuc2xhdGlvbiwgaTE4biwgcmVhY3RJMThuZXh0T3B0aW9ucywgY29tYmluZWRUT3B0cywgc2hvdWxkVW5lc2NhcGUpO1xuICBjb25zdCB1c2VBc1BhcmVudCA9IHBhcmVudCAhPT0gdW5kZWZpbmVkID8gcGFyZW50IDogcmVhY3RJMThuZXh0T3B0aW9ucy5kZWZhdWx0VHJhbnNQYXJlbnQ7XG4gIHJldHVybiB1c2VBc1BhcmVudCA/IGNyZWF0ZUVsZW1lbnQodXNlQXNQYXJlbnQsIGFkZGl0aW9uYWxQcm9wcywgY29udGVudCkgOiBjb250ZW50O1xufSIsImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi91c2VUcmFuc2xhdGlvbi5qcyc7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRpb24ocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIG5zLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLm9wdGlvbnNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbdCwgaTE4biwgcmVhZHldID0gdXNlVHJhbnNsYXRpb24obnMsIG9wdGlvbnMpO1xuICByZXR1cm4gY2hpbGRyZW4odCwge1xuICAgIGkxOG4sXG4gICAgbG5nOiBpMThuLmxhbmd1YWdlXG4gIH0sIHJlYWR5KTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdHMsIHNldERlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5pbXBvcnQgeyBnZXRJMThuLCBzZXRJMThuIH0gZnJvbSAnLi9pMThuSW5zdGFuY2UuanMnO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJy4vaW5pdFJlYWN0STE4bmV4dC5qcyc7XG5leHBvcnQgeyBnZXREZWZhdWx0cywgc2V0RGVmYXVsdHMsIGdldEkxOG4sIHNldEkxOG4sIGluaXRSZWFjdEkxOG5leHQgfTtcbmV4cG9ydCBjb25zdCBJMThuQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBjbGFzcyBSZXBvcnROYW1lc3BhY2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51c2VkTmFtZXNwYWNlcyA9IHt9O1xuICB9XG4gIGFkZFVzZWROYW1lc3BhY2VzKG5hbWVzcGFjZXMpIHtcbiAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgaWYgKCF0aGlzLnVzZWROYW1lc3BhY2VzW25zXSkgdGhpcy51c2VkTmFtZXNwYWNlc1tuc10gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIGdldFVzZWROYW1lc3BhY2VzID0gKCkgPT4gT2JqZWN0LmtleXModGhpcy51c2VkTmFtZXNwYWNlcyk7XG59XG5leHBvcnQgY29uc3QgY29tcG9zZUluaXRpYWxQcm9wcyA9IEZvckNvbXBvbmVudCA9PiBhc3luYyBjdHggPT4ge1xuICBjb25zdCBjb21wb25lbnRzSW5pdGlhbFByb3BzID0gRm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xuICBjb25zdCBpMThuSW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzKCk7XG4gIHJldHVybiB7XG4gICAgLi4uY29tcG9uZW50c0luaXRpYWxQcm9wcyxcbiAgICAuLi5pMThuSW5pdGlhbFByb3BzXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgaTE4biA9IGdldEkxOG4oKTtcbiAgY29uc3QgbmFtZXNwYWNlcyA9IGkxOG4ucmVwb3J0TmFtZXNwYWNlcyA/IGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5nZXRVc2VkTmFtZXNwYWNlcygpIDogW107XG4gIGNvbnN0IHJldCA9IHt9O1xuICBjb25zdCBpbml0aWFsSTE4blN0b3JlID0ge307XG4gIGkxOG4ubGFuZ3VhZ2VzLmZvckVhY2gobCA9PiB7XG4gICAgaW5pdGlhbEkxOG5TdG9yZVtsXSA9IHt9O1xuICAgIG5hbWVzcGFjZXMuZm9yRWFjaChucyA9PiB7XG4gICAgICBpbml0aWFsSTE4blN0b3JlW2xdW25zXSA9IGkxOG4uZ2V0UmVzb3VyY2VCdW5kbGUobCwgbnMpIHx8IHt9O1xuICAgIH0pO1xuICB9KTtcbiAgcmV0LmluaXRpYWxJMThuU3RvcmUgPSBpbml0aWFsSTE4blN0b3JlO1xuICByZXQuaW5pdGlhbExhbmd1YWdlID0gaTE4bi5sYW5ndWFnZTtcbiAgcmV0dXJuIHJldDtcbn07IiwiaW1wb3J0IHsgdW5lc2NhcGUgfSBmcm9tICcuL3VuZXNjYXBlLmpzJztcbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgYmluZEkxOG46ICdsYW5ndWFnZUNoYW5nZWQnLFxuICBiaW5kSTE4blN0b3JlOiAnJyxcbiAgdHJhbnNFbXB0eU5vZGVWYWx1ZTogJycsXG4gIHRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzOiB0cnVlLFxuICB0cmFuc1dyYXBUZXh0Tm9kZXM6ICcnLFxuICB0cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvcjogWydicicsICdzdHJvbmcnLCAnaScsICdwJ10sXG4gIHVzZVN1c3BlbnNlOiB0cnVlLFxuICB1bmVzY2FwZVxufTtcbmV4cG9ydCBjb25zdCBzZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAuLi5vcHRpb25zXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRzID0gKCkgPT4gZGVmYXVsdE9wdGlvbnM7IiwibGV0IGkxOG5JbnN0YW5jZTtcbmV4cG9ydCBjb25zdCBzZXRJMThuID0gaW5zdGFuY2UgPT4ge1xuICBpMThuSW5zdGFuY2UgPSBpbnN0YW5jZTtcbn07XG5leHBvcnQgY29uc3QgZ2V0STE4biA9ICgpID0+IGkxOG5JbnN0YW5jZTsiLCJleHBvcnQgeyBUcmFucyB9IGZyb20gJy4vVHJhbnMuanMnO1xuZXhwb3J0IHsgVHJhbnMgYXMgVHJhbnNXaXRob3V0Q29udGV4dCB9IGZyb20gJy4vVHJhbnNXaXRob3V0Q29udGV4dC5qcyc7XG5leHBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4vdXNlVHJhbnNsYXRpb24uanMnO1xuZXhwb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi93aXRoVHJhbnNsYXRpb24uanMnO1xuZXhwb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuL1RyYW5zbGF0aW9uLmpzJztcbmV4cG9ydCB7IEkxOG5leHRQcm92aWRlciB9IGZyb20gJy4vSTE4bmV4dFByb3ZpZGVyLmpzJztcbmV4cG9ydCB7IHdpdGhTU1IgfSBmcm9tICcuL3dpdGhTU1IuanMnO1xuZXhwb3J0IHsgdXNlU1NSIH0gZnJvbSAnLi91c2VTU1IuanMnO1xuZXhwb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJy4vaW5pdFJlYWN0STE4bmV4dC5qcyc7XG5leHBvcnQgeyBzZXREZWZhdWx0cywgZ2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmV4cG9ydCB7IHNldEkxOG4sIGdldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5leHBvcnQgeyBJMThuQ29udGV4dCwgY29tcG9zZUluaXRpYWxQcm9wcywgZ2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmV4cG9ydCBjb25zdCBkYXRlID0gKCkgPT4gJyc7XG5leHBvcnQgY29uc3QgdGltZSA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IG51bWJlciA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdCA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IHBsdXJhbCA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdE9yZGluYWwgPSAoKSA9PiAnJzsiLCJpbXBvcnQgeyBzZXREZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xuaW1wb3J0IHsgc2V0STE4biB9IGZyb20gJy4vaTE4bkluc3RhbmNlLmpzJztcbmV4cG9ydCBjb25zdCBpbml0UmVhY3RJMThuZXh0ID0ge1xuICB0eXBlOiAnM3JkUGFydHknLFxuICBpbml0KGluc3RhbmNlKSB7XG4gICAgc2V0RGVmYXVsdHMoaW5zdGFuY2Uub3B0aW9ucy5yZWFjdCk7XG4gICAgc2V0STE4bihpbnN0YW5jZSk7XG4gIH1cbn07IiwiY29uc3QgbWF0Y2hIdG1sRW50aXR5ID0gLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzR8bmJzcHwjMTYwfGNvcHl8IzE2OXxyZWd8IzE3NHxoZWxsaXB8IzgyMzB8I3gyRnwjNDcpOy9nO1xuY29uc3QgaHRtbEVudGl0aWVzID0ge1xuICAnJmFtcDsnOiAnJicsXG4gICcmIzM4Oyc6ICcmJyxcbiAgJyZsdDsnOiAnPCcsXG4gICcmIzYwOyc6ICc8JyxcbiAgJyZndDsnOiAnPicsXG4gICcmIzYyOyc6ICc+JyxcbiAgJyZhcG9zOyc6IFwiJ1wiLFxuICAnJiMzOTsnOiBcIidcIixcbiAgJyZxdW90Oyc6ICdcIicsXG4gICcmIzM0Oyc6ICdcIicsXG4gICcmbmJzcDsnOiAnICcsXG4gICcmIzE2MDsnOiAnICcsXG4gICcmY29weTsnOiAnwqknLFxuICAnJiMxNjk7JzogJ8KpJyxcbiAgJyZyZWc7JzogJ8KuJyxcbiAgJyYjMTc0Oyc6ICfCricsXG4gICcmaGVsbGlwOyc6ICfigKYnLFxuICAnJiM4MjMwOyc6ICfigKYnLFxuICAnJiN4MkY7JzogJy8nLFxuICAnJiM0NzsnOiAnLydcbn07XG5jb25zdCB1bmVzY2FwZUh0bWxFbnRpdHkgPSBtID0+IGh0bWxFbnRpdGllc1ttXTtcbmV4cG9ydCBjb25zdCB1bmVzY2FwZSA9IHRleHQgPT4gdGV4dC5yZXBsYWNlKG1hdGNoSHRtbEVudGl0eSwgdW5lc2NhcGVIdG1sRW50aXR5KTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0STE4biwgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuZXhwb3J0IGNvbnN0IHVzZVNTUiA9IGZ1bmN0aW9uIChpbml0aWFsSTE4blN0b3JlLCBpbml0aWFsTGFuZ3VhZ2UpIHtcbiAgbGV0IHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tUHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgaTE4bjogaTE4bkZyb21Db250ZXh0XG4gIH0gPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8IGdldEkxOG4oKTtcbiAgaWYgKGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuaXNDbG9uZSkgcmV0dXJuO1xuICBpZiAoaW5pdGlhbEkxOG5TdG9yZSAmJiAhaTE4bi5pbml0aWFsaXplZFN0b3JlT25jZSkge1xuICAgIGkxOG4uc2VydmljZXMucmVzb3VyY2VTdG9yZS5kYXRhID0gaW5pdGlhbEkxOG5TdG9yZTtcbiAgICBpMThuLm9wdGlvbnMubnMgPSBPYmplY3QudmFsdWVzKGluaXRpYWxJMThuU3RvcmUpLnJlZHVjZSgobWVtLCBsbmdSZXNvdXJjZXMpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGxuZ1Jlc291cmNlcykuZm9yRWFjaChucyA9PiB7XG4gICAgICAgIGlmIChtZW0uaW5kZXhPZihucykgPCAwKSBtZW0ucHVzaChucyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZW07XG4gICAgfSwgaTE4bi5vcHRpb25zLm5zKTtcbiAgICBpMThuLmluaXRpYWxpemVkU3RvcmVPbmNlID0gdHJ1ZTtcbiAgICBpMThuLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGlmIChpbml0aWFsTGFuZ3VhZ2UgJiYgIWkxOG4uaW5pdGlhbGl6ZWRMYW5ndWFnZU9uY2UpIHtcbiAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGluaXRpYWxMYW5ndWFnZSk7XG4gICAgaTE4bi5pbml0aWFsaXplZExhbmd1YWdlT25jZSA9IHRydWU7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEkxOG4sIGdldERlZmF1bHRzLCBSZXBvcnROYW1lc3BhY2VzLCBJMThuQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5pbXBvcnQgeyB3YXJuT25jZSwgbG9hZE5hbWVzcGFjZXMsIGxvYWRMYW5ndWFnZXMsIGhhc0xvYWRlZE5hbWVzcGFjZSwgaXNTdHJpbmcsIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscy5qcyc7XG5jb25zdCB1c2VQcmV2aW91cyA9ICh2YWx1ZSwgaWdub3JlKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gaWdub3JlID8gcmVmLmN1cnJlbnQgOiB2YWx1ZTtcbiAgfSwgW3ZhbHVlLCBpZ25vcmVdKTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufTtcbmNvbnN0IGFsd2F5c05ld1QgPSAoaTE4biwgbGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4KSA9PiBpMThuLmdldEZpeGVkVChsYW5ndWFnZSwgbmFtZXNwYWNlLCBrZXlQcmVmaXgpO1xuY29uc3QgdXNlTWVtb2l6ZWRUID0gKGkxOG4sIGxhbmd1YWdlLCBuYW1lc3BhY2UsIGtleVByZWZpeCkgPT4gdXNlQ2FsbGJhY2soYWx3YXlzTmV3VChpMThuLCBsYW5ndWFnZSwgbmFtZXNwYWNlLCBrZXlQcmVmaXgpLCBbaTE4biwgbGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4XSk7XG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobnMpIHtcbiAgbGV0IHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tUHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgaTE4bjogaTE4bkZyb21Db250ZXh0LFxuICAgIGRlZmF1bHROUzogZGVmYXVsdE5TRnJvbUNvbnRleHRcbiAgfSA9IHVzZUNvbnRleHQoSTE4bkNvbnRleHQpIHx8IHt9O1xuICBjb25zdCBpMThuID0gaTE4bkZyb21Qcm9wcyB8fCBpMThuRnJvbUNvbnRleHQgfHwgZ2V0STE4bigpO1xuICBpZiAoaTE4biAmJiAhaTE4bi5yZXBvcnROYW1lc3BhY2VzKSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPSBuZXcgUmVwb3J0TmFtZXNwYWNlcygpO1xuICBpZiAoIWkxOG4pIHtcbiAgICB3YXJuT25jZSgnWW91IHdpbGwgbmVlZCB0byBwYXNzIGluIGFuIGkxOG5leHQgaW5zdGFuY2UgYnkgdXNpbmcgaW5pdFJlYWN0STE4bmV4dCcpO1xuICAgIGNvbnN0IG5vdFJlYWR5VCA9IChrLCBvcHRzT3JEZWZhdWx0VmFsdWUpID0+IHtcbiAgICAgIGlmIChpc1N0cmluZyhvcHRzT3JEZWZhdWx0VmFsdWUpKSByZXR1cm4gb3B0c09yRGVmYXVsdFZhbHVlO1xuICAgICAgaWYgKGlzT2JqZWN0KG9wdHNPckRlZmF1bHRWYWx1ZSkgJiYgaXNTdHJpbmcob3B0c09yRGVmYXVsdFZhbHVlLmRlZmF1bHRWYWx1ZSkpIHJldHVybiBvcHRzT3JEZWZhdWx0VmFsdWUuZGVmYXVsdFZhbHVlO1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaykgPyBrW2subGVuZ3RoIC0gMV0gOiBrO1xuICAgIH07XG4gICAgY29uc3QgcmV0Tm90UmVhZHkgPSBbbm90UmVhZHlULCB7fSwgZmFsc2VdO1xuICAgIHJldE5vdFJlYWR5LnQgPSBub3RSZWFkeVQ7XG4gICAgcmV0Tm90UmVhZHkuaTE4biA9IHt9O1xuICAgIHJldE5vdFJlYWR5LnJlYWR5ID0gZmFsc2U7XG4gICAgcmV0dXJuIHJldE5vdFJlYWR5O1xuICB9XG4gIGlmIChpMThuLm9wdGlvbnMucmVhY3QgJiYgaTE4bi5vcHRpb25zLnJlYWN0LndhaXQgIT09IHVuZGVmaW5lZCkgd2Fybk9uY2UoJ0l0IHNlZW1zIHlvdSBhcmUgc3RpbGwgdXNpbmcgdGhlIG9sZCB3YWl0IG9wdGlvbiwgeW91IG1heSBtaWdyYXRlIHRvIHRoZSBuZXcgdXNlU3VzcGVuc2UgYmVoYXZpb3VyLicpO1xuICBjb25zdCBpMThuT3B0aW9ucyA9IHtcbiAgICAuLi5nZXREZWZhdWx0cygpLFxuICAgIC4uLmkxOG4ub3B0aW9ucy5yZWFjdCxcbiAgICAuLi5wcm9wc1xuICB9O1xuICBjb25zdCB7XG4gICAgdXNlU3VzcGVuc2UsXG4gICAga2V5UHJlZml4XG4gIH0gPSBpMThuT3B0aW9ucztcbiAgbGV0IG5hbWVzcGFjZXMgPSBucyB8fCBkZWZhdWx0TlNGcm9tQ29udGV4dCB8fCBpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmRlZmF1bHROUztcbiAgbmFtZXNwYWNlcyA9IGlzU3RyaW5nKG5hbWVzcGFjZXMpID8gW25hbWVzcGFjZXNdIDogbmFtZXNwYWNlcyB8fCBbJ3RyYW5zbGF0aW9uJ107XG4gIGlmIChpMThuLnJlcG9ydE5hbWVzcGFjZXMuYWRkVXNlZE5hbWVzcGFjZXMpIGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5hZGRVc2VkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKTtcbiAgY29uc3QgcmVhZHkgPSAoaTE4bi5pc0luaXRpYWxpemVkIHx8IGkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpICYmIG5hbWVzcGFjZXMuZXZlcnkobiA9PiBoYXNMb2FkZWROYW1lc3BhY2UobiwgaTE4biwgaTE4bk9wdGlvbnMpKTtcbiAgY29uc3QgbWVtb0dldFQgPSB1c2VNZW1vaXplZFQoaTE4biwgcHJvcHMubG5nIHx8IG51bGwsIGkxOG5PcHRpb25zLm5zTW9kZSA9PT0gJ2ZhbGxiYWNrJyA/IG5hbWVzcGFjZXMgOiBuYW1lc3BhY2VzWzBdLCBrZXlQcmVmaXgpO1xuICBjb25zdCBnZXRUID0gKCkgPT4gbWVtb0dldFQ7XG4gIGNvbnN0IGdldE5ld1QgPSAoKSA9PiBhbHdheXNOZXdUKGkxOG4sIHByb3BzLmxuZyB8fCBudWxsLCBpMThuT3B0aW9ucy5uc01vZGUgPT09ICdmYWxsYmFjaycgPyBuYW1lc3BhY2VzIDogbmFtZXNwYWNlc1swXSwga2V5UHJlZml4KTtcbiAgY29uc3QgW3QsIHNldFRdID0gdXNlU3RhdGUoZ2V0VCk7XG4gIGxldCBqb2luZWROUyA9IG5hbWVzcGFjZXMuam9pbigpO1xuICBpZiAocHJvcHMubG5nKSBqb2luZWROUyA9IGAke3Byb3BzLmxuZ30ke2pvaW5lZE5TfWA7XG4gIGNvbnN0IHByZXZpb3VzSm9pbmVkTlMgPSB1c2VQcmV2aW91cyhqb2luZWROUyk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBiaW5kSTE4bixcbiAgICAgIGJpbmRJMThuU3RvcmVcbiAgICB9ID0gaTE4bk9wdGlvbnM7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIGlmICghcmVhZHkgJiYgIXVzZVN1c3BlbnNlKSB7XG4gICAgICBpZiAocHJvcHMubG5nKSB7XG4gICAgICAgIGxvYWRMYW5ndWFnZXMoaTE4biwgcHJvcHMubG5nLCBuYW1lc3BhY2VzLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSBzZXRUKGdldE5ld1QpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWROYW1lc3BhY2VzKGkxOG4sIG5hbWVzcGFjZXMsICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHNldFQoZ2V0TmV3VCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVhZHkgJiYgcHJldmlvdXNKb2luZWROUyAmJiBwcmV2aW91c0pvaW5lZE5TICE9PSBqb2luZWROUyAmJiBpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgc2V0VChnZXROZXdUKTtcbiAgICB9XG4gICAgY29uc3QgYm91bmRSZXNldCA9ICgpID0+IHtcbiAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXROZXdUKTtcbiAgICB9O1xuICAgIGlmIChiaW5kSTE4biAmJiBpMThuKSBpMThuLm9uKGJpbmRJMThuLCBib3VuZFJlc2V0KTtcbiAgICBpZiAoYmluZEkxOG5TdG9yZSAmJiBpMThuKSBpMThuLnN0b3JlLm9uKGJpbmRJMThuU3RvcmUsIGJvdW5kUmVzZXQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgaWYgKGJpbmRJMThuICYmIGkxOG4pIGJpbmRJMThuLnNwbGl0KCcgJykuZm9yRWFjaChlID0+IGkxOG4ub2ZmKGUsIGJvdW5kUmVzZXQpKTtcbiAgICAgIGlmIChiaW5kSTE4blN0b3JlICYmIGkxOG4pIGJpbmRJMThuU3RvcmUuc3BsaXQoJyAnKS5mb3JFYWNoKGUgPT4gaTE4bi5zdG9yZS5vZmYoZSwgYm91bmRSZXNldCkpO1xuICAgIH07XG4gIH0sIFtpMThuLCBqb2luZWROU10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc01vdW50ZWQuY3VycmVudCAmJiByZWFkeSkge1xuICAgICAgc2V0VChnZXRUKTtcbiAgICB9XG4gIH0sIFtpMThuLCBrZXlQcmVmaXgsIHJlYWR5XSk7XG4gIGNvbnN0IHJldCA9IFt0LCBpMThuLCByZWFkeV07XG4gIHJldC50ID0gdDtcbiAgcmV0LmkxOG4gPSBpMThuO1xuICByZXQucmVhZHkgPSByZWFkeTtcbiAgaWYgKHJlYWR5KSByZXR1cm4gcmV0O1xuICBpZiAoIXJlYWR5ICYmICF1c2VTdXNwZW5zZSkgcmV0dXJuIHJldDtcbiAgdGhyb3cgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKHByb3BzLmxuZykge1xuICAgICAgbG9hZExhbmd1YWdlcyhpMThuLCBwcm9wcy5sbmcsIG5hbWVzcGFjZXMsICgpID0+IHJlc29sdmUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWROYW1lc3BhY2VzKGkxOG4sIG5hbWVzcGFjZXMsICgpID0+IHJlc29sdmUoKSk7XG4gICAgfVxuICB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHdhcm4oKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGFyZ3NbMF0pKSBhcmdzWzBdID0gYHJlYWN0LWkxOG5leHQ6OiAke2FyZ3NbMF19YDtcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cbn1cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG4gIGlmIChpc1N0cmluZyhhcmdzWzBdKSAmJiBhbHJlYWR5V2FybmVkW2FyZ3NbMF1dKSByZXR1cm47XG4gIGlmIChpc1N0cmluZyhhcmdzWzBdKSkgYWxyZWFkeVdhcm5lZFthcmdzWzBdXSA9IG5ldyBEYXRlKCk7XG4gIHdhcm4oLi4uYXJncyk7XG59XG5jb25zdCBsb2FkZWRDbGIgPSAoaTE4biwgY2IpID0+ICgpID0+IHtcbiAgaWYgKGkxOG4uaXNJbml0aWFsaXplZCkge1xuICAgIGNiKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaTE4bi5vZmYoJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQpO1xuICAgICAgfSwgMCk7XG4gICAgICBjYigpO1xuICAgIH07XG4gICAgaTE4bi5vbignaW5pdGlhbGl6ZWQnLCBpbml0aWFsaXplZCk7XG4gIH1cbn07XG5leHBvcnQgY29uc3QgbG9hZE5hbWVzcGFjZXMgPSAoaTE4biwgbnMsIGNiKSA9PiB7XG4gIGkxOG4ubG9hZE5hbWVzcGFjZXMobnMsIGxvYWRlZENsYihpMThuLCBjYikpO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkTGFuZ3VhZ2VzID0gKGkxOG4sIGxuZywgbnMsIGNiKSA9PiB7XG4gIGlmIChpc1N0cmluZyhucykpIG5zID0gW25zXTtcbiAgbnMuZm9yRWFjaChuID0+IHtcbiAgICBpZiAoaTE4bi5vcHRpb25zLm5zLmluZGV4T2YobikgPCAwKSBpMThuLm9wdGlvbnMubnMucHVzaChuKTtcbiAgfSk7XG4gIGkxOG4ubG9hZExhbmd1YWdlcyhsbmcsIGxvYWRlZENsYihpMThuLCBjYikpO1xufTtcbmNvbnN0IG9sZEkxOG5leHRIYXNMb2FkZWROYW1lc3BhY2UgPSBmdW5jdGlvbiAobnMsIGkxOG4pIHtcbiAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICBjb25zdCBsbmcgPSBpMThuLmxhbmd1YWdlc1swXTtcbiAgY29uc3QgZmFsbGJhY2tMbmcgPSBpMThuLm9wdGlvbnMgPyBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcgOiBmYWxzZTtcbiAgY29uc3QgbGFzdExuZyA9IGkxOG4ubGFuZ3VhZ2VzW2kxOG4ubGFuZ3VhZ2VzLmxlbmd0aCAtIDFdO1xuICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgbG9hZE5vdFBlbmRpbmcgPSAobCwgbikgPT4ge1xuICAgIGNvbnN0IGxvYWRTdGF0ZSA9IGkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5zdGF0ZVtgJHtsfXwke259YF07XG4gICAgcmV0dXJuIGxvYWRTdGF0ZSA9PT0gLTEgfHwgbG9hZFN0YXRlID09PSAyO1xuICB9O1xuICBpZiAob3B0aW9ucy5iaW5kSTE4biAmJiBvcHRpb25zLmJpbmRJMThuLmluZGV4T2YoJ2xhbmd1YWdlQ2hhbmdpbmcnKSA+IC0xICYmIGkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kICYmIGkxOG4uaXNMYW5ndWFnZUNoYW5naW5nVG8gJiYgIWxvYWROb3RQZW5kaW5nKGkxOG4uaXNMYW5ndWFnZUNoYW5naW5nVG8sIG5zKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoaTE4bi5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkgcmV0dXJuIHRydWU7XG4gIGlmICghaTE4bi5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgfHwgaTE4bi5vcHRpb25zLnJlc291cmNlcyAmJiAhaTE4bi5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKGxvYWROb3RQZW5kaW5nKGxuZywgbnMpICYmICghZmFsbGJhY2tMbmcgfHwgbG9hZE5vdFBlbmRpbmcobGFzdExuZywgbnMpKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaGFzTG9hZGVkTmFtZXNwYWNlID0gZnVuY3Rpb24gKG5zLCBpMThuKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgaWYgKCFpMThuLmxhbmd1YWdlcyB8fCAhaTE4bi5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgd2Fybk9uY2UoJ2kxOG4ubGFuZ3VhZ2VzIHdlcmUgdW5kZWZpbmVkIG9yIGVtcHR5JywgaTE4bi5sYW5ndWFnZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGlzTmV3ZXJJMThuZXh0ID0gaTE4bi5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgIT09IHVuZGVmaW5lZDtcbiAgaWYgKCFpc05ld2VySTE4bmV4dCkge1xuICAgIHJldHVybiBvbGRJMThuZXh0SGFzTG9hZGVkTmFtZXNwYWNlKG5zLCBpMThuLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gaTE4bi5oYXNMb2FkZWROYW1lc3BhY2UobnMsIHtcbiAgICBsbmc6IG9wdGlvbnMubG5nLFxuICAgIHByZWNoZWNrOiAoaTE4bkluc3RhbmNlLCBsb2FkTm90UGVuZGluZykgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuYmluZEkxOG4gJiYgb3B0aW9ucy5iaW5kSTE4bi5pbmRleE9mKCdsYW5ndWFnZUNoYW5naW5nJykgPiAtMSAmJiBpMThuSW5zdGFuY2Uuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kICYmIGkxOG5JbnN0YW5jZS5pc0xhbmd1YWdlQ2hhbmdpbmdUbyAmJiAhbG9hZE5vdFBlbmRpbmcoaTE4bkluc3RhbmNlLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvLCBucykpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXREaXNwbGF5TmFtZSA9IENvbXBvbmVudCA9PiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgKGlzU3RyaW5nKENvbXBvbmVudCkgJiYgQ29tcG9uZW50Lmxlbmd0aCA+IDAgPyBDb21wb25lbnQgOiAnVW5rbm93bicpO1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU1NSIH0gZnJvbSAnLi91c2VTU1IuanMnO1xuaW1wb3J0IHsgY29tcG9zZUluaXRpYWxQcm9wcyB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IGNvbnN0IHdpdGhTU1IgPSAoKSA9PiBmdW5jdGlvbiBFeHRlbmQoV3JhcHBlZENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBJMThuZXh0V2l0aFNTUihfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIGluaXRpYWxJMThuU3RvcmUsXG4gICAgICBpbml0aWFsTGFuZ3VhZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IF9yZWY7XG4gICAgdXNlU1NSKGluaXRpYWxJMThuU3RvcmUsIGluaXRpYWxMYW5ndWFnZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwge1xuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICB9XG4gIEkxOG5leHRXaXRoU1NSLmdldEluaXRpYWxQcm9wcyA9IGNvbXBvc2VJbml0aWFsUHJvcHMoV3JhcHBlZENvbXBvbmVudCk7XG4gIEkxOG5leHRXaXRoU1NSLmRpc3BsYXlOYW1lID0gYHdpdGhJMThuZXh0U1NSKCR7Z2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCl9KWA7XG4gIEkxOG5leHRXaXRoU1NSLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICByZXR1cm4gSTE4bmV4dFdpdGhTU1I7XG59OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgYXMgZm9yd2FyZFJlZlJlYWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuL3VzZVRyYW5zbGF0aW9uLmpzJztcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lIH0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgY29uc3Qgd2l0aFRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKG5zKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIEV4dGVuZChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gSTE4bmV4dFdpdGhUcmFuc2xhdGlvbihfcmVmKSB7XG4gICAgICBsZXQge1xuICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0gPSBfcmVmO1xuICAgICAgY29uc3QgW3QsIGkxOG4sIHJlYWR5XSA9IHVzZVRyYW5zbGF0aW9uKG5zLCB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIGtleVByZWZpeDogb3B0aW9ucy5rZXlQcmVmaXhcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcGFzc0Rvd25Qcm9wcyA9IHtcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgdCxcbiAgICAgICAgaTE4bixcbiAgICAgICAgdFJlYWR5OiByZWFkeVxuICAgICAgfTtcbiAgICAgIGlmIChvcHRpb25zLndpdGhSZWYgJiYgZm9yd2FyZGVkUmVmKSB7XG4gICAgICAgIHBhc3NEb3duUHJvcHMucmVmID0gZm9yd2FyZGVkUmVmO1xuICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLmZvcndhcmRlZFJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHBhc3NEb3duUHJvcHMpO1xuICAgIH1cbiAgICBJMThuZXh0V2l0aFRyYW5zbGF0aW9uLmRpc3BsYXlOYW1lID0gYHdpdGhJMThuZXh0VHJhbnNsYXRpb24oJHtnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KX0pYDtcbiAgICBJMThuZXh0V2l0aFRyYW5zbGF0aW9uLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIGNvbnN0IGZvcndhcmRSZWYgPSAocHJvcHMsIHJlZikgPT4gY3JlYXRlRWxlbWVudChJMThuZXh0V2l0aFRyYW5zbGF0aW9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICB9KSk7XG4gICAgcmV0dXJuIG9wdGlvbnMud2l0aFJlZiA/IGZvcndhcmRSZWZSZWFjdChmb3J3YXJkUmVmKSA6IEkxOG5leHRXaXRoVHJhbnNsYXRpb247XG4gIH07XG59OyIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIiVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzXCIsXG4gICAgICAgICAgICBpbmZvWzBdLFxuICAgICAgICAgICAgaW5mb1sxXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgIGlmIChudWxsID09PSBtYXliZUl0ZXJhYmxlIHx8IFwib2JqZWN0XCIgIT09IHR5cGVvZiBtYXliZUl0ZXJhYmxlKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIG1heWJlSXRlcmFibGUgPVxuICAgICAgICAoTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSkgfHxcbiAgICAgICAgbWF5YmVJdGVyYWJsZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlb2YgbWF5YmVJdGVyYWJsZSA/IG1heWJlSXRlcmFibGUgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICAgICAgcHVibGljSW5zdGFuY2UgPVxuICAgICAgICAoKHB1YmxpY0luc3RhbmNlID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3IpICYmXG4gICAgICAgICAgKHB1YmxpY0luc3RhbmNlLmRpc3BsYXlOYW1lIHx8IHB1YmxpY0luc3RhbmNlLm5hbWUpKSB8fFxuICAgICAgICBcIlJlYWN0Q2xhc3NcIjtcbiAgICAgIHZhciB3YXJuaW5nS2V5ID0gcHVibGljSW5zdGFuY2UgKyBcIi5cIiArIGNhbGxlck5hbWU7XG4gICAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gfHxcbiAgICAgICAgKGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiBJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LlwiLFxuICAgICAgICAgIGNhbGxlck5hbWUsXG4gICAgICAgICAgcHVibGljSW5zdGFuY2VcbiAgICAgICAgKSxcbiAgICAgICAgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9ICEwKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuICAgIGZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICExO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMDtcbiAgICAgIH1cbiAgICAgIGlmIChKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gY29uc29sZTtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfdGVtcF9jb25zdCA9IEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5lcnJvcjtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCRqc2NvbXAkMCA9XG4gICAgICAgICAgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFN5bWJvbCAmJlxuICAgICAgICAgICAgU3ltYm9sLnRvU3RyaW5nVGFnICYmXG4gICAgICAgICAgICB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddKSB8fFxuICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHxcbiAgICAgICAgICBcIk9iamVjdFwiO1xuICAgICAgICBKU0NvbXBpbGVyX3RlbXBfY29uc3QuY2FsbChcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQsXG4gICAgICAgICAgXCJUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSB1c2luZyBpdCBoZXJlLlwiLFxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCRqc2NvbXAkMFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgICAgIGlmIChudWxsID09IHR5cGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHJldHVybiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlKSByZXR1cm4gdHlwZTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiRnJhZ21lbnRcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlByb2ZpbGVyXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdHJpY3RNb2RlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZVwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJTdXNwZW5zZUxpc3RcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9BQ1RJVklUWV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIkFjdGl2aXR5XCI7XG4gICAgICB9XG4gICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgKFwibnVtYmVyXCIgPT09IHR5cGVvZiB0eXBlLnRhZyAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHR5cGUuJCR0eXBlb2YpXG4gICAgICAgICkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gXCJQb3J0YWxcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Qcm92aWRlclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OU1VNRVJfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5fY29udGV4dC5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Db25zdW1lclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHZhciBpbm5lclR5cGUgPSB0eXBlLnJlbmRlcjtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgdHlwZSB8fFxuICAgICAgICAgICAgICAoKHR5cGUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgXCJcIiksXG4gICAgICAgICAgICAgICh0eXBlID0gXCJcIiAhPT0gdHlwZSA/IFwiRm9yd2FyZFJlZihcIiArIHR5cGUgKyBcIilcIiA6IFwiRm9yd2FyZFJlZlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChpbm5lclR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGwpLFxuICAgICAgICAgICAgICBudWxsICE9PSBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA/IGlubmVyVHlwZVxuICAgICAgICAgICAgICAgIDogZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgXCJNZW1vXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICBpbm5lclR5cGUgPSB0eXBlLl9wYXlsb2FkO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuX2luaXQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUoaW5uZXJUeXBlKSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VGFza05hbWUodHlwZSkge1xuICAgICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHJldHVybiBcIjw+XCI7XG4gICAgICBpZiAoXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiB0eXBlICYmXG4gICAgICAgIG51bGwgIT09IHR5cGUgJiZcbiAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFXG4gICAgICApXG4gICAgICAgIHJldHVybiBcIjwuLi4+XCI7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBcIjxcIiArIG5hbWUgKyBcIj5cIiA6IFwiPC4uLj5cIjtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T3duZXIoKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkE7XG4gICAgICByZXR1cm4gbnVsbCA9PT0gZGlzcGF0Y2hlciA/IG51bGwgOiBkaXNwYXRjaGVyLmdldE93bmVyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFVua25vd25Pd25lcigpIHtcbiAgICAgIHJldHVybiBFcnJvcihcInJlYWN0LXN0YWNrLXRvcC1mcmFtZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwia2V5XCIpKSB7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgXCJrZXlcIikuZ2V0O1xuICAgICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykgcmV0dXJuICExO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gY29uZmlnLmtleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBmdW5jdGlvbiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkoKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duIHx8XG4gICAgICAgICAgKChzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9ICEwKSxcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCIlczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lIHZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgcHJvcC4gKGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvc3BlY2lhbC1wcm9wcylcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSAhMDtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgXCJrZXlcIiwge1xuICAgICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVsZW1lbnRSZWZHZXR0ZXJXaXRoRGVwcmVjYXRpb25XYXJuaW5nKCkge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodGhpcy50eXBlKTtcbiAgICAgIGRpZFdhcm5BYm91dEVsZW1lbnRSZWZbY29tcG9uZW50TmFtZV0gfHxcbiAgICAgICAgKChkaWRXYXJuQWJvdXRFbGVtZW50UmVmW2NvbXBvbmVudE5hbWVdID0gITApLFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQWNjZXNzaW5nIGVsZW1lbnQucmVmIHdhcyByZW1vdmVkIGluIFJlYWN0IDE5LiByZWYgaXMgbm93IGEgcmVndWxhciBwcm9wLiBJdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgSlNYIEVsZW1lbnQgdHlwZSBpbiBhIGZ1dHVyZSByZWxlYXNlLlwiXG4gICAgICAgICkpO1xuICAgICAgY29tcG9uZW50TmFtZSA9IHRoaXMucHJvcHMucmVmO1xuICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gY29tcG9uZW50TmFtZSA/IGNvbXBvbmVudE5hbWUgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFjdEVsZW1lbnQoXG4gICAgICB0eXBlLFxuICAgICAga2V5LFxuICAgICAgc2VsZixcbiAgICAgIHNvdXJjZSxcbiAgICAgIG93bmVyLFxuICAgICAgcHJvcHMsXG4gICAgICBkZWJ1Z1N0YWNrLFxuICAgICAgZGVidWdUYXNrXG4gICAgKSB7XG4gICAgICBzZWxmID0gcHJvcHMucmVmO1xuICAgICAgdHlwZSA9IHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgX293bmVyOiBvd25lclxuICAgICAgfTtcbiAgICAgIG51bGwgIT09ICh2b2lkIDAgIT09IHNlbGYgPyBzZWxmIDogbnVsbClcbiAgICAgICAgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJyZWZcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICBnZXQ6IGVsZW1lbnRSZWZHZXR0ZXJXaXRoRGVwcmVjYXRpb25XYXJuaW5nXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJyZWZcIiwgeyBlbnVtZXJhYmxlOiAhMSwgdmFsdWU6IG51bGwgfSk7XG4gICAgICB0eXBlLl9zdG9yZSA9IHt9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUuX3N0b3JlLCBcInZhbGlkYXRlZFwiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIl9kZWJ1Z0luZm9cIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdTdGFja1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBkZWJ1Z1N0YWNrXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIl9kZWJ1Z1Rhc2tcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZGVidWdUYXNrXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5mcmVlemUgJiYgKE9iamVjdC5mcmVlemUodHlwZS5wcm9wcyksIE9iamVjdC5mcmVlemUodHlwZSkpO1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgICAgIG5ld0tleSA9IFJlYWN0RWxlbWVudChcbiAgICAgICAgb2xkRWxlbWVudC50eXBlLFxuICAgICAgICBuZXdLZXksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBvbGRFbGVtZW50Ll9vd25lcixcbiAgICAgICAgb2xkRWxlbWVudC5wcm9wcyxcbiAgICAgICAgb2xkRWxlbWVudC5fZGVidWdTdGFjayxcbiAgICAgICAgb2xkRWxlbWVudC5fZGVidWdUYXNrXG4gICAgICApO1xuICAgICAgb2xkRWxlbWVudC5fc3RvcmUgJiZcbiAgICAgICAgKG5ld0tleS5fc3RvcmUudmFsaWRhdGVkID0gb2xkRWxlbWVudC5fc3RvcmUudmFsaWRhdGVkKTtcbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIG9iamVjdCAmJlxuICAgICAgICBudWxsICE9PSBvYmplY3QgJiZcbiAgICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbiAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgICAgIHZhciBlc2NhcGVyTG9va3VwID0geyBcIj1cIjogXCI9MFwiLCBcIjpcIjogXCI9MlwiIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcIiRcIiArXG4gICAgICAgIGtleS5yZXBsYWNlKC9bPTpdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBcIm9iamVjdFwiID09PSB0eXBlb2YgZWxlbWVudCAmJlxuICAgICAgICBudWxsICE9PSBlbGVtZW50ICYmXG4gICAgICAgIG51bGwgIT0gZWxlbWVudC5rZXlcbiAgICAgICAgPyAoY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSksIGVzY2FwZShcIlwiICsgZWxlbWVudC5rZXkpKVxuICAgICAgICA6IGluZGV4LnRvU3RyaW5nKDM2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9vcCQxKCkge31cbiAgICBmdW5jdGlvbiByZXNvbHZlVGhlbmFibGUodGhlbmFibGUpIHtcbiAgICAgIHN3aXRjaCAodGhlbmFibGUuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgXCJmdWxmaWxsZWRcIjpcbiAgICAgICAgICByZXR1cm4gdGhlbmFibGUudmFsdWU7XG4gICAgICAgIGNhc2UgXCJyZWplY3RlZFwiOlxuICAgICAgICAgIHRocm93IHRoZW5hYmxlLnJlYXNvbjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgICAgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0aGVuYWJsZS5zdGF0dXNcbiAgICAgICAgICAgICAgPyB0aGVuYWJsZS50aGVuKG5vb3AkMSwgbm9vcCQxKVxuICAgICAgICAgICAgICA6ICgodGhlbmFibGUuc3RhdHVzID0gXCJwZW5kaW5nXCIpLFxuICAgICAgICAgICAgICAgIHRoZW5hYmxlLnRoZW4oXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZnVsZmlsbGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nXCIgPT09IHRoZW5hYmxlLnN0YXR1cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICgodGhlbmFibGUuc3RhdHVzID0gXCJmdWxmaWxsZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgKHRoZW5hYmxlLnZhbHVlID0gZnVsZmlsbGVkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwZW5kaW5nXCIgPT09IHRoZW5hYmxlLnN0YXR1cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICgodGhlbmFibGUuc3RhdHVzID0gXCJyZWplY3RlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAodGhlbmFibGUucmVhc29uID0gZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgIHRoZW5hYmxlLnN0YXR1cylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNhc2UgXCJmdWxmaWxsZWRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIHRoZW5hYmxlLnZhbHVlO1xuICAgICAgICAgICAgY2FzZSBcInJlamVjdGVkXCI6XG4gICAgICAgICAgICAgIHRocm93IHRoZW5hYmxlLnJlYXNvbjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyB0aGVuYWJsZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG4gICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZSB8fCBcImJvb2xlYW5cIiA9PT0gdHlwZSkgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgdmFyIGludm9rZUNhbGxiYWNrID0gITE7XG4gICAgICBpZiAobnVsbCA9PT0gY2hpbGRyZW4pIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICBlbHNlXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSAhMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayA9IGNoaWxkcmVuLl9pbml0KSxcbiAgICAgICAgICAgICAgICAgIG1hcEludG9BcnJheShcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2soY2hpbGRyZW4uX3BheWxvYWQpLFxuICAgICAgICAgICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgICAgICBpbnZva2VDYWxsYmFjayA9IGNoaWxkcmVuO1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKGludm9rZUNhbGxiYWNrKTtcbiAgICAgICAgdmFyIGNoaWxkS2V5ID1cbiAgICAgICAgICBcIlwiID09PSBuYW1lU29GYXIgPyBcIi5cIiArIGdldEVsZW1lbnRLZXkoaW52b2tlQ2FsbGJhY2ssIDApIDogbmFtZVNvRmFyO1xuICAgICAgICBpc0FycmF5SW1wbChjYWxsYmFjaylcbiAgICAgICAgICA/ICgoZXNjYXBlZFByZWZpeCA9IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCAhPSBjaGlsZEtleSAmJlxuICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeCA9XG4gICAgICAgICAgICAgICAgY2hpbGRLZXkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgXCIkJi9cIikgKyBcIi9cIiksXG4gICAgICAgICAgICBtYXBJbnRvQXJyYXkoY2FsbGJhY2ssIGFycmF5LCBlc2NhcGVkUHJlZml4LCBcIlwiLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogbnVsbCAhPSBjYWxsYmFjayAmJlxuICAgICAgICAgICAgKGlzVmFsaWRFbGVtZW50KGNhbGxiYWNrKSAmJlxuICAgICAgICAgICAgICAobnVsbCAhPSBjYWxsYmFjay5rZXkgJiZcbiAgICAgICAgICAgICAgICAoKGludm9rZUNhbGxiYWNrICYmIGludm9rZUNhbGxiYWNrLmtleSA9PT0gY2FsbGJhY2sua2V5KSB8fFxuICAgICAgICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjYWxsYmFjay5rZXkpKSxcbiAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXggPSBjbG9uZUFuZFJlcGxhY2VLZXkoXG4gICAgICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCArXG4gICAgICAgICAgICAgICAgICAobnVsbCA9PSBjYWxsYmFjay5rZXkgfHxcbiAgICAgICAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayAmJiBpbnZva2VDYWxsYmFjay5rZXkgPT09IGNhbGxiYWNrLmtleSlcbiAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgIDogKFwiXCIgKyBjYWxsYmFjay5rZXkpLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJCYvXCJcbiAgICAgICAgICAgICAgICAgICAgICApICsgXCIvXCIpICtcbiAgICAgICAgICAgICAgICAgIGNoaWxkS2V5XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICBcIlwiICE9PSBuYW1lU29GYXIgJiZcbiAgICAgICAgICAgICAgICBudWxsICE9IGludm9rZUNhbGxiYWNrICYmXG4gICAgICAgICAgICAgICAgaXNWYWxpZEVsZW1lbnQoaW52b2tlQ2FsbGJhY2spICYmXG4gICAgICAgICAgICAgICAgbnVsbCA9PSBpbnZva2VDYWxsYmFjay5rZXkgJiZcbiAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjay5fc3RvcmUgJiZcbiAgICAgICAgICAgICAgICAhaW52b2tlQ2FsbGJhY2suX3N0b3JlLnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4Ll9zdG9yZS52YWxpZGF0ZWQgPSAyKSxcbiAgICAgICAgICAgICAgKGNhbGxiYWNrID0gZXNjYXBlZFByZWZpeCkpLFxuICAgICAgICAgICAgYXJyYXkucHVzaChjYWxsYmFjaykpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGludm9rZUNhbGxiYWNrID0gMDtcbiAgICAgIGNoaWxkS2V5ID0gXCJcIiA9PT0gbmFtZVNvRmFyID8gXCIuXCIgOiBuYW1lU29GYXIgKyBcIjpcIjtcbiAgICAgIGlmIChpc0FycmF5SW1wbChjaGlsZHJlbikpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXG4gICAgICAgICAgKG5hbWVTb0ZhciA9IGNoaWxkcmVuW2ldKSxcbiAgICAgICAgICAgICh0eXBlID0gY2hpbGRLZXkgKyBnZXRFbGVtZW50S2V5KG5hbWVTb0ZhciwgaSkpLFxuICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICs9IG1hcEludG9BcnJheShcbiAgICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICkpO1xuICAgICAgZWxzZSBpZiAoKChpID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbikpLCBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBpKSlcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBpID09PSBjaGlsZHJlbi5lbnRyaWVzICYmXG4gICAgICAgICAgICAoZGlkV2FybkFib3V0TWFwcyB8fFxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgXCJVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIChkaWRXYXJuQWJvdXRNYXBzID0gITApKSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gaS5jYWxsKGNoaWxkcmVuKSxcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICEobmFtZVNvRmFyID0gY2hpbGRyZW4ubmV4dCgpKS5kb25lO1xuXG4gICAgICAgIClcbiAgICAgICAgICAobmFtZVNvRmFyID0gbmFtZVNvRmFyLnZhbHVlKSxcbiAgICAgICAgICAgICh0eXBlID0gY2hpbGRLZXkgKyBnZXRFbGVtZW50S2V5KG5hbWVTb0ZhciwgaSsrKSksXG4gICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgKz0gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICAgKSk7XG4gICAgICBlbHNlIGlmIChcIm9iamVjdFwiID09PSB0eXBlKSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBjaGlsZHJlbi50aGVuKVxuICAgICAgICAgIHJldHVybiBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICByZXNvbHZlVGhlbmFibGUoY2hpbGRyZW4pLFxuICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICApO1xuICAgICAgICBhcnJheSA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArXG4gICAgICAgICAgICAoXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gYXJyYXlcbiAgICAgICAgICAgICAgPyBcIm9iamVjdCB3aXRoIGtleXMge1wiICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oXCIsIFwiKSArIFwifVwiXG4gICAgICAgICAgICAgIDogYXJyYXkpICtcbiAgICAgICAgICAgIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2s7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gICAgICBpZiAobnVsbCA9PSBjaGlsZHJlbikgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBjb3VudCA9IDA7XG4gICAgICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgXCJcIiwgXCJcIiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICAgICAgaWYgKC0xID09PSBwYXlsb2FkLl9zdGF0dXMpIHtcbiAgICAgICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgICAgIGN0b3IgPSBjdG9yKCk7XG4gICAgICAgIGN0b3IudGhlbihcbiAgICAgICAgICBmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gcGF5bG9hZC5fc3RhdHVzIHx8IC0xID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgICAgICAgIChwYXlsb2FkLl9zdGF0dXMgPSAxKSwgKHBheWxvYWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICgwID09PSBwYXlsb2FkLl9zdGF0dXMgfHwgLTEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgICAgICAgKHBheWxvYWQuX3N0YXR1cyA9IDIpLCAocGF5bG9hZC5fcmVzdWx0ID0gZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgLTEgPT09IHBheWxvYWQuX3N0YXR1cyAmJlxuICAgICAgICAgICgocGF5bG9hZC5fc3RhdHVzID0gMCksIChwYXlsb2FkLl9yZXN1bHQgPSBjdG9yKSk7XG4gICAgICB9XG4gICAgICBpZiAoMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChjdG9yID0gcGF5bG9hZC5fcmVzdWx0KSxcbiAgICAgICAgICB2b2lkIDAgPT09IGN0b3IgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwibGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICBjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD9cIixcbiAgICAgICAgICAgICAgY3RvclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBcImRlZmF1bHRcIiBpbiBjdG9yIHx8XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImxhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLFxuICAgICAgICAgICAgICBjdG9yXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGN0b3IuZGVmYXVsdFxuICAgICAgICApO1xuICAgICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuSDtcbiAgICAgIG51bGwgPT09IGRpc3BhdGNoZXIgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0LmRldi9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIGZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgICAgIGlmIChudWxsID09PSBlbnF1ZXVlVGFza0ltcGwpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoXCJyZXF1aXJlXCIgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgICAgICBlbnF1ZXVlVGFza0ltcGwgPSAobW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXSkuY2FsbChcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIFwidGltZXJzXCJcbiAgICAgICAgICApLnNldEltbWVkaWF0ZTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgITEgPT09IGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsICYmXG4gICAgICAgICAgICAgICgoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSAhMCksXG4gICAgICAgICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAmJlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sIHNvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiBQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzIGlmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLlwiXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2Uodm9pZCAwKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZ2dyZWdhdGVFcnJvcnMoZXJyb3JzKSB7XG4gICAgICByZXR1cm4gMSA8IGVycm9ycy5sZW5ndGggJiYgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgQWdncmVnYXRlRXJyb3JcbiAgICAgICAgPyBuZXcgQWdncmVnYXRlRXJyb3IoZXJyb3JzKVxuICAgICAgICA6IGVycm9yc1swXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCkge1xuICAgICAgcHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEJlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuIFwiXG4gICAgICAgICk7XG4gICAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHF1ZXVlID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWU7XG4gICAgICBpZiAobnVsbCAhPT0gcXVldWUpXG4gICAgICAgIGlmICgwICE9PSBxdWV1ZS5sZW5ndGgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICBlbHNlIFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gbnVsbDtcbiAgICAgIDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoXG4gICAgICAgID8gKChxdWV1ZSA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIHJlamVjdChxdWV1ZSkpXG4gICAgICAgIDogcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAgICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgICBpc0ZsdXNoaW5nID0gITA7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuZGlkVXNlUHJvbWlzZSA9ICExO1xuICAgICAgICAgICAgICB2YXIgY29udGludWF0aW9uID0gY2FsbGJhY2soITEpO1xuICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gY29udGludWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmRpZFVzZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgaSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gY29udGludWF0aW9uO1xuICAgICAgICAgICAgICB9IGVsc2UgYnJlYWs7XG4gICAgICAgICAgICB9IHdoaWxlICgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgaSArIDEpLCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaXNGbHVzaGluZyA9ICExO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQoRXJyb3IoKSk7XG4gICAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC50cmFuc2l0aW9uYWwuZWxlbWVudFwiKSxcbiAgICAgIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSxcbiAgICAgIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksXG4gICAgICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLFxuICAgICAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbiAgICBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik7XG4gICAgdmFyIFJFQUNUX0NPTlNVTUVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29uc3VtZXJcIiksXG4gICAgICBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSxcbiAgICAgIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksXG4gICAgICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIiksXG4gICAgICBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxcbiAgICAgIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpLFxuICAgICAgUkVBQ1RfQUNUSVZJVFlfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5hY3Rpdml0eVwiKSxcbiAgICAgIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcixcbiAgICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9LFxuICAgICAgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gICAgICAgIGlzTW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJmb3JjZVVwZGF0ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwicmVwbGFjZVN0YXRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcInNldFN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXNzaWduID0gT2JqZWN0LmFzc2lnbixcbiAgICAgIGVtcHR5T2JqZWN0ID0ge307XG4gICAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIFwib2JqZWN0XCIgIT09IHR5cGVvZiBwYXJ0aWFsU3RhdGUgJiZcbiAgICAgICAgXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgcGFydGlhbFN0YXRlICYmXG4gICAgICAgIG51bGwgIT0gcGFydGlhbFN0YXRlXG4gICAgICApXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwidGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCJcbiAgICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgXCJzZXRTdGF0ZVwiKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssIFwiZm9yY2VVcGRhdGVcIik7XG4gICAgfTtcbiAgICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgICAgIGlzTW91bnRlZDogW1xuICAgICAgICAgIFwiaXNNb3VudGVkXCIsXG4gICAgICAgICAgXCJJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiBjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cIlxuICAgICAgICBdLFxuICAgICAgICByZXBsYWNlU3RhdGU6IFtcbiAgICAgICAgICBcInJlcGxhY2VTdGF0ZVwiLFxuICAgICAgICAgIFwiUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS5cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZm5OYW1lO1xuICAgIGZvciAoZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKVxuICAgICAgZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSAmJlxuICAgICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICBDb21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICAgIGRlcHJlY2F0ZWRBUElzID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbiAgICBkZXByZWNhdGVkQVBJcy5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4gICAgYXNzaWduKGRlcHJlY2F0ZWRBUElzLCBDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICBkZXByZWNhdGVkQVBJcy5pc1B1cmVSZWFjdENvbXBvbmVudCA9ICEwO1xuICAgIHZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXksXG4gICAgICBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIiksXG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgICAgICAgSDogbnVsbCxcbiAgICAgICAgQTogbnVsbCxcbiAgICAgICAgVDogbnVsbCxcbiAgICAgICAgUzogbnVsbCxcbiAgICAgICAgVjogbnVsbCxcbiAgICAgICAgYWN0UXVldWU6IG51bGwsXG4gICAgICAgIGlzQmF0Y2hpbmdMZWdhY3k6ICExLFxuICAgICAgICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogITEsXG4gICAgICAgIGRpZFVzZVByb21pc2U6ICExLFxuICAgICAgICB0aHJvd25FcnJvcnM6IFtdLFxuICAgICAgICBnZXRDdXJyZW50U3RhY2s6IG51bGwsXG4gICAgICAgIHJlY2VudGx5Q3JlYXRlZE93bmVyU3RhY2tzOiAwXG4gICAgICB9LFxuICAgICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgY3JlYXRlVGFzayA9IGNvbnNvbGUuY3JlYXRlVGFza1xuICAgICAgICA/IGNvbnNvbGUuY3JlYXRlVGFza1xuICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH07XG4gICAgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgICBcInJlYWN0LXN0YWNrLWJvdHRvbS1mcmFtZVwiOiBmdW5jdGlvbiAoY2FsbFN0YWNrRm9yRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxTdGFja0ZvckVycm9yKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWU7XG4gICAgdmFyIGRpZFdhcm5BYm91dEVsZW1lbnRSZWYgPSB7fTtcbiAgICB2YXIgdW5rbm93bk93bmVyRGVidWdTdGFjayA9IGRlcHJlY2F0ZWRBUElzW1xuICAgICAgXCJyZWFjdC1zdGFjay1ib3R0b20tZnJhbWVcIlxuICAgIF0uYmluZChkZXByZWNhdGVkQVBJcywgVW5rbm93bk93bmVyKSgpO1xuICAgIHZhciB1bmtub3duT3duZXJEZWJ1Z1Rhc2sgPSBjcmVhdGVUYXNrKGdldFRhc2tOYW1lKFVua25vd25Pd25lcikpO1xuICAgIHZhciBkaWRXYXJuQWJvdXRNYXBzID0gITEsXG4gICAgICB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2csXG4gICAgICByZXBvcnRHbG9iYWxFcnJvciA9XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJlcG9ydEVycm9yXG4gICAgICAgICAgPyByZXBvcnRFcnJvclxuICAgICAgICAgIDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygd2luZG93ICYmXG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygd2luZG93LkVycm9yRXZlbnRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IHdpbmRvdy5FcnJvckV2ZW50KFwiZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgYnViYmxlczogITAsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgID8gU3RyaW5nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBTdHJpbmcoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCkpIHJldHVybjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcHJvY2VzcyAmJlxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHByb2Nlc3MuZW1pdFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVtaXQoXCJ1bmNhdWdodEV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gITEsXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBudWxsLFxuICAgICAgYWN0U2NvcGVEZXB0aCA9IDAsXG4gICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9ICExLFxuICAgICAgaXNGbHVzaGluZyA9ICExLFxuICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyA9XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHF1ZXVlTWljcm90YXNrXG4gICAgICAgICAgPyBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWV1ZU1pY3JvdGFzayhjYWxsYmFjayk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZW5xdWV1ZVRhc2s7XG4gICAgZGVwcmVjYXRlZEFQSXMgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIGM6IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU1lbW9DYWNoZShzaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBleHBvcnRzLkNoaWxkcmVuID0ge1xuICAgICAgbWFwOiBtYXBDaGlsZHJlbixcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIChjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gICAgICAgIG1hcENoaWxkcmVuKFxuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JFYWNoQ29udGV4dFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvdW50OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG4rKztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSxcbiAgICAgIHRvQXJyYXk6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9KSB8fCBbXVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIG9ubHk6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSlcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCJcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9XG4gICAgfTtcbiAgICBleHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgICBleHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbiAgICBleHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbiAgICBleHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG4gICAgZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG4gICAgZXhwb3J0cy5fX0NMSUVOVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9XQVJOX1VTRVJTX1RIRVlfQ0FOTk9UX1VQR1JBREUgPVxuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG4gICAgZXhwb3J0cy5fX0NPTVBJTEVSX1JVTlRJTUUgPSBkZXByZWNhdGVkQVBJcztcbiAgICBleHBvcnRzLmFjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIHByZXZBY3RRdWV1ZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlLFxuICAgICAgICBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgICBhY3RTY29wZURlcHRoKys7XG4gICAgICB2YXIgcXVldWUgPSAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPVxuICAgICAgICAgIG51bGwgIT09IHByZXZBY3RRdWV1ZSA/IHByZXZBY3RRdWV1ZSA6IFtdKSxcbiAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITE7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgIChwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKSxcbiAgICAgICAgICAoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgbnVsbCAhPT0gcmVzdWx0ICYmXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiByZXN1bHQgJiZcbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmVzdWx0LnRoZW5cbiAgICAgICkge1xuICAgICAgICB2YXIgdGhlbmFibGUgPSByZXN1bHQ7XG4gICAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCB8fFxuICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICgoZGlkV2Fybk5vQXdhaXRBY3QgPSAhMCksXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIllvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsIGludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciBzY29wZXMuIFlvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTtcIlxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCA9ICEwO1xuICAgICAgICAgICAgdGhlbmFibGUudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHByZXZBY3RTY29wZURlcHRoKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yJDApIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IkMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aHJvd25FcnJvciA9IGFnZ3JlZ2F0ZUVycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChfdGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gKChlcnJvciA9IGFnZ3JlZ2F0ZUVycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcikpXG4gICAgICAgICAgICAgICAgICA6IHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIHJldHVyblZhbHVlJGpzY29tcCQwID0gcmVzdWx0O1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aCAmJlxuICAgICAgICAoZmx1c2hBY3RRdWV1ZShxdWV1ZSksXG4gICAgICAgIDAgIT09IHF1ZXVlLmxlbmd0aCAmJlxuICAgICAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0IHx8XG4gICAgICAgICAgICAgICgoZGlkV2Fybk5vQXdhaXRBY3QgPSAhMCksXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJBIGNvbXBvbmVudCBzdXNwZW5kZWQgaW5zaWRlIGFuIGBhY3RgIHNjb3BlLCBidXQgdGhlIGBhY3RgIGNhbGwgd2FzIG5vdCBhd2FpdGVkLiBXaGVuIHRlc3RpbmcgUmVhY3QgY29tcG9uZW50cyB0aGF0IGRlcGVuZCBvbiBhc3luY2hyb25vdXMgZGF0YSwgeW91IG11c3QgYXdhaXQgdGhlIHJlc3VsdDpcXG5cXG5hd2FpdCBhY3QoKCkgPT4gLi4uKVwiXG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBudWxsKSk7XG4gICAgICBpZiAoMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGgpXG4gICAgICAgIHRocm93IChcbiAgICAgICAgICAoKGNhbGxiYWNrID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgY2FsbGJhY2spXG4gICAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgMCA9PT0gcHJldkFjdFNjb3BlRGVwdGhcbiAgICAgICAgICAgID8gKChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IHF1ZXVlKSxcbiAgICAgICAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUkanNjb21wJDAsXG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IHJlc29sdmUocmV0dXJuVmFsdWUkanNjb21wJDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5jYWNoZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5jYXB0dXJlT3duZXJTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnZXRDdXJyZW50U3RhY2sgPSBSZWFjdFNoYXJlZEludGVybmFscy5nZXRDdXJyZW50U3RhY2s7XG4gICAgICByZXR1cm4gbnVsbCA9PT0gZ2V0Q3VycmVudFN0YWNrID8gbnVsbCA6IGdldEN1cnJlbnRTdGFjaygpO1xuICAgIH07XG4gICAgZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgaWYgKG51bGwgPT09IGVsZW1lbnQgfHwgdm9pZCAwID09PSBlbGVtZW50KVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIlRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgK1xuICAgICAgICAgICAgZWxlbWVudCArXG4gICAgICAgICAgICBcIi5cIlxuICAgICAgICApO1xuICAgICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKSxcbiAgICAgICAga2V5ID0gZWxlbWVudC5rZXksXG4gICAgICAgIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICBpZiAobnVsbCAhPSBjb25maWcpIHtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdDtcbiAgICAgICAgYToge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBcInJlZlwiKSAmJlxuICAgICAgICAgICAgKEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgXCJyZWZcIlxuICAgICAgICAgICAgKS5nZXQpICYmXG4gICAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQuaXNSZWFjdFdhcm5pbmdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICExO1xuICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gdm9pZCAwICE9PSBjb25maWcucmVmO1xuICAgICAgICB9XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCAmJiAob3duZXIgPSBnZXRPd25lcigpKTtcbiAgICAgICAgaGFzVmFsaWRLZXkoY29uZmlnKSAmJlxuICAgICAgICAgIChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpLCAoa2V5ID0gXCJcIiArIGNvbmZpZy5rZXkpKTtcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpXG4gICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgfHxcbiAgICAgICAgICAgIFwia2V5XCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc2VsZlwiID09PSBwcm9wTmFtZSB8fFxuICAgICAgICAgICAgXCJfX3NvdXJjZVwiID09PSBwcm9wTmFtZSB8fFxuICAgICAgICAgICAgKFwicmVmXCIgPT09IHByb3BOYW1lICYmIHZvaWQgMCA9PT0gY29uZmlnLnJlZikgfHxcbiAgICAgICAgICAgIChwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgaWYgKDEgPT09IHByb3BOYW1lKSBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgZWxzZSBpZiAoMSA8IHByb3BOYW1lKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IEFycmF5KHByb3BOYW1lKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wTmFtZTsgaSsrKVxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdFtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBSZWFjdEVsZW1lbnQoXG4gICAgICAgIGVsZW1lbnQudHlwZSxcbiAgICAgICAga2V5LFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgb3duZXIsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBlbGVtZW50Ll9kZWJ1Z1N0YWNrLFxuICAgICAgICBlbGVtZW50Ll9kZWJ1Z1Rhc2tcbiAgICAgICk7XG4gICAgICBmb3IgKGtleSA9IDI7IGtleSA8IGFyZ3VtZW50cy5sZW5ndGg7IGtleSsrKVxuICAgICAgICAob3duZXIgPSBhcmd1bWVudHNba2V5XSksXG4gICAgICAgICAgaXNWYWxpZEVsZW1lbnQob3duZXIpICYmIG93bmVyLl9zdG9yZSAmJiAob3duZXIuX3N0b3JlLnZhbGlkYXRlZCA9IDEpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24gKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAgICAgUHJvdmlkZXI6IG51bGwsXG4gICAgICAgIENvbnN1bWVyOiBudWxsXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLlByb3ZpZGVyID0gZGVmYXVsdFZhbHVlO1xuICAgICAgZGVmYXVsdFZhbHVlLkNvbnN1bWVyID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OU1VNRVJfVFlQRSxcbiAgICAgICAgX2NvbnRleHQ6IGRlZmF1bHRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGRlZmF1bHRWYWx1ZS5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICAgIGRlZmF1bHRWYWx1ZS5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBpc1ZhbGlkRWxlbWVudChub2RlKSAmJiBub2RlLl9zdG9yZSAmJiAobm9kZS5fc3RvcmUudmFsaWRhdGVkID0gMSk7XG4gICAgICB9XG4gICAgICBpID0ge307XG4gICAgICBub2RlID0gbnVsbDtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZylcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiAoZGlkV2FybkFib3V0T2xkSlNYUnVudGltZSB8fFxuICAgICAgICAgICEoXCJfX3NlbGZcIiBpbiBjb25maWcpIHx8XG4gICAgICAgICAgXCJrZXlcIiBpbiBjb25maWcgfHxcbiAgICAgICAgICAoKGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWUgPSAhMCksXG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJZb3VyIGFwcCAob3Igb25lIG9mIGl0cyBkZXBlbmRlbmNpZXMpIGlzIHVzaW5nIGFuIG91dGRhdGVkIEpTWCB0cmFuc2Zvcm0uIFVwZGF0ZSB0byB0aGUgbW9kZXJuIEpTWCB0cmFuc2Zvcm0gZm9yIGZhc3RlciBwZXJmb3JtYW5jZTogaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9uZXctanN4LXRyYW5zZm9ybVwiXG4gICAgICAgICAgKSksXG4gICAgICAgIGhhc1ZhbGlkS2V5KGNvbmZpZykgJiZcbiAgICAgICAgICAoY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KSwgKG5vZGUgPSBcIlwiICsgY29uZmlnLmtleSkpLFxuICAgICAgICBjb25maWcpKVxuICAgICAgICAgIGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiZcbiAgICAgICAgICAgIFwia2V5XCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICBcIl9fc2VsZlwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgXCJfX3NvdXJjZVwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgKGlbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXSk7XG4gICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICAgIGlmICgxID09PSBjaGlsZHJlbkxlbmd0aCkgaS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgZWxzZSBpZiAoMSA8IGNoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCksIF9pID0gMDtcbiAgICAgICAgICBfaSA8IGNoaWxkcmVuTGVuZ3RoO1xuICAgICAgICAgIF9pKytcbiAgICAgICAgKVxuICAgICAgICAgIGNoaWxkQXJyYXlbX2ldID0gYXJndW1lbnRzW19pICsgMl07XG4gICAgICAgIE9iamVjdC5mcmVlemUgJiYgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgICAgaS5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcylcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiAoKGNoaWxkcmVuTGVuZ3RoID0gdHlwZS5kZWZhdWx0UHJvcHMpLCBjaGlsZHJlbkxlbmd0aCkpXG4gICAgICAgICAgdm9pZCAwID09PSBpW3Byb3BOYW1lXSAmJiAoaVtwcm9wTmFtZV0gPSBjaGlsZHJlbkxlbmd0aFtwcm9wTmFtZV0pO1xuICAgICAgbm9kZSAmJlxuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihcbiAgICAgICAgICBpLFxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGVcbiAgICAgICAgICAgID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgXCJVbmtub3duXCJcbiAgICAgICAgICAgIDogdHlwZVxuICAgICAgICApO1xuICAgICAgdmFyIHByb3BOYW1lID0gMWU0ID4gUmVhY3RTaGFyZWRJbnRlcm5hbHMucmVjZW50bHlDcmVhdGVkT3duZXJTdGFja3MrKztcbiAgICAgIHJldHVybiBSZWFjdEVsZW1lbnQoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBnZXRPd25lcigpLFxuICAgICAgICBpLFxuICAgICAgICBwcm9wTmFtZSA/IEVycm9yKFwicmVhY3Qtc3RhY2stdG9wLWZyYW1lXCIpIDogdW5rbm93bk93bmVyRGVidWdTdGFjayxcbiAgICAgICAgcHJvcE5hbWUgPyBjcmVhdGVUYXNrKGdldFRhc2tOYW1lKHR5cGUpKSA6IHVua25vd25Pd25lckRlYnVnVGFza1xuICAgICAgKTtcbiAgICB9O1xuICAgIGV4cG9ydHMuY3JlYXRlUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlZk9iamVjdCA9IHsgY3VycmVudDogbnVsbCB9O1xuICAgICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgICAgIHJldHVybiByZWZPYmplY3Q7XG4gICAgfTtcbiAgICBleHBvcnRzLmZvcndhcmRSZWYgPSBmdW5jdGlvbiAocmVuZGVyKSB7XG4gICAgICBudWxsICE9IHJlbmRlciAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRVxuICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcImZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gIGNvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSBtZW1vKGZvcndhcmRSZWYoLi4uKSkuXCJcbiAgICAgICAgICApXG4gICAgICAgIDogXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgcmVuZGVyXG4gICAgICAgICAgPyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy5cIixcbiAgICAgICAgICAgICAgbnVsbCA9PT0gcmVuZGVyID8gXCJudWxsXCIgOiB0eXBlb2YgcmVuZGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAwICE9PSByZW5kZXIubGVuZ3RoICYmXG4gICAgICAgICAgICAyICE9PSByZW5kZXIubGVuZ3RoICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXNcIixcbiAgICAgICAgICAgICAgMSA9PT0gcmVuZGVyLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gXCJEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/XCJcbiAgICAgICAgICAgICAgICA6IFwiQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLlwiXG4gICAgICAgICAgICApO1xuICAgICAgbnVsbCAhPSByZW5kZXIgJiZcbiAgICAgICAgbnVsbCAhPSByZW5kZXIuZGVmYXVsdFByb3BzICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgZGVmYXVsdFByb3BzLiBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50P1wiXG4gICAgICAgICk7XG4gICAgICB2YXIgZWxlbWVudFR5cGUgPSB7ICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLCByZW5kZXI6IHJlbmRlciB9LFxuICAgICAgICBvd25OYW1lO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCBcImRpc3BsYXlOYW1lXCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgb3duTmFtZSA9IG5hbWU7XG4gICAgICAgICAgcmVuZGVyLm5hbWUgfHxcbiAgICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZW5kZXIsIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lIH0pLFxuICAgICAgICAgICAgKHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZWxlbWVudFR5cGU7XG4gICAgfTtcbiAgICBleHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG4gICAgZXhwb3J0cy5sYXp5ID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgICAgIF9wYXlsb2FkOiB7IF9zdGF0dXM6IC0xLCBfcmVzdWx0OiBjdG9yIH0sXG4gICAgICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLm1lbW8gPSBmdW5jdGlvbiAodHlwZSwgY29tcGFyZSkge1xuICAgICAgbnVsbCA9PSB0eXBlICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCByZWNlaXZlZDogJXNcIixcbiAgICAgICAgICBudWxsID09PSB0eXBlID8gXCJudWxsXCIgOiB0eXBlb2YgdHlwZVxuICAgICAgICApO1xuICAgICAgY29tcGFyZSA9IHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgY29tcGFyZTogdm9pZCAwID09PSBjb21wYXJlID8gbnVsbCA6IGNvbXBhcmVcbiAgICAgIH07XG4gICAgICB2YXIgb3duTmFtZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wYXJlLCBcImRpc3BsYXlOYW1lXCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgb3duTmFtZSA9IG5hbWU7XG4gICAgICAgICAgdHlwZS5uYW1lIHx8XG4gICAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lIH0pLFxuICAgICAgICAgICAgKHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbXBhcmU7XG4gICAgfTtcbiAgICBleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCxcbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24gPSB7fTtcbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQgPSBjdXJyZW50VHJhbnNpdGlvbjtcbiAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gc2NvcGUoKSxcbiAgICAgICAgICBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlM7XG4gICAgICAgIG51bGwgIT09IG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoICYmXG4gICAgICAgICAgb25TdGFydFRyYW5zaXRpb25GaW5pc2goY3VycmVudFRyYW5zaXRpb24sIHJldHVyblZhbHVlKTtcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHJldHVyblZhbHVlICYmXG4gICAgICAgICAgbnVsbCAhPT0gcmV0dXJuVmFsdWUgJiZcbiAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXR1cm5WYWx1ZS50aGVuICYmXG4gICAgICAgICAgcmV0dXJuVmFsdWUudGhlbihub29wLCByZXBvcnRHbG9iYWxFcnJvcik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXBvcnRHbG9iYWxFcnJvcihlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBudWxsID09PSBwcmV2VHJhbnNpdGlvbiAmJlxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzICYmXG4gICAgICAgICAgKChzY29wZSA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemUpLFxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCksXG4gICAgICAgICAgMTAgPCBzY29wZSAmJlxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIkRldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLlwiXG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCA9IHByZXZUcmFuc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cG9ydHMudW5zdGFibGVfdXNlQ2FjaGVSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQ2FjaGVSZWZyZXNoKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZSA9IGZ1bmN0aW9uICh1c2FibGUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZSh1c2FibGUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VBY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uIChhY3Rpb24sIGluaXRpYWxTdGF0ZSwgcGVybWFsaW5rKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VBY3Rpb25TdGF0ZShcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIHBlcm1hbGlua1xuICAgICAgKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlQ29udGV4dCA9IGZ1bmN0aW9uIChDb250ZXh0KSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgICBDb250ZXh0LiQkdHlwZW9mID09PSBSRUFDVF9DT05TVU1FUl9UWVBFICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBjYXVzZSBidWdzLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/XCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZURlYnVnVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGluaXRpYWxWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSwgaW5pdGlhbFZhbHVlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRWZmZWN0ID0gZnVuY3Rpb24gKGNyZWF0ZSwgY3JlYXRlRGVwcywgdXBkYXRlKSB7XG4gICAgICBudWxsID09IGNyZWF0ZSAmJlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJSZWFjdCBIb29rIHVzZUVmZmVjdCByZXF1aXJlcyBhbiBlZmZlY3QgY2FsbGJhY2suIERpZCB5b3UgZm9yZ2V0IHRvIHBhc3MgYSBjYWxsYmFjayB0byB0aGUgaG9vaz9cIlxuICAgICAgICApO1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHVwZGF0ZSlcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJ1c2VFZmZlY3QgQ1JVRCBvdmVybG9hZCBpcyBub3QgZW5hYmxlZCBpbiB0aGlzIGJ1aWxkIG9mIFJlYWN0LlwiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBjcmVhdGVEZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJZCgpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gZnVuY3Rpb24gKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgbnVsbCA9PSBjcmVhdGUgJiZcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiUmVhY3QgSG9vayB1c2VJbnNlcnRpb25FZmZlY3QgcmVxdWlyZXMgYW4gZWZmZWN0IGNhbGxiYWNrLiBEaWQgeW91IGZvcmdldCB0byBwYXNzIGEgY2FsbGJhY2sgdG8gdGhlIGhvb2s/XCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICBudWxsID09IGNyZWF0ZSAmJlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJSZWFjdCBIb29rIHVzZUxheW91dEVmZmVjdCByZXF1aXJlcyBhbiBlZmZlY3QgY2FsbGJhY2suIERpZCB5b3UgZm9yZ2V0IHRvIHBhc3MgYSBjYWxsYmFjayB0byB0aGUgaG9vaz9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZU1lbW8gPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZU9wdGltaXN0aWMgPSBmdW5jdGlvbiAocGFzc3Rocm91Z2gsIHJlZHVjZXIpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU9wdGltaXN0aWMocGFzc3Rocm91Z2gsIHJlZHVjZXIpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VSZWR1Y2VyID0gZnVuY3Rpb24gKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVJlZiA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVJlZihpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VTdGF0ZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZnVuY3Rpb24gKFxuICAgICAgc3Vic2NyaWJlLFxuICAgICAgZ2V0U25hcHNob3QsXG4gICAgICBnZXRTZXJ2ZXJTbmFwc2hvdFxuICAgICkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgZ2V0U25hcHNob3QsXG4gICAgICAgIGdldFNlcnZlclNuYXBzaG90XG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlVHJhbnNpdGlvbigpO1xuICAgIH07XG4gICAgZXhwb3J0cy52ZXJzaW9uID0gXCIxOS4xLjBcIjtcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChFcnJvcigpKTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBmcm9tIGBwcmUtcHVibGlzaC5qc2AuXG4gKiBEbyBub3QgbWFudWFsbHkgZWRpdC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJhcmVhXCI6IHRydWUsXG4gIFwiYmFzZVwiOiB0cnVlLFxuICBcImJyXCI6IHRydWUsXG4gIFwiY29sXCI6IHRydWUsXG4gIFwiZW1iZWRcIjogdHJ1ZSxcbiAgXCJoclwiOiB0cnVlLFxuICBcImltZ1wiOiB0cnVlLFxuICBcImlucHV0XCI6IHRydWUsXG4gIFwibGlua1wiOiB0cnVlLFxuICBcIm1ldGFcIjogdHJ1ZSxcbiAgXCJwYXJhbVwiOiB0cnVlLFxuICBcInNvdXJjZVwiOiB0cnVlLFxuICBcInRyYWNrXCI6IHRydWUsXG4gIFwid2JyXCI6IHRydWVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbmltcG9ydCAqIGFzIE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBvcGVuZmluL3dvcmtzcGFjZS9ub3RpZmljYXRpb25zXCI7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9TT1VORF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9hc3NldHMvbm90aWZpY2F0aW9uLm1wM1wiO1xuXG4vLyBLZWVwIHRyYWNrIG9mIG5vdGlmaWNhdGlvbnMgd2UgYXJlIHVwZGF0aW5nXG5jb25zdCB1cGRhdGFibGVOb3RpZmljYXRpb25zOiB7XG5cdFtpZDogc3RyaW5nXTogTm90aWZpY2F0aW9ucy5UZW1wbGF0ZU1hcmtkb3duICYgeyBjdXN0b21EYXRhOiB7IGNvdW50OiBudW1iZXIgfSB9O1xufSA9IHt9O1xubGV0IHVwZGF0YWJsZU5vdGlmaWNhdGlvblRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmxldCBsb2dnaW5nRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xubGV0IGNvZGVFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbDtcblxubGV0IGNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xubGV0IGNvbm5lY3RlZFZlcnNpb246IHN0cmluZyB8IG51bGw7XG5sZXQgc3RhdHVzSW50ZXJ2YWxJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xubGV0IGxhc3RDb25uZWN0aW9uU3RhdHVzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG4gICAgICAgIGF3YWl0IGluaXRpYWxpemVOb3RpZmljYXRpb25zKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBET00gZWxlbWVudHMgYW5kIHNldHMgdXAgZXZlbnQgbGlzdGVuZXJzIGZvciBVSSBjb250cm9scy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0bG9nZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2dpbmdcIik7XG5cdGNvZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RlXCIpO1xuXHRjb25zdCBsb2dnaW5nQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2dpbmctY29udGFpbmVyXCIpO1xuXHRjb25zdCBjb2RlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGUtY29udGFpbmVyXCIpO1xuXG5cdGlmICghY29kZUVsZW1lbnQgfHwgIWxvZ2dpbmdFbGVtZW50IHx8ICFsb2dnaW5nQ29udGFpbmVyIHx8ICFjb2RlQ29udGFpbmVyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9nZ2luZ0FkZEVudHJ5KGBMaWJyYXJ5IFZlcnNpb246ICR7Tm90aWZpY2F0aW9ucy5WRVJTSU9OfWApO1xuXG5cdGNvbnN0IGJ0bkxvZ2dpbmdDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTG9nZ2luZ0NsZWFyXCIpO1xuXHRpZiAoYnRuTG9nZ2luZ0NsZWFyKSB7XG5cdFx0YnRuTG9nZ2luZ0NsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29kZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNvZGVDb3B5XCIpO1xuXHRpZiAoYnRuQ29kZUNvcHkpIHtcblx0XHRidG5Db2RlQ29weS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKGNvZGVFbGVtZW50KSB7XG5cdFx0XHRcdGF3YWl0IGZpbi5DbGlwYm9hcmQud3JpdGVUZXh0KHsgZGF0YTogY29kZUVsZW1lbnQudmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db2RlTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db2RlTm90aWZpY2F0aW9uXCIpO1xuXHRpZiAoYnRuQ29kZU5vdGlmaWNhdGlvbikge1xuXHRcdGJ0bkNvZGVOb3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdFx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbk9wdGlvbnM6IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IEpTT04ucGFyc2UoY29kZUVsZW1lbnQudmFsdWUpO1xuXHRcdFx0XHRcdG5vdGlmaWNhdGlvbk9wdGlvbnMuaWQgPSByYW5kb21VVUlEKCk7XG5cdFx0XHRcdFx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbk9wdGlvbnMpO1xuXHRcdFx0XHRcdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbk9wdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fSk7XG5cdH1cblxuXHRjb2RlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0SlNPTi5wYXJzZShjb2RlRWxlbWVudC52YWx1ZSk7XG5cdFx0XHRcdGNvZGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb2RlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRjb2RlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGlmIChsb2dnaW5nQ29udGFpbmVyKSB7XG4gICAgICAgIGxvZ2dpbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuXHRjb25zdCBidG5WaWV3TG9nZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuVmlld0xvZ2dpbmdcIik7XG5cdGlmIChidG5WaWV3TG9nZ2luZykge1xuXHRcdGJ0blZpZXdMb2dnaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRcdGNvZGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuVmlld0NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blZpZXdDb2RlXCIpO1xuXHRpZiAoYnRuVmlld0NvZGUpIHtcblx0XHRidG5WaWV3Q29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRjb2RlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvblNpbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uU2ltcGxlXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uU2ltcGxlKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uU2ltcGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93U2ltcGxlTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3MpIHtcblx0XHRidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd1NpbXBsZU5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzQWN0aW9uXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb24pIHtcblx0XHRidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cblx0XHRcdHNob3dTaW1wbGVOb3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbigpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbkFjdGlvbmFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkFjdGlvbmFibGVcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25BY3Rpb25hYmxlKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uQWN0aW9uYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd0FjdGlvbmFibGVOb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25Gb3JtXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uRm9ybSkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dGb3JtTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uRm9ybUFkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWRcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWQpIHtcblx0XHRidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dGb3JtQWR2YW5jZWROb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25VcGRhdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvblVwZGF0YWJsZVwiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvblVwZGF0YWJsZSkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvblVwZGF0YWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd1VwZGF0YWJsZU5vdGlmaWNhdGlvbigpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbkN1c3RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uQ3VzdG9tXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQ3VzdG9tKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uQ3VzdG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93Q3VzdG9tTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uV2l0aFNvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoU291bmRcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25XaXRoU291bmQpIHtcblx0XHRidG5Ob3RpZmljYXRpb25XaXRoU291bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRzaG93U291bmROb3RpZmljYXRpb24oTk9USUZJQ0FUSU9OX1NPVU5EX1VSTClcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQ2VudGVyVXNlclNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3NcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MpIHtcblx0XHRidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRnZXROb3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MoKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25XaXRoSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoSW5kaWNhdG9yXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uV2l0aEluZGljYXRvcikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbldpdGhJbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dJbmRpY2F0b3JOb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25XaXRoQ3VzdG9tSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoQ3VzdG9tSW5kaWNhdG9yXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uV2l0aEN1c3RvbUluZGljYXRvcikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbldpdGhDdXN0b21JbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRzaG93Q3VzdG9tSW5kaWNhdG9yTm90aWZpY2F0aW9uKClcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvd1wiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93KSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0YXdhaXQgTm90aWZpY2F0aW9ucy5zaG93KCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGAke2Vycn1gKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bk5vdGlmaWNhdGlvbnNDZW50ZXJIaWRlXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUpIHtcblx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRhd2FpdCBOb3RpZmljYXRpb25zLmhpZGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYCR7ZXJyfWApO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5Ob3RpZmljYXRpb25TdHVkaW9PcGVuXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uU3R1ZGlvT3Blbikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoXCJodHRwczovL2Nkbi5vcGVuZmluLmNvL3N0dWRpby9ub3RpZmljYXRpb24vYXBwLmpzb25cIik7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRidG5Ob3RpZmljYXRpb25TdHVkaW9PcGVuLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgbm90aWZpY2F0aW9ucyBieSByZWdpc3RlcmluZyBhbmQgbG9nZ2luZyB0aGUgY291bnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVOb3RpZmljYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLnJlZ2lzdGVyKCk7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuXHRjb25zb2xlLmxvZyhcIk51bWJlciBvZiBub3RpZmljYXRpb25zOlwiLCBhd2FpdCBOb3RpZmljYXRpb25zLmdldE5vdGlmaWNhdGlvbnNDb3VudCgpKTtcbn1cblxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGxpc3RlbmVycyBmb3IgdGhlIGV2ZW50cyBmcm9tIHRoZSBub3RpZmljYXRpb24gY2VudGVyLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplTGlzdGVuZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuXHQvLyBMaXN0ZW4gZm9yIG5ldyBub3RpZmljYXRpb25zIGJlaW5nIGNyZWF0ZWRcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWNyZWF0ZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDcmVhdGVkOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWNsb3NlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENsb3NlZDogJHtldmVudC5ub3RpZmljYXRpb24uaWR9YCk7XG5cblx0XHRpZiAodXBkYXRhYmxlTm90aWZpY2F0aW9uc1tldmVudC5ub3RpZmljYXRpb24uaWRdKSB7XG5cdFx0XHRkZWxldGUgdXBkYXRhYmxlTm90aWZpY2F0aW9uc1tldmVudC5ub3RpZmljYXRpb24uaWRdO1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHVwZGF0YWJsZU5vdGlmaWNhdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh1cGRhdGFibGVOb3RpZmljYXRpb25UaW1lcik7XG5cdFx0XHRcdHVwZGF0YWJsZU5vdGlmaWNhdGlvblRpbWVyID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWFjdGlvblwiLCBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRpZiAoZXZlbnQ/LnJlc3VsdD8uYWN0aW9uSWQgPT09IFwib3Blbi13ZWItc2l0ZVwiKSB7XG5cdFx0XHRhd2FpdCBmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihldmVudD8ucmVzdWx0Py51cmwgYXMgc3RyaW5nKTtcblx0XHR9IGVsc2UgaWYgKGV2ZW50Py5yZXN1bHQ/LkJPRFlfQ0xJQ0sgPT09IFwiZGlzbWlzc19ldmVudFwiKSB7XG5cdFx0XHRpZiAoZXZlbnQubm90aWZpY2F0aW9uPy5jdXN0b21EYXRhPy5hY3Rpb24pIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XHRcdGBcXHREYXRhOiAke1xuXHRcdFx0XHRcdFx0ZXZlbnQ/Lm5vdGlmaWNhdGlvbj8uY3VzdG9tRGF0YSA/IEpTT04uc3RyaW5naWZ5KGV2ZW50Lm5vdGlmaWNhdGlvbi5jdXN0b21EYXRhKSA6IFwiTm9uZVwiXG5cdFx0XHRcdFx0fWBcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlxcdE5vIGFjdGlvblwiKTtcblx0XHRcdH1cblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlxcdEJvZHkgY2xpY2sgZGlzbWlzc1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XHRgXFx0RGF0YTogJHtldmVudD8ucmVzdWx0Py5jdXN0b21EYXRhID8gSlNPTi5zdHJpbmdpZnkoZXZlbnQucmVzdWx0LmN1c3RvbURhdGEpIDogXCJOb25lXCJ9YFxuXHRcdFx0KTtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgXFx0VGFzazogJHtldmVudD8ucmVzdWx0Py50YXNrID8/IFwiTm9uZVwifWApO1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBBY3Rpb246ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFRvYXN0IERpc21pc3NlZDogJHtldmVudC5ub3RpZmljYXRpb24uaWR9YCk7XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFxcdERhdGE6ICR7ZXZlbnQ/LmZvcm0gPyBKU09OLnN0cmluZ2lmeShldmVudC5mb3JtKSA6IFwiTm9uZVwifWApO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgRm9ybTogJHtldmVudC5ub3RpZmljYXRpb24uaWR9YCk7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb25zLWNvdW50LWNoYW5nZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0c2hvd05vdGlmaWNhdGlvbkNvdW50KGV2ZW50LmNvdW50KTtcblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLXNvdW5kLXRvZ2dsZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBTb3VuZCBFbmFibGVkOiAke2V2ZW50Lm5vdGlmaWNhdGlvblNvdW5kRW5hYmxlZH1gKTtcblx0fSk7XG5cblx0YWRkQ29ubmVjdGlvbkNoYW5nZWRFdmVudExpc3RlbmVyKChzdGF0dXMpID0+IHtcblx0XHRpZiAoc3RhdHVzLmNvbm5lY3RlZCAhPT0gY29ubmVjdGVkKSB7XG5cdFx0XHRjb25uZWN0ZWQgPSBzdGF0dXMuY29ubmVjdGVkO1xuXHRcdFx0Y29ubmVjdGVkVmVyc2lvbiA9IHN0YXR1cy52ZXJzaW9uO1xuXHRcdFx0dXBkYXRlQ29ubmVjdGVkU3RhdGUoKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSBVVUlEIHN0cmluZy5cbiAqIEByZXR1cm5zIEEgcmFuZG9tbHkgZ2VuZXJhdGVkIFVVSUQuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVVVSUQoKTogc3RyaW5nIHtcblx0aWYgKFwicmFuZG9tVVVJRFwiIGluIHdpbmRvdy5jcnlwdG8pIHtcbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LmNyeXB0by5yYW5kb21VVUlELCB1c2UgaXRcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRyZXR1cm4gd2luZG93LmNyeXB0by5yYW5kb21VVUlEKCk7XG5cdH1cblx0Ly8gUG9seWZpbGwgdGhlIHdpbmRvdy5jcnlwdG8ucmFuZG9tVVVJRCBpZiB3ZSBhcmUgcnVubmluZyBpbiBhIG5vbiBzZWN1cmUgY29udGV4dCB0aGF0IGRvZXNuJ3QgaGF2ZSBpdFxuXHQvLyB3ZSBhcmUgc3RpbGwgdXNpbmcgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMgd2hpY2ggaXMgYWx3YXlzIGF2YWlsYWJsZVxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyMy8yODAwMjE4XG5cdC8qKlxuXHQgKiBHZXQgcmFuZG9tIGhleCB2YWx1ZS5cblx0ICogQHBhcmFtIGMgVGhlIG51bWJlciB0byBiYXNlIHRoZSByYW5kb20gdmFsdWUgb24uXG5cdCAqIEByZXR1cm5zIFRoZSByYW5kb20gdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRSYW5kb21IZXgoYzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdGNvbnN0IHJuZCA9IHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0KE51bWJlcihjKSBeIHJuZCkudG9TdHJpbmcoMTYpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCBnZXRSYW5kb21IZXgpO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cuXG4gKiBAcGFyYW0gZW50cnkgVGhlIGVudHJ5IHRvIGFkZC5cbiAqL1xuZnVuY3Rpb24gbG9nZ2luZ0FkZEVudHJ5KGVudHJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlbnRyeX1cXG5cXG4ke2xvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50fWA7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGNvZGUgZXhhbXBsZSB3aXRoIHRoZSBub3RpZmljYXRpb24uXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBjb2RlIGV4YW1wbGUuXG4gKi9cbmZ1bmN0aW9uIGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb25PcHRpb25zOiBOb3RpZmljYXRpb25PcHRpb25zKTogdm9pZCB7XG5cdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdGNvZGVFbGVtZW50LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uT3B0aW9ucywgdW5kZWZpbmVkLCBcIiAgXCIpO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBjb25uZWN0ZWQgc3RhdGUgb24gdGhlIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3RlZFN0YXRlKCk6IHZvaWQge1xuXHRsb2dnaW5nQWRkRW50cnkoYElzIENvbm5lY3RlZDogJHtjb25uZWN0ZWR9YCk7XG5cdGlmIChjb25uZWN0ZWQpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENvbm5lY3RlZCBWZXJzaW9uOiAke2Nvbm5lY3RlZFZlcnNpb259YCk7XG5cdH1cblxuXHRjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuXHRcdGJ1dHRvbi5kaXNhYmxlZCA9ICFjb25uZWN0ZWQ7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIG5vdGlmaWNhdGlvbiBjb3VudCBvbiB0aGUgdmlldy5cbiAqIEBwYXJhbSBjb3VudCBUaGUgbmV3IGNvdW50IHRvIGRpc3BsYXkuXG4gKi9cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25Db3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvd1wiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93KSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cudGV4dENvbnRlbnQgPSBgU2hvdyBbJHtjb3VudH1dYDtcblx0fVxufVxuXG5cbi8qKlxuICogRGlzcGxheSBhIHZlcnkgYmFzaWMgc2ltcGxlIG5vdGlmaWNhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1NpbXBsZU5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiU2ltcGxlIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIHNpbXBsZSBub3RpZmljYXRpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdHNvdW5kT3B0aW9uczoge1xuXHRcdFx0bW9kZTogXCJzaWxlbnRcIlxuXHRcdH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdoaWNoIGNhbiBiZSBkaXNtaXNzZWQgYnkgY2xpY2tpbmcgb24gdGhlIGJvZHkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dTaW1wbGVOb3RpZmljYXRpb25Cb2R5RGlzbWlzcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiU2ltcGxlIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIHNpbXBsZSBub3RpZmljYXRpb24gdGhhdCBiZSBkaXNtaXNzZWQgYnkgY2xpY2tpbmcgdGhlIGJvZHlcIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdG9uU2VsZWN0OiB7IEJPRFlfQ0xJQ0s6IE5vdGlmaWNhdGlvbnMuQWN0aW9uQm9keUNsaWNrVHlwZS5ESVNNSVNTX0VWRU5UIH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdoaWNoIGNhbiBiZSBkaXNtaXNzZWQgYnkgY2xpY2tpbmcgb24gdGhlIGJvZHkgYW5kIHRoZW4gdHJpZ2dlciBhIGN1c3RvbSBhY3Rpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dTaW1wbGVOb3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiU2ltcGxlIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIHNpbXBsZSBub3RpZmljYXRpb24gdGhhdCBiZSBkaXNtaXNzZWQgYnkgY2xpY2tpbmcgdGhlIGJvZHkgYW5kIHRyaWdnZXIgY3VzdG9tIGFjdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0b25TZWxlY3Q6IHsgQk9EWV9DTElDSzogTm90aWZpY2F0aW9ucy5BY3Rpb25Cb2R5Q2xpY2tUeXBlLkRJU01JU1NfRVZFTlQgfSxcblx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRhY3Rpb246IFwiY3VzdG9tLWFjdGlvblwiLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRtZXNzYWdlOiBcIkJvZHkgY2xpY2sgY3VzdG9tIGFjdGlvblwiXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2hpY2ggaGFzIGFjdGlvbiBidXR0b25zLCB0aGUgZXZlbnRzIHJldHVybmVkIHdpbGxcbiAqIGJlIGhhbmRsZWQgdGhlIHRoZSBub3RpZmljYXRpb24tYWN0aW9uIGxpc3RlbmVyLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93QWN0aW9uYWJsZU5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiQWN0aW9uYWJsZSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBub3RpZmljYXRpb24gdGhhdCBoYXMgYW4gYWN0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkFja25vd2xlZGdlZFwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRjdGE6IHRydWUsXG5cdFx0XHRcdG9uQ2xpY2s6IHtcblx0XHRcdFx0XHR0YXNrOiBcImFja25vd2xlZGdlLXRhc2tcIixcblx0XHRcdFx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBcIlRoaXMgaXMgdGhlIHJlc3BvbnNlIGRhdGFcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQ2FuY2VsXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCJcblx0XHRcdH1cblx0XHRdXG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aGljaCBoYXMgZm9ybSBmaWVsZHMsIHRoZSBkYXRhIGZyb20gdGhlIGZvcm0gd2lsbFxuICogYmUgcmV0dXJuZWQgdG8gdGhlIG5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZCBsaXN0ZW5lci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0Zvcm1Ob3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkZvcm0gTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgbm90aWZpY2F0aW9uIHRoYXQgaGFzIGZvcm0gZGF0YVwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0Zm9ybTogW1xuXHRcdFx0e1xuXHRcdFx0XHRrZXk6IFwiYW1vdW50XCIsXG5cdFx0XHRcdGxhYmVsOiBcIkFtb3VudFwiLFxuXHRcdFx0XHR0eXBlOiBcIm51bWJlclwiLFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIk51bWJlclwiLFxuXHRcdFx0XHRcdG1heDogMTAwLFxuXHRcdFx0XHRcdG1pbjogMVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0bWluOiB7XG5cdFx0XHRcdFx0XHRhcmc6IDEsXG5cdFx0XHRcdFx0XHRpbnZhbGlkTWVzc2FnZTogXCJNdXN0IGJlIGF0IGxlYXN0IDFcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWF4OiB7XG5cdFx0XHRcdFx0XHRhcmc6IDEwMCxcblx0XHRcdFx0XHRcdGludmFsaWRNZXNzYWdlOiBcIkNhbm5vdCBiZSBtb3JlIHRoYW4gMTAwXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiU2F2ZVwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRjdGE6IHRydWUsXG5cdFx0XHRcdHN1Ym1pdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQ2FuY2VsXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCJcblx0XHRcdH1cblx0XHRdXG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aGljaCBoYXMgZm9ybSBmaWVsZHMsIHRoZSBkYXRhIGZyb20gdGhlIGZvcm0gd2lsbFxuICogYmUgcmV0dXJuZWQgdG8gdGhlIG5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZCBsaXN0ZW5lci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0Zvcm1BZHZhbmNlZE5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiRm9ybSBBZHZhbmNlZCBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBub3RpZmljYXRpb24gdGhhdCBoYXMgZm9ybSBkYXRhXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRmb3JtOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRcdGtleTogXCJib29rXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJvb2tcIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJUaGlzIGlzIHVzZWQgdG8gbG9vayB1cCBmb3IgYm9va1wiLFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIlRleHRcIixcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJCb29rIG5hbWVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0bWluOiB7XG5cdFx0XHRcdFx0XHRhcmc6IDcsXG5cdFx0XHRcdFx0XHRpbnZhbGlkTWVzc2FnZTogXCJNdXN0IGJlIGF0IGxlYXN0IDcgY2hhcnMgbG9uZ1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtYXg6IHtcblx0XHRcdFx0XHRcdGFyZzogOSxcblx0XHRcdFx0XHRcdGludmFsaWRNZXNzYWdlOiBcIk11c3QgYmUgYXQgbW9zdCA5IGNoYXJzIGxvbmdcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IFwiMTIzNDU1NFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInRpbWVcIixcblx0XHRcdFx0a2V5OiBcIndoYXRfdGltZVwiLFxuXHRcdFx0XHRsYWJlbDogXCJDaG9zZSB0aW1lP1wiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlNvbWUgdGltZSBjaG9vc2luZyBoZWxwZXIgdGV4dFwiLFxuXHRcdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRcdGhvdXI6IDEyXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIlRpbWVcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcImRhdGVcIixcblx0XHRcdFx0a2V5OiBcImRhdGVfcGlja3VwXCIsXG5cdFx0XHRcdGxhYmVsOiBcIldoZW4gdG8gcGljayB1cD9cIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJTb21lIGRhdGUgY2hvb3NpbmcgaGVscGVyIHRleHRcIixcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiRGF0ZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRcdGtleTogXCJib29rMlwiLFxuXHRcdFx0XHRsYWJlbDogXCJCb29rIFR5cGVcIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJUaGlzIGlzIHVzZWQgdG8gbG9vayB1cCBmb3IgYm9va1wiLFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJEcm9wZG93blwiLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiYm9vazFcIixcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiQm9vayAxXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcImJvb2syXCIsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkJvb2sgMlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJib29rM1wiLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJCb29rIDNcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJyYWRpb0dyb3VwXCIsXG5cdFx0XHRcdGtleTogXCJyYWRpb0dyb3VwRGVtb1wiLFxuXHRcdFx0XHRsYWJlbDogXCJDaG9zZSBvbmVcIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJTb21lIHJhZGlvIGNob29zaW5nIGhlbHBlciB0ZXh0XCIsXG5cdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8xXCIsXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIlJhZGlvR3JvdXBcIixcblx0XHRcdFx0XHRncm91cDogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gMVwiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fMVwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gMlwiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fMlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gM1wiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fM1wiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcImNoZWNrYm94R3JvdXBcIixcblx0XHRcdFx0a2V5OiBcImNoZWNrYm94R3JvdXBEZW1vXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkNob3NlIE11bHRpcGxlXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiU29tZSBjaGVja2JveCBjaG9vc2luZyBoZWxwZXIgdGV4dFwiLFxuXHRcdFx0XHR2YWx1ZTogW1wib3B0aW9uXzFcIiwgXCJvcHRpb25fMlwiXSxcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiQ2hlY2tib3hHcm91cFwiLFxuXHRcdFx0XHRcdGdyb3VwOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAxXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8xXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAyXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8yXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAzXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8zXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRcdGtleTogXCJkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuXHRcdFx0XHR2YWx1ZTogXCJ2ZXJ5IGxvbmcgdGV4dC4uLi5cIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJUaGlzIGlzIHVzZWQgdG8gbG9vayB1cCBmb3IgYm9va1wiLFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIlRleHRcIixcblx0XHRcdFx0XHRtdWx0aWxpbmU6IHRydWUsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiV3JpdGUgZGVzY3JpcHRpb25cIixcblx0XHRcdFx0XHRyb3dzOiA1XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0XHRcdGtleTogXCJhZ2VcIixcblx0XHRcdFx0bGFiZWw6IFwiQWdlXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiVGhpcyBpcyB1c2VkIHRvIGxvb2sgdXAgZm9yIGJvb2tcIixcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJOdW1iZXJcIixcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJFbnRlciBhZ2VcIixcblx0XHRcdFx0XHRtaW46IDEsXG5cdFx0XHRcdFx0bWF4OiA4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRtaW46IHtcblx0XHRcdFx0XHRcdGFyZzogMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWF4OiB7XG5cdFx0XHRcdFx0XHRhcmc6IDlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiU2F2ZVwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRjdGE6IHRydWUsXG5cdFx0XHRcdHN1Ym1pdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQ2FuY2VsXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCJcblx0XHRcdH1cblx0XHRdXG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB0aGF0IGNhbiBiZSB1cGRhdGVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93VXBkYXRhYmxlTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBpZCA9IHJhbmRvbVVVSUQoKTtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgJiB7IGN1c3RvbURhdGE6IHsgY291bnQ6IG51bWJlciB9IH0gPSB7XG5cdFx0dGl0bGU6IFwiVXBkYXRhYmxlIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhbiB1cGRhdGFibGUgbm90aWZpY2F0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0Y291bnQ6IDBcblx0XHR9LFxuXHRcdGlkXG5cdH07XG5cblx0aWYgKE9iamVjdC5rZXlzKHVwZGF0YWJsZU5vdGlmaWNhdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHVwZGF0YWJsZU5vdGlmaWNhdGlvblRpbWVyID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdGZvciAoY29uc3Qgbm90aWZpY2F0aW9uSWQgaW4gdXBkYXRhYmxlTm90aWZpY2F0aW9ucykge1xuXHRcdFx0XHR1cGRhdGFibGVOb3RpZmljYXRpb25zW25vdGlmaWNhdGlvbklkXS5jdXN0b21EYXRhLmNvdW50Kys7XG5cdFx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvblVwZGF0ZTogTm90aWZpY2F0aW9ucy5VcGRhdGFibGVOb3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0XHRcdFx0Ym9keTogYFRoaXMgaXMgYW4gdXBkYXRhYmxlIG5vdGlmaWNhdGlvbiAke3VwZGF0YWJsZU5vdGlmaWNhdGlvbnNbbm90aWZpY2F0aW9uSWRdLmN1c3RvbURhdGEuY291bnR9YCxcblx0XHRcdFx0XHRpZDogbm90aWZpY2F0aW9uSWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRhd2FpdCBOb3RpZmljYXRpb25zLnVwZGF0ZShub3RpZmljYXRpb25VcGRhdGUpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDApO1xuXHR9XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG5cblx0dXBkYXRhYmxlTm90aWZpY2F0aW9uc1tpZF0gPSBub3RpZmljYXRpb247XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aXRoIGN1c3RvbSBjb250ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93Q3VzdG9tTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJDdXN0b20gTm90aWZpY2F0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcImN1c3RvbVwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0dGVtcGxhdGVPcHRpb25zOiB7XG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1pblRlbXBsYXRlQVBJVmVyc2lvbjogXCIxXCIsXG5cdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdGdhcDogXCIxMHB4XCJcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwic3ViVGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImZpcnN0VmFsdWVUaXRsZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImZpcnN0VmFsdWVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IFwicmVkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcInNlY29uZFZhbHVlVGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJzZWNvbmRWYWx1ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZXhhbXBsZUltYWdlVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY3Rpb25hYmxlVGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJhY3Rpb25hYmxlVXJsVGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdHRvb2x0aXBLZXk6IFwiYWN0aW9uYWJsZVVybFRvb2x0aXBcIixcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uSWQ6IFwib3Blbi13ZWItc2l0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly9vcGVuZmluLmNvXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImdyaWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJyb3dcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJjMFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJjMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiYzJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMDBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQwMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDAyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMTBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQxMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDEyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZW1wbGF0ZURhdGE6IHtcblx0XHRcdHN1YlRpdGxlOiBcIlN1YiBUaXRsZSDwn5qAXCIsXG5cdFx0XHRmaXJzdFZhbHVlVGl0bGU6IFwiRmlyc3QgVmFsdWVcIixcblx0XHRcdGZpcnN0VmFsdWU6IFwiMTAwXCIsXG5cdFx0XHRzZWNvbmRWYWx1ZVRpdGxlOiBcIlNlY29uZCBWYWx1ZVwiLFxuXHRcdFx0c2Vjb25kVmFsdWU6IFwiMjAwXCIsXG5cdFx0XHRjMDogXCJDb2wgMVwiLFxuXHRcdFx0YzE6IFwiQ29sIDJcIixcblx0XHRcdGMyOiBcIkNvbCAzXCIsXG5cdFx0XHRkMDA6IFwiNTBcIixcblx0XHRcdGQwMTogXCIxNTBcIixcblx0XHRcdGQwMjogXCIyNTBcIixcblx0XHRcdGQxMDogXCI1NTBcIixcblx0XHRcdGQxMTogXCI2NTBcIixcblx0XHRcdGQxMjogXCI3NTBcIixcblx0XHRcdGV4YW1wbGVJbWFnZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaW1hZ2VzL2V4YW1wbGUucG5nXCIsXG5cdFx0XHRhY3Rpb25hYmxlVXJsVGl0bGU6IFwiT3BlbkZpbiBXZWJzaXRlXCIsXG5cdFx0XHRhY3Rpb25hYmxlVXJsVG9vbHRpcDogXCJodHRwOi8vd3d3Lm9wZW5maW4uY29cIlxuXHRcdH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIGFuZCBwbGF5IGEgc291bmQgd2l0aCBpdC5cbiAqIEBwYXJhbSBub3RpZmljYXRpb25Tb3VuZFVybCBUaGUgdXJsIG9mIHRoZSBzb3VuZHMgZmlsZSB0byBwbGF5LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93U291bmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uU291bmRVcmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHQvLyB3ZSBkaXNhYmxlIHRoZSBzb3VuZCBpZiBpdCBpcyBlbmFibGVkIGF0IHRoZSBOb3RpZmljYXRpb24gQ2VudGVyIGxldmVsXG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIlNvdW5kIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIG5vdGlmaWNhdGlvbiB3aXRoIHNvdW5kIPCflIlcIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRzb3VuZE9wdGlvbnM6IHsgbW9kZTogXCJzaWxlbnRcIiB9LFxuXHRcdGlkOiByYW5kb21VVUlEKClcblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgcGxheU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Tb3VuZFVybCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgbm90aWZpY2F0aW9uIGNlbnRlci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9uQ2VudGVyVXNlclNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzdGF0dXMgPSBhd2FpdCBOb3RpZmljYXRpb25zLmdldFVzZXJTZXR0aW5nU3RhdHVzKE5vdGlmaWNhdGlvbnMuVXNlclNldHRpbmdzLlNPVU5EX0VOQUJMRUQpO1xuXHRsb2dnaW5nQWRkRW50cnkoYFNvdW5kIEVuYWJsZWQ6ICR7c3RhdHVzfWApO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBub3RpZmljYXRpb24gdGhhdCBoYXMgYW4gaW5kaWNhdG9yIGJhciBvbiB0aGUgbGVmdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0luZGljYXRvck5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiSW5kaWNhdG9yIE5vdGlmaWNhdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGluZGljYXRvcjoge1xuXHRcdFx0dGV4dDogXCJMaW1pdFwiXG5cdFx0fSxcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwiY3VzdG9tXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHR0ZW1wbGF0ZU9wdGlvbnM6IHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0Y29tcG9zaXRpb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWluVGVtcGxhdGVBUElWZXJzaW9uOiBcIjFcIixcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiBcIjEwcHhcIlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJjb250ZW50XCJcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRpbmRpY2F0b3I6IHtcblx0XHRcdFx0YWxpZ246IFwibGVmdFwiLFxuXHRcdFx0XHRjb2xvcjogTm90aWZpY2F0aW9ucy5JbmRpY2F0b3JDb2xvci5SRURcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRlbXBsYXRlRGF0YToge1xuXHRcdFx0Y29udGVudDogXCJUaGlzIGlzIGEgY3VzdG9tIG5vdGlmaWNhdGlvbiB3aXRoIGEgcmVkIGluZGljYXRvciBzaG93aW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSB0b2FzdFwiXG5cdFx0fVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBub3RpZmljYXRpb24gdGhhdCBoYXMgYW4gY3VzdG9tIGluZGljYXRvciBiYXIgY29sb3IgdGhlbWUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dDdXN0b21JbmRpY2F0b3JOb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkN1c3RvbSBJbmRpY2F0b3IgTm90aWZpY2F0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcImN1c3RvbVwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0dGVtcGxhdGVPcHRpb25zOiB7XG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1pblRlbXBsYXRlQVBJVmVyc2lvbjogXCIxXCIsXG5cdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdGdhcDogXCIxMHB4XCJcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiY29udGVudFwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0aW5kaWNhdG9yOiB7XG5cdFx0XHRcdGFsaWduOiBcInJpZ2h0XCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluZGljYXRvcjoge1xuXHRcdFx0Y29sb3I6IFwiY3VzdG9tLWluZGljYXRvclwiLFxuXHRcdFx0ZmFsbGJhY2s6IE5vdGlmaWNhdGlvbnMuSW5kaWNhdG9yQ29sb3IuUkVELFxuXHRcdFx0dGV4dDogXCJBTEVSVCEhIVwiXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZURhdGE6IHtcblx0XHRcdGNvbnRlbnQ6IFwiVGhpcyBpcyBhIGN1c3RvbSBub3RpZmljYXRpb24gd2l0aCBjdXN0b20gaW5kaWNhdG9yIHN0eWxpbmdcIlxuXHRcdH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBQbGF5IGEgc291bmQuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uU291bmRVcmwgVGhlIHVybCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIHBsYXkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBsYXlOb3RpZmljYXRpb24obm90aWZpY2F0aW9uU291bmRVcmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhub3RpZmljYXRpb25Tb3VuZFVybCk7XG5cdGF3YWl0IGF1ZGlvLnBsYXkoKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciB3aGljaCBjaGVja3MgZm9yIHRoZSBjb25uZWN0aW9uIGNoYW5nZWQgZXZlbnQuXG4gKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgY29ubmVjdGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBhZGRDb25uZWN0aW9uQ2hhbmdlZEV2ZW50TGlzdGVuZXIoXG5cdGNhbGxiYWNrOiAoc3RhdHVzOiBOb3RpZmljYXRpb25zLnByb3ZpZGVyLlByb3ZpZGVyU3RhdHVzKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0aWYgKHN0YXR1c0ludGVydmFsSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHN0YXR1c0ludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc3RhdHVzID0gYXdhaXQgTm90aWZpY2F0aW9ucy5wcm92aWRlci5nZXRTdGF0dXMoKTtcblx0XHRcdGlmIChzdGF0dXMuY29ubmVjdGVkICE9PSBsYXN0Q29ubmVjdGlvblN0YXR1cykge1xuXHRcdFx0XHRsYXN0Q29ubmVjdGlvblN0YXR1cyA9IHN0YXR1cy5jb25uZWN0ZWQ7XG5cdFx0XHRcdGNhbGxiYWNrKHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==