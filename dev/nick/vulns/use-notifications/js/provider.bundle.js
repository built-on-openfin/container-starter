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

const NOTIFICATION_SOUND_URL = "https://built-on-openfin.github.io/container-starter/dev/nick/vulns/use-notifications/assets/notification.mp3";
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
            exampleImageUrl: "https://built-on-openfin.github.io/container-starter/dev/nick/vulns/use-notifications/images/example.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9C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eEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsSUFBSSxFQUFFLDhCQUE4QixFQUFFLGdCQUFnQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGdGQUFnRixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsYUFBYTtBQUM1RztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsRUFBRTtBQUN6RSxRQUFRO0FBQ1IsMkNBQTJDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxJQUFJO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLEVBQUUsR0FBRyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLGVBQWU7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaDBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXlIOzs7Ozs7Ozs7OztBQ2xNekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscUJBQU0sZ0JBQWdCLHFCQUFNLElBQUkscUJBQU0sc0JBQXNCLHFCQUFNOztBQUUxRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLFdBQVc7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUNBQXlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FB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QUUsTUFBTTtnREFDaEIsWUFBWSxFQUFFLE1BQU07Z0RBQ3BCLE9BQU8sRUFBRSxLQUFLO2dEQUNkLFVBQVUsRUFBRSxRQUFRO2dEQUNwQixVQUFVLEVBQUUsTUFBTTtnREFDbEIsZUFBZSxFQUFFLE1BQU07NkNBQ3ZCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3dDQUNEOzRDQUNDLElBQUksRUFBRSxNQUFNOzRDQUNaLE9BQU8sRUFBRSxLQUFLOzRDQUNkLEtBQUssRUFBRTtnREFDTixRQUFRLEVBQUUsTUFBTTtnREFDaEIsT0FBTyxFQUFFLEtBQUs7Z0RBQ2QsVUFBVSxFQUFFLFFBQVE7NkNBQ3BCO3lDQUNEO3FDQUNEO2lDQUNEOzZCQUNEO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELFlBQVksRUFBRTtZQUNiLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGVBQWUsRUFBRSxhQUFhO1lBQzlCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLGNBQWM7WUFDaEMsV0FBVyxFQUFFLEtBQUs7WUFDbEIsRUFBRSxFQUFFLE9BQU87WUFDWCxFQUFFLEVBQUUsT0FBTztZQUNYLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxLQUFLO1lBQ1YsZUFBZSxFQUFFLDBDQUEwQztZQUMzRCxrQkFBa0IsRUFBRSxpQkFBaUI7WUFDckMsb0JBQW9CLEVBQUUsdUJBQXVCO1NBQzdDO0tBQ0QsQ0FBQztJQUVGLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixNQUFNLG9FQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUscUJBQXFCLENBQUMsb0JBQTRCO0lBQ2hFLHlFQUF5RTtJQUN6RSxNQUFNLFlBQVksR0FBc0M7UUFDdkQsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDaEMsRUFBRSxFQUFFLFVBQVUsRUFBRTtLQUNoQixDQUFDO0lBRUYsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLE1BQU0sb0VBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsTUFBTSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxpQ0FBaUM7SUFDL0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxrRkFBa0MsK0RBQTBDLENBQUM7SUFDbEcsZUFBZSxDQUFDLGtCQUFrQixNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSx5QkFBeUI7SUFDdkMsTUFBTSxZQUFZLEdBQXNDO1FBQ3ZELEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsS0FBSyxFQUFFLFdBQVc7UUFDbEIsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLE9BQU87U0FDYjtRQUNELFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEVBQUUsRUFBRSxVQUFVLEVBQUU7UUFDaEIsZUFBZSxFQUFFO1lBQ2hCLElBQUksRUFBRTtnQkFDTCxZQUFZLEVBQUU7b0JBQ2I7d0JBQ0MscUJBQXFCLEVBQUUsR0FBRzt3QkFDMUIsTUFBTSxFQUFFOzRCQUNQLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLE1BQU07Z0NBQ2YsYUFBYSxFQUFFLFFBQVE7Z0NBQ3ZCLEdBQUcsRUFBRSxNQUFNOzZCQUNYOzRCQUNELFFBQVEsRUFBRTtnQ0FDVDtvQ0FDQyxJQUFJLEVBQUUsTUFBTTtvQ0FDWixPQUFPLEVBQUUsU0FBUztpQ0FDbEI7NkJBQ0Q7eUJBQ0Q7cUJBQ0Q7aUJBQ0Q7YUFDRDtZQUNELFNBQVMsRUFBRTtnQkFDVixLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsNEVBQTRCLENBQUMsR0FBRzthQUN2QztTQUNEO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsT0FBTyxFQUFFLHFGQUFxRjtTQUM5RjtLQUNELENBQUM7SUFFRixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsTUFBTSxvRUFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsK0JBQStCO0lBQzdDLE1BQU0sWUFBWSxHQUFzQztRQUN2RCxLQUFLLEVBQUUsK0JBQStCO1FBQ3RDLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEVBQUUsRUFBRSxVQUFVLEVBQUU7UUFDaEIsZUFBZSxFQUFFO1lBQ2hCLElBQUksRUFBRTtnQkFDTCxZQUFZLEVBQUU7b0JBQ2I7d0JBQ0MscUJBQXFCLEVBQUUsR0FBRzt3QkFDMUIsTUFBTSxFQUFFOzRCQUNQLElBQUksRUFBRSxXQUFXOzRCQUNqQixLQUFLLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLE1BQU07Z0NBQ2YsYUFBYSxFQUFFLFFBQVE7Z0NBQ3ZCLEdBQUcsRUFBRSxNQUFNOzZCQUNYOzRCQUNELFFBQVEsRUFBRTtnQ0FDVDtvQ0FDQyxJQUFJLEVBQUUsTUFBTTtvQ0FDWixPQUFPLEVBQUUsU0FBUztpQ0FDbEI7NkJBQ0Q7eUJBQ0Q7cUJBQ0Q7aUJBQ0Q7YUFDRDtZQUNELFNBQVMsRUFBRTtnQkFDVixLQUFLLEVBQUUsT0FBTzthQUNkO1NBQ0Q7UUFDRCxTQUFTLEVBQUU7WUFDVixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFFBQVEsRUFBRSw0RUFBNEIsQ0FBQyxHQUFHO1lBQzFDLElBQUksRUFBRSxVQUFVO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsT0FBTyxFQUFFLDZEQUE2RDtTQUN0RTtLQUNELENBQUM7SUFFRixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsTUFBTSxvRUFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGdCQUFnQixDQUFDLG9CQUE0QjtJQUMzRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlDQUFpQyxDQUN6QyxRQUFpRTtJQUVqRSxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3BDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxzRUFBc0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssb0JBQW9CLEVBQUUsQ0FBQztnQkFDL0Msb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDeEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUM7UUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvQG9wZW5maW4vd29ya3NwYWNlL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLXBhcnNlLXN0cmluZ2lmeS9kaXN0L2h0bWwtcGFyc2Utc3RyaW5naWZ5Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL2kxOG5leHQvZGlzdC9janMvaTE4bmV4dC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL2lkYi1rZXl2YWwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL29wZW5maW4tbm90aWZpY2F0aW9ucy9kaXN0L2NsaWVudC93aXRob3V0LWF1dG8tbGF1bmNoLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL0kxOG5leHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9UcmFucy5qcyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy9UcmFuc1dpdGhvdXRDb250ZXh0LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL1RyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvaTE4bkluc3RhbmNlLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2luaXRSZWFjdEkxOG5leHQuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdXNlU1NSLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3VzZVRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3V0aWxzLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3dpdGhTU1IuanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvd2l0aFRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zLy4uLy4uL25vZGVfbW9kdWxlcy92b2lkLWVsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKT0+e3ZhciBlPXs4NDc6KGUsdCk9Pnt2YXIgYT17MjM0NjpmdW5jdGlvbihlLHQsYSl7dmFyIG49dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5nZXRNb3N0UmVhZGFibGU9dC5kYXJrZW5Db2xvcj10LmxpZ2h0ZW5Db2xvcj12b2lkIDA7Y29uc3Qgcj1uKGEoNjUzNSkpO3QubGlnaHRlbkNvbG9yPShlLHQpPT5vKGUsXCJsaWdodGVuXCIsdCksdC5kYXJrZW5Db2xvcj0oZSx0KT0+byhlLFwiZGFya2VuXCIsdCk7Y29uc3Qgbz0oZSx0LGEpPT57aWYoYSYmKGE8MHx8YT4xMDApKXRocm93IG5ldyBFcnJvcihgJHthfSBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMTAwYCk7cmV0dXJuKDAsci5kZWZhdWx0KShlKVt0XShhKS50b1N0cmluZygpfTt0LmdldE1vc3RSZWFkYWJsZT0oZSx0KT0+ci5kZWZhdWx0Lm1vc3RSZWFkYWJsZShlLHQpLnRvSGV4U3RyaW5nKCl9LDIzMTc6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lkljb25TaXplPXQuVHJhbnNpdGlvbj10LkxpbmVIZWlnaHQ9dC5Gb250V2VpZ2h0PXQuRm9udFNpemU9dC5Gb250RmFtaWx5PXQuU2hhZG93PXQuUmFkaXVzPXQuVW5pdFB4PXQuVW5pdD10LlNpemVOYW1lPXQuU2l6ZT10LkNvbG9yPXZvaWQgMCx0LkNvbG9yPXt3aGl0ZTpcIiNGRkZGRkZcIixsaWdodEdyYXkxOlwiI0ZBRkJGRVwiLGxpZ2h0R3JheTI6XCIjRjNGNUY4XCIsbGlnaHRHcmF5MzpcIiNFQ0VFRjFcIixsaWdodEdyYXk0OlwiI0REREZFNFwiLGxpZ2h0R3JheTU6XCIjQzlDQkQyXCIsbmV1dHJhbEdyYXk6XCIjN0Q4MDhBXCIsbmV1dHJhbEdyYXk4MDpcInJnYmEoMTI1LDEyOCwxMzgsMC44KVwiLHNpbHZlckdyYXk6XCIjQzBDMUMyXCIsZGFya0dyYXkxOlwiIzUzNTY1RlwiLGRhcmtHcmF5MjpcIiMzODNBNDBcIixkYXJrR3JheTM6XCIjMkYzMTM2XCIsZGFya0dyYXk0OlwiIzI0MjYyQlwiLGRhcmtHcmF5NTpcIiMxRTFGMjNcIixkYXJrR3JheTY6XCIjMTExMjE0XCIsb3BlbkZpbkRhcmtlc3Q6XCIjM0QzOUNEXCIsb3BlbkZpbkRhcmtlcjpcIiM0NjQyRTBcIixvcGVuRmluOlwiIzUwNENGRlwiLG9wZW5GaW5MaWdodDpcIiM1MjU0RkJcIixvcGVuRmluTGlnaHRlcjpcIiM1QzVFRkVcIixvcGVuRmluTGlnaHRlc3Q6XCIjNjg2NEZGXCIsZnVuY3Rpb25hbDE6XCIjMjA3NzM1XCIsZnVuY3Rpb25hbDI6XCIjNDZDOEYxXCIsZnVuY3Rpb25hbDM6XCIjMEE3NkQzXCIsZnVuY3Rpb25hbDQ6XCIjNkNBREU1XCIsZnVuY3Rpb25hbDU6XCIjMEE3NkQzXCIsZnVuY3Rpb25hbDY6XCIjODgyQkZFXCIsZnVuY3Rpb25hbDc6XCIjRjMxODE4XCIsZnVuY3Rpb25hbDg6XCIjQzkzNDAwXCIsZnVuY3Rpb25hbDk6XCIjRkY1RTYwXCIsZnVuY3Rpb25hbDEwOlwiI0Y0OEYwMFwiLHB1cnBsZTpcIiM4QzYxRkZcIixsaWdodGJsdWU6XCIjMzZDM0ZFXCIsYXF1YTpcIiMwMENDODhcIix5ZWxsb3c6XCIjRkZFQjAwXCIsc2FsbW9uOlwiI0ZGOEM0Q1wiLHBpbms6XCIjRkY1RTYwXCIsbGlnaHRwaW5rOlwiI0ZGOEZCOFwiLHdoaXRlMDA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMClcIix3aGl0ZTEwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjEpXCIsd2hpdGUyMDpcInJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLHdoaXRlMzA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIix3aGl0ZTQwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCIsd2hpdGU1MDpcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLHdoaXRlNjA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNilcIix3aGl0ZTcwOlwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCIsd2hpdGU4MDpcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiLHdoaXRlOTA6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixibGFjazAwOlwicmdiYSgwLDAsMCwwLjApXCIsYmxhY2sxMDpcInJnYmEoMCwwLDAsMC4xKVwiLGJsYWNrMjA6XCJyZ2JhKDAsMCwwLDAuMilcIixibGFjazMwOlwicmdiYSgwLDAsMCwwLjMpXCIsYmxhY2s0MDpcInJnYmEoMCwwLDAsMC40KVwiLGJsYWNrNTA6XCJyZ2JhKDAsMCwwLDAuNSlcIixibGFjazYwOlwicmdiYSgwLDAsMCwwLjYpXCIsYmxhY2s3MDpcInJnYmEoMCwwLDAsMC43KVwiLGJsYWNrODA6XCJyZ2JhKDAsMCwwLDAuOClcIixibGFjazkwOlwicmdiYSgwLDAsMCwwLjkpXCIsdHJhbnNwYXJlbnQ6XCJ0cmFuc3BhcmVudFwifSx0LlNpemU9e3hzbWFsbDpcInhzbWFsbFwiLHNtYWxsOlwic21hbGxcIixiYXNlOlwiYmFzZVwiLGxhcmdlOlwibGFyZ2VcIix4bGFyZ2U6XCJ4bGFyZ2VcIix4eGxhcmdlOlwieHhsYXJnZVwiLHh4eGxhcmdlOlwieHh4bGFyZ2VcIix4eHh4bGFyZ2U6XCJ4eHh4bGFyZ2VcIn0sdC5TaXplTmFtZT17W3QuU2l6ZS54c21hbGxdOlwiRXh0cmEgU21hbGxcIixbdC5TaXplLnNtYWxsXTpcIlNtYWxsXCIsW3QuU2l6ZS5iYXNlXTpcIkJhc2VcIixbdC5TaXplLmxhcmdlXTpcIkxhcmdlXCIsW3QuU2l6ZS54bGFyZ2VdOlwiRXh0cmEgTGFyZ2VcIixbdC5TaXplLnh4bGFyZ2VdOlwiMlggTGFyZ2VcIixbdC5TaXplLnh4eGxhcmdlXTpcIjNYIExhcmdlXCIsW3QuU2l6ZS54eHh4bGFyZ2VdOlwiNFggTGFyZ2VcIn0sdC5Vbml0PXtbdC5TaXplLnhzbWFsbF06NCxbdC5TaXplLnNtYWxsXTo4LFt0LlNpemUuYmFzZV06MTIsW3QuU2l6ZS5sYXJnZV06MTYsW3QuU2l6ZS54bGFyZ2VdOjIwLFt0LlNpemUueHhsYXJnZV06MjQsW3QuU2l6ZS54eHhsYXJnZV06MzIsW3QuU2l6ZS54eHh4bGFyZ2VdOjQ4fSx0LlVuaXRQeD17W3QuU2l6ZS54c21hbGxdOlwiNHB4XCIsW3QuU2l6ZS5zbWFsbF06XCI4cHhcIixbdC5TaXplLmJhc2VdOlwiMTJweFwiLFt0LlNpemUubGFyZ2VdOlwiMTZweFwiLFt0LlNpemUueGxhcmdlXTpcIjIwcHhcIixbdC5TaXplLnh4bGFyZ2VdOlwiMjRweFwiLFt0LlNpemUueHh4bGFyZ2VdOlwiMzJweFwiLFt0LlNpemUueHh4eGxhcmdlXTpcIjQ4cHhcIn0sdC5SYWRpdXM9e1t0LlNpemUueHNtYWxsXTpcIjJweFwiLFt0LlNpemUuc21hbGxdOlwiNHB4XCIsW3QuU2l6ZS5iYXNlXTpcIjhweFwiLFt0LlNpemUubGFyZ2VdOlwiMjRweFwiLHBpbGw6XCIxMDB2aFwiLHJvdW5kOlwiNTAlXCIsbm9uZTpcIjBcIn0sdC5TaGFkb3c9e1t0LlNpemUuYmFzZV06XCIwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KVwifSx0LkZvbnRGYW1pbHk9W1wiSW50ZXJcIixcInN5c3RlbS11aVwiLFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsXCJTZWdvZSBVSVwiLFwiUm9ib3RvXCIsXCJPeHlnZW4tU2Fuc1wiLFwiVWJ1bnR1XCIsXCJDYW50YXJlbGxcIixcIkhlbHZldGljYSBOZXVlXCIsXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLHQuRm9udFNpemU9e1t0LlNpemUueHNtYWxsXTpcIjhweFwiLFt0LlNpemUuc21hbGxdOlwiMTBweFwiLFt0LlNpemUuYmFzZV06XCIxMnB4XCIsW3QuU2l6ZS5sYXJnZV06XCIxNHB4XCIsW3QuU2l6ZS54bGFyZ2VdOlwiMTZweFwiLFt0LlNpemUueHhsYXJnZV06XCIxOHB4XCIsW3QuU2l6ZS54eHhsYXJnZV06XCIyMHB4XCIsW3QuU2l6ZS54eHh4bGFyZ2VdOlwiNDBweFwifSx0LkZvbnRXZWlnaHQ9e25vcm1hbDo0MDAsYm9sZDo2MDB9LHQuTGluZUhlaWdodD17dWk6MSxoZWFkaW5nOjEuMix0ZXh0OjEuNX0sdC5UcmFuc2l0aW9uPXtiYXNlOlwiMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSlcIixub25lOlwiMG1zXCJ9LHQuSWNvblNpemU9e1t0LlNpemUueHNtYWxsXTp0LlVuaXRQeC5zbWFsbCxbdC5TaXplLnNtYWxsXTp0LlVuaXRQeC5iYXNlLFt0LlNpemUuYmFzZV06XCIxNXB4XCIsW3QuU2l6ZS5sYXJnZV06dC5Vbml0UHgueGxhcmdlLFt0LlNpemUueGxhcmdlXTp0LlVuaXRQeC54eGxhcmdlLFt0LlNpemUueHhsYXJnZV06dC5Vbml0UHgueHh4bGFyZ2UsW3QuU2l6ZS54eHhsYXJnZV06dC5Vbml0UHgueHh4eGxhcmdlfX0sNjg5MzooZSx0LGEpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5jcmVhdGVUaGVtZT12b2lkIDA7Y29uc3Qgbj1hKDIzMTcpLHI9YSgyMzQ2KSxvPWEoNTkzOSksaT17Zm9udEZhbWlseTpuLkZvbnRGYW1pbHksZm9udFNpemU6bi5Gb250U2l6ZSxmb250V2VpZ2h0Om4uRm9udFdlaWdodCxsaW5lSGVpZ2h0Om4uTGluZUhlaWdodCxpY29uU2l6ZTpuLkljb25TaXplLHJhZGl1czpuLlJhZGl1cyxzaGFkb3c6bi5TaGFkb3csdHJhbnNpdGlvbjpuLlRyYW5zaXRpb24sdW5pdDpuLlVuaXQscHg6bi5Vbml0UHh9LHM9KGUsdCk9Pih7W2Ake2V9QWN0aXZlYF06KDAsci5kYXJrZW5Db2xvcikodCwyKSxbYCR7ZX1Ib3ZlcmBdOigwLHIubGlnaHRlbkNvbG9yKSh0LDUpLFtgJHtlfUZvY3VzZWRgXTooMCxyLmdldE1vc3RSZWFkYWJsZSkodCxbbi5Db2xvci53aGl0ZSxuLkNvbG9yLmRhcmtHcmF5NV0pLFtgJHtlfVRleHRgXTooMCxyLmdldE1vc3RSZWFkYWJsZSkodCxbbi5Db2xvci53aGl0ZSxuLkNvbG9yLmRhcmtHcmF5NV0pfSk7dC5jcmVhdGVUaGVtZT1lPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30saSkse3BhbGV0dGU6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkscyhvLlBhbGV0dGUuYnJhbmRQcmltYXJ5LGUuYnJhbmRQcmltYXJ5KSkscyhvLlBhbGV0dGUuYnJhbmRTZWNvbmRhcnksZS5icmFuZFNlY29uZGFyeSkpfSl9LDU5Mzk6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlBhbGV0dGU9dm9pZCAwLHQuUGFsZXR0ZT17YmFja2dyb3VuZDE6XCJiYWNrZ3JvdW5kMVwiLGJhY2tncm91bmQyOlwiYmFja2dyb3VuZDJcIixiYWNrZ3JvdW5kMzpcImJhY2tncm91bmQzXCIsYmFja2dyb3VuZDQ6XCJiYWNrZ3JvdW5kNFwiLGJhY2tncm91bmQ1OlwiYmFja2dyb3VuZDVcIixiYWNrZ3JvdW5kNjpcImJhY2tncm91bmQ2XCIsYnJhbmRQcmltYXJ5OlwiYnJhbmRQcmltYXJ5XCIsYnJhbmRTZWNvbmRhcnk6XCJicmFuZFNlY29uZGFyeVwiLGJyYW5kUHJpbWFyeUFjdGl2ZTpcImJyYW5kUHJpbWFyeUFjdGl2ZVwiLGJyYW5kUHJpbWFyeUhvdmVyOlwiYnJhbmRQcmltYXJ5SG92ZXJcIixicmFuZFByaW1hcnlGb2N1c2VkOlwiYnJhbmRQcmltYXJ5Rm9jdXNlZFwiLGJyYW5kUHJpbWFyeVRleHQ6XCJicmFuZFByaW1hcnlUZXh0XCIsYnJhbmRTZWNvbmRhcnlBY3RpdmU6XCJicmFuZFNlY29uZGFyeUFjdGl2ZVwiLGJyYW5kU2Vjb25kYXJ5SG92ZXI6XCJicmFuZFNlY29uZGFyeUhvdmVyXCIsYnJhbmRTZWNvbmRhcnlGb2N1c2VkOlwiYnJhbmRTZWNvbmRhcnlGb2N1c2VkXCIsYnJhbmRTZWNvbmRhcnlUZXh0OlwiYnJhbmRTZWNvbmRhcnlUZXh0XCIsaW5wdXRCYWNrZ3JvdW5kOlwiaW5wdXRCYWNrZ3JvdW5kXCIsaW5wdXRDb2xvcjpcImlucHV0Q29sb3JcIixpbnB1dFBsYWNlaG9sZGVyOlwiaW5wdXRQbGFjZWhvbGRlclwiLGlucHV0RGlzYWJsZWQ6XCJpbnB1dERpc2FibGVkXCIsaW5wdXRGb2N1c2VkOlwiaW5wdXRGb2N1c2VkXCIsaW5wdXRCb3JkZXI6XCJpbnB1dEJvcmRlclwiLHN0YXR1c1N1Y2Nlc3M6XCJzdGF0dXNTdWNjZXNzXCIsc3RhdHVzV2FybmluZzpcInN0YXR1c1dhcm5pbmdcIixzdGF0dXNDcml0aWNhbDpcInN0YXR1c0NyaXRpY2FsXCIsc3RhdHVzQWN0aXZlOlwic3RhdHVzQWN0aXZlXCIsdGV4dERlZmF1bHQ6XCJ0ZXh0RGVmYXVsdFwiLHRleHRIZWxwOlwidGV4dEhlbHBcIix0ZXh0SW5hY3RpdmU6XCJ0ZXh0SW5hY3RpdmVcIixib3JkZXJOZXV0cmFsOlwiYm9yZGVyTmV1dHJhbFwiLGNvbnRlbnRCYWNrZ3JvdW5kMTpcImNvbnRlbnRCYWNrZ3JvdW5kMVwiLGNvbnRlbnRCYWNrZ3JvdW5kMjpcImNvbnRlbnRCYWNrZ3JvdW5kMlwiLGNvbnRlbnRCYWNrZ3JvdW5kMzpcImNvbnRlbnRCYWNrZ3JvdW5kM1wiLGNvbnRlbnRCYWNrZ3JvdW5kNDpcImNvbnRlbnRCYWNrZ3JvdW5kNFwiLGNvbnRlbnRCYWNrZ3JvdW5kNTpcImNvbnRlbnRCYWNrZ3JvdW5kNVwiLGxpbmtEZWZhdWx0OlwibGlua0RlZmF1bHRcIixsaW5rSG92ZXI6XCJsaW5rSG92ZXJcIn19LDY1MzU6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtyZXR1cm4oZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkodCl9dmFyIHQ9L15cXHMrLyxhPS9cXHMrJC87ZnVuY3Rpb24gbihyLG8pe2lmKG89b3x8e30sKHI9cnx8XCJcIilpbnN0YW5jZW9mIG4pcmV0dXJuIHI7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpcmV0dXJuIG5ldyBuKHIsbyk7dmFyIGk9ZnVuY3Rpb24obil7dmFyIHIsbyxpLHM9e3I6MCxnOjAsYjowfSxjPTEsbD1udWxsLGQ9bnVsbCx1PW51bGwsaD0hMSxnPSExO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1mdW5jdGlvbihlKXtlPWUucmVwbGFjZSh0LFwiXCIpLnJlcGxhY2UoYSxcIlwiKS50b0xvd2VyQ2FzZSgpO3ZhciBuLHI9ITE7aWYoa1tlXSllPWtbZV0scj0hMDtlbHNlIGlmKFwidHJhbnNwYXJlbnRcIj09ZSlyZXR1cm57cjowLGc6MCxiOjAsYTowLGZvcm1hdDpcIm5hbWVcIn07cmV0dXJuKG49RC5yZ2IuZXhlYyhlKSk/e3I6blsxXSxnOm5bMl0sYjpuWzNdfToobj1ELnJnYmEuZXhlYyhlKSk/e3I6blsxXSxnOm5bMl0sYjpuWzNdLGE6bls0XX06KG49RC5oc2wuZXhlYyhlKSk/e2g6blsxXSxzOm5bMl0sbDpuWzNdfToobj1ELmhzbGEuZXhlYyhlKSk/e2g6blsxXSxzOm5bMl0sbDpuWzNdLGE6bls0XX06KG49RC5oc3YuZXhlYyhlKSk/e2g6blsxXSxzOm5bMl0sdjpuWzNdfToobj1ELmhzdmEuZXhlYyhlKSk/e2g6blsxXSxzOm5bMl0sdjpuWzNdLGE6bls0XX06KG49RC5oZXg4LmV4ZWMoZSkpP3tyOngoblsxXSksZzp4KG5bMl0pLGI6eChuWzNdKSxhOk0obls0XSksZm9ybWF0OnI/XCJuYW1lXCI6XCJoZXg4XCJ9OihuPUQuaGV4Ni5leGVjKGUpKT97cjp4KG5bMV0pLGc6eChuWzJdKSxiOngoblszXSksZm9ybWF0OnI/XCJuYW1lXCI6XCJoZXhcIn06KG49RC5oZXg0LmV4ZWMoZSkpP3tyOngoblsxXStcIlwiK25bMV0pLGc6eChuWzJdK1wiXCIrblsyXSksYjp4KG5bM10rXCJcIituWzNdKSxhOk0obls0XStcIlwiK25bNF0pLGZvcm1hdDpyP1wibmFtZVwiOlwiaGV4OFwifTohIShuPUQuaGV4My5leGVjKGUpKSYme3I6eChuWzFdK1wiXCIrblsxXSksZzp4KG5bMl0rXCJcIituWzJdKSxiOngoblszXStcIlwiK25bM10pLGZvcm1hdDpyP1wibmFtZVwiOlwiaGV4XCJ9fShuKSksXCJvYmplY3RcIj09ZShuKSYmKEIobi5yKSYmQihuLmcpJiZCKG4uYik/KHI9bi5yLG89bi5nLGk9bi5iLHM9e3I6MjU1KlAociwyNTUpLGc6MjU1KlAobywyNTUpLGI6MjU1KlAoaSwyNTUpfSxoPSEwLGc9XCIlXCI9PT1TdHJpbmcobi5yKS5zdWJzdHIoLTEpP1wicHJnYlwiOlwicmdiXCIpOkIobi5oKSYmQihuLnMpJiZCKG4udik/KGw9RihuLnMpLGQ9RihuLnYpLHM9ZnVuY3Rpb24oZSx0LGEpe2U9NipQKGUsMzYwKSx0PVAodCwxMDApLGE9UChhLDEwMCk7dmFyIG49TWF0aC5mbG9vcihlKSxyPWUtbixvPWEqKDEtdCksaT1hKigxLXIqdCkscz1hKigxLSgxLXIpKnQpLGM9biU2O3JldHVybntyOjI1NSpbYSxpLG8sbyxzLGFdW2NdLGc6MjU1KltzLGEsYSxpLG8sb11bY10sYjoyNTUqW28sbyxzLGEsYSxpXVtjXX19KG4uaCxsLGQpLGg9ITAsZz1cImhzdlwiKTpCKG4uaCkmJkIobi5zKSYmQihuLmwpJiYobD1GKG4ucyksdT1GKG4ubCkscz1mdW5jdGlvbihlLHQsYSl7dmFyIG4scixvO2Z1bmN0aW9uIGkoZSx0LGEpe3JldHVybiBhPDAmJihhKz0xKSxhPjEmJihhLT0xKSxhPDEvNj9lKzYqKHQtZSkqYTphPC41P3Q6YTwyLzM/ZSsodC1lKSooMi8zLWEpKjY6ZX1pZihlPVAoZSwzNjApLHQ9UCh0LDEwMCksYT1QKGEsMTAwKSwwPT09dCluPXI9bz1hO2Vsc2V7dmFyIHM9YTwuNT9hKigxK3QpOmErdC1hKnQsYz0yKmEtcztuPWkoYyxzLGUrMS8zKSxyPWkoYyxzLGUpLG89aShjLHMsZS0xLzMpfXJldHVybntyOjI1NSpuLGc6MjU1KnIsYjoyNTUqb319KG4uaCxsLHUpLGg9ITAsZz1cImhzbFwiKSxuLmhhc093blByb3BlcnR5KFwiYVwiKSYmKGM9bi5hKSksYz12KGMpLHtvazpoLGZvcm1hdDpuLmZvcm1hdHx8ZyxyOk1hdGgubWluKDI1NSxNYXRoLm1heChzLnIsMCkpLGc6TWF0aC5taW4oMjU1LE1hdGgubWF4KHMuZywwKSksYjpNYXRoLm1pbigyNTUsTWF0aC5tYXgocy5iLDApKSxhOmN9fShyKTt0aGlzLl9vcmlnaW5hbElucHV0PXIsdGhpcy5fcj1pLnIsdGhpcy5fZz1pLmcsdGhpcy5fYj1pLmIsdGhpcy5fYT1pLmEsdGhpcy5fcm91bmRBPU1hdGgucm91bmQoMTAwKnRoaXMuX2EpLzEwMCx0aGlzLl9mb3JtYXQ9by5mb3JtYXR8fGkuZm9ybWF0LHRoaXMuX2dyYWRpZW50VHlwZT1vLmdyYWRpZW50VHlwZSx0aGlzLl9yPDEmJih0aGlzLl9yPU1hdGgucm91bmQodGhpcy5fcikpLHRoaXMuX2c8MSYmKHRoaXMuX2c9TWF0aC5yb3VuZCh0aGlzLl9nKSksdGhpcy5fYjwxJiYodGhpcy5fYj1NYXRoLnJvdW5kKHRoaXMuX2IpKSx0aGlzLl9vaz1pLm9rfWZ1bmN0aW9uIHIoZSx0LGEpe2U9UChlLDI1NSksdD1QKHQsMjU1KSxhPVAoYSwyNTUpO3ZhciBuLHIsbz1NYXRoLm1heChlLHQsYSksaT1NYXRoLm1pbihlLHQsYSkscz0obytpKS8yO2lmKG89PWkpbj1yPTA7ZWxzZXt2YXIgYz1vLWk7c3dpdGNoKHI9cz4uNT9jLygyLW8taSk6Yy8obytpKSxvKXtjYXNlIGU6bj0odC1hKS9jKyh0PGE/NjowKTticmVhaztjYXNlIHQ6bj0oYS1lKS9jKzI7YnJlYWs7Y2FzZSBhOm49KGUtdCkvYys0fW4vPTZ9cmV0dXJue2g6bixzOnIsbDpzfX1mdW5jdGlvbiBvKGUsdCxhKXtlPVAoZSwyNTUpLHQ9UCh0LDI1NSksYT1QKGEsMjU1KTt2YXIgbixyLG89TWF0aC5tYXgoZSx0LGEpLGk9TWF0aC5taW4oZSx0LGEpLHM9byxjPW8taTtpZihyPTA9PT1vPzA6Yy9vLG89PWkpbj0wO2Vsc2V7c3dpdGNoKG8pe2Nhc2UgZTpuPSh0LWEpL2MrKHQ8YT82OjApO2JyZWFrO2Nhc2UgdDpuPShhLWUpL2MrMjticmVhaztjYXNlIGE6bj0oZS10KS9jKzR9bi89Nn1yZXR1cm57aDpuLHM6cix2OnN9fWZ1bmN0aW9uIGkoZSx0LGEsbil7dmFyIHI9W0EoTWF0aC5yb3VuZChlKS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZCh0KS50b1N0cmluZygxNikpLEEoTWF0aC5yb3VuZChhKS50b1N0cmluZygxNikpXTtyZXR1cm4gbiYmclswXS5jaGFyQXQoMCk9PXJbMF0uY2hhckF0KDEpJiZyWzFdLmNoYXJBdCgwKT09clsxXS5jaGFyQXQoMSkmJnJbMl0uY2hhckF0KDApPT1yWzJdLmNoYXJBdCgxKT9yWzBdLmNoYXJBdCgwKStyWzFdLmNoYXJBdCgwKStyWzJdLmNoYXJBdCgwKTpyLmpvaW4oXCJcIil9ZnVuY3Rpb24gcyhlLHQsYSxuKXtyZXR1cm5bQShfKG4pKSxBKE1hdGgucm91bmQoZSkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQodCkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQoYSkudG9TdHJpbmcoMTYpKV0uam9pbihcIlwiKX1mdW5jdGlvbiBjKGUsdCl7dD0wPT09dD8wOnR8fDEwO3ZhciBhPW4oZSkudG9Ic2woKTtyZXR1cm4gYS5zLT10LzEwMCxhLnM9QyhhLnMpLG4oYSl9ZnVuY3Rpb24gbChlLHQpe3Q9MD09PXQ/MDp0fHwxMDt2YXIgYT1uKGUpLnRvSHNsKCk7cmV0dXJuIGEucys9dC8xMDAsYS5zPUMoYS5zKSxuKGEpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIG4oZSkuZGVzYXR1cmF0ZSgxMDApfWZ1bmN0aW9uIHUoZSx0KXt0PTA9PT10PzA6dHx8MTA7dmFyIGE9bihlKS50b0hzbCgpO3JldHVybiBhLmwrPXQvMTAwLGEubD1DKGEubCksbihhKX1mdW5jdGlvbiBoKGUsdCl7dD0wPT09dD8wOnR8fDEwO3ZhciBhPW4oZSkudG9SZ2IoKTtyZXR1cm4gYS5yPU1hdGgubWF4KDAsTWF0aC5taW4oMjU1LGEuci1NYXRoLnJvdW5kKC10LzEwMCoyNTUpKSksYS5nPU1hdGgubWF4KDAsTWF0aC5taW4oMjU1LGEuZy1NYXRoLnJvdW5kKC10LzEwMCoyNTUpKSksYS5iPU1hdGgubWF4KDAsTWF0aC5taW4oMjU1LGEuYi1NYXRoLnJvdW5kKC10LzEwMCoyNTUpKSksbihhKX1mdW5jdGlvbiBnKGUsdCl7dD0wPT09dD8wOnR8fDEwO3ZhciBhPW4oZSkudG9Ic2woKTtyZXR1cm4gYS5sLT10LzEwMCxhLmw9QyhhLmwpLG4oYSl9ZnVuY3Rpb24gcChlLHQpe3ZhciBhPW4oZSkudG9Ic2woKSxyPShhLmgrdCklMzYwO3JldHVybiBhLmg9cjwwPzM2MCtyOnIsbihhKX1mdW5jdGlvbiBmKGUpe3ZhciB0PW4oZSkudG9Ic2woKTtyZXR1cm4gdC5oPSh0LmgrMTgwKSUzNjAsbih0KX1mdW5jdGlvbiBtKGUsdCl7aWYoaXNOYU4odCl8fHQ8PTApdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgdG8gcG9seWFkIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7Zm9yKHZhciBhPW4oZSkudG9Ic2woKSxyPVtuKGUpXSxvPTM2MC90LGk9MTtpPHQ7aSsrKXIucHVzaChuKHtoOihhLmgraSpvKSUzNjAsczphLnMsbDphLmx9KSk7cmV0dXJuIHJ9ZnVuY3Rpb24gdyhlKXt2YXIgdD1uKGUpLnRvSHNsKCksYT10Lmg7cmV0dXJuW24oZSksbih7aDooYSs3MiklMzYwLHM6dC5zLGw6dC5sfSksbih7aDooYSsyMTYpJTM2MCxzOnQucyxsOnQubH0pXX1mdW5jdGlvbiB5KGUsdCxhKXt0PXR8fDYsYT1hfHwzMDt2YXIgcj1uKGUpLnRvSHNsKCksbz0zNjAvYSxpPVtuKGUpXTtmb3Ioci5oPShyLmgtKG8qdD4+MSkrNzIwKSUzNjA7LS10OylyLmg9KHIuaCtvKSUzNjAsaS5wdXNoKG4ocikpO3JldHVybiBpfWZ1bmN0aW9uIGIoZSx0KXt0PXR8fDY7Zm9yKHZhciBhPW4oZSkudG9Ic3YoKSxyPWEuaCxvPWEucyxpPWEudixzPVtdLGM9MS90O3QtLTspcy5wdXNoKG4oe2g6cixzOm8sdjppfSkpLGk9KGkrYyklMTtyZXR1cm4gc31uLnByb3RvdHlwZT17aXNEYXJrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpPDEyOH0saXNMaWdodDpmdW5jdGlvbigpe3JldHVybiF0aGlzLmlzRGFyaygpfSxpc1ZhbGlkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29rfSxnZXRPcmlnaW5hbElucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29yaWdpbmFsSW5wdXR9LGdldEZvcm1hdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb3JtYXR9LGdldEFscGhhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2F9LGdldEJyaWdodG5lc3M6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnRvUmdiKCk7cmV0dXJuKDI5OSplLnIrNTg3KmUuZysxMTQqZS5iKS8xZTN9LGdldEx1bWluYW5jZTpmdW5jdGlvbigpe3ZhciBlLHQsYSxuPXRoaXMudG9SZ2IoKTtyZXR1cm4gZT1uLnIvMjU1LHQ9bi5nLzI1NSxhPW4uYi8yNTUsLjIxMjYqKGU8PS4wMzkyOD9lLzEyLjkyOk1hdGgucG93KChlKy4wNTUpLzEuMDU1LDIuNCkpKy43MTUyKih0PD0uMDM5Mjg/dC8xMi45MjpNYXRoLnBvdygodCsuMDU1KS8xLjA1NSwyLjQpKSsuMDcyMiooYTw9LjAzOTI4P2EvMTIuOTI6TWF0aC5wb3coKGErLjA1NSkvMS4wNTUsMi40KSl9LHNldEFscGhhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9hPXYoZSksdGhpcy5fcm91bmRBPU1hdGgucm91bmQoMTAwKnRoaXMuX2EpLzEwMCx0aGlzfSx0b0hzdjpmdW5jdGlvbigpe3ZhciBlPW8odGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpO3JldHVybntoOjM2MCplLmgsczplLnMsdjplLnYsYTp0aGlzLl9hfX0sdG9Ic3ZTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgZT1vKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKSx0PU1hdGgucm91bmQoMzYwKmUuaCksYT1NYXRoLnJvdW5kKDEwMCplLnMpLG49TWF0aC5yb3VuZCgxMDAqZS52KTtyZXR1cm4gMT09dGhpcy5fYT9cImhzdihcIit0K1wiLCBcIithK1wiJSwgXCIrbitcIiUpXCI6XCJoc3ZhKFwiK3QrXCIsIFwiK2ErXCIlLCBcIituK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b0hzbDpmdW5jdGlvbigpe3ZhciBlPXIodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpO3JldHVybntoOjM2MCplLmgsczplLnMsbDplLmwsYTp0aGlzLl9hfX0sdG9Ic2xTdHJpbmc6ZnVuY3Rpb24oKXt2YXIgZT1yKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKSx0PU1hdGgucm91bmQoMzYwKmUuaCksYT1NYXRoLnJvdW5kKDEwMCplLnMpLG49TWF0aC5yb3VuZCgxMDAqZS5sKTtyZXR1cm4gMT09dGhpcy5fYT9cImhzbChcIit0K1wiLCBcIithK1wiJSwgXCIrbitcIiUpXCI6XCJoc2xhKFwiK3QrXCIsIFwiK2ErXCIlLCBcIituK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b0hleDpmdW5jdGlvbihlKXtyZXR1cm4gaSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYixlKX0sdG9IZXhTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIjXCIrdGhpcy50b0hleChlKX0sdG9IZXg4OmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlLHQsYSxuLHIpe3ZhciBvPVtBKE1hdGgucm91bmQoZSkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQodCkudG9TdHJpbmcoMTYpKSxBKE1hdGgucm91bmQoYSkudG9TdHJpbmcoMTYpKSxBKF8obikpXTtyZXR1cm4gciYmb1swXS5jaGFyQXQoMCk9PW9bMF0uY2hhckF0KDEpJiZvWzFdLmNoYXJBdCgwKT09b1sxXS5jaGFyQXQoMSkmJm9bMl0uY2hhckF0KDApPT1vWzJdLmNoYXJBdCgxKSYmb1szXS5jaGFyQXQoMCk9PW9bM10uY2hhckF0KDEpP29bMF0uY2hhckF0KDApK29bMV0uY2hhckF0KDApK29bMl0uY2hhckF0KDApK29bM10uY2hhckF0KDApOm8uam9pbihcIlwiKX0odGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsdGhpcy5fYSxlKX0sdG9IZXg4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXg4KGUpfSx0b1JnYjpmdW5jdGlvbigpe3JldHVybntyOk1hdGgucm91bmQodGhpcy5fciksZzpNYXRoLnJvdW5kKHRoaXMuX2cpLGI6TWF0aC5yb3VuZCh0aGlzLl9iKSxhOnRoaXMuX2F9fSx0b1JnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK01hdGgucm91bmQodGhpcy5fcikrXCIsIFwiK01hdGgucm91bmQodGhpcy5fZykrXCIsIFwiK01hdGgucm91bmQodGhpcy5fYikrXCIpXCI6XCJyZ2JhKFwiK01hdGgucm91bmQodGhpcy5fcikrXCIsIFwiK01hdGgucm91bmQodGhpcy5fZykrXCIsIFwiK01hdGgucm91bmQodGhpcy5fYikrXCIsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9QZXJjZW50YWdlUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6TWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9yLDI1NSkpK1wiJVwiLGc6TWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9nLDI1NSkpK1wiJVwiLGI6TWF0aC5yb3VuZCgxMDAqUCh0aGlzLl9iLDI1NSkpK1wiJVwiLGE6dGhpcy5fYX19LHRvUGVyY2VudGFnZVJnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fciwyNTUpKStcIiUsIFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fZywyNTUpKStcIiUsIFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fYiwyNTUpKStcIiUpXCI6XCJyZ2JhKFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fciwyNTUpKStcIiUsIFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fZywyNTUpKStcIiUsIFwiK01hdGgucm91bmQoMTAwKlAodGhpcy5fYiwyNTUpKStcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9OYW1lOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLl9hP1widHJhbnNwYXJlbnRcIjohKHRoaXMuX2E8MSkmJihTW2kodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsITApXXx8ITEpfSx0b0ZpbHRlcjpmdW5jdGlvbihlKXt2YXIgdD1cIiNcIitzKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EpLGE9dCxyPXRoaXMuX2dyYWRpZW50VHlwZT9cIkdyYWRpZW50VHlwZSA9IDEsIFwiOlwiXCI7aWYoZSl7dmFyIG89bihlKTthPVwiI1wiK3Moby5fcixvLl9nLG8uX2Isby5fYSl9cmV0dXJuXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrcitcInN0YXJ0Q29sb3JzdHI9XCIrdCtcIixlbmRDb2xvcnN0cj1cIithK1wiKVwifSx0b1N0cmluZzpmdW5jdGlvbihlKXt2YXIgdD0hIWU7ZT1lfHx0aGlzLl9mb3JtYXQ7dmFyIGE9ITEsbj10aGlzLl9hPDEmJnRoaXMuX2E+PTA7cmV0dXJuIHR8fCFufHxcImhleFwiIT09ZSYmXCJoZXg2XCIhPT1lJiZcImhleDNcIiE9PWUmJlwiaGV4NFwiIT09ZSYmXCJoZXg4XCIhPT1lJiZcIm5hbWVcIiE9PWU/KFwicmdiXCI9PT1lJiYoYT10aGlzLnRvUmdiU3RyaW5nKCkpLFwicHJnYlwiPT09ZSYmKGE9dGhpcy50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKSksXCJoZXhcIiE9PWUmJlwiaGV4NlwiIT09ZXx8KGE9dGhpcy50b0hleFN0cmluZygpKSxcImhleDNcIj09PWUmJihhPXRoaXMudG9IZXhTdHJpbmcoITApKSxcImhleDRcIj09PWUmJihhPXRoaXMudG9IZXg4U3RyaW5nKCEwKSksXCJoZXg4XCI9PT1lJiYoYT10aGlzLnRvSGV4OFN0cmluZygpKSxcIm5hbWVcIj09PWUmJihhPXRoaXMudG9OYW1lKCkpLFwiaHNsXCI9PT1lJiYoYT10aGlzLnRvSHNsU3RyaW5nKCkpLFwiaHN2XCI9PT1lJiYoYT10aGlzLnRvSHN2U3RyaW5nKCkpLGF8fHRoaXMudG9IZXhTdHJpbmcoKSk6XCJuYW1lXCI9PT1lJiYwPT09dGhpcy5fYT90aGlzLnRvTmFtZSgpOnRoaXMudG9SZ2JTdHJpbmcoKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLnRvU3RyaW5nKCkpfSxfYXBwbHlNb2RpZmljYXRpb246ZnVuY3Rpb24oZSx0KXt2YXIgYT1lLmFwcGx5KG51bGwsW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKHQpKSk7cmV0dXJuIHRoaXMuX3I9YS5fcix0aGlzLl9nPWEuX2csdGhpcy5fYj1hLl9iLHRoaXMuc2V0QWxwaGEoYS5fYSksdGhpc30sbGlnaHRlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbih1LGFyZ3VtZW50cyl9LGJyaWdodGVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGgsYXJndW1lbnRzKX0sZGFya2VuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGcsYXJndW1lbnRzKX0sZGVzYXR1cmF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihjLGFyZ3VtZW50cyl9LHNhdHVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGwsYXJndW1lbnRzKX0sZ3JleXNjYWxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGQsYXJndW1lbnRzKX0sc3BpbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihwLGFyZ3VtZW50cyl9LF9hcHBseUNvbWJpbmF0aW9uOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuYXBwbHkobnVsbCxbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwodCkpKX0sYW5hbG9nb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oeSxhcmd1bWVudHMpfSxjb21wbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oZixhcmd1bWVudHMpfSxtb25vY2hyb21hdGljOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oYixhcmd1bWVudHMpfSxzcGxpdGNvbXBsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih3LGFyZ3VtZW50cyl9LHRyaWFkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24obSxbM10pfSx0ZXRyYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihtLFs0XSl9fSxuLmZyb21SYXRpbz1mdW5jdGlvbih0LGEpe2lmKFwib2JqZWN0XCI9PWUodCkpe3ZhciByPXt9O2Zvcih2YXIgbyBpbiB0KXQuaGFzT3duUHJvcGVydHkobykmJihyW29dPVwiYVwiPT09bz90W29dOkYodFtvXSkpO3Q9cn1yZXR1cm4gbih0LGEpfSxuLmVxdWFscz1mdW5jdGlvbihlLHQpe3JldHVybiEoIWV8fCF0KSYmbihlKS50b1JnYlN0cmluZygpPT1uKHQpLnRvUmdiU3RyaW5nKCl9LG4ucmFuZG9tPWZ1bmN0aW9uKCl7cmV0dXJuIG4uZnJvbVJhdGlvKHtyOk1hdGgucmFuZG9tKCksZzpNYXRoLnJhbmRvbSgpLGI6TWF0aC5yYW5kb20oKX0pfSxuLm1peD1mdW5jdGlvbihlLHQsYSl7YT0wPT09YT8wOmF8fDUwO3ZhciByPW4oZSkudG9SZ2IoKSxvPW4odCkudG9SZ2IoKSxpPWEvMTAwO3JldHVybiBuKHtyOihvLnItci5yKSppK3IucixnOihvLmctci5nKSppK3IuZyxiOihvLmItci5iKSppK3IuYixhOihvLmEtci5hKSppK3IuYX0pfSxuLnJlYWRhYmlsaXR5PWZ1bmN0aW9uKGUsdCl7dmFyIGE9bihlKSxyPW4odCk7cmV0dXJuKE1hdGgubWF4KGEuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KS8oTWF0aC5taW4oYS5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpfSxuLmlzUmVhZGFibGU9ZnVuY3Rpb24oZSx0LGEpe3ZhciByLG8saSxzLGMsbD1uLnJlYWRhYmlsaXR5KGUsdCk7c3dpdGNoKG89ITEsKGk9YSxcIkFBXCIhPT0ocz0oKGk9aXx8e2xldmVsOlwiQUFcIixzaXplOlwic21hbGxcIn0pLmxldmVsfHxcIkFBXCIpLnRvVXBwZXJDYXNlKCkpJiZcIkFBQVwiIT09cyYmKHM9XCJBQVwiKSxcInNtYWxsXCIhPT0oYz0oaS5zaXplfHxcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCkpJiZcImxhcmdlXCIhPT1jJiYoYz1cInNtYWxsXCIpLHI9e2xldmVsOnMsc2l6ZTpjfSkubGV2ZWwrci5zaXplKXtjYXNlXCJBQXNtYWxsXCI6Y2FzZVwiQUFBbGFyZ2VcIjpvPWw+PTQuNTticmVhaztjYXNlXCJBQWxhcmdlXCI6bz1sPj0zO2JyZWFrO2Nhc2VcIkFBQXNtYWxsXCI6bz1sPj03fXJldHVybiBvfSxuLm1vc3RSZWFkYWJsZT1mdW5jdGlvbihlLHQsYSl7dmFyIHIsbyxpLHMsYz1udWxsLGw9MDtvPShhPWF8fHt9KS5pbmNsdWRlRmFsbGJhY2tDb2xvcnMsaT1hLmxldmVsLHM9YS5zaXplO2Zvcih2YXIgZD0wO2Q8dC5sZW5ndGg7ZCsrKShyPW4ucmVhZGFiaWxpdHkoZSx0W2RdKSk+bCYmKGw9cixjPW4odFtkXSkpO3JldHVybiBuLmlzUmVhZGFibGUoZSxjLHtsZXZlbDppLHNpemU6c30pfHwhbz9jOihhLmluY2x1ZGVGYWxsYmFja0NvbG9ycz0hMSxuLm1vc3RSZWFkYWJsZShlLFtcIiNmZmZcIixcIiMwMDBcIl0sYSkpfTt2YXIgaz1uLm5hbWVzPXthbGljZWJsdWU6XCJmMGY4ZmZcIixhbnRpcXVld2hpdGU6XCJmYWViZDdcIixhcXVhOlwiMGZmXCIsYXF1YW1hcmluZTpcIjdmZmZkNFwiLGF6dXJlOlwiZjBmZmZmXCIsYmVpZ2U6XCJmNWY1ZGNcIixiaXNxdWU6XCJmZmU0YzRcIixibGFjazpcIjAwMFwiLGJsYW5jaGVkYWxtb25kOlwiZmZlYmNkXCIsYmx1ZTpcIjAwZlwiLGJsdWV2aW9sZXQ6XCI4YTJiZTJcIixicm93bjpcImE1MmEyYVwiLGJ1cmx5d29vZDpcImRlYjg4N1wiLGJ1cm50c2llbm5hOlwiZWE3ZTVkXCIsY2FkZXRibHVlOlwiNWY5ZWEwXCIsY2hhcnRyZXVzZTpcIjdmZmYwMFwiLGNob2NvbGF0ZTpcImQyNjkxZVwiLGNvcmFsOlwiZmY3ZjUwXCIsY29ybmZsb3dlcmJsdWU6XCI2NDk1ZWRcIixjb3Juc2lsazpcImZmZjhkY1wiLGNyaW1zb246XCJkYzE0M2NcIixjeWFuOlwiMGZmXCIsZGFya2JsdWU6XCIwMDAwOGJcIixkYXJrY3lhbjpcIjAwOGI4YlwiLGRhcmtnb2xkZW5yb2Q6XCJiODg2MGJcIixkYXJrZ3JheTpcImE5YTlhOVwiLGRhcmtncmVlbjpcIjAwNjQwMFwiLGRhcmtncmV5OlwiYTlhOWE5XCIsZGFya2toYWtpOlwiYmRiNzZiXCIsZGFya21hZ2VudGE6XCI4YjAwOGJcIixkYXJrb2xpdmVncmVlbjpcIjU1NmIyZlwiLGRhcmtvcmFuZ2U6XCJmZjhjMDBcIixkYXJrb3JjaGlkOlwiOTkzMmNjXCIsZGFya3JlZDpcIjhiMDAwMFwiLGRhcmtzYWxtb246XCJlOTk2N2FcIixkYXJrc2VhZ3JlZW46XCI4ZmJjOGZcIixkYXJrc2xhdGVibHVlOlwiNDgzZDhiXCIsZGFya3NsYXRlZ3JheTpcIjJmNGY0ZlwiLGRhcmtzbGF0ZWdyZXk6XCIyZjRmNGZcIixkYXJrdHVycXVvaXNlOlwiMDBjZWQxXCIsZGFya3Zpb2xldDpcIjk0MDBkM1wiLGRlZXBwaW5rOlwiZmYxNDkzXCIsZGVlcHNreWJsdWU6XCIwMGJmZmZcIixkaW1ncmF5OlwiNjk2OTY5XCIsZGltZ3JleTpcIjY5Njk2OVwiLGRvZGdlcmJsdWU6XCIxZTkwZmZcIixmaXJlYnJpY2s6XCJiMjIyMjJcIixmbG9yYWx3aGl0ZTpcImZmZmFmMFwiLGZvcmVzdGdyZWVuOlwiMjI4YjIyXCIsZnVjaHNpYTpcImYwZlwiLGdhaW5zYm9ybzpcImRjZGNkY1wiLGdob3N0d2hpdGU6XCJmOGY4ZmZcIixnb2xkOlwiZmZkNzAwXCIsZ29sZGVucm9kOlwiZGFhNTIwXCIsZ3JheTpcIjgwODA4MFwiLGdyZWVuOlwiMDA4MDAwXCIsZ3JlZW55ZWxsb3c6XCJhZGZmMmZcIixncmV5OlwiODA4MDgwXCIsaG9uZXlkZXc6XCJmMGZmZjBcIixob3RwaW5rOlwiZmY2OWI0XCIsaW5kaWFucmVkOlwiY2Q1YzVjXCIsaW5kaWdvOlwiNGIwMDgyXCIsaXZvcnk6XCJmZmZmZjBcIixraGFraTpcImYwZTY4Y1wiLGxhdmVuZGVyOlwiZTZlNmZhXCIsbGF2ZW5kZXJibHVzaDpcImZmZjBmNVwiLGxhd25ncmVlbjpcIjdjZmMwMFwiLGxlbW9uY2hpZmZvbjpcImZmZmFjZFwiLGxpZ2h0Ymx1ZTpcImFkZDhlNlwiLGxpZ2h0Y29yYWw6XCJmMDgwODBcIixsaWdodGN5YW46XCJlMGZmZmZcIixsaWdodGdvbGRlbnJvZHllbGxvdzpcImZhZmFkMlwiLGxpZ2h0Z3JheTpcImQzZDNkM1wiLGxpZ2h0Z3JlZW46XCI5MGVlOTBcIixsaWdodGdyZXk6XCJkM2QzZDNcIixsaWdodHBpbms6XCJmZmI2YzFcIixsaWdodHNhbG1vbjpcImZmYTA3YVwiLGxpZ2h0c2VhZ3JlZW46XCIyMGIyYWFcIixsaWdodHNreWJsdWU6XCI4N2NlZmFcIixsaWdodHNsYXRlZ3JheTpcIjc4OVwiLGxpZ2h0c2xhdGVncmV5OlwiNzg5XCIsbGlnaHRzdGVlbGJsdWU6XCJiMGM0ZGVcIixsaWdodHllbGxvdzpcImZmZmZlMFwiLGxpbWU6XCIwZjBcIixsaW1lZ3JlZW46XCIzMmNkMzJcIixsaW5lbjpcImZhZjBlNlwiLG1hZ2VudGE6XCJmMGZcIixtYXJvb246XCI4MDAwMDBcIixtZWRpdW1hcXVhbWFyaW5lOlwiNjZjZGFhXCIsbWVkaXVtYmx1ZTpcIjAwMDBjZFwiLG1lZGl1bW9yY2hpZDpcImJhNTVkM1wiLG1lZGl1bXB1cnBsZTpcIjkzNzBkYlwiLG1lZGl1bXNlYWdyZWVuOlwiM2NiMzcxXCIsbWVkaXVtc2xhdGVibHVlOlwiN2I2OGVlXCIsbWVkaXVtc3ByaW5nZ3JlZW46XCIwMGZhOWFcIixtZWRpdW10dXJxdW9pc2U6XCI0OGQxY2NcIixtZWRpdW12aW9sZXRyZWQ6XCJjNzE1ODVcIixtaWRuaWdodGJsdWU6XCIxOTE5NzBcIixtaW50Y3JlYW06XCJmNWZmZmFcIixtaXN0eXJvc2U6XCJmZmU0ZTFcIixtb2NjYXNpbjpcImZmZTRiNVwiLG5hdmFqb3doaXRlOlwiZmZkZWFkXCIsbmF2eTpcIjAwMDA4MFwiLG9sZGxhY2U6XCJmZGY1ZTZcIixvbGl2ZTpcIjgwODAwMFwiLG9saXZlZHJhYjpcIjZiOGUyM1wiLG9yYW5nZTpcImZmYTUwMFwiLG9yYW5nZXJlZDpcImZmNDUwMFwiLG9yY2hpZDpcImRhNzBkNlwiLHBhbGVnb2xkZW5yb2Q6XCJlZWU4YWFcIixwYWxlZ3JlZW46XCI5OGZiOThcIixwYWxldHVycXVvaXNlOlwiYWZlZWVlXCIscGFsZXZpb2xldHJlZDpcImRiNzA5M1wiLHBhcGF5YXdoaXA6XCJmZmVmZDVcIixwZWFjaHB1ZmY6XCJmZmRhYjlcIixwZXJ1OlwiY2Q4NTNmXCIscGluazpcImZmYzBjYlwiLHBsdW06XCJkZGEwZGRcIixwb3dkZXJibHVlOlwiYjBlMGU2XCIscHVycGxlOlwiODAwMDgwXCIscmViZWNjYXB1cnBsZTpcIjY2MzM5OVwiLHJlZDpcImYwMFwiLHJvc3licm93bjpcImJjOGY4ZlwiLHJveWFsYmx1ZTpcIjQxNjllMVwiLHNhZGRsZWJyb3duOlwiOGI0NTEzXCIsc2FsbW9uOlwiZmE4MDcyXCIsc2FuZHlicm93bjpcImY0YTQ2MFwiLHNlYWdyZWVuOlwiMmU4YjU3XCIsc2Vhc2hlbGw6XCJmZmY1ZWVcIixzaWVubmE6XCJhMDUyMmRcIixzaWx2ZXI6XCJjMGMwYzBcIixza3libHVlOlwiODdjZWViXCIsc2xhdGVibHVlOlwiNmE1YWNkXCIsc2xhdGVncmF5OlwiNzA4MDkwXCIsc2xhdGVncmV5OlwiNzA4MDkwXCIsc25vdzpcImZmZmFmYVwiLHNwcmluZ2dyZWVuOlwiMDBmZjdmXCIsc3RlZWxibHVlOlwiNDY4MmI0XCIsdGFuOlwiZDJiNDhjXCIsdGVhbDpcIjAwODA4MFwiLHRoaXN0bGU6XCJkOGJmZDhcIix0b21hdG86XCJmZjYzNDdcIix0dXJxdW9pc2U6XCI0MGUwZDBcIix2aW9sZXQ6XCJlZTgyZWVcIix3aGVhdDpcImY1ZGViM1wiLHdoaXRlOlwiZmZmXCIsd2hpdGVzbW9rZTpcImY1ZjVmNVwiLHllbGxvdzpcImZmMFwiLHllbGxvd2dyZWVuOlwiOWFjZDMyXCJ9LFM9bi5oZXhOYW1lcz1mdW5jdGlvbihlKXt2YXIgdD17fTtmb3IodmFyIGEgaW4gZSllLmhhc093blByb3BlcnR5KGEpJiYodFtlW2FdXT1hKTtyZXR1cm4gdH0oayk7ZnVuY3Rpb24gdihlKXtyZXR1cm4gZT1wYXJzZUZsb2F0KGUpLChpc05hTihlKXx8ZTwwfHxlPjEpJiYoZT0xKSxlfWZ1bmN0aW9uIFAoZSx0KXsoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT1lLmluZGV4T2YoXCIuXCIpJiYxPT09cGFyc2VGbG9hdChlKX0pKGUpJiYoZT1cIjEwMCVcIik7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT1lLmluZGV4T2YoXCIlXCIpfShlKTtyZXR1cm4gZT1NYXRoLm1pbih0LE1hdGgubWF4KDAscGFyc2VGbG9hdChlKSkpLGEmJihlPXBhcnNlSW50KGUqdCwxMCkvMTAwKSxNYXRoLmFicyhlLXQpPDFlLTY/MTplJXQvcGFyc2VGbG9hdCh0KX1mdW5jdGlvbiBDKGUpe3JldHVybiBNYXRoLm1pbigxLE1hdGgubWF4KDAsZSkpfWZ1bmN0aW9uIHgoZSl7cmV0dXJuIHBhcnNlSW50KGUsMTYpfWZ1bmN0aW9uIEEoZSl7cmV0dXJuIDE9PWUubGVuZ3RoP1wiMFwiK2U6XCJcIitlfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIGU8PTEmJihlPTEwMCplK1wiJVwiKSxlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuIE1hdGgucm91bmQoMjU1KnBhcnNlRmxvYXQoZSkpLnRvU3RyaW5nKDE2KX1mdW5jdGlvbiBNKGUpe3JldHVybiB4KGUpLzI1NX12YXIgSSxXLE8sRD0oVz1cIltcXFxcc3xcXFxcKF0rKFwiKyhJPVwiKD86Wy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslPyl8KD86Wy1cXFxcK10/XFxcXGQrJT8pXCIpK1wiKVssfFxcXFxzXSsoXCIrSStcIilbLHxcXFxcc10rKFwiK0krXCIpXFxcXHMqXFxcXCk/XCIsTz1cIltcXFxcc3xcXFxcKF0rKFwiK0krXCIpWyx8XFxcXHNdKyhcIitJK1wiKVssfFxcXFxzXSsoXCIrSStcIilbLHxcXFxcc10rKFwiK0krXCIpXFxcXHMqXFxcXCk/XCIse0NTU19VTklUOm5ldyBSZWdFeHAoSSkscmdiOm5ldyBSZWdFeHAoXCJyZ2JcIitXKSxyZ2JhOm5ldyBSZWdFeHAoXCJyZ2JhXCIrTyksaHNsOm5ldyBSZWdFeHAoXCJoc2xcIitXKSxoc2xhOm5ldyBSZWdFeHAoXCJoc2xhXCIrTyksaHN2Om5ldyBSZWdFeHAoXCJoc3ZcIitXKSxoc3ZhOm5ldyBSZWdFeHAoXCJoc3ZhXCIrTyksaGV4MzovXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8saGV4NjovXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8saGV4NDovXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLGhleDg6L14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkL30pO2Z1bmN0aW9uIEIoZSl7cmV0dXJuISFELkNTU19VTklULmV4ZWMoZSl9cmV0dXJuIG59KCl9fSxuPXt9O2Z1bmN0aW9uIHIoZSl7dmFyIHQ9bltlXTtpZih2b2lkIDAhPT10KXJldHVybiB0LmV4cG9ydHM7dmFyIG89bltlXT17ZXhwb3J0czp7fX07cmV0dXJuIGFbZV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5leHBvcnRzfXZhciBvPXt9OygoKT0+e3ZhciBlPW87T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5jcmVhdGVUaGVtZT1lLlBhbGV0dGU9ZS5Db2xvcj12b2lkIDA7dmFyIHQ9cigyMzE3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkNvbG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuQ29sb3J9fSk7dmFyIGE9cig1OTM5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlBhbGV0dGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5QYWxldHRlfX0pO3ZhciBuPXIoNjg5Myk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjcmVhdGVUaGVtZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZVRoZW1lfX0pfSkoKTt2YXIgaT10O2Zvcih2YXIgcyBpbiBvKWlbc109b1tzXTtvLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw4Nzc6KCk9Pnt9LDY3OigpPT57fSwzMTc6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPWEoMTg5KSxyPWEoNTIyKTtjb25zdCBvPWEoNjc1KS5xVC5TeXN0ZW0saT1lPT5PYmplY3QuZW50cmllcyhlKS5yZWR1Y2UoKChlLFt0LGFdKT0+YCR7ZX0tLXdvcmtzcGFjZS1wYWxldHRlLSR7dH06ICR7YX07YCksXCJcIikscz0oZSx0KT0+KHtzZWxlY3RlZFRhYjpcImRhcmtcIj09PXQ/ZS5iYWNrZ3JvdW5kMzplLmJhY2tncm91bmQxfSk7bmV3IGNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMucHJvdmlkZXJTdG9yYWdlPWUsdGhpcy5nZXRWYXJzQnlTY2hlbWU9ZT0+XCJkYXJrXCI9PT1lP3RoaXMuZGFya1BhbGV0dGVWYXJzOnRoaXMubGlnaHRQYWxldHRlVmFycyx0aGlzLnNldFdvcmtzcGFjZVN0b3JhZ2VQcm94eT1lPT57dGhpcy53b3Jrc3BhY2VTdG9yYWdlPWV9LHRoaXMudHJ5U3luY2hyb25pemVXb3Jrc3BhY2VTdG9yYWdlPWFzeW5jKCk9PntpZih0aGlzLndvcmtzcGFjZVN0b3JhZ2Upe2NvbnN0IGU9dGhpcy5nZXRTY2hlbWUoKTtpZihhd2FpdCB0aGlzLndvcmtzcGFjZVN0b3JhZ2Uuc2V0SXRlbShyLkEuU2VsZWN0ZWRDb2xvclNjaGVtZSxlKSx0aGlzLmRhcmtQYWxldHRlVmFycyYmdGhpcy5saWdodFBhbGV0dGVWYXJzKWlmKFwiZGFya1wiPT09ZXx8XCJsaWdodFwiPT09ZSlhd2FpdCB0aGlzLndvcmtzcGFjZVN0b3JhZ2Uuc2V0SXRlbShyLkEuVGhlbWVQYWxldHRlU2hlZXQsYDpyb290eyR7dGhpcy5nZXRWYXJzQnlTY2hlbWUoZSl9fWApO2Vsc2V7Y29uc3QgZT1gQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7OnJvb3QgeyR7dGhpcy5nZXRWYXJzQnlTY2hlbWUoXCJkYXJrXCIpfX19YCx0PWBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCl7OnJvb3R7JHt0aGlzLmdldFZhcnNCeVNjaGVtZShcImxpZ2h0XCIpfX19YDthd2FpdCB0aGlzLndvcmtzcGFjZVN0b3JhZ2Uuc2V0SXRlbShyLkEuVGhlbWVQYWxldHRlU2hlZXQsYCR7dH0ke2V9YCl9fX0sdGhpcy5zZXRQYWxldHRlcz1hc3luYyh7bGlnaHQ6ZSxkYXJrOnR9KT0+e3RoaXMubGlnaHRQYWxldHRlVmFycz1pKHsuLi5lLC4uLnMoZSxcImxpZ2h0XCIpfSksdGhpcy5kYXJrUGFsZXR0ZVZhcnM9aSh7Li4udCwuLi5zKHQsXCJkYXJrXCIpfSl9fXNldFNjaGVtZShlKXt0aGlzLnByb3ZpZGVyU3RvcmFnZS5zZXRJdGVtKHIuQS5TZWxlY3RlZENvbG9yU2NoZW1lLGUpfWdldFNjaGVtZSgpe3JldHVybiBudWxsPT09dGhpcy5wcm92aWRlclN0b3JhZ2UuZ2V0SXRlbShyLkEuU2VsZWN0ZWRDb2xvclNjaGVtZSkmJnRoaXMucHJvdmlkZXJTdG9yYWdlLnNldEl0ZW0oci5BLlNlbGVjdGVkQ29sb3JTY2hlbWUsbyksdGhpcy5wcm92aWRlclN0b3JhZ2UuZ2V0SXRlbShyLkEuU2VsZWN0ZWRDb2xvclNjaGVtZSl9fShuKX0sMzY3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7TjooKT0+dyxBOigpPT5tfSk7dmFyIG49YSg3MjMpLHI9YSg3OSksbz1hKDY3NSksaT1hKDcwKSxzPWEoNzg2KSxjPWEoMzMzKTt2YXIgbD1hKDMyNik7Y29uc3QgZD0oMCxhKDEwMikuQSkoYCR7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbiYmZmluPy5tZS5pZGVudGl0eS51dWlkfS1lbnRlcnByaXNlLWJvb2ttYXJrc2ApO3ZhciB1PWEoMTQxKTtjb25zdCBoPWU9Pih7aWRlbnRpdHk6ZSxvcGVuZmluV2luZG93OmZpbi5XaW5kb3cud3JhcFN5bmMoZSksX2Jvb2ttYXJrczp7X2NyZWF0ZUJvb2ttYXJrTm9kZTphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5DcmVhdGVCb29rbWFya05vZGUsZSkpKGUpLF9nZXRCb29rbWFya05vZGU6YXN5bmMgZT0+KGFzeW5jIGU9Pihhd2FpdCBkKCkpLmRpc3BhdGNoKGwuSGMuR2V0Qm9va21hcmtOb2RlLGUpKShlKSxfc2VhcmNoQm9va21hcmtOb2Rlczphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5TZWFyY2hCb29rbWFya05vZGVzLGUpKShlKSxfdXBkYXRlQm9va21hcmtOb2RlOmFzeW5jIGU9Pihhc3luYyBlPT4oYXdhaXQgZCgpKS5kaXNwYXRjaChsLkhjLlVwZGF0ZUJvb2ttYXJrTm9kZSxlKSkoZSksX2RlbGV0ZUJvb2ttYXJrTm9kZTphc3luYyBlPT4oYXN5bmMgZT0+KGF3YWl0IGQoKSkuZGlzcGF0Y2gobC5IYy5EZWxldGVCb29rbWFya05vZGUsZSkpKGUpfSxnZXRQYWdlczphc3luYygpPT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRQYWdlc0ZvcldpbmRvdyxlKSxnZXRQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFBhZ2VGb3JXaW5kb3cse2lkZW50aXR5OmUscGFnZUlkOnR9KSxhZGRQYWdlOmFzeW5jIHQ9PigwLHUuTnQpKCkuQnJvd3Nlci53cmFwU3luYyhlKS5fYWRkUGFnZSh0KSxfYWRkUGFnZTphc3luYyh0LGEpPT57Y29uc3Qgbj1hd2FpdCgwLHIuYlcpKGUpLG89e2lkZW50aXR5OmUscGFnZTp0LGluc2VydGlvbkluZGV4OmE/LmluZGV4LG11bHRpSW5zdGFuY2VWaWV3QmVoYXZpb3I6YT8ubXVsdGlJbnN0YW5jZVZpZXdCZWhhdmlvcn07cmV0dXJuIG4uZGlzcGF0Y2goci5PRi5BZGRQYWdlLG8pfSxyZW1vdmVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkRldGFjaFBhZ2VzRnJvbVdpbmRvdyx7aWRlbnRpdHk6ZSxwYWdlSWRzOlt0XX0pLHJlcGFyZW50UGFnZTphc3luYyB0PT4oMCx1Lk50KSgpLkJyb3dzZXIud3JhcFN5bmMoZSkuX3JlcGFyZW50UGFnZSh0KSxfcmVwYXJlbnRQYWdlOmFzeW5jIHQ9Pntjb25zdHtwYWdlSWQ6YX09dCxuPWF3YWl0KDAsci5iVykoZSksbz0oYXdhaXQgbi5kaXNwYXRjaChyLk9GLkdldEFsbEF0dGFjaGVkUGFnZXMsdm9pZCAwKSkuZmluZCgoKHtwYWdlSWQ6ZX0pPT5lPT09YSkpO2lmKCFvKXRocm93IG5ldyBFcnJvcihgUmVwYXJlbnQgUGFnZSBFcnJvcjogVGFyZ2V0IHBhZ2Ugd2l0aCBwYWdlSWQgJHthfSBub3QgZm91bmRgKTtvLm11bHRpSW5zdGFuY2VWaWV3QmVoYXZpb3I9XCJyZXBhcmVudFwiO2NvbnN0IGk9e2lkZW50aXR5OmUscGFnZXM6W29dLGluc2VydGlvbkluZGV4OnQuaW5kZXh9O3JldHVybiBuLmRpc3BhdGNoKHIuT0YuQXR0YWNoUGFnZXNUb1dpbmRvdyxpKX0sc2V0QWN0aXZlUGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5TZXRBY3RpdmVQYWdlLHtpZGVudGl0eTplLHBhZ2VJZDp0fSksdXBkYXRlUGFnZTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLlVwZGF0ZVBhZ2VGb3JXaW5kb3csdCl9LHJlb3JkZXJQYWdlczphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLlJlb3JkZXJQYWdlc0ZvcldpbmRvdyx0KX0sX29wZW5HbG9iYWxDb250ZXh0TWVudTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLk9wZW5HbG9iYWxDb250ZXh0TWVudUludGVybmFsLHQpfSxyZXBsYWNlVG9vbGJhck9wdGlvbnM6YXN5bmMgdD0+e2F3YWl0KDAsci5iVykoZSk7Y29uc3QgYT1maW4uV2luZG93LndyYXBTeW5jKGUpO2F3YWl0IGEudXBkYXRlT3B0aW9ucyh7d29ya3NwYWNlUGxhdGZvcm06e3Rvb2xiYXJPcHRpb25zOnR9fSl9LHJlcGxhY2VXaW5kb3dTdGF0ZUJ1dHRvbk9wdGlvbnM6YXN5bmMgdD0+e2F3YWl0KDAsci5iVykoZSk7Y29uc3QgYT1maW4uV2luZG93LndyYXBTeW5jKGUpO2F3YWl0IGEudXBkYXRlT3B0aW9ucyh7d29ya3NwYWNlUGxhdGZvcm06e3dpbmRvd1N0YXRlQnV0dG9uT3B0aW9uczp0fX0pfSx1cGRhdGVCcm93c2VyV2luZG93VGl0bGU6YXN5bmMgdD0+e2NvbnN0IGE9ZmluLldpbmRvdy53cmFwU3luYyhlKTtcInN0cmluZ1wiIT10eXBlb2YgdD9hd2FpdCBhLnVwZGF0ZU9wdGlvbnMoe3dvcmtzcGFjZVBsYXRmb3JtOnt0aXRsZTp0fX0pOmNvbnNvbGUud2FybihcIlR5cGUgc3RyaW5nIGZvciB3aW5kb3cgdGl0bGUgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBXaW5kb3dUaXRsZSB0eXBlIGluc3RlYWRcIix0KX0sX29wZW5WaWV3VGFiQ29udGV4dE1lbnU6YXN5bmMgdD0+e2NvbnN0IGE9YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4gdC5pZGVudGl0eT1lLGEuZGlzcGF0Y2goci5PRi5PcGVuVmlld1RhYkNvbnRleHRNZW51SW50ZXJuYWwsdCl9LF9vcGVuUGFnZVRhYkNvbnRleHRNZW51OmFzeW5jIHQ9Pntjb25zdCBhPWF3YWl0KDAsci5iVykoZSk7cmV0dXJuIHQuaWRlbnRpdHk9ZSxhLmRpc3BhdGNoKHIuT0YuT3BlblBhZ2VUYWJDb250ZXh0TWVudUludGVybmFsLHQpfSxfb3BlblNhdmVNb2RhbDphc3luYyB0PT57YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4oYXdhaXQoMCxsLnA0KShlKSkuZGlzcGF0Y2gobC5hUS5PcGVuU2F2ZU1vZGFsSW50ZXJuYWwsdCl9LF9nZXRMYXlvdXRzV2l0aFNlbGVjdGVkVmlld3M6YXN5bmMoKT0+KGF3YWl0KDAsbC5wNCkoZSkpLmRpc3BhdGNoKGwuYVEuR2V0TGF5b3V0c1dpdGhTZWxlY3RlZFZpZXdzSW50ZXJuYWwsZSksX29wZW5TYXZlQnV0dG9uQ29udGV4dE1lbnU6YXN5bmMgdD0+e2NvbnN0IGE9YXdhaXQoMCxyLmJXKShlKTtyZXR1cm4gdC5pZGVudGl0eT1lLGEuZGlzcGF0Y2goci5PRi5PcGVuU2F2ZUJ1dHRvbkNvbnRleHRNZW51SW50ZXJuYWwsdCl9LF9hZGREZWZhdWx0UGFnZTphc3luYyB0PT57Y29uc3QgYT1hd2FpdCgwLHIuYlcpKGUpO3JldHVybiB0LmlkZW50aXR5PWUsYS5kaXNwYXRjaChyLk9GLkFkZERlZmF1bHRQYWdlLHQpfSxfdHJhY2tSZW1vdmVkVGFiOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlRyYWNrUmVtb3ZlZFRhYkludGVybmFsLHQpLF9yZXN0b3JlUmVtb3ZlZFRhYjphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5SZXN0b3JlUmVtb3ZlZFRhYkludGVybmFsLHQpLF90cmFja1Zpc2l0ZWRTaXRlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlRyYWNrVmlzaXRlZFNpdGVJbnRlcm5hbCx0KSxfZ2V0UmVjZW50bHlWaXNpdGVkU2l0ZXM6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0UmVjZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbCx0KSxfZ2V0RnJlcXVlbnRseVZpc2l0ZWRTaXRlczphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRGcmVxdWVudGx5VmlzaXRlZFNpdGVzSW50ZXJuYWwsdCksX3NlYXJjaFNpdGVzOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLlNlYXJjaFNpdGVzSW50ZXJuYWwse2lkZW50aXR5OmUscmVxOnR9KSxfZ2V0U2VhcmNoUHJvdmlkZXJzOmFzeW5jKCk9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldFNlYXJjaFByb3ZpZGVyc0ludGVybmFsLHtpZGVudGl0eTplfSksX2dldEN1cmF0ZWRDb250ZW50OmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkdldEN1cmF0ZWRDb250ZW50SW50ZXJuYWwse2lkZW50aXR5OmUscmVxOnR9KSxfaGFuZGxlUmVxdWVzdE5hdmlnYXRpb246YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuSGFuZGxlUmVxdWVzdE5hdmlnYXRpb25JbnRlcm5hbCx0KX0pLGc9ZT0+e2NvbnN0IHQ9ZmluLlBsYXRmb3JtLndyYXBTeW5jKGUpO3JldHVybnt3cmFwU3luYzplPT5oKGUpLGNyZWF0ZVdpbmRvdzphc3luYyBhPT57Y29uc3Qgbj0oKCk9Pntjb25zdCBlPWBicm93c2VyLXdpbmRvdy1zdGFydHVwLSR7KDAsYy5OKSgpfWA7cmV0dXJuIHMuQS5tYXJrU3RhcnQoZSksZX0pKCk7KGU9PntmaW4uQXBwbGljYXRpb24ud3JhcFN5bmMoe3V1aWQ6ZmluLm1lLmlkZW50aXR5LnV1aWR9KS5vbmNlKFwid2luZG93LXNob3duXCIsKCgpPT57cy5BLm1hcmtBbmRNZWFzdXJlKFwiYnJvd3Nlci13aW5kb3ctc2hvd25cIixlKX0pKX0pKG4pLGF3YWl0KDAsci5iVykoZSk7Y29uc3Qgbz1hd2FpdCB0LmNyZWF0ZVdpbmRvdyhhKTtyZXR1cm4oZT0+e3MuQS5tYXJrQW5kTWVhc3VyZShcImJyb3dzZXItd2luZG93LXN0YXJ0ZWRcIixlKX0pKG4pLGgoby5pZGVudGl0eSl9LGdldEFsbEF0dGFjaGVkUGFnZXM6YXN5bmMoKT0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0QWxsQXR0YWNoZWRQYWdlcyx2b2lkIDApLGdldEFsbFdpbmRvd3M6YXN5bmMoKT0+e2F3YWl0KDAsci5iVykoZSk7cmV0dXJuKGF3YWl0KDAsaS5JbykoKSkubWFwKChlPT5oKGUuaWRlbnRpdHkpKSl9LGdldFVuaXF1ZVBhZ2VUaXRsZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRVbmlxdWVQYWdlVGl0bGUsdCksZ2V0TGFzdEZvY3VzZWRXaW5kb3c6YXN5bmMoKT0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0TGFzdEZvY3VzZWRCcm93c2VyV2luZG93LHZvaWQgMCl9fSxwPWU9Pih7Y3JlYXRlUGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5DcmVhdGVTYXZlZFBhZ2VJbnRlcm5hbCx0KSxkZWxldGVQYWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuYlcpKGUpKS5kaXNwYXRjaChyLk9GLkRlbGV0ZVNhdmVkUGFnZUludGVybmFsLHQpLHVwZGF0ZVBhZ2U6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuVXBkYXRlU2F2ZWRQYWdlSW50ZXJuYWwsdCksZ2V0UGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5HZXRTYXZlZFBhZ2UsdCksZ2V0UGFnZXM6YXN5bmMgdD0+KGF3YWl0KDAsci5iVykoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2F2ZWRQYWdlcyx0KSxzYXZlUGFnZTphc3luYyB0PT4oYXdhaXQoMCxyLmJXKShlKSkuZGlzcGF0Y2goci5PRi5TYXZlUGFnZSx0KSxjcmVhdGVXb3Jrc3BhY2U6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5DcmVhdGVTYXZlZFdvcmtzcGFjZSx0KSxkZWxldGVXb3Jrc3BhY2U6YXN5bmMgdD0+e2NvbnN0IGE9dygpLG49YXdhaXQgYS5nZXRDdXJyZW50V29ya3NwYWNlKCk7aWYobi53b3Jrc3BhY2VJZD09PXQpdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGVsZXRlIGN1cnJlbnQgYWN0aXZlIHdvcmtzcGFjZSAke24udGl0bGV9YCk7cmV0dXJuKGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5EZWxldGVTYXZlZFdvcmtzcGFjZSx0KX0sdXBkYXRlV29ya3NwYWNlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuVXBkYXRlU2F2ZWRXb3Jrc3BhY2UsdCksZ2V0V29ya3NwYWNlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0U2F2ZWRXb3Jrc3BhY2UsdCksZ2V0V29ya3NwYWNlczphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldFNhdmVkV29ya3NwYWNlcyx0KSxzYXZlV29ya3NwYWNlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2F2ZVdvcmtzcGFjZSx0KSxnZXREb2NrUHJvdmlkZXJDb25maWc6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXREb2NrUHJvdmlkZXJDb25maWcsdCksc2F2ZURvY2tQcm92aWRlckNvbmZpZzphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlNhdmVEb2NrUHJvdmlkZXJDb25maWcsdCl9KTt2YXIgZj1hKDM5Nik7Y29uc3QgbT1lPT57Y29uc3QgdD1maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSk7bGV0IGE7cmV0dXJuIE9iamVjdC5hc3NpZ24odCx7YXBwbHlTbmFwc2hvdDphc3luYyh0LGEpPT57aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQmJiF0Py53aW5kb3dzKXRocm93IG5ldyBFcnJvcihcIk5vdCBhIHZhbGlkIGJyb3dzZXIgc25hcHNob3RcIik7cmV0dXJuIGZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5hcHBseVNuYXBzaG90KHQsYSl9LGdldFNuYXBzaG90OigpPT5maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSkuZ2V0U25hcHNob3QoKS50aGVuKChlPT5lKSksZ2V0Vmlld1NuYXBzaG90OnQ9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5nZXRWaWV3U25hcHNob3QodCksY3JlYXRlVmlldzoodCxhLG4pPT5maW4uUGxhdGZvcm0ud3JhcFN5bmMoZSkuY3JlYXRlVmlldyh0LGEsbiksbGF1bmNoQXBwOmFzeW5jIHQ9Pntjb25zb2xlLndhcm4oXCJsYXVuY2hBcHAgbWV0aG9kIGlzIGRlcHJlY2F0ZWQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSBjcmVhdGVWaWV3IC0gaHR0cHM6Ly9kZXZlbG9wZXJzLm9wZW5maW4uY28vb2YtZG9jcy9kb2NzL3BsYXRmb3JtLWdldHRpbmctc3RhcnRlZCNhZGQtYS12aWV3LXRvLWFuLWV4aXN0aW5nLXdpbmRvdyBvciAgY3JlYXRlV2luZG93IC0gaHR0cHM6Ly9kZXZlbG9wZXJzLm9wZW5maW4uY28vb2YtZG9jcy9kb2NzL3BsYXRmb3JtLWdldHRpbmctc3RhcnRlZCNjcmVhdGUtYS1wbGF0Zm9ybS13aW5kb3cgaW5zdGVhZC5cIiksdC50YXJnZXR8fCh0LnRhcmdldD17dXVpZDpuLiRoLG5hbWU6bi52TCxlbnRpdHlUeXBlOm4uZlR8fFwidW5rbm93blwifSk7cmV0dXJuKGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5MYXVuY2hBcHAsdCl9LF9pbnZva2VDdXN0b21BY3Rpb246YXN5bmModCxhKT0+e2NvbnN0IG49YXdhaXQoMCxyLk4pKGUpLGk9e2FjdGlvbklkOnQscGF5bG9hZDp7Li4uYSxjYWxsZXJUeXBlOmEuY2FsbGVyVHlwZXx8by52Yy5BUEl9fTtyZXR1cm4gbi5kaXNwYXRjaChyLk9GLkludm9rZUN1c3RvbUFjdGlvbkludGVybmFsLGkpfSxfcmVxdWVzdFF1aXRQbGF0Zm9ybURpYWxvZzphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlJlcXVlc3RRdWl0UGxhdGZvcm1EaWFsb2dJbnRlcm5hbCx0KSxnZXRDdXJyZW50V29ya3NwYWNlOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0Q3VycmVudFdvcmtzcGFjZSx2b2lkIDApLGFwcGx5V29ya3NwYWNlOmFzeW5jKHQsYSk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuQXBwbHlXb3Jrc3BhY2Usey4uLnQsb3B0aW9uczphfSksc2V0QWN0aXZlV29ya3NwYWNlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2V0QWN0aXZlV29ya3NwYWNlLHQpLGdldExhbmd1YWdlOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0TGFuZ3VhZ2UpLF9nZXRMYW5ndWFnZVJlc291cmNlczphc3luYygpPT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkdldExhbmd1YWdlUmVzb3VyY2VzSW50ZXJuYWwpLHNldExhbmd1YWdlOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2V0TGFuZ3VhZ2UsdCksX3JhaXNlQW5hbHl0aWNzOmFzeW5jIHQ9PntpZihhfHwoYT1hd2FpdCgwLHIuS1opKGUpKSxcIm9iamVjdFwiPT10eXBlb2YgYSYmYT8uYW5hbHl0aWNzPy5pc1N1cHBvcnRlZCl7cmV0dXJuKGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5BbmFseXRpY3MsdCl9ZS51dWlkfSxnZXROb3RpZmljYXRpb25zQ29uZmlnOmFzeW5jKCk9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuR2V0Tm90aWZpY2F0aW9uc0NvbmZpZyksX3JlZnJlc2hCb29rbWFya3NJbnRlcm5hbDphc3luYygpPT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlJlZnJlc2hCb29rbWFya3NJbnRlcm5hbCksX2xhdW5jaEJvb2ttYXJrSW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5MYXVuY2hCb29rbWFya0ludGVybmFsLHQpLF91cGRhdGVEb2NrRmF2b3JpdGVzSW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVEb2NrRmF2b3JpdGVzSW50ZXJuYWwsdCksX3VwZGF0ZUNvbnRlbnRNZW51SW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5VcGRhdGVDb250ZW50TWVudUludGVybmFsLHQpLF9sYXVuY2hEb2NrRW50cnlJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkxhdW5jaERvY2tFbnRyeUludGVybmFsLHQpLF9zZXREb2NrRmF2b3JpdGVzSW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5TZXREb2NrRmF2b3JpdGVzT3JkZXJJbnRlcm5hbCx0KSxfc2V0RG9ja1dvcmtzcGFjZUJ1dHRvbnNPcmRlckludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuU2V0RG9ja1dvcmtzcGFjZUJ1dHRvbnNPcmRlckludGVybmFsLHQpLF9yZW1vdmVEb2NrRmF2b3JpdGVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLlJlbW92ZURvY2tGYXZvcml0ZUludGVybmFsLHQpLF9hZGREb2NrRmF2b3JpdGVJbnRlcm5hbDphc3luYyB0PT4oYXdhaXQoMCxyLk4pKGUpKS5kaXNwYXRjaChyLk9GLkFkZERvY2tGYXZvcml0ZUludGVybmFsLHQpLF9uYXZpZ2F0ZUNvbnRlbnRNZW51SW50ZXJuYWw6YXN5bmMgdD0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5OYXZpZ2F0ZUNvbnRlbnRNZW51SW50ZXJuYWwsdCksX29wZW5Eb2NrV29ya3NwYWNlc0NvbnRleHRNZW51SW50ZXJuYWw6YXN5bmMoKT0+KGF3YWl0KDAsci5OKShlKSkuZGlzcGF0Y2goci5PRi5HZXREb2NrV29ya3NwYWNlc0NvbnRleHRNZW51SW50ZXJuYWwpLF9oYW5kbGVEb2NrV29ya3NwYWNlc01lbnVSZXNwb25zZUludGVybmFsOmFzeW5jIHQ9Pihhd2FpdCgwLHIuTikoZSkpLmRpc3BhdGNoKHIuT0YuSGFuZGxlRG9ja1dvcmtzcGFjZXNNZW51UmVzcG9uc2VJbnRlcm5hbCx0KSxUaGVtZTooMCxmLk5BKShlKSxCcm93c2VyOmcoZSksU3RvcmFnZTpwKGUpfSl9LHc9KCk9Pm0oZmluLm1lLmlkZW50aXR5KX0sMzk2OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7TkE6KCk9Pml9KTthKDE4MSksYSg3MCksYSgzMjYpO3ZhciBuPWEoMTAyKTt2YXIgcjshZnVuY3Rpb24oZSl7ZS5VcGRhdGVQbGF0Zm9ybVRoZW1lU2NoZW1lPVwidXBkYXRlLXBsYXRmb3JtLXRoZW1lLXNjaGVtZVwifShyfHwocj17fSkpOygwLG4uQSkoXCJvZi13b3Jrc3BhY2Utbm90aWZpY2F0aW9ucy1zeW5jXCIpO2EoNjk1KTt2YXIgbz1hKDc5KTthKDMxNyk7Y29uc3QgaT1lPT4oe2dldFRoZW1lczphc3luYygpPT4oYXdhaXQoMCxvLk4pKGUpKS5kaXNwYXRjaChvLk9GLkdldFRoZW1lcyx2b2lkIDApLHNldFNlbGVjdGVkU2NoZW1lOmFzeW5jIHQ9Pihhd2FpdCgwLG8uTikoZSkpLmRpc3BhdGNoKG8uT0YuU2V0U2VsZWN0ZWRTY2hlbWUsdCksZ2V0U2VsZWN0ZWRTY2hlbWU6YXN5bmMoKT0+KGF3YWl0KDAsby5OKShlKSkuZGlzcGF0Y2goby5PRi5HZXRTZWxlY3RlZFNjaGVtZSx2b2lkIDApfSl9LDE0MTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse050OigpPT51Lk4sQWc6KCk9PnUuQX0pO2EoNjc1KTt2YXIgbj1hKDcyMyk7YSgxODEpO3ZhciByPWEoNzApO2EoMzY1KTtjb25zdCBvPShlLHQ9MCk9PntsZXQgYSxuLHI9ITE7Y29uc3Qgbz1hc3luYyBuPT57Y29uc3QgaT1hd2FpdCBlKC4uLm4pO2lmKHIpe2F3YWl0IG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsdCkpKTtjb25zdCBlPWE7cmV0dXJuIGE9dm9pZCAwLHI9ITEsbyhlKX1yZXR1cm4gaX07cmV0dXJuKC4uLmUpPT4obj8ocj0hMCxhPWUpOm49byhlKS5jYXRjaCgoZT0+e3Rocm93IGNvbnNvbGUuZXJyb3IoXCJtYWtlRGVib3VuY2VkRnVuY1wiLGUpLGV9KSkuZmluYWxseSgoKCk9PntuPXZvaWQgMH0pKSxuKX07dmFyIGk7IWZ1bmN0aW9uKGUpe2UuVG9wPVwidG9wXCIsZS5CZWxvdz1cImJlbG93XCJ9KGl8fChpPXt9KSk7Y29uc3Qgcz1hc3luYyhlLHQpPT57dHJ5e3JldHVybiBlP2F3YWl0IGUuZ2V0Qm91bmRzKCk6dH1jYXRjaChlKXtyZXR1cm4gY29uc29sZS53YXJuKFwiZ2V0UGFyZW50V2luZG93Qm91bmRzIC0gRmFpbGVkIHRvIGdldCBwYXJlbnQgd2luZG93IGJvdW5kc1wiLGUpLHR9fSxjPWFzeW5jIGU9Pnt0cnl7cmV0dXJuISFlJiZcIm1heGltaXplZFwiPT09YXdhaXQgZS5nZXRTdGF0ZSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLndhcm4oXCJwYXJlbnRXaW5kb3dNYXhpbWl6ZWQgLSBGYWlsZWQgdG8gZ2V0IHBhcmVudCB3aW5kb3cgc3RhdGVcIixlKSwhMX19O28oKGFzeW5jIGZ1bmN0aW9uKGUsdCxhLG4sbyl7Y29uc3QgbD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGQ9YXdhaXQgYXN5bmMgZnVuY3Rpb24oZSx0LGEsbixvLGwpe2NvbnN0IGQ9ISFlJiYoMCxyLklxKShlKSx1PWF3YWl0IHMoZCxsKTtpZihuPT09aS5CZWxvdyl7aWYoIWR8fGF3YWl0IGMoZCkpe2NvbnN0IGU9ZD8oYXdhaXQoMCxyLnVyKSh1KSkuYXZhaWxhYmxlUmVjdDooYXdhaXQgZmluLlN5c3RlbS5nZXRNb25pdG9ySW5mbygpKS5wcmltYXJ5TW9uaXRvci5hdmFpbGFibGVSZWN0O3JldHVybntsZWZ0OigwLHIuVjEpKGUpLmxlZnQtdC8yLHRvcDpvP2UuYm90dG9tLTEyODplLmJvdHRvbSsxMix3aWR0aDp0LGhlaWdodDphfX1yZXR1cm57bGVmdDooMCxyLlYxKSh1KS5sZWZ0LXQvMix0b3A6bz91LmJvdHRvbS0xMjg6dS5ib3R0b20rMTIsd2lkdGg6dCxoZWlnaHQ6YX19aWYoIWR8fGF3YWl0IGMoZCkpe2NvbnN0IGU9ZD8oYXdhaXQoMCxyLnVyKSh1KSkuYXZhaWxhYmxlUmVjdDooYXdhaXQgZmluLlN5c3RlbS5nZXRNb25pdG9ySW5mbygpKS5wcmltYXJ5TW9uaXRvci5hdmFpbGFibGVSZWN0O3JldHVybntsZWZ0OigwLHIuVjEpKGUpLmxlZnQtdC8yLHRvcDplLnRvcCsyMCx3aWR0aDp0LGhlaWdodDphfX1yZXR1cm57bGVmdDooMCxyLlYxKSh1KS5sZWZ0LXQvMix0b3A6dS50b3ArMjAsd2lkdGg6dCxoZWlnaHQ6YX19KGUsbC53aWR0aCxsLmhlaWdodCxhLG4sbyk7aWYoMD09PWQud2lkdGh8fDA9PT1kLmhlaWdodClyZXR1cm47Y29uc3QgdT0oMCxyLlR2KSgpO2F3YWl0IHUuc2V0Qm91bmRzKGQpLGF3YWl0IHUuc2hvdygpO2NvbnN0IGg9c2V0VGltZW91dCgoKCk9PnUuY2xvc2UoKSksbj81ZTM6M2UzKSxnPSgpPT57Y2xlYXJUaW1lb3V0KGgpLHUuY2xvc2UoKX07aWYoZSl7Y29uc3QgdD0oMCxyLklxKShlKTt0Lm9uKFwiYm91bmRzLWNoYW5naW5nXCIsKCgpPT5nKCkpKSx0Lm9uKFwiYmx1cnJlZFwiLCgoKT0+ZygpKSksdC5vbihcIm1heGltaXplZFwiLCgoKT0+ZygpKSksdC5vbihcIm1pbmltaXplZFwiLCgoKT0+ZygpKSksdC5vbihcInJlc3RvcmVkXCIsKCgpPT5nKCkpKX19KSwxMCk7YSgyNzcpLGEoOTU3KTt2YXIgbD1hKDQzOCk7YSg5NDApO3JlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpO2NvbnN0IGQ9cmVxdWlyZShcImkxOG5leHRcIik7YS5uKGQpKCkudDthKDY3OCksYSgzMjYpO2EoNzkpO3ZhciB1PWEoMzY3KTtuZXcgY2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnF1ZXVlPVtdLHRoaXMubG9ja2VkPSExfWxvY2soKXtyZXR1cm4gbmV3IFByb21pc2UoKGU9Pnt0aGlzLmxvY2tlZD90aGlzLnF1ZXVlLnB1c2goZSk6KHRoaXMubG9ja2VkPSEwLGUoKSl9KSl9dW5sb2NrKCl7aWYodGhpcy5xdWV1ZS5sZW5ndGg+MCl7Y29uc3QgZT10aGlzLnF1ZXVlLnNoaWZ0KCk7ZSYmZSgpfWVsc2UgdGhpcy5sb2NrZWQ9ITF9fTtuZXcgTWFwO2NvbnN0IGg9KChlLHQpPT57Y29uc3QgYT1lO3JldHVybiBhLndvcmtzcGFjZVBsYXRmb3JtfHwoYS53b3Jrc3BhY2VQbGF0Zm9ybT17fSksYS53b3Jrc3BhY2VQbGF0Zm9ybS5faW50ZXJuYWxEZWZlclNob3dPcHRpb25zPXtzZXRBc0ZvcmVncm91bmQ6ISF0LGRlZmVyU2hvd0VuYWJsZWQ6ITAsYXV0b1Nob3c6YS53b3Jrc3BhY2VQbGF0Zm9ybT8uX2ludGVybmFsQXV0b1Nob3d8fGEud29ya3NwYWNlUGxhdGZvcm0/Ll9pbnRlcm5hbERlZmVyU2hvd09wdGlvbnM/LmF1dG9TaG93fHx2b2lkIDA9PT1hLmF1dG9TaG93fHxhLmF1dG9TaG93fSxhLmF1dG9TaG93PSExLGF9KSh7YWx3YXlzT25Ub3A6ITAsYXV0b1Nob3c6ITEsZnJhbWU6ITEscmVzaXphYmxlOiExLHNob3dUYXNrYmFySWNvbjohMX0pOyFmdW5jdGlvbihlPWgpe2NvbnN0IHQ9bmV3IE1hcH0oKTt2YXIgZz1hKDUyMikscD1hKDE4OSk7YSg1MjMpO2Z1bmN0aW9uIGYoZSx0KXtyZXR1cm4gYXN5bmMoYSwuLi5uKT0+e2UuaGFzKGEpJiZlLmdldChhKS5mb3JFYWNoKChlPT5lKC4uLm4pKSksdCYmYXdhaXQgdCh7ZXZlbnQ6YSxwYXlsb2FkOm59KX19ZnVuY3Rpb24gbShlLHQpe3JldHVybiB0JiZ0KCh0PT57Y29uc3R7ZXZlbnQ6YSxwYXlsb2FkOm59PXQ7ZS5oYXMoYSkmJmUuZ2V0KGEpLmZvckVhY2goKGU9PmUoLi4ubikpKX0pKSwodCxhKT0+e2UuaGFzKHQpfHxlLnNldCh0LG5ldyBTZXQpLGUuZ2V0KHQpLmFkZChhKX19ZnVuY3Rpb24gdyhlKXtyZXR1cm4odCxhKT0+e2UuaGFzKHQpfHxlLnNldCh0LG5ldyBTZXQpO2NvbnN0IG49ZS5nZXQodCkscj0oLi4uZSk9PnthKC4uLmUpLG4uZGVsZXRlKHIpfTtuLmFkZChyKX19ZnVuY3Rpb24geShlKXtyZXR1cm4odCxhKT0+e2UuaGFzKHQpJiZlLmdldCh0KS5kZWxldGUoYSl9fXIuUS5Ccm93c2VyTWVudTsoZnVuY3Rpb24oZSl7Y29uc3QgdD1uZXcgTWFwO2YodCwodD0+bi5jSSYmZmluLkludGVyQXBwbGljYXRpb25CdXMucHVibGlzaChlLHQpKSksbSh0LCh0PT5uLmNJJiZmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5zdWJzY3JpYmUoe3V1aWQ6ZmluLm1lLnV1aWR9LGUsdCkpKSx5KHQpLHcodCl9KShcIndpbmRvdy5tZW51XCIpLG8oKCgpPT4oMCxsLnYxKSgpLmdldENoaWxkV2luZG93cygpKSw1MDApO25ldyBNYXA7YSgzMTcpO3ZhciBiPWEoMjM2KTthLm4oYikoKSgoYXN5bmMoKT0+e2NvbnN0IGU9YXdhaXQgZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkuQXBwbGljYXRpb24uZ2V0Q2hpbGRXaW5kb3dzKCk7bGV0IHQsYT0hMTtmb3IoY29uc3QgbiBvZiBlKWlmKG4uaWRlbnRpdHkubmFtZT09PXIuUS5Ccm93c2VyTWVudXx8bi5pZGVudGl0eS5uYW1lPT09ci5RLkJyb3dzZXJTYXZlTWVudT90PW46YXdhaXQoMCxyLmhiKShuLmlkZW50aXR5KSYmKGE9ITApLGEpYnJlYWs7IWEmJnQmJnQuY2xvc2UoKX0pLDEwMCx7bGVhZGluZzohMSx0cmFpbGluZzohMH0pO3ZhciBrLFM7IWZ1bmN0aW9uKGUpe2UuU2F2ZT1cIlNhdmVcIixlLlNhdmVBcz1cIlNhdmVBc1wifShrfHwoaz17fSkpLGZ1bmN0aW9uKGUpe2UuR2xvYmFsTWVudT1cImdsb2JhbC1tZW51XCIsZS5Db250ZXh0TWVudT1cImNvbnRleHQtbWVudVwiLGUuUmVuYW1lU3VwZXJ0YWI9XCJyZW5hbWUtc3VwZXJ0YWJcIixlLkFkZEVkaXRCb29rbWFyaz1cImFkZC1lZGl0LWJvb2ttYXJrXCIsZS5Ecm9wZG93bk1lbnU9XCJkcm9wZG93bi1tZW51XCJ9KFN8fChTPXt9KSk7YSg4NjIpO2NvbnN0IHY9cmVxdWlyZShcImlkYi1rZXl2YWxcIiksUD0oZSx0KT0+KDAsdi5jcmVhdGVTdG9yZSkoZStcIi1cIitmaW4ubWUudXVpZCx0KSxDPShlLHQpPT57Y29uc3QgYT1QKGUsdCk7cmV0dXJuKGFzeW5jKGUsdCxhKT0+e2NvbnN0IG49cC5nZXRJdGVtKGcuQS5IYXNNb3ZlZFN0b3JlKSxyPW4/SlNPTi5wYXJzZShuKTp7fTtpZihyJiZyW2FdKXJldHVybjtyW2FdPSEwLHAuc2V0SXRlbShnLkEuSGFzTW92ZWRTdG9yZSxKU09OLnN0cmluZ2lmeShyKSk7Y29uc3Qgbz1hd2FpdCgwLHYuZW50cmllcykoZSk7YXdhaXQoMCx2LnNldE1hbnkpKG8sdCl9KSgoMCx2LmNyZWF0ZVN0b3JlKShlLHQpLGEsZSksYX07bi5BVCYmbi5jSSYmQyhcIm9wZW5maW4taG9tZS1wYWdlc1wiLFwicGFnZXNcIik7bi5BVCYmbi5jSSYmUChcIm9wZW5maW4tZW50ZXJwcmlzZS10YWItaGlzdG9yeVwiLFwicmVtb3ZlZC10YWItc3RhY2tcIiksbi5BVCYmbi5jSSYmUChcIm9wZW5maW4tZW50ZXJwcmlzZS1zaXRlLWhpc3RvcnlcIixcInZpc2l0ZWQtc2l0ZXNcIik7dmFyIHg7IWZ1bmN0aW9uKGUpe2UuTGFiZWw9XCJub3JtYWxcIixlLlNlcGFyYXRvcj1cInNlcGFyYXRvclwiLGUuU3VibWVudT1cInN1Ym1lbnVcIixlLkNoZWNrYm94PVwiY2hlY2tib3hcIn0oeHx8KHg9e30pKTt4LlNlcGFyYXRvcjthKDI1Nyk7dmFyIEE7IWZ1bmN0aW9uKGUpe2VbZS5Ub3BMZWZ0PTBdPVwiVG9wTGVmdFwiLGVbZS5Ub3BSaWdodD0xXT1cIlRvcFJpZ2h0XCIsZVtlLkJvdHRvbUxlZnQ9Ml09XCJCb3R0b21MZWZ0XCIsZVtlLkJvdHRvbVJpZ2h0PTNdPVwiQm90dG9tUmlnaHRcIixlW2UuQ2VudGVyPTRdPVwiQ2VudGVyXCJ9KEF8fChBPXt9KSk7dmFyIEY9YSgxMDIpOygwLEYuQSkoYCR7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbiYmZmluPy5tZS5pZGVudGl0eS51dWlkfS1lbnRlcnByaXNlLWRvY2tgKSxuLkFUJiZuLmNJJiZQKFwiZG9jay1wcm92aWRlci1jb25maWdzXCIsXCJkb2NrLXByb3ZpZGVyLWNvbmZpZ3NcIik7YSgzOTYpO24uQVQmJm4uY0kmJkMoXCJvcGVuZmluLXdvcmtzcGFjZS1wbGF0Zm9ybS13b3Jrc3BhY2VzXCIsXCJ3b3Jrc3BhY2VzXCIpO2EoMjUwKTtyLiRwLnV1aWQsci5RLkJyb3dzZXJBZGRyZXNzU2VhcmNoUHJlZml4O2EoNDEzKSxhKDE3OSl9LDQxMzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCJ9LDY3NTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse3FUOigpPT5vLHZjOigpPT5nfSk7dmFyIG4scixvLGkscyxjLGwsZCx1LGgsZzthKDE3OSksYSgyNTApOyFmdW5jdGlvbihlKXtlLlVybENoYW5nZT1cIlVSTF9DSEFOR0VcIixlLlZpZXdBZGRlZD1cIlZJRVdfQURERURcIixlLlZpZXdSZW1vdmVkPVwiVklFV19SRU1PVkVEXCIsZS5QYWdlQ29udGV4dEFkZGVkPVwiUEFHRV9DT05URVhUX0FEREVEXCIsZS5QYWdlQ29udGV4dFJlbW92ZWQ9XCJQQUdFX0NPTlRFWFRfUkVNT1ZFRFwifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuTmV3V2luZG93PVwiTmV3V2luZG93XCIsZS5OZXdQYWdlPVwiTmV3UGFnZVwiLGUuU2F2ZVBhZ2U9XCJTYXZlUGFnZVwiLGUuU2F2ZVBhZ2VBcz1cIlNhdmVQYWdlQXNcIixlLlByaW50PVwiUHJpbnRcIixlLlByaW50QWxsPVwiUHJpbnRBbGxcIixlLlByaW50U2NyZWVuPVwiUHJpbnRTY3JlZW5cIixlLkNsb3NlV2luZG93PVwiQ2xvc2VXaW5kb3dcIixlLlJlc3RvcmVDaGFuZ2VzPVwiUmVzdG9yZUNoYW5nZXNcIixlLlNhdmVXb3Jrc3BhY2U9XCJTYXZlV29ya3NwYWNlXCIsZS5TYXZlV29ya3NwYWNlQXM9XCJTYXZlV29ya3NwYWNlQXNcIixlLlJlbmFtZVdvcmtzcGFjZT1cIlJlbmFtZVdvcmtzcGFjZVwiLGUuU3dpdGNoV29ya3NwYWNlPVwiU3dpdGNoV29ya3NwYWNlXCIsZS5EZWxldGVXb3Jrc3BhY2U9XCJEZWxldGVXb3Jrc3BhY2VcIixlLkRvd25sb2Fkcz1cIkRvd25sb2Fkc1wiLGUuT3BlblN0b3JlZnJvbnQ9XCJPcGVuU3RvcmVmcm9udFwiLGUuQXBwZWFyYW5jZT1cIkFwcGVhcmFuY2VcIixlLlF1aXQ9XCJRdWl0XCIsZS5DdXN0b209XCJDdXN0b21cIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlLkxpZ2h0PVwibGlnaHRcIixlLkRhcms9XCJkYXJrXCIsZS5TeXN0ZW09XCJzeXN0ZW1cIn0ob3x8KG89e30pKSxmdW5jdGlvbihlKXtlLkNsb3NlPVwiQ2xvc2VcIixlLkR1cGxpY2F0ZT1cIkR1cGxpY2F0ZVwiLGUuUmVuYW1lPVwiUmVuYW1lXCIsZS5TYXZlPVwiU2F2ZVwiLGUuU2F2ZUFzPVwiU2F2ZSBBc1wiLGUuTmV3UGFnZT1cIk5ldyBQYWdlXCIsZS5EZWxldGVQYWdlPVwiRGVsZXRlIFBhZ2VcIixlLlNhdmVXb3Jrc3BhY2VBcz1cIlNhdmVXb3Jrc3BhY2VBc1wiLGUuUmVmcmVzaD1cIlJlZnJlc2hcIixlLkNsb3NlT3RoZXJzPVwiQ2xvc2Ugb3RoZXJzXCIsZS5EZWxldGU9XCJEZWxldGVcIixlLlByaW50PVwiUHJpbnRcIixlLlByaW50QWxsPVwiUHJpbnRBbGxcIixlLlByaW50U2NyZWVuPVwiUHJpbnRTY3JlZW5cIixlLkN1c3RvbT1cIkN1c3RvbVwifShpfHwoaT17fSkpLGZ1bmN0aW9uKGUpe2UuTG9jaz1cIkxvY2tcIixlLlNob3dIaWRlVGFicz1cIlNob3dIaWRlVGFic1wiLGUuQWRkVG9DaGFuZWw9XCJBZGRUb0NoYW5uZWxcIixlLlByaW50PVwiUHJpbnRcIixlLlBpbj1cIlBpblwifShzfHwocz17fSkpLGZ1bmN0aW9uKGUpe2UuRWRpdE5hbWU9XCJFZGl0IE5hbWVcIixlLk1vdmU9XCJNb3ZlXCIsZS5EZWxldGU9XCJEZWxldGVcIn0oY3x8KGM9e30pKSxmdW5jdGlvbihlKXtlLk5ld1ZpZXc9XCJOZXdWaWV3XCIsZS5EdXBsaWNhdGVWaWV3cz1cIkR1cGxpY2F0ZVZpZXdcIixlLk9wZW5XaXRoRGVmYXVsdEJyb3dzZXI9XCJPcGVuV2l0aERlZmF1bHRCcm93c2VyXCIsZS5SZWxvYWRWaWV3cz1cIlJlbG9hZFRhYlwiLGUuQ2xvc2VWaWV3cz1cIkNsb3NlVGFiXCIsZS5BZGRUb0NoYW5uZWw9XCJBZGRUb0NoYW5uZWxcIixlLlJlbW92ZUZyb21DaGFubmVsPVwiUmVtb3ZlRnJvbUNoYW5uZWxcIixlLkJhY2s9XCJCYWNrXCIsZS5Gb3J3YXJkPVwiRm9yd2FyZFwiLGUuUHJpbnQ9XCJQcmludFwiLGUuUHJpbnRBbGw9XCJQcmludEFsbFwiLGUuUHJpbnRTY3JlZW49XCJQcmludFNjcmVlblwiLGUuQ3VzdG9tPVwiQ3VzdG9tXCJ9KGx8fChsPXt9KSksZnVuY3Rpb24oZSl7ZS5TaG93SGlkZVRhYnM9XCJTaG93SGlkZVRhYnNcIixlLkNvbG9yTGlua2luZz1cIkNvbG9yTGlua2luZ1wiLGUuUHJlc2V0TGF5b3V0cz1cIlByZXNldExheW91dHNcIixlLkxvY2tVbmxvY2tQYWdlPVwiTG9ja1VubG9ja1BhZ2VcIixlLlNhdmVNZW51PVwiU2F2ZU1lbnVcIixlLlNhdmVQYWdlPVwiU2F2ZVBhZ2VcIixlLk1pbmltaXNlPVwiTWluaW1pc2VcIixlLk1heGltaXNlPVwiTWF4aW1pc2VcIixlLkNsb3NlPVwiQ2xvc2VcIixlLkN1c3RvbT1cIkN1c3RvbVwifShkfHwoZD17fSkpLGZ1bmN0aW9uKGUpe2UuU2F2ZVBhZ2U9XCJTYXZlUGFnZVwiLGUuU2F2ZVdvcmtzcGFjZT1cIlNhdmVXb3Jrc3BhY2VcIixlLlNhdmVQYWdlQXM9XCJTYXZlUGFnZUFzXCIsZS5TYXZlV29ya3NwYWNlQXM9XCJTYXZlV29ya3NwYWNlQXNcIixlLkN1c3RvbT1cIkN1c3RvbVwifSh1fHwodT17fSkpLGZ1bmN0aW9uKGUpe2UuQnJvd3Nlcj1cImJyb3dzZXJcIixlLlBsYXRmb3JtPVwicGxhdGZvcm1cIn0oaHx8KGg9e30pKSxmdW5jdGlvbihlKXtlLkN1c3RvbUJ1dHRvbj1cIkN1c3RvbUJ1dHRvblwiLGUuU3RvcmVDdXN0b21CdXR0b249XCJTdG9yZUN1c3RvbUJ1dHRvblwiLGUuQ3VzdG9tRHJvcGRvd25JdGVtPVwiQ3VzdG9tRHJvcGRvd25JdGVtXCIsZS5HbG9iYWxDb250ZXh0TWVudT1cIkdsb2JhbENvbnRleHRNZW51XCIsZS5WaWV3VGFiQ29udGV4dE1lbnU9XCJWaWV3VGFiQ29udGV4dE1lbnVcIixlLlBhZ2VUYWJDb250ZXh0TWVudT1cIlBhZ2VUYWJDb250ZXh0TWVudVwiLGUuU2F2ZUJ1dHRvbkNvbnRleHRNZW51PVwiU2F2ZUJ1dHRvbkNvbnRleHRNZW51XCIsZS5BUEk9XCJBUElcIn0oZ3x8KGc9e30pKTt2YXIgcDshZnVuY3Rpb24oZSl7ZS5TQVZFX1BBR0U9XCJTQVZFX1BBR0VcIixlLlNBVkVfV09SS1NQQUNFPVwiU0FWRV9XT1JLU1BBQ0VcIixlLlNBVkVfUEFHRV9BUz1cIlNBVkVfUEFHRV9BU1wiLGUuU0FWRV9XT1JLU1BBQ0VfQVM9XCJTQVZFX1dPUktTUEFDRV9BU1wiLGUuUkVOQU1FX1BBR0U9XCJSRU5BTUVfUEFHRVwiLGUuUkVOQU1FX1dPUktTUEFDRT1cIlJFTkFNRV9XT1JLU1BBQ0VcIn0ocHx8KHA9e30pKX0sMTI5OigpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGUsdCxhOyFmdW5jdGlvbihlKXtlLkZldGNoaW5nPVwiZmV0Y2hpbmdcIixlLkZldGNoZWQ9XCJmZXRjaGVkXCIsZS5Db21wbGV0ZT1cImNvbXBsZXRlXCJ9KGV8fChlPXt9KSksZnVuY3Rpb24oZSl7ZS5Vc2VyQWN0aW9uPVwidXNlci1hY3Rpb25cIixlLkZvY3VzQ2hhbmdlPVwiZm9jdXMtY2hhbmdlXCIsZS5SZWxvYWQ9XCJyZWxvYWRcIn0odHx8KHQ9e30pKSxmdW5jdGlvbihlKXtlLkFjdGl2ZT1cImFjdGl2ZVwiLGUuRGVmYXVsdD1cImRlZmF1bHRcIn0oYXx8KGE9e30pKX0sNjAwOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjshZnVuY3Rpb24oZSl7ZS5BY3Rpb25CdXR0b249XCJBY3Rpb25CdXR0b25cIixlLkRyb3Bkb3duQnV0dG9uPVwiRHJvcGRvd25CdXR0b25cIn0obnx8KG49e30pKX0sODcyOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbixyLG87IWZ1bmN0aW9uKGUpe2UuU3VnZ2VzdGlvbj1cInN1Z2dlc3Rpb25cIn0obnx8KG49e30pKSxmdW5jdGlvbihlKXtlLkNvbnRhY3Q9XCJDb250YWN0XCIsZS5DdXN0b209XCJDdXN0b21cIixlLkxpc3Q9XCJMaXN0XCIsZS5QbGFpbj1cIlBsYWluXCIsZS5TaW1wbGVUZXh0PVwiU2ltcGxlVGV4dFwiLGUuTG9hZGluZz1cIkxvYWRpbmdcIixlLkVycm9yPVwiRXJyb3JcIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlLk11bHRpU2VsZWN0PVwiTXVsdGlTZWxlY3RcIn0ob3x8KG89e30pKX0sMTc5OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthKDEyOSksYSg4NzIpLGEoNzEwKSxhKDE4NCksYSg2MDApfSw3MTA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuLHI7IWZ1bmN0aW9uKGUpe2UuU25hcHNob3Q9XCJzbmFwc2hvdFwiLGUuTWFuaWZlc3Q9XCJtYW5pZmVzdFwiLGUuVmlldz1cInZpZXdcIixlLkV4dGVybmFsPVwiZXh0ZXJuYWxcIn0obnx8KG49e30pKSxmdW5jdGlvbihlKXtlLkxhbmRpbmdQYWdlPVwibGFuZGluZ1BhZ2VcIixlLkFwcEdyaWQ9XCJhcHBHcmlkXCJ9KHJ8fChyPXt9KSl9LDE4NDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47IWZ1bmN0aW9uKGUpe2UuUHJpbWFyeT1cInByaW1hcnlcIixlLlNlY29uZGFyeT1cInNlY29uZGFyeVwiLGUuVGV4dE9ubHk9XCJ0ZXh0T25seVwifShufHwobj17fSkpfSw2Nzg6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtCRzooKT0+c30pO3ZhciBuPWEoOTQwKSxyPWEoODYyKSxvPWEoMzMzKTthKDY5NSk7Y29uc3QgaT1hc3luYyBlPT4oey4uLmUsbGF5b3V0RGV0YWlsczp7bWFjaGluZUlkOmF3YWl0KDAsci5EMSkoKSxtYWNoaW5lTmFtZTooMCxyLmZDKSgpfX0pLHM9YXN5bmMgZT0+e2NvbnN0IHQ9YXdhaXQoYXN5bmMoZSx0KT0+KHtwYWdlSWQ6KDAsby5OKSgpLHRpdGxlOmUsbGF5b3V0OmF3YWl0IGkodCksaXNSZWFkT25seTohMX0pKShlLnRpdGxlLCgwLG4ueFApKGUubGF5b3V0KSk7cmV0dXJuIGUucGFuZWxzJiYodC5wYW5lbHM9ZS5wYW5lbHMubWFwKChlPT4oey4uLmUsdmlld09wdGlvbnM6KDAsbi5maCkoZS52aWV3T3B0aW9ucyl9KSkpKSx7Li4uZSwuLi50fX19LDI1MDooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47IWZ1bmN0aW9uKGUpe2UuTGVmdD1cIkxlZnRcIixlLlJpZ2h0PVwiUmlnaHRcIixlLlRvcD1cIlRvcFwiLGUuQm90dG9tPVwiQm90dG9tXCJ9KG58fChuPXt9KSl9LDMyNjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0hjOigpPT5kLGFROigpPT5oLHA0OigpPT5pfSk7dmFyIG49YSgxMDIpO2EoNzApO2NvbnN0IHI9KGUsdCk9PnQ/YCR7dH0tJHtlLnV1aWR9LSR7ZS5uYW1lfWA6YF9fYnJvd3Nlcl93aW5kb3dfXy0ke2UudXVpZH0tJHtlLm5hbWV9YCxvPW5ldyBNYXAsaT0oZSx0KT0+e2NvbnN0IGE9cihlLHQpO3JldHVybiBpPWEsby5oYXMoaSl8fG8uc2V0KGksKDAsbi5BKShpKSksby5nZXQoaSkoKTt2YXIgaX07dmFyIHMsYyxsLGQsdTshZnVuY3Rpb24oZSl7ZS5DbG9zZUJyb3dzZXJXaW5kb3c9XCJjbG9zZS1icm93c2VyLXdpbmRvd1wiLGUuUXVpdFBsYXRmb3JtPVwicXVpdC1wbGF0Zm9ybVwiLGUuQ2xvc2VQYWdlPVwiY2xvc2UtcGFnZVwiLGUuQWRkVG9DaGFubmVsPVwiYWRkLXRvLWNoYW5uZWxcIixlLlJlbW92ZUZyb21DaGFubmVsPVwicmVtb3ZlLWZyb20tY2hhbm5lbFwiLGUuT3BlblNhdmVNb2RhbEludGVybmFsPVwib3Blbi1zYXZlLW1vZGFsLWludGVybmFsXCIsZS5EdXBsaWNhdGVQYWdlPVwiZHVwbGljYXRlLXBhZ2VcIixlLlNldFNlbGVjdGVkU2NoZW1lPVwic2V0LXNlbGVjdGVkLXNjaGVtZVwiLGUuU2hvd0Jyb3dzZXJJbmRpY2F0b3I9XCJzaG93LWJyb3dzZXItaW5kaWNhdG9yXCIsZS5TZXRTZWxlY3RlZExhbmd1YWdlPVwic2V0LXNlbGVjdGVkLWxhbmd1YWdlXCIsZS5SZWZyZXNoQm9va21hcmtzSW50ZXJuYWw9XCJyZWZyZXNoLWJvb2ttYXJrc1wiLGUuR2V0TGF5b3V0c1dpdGhTZWxlY3RlZFZpZXdzSW50ZXJuYWw9XCJnZXQtbGF5b3V0cy13aXRoLXNlbGVjdGVkLXZpZXdzXCJ9KHN8fChzPXt9KSksZnVuY3Rpb24oZSl7ZS5HZXRQYWdlcz1cImdldC1wYWdlc1wiLGUuR2V0QWN0aXZlUGFnZUZvcldpbmRvdz1cImdldC1hY3RpdmUtcGFnZS1mb3Itd2luZG93XCIsZS5BdHRhY2hQYWdlc1RvV2luZG93PVwiYXR0YWNoLXBhZ2VzLXRvLXdpbmRvd1wiLGUuRGV0YWNoUGFnZXNGcm9tV2luZG93PVwiZGV0YWNoLXBhZ2VzLWZyb20td2luZG93XCIsZS5TZXRBY3RpdmVQYWdlRm9yV2luZG93PVwic2V0LWFjdGl2ZS1wYWdlLWZvci13aW5kb3dcIixlLlJlbmFtZVBhZ2U9XCJyZW5hbWUtcGFnZVwiLGUuUmVvcmRlclBhZ2VzRm9yV2luZG93PVwicmVvcmRlci1wYWdlcy1mb3Itd2luZG93XCIsZS5VcGRhdGVQYWdlRm9yV2luZG93PVwidXBkYXRlLXBhZ2UtZm9yLXdpbmRvd1wiLGUuVXBkYXRlUGFnZXNXaW5kb3dPcHRpb25zPVwidXBkYXRlLXBhZ2VzLXdpbmRvdy1vcHRpb25zXCIsZS5Jc0RldGFjaGluZ1BhZ2VzPVwiaXMtZGV0YWNoaW5nLXBhZ2VzXCIsZS5Jc0FjdGl2ZVBhZ2VDaGFuZ2luZz1cImlzLWFjdGl2ZS1wYWdlLWNoYW5naW5nXCJ9KGN8fChjPXt9KSksZnVuY3Rpb24oZSl7ZS5HZXRBcHBzPVwiZ2V0LWFwcHNcIixlLkdldEN1cmF0ZWRDb250ZW50PVwiZ2V0LWN1cmF0ZWQtY29udGVudFwiLGUuR2V0UmVjZW50bHlWaXNpdGVkPVwiZ2V0LXJlY2VudGx5LXZpc2l0ZWRcIixlLkdldFNlYXJjaFByb3ZpZGVycz1cImdldC1zZWFyY2gtcHJvdmlkZXJzXCJ9KGx8fChsPXt9KSksZnVuY3Rpb24oZSl7ZS5DcmVhdGVCb29rbWFya05vZGU9XCJjcmVhdGUtYm9va21hcmstbm9kZVwiLGUuR2V0Qm9va21hcmtOb2RlPVwiZ2V0LWJvb2ttYXJrLW5vZGVcIixlLlNlYXJjaEJvb2ttYXJrTm9kZXM9XCJzZWFyY2gtYm9va21hcmstbm9kZXNcIixlLlVwZGF0ZUJvb2ttYXJrTm9kZT1cInVwZGF0ZS1ib29rbWFyay1ub2RlXCIsZS5EZWxldGVCb29rbWFya05vZGU9XCJkZWxldGUtYm9va21hcmstbm9kZVwifShkfHwoZD17fSkpLGZ1bmN0aW9uKGUpe2UuVXBkYXRlRmF2b3JpdGVFbnRyaWVzPVwidXBkYXRlLWZhdm9yaXRlLWVudHJpZXNcIixlLlVwZGF0ZUNvbnRlbnRNZW51PVwidXBkYXRlLWNvbnRlbnQtbWVudVwiLGUuTmF2aWdhdGVDb250ZW50TWVudT1cIm5hdmlnYXRlLWNvbnRlbnQtbWVudVwifSh1fHwodT17fSkpO2NvbnN0IGg9ey4uLnMsLi4uYywuLi51fX0sNzk6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuO2EuZCh0LHtLWjooKT0+byxOOigpPT5pLE9GOigpPT5uLGJXOigpPT5zfSksZnVuY3Rpb24oZSl7ZS5MYXVuY2hBcHA9XCJsYXVuY2hBcHBcIixlLlNhdmVQYWdlPVwic2F2ZVBhZ2VcIixlLkdldFNhdmVkUGFnZT1cImdldFNhdmVkUGFnZVwiLGUuQ3JlYXRlU2F2ZWRQYWdlPVwiY3JlYXRlU2F2ZWRQYWdlXCIsZS5VcGRhdGVTYXZlZFBhZ2U9XCJ1cGRhdGVTYXZlZFBhZ2VcIixlLkRlbGV0ZVNhdmVkUGFnZT1cImRlbGV0ZVNhdmVkUGFnZVwiLGUuR2V0U2F2ZWRQYWdlcz1cImdldFNhdmVkUGFnZXNcIixlLkNyZWF0ZVNhdmVkUGFnZUludGVybmFsPVwiY3JlYXRlU2F2ZWRQYWdlSW50ZXJuYWxcIixlLlVwZGF0ZVNhdmVkUGFnZUludGVybmFsPVwidXBkYXRlU2F2ZWRQYWdlSW50ZXJuYWxcIixlLkRlbGV0ZVNhdmVkUGFnZUludGVybmFsPVwiZGVsZXRlU2F2ZWRQYWdlSW50ZXJuYWxcIixlLlVwZGF0ZVBhZ2VGb3JXaW5kb3c9XCJ1cGRhdGVQYWdlRm9yV2luZG93XCIsZS5BdHRhY2hQYWdlc1RvV2luZG93PVwiYXR0YWNoUGFnZXNUb1dpbmRvd1wiLGUuRGV0YWNoUGFnZXNGcm9tV2luZG93PVwiZGV0YWNoUGFnZXNGcm9tV2luZG93XCIsZS5SZW9yZGVyUGFnZXNGb3JXaW5kb3c9XCJyZW9yZGVyUGFnZXNGb3JXaW5kb3dcIixlLlNldEFjdGl2ZVBhZ2U9XCJzZXRBY3RpdmVQYWdlXCIsZS5BZGRQYWdlPVwiYWRkUGFnZVwiLGUuQWRkRGVmYXVsdFBhZ2U9XCJhZGREZWZhdWx0UGFnZVwiLGUuR2V0QWxsQXR0YWNoZWRQYWdlcz1cImdldEFsbEF0dGFjaGVkUGFnZXNcIixlLkdldEFjdGl2ZVBhZ2VJZEZvcldpbmRvdz1cImdldEFjdGl2ZVBhZ2VJZEZvcldpbmRvd1wiLGUuR2V0UGFnZXNGb3JXaW5kb3c9XCJnZXRQYWdlc0ZvcldpbmRvd1wiLGUuR2V0UGFnZUZvcldpbmRvdz1cImdldFBhZ2VGb3JXaW5kb3dcIixlLkdldFNhdmVkUGFnZU1ldGFkYXRhPVwiZ2V0U2F2ZWRQYWdlTWV0YWRhdGFcIixlLkdldFVuaXF1ZVBhZ2VUaXRsZT1cImdldFVuaXF1ZVBhZ2VUaXRsZVwiLGUuR2V0TGFzdEZvY3VzZWRCcm93c2VyV2luZG93PVwiZ2V0TGFzdEZvY3VzZWRCcm93c2VyV2luZG93XCIsZS5HZXRUaGVtZXM9XCJnZXRUaGVtZXNcIixlLkdldFNlbGVjdGVkU2NoZW1lPVwiZ2V0U2VsZWN0ZWRTY2hlbWVcIixlLlNldFNlbGVjdGVkU2NoZW1lPVwic2V0U2VsZWN0ZWRTY2hlbWVcIixlLk9wZW5HbG9iYWxDb250ZXh0TWVudUludGVybmFsPVwib3Blbkdsb2JhbENvbnRleHRNZW51SW50ZXJuYWxcIixlLk9wZW5WaWV3VGFiQ29udGV4dE1lbnVJbnRlcm5hbD1cIm9wZW5WaWV3VGFiQ29udGV4dE1lbnVJbnRlcm5hbFwiLGUuT3BlblBhZ2VUYWJDb250ZXh0TWVudUludGVybmFsPVwib3BlblBhZ2VUYWJDb250ZXh0TWVudUludGVybmFsXCIsZS5PcGVuU2F2ZUJ1dHRvbkNvbnRleHRNZW51SW50ZXJuYWw9XCJvcGVuU2F2ZUJ1dHRvbkNvbnRleHRNZW51SW50ZXJuYWxcIixlLkludm9rZUN1c3RvbUFjdGlvbkludGVybmFsPVwiaW52b2tlQ3VzdG9tQWN0aW9uSW50ZXJuYWxcIixlLlJlcXVlc3RRdWl0UGxhdGZvcm1EaWFsb2dJbnRlcm5hbD1cInJlcXVlc3RRdWl0UGxhdGZvcm1EaWFsb2dJbnRlcm5hbFwiLGUuR2V0U2F2ZWRXb3Jrc3BhY2U9XCJnZXRTYXZlZFdvcmtzcGFjZVwiLGUuQ3JlYXRlU2F2ZWRXb3Jrc3BhY2U9XCJjcmVhdGVTYXZlZFdvcmtzcGFjZVwiLGUuVXBkYXRlU2F2ZWRXb3Jrc3BhY2U9XCJ1cGRhdGVTYXZlZFdvcmtzcGFjZVwiLGUuRGVsZXRlU2F2ZWRXb3Jrc3BhY2U9XCJkZWxldGVTYXZlZFdvcmtzcGFjZVwiLGUuR2V0U2F2ZWRXb3Jrc3BhY2VzPVwiZ2V0U2F2ZWRXb3Jrc3BhY2VzXCIsZS5TYXZlV29ya3NwYWNlPVwic2F2ZVdvcmtzcGFjZVwiLGUuR2V0Q3VycmVudFdvcmtzcGFjZT1cImdldEN1cnJlbnRXb3Jrc3BhY2VcIixlLkFwcGx5V29ya3NwYWNlPVwiYXBwbHlXb3Jrc3BhY2VcIixlLlNldEFjdGl2ZVdvcmtzcGFjZT1cInNldEFjdGl2ZVdvcmtzcGFjZVwiLGUuSXNCcm93c2VySW5pdGlhbGl6ZWQ9XCJpc0Jyb3dzZXJJbml0aWFsaXplZFwiLGUuQW5hbHl0aWNzPVwiYW5hbHl0aWNzSW50ZXJuYWxcIixlLkdldExhbmd1YWdlPVwiZ2V0TGFuZ3VhZ2VcIixlLkdldExhbmd1YWdlUmVzb3VyY2VzSW50ZXJuYWw9XCJnZXRMYW5ndWFnZVJlc291cmNlc0ludGVybmFsXCIsZS5TZXRMYW5ndWFnZT1cInNldExhbmd1YWdlXCIsZS5HZXREb2NrUHJvdmlkZXJDb25maWc9XCJnZXREb2NrUHJvdmlkZXJDb25maWdcIixlLlNhdmVEb2NrUHJvdmlkZXJDb25maWc9XCJzYXZlRG9ja1Byb3ZpZGVyQ29uZmlnXCIsZS5IYW5kbGVTYXZlTW9kYWxPblBhZ2VDbG9zZT1cImhhbmRsZVNhdmVNb2RhbE9uUGFnZUNsb3NlXCIsZS5TaG91bGRQYWdlQ2xvc2U9XCJzaG91bGRQYWdlQ2xvc2VcIixlLlNob3VsZFdpbmRvd0Nsb3NlPVwic2hvdWxkV2luZG93Q2xvc2VcIixlLkNvcHlQYWdlPVwiY29weVBhZ2VcIixlLkhhbmRsZVBhZ2VDaGFuZ2VzPVwiaGFuZGxlUGFnZUNoYW5nZXNcIixlLk1hcmtVbnNhdmVkUGFnZXNBc1NhdmVkSW50ZXJuYWw9XCJtYXJrVW5zYXZlZFBhZ2VzQXNTYXZlZEludGVybmFsXCIsZS5UcmFja1JlbW92ZWRUYWJJbnRlcm5hbD1cInRyYWNrUmVtb3ZlZFRhYkludGVybmFsXCIsZS5SZXN0b3JlUmVtb3ZlZFRhYkludGVybmFsPVwicmVzdG9yZVJlbW92ZWRUYWJJbnRlcm5hbFwiLGUuVHJhY2tWaXNpdGVkU2l0ZUludGVybmFsPVwidHJhY2tWaXNpdGVkU2l0ZUludGVybmFsXCIsZS5HZXRSZWNlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsPVwiZ2V0UmVjZW50bHlWaXNpdGVkU2l0ZXNJbnRlcm5hbFwiLGUuR2V0RnJlcXVlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsPVwiZ2V0RnJlcXVlbnRseVZpc2l0ZWRTaXRlc0ludGVybmFsXCIsZS5TZWFyY2hTaXRlc0ludGVybmFsPVwic2VhcmNoU2l0ZXNJbnRlcm5hbFwiLGUuR2V0U2VhcmNoUHJvdmlkZXJzSW50ZXJuYWw9XCJnZXRTZWFyY2hQcm92aWRlcnNJbnRlcm5hbFwiLGUuR2V0Q3VyYXRlZENvbnRlbnRJbnRlcm5hbD1cImdldEN1cmF0ZWRDb250ZW50SW50ZXJuYWxcIixlLkhhbmRsZVJlcXVlc3ROYXZpZ2F0aW9uSW50ZXJuYWw9XCJoYW5kbGVSZXF1ZXN0TmF2aWdhdGlvbkludGVybmFsXCIsZS5SZWZyZXNoQm9va21hcmtzSW50ZXJuYWw9XCJyZWZyZXNoQm9va21hcmtzSW50ZXJuYWxcIixlLkxhdW5jaEJvb2ttYXJrSW50ZXJuYWw9XCJsYXVuY2hCb29rbWFya0ludGVybmFsXCIsZS5HZXROb3RpZmljYXRpb25zQ29uZmlnPVwiZ2V0Tm90aWZpY2F0aW9uc0NvbmZpZ1wiLGUuVXBkYXRlRG9ja0Zhdm9yaXRlc0ludGVybmFsPVwidXBkYXRlRG9ja0Zhdm9yaXRlc0ludGVybmFsXCIsZS5VcGRhdGVDb250ZW50TWVudUludGVybmFsPVwidXBkYXRlQ29udGVudE1lbnVJbnRlcm5hbFwiLGUuTGF1bmNoRG9ja0VudHJ5SW50ZXJuYWw9XCJsYXVuY2hEb2NrRW50cnlJbnRlcm5hbFwiLGUuU2V0RG9ja0Zhdm9yaXRlc09yZGVySW50ZXJuYWw9XCJzZXREb2NrRmF2b3JpdGVzT3JkZXJJbnRlcm5hbFwiLGUuTmF2aWdhdGVDb250ZW50TWVudUludGVybmFsPVwibmF2aWdhdGVDb250ZW50TWVudUludGVybmFsXCIsZS5TZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWw9XCJzZXREb2NrV29ya3NwYWNlQnV0dG9uc09yZGVySW50ZXJuYWxcIixlLkdldERvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbD1cImdldERvY2tXb3Jrc3BhY2VzQ29udGV4dE1lbnVJbnRlcm5hbFwiLGUuSGFuZGxlRG9ja1dvcmtzcGFjZXNNZW51UmVzcG9uc2VJbnRlcm5hbD1cImhhbmRsZURvY2tXb3Jrc3BhY2VzTWVudVJlc3BvbnNlSW50ZXJuYWxcIixlLlJlbW92ZURvY2tGYXZvcml0ZUludGVybmFsPVwicmVtb3ZlRG9ja0Zhdm9yaXRlSW50ZXJuYWxcIixlLkFkZERvY2tGYXZvcml0ZUludGVybmFsPVwiYWRkRG9ja0Zhdm9yaXRlSW50ZXJuYWxcIn0obnx8KG49e30pKTtjb25zdCByPWFzeW5jIGU9PmZpbi5QbGF0Zm9ybS53cmFwU3luYyhlKS5nZXRDbGllbnQoKSxvPWFzeW5jIGU9Pntjb25zdCB0PWF3YWl0IHIoZSksYT1cIlRhcmdldCBpcyBub3QgYSBXb3Jrc3BhY2UgUGxhdGZvcm0uIFRhcmdldCBtdXN0IGNhbGwgV29ya3NwYWNlUGxhdGZvcm0uaW5pdFwiO2xldCBuO3RyeXtuPWF3YWl0IHQuZGlzcGF0Y2goXCJpc1dvcmtzcGFjZVBsYXRmb3JtXCIpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihhKX1pZihcImJvb2xlYW5cIj09dHlwZW9mIG4mJm4pcmV0dXJuIGNvbnNvbGUud2FybihcIllvdSBhcmUgdXNpbmcgYW4gb2xkZXIgdmVyc2lvbiBvZiB0aGUgd29ya3NwYWNlIHBsYXRmb3JtLiBQbGVhc2UgdXBkYXRlIHlvdXIgd29ya3NwYWNlIHBsYXRmb3JtLlwiKSxuO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBuJiZuLmlzV29ya3NwYWNlUGxhdGZvcm0pcmV0dXJuIG47dGhyb3cgbmV3IEVycm9yKGEpfSxpPWFzeW5jIGU9Pihhd2FpdCBvKGUpLHIoZSkpLHM9YXN5bmMgZT0+e2NvbnN0IHQ9YXdhaXQgbyhlKTtpZihcIm9iamVjdFwiPT10eXBlb2YgdCYmITAhPT10Py5pc0Jyb3dzZXJJbml0aWFsaXplZCl0aHJvdyBuZXcgRXJyb3IoXCJUYXJnZXQgaXMgbm90IGEgQnJvd3Nlci1lbmFibGVkIFdvcmtzcGFjZSBQbGF0Zm9ybS5cIik7cmV0dXJuIHIoZSl9fSw2OTU6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPWEoMTAyKSxyPShhKDcyMyksYSg3MCksYSg5MDUpKTsoMCxuLkEpKFwiX19vZl93b3Jrc3BhY2VfcHJvdG9jb2xfX1wiKSwoMCxuLkEpKHIuQlQpfSw5MDU6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtCVDooKT0+bn0pO2NvbnN0IG49XCJfX3NlYXJjaC1vcGVuZmluLWJyb3dzZXItaG9tZS10b3BpY19fXCI7dmFyIHIsbzshZnVuY3Rpb24oZSl7ZS5GZXRjaGluZz1cImZldGNoaW5nXCIsZS5GZXRjaGVkPVwiZmV0Y2hlZFwiLGUuQ29tcGxldGU9XCJjb21wbGV0ZVwifShyfHwocj17fSkpLGZ1bmN0aW9uKGUpe2VbZS5Jbml0aWFsPTBdPVwiSW5pdGlhbFwiLGVbZS5PcGVuPTFdPVwiT3BlblwiLGVbZS5DbG9zZT0yXT1cIkNsb3NlXCJ9KG98fChvPXt9KSl9LDI1NzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0Y6KCk9PnJ9KTt2YXIgbj1hKDM2NSk7Y29uc3Qgcj1lPT57Y29uc3QgdD1maW4uUGxhdGZvcm0uTGF5b3V0LndyYXBTeW5jKGUpO3JldHVybntzaG93OmFzeW5jKCk9Pntjb25zdCBhPWF3YWl0IHQuZ2V0Q29uZmlnKCkse3NldHRpbmdzOnIsZGltZW5zaW9uczpvfT1hLGk9YXdhaXQoMCxuLkFlKShlKTthd2FpdCB0LnJlcGxhY2Uoey4uLmEsc2V0dGluZ3M6ey4uLnIsaGFzSGVhZGVyczohMCxyZW9yZGVyRW5hYmxlZDohMH0sZGltZW5zaW9uczp7Li4ubyxoZWFkZXJIZWlnaHQ6aT8yODozMH19KX0saGlkZTphc3luYyBlPT57Y29uc3QgYT1hd2FpdCB0LmdldENvbmZpZygpLHtzZXR0aW5nczpuLGRpbWVuc2lvbnM6cn09YXdhaXQgYTthd2FpdCB0LnJlcGxhY2Uoey4uLmEsc2V0dGluZ3M6ey4uLm4saGFzSGVhZGVyczohMSxyZW9yZGVyRW5hYmxlZDplPy5zZXR0aW5ncz8ucmVvcmRlckVuYWJsZWQ/PyExfSxkaW1lbnNpb25zOnsuLi5yLGhlYWRlckhlaWdodDowfX0pfSxpc1Nob3dpbmdUYWJzOmFzeW5jKCk9Pnt0cnl7Y29uc3QgZT1hd2FpdCB0LmdldENvbmZpZygpLHtzZXR0aW5nczphfT1hd2FpdCBlO3JldHVybiBhLmhhc0hlYWRlcnN9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJmYWlsZWQgdG8gZ2V0IGxheW91dCBjb25maWc6IFwiLGUpLCEwfX19fX0sOTU3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7cXE6KCk9Pmt9KTt2YXIgbj1hKDg0Nykscj1hKDg5OCksbz1hKDcwKSxpPWEoMTQxKSxzPShhKDY3NSksYSg4NzcpKSxjPWEubihzKSxsPWEoNjcpLGQ9YS5uKGwpO2NvbnN0IHU9e2xpZ2h0OntzeW1ib2w6ZCgpPy5zcmN8fFwiXCJ9LGRhcms6e3N5bWJvbDpjKCk/LnNyY3x8XCJcIn19O2EoNjk1KSxhKDc5KTtjb25zdCBoPVwiZGFya1wiLGc9e1tuLlBhbGV0dGUuYnJhbmRQcmltYXJ5XTpcIiMwQTc2RDNcIixbbi5QYWxldHRlLnN0YXR1c1N1Y2Nlc3NdOm4uQ29sb3IuZnVuY3Rpb25hbDEsW24uUGFsZXR0ZS5zdGF0dXNXYXJuaW5nXTpuLkNvbG9yLmZ1bmN0aW9uYWwxMCxbbi5QYWxldHRlLnN0YXR1c0NyaXRpY2FsXTpuLkNvbG9yLmZ1bmN0aW9uYWw3LFtuLlBhbGV0dGUuc3RhdHVzQWN0aXZlXTpuLkNvbG9yLmZ1bmN0aW9uYWwzLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQxXTpcIiMwQTc2RDNcIixbbi5QYWxldHRlLmNvbnRlbnRCYWNrZ3JvdW5kMl06XCIjMDAwMDAwXCIsW24uUGFsZXR0ZS5jb250ZW50QmFja2dyb3VuZDNdOlwiIzAwMDAwMFwiLFtuLlBhbGV0dGUuY29udGVudEJhY2tncm91bmQ0XTpcIiMwMDAwMDBcIixbbi5QYWxldHRlLmNvbnRlbnRCYWNrZ3JvdW5kNV06XCIjMDAwMDAwXCJ9LHA9ey4uLmcsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kMV06bi5Db2xvci53aGl0ZSxbbi5QYWxldHRlLmJhY2tncm91bmQyXTpuLkNvbG9yLmxpZ2h0R3JheTEsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kM106bi5Db2xvci5saWdodEdyYXkyLFtuLlBhbGV0dGUuYmFja2dyb3VuZDRdOm4uQ29sb3IubGlnaHRHcmF5Myxbbi5QYWxldHRlLmJhY2tncm91bmQ1XTpuLkNvbG9yLmxpZ2h0R3JheTQsW24uUGFsZXR0ZS5iYWNrZ3JvdW5kNl06bi5Db2xvci5saWdodEdyYXk1LFtuLlBhbGV0dGUuYnJhbmRTZWNvbmRhcnldOm4uQ29sb3IubGlnaHRHcmF5NCxbbi5QYWxldHRlLmlucHV0QmFja2dyb3VuZF06bi5Db2xvci5saWdodEdyYXkzLFtuLlBhbGV0dGUuaW5wdXRDb2xvcl06bi5Db2xvci5kYXJrR3JheTUsW24uUGFsZXR0ZS5pbnB1dFBsYWNlaG9sZGVyXTpuLkNvbG9yLmRhcmtHcmF5Mixbbi5QYWxldHRlLmlucHV0RGlzYWJsZWRdOm4uQ29sb3IubmV1dHJhbEdyYXksW24uUGFsZXR0ZS5pbnB1dEZvY3VzZWRdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLmlucHV0Qm9yZGVyXTpuLkNvbG9yLm5ldXRyYWxHcmF5LFtuLlBhbGV0dGUudGV4dERlZmF1bHRdOm4uQ29sb3IuZGFya0dyYXk1LFtuLlBhbGV0dGUudGV4dEhlbHBdOm4uQ29sb3IuZGFya0dyYXkzLFtuLlBhbGV0dGUudGV4dEluYWN0aXZlXTpuLkNvbG9yLm5ldXRyYWxHcmF5fSxmPXsuLi5nLFtuLlBhbGV0dGUuYmFja2dyb3VuZDFdOm4uQ29sb3IuZGFya0dyYXk2LFtuLlBhbGV0dGUuYmFja2dyb3VuZDJdOm4uQ29sb3IuZGFya0dyYXk1LFtuLlBhbGV0dGUuYmFja2dyb3VuZDNdOm4uQ29sb3IuZGFya0dyYXk0LFtuLlBhbGV0dGUuYmFja2dyb3VuZDRdOm4uQ29sb3IuZGFya0dyYXkzLFtuLlBhbGV0dGUuYmFja2dyb3VuZDVdOm4uQ29sb3IuZGFya0dyYXkyLFtuLlBhbGV0dGUuYmFja2dyb3VuZDZdOm4uQ29sb3IuZGFya0dyYXkxLFtuLlBhbGV0dGUuYnJhbmRTZWNvbmRhcnldOm4uQ29sb3IuZGFya0dyYXkyLFtuLlBhbGV0dGUuaW5wdXRCYWNrZ3JvdW5kXTpuLkNvbG9yLmRhcmtHcmF5MSxbbi5QYWxldHRlLmlucHV0Q29sb3JdOm4uQ29sb3Iud2hpdGUsW24uUGFsZXR0ZS5pbnB1dFBsYWNlaG9sZGVyXTpuLkNvbG9yLmxpZ2h0R3JheTUsW24uUGFsZXR0ZS5pbnB1dERpc2FibGVkXTpuLkNvbG9yLm5ldXRyYWxHcmF5LFtuLlBhbGV0dGUuaW5wdXRGb2N1c2VkXTpuLkNvbG9yLmxpZ2h0R3JheTUsW24uUGFsZXR0ZS5pbnB1dEJvcmRlcl06bi5Db2xvci5uZXV0cmFsR3JheSxbbi5QYWxldHRlLnRleHREZWZhdWx0XTpuLkNvbG9yLndoaXRlLFtuLlBhbGV0dGUudGV4dEhlbHBdOm4uQ29sb3IubGlnaHRHcmF5NSxbbi5QYWxldHRlLnRleHRJbmFjdGl2ZV06bi5Db2xvci5uZXV0cmFsR3JheX0sbT1be2xhYmVsOlwiT3BlbkZpbiBEZWZhdWx0IExpZ2h0IGFuZCBEYXJrIFRoZW1lXCIscGFsZXR0ZXM6e2xpZ2h0OnsuLi5wLGJyYW5kUHJpbWFyeTpcIiMwQTc2RDNcIixicmFuZFNlY29uZGFyeTpuLkNvbG9yLmxpZ2h0R3JheTQsYmFja2dyb3VuZFByaW1hcnk6bi5Db2xvci5kYXJrR3JheTV9LGRhcms6ey4uLmYsYnJhbmRQcmltYXJ5OlwiIzBBNzZEM1wiLGJyYW5kU2Vjb25kYXJ5Om4uQ29sb3IuZGFya0dyYXkyLGJhY2tncm91bmRQcmltYXJ5Om4uQ29sb3IuZGFya0dyYXk1fX19XSx3PWU9Pntjb25zdHtiYWNrZ3JvdW5kOnQsZm9yZWdyb3VuZDphfT1lO3JldHVybntiYWNrZ3JvdW5kOnQsZm9yZWdyb3VuZDphPz9cIiNGRkZGRkZcIn19LHk9KGUsdCk9Pih7aWNvbnM6e3N5bWJvbDplLmJyYW5kPy5pY29ucz8uW3RdPy5zeW1ib2x8fHVbdF0uc3ltYm9sfX0pLGI9ZT0+e2NvbnN0e2xpZ2h0OnQsZGFyazphfT1cInBhbGV0dGVzXCJpbiBlP2UucGFsZXR0ZXM6e2xpZ2h0OmUucGFsZXR0ZSxkYXJrOmUucGFsZXR0ZX0sbz0oMCxyLktEKShmLGEpLGk9KDAsci5LRCkocCx0KSxzPSgoZSx0KT0+e2NvbnN0IGE9ey4uLmV9LG49ey4uLnR9O2xldCBvPXQuYmFja2dyb3VuZFByaW1hcnk/KDAsci5wdSkodC5iYWNrZ3JvdW5kUHJpbWFyeSwhMCk6e30saT1lLmJhY2tncm91bmRQcmltYXJ5PygwLHIucHUpKGUuYmFja2dyb3VuZFByaW1hcnkpOnt9O3JldHVybiBvPXsuLi5vLC4uLm59LGk9ey4uLmksLi4uYX0se2xpZ2h0OnsuLi50LC4uLm99LGRhcms6ey4uLmUsLi4uaX19fSkoYSx0KSxjPXsuLi4oMCxuLmNyZWF0ZVRoZW1lKSh7Li4ubywuLi5zPy5kYXJrfSksYnJhbmQ6eShlLFwiZGFya1wiKX0sbD17Li4uKDAsbi5jcmVhdGVUaGVtZSkoey4uLmksLi4ucz8ubGlnaHR9KSxicmFuZDp5KGUsXCJsaWdodFwiKX0se2xpZ2h0OmQsZGFyazp1fT0oZT0+e2NvbnN0IHQ9T2JqZWN0LmtleXMoZS5ub3RpZmljYXRpb25JbmRpY2F0b3JDb2xvcnM/P3t9KTtpZih0Py5sZW5ndGgpe2NvbnN0IGE9e30sbj17fTtyZXR1cm4gdC5mb3JFYWNoKCh0PT57Y29uc3Qgcj1lLm5vdGlmaWNhdGlvbkluZGljYXRvckNvbG9yc1t0XTtcImJhY2tncm91bmRcImluIHI/KGFbdF09dyhyKSxuW3RdPXcocikpOihhW3RdPXcoci5kYXJrPz9yLmxpZ2h0KSxuW3RdPXcoci5saWdodD8/ci5kYXJrKSl9KSkse2xpZ2h0Om4sZGFyazphfX1yZXR1cm57bGlnaHQ6bnVsbCxkYXJrOm51bGx9fSkoZSk7cmV0dXJuIGMubm90aWZpY2F0aW9uSW5kaWNhdG9yQ29sb3JzPXUsbC5ub3RpZmljYXRpb25JbmRpY2F0b3JDb2xvcnM9ZCx7ZGFyazpjLGxpZ2h0Omx9fSxrPWFzeW5jIGU9Pntjb25zdHt0aGVtZXM6dCxzZWxlY3RlZFNjaGVtZTphfT1hd2FpdChhc3luYyBlPT57Y29uc3QgdD1maW4/Ll9faW50ZXJuYWxfPy5pbml0aWFsT3B0aW9ucz8ud29ya3NwYWNlUGxhdGZvcm0/Ll90aGVtZURhdGE7aWYoIXR8fGUudXVpZCE9PW8uJHAudXVpZClyZXR1cm57dGhlbWVzOmF3YWl0KDAsaS5BZykoZSkuVGhlbWUuZ2V0VGhlbWVzKCksc2VsZWN0ZWRTY2hlbWU6YXdhaXQoMCxpLkFnKShlKS5UaGVtZS5nZXRTZWxlY3RlZFNjaGVtZSgpfTtyZXR1cm4gdH0pKGUpO3ZhciBuLHI7cmV0dXJuKG49dD8ubGVuZ3RoP3Q6bSxyPWEsbi5tYXAoKGU9Pntjb25zdCB0PVwicGFsZXR0ZXNcImluIGU/ZS5kZWZhdWx0Omgse2xpZ2h0OmEsZGFyazpufT1iKGUpO3JldHVybntsYWJlbDplLmxhYmVsLGxvZ29Vcmw6ZS5sb2dvVXJsLHRoZW1lOntkYXJrOm4sbGlnaHQ6YX0sZGVmYXVsdFNjaGVtZTpyPz90fX0pKSlbMF19fSw0Mzg6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtNVzooKT0+bix2MTooKT0+Y30pO3ZhciBuLHIsbz1hKDcyMyk7IWZ1bmN0aW9uKGUpe2UuV29ya3NwYWNlPVwib3BlbmZpbi13b3Jrc3BhY2VcIixlLk9sZFdvcmtzcGFjZT1cIm9wZW5maW4tYnJvd3NlclwifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuRmluUHJvdG9jb2w9XCJmaW4tcHJvdG9jb2xcIn0ocnx8KHI9e30pKTtjb25zdCBpPXt1dWlkOm8uJGh9LHM9KG4uV29ya3NwYWNlLGU9PntpZighby5jSSl0aHJvdyBuZXcgRXJyb3IoXCJnZXRBcHBsaWNhdGlvbiBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbiBPcGVuRmluIGVudi4gQXZvaWQgdXNpbmcgdGhpcyBkdXJpbmcgcHJlLXJlbmRlcmluZy5cIik7cmV0dXJuIGZpbi5BcHBsaWNhdGlvbi53cmFwU3luYyhlKX0pLGM9KCk9PnMoaSl9LDEwMjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0E6KCk9Pm99KTt2YXIgbj1hKDcyMyk7Y29uc3Qgcj1uLllZJiZcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZuZXcgUHJvbWlzZSgoZT0+ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwoKCk9PntcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZlKCl9KSkpKTtmdW5jdGlvbiBvKGUpe2xldCB0O2NvbnN0IGE9bmV3IFNldDtyZXR1cm4oKT0+e2lmKCFuLmNJKXRocm93IG5ldyBFcnJvcihcImdldENoYW5uZWxDbGllbnQgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBhbiBPcGVuRmluIGVudi4gQXZvaWQgdXNpbmcgdGhpcyBtZXRob2QgZHVyaW5nIHByZS1yZW5kZXJpbmcuXCIpO3JldHVybiB0fHwodD0oYXN5bmMoKT0+e2F3YWl0IHI7Y29uc3Qgbz17Y2xpZW50QVBJVmVyc2lvbjpuLmV0fSxpPWF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdChlLHtwYXlsb2FkOm99KTtyZXR1cm4gaS5vbkRpc2Nvbm5lY3Rpb24oKGFzeW5jKCk9PnthLmZvckVhY2goKGU9PmUoKSkpLGEuY2xlYXIoKSxjb25zb2xlLndhcm4oYGRpc2Nvbm5lY3RlZCBmcm9tIGNoYW5uZWwgcHJvdmlkZXIgJHtlfWApLHQ9dm9pZCAwfSkpLGl9KSgpLnRoZW4oKGU9PihlLmFkZERpc2Nvbm5lY3Rpb25MaXN0ZW5lcj1lPT57YS5hZGQoZSl9LGUpKSkuY2F0Y2goKGE9Pnt0aHJvdyB0PXZvaWQgMCxuZXcgRXJyb3IoYGZhaWxlZCB0byBjb25uZWN0IHRvIGNoYW5uZWwgcHJvdmlkZXIgJHtlfTogJHthfWApfSkpKSx0fX19LDM2NTooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0FlOigpPT5ufSk7YSgxODEpLGEoNzApO2NvbnN0IG49YXN5bmMgZT0+e2NvbnN0IHQ9ZT9maW4uV2luZG93LndyYXBTeW5jKGUpOmZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKSxhPWF3YWl0IHQuZ2V0T3B0aW9ucygpO3JldHVybiBhLndvcmtzcGFjZVBsYXRmb3JtPy53aW5kb3dUeXBlJiZcImVudGVycHJpc2VcIj09PWEud29ya3NwYWNlUGxhdGZvcm0ud2luZG93VHlwZX19LDcyMzooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47YS5kKHQseyRoOigpPT5jLEFUOigpPT5pLFlZOigpPT5vLGNJOigpPT5yLGV0OigpPT5oLGZUOigpPT5kLHZMOigpPT5sfSksZnVuY3Rpb24oZSl7ZS5Mb2NhbD1cImxvY2FsXCIsZS5EZXY9XCJkZXZcIixlLlN0YWdpbmc9XCJzdGFnaW5nXCIsZS5Qcm9kPVwicHJvZFwifShufHwobj17fSkpO2NvbnN0IHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbixvPShcInVuZGVmaW5lZFwiPT10eXBlb2YgcHJvY2Vzc3x8cHJvY2Vzcy5lbnYsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyksaT1vJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW5kZXhlZERCLHM9bz93aW5kb3cub3JpZ2luOm4uTG9jYWwsYz1yJiZmaW4ubWUudXVpZCxsPXImJmZpbi5tZS5uYW1lLGQ9ciYmZmluLm1lLmVudGl0eVR5cGUsdT0obi5Mb2NhbCxuLkRldixuLlN0YWdpbmcsbi5Qcm9kLGU9PmUuc3RhcnRzV2l0aChcImh0dHA6Ly9cIil8fGUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpP2U6cytlKSxoPSh1KFwiaHR0cHM6Ly93b3Jrc3BhY2Uub3BlbmZpbi5jby93b3Jrc3BhY2UvMjAuNS40XCIpLHUoXCJodHRwczovL3dvcmtzcGFjZS5vcGVuZmluLmNvL3dvcmtzcGFjZS8yMC41LjRcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9ET0NTX1BMQVRGT1JNX1VSTCYmdShXT1JLU1BBQ0VfRE9DU19QTEFURk9STV9VUkwpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBXT1JLU1BBQ0VfRE9DU19DTElFTlRfVVJMJiZ1KFdPUktTUEFDRV9ET0NTX0NMSUVOVF9VUkwpLFwiMjAuNS40XCIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBXT1JLU1BBQ0VfQlVJTERfU0hBJiZXT1JLU1BBQ0VfQlVJTERfU0hBfSw5NDA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHtmaDooKT0+ZCx4UDooKT0+dX0pO3ZhciBuPWEoMjM2KSxyPWEubihuKSxvPShhKDM2NSksYSg3MjMpLGEoNzApKSxpPWEoNjc4KSxzPWEoMjU3KSxjPWEoMzY3KTthKDQxMyk7Y29uc3QgbD0oZSx0KT0+ZS5jb250ZW50P3suLi5lLGNvbnRlbnQ6ZS5jb250ZW50Lm1hcCgoZT0+bChlLHQpKSl9OnsuLi5lLGNvbXBvbmVudFN0YXRlOnQoZS5jb21wb25lbnRTdGF0ZSl9LGQ9ZT0+KHsuLi5lLG5hbWU6dm9pZCAwfSksdT1lPT57Y29uc3QgdD17Li4uZX07cmV0dXJuIGwodCxkKX0saD1lPT57Y29uc3QgdD1bXTtyZXR1cm4oZSYmQXJyYXkuaXNBcnJheShlKT9lOltdKS5mb3JFYWNoKChlPT57aWYoXCJjb21wb25lbnRcIj09PWUudHlwZSlyZXR1cm4gdC5wdXNoKGUuY29tcG9uZW50U3RhdGUpO2NvbnN0IGE9aChlLmNvbnRlbnQpO3QucHVzaCguLi5hKX0pKSx0fTtuZXcgTWFwLG5ldyBNYXA7cigpKChhc3luYyBlPT57dHJ5e2NvbnN0IHQ9YXdhaXQoYXN5bmMgZT0+ZmluLlBsYXRmb3JtLkxheW91dC53cmFwU3luYyh7Li4uZmluLm1lLmlkZW50aXR5LGxheW91dE5hbWU6ZX0pLmdldENvbmZpZygpKShlLmxheW91dENvbnRhaW5lcktleSksYT10LmNvbnRlbnQ/aCh0LmNvbnRlbnQpOltdLG49YS5sZW5ndGg7bj4xPyhlPT57XCJtdWx0aVZpZXdcIiE9PWUuYXR0YWNoZWRQYWdlVHlwZSYmKDAsYy5OKSgpLkJyb3dzZXIud3JhcFN5bmMoby4kcCkudXBkYXRlUGFnZSh7cGFnZUlkOmUucGFnZUlkLHBhZ2U6e3NpbmdsZVZpZXdOYW1lOm51bGwsYXR0YWNoZWRQYWdlVHlwZTpcIm11bHRpVmlld1wifX0pfSkoZSk6MT09PW4mJihhc3luYyhlLHQpPT57Y29uc3QgYT0oMCxjLk4pKCkuQnJvd3Nlci53cmFwU3luYyhvLiRwKTtpZihcInNpbmdsZVZpZXdcIiE9PWUuYXR0YWNoZWRQYWdlVHlwZSl7Y29uc3Qgbj1hd2FpdCgwLGkuQkcpKGUpLHI9YXdhaXQoMCxjLk4pKCkuQnJvd3Nlci5nZXRVbmlxdWVQYWdlVGl0bGUoKTtkZWxldGUgbi5sYXlvdXQ7Y29uc3Qgbz17Li4ubixzaW5nbGVWaWV3TmFtZTp0LHRpdGxlOnIsaGFzVW5zYXZlZENoYW5nZXM6ITEsYXR0YWNoZWRQYWdlVHlwZTpcInNpbmdsZVZpZXdcIn07YXdhaXQgYS51cGRhdGVQYWdlKHtwYWdlSWQ6ZS5wYWdlSWQscGFnZTpvfSl9fSkoZSxhWzBdLm5hbWUpLGF3YWl0KGFzeW5jKGUsdCk9Pntjb25zdCBhPSgwLHMuRikoey4uLm8uJHAsbGF5b3V0TmFtZTplLmxheW91dENvbnRhaW5lcktleX0pLG49YXdhaXQgYS5pc1Nob3dpbmdUYWJzKCk7dD4xP258fGF3YWl0IGEuc2hvdygpOjE9PT10JiZuJiZhd2FpdCBhLmhpZGUoe3NldHRpbmdzOntyZW9yZGVyRW5hYmxlZDohMH19KX0pKGUsbil9Y2F0Y2goZSl7fX0pLDUwLHtsZWFkaW5nOiExLHRyYWlsaW5nOiEwfSl9LDUyMjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47YS5kKHQse0E6KCk9PnJ9KSxmdW5jdGlvbihlKXtlLkN1cnJlbnRXb3Jrc3BhY2VJZD1cImN1cnJlbnRXb3Jrc3BhY2VJZFwiLGUuTGFzdEZvY3VzZWRCcm93c2VyV2luZG93PVwibGFzdEZvY3VzZWRCcm93c2VyV2luZG93XCIsZS5NYWNoaW5lTmFtZT1cIm1hY2hpbmVOYW1lXCIsZS5OZXdUYWJQYWdlTGF5b3V0PVwiTmV3VGFiUGFnZUxheW91dFwiLGUuTmV3VGFiUGFnZVNvcnQ9XCJOZXdUYWJQYWdlU29ydFwiLGUuRG9ja1Bvc2l0aW9uPVwiRG9ja1Bvc2l0aW9uXCIsZS5TZWxlY3RlZENvbG9yU2NoZW1lPVwiU2VsZWN0ZWRDb2xvclNjaGVtZVwiLGUuVGhlbWVQYWxldHRlU2hlZXQ9XCJUaGVtZVBhbGV0dGVTaGVldFwiLGUuSGFzTW92ZWRTdG9yZT1cIkhhc01vdmVkU3RvcmVcIixlLlBhZ2VEcmFnU3RhdGU9XCJCcm93c2VyUGFnZURyYWdTdGF0ZVwifShufHwobj17fSkpO2NvbnN0IHI9bn0sMTg5OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLnIodCksYS5kKHQse2dldEl0ZW06KCk9Pm8scmVtb3ZlSXRlbTooKT0+aSxzZXRJdGVtOigpPT5yfSk7dmFyIG49YSg3MjMpO2NvbnN0IHI9KGUsdCk9Pntsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuLiRofS0ke2V9YCx0KX0sbz1lPT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuLiRofS0ke2V9YCksaT1lPT5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtuLiRofS0ke2V9YCl9LDc4NjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0E6KCk9PnJ9KTtjb25zdCBuPVwib2Ytd29ya3NwYWNlLVwiO2NvbnN0IHI9bmV3IGNsYXNze21hcmsoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX1gKX1tYXJrU3RhcnQoZSl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX0tc3RhcnRgKX1tYXJrRW5kKGUpe3BlcmZvcm1hbmNlLm1hcmsoYCR7bn0ke2V9LWVuZGApfW1hcmtFbmRBbmRNZWFzdXJlKGUpe3BlcmZvcm1hbmNlLm1hcmsoYCR7bn0ke2V9LWVuZGApO3RyeXtyZXR1cm4gcGVyZm9ybWFuY2UubWVhc3VyZShgJHtufSR7ZX1gLGAke259JHtlfS1zdGFydGAsYCR7bn0ke2V9LWVuZGApfWNhdGNoKGUpezB9fW1hcmtBbmRNZWFzdXJlKGUsdCl7cGVyZm9ybWFuY2UubWFyayhgJHtufSR7ZX1gKTt0cnl7cmV0dXJuIHBlcmZvcm1hbmNlLm1lYXN1cmUoYCR7bn0ke2V9LW1lYXN1cmVgLGAke259JHt0fS1zdGFydGAsYCR7bn0ke2V9YCl9Y2F0Y2goZSl7MH19cmVwb3J0V29ya3NwYWNlUGVyZm9ybWFuY2VFbnRyaWVzKCl7cmV0dXJuIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJtZWFzdXJlXCIpLmZpbHRlcigoZT0+ZS5uYW1lLnN0YXJ0c1dpdGgobikpKX1yZXBvcnRXb3Jrc3BhY2VQZXJmb3JtYW5jZSgpe3JldHVybiB0aGlzLnJlcG9ydFdvcmtzcGFjZVBlcmZvcm1hbmNlRW50cmllcygpLm1hcCgoZT0+KHtuYW1lOmUubmFtZS5yZXBsYWNlKGAke259YCxcIlwiKS5yZXBsYWNlKFwiLW1lYXN1cmVcIixcIlwiKSxkdXJhdGlvbjplLmR1cmF0aW9ufSkpKX19fSwxODE6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO3ZhciBuLHI7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIi9ob21lL1wiLGUuSG9tZVNlYXJjaD1cIi9ob21lLz9kZWVwbGluaz1zZWFyY2hcIixlLkhvbWVQYWdlc1JlbmFtZT1cIi9ob21lL3BhZ2VzL3JlbmFtZS9cIixlLkRvY2s9XCIvZG9jay9cIixlLkRvY3M9XCIvcHJvdmlkZXIvZG9jcy9cIixlLlN0b3JlZnJvbnQ9XCIvc3RvcmVmcm9udC9cIixlLkRlcHJlY2F0ZWRBbGVydD1cIi9wcm92aWRlci9kZXByZWNhdGVkLWFsZXJ0L1wiLGUuQW5hbHl0aWNzPVwiL3Byb3ZpZGVyL2FuYWx5dGljcy9cIixlLlByb3ZpZGVyPVwiL3Byb3ZpZGVyL1wifShufHwobj17fSkpLGZ1bmN0aW9uKGUpe2UuQnJvd3Nlcj1cIi9icm93c2VyL1wiLGUuQnJvd3NlclBvcHVwTWVudT1cIi9wb3B1cC1tZW51L1wiLGUuQnJvd3NlclBvcHVwTWVudVNhdmVNb2RhbD1cIi9wb3B1cC1tZW51L3NhdmUtbW9kYWwvXCIsZS5Ccm93c2VyUG9wdXBNZW51TGF5b3V0cz1cIi9wb3B1cC1tZW51L2xheW91dHMvbGF5b3V0cy9cIixlLkJyb3dzZXJQb3B1cE1lbnVDb2xvckxpbmtpbmc9XCIvcG9wdXAtbWVudS9jb2xvci1saW5raW5nL2NvbG9yLWxpbmtpbmcvXCIsZS5Ccm93c2VySW5kaWNhdG9yPVwiL2luZGljYXRvci9cIixlLkJyb3dzZXJQb3B1cE1lbnVBZGRyZXNzU2VhcmNoUmVzdWx0c1ZpZXc9XCIvcG9wdXAtbWVudS9hZGRyZXNzLXNlYXJjaC1yZXN1bHRzLXZpZXcvXCIsZS5SZXNwb25zZU1vZGFsPVwiL3BvcHVwLW1lbnUvcmVzcG9uc2UtbW9kYWwvXCIsZS5DbG9zZUNvbmZpcm1hdGlvbk1vZGFsPVwiL3BvcHVwLW1lbnUvY2xvc2UtY29uZmlybWF0aW9uLW1vZGFsL1wiLGUuRW50ZXJwcmlzZUJyb3dzZXI9XCIvZW50ZXJwcmlzZS9cIixlLkVudGVycHJpc2VDb250ZXh0TWVudT1cIi9jb250ZXh0LW1lbnUvXCIsZS5FbnRlcnByaXNlQm9va21hcmtEaWFsb2c9XCIvYm9va21hcmstZGlhbG9nL1wiLGUuRW50ZXJwcmlzZVN0b3JhZ2VQcm94eT1cIi9lbnRlcnByaXNlL3N0b3JhZ2UtcHJveHlcIixlLkRyb3Bkb3duTWVudT1cIi9kcm9wZG93bi1tZW51L1wiLGUuRW50ZXJwcmlzZURvY2s9XCIvZG9jay9cIn0ocnx8KHI9e30pKTt2YXIgbzshZnVuY3Rpb24oZSl7ZS5TZWFyY2g9XCJzZWFyY2hcIn0ob3x8KG89e30pKX0sNTIzOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjt2YXIgbjthKDcyMyk7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIi9ob21lXCIsZS5Ccm93c2VyPVwiL2Jyb3dzZXJcIixlLkVudGVycHJpc2U9XCIvZW50ZXJwcmlzZVwiLGUuUHJvdmlkZXI9XCIvcHJvdmlkZXJcIixlLlN0b3JlZnJvbnQ9XCIvc3RvcmVmcm9udFwiLGUuRG9jaz1cIi9kb2NrXCJ9KG58fChuPXt9KSl9LDg2MjooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0QxOigpPT5pLGZDOigpPT5yfSk7YSg5NDApO3ZhciBuPWEoNTIyKTtmdW5jdGlvbiByKCl7cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG4uQS5NYWNoaW5lTmFtZSk/P1widW5rbm93blwifWxldCBvO2FzeW5jIGZ1bmN0aW9uIGkoKXtyZXR1cm4gb3x8KG89YXdhaXQgZmluLlN5c3RlbS5nZXRNYWNoaW5lSWQoKSksb319LDg5ODooZSx0LGEpPT57XCJ1c2Ugc3RyaWN0XCI7YS5kKHQse0tEOigpPT5zLHB1OigpPT5pfSk7Y29uc3Qgbj1lPT5lLnJlcGxhY2UoL1teXFxkLF0vZyxcIlwiKS5zcGxpdChcIixcIikscj1lPT57aWYoZS5sZW5ndGg8Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIG9iamVjdCwgY2Fubm90IGNvbnZlcnQgdG8gSFNMLlwiKTtjb25zdCB0PWVbMF0vMjU1LGE9ZVsxXS8yNTUsbj1lWzJdLzI1NSxyPU1hdGgubWluKHQsYSxuKSxvPU1hdGgubWF4KHQsYSxuKSxpPW8tcjtsZXQgcz0wLGM9MCxsPTA7cmV0dXJuIHM9MD09PWk/MDpvPT09dD8oYS1uKS9pJTY6bz09PWE/KG4tdCkvaSsyOih0LWEpL2krNCxzPU1hdGgucm91bmQoNjAqcyksczwwJiYocys9MzYwKSxsPShvK3IpLzIsYz0wPT1pPzA6aS8oMS1NYXRoLmFicygyKmwtMSkpLGM9KygxMDAqYykudG9GaXhlZCgxKSxsPSsoMTAwKmwpLnRvRml4ZWQoMSkse2hzbDpgaHNsKCR7c30sICR7Y30lLCAke2x9JSlgLGhzbGE6YGhzbCgke3N9LCAke2N9JSwgJHtsfSUsIDEpYCxodWU6cyxsaWdodG5lc3M6bCxzYXR1cmF0aW9uOmN9fSxvPWU9PntpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJDb2xvciBpcyBub3QgZGVmaW5lZFwiKTtjb25zdCB0PWUudG9Mb3dlckNhc2UoKTtsZXQgYTtpZih0LmluY2x1ZGVzKFwicmdiXCIpKXtjb25zdCBlPW4odCk7ZS5sZW5ndGg+MyYmZS5wb3AoKSxhPXIoZSkuaHVlfWlmKHQuaW5jbHVkZXMoXCIjXCIpKXtjb25zdCBlPShlPT57aWYoIWUuaW5jbHVkZXMoXCIjXCIpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaGV4IHZhbHVlLCBjYW5ub3QgY29udmVydCB0byBSR0IuIEhleCB2YWx1ZSBiZWdpbnMgd2l0aCBhIGhhc2h0YWcuXCIpO2xldCB0PTAsYT0wLG49MDtpZig0PT09ZS5sZW5ndGgpdD1gMHgke2VbMV19JHtlWzFdfWAsYT1gMHgke2VbMl19JHtlWzJdfWAsbj1gMHgke2VbM119JHtlWzNdfWA7ZWxzZXtpZig3IT09ZS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBoZXggc3RyaW5nIGxlbmd0aCwgY2Fubm90IGNvbnZlcnQgdG8gUkdCLlwiKTt0PWAweCR7ZVsxXX0ke2VbMl19YCxhPWAweCR7ZVszXX0ke2VbNF19YCxuPWAweCR7ZVs1XX0ke2VbNl19YH1yZXR1cm5bK3QsK2EsK25dfSkodCk7YT1yKGUpLmh1ZX1pZih0LmluY2x1ZGVzKFwiaHNsXCIpKXthPW4odClbMF19Y29uc3Qgbz1hPy50b1N0cmluZygpO2lmKCFvKXRocm93IG5ldyBFcnJvcihgSHVlIHdhcyB1bmFibGUgdG8gYmUgZXh0cmFjdGVkIGZyb20gXCIke3R9XCIsIGNoZWNrIGNvbG9yIGZvcm1hdC4gQWNjZXB0ZWQgZm9ybWF0cyBhcmU6IHJnYigpLCByZ2JhKCksIGhleCwgaHNsKCksIGFuZCBoc2xhKClgKTtyZXR1cm4gb30saT0oZSx0PSExKT0+e2NvbnN0IGE9byhlKTtyZXR1cm4gdD97YmFja2dyb3VuZDE6YGhzbGEoJHthfSwgMCUsIDEwMCUsIDEpYCxiYWNrZ3JvdW5kMjpgaHNsYSgke2F9LCA2NyUsIDk5JSwgMSlgLGJhY2tncm91bmQzOmBoc2xhKCR7YX0sIDI2JSwgOTYlLCAxKWAsYmFja2dyb3VuZDQ6YGhzbGEoJHthfSwgMTUlLCA5NCUsIDEpYCxiYWNrZ3JvdW5kNTpgaHNsYSgke2F9LCAxMCUsIDg4JSwgMSlgLGJhY2tncm91bmQ2OmBoc2xhKCR7YX0sIDgwJSwgODAlLCAxKWB9OntiYWNrZ3JvdW5kMTpgaHNsYSgke2F9LCA4JSwgNyUsIDEpYCxiYWNrZ3JvdW5kMjpgaHNsYSgke2F9LCA4JSwgMTMlLCAxKWAsYmFja2dyb3VuZDM6YGhzbGEoJHthfSwgOSUsIDE1JSwgMSlgLGJhY2tncm91bmQ0OmBoc2xhKCR7YX0sIDYlLCAyMyUsIDEpYCxiYWNrZ3JvdW5kNTpgaHNsYSgke2F9LCAyMSUsIDI4JSwgMSlgLGJhY2tncm91bmQ2OmBoc2xhKCR7YX0sIDUlLCA1MSUsIDEpYH19LHM9KGUsdCk9Pntjb25zdCBhPXt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChuPT57YVtuXT10W25dP3Rbbl06ZVtuXX0pKSxhfX0sMjc3OihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjthLmQodCx7b3M6KCk9Pml9KTt2YXIgbixyPWEoNzIzKTthKDcwKSxhKDE0MSk7IWZ1bmN0aW9uKGUpe2UuQnJvd3Nlcj1cIkJyb3dzZXJcIixlLkRvY2s9XCJEb2NrXCIsZS5FbnRlcnByaXNlRG9jaz1cIkVudGVycHJpc2VEb2NrXCIsZS5Ib21lPVwiSG9tZVwiLGUuTm90aWZpY2F0aW9uPVwiTm90aWZpY2F0aW9uXCIsZS5TdG9yZWZyb250PVwiU3RvcmVmcm9udFwiLGUuUGxhdGZvcm09XCJQbGF0Zm9ybVwiLGUuVGhlbWluZz1cIlRoZW1pbmdcIixlLk1pY3JvZmxvdz1cIk1pY3JvZmxvd1wifShufHwobj17fSkpO2NvbnN0IG89YXN5bmMoZSx0LGE9XCJ3b3Jrc3BhY2UtbGljZW5zaW5nXCIpPT57Y29uc3Qgbj17YXBpVmVyc2lvbjp0LmFwaVZlcnNpb258fHIuZXQsY29tcG9uZW50TmFtZTplLGNvbXBvbmVudFZlcnNpb246dC5jb21wb25lbnRWZXJzaW9ufHxyLmV0LGFsbG93ZWQ6dC5hbGxvd2VkLHJlamVjdGlvbkNvZGU6dC5yZWplY3Rpb25Db2RlfTtmaW4uU3lzdGVtLnJlZ2lzdGVyVXNhZ2Uoe3R5cGU6YSxkYXRhOm59KX07Y29uc3QgaT1lPT57byhuLk5vdGlmaWNhdGlvbixlKX07bmV3IE1hcH0sMzMzOihlLHQsYSk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7cmV0dXJuIHZvaWQgMCE9PXR5cGVvZiBjcnlwdG8mJlwicmFuZG9tVVVJRFwiaW4gY3J5cHRvJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRD9jcnlwdG8ucmFuZG9tVVVJRCgpOlwiMTAwMDAwMDAtMTAwMC00MDAwLTgwMDAtMTAwMDAwMDAwMDAwXCIucmVwbGFjZSgvWzAxOF0vZywoZT0+KGVeY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0mMTU+PmUvNCkudG9TdHJpbmcoMTYpKSl9YS5kKHQse046KCk9Pm59KX0sNzA6KGUsdCxhKT0+e1widXNlIHN0cmljdFwiO2EuZCh0LHskcDooKT0+YyxJbzooKT0+dSxJcTooKT0+cyxROigpPT5uLFR2OigpPT5sLFYxOigpPT5pLGhiOigpPT5kLHVyOigpPT5ofSk7dmFyIG4scj1hKDQzOCksbz1hKDcyMyk7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIm9wZW5maW4taG9tZVwiLGUuRG9jaz1cIm9wZW5maW4tZG9ja1wiLGUuU3RvcmVmcm9udD1cIm9wZW5maW4tc3RvcmVmcm9udFwiLGUuSG9tZUludGVybmFsPVwib3BlbmZpbi1ob21lLWludGVybmFsXCIsZS5Ccm93c2VyTWVudT1cIm9wZW5maW4tYnJvd3Nlci1tZW51XCIsZS5Ccm93c2VyU2F2ZU1lbnU9XCJvcGVuZmluLWJyb3dzZXItc2F2ZS1tZW51XCIsZS5Ccm93c2VySW5kaWNhdG9yPVwib3BlbmZpbi1icm93c2VyLWluZGljYXRvclwiLGUuQnJvd3NlcldpbmRvdz1cImludGVybmFsLWdlbmVyYXRlZC13aW5kb3dcIixlLkNsYXNzaWNXaW5kb3c9XCJpbnRlcm5hbC1nZW5lcmF0ZWQtY2xhc3NpYy13aW5kb3dcIixlLkVudGVycHJpc2VDb250ZXh0TWVudT1cIm9wZW5maW4tZW50ZXJwcmlzZS1jb250ZXh0LW1lbnVcIixlLkJyb3dzZXJBZGRyZXNzU2VhcmNoUHJlZml4PVwib3BlbmZpbi1icm93c2VyLW1lbnUtYWRkcmVzcy1zZWFyY2gtXCIsZS5FbnRlcnByaXNlQm9va21hcmtEaWFsb2dXaW5kb3c9XCJvcGVuZmluLWVudGVycHJpc2UtYm9va21hcmstZGlhbG9nXCIsZS5Ecm9wZG93bk1lbnU9XCJvcGVuZmluLWVudGVycHJpc2UtZHJvcGRvd24tbWVudVwiLGUuRG9ja0NvbXBhbmlvbj1cIm9wZW5maW4tZG9jay1jb21wYW5pb25cIn0obnx8KG49e30pKTtjb25zdCBpPWU9Pih7bGVmdDooZS5sZWZ0KyhlLnJpZ2h0Pz9lLmxlZnQrZS53aWR0aCkpLzIsdG9wOihlLnRvcCsoZS5ib3R0b20/P2UudG9wK2UuaGVpZ2h0KSkvMn0pO2Z1bmN0aW9uIHMoZSl7aWYoIW8uY0kpdGhyb3cgbmV3IEVycm9yKFwiZ2V0T0ZXaW5kb3cgY2FuIG9ubHkgYmUgdXNlZCBpbiBhbiBPcGVuRmluIGVudi4gQXZvaWQgY2FsbGluZyB0aGlzIG1ldGhvZCBkdXJpbmcgcHJlLXJlbmRlcmluZy5cIik7cmV0dXJuIGZpbi5XaW5kb3cud3JhcFN5bmMoZSl9Y29uc3QgYz17bmFtZTpvLnZMLHV1aWQ6by4kaH07ZnVuY3Rpb24gbCgpe3JldHVybiBzKGMpfW4uSG9tZSxyLk1XLldvcmtzcGFjZSxuLkRvY2ssci5NVy5Xb3Jrc3BhY2Usbi5TdG9yZWZyb250LHIuTVcuV29ya3NwYWNlLHIuTVcuV29ya3NwYWNlLHIuTVcuV29ya3NwYWNlO2NvbnN0IGQ9YXN5bmMgZT0+e3RyeXtjb25zdCB0PWF3YWl0IGZpbi5XaW5kb3cud3JhcFN5bmMoe25hbWU6ZS5uYW1lLHV1aWQ6ZS51dWlkPz9maW4ubWUudXVpZH0pLmdldE9wdGlvbnMoKTtyZXR1cm4oXCJicm93c2VyXCI9PT10LndvcmtzcGFjZVBsYXRmb3JtPy53aW5kb3dUeXBlfHxcImVudGVycHJpc2VcIj09PXQud29ya3NwYWNlUGxhdGZvcm0/LndpbmRvd1R5cGUpJiZ0LndvcmtzcGFjZVBsYXRmb3JtPy5wYWdlc31jYXRjaChlKXtyZXR1cm4gY29uc29sZS53YXJuKFwiaXNCcm93c2VyV2luZG93IGVycm9yOiBcIixlKSwhMX19O2FzeW5jIGZ1bmN0aW9uIHUoKXtjb25zdCBlPWF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpLmdldENoaWxkV2luZG93cygpLHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoKGFzeW5jIGU9PmQoZS5pZGVudGl0eSkpKSk7cmV0dXJuIGUuZmlsdGVyKCgoZSxhKT0+dFthXSkpfWFzeW5jIGZ1bmN0aW9uIGgoZSl7Y29uc3QgdD1hd2FpdCBmaW4uU3lzdGVtLmdldE1vbml0b3JJbmZvKCk7cmV0dXJuW3QucHJpbWFyeU1vbml0b3IsLi4udC5ub25QcmltYXJ5TW9uaXRvcnNdLnJlZHVjZSgoKHQsYSk9Pntjb25zdCBuPWZ1bmN0aW9uKGUsdCl7Y29uc3QgYT1lLnRvcCxuPWUubGVmdCxyPWUudG9wK2UuaGVpZ2h0LG89ZS5sZWZ0K2Uud2lkdGgsaT10Lm1vbml0b3JSZWN0LnRvcCxzPXQubW9uaXRvclJlY3QubGVmdCxjPXQubW9uaXRvclJlY3QuYm90dG9tLGw9dC5tb25pdG9yUmVjdC5yaWdodDtpZihhPmN8fHI8aXx8bj5sfHxvPHMpcmV0dXJuIDA7Y29uc3QgZD1NYXRoLm1heChhLGkpLHU9TWF0aC5tYXgobixzKTtyZXR1cm4oTWF0aC5taW4ocixjKS1kKSooTWF0aC5taW4obyxsKS11KS8oZS5oZWlnaHQqZS53aWR0aCl9KGUsYSk7cmV0dXJuIG4+dC5wZXJjZW50YWdlP3twZXJjZW50YWdlOm4sbW9uaXRvcjphfTp0fSkse3BlcmNlbnRhZ2U6MCxtb25pdG9yOnQucHJpbWFyeU1vbml0b3J9KS5tb25pdG9yfX0sMjM2OmU9PntcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9cmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKX0sNDMyOmU9PntcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9cmVxdWlyZShcIm9wZW5maW4tbm90aWZpY2F0aW9ucy9kaXN0L2NsaWVudC93aXRob3V0LWF1dG8tbGF1bmNoXCIpfX0sdD17fTtmdW5jdGlvbiBhKG4pe3ZhciByPXRbbl07aWYodm9pZCAwIT09cilyZXR1cm4gci5leHBvcnRzO3ZhciBvPXRbbl09e2V4cG9ydHM6e319O3JldHVybiBlW25dKG8sby5leHBvcnRzLGEpLG8uZXhwb3J0c31hLm49ZT0+e3ZhciB0PWUmJmUuX19lc01vZHVsZT8oKT0+ZS5kZWZhdWx0OigpPT5lO3JldHVybiBhLmQodCx7YTp0fSksdH0sYS5kPShlLHQpPT57Zm9yKHZhciBuIGluIHQpYS5vKHQsbikmJiFhLm8oZSxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7ZW51bWVyYWJsZTohMCxnZXQ6dFtuXX0pfSxhLm89KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLGEucj1lPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG49e307KCgpPT57XCJ1c2Ugc3RyaWN0XCI7YS5yKG4pLGEuZChuLHtkZXJlZ2lzdGVyOigpPT5nLHJlZ2lzdGVyOigpPT5ofSk7dmFyIGU9YSg0MzIpLHQ9YSgyNzcpLHI9YSg5NTcpLG89e307Zm9yKGNvbnN0IHQgaW4gZSlbXCJkZWZhdWx0XCIsXCJyZWdpc3RlclwiLFwiZGVyZWdpc3RlclwiXS5pbmRleE9mKHQpPDAmJihvW3RdPSgpPT5lW3RdKTthLmQobixvKTtjb25zdCBpPWFzeW5jIHQ9PntpZih0IGluc3RhbmNlb2YgRXJyb3Ipe2xldCBhPXQubWVzc2FnZTtpZih0Lm1lc3NhZ2UuaW5jbHVkZXMoXCJyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCIpKXtpZihhPVwiTm90aWZpY2F0aW9ucyBwbGF0Zm9ybXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdmVyc2lvbnMgYmVsb3cgMS4xMy4wLCB0cnkgdXBkYXRpbmcgeW91ciBub3RpZmljYXRpb25zLXNlcnZpY2UuXCIsZT8ucHJvdmlkZXI/LmdldFN0YXR1cyl7Y29uc3R7dmVyc2lvbjp0fT1hd2FpdCBlLnByb3ZpZGVyLmdldFN0YXR1cygpO2ErPWAgWW91ciB2ZXJzaW9uIGlzOiAke3R9YH1yZXR1cm4gYX1yZXR1cm4gdC5tZXNzYWdlfXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6XCJ1bmtub3duIGVycm9yIHJlZ2lzdGVyaW5nIE5vdGlmaWNhdGlvbnNcIn0scz1hc3luYyBlPT57aWYoZSBpbnN0YW5jZW9mIEVycm9yJiZlLm1lc3NhZ2UuaW5jbHVkZXMoXCJyZWdpc3Rlci1ub3RpZmljYXRpb25zLXBsYXRmb3JtXCIpKXRocm93IG5ldyBFcnJvcihhd2FpdCBpKGUpKTt0aHJvdyBlfSxjPVwib2Ytbm90aWZpY2F0aW9ucy1zZXJ2aWNlLXYxXCIsbD1cIm9mLXdvcmtzcGFjZS1ub3RpZmljYXRpb25zLXN5bmNcIixkPXtjaGFubmVsTmFtZTpsfSx1PWFzeW5jKGUsdCk9Pntjb25zdCBhPXQubm90aWZpY2F0aW9uc1ZlcnNpb24uc3RhcnRzV2l0aChcIjJcIik/ZC5jaGFubmVsTmFtZTpjLG49YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGEse3dhaXQ6ITF9KSxyPXQubm90aWZpY2F0aW9uc1ZlcnNpb24uc3RhcnRzV2l0aChcIjJcIik/XCJyZWdpc3Rlci1wbGF0Zm9ybVwiOlwicmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiO2F3YWl0IG4uZGlzcGF0Y2gocixlKX07YXN5bmMgZnVuY3Rpb24gaChhKXt0cnl7Y29uc3Qgbj1hJiZcIm5vdGlmaWNhdGlvbnNDdXN0b21NYW5pZmVzdFwiaW4gYT97Y3VzdG9tTWFuaWZlc3Q6YS5ub3RpZmljYXRpb25zQ3VzdG9tTWFuaWZlc3R9OnZvaWQgMDtuJiZuLmN1c3RvbU1hbmlmZXN0Py5tYW5pZmVzdFV1aWQmJihkLmNoYW5uZWxOYW1lPWAke24uY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVdWlkfS0ke2x9YCk7Y29uc3Qgbz1hd2FpdCBlLnJlZ2lzdGVyKG4pO2lmKGEpe2NvbnN0IGU9YXdhaXQoMCxyLnFxKShmaW4ubWUuaWRlbnRpdHkpLHQ9XCJub3RpZmljYXRpb25zUGxhdGZvcm1PcHRpb25zXCJpbiBhP2Eubm90aWZpY2F0aW9uc1BsYXRmb3JtT3B0aW9uczphO2F3YWl0IHUoe3RoZW1lOmUudGhlbWUsc2NoZW1lOmUuZGVmYXVsdFNjaGVtZSwuLi50LHdvcmtzcGFjZVBsYXRmb3JtOntpZGVudGl0eTpmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKS5pZGVudGl0eSxhbmFseXRpY3M6e2lzU3VwcG9ydGVkOiEwfX19LHtub3RpZmljYXRpb25zVmVyc2lvbjpvLm5vdGlmaWNhdGlvbnNWZXJzaW9ufSl9cmV0dXJuKDAsdC5vcykoe2FsbG93ZWQ6ITAsYXBpVmVyc2lvbjplLlZFUlNJT04sY29tcG9uZW50VmVyc2lvbjpvLm5vdGlmaWNhdGlvbnNWZXJzaW9ufSksb31jYXRjaChhKXsoMCx0Lm9zKSh7YWxsb3dlZDohMSxyZWplY3Rpb25Db2RlOmF3YWl0IGkoYSksYXBpVmVyc2lvbjplLlZFUlNJT059KSxhd2FpdCBzKGEpfX1jb25zdCBnPWFzeW5jIHQ9Pnt0cnl7Y29uc3R7dmVyc2lvbjphfT1hd2FpdCBlLnByb3ZpZGVyLmdldFN0YXR1cygpO2lmKG51bGw9PT1hKXRocm93IG5ldyBFcnJvcihcIk5vdGlmaWNhdGlvbnMgc2VydmljZSBpcyBub3QgY3VycmVudGx5IHJ1bm5pbmcuXCIpO2F3YWl0KGFzeW5jKGUsdCk9Pntjb25zdCBhPXQubm90aWZpY2F0aW9uc1ZlcnNpb24uc3RhcnRzV2l0aChcIjJcIik/ZC5jaGFubmVsTmFtZTpjLG49YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGEse3dhaXQ6ITF9KSxyPXQubm90aWZpY2F0aW9uc1ZlcnNpb24uc3RhcnRzV2l0aChcIjJcIik/XCJkZXJlZ2lzdGVyLXBsYXRmb3JtXCI6XCJkZXJlZ2lzdGVyLW5vdGlmaWNhdGlvbnMtcGxhdGZvcm1cIjthd2FpdCBuLmRpc3BhdGNoKHIsZSl9KSh7aWQ6dH0se25vdGlmaWNhdGlvbnNWZXJzaW9uOmF9KX1jYXRjaChlKXthd2FpdCBzKGUpfX19KSgpLG1vZHVsZS5leHBvcnRzPW59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm90aWZpY2F0aW9ucy5qcy5tYXAiLCJpbXBvcnQgZSBmcm9tXCJ2b2lkLWVsZW1lbnRzXCI7dmFyIHQ9L1xccyhbXidcIi9cXHM+PF0rPylbXFxzLz5dfChbXlxccz1dKyk9XFxzPyhcIi4qP1wifCcuKj8nKS9nO2Z1bmN0aW9uIG4obil7dmFyIHI9e3R5cGU6XCJ0YWdcIixuYW1lOlwiXCIsdm9pZEVsZW1lbnQ6ITEsYXR0cnM6e30sY2hpbGRyZW46W119LGk9bi5tYXRjaCgvPFxcLz8oW15cXHNdKz8pWy9cXHM+XS8pO2lmKGkmJihyLm5hbWU9aVsxXSwoZVtpWzFdXXx8XCIvXCI9PT1uLmNoYXJBdChuLmxlbmd0aC0yKSkmJihyLnZvaWRFbGVtZW50PSEwKSxyLm5hbWUuc3RhcnRzV2l0aChcIiEtLVwiKSkpe3ZhciBzPW4uaW5kZXhPZihcIi0tXFx4M2VcIik7cmV0dXJue3R5cGU6XCJjb21tZW50XCIsY29tbWVudDotMSE9PXM/bi5zbGljZSg0LHMpOlwiXCJ9fWZvcih2YXIgYT1uZXcgUmVnRXhwKHQpLGM9bnVsbDtudWxsIT09KGM9YS5leGVjKG4pKTspaWYoY1swXS50cmltKCkpaWYoY1sxXSl7dmFyIG89Y1sxXS50cmltKCksbD1bbyxcIlwiXTtvLmluZGV4T2YoXCI9XCIpPi0xJiYobD1vLnNwbGl0KFwiPVwiKSksci5hdHRyc1tsWzBdXT1sWzFdLGEubGFzdEluZGV4LS19ZWxzZSBjWzJdJiYoci5hdHRyc1tjWzJdXT1jWzNdLnRyaW0oKS5zdWJzdHJpbmcoMSxjWzNdLmxlbmd0aC0xKSk7cmV0dXJuIHJ9dmFyIHI9LzxbYS16QS1aMC05XFwtXFwhXFwvXSg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo+L2csaT0vXlxccyokLyxzPU9iamVjdC5jcmVhdGUobnVsbCk7ZnVuY3Rpb24gYShlLHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcInRleHRcIjpyZXR1cm4gZSt0LmNvbnRlbnQ7Y2FzZVwidGFnXCI6cmV0dXJuIGUrPVwiPFwiK3QubmFtZSsodC5hdHRycz9mdW5jdGlvbihlKXt2YXIgdD1bXTtmb3IodmFyIG4gaW4gZSl0LnB1c2gobisnPVwiJytlW25dKydcIicpO3JldHVybiB0Lmxlbmd0aD9cIiBcIit0LmpvaW4oXCIgXCIpOlwiXCJ9KHQuYXR0cnMpOlwiXCIpKyh0LnZvaWRFbGVtZW50P1wiLz5cIjpcIj5cIiksdC52b2lkRWxlbWVudD9lOmUrdC5jaGlsZHJlbi5yZWR1Y2UoYSxcIlwiKStcIjwvXCIrdC5uYW1lK1wiPlwiO2Nhc2VcImNvbW1lbnRcIjpyZXR1cm4gZStcIlxceDNjIS0tXCIrdC5jb21tZW50K1wiLS1cXHgzZVwifX12YXIgYz17cGFyc2U6ZnVuY3Rpb24oZSx0KXt0fHwodD17fSksdC5jb21wb25lbnRzfHwodC5jb21wb25lbnRzPXMpO3ZhciBhLGM9W10sbz1bXSxsPS0xLG09ITE7aWYoMCE9PWUuaW5kZXhPZihcIjxcIikpe3ZhciB1PWUuaW5kZXhPZihcIjxcIik7Yy5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6LTE9PT11P2U6ZS5zdWJzdHJpbmcoMCx1KX0pfXJldHVybiBlLnJlcGxhY2UocixmdW5jdGlvbihyLHMpe2lmKG0pe2lmKHIhPT1cIjwvXCIrYS5uYW1lK1wiPlwiKXJldHVybjttPSExfXZhciB1LGY9XCIvXCIhPT1yLmNoYXJBdCgxKSxoPXIuc3RhcnRzV2l0aChcIlxceDNjIS0tXCIpLHA9cytyLmxlbmd0aCxkPWUuY2hhckF0KHApO2lmKGgpe3ZhciB2PW4ocik7cmV0dXJuIGw8MD8oYy5wdXNoKHYpLGMpOigodT1vW2xdKS5jaGlsZHJlbi5wdXNoKHYpLGMpfWlmKGYmJihsKyssXCJ0YWdcIj09PShhPW4ocikpLnR5cGUmJnQuY29tcG9uZW50c1thLm5hbWVdJiYoYS50eXBlPVwiY29tcG9uZW50XCIsbT0hMCksYS52b2lkRWxlbWVudHx8bXx8IWR8fFwiPFwiPT09ZHx8YS5jaGlsZHJlbi5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6ZS5zbGljZShwLGUuaW5kZXhPZihcIjxcIixwKSl9KSwwPT09bCYmYy5wdXNoKGEpLCh1PW9bbC0xXSkmJnUuY2hpbGRyZW4ucHVzaChhKSxvW2xdPWEpLCghZnx8YS52b2lkRWxlbWVudCkmJihsPi0xJiYoYS52b2lkRWxlbWVudHx8YS5uYW1lPT09ci5zbGljZSgyLC0xKSkmJihsLS0sYT0tMT09PWw/YzpvW2xdKSwhbSYmXCI8XCIhPT1kJiZkKSl7dT0tMT09PWw/YzpvW2xdLmNoaWxkcmVuO3ZhciB4PWUuaW5kZXhPZihcIjxcIixwKSxnPWUuc2xpY2UocCwtMT09PXg/dm9pZCAwOngpO2kudGVzdChnKSYmKGc9XCIgXCIpLCh4Pi0xJiZsK3UubGVuZ3RoPj0wfHxcIiBcIiE9PWcpJiZ1LnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDpnfSl9fSksY30sc3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlK2EoXCJcIix0KX0sXCJcIil9fTtleHBvcnQgZGVmYXVsdCBjO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC1wYXJzZS1zdHJpbmdpZnkubW9kdWxlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc1N0cmluZyA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbmNvbnN0IGRlZmVyID0gKCkgPT4ge1xuICBsZXQgcmVzO1xuICBsZXQgcmVqO1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcyA9IHJlc29sdmU7XG4gICAgcmVqID0gcmVqZWN0O1xuICB9KTtcbiAgcHJvbWlzZS5yZXNvbHZlID0gcmVzO1xuICBwcm9taXNlLnJlamVjdCA9IHJlajtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3QgbWFrZVN0cmluZyA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gJycgKyBvYmplY3Q7XG59O1xuY29uc3QgY29weSA9IChhLCBzLCB0KSA9PiB7XG4gIGEuZm9yRWFjaChtID0+IHtcbiAgICBpZiAoc1ttXSkgdFttXSA9IHNbbV07XG4gIH0pO1xufTtcbmNvbnN0IGxhc3RPZlBhdGhTZXBhcmF0b3JSZWdFeHAgPSAvIyMjL2c7XG5jb25zdCBjbGVhbktleSA9IGtleSA9PiBrZXkgJiYga2V5LmluZGV4T2YoJyMjIycpID4gLTEgPyBrZXkucmVwbGFjZShsYXN0T2ZQYXRoU2VwYXJhdG9yUmVnRXhwLCAnLicpIDoga2V5O1xuY29uc3QgY2FuTm90VHJhdmVyc2VEZWVwZXIgPSBvYmplY3QgPT4gIW9iamVjdCB8fCBpc1N0cmluZyhvYmplY3QpO1xuY29uc3QgZ2V0TGFzdE9mUGF0aCA9IChvYmplY3QsIHBhdGgsIEVtcHR5KSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gIWlzU3RyaW5nKHBhdGgpID8gcGF0aCA6IHBhdGguc3BsaXQoJy4nKTtcbiAgbGV0IHN0YWNrSW5kZXggPSAwO1xuICB3aGlsZSAoc3RhY2tJbmRleCA8IHN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICBpZiAoY2FuTm90VHJhdmVyc2VEZWVwZXIob2JqZWN0KSkgcmV0dXJuIHt9O1xuICAgIGNvbnN0IGtleSA9IGNsZWFuS2V5KHN0YWNrW3N0YWNrSW5kZXhdKTtcbiAgICBpZiAoIW9iamVjdFtrZXldICYmIEVtcHR5KSBvYmplY3Rba2V5XSA9IG5ldyBFbXB0eSgpO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0ID0ge307XG4gICAgfVxuICAgICsrc3RhY2tJbmRleDtcbiAgfVxuICBpZiAoY2FuTm90VHJhdmVyc2VEZWVwZXIob2JqZWN0KSkgcmV0dXJuIHt9O1xuICByZXR1cm4ge1xuICAgIG9iajogb2JqZWN0LFxuICAgIGs6IGNsZWFuS2V5KHN0YWNrW3N0YWNrSW5kZXhdKVxuICB9O1xufTtcbmNvbnN0IHNldFBhdGggPSAob2JqZWN0LCBwYXRoLCBuZXdWYWx1ZSkgPT4ge1xuICBjb25zdCB7XG4gICAgb2JqLFxuICAgIGtcbiAgfSA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpO1xuICBpZiAob2JqICE9PSB1bmRlZmluZWQgfHwgcGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICBvYmpba10gPSBuZXdWYWx1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGUgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIGxldCBwID0gcGF0aC5zbGljZSgwLCBwYXRoLmxlbmd0aCAtIDEpO1xuICBsZXQgbGFzdCA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwLCBPYmplY3QpO1xuICB3aGlsZSAobGFzdC5vYmogPT09IHVuZGVmaW5lZCAmJiBwLmxlbmd0aCkge1xuICAgIGUgPSBgJHtwW3AubGVuZ3RoIC0gMV19LiR7ZX1gO1xuICAgIHAgPSBwLnNsaWNlKDAsIHAubGVuZ3RoIC0gMSk7XG4gICAgbGFzdCA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwLCBPYmplY3QpO1xuICAgIGlmIChsYXN0ICYmIGxhc3Qub2JqICYmIHR5cGVvZiBsYXN0Lm9ialtgJHtsYXN0Lmt9LiR7ZX1gXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxhc3Qub2JqID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBsYXN0Lm9ialtgJHtsYXN0Lmt9LiR7ZX1gXSA9IG5ld1ZhbHVlO1xufTtcbmNvbnN0IHB1c2hQYXRoID0gKG9iamVjdCwgcGF0aCwgbmV3VmFsdWUsIGNvbmNhdCkgPT4ge1xuICBjb25zdCB7XG4gICAgb2JqLFxuICAgIGtcbiAgfSA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpO1xuICBvYmpba10gPSBvYmpba10gfHwgW107XG4gIG9ialtrXS5wdXNoKG5ld1ZhbHVlKTtcbn07XG5jb25zdCBnZXRQYXRoID0gKG9iamVjdCwgcGF0aCkgPT4ge1xuICBjb25zdCB7XG4gICAgb2JqLFxuICAgIGtcbiAgfSA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoKTtcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBvYmpba107XG59O1xuY29uc3QgZ2V0UGF0aFdpdGhEZWZhdWx0cyA9IChkYXRhLCBkZWZhdWx0RGF0YSwga2V5KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZ2V0UGF0aChkYXRhLCBrZXkpO1xuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gZ2V0UGF0aChkZWZhdWx0RGF0YSwga2V5KTtcbn07XG5jb25zdCBkZWVwRXh0ZW5kID0gKHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUpID0+IHtcbiAgZm9yIChjb25zdCBwcm9wIGluIHNvdXJjZSkge1xuICAgIGlmIChwcm9wICE9PSAnX19wcm90b19fJyAmJiBwcm9wICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBpZiAocHJvcCBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHRhcmdldFtwcm9wXSkgfHwgdGFyZ2V0W3Byb3BdIGluc3RhbmNlb2YgU3RyaW5nIHx8IGlzU3RyaW5nKHNvdXJjZVtwcm9wXSkgfHwgc291cmNlW3Byb3BdIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKG92ZXJ3cml0ZSkgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0sIG92ZXJ3cml0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5jb25zdCByZWdleEVzY2FwZSA9IHN0ciA9PiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcbnZhciBfZW50aXR5TWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnLFxuICAnLyc6ICcmI3gyRjsnXG59O1xuY29uc3QgZXNjYXBlID0gZGF0YSA9PiB7XG4gIGlmIChpc1N0cmluZyhkYXRhKSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIHMgPT4gX2VudGl0eU1hcFtzXSk7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59O1xuY2xhc3MgUmVnRXhwQ2FjaGUge1xuICBjb25zdHJ1Y3RvcihjYXBhY2l0eSkge1xuICAgIHRoaXMuY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICB0aGlzLnJlZ0V4cE1hcCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJlZ0V4cFF1ZXVlID0gW107XG4gIH1cbiAgZ2V0UmVnRXhwKHBhdHRlcm4pIHtcbiAgICBjb25zdCByZWdFeHBGcm9tQ2FjaGUgPSB0aGlzLnJlZ0V4cE1hcC5nZXQocGF0dGVybik7XG4gICAgaWYgKHJlZ0V4cEZyb21DYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVnRXhwRnJvbUNhY2hlO1xuICAgIH1cbiAgICBjb25zdCByZWdFeHBOZXcgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgIGlmICh0aGlzLnJlZ0V4cFF1ZXVlLmxlbmd0aCA9PT0gdGhpcy5jYXBhY2l0eSkge1xuICAgICAgdGhpcy5yZWdFeHBNYXAuZGVsZXRlKHRoaXMucmVnRXhwUXVldWUuc2hpZnQoKSk7XG4gICAgfVxuICAgIHRoaXMucmVnRXhwTWFwLnNldChwYXR0ZXJuLCByZWdFeHBOZXcpO1xuICAgIHRoaXMucmVnRXhwUXVldWUucHVzaChwYXR0ZXJuKTtcbiAgICByZXR1cm4gcmVnRXhwTmV3O1xuICB9XG59XG5jb25zdCBjaGFycyA9IFsnICcsICcsJywgJz8nLCAnIScsICc7J107XG5jb25zdCBsb29rc0xpa2VPYmplY3RQYXRoUmVnRXhwQ2FjaGUgPSBuZXcgUmVnRXhwQ2FjaGUoMjApO1xuY29uc3QgbG9va3NMaWtlT2JqZWN0UGF0aCA9IChrZXksIG5zU2VwYXJhdG9yLCBrZXlTZXBhcmF0b3IpID0+IHtcbiAgbnNTZXBhcmF0b3IgPSBuc1NlcGFyYXRvciB8fCAnJztcbiAga2V5U2VwYXJhdG9yID0ga2V5U2VwYXJhdG9yIHx8ICcnO1xuICBjb25zdCBwb3NzaWJsZUNoYXJzID0gY2hhcnMuZmlsdGVyKGMgPT4gbnNTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDAgJiYga2V5U2VwYXJhdG9yLmluZGV4T2YoYykgPCAwKTtcbiAgaWYgKHBvc3NpYmxlQ2hhcnMubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgciA9IGxvb2tzTGlrZU9iamVjdFBhdGhSZWdFeHBDYWNoZS5nZXRSZWdFeHAoYCgke3Bvc3NpYmxlQ2hhcnMubWFwKGMgPT4gYyA9PT0gJz8nID8gJ1xcXFw/JyA6IGMpLmpvaW4oJ3wnKX0pYCk7XG4gIGxldCBtYXRjaGVkID0gIXIudGVzdChrZXkpO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICBjb25zdCBraSA9IGtleS5pbmRleE9mKGtleVNlcGFyYXRvcik7XG4gICAgaWYgKGtpID4gMCAmJiAhci50ZXN0KGtleS5zdWJzdHJpbmcoMCwga2kpKSkge1xuICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVkO1xufTtcbmNvbnN0IGRlZXBGaW5kID0gZnVuY3Rpb24gKG9iaiwgcGF0aCkge1xuICBsZXQga2V5U2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnLic7XG4gIGlmICghb2JqKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAob2JqW3BhdGhdKSByZXR1cm4gb2JqW3BhdGhdO1xuICBjb25zdCB0b2tlbnMgPSBwYXRoLnNwbGl0KGtleVNlcGFyYXRvcik7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7KSB7XG4gICAgaWYgKCFjdXJyZW50IHx8IHR5cGVvZiBjdXJyZW50ICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IG5leHQ7XG4gICAgbGV0IG5leHRQYXRoID0gJyc7XG4gICAgZm9yIChsZXQgaiA9IGk7IGogPCB0b2tlbnMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgIG5leHRQYXRoICs9IGtleVNlcGFyYXRvcjtcbiAgICAgIH1cbiAgICAgIG5leHRQYXRoICs9IHRva2Vuc1tqXTtcbiAgICAgIG5leHQgPSBjdXJyZW50W25leHRQYXRoXTtcbiAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ10uaW5kZXhPZih0eXBlb2YgbmV4dCkgPiAtMSAmJiBqIDwgdG9rZW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpICs9IGogLSBpICsgMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnQgPSBuZXh0O1xuICB9XG4gIHJldHVybiBjdXJyZW50O1xufTtcbmNvbnN0IGdldENsZWFuZWRDb2RlID0gY29kZSA9PiBjb2RlICYmIGNvZGUucmVwbGFjZSgnXycsICctJyk7XG5cbmNvbnN0IGNvbnNvbGVMb2dnZXIgPSB7XG4gIHR5cGU6ICdsb2dnZXInLFxuICBsb2coYXJncykge1xuICAgIHRoaXMub3V0cHV0KCdsb2cnLCBhcmdzKTtcbiAgfSxcbiAgd2FybihhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ3dhcm4nLCBhcmdzKTtcbiAgfSxcbiAgZXJyb3IoYXJncykge1xuICAgIHRoaXMub3V0cHV0KCdlcnJvcicsIGFyZ3MpO1xuICB9LFxuICBvdXRwdXQodHlwZSwgYXJncykge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGVbdHlwZV0pIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG5jbGFzcyBMb2dnZXIge1xuICBjb25zdHJ1Y3Rvcihjb25jcmV0ZUxvZ2dlcikge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLmluaXQoY29uY3JldGVMb2dnZXIsIG9wdGlvbnMpO1xuICB9XG4gIGluaXQoY29uY3JldGVMb2dnZXIpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdGhpcy5wcmVmaXggPSBvcHRpb25zLnByZWZpeCB8fCAnaTE4bmV4dDonO1xuICAgIHRoaXMubG9nZ2VyID0gY29uY3JldGVMb2dnZXIgfHwgY29uc29sZUxvZ2dlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuICB9XG4gIGxvZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2xvZycsICcnLCB0cnVlKTtcbiAgfVxuICB3YXJuKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICd3YXJuJywgJycsIHRydWUpO1xuICB9XG4gIGVycm9yKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICdlcnJvcicsICcnKTtcbiAgfVxuICBkZXByZWNhdGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnV0FSTklORyBERVBSRUNBVEVEOiAnLCB0cnVlKTtcbiAgfVxuICBmb3J3YXJkKGFyZ3MsIGx2bCwgcHJlZml4LCBkZWJ1Z09ubHkpIHtcbiAgICBpZiAoZGVidWdPbmx5ICYmICF0aGlzLmRlYnVnKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoaXNTdHJpbmcoYXJnc1swXSkpIGFyZ3NbMF0gPSBgJHtwcmVmaXh9JHt0aGlzLnByZWZpeH0gJHthcmdzWzBdfWA7XG4gICAgcmV0dXJuIHRoaXMubG9nZ2VyW2x2bF0oYXJncyk7XG4gIH1cbiAgY3JlYXRlKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmxvZ2dlciwge1xuICAgICAgLi4ue1xuICAgICAgICBwcmVmaXg6IGAke3RoaXMucHJlZml4fToke21vZHVsZU5hbWV9OmBcbiAgICAgIH0sXG4gICAgICAuLi50aGlzLm9wdGlvbnNcbiAgICB9KTtcbiAgfVxuICBjbG9uZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMucHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgdGhpcy5wcmVmaXg7XG4gICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy5sb2dnZXIsIG9wdGlvbnMpO1xuICB9XG59XG52YXIgYmFzZUxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fTtcbiAgfVxuICBvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2V2ZW50XSkgdGhpcy5vYnNlcnZlcnNbZXZlbnRdID0gbmV3IE1hcCgpO1xuICAgICAgY29uc3QgbnVtTGlzdGVuZXJzID0gdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmdldChsaXN0ZW5lcikgfHwgMDtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XS5zZXQobGlzdGVuZXIsIG51bUxpc3RlbmVycyArIDEpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIG9mZihldmVudCwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2V2ZW50XSkgcmV0dXJuO1xuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tldmVudF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XS5kZWxldGUobGlzdGVuZXIpO1xuICB9XG4gIGVtaXQoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzW2V2ZW50XSkge1xuICAgICAgY29uc3QgY2xvbmVkID0gQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVyc1tldmVudF0uZW50cmllcygpKTtcbiAgICAgIGNsb25lZC5mb3JFYWNoKF9yZWYgPT4ge1xuICAgICAgICBsZXQgW29ic2VydmVyLCBudW1UaW1lc0FkZGVkXSA9IF9yZWY7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGltZXNBZGRlZDsgaSsrKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5vYnNlcnZlcnNbJyonXSkge1xuICAgICAgY29uc3QgY2xvbmVkID0gQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVyc1snKiddLmVudHJpZXMoKSk7XG4gICAgICBjbG9uZWQuZm9yRWFjaChfcmVmMiA9PiB7XG4gICAgICAgIGxldCBbb2JzZXJ2ZXIsIG51bVRpbWVzQWRkZWRdID0gX3JlZjI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGltZXNBZGRlZDsgaSsrKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuYXBwbHkob2JzZXJ2ZXIsIFtldmVudCwgLi4uYXJnc10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgUmVzb3VyY2VTdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgICAgIGRlZmF1bHROUzogJ3RyYW5zbGF0aW9uJ1xuICAgIH07XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYWRkTmFtZXNwYWNlcyhucykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihucykgPCAwKSB7XG4gICAgICB0aGlzLm9wdGlvbnMubnMucHVzaChucyk7XG4gICAgfVxuICB9XG4gIHJlbW92ZU5hbWVzcGFjZXMobnMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcHRpb25zLm5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIGdldFJlc291cmNlKGxuZywgbnMsIGtleSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGNvbnN0IGlnbm9yZUpTT05TdHJ1Y3R1cmUgPSBvcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSA6IHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlO1xuICAgIGxldCBwYXRoO1xuICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgIHBhdGgucHVzaCguLi5rZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGtleSkgJiYga2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgcGF0aC5wdXNoKC4uLmtleS5zcGxpdChrZXlTZXBhcmF0b3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCk7XG4gICAgaWYgKCFyZXN1bHQgJiYgIW5zICYmICFrZXkgJiYgbG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBsbmcgPSBwYXRoWzBdO1xuICAgICAgbnMgPSBwYXRoWzFdO1xuICAgICAga2V5ID0gcGF0aC5zbGljZSgyKS5qb2luKCcuJyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgfHwgIWlnbm9yZUpTT05TdHJ1Y3R1cmUgfHwgIWlzU3RyaW5nKGtleSkpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIGRlZXBGaW5kKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGFbbG5nXSAmJiB0aGlzLmRhdGFbbG5nXVtuc10sIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgfVxuICBhZGRSZXNvdXJjZShsbmcsIG5zLCBrZXksIHZhbHVlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHtcbiAgICAgIHNpbGVudDogZmFsc2VcbiAgICB9O1xuICAgIGNvbnN0IGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgbGV0IHBhdGggPSBbbG5nLCBuc107XG4gICAgaWYgKGtleSkgcGF0aCA9IHBhdGguY29uY2F0KGtleVNlcGFyYXRvciA/IGtleS5zcGxpdChrZXlTZXBhcmF0b3IpIDoga2V5KTtcbiAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICB2YWx1ZSA9IG5zO1xuICAgICAgbnMgPSBwYXRoWzFdO1xuICAgIH1cbiAgICB0aGlzLmFkZE5hbWVzcGFjZXMobnMpO1xuICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCB2YWx1ZSk7XG4gICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIGtleSwgdmFsdWUpO1xuICB9XG4gIGFkZFJlc291cmNlcyhsbmcsIG5zLCByZXNvdXJjZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge1xuICAgICAgc2lsZW50OiBmYWxzZVxuICAgIH07XG4gICAgZm9yIChjb25zdCBtIGluIHJlc291cmNlcykge1xuICAgICAgaWYgKGlzU3RyaW5nKHJlc291cmNlc1ttXSkgfHwgQXJyYXkuaXNBcnJheShyZXNvdXJjZXNbbV0pKSB0aGlzLmFkZFJlc291cmNlKGxuZywgbnMsIG0sIHJlc291cmNlc1ttXSwge1xuICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuICBhZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCByZXNvdXJjZXMsIGRlZXAsIG92ZXJ3cml0ZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7XG4gICAgICBzaWxlbnQ6IGZhbHNlLFxuICAgICAgc2tpcENvcHk6IGZhbHNlXG4gICAgfTtcbiAgICBsZXQgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICBkZWVwID0gcmVzb3VyY2VzO1xuICAgICAgcmVzb3VyY2VzID0gbnM7XG4gICAgICBucyA9IHBhdGhbMV07XG4gICAgfVxuICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgbGV0IHBhY2sgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCkgfHwge307XG4gICAgaWYgKCFvcHRpb25zLnNraXBDb3B5KSByZXNvdXJjZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc291cmNlcykpO1xuICAgIGlmIChkZWVwKSB7XG4gICAgICBkZWVwRXh0ZW5kKHBhY2ssIHJlc291cmNlcywgb3ZlcndyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFjayA9IHtcbiAgICAgICAgLi4ucGFjayxcbiAgICAgICAgLi4ucmVzb3VyY2VzXG4gICAgICB9O1xuICAgIH1cbiAgICBzZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCwgcGFjayk7XG4gICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIHJlc291cmNlcyk7XG4gIH1cbiAgcmVtb3ZlUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgIGlmICh0aGlzLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSB7XG4gICAgICBkZWxldGUgdGhpcy5kYXRhW2xuZ11bbnNdO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZU5hbWVzcGFjZXMobnMpO1xuICAgIHRoaXMuZW1pdCgncmVtb3ZlZCcsIGxuZywgbnMpO1xuICB9XG4gIGhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShsbmcsIG5zKSAhPT0gdW5kZWZpbmVkO1xuICB9XG4gIGdldFJlc291cmNlQnVuZGxlKGxuZywgbnMpIHtcbiAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0TlM7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJID09PSAndjEnKSByZXR1cm4ge1xuICAgICAgLi4ue30sXG4gICAgICAuLi50aGlzLmdldFJlc291cmNlKGxuZywgbnMpXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShsbmcsIG5zKTtcbiAgfVxuICBnZXREYXRhQnlMYW5ndWFnZShsbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2xuZ107XG4gIH1cbiAgaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZykge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGFCeUxhbmd1YWdlKGxuZyk7XG4gICAgY29uc3QgbiA9IGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG4gICAgcmV0dXJuICEhbi5maW5kKHYgPT4gZGF0YVt2XSAmJiBPYmplY3Qua2V5cyhkYXRhW3ZdKS5sZW5ndGggPiAwKTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG52YXIgcG9zdFByb2Nlc3NvciA9IHtcbiAgcHJvY2Vzc29yczoge30sXG4gIGFkZFBvc3RQcm9jZXNzb3IobW9kdWxlKSB7XG4gICAgdGhpcy5wcm9jZXNzb3JzW21vZHVsZS5uYW1lXSA9IG1vZHVsZTtcbiAgfSxcbiAgaGFuZGxlKHByb2Nlc3NvcnMsIHZhbHVlLCBrZXksIG9wdGlvbnMsIHRyYW5zbGF0b3IpIHtcbiAgICBwcm9jZXNzb3JzLmZvckVhY2gocHJvY2Vzc29yID0+IHtcbiAgICAgIGlmICh0aGlzLnByb2Nlc3NvcnNbcHJvY2Vzc29yXSkgdmFsdWUgPSB0aGlzLnByb2Nlc3NvcnNbcHJvY2Vzc29yXS5wcm9jZXNzKHZhbHVlLCBrZXksIG9wdGlvbnMsIHRyYW5zbGF0b3IpO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tlZExvYWRlZEZvciA9IHt9O1xuY2xhc3MgVHJhbnNsYXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlcnZpY2VzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHN1cGVyKCk7XG4gICAgY29weShbJ3Jlc291cmNlU3RvcmUnLCAnbGFuZ3VhZ2VVdGlscycsICdwbHVyYWxSZXNvbHZlcicsICdpbnRlcnBvbGF0b3InLCAnYmFja2VuZENvbm5lY3RvcicsICdpMThuRm9ybWF0JywgJ3V0aWxzJ10sIHNlcnZpY2VzLCB0aGlzKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIGlmICh0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ3RyYW5zbGF0b3InKTtcbiAgfVxuICBjaGFuZ2VMYW5ndWFnZShsbmcpIHtcbiAgICBpZiAobG5nKSB0aGlzLmxhbmd1YWdlID0gbG5nO1xuICB9XG4gIGV4aXN0cyhrZXkpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgaW50ZXJwb2xhdGlvbjoge31cbiAgICB9O1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5LCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZXh0cmFjdEZyb21LZXkoa2V5LCBvcHRpb25zKSB7XG4gICAgbGV0IG5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc1NlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5uc1NlcGFyYXRvcjtcbiAgICBpZiAobnNTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkgbnNTZXBhcmF0b3IgPSAnOic7XG4gICAgY29uc3Qga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICBsZXQgbmFtZXNwYWNlcyA9IG9wdGlvbnMubnMgfHwgdGhpcy5vcHRpb25zLmRlZmF1bHROUyB8fCBbXTtcbiAgICBjb25zdCB3b3VsZENoZWNrRm9yTnNJbktleSA9IG5zU2VwYXJhdG9yICYmIGtleS5pbmRleE9mKG5zU2VwYXJhdG9yKSA+IC0xO1xuICAgIGNvbnN0IHNlZW1zTmF0dXJhbExhbmd1YWdlID0gIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciAmJiAhb3B0aW9ucy5rZXlTZXBhcmF0b3IgJiYgIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yICYmICFvcHRpb25zLm5zU2VwYXJhdG9yICYmICFsb29rc0xpa2VPYmplY3RQYXRoKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcik7XG4gICAgaWYgKHdvdWxkQ2hlY2tGb3JOc0luS2V5ICYmICFzZWVtc05hdHVyYWxMYW5ndWFnZSkge1xuICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgIGlmIChtICYmIG0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuYW1lc3BhY2VzOiBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhcnRzID0ga2V5LnNwbGl0KG5zU2VwYXJhdG9yKTtcbiAgICAgIGlmIChuc1NlcGFyYXRvciAhPT0ga2V5U2VwYXJhdG9yIHx8IG5zU2VwYXJhdG9yID09PSBrZXlTZXBhcmF0b3IgJiYgdGhpcy5vcHRpb25zLm5zLmluZGV4T2YocGFydHNbMF0pID4gLTEpIG5hbWVzcGFjZXMgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAga2V5ID0gcGFydHMuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgbmFtZXNwYWNlczogaXNTdHJpbmcobmFtZXNwYWNlcykgPyBbbmFtZXNwYWNlc10gOiBuYW1lc3BhY2VzXG4gICAgfTtcbiAgfVxuICB0cmFuc2xhdGUoa2V5cywgb3B0aW9ucywgbGFzdEtleSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgJiYgdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKSB7XG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIG9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkIHx8IGtleXMgPT09IG51bGwpIHJldHVybiAnJztcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIGtleXMgPSBbU3RyaW5nKGtleXMpXTtcbiAgICBjb25zdCByZXR1cm5EZXRhaWxzID0gb3B0aW9ucy5yZXR1cm5EZXRhaWxzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnJldHVybkRldGFpbHMgOiB0aGlzLm9wdGlvbnMucmV0dXJuRGV0YWlscztcbiAgICBjb25zdCBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIGNvbnN0IHtcbiAgICAgIGtleSxcbiAgICAgIG5hbWVzcGFjZXNcbiAgICB9ID0gdGhpcy5leHRyYWN0RnJvbUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0sIG9wdGlvbnMpO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBsbmcgPSBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlID0gb3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZSB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGU7XG4gICAgaWYgKGxuZyAmJiBsbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHtcbiAgICAgIGlmIChhcHBlbmROYW1lc3BhY2VUb0NJTW9kZSkge1xuICAgICAgICBjb25zdCBuc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3IgfHwgdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXM6IGAke25hbWVzcGFjZX0ke25zU2VwYXJhdG9yfSR7a2V5fWAsXG4gICAgICAgICAgICB1c2VkS2V5OiBrZXksXG4gICAgICAgICAgICBleGFjdFVzZWRLZXk6IGtleSxcbiAgICAgICAgICAgIHVzZWRMbmc6IGxuZyxcbiAgICAgICAgICAgIHVzZWROUzogbmFtZXNwYWNlLFxuICAgICAgICAgICAgdXNlZFBhcmFtczogdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhvcHRpb25zKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke25hbWVzcGFjZX0ke25zU2VwYXJhdG9yfSR7a2V5fWA7XG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlczoga2V5LFxuICAgICAgICAgIHVzZWRLZXk6IGtleSxcbiAgICAgICAgICBleGFjdFVzZWRLZXk6IGtleSxcbiAgICAgICAgICB1c2VkTG5nOiBsbmcsXG4gICAgICAgICAgdXNlZE5TOiBuYW1lc3BhY2UsXG4gICAgICAgICAgdXNlZFBhcmFtczogdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhvcHRpb25zKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5cywgb3B0aW9ucyk7XG4gICAgbGV0IHJlcyA9IHJlc29sdmVkICYmIHJlc29sdmVkLnJlcztcbiAgICBjb25zdCByZXNVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQudXNlZEtleSB8fCBrZXk7XG4gICAgY29uc3QgcmVzRXhhY3RVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQuZXhhY3RVc2VkS2V5IHx8IGtleTtcbiAgICBjb25zdCByZXNUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXMpO1xuICAgIGNvbnN0IG5vT2JqZWN0ID0gWydbb2JqZWN0IE51bWJlcl0nLCAnW29iamVjdCBGdW5jdGlvbl0nLCAnW29iamVjdCBSZWdFeHBdJ107XG4gICAgY29uc3Qgam9pbkFycmF5cyA9IG9wdGlvbnMuam9pbkFycmF5cyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5qb2luQXJyYXlzIDogdGhpcy5vcHRpb25zLmpvaW5BcnJheXM7XG4gICAgY29uc3QgaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgPSAhdGhpcy5pMThuRm9ybWF0IHx8IHRoaXMuaTE4bkZvcm1hdC5oYW5kbGVBc09iamVjdDtcbiAgICBjb25zdCBoYW5kbGVBc09iamVjdCA9ICFpc1N0cmluZyhyZXMpICYmIHR5cGVvZiByZXMgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgcmVzICE9PSAnbnVtYmVyJztcbiAgICBpZiAoaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgJiYgcmVzICYmIGhhbmRsZUFzT2JqZWN0ICYmIG5vT2JqZWN0LmluZGV4T2YocmVzVHlwZSkgPCAwICYmICEoaXNTdHJpbmcoam9pbkFycmF5cykgJiYgQXJyYXkuaXNBcnJheShyZXMpKSkge1xuICAgICAgaWYgKCFvcHRpb25zLnJldHVybk9iamVjdHMgJiYgIXRoaXMub3B0aW9ucy5yZXR1cm5PYmplY3RzKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlcikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2FjY2Vzc2luZyBhbiBvYmplY3QgLSBidXQgcmV0dXJuT2JqZWN0cyBvcHRpb25zIGlzIG5vdCBlbmFibGVkIScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyID8gdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlcihyZXNVc2VkS2V5LCByZXMsIHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgIH0pIDogYGtleSAnJHtrZXl9ICgke3RoaXMubGFuZ3VhZ2V9KScgcmV0dXJuZWQgYW4gb2JqZWN0IGluc3RlYWQgb2Ygc3RyaW5nLmA7XG4gICAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQucmVzID0gcjtcbiAgICAgICAgICByZXNvbHZlZC51c2VkUGFyYW1zID0gdGhpcy5nZXRVc2VkUGFyYW1zRGV0YWlscyhvcHRpb25zKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9XG4gICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgIGNvbnN0IHJlc1R5cGVJc0FycmF5ID0gQXJyYXkuaXNBcnJheShyZXMpO1xuICAgICAgICBjb25zdCBjb3B5ID0gcmVzVHlwZUlzQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgICBjb25zdCBuZXdLZXlUb1VzZSA9IHJlc1R5cGVJc0FycmF5ID8gcmVzRXhhY3RVc2VkS2V5IDogcmVzVXNlZEtleTtcbiAgICAgICAgZm9yIChjb25zdCBtIGluIHJlcykge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzLCBtKSkge1xuICAgICAgICAgICAgY29uc3QgZGVlcEtleSA9IGAke25ld0tleVRvVXNlfSR7a2V5U2VwYXJhdG9yfSR7bX1gO1xuICAgICAgICAgICAgY29weVttXSA9IHRoaXMudHJhbnNsYXRlKGRlZXBLZXksIHtcbiAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGpvaW5BcnJheXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvcHlbbV0gPT09IGRlZXBLZXkpIGNvcHlbbV0gPSByZXNbbV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcyA9IGNvcHk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiBpc1N0cmluZyhqb2luQXJyYXlzKSAmJiBBcnJheS5pc0FycmF5KHJlcykpIHtcbiAgICAgIHJlcyA9IHJlcy5qb2luKGpvaW5BcnJheXMpO1xuICAgICAgaWYgKHJlcykgcmVzID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleXMsIG9wdGlvbnMsIGxhc3RLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdXNlZERlZmF1bHQgPSBmYWxzZTtcbiAgICAgIGxldCB1c2VkS2V5ID0gZmFsc2U7XG4gICAgICBjb25zdCBuZWVkc1BsdXJhbEhhbmRsaW5nID0gb3B0aW9ucy5jb3VudCAhPT0gdW5kZWZpbmVkICYmICFpc1N0cmluZyhvcHRpb25zLmNvdW50KTtcbiAgICAgIGNvbnN0IGhhc0RlZmF1bHRWYWx1ZSA9IFRyYW5zbGF0b3IuaGFzRGVmYXVsdFZhbHVlKG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlU3VmZml4ID0gbmVlZHNQbHVyYWxIYW5kbGluZyA/IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGxuZywgb3B0aW9ucy5jb3VudCwgb3B0aW9ucykgOiAnJztcbiAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVN1ZmZpeE9yZGluYWxGYWxsYmFjayA9IG9wdGlvbnMub3JkaW5hbCAmJiBuZWVkc1BsdXJhbEhhbmRsaW5nID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgobG5nLCBvcHRpb25zLmNvdW50LCB7XG4gICAgICAgIG9yZGluYWw6IGZhbHNlXG4gICAgICB9KSA6ICcnO1xuICAgICAgY29uc3QgbmVlZHNaZXJvU3VmZml4TG9va3VwID0gbmVlZHNQbHVyYWxIYW5kbGluZyAmJiAhb3B0aW9ucy5vcmRpbmFsICYmIG9wdGlvbnMuY291bnQgPT09IDAgJiYgdGhpcy5wbHVyYWxSZXNvbHZlci5zaG91bGRVc2VJbnRsQXBpKCk7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBuZWVkc1plcm9TdWZmaXhMb29rdXAgJiYgb3B0aW9uc1tgZGVmYXVsdFZhbHVlJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gXSB8fCBvcHRpb25zW2BkZWZhdWx0VmFsdWUke2RlZmF1bHRWYWx1ZVN1ZmZpeH1gXSB8fCBvcHRpb25zW2BkZWZhdWx0VmFsdWUke2RlZmF1bHRWYWx1ZVN1ZmZpeE9yZGluYWxGYWxsYmFja31gXSB8fCBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkTG9va3VwKHJlcykgJiYgaGFzRGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHVzZWREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgcmVzID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSkge1xuICAgICAgICB1c2VkS2V5ID0gdHJ1ZTtcbiAgICAgICAgcmVzID0ga2V5O1xuICAgICAgfVxuICAgICAgY29uc3QgbWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5ID0gb3B0aW9ucy5taXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgfHwgdGhpcy5vcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleTtcbiAgICAgIGNvbnN0IHJlc0Zvck1pc3NpbmcgPSBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgJiYgdXNlZEtleSA/IHVuZGVmaW5lZCA6IHJlcztcbiAgICAgIGNvbnN0IHVwZGF0ZU1pc3NpbmcgPSBoYXNEZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlICE9PSByZXMgJiYgdGhpcy5vcHRpb25zLnVwZGF0ZU1pc3Npbmc7XG4gICAgICBpZiAodXNlZEtleSB8fCB1c2VkRGVmYXVsdCB8fCB1cGRhdGVNaXNzaW5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyh1cGRhdGVNaXNzaW5nID8gJ3VwZGF0ZUtleScgOiAnbWlzc2luZ0tleScsIGxuZywgbmFtZXNwYWNlLCBrZXksIHVwZGF0ZU1pc3NpbmcgPyBkZWZhdWx0VmFsdWUgOiByZXMpO1xuICAgICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgY29uc3QgZmsgPSB0aGlzLnJlc29sdmUoa2V5LCB7XG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChmayAmJiBmay5yZXMpIHRoaXMubG9nZ2VyLndhcm4oJ1NlZW1zIHRoZSBsb2FkZWQgdHJhbnNsYXRpb25zIHdlcmUgaW4gZmxhdCBKU09OIGZvcm1hdCBpbnN0ZWFkIG9mIG5lc3RlZC4gRWl0aGVyIHNldCBrZXlTZXBhcmF0b3I6IGZhbHNlIG9uIGluaXQgb3IgbWFrZSBzdXJlIHlvdXIgdHJhbnNsYXRpb25zIGFyZSBwdWJsaXNoZWQgaW4gbmVzdGVkIGZvcm1hdC4nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG5ncyA9IFtdO1xuICAgICAgICBjb25zdCBmYWxsYmFja0xuZ3MgPSB0aGlzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcsIG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdmYWxsYmFjaycgJiYgZmFsbGJhY2tMbmdzICYmIGZhbGxiYWNrTG5nc1swXSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFsbGJhY2tMbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsbmdzLnB1c2goZmFsbGJhY2tMbmdzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdhbGwnKSB7XG4gICAgICAgICAgbG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG5ncy5wdXNoKG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmQgPSAobCwgaywgc3BlY2lmaWNEZWZhdWx0VmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9yTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBzcGVjaWZpY0RlZmF1bHRWYWx1ZSAhPT0gcmVzID8gc3BlY2lmaWNEZWZhdWx0VmFsdWUgOiByZXNGb3JNaXNzaW5nO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5taXNzaW5nS2V5SGFuZGxlcihsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2VuZENvbm5lY3RvciAmJiB0aGlzLmJhY2tlbmRDb25uZWN0b3Iuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZyhsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0KCdtaXNzaW5nS2V5JywgbCwgbmFtZXNwYWNlLCBrLCByZXMpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1BsdXJhbHMgJiYgbmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgbG5ncy5mb3JFYWNoKGxhbmd1YWdlID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VmZml4ZXMgPSB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeGVzKGxhbmd1YWdlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgaWYgKG5lZWRzWmVyb1N1ZmZpeExvb2t1cCAmJiBvcHRpb25zW2BkZWZhdWx0VmFsdWUke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9emVyb2BdICYmIHN1ZmZpeGVzLmluZGV4T2YoYCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn16ZXJvYCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgc3VmZml4ZXMucHVzaChgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdWZmaXhlcy5mb3JFYWNoKHN1ZmZpeCA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZChbbGFuZ3VhZ2VdLCBrZXkgKyBzdWZmaXgsIG9wdGlvbnNbYGRlZmF1bHRWYWx1ZSR7c3VmZml4fWBdIHx8IGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmQobG5ncywga2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleXMsIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KTtcbiAgICAgIGlmICh1c2VkS2V5ICYmIHJlcyA9PT0ga2V5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkpIHJlcyA9IGAke25hbWVzcGFjZX06JHtrZXl9YDtcbiAgICAgIGlmICgodXNlZEtleSB8fCB1c2VkRGVmYXVsdCkgJiYgdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnKSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIodGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleSA/IGAke25hbWVzcGFjZX06JHtrZXl9YCA6IGtleSwgdXNlZERlZmF1bHQgPyByZXMgOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgIHJlc29sdmVkLnJlcyA9IHJlcztcbiAgICAgIHJlc29sdmVkLnVzZWRQYXJhbXMgPSB0aGlzLmdldFVzZWRQYXJhbXNEZXRhaWxzKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5LCBvcHRpb25zLCByZXNvbHZlZCwgbGFzdEtleSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQucGFyc2UpIHtcbiAgICAgIHJlcyA9IHRoaXMuaTE4bkZvcm1hdC5wYXJzZShyZXMsIHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfSwgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSB8fCByZXNvbHZlZC51c2VkTG5nLCByZXNvbHZlZC51c2VkTlMsIHJlc29sdmVkLnVzZWRLZXksIHtcbiAgICAgICAgcmVzb2x2ZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuc2tpcEludGVycG9sYXRpb24pIHtcbiAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLmluaXQoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAuLi57XG4gICAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24sXG4gICAgICAgICAgICAuLi5vcHRpb25zLmludGVycG9sYXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2tpcE9uVmFyaWFibGVzID0gaXNTdHJpbmcocmVzKSAmJiAob3B0aW9ucyAmJiBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyA6IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyk7XG4gICAgICBsZXQgbmVzdEJlZjtcbiAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgY29uc3QgbmIgPSByZXMubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICAgIG5lc3RCZWYgPSBuYiAmJiBuYi5sZW5ndGg7XG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IG9wdGlvbnMucmVwbGFjZSAmJiAhaXNTdHJpbmcob3B0aW9ucy5yZXBsYWNlKSA/IG9wdGlvbnMucmVwbGFjZSA6IG9wdGlvbnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcykgZGF0YSA9IHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfTtcbiAgICAgIHJlcyA9IHRoaXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKHJlcywgZGF0YSwgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSB8fCByZXNvbHZlZC51c2VkTG5nLCBvcHRpb25zKTtcbiAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgY29uc3QgbmEgPSByZXMubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICAgIGNvbnN0IG5lc3RBZnQgPSBuYSAmJiBuYS5sZW5ndGg7XG4gICAgICAgIGlmIChuZXN0QmVmIDwgbmVzdEFmdCkgb3B0aW9ucy5uZXN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMubG5nICYmIHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnICYmIHJlc29sdmVkICYmIHJlc29sdmVkLnJlcykgb3B0aW9ucy5sbmcgPSB0aGlzLmxhbmd1YWdlIHx8IHJlc29sdmVkLnVzZWRMbmc7XG4gICAgICBpZiAob3B0aW9ucy5uZXN0ICE9PSBmYWxzZSkgcmVzID0gdGhpcy5pbnRlcnBvbGF0b3IubmVzdChyZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdEtleSAmJiBsYXN0S2V5WzBdID09PSBhcmdzWzBdICYmICFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihgSXQgc2VlbXMgeW91IGFyZSBuZXN0aW5nIHJlY3Vyc2l2ZWx5IGtleTogJHthcmdzWzBdfSBpbiBrZXk6ICR7a2V5WzBdfWApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy50cmFuc2xhdGUoLi4uYXJncywga2V5KTtcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IucmVzZXQoKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdFByb2Nlc3MgPSBvcHRpb25zLnBvc3RQcm9jZXNzIHx8IHRoaXMub3B0aW9ucy5wb3N0UHJvY2VzcztcbiAgICBjb25zdCBwb3N0UHJvY2Vzc29yTmFtZXMgPSBpc1N0cmluZyhwb3N0UHJvY2VzcykgPyBbcG9zdFByb2Nlc3NdIDogcG9zdFByb2Nlc3M7XG4gICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkICYmIHJlcyAhPT0gbnVsbCAmJiBwb3N0UHJvY2Vzc29yTmFtZXMgJiYgcG9zdFByb2Nlc3Nvck5hbWVzLmxlbmd0aCAmJiBvcHRpb25zLmFwcGx5UG9zdFByb2Nlc3NvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJlcyA9IHBvc3RQcm9jZXNzb3IuaGFuZGxlKHBvc3RQcm9jZXNzb3JOYW1lcywgcmVzLCBrZXksIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMucG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQgPyB7XG4gICAgICAgIGkxOG5SZXNvbHZlZDoge1xuICAgICAgICAgIC4uLnJlc29sdmVkLFxuICAgICAgICAgIHVzZWRQYXJhbXM6IHRoaXMuZ2V0VXNlZFBhcmFtc0RldGFpbHMob3B0aW9ucylcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfSA6IG9wdGlvbnMsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHJlc29sdmUoa2V5cykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBsZXQgZm91bmQ7XG4gICAgbGV0IHVzZWRLZXk7XG4gICAgbGV0IGV4YWN0VXNlZEtleTtcbiAgICBsZXQgdXNlZExuZztcbiAgICBsZXQgdXNlZE5TO1xuICAgIGlmIChpc1N0cmluZyhrZXlzKSkga2V5cyA9IFtrZXlzXTtcbiAgICBrZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgY29uc3QgZXh0cmFjdGVkID0gdGhpcy5leHRyYWN0RnJvbUtleShrLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGtleSA9IGV4dHJhY3RlZC5rZXk7XG4gICAgICB1c2VkS2V5ID0ga2V5O1xuICAgICAgbGV0IG5hbWVzcGFjZXMgPSBleHRyYWN0ZWQubmFtZXNwYWNlcztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmFsbGJhY2tOUykgbmFtZXNwYWNlcyA9IG5hbWVzcGFjZXMuY29uY2F0KHRoaXMub3B0aW9ucy5mYWxsYmFja05TKTtcbiAgICAgIGNvbnN0IG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgIWlzU3RyaW5nKG9wdGlvbnMuY291bnQpO1xuICAgICAgY29uc3QgbmVlZHNaZXJvU3VmZml4TG9va3VwID0gbmVlZHNQbHVyYWxIYW5kbGluZyAmJiAhb3B0aW9ucy5vcmRpbmFsICYmIG9wdGlvbnMuY291bnQgPT09IDAgJiYgdGhpcy5wbHVyYWxSZXNvbHZlci5zaG91bGRVc2VJbnRsQXBpKCk7XG4gICAgICBjb25zdCBuZWVkc0NvbnRleHRIYW5kbGluZyA9IG9wdGlvbnMuY29udGV4dCAhPT0gdW5kZWZpbmVkICYmIChpc1N0cmluZyhvcHRpb25zLmNvbnRleHQpIHx8IHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICdudW1iZXInKSAmJiBvcHRpb25zLmNvbnRleHQgIT09ICcnO1xuICAgICAgY29uc3QgY29kZXMgPSBvcHRpb25zLmxuZ3MgPyBvcHRpb25zLmxuZ3MgOiB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UsIG9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKG5zID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgdXNlZE5TID0gbnM7XG4gICAgICAgIGlmICghY2hlY2tlZExvYWRlZEZvcltgJHtjb2Rlc1swXX0tJHtuc31gXSAmJiB0aGlzLnV0aWxzICYmIHRoaXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlICYmICF0aGlzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZSh1c2VkTlMpKSB7XG4gICAgICAgICAgY2hlY2tlZExvYWRlZEZvcltgJHtjb2Rlc1swXX0tJHtuc31gXSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2Fybihga2V5IFwiJHt1c2VkS2V5fVwiIGZvciBsYW5ndWFnZXMgXCIke2NvZGVzLmpvaW4oJywgJyl9XCIgd29uJ3QgZ2V0IHJlc29sdmVkIGFzIG5hbWVzcGFjZSBcIiR7dXNlZE5TfVwiIHdhcyBub3QgeWV0IGxvYWRlZGAsICdUaGlzIG1lYW5zIHNvbWV0aGluZyBJUyBXUk9ORyBpbiB5b3VyIHNldHVwLiBZb3UgYWNjZXNzIHRoZSB0IGZ1bmN0aW9uIGJlZm9yZSBpMThuZXh0LmluaXQgLyBpMThuZXh0LmxvYWROYW1lc3BhY2UgLyBpMThuZXh0LmNoYW5nZUxhbmd1YWdlIHdhcyBkb25lLiBXYWl0IGZvciB0aGUgY2FsbGJhY2sgb3IgUHJvbWlzZSB0byByZXNvbHZlIGJlZm9yZSBhY2Nlc3NpbmcgaXQhISEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRMb29rdXAoZm91bmQpKSByZXR1cm47XG4gICAgICAgICAgdXNlZExuZyA9IGNvZGU7XG4gICAgICAgICAgY29uc3QgZmluYWxLZXlzID0gW2tleV07XG4gICAgICAgICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQuYWRkTG9va3VwS2V5cykge1xuICAgICAgICAgICAgdGhpcy5pMThuRm9ybWF0LmFkZExvb2t1cEtleXMoZmluYWxLZXlzLCBrZXksIGNvZGUsIG5zLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBsdXJhbFN1ZmZpeDtcbiAgICAgICAgICAgIGlmIChuZWVkc1BsdXJhbEhhbmRsaW5nKSBwbHVyYWxTdWZmaXggPSB0aGlzLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChjb2RlLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IHplcm9TdWZmaXggPSBgJHt0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yfXplcm9gO1xuICAgICAgICAgICAgY29uc3Qgb3JkaW5hbFByZWZpeCA9IGAke3RoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3J9b3JkaW5hbCR7dGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcn1gO1xuICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goa2V5ICsgcGx1cmFsU3VmZml4KTtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub3JkaW5hbCAmJiBwbHVyYWxTdWZmaXguaW5kZXhPZihvcmRpbmFsUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHBsdXJhbFN1ZmZpeC5yZXBsYWNlKG9yZGluYWxQcmVmaXgsIHRoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goa2V5ICsgemVyb1N1ZmZpeCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZWVkc0NvbnRleHRIYW5kbGluZykge1xuICAgICAgICAgICAgICBjb25zdCBjb250ZXh0S2V5ID0gYCR7a2V5fSR7dGhpcy5vcHRpb25zLmNvbnRleHRTZXBhcmF0b3J9JHtvcHRpb25zLmNvbnRleHR9YDtcbiAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSk7XG4gICAgICAgICAgICAgIGlmIChuZWVkc1BsdXJhbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSArIHBsdXJhbFN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub3JkaW5hbCAmJiBwbHVyYWxTdWZmaXguaW5kZXhPZihvcmRpbmFsUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSArIHBsdXJhbFN1ZmZpeC5yZXBsYWNlKG9yZGluYWxQcmVmaXgsIHRoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzWmVyb1N1ZmZpeExvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSArIHplcm9TdWZmaXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcG9zc2libGVLZXk7XG4gICAgICAgICAgd2hpbGUgKHBvc3NpYmxlS2V5ID0gZmluYWxLZXlzLnBvcCgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZExvb2t1cChmb3VuZCkpIHtcbiAgICAgICAgICAgICAgZXhhY3RVc2VkS2V5ID0gcG9zc2libGVLZXk7XG4gICAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRSZXNvdXJjZShjb2RlLCBucywgcG9zc2libGVLZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzOiBmb3VuZCxcbiAgICAgIHVzZWRLZXksXG4gICAgICBleGFjdFVzZWRLZXksXG4gICAgICB1c2VkTG5nLFxuICAgICAgdXNlZE5TXG4gICAgfTtcbiAgfVxuICBpc1ZhbGlkTG9va3VwKHJlcykge1xuICAgIHJldHVybiByZXMgIT09IHVuZGVmaW5lZCAmJiAhKCF0aGlzLm9wdGlvbnMucmV0dXJuTnVsbCAmJiByZXMgPT09IG51bGwpICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5FbXB0eVN0cmluZyAmJiByZXMgPT09ICcnKTtcbiAgfVxuICBnZXRSZXNvdXJjZShjb2RlLCBucywga2V5KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGlmICh0aGlzLmkxOG5Gb3JtYXQgJiYgdGhpcy5pMThuRm9ybWF0LmdldFJlc291cmNlKSByZXR1cm4gdGhpcy5pMThuRm9ybWF0LmdldFJlc291cmNlKGNvZGUsIG5zLCBrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlU3RvcmUuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gIH1cbiAgZ2V0VXNlZFBhcmFtc0RldGFpbHMoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGNvbnN0IG9wdGlvbnNLZXlzID0gWydkZWZhdWx0VmFsdWUnLCAnb3JkaW5hbCcsICdjb250ZXh0JywgJ3JlcGxhY2UnLCAnbG5nJywgJ2xuZ3MnLCAnZmFsbGJhY2tMbmcnLCAnbnMnLCAna2V5U2VwYXJhdG9yJywgJ25zU2VwYXJhdG9yJywgJ3JldHVybk9iamVjdHMnLCAncmV0dXJuRGV0YWlscycsICdqb2luQXJyYXlzJywgJ3Bvc3RQcm9jZXNzJywgJ2ludGVycG9sYXRpb24nXTtcbiAgICBjb25zdCB1c2VPcHRpb25zUmVwbGFjZUZvckRhdGEgPSBvcHRpb25zLnJlcGxhY2UgJiYgIWlzU3RyaW5nKG9wdGlvbnMucmVwbGFjZSk7XG4gICAgbGV0IGRhdGEgPSB1c2VPcHRpb25zUmVwbGFjZUZvckRhdGEgPyBvcHRpb25zLnJlcGxhY2UgOiBvcHRpb25zO1xuICAgIGlmICh1c2VPcHRpb25zUmVwbGFjZUZvckRhdGEgJiYgdHlwZW9mIG9wdGlvbnMuY291bnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkYXRhLmNvdW50ID0gb3B0aW9ucy5jb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMsXG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghdXNlT3B0aW9uc1JlcGxhY2VGb3JEYXRhKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5kYXRhXG4gICAgICB9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Ygb3B0aW9uc0tleXMpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgc3RhdGljIGhhc0RlZmF1bHRWYWx1ZShvcHRpb25zKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2RlZmF1bHRWYWx1ZSc7XG4gICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBvcHRpb24pICYmIHByZWZpeCA9PT0gb3B0aW9uLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSAmJiB1bmRlZmluZWQgIT09IG9wdGlvbnNbb3B0aW9uXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IGNhcGl0YWxpemUgPSBzdHJpbmcgPT4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuY2xhc3MgTGFuZ3VhZ2VVdGlsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdXBwb3J0ZWRMbmdzID0gdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgZmFsc2U7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnbGFuZ3VhZ2VVdGlscycpO1xuICB9XG4gIGdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSB7XG4gICAgY29kZSA9IGdldENsZWFuZWRDb2RlKGNvZGUpO1xuICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgaWYgKHAubGVuZ3RoID09PSAyKSByZXR1cm4gbnVsbDtcbiAgICBwLnBvcCgpO1xuICAgIGlmIChwW3AubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocC5qb2luKCctJykpO1xuICB9XG4gIGdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICBjb2RlID0gZ2V0Q2xlYW5lZENvZGUoY29kZSk7XG4gICAgaWYgKCFjb2RlIHx8IGNvZGUuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuIGNvZGU7XG4gICAgY29uc3QgcCA9IGNvZGUuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocFswXSk7XG4gIH1cbiAgZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpIHtcbiAgICBpZiAoaXNTdHJpbmcoY29kZSkgJiYgY29kZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgaWYgKHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgSW50bC5nZXRDYW5vbmljYWxMb2NhbGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gSW50bC5nZXRDYW5vbmljYWxMb2NhbGVzKGNvZGUpWzBdO1xuICAgICAgICAgIGlmIChmb3JtYXR0ZWRDb2RlICYmIHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZENvZGUgPSBmb3JtYXR0ZWRDb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3JtYXR0ZWRDb2RlKSByZXR1cm4gZm9ybWF0dGVkQ29kZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNwZWNpYWxDYXNlcyA9IFsnaGFucycsICdoYW50JywgJ2xhdG4nLCAnY3lybCcsICdjYW5zJywgJ21vbmcnLCAnYXJhYiddO1xuICAgICAgbGV0IHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZykge1xuICAgICAgICBwID0gcC5tYXAocGFydCA9PiBwYXJ0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBwWzFdID0gcFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocFsxXS5sZW5ndGggPT09IDIpIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChwWzBdICE9PSAnc2duJyAmJiBwWzJdLmxlbmd0aCA9PT0gMikgcFsyXSA9IHBbMl0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMV0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsxXSA9IGNhcGl0YWxpemUocFsxXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMl0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsyXSA9IGNhcGl0YWxpemUocFsyXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwLmpvaW4oJy0nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGVhbkNvZGUgfHwgdGhpcy5vcHRpb25zLmxvd2VyQ2FzZUxuZyA/IGNvZGUudG9Mb3dlckNhc2UoKSA6IGNvZGU7XG4gIH1cbiAgaXNTdXBwb3J0ZWRDb2RlKGNvZGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgPT09ICdsYW5ndWFnZU9ubHknIHx8IHRoaXMub3B0aW9ucy5ub25FeHBsaWNpdFN1cHBvcnRlZExuZ3MpIHtcbiAgICAgIGNvZGUgPSB0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuc3VwcG9ydGVkTG5ncyB8fCAhdGhpcy5zdXBwb3J0ZWRMbmdzLmxlbmd0aCB8fCB0aGlzLnN1cHBvcnRlZExuZ3MuaW5kZXhPZihjb2RlKSA+IC0xO1xuICB9XG4gIGdldEJlc3RNYXRjaEZyb21Db2Rlcyhjb2Rlcykge1xuICAgIGlmICghY29kZXMpIHJldHVybiBudWxsO1xuICAgIGxldCBmb3VuZDtcbiAgICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgICBjb25zdCBjbGVhbmVkTG5nID0gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSk7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8IHRoaXMuaXNTdXBwb3J0ZWRDb2RlKGNsZWFuZWRMbmcpKSBmb3VuZCA9IGNsZWFuZWRMbmc7XG4gICAgfSk7XG4gICAgaWYgKCFmb3VuZCAmJiB0aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncykge1xuICAgICAgY29kZXMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgaWYgKGZvdW5kKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxuZ09ubHkgPSB0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpO1xuICAgICAgICBpZiAodGhpcy5pc1N1cHBvcnRlZENvZGUobG5nT25seSkpIHJldHVybiBmb3VuZCA9IGxuZ09ubHk7XG4gICAgICAgIGZvdW5kID0gdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MuZmluZChzdXBwb3J0ZWRMbmcgPT4ge1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcgPT09IGxuZ09ubHkpIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgICAgaWYgKHN1cHBvcnRlZExuZy5pbmRleE9mKCctJykgPCAwICYmIGxuZ09ubHkuaW5kZXhPZignLScpIDwgMCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChzdXBwb3J0ZWRMbmcuaW5kZXhPZignLScpID4gMCAmJiBsbmdPbmx5LmluZGV4T2YoJy0nKSA8IDAgJiYgc3VwcG9ydGVkTG5nLnN1YnN0cmluZygwLCBzdXBwb3J0ZWRMbmcuaW5kZXhPZignLScpKSA9PT0gbG5nT25seSkgcmV0dXJuIHN1cHBvcnRlZExuZztcbiAgICAgICAgICBpZiAoc3VwcG9ydGVkTG5nLmluZGV4T2YobG5nT25seSkgPT09IDAgJiYgbG5nT25seS5sZW5ndGggPiAxKSByZXR1cm4gc3VwcG9ydGVkTG5nO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IHRoaXMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpWzBdO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBnZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrcywgY29kZSkge1xuICAgIGlmICghZmFsbGJhY2tzKSByZXR1cm4gW107XG4gICAgaWYgKHR5cGVvZiBmYWxsYmFja3MgPT09ICdmdW5jdGlvbicpIGZhbGxiYWNrcyA9IGZhbGxiYWNrcyhjb2RlKTtcbiAgICBpZiAoaXNTdHJpbmcoZmFsbGJhY2tzKSkgZmFsbGJhY2tzID0gW2ZhbGxiYWNrc107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFsbGJhY2tzKSkgcmV0dXJuIGZhbGxiYWNrcztcbiAgICBpZiAoIWNvZGUpIHJldHVybiBmYWxsYmFja3MuZGVmYXVsdCB8fCBbXTtcbiAgICBsZXQgZm91bmQgPSBmYWxsYmFja3NbY29kZV07XG4gICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbdGhpcy5nZXRTY3JpcHRQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpXTtcbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpXTtcbiAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrcy5kZWZhdWx0O1xuICAgIHJldHVybiBmb3VuZCB8fCBbXTtcbiAgfVxuICB0b1Jlc29sdmVIaWVyYXJjaHkoY29kZSwgZmFsbGJhY2tDb2RlKSB7XG4gICAgY29uc3QgZmFsbGJhY2tDb2RlcyA9IHRoaXMuZ2V0RmFsbGJhY2tDb2RlcyhmYWxsYmFja0NvZGUgfHwgdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIHx8IFtdLCBjb2RlKTtcbiAgICBjb25zdCBjb2RlcyA9IFtdO1xuICAgIGNvbnN0IGFkZENvZGUgPSBjID0+IHtcbiAgICAgIGlmICghYykgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWRDb2RlKGMpKSB7XG4gICAgICAgIGNvZGVzLnB1c2goYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGByZWplY3RpbmcgbGFuZ3VhZ2UgY29kZSBub3QgZm91bmQgaW4gc3VwcG9ydGVkTG5nczogJHtjfWApO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzU3RyaW5nKGNvZGUpICYmIChjb2RlLmluZGV4T2YoJy0nKSA+IC0xIHx8IGNvZGUuaW5kZXhPZignXycpID4gLTEpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdsYW5ndWFnZU9ubHknKSBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScgJiYgdGhpcy5vcHRpb25zLmxvYWQgIT09ICdjdXJyZW50T25seScpIGFkZENvZGUodGhpcy5nZXRTY3JpcHRQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoY29kZSkpIHtcbiAgICAgIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgIH1cbiAgICBmYWxsYmFja0NvZGVzLmZvckVhY2goZmMgPT4ge1xuICAgICAgaWYgKGNvZGVzLmluZGV4T2YoZmMpIDwgMCkgYWRkQ29kZSh0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShmYykpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2RlcztcbiAgfVxufVxuXG5sZXQgc2V0cyA9IFt7XG4gIGxuZ3M6IFsnYWNoJywgJ2FrJywgJ2FtJywgJ2FybicsICdicicsICdmaWwnLCAnZ3VuJywgJ2xuJywgJ21mZScsICdtZycsICdtaScsICdvYycsICdwdCcsICdwdC1CUicsICd0ZycsICd0bCcsICd0aScsICd0cicsICd1eicsICd3YSddLFxuICBucjogWzEsIDJdLFxuICBmYzogMVxufSwge1xuICBsbmdzOiBbJ2FmJywgJ2FuJywgJ2FzdCcsICdheicsICdiZycsICdibicsICdjYScsICdkYScsICdkZScsICdkZXYnLCAnZWwnLCAnZW4nLCAnZW8nLCAnZXMnLCAnZXQnLCAnZXUnLCAnZmknLCAnZm8nLCAnZnVyJywgJ2Z5JywgJ2dsJywgJ2d1JywgJ2hhJywgJ2hpJywgJ2h1JywgJ2h5JywgJ2lhJywgJ2l0JywgJ2trJywgJ2tuJywgJ2t1JywgJ2xiJywgJ21haScsICdtbCcsICdtbicsICdtcicsICduYWgnLCAnbmFwJywgJ25iJywgJ25lJywgJ25sJywgJ25uJywgJ25vJywgJ25zbycsICdwYScsICdwYXAnLCAncG1zJywgJ3BzJywgJ3B0LVBUJywgJ3JtJywgJ3NjbycsICdzZScsICdzaScsICdzbycsICdzb24nLCAnc3EnLCAnc3YnLCAnc3cnLCAndGEnLCAndGUnLCAndGsnLCAndXInLCAneW8nXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydheScsICdibycsICdjZ2cnLCAnZmEnLCAnaHQnLCAnaWQnLCAnamEnLCAnamJvJywgJ2thJywgJ2ttJywgJ2tvJywgJ2t5JywgJ2xvJywgJ21zJywgJ3NhaCcsICdzdScsICd0aCcsICd0dCcsICd1ZycsICd2aScsICd3bycsICd6aCddLFxuICBucjogWzFdLFxuICBmYzogM1xufSwge1xuICBsbmdzOiBbJ2JlJywgJ2JzJywgJ2NucicsICdkeicsICdocicsICdydScsICdzcicsICd1ayddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogNFxufSwge1xuICBsbmdzOiBbJ2FyJ10sXG4gIG5yOiBbMCwgMSwgMiwgMywgMTEsIDEwMF0sXG4gIGZjOiA1XG59LCB7XG4gIGxuZ3M6IFsnY3MnLCAnc2snXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDZcbn0sIHtcbiAgbG5nczogWydjc2InLCAncGwnXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDdcbn0sIHtcbiAgbG5nczogWydjeSddLFxuICBucjogWzEsIDIsIDMsIDhdLFxuICBmYzogOFxufSwge1xuICBsbmdzOiBbJ2ZyJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiA5XG59LCB7XG4gIGxuZ3M6IFsnZ2EnXSxcbiAgbnI6IFsxLCAyLCAzLCA3LCAxMV0sXG4gIGZjOiAxMFxufSwge1xuICBsbmdzOiBbJ2dkJ10sXG4gIG5yOiBbMSwgMiwgMywgMjBdLFxuICBmYzogMTFcbn0sIHtcbiAgbG5nczogWydpcyddLFxuICBucjogWzEsIDJdLFxuICBmYzogMTJcbn0sIHtcbiAgbG5nczogWydqdiddLFxuICBucjogWzAsIDFdLFxuICBmYzogMTNcbn0sIHtcbiAgbG5nczogWydrdyddLFxuICBucjogWzEsIDIsIDMsIDRdLFxuICBmYzogMTRcbn0sIHtcbiAgbG5nczogWydsdCddLFxuICBucjogWzEsIDIsIDEwXSxcbiAgZmM6IDE1XG59LCB7XG4gIGxuZ3M6IFsnbHYnXSxcbiAgbnI6IFsxLCAyLCAwXSxcbiAgZmM6IDE2XG59LCB7XG4gIGxuZ3M6IFsnbWsnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDE3XG59LCB7XG4gIGxuZ3M6IFsnbW5rJ10sXG4gIG5yOiBbMCwgMSwgMl0sXG4gIGZjOiAxOFxufSwge1xuICBsbmdzOiBbJ210J10sXG4gIG5yOiBbMSwgMiwgMTEsIDIwXSxcbiAgZmM6IDE5XG59LCB7XG4gIGxuZ3M6IFsnb3InXSxcbiAgbnI6IFsyLCAxXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydybyddLFxuICBucjogWzEsIDIsIDIwXSxcbiAgZmM6IDIwXG59LCB7XG4gIGxuZ3M6IFsnc2wnXSxcbiAgbnI6IFs1LCAxLCAyLCAzXSxcbiAgZmM6IDIxXG59LCB7XG4gIGxuZ3M6IFsnaGUnLCAnaXcnXSxcbiAgbnI6IFsxLCAyLCAyMCwgMjFdLFxuICBmYzogMjJcbn1dO1xubGV0IF9ydWxlc1BsdXJhbHNUeXBlcyA9IHtcbiAgMTogbiA9PiBOdW1iZXIobiA+IDEpLFxuICAyOiBuID0+IE51bWJlcihuICE9IDEpLFxuICAzOiBuID0+IDAsXG4gIDQ6IG4gPT4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyKSxcbiAgNTogbiA9PiBOdW1iZXIobiA9PSAwID8gMCA6IG4gPT0gMSA/IDEgOiBuID09IDIgPyAyIDogbiAlIDEwMCA+PSAzICYmIG4gJSAxMDAgPD0gMTAgPyAzIDogbiAlIDEwMCA+PSAxMSA/IDQgOiA1KSxcbiAgNjogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPj0gMiAmJiBuIDw9IDQgPyAxIDogMiksXG4gIDc6IG4gPT4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpLFxuICA4OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gIT0gOCAmJiBuICE9IDExID8gMiA6IDMpLFxuICA5OiBuID0+IE51bWJlcihuID49IDIpLFxuICAxMDogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuIDwgNyA/IDIgOiBuIDwgMTEgPyAzIDogNCksXG4gIDExOiBuID0+IE51bWJlcihuID09IDEgfHwgbiA9PSAxMSA/IDAgOiBuID09IDIgfHwgbiA9PSAxMiA/IDEgOiBuID4gMiAmJiBuIDwgMjAgPyAyIDogMyksXG4gIDEyOiBuID0+IE51bWJlcihuICUgMTAgIT0gMSB8fCBuICUgMTAwID09IDExKSxcbiAgMTM6IG4gPT4gTnVtYmVyKG4gIT09IDApLFxuICAxNDogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuID09IDMgPyAyIDogMyksXG4gIDE1OiBuID0+IE51bWJlcihuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMiksXG4gIDE2OiBuID0+IE51bWJlcihuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IG4gIT09IDAgPyAxIDogMiksXG4gIDE3OiBuID0+IE51bWJlcihuID09IDEgfHwgbiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiAxKSxcbiAgMTg6IG4gPT4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuID09IDEgPyAxIDogMiksXG4gIDE5OiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAwIHx8IG4gJSAxMDAgPiAxICYmIG4gJSAxMDAgPCAxMSA/IDEgOiBuICUgMTAwID4gMTAgJiYgbiAlIDEwMCA8IDIwID8gMiA6IDMpLFxuICAyMDogbiA9PiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMCB8fCBuICUgMTAwID4gMCAmJiBuICUgMTAwIDwgMjAgPyAxIDogMiksXG4gIDIxOiBuID0+IE51bWJlcihuICUgMTAwID09IDEgPyAxIDogbiAlIDEwMCA9PSAyID8gMiA6IG4gJSAxMDAgPT0gMyB8fCBuICUgMTAwID09IDQgPyAzIDogMCksXG4gIDIyOiBuID0+IE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IChuIDwgMCB8fCBuID4gMTApICYmIG4gJSAxMCA9PSAwID8gMiA6IDMpXG59O1xuY29uc3Qgbm9uSW50bFZlcnNpb25zID0gWyd2MScsICd2MicsICd2MyddO1xuY29uc3QgaW50bFZlcnNpb25zID0gWyd2NCddO1xuY29uc3Qgc3VmZml4ZXNPcmRlciA9IHtcbiAgemVybzogMCxcbiAgb25lOiAxLFxuICB0d286IDIsXG4gIGZldzogMyxcbiAgbWFueTogNCxcbiAgb3RoZXI6IDVcbn07XG5jb25zdCBjcmVhdGVSdWxlcyA9ICgpID0+IHtcbiAgY29uc3QgcnVsZXMgPSB7fTtcbiAgc2V0cy5mb3JFYWNoKHNldCA9PiB7XG4gICAgc2V0LmxuZ3MuZm9yRWFjaChsID0+IHtcbiAgICAgIHJ1bGVzW2xdID0ge1xuICAgICAgICBudW1iZXJzOiBzZXQubnIsXG4gICAgICAgIHBsdXJhbHM6IF9ydWxlc1BsdXJhbHNUeXBlc1tzZXQuZmNdXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJ1bGVzO1xufTtcbmNsYXNzIFBsdXJhbFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VVdGlscykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLmxhbmd1YWdlVXRpbHMgPSBsYW5ndWFnZVV0aWxzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgncGx1cmFsUmVzb2x2ZXInKTtcbiAgICBpZiAoKCF0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gfHwgaW50bFZlcnNpb25zLmluY2x1ZGVzKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTikpICYmICh0eXBlb2YgSW50bCA9PT0gJ3VuZGVmaW5lZCcgfHwgIUludGwuUGx1cmFsUnVsZXMpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPSAndjMnO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ1lvdXIgZW52aXJvbm1lbnQgc2VlbXMgbm90IHRvIGJlIEludGwgQVBJIGNvbXBhdGlibGUsIHVzZSBhbiBJbnRsLlBsdXJhbFJ1bGVzIHBvbHlmaWxsLiBXaWxsIGZhbGxiYWNrIHRvIHRoZSBjb21wYXRpYmlsaXR5SlNPTiB2MyBmb3JtYXQgaGFuZGxpbmcuJyk7XG4gICAgfVxuICAgIHRoaXMucnVsZXMgPSBjcmVhdGVSdWxlcygpO1xuICAgIHRoaXMucGx1cmFsUnVsZXNDYWNoZSA9IHt9O1xuICB9XG4gIGFkZFJ1bGUobG5nLCBvYmopIHtcbiAgICB0aGlzLnJ1bGVzW2xuZ10gPSBvYmo7XG4gIH1cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGUgPSB7fTtcbiAgfVxuICBnZXRSdWxlKGNvZGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICBjb25zdCBjbGVhbmVkQ29kZSA9IGdldENsZWFuZWRDb2RlKGNvZGUgPT09ICdkZXYnID8gJ2VuJyA6IGNvZGUpO1xuICAgICAgY29uc3QgdHlwZSA9IG9wdGlvbnMub3JkaW5hbCA/ICdvcmRpbmFsJyA6ICdjYXJkaW5hbCc7XG4gICAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2xlYW5lZENvZGUsXG4gICAgICAgIHR5cGVcbiAgICAgIH0pO1xuICAgICAgaWYgKGNhY2hlS2V5IGluIHRoaXMucGx1cmFsUnVsZXNDYWNoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlW2NhY2hlS2V5XTtcbiAgICAgIH1cbiAgICAgIGxldCBydWxlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcnVsZSA9IG5ldyBJbnRsLlBsdXJhbFJ1bGVzKGNsZWFuZWRDb2RlLCB7XG4gICAgICAgICAgdHlwZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWNvZGUubWF0Y2goLy18Xy8pKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxuZ1BhcnQgPSB0aGlzLmxhbmd1YWdlVXRpbHMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUobG5nUGFydCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGVbY2FjaGVLZXldID0gcnVsZTtcbiAgICAgIHJldHVybiBydWxlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ydWxlc1tjb2RlXSB8fCB0aGlzLnJ1bGVzW3RoaXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKV07XG4gIH1cbiAgbmVlZHNQbHVyYWwoY29kZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLmxlbmd0aCA+IDE7XG4gICAgfVxuICAgIHJldHVybiBydWxlICYmIHJ1bGUubnVtYmVycy5sZW5ndGggPiAxO1xuICB9XG4gIGdldFBsdXJhbEZvcm1zT2ZLZXkoY29kZSwga2V5KSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiB0aGlzLmdldFN1ZmZpeGVzKGNvZGUsIG9wdGlvbnMpLm1hcChzdWZmaXggPT4gYCR7a2V5fSR7c3VmZml4fWApO1xuICB9XG4gIGdldFN1ZmZpeGVzKGNvZGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZShjb2RlLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICByZXR1cm4gcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLnNvcnQoKHBsdXJhbENhdGVnb3J5MSwgcGx1cmFsQ2F0ZWdvcnkyKSA9PiBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5MV0gLSBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5Ml0pLm1hcChwbHVyYWxDYXRlZ29yeSA9PiBgJHt0aGlzLm9wdGlvbnMucHJlcGVuZH0ke29wdGlvbnMub3JkaW5hbCA/IGBvcmRpbmFsJHt0aGlzLm9wdGlvbnMucHJlcGVuZH1gIDogJyd9JHtwbHVyYWxDYXRlZ29yeX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGUubnVtYmVycy5tYXAobnVtYmVyID0+IHRoaXMuZ2V0U3VmZml4KGNvZGUsIG51bWJlciwgb3B0aW9ucykpO1xuICB9XG4gIGdldFN1ZmZpeChjb2RlLCBjb3VudCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuICAgIGlmIChydWxlKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wcmVwZW5kfSR7b3B0aW9ucy5vcmRpbmFsID8gYG9yZGluYWwke3RoaXMub3B0aW9ucy5wcmVwZW5kfWAgOiAnJ30ke3J1bGUuc2VsZWN0KGNvdW50KX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KTtcbiAgICB9XG4gICAgdGhpcy5sb2dnZXIud2Fybihgbm8gcGx1cmFsIHJ1bGUgZm91bmQgZm9yOiAke2NvZGV9YCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGdldFN1ZmZpeFJldHJvQ29tcGF0aWJsZShydWxlLCBjb3VudCkge1xuICAgIGNvbnN0IGlkeCA9IHJ1bGUubm9BYnMgPyBydWxlLnBsdXJhbHMoY291bnQpIDogcnVsZS5wbHVyYWxzKE1hdGguYWJzKGNvdW50KSk7XG4gICAgbGV0IHN1ZmZpeCA9IHJ1bGUubnVtYmVyc1tpZHhdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgIGlmIChzdWZmaXggPT09IDIpIHtcbiAgICAgICAgc3VmZml4ID0gJ3BsdXJhbCc7XG4gICAgICB9IGVsc2UgaWYgKHN1ZmZpeCA9PT0gMSkge1xuICAgICAgICBzdWZmaXggPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmV0dXJuU3VmZml4ID0gKCkgPT4gdGhpcy5vcHRpb25zLnByZXBlbmQgJiYgc3VmZml4LnRvU3RyaW5nKCkgPyB0aGlzLm9wdGlvbnMucHJlcGVuZCArIHN1ZmZpeC50b1N0cmluZygpIDogc3VmZml4LnRvU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiA9PT0gJ3YxJykge1xuICAgICAgaWYgKHN1ZmZpeCA9PT0gMSkgcmV0dXJuICcnO1xuICAgICAgaWYgKHR5cGVvZiBzdWZmaXggPT09ICdudW1iZXInKSByZXR1cm4gYF9wbHVyYWxfJHtzdWZmaXgudG9TdHJpbmcoKX1gO1xuICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjInKSB7XG4gICAgICByZXR1cm4gcmV0dXJuU3VmZml4KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wcmVwZW5kICYmIGlkeC50b1N0cmluZygpID8gdGhpcy5vcHRpb25zLnByZXBlbmQgKyBpZHgudG9TdHJpbmcoKSA6IGlkeC50b1N0cmluZygpO1xuICB9XG4gIHNob3VsZFVzZUludGxBcGkoKSB7XG4gICAgcmV0dXJuICFub25JbnRsVmVyc2lvbnMuaW5jbHVkZXModGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OKTtcbiAgfVxufVxuXG5jb25zdCBkZWVwRmluZFdpdGhEZWZhdWx0cyA9IGZ1bmN0aW9uIChkYXRhLCBkZWZhdWx0RGF0YSwga2V5KSB7XG4gIGxldCBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6ICcuJztcbiAgbGV0IGlnbm9yZUpTT05TdHJ1Y3R1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHRydWU7XG4gIGxldCBwYXRoID0gZ2V0UGF0aFdpdGhEZWZhdWx0cyhkYXRhLCBkZWZhdWx0RGF0YSwga2V5KTtcbiAgaWYgKCFwYXRoICYmIGlnbm9yZUpTT05TdHJ1Y3R1cmUgJiYgaXNTdHJpbmcoa2V5KSkge1xuICAgIHBhdGggPSBkZWVwRmluZChkYXRhLCBrZXksIGtleVNlcGFyYXRvcik7XG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkgcGF0aCA9IGRlZXBGaW5kKGRlZmF1bHREYXRhLCBrZXksIGtleVNlcGFyYXRvcik7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59O1xuY29uc3QgcmVnZXhTYWZlID0gdmFsID0+IHZhbC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKTtcbmNsYXNzIEludGVycG9sYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdpbnRlcnBvbGF0b3InKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgfHwgKHZhbHVlID0+IHZhbHVlKTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKCFvcHRpb25zLmludGVycG9sYXRpb24pIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiA9IHtcbiAgICAgIGVzY2FwZVZhbHVlOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCB7XG4gICAgICBlc2NhcGU6IGVzY2FwZSQxLFxuICAgICAgZXNjYXBlVmFsdWUsXG4gICAgICB1c2VSYXdWYWx1ZVRvRXNjYXBlLFxuICAgICAgcHJlZml4LFxuICAgICAgcHJlZml4RXNjYXBlZCxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHN1ZmZpeEVzY2FwZWQsXG4gICAgICBmb3JtYXRTZXBhcmF0b3IsXG4gICAgICB1bmVzY2FwZVN1ZmZpeCxcbiAgICAgIHVuZXNjYXBlUHJlZml4LFxuICAgICAgbmVzdGluZ1ByZWZpeCxcbiAgICAgIG5lc3RpbmdQcmVmaXhFc2NhcGVkLFxuICAgICAgbmVzdGluZ1N1ZmZpeCxcbiAgICAgIG5lc3RpbmdTdWZmaXhFc2NhcGVkLFxuICAgICAgbmVzdGluZ09wdGlvbnNTZXBhcmF0b3IsXG4gICAgICBtYXhSZXBsYWNlcyxcbiAgICAgIGFsd2F5c0Zvcm1hdFxuICAgIH0gPSBvcHRpb25zLmludGVycG9sYXRpb247XG4gICAgdGhpcy5lc2NhcGUgPSBlc2NhcGUkMSAhPT0gdW5kZWZpbmVkID8gZXNjYXBlJDEgOiBlc2NhcGU7XG4gICAgdGhpcy5lc2NhcGVWYWx1ZSA9IGVzY2FwZVZhbHVlICE9PSB1bmRlZmluZWQgPyBlc2NhcGVWYWx1ZSA6IHRydWU7XG4gICAgdGhpcy51c2VSYXdWYWx1ZVRvRXNjYXBlID0gdXNlUmF3VmFsdWVUb0VzY2FwZSAhPT0gdW5kZWZpbmVkID8gdXNlUmF3VmFsdWVUb0VzY2FwZSA6IGZhbHNlO1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4ID8gcmVnZXhFc2NhcGUocHJlZml4KSA6IHByZWZpeEVzY2FwZWQgfHwgJ3t7JztcbiAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeCA/IHJlZ2V4RXNjYXBlKHN1ZmZpeCkgOiBzdWZmaXhFc2NhcGVkIHx8ICd9fSc7XG4gICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBmb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICAgIHRoaXMudW5lc2NhcGVQcmVmaXggPSB1bmVzY2FwZVN1ZmZpeCA/ICcnIDogdW5lc2NhcGVQcmVmaXggfHwgJy0nO1xuICAgIHRoaXMudW5lc2NhcGVTdWZmaXggPSB0aGlzLnVuZXNjYXBlUHJlZml4ID8gJycgOiB1bmVzY2FwZVN1ZmZpeCB8fCAnJztcbiAgICB0aGlzLm5lc3RpbmdQcmVmaXggPSBuZXN0aW5nUHJlZml4ID8gcmVnZXhFc2NhcGUobmVzdGluZ1ByZWZpeCkgOiBuZXN0aW5nUHJlZml4RXNjYXBlZCB8fCByZWdleEVzY2FwZSgnJHQoJyk7XG4gICAgdGhpcy5uZXN0aW5nU3VmZml4ID0gbmVzdGluZ1N1ZmZpeCA/IHJlZ2V4RXNjYXBlKG5lc3RpbmdTdWZmaXgpIDogbmVzdGluZ1N1ZmZpeEVzY2FwZWQgfHwgcmVnZXhFc2NhcGUoJyknKTtcbiAgICB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yID0gbmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgfHwgJywnO1xuICAgIHRoaXMubWF4UmVwbGFjZXMgPSBtYXhSZXBsYWNlcyB8fCAxMDAwO1xuICAgIHRoaXMuYWx3YXlzRm9ybWF0ID0gYWx3YXlzRm9ybWF0ICE9PSB1bmRlZmluZWQgPyBhbHdheXNGb3JtYXQgOiBmYWxzZTtcbiAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykgdGhpcy5pbml0KHRoaXMub3B0aW9ucyk7XG4gIH1cbiAgcmVzZXRSZWdFeHAoKSB7XG4gICAgY29uc3QgZ2V0T3JSZXNldFJlZ0V4cCA9IChleGlzdGluZ1JlZ0V4cCwgcGF0dGVybikgPT4ge1xuICAgICAgaWYgKGV4aXN0aW5nUmVnRXhwICYmIGV4aXN0aW5nUmVnRXhwLnNvdXJjZSA9PT0gcGF0dGVybikge1xuICAgICAgICBleGlzdGluZ1JlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSZWdFeHA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICAgIH07XG4gICAgdGhpcy5yZWdleHAgPSBnZXRPclJlc2V0UmVnRXhwKHRoaXMucmVnZXhwLCBgJHt0aGlzLnByZWZpeH0oLis/KSR7dGhpcy5zdWZmaXh9YCk7XG4gICAgdGhpcy5yZWdleHBVbmVzY2FwZSA9IGdldE9yUmVzZXRSZWdFeHAodGhpcy5yZWdleHBVbmVzY2FwZSwgYCR7dGhpcy5wcmVmaXh9JHt0aGlzLnVuZXNjYXBlUHJlZml4fSguKz8pJHt0aGlzLnVuZXNjYXBlU3VmZml4fSR7dGhpcy5zdWZmaXh9YCk7XG4gICAgdGhpcy5uZXN0aW5nUmVnZXhwID0gZ2V0T3JSZXNldFJlZ0V4cCh0aGlzLm5lc3RpbmdSZWdleHAsIGAke3RoaXMubmVzdGluZ1ByZWZpeH0oLis/KSR7dGhpcy5uZXN0aW5nU3VmZml4fWApO1xuICB9XG4gIGludGVycG9sYXRlKHN0ciwgZGF0YSwgbG5nLCBvcHRpb25zKSB7XG4gICAgbGV0IG1hdGNoO1xuICAgIGxldCB2YWx1ZTtcbiAgICBsZXQgcmVwbGFjZXM7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24gJiYgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyB8fCB7fTtcbiAgICBjb25zdCBoYW5kbGVGb3JtYXQgPSBrZXkgPT4ge1xuICAgICAgaWYgKGtleS5pbmRleE9mKHRoaXMuZm9ybWF0U2VwYXJhdG9yKSA8IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRlZXBGaW5kV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXksIHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IsIHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx3YXlzRm9ybWF0ID8gdGhpcy5mb3JtYXQocGF0aCwgdW5kZWZpbmVkLCBsbmcsIHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga2V5XG4gICAgICAgIH0pIDogcGF0aDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHAgPSBrZXkuc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuICAgICAgY29uc3QgayA9IHAuc2hpZnQoKS50cmltKCk7XG4gICAgICBjb25zdCBmID0gcC5qb2luKHRoaXMuZm9ybWF0U2VwYXJhdG9yKS50cmltKCk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQoZGVlcEZpbmRXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGssIHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IsIHRoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlKSwgZiwgbG5nLCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGludGVycG9sYXRpb25rZXk6IGtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yZXNldFJlZ0V4cCgpO1xuICAgIGNvbnN0IG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5taXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIgfHwgdGhpcy5vcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcjtcbiAgICBjb25zdCBza2lwT25WYXJpYWJsZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzIDogdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzO1xuICAgIGNvbnN0IHRvZG9zID0gW3tcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cFVuZXNjYXBlLFxuICAgICAgc2FmZVZhbHVlOiB2YWwgPT4gcmVnZXhTYWZlKHZhbClcbiAgICB9LCB7XG4gICAgICByZWdleDogdGhpcy5yZWdleHAsXG4gICAgICBzYWZlVmFsdWU6IHZhbCA9PiB0aGlzLmVzY2FwZVZhbHVlID8gcmVnZXhTYWZlKHRoaXMuZXNjYXBlKHZhbCkpIDogcmVnZXhTYWZlKHZhbClcbiAgICB9XTtcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgcmVwbGFjZXMgPSAwO1xuICAgICAgd2hpbGUgKG1hdGNoID0gdG9kby5yZWdleC5leGVjKHN0cikpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZFZhciA9IG1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgdmFsdWUgPSBoYW5kbGVGb3JtYXQobWF0Y2hlZFZhcik7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIoc3RyLCBtYXRjaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB2YWx1ZSA9IGlzU3RyaW5nKHRlbXApID8gdGVtcCA6ICcnO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgbWF0Y2hlZFZhcikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF0Y2hbMF07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybihgbWlzc2VkIHRvIHBhc3MgaW4gdmFyaWFibGUgJHttYXRjaGVkVmFyfSBmb3IgaW50ZXJwb2xhdGluZyAke3N0cn1gKTtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpc1N0cmluZyh2YWx1ZSkgJiYgIXRoaXMudXNlUmF3VmFsdWVUb0VzY2FwZSkge1xuICAgICAgICAgIHZhbHVlID0gbWFrZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FmZVZhbHVlID0gdG9kby5zYWZlVmFsdWUodmFsdWUpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgc2FmZVZhbHVlKTtcbiAgICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4ICs9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCAtPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VzKys7XG4gICAgICAgIGlmIChyZXBsYWNlcyA+PSB0aGlzLm1heFJlcGxhY2VzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIG5lc3Qoc3RyLCBmYykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBsZXQgbWF0Y2g7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBjbG9uZWRPcHRpb25zO1xuICAgIGNvbnN0IGhhbmRsZUhhc09wdGlvbnMgPSAoa2V5LCBpbmhlcml0ZWRPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBzZXAgPSB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yO1xuICAgICAgaWYgKGtleS5pbmRleE9mKHNlcCkgPCAwKSByZXR1cm4ga2V5O1xuICAgICAgY29uc3QgYyA9IGtleS5zcGxpdChuZXcgUmVnRXhwKGAke3NlcH1bIF0qe2ApKTtcbiAgICAgIGxldCBvcHRpb25zU3RyaW5nID0gYHske2NbMV19YDtcbiAgICAgIGtleSA9IGNbMF07XG4gICAgICBvcHRpb25zU3RyaW5nID0gdGhpcy5pbnRlcnBvbGF0ZShvcHRpb25zU3RyaW5nLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgIGNvbnN0IG1hdGNoZWRTaW5nbGVRdW90ZXMgPSBvcHRpb25zU3RyaW5nLm1hdGNoKC8nL2cpO1xuICAgICAgY29uc3QgbWF0Y2hlZERvdWJsZVF1b3RlcyA9IG9wdGlvbnNTdHJpbmcubWF0Y2goL1wiL2cpO1xuICAgICAgaWYgKG1hdGNoZWRTaW5nbGVRdW90ZXMgJiYgbWF0Y2hlZFNpbmdsZVF1b3Rlcy5sZW5ndGggJSAyID09PSAwICYmICFtYXRjaGVkRG91YmxlUXVvdGVzIHx8IG1hdGNoZWREb3VibGVRdW90ZXMubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKC8nL2csICdcIicpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY2xvbmVkT3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9uc1N0cmluZyk7XG4gICAgICAgIGlmIChpbmhlcml0ZWRPcHRpb25zKSBjbG9uZWRPcHRpb25zID0ge1xuICAgICAgICAgIC4uLmluaGVyaXRlZE9wdGlvbnMsXG4gICAgICAgICAgLi4uY2xvbmVkT3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGBmYWlsZWQgcGFyc2luZyBvcHRpb25zIHN0cmluZyBpbiBuZXN0aW5nIGZvciBrZXkgJHtrZXl9YCwgZSk7XG4gICAgICAgIHJldHVybiBgJHtrZXl9JHtzZXB9JHtvcHRpb25zU3RyaW5nfWA7XG4gICAgICB9XG4gICAgICBpZiAoY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWUgJiYgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWUuaW5kZXhPZih0aGlzLnByZWZpeCkgPiAtMSkgZGVsZXRlIGNsb25lZE9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9O1xuICAgIHdoaWxlIChtYXRjaCA9IHRoaXMubmVzdGluZ1JlZ2V4cC5leGVjKHN0cikpIHtcbiAgICAgIGxldCBmb3JtYXR0ZXJzID0gW107XG4gICAgICBjbG9uZWRPcHRpb25zID0ge1xuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9O1xuICAgICAgY2xvbmVkT3B0aW9ucyA9IGNsb25lZE9wdGlvbnMucmVwbGFjZSAmJiAhaXNTdHJpbmcoY2xvbmVkT3B0aW9ucy5yZXBsYWNlKSA/IGNsb25lZE9wdGlvbnMucmVwbGFjZSA6IGNsb25lZE9wdGlvbnM7XG4gICAgICBjbG9uZWRPcHRpb25zLmFwcGx5UG9zdFByb2Nlc3NvciA9IGZhbHNlO1xuICAgICAgZGVsZXRlIGNsb25lZE9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgbGV0IGRvUmVkdWNlID0gZmFsc2U7XG4gICAgICBpZiAobWF0Y2hbMF0uaW5kZXhPZih0aGlzLmZvcm1hdFNlcGFyYXRvcikgIT09IC0xICYmICEvey4qfS8udGVzdChtYXRjaFsxXSkpIHtcbiAgICAgICAgY29uc3QgciA9IG1hdGNoWzFdLnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKS5tYXAoZWxlbSA9PiBlbGVtLnRyaW0oKSk7XG4gICAgICAgIG1hdGNoWzFdID0gci5zaGlmdCgpO1xuICAgICAgICBmb3JtYXR0ZXJzID0gcjtcbiAgICAgICAgZG9SZWR1Y2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBmYyhoYW5kbGVIYXNPcHRpb25zLmNhbGwodGhpcywgbWF0Y2hbMV0udHJpbSgpLCBjbG9uZWRPcHRpb25zKSwgY2xvbmVkT3B0aW9ucyk7XG4gICAgICBpZiAodmFsdWUgJiYgbWF0Y2hbMF0gPT09IHN0ciAmJiAhaXNTdHJpbmcodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkgdmFsdWUgPSBtYWtlU3RyaW5nKHZhbHVlKTtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybihgbWlzc2VkIHRvIHJlc29sdmUgJHttYXRjaFsxXX0gZm9yIG5lc3RpbmcgJHtzdHJ9YCk7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoZG9SZWR1Y2UpIHtcbiAgICAgICAgdmFsdWUgPSBmb3JtYXR0ZXJzLnJlZHVjZSgodiwgZikgPT4gdGhpcy5mb3JtYXQodiwgZiwgb3B0aW9ucy5sbmcsIHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGludGVycG9sYXRpb25rZXk6IG1hdGNoWzFdLnRyaW0oKVxuICAgICAgICB9KSwgdmFsdWUudHJpbSgpKTtcbiAgICAgIH1cbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG1hdGNoWzBdLCB2YWx1ZSk7XG4gICAgICB0aGlzLnJlZ2V4cC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmNvbnN0IHBhcnNlRm9ybWF0U3RyID0gZm9ybWF0U3RyID0+IHtcbiAgbGV0IGZvcm1hdE5hbWUgPSBmb3JtYXRTdHIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIGNvbnN0IGZvcm1hdE9wdGlvbnMgPSB7fTtcbiAgaWYgKGZvcm1hdFN0ci5pbmRleE9mKCcoJykgPiAtMSkge1xuICAgIGNvbnN0IHAgPSBmb3JtYXRTdHIuc3BsaXQoJygnKTtcbiAgICBmb3JtYXROYW1lID0gcFswXS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBjb25zdCBvcHRTdHIgPSBwWzFdLnN1YnN0cmluZygwLCBwWzFdLmxlbmd0aCAtIDEpO1xuICAgIGlmIChmb3JtYXROYW1lID09PSAnY3VycmVuY3knICYmIG9wdFN0ci5pbmRleE9mKCc6JykgPCAwKSB7XG4gICAgICBpZiAoIWZvcm1hdE9wdGlvbnMuY3VycmVuY3kpIGZvcm1hdE9wdGlvbnMuY3VycmVuY3kgPSBvcHRTdHIudHJpbSgpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0TmFtZSA9PT0gJ3JlbGF0aXZldGltZScgJiYgb3B0U3RyLmluZGV4T2YoJzonKSA8IDApIHtcbiAgICAgIGlmICghZm9ybWF0T3B0aW9ucy5yYW5nZSkgZm9ybWF0T3B0aW9ucy5yYW5nZSA9IG9wdFN0ci50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdHMgPSBvcHRTdHIuc3BsaXQoJzsnKTtcbiAgICAgIG9wdHMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICBpZiAob3B0KSB7XG4gICAgICAgICAgY29uc3QgW2tleSwgLi4ucmVzdF0gPSBvcHQuc3BsaXQoJzonKTtcbiAgICAgICAgICBjb25zdCB2YWwgPSByZXN0LmpvaW4oJzonKS50cmltKCkucmVwbGFjZSgvXicrfCcrJC9nLCAnJyk7XG4gICAgICAgICAgY29uc3QgdHJpbW1lZEtleSA9IGtleS50cmltKCk7XG4gICAgICAgICAgaWYgKCFmb3JtYXRPcHRpb25zW3RyaW1tZWRLZXldKSBmb3JtYXRPcHRpb25zW3RyaW1tZWRLZXldID0gdmFsO1xuICAgICAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIGZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0gPSBmYWxzZTtcbiAgICAgICAgICBpZiAodmFsID09PSAndHJ1ZScpIGZvcm1hdE9wdGlvbnNbdHJpbW1lZEtleV0gPSB0cnVlO1xuICAgICAgICAgIGlmICghaXNOYU4odmFsKSkgZm9ybWF0T3B0aW9uc1t0cmltbWVkS2V5XSA9IHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXROYW1lLFxuICAgIGZvcm1hdE9wdGlvbnNcbiAgfTtcbn07XG5jb25zdCBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIgPSBmbiA9PiB7XG4gIGNvbnN0IGNhY2hlID0ge307XG4gIHJldHVybiAodmFsLCBsbmcsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgb3B0Rm9yQ2FjaGUgPSBvcHRpb25zO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbmtleSAmJiBvcHRpb25zLmZvcm1hdFBhcmFtcyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldICYmIG9wdGlvbnNbb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5XSkge1xuICAgICAgb3B0Rm9yQ2FjaGUgPSB7XG4gICAgICAgIC4uLm9wdEZvckNhY2hlLFxuICAgICAgICBbb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5XTogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBsbmcgKyBKU09OLnN0cmluZ2lmeShvcHRGb3JDYWNoZSk7XG4gICAgbGV0IGZvcm1hdHRlciA9IGNhY2hlW2tleV07XG4gICAgaWYgKCFmb3JtYXR0ZXIpIHtcbiAgICAgIGZvcm1hdHRlciA9IGZuKGdldENsZWFuZWRDb2RlKGxuZyksIG9wdGlvbnMpO1xuICAgICAgY2FjaGVba2V5XSA9IGZvcm1hdHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlcih2YWwpO1xuICB9O1xufTtcbmNsYXNzIEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdmb3JtYXR0ZXInKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZm9ybWF0cyA9IHtcbiAgICAgIG51bWJlcjogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pLFxuICAgICAgY3VycmVuY3k6IGNyZWF0ZUNhY2hlZEZvcm1hdHRlcigobG5nLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxuZywge1xuICAgICAgICAgIC4uLm9wdCxcbiAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5J1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbCA9PiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG4gICAgICB9KSxcbiAgICAgIGRhdGV0aW1lOiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxuZywge1xuICAgICAgICAgIC4uLm9wdFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbCA9PiBmb3JtYXR0ZXIuZm9ybWF0KHZhbCk7XG4gICAgICB9KSxcbiAgICAgIHJlbGF0aXZldGltZTogY3JlYXRlQ2FjaGVkRm9ybWF0dGVyKChsbmcsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsLCBvcHQucmFuZ2UgfHwgJ2RheScpO1xuICAgICAgfSksXG4gICAgICBsaXN0OiBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoKGxuZywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG5nLCB7XG4gICAgICAgICAgLi4ub3B0XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsID0+IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICB0aGlzLmluaXQob3B0aW9ucyk7XG4gIH1cbiAgaW5pdChzZXJ2aWNlcykge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICAgIH07XG4gICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBvcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0U2VwYXJhdG9yIHx8ICcsJztcbiAgfVxuICBhZGQobmFtZSwgZmMpIHtcbiAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBmYztcbiAgfVxuICBhZGRDYWNoZWQobmFtZSwgZmMpIHtcbiAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBjcmVhdGVDYWNoZWRGb3JtYXR0ZXIoZmMpO1xuICB9XG4gIGZvcm1hdCh2YWx1ZSwgZm9ybWF0LCBsbmcpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgY29uc3QgZm9ybWF0cyA9IGZvcm1hdC5zcGxpdCh0aGlzLmZvcm1hdFNlcGFyYXRvcik7XG4gICAgaWYgKGZvcm1hdHMubGVuZ3RoID4gMSAmJiBmb3JtYXRzWzBdLmluZGV4T2YoJygnKSA+IDEgJiYgZm9ybWF0c1swXS5pbmRleE9mKCcpJykgPCAwICYmIGZvcm1hdHMuZmluZChmID0+IGYuaW5kZXhPZignKScpID4gLTEpKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBmb3JtYXRzLmZpbmRJbmRleChmID0+IGYuaW5kZXhPZignKScpID4gLTEpO1xuICAgICAgZm9ybWF0c1swXSA9IFtmb3JtYXRzWzBdLCAuLi5mb3JtYXRzLnNwbGljZSgxLCBsYXN0SW5kZXgpXS5qb2luKHRoaXMuZm9ybWF0U2VwYXJhdG9yKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0cy5yZWR1Y2UoKG1lbSwgZikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmb3JtYXROYW1lLFxuICAgICAgICBmb3JtYXRPcHRpb25zXG4gICAgICB9ID0gcGFyc2VGb3JtYXRTdHIoZik7XG4gICAgICBpZiAodGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBtZW07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdmFsT3B0aW9ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXNbb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5XSB8fCB7fTtcbiAgICAgICAgICBjb25zdCBsID0gdmFsT3B0aW9ucy5sb2NhbGUgfHwgdmFsT3B0aW9ucy5sbmcgfHwgb3B0aW9ucy5sb2NhbGUgfHwgb3B0aW9ucy5sbmcgfHwgbG5nO1xuICAgICAgICAgIGZvcm1hdHRlZCA9IHRoaXMuZm9ybWF0c1tmb3JtYXROYW1lXShtZW0sIGwsIHtcbiAgICAgICAgICAgIC4uLmZvcm1hdE9wdGlvbnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgLi4udmFsT3B0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKGB0aGVyZSB3YXMgbm8gZm9ybWF0IGZ1bmN0aW9uIGZvciAke2Zvcm1hdE5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmNvbnN0IHJlbW92ZVBlbmRpbmcgPSAocSwgbmFtZSkgPT4ge1xuICBpZiAocS5wZW5kaW5nW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcS5wZW5kaW5nW25hbWVdO1xuICAgIHEucGVuZGluZ0NvdW50LS07XG4gIH1cbn07XG5jbGFzcyBDb25uZWN0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihiYWNrZW5kLCBzdG9yZSwgc2VydmljZXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgdGhpcy5sYW5ndWFnZVV0aWxzID0gc2VydmljZXMubGFuZ3VhZ2VVdGlscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2JhY2tlbmRDb25uZWN0b3InKTtcbiAgICB0aGlzLndhaXRpbmdSZWFkcyA9IFtdO1xuICAgIHRoaXMubWF4UGFyYWxsZWxSZWFkcyA9IG9wdGlvbnMubWF4UGFyYWxsZWxSZWFkcyB8fCAxMDtcbiAgICB0aGlzLnJlYWRpbmdDYWxscyA9IDA7XG4gICAgdGhpcy5tYXhSZXRyaWVzID0gb3B0aW9ucy5tYXhSZXRyaWVzID49IDAgPyBvcHRpb25zLm1heFJldHJpZXMgOiA1O1xuICAgIHRoaXMucmV0cnlUaW1lb3V0ID0gb3B0aW9ucy5yZXRyeVRpbWVvdXQgPj0gMSA/IG9wdGlvbnMucmV0cnlUaW1lb3V0IDogMzUwO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgaWYgKHRoaXMuYmFja2VuZCAmJiB0aGlzLmJhY2tlbmQuaW5pdCkge1xuICAgICAgdGhpcy5iYWNrZW5kLmluaXQoc2VydmljZXMsIG9wdGlvbnMuYmFja2VuZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHF1ZXVlTG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9Mb2FkID0ge307XG4gICAgY29uc3QgcGVuZGluZyA9IHt9O1xuICAgIGNvbnN0IHRvTG9hZExhbmd1YWdlcyA9IHt9O1xuICAgIGNvbnN0IHRvTG9hZE5hbWVzcGFjZXMgPSB7fTtcbiAgICBsYW5ndWFnZXMuZm9yRWFjaChsbmcgPT4ge1xuICAgICAgbGV0IGhhc0FsbE5hbWVzcGFjZXMgPSB0cnVlO1xuICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKG5zID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGAke2xuZ318JHtuc31gO1xuICAgICAgICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIHRoaXMuc3RvcmUuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW25hbWVdID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlW25hbWVdIDwgMCkgOyBlbHNlIGlmICh0aGlzLnN0YXRlW25hbWVdID09PSAxKSB7XG4gICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtuYW1lXSA9IDE7XG4gICAgICAgICAgaGFzQWxsTmFtZXNwYWNlcyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChwZW5kaW5nW25hbWVdID09PSB1bmRlZmluZWQpIHBlbmRpbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGlmICh0b0xvYWRbbmFtZV0gPT09IHVuZGVmaW5lZCkgdG9Mb2FkW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodG9Mb2FkTmFtZXNwYWNlc1tuc10gPT09IHVuZGVmaW5lZCkgdG9Mb2FkTmFtZXNwYWNlc1tuc10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghaGFzQWxsTmFtZXNwYWNlcykgdG9Mb2FkTGFuZ3VhZ2VzW2xuZ10gPSB0cnVlO1xuICAgIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyh0b0xvYWQpLmxlbmd0aCB8fCBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucXVldWUucHVzaCh7XG4gICAgICAgIHBlbmRpbmcsXG4gICAgICAgIHBlbmRpbmdDb3VudDogT2JqZWN0LmtleXMocGVuZGluZykubGVuZ3RoLFxuICAgICAgICBsb2FkZWQ6IHt9LFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0b0xvYWQ6IE9iamVjdC5rZXlzKHRvTG9hZCksXG4gICAgICBwZW5kaW5nOiBPYmplY3Qua2V5cyhwZW5kaW5nKSxcbiAgICAgIHRvTG9hZExhbmd1YWdlczogT2JqZWN0LmtleXModG9Mb2FkTGFuZ3VhZ2VzKSxcbiAgICAgIHRvTG9hZE5hbWVzcGFjZXM6IE9iamVjdC5rZXlzKHRvTG9hZE5hbWVzcGFjZXMpXG4gICAgfTtcbiAgfVxuICBsb2FkZWQobmFtZSwgZXJyLCBkYXRhKSB7XG4gICAgY29uc3QgcyA9IG5hbWUuc3BsaXQoJ3wnKTtcbiAgICBjb25zdCBsbmcgPSBzWzBdO1xuICAgIGNvbnN0IG5zID0gc1sxXTtcbiAgICBpZiAoZXJyKSB0aGlzLmVtaXQoJ2ZhaWxlZExvYWRpbmcnLCBsbmcsIG5zLCBlcnIpO1xuICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2VCdW5kbGUobG5nLCBucywgZGF0YSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHtcbiAgICAgICAgc2tpcENvcHk6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlW25hbWVdID0gZXJyID8gLTEgOiAyO1xuICAgIGlmIChlcnIgJiYgZGF0YSkgdGhpcy5zdGF0ZVtuYW1lXSA9IDA7XG4gICAgY29uc3QgbG9hZGVkID0ge307XG4gICAgdGhpcy5xdWV1ZS5mb3JFYWNoKHEgPT4ge1xuICAgICAgcHVzaFBhdGgocS5sb2FkZWQsIFtsbmddLCBucyk7XG4gICAgICByZW1vdmVQZW5kaW5nKHEsIG5hbWUpO1xuICAgICAgaWYgKGVycikgcS5lcnJvcnMucHVzaChlcnIpO1xuICAgICAgaWYgKHEucGVuZGluZ0NvdW50ID09PSAwICYmICFxLmRvbmUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocS5sb2FkZWQpLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWRbbF0pIGxvYWRlZFtsXSA9IHt9O1xuICAgICAgICAgIGNvbnN0IGxvYWRlZEtleXMgPSBxLmxvYWRlZFtsXTtcbiAgICAgICAgICBpZiAobG9hZGVkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxvYWRlZEtleXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlZFtsXVtuXSA9PT0gdW5kZWZpbmVkKSBsb2FkZWRbbF1bbl0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcS5kb25lID0gdHJ1ZTtcbiAgICAgICAgaWYgKHEuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIHEuY2FsbGJhY2socS5lcnJvcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHEuY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgbG9hZGVkKTtcbiAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIocSA9PiAhcS5kb25lKTtcbiAgfVxuICByZWFkKGxuZywgbnMsIGZjTmFtZSkge1xuICAgIGxldCB0cmllZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgICBsZXQgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdGhpcy5yZXRyeVRpbWVvdXQ7XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFsbmcubGVuZ3RoKSByZXR1cm4gY2FsbGJhY2sobnVsbCwge30pO1xuICAgIGlmICh0aGlzLnJlYWRpbmdDYWxscyA+PSB0aGlzLm1heFBhcmFsbGVsUmVhZHMpIHtcbiAgICAgIHRoaXMud2FpdGluZ1JlYWRzLnB1c2goe1xuICAgICAgICBsbmcsXG4gICAgICAgIG5zLFxuICAgICAgICBmY05hbWUsXG4gICAgICAgIHRyaWVkLFxuICAgICAgICB3YWl0LFxuICAgICAgICBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVhZGluZ0NhbGxzKys7XG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICB0aGlzLnJlYWRpbmdDYWxscy0tO1xuICAgICAgaWYgKHRoaXMud2FpdGluZ1JlYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMud2FpdGluZ1JlYWRzLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMucmVhZChuZXh0LmxuZywgbmV4dC5ucywgbmV4dC5mY05hbWUsIG5leHQudHJpZWQsIG5leHQud2FpdCwgbmV4dC5jYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyICYmIGRhdGEgJiYgdHJpZWQgPCB0aGlzLm1heFJldHJpZXMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWFkLmNhbGwodGhpcywgbG5nLCBucywgZmNOYW1lLCB0cmllZCArIDEsIHdhaXQgKiAyLCBjYWxsYmFjayk7XG4gICAgICAgIH0sIHdhaXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnIsIGRhdGEpO1xuICAgIH07XG4gICAgY29uc3QgZmMgPSB0aGlzLmJhY2tlbmRbZmNOYW1lXS5iaW5kKHRoaXMuYmFja2VuZCk7XG4gICAgaWYgKGZjLmxlbmd0aCA9PT0gMikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgciA9IGZjKGxuZywgbnMpO1xuICAgICAgICBpZiAociAmJiB0eXBlb2Ygci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgci50aGVuKGRhdGEgPT4gcmVzb2x2ZXIobnVsbCwgZGF0YSkpLmNhdGNoKHJlc29sdmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlcihudWxsLCByKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlc29sdmVyKGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBmYyhsbmcsIG5zLCByZXNvbHZlcik7XG4gIH1cbiAgcHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5iYWNrZW5kKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdObyBiYWNrZW5kIHdhcyBhZGRlZCB2aWEgaTE4bmV4dC51c2UuIFdpbGwgbm90IGxvYWQgcmVzb3VyY2VzLicpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhsYW5ndWFnZXMpKSBsYW5ndWFnZXMgPSB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxhbmd1YWdlcyk7XG4gICAgaWYgKGlzU3RyaW5nKG5hbWVzcGFjZXMpKSBuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuICAgIGNvbnN0IHRvTG9hZCA9IHRoaXMucXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIGlmICghdG9Mb2FkLnRvTG9hZC5sZW5ndGgpIHtcbiAgICAgIGlmICghdG9Mb2FkLnBlbmRpbmcubGVuZ3RoKSBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRvTG9hZC50b0xvYWQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubG9hZE9uZShuYW1lKTtcbiAgICB9KTtcbiAgfVxuICBsb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgY2FsbGJhY2spIHtcbiAgICB0aGlzLnByZXBhcmVMb2FkaW5nKGxhbmd1YWdlcywgbmFtZXNwYWNlcywge30sIGNhbGxiYWNrKTtcbiAgfVxuICByZWxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBjYWxsYmFjaykge1xuICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7XG4gICAgICByZWxvYWQ6IHRydWVcbiAgICB9LCBjYWxsYmFjayk7XG4gIH1cbiAgbG9hZE9uZShuYW1lKSB7XG4gICAgbGV0IHByZWZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICAgY29uc3QgcyA9IG5hbWUuc3BsaXQoJ3wnKTtcbiAgICBjb25zdCBsbmcgPSBzWzBdO1xuICAgIGNvbnN0IG5zID0gc1sxXTtcbiAgICB0aGlzLnJlYWQobG5nLCBucywgJ3JlYWQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikgdGhpcy5sb2dnZXIud2FybihgJHtwcmVmaXh9bG9hZGluZyBuYW1lc3BhY2UgJHtuc30gZm9yIGxhbmd1YWdlICR7bG5nfSBmYWlsZWRgLCBlcnIpO1xuICAgICAgaWYgKCFlcnIgJiYgZGF0YSkgdGhpcy5sb2dnZXIubG9nKGAke3ByZWZpeH1sb2FkZWQgbmFtZXNwYWNlICR7bnN9IGZvciBsYW5ndWFnZSAke2xuZ31gLCBkYXRhKTtcbiAgICAgIHRoaXMubG9hZGVkKG5hbWUsIGVyciwgZGF0YSk7XG4gICAgfSk7XG4gIH1cbiAgc2F2ZU1pc3NpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgaXNVcGRhdGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge307XG4gICAgbGV0IGNsYiA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogKCkgPT4ge307XG4gICAgaWYgKHRoaXMuc2VydmljZXMudXRpbHMgJiYgdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UgJiYgIXRoaXMuc2VydmljZXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYGRpZCBub3Qgc2F2ZSBrZXkgXCIke2tleX1cIiBhcyB0aGUgbmFtZXNwYWNlIFwiJHtuYW1lc3BhY2V9XCIgd2FzIG5vdCB5ZXQgbG9hZGVkYCwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IGtleSA9PT0gJycpIHJldHVybjtcbiAgICBpZiAodGhpcy5iYWNrZW5kICYmIHRoaXMuYmFja2VuZC5jcmVhdGUpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGlzVXBkYXRlXG4gICAgICB9O1xuICAgICAgY29uc3QgZmMgPSB0aGlzLmJhY2tlbmQuY3JlYXRlLmJpbmQodGhpcy5iYWNrZW5kKTtcbiAgICAgIGlmIChmYy5sZW5ndGggPCA2KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHI7XG4gICAgICAgICAgaWYgKGZjLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgciA9IGZjKGxhbmd1YWdlcywgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUsIG9wdHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gZmMobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyICYmIHR5cGVvZiByLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHIudGhlbihkYXRhID0+IGNsYihudWxsLCBkYXRhKSkuY2F0Y2goY2xiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xiKG51bGwsIHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY2xiKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZjKGxhbmd1YWdlcywgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUsIGNsYiwgb3B0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbGFuZ3VhZ2VzIHx8ICFsYW5ndWFnZXNbMF0pIHJldHVybjtcbiAgICB0aGlzLnN0b3JlLmFkZFJlc291cmNlKGxhbmd1YWdlc1swXSwgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUpO1xuICB9XG59XG5cbmNvbnN0IGdldCA9ICgpID0+ICh7XG4gIGRlYnVnOiBmYWxzZSxcbiAgaW5pdEltbWVkaWF0ZTogdHJ1ZSxcbiAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgZGVmYXVsdE5TOiBbJ3RyYW5zbGF0aW9uJ10sXG4gIGZhbGxiYWNrTG5nOiBbJ2RldiddLFxuICBmYWxsYmFja05TOiBmYWxzZSxcbiAgc3VwcG9ydGVkTG5nczogZmFsc2UsXG4gIG5vbkV4cGxpY2l0U3VwcG9ydGVkTG5nczogZmFsc2UsXG4gIGxvYWQ6ICdhbGwnLFxuICBwcmVsb2FkOiBmYWxzZSxcbiAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRydWUsXG4gIGtleVNlcGFyYXRvcjogJy4nLFxuICBuc1NlcGFyYXRvcjogJzonLFxuICBwbHVyYWxTZXBhcmF0b3I6ICdfJyxcbiAgY29udGV4dFNlcGFyYXRvcjogJ18nLFxuICBwYXJ0aWFsQnVuZGxlZExhbmd1YWdlczogZmFsc2UsXG4gIHNhdmVNaXNzaW5nOiBmYWxzZSxcbiAgdXBkYXRlTWlzc2luZzogZmFsc2UsXG4gIHNhdmVNaXNzaW5nVG86ICdmYWxsYmFjaycsXG4gIHNhdmVNaXNzaW5nUGx1cmFsczogdHJ1ZSxcbiAgbWlzc2luZ0tleUhhbmRsZXI6IGZhbHNlLFxuICBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXI6IGZhbHNlLFxuICBwb3N0UHJvY2VzczogZmFsc2UsXG4gIHBvc3RQcm9jZXNzUGFzc1Jlc29sdmVkOiBmYWxzZSxcbiAgcmV0dXJuTnVsbDogZmFsc2UsXG4gIHJldHVybkVtcHR5U3RyaW5nOiB0cnVlLFxuICByZXR1cm5PYmplY3RzOiBmYWxzZSxcbiAgam9pbkFycmF5czogZmFsc2UsXG4gIHJldHVybmVkT2JqZWN0SGFuZGxlcjogZmFsc2UsXG4gIHBhcnNlTWlzc2luZ0tleUhhbmRsZXI6IGZhbHNlLFxuICBhcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXk6IGZhbHNlLFxuICBhcHBlbmROYW1lc3BhY2VUb0NJTW9kZTogZmFsc2UsXG4gIG92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyOiBhcmdzID0+IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnb2JqZWN0JykgcmV0ID0gYXJnc1sxXTtcbiAgICBpZiAoaXNTdHJpbmcoYXJnc1sxXSkpIHJldC5kZWZhdWx0VmFsdWUgPSBhcmdzWzFdO1xuICAgIGlmIChpc1N0cmluZyhhcmdzWzJdKSkgcmV0LnREZXNjcmlwdGlvbiA9IGFyZ3NbMl07XG4gICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYXJnc1szXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcmdzWzNdIHx8IGFyZ3NbMl07XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIHJldFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGludGVycG9sYXRpb246IHtcbiAgICBlc2NhcGVWYWx1ZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLFxuICAgIHByZWZpeDogJ3t7JyxcbiAgICBzdWZmaXg6ICd9fScsXG4gICAgZm9ybWF0U2VwYXJhdG9yOiAnLCcsXG4gICAgdW5lc2NhcGVQcmVmaXg6ICctJyxcbiAgICBuZXN0aW5nUHJlZml4OiAnJHQoJyxcbiAgICBuZXN0aW5nU3VmZml4OiAnKScsXG4gICAgbmVzdGluZ09wdGlvbnNTZXBhcmF0b3I6ICcsJyxcbiAgICBtYXhSZXBsYWNlczogMTAwMCxcbiAgICBza2lwT25WYXJpYWJsZXM6IHRydWVcbiAgfVxufSk7XG5jb25zdCB0cmFuc2Zvcm1PcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gIGlmIChpc1N0cmluZyhvcHRpb25zLm5zKSkgb3B0aW9ucy5ucyA9IFtvcHRpb25zLm5zXTtcbiAgaWYgKGlzU3RyaW5nKG9wdGlvbnMuZmFsbGJhY2tMbmcpKSBvcHRpb25zLmZhbGxiYWNrTG5nID0gW29wdGlvbnMuZmFsbGJhY2tMbmddO1xuICBpZiAoaXNTdHJpbmcob3B0aW9ucy5mYWxsYmFja05TKSkgb3B0aW9ucy5mYWxsYmFja05TID0gW29wdGlvbnMuZmFsbGJhY2tOU107XG4gIGlmIChvcHRpb25zLnN1cHBvcnRlZExuZ3MgJiYgb3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmluZGV4T2YoJ2NpbW9kZScpIDwgMCkge1xuICAgIG9wdGlvbnMuc3VwcG9ydGVkTG5ncyA9IG9wdGlvbnMuc3VwcG9ydGVkTG5ncy5jb25jYXQoWydjaW1vZGUnXSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5jb25zdCBiaW5kTWVtYmVyRnVuY3Rpb25zID0gaW5zdCA9PiB7XG4gIGNvbnN0IG1lbXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdCkpO1xuICBtZW1zLmZvckVhY2gobWVtID0+IHtcbiAgICBpZiAodHlwZW9mIGluc3RbbWVtXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5zdFttZW1dID0gaW5zdFttZW1dLmJpbmQoaW5zdCk7XG4gICAgfVxuICB9KTtcbn07XG5jbGFzcyBJMThuIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gdHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLnNlcnZpY2VzID0ge307XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyO1xuICAgIHRoaXMubW9kdWxlcyA9IHtcbiAgICAgIGV4dGVybmFsOiBbXVxuICAgIH07XG4gICAgYmluZE1lbWJlckZ1bmN0aW9ucyh0aGlzKTtcbiAgICBpZiAoY2FsbGJhY2sgJiYgIXRoaXMuaXNJbml0aWFsaXplZCAmJiAhb3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzSW5pdGlhbGl6aW5nID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmRlZmF1bHROUyAmJiBvcHRpb25zLmRlZmF1bHROUyAhPT0gZmFsc2UgJiYgb3B0aW9ucy5ucykge1xuICAgICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMubnMpKSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5ucztcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ucy5pbmRleE9mKCd0cmFuc2xhdGlvbicpIDwgMCkge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHROUyA9IG9wdGlvbnMubnNbMF07XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGRlZk9wdHMgPSBnZXQoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZPcHRzLFxuICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgLi4udHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKVxuICAgIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiA9IHtcbiAgICAgICAgLi4uZGVmT3B0cy5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAuLi50aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5uc1NlcGFyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWROc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUNsYXNzT25EZW1hbmQgPSBDbGFzc09yT2JqZWN0ID0+IHtcbiAgICAgIGlmICghQ2xhc3NPck9iamVjdCkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAodHlwZW9mIENsYXNzT3JPYmplY3QgPT09ICdmdW5jdGlvbicpIHJldHVybiBuZXcgQ2xhc3NPck9iamVjdCgpO1xuICAgICAgcmV0dXJuIENsYXNzT3JPYmplY3Q7XG4gICAgfTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICBpZiAodGhpcy5tb2R1bGVzLmxvZ2dlcikge1xuICAgICAgICBiYXNlTG9nZ2VyLmluaXQoY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMubG9nZ2VyKSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VMb2dnZXIuaW5pdChudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1hdHRlcjtcbiAgICAgIGlmICh0aGlzLm1vZHVsZXMuZm9ybWF0dGVyKSB7XG4gICAgICAgIGZvcm1hdHRlciA9IHRoaXMubW9kdWxlcy5mb3JtYXR0ZXI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3JtYXR0ZXIgPSBGb3JtYXR0ZXI7XG4gICAgICB9XG4gICAgICBjb25zdCBsdSA9IG5ldyBMYW5ndWFnZVV0aWwodGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMuc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZSh0aGlzLm9wdGlvbnMucmVzb3VyY2VzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgY29uc3QgcyA9IHRoaXMuc2VydmljZXM7XG4gICAgICBzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgICBzLnJlc291cmNlU3RvcmUgPSB0aGlzLnN0b3JlO1xuICAgICAgcy5sYW5ndWFnZVV0aWxzID0gbHU7XG4gICAgICBzLnBsdXJhbFJlc29sdmVyID0gbmV3IFBsdXJhbFJlc29sdmVyKGx1LCB7XG4gICAgICAgIHByZXBlbmQ6IHRoaXMub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IsXG4gICAgICAgIGNvbXBhdGliaWxpdHlKU09OOiB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04sXG4gICAgICAgIHNpbXBsaWZ5UGx1cmFsU3VmZml4OiB0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXhcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvcm1hdHRlciAmJiAoIXRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgPT09IGRlZk9wdHMuaW50ZXJwb2xhdGlvbi5mb3JtYXQpKSB7XG4gICAgICAgIHMuZm9ybWF0dGVyID0gY3JlYXRlQ2xhc3NPbkRlbWFuZChmb3JtYXR0ZXIpO1xuICAgICAgICBzLmZvcm1hdHRlci5pbml0KHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9IHMuZm9ybWF0dGVyLmZvcm1hdC5iaW5kKHMuZm9ybWF0dGVyKTtcbiAgICAgIH1cbiAgICAgIHMuaW50ZXJwb2xhdG9yID0gbmV3IEludGVycG9sYXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgcy51dGlscyA9IHtcbiAgICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiB0aGlzLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKHRoaXMpXG4gICAgICB9O1xuICAgICAgcy5iYWNrZW5kQ29ubmVjdG9yID0gbmV3IENvbm5lY3RvcihjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5iYWNrZW5kKSwgcy5yZXNvdXJjZVN0b3JlLCBzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgcy5iYWNrZW5kQ29ubmVjdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubW9kdWxlcy5sYW5ndWFnZURldGVjdG9yKSB7XG4gICAgICAgIHMubGFuZ3VhZ2VEZXRlY3RvciA9IGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpO1xuICAgICAgICBpZiAocy5sYW5ndWFnZURldGVjdG9yLmluaXQpIHMubGFuZ3VhZ2VEZXRlY3Rvci5pbml0KHMsIHRoaXMub3B0aW9ucy5kZXRlY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb2R1bGVzLmkxOG5Gb3JtYXQpIHtcbiAgICAgICAgcy5pMThuRm9ybWF0ID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCk7XG4gICAgICAgIGlmIChzLmkxOG5Gb3JtYXQuaW5pdCkgcy5pMThuRm9ybWF0LmluaXQodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcih0aGlzLnNlcnZpY2VzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy50cmFuc2xhdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLmZvckVhY2gobSA9PiB7XG4gICAgICAgIGlmIChtLmluaXQpIG0uaW5pdCh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdCA9IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdDtcbiAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyAmJiAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLm9wdGlvbnMubG5nKSB7XG4gICAgICBjb25zdCBjb2RlcyA9IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICBpZiAoY29kZXMubGVuZ3RoID4gMCAmJiBjb2Rlc1swXSAhPT0gJ2RldicpIHRoaXMub3B0aW9ucy5sbmcgPSBjb2Rlc1swXTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2luaXQ6IG5vIGxhbmd1YWdlRGV0ZWN0b3IgaXMgdXNlZCBhbmQgbm8gbG5nIGlzIGRlZmluZWQnKTtcbiAgICB9XG4gICAgY29uc3Qgc3RvcmVBcGkgPSBbJ2dldFJlc291cmNlJywgJ2hhc1Jlc291cmNlQnVuZGxlJywgJ2dldFJlc291cmNlQnVuZGxlJywgJ2dldERhdGFCeUxhbmd1YWdlJ107XG4gICAgc3RvcmVBcGkuZm9yRWFjaChmY05hbWUgPT4ge1xuICAgICAgdGhpc1tmY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RvcmVbZmNOYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBzdG9yZUFwaUNoYWluZWQgPSBbJ2FkZFJlc291cmNlJywgJ2FkZFJlc291cmNlcycsICdhZGRSZXNvdXJjZUJ1bmRsZScsICdyZW1vdmVSZXNvdXJjZUJ1bmRsZSddO1xuICAgIHN0b3JlQXBpQ2hhaW5lZC5mb3JFYWNoKGZjTmFtZSA9PiB7XG4gICAgICB0aGlzW2ZjTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnN0b3JlW2ZjTmFtZV0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmlzaCA9IChlcnIsIHQpID0+IHtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkICYmICF0aGlzLmluaXRpYWxpemVkU3RvcmVPbmNlKSB0aGlzLmxvZ2dlci53YXJuKCdpbml0OiBpMThuZXh0IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuIFlvdSBzaG91bGQgY2FsbCBpbml0IGp1c3Qgb25jZSEnKTtcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNDbG9uZSkgdGhpcy5sb2dnZXIubG9nKCdpbml0aWFsaXplZCcsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZWQnLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHQpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHQpO1xuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlcyAmJiB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJyAmJiAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZmluaXNoKG51bGwsIHRoaXMudC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UodGhpcy5vcHRpb25zLmxuZywgZmluaXNoKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVzb3VyY2VzIHx8ICF0aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGxvYWQsIDApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG4gIH1cbiAgbG9hZFJlc291cmNlcyhsYW5ndWFnZSkge1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgICBsZXQgdXNlZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgY29uc3QgdXNlZExuZyA9IGlzU3RyaW5nKGxhbmd1YWdlKSA/IGxhbmd1YWdlIDogdGhpcy5sYW5ndWFnZTtcbiAgICBpZiAodHlwZW9mIGxhbmd1YWdlID09PSAnZnVuY3Rpb24nKSB1c2VkQ2FsbGJhY2sgPSBsYW5ndWFnZTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSB7XG4gICAgICBpZiAodXNlZExuZyAmJiB1c2VkTG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnICYmICghdGhpcy5vcHRpb25zLnByZWxvYWQgfHwgdGhpcy5vcHRpb25zLnByZWxvYWQubGVuZ3RoID09PSAwKSkgcmV0dXJuIHVzZWRDYWxsYmFjaygpO1xuICAgICAgY29uc3QgdG9Mb2FkID0gW107XG4gICAgICBjb25zdCBhcHBlbmQgPSBsbmcgPT4ge1xuICAgICAgICBpZiAoIWxuZykgcmV0dXJuO1xuICAgICAgICBpZiAobG5nID09PSAnY2ltb2RlJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBsbmdzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsbmcpO1xuICAgICAgICBsbmdzLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgaWYgKGwgPT09ICdjaW1vZGUnKSByZXR1cm47XG4gICAgICAgICAgaWYgKHRvTG9hZC5pbmRleE9mKGwpIDwgMCkgdG9Mb2FkLnB1c2gobCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGlmICghdXNlZExuZykge1xuICAgICAgICBjb25zdCBmYWxsYmFja3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICBmYWxsYmFja3MuZm9yRWFjaChsID0+IGFwcGVuZChsKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBlbmQodXNlZExuZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByZWxvYWQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnByZWxvYWQuZm9yRWFjaChsID0+IGFwcGVuZChsKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IubG9hZCh0b0xvYWQsIHRoaXMub3B0aW9ucy5ucywgZSA9PiB7XG4gICAgICAgIGlmICghZSAmJiAhdGhpcy5yZXNvbHZlZExhbmd1YWdlICYmIHRoaXMubGFuZ3VhZ2UpIHRoaXMuc2V0UmVzb2x2ZWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgdXNlZENhbGxiYWNrKGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZWRDYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH1cbiAgcmVsb2FkUmVzb3VyY2VzKGxuZ3MsIG5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBpZiAodHlwZW9mIGxuZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbG5ncztcbiAgICAgIGxuZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbnM7XG4gICAgICBucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFsbmdzKSBsbmdzID0gdGhpcy5sYW5ndWFnZXM7XG4gICAgaWYgKCFucykgbnMgPSB0aGlzLm9wdGlvbnMubnM7XG4gICAgaWYgKCFjYWxsYmFjaykgY2FsbGJhY2sgPSBub29wO1xuICAgIHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5yZWxvYWQobG5ncywgbnMsIGVyciA9PiB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZDtcbiAgfVxuICB1c2UobW9kdWxlKSB7XG4gICAgaWYgKCFtb2R1bGUpIHRocm93IG5ldyBFcnJvcignWW91IGFyZSBwYXNzaW5nIGFuIHVuZGVmaW5lZCBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpJyk7XG4gICAgaWYgKCFtb2R1bGUudHlwZSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHBhc3NpbmcgYSB3cm9uZyBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpJyk7XG4gICAgaWYgKG1vZHVsZS50eXBlID09PSAnYmFja2VuZCcpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5iYWNrZW5kID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdsb2dnZXInIHx8IG1vZHVsZS5sb2cgJiYgbW9kdWxlLndhcm4gJiYgbW9kdWxlLmVycm9yKSB7XG4gICAgICB0aGlzLm1vZHVsZXMubG9nZ2VyID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdsYW5ndWFnZURldGVjdG9yJykge1xuICAgICAgdGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IgPSBtb2R1bGU7XG4gICAgfVxuICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2kxOG5Gb3JtYXQnKSB7XG4gICAgICB0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCA9IG1vZHVsZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZS50eXBlID09PSAncG9zdFByb2Nlc3NvcicpIHtcbiAgICAgIHBvc3RQcm9jZXNzb3IuYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdmb3JtYXR0ZXInKSB7XG4gICAgICB0aGlzLm1vZHVsZXMuZm9ybWF0dGVyID0gbW9kdWxlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLnR5cGUgPT09ICczcmRQYXJ0eScpIHtcbiAgICAgIHRoaXMubW9kdWxlcy5leHRlcm5hbC5wdXNoKG1vZHVsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFJlc29sdmVkTGFuZ3VhZ2UobCkge1xuICAgIGlmICghbCB8fCAhdGhpcy5sYW5ndWFnZXMpIHJldHVybjtcbiAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsKSA+IC0xKSByZXR1cm47XG4gICAgZm9yIChsZXQgbGkgPSAwOyBsaSA8IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aDsgbGkrKykge1xuICAgICAgY29uc3QgbG5nSW5MbmdzID0gdGhpcy5sYW5ndWFnZXNbbGldO1xuICAgICAgaWYgKFsnY2ltb2RlJywgJ2RldiddLmluZGV4T2YobG5nSW5MbmdzKSA+IC0xKSBjb250aW51ZTtcbiAgICAgIGlmICh0aGlzLnN0b3JlLmhhc0xhbmd1YWdlU29tZVRyYW5zbGF0aW9ucyhsbmdJbkxuZ3MpKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IGxuZ0luTG5ncztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNoYW5nZUxhbmd1YWdlKGxuZywgY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gbG5nO1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICB0aGlzLmVtaXQoJ2xhbmd1YWdlQ2hhbmdpbmcnLCBsbmcpO1xuICAgIGNvbnN0IHNldExuZ1Byb3BzID0gbCA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gbDtcbiAgICAgIHRoaXMubGFuZ3VhZ2VzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsKTtcbiAgICAgIHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2V0UmVzb2x2ZWRMYW5ndWFnZShsKTtcbiAgICB9O1xuICAgIGNvbnN0IGRvbmUgPSAoZXJyLCBsKSA9PiB7XG4gICAgICBpZiAobCkge1xuICAgICAgICBzZXRMbmdQcm9wcyhsKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yLmNoYW5nZUxhbmd1YWdlKGwpO1xuICAgICAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVtaXQoJ2xhbmd1YWdlQ2hhbmdlZCcsIGwpO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ2xhbmd1YWdlQ2hhbmdlZCcsIGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGRlZmVycmVkLnJlc29sdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi50KC4uLmFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNldExuZyA9IGxuZ3MgPT4ge1xuICAgICAgaWYgKCFsbmcgJiYgIWxuZ3MgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yKSBsbmdzID0gW107XG4gICAgICBjb25zdCBsID0gaXNTdHJpbmcobG5ncykgPyBsbmdzIDogdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEJlc3RNYXRjaEZyb21Db2RlcyhsbmdzKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50cmFuc2xhdG9yLmxhbmd1YWdlKSB0aGlzLnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmNhY2hlVXNlckxhbmd1YWdlKSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UobCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRSZXNvdXJjZXMobCwgZXJyID0+IHtcbiAgICAgICAgZG9uZShlcnIsIGwpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoIWxuZyAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5hc3luYykge1xuICAgICAgc2V0TG5nKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKSk7XG4gICAgfSBlbHNlIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMpIHtcbiAgICAgIGlmICh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCkudGhlbihzZXRMbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdChzZXRMbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMbmcobG5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIGdldEZpeGVkVChsbmcsIG5zLCBrZXlQcmVmaXgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBjb25zdCBmaXhlZFQgPSBmdW5jdGlvbiAoa2V5LCBvcHRzKSB7XG4gICAgICBsZXQgb3B0aW9ucztcbiAgICAgIGlmICh0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICByZXN0W19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMgPSBfdGhpczMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihba2V5LCBvcHRzXS5jb25jYXQocmVzdCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBvcHRpb25zLmxuZyA9IG9wdGlvbnMubG5nIHx8IGZpeGVkVC5sbmc7XG4gICAgICBvcHRpb25zLmxuZ3MgPSBvcHRpb25zLmxuZ3MgfHwgZml4ZWRULmxuZ3M7XG4gICAgICBvcHRpb25zLm5zID0gb3B0aW9ucy5ucyB8fCBmaXhlZFQubnM7XG4gICAgICBpZiAob3B0aW9ucy5rZXlQcmVmaXggIT09ICcnKSBvcHRpb25zLmtleVByZWZpeCA9IG9wdGlvbnMua2V5UHJlZml4IHx8IGtleVByZWZpeCB8fCBmaXhlZFQua2V5UHJlZml4O1xuICAgICAgY29uc3Qga2V5U2VwYXJhdG9yID0gX3RoaXMzLm9wdGlvbnMua2V5U2VwYXJhdG9yIHx8ICcuJztcbiAgICAgIGxldCByZXN1bHRLZXk7XG4gICAgICBpZiAob3B0aW9ucy5rZXlQcmVmaXggJiYgQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIHJlc3VsdEtleSA9IGtleS5tYXAoayA9PiBgJHtvcHRpb25zLmtleVByZWZpeH0ke2tleVNlcGFyYXRvcn0ke2t9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRLZXkgPSBvcHRpb25zLmtleVByZWZpeCA/IGAke29wdGlvbnMua2V5UHJlZml4fSR7a2V5U2VwYXJhdG9yfSR7a2V5fWAgOiBrZXk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMzLnQocmVzdWx0S2V5LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGlmIChpc1N0cmluZyhsbmcpKSB7XG4gICAgICBmaXhlZFQubG5nID0gbG5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXhlZFQubG5ncyA9IGxuZztcbiAgICB9XG4gICAgZml4ZWRULm5zID0gbnM7XG4gICAgZml4ZWRULmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICByZXR1cm4gZml4ZWRUO1xuICB9XG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvciAmJiB0aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlKC4uLmFyZ3VtZW50cyk7XG4gIH1cbiAgZXhpc3RzKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0b3IgJiYgdGhpcy50cmFuc2xhdG9yLmV4aXN0cyguLi5hcmd1bWVudHMpO1xuICB9XG4gIHNldERlZmF1bHROYW1lc3BhY2UobnMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TID0gbnM7XG4gIH1cbiAgaGFzTG9hZGVkTmFtZXNwYWNlKG5zKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdoYXNMb2FkZWROYW1lc3BhY2U6IGkxOG5leHQgd2FzIG5vdCBpbml0aWFsaXplZCcsIHRoaXMubGFuZ3VhZ2VzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxhbmd1YWdlcyB8fCAhdGhpcy5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdoYXNMb2FkZWROYW1lc3BhY2U6IGkxOG4ubGFuZ3VhZ2VzIHdlcmUgdW5kZWZpbmVkIG9yIGVtcHR5JywgdGhpcy5sYW5ndWFnZXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsbmcgPSBvcHRpb25zLmxuZyB8fCB0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgfHwgdGhpcy5sYW5ndWFnZXNbMF07XG4gICAgY29uc3QgZmFsbGJhY2tMbmcgPSB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgOiBmYWxzZTtcbiAgICBjb25zdCBsYXN0TG5nID0gdGhpcy5sYW5ndWFnZXNbdGhpcy5sYW5ndWFnZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgbG9hZE5vdFBlbmRpbmcgPSAobCwgbikgPT4ge1xuICAgICAgY29uc3QgbG9hZFN0YXRlID0gdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnN0YXRlW2Ake2x9fCR7bn1gXTtcbiAgICAgIHJldHVybiBsb2FkU3RhdGUgPT09IC0xIHx8IGxvYWRTdGF0ZSA9PT0gMCB8fCBsb2FkU3RhdGUgPT09IDI7XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5wcmVjaGVjaykge1xuICAgICAgY29uc3QgcHJlUmVzdWx0ID0gb3B0aW9ucy5wcmVjaGVjayh0aGlzLCBsb2FkTm90UGVuZGluZyk7XG4gICAgICBpZiAocHJlUmVzdWx0ICE9PSB1bmRlZmluZWQpIHJldHVybiBwcmVSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgJiYgIXRoaXMub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGxvYWROb3RQZW5kaW5nKGxuZywgbnMpICYmICghZmFsbGJhY2tMbmcgfHwgbG9hZE5vdFBlbmRpbmcobGFzdExuZywgbnMpKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxvYWROYW1lc3BhY2VzKG5zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5ucykge1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcobnMpKSBucyA9IFtuc107XG4gICAgbnMuZm9yRWFjaChuID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihuKSA8IDApIHRoaXMub3B0aW9ucy5ucy5wdXNoKG4pO1xuICAgIH0pO1xuICAgIHRoaXMubG9hZFJlc291cmNlcyhlcnIgPT4ge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZDtcbiAgfVxuICBsb2FkTGFuZ3VhZ2VzKGxuZ3MsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIGlmIChpc1N0cmluZyhsbmdzKSkgbG5ncyA9IFtsbmdzXTtcbiAgICBjb25zdCBwcmVsb2FkZWQgPSB0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCBbXTtcbiAgICBjb25zdCBuZXdMbmdzID0gbG5ncy5maWx0ZXIobG5nID0+IHByZWxvYWRlZC5pbmRleE9mKGxuZykgPCAwICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5pc1N1cHBvcnRlZENvZGUobG5nKSk7XG4gICAgaWYgKCFuZXdMbmdzLmxlbmd0aCkge1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMucHJlbG9hZCA9IHByZWxvYWRlZC5jb25jYXQobmV3TG5ncyk7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKGVyciA9PiB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkO1xuICB9XG4gIGRpcihsbmcpIHtcbiAgICBpZiAoIWxuZykgbG5nID0gdGhpcy5yZXNvbHZlZExhbmd1YWdlIHx8ICh0aGlzLmxhbmd1YWdlcyAmJiB0aGlzLmxhbmd1YWdlcy5sZW5ndGggPiAwID8gdGhpcy5sYW5ndWFnZXNbMF0gOiB0aGlzLmxhbmd1YWdlKTtcbiAgICBpZiAoIWxuZykgcmV0dXJuICdydGwnO1xuICAgIGNvbnN0IHJ0bExuZ3MgPSBbJ2FyJywgJ3NodScsICdzcXInLCAnc3NoJywgJ3hhYScsICd5aGQnLCAneXVkJywgJ2FhbycsICdhYmgnLCAnYWJ2JywgJ2FjbScsICdhY3EnLCAnYWN3JywgJ2FjeCcsICdhY3knLCAnYWRmJywgJ2FkcycsICdhZWInLCAnYWVjJywgJ2FmYicsICdhanAnLCAnYXBjJywgJ2FwZCcsICdhcmInLCAnYXJxJywgJ2FycycsICdhcnknLCAnYXJ6JywgJ2F1eicsICdhdmwnLCAnYXloJywgJ2F5bCcsICdheW4nLCAnYXlwJywgJ2JieicsICdwZ2EnLCAnaGUnLCAnaXcnLCAncHMnLCAncGJ0JywgJ3BidScsICdwc3QnLCAncHJwJywgJ3ByZCcsICd1ZycsICd1cicsICd5ZGQnLCAneWRzJywgJ3lpaCcsICdqaScsICd5aScsICdoYm8nLCAnbWVuJywgJ3htbicsICdmYScsICdqcHInLCAncGVvJywgJ3BlcycsICdwcnMnLCAnZHYnLCAnc2FtJywgJ2NrYiddO1xuICAgIGNvbnN0IGxhbmd1YWdlVXRpbHMgPSB0aGlzLnNlcnZpY2VzICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscyB8fCBuZXcgTGFuZ3VhZ2VVdGlsKGdldCgpKTtcbiAgICByZXR1cm4gcnRsTG5ncy5pbmRleE9mKGxhbmd1YWdlVXRpbHMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUobG5nKSkgPiAtMSB8fCBsbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKCctYXJhYicpID4gMSA/ICdydGwnIDogJ2x0cic7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUluc3RhbmNlKCkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbmV3IEkxOG4ob3B0aW9ucywgY2FsbGJhY2spO1xuICB9XG4gIGNsb25lSW5zdGFuY2UoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIGxldCBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgICBjb25zdCBmb3JrUmVzb3VyY2VTdG9yZSA9IG9wdGlvbnMuZm9ya1Jlc291cmNlU3RvcmU7XG4gICAgaWYgKGZvcmtSZXNvdXJjZVN0b3JlKSBkZWxldGUgb3B0aW9ucy5mb3JrUmVzb3VyY2VTdG9yZTtcbiAgICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC4uLntcbiAgICAgICAgaXNDbG9uZTogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2xvbmUgPSBuZXcgSTE4bihtZXJnZWRPcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5kZWJ1ZyAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsb25lLmxvZ2dlciA9IGNsb25lLmxvZ2dlci5jbG9uZShvcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgbWVtYmVyc1RvQ29weSA9IFsnc3RvcmUnLCAnc2VydmljZXMnLCAnbGFuZ3VhZ2UnXTtcbiAgICBtZW1iZXJzVG9Db3B5LmZvckVhY2gobSA9PiB7XG4gICAgICBjbG9uZVttXSA9IHRoaXNbbV07XG4gICAgfSk7XG4gICAgY2xvbmUuc2VydmljZXMgPSB7XG4gICAgICAuLi50aGlzLnNlcnZpY2VzXG4gICAgfTtcbiAgICBjbG9uZS5zZXJ2aWNlcy51dGlscyA9IHtcbiAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogY2xvbmUuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQoY2xvbmUpXG4gICAgfTtcbiAgICBpZiAoZm9ya1Jlc291cmNlU3RvcmUpIHtcbiAgICAgIGNsb25lLnN0b3JlID0gbmV3IFJlc291cmNlU3RvcmUodGhpcy5zdG9yZS5kYXRhLCBtZXJnZWRPcHRpb25zKTtcbiAgICAgIGNsb25lLnNlcnZpY2VzLnJlc291cmNlU3RvcmUgPSBjbG9uZS5zdG9yZTtcbiAgICB9XG4gICAgY2xvbmUudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKGNsb25lLnNlcnZpY2VzLCBtZXJnZWRPcHRpb25zKTtcbiAgICBjbG9uZS50cmFuc2xhdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuICAgICAgY2xvbmUuZW1pdChldmVudCwgLi4uYXJncyk7XG4gICAgfSk7XG4gICAgY2xvbmUuaW5pdChtZXJnZWRPcHRpb25zLCBjYWxsYmFjayk7XG4gICAgY2xvbmUudHJhbnNsYXRvci5vcHRpb25zID0gbWVyZ2VkT3B0aW9ucztcbiAgICBjbG9uZS50cmFuc2xhdG9yLmJhY2tlbmRDb25uZWN0b3Iuc2VydmljZXMudXRpbHMgPSB7XG4gICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgIH07XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgIGxhbmd1YWdlczogdGhpcy5sYW5ndWFnZXMsXG4gICAgICByZXNvbHZlZExhbmd1YWdlOiB0aGlzLnJlc29sdmVkTGFuZ3VhZ2VcbiAgICB9O1xuICB9XG59XG5jb25zdCBpbnN0YW5jZSA9IEkxOG4uY3JlYXRlSW5zdGFuY2UoKTtcbmluc3RhbmNlLmNyZWF0ZUluc3RhbmNlID0gSTE4bi5jcmVhdGVJbnN0YW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnN0YW5jZTtcbiIsImZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBmaWxlIHNpemUgaGFja3NcbiAgICAgICAgcmVxdWVzdC5vbmNvbXBsZXRlID0gcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZpbGUgc2l6ZSBoYWNrc1xuICAgICAgICByZXF1ZXN0Lm9uYWJvcnQgPSByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVTdG9yZShkYk5hbWUsIHN0b3JlTmFtZSkge1xuICAgIGxldCBkYnA7XG4gICAgY29uc3QgZ2V0REIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkYnApXG4gICAgICAgICAgICByZXR1cm4gZGJwO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lKTtcbiAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiByZXF1ZXN0LnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICBkYnAgPSBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICBkYnAudGhlbigoZGIpID0+IHtcbiAgICAgICAgICAgIC8vIEl0IHNlZW1zIGxpa2UgU2FmYXJpIHNvbWV0aW1lcyBsaWtlcyB0byBqdXN0IGNsb3NlIHRoZSBjb25uZWN0aW9uLlxuICAgICAgICAgICAgLy8gSXQncyBzdXBwb3NlZCB0byBmaXJlIHRoaXMgZXZlbnQgd2hlbiB0aGF0IGhhcHBlbnMuIExldCdzIGhvcGUgaXQgZG9lcyFcbiAgICAgICAgICAgIGRiLm9uY2xvc2UgPSAoKSA9PiAoZGJwID0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSwgKCkgPT4geyB9KTtcbiAgICAgICAgcmV0dXJuIGRicDtcbiAgICB9O1xuICAgIHJldHVybiAodHhNb2RlLCBjYWxsYmFjaykgPT4gZ2V0REIoKS50aGVuKChkYikgPT4gY2FsbGJhY2soZGIudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCB0eE1vZGUpLm9iamVjdFN0b3JlKHN0b3JlTmFtZSkpKTtcbn1cbmxldCBkZWZhdWx0R2V0U3RvcmVGdW5jO1xuZnVuY3Rpb24gZGVmYXVsdEdldFN0b3JlKCkge1xuICAgIGlmICghZGVmYXVsdEdldFN0b3JlRnVuYykge1xuICAgICAgICBkZWZhdWx0R2V0U3RvcmVGdW5jID0gY3JlYXRlU3RvcmUoJ2tleXZhbC1zdG9yZScsICdrZXl2YWwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRHZXRTdG9yZUZ1bmM7XG59XG4vKipcbiAqIEdldCBhIHZhbHVlIGJ5IGl0cyBrZXkuXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGdldChrZXksIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldChrZXkpKSk7XG59XG4vKipcbiAqIFNldCBhIHZhbHVlIHdpdGggYSBrZXkuXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogU2V0IG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlLiBUaGlzIGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgc2V0KCkgbXVsdGlwbGUgdGltZXMuXG4gKiBJdCdzIGFsc28gYXRvbWljIOKAkyBpZiBvbmUgb2YgdGhlIHBhaXJzIGNhbid0IGJlIGFkZGVkLCBub25lIHdpbGwgYmUgYWRkZWQuXG4gKlxuICogQHBhcmFtIGVudHJpZXMgQXJyYXkgb2YgZW50cmllcywgd2hlcmUgZWFjaCBlbnRyeSBpcyBhbiBhcnJheSBvZiBgW2tleSwgdmFsdWVdYC5cbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBzZXRNYW55KGVudHJpZXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiBzdG9yZS5wdXQoZW50cnlbMV0sIGVudHJ5WzBdKSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IG11bHRpcGxlIHZhbHVlcyBieSB0aGVpciBrZXlzXG4gKlxuICogQHBhcmFtIGtleXNcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBnZXRNYW55KGtleXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBQcm9taXNlLmFsbChrZXlzLm1hcCgoa2V5KSA9PiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldChrZXkpKSkpKTtcbn1cbi8qKlxuICogVXBkYXRlIGEgdmFsdWUuIFRoaXMgbGV0cyB5b3Ugc2VlIHRoZSBvbGQgdmFsdWUgYW5kIHVwZGF0ZSBpdCBhcyBhbiBhdG9taWMgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSB1cGRhdGVyIEEgY2FsbGJhY2sgdGhhdCB0YWtlcyB0aGUgb2xkIHZhbHVlIGFuZCByZXR1cm5zIGEgbmV3IHZhbHVlLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZShrZXksIHVwZGF0ZXIsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4gXG4gICAgLy8gTmVlZCB0byBjcmVhdGUgdGhlIHByb21pc2UgbWFudWFsbHkuXG4gICAgLy8gSWYgSSB0cnkgdG8gY2hhaW4gcHJvbWlzZXMsIHRoZSB0cmFuc2FjdGlvbiBjbG9zZXMgaW4gYnJvd3NlcnNcbiAgICAvLyB0aGF0IHVzZSBhIHByb21pc2UgcG9seWZpbGwgKElFMTAvMTEpLlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc3RvcmUuZ2V0KGtleSkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXQodXBkYXRlcih0aGlzLnJlc3VsdCksIGtleSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSkpO1xufVxuLyoqXG4gKiBEZWxldGUgYSBwYXJ0aWN1bGFyIGtleSBmcm9tIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZGVsKGtleSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vKipcbiAqIERlbGV0ZSBtdWx0aXBsZSBrZXlzIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIGtleXMgTGlzdCBvZiBrZXlzIHRvIGRlbGV0ZS5cbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBkZWxNYW55KGtleXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4gc3RvcmUuZGVsZXRlKGtleSkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vKipcbiAqIENsZWFyIGFsbCB2YWx1ZXMgaW4gdGhlIHN0b3JlLlxuICpcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBjbGVhcihjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkd3JpdGUnLCAoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZWFjaEN1cnNvcihzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBzdG9yZS5vcGVuQ3Vyc29yKCkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYWxsYmFjayh0aGlzLnJlc3VsdCk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbnRpbnVlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG59XG4vKipcbiAqIEdldCBhbGwga2V5cyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGtleXMoY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHtcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaWYgKHN0b3JlLmdldEFsbEtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbEtleXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goY3Vyc29yLmtleSkpLnRoZW4oKCkgPT4gaXRlbXMpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgYWxsIHZhbHVlcyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlcyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goY3Vyc29yLnZhbHVlKSkudGhlbigoKSA9PiBpdGVtcyk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdldCBhbGwgZW50cmllcyBpbiB0aGUgc3RvcmUuIEVhY2ggZW50cnkgaXMgYW4gYXJyYXkgb2YgYFtrZXksIHZhbHVlXWAuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGVudHJpZXMoY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHtcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgLy8gKGFsdGhvdWdoLCBob3BlZnVsbHkgd2UnbGwgZ2V0IGEgc2ltcGxlciBwYXRoIHNvbWUgZGF5KVxuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsICYmIHN0b3JlLmdldEFsbEtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGxLZXlzKCkpLFxuICAgICAgICAgICAgICAgIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0QWxsKCkpLFxuICAgICAgICAgICAgXSkudGhlbigoW2tleXMsIHZhbHVlc10pID0+IGtleXMubWFwKChrZXksIGkpID0+IFtrZXksIHZhbHVlc1tpXV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBlYWNoQ3Vyc29yKHN0b3JlLCAoY3Vyc29yKSA9PiBpdGVtcy5wdXNoKFtjdXJzb3Iua2V5LCBjdXJzb3IudmFsdWVdKSkudGhlbigoKSA9PiBpdGVtcykpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbGVhciwgY3JlYXRlU3RvcmUsIGRlbCwgZGVsTWFueSwgZW50cmllcywgZ2V0LCBnZXRNYW55LCBrZXlzLCBwcm9taXNpZnlSZXF1ZXN0LCBzZXQsIHNldE1hbnksIHVwZGF0ZSwgdmFsdWVzIH07XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLm5vdGlmaWNhdGlvbnM9dCgpOmUubm90aWZpY2F0aW9ucz10KCl9KHRoaXMsKCgpPT57cmV0dXJuIGU9ezM3MDA3OmU9PntcInVzZSBzdHJpY3RcIjt2YXIgdCxuPVwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0P1JlZmxlY3Q6bnVsbCxpPW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4uYXBwbHk/bi5hcHBseTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGUsdCxuKX07dD1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLm93bktleXM/bi5vd25LZXlzOk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpKX06ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfTt2YXIgcj1OdW1iZXIuaXNOYU58fGZ1bmN0aW9uKGUpe3JldHVybiBlIT1lfTtmdW5jdGlvbiBvKCl7by5pbml0LmNhbGwodGhpcyl9ZS5leHBvcnRzPW8sZS5leHBvcnRzLm9uY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4saSl7ZnVuY3Rpb24gcihuKXtlLnJlbW92ZUxpc3RlbmVyKHQsbyksaShuKX1mdW5jdGlvbiBvKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZW1vdmVMaXN0ZW5lciYmZS5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsciksbihbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfW0oZSx0LG8se29uY2U6ITB9KSxcImVycm9yXCIhPT10JiZmdW5jdGlvbihlLHQsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbiYmbShlLFwiZXJyb3JcIix0LHtvbmNlOiEwfSl9KGUscil9KSl9LG8uRXZlbnRFbWl0dGVyPW8sby5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDAsby5wcm90b3R5cGUuX2V2ZW50c0NvdW50PTAsby5wcm90b3R5cGUuX21heExpc3RlbmVycz12b2lkIDA7dmFyIHM9MTA7ZnVuY3Rpb24gYShlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuIHZvaWQgMD09PWUuX21heExpc3RlbmVycz9vLmRlZmF1bHRNYXhMaXN0ZW5lcnM6ZS5fbWF4TGlzdGVuZXJzfWZ1bmN0aW9uIGwoZSx0LG4saSl7dmFyIHIsbyxzLGw7aWYoYShuKSx2b2lkIDA9PT0obz1lLl9ldmVudHMpPyhvPWUuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLGUuX2V2ZW50c0NvdW50PTApOih2b2lkIDAhPT1vLm5ld0xpc3RlbmVyJiYoZS5lbWl0KFwibmV3TGlzdGVuZXJcIix0LG4ubGlzdGVuZXI/bi5saXN0ZW5lcjpuKSxvPWUuX2V2ZW50cykscz1vW3RdKSx2b2lkIDA9PT1zKXM9b1t0XT1uLCsrZS5fZXZlbnRzQ291bnQ7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzP3M9b1t0XT1pP1tuLHNdOltzLG5dOmk/cy51bnNoaWZ0KG4pOnMucHVzaChuKSwocj1jKGUpKT4wJiZzLmxlbmd0aD5yJiYhcy53YXJuZWQpe3Mud2FybmVkPSEwO3ZhciB1PW5ldyBFcnJvcihcIlBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gXCIrcy5sZW5ndGgrXCIgXCIrU3RyaW5nKHQpK1wiIGxpc3RlbmVycyBhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXRcIik7dS5uYW1lPVwiTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nXCIsdS5lbWl0dGVyPWUsdS50eXBlPXQsdS5jb3VudD1zLmxlbmd0aCxsPXUsY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4obCl9cmV0dXJuIGV9ZnVuY3Rpb24gdSgpe2lmKCF0aGlzLmZpcmVkKXJldHVybiB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsdGhpcy53cmFwRm4pLHRoaXMuZmlyZWQ9ITAsMD09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTp0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LGFyZ3VtZW50cyl9ZnVuY3Rpb24gZihlLHQsbil7dmFyIGk9e2ZpcmVkOiExLHdyYXBGbjp2b2lkIDAsdGFyZ2V0OmUsdHlwZTp0LGxpc3RlbmVyOm59LHI9dS5iaW5kKGkpO3JldHVybiByLmxpc3RlbmVyPW4saS53cmFwRm49cixyfWZ1bmN0aW9uIGQoZSx0LG4pe3ZhciBpPWUuX2V2ZW50cztpZih2b2lkIDA9PT1pKXJldHVybltdO3ZhciByPWlbdF07cmV0dXJuIHZvaWQgMD09PXI/W106XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9uP1tyLmxpc3RlbmVyfHxyXTpbcl06bj9mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjx0Lmxlbmd0aDsrK24pdFtuXT1lW25dLmxpc3RlbmVyfHxlW25dO3JldHVybiB0fShyKTp2KHIsci5sZW5ndGgpfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PXQpe3ZhciBuPXRbZV07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gMTtpZih2b2lkIDAhPT1uKXJldHVybiBuLmxlbmd0aH1yZXR1cm4gMH1mdW5jdGlvbiB2KGUsdCl7Zm9yKHZhciBuPW5ldyBBcnJheSh0KSxpPTA7aTx0OysraSluW2ldPWVbaV07cmV0dXJuIG59ZnVuY3Rpb24gbShlLHQsbixpKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uKWkub25jZT9lLm9uY2UodCxuKTplLm9uKHQsbik7ZWxzZXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLmFkZEV2ZW50TGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSk7ZS5hZGRFdmVudExpc3RlbmVyKHQsKGZ1bmN0aW9uIHIobyl7aS5vbmNlJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxyKSxuKG8pfSkpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxlPDB8fHIoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrXCIuXCIpO3M9ZX19KSxvLmluaXQ9ZnVuY3Rpb24oKXt2b2lkIDAhPT10aGlzLl9ldmVudHMmJnRoaXMuX2V2ZW50cyE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzfHwodGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCksdGhpcy5fbWF4TGlzdGVuZXJzPXRoaXMuX21heExpc3RlbmVyc3x8dm9pZCAwfSxvLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGV8fGU8MHx8cihlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrZStcIi5cIik7cmV0dXJuIHRoaXMuX21heExpc3RlbmVycz1lLHRoaXN9LG8ucHJvdG90eXBlLmdldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiBjKHRoaXMpfSxvLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0LnB1c2goYXJndW1lbnRzW25dKTt2YXIgcj1cImVycm9yXCI9PT1lLG89dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PW8pcj1yJiZ2b2lkIDA9PT1vLmVycm9yO2Vsc2UgaWYoIXIpcmV0dXJuITE7aWYocil7dmFyIHM7aWYodC5sZW5ndGg+MCYmKHM9dFswXSkscyBpbnN0YW5jZW9mIEVycm9yKXRocm93IHM7dmFyIGE9bmV3IEVycm9yKFwiVW5oYW5kbGVkIGVycm9yLlwiKyhzP1wiIChcIitzLm1lc3NhZ2UrXCIpXCI6XCJcIikpO3Rocm93IGEuY29udGV4dD1zLGF9dmFyIGM9b1tlXTtpZih2b2lkIDA9PT1jKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpaShjLHRoaXMsdCk7ZWxzZXt2YXIgbD1jLmxlbmd0aCx1PXYoYyxsKTtmb3Iobj0wO248bDsrK24paSh1W25dLHRoaXMsdCl9cmV0dXJuITB9LG8ucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGwodGhpcyxlLHQsITEpfSxvLnByb3RvdHlwZS5vbj1vLnByb3RvdHlwZS5hZGRMaXN0ZW5lcixvLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbCh0aGlzLGUsdCwhMCl9LG8ucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYSh0KSx0aGlzLm9uKGUsZih0aGlzLGUsdCkpLHRoaXN9LG8ucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYSh0KSx0aGlzLnByZXBlbmRMaXN0ZW5lcihlLGYodGhpcyxlLHQpKSx0aGlzfSxvLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3ZhciBuLGkscixvLHM7aWYoYSh0KSx2b2lkIDA9PT0oaT10aGlzLl9ldmVudHMpKXJldHVybiB0aGlzO2lmKHZvaWQgMD09PShuPWlbZV0pKXJldHVybiB0aGlzO2lmKG49PT10fHxuLmxpc3RlbmVyPT09dCkwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOihkZWxldGUgaVtlXSxpLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsbi5saXN0ZW5lcnx8dCkpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil7Zm9yKHI9LTEsbz1uLmxlbmd0aC0xO28+PTA7by0tKWlmKG5bb109PT10fHxuW29dLmxpc3RlbmVyPT09dCl7cz1uW29dLmxpc3RlbmVyLHI9bzticmVha31pZihyPDApcmV0dXJuIHRoaXM7MD09PXI/bi5zaGlmdCgpOmZ1bmN0aW9uKGUsdCl7Zm9yKDt0KzE8ZS5sZW5ndGg7dCsrKWVbdF09ZVt0KzFdO2UucG9wKCl9KG4sciksMT09PW4ubGVuZ3RoJiYoaVtlXT1uWzBdKSx2b2lkIDAhPT1pLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsc3x8dCl9cmV0dXJuIHRoaXN9LG8ucHJvdG90eXBlLm9mZj1vLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcixvLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7dmFyIHQsbixpO2lmKHZvaWQgMD09PShuPXRoaXMuX2V2ZW50cykpcmV0dXJuIHRoaXM7aWYodm9pZCAwPT09bi5yZW1vdmVMaXN0ZW5lcilyZXR1cm4gMD09PWFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApOnZvaWQgMCE9PW5bZV0mJigwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOmRlbGV0ZSBuW2VdKSx0aGlzO2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgcixvPU9iamVjdC5rZXlzKG4pO2ZvcihpPTA7aTxvLmxlbmd0aDsrK2kpXCJyZW1vdmVMaXN0ZW5lclwiIT09KHI9b1tpXSkmJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKHIpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhcInJlbW92ZUxpc3RlbmVyXCIpLHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTAsdGhpc31pZihcImZ1bmN0aW9uXCI9PXR5cGVvZih0PW5bZV0pKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0KTtlbHNlIGlmKHZvaWQgMCE9PXQpZm9yKGk9dC5sZW5ndGgtMTtpPj0wO2ktLSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdFtpXSk7cmV0dXJuIHRoaXN9LG8ucHJvdG90eXBlLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm4gZCh0aGlzLGUsITApfSxvLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGQodGhpcyxlLCExKX0sby5saXN0ZW5lckNvdW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZS5saXN0ZW5lckNvdW50P2UubGlzdGVuZXJDb3VudCh0KTpwLmNhbGwoZSx0KX0sby5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1wLG8ucHJvdG90eXBlLmV2ZW50TmFtZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQ+MD90KHRoaXMuX2V2ZW50cyk6W119fSwzMDg5OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5EZWZlcnJlZFByb21pc2U9Y2xhc3N7Y29uc3RydWN0b3IoKXtjb25zdCBlPW5ldyBQcm9taXNlKCgoZSx0KT0+e3RoaXMuX3Jlc29sdmU9ZSx0aGlzLl9yZWplY3Q9dH0pKTt0aGlzLl9wcm9taXNlPWV9Z2V0IHByb21pc2UoKXtyZXR1cm4gdGhpcy5fcHJvbWlzZX1nZXQgcmVzb2x2ZSgpe3JldHVybiB0aGlzLl9yZXNvbHZlfWdldCByZWplY3QoKXtyZXR1cm4gdGhpcy5fcmVqZWN0fX19LDIyNzc3OihlLHQsbik9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBpPW4oMzA4OSk7YXN5bmMgZnVuY3Rpb24gcihlLHQpe2xldCBuPTA7Zm9yKGNvbnN0IGkgb2YgZSlhd2FpdCB0KGksbixlKSxuKyt9YXN5bmMgZnVuY3Rpb24gbyhlLHQpe2F3YWl0IFByb21pc2UuYWxsKGUubWFwKHQpKX1mdW5jdGlvbiBzKGUsdCxuKXtjb25zdCByPW5ldyBpLkRlZmVycmVkUHJvbWlzZSxvPWUuYWRkKCgoLi4uZSk9Pnt0KC4uLmUpJiYoby5yZW1vdmUoKSxyLnJlc29sdmUoKSl9KSk7cmV0dXJuIG4mJm4uY2F0Y2goKGU9PntvLnJlbW92ZSgpLHIucmVqZWN0KGUpfSkpLGEoci5wcm9taXNlKX1mdW5jdGlvbiBhKGUpe3JldHVybiBlLmNhdGNoKCgoKT0+e30pKSxlfXQuc2VyaWFsRm9yRWFjaD1yLHQuc2VyaWFsTWFwPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgcihlLChhc3luYyhlLGkscik9PntuLnB1c2goYXdhaXQgdChlLGkscikpfSkpLG59LHQuc2VyaWFsRmlsdGVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgcihlLChhc3luYyhlLGkscik9Pnthd2FpdCB0KGUsaSxyKSYmbi5wdXNoKGUpfSkpLG59LHQucGFyYWxsZWxGb3JFYWNoPW8sdC5wYXJhbGxlbE1hcD1hc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49W107cmV0dXJuIGF3YWl0IG8oZSwoYXN5bmMoZSxpLHIpPT57bltpXT1hd2FpdCB0KGUsaSxyKX0pKSxufSx0LnBhcmFsbGVsRmlsdGVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgbyhlLChhc3luYyhlLGkscik9PntuW2ldPWF3YWl0IHQoZSxpLHIpfSkpLGUuZmlsdGVyKCgoZSx0KT0+blt0XSkpfSx0LndpdGhTdHJpY3RUaW1lb3V0PWZ1bmN0aW9uKGUsdCxuKXtjb25zdCBpPW5ldyBQcm9taXNlKCgodCxpKT0+c2V0VGltZW91dCgoKCk9PmkobmV3IEVycm9yKG4pKSksZSkpKTtyZXR1cm4gYShQcm9taXNlLnJhY2UoW2ksdF0pKX0sdC53aXRoVGltZW91dD1mdW5jdGlvbihlLHQpe2NvbnN0IG49bmV3IFByb21pc2UoKHQ9PnNldFRpbWVvdXQoKCgpPT50KFshMCx2b2lkIDBdKSksZSkpKSxpPXQudGhlbigoZT0+WyExLGVdKSk7cmV0dXJuIFByb21pc2UucmFjZShbbixpXSl9LHQudW50aWxUcnVlPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdCgpP1Byb21pc2UucmVzb2x2ZSgpOnMoZSx0LG4pfSx0LnVudGlsU2lnbmFsPXMsdC5hbGxvd1JlamVjdD1hfSw5NTc4NTooZSx0LG4pPT57XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXtmb3IodmFyIG4gaW4gZSl0Lmhhc093blByb3BlcnR5KG4pfHwodFtuXT1lW25dKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxpKG4oMjI3NzcpKSxpKG4oMzA4OSkpfSw0MDY1MTplPT57ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPWUuc3BsaXQoXCIuXCIpLGk9dC5zcGxpdChcIi5cIikscj0wO3I8MztyKyspe3ZhciBvPU51bWJlcihuW3JdKSxzPU51bWJlcihpW3JdKTtpZihvPnMpcmV0dXJuIDE7aWYocz5vKXJldHVybi0xO2lmKCFpc05hTihvKSYmaXNOYU4ocykpcmV0dXJuIDE7aWYoaXNOYU4obykmJiFpc05hTihzKSlyZXR1cm4tMX1yZXR1cm4gMH19LDMzNjU3OmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10aGlzJiZ0aGlzLl9fcmVzdHx8ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmdC5pbmRleE9mKGkpPDAmJihuW2ldPWVbaV0pO2lmKG51bGwhPWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPTA7Zm9yKGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtyPGkubGVuZ3RoO3IrKyl0LmluZGV4T2YoaVtyXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsaVtyXSkmJihuW2lbcl1dPWVbaVtyXV0pfXJldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmdldEV2ZW50Um91dGVyPXQuZXZlbnRFbWl0dGVyPXQuRXZlbnRSb3V0ZXI9dm9pZCAwO2NvbnN0IHI9bigzNzAwNyksbz1uKDExMTU0KSxzPW4oNTk2MDMpO2NsYXNzIGF7Y29uc3RydWN0b3IoZSl7dGhpcy5fZW1pdHRlclByb3ZpZGVycz17fSx0aGlzLl9kZXNlcmlhbGl6ZXJzPXt9LHRoaXMuX2RlZmF1bHRFbWl0dGVyPWV9cmVnaXN0ZXJFbWl0dGVyUHJvdmlkZXIoZSx0KXt0aGlzLl9lbWl0dGVyUHJvdmlkZXJzW2VdPXR9cmVnaXN0ZXJEZXNlcmlhbGl6ZXIoZSx0KXt0aGlzLl9kZXNlcmlhbGl6ZXJzW2VdPXR9ZGlzcGF0Y2hFdmVudChlKXtjb25zdHt0eXBlOnQsdGFyZ2V0Om59PWUscj1pKGUsW1widHlwZVwiLFwidGFyZ2V0XCJdKTtsZXQgYTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV2ZW50LCBubyB0YXJnZXQgc3BlY2lmaWVkXCIpO2lmKFwiZGVmYXVsdFwiPT09bilhPXRoaXMuX2RlZmF1bHRFbWl0dGVyO2Vsc2V7aWYoIXRoaXMuX2VtaXR0ZXJQcm92aWRlcnNbbi50eXBlXSl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdGFyZ2V0LCBubyBwcm92aWRlciByZWdpc3RlcmVkIGZvciAnJHtuLnR5cGV9J2ApO2E9dGhpcy5fZW1pdHRlclByb3ZpZGVyc1tuLnR5cGVdKG4uaWQpfWNvbnN0IGM9T2JqZWN0LmFzc2lnbih7dHlwZTp0fSxyKSxsPXRoaXMuX2Rlc2VyaWFsaXplcnNbdF07bD9hLmVtaXQodCxsKGMpKTpcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiPT09dD9mdW5jdGlvbihlLHQpe2xldCBuPSExO2UucHJldmVudERlZmF1bHQ9KCk9Pm49ITAsdC5lbWl0KFwibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCIsZSksbnx8KDAsby50cnlTZXJ2aWNlRGlzcGF0Y2gpKHMuQVBJVG9waWMuU0VUX0ZPUk1fU1RBVFVTX09QVElPTlMse2Zvcm1TdGF0dXM6XCJzdWJtaXR0ZWRcIixfbm90aWZpY2F0aW9uSWQ6ZS5ub3RpZmljYXRpb24uaWR9KX0oYyxhKTphLmVtaXQodCxjKX19bGV0IGM7dC5FdmVudFJvdXRlcj1hLHQuZXZlbnRFbWl0dGVyPW5ldyByLkV2ZW50RW1pdHRlcix0LmdldEV2ZW50Um91dGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGN8fChjPW5ldyBhKHQuZXZlbnRFbWl0dGVyKSksY319LDg2NDU1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5BY3Rpb25Cb2R5Q2xpY2tUeXBlPXQuQWN0aW9uTm9vcFR5cGU9dC5BY3Rpb25UcmlnZ2VyPXZvaWQgMCwobj10LkFjdGlvblRyaWdnZXJ8fCh0LkFjdGlvblRyaWdnZXI9e30pKS5DT05UUk9MPVwiY29udHJvbFwiLG4uU0VMRUNUPVwic2VsZWN0XCIsbi5DTE9TRT1cImNsb3NlXCIsbi5FWFBJUkU9XCJleHBpcmVcIixuLlBST0dSQU1NQVRJQz1cInByb2dyYW1tYXRpY1wiLCh0LkFjdGlvbk5vb3BUeXBlfHwodC5BY3Rpb25Ob29wVHlwZT17fSkpLkVWRU5UX0RJU01JU1M9XCJldmVudF9kaXNtaXNzXCIsKHQuQWN0aW9uQm9keUNsaWNrVHlwZXx8KHQuQWN0aW9uQm9keUNsaWNrVHlwZT17fSkpLkRJU01JU1NfRVZFTlQ9XCJkaXNtaXNzX2V2ZW50XCJ9LDI3MTY3OihlLHQsbik9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmdldENoYW5uZWxDbGllbnQ9dC5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50PXQuaW5pdEF3YWl0ZWRDaGFubmVsQ2xpZW50PXQuQ2hhbm5lbENsaWVudENvbmZpZz12b2lkIDA7Y29uc3QgaT1uKDU5NjAzKSxyPW4oNzU3NjIpO3QuQ2hhbm5lbENsaWVudENvbmZpZz17c2VydmljZUNoYW5uZWw6aS5TRVJWSUNFX0NIQU5ORUx9O2NvbnN0IG89YXN5bmMoe3dhaXQ6ZX0pPT57YXdhaXQgci5Mb2cuaW5mbyhcIkNvbm5lY3RpbmcgdG8gTm90aWZpY2F0aW9ucy4uLlwiKTtjb25zdCBuPWF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdCh0LkNoYW5uZWxDbGllbnRDb25maWcuc2VydmljZUNoYW5uZWwse3dhaXQ6ZSxwYXlsb2FkOnt2ZXJzaW9uOlwiMi45LjEtYWxwaGEtMzgyNVwifX0pO3JldHVybiBhd2FpdCByLkxvZy5pbmZvKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBOb3RpZmljYXRpb25zLlwiKSxufTtsZXQgcyxhO3QuaW5pdEF3YWl0ZWRDaGFubmVsQ2xpZW50PSgpPT5zP3tjaGFubmVsQ2xpZW50UHJvbWlzZTpzLGlzSW5pdDohMX06KHM9byh7d2FpdDohMH0pLHMuY2F0Y2goKGU9PigwLHQuY2xlYXJBd2FpdGVkQ2hhbm5lbENsaWVudCkoKSkpLHtjaGFubmVsQ2xpZW50UHJvbWlzZTpzLGlzSW5pdDohMH0pLHQuY2xlYXJBd2FpdGVkQ2hhbm5lbENsaWVudD0oKT0+e3M9bnVsbH0sdC5nZXRDaGFubmVsQ2xpZW50PWFzeW5jKCk9PnN8fChhc3luYygpPT57aWYoIWEpe3RyeXthPWF3YWl0IG8oe3dhaXQ6ITF9KSxhLnNldERlZmF1bHRBY3Rpb24oKCgpPT4hMSkpfWNhdGNoKGUpe3Rocm93IGF3YWl0IHIuTG9nLmVycm9yKCdDb3VsZCBub3QgZmluZCBjaGFubmVsIHByb3ZpZGVyLiBEaWQgeW91IGNhbGwgXCJub3RpZmljYXRpb25zLnJlZ2lzdGVyKClcIj8nKSxlfWEub25EaXNjb25uZWN0aW9uKCgoKT0+e2E9bnVsbH0pKX1yZXR1cm4gYX0pKCl9LDExMTU0OihlLHQsbik9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnRyeVNlcnZpY2VEaXNwYXRjaD10LmdldFNlcnZpY2VQcm9taXNlPXQubGF1bmNoU3lzdGVtQXBwPXQuY29ubmVjdFRvTm90aWZpY2F0aW9ucz12b2lkIDA7Y29uc3QgaT1uKDk1Nzg1KSxyPW4oNTk2MDMpLG89bigzMzY1Nykscz1uKDI3MTY3KTtsZXQgYTtjb25zdCBjPW5ldyBpLkRlZmVycmVkUHJvbWlzZTtsZXQgbD0hMTthc3luYyBmdW5jdGlvbiB1KCl7aWYod2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLmluY2x1ZGVzKFwiV2luZG93c1wiKSl0cnl7Y29uc3QgZT1hd2FpdCBmaW4uU3lzdGVtLmdldFJ2bUluZm8oKTtwYXJzZUludChlLnZlcnNpb24uc3BsaXQoXCIuXCIpWzBdKT49NiYmKGZpbi5TeXN0ZW0ubGF1bmNoTWFuaWZlc3Q/ZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdChcImZpbnM6Ly9zeXN0ZW0tYXBwcy9ub3RpZmljYXRpb24tY2VudGVyXCIse25vVWk6ITB9KS5jYXRjaCgoZT0+e2NvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gbGF1bmNoIHRoZSBOb3RpZmljYXRpb24gQ2VudGVyIGFzIGEgc3lzdGVtIGFwcFwiLGUpfSkpOmZpbi5TeXN0ZW0ub3BlblVybFdpdGhCcm93c2VyKFwiZmluczovL3N5c3RlbS1hcHBzL25vdGlmaWNhdGlvbi1jZW50ZXJcIikuY2F0Y2goKCgpPT57fSkpKX1jYXRjaChlKXt9ZWxzZSBmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihcImZpbnM6Ly9zeXN0ZW0tYXBwcy9ub3RpZmljYXRpb24tY2VudGVyXCIpfWFzeW5jIGZ1bmN0aW9uIGYoKXt2YXIgZTtpZihhd2FpdCBjLnByb21pc2UsIWEpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBmaW4pe2NvbnN0IGU9XCJmaW4gaXMgbm90IGRlZmluZWQuIFRoZSBvcGVuZmluLW5vdGlmaWNhdGlvbnMgbW9kdWxlIGlzIG9ubHkgaW50ZW5kZWQgZm9yIHVzZSBpbiBhbiBPcGVuRmluIGFwcGxpY2F0aW9uLlwiO3JldHVybiBhPVByb21pc2UucmVqZWN0KG5ldyBFcnJvcihlKSksYX1maW4uU3lzdGVtLmdldFZlcnNpb24oKS50aGVuKChlPT57Y29uc3QgdD1wYXJzZUludChlLnNwbGl0KFwiLlwiKVsyXSk7dDw1MyYmY29uc29sZS53YXJuKGBBUEkgdmVyc2lvbiAke3R9IG9mIE9wZW5GaW4gdmVyc2lvbiAke2V9IGlzIGxlc3MgdGhhbiA1My4gUGxlYXNlIHVwZ3JhZGUgdGhlIHJ1bnRpbWUgdmVyc2lvbi5gKX0pKTtjb25zdHtuYW1lOnQsdXVpZDpufT1udWxsIT09KGU9ZmluLm1lLmlkZW50aXR5KSYmdm9pZCAwIT09ZT9lOmZpbi5XaW5kb3cubWU7aWYobj09PXIuU0VSVklDRV9JREVOVElUWS51dWlkJiZ0PT09ci5TRVJWSUNFX0lERU5USVRZLm5hbWUpYT1Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJUcnlpbmcgdG8gY29ubmVjdCB0byBwcm92aWRlciBmcm9tIHByb3ZpZGVyXCIpKTtlbHNle2NvbnN0IGU9d2luZG93LnNldFRpbWVvdXQoKCgpPT57Y29uc29sZS53YXJuKFwiVGFraW5nIGEgbG9uZyB0aW1lIHRvIGNvbm5lY3QgdG8gTm90aWZpY2F0aW9ucyBzZXJ2aWNlLiBJcyB0aGUgTm90aWZpY2F0aW9ucyBzZXJ2aWNlIHJ1bm5pbmc/XCIpfSksNWUzKTthPSgwLHMuaW5pdEF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLmNoYW5uZWxDbGllbnRQcm9taXNlLnRoZW4oKHQ9Pnt3aW5kb3cuY2xlYXJUaW1lb3V0KGUpO2NvbnN0IG49KDAsby5nZXRFdmVudFJvdXRlcikoKTtyZXR1cm4gdC5yZWdpc3RlcihcIldBUk5cIiwoZT0+Y29uc29sZS53YXJuKGUpKSksdC5yZWdpc3RlcihcImV2ZW50XCIsKGU9PntuLmRpc3BhdGNoRXZlbnQoZSl9KSksdC5zZXREZWZhdWx0QWN0aW9uKCgoKT0+ITEpKSx0Lm9uRGlzY29ubmVjdGlvbigoKCk9Pntjb25zb2xlLndhcm4oXCJEaXNjb25uZWN0ZWQgZnJvbSBOb3RpZmljYXRpb25zIHNlcnZpY2VcIiksKDAscy5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLGw9ITAsYT1udWxsLHUoKSxzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgdG8gTm90aWZpY2F0aW9ucyBzZXJ2aWNlXCIpLGYoKX0pLDMwMCl9KSksbD9jb25zb2xlLmxvZyhcIlJlY29ubmVjdGVkIHRvIE5vdGlmaWNhdGlvbnMgc2VydmljZVwiKTpjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBOb3RpZmljYXRpb25zIHNlcnZpY2VcIiksdH0pKX19cmV0dXJuIGF9dC5jb25uZWN0VG9Ob3RpZmljYXRpb25zPWZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz8odSgpLGYoKSxcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/Yy5yZXNvbHZlKCk6KHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgoKT0+e2MucmVzb2x2ZSgpfSkpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCgpPT57Yy5yZXNvbHZlKCl9KSkpKTpjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgY29ubmVjdCB0byBub3RpZmljYXRpb25zLCBgZmluYCBpcyBub3QgZGVmaW5lZFwiKX0sdC5sYXVuY2hTeXN0ZW1BcHA9dSx0LmdldFNlcnZpY2VQcm9taXNlPWYsdC50cnlTZXJ2aWNlRGlzcGF0Y2g9YXN5bmMgZnVuY3Rpb24oZSx0KXtyZXR1cm4oYXdhaXQoMCxzLmdldENoYW5uZWxDbGllbnQpKCkpLmRpc3BhdGNoKGUsdCl9fSw4NzIwNDooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw5Mzk1NTooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRmllbGRUeXBlPXZvaWQgMCx0LkZpZWxkVHlwZT17c3RyaW5nOlwic3RyaW5nXCIsbnVtYmVyOlwibnVtYmVyXCIsYm9vbGVhbjpcImJvb2xlYW5cIixkYXRlOlwiZGF0ZVwiLGNoZWNrYm94R3JvdXA6XCJjaGVja2JveEdyb3VwXCIscmFkaW9Hcm91cDpcInJhZGlvR3JvdXBcIix0aW1lOlwidGltZVwifX0sNjg5MTI6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKTt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbik7ciYmIShcImdldFwiaW4gcj8hdC5fX2VzTW9kdWxlOnIud3JpdGFibGV8fHIuY29uZmlndXJhYmxlKXx8KHI9e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxyKX06ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9biksZVtpXT10W25dfSkscj10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIj09PW58fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfHxpKHQsZSxuKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSkscihuKDkzOTU1KSx0KSxyKG4oMzM3MTMpLHQpfSwzMzcxMzooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuV2lkZ2V0VHlwZT10LlRpbWVXaWRnZXRUeXBlPXQuRGF0ZVdpZGdldFR5cGU9dC5SYWRpb0dyb3VwV2lkZ2V0VHlwZT10LkNoZWNrYm94R3JvdXBXaWRnZXRUeXBlPXQuQm9vbGVhbldpZGdldFR5cGU9dC5OdW1iZXJXaWRnZXRUeXBlPXQuU3RyaW5nV2lkZ2V0VHlwZT12b2lkIDAsdC5TdHJpbmdXaWRnZXRUeXBlPXtUZXh0OlwiVGV4dFwiLERyb3Bkb3duOlwiRHJvcGRvd25cIn0sdC5OdW1iZXJXaWRnZXRUeXBlPXtOdW1iZXI6XCJOdW1iZXJcIn0sdC5Cb29sZWFuV2lkZ2V0VHlwZT17VG9nZ2xlOlwiVG9nZ2xlXCIsQ2hlY2tib3g6XCJDaGVja2JveFwifSx0LkNoZWNrYm94R3JvdXBXaWRnZXRUeXBlPXtDaGVja2JveEdyb3VwOlwiQ2hlY2tib3hHcm91cFwifSx0LlJhZGlvR3JvdXBXaWRnZXRUeXBlPXtSYWRpb0dyb3VwOlwiUmFkaW9Hcm91cFwifSx0LkRhdGVXaWRnZXRUeXBlPXtEYXRlOlwiRGF0ZVwifSx0LlRpbWVXaWRnZXRUeXBlPXtUaW1lOlwiVGltZVwifSx0LldpZGdldFR5cGU9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0LlN0cmluZ1dpZGdldFR5cGUpLHQuTnVtYmVyV2lkZ2V0VHlwZSksdC5Cb29sZWFuV2lkZ2V0VHlwZSksdC5DaGVja2JveEdyb3VwV2lkZ2V0VHlwZSksdC5SYWRpb0dyb3VwV2lkZ2V0VHlwZSksdC5EYXRlV2lkZ2V0VHlwZSksdC5UaW1lV2lkZ2V0VHlwZSl9LDQ2ODY1OihlLHQpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG4saTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkluZGljYXRvckNvbG9yPXQuSW5kaWNhdG9yVHlwZT12b2lkIDAsKGk9dC5JbmRpY2F0b3JUeXBlfHwodC5JbmRpY2F0b3JUeXBlPXt9KSkuRkFJTFVSRT1cImZhaWx1cmVcIixpLldBUk5JTkc9XCJ3YXJuaW5nXCIsaS5TVUNDRVNTPVwic3VjY2Vzc1wiLChuPXQuSW5kaWNhdG9yQ29sb3J8fCh0LkluZGljYXRvckNvbG9yPXt9KSkuUkVEPVwicmVkXCIsbi5HUkVFTj1cImdyZWVuXCIsbi5ZRUxMT1c9XCJ5ZWxsb3dcIixuLkJMVUU9XCJibHVlXCIsbi5QVVJQTEU9XCJwdXJwbGVcIixuLkdSQVk9XCJncmF5XCIsbi5PUkFOR0U9XCJvcmFuZ2VcIixuLk1BR0VOVEE9XCJtYWdlbnRhXCIsbi5URUFMPVwidGVhbFwifSw1OTYwMzooZSx0KT0+e1widXNlIHN0cmljdFwiO3ZhciBuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQVBJVG9waWM9dC5nZXRDaGFubmVsTmFtZT10LlNFUlZJQ0VfQ0hBTk5FTD10LlNFUlZJQ0VfSURFTlRJVFk9dm9pZCAwLHQuU0VSVklDRV9JREVOVElUWT17dXVpZDpcIm5vdGlmaWNhdGlvbnMtc2VydmljZVwiLG5hbWU6XCJub3RpZmljYXRpb25zLXNlcnZpY2VcIn0sdC5TRVJWSUNFX0NIQU5ORUw9XCJvZi1ub3RpZmljYXRpb25zLXNlcnZpY2UtdjFcIix0LmdldENoYW5uZWxOYW1lPWU9PmU9PT10LlNFUlZJQ0VfSURFTlRJVFkudXVpZD90LlNFUlZJQ0VfQ0hBTk5FTDpgJHtlfS0ke3QuU0VSVklDRV9DSEFOTkVMfWAsKG49dC5BUElUb3BpY3x8KHQuQVBJVG9waWM9e30pKS5DUkVBVEVfTk9USUZJQ0FUSU9OPVwiY3JlYXRlLW5vdGlmaWNhdGlvblwiLG4uVVBEQVRFX05PVElGSUNBVElPTj1cInVwZGF0ZS1ub3RpZmljYXRpb25cIixuLkNMRUFSX05PVElGSUNBVElPTj1cImNsZWFyLW5vdGlmaWNhdGlvblwiLG4uR0VUX0FQUF9OT1RJRklDQVRJT05TPVwiZmV0Y2gtYXBwLW5vdGlmaWNhdGlvbnNcIixuLkNMRUFSX0FQUF9OT1RJRklDQVRJT05TPVwiY2xlYXItYXBwLW5vdGlmaWNhdGlvbnNcIixuLlRPR0dMRV9OT1RJRklDQVRJT05fQ0VOVEVSPVwidG9nZ2xlLW5vdGlmaWNhdGlvbi1jZW50ZXJcIixuLkFERF9FVkVOVF9MSVNURU5FUj1cImFkZC1ldmVudC1saXN0ZW5lclwiLG4uUkVNT1ZFX0VWRU5UX0xJU1RFTkVSPVwicmVtb3ZlLWV2ZW50LWxpc3RlbmVyXCIsbi5HRVRfUFJPVklERVJfU1RBVFVTPVwiZ2V0LXByb3ZpZGVyLXN0YXR1c1wiLG4uR0VUX05PVElGSUNBVElPTlNfQ09VTlQ9XCJnZXQtbm90aWZpY2F0aW9ucy1jb3VudFwiLG4uU0hPV19OT1RJRklDQVRJT05fQ0VOVEVSPVwic2hvdy1ub3RpZmljYXRpb24tY2VudGVyXCIsbi5ISURFX05PVElGSUNBVElPTl9DRU5URVI9XCJoaWRlLW5vdGlmaWNhdGlvbi1jZW50ZXJcIixuLlJFR0lTVEVSX1BMQVRGT1JNPVwicmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiLG4uREVSRUdJU1RFUl9QTEFURk9STT1cImRlcmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiLG4uU0VUX0ZPUk1fU1RBVFVTX09QVElPTlM9XCJzZXQtZm9ybS1zdGF0dXMtb3B0aW9uc1wiLG4uU0VUX0ZPUk1fVkFMSURBVElPTl9FUlJPUlM9XCJzZXQtZm9ybS12YWxpZGF0aW9uLWVycm9yc1wiLG4uR0VUX1VTRVJfU0VUVElOR1NfU1RBVFVTPVwiZ2V0LXVzZXItc2V0dGluZ3Mtc3RhdHVzXCIsbi5TRVRfREVGQVVMVF9QTEFURk9STV9TSE9SVENVVD1cInNldC1kZWZhdWx0LXBsYXRmb3JtLXNob3J0Y3V0XCIsbi5TRVRfTk9USUZJQ0FUSU9OX1NFQ1VSSVRZX1JVTEU9XCJzZXQtbm90aWZpY2F0aW9uLXNlY3VyaXR5LXJ1bGVcIn0sNzU3NjI6KGUsdCk9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkxvZz12b2lkIDA7Y2xhc3MgbntzdGF0aWMgYXN5bmMgZXJyb3IoZSl7dHJ5e2NvbnN0IHQ9bi5nZXRQcmVmaXhlZE1lc3NhZ2UoZSk7Y29uc29sZS5lcnJvcih0KSxhd2FpdCBmaW4uU3lzdGVtLmxvZyhcImVycm9yXCIsdCl9Y2F0Y2goZSl7bi5oYW5kbGVFcnJvcihlLFwiRmFpbGVkIHRvIGxvZyBlcnJvclwiKX19c3RhdGljIGFzeW5jIHdhcm4oZSl7dHJ5e2NvbnN0IHQ9bi5nZXRQcmVmaXhlZE1lc3NhZ2UoZSk7Y29uc29sZS53YXJuKHQpLGF3YWl0IGZpbi5TeXN0ZW0ubG9nKFwid2FybmluZ1wiLHQpfWNhdGNoKGUpe24uaGFuZGxlRXJyb3IoZSxcIkZhaWxlZCB0byBsb2cgd2FybmluZ1wiKX19c3RhdGljIGFzeW5jIGluZm8oZSl7dHJ5e2NvbnN0IHQ9bi5nZXRQcmVmaXhlZE1lc3NhZ2UoZSk7Y29uc29sZS5pbmZvKHQpLGF3YWl0IGZpbi5TeXN0ZW0ubG9nKFwiaW5mb1wiLHQpfWNhdGNoKGUpe24uaGFuZGxlRXJyb3IoZSxcIkZhaWxlZCB0byBsb2cgaW5mb1wiKX19c3RhdGljIGdldFByZWZpeGVkTWVzc2FnZShlKXtyZXR1cm5gJHtuLkxPR19QUkVGSVh9ICR7ZX1gfXN0YXRpYyBoYW5kbGVFcnJvcihlLHQpe2UgaW5zdGFuY2VvZiBFcnJvcj9jb25zb2xlLmVycm9yKGAke3R9IC0gJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTpjb25zb2xlLmVycm9yKGAke3R9IC0gJHtKU09OLnN0cmluZ2lmeShlKX1gKX19dC5Mb2c9bixuLkxPR19QUkVGSVg9XCJbb3BlbmZpbi1ub3RpZmljYXRpb25zXVwifSw0MDcwNzpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKTtyJiYhKFwiZ2V0XCJpbiByPyF0Ll9fZXNNb2R1bGU6ci53cml0YWJsZXx8ci5jb25maWd1cmFibGUpfHwocj17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHIpfTpmdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKSxlW2ldPXRbbl19KSxyPXRoaXMmJnRoaXMuX19zZXRNb2R1bGVEZWZhdWx0fHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KX06ZnVuY3Rpb24oZSx0KXtlLmRlZmF1bHQ9dH0pLG89dGhpcyYmdGhpcy5fX2ltcG9ydFN0YXJ8fGZ1bmN0aW9uKGUpe2lmKGUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgdD17fTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiIT09biYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJmkodCxlLG4pO3JldHVybiByKHQsZSksdH0scz10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIj09PW58fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfHxpKHQsZSxuKX0sYT10aGlzJiZ0aGlzLl9fcmVzdHx8ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmdC5pbmRleE9mKGkpPDAmJihuW2ldPWVbaV0pO2lmKG51bGwhPWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPTA7Zm9yKGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtyPGkubGVuZ3RoO3IrKyl0LmluZGV4T2YoaVtyXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsaVtyXSkmJihuW2lbcl1dPWVbaVtyXV0pfXJldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnNldEFsbG93ZWRPcmlnaW5zPXQuZ2V0VXNlclNldHRpbmdTdGF0dXM9dC5Vc2VyU2V0dGluZ3M9dC5nZXROb3RpZmljYXRpb25zQ291bnQ9dC5oaWRlPXQuc2hvdz10LnNldERlZmF1bHRQbGF0Zm9ybVNob3J0Y3V0PXQudG9nZ2xlTm90aWZpY2F0aW9uQ2VudGVyPXQuY2xlYXJBbGw9dC5nZXRBbGw9dC5jbGVhcj10LnVwZGF0ZT10LmNyZWF0ZT10LnJlbW92ZUV2ZW50TGlzdGVuZXI9dC5hZGRFdmVudExpc3RlbmVyPXQuVkVSU0lPTj10Lk5vdGlmaWNhdGlvbkluZGljYXRvclR5cGU9dC5JbmRpY2F0b3JDb2xvcj10Lk5vdGlmaWNhdGlvbkluZGljYXRvcldpdGhDdXN0b21Db2xvcj10Lk5vdGlmaWNhdGlvbkluZGljYXRvcj10Lk5vdGlmaWNhdGlvbk9wdGlvbnM9dC5wcm92aWRlcj10LmFjdGlvbnM9dm9pZCAwO2NvbnN0IGM9big4NjQ1NSksbD1uKDExMTU0KSx1PW4oNTk2MDMpLGY9bigzMzY1NyksZD1vKG4oNDY0NTEpKTt0LnByb3ZpZGVyPWQ7Y29uc3QgcD1uKDI4MTczKSx2PW4oNDY4NjUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuTm90aWZpY2F0aW9uSW5kaWNhdG9yfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkluZGljYXRvclR5cGV9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJJbmRpY2F0b3JDb2xvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkluZGljYXRvckNvbG9yfX0pO2NvbnN0IG09big0NDQxNSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJOb3RpZmljYXRpb25PcHRpb25zXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG0uTm90aWZpY2F0aW9uT3B0aW9uc319KTtjb25zdCBnPW8obig4NjQ1NSkpO3QuYWN0aW9ucz1nLHMobig4NjQ1NSksdCkscyhuKDg3MjA0KSx0KSxzKG4oNTAyOTUpLHQpLHMobig2ODkxMiksdCkscyhuKDEzMTU0KSx0KSxzKG4oNzUwNTApLHQpLHMobig5MDUxMiksdCksdC5WRVJTSU9OPVwiMi45LjEtYWxwaGEtMzgyNVwiO2NvbnN0IHk9KDAsZi5nZXRFdmVudFJvdXRlcikoKTtmdW5jdGlvbiBoKGUpe2NvbnN0e25vdGlmaWNhdGlvbjp0fT1lO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse25vdGlmaWNhdGlvbjpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2RhdGU6bmV3IERhdGUodC5kYXRlKSxleHBpcmVzOm51bGwhPT10LmV4cGlyZXM/bmV3IERhdGUodC5leHBpcmVzKTpudWxsfSl9KX15LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLWNyZWF0ZWRcIiwoZT0+aChlKSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tdG9hc3QtZGlzbWlzc2VkXCIsKGU9PmgoZSkpKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLWNsb3NlZFwiLChlPT5oKGUpKSkseS5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1hY3Rpb25cIiwoZT0+e3ZhciB0O2NvbnN0IG49aChlKSx7Y29udHJvbFNvdXJjZTppLGNvbnRyb2xJbmRleDpyfT1uLG89YShuLFtcImNvbnRyb2xTb3VyY2VcIixcImNvbnRyb2xJbmRleFwiXSk7cmV0dXJuIGUudHJpZ2dlcj09PWMuQWN0aW9uVHJpZ2dlci5DT05UUk9MP09iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxvKSx7Y29udHJvbDpudWxsPT09KHQ9ZS5ub3RpZmljYXRpb25baV0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0W3JdfSk6b30pKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCIsKGU9PmUpKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXJlbWluZGVyLWNyZWF0ZWRcIiwoZT0+e2NvbnN0IHQ9aChlKSx7cmVtaW5kZXJEYXRlOm59PXQsaT1hKHQsW1wicmVtaW5kZXJEYXRlXCJdKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGkpLHtyZW1pbmRlckRhdGU6bmV3IERhdGUobil9KX0pKSx5LnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXJlbWluZGVyLXJlbW92ZWRcIiwoZT0+aChlKSkpLHkucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tc291bmQtdG9nZ2xlZFwiLChlPT5lKSksdC5hZGRFdmVudExpc3RlbmVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7KDAscC52YWxpZGF0ZUVudmlyb25tZW50KSgpLGU9KDAscC5zYW5pdGl6ZUV2ZW50VHlwZSkoZSksdD0oMCxwLnNhbml0aXplRnVuY3Rpb24pKHQpO2NvbnN0IG49Zi5ldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChlKTtcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiPT09ZSYmKHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHQ9Pntjb25zdCBuPXQubm90aWZpY2F0aW9uLmlkO3Quc2V0Rm9ybVN0YXR1cz1lPT4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TRVRfRk9STV9TVEFUVVNfT1BUSU9OUyxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse19ub3RpZmljYXRpb25JZDpufSkpLGUodCl9fSh0KSksXCJub3RpZmljYXRpb24tZm9ybS12YWx1ZXMtY2hhbmdlZFwiPT09ZSYmKHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHQ9Pnt0LnNldEVycm9ycz1lPT4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TRVRfRk9STV9WQUxJREFUSU9OX0VSUk9SUyx7ZXJyb3JzOmUsbm90aWZpY2F0aW9uSWQ6dC5ub3RpZmljYXRpb24uaWR9KSxlKHQpfX0odCkpLGYuZXZlbnRFbWl0dGVyLmFkZExpc3RlbmVyKGUsdCksMD09PW4mJjE9PT1mLmV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KGUpJiZhd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkFERF9FVkVOVF9MSVNURU5FUixlKX0sdC5yZW1vdmVFdmVudExpc3RlbmVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7KDAscC52YWxpZGF0ZUVudmlyb25tZW50KSgpLGU9KDAscC5zYW5pdGl6ZUV2ZW50VHlwZSkoZSksdD0oMCxwLnNhbml0aXplRnVuY3Rpb24pKHQpLDE9PT1mLmV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50KGUpJiZmLmV2ZW50RW1pdHRlci5saXN0ZW5lcnMoZSlbMF09PT10JiZhd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlJFTU9WRV9FVkVOVF9MSVNURU5FUixlKSxmLmV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcihlLHQpfSx0LmNyZWF0ZT1hc3luYyBmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGFuZCBtdXN0IG5vdCBiZSBudWxsXCIpO2lmKHZvaWQgMCE9PWUuZGF0ZSYmIShlLmRhdGUgaW5zdGFuY2VvZiBEYXRlKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogXCJkYXRlXCIgbXVzdCBiZSBhIHZhbGlkIERhdGUgb2JqZWN0Jyk7aWYodm9pZCAwIT09ZS5leHBpcmVzJiZudWxsIT09ZS5leHBpcmVzJiYhKGUuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBcImV4cGlyZXNcIiBtdXN0IGJlIG51bGwgb3IgYSB2YWxpZCBEYXRlIG9iamVjdCcpO2lmKHQmJnQucmVtaW5kZXJEYXRlKXtpZighMT09PWUuYWxsb3dSZW1pbmRlcil0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBzcGVjaWZ5IGEgcmVtaW5kZXIgZGF0ZSBmb3IgYSBub3RpZmljYXRpb24gd2l0aCBcImFsbG93UmVtaW5kZXJcIiBvcHRpb24gc2V0IHRvIGZhbHNlLicpO2lmKCEodC5yZW1pbmRlckRhdGUgaW5zdGFuY2VvZiBEYXRlKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHJlbWluZGVyIE9wdGlvbnM6IFwiZGF0ZVwiIG11c3QgYSB2YWxpZCBEYXRlIG9iamVjdCcpO2lmKGUuZXhwaXJlcyYmZS5leHBpcmVzLmdldFRpbWUoKTx0LnJlbWluZGVyRGF0ZS5nZXRUaW1lKCkpdGhyb3cgbmV3IEVycm9yKFwiRXhwaXJhdGlvbiBkYXRlIG11c3Qgbm90IGJlIGVhcmxpZXIgdGhhbiByZW1pbmRlciBkYXRlLlwiKX12b2lkIDAhPT1lLmNhdGVnb3J5JiZudWxsIT09ZS5jYXRlZ29yeXx8KGUuY2F0ZWdvcnk9XCJkZWZhdWx0XCIpO2NvbnN0IG49YXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5DUkVBVEVfTk9USUZJQ0FUSU9OLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7ZGF0ZTplLmRhdGUmJmUuZGF0ZS52YWx1ZU9mKCksZXhwaXJlczplLmV4cGlyZXMmJmUuZXhwaXJlcy52YWx1ZU9mKCkscmVtaW5kZXI6KG51bGw9PXQ/dm9pZCAwOnQucmVtaW5kZXJEYXRlKSYmdC5yZW1pbmRlckRhdGUudmFsdWVPZigpfSkpO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbikse2RhdGU6bmV3IERhdGUobi5kYXRlKSxleHBpcmVzOm51bGwhPT1uLmV4cGlyZXM/bmV3IERhdGUobi5leHBpcmVzKTpudWxsfSl9LHQudXBkYXRlPWFzeW5jIGZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGFuZCBtdXN0IG5vdCBiZSBudWxsXCIpO2lmKCFlLmlkKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBcImlkXCIgbXVzdCBiZSBJZCBvZiBwcmV2aW91c2x5IGNyZWF0ZWQgTm90aWZpY2F0aW9uJyk7Y29uc3QgdD1hd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlVQREFURV9OT1RJRklDQVRJT04sT2JqZWN0LmFzc2lnbih7fSxlKSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sdCl9LHQuY2xlYXI9YXN5bmMgZnVuY3Rpb24oZSl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ0xFQVJfTk9USUZJQ0FUSU9OLHtpZDplfSl9LHQuZ2V0QWxsPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKGF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuR0VUX0FQUF9OT1RJRklDQVRJT05TLHZvaWQgMCkpLm1hcCgoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtpbmRpY2F0b3I6ZS5pbmRpY2F0b3J8fG51bGwsZGF0ZTpuZXcgRGF0ZShlLmRhdGUpLGV4cGlyZXM6bnVsbCE9PWUuZXhwaXJlcz9uZXcgRGF0ZShlLmV4cGlyZXMpOm51bGx9KSkpfSx0LmNsZWFyQWxsPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ0xFQVJfQVBQX05PVElGSUNBVElPTlMsdm9pZCAwKX0sdC50b2dnbGVOb3RpZmljYXRpb25DZW50ZXI9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5UT0dHTEVfTk9USUZJQ0FUSU9OX0NFTlRFUix2b2lkIDApfSx0LnNldERlZmF1bHRQbGF0Zm9ybVNob3J0Y3V0PWZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9ERUZBVUxUX1BMQVRGT1JNX1NIT1JUQ1VULGUpfSx0LnNob3c9YXN5bmMgZnVuY3Rpb24oZSl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0hPV19OT1RJRklDQVRJT05fQ0VOVEVSLGUpfSx0LmhpZGU9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5ISURFX05PVElGSUNBVElPTl9DRU5URVIsdm9pZCAwKX0sdC5nZXROb3RpZmljYXRpb25zQ291bnQ9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5HRVRfTk9USUZJQ0FUSU9OU19DT1VOVCx2b2lkIDApfSwodC5Vc2VyU2V0dGluZ3N8fCh0LlVzZXJTZXR0aW5ncz17fSkpLlNPVU5EX0VOQUJMRUQ9XCJzb3VuZEVuYWJsZWRcIix0LmdldFVzZXJTZXR0aW5nU3RhdHVzPWFzeW5jIGZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkdFVF9VU0VSX1NFVFRJTkdTX1NUQVRVUyxlKX0sdC5zZXRBbGxvd2VkT3JpZ2lucz1hc3luYyBlPT4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TRVRfTk9USUZJQ0FUSU9OX1NFQ1VSSVRZX1JVTEUse2FsbG93ZWRPcmlnaW5zOmV9KX0sNDY0NTE6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuaXNDb25uZWN0ZWRUb0F0TGVhc3Q9dC5nZXRTdGF0dXM9dm9pZCAwO2NvbnN0IHI9aShuKDQwNjUxKSksbz1uKDk1Nzg1KSxzPW4oMTExNTQpLGE9big1OTYwMyk7ZnVuY3Rpb24gYygpe3JldHVybigwLG8ud2l0aFN0cmljdFRpbWVvdXQpKDUwMCwoMCxzLnRyeVNlcnZpY2VEaXNwYXRjaCkoYS5BUElUb3BpYy5HRVRfUFJPVklERVJfU1RBVFVTLHZvaWQgMCksXCJcIikuY2F0Y2goKCgpPT4oe2Nvbm5lY3RlZDohMSx2ZXJzaW9uOm51bGwsdGVtcGxhdGVBUElWZXJzaW9uOm51bGx9KSkpfXQuZ2V0U3RhdHVzPWMsdC5pc0Nvbm5lY3RlZFRvQXRMZWFzdD1hc3luYyBmdW5jdGlvbihlKXtjb25zdCB0PWF3YWl0IGMoKTtpZih0LmNvbm5lY3RlZCYmbnVsbCE9PXQudmVyc2lvbil7Y29uc3Qgbj0oMCxyLmRlZmF1bHQpKHQudmVyc2lvbixlKTtpZigwPT09bnx8MT09PW4pcmV0dXJuITB9cmV0dXJuITF9fSw1ODc5OihlLHQsbik9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LnJlZ2lzdGVyPXQuQ2hhbm5lbENsaWVudEhhbmRsZXJzPXZvaWQgMDtjb25zdCBpPW4oNTk2MDMpLHI9bigzMzY1Nyksbz1uKDc1NzYyKSxzPW4oMjcxNjcpLGE9big0NjQ1MSk7Y2xhc3MgY3t9dC5DaGFubmVsQ2xpZW50SGFuZGxlcnM9YyxjLmhhbmRsZURlZmF1bHRBY3Rpb249KCk9PiExLGMuaGFuZGxlRXZlbnRBY3Rpb249ZT0+eygwLHIuZ2V0RXZlbnRSb3V0ZXIpKCkuZGlzcGF0Y2hFdmVudChlKX0sYy5oYW5kbGVXYXJuQWN0aW9uPWFzeW5jIGU9Pnthd2FpdCBvLkxvZy53YXJuKGUpfSxjLmhhbmRsZURpc2Nvbm5lY3Rpb249YXN5bmMoKT0+eygwLHMuZ2V0Q2hhbm5lbENsaWVudCkoKSYmKGF3YWl0IG8uTG9nLndhcm4oXCJEaXNjb25uZWN0ZWQgZnJvbSBOb3RpZmljYXRpb25zLiBSZWNvbm5lY3RpbmcuLi5cIiksKDAscy5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLGF3YWl0IGYoKSxhd2FpdCBkKCkpfTtsZXQgbD1udWxsO3QucmVnaXN0ZXI9YXN5bmMgZT0+e2lmKGwpcmV0dXJuIGw7dHJ5e3JldHVybiBsPXUoZSksYXdhaXQgbH1maW5hbGx5e2w9bnVsbH19O2NvbnN0IHU9YXN5bmMgZT0+e2lmKG51bGw9PWU/dm9pZCAwOmUuY3VzdG9tTWFuaWZlc3Qpe2lmKCFlLmN1c3RvbU1hbmlmZXN0Lm1hbmlmZXN0VXJsKXRocm93IG5ldyBFcnJvcihcIm1hbmlmZXN0VXJsIG11c3QgYmUgcHJvdmlkZWQuXCIpO2lmKCFlLmN1c3RvbU1hbmlmZXN0Lm1hbmlmZXN0VXVpZCl0aHJvdyBuZXcgRXJyb3IoXCJtYW5pZmVzdFV1aWQgbXVzdCBiZSBwcm92aWRlZCBhbmQgbXVzdCBub3QgYmUgYW4gZW1wdHkgc3RyaW5nLlwiKTtpZihlLmN1c3RvbU1hbmlmZXN0Lm1hbmlmZXN0VXVpZD09PWkuU0VSVklDRV9DSEFOTkVMKXRocm93IG5ldyBFcnJvcihgbWFuaWZlc3RVdWlkIG11c3Qgbm90IGJlICR7aS5TRVJWSUNFX0NIQU5ORUx9YCk7cy5DaGFubmVsQ2xpZW50Q29uZmlnLnNlcnZpY2VDaGFubmVsPWAke2UuY3VzdG9tTWFuaWZlc3QubWFuaWZlc3RVdWlkfS0ke2kuU0VSVklDRV9DSEFOTkVMfWAsYXdhaXQgZihlLmN1c3RvbU1hbmlmZXN0Lm1hbmlmZXN0VXJsKX1lbHNlIHMuQ2hhbm5lbENsaWVudENvbmZpZy5zZXJ2aWNlQ2hhbm5lbD1pLlNFUlZJQ0VfQ0hBTk5FTCxhd2FpdCBmKCk7cmV0dXJuIGF3YWl0IGQoKSx7Y2xpZW50QVBJVmVyc2lvbjpcIjIuOS4xLWFscGhhLTM4MjVcIixub3RpZmljYXRpb25zVmVyc2lvbjooYXdhaXQoMCxhLmdldFN0YXR1cykoKSkudmVyc2lvbnx8XCJ1bmtub3duXCJ9fSxmPWFzeW5jIGU9Pnt0cnl7Y29uc3QgdD13aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwid2luZG93c1wiKSxuPWV8fFwiZmluczovL3N5c3RlbS1hcHBzL25vdGlmaWNhdGlvbi1jZW50ZXJcIjt0Pyhhd2FpdCBvLkxvZy5pbmZvKFwiTGF1bmNoaW5nIE5vdGlmaWNhdGlvbnMgdmlhIGZpbi5TeXN0ZW0ubGF1bmNoTWFuaWZlc3QuLi5cIiksYXdhaXQgZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdChuLHtub1VpOiEwfSkpOihhd2FpdCBvLkxvZy5pbmZvKFwiTGF1bmNoaW5nIE5vdGlmaWNhdGlvbnMgdmlhIGZpbi5TeXN0ZW0ub3BlblVybFdpdGhCcm93c2VyLi4uXCIpLGF3YWl0IGZpbi5TeXN0ZW0ub3BlblVybFdpdGhCcm93c2VyKG4pKX1jYXRjaChlKXt0aHJvdyBlIGluc3RhbmNlb2YgRXJyb3I/YXdhaXQgby5Mb2cuZXJyb3IoYEZhaWxlZCB0byBsYXVuY2ggTm90aWZpY2F0aW9ucyAtICR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk6YXdhaXQgby5Mb2cuZXJyb3IoYEZhaWxlZCB0byBsYXVuY2ggTm90aWZpY2F0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkoZSl9YCksZX19LGQ9YXN5bmMoKT0+e3RyeXtjb25zdHtjaGFubmVsQ2xpZW50UHJvbWlzZTplLGlzSW5pdDp0fT0oMCxzLmluaXRBd2FpdGVkQ2hhbm5lbENsaWVudCkoKSxuPWF3YWl0IGU7dCYmKG4uc2V0RGVmYXVsdEFjdGlvbihjLmhhbmRsZURlZmF1bHRBY3Rpb24pLG4ucmVnaXN0ZXIoXCJldmVudFwiLGMuaGFuZGxlRXZlbnRBY3Rpb24pLG4ucmVnaXN0ZXIoXCJXQVJOXCIsYy5oYW5kbGVXYXJuQWN0aW9uKSxuLm9uRGlzY29ubmVjdGlvbihjLmhhbmRsZURpc2Nvbm5lY3Rpb24pLGZpbi5XaW5kb3cud3JhcFN5bmMoaS5TRVJWSUNFX0lERU5USVRZKS5vbmNlKFwiY2xvc2VkXCIsYy5oYW5kbGVEaXNjb25uZWN0aW9uKSl9Y2F0Y2goZSl7dGhyb3cgZSBpbnN0YW5jZW9mIEVycm9yP2F3YWl0IG8uTG9nLmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCB0byBOb3RpZmljYXRpb25zIC0gJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTphd2FpdCBvLkxvZy5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3QgdG8gTm90aWZpY2F0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkoZSl9YCksZX19fSwxMzE1NDooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw1MDI5NTooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw3NTA1MDooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw3ODM2NDooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw3MTQ3NDooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw5MDUxMjpmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKTtyJiYhKFwiZ2V0XCJpbiByPyF0Ll9fZXNNb2R1bGU6ci53cml0YWJsZXx8ci5jb25maWd1cmFibGUpfHwocj17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHIpfTpmdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKSxlW2ldPXRbbl19KSxyPXRoaXMmJnRoaXMuX19leHBvcnRTdGFyfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiPT09bnx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil8fGkodCxlLG4pfTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyKG4oNzgzNjQpLHQpLHIobig3MTQ3NCksdCkscihuKDQ0NDE1KSx0KSxyKG4oMTU5MTUpLHQpfSw0NDQxNTooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuVGVtcGxhdGVGcmFnbWVudE5hbWVzPXQuUHJlc2VudGF0aW9uVGVtcGxhdGVGcmFnbWVudE5hbWVzPXQuQ29udGFpbmVyVGVtcGxhdGVGcmFnbWVudE5hbWVzPXQuVGVtcGxhdGVOYW1lcz12b2lkIDAsdC5UZW1wbGF0ZU5hbWVzPXttYXJrZG93bjpcIm1hcmtkb3duXCIsbGlzdDpcImxpc3RcIixjdXN0b206XCJjdXN0b21cIn0sdC5Db250YWluZXJUZW1wbGF0ZUZyYWdtZW50TmFtZXM9e2NvbnRhaW5lcjpcImNvbnRhaW5lclwifSx0LlByZXNlbnRhdGlvblRlbXBsYXRlRnJhZ21lbnROYW1lcz17dGV4dDpcInRleHRcIixpbWFnZTpcImltYWdlXCIsbGlzdDpcImxpc3RcIixhY3Rpb25hYmxlVGV4dDpcImFjdGlvbmFibGVUZXh0XCJ9LHQuVGVtcGxhdGVGcmFnbWVudE5hbWVzPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0LkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lcyksdC5QcmVzZW50YXRpb25UZW1wbGF0ZUZyYWdtZW50TmFtZXMpfSwxNTkxNTooZSx0KT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSwyODE3MzooZSx0KT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtsZXQgbjt0cnl7bj1KU09OLnN0cmluZ2lmeShlKX1jYXRjaChlKXtuPXR9cmV0dXJuIG59T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5zYWZlU3RyaW5naWZ5PXQudmFsaWRhdGVFbnZpcm9ubWVudD10LnNhbml0aXplRXZlbnRUeXBlPXQuc2FuaXRpemVGdW5jdGlvbj12b2lkIDAsdC5zYW5pdGl6ZUZ1bmN0aW9uPWZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZDogJHtuKGUsXCJUaGUgcHJvdmlkZWQgdmFsdWVcIil9IGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uYCk7cmV0dXJuIGV9LHQuc2FuaXRpemVFdmVudFR5cGU9ZnVuY3Rpb24oZSl7aWYoXCJub3RpZmljYXRpb24tYWN0aW9uXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1jcmVhdGVkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi10b2FzdC1kaXNtaXNzZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLWNsb3NlZFwiPT09ZXx8XCJub3RpZmljYXRpb25zLWNvdW50LWNoYW5nZWRcIj09PWV8fFwibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1jcmVhdGVkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1yZW1vdmVkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1mb3JtLXZhbHVlcy1jaGFuZ2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1zb3VuZC10b2dnbGVkXCI9PT1lKXJldHVybiBlO3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBhcmd1bWVudCBwYXNzZWQ6ICR7bihlLFwiVGhlIHByb3ZpZGVkIGV2ZW50IHR5cGVcIil9IGlzIG5vdCBhIHZhbGlkIE5vdGlmaWNhdGlvbnMgZXZlbnQgdHlwZWApfSx0LnZhbGlkYXRlRW52aXJvbm1lbnQ9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZmluKXRocm93IG5ldyBFcnJvcihcImZpbiBpcyBub3QgZGVmaW5lZC4gVGhlIG9wZW5maW4tbm90aWZpY2F0aW9ucyBtb2R1bGUgaXMgb25seSBpbnRlbmRlZCBmb3IgdXNlIGluIGFuIE9wZW5GaW4gYXBwbGljYXRpb24uXCIpfSx0LnNhZmVTdHJpbmdpZnk9bn0sODA2NjQ6ZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKTt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbik7ciYmIShcImdldFwiaW4gcj8hdC5fX2VzTW9kdWxlOnIud3JpdGFibGV8fHIuY29uZmlndXJhYmxlKXx8KHI9e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxyKX06ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9biksZVtpXT10W25dfSkscj10aGlzJiZ0aGlzLl9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIj09PW58fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfHxpKHQsZSxuKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Ob3RpZmljYXRpb25zUmVnaXN0cmF0aW9uPXQucmVnaXN0ZXI9dm9pZCAwLHIobig0MDcwNyksdCk7dmFyIG89big1ODc5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInJlZ2lzdGVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG8ucmVnaXN0ZXJ9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJOb3RpZmljYXRpb25zUmVnaXN0cmF0aW9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG8uTm90aWZpY2F0aW9uc1JlZ2lzdHJhdGlvbn19KX19LHQ9e30sZnVuY3Rpb24gbihpKXt2YXIgcj10W2ldO2lmKHZvaWQgMCE9PXIpcmV0dXJuIHIuZXhwb3J0czt2YXIgbz10W2ldPXtleHBvcnRzOnt9fTtyZXR1cm4gZVtpXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmV4cG9ydHN9KDgwNjY0KTt2YXIgZSx0fSkpOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJMThuQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5leHBvcnQgZnVuY3Rpb24gSTE4bmV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBpMThuLFxuICAgIGRlZmF1bHROUyxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgaTE4bixcbiAgICBkZWZhdWx0TlNcbiAgfSksIFtpMThuLCBkZWZhdWx0TlNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSTE4bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZVxuICB9LCBjaGlsZHJlbik7XG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGVzVG9TdHJpbmcsIFRyYW5zIGFzIFRyYW5zV2l0aG91dENvbnRleHQgfSBmcm9tICcuL1RyYW5zV2l0aG91dENvbnRleHQuanMnO1xuaW1wb3J0IHsgZ2V0STE4biwgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuZXhwb3J0IHsgbm9kZXNUb1N0cmluZyB9O1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjb3VudCxcbiAgICBwYXJlbnQsXG4gICAgaTE4bktleSxcbiAgICBjb250ZXh0LFxuICAgIHRPcHRpb25zID0ge30sXG4gICAgdmFsdWVzLFxuICAgIGRlZmF1bHRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgbnMsXG4gICAgaTE4bjogaTE4bkZyb21Qcm9wcyxcbiAgICB0OiB0RnJvbVByb3BzLFxuICAgIHNob3VsZFVuZXNjYXBlLFxuICAgIC4uLmFkZGl0aW9uYWxQcm9wc1xuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dCxcbiAgICBkZWZhdWx0TlM6IGRlZmF1bHROU0Zyb21Db250ZXh0XG4gIH0gPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8IGdldEkxOG4oKTtcbiAgY29uc3QgdCA9IHRGcm9tUHJvcHMgfHwgaTE4biAmJiBpMThuLnQuYmluZChpMThuKTtcbiAgcmV0dXJuIFRyYW5zV2l0aG91dENvbnRleHQoe1xuICAgIGNoaWxkcmVuLFxuICAgIGNvdW50LFxuICAgIHBhcmVudCxcbiAgICBpMThuS2V5LFxuICAgIGNvbnRleHQsXG4gICAgdE9wdGlvbnMsXG4gICAgdmFsdWVzLFxuICAgIGRlZmF1bHRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgbnM6IG5zIHx8IHQgJiYgdC5ucyB8fCBkZWZhdWx0TlNGcm9tQ29udGV4dCB8fCBpMThuICYmIGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuZGVmYXVsdE5TLFxuICAgIGkxOG4sXG4gICAgdDogdEZyb21Qcm9wcyxcbiAgICBzaG91bGRVbmVzY2FwZSxcbiAgICAuLi5hZGRpdGlvbmFsUHJvcHNcbiAgfSk7XG59IiwiaW1wb3J0IHsgRnJhZ21lbnQsIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhUTUwgZnJvbSAnaHRtbC1wYXJzZS1zdHJpbmdpZnknO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nLCB3YXJuLCB3YXJuT25jZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCB7IGdldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5jb25zdCBoYXNDaGlsZHJlbiA9IChub2RlLCBjaGVja0xlbmd0aCkgPT4ge1xuICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgYmFzZSA9IG5vZGUucHJvcHMgPyBub2RlLnByb3BzLmNoaWxkcmVuIDogbm9kZS5jaGlsZHJlbjtcbiAgaWYgKGNoZWNrTGVuZ3RoKSByZXR1cm4gYmFzZS5sZW5ndGggPiAwO1xuICByZXR1cm4gISFiYXNlO1xufTtcbmNvbnN0IGdldENoaWxkcmVuID0gbm9kZSA9PiB7XG4gIGlmICghbm9kZSkgcmV0dXJuIFtdO1xuICBjb25zdCBjaGlsZHJlbiA9IG5vZGUucHJvcHMgPyBub2RlLnByb3BzLmNoaWxkcmVuIDogbm9kZS5jaGlsZHJlbjtcbiAgcmV0dXJuIG5vZGUucHJvcHMgJiYgbm9kZS5wcm9wcy5pMThuSXNEeW5hbWljTGlzdCA/IGdldEFzQXJyYXkoY2hpbGRyZW4pIDogY2hpbGRyZW47XG59O1xuY29uc3QgaGFzVmFsaWRSZWFjdENoaWxkcmVuID0gY2hpbGRyZW4gPT4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZXZlcnkoaXNWYWxpZEVsZW1lbnQpO1xuY29uc3QgZ2V0QXNBcnJheSA9IGRhdGEgPT4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG5jb25zdCBtZXJnZVByb3BzID0gKHNvdXJjZSwgdGFyZ2V0KSA9PiB7XG4gIGNvbnN0IG5ld1RhcmdldCA9IHtcbiAgICAuLi50YXJnZXRcbiAgfTtcbiAgbmV3VGFyZ2V0LnByb3BzID0gT2JqZWN0LmFzc2lnbihzb3VyY2UucHJvcHMsIHRhcmdldC5wcm9wcyk7XG4gIHJldHVybiBuZXdUYXJnZXQ7XG59O1xuZXhwb3J0IGNvbnN0IG5vZGVzVG9TdHJpbmcgPSAoY2hpbGRyZW4sIGkxOG5PcHRpb25zKSA9PiB7XG4gIGlmICghY2hpbGRyZW4pIHJldHVybiAnJztcbiAgbGV0IHN0cmluZ05vZGUgPSAnJztcbiAgY29uc3QgY2hpbGRyZW5BcnJheSA9IGdldEFzQXJyYXkoY2hpbGRyZW4pO1xuICBjb25zdCBrZWVwQXJyYXkgPSBpMThuT3B0aW9ucy50cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlcyAmJiBpMThuT3B0aW9ucy50cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvciA/IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIDogW107XG4gIGNoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2hpbGQsIGNoaWxkSW5kZXgpID0+IHtcbiAgICBpZiAoaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICBzdHJpbmdOb2RlICs9IGAke2NoaWxkfWA7XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHR5cGVcbiAgICAgIH0gPSBjaGlsZDtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNDb3VudCA9IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg7XG4gICAgICBjb25zdCBzaG91bGRLZWVwQ2hpbGQgPSBrZWVwQXJyYXkuaW5kZXhPZih0eXBlKSA+IC0xO1xuICAgICAgY29uc3QgY2hpbGRDaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgaWYgKCFjaGlsZENoaWxkcmVuICYmIHNob3VsZEtlZXBDaGlsZCAmJiAhY2hpbGRQcm9wc0NvdW50KSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke3R5cGV9Lz5gO1xuICAgICAgfSBlbHNlIGlmICghY2hpbGRDaGlsZHJlbiAmJiAoIXNob3VsZEtlZXBDaGlsZCB8fCBjaGlsZFByb3BzQ291bnQpIHx8IHByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0KSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke2NoaWxkSW5kZXh9PjwvJHtjaGlsZEluZGV4fT5gO1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRLZWVwQ2hpbGQgJiYgY2hpbGRQcm9wc0NvdW50ID09PSAxICYmIGlzU3RyaW5nKGNoaWxkQ2hpbGRyZW4pKSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gYDwke3R5cGV9PiR7Y2hpbGRDaGlsZHJlbn08LyR7dHlwZX0+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBub2Rlc1RvU3RyaW5nKGNoaWxkQ2hpbGRyZW4sIGkxOG5PcHRpb25zKTtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBgPCR7Y2hpbGRJbmRleH0+JHtjb250ZW50fTwvJHtjaGlsZEluZGV4fT5gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICAgIHdhcm4oYFRyYW5zOiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGludmFsaWQgLSBzZWVtcyB5b3UgcGFzc2VkIGluIGEgbnVsbCBjaGlsZC5gKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmb3JtYXQsXG4gICAgICAgIC4uLmNsb25lXG4gICAgICB9ID0gY2hpbGQ7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2xvbmUpO1xuICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0ID8gYCR7a2V5c1swXX0sICR7Zm9ybWF0fWAgOiBrZXlzWzBdO1xuICAgICAgICBzdHJpbmdOb2RlICs9IGB7eyR7dmFsdWV9fX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihgcmVhY3QtaTE4bmV4dDogdGhlIHBhc3NlZCBpbiBvYmplY3QgY29udGFpbmVkIG1vcmUgdGhhbiBvbmUgdmFyaWFibGUgLSB0aGUgb2JqZWN0IHNob3VsZCBsb29rIGxpa2Uge3sgdmFsdWUsIGZvcm1hdCB9fSB3aGVyZSBmb3JtYXQgaXMgb3B0aW9uYWwuYCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGBUcmFuczogdGhlIHBhc3NlZCBpbiB2YWx1ZSBpcyBpbnZhbGlkIC0gc2VlbXMgeW91IHBhc3NlZCBpbiBhIHZhcmlhYmxlIGxpa2Uge251bWJlcn0gLSBwbGVhc2UgcGFzcyBpbiB2YXJpYWJsZXMgZm9yIGludGVycG9sYXRpb24gYXMgZnVsbCBvYmplY3RzIGxpa2Uge3tudW1iZXJ9fS5gLCBjaGlsZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0cmluZ05vZGU7XG59O1xuY29uc3QgcmVuZGVyTm9kZXMgPSAoY2hpbGRyZW4sIHRhcmdldFN0cmluZywgaTE4biwgaTE4bk9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKSA9PiB7XG4gIGlmICh0YXJnZXRTdHJpbmcgPT09ICcnKSByZXR1cm4gW107XG4gIGNvbnN0IGtlZXBBcnJheSA9IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIHx8IFtdO1xuICBjb25zdCBlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZyA9IHRhcmdldFN0cmluZyAmJiBuZXcgUmVnRXhwKGtlZXBBcnJheS5tYXAoa2VlcCA9PiBgPCR7a2VlcH1gKS5qb2luKCd8JykpLnRlc3QodGFyZ2V0U3RyaW5nKTtcbiAgaWYgKCFjaGlsZHJlbiAmJiAhZW1wdHlDaGlsZHJlbkJ1dE5lZWRzSGFuZGxpbmcgJiYgIXNob3VsZFVuZXNjYXBlKSByZXR1cm4gW3RhcmdldFN0cmluZ107XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgY29uc3QgZ2V0RGF0YSA9IGNoaWxkcyA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IGdldEFzQXJyYXkoY2hpbGRzKTtcbiAgICBjaGlsZHJlbkFycmF5LmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGlzU3RyaW5nKGNoaWxkKSkgcmV0dXJuO1xuICAgICAgaWYgKGhhc0NoaWxkcmVuKGNoaWxkKSkgZ2V0RGF0YShnZXRDaGlsZHJlbihjaGlsZCkpO2Vsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSAmJiAhaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSBPYmplY3QuYXNzaWduKGRhdGEsIGNoaWxkKTtcbiAgICB9KTtcbiAgfTtcbiAgZ2V0RGF0YShjaGlsZHJlbik7XG4gIGNvbnN0IGFzdCA9IEhUTUwucGFyc2UoYDwwPiR7dGFyZ2V0U3RyaW5nfTwvMD5gKTtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICAuLi5kYXRhLFxuICAgIC4uLmNvbWJpbmVkVE9wdHNcbiAgfTtcbiAgY29uc3QgcmVuZGVySW5uZXIgPSAoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZHMgPSBnZXRDaGlsZHJlbihjaGlsZCk7XG4gICAgY29uc3QgbWFwcGVkQ2hpbGRyZW4gPSBtYXBBU1QoY2hpbGRzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICByZXR1cm4gaGFzVmFsaWRSZWFjdENoaWxkcmVuKGNoaWxkcykgJiYgbWFwcGVkQ2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0ID8gY2hpbGRzIDogbWFwcGVkQ2hpbGRyZW47XG4gIH07XG4gIGNvbnN0IHB1c2hUcmFuc2xhdGVkSlNYID0gKGNoaWxkLCBpbm5lciwgbWVtLCBpLCBpc1ZvaWQpID0+IHtcbiAgICBpZiAoY2hpbGQuZHVtbXkpIHtcbiAgICAgIGNoaWxkLmNoaWxkcmVuID0gaW5uZXI7XG4gICAgICBtZW0ucHVzaChjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAga2V5OiBpXG4gICAgICB9LCBpc1ZvaWQgPyB1bmRlZmluZWQgOiBpbm5lcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW0ucHVzaCguLi5DaGlsZHJlbi5tYXAoW2NoaWxkXSwgYyA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgIC4uLmMucHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0O1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjLnR5cGUsIHtcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgcmVmOiBjLnJlZlxuICAgICAgICB9LCBpc1ZvaWQgPyBudWxsIDogaW5uZXIpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbWFwQVNUID0gKHJlYWN0Tm9kZSwgYXN0Tm9kZSwgcm9vdFJlYWN0Tm9kZSkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Tm9kZXMgPSBnZXRBc0FycmF5KHJlYWN0Tm9kZSk7XG4gICAgY29uc3QgYXN0Tm9kZXMgPSBnZXRBc0FycmF5KGFzdE5vZGUpO1xuICAgIHJldHVybiBhc3ROb2Rlcy5yZWR1Y2UoKG1lbSwgbm9kZSwgaSkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRpb25Db250ZW50ID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuWzBdICYmIG5vZGUuY2hpbGRyZW5bMF0uY29udGVudCAmJiBpMThuLnNlcnZpY2VzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShub2RlLmNoaWxkcmVuWzBdLmNvbnRlbnQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RhZycpIHtcbiAgICAgICAgbGV0IHRtcCA9IHJlYWN0Tm9kZXNbcGFyc2VJbnQobm9kZS5uYW1lLCAxMCldO1xuICAgICAgICBpZiAocm9vdFJlYWN0Tm9kZS5sZW5ndGggPT09IDEgJiYgIXRtcCkgdG1wID0gcm9vdFJlYWN0Tm9kZVswXVtub2RlLm5hbWVdO1xuICAgICAgICBpZiAoIXRtcCkgdG1wID0ge307XG4gICAgICAgIGNvbnN0IGNoaWxkID0gT2JqZWN0LmtleXMobm9kZS5hdHRycykubGVuZ3RoICE9PSAwID8gbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgcHJvcHM6IG5vZGUuYXR0cnNcbiAgICAgICAgfSwgdG1wKSA6IHRtcDtcbiAgICAgICAgY29uc3QgaXNFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQoY2hpbGQpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkVHJhbnNsYXRpb25XaXRoQ2hpbGRyZW4gPSBpc0VsZW1lbnQgJiYgaGFzQ2hpbGRyZW4obm9kZSwgdHJ1ZSkgJiYgIW5vZGUudm9pZEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlUcmFuc1dpdGhIVE1MID0gZW1wdHlDaGlsZHJlbkJ1dE5lZWRzSGFuZGxpbmcgJiYgaXNPYmplY3QoY2hpbGQpICYmIGNoaWxkLmR1bW15ICYmICFpc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzS25vd25Db21wb25lbnQgPSBpc09iamVjdChjaGlsZHJlbikgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY2hpbGRyZW4sIG5vZGUubmFtZSk7XG4gICAgICAgIGlmIChpc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKGNoaWxkLCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcbiAgICAgICAgICBtZW0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ2hpbGRyZW4oY2hpbGQpIHx8IGlzVmFsaWRUcmFuc2xhdGlvbldpdGhDaGlsZHJlbikge1xuICAgICAgICAgIGNvbnN0IGlubmVyID0gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0VtcHR5VHJhbnNXaXRoSFRNTCkge1xuICAgICAgICAgIGNvbnN0IGlubmVyID0gbWFwQVNUKHJlYWN0Tm9kZXMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VGbG9hdChub2RlLm5hbWUpKSkge1xuICAgICAgICAgIGlmIChpc0tub3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lciA9IHJlbmRlcklubmVyKGNoaWxkLCBub2RlLCByb290UmVhY3ROb2RlKTtcbiAgICAgICAgICAgIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpLCBub2RlLnZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGkxOG5PcHRpb25zLnRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzICYmIGtlZXBBcnJheS5pbmRleE9mKG5vZGUubmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudm9pZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgbWVtLnB1c2goY3JlYXRlRWxlbWVudChub2RlLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGAke25vZGUubmFtZX0tJHtpfWBcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG4gICAgICAgICAgICAgIG1lbS5wdXNoKGNyZWF0ZUVsZW1lbnQobm9kZS5uYW1lLCB7XG4gICAgICAgICAgICAgICAga2V5OiBgJHtub2RlLm5hbWV9LSR7aX1gXG4gICAgICAgICAgICAgIH0sIGlubmVyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICBtZW0ucHVzaChgPCR7bm9kZS5uYW1lfSAvPmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lciA9IG1hcEFTVChyZWFjdE5vZGVzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICAgICAgICAgIG1lbS5wdXNoKGA8JHtub2RlLm5hbWV9PiR7aW5uZXJ9PC8ke25vZGUubmFtZX0+YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkKSAmJiAhaXNFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IG5vZGUuY2hpbGRyZW5bMF0gPyB0cmFuc2xhdGlvbkNvbnRlbnQgOiBudWxsO1xuICAgICAgICAgIGlmIChjb250ZW50KSBtZW0ucHVzaChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoVHJhbnNsYXRlZEpTWChjaGlsZCwgdHJhbnNsYXRpb25Db250ZW50LCBtZW0sIGksIG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8ICF0cmFuc2xhdGlvbkNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZXMgPSBpMThuT3B0aW9ucy50cmFuc1dyYXBUZXh0Tm9kZXM7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaG91bGRVbmVzY2FwZSA/IGkxOG5PcHRpb25zLnVuZXNjYXBlKGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKG5vZGUuY29udGVudCwgb3B0cywgaTE4bi5sYW5ndWFnZSkpIDogaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcbiAgICAgICAgaWYgKHdyYXBUZXh0Tm9kZXMpIHtcbiAgICAgICAgICBtZW0ucHVzaChjcmVhdGVFbGVtZW50KHdyYXBUZXh0Tm9kZXMsIHtcbiAgICAgICAgICAgIGtleTogYCR7bm9kZS5uYW1lfS0ke2l9YFxuICAgICAgICAgIH0sIGNvbnRlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW0ucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbTtcbiAgICB9LCBbXSk7XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IG1hcEFTVChbe1xuICAgIGR1bW15OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICB9XSwgYXN0LCBnZXRBc0FycmF5KGNoaWxkcmVuIHx8IFtdKSk7XG4gIHJldHVybiBnZXRDaGlsZHJlbihyZXN1bHRbMF0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBUcmFucyhfcmVmKSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY291bnQsXG4gICAgcGFyZW50LFxuICAgIGkxOG5LZXksXG4gICAgY29udGV4dCxcbiAgICB0T3B0aW9ucyA9IHt9LFxuICAgIHZhbHVlcyxcbiAgICBkZWZhdWx0cyxcbiAgICBjb21wb25lbnRzLFxuICAgIG5zLFxuICAgIGkxOG46IGkxOG5Gcm9tUHJvcHMsXG4gICAgdDogdEZyb21Qcm9wcyxcbiAgICBzaG91bGRVbmVzY2FwZSxcbiAgICAuLi5hZGRpdGlvbmFsUHJvcHNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGdldEkxOG4oKTtcbiAgaWYgKCFpMThuKSB7XG4gICAgd2Fybk9uY2UoJ1lvdSB3aWxsIG5lZWQgdG8gcGFzcyBpbiBhbiBpMThuZXh0IGluc3RhbmNlIGJ5IHVzaW5nIGkxOG5leHRSZWFjdE1vZHVsZScpO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICBjb25zdCB0ID0gdEZyb21Qcm9wcyB8fCBpMThuLnQuYmluZChpMThuKSB8fCAoayA9PiBrKTtcbiAgY29uc3QgcmVhY3RJMThuZXh0T3B0aW9ucyA9IHtcbiAgICAuLi5nZXREZWZhdWx0cygpLFxuICAgIC4uLihpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLnJlYWN0KVxuICB9O1xuICBsZXQgbmFtZXNwYWNlcyA9IG5zIHx8IHQubnMgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddO1xuICBjb25zdCBub2RlQXNTdHJpbmcgPSBub2Rlc1RvU3RyaW5nKGNoaWxkcmVuLCByZWFjdEkxOG5leHRPcHRpb25zKTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gZGVmYXVsdHMgfHwgbm9kZUFzU3RyaW5nIHx8IHJlYWN0STE4bmV4dE9wdGlvbnMudHJhbnNFbXB0eU5vZGVWYWx1ZSB8fCBpMThuS2V5O1xuICBjb25zdCB7XG4gICAgaGFzaFRyYW5zS2V5XG4gIH0gPSByZWFjdEkxOG5leHRPcHRpb25zO1xuICBjb25zdCBrZXkgPSBpMThuS2V5IHx8IChoYXNoVHJhbnNLZXkgPyBoYXNoVHJhbnNLZXkobm9kZUFzU3RyaW5nIHx8IGRlZmF1bHRWYWx1ZSkgOiBub2RlQXNTdHJpbmcgfHwgZGVmYXVsdFZhbHVlKTtcbiAgaWYgKGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBpMThuLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSB7XG4gICAgdmFsdWVzID0gdmFsdWVzICYmIE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID4gMCA/IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIC4uLmkxOG4ub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXNcbiAgICB9IDoge1xuICAgICAgLi4uaTE4bi5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlc1xuICAgIH07XG4gIH1cbiAgY29uc3QgaW50ZXJwb2xhdGlvbk92ZXJyaWRlID0gdmFsdWVzIHx8IGNvdW50ICE9PSB1bmRlZmluZWQgfHwgIWNoaWxkcmVuID8gdE9wdGlvbnMuaW50ZXJwb2xhdGlvbiA6IHtcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAuLi50T3B0aW9ucy5pbnRlcnBvbGF0aW9uLFxuICAgICAgcHJlZml4OiAnIyQ/JyxcbiAgICAgIHN1ZmZpeDogJz8kIydcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbWJpbmVkVE9wdHMgPSB7XG4gICAgLi4udE9wdGlvbnMsXG4gICAgY29udGV4dDogY29udGV4dCB8fCB0T3B0aW9ucy5jb250ZXh0LFxuICAgIGNvdW50LFxuICAgIC4uLnZhbHVlcyxcbiAgICAuLi5pbnRlcnBvbGF0aW9uT3ZlcnJpZGUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIG5zOiBuYW1lc3BhY2VzXG4gIH07XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0ga2V5ID8gdChrZXksIGNvbWJpbmVkVE9wdHMpIDogZGVmYXVsdFZhbHVlO1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goYyA9PiB7XG4gICAgICBjb25zdCBjb21wID0gY29tcG9uZW50c1tjXTtcbiAgICAgIGlmICh0eXBlb2YgY29tcC50eXBlID09PSAnZnVuY3Rpb24nIHx8ICFjb21wLnByb3BzIHx8ICFjb21wLnByb3BzLmNoaWxkcmVuIHx8IHRyYW5zbGF0aW9uLmluZGV4T2YoYCR7Y30vPmApIDwgMCAmJiB0cmFuc2xhdGlvbi5pbmRleE9mKGAke2N9IC8+YCkgPCAwKSByZXR1cm47XG4gICAgICBmdW5jdGlvbiBDb21wb25lbnRpemVkKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY29tcCk7XG4gICAgICB9XG4gICAgICBjb21wb25lbnRzW2NdID0gY3JlYXRlRWxlbWVudChDb21wb25lbnRpemVkKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gcmVuZGVyTm9kZXMoY29tcG9uZW50cyB8fCBjaGlsZHJlbiwgdHJhbnNsYXRpb24sIGkxOG4sIHJlYWN0STE4bmV4dE9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKTtcbiAgY29uc3QgdXNlQXNQYXJlbnQgPSBwYXJlbnQgIT09IHVuZGVmaW5lZCA/IHBhcmVudCA6IHJlYWN0STE4bmV4dE9wdGlvbnMuZGVmYXVsdFRyYW5zUGFyZW50O1xuICByZXR1cm4gdXNlQXNQYXJlbnQgPyBjcmVhdGVFbGVtZW50KHVzZUFzUGFyZW50LCBhZGRpdGlvbmFsUHJvcHMsIGNvbnRlbnQpIDogY29udGVudDtcbn0iLCJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4vdXNlVHJhbnNsYXRpb24uanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBucyxcbiAgICBjaGlsZHJlbixcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW3QsIGkxOG4sIHJlYWR5XSA9IHVzZVRyYW5zbGF0aW9uKG5zLCBvcHRpb25zKTtcbiAgcmV0dXJuIGNoaWxkcmVuKHQsIHtcbiAgICBpMThuLFxuICAgIGxuZzogaTE4bi5sYW5ndWFnZVxuICB9LCByZWFkeSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERlZmF1bHRzLCBzZXREZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xuaW1wb3J0IHsgZ2V0STE4biwgc2V0STE4biB9IGZyb20gJy4vaTE4bkluc3RhbmNlLmpzJztcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICcuL2luaXRSZWFjdEkxOG5leHQuanMnO1xuZXhwb3J0IHsgZ2V0RGVmYXVsdHMsIHNldERlZmF1bHRzLCBnZXRJMThuLCBzZXRJMThuLCBpbml0UmVhY3RJMThuZXh0IH07XG5leHBvcnQgY29uc3QgSTE4bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgY2xhc3MgUmVwb3J0TmFtZXNwYWNlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlZE5hbWVzcGFjZXMgPSB7fTtcbiAgfVxuICBhZGRVc2VkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSB7XG4gICAgbmFtZXNwYWNlcy5mb3JFYWNoKG5zID0+IHtcbiAgICAgIGlmICghdGhpcy51c2VkTmFtZXNwYWNlc1tuc10pIHRoaXMudXNlZE5hbWVzcGFjZXNbbnNdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBnZXRVc2VkTmFtZXNwYWNlcyA9ICgpID0+IE9iamVjdC5rZXlzKHRoaXMudXNlZE5hbWVzcGFjZXMpO1xufVxuZXhwb3J0IGNvbnN0IGNvbXBvc2VJbml0aWFsUHJvcHMgPSBGb3JDb21wb25lbnQgPT4gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgY29tcG9uZW50c0luaXRpYWxQcm9wcyA9IEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBGb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fTtcbiAgY29uc3QgaTE4bkluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wcygpO1xuICByZXR1cm4ge1xuICAgIC4uLmNvbXBvbmVudHNJbml0aWFsUHJvcHMsXG4gICAgLi4uaTE4bkluaXRpYWxQcm9wc1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGkxOG4gPSBnZXRJMThuKCk7XG4gIGNvbnN0IG5hbWVzcGFjZXMgPSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPyBpMThuLnJlcG9ydE5hbWVzcGFjZXMuZ2V0VXNlZE5hbWVzcGFjZXMoKSA6IFtdO1xuICBjb25zdCByZXQgPSB7fTtcbiAgY29uc3QgaW5pdGlhbEkxOG5TdG9yZSA9IHt9O1xuICBpMThuLmxhbmd1YWdlcy5mb3JFYWNoKGwgPT4ge1xuICAgIGluaXRpYWxJMThuU3RvcmVbbF0gPSB7fTtcbiAgICBuYW1lc3BhY2VzLmZvckVhY2gobnMgPT4ge1xuICAgICAgaW5pdGlhbEkxOG5TdG9yZVtsXVtuc10gPSBpMThuLmdldFJlc291cmNlQnVuZGxlKGwsIG5zKSB8fCB7fTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldC5pbml0aWFsSTE4blN0b3JlID0gaW5pdGlhbEkxOG5TdG9yZTtcbiAgcmV0LmluaXRpYWxMYW5ndWFnZSA9IGkxOG4ubGFuZ3VhZ2U7XG4gIHJldHVybiByZXQ7XG59OyIsImltcG9ydCB7IHVuZXNjYXBlIH0gZnJvbSAnLi91bmVzY2FwZS5qcyc7XG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGJpbmRJMThuOiAnbGFuZ3VhZ2VDaGFuZ2VkJyxcbiAgYmluZEkxOG5TdG9yZTogJycsXG4gIHRyYW5zRW1wdHlOb2RlVmFsdWU6ICcnLFxuICB0cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlczogdHJ1ZSxcbiAgdHJhbnNXcmFwVGV4dE5vZGVzOiAnJyxcbiAgdHJhbnNLZWVwQmFzaWNIdG1sTm9kZXNGb3I6IFsnYnInLCAnc3Ryb25nJywgJ2knLCAncCddLFxuICB1c2VTdXNwZW5zZTogdHJ1ZSxcbiAgdW5lc2NhcGVcbn07XG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0cyA9ICgpID0+IGRlZmF1bHRPcHRpb25zOyIsImxldCBpMThuSW5zdGFuY2U7XG5leHBvcnQgY29uc3Qgc2V0STE4biA9IGluc3RhbmNlID0+IHtcbiAgaTE4bkluc3RhbmNlID0gaW5zdGFuY2U7XG59O1xuZXhwb3J0IGNvbnN0IGdldEkxOG4gPSAoKSA9PiBpMThuSW5zdGFuY2U7IiwiZXhwb3J0IHsgVHJhbnMgfSBmcm9tICcuL1RyYW5zLmpzJztcbmV4cG9ydCB7IFRyYW5zIGFzIFRyYW5zV2l0aG91dENvbnRleHQgfSBmcm9tICcuL1RyYW5zV2l0aG91dENvbnRleHQuanMnO1xuZXhwb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuL3VzZVRyYW5zbGF0aW9uLmpzJztcbmV4cG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4vd2l0aFRyYW5zbGF0aW9uLmpzJztcbmV4cG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi9UcmFuc2xhdGlvbi5qcyc7XG5leHBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICcuL0kxOG5leHRQcm92aWRlci5qcyc7XG5leHBvcnQgeyB3aXRoU1NSIH0gZnJvbSAnLi93aXRoU1NSLmpzJztcbmV4cG9ydCB7IHVzZVNTUiB9IGZyb20gJy4vdXNlU1NSLmpzJztcbmV4cG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICcuL2luaXRSZWFjdEkxOG5leHQuanMnO1xuZXhwb3J0IHsgc2V0RGVmYXVsdHMsIGdldERlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5leHBvcnQgeyBzZXRJMThuLCBnZXRJMThuIH0gZnJvbSAnLi9pMThuSW5zdGFuY2UuanMnO1xuZXhwb3J0IHsgSTE4bkNvbnRleHQsIGNvbXBvc2VJbml0aWFsUHJvcHMsIGdldEluaXRpYWxQcm9wcyB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5leHBvcnQgY29uc3QgZGF0ZSA9ICgpID0+ICcnO1xuZXhwb3J0IGNvbnN0IHRpbWUgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBudW1iZXIgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBzZWxlY3QgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBwbHVyYWwgPSAoKSA9PiAnJztcbmV4cG9ydCBjb25zdCBzZWxlY3RPcmRpbmFsID0gKCkgPT4gJyc7IiwiaW1wb3J0IHsgc2V0RGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCB7IHNldEkxOG4gfSBmcm9tICcuL2kxOG5JbnN0YW5jZS5qcyc7XG5leHBvcnQgY29uc3QgaW5pdFJlYWN0STE4bmV4dCA9IHtcbiAgdHlwZTogJzNyZFBhcnR5JyxcbiAgaW5pdChpbnN0YW5jZSkge1xuICAgIHNldERlZmF1bHRzKGluc3RhbmNlLm9wdGlvbnMucmVhY3QpO1xuICAgIHNldEkxOG4oaW5zdGFuY2UpO1xuICB9XG59OyIsImNvbnN0IG1hdGNoSHRtbEVudGl0eSA9IC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MHxjb3B5fCMxNjl8cmVnfCMxNzR8aGVsbGlwfCM4MjMwfCN4MkZ8IzQ3KTsvZztcbmNvbnN0IGh0bWxFbnRpdGllcyA9IHtcbiAgJyZhbXA7JzogJyYnLFxuICAnJiMzODsnOiAnJicsXG4gICcmbHQ7JzogJzwnLFxuICAnJiM2MDsnOiAnPCcsXG4gICcmZ3Q7JzogJz4nLFxuICAnJiM2MjsnOiAnPicsXG4gICcmYXBvczsnOiBcIidcIixcbiAgJyYjMzk7JzogXCInXCIsXG4gICcmcXVvdDsnOiAnXCInLFxuICAnJiMzNDsnOiAnXCInLFxuICAnJm5ic3A7JzogJyAnLFxuICAnJiMxNjA7JzogJyAnLFxuICAnJmNvcHk7JzogJ8KpJyxcbiAgJyYjMTY5Oyc6ICfCqScsXG4gICcmcmVnOyc6ICfCricsXG4gICcmIzE3NDsnOiAnwq4nLFxuICAnJmhlbGxpcDsnOiAn4oCmJyxcbiAgJyYjODIzMDsnOiAn4oCmJyxcbiAgJyYjeDJGOyc6ICcvJyxcbiAgJyYjNDc7JzogJy8nXG59O1xuY29uc3QgdW5lc2NhcGVIdG1sRW50aXR5ID0gbSA9PiBodG1sRW50aXRpZXNbbV07XG5leHBvcnQgY29uc3QgdW5lc2NhcGUgPSB0ZXh0ID0+IHRleHQucmVwbGFjZShtYXRjaEh0bWxFbnRpdHksIHVuZXNjYXBlSHRtbEVudGl0eSk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEkxOG4sIEkxOG5Db250ZXh0IH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmV4cG9ydCBjb25zdCB1c2VTU1IgPSBmdW5jdGlvbiAoaW5pdGlhbEkxOG5TdG9yZSwgaW5pdGlhbExhbmd1YWdlKSB7XG4gIGxldCBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGNvbnN0IHtcbiAgICBpMThuOiBpMThuRnJvbVByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dFxuICB9ID0gdXNlQ29udGV4dChJMThuQ29udGV4dCkgfHwge307XG4gIGNvbnN0IGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGkxOG5Gcm9tQ29udGV4dCB8fCBnZXRJMThuKCk7XG4gIGlmIChpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmlzQ2xvbmUpIHJldHVybjtcbiAgaWYgKGluaXRpYWxJMThuU3RvcmUgJiYgIWkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIHtcbiAgICBpMThuLnNlcnZpY2VzLnJlc291cmNlU3RvcmUuZGF0YSA9IGluaXRpYWxJMThuU3RvcmU7XG4gICAgaTE4bi5vcHRpb25zLm5zID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsSTE4blN0b3JlKS5yZWR1Y2UoKG1lbSwgbG5nUmVzb3VyY2VzKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhsbmdSZXNvdXJjZXMpLmZvckVhY2gobnMgPT4ge1xuICAgICAgICBpZiAobWVtLmluZGV4T2YobnMpIDwgMCkgbWVtLnB1c2gobnMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIGkxOG4ub3B0aW9ucy5ucyk7XG4gICAgaTE4bi5pbml0aWFsaXplZFN0b3JlT25jZSA9IHRydWU7XG4gICAgaTE4bi5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoaW5pdGlhbExhbmd1YWdlICYmICFpMThuLmluaXRpYWxpemVkTGFuZ3VhZ2VPbmNlKSB7XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShpbml0aWFsTGFuZ3VhZ2UpO1xuICAgIGkxOG4uaW5pdGlhbGl6ZWRMYW5ndWFnZU9uY2UgPSB0cnVlO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRJMThuLCBnZXREZWZhdWx0cywgUmVwb3J0TmFtZXNwYWNlcywgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgd2Fybk9uY2UsIGxvYWROYW1lc3BhY2VzLCBsb2FkTGFuZ3VhZ2VzLCBoYXNMb2FkZWROYW1lc3BhY2UsIGlzU3RyaW5nLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMuanMnO1xuY29uc3QgdXNlUHJldmlvdXMgPSAodmFsdWUsIGlnbm9yZSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IGlnbm9yZSA/IHJlZi5jdXJyZW50IDogdmFsdWU7XG4gIH0sIFt2YWx1ZSwgaWdub3JlXSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn07XG5jb25zdCBhbHdheXNOZXdUID0gKGkxOG4sIGxhbmd1YWdlLCBuYW1lc3BhY2UsIGtleVByZWZpeCkgPT4gaTE4bi5nZXRGaXhlZFQobGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4KTtcbmNvbnN0IHVzZU1lbW9pemVkVCA9IChpMThuLCBsYW5ndWFnZSwgbmFtZXNwYWNlLCBrZXlQcmVmaXgpID0+IHVzZUNhbGxiYWNrKGFsd2F5c05ld1QoaTE4biwgbGFuZ3VhZ2UsIG5hbWVzcGFjZSwga2V5UHJlZml4KSwgW2kxOG4sIGxhbmd1YWdlLCBuYW1lc3BhY2UsIGtleVByZWZpeF0pO1xuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKG5zKSB7XG4gIGxldCBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGNvbnN0IHtcbiAgICBpMThuOiBpMThuRnJvbVByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGkxOG46IGkxOG5Gcm9tQ29udGV4dCxcbiAgICBkZWZhdWx0TlM6IGRlZmF1bHROU0Zyb21Db250ZXh0XG4gIH0gPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fTtcbiAgY29uc3QgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8IGdldEkxOG4oKTtcbiAgaWYgKGkxOG4gJiYgIWkxOG4ucmVwb3J0TmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzID0gbmV3IFJlcG9ydE5hbWVzcGFjZXMoKTtcbiAgaWYgKCFpMThuKSB7XG4gICAgd2Fybk9uY2UoJ1lvdSB3aWxsIG5lZWQgdG8gcGFzcyBpbiBhbiBpMThuZXh0IGluc3RhbmNlIGJ5IHVzaW5nIGluaXRSZWFjdEkxOG5leHQnKTtcbiAgICBjb25zdCBub3RSZWFkeVQgPSAoaywgb3B0c09yRGVmYXVsdFZhbHVlKSA9PiB7XG4gICAgICBpZiAoaXNTdHJpbmcob3B0c09yRGVmYXVsdFZhbHVlKSkgcmV0dXJuIG9wdHNPckRlZmF1bHRWYWx1ZTtcbiAgICAgIGlmIChpc09iamVjdChvcHRzT3JEZWZhdWx0VmFsdWUpICYmIGlzU3RyaW5nKG9wdHNPckRlZmF1bHRWYWx1ZS5kZWZhdWx0VmFsdWUpKSByZXR1cm4gb3B0c09yRGVmYXVsdFZhbHVlLmRlZmF1bHRWYWx1ZTtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGspID8ga1trLmxlbmd0aCAtIDFdIDogaztcbiAgICB9O1xuICAgIGNvbnN0IHJldE5vdFJlYWR5ID0gW25vdFJlYWR5VCwge30sIGZhbHNlXTtcbiAgICByZXROb3RSZWFkeS50ID0gbm90UmVhZHlUO1xuICAgIHJldE5vdFJlYWR5LmkxOG4gPSB7fTtcbiAgICByZXROb3RSZWFkeS5yZWFkeSA9IGZhbHNlO1xuICAgIHJldHVybiByZXROb3RSZWFkeTtcbiAgfVxuICBpZiAoaTE4bi5vcHRpb25zLnJlYWN0ICYmIGkxOG4ub3B0aW9ucy5yZWFjdC53YWl0ICE9PSB1bmRlZmluZWQpIHdhcm5PbmNlKCdJdCBzZWVtcyB5b3UgYXJlIHN0aWxsIHVzaW5nIHRoZSBvbGQgd2FpdCBvcHRpb24sIHlvdSBtYXkgbWlncmF0ZSB0byB0aGUgbmV3IHVzZVN1c3BlbnNlIGJlaGF2aW91ci4nKTtcbiAgY29uc3QgaTE4bk9wdGlvbnMgPSB7XG4gICAgLi4uZ2V0RGVmYXVsdHMoKSxcbiAgICAuLi5pMThuLm9wdGlvbnMucmVhY3QsXG4gICAgLi4ucHJvcHNcbiAgfTtcbiAgY29uc3Qge1xuICAgIHVzZVN1c3BlbnNlLFxuICAgIGtleVByZWZpeFxuICB9ID0gaTE4bk9wdGlvbnM7XG4gIGxldCBuYW1lc3BhY2VzID0gbnMgfHwgZGVmYXVsdE5TRnJvbUNvbnRleHQgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSBpc1N0cmluZyhuYW1lc3BhY2VzKSA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddO1xuICBpZiAoaTE4bi5yZXBvcnROYW1lc3BhY2VzLmFkZFVzZWROYW1lc3BhY2VzKSBpMThuLnJlcG9ydE5hbWVzcGFjZXMuYWRkVXNlZE5hbWVzcGFjZXMobmFtZXNwYWNlcyk7XG4gIGNvbnN0IHJlYWR5ID0gKGkxOG4uaXNJbml0aWFsaXplZCB8fCBpMThuLmluaXRpYWxpemVkU3RvcmVPbmNlKSAmJiBuYW1lc3BhY2VzLmV2ZXJ5KG4gPT4gaGFzTG9hZGVkTmFtZXNwYWNlKG4sIGkxOG4sIGkxOG5PcHRpb25zKSk7XG4gIGNvbnN0IG1lbW9HZXRUID0gdXNlTWVtb2l6ZWRUKGkxOG4sIHByb3BzLmxuZyB8fCBudWxsLCBpMThuT3B0aW9ucy5uc01vZGUgPT09ICdmYWxsYmFjaycgPyBuYW1lc3BhY2VzIDogbmFtZXNwYWNlc1swXSwga2V5UHJlZml4KTtcbiAgY29uc3QgZ2V0VCA9ICgpID0+IG1lbW9HZXRUO1xuICBjb25zdCBnZXROZXdUID0gKCkgPT4gYWx3YXlzTmV3VChpMThuLCBwcm9wcy5sbmcgfHwgbnVsbCwgaTE4bk9wdGlvbnMubnNNb2RlID09PSAnZmFsbGJhY2snID8gbmFtZXNwYWNlcyA6IG5hbWVzcGFjZXNbMF0sIGtleVByZWZpeCk7XG4gIGNvbnN0IFt0LCBzZXRUXSA9IHVzZVN0YXRlKGdldFQpO1xuICBsZXQgam9pbmVkTlMgPSBuYW1lc3BhY2VzLmpvaW4oKTtcbiAgaWYgKHByb3BzLmxuZykgam9pbmVkTlMgPSBgJHtwcm9wcy5sbmd9JHtqb2luZWROU31gO1xuICBjb25zdCBwcmV2aW91c0pvaW5lZE5TID0gdXNlUHJldmlvdXMoam9pbmVkTlMpO1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYmluZEkxOG4sXG4gICAgICBiaW5kSTE4blN0b3JlXG4gICAgfSA9IGkxOG5PcHRpb25zO1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICBpZiAoIXJlYWR5ICYmICF1c2VTdXNwZW5zZSkge1xuICAgICAgaWYgKHByb3BzLmxuZykge1xuICAgICAgICBsb2FkTGFuZ3VhZ2VzKGkxOG4sIHByb3BzLmxuZywgbmFtZXNwYWNlcywgKCkgPT4ge1xuICAgICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXROZXdUKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSBzZXRUKGdldE5ld1QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlYWR5ICYmIHByZXZpb3VzSm9pbmVkTlMgJiYgcHJldmlvdXNKb2luZWROUyAhPT0gam9pbmVkTlMgJiYgaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHNldFQoZ2V0TmV3VCk7XG4gICAgfVxuICAgIGNvbnN0IGJvdW5kUmVzZXQgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHNldFQoZ2V0TmV3VCk7XG4gICAgfTtcbiAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgaTE4bi5vbihiaW5kSTE4biwgYm91bmRSZXNldCk7XG4gICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgaTE4bi5zdG9yZS5vbihiaW5kSTE4blN0b3JlLCBib3VuZFJlc2V0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGlmIChiaW5kSTE4biAmJiBpMThuKSBiaW5kSTE4bi5zcGxpdCgnICcpLmZvckVhY2goZSA9PiBpMThuLm9mZihlLCBib3VuZFJlc2V0KSk7XG4gICAgICBpZiAoYmluZEkxOG5TdG9yZSAmJiBpMThuKSBiaW5kSTE4blN0b3JlLnNwbGl0KCcgJykuZm9yRWFjaChlID0+IGkxOG4uc3RvcmUub2ZmKGUsIGJvdW5kUmVzZXQpKTtcbiAgICB9O1xuICB9LCBbaTE4biwgam9pbmVkTlNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQgJiYgcmVhZHkpIHtcbiAgICAgIHNldFQoZ2V0VCk7XG4gICAgfVxuICB9LCBbaTE4biwga2V5UHJlZml4LCByZWFkeV0pO1xuICBjb25zdCByZXQgPSBbdCwgaTE4biwgcmVhZHldO1xuICByZXQudCA9IHQ7XG4gIHJldC5pMThuID0gaTE4bjtcbiAgcmV0LnJlYWR5ID0gcmVhZHk7XG4gIGlmIChyZWFkeSkgcmV0dXJuIHJldDtcbiAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHJldHVybiByZXQ7XG4gIHRocm93IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGlmIChwcm9wcy5sbmcpIHtcbiAgICAgIGxvYWRMYW5ndWFnZXMoaTE4biwgcHJvcHMubG5nLCBuYW1lc3BhY2VzLCAoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCAoKSA9PiByZXNvbHZlKCkpO1xuICAgIH1cbiAgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiB3YXJuKCkge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhhcmdzWzBdKSkgYXJnc1swXSA9IGByZWFjdC1pMThuZXh0OjogJHthcmdzWzBdfWA7XG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG59XG5jb25zdCBhbHJlYWR5V2FybmVkID0ge307XG5leHBvcnQgZnVuY3Rpb24gd2Fybk9uY2UoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuICBpZiAoaXNTdHJpbmcoYXJnc1swXSkgJiYgYWxyZWFkeVdhcm5lZFthcmdzWzBdXSkgcmV0dXJuO1xuICBpZiAoaXNTdHJpbmcoYXJnc1swXSkpIGFscmVhZHlXYXJuZWRbYXJnc1swXV0gPSBuZXcgRGF0ZSgpO1xuICB3YXJuKC4uLmFyZ3MpO1xufVxuY29uc3QgbG9hZGVkQ2xiID0gKGkxOG4sIGNiKSA9PiAoKSA9PiB7XG4gIGlmIChpMThuLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICBjYigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluaXRpYWxpemVkID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGkxOG4ub2ZmKCdpbml0aWFsaXplZCcsIGluaXRpYWxpemVkKTtcbiAgICAgIH0sIDApO1xuICAgICAgY2IoKTtcbiAgICB9O1xuICAgIGkxOG4ub24oJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQpO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IGxvYWROYW1lc3BhY2VzID0gKGkxOG4sIG5zLCBjYikgPT4ge1xuICBpMThuLmxvYWROYW1lc3BhY2VzKG5zLCBsb2FkZWRDbGIoaTE4biwgY2IpKTtcbn07XG5leHBvcnQgY29uc3QgbG9hZExhbmd1YWdlcyA9IChpMThuLCBsbmcsIG5zLCBjYikgPT4ge1xuICBpZiAoaXNTdHJpbmcobnMpKSBucyA9IFtuc107XG4gIG5zLmZvckVhY2gobiA9PiB7XG4gICAgaWYgKGkxOG4ub3B0aW9ucy5ucy5pbmRleE9mKG4pIDwgMCkgaTE4bi5vcHRpb25zLm5zLnB1c2gobik7XG4gIH0pO1xuICBpMThuLmxvYWRMYW5ndWFnZXMobG5nLCBsb2FkZWRDbGIoaTE4biwgY2IpKTtcbn07XG5jb25zdCBvbGRJMThuZXh0SGFzTG9hZGVkTmFtZXNwYWNlID0gZnVuY3Rpb24gKG5zLCBpMThuKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgY29uc3QgbG5nID0gaTE4bi5sYW5ndWFnZXNbMF07XG4gIGNvbnN0IGZhbGxiYWNrTG5nID0gaTE4bi5vcHRpb25zID8gaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nIDogZmFsc2U7XG4gIGNvbnN0IGxhc3RMbmcgPSBpMThuLmxhbmd1YWdlc1tpMThuLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgaWYgKGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGxvYWROb3RQZW5kaW5nID0gKGwsIG4pID0+IHtcbiAgICBjb25zdCBsb2FkU3RhdGUgPSBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbYCR7bH18JHtufWBdO1xuICAgIHJldHVybiBsb2FkU3RhdGUgPT09IC0xIHx8IGxvYWRTdGF0ZSA9PT0gMjtcbiAgfTtcbiAgaWYgKG9wdGlvbnMuYmluZEkxOG4gJiYgb3B0aW9ucy5iaW5kSTE4bi5pbmRleE9mKCdsYW5ndWFnZUNoYW5naW5nJykgPiAtMSAmJiBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvICYmICFsb2FkTm90UGVuZGluZyhpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvLCBucykpIHJldHVybiBmYWxzZTtcbiAgaWYgKGkxOG4uaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICBpZiAoIWkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IGkxOG4ub3B0aW9ucy5yZXNvdXJjZXMgJiYgIWkxOG4ub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gIGlmIChsb2FkTm90UGVuZGluZyhsbmcsIG5zKSAmJiAoIWZhbGxiYWNrTG5nIHx8IGxvYWROb3RQZW5kaW5nKGxhc3RMbmcsIG5zKSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIChucywgaTE4bikge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGlmICghaTE4bi5sYW5ndWFnZXMgfHwgIWkxOG4ubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgIHdhcm5PbmNlKCdpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIGkxOG4ubGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBpc05ld2VySTE4bmV4dCA9IGkxOG4ub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlICE9PSB1bmRlZmluZWQ7XG4gIGlmICghaXNOZXdlckkxOG5leHQpIHtcbiAgICByZXR1cm4gb2xkSTE4bmV4dEhhc0xvYWRlZE5hbWVzcGFjZShucywgaTE4biwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGkxOG4uaGFzTG9hZGVkTmFtZXNwYWNlKG5zLCB7XG4gICAgbG5nOiBvcHRpb25zLmxuZyxcbiAgICBwcmVjaGVjazogKGkxOG5JbnN0YW5jZSwgbG9hZE5vdFBlbmRpbmcpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmJpbmRJMThuICYmIG9wdGlvbnMuYmluZEkxOG4uaW5kZXhPZignbGFuZ3VhZ2VDaGFuZ2luZycpID4gLTEgJiYgaTE4bkluc3RhbmNlLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuSW5zdGFuY2UuaXNMYW5ndWFnZUNoYW5naW5nVG8gJiYgIWxvYWROb3RQZW5kaW5nKGkxOG5JbnN0YW5jZS5pc0xhbmd1YWdlQ2hhbmdpbmdUbywgbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RGlzcGxheU5hbWUgPSBDb21wb25lbnQgPT4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IChpc1N0cmluZyhDb21wb25lbnQpICYmIENvbXBvbmVudC5sZW5ndGggPiAwID8gQ29tcG9uZW50IDogJ1Vua25vd24nKTtcbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGw7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNTUiB9IGZyb20gJy4vdXNlU1NSLmpzJztcbmltcG9ydCB7IGNvbXBvc2VJbml0aWFsUHJvcHMgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCBjb25zdCB3aXRoU1NSID0gKCkgPT4gZnVuY3Rpb24gRXh0ZW5kKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gSTE4bmV4dFdpdGhTU1IoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBpbml0aWFsSTE4blN0b3JlLFxuICAgICAgaW5pdGlhbExhbmd1YWdlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBfcmVmO1xuICAgIHVzZVNTUihpbml0aWFsSTE4blN0b3JlLCBpbml0aWFsTGFuZ3VhZ2UpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHtcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgfVxuICBJMThuZXh0V2l0aFNTUi5nZXRJbml0aWFsUHJvcHMgPSBjb21wb3NlSW5pdGlhbFByb3BzKFdyYXBwZWRDb21wb25lbnQpO1xuICBJMThuZXh0V2l0aFNTUi5kaXNwbGF5TmFtZSA9IGB3aXRoSTE4bmV4dFNTUigke2dldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpfSlgO1xuICBJMThuZXh0V2l0aFNTUi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgcmV0dXJuIEkxOG5leHRXaXRoU1NSO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIGFzIGZvcndhcmRSZWZSZWFjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi91c2VUcmFuc2xhdGlvbi5qcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IGNvbnN0IHdpdGhUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChucykge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBmdW5jdGlvbiBFeHRlbmQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIEkxOG5leHRXaXRoVHJhbnNsYXRpb24oX3JlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gX3JlZjtcbiAgICAgIGNvbnN0IFt0LCBpMThuLCByZWFkeV0gPSB1c2VUcmFuc2xhdGlvbihucywge1xuICAgICAgICAuLi5yZXN0LFxuICAgICAgICBrZXlQcmVmaXg6IG9wdGlvbnMua2V5UHJlZml4XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhc3NEb3duUHJvcHMgPSB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHQsXG4gICAgICAgIGkxOG4sXG4gICAgICAgIHRSZWFkeTogcmVhZHlcbiAgICAgIH07XG4gICAgICBpZiAob3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMud2l0aFJlZiAmJiBmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgcGFzc0Rvd25Qcm9wcy5mb3J3YXJkZWRSZWYgPSBmb3J3YXJkZWRSZWY7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwYXNzRG93blByb3BzKTtcbiAgICB9XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5kaXNwbGF5TmFtZSA9IGB3aXRoSTE4bmV4dFRyYW5zbGF0aW9uKCR7Z2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCl9KWA7XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBjb25zdCBmb3J3YXJkUmVmID0gKHByb3BzLCByZWYpID0+IGNyZWF0ZUVsZW1lbnQoSTE4bmV4dFdpdGhUcmFuc2xhdGlvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgIGZvcndhcmRlZFJlZjogcmVmXG4gICAgfSkpO1xuICAgIHJldHVybiBvcHRpb25zLndpdGhSZWYgPyBmb3J3YXJkUmVmUmVhY3QoZm9yd2FyZFJlZikgOiBJMThuZXh0V2l0aFRyYW5zbGF0aW9uO1xuICB9O1xufTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcobWV0aG9kTmFtZSwgaW5mbykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCIlcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlc1wiLFxuICAgICAgICAgICAgaW5mb1swXSxcbiAgICAgICAgICAgIGluZm9bMV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgICBpZiAobnVsbCA9PT0gbWF5YmVJdGVyYWJsZSB8fCBcIm9iamVjdFwiICE9PSB0eXBlb2YgbWF5YmVJdGVyYWJsZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBtYXliZUl0ZXJhYmxlID1cbiAgICAgICAgKE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICAgIG1heWJlSXRlcmFibGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG1heWJlSXRlcmFibGUgPyBtYXliZUl0ZXJhYmxlIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAgICAgIHB1YmxpY0luc3RhbmNlID1cbiAgICAgICAgKChwdWJsaWNJbnN0YW5jZSA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yKSAmJlxuICAgICAgICAgIChwdWJsaWNJbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCBwdWJsaWNJbnN0YW5jZS5uYW1lKSkgfHxcbiAgICAgICAgXCJSZWFjdENsYXNzXCI7XG4gICAgICB2YXIgd2FybmluZ0tleSA9IHB1YmxpY0luc3RhbmNlICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuICAgICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldIHx8XG4gICAgICAgIChjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgIGNsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC5cIixcbiAgICAgICAgICBjYWxsZXJOYW1lLFxuICAgICAgICAgIHB1YmxpY0luc3RhbmNlXG4gICAgICAgICksXG4gICAgICAgIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSAhMCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbiAgICBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITA7XG4gICAgICB9XG4gICAgICBpZiAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0KSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IGNvbnNvbGU7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX3RlbXBfY29uc3QgPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQuZXJyb3I7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDAgPVxuICAgICAgICAgIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBTeW1ib2wgJiZcbiAgICAgICAgICAgIFN5bWJvbC50b1N0cmluZ1RhZyAmJlxuICAgICAgICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSkgfHxcbiAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8XG4gICAgICAgICAgXCJPYmplY3RcIjtcbiAgICAgICAgSlNDb21waWxlcl90ZW1wX2NvbnN0LmNhbGwoXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LFxuICAgICAgICAgIFwiVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLiBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgdXNpbmcgaXQgaGVyZS5cIixcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQkanNjb21wJDBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gICAgICBpZiAobnVsbCA9PSB0eXBlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICByZXR1cm4gdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRVxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZSkgcmV0dXJuIHR5cGU7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIkZyYWdtZW50XCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3RyaWN0TW9kZVwiO1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3VzcGVuc2VcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiU3VzcGVuc2VMaXN0XCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfQUNUSVZJVFlfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJBY3Rpdml0eVwiO1xuICAgICAgfVxuICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgIChcIm51bWJlclwiID09PSB0eXBlb2YgdHlwZS50YWcgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuIFRoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB0eXBlLiQkdHlwZW9mKVxuICAgICAgICApIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIFwiUG9ydGFsXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuUHJvdmlkZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlNVTUVSX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGUuX2NvbnRleHQuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCIpICsgXCIuQ29uc3VtZXJcIjtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICB2YXIgaW5uZXJUeXBlID0gdHlwZS5yZW5kZXI7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHR5cGUgfHxcbiAgICAgICAgICAgICAgKCh0eXBlID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8IFwiXCIpLFxuICAgICAgICAgICAgICAodHlwZSA9IFwiXCIgIT09IHR5cGUgPyBcIkZvcndhcmRSZWYoXCIgKyB0eXBlICsgXCIpXCIgOiBcIkZvcndhcmRSZWZcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAoaW5uZXJUeXBlID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsKSxcbiAgICAgICAgICAgICAgbnVsbCAhPT0gaW5uZXJUeXBlXG4gICAgICAgICAgICAgICAgPyBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA6IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8IFwiTWVtb1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgaW5uZXJUeXBlID0gdHlwZS5fcGF5bG9hZDtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLl9pbml0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKGlubmVyVHlwZSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRhc2tOYW1lKHR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSByZXR1cm4gXCI8PlwiO1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSAmJlxuICAgICAgICBudWxsICE9PSB0eXBlICYmXG4gICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRVxuICAgICAgKVxuICAgICAgICByZXR1cm4gXCI8Li4uPlwiO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHJldHVybiBuYW1lID8gXCI8XCIgKyBuYW1lICsgXCI+XCIgOiBcIjwuLi4+XCI7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHJldHVybiBcIjwuLi4+XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE93bmVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5BO1xuICAgICAgcmV0dXJuIG51bGwgPT09IGRpc3BhdGNoZXIgPyBudWxsIDogZGlzcGF0Y2hlci5nZXRPd25lcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBVbmtub3duT3duZXIoKSB7XG4gICAgICByZXR1cm4gRXJyb3IoXCJyZWFjdC1zdGFjay10b3AtZnJhbWVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBcImtleVwiKSkge1xuICAgICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsIFwia2V5XCIpLmdldDtcbiAgICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbmZpZy5rZXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICAgICAgZnVuY3Rpb24gd2FybkFib3V0QWNjZXNzaW5nS2V5KCkge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biB8fFxuICAgICAgICAgICgoc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSAhMCksXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSB2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50IHByb3AuIChodHRwczovL3JlYWN0LmRldi9saW5rL3NwZWNpYWwtcHJvcHMpXCIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICkpO1xuICAgICAgfVxuICAgICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gITA7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsIFwia2V5XCIsIHtcbiAgICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZygpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHRoaXMudHlwZSk7XG4gICAgICBkaWRXYXJuQWJvdXRFbGVtZW50UmVmW2NvbXBvbmVudE5hbWVdIHx8XG4gICAgICAgICgoZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSA9ICEwKSxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkFjY2Vzc2luZyBlbGVtZW50LnJlZiB3YXMgcmVtb3ZlZCBpbiBSZWFjdCAxOS4gcmVmIGlzIG5vdyBhIHJlZ3VsYXIgcHJvcC4gSXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIEpTWCBFbGVtZW50IHR5cGUgaW4gYSBmdXR1cmUgcmVsZWFzZS5cIlxuICAgICAgICApKTtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSB0aGlzLnByb3BzLnJlZjtcbiAgICAgIHJldHVybiB2b2lkIDAgIT09IGNvbXBvbmVudE5hbWUgPyBjb21wb25lbnROYW1lIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhY3RFbGVtZW50KFxuICAgICAgdHlwZSxcbiAgICAgIGtleSxcbiAgICAgIHNlbGYsXG4gICAgICBzb3VyY2UsXG4gICAgICBvd25lcixcbiAgICAgIHByb3BzLFxuICAgICAgZGVidWdTdGFjayxcbiAgICAgIGRlYnVnVGFza1xuICAgICkge1xuICAgICAgc2VsZiA9IHByb3BzLnJlZjtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIF9vd25lcjogb3duZXJcbiAgICAgIH07XG4gICAgICBudWxsICE9PSAodm9pZCAwICE9PSBzZWxmID8gc2VsZiA6IG51bGwpXG4gICAgICAgID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgZ2V0OiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZ1xuICAgICAgICAgIH0pXG4gICAgICAgIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHsgZW51bWVyYWJsZTogITEsIHZhbHVlOiBudWxsIH0pO1xuICAgICAgdHlwZS5fc3RvcmUgPSB7fTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLl9zdG9yZSwgXCJ2YWxpZGF0ZWRcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdJbmZvXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnU3RhY2tcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZGVidWdTdGFja1xuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdUYXNrXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGRlYnVnVGFza1xuICAgICAgfSk7XG4gICAgICBPYmplY3QuZnJlZXplICYmIChPYmplY3QuZnJlZXplKHR5cGUucHJvcHMpLCBPYmplY3QuZnJlZXplKHR5cGUpKTtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gICAgICBuZXdLZXkgPSBSZWFjdEVsZW1lbnQoXG4gICAgICAgIG9sZEVsZW1lbnQudHlwZSxcbiAgICAgICAgbmV3S2V5LFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgb2xkRWxlbWVudC5fb3duZXIsXG4gICAgICAgIG9sZEVsZW1lbnQucHJvcHMsXG4gICAgICAgIG9sZEVsZW1lbnQuX2RlYnVnU3RhY2ssXG4gICAgICAgIG9sZEVsZW1lbnQuX2RlYnVnVGFza1xuICAgICAgKTtcbiAgICAgIG9sZEVsZW1lbnQuX3N0b3JlICYmXG4gICAgICAgIChuZXdLZXkuX3N0b3JlLnZhbGlkYXRlZCA9IG9sZEVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCk7XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBvYmplY3QgJiZcbiAgICAgICAgbnVsbCAhPT0gb2JqZWN0ICYmXG4gICAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gICAgICB2YXIgZXNjYXBlckxvb2t1cCA9IHsgXCI9XCI6IFwiPTBcIiwgXCI6XCI6IFwiPTJcIiB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCIkXCIgK1xuICAgICAgICBrZXkucmVwbGFjZSgvWz06XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPT0gZWxlbWVudCAmJlxuICAgICAgICBudWxsICE9IGVsZW1lbnQua2V5XG4gICAgICAgID8gKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpLCBlc2NhcGUoXCJcIiArIGVsZW1lbnQua2V5KSlcbiAgICAgICAgOiBpbmRleC50b1N0cmluZygzNik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vb3AkMSgpIHt9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRoZW5hYmxlKHRoZW5hYmxlKSB7XG4gICAgICBzd2l0Y2ggKHRoZW5hYmxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgcmV0dXJuIHRoZW5hYmxlLnZhbHVlO1xuICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAgIChcInN0cmluZ1wiID09PSB0eXBlb2YgdGhlbmFibGUuc3RhdHVzXG4gICAgICAgICAgICAgID8gdGhlbmFibGUudGhlbihub29wJDEsIG5vb3AkMSlcbiAgICAgICAgICAgICAgOiAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicGVuZGluZ1wiKSxcbiAgICAgICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZ1bGZpbGxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwiZnVsZmlsbGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS52YWx1ZSA9IGZ1bGZpbGxlZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicmVqZWN0ZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgKHRoZW5hYmxlLnJlYXNvbiA9IGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0aGVuYWJsZS5zdGF0dXMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgXCJyZWplY3RlZFwiOlxuICAgICAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgdGhlbmFibGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGUgfHwgXCJib29sZWFuXCIgPT09IHR5cGUpIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIHZhciBpbnZva2VDYWxsYmFjayA9ICExO1xuICAgICAgaWYgKG51bGwgPT09IGNoaWxkcmVuKSBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgZWxzZVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbi5faW5pdCksXG4gICAgICAgICAgICAgICAgICBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrKGNoaWxkcmVuLl9wYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbjtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayhpbnZva2VDYWxsYmFjayk7XG4gICAgICAgIHZhciBjaGlsZEtleSA9XG4gICAgICAgICAgXCJcIiA9PT0gbmFtZVNvRmFyID8gXCIuXCIgKyBnZXRFbGVtZW50S2V5KGludm9rZUNhbGxiYWNrLCAwKSA6IG5hbWVTb0ZhcjtcbiAgICAgICAgaXNBcnJheUltcGwoY2FsbGJhY2spXG4gICAgICAgICAgPyAoKGVzY2FwZWRQcmVmaXggPSBcIlwiKSxcbiAgICAgICAgICAgIG51bGwgIT0gY2hpbGRLZXkgJiZcbiAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGNoaWxkS2V5LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsIFwiJCYvXCIpICsgXCIvXCIpLFxuICAgICAgICAgICAgbWFwSW50b0FycmF5KGNhbGxiYWNrLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgXCJcIiwgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IG51bGwgIT0gY2FsbGJhY2sgJiZcbiAgICAgICAgICAgIChpc1ZhbGlkRWxlbWVudChjYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgKG51bGwgIT0gY2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgKChpbnZva2VDYWxsYmFjayAmJiBpbnZva2VDYWxsYmFjay5rZXkgPT09IGNhbGxiYWNrLmtleSkgfHxcbiAgICAgICAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY2FsbGJhY2sua2V5KSksXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID0gY2xvbmVBbmRSZXBsYWNlS2V5KFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgKG51bGwgPT0gY2FsbGJhY2sua2V5IHx8XG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IChcIlwiICsgY2FsbGJhY2sua2V5KS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiQmL1wiXG4gICAgICAgICAgICAgICAgICAgICAgKSArIFwiL1wiKSArXG4gICAgICAgICAgICAgICAgICBjaGlsZEtleVxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgXCJcIiAhPT0gbmFtZVNvRmFyICYmXG4gICAgICAgICAgICAgICAgbnVsbCAhPSBpbnZva2VDYWxsYmFjayAmJlxuICAgICAgICAgICAgICAgIGlzVmFsaWRFbGVtZW50KGludm9rZUNhbGxiYWNrKSAmJlxuICAgICAgICAgICAgICAgIG51bGwgPT0gaW52b2tlQ2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2suX3N0b3JlICYmXG4gICAgICAgICAgICAgICAgIWludm9rZUNhbGxiYWNrLl9zdG9yZS52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeC5fc3RvcmUudmFsaWRhdGVkID0gMiksXG4gICAgICAgICAgICAgIChjYWxsYmFjayA9IGVzY2FwZWRQcmVmaXgpKSxcbiAgICAgICAgICAgIGFycmF5LnB1c2goY2FsbGJhY2spKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpbnZva2VDYWxsYmFjayA9IDA7XG4gICAgICBjaGlsZEtleSA9IFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiIDogbmFtZVNvRmFyICsgXCI6XCI7XG4gICAgICBpZiAoaXNBcnJheUltcGwoY2hpbGRyZW4pKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBjaGlsZHJlbltpXSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkpKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKCgoaSA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pKSwgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgaSkpXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgaSA9PT0gY2hpbGRyZW4uZW50cmllcyAmJlxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgfHxcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIFwiVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLlwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAoZGlkV2FybkFib3V0TWFwcyA9ICEwKSksXG4gICAgICAgICAgICBjaGlsZHJlbiA9IGkuY2FsbChjaGlsZHJlbiksXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAhKG5hbWVTb0ZhciA9IGNoaWxkcmVuLm5leHQoKSkuZG9uZTtcblxuICAgICAgICApXG4gICAgICAgICAgKG5hbWVTb0ZhciA9IG5hbWVTb0Zhci52YWx1ZSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkrKykpLFxuICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICs9IG1hcEludG9BcnJheShcbiAgICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICkpO1xuICAgICAgZWxzZSBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZSkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgY2hpbGRyZW4udGhlbilcbiAgICAgICAgICByZXR1cm4gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgcmVzb2x2ZVRoZW5hYmxlKGNoaWxkcmVuKSxcbiAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgYXJyYXkgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgK1xuICAgICAgICAgICAgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IGFycmF5XG4gICAgICAgICAgICAgID8gXCJvYmplY3Qgd2l0aCBrZXlzIHtcIiArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKFwiLCBcIikgKyBcIn1cIlxuICAgICAgICAgICAgICA6IGFycmF5KSArXG4gICAgICAgICAgICBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgICAgaWYgKG51bGwgPT0gY2hpbGRyZW4pIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsIFwiXCIsIFwiXCIsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgICAgIGlmICgtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKSB7XG4gICAgICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgICAgICBjdG9yID0gY3RvcigpO1xuICAgICAgICBjdG9yLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMSksIChwYXlsb2FkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gcGF5bG9hZC5fc3RhdHVzIHx8IC0xID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgICAgICAgIChwYXlsb2FkLl9zdGF0dXMgPSAyKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC0xID09PSBwYXlsb2FkLl9zdGF0dXMgJiZcbiAgICAgICAgICAoKHBheWxvYWQuX3N0YXR1cyA9IDApLCAocGF5bG9hZC5fcmVzdWx0ID0gY3RvcikpO1xuICAgICAgfVxuICAgICAgaWYgKDEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoY3RvciA9IHBheWxvYWQuX3Jlc3VsdCksXG4gICAgICAgICAgdm9pZCAwID09PSBjdG9yICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImxhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcbkRpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/XCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXCJkZWZhdWx0XCIgaW4gY3RvciB8fFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcIixcbiAgICAgICAgICAgICAgY3RvclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBjdG9yLmRlZmF1bHRcbiAgICAgICAgKTtcbiAgICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkg7XG4gICAgICBudWxsID09PSBkaXNwYXRjaGVyICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZW5xdWV1ZVRhc2tJbXBsKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKFwicmVxdWlyZVwiICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gKG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ10pLmNhbGwoXG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBcInRpbWVyc1wiXG4gICAgICAgICAgKS5zZXRJbW1lZGlhdGU7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICExID09PSBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCAmJlxuICAgICAgICAgICAgICAoKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gITApLFxuICAgICAgICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCBzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyBpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy5cIlxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHZvaWQgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWdncmVnYXRlRXJyb3JzKGVycm9ycykge1xuICAgICAgcmV0dXJuIDEgPCBlcnJvcnMubGVuZ3RoICYmIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yXG4gICAgICAgID8gbmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycylcbiAgICAgICAgOiBlcnJvcnNbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgIHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiBcIlxuICAgICAgICApO1xuICAgICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBxdWV1ZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlO1xuICAgICAgaWYgKG51bGwgIT09IHF1ZXVlKVxuICAgICAgICBpZiAoMCAhPT0gcXVldWUubGVuZ3RoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGw7XG4gICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICA/ICgocXVldWUgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICByZWplY3QocXVldWUpKVxuICAgICAgICA6IHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgICAgaXNGbHVzaGluZyA9ICEwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLmRpZFVzZVByb21pc2UgPSAhMTtcbiAgICAgICAgICAgICAgdmFyIGNvbnRpbnVhdGlvbiA9IGNhbGxiYWNrKCExKTtcbiAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGNvbnRpbnVhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICBxdWV1ZVtpXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNvbnRpbnVhdGlvbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICAgICAgfSB3aGlsZSAoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkgKyAxKSwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlzRmx1c2hpbmcgPSAhMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KEVycm9yKCkpO1xuICAgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QudHJhbnNpdGlvbmFsLmVsZW1lbnRcIiksXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLFxuICAgICAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxcbiAgICAgIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG4gICAgU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xuICAgIHZhciBSRUFDVF9DT05TVU1FUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnN1bWVyXCIpLFxuICAgICAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksXG4gICAgICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLFxuICAgICAgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksXG4gICAgICBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSxcbiAgICAgIFJFQUNUX0FDVElWSVRZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuYWN0aXZpdHlcIiksXG4gICAgICBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3IsXG4gICAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fSxcbiAgICAgIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAgICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwiZm9yY2VVcGRhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcInJlcGxhY2VTdGF0ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJzZXRTdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24sXG4gICAgICBlbXB0eU9iamVjdCA9IHt9O1xuICAgIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKFxuICAgICAgICBcIm9iamVjdFwiICE9PSB0eXBlb2YgcGFydGlhbFN0YXRlICYmXG4gICAgICAgIFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHBhcnRpYWxTdGF0ZSAmJlxuICAgICAgICBudWxsICE9IHBhcnRpYWxTdGF0ZVxuICAgICAgKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiXG4gICAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIFwic2V0U3RhdGVcIik7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCBcImZvcmNlVXBkYXRlXCIpO1xuICAgIH07XG4gICAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgICBpc01vdW50ZWQ6IFtcbiAgICAgICAgICBcImlzTW91bnRlZFwiLFxuICAgICAgICAgIFwiSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXCJcbiAgICAgICAgXSxcbiAgICAgICAgcmVwbGFjZVN0YXRlOiBbXG4gICAgICAgICAgXCJyZXBsYWNlU3RhdGVcIixcbiAgICAgICAgICBcIlJlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGZuTmFtZTtcbiAgICBmb3IgKGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcylcbiAgICAgIGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkgJiZcbiAgICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgICBkZXByZWNhdGVkQVBJcyA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG4gICAgZGVwcmVjYXRlZEFQSXMuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuICAgIGFzc2lnbihkZXByZWNhdGVkQVBJcywgQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gICAgZGVwcmVjYXRlZEFQSXMuaXNQdXJlUmVhY3RDb21wb25lbnQgPSAhMDtcbiAgICB2YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5LFxuICAgICAgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpLFxuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gICAgICAgIEg6IG51bGwsXG4gICAgICAgIEE6IG51bGwsXG4gICAgICAgIFQ6IG51bGwsXG4gICAgICAgIFM6IG51bGwsXG4gICAgICAgIFY6IG51bGwsXG4gICAgICAgIGFjdFF1ZXVlOiBudWxsLFxuICAgICAgICBpc0JhdGNoaW5nTGVnYWN5OiAhMSxcbiAgICAgICAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6ICExLFxuICAgICAgICBkaWRVc2VQcm9taXNlOiAhMSxcbiAgICAgICAgdGhyb3duRXJyb3JzOiBbXSxcbiAgICAgICAgZ2V0Q3VycmVudFN0YWNrOiBudWxsLFxuICAgICAgICByZWNlbnRseUNyZWF0ZWRPd25lclN0YWNrczogMFxuICAgICAgfSxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIGNyZWF0ZVRhc2sgPSBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgPyBjb25zb2xlLmNyZWF0ZVRhc2tcbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9O1xuICAgIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgICAgXCJyZWFjdC1zdGFjay1ib3R0b20tZnJhbWVcIjogZnVuY3Rpb24gKGNhbGxTdGFja0ZvckVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsU3RhY2tGb3JFcnJvcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lO1xuICAgIHZhciBkaWRXYXJuQWJvdXRFbGVtZW50UmVmID0ge307XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnU3RhY2sgPSBkZXByZWNhdGVkQVBJc1tcbiAgICAgIFwicmVhY3Qtc3RhY2stYm90dG9tLWZyYW1lXCJcbiAgICBdLmJpbmQoZGVwcmVjYXRlZEFQSXMsIFVua25vd25Pd25lcikoKTtcbiAgICB2YXIgdW5rbm93bk93bmVyRGVidWdUYXNrID0gY3JlYXRlVGFzayhnZXRUYXNrTmFtZShVbmtub3duT3duZXIpKTtcbiAgICB2YXIgZGlkV2FybkFib3V0TWFwcyA9ICExLFxuICAgICAgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nLFxuICAgICAgcmVwb3J0R2xvYmFsRXJyb3IgPVxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXBvcnRFcnJvclxuICAgICAgICAgID8gcmVwb3J0RXJyb3JcbiAgICAgICAgICA6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHdpbmRvdyAmJlxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHdpbmRvdy5FcnJvckV2ZW50XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyB3aW5kb3cuRXJyb3JFdmVudChcImVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgIDogU3RyaW5nKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpKSByZXR1cm47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHByb2Nlc3MgJiZcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBwcm9jZXNzLmVtaXRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KFwidW5jYXVnaHRFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9ICExLFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbCxcbiAgICAgIGFjdFNjb3BlRGVwdGggPSAwLFxuICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSAhMSxcbiAgICAgIGlzRmx1c2hpbmcgPSAhMSxcbiAgICAgIHF1ZXVlU2V2ZXJhbE1pY3JvdGFza3MgPVxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBxdWV1ZU1pY3JvdGFza1xuICAgICAgICAgID8gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVldWVNaWNyb3Rhc2soY2FsbGJhY2spO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IGVucXVldWVUYXNrO1xuICAgIGRlcHJlY2F0ZWRBUElzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICBjOiBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VNZW1vQ2FjaGUoc2l6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZXhwb3J0cy5DaGlsZHJlbiA9IHtcbiAgICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICAgICAgICBtYXBDaGlsZHJlbihcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9yRWFjaENvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb3VudDogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuKys7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH0sXG4gICAgICB0b0FycmF5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfSkgfHwgW11cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBvbmx5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG4gICAgZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gICAgZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbiAgICBleHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuICAgIGV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuICAgIGV4cG9ydHMuX19DTElFTlRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfV0FSTl9VU0VSU19USEVZX0NBTk5PVF9VUEdSQURFID1cbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuICAgIGV4cG9ydHMuX19DT01QSUxFUl9SVU5USU1FID0gZGVwcmVjYXRlZEFQSXM7XG4gICAgZXhwb3J0cy5hY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBwcmV2QWN0UXVldWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSxcbiAgICAgICAgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgICAgYWN0U2NvcGVEZXB0aCsrO1xuICAgICAgdmFyIHF1ZXVlID0gKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID1cbiAgICAgICAgICBudWxsICE9PSBwcmV2QWN0UXVldWUgPyBwcmV2QWN0UXVldWUgOiBbXSksXG4gICAgICAgIGRpZEF3YWl0QWN0Q2FsbCA9ICExO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGgpXG4gICAgICAgIHRocm93IChcbiAgICAgICAgICAocG9wQWN0U2NvcGUocHJldkFjdFF1ZXVlLCBwcmV2QWN0U2NvcGVEZXB0aCksXG4gICAgICAgICAgKGNhbGxiYWNrID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgY2FsbGJhY2spXG4gICAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIG51bGwgIT09IHJlc3VsdCAmJlxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcmVzdWx0ICYmXG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJlc3VsdC50aGVuXG4gICAgICApIHtcbiAgICAgICAgdmFyIHRoZW5hYmxlID0gcmVzdWx0O1xuICAgICAgICBxdWV1ZVNldmVyYWxNaWNyb3Rhc2tzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgfHxcbiAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0IHx8XG4gICAgICAgICAgICAoKGRpZFdhcm5Ob0F3YWl0QWN0ID0gITApLFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuIFRoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCBpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgc2NvcGVzLiBZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7XCJcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMDtcbiAgICAgICAgICAgIHRoZW5hYmxlLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBwcmV2QWN0U2NvcGVEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvciQwKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yJDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhyb3duRXJyb3IgPSBhZ2dyZWdhdGVFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3Rocm93bkVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgICAgIDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/ICgoZXJyb3IgPSBhZ2dyZWdhdGVFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgOiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciByZXR1cm5WYWx1ZSRqc2NvbXAkMCA9IHJlc3VsdDtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgMCA9PT0gcHJldkFjdFNjb3BlRGVwdGggJiZcbiAgICAgICAgKGZsdXNoQWN0UXVldWUocXVldWUpLFxuICAgICAgICAwICE9PSBxdWV1ZS5sZW5ndGggJiZcbiAgICAgICAgICBxdWV1ZVNldmVyYWxNaWNyb3Rhc2tzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCB8fFxuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCB8fFxuICAgICAgICAgICAgICAoKGRpZFdhcm5Ob0F3YWl0QWN0ID0gITApLFxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiQSBjb21wb25lbnQgc3VzcGVuZGVkIGluc2lkZSBhbiBgYWN0YCBzY29wZSwgYnV0IHRoZSBgYWN0YCBjYWxsIHdhcyBub3QgYXdhaXRlZC4gV2hlbiB0ZXN0aW5nIFJlYWN0IGNvbXBvbmVudHMgdGhhdCBkZXBlbmQgb24gYXN5bmNocm9ub3VzIGRhdGEsIHlvdSBtdXN0IGF3YWl0IHRoZSByZXN1bHQ6XFxuXFxuYXdhaXQgYWN0KCgpID0+IC4uLilcIlxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gbnVsbCkpO1xuICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKVxuICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgKChjYWxsYmFjayA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGRpZEF3YWl0QWN0Q2FsbCA9ICEwO1xuICAgICAgICAgIDAgPT09IHByZXZBY3RTY29wZURlcHRoXG4gICAgICAgICAgICA/ICgoUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBxdWV1ZSksXG4gICAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhcbiAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlJGpzY29tcCQwLFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiByZXNvbHZlKHJldHVyblZhbHVlJGpzY29tcCQwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMuY2FjaGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMuY2FwdHVyZU93bmVyU3RhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZ2V0Q3VycmVudFN0YWNrID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuZ2V0Q3VycmVudFN0YWNrO1xuICAgICAgcmV0dXJuIG51bGwgPT09IGdldEN1cnJlbnRTdGFjayA/IG51bGwgOiBnZXRDdXJyZW50U3RhY2soKTtcbiAgICB9O1xuICAgIGV4cG9ydHMuY2xvbmVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChudWxsID09PSBlbGVtZW50IHx8IHZvaWQgMCA9PT0gZWxlbWVudClcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICtcbiAgICAgICAgICAgIGVsZW1lbnQgK1xuICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyksXG4gICAgICAgIGtleSA9IGVsZW1lbnQua2V5LFxuICAgICAgICBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgaWYgKG51bGwgIT0gY29uZmlnKSB7XG4gICAgICAgIHZhciBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQ7XG4gICAgICAgIGE6IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgXCJyZWZcIikgJiZcbiAgICAgICAgICAgIChKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIFwicmVmXCJcbiAgICAgICAgICAgICkuZ2V0KSAmJlxuICAgICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LmlzUmVhY3RXYXJuaW5nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMTtcbiAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9IHZvaWQgMCAhPT0gY29uZmlnLnJlZjtcbiAgICAgICAgfVxuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgJiYgKG93bmVyID0gZ2V0T3duZXIoKSk7XG4gICAgICAgIGhhc1ZhbGlkS2V5KGNvbmZpZykgJiZcbiAgICAgICAgICAoY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KSwgKGtleSA9IFwiXCIgKyBjb25maWcua2V5KSk7XG4gICAgICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKVxuICAgICAgICAgICFoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpIHx8XG4gICAgICAgICAgICBcImtleVwiID09PSBwcm9wTmFtZSB8fFxuICAgICAgICAgICAgXCJfX3NlbGZcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIFwiX19zb3VyY2VcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIChcInJlZlwiID09PSBwcm9wTmFtZSAmJiB2b2lkIDAgPT09IGNvbmZpZy5yZWYpIHx8XG4gICAgICAgICAgICAocHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXSk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcE5hbWUgPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICAgIGlmICgxID09PSBwcm9wTmFtZSkgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgIGVsc2UgaWYgKDEgPCBwcm9wTmFtZSkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSBBcnJheShwcm9wTmFtZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcE5hbWU7IGkrKylcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHRbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdDtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gUmVhY3RFbGVtZW50KFxuICAgICAgICBlbGVtZW50LnR5cGUsXG4gICAgICAgIGtleSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIG93bmVyLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgZWxlbWVudC5fZGVidWdTdGFjayxcbiAgICAgICAgZWxlbWVudC5fZGVidWdUYXNrXG4gICAgICApO1xuICAgICAgZm9yIChrZXkgPSAyOyBrZXkgPCBhcmd1bWVudHMubGVuZ3RoOyBrZXkrKylcbiAgICAgICAgKG93bmVyID0gYXJndW1lbnRzW2tleV0pLFxuICAgICAgICAgIGlzVmFsaWRFbGVtZW50KG93bmVyKSAmJiBvd25lci5fc3RvcmUgJiYgKG93bmVyLl9zdG9yZS52YWxpZGF0ZWQgPSAxKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIGV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgICAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgICAgIFByb3ZpZGVyOiBudWxsLFxuICAgICAgICBDb25zdW1lcjogbnVsbFxuICAgICAgfTtcbiAgICAgIGRlZmF1bHRWYWx1ZS5Qcm92aWRlciA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIGRlZmF1bHRWYWx1ZS5Db25zdW1lciA9IHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlNVTUVSX1RZUEUsXG4gICAgICAgIF9jb250ZXh0OiBkZWZhdWx0VmFsdWVcbiAgICAgIH07XG4gICAgICBkZWZhdWx0VmFsdWUuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgICBkZWZhdWx0VmFsdWUuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaXNWYWxpZEVsZW1lbnQobm9kZSkgJiYgbm9kZS5fc3RvcmUgJiYgKG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IDEpO1xuICAgICAgfVxuICAgICAgaSA9IHt9O1xuICAgICAgbm9kZSA9IG51bGw7XG4gICAgICBpZiAobnVsbCAhPSBjb25maWcpXG4gICAgICAgIGZvciAocHJvcE5hbWUgaW4gKGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWUgfHxcbiAgICAgICAgICAhKFwiX19zZWxmXCIgaW4gY29uZmlnKSB8fFxuICAgICAgICAgIFwia2V5XCIgaW4gY29uZmlnIHx8XG4gICAgICAgICAgKChkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lID0gITApLFxuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiWW91ciBhcHAgKG9yIG9uZSBvZiBpdHMgZGVwZW5kZW5jaWVzKSBpcyB1c2luZyBhbiBvdXRkYXRlZCBKU1ggdHJhbnNmb3JtLiBVcGRhdGUgdG8gdGhlIG1vZGVybiBKU1ggdHJhbnNmb3JtIGZvciBmYXN0ZXIgcGVyZm9ybWFuY2U6IGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvbmV3LWpzeC10cmFuc2Zvcm1cIlxuICAgICAgICAgICkpLFxuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChub2RlID0gXCJcIiArIGNvbmZpZy5rZXkpKSxcbiAgICAgICAgY29uZmlnKSlcbiAgICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmXG4gICAgICAgICAgICBcImtleVwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgXCJfX3NlbGZcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIFwiX19zb3VyY2VcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIChpW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gY2hpbGRyZW5MZW5ndGgpIGkuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgIGVsc2UgaWYgKDEgPCBjaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpLCBfaSA9IDA7XG4gICAgICAgICAgX2kgPCBjaGlsZHJlbkxlbmd0aDtcbiAgICAgICAgICBfaSsrXG4gICAgICAgIClcbiAgICAgICAgICBjaGlsZEFycmF5W19pXSA9IGFyZ3VtZW50c1tfaSArIDJdO1xuICAgICAgICBPYmplY3QuZnJlZXplICYmIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICAgIGkuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpXG4gICAgICAgIGZvciAocHJvcE5hbWUgaW4gKChjaGlsZHJlbkxlbmd0aCA9IHR5cGUuZGVmYXVsdFByb3BzKSwgY2hpbGRyZW5MZW5ndGgpKVxuICAgICAgICAgIHZvaWQgMCA9PT0gaVtwcm9wTmFtZV0gJiYgKGlbcHJvcE5hbWVdID0gY2hpbGRyZW5MZW5ndGhbcHJvcE5hbWVdKTtcbiAgICAgIG5vZGUgJiZcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIoXG4gICAgICAgICAgaSxcbiAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlXG4gICAgICAgICAgICA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IFwiVW5rbm93blwiXG4gICAgICAgICAgICA6IHR5cGVcbiAgICAgICAgKTtcbiAgICAgIHZhciBwcm9wTmFtZSA9IDFlNCA+IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnJlY2VudGx5Q3JlYXRlZE93bmVyU3RhY2tzKys7XG4gICAgICByZXR1cm4gUmVhY3RFbGVtZW50KFxuICAgICAgICB0eXBlLFxuICAgICAgICBub2RlLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgZ2V0T3duZXIoKSxcbiAgICAgICAgaSxcbiAgICAgICAgcHJvcE5hbWUgPyBFcnJvcihcInJlYWN0LXN0YWNrLXRvcC1mcmFtZVwiKSA6IHVua25vd25Pd25lckRlYnVnU3RhY2ssXG4gICAgICAgIHByb3BOYW1lID8gY3JlYXRlVGFzayhnZXRUYXNrTmFtZSh0eXBlKSkgOiB1bmtub3duT3duZXJEZWJ1Z1Rhc2tcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZVJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZWZPYmplY3QgPSB7IGN1cnJlbnQ6IG51bGwgfTtcbiAgICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gICAgICByZXR1cm4gcmVmT2JqZWN0O1xuICAgIH07XG4gICAgZXhwb3J0cy5mb3J3YXJkUmVmID0gZnVuY3Rpb24gKHJlbmRlcikge1xuICAgICAgbnVsbCAhPSByZW5kZXIgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEVcbiAgICAgICAgPyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCBjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgbWVtbyhmb3J3YXJkUmVmKC4uLikpLlwiXG4gICAgICAgICAgKVxuICAgICAgICA6IFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHJlbmRlclxuICAgICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuXCIsXG4gICAgICAgICAgICAgIG51bGwgPT09IHJlbmRlciA/IFwibnVsbFwiIDogdHlwZW9mIHJlbmRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMCAhPT0gcmVuZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgMiAhPT0gcmVuZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzXCIsXG4gICAgICAgICAgICAgIDEgPT09IHJlbmRlci5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IFwiRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyP1wiXG4gICAgICAgICAgICAgICAgOiBcIkFueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmXG4gICAgICAgIG51bGwgIT0gcmVuZGVyLmRlZmF1bHRQcm9wcyAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGRlZmF1bHRQcm9wcy4gRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD9cIlxuICAgICAgICApO1xuICAgICAgdmFyIGVsZW1lbnRUeXBlID0geyAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSwgcmVuZGVyOiByZW5kZXIgfSxcbiAgICAgICAgb3duTmFtZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgXCJkaXNwbGF5TmFtZVwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIG93bk5hbWUgPSBuYW1lO1xuICAgICAgICAgIHJlbmRlci5uYW1lIHx8XG4gICAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkocmVuZGVyLCBcIm5hbWVcIiwgeyB2YWx1ZTogbmFtZSB9KSxcbiAgICAgICAgICAgIChyZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGVsZW1lbnRUeXBlO1xuICAgIH07XG4gICAgZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuICAgIGV4cG9ydHMubGF6eSA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgICAgICBfcGF5bG9hZDogeyBfc3RhdHVzOiAtMSwgX3Jlc3VsdDogY3RvciB9LFxuICAgICAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5tZW1vID0gZnVuY3Rpb24gKHR5cGUsIGNvbXBhcmUpIHtcbiAgICAgIG51bGwgPT0gdHlwZSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwibWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXCIsXG4gICAgICAgICAgbnVsbCA9PT0gdHlwZSA/IFwibnVsbFwiIDogdHlwZW9mIHR5cGVcbiAgICAgICAgKTtcbiAgICAgIGNvbXBhcmUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNvbXBhcmU6IHZvaWQgMCA9PT0gY29tcGFyZSA/IG51bGwgOiBjb21wYXJlXG4gICAgICB9O1xuICAgICAgdmFyIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcGFyZSwgXCJkaXNwbGF5TmFtZVwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIG93bk5hbWUgPSBuYW1lO1xuICAgICAgICAgIHR5cGUubmFtZSB8fFxuICAgICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIm5hbWVcIiwgeyB2YWx1ZTogbmFtZSB9KSxcbiAgICAgICAgICAgICh0eXBlLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21wYXJlO1xuICAgIH07XG4gICAgZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0ge307XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscy5UID0gY3VycmVudFRyYW5zaXRpb247XG4gICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHNjb3BlKCksXG4gICAgICAgICAgb25TdGFydFRyYW5zaXRpb25GaW5pc2ggPSBSZWFjdFNoYXJlZEludGVybmFscy5TO1xuICAgICAgICBudWxsICE9PSBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaCAmJlxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoKGN1cnJlbnRUcmFuc2l0aW9uLCByZXR1cm5WYWx1ZSk7XG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIG51bGwgIT09IHJldHVyblZhbHVlICYmXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUudGhlbiAmJlxuICAgICAgICAgIHJldHVyblZhbHVlLnRoZW4obm9vcCwgcmVwb3J0R2xvYmFsRXJyb3IpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVwb3J0R2xvYmFsRXJyb3IoZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbnVsbCA9PT0gcHJldlRyYW5zaXRpb24gJiZcbiAgICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyAmJlxuICAgICAgICAgICgoc2NvcGUgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplKSxcbiAgICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpLFxuICAgICAgICAgIDEwIDwgc2NvcGUgJiZcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uIElmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuIE90aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS5cIlxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQgPSBwcmV2VHJhbnNpdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBleHBvcnRzLnVuc3RhYmxlX3VzZUNhY2hlUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUNhY2hlUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2UgPSBmdW5jdGlvbiAodXNhYmxlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2UodXNhYmxlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlQWN0aW9uU3RhdGUgPSBmdW5jdGlvbiAoYWN0aW9uLCBpbml0aWFsU3RhdGUsIHBlcm1hbGluaykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQWN0aW9uU3RhdGUoXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBwZXJtYWxpbmtcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUNvbnRleHQgPSBmdW5jdGlvbiAoQ29udGV4dCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgICAgQ29udGV4dC4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OU1VNRVJfVFlQRSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgY2F1c2UgYnVncy4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlZmVycmVkVmFsdWUodmFsdWUsIGluaXRpYWxWYWx1ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGNyZWF0ZURlcHMsIHVwZGF0ZSkge1xuICAgICAgbnVsbCA9PSBjcmVhdGUgJiZcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiUmVhY3QgSG9vayB1c2VFZmZlY3QgcmVxdWlyZXMgYW4gZWZmZWN0IGNhbGxiYWNrLiBEaWQgeW91IGZvcmdldCB0byBwYXNzIGEgY2FsbGJhY2sgdG8gdGhlIGhvb2s/XCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB1cGRhdGUpXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwidXNlRWZmZWN0IENSVUQgb3ZlcmxvYWQgaXMgbm90IGVuYWJsZWQgaW4gdGhpcyBidWlsZCBvZiBSZWFjdC5cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgY3JlYXRlRGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSWQoKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IGZ1bmN0aW9uIChyZWYsIGNyZWF0ZSwgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlSW5zZXJ0aW9uRWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgbnVsbCA9PSBjcmVhdGUgJiZcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiUmVhY3QgSG9vayB1c2VMYXlvdXRFZmZlY3QgcmVxdWlyZXMgYW4gZWZmZWN0IGNhbGxiYWNrLiBEaWQgeW91IGZvcmdldCB0byBwYXNzIGEgY2FsbGJhY2sgdG8gdGhlIGhvb2s/XCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VNZW1vID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VPcHRpbWlzdGljID0gZnVuY3Rpb24gKHBhc3N0aHJvdWdoLCByZWR1Y2VyKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VPcHRpbWlzdGljKHBhc3N0aHJvdWdoLCByZWR1Y2VyKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlUmVkdWNlciA9IGZ1bmN0aW9uIChyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VSZWYgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlU3RhdGUgPSBmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZ1bmN0aW9uIChcbiAgICAgIHN1YnNjcmliZSxcbiAgICAgIGdldFNuYXBzaG90LFxuICAgICAgZ2V0U2VydmVyU25hcHNob3RcbiAgICApIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIGdldFNuYXBzaG90LFxuICAgICAgICBnZXRTZXJ2ZXJTbmFwc2hvdFxuICAgICAgKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVRyYW5zaXRpb24oKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudmVyc2lvbiA9IFwiMTkuMS4wXCI7XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AoRXJyb3IoKSk7XG4gIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZnJvbSBgcHJlLXB1Ymxpc2guanNgLlxuICogRG8gbm90IG1hbnVhbGx5IGVkaXQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYXJlYVwiOiB0cnVlLFxuICBcImJhc2VcIjogdHJ1ZSxcbiAgXCJiclwiOiB0cnVlLFxuICBcImNvbFwiOiB0cnVlLFxuICBcImVtYmVkXCI6IHRydWUsXG4gIFwiaHJcIjogdHJ1ZSxcbiAgXCJpbWdcIjogdHJ1ZSxcbiAgXCJpbnB1dFwiOiB0cnVlLFxuICBcImxpbmtcIjogdHJ1ZSxcbiAgXCJtZXRhXCI6IHRydWUsXG4gIFwicGFyYW1cIjogdHJ1ZSxcbiAgXCJzb3VyY2VcIjogdHJ1ZSxcbiAgXCJ0cmFja1wiOiB0cnVlLFxuICBcIndiclwiOiB0cnVlXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5pbXBvcnQgKiBhcyBOb3RpZmljYXRpb25zIGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2Uvbm90aWZpY2F0aW9uc1wiO1xuXG5jb25zdCBOT1RJRklDQVRJT05fU09VTkRfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvYXNzZXRzL25vdGlmaWNhdGlvbi5tcDNcIjtcblxuLy8gS2VlcCB0cmFjayBvZiBub3RpZmljYXRpb25zIHdlIGFyZSB1cGRhdGluZ1xuY29uc3QgdXBkYXRhYmxlTm90aWZpY2F0aW9uczoge1xuXHRbaWQ6IHN0cmluZ106IE5vdGlmaWNhdGlvbnMuVGVtcGxhdGVNYXJrZG93biAmIHsgY3VzdG9tRGF0YTogeyBjb3VudDogbnVtYmVyIH0gfTtcbn0gPSB7fTtcbmxldCB1cGRhdGFibGVOb3RpZmljYXRpb25UaW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5sZXQgbG9nZ2luZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbmxldCBjb2RlRWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGw7XG5cbmxldCBjb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBjb25uZWN0ZWRWZXJzaW9uOiBzdHJpbmcgfCBudWxsO1xubGV0IHN0YXR1c0ludGVydmFsSWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbmxldCBsYXN0Q29ubmVjdGlvblN0YXR1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0XHRhd2FpdCBpbml0aWFsaXplTm90aWZpY2F0aW9ucygpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgRE9NIGVsZW1lbnRzIGFuZCBzZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgVUkgY29udHJvbHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGxvZ2dpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dnaW5nXCIpO1xuXHRjb2RlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZVwiKTtcblx0Y29uc3QgbG9nZ2luZ0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dnaW5nLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgY29kZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RlLWNvbnRhaW5lclwiKTtcblxuXHRpZiAoIWNvZGVFbGVtZW50IHx8ICFsb2dnaW5nRWxlbWVudCB8fCAhbG9nZ2luZ0NvbnRhaW5lciB8fCAhY29kZUNvbnRhaW5lcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShgTGlicmFyeSBWZXJzaW9uOiAke05vdGlmaWNhdGlvbnMuVkVSU0lPTn1gKTtcblxuXHRjb25zdCBidG5Mb2dnaW5nQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkxvZ2dpbmdDbGVhclwiKTtcblx0aWYgKGJ0bkxvZ2dpbmdDbGVhcikge1xuXHRcdGJ0bkxvZ2dpbmdDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0XHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNvZGVDb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db2RlQ29weVwiKTtcblx0aWYgKGJ0bkNvZGVDb3B5KSB7XG5cdFx0YnRuQ29kZUNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IGNvZGVFbGVtZW50LnZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29kZU5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ29kZU5vdGlmaWNhdGlvblwiKTtcblx0aWYgKGJ0bkNvZGVOb3RpZmljYXRpb24pIHtcblx0XHRidG5Db2RlTm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRcdFx0XHRjb25zdCBub3RpZmljYXRpb25PcHRpb25zOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSBKU09OLnBhcnNlKGNvZGVFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0XHRub3RpZmljYXRpb25PcHRpb25zLmlkID0gcmFuZG9tVVVJRCgpO1xuXHRcdFx0XHRcdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb25PcHRpb25zKTtcblx0XHRcdFx0XHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb25PcHRpb25zKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29kZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdEpTT04ucGFyc2UoY29kZUVsZW1lbnQudmFsdWUpO1xuXHRcdFx0XHRjb2RlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29kZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Y29kZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0aWYgKGxvZ2dpbmdDb250YWluZXIpIHtcblx0XHRsb2dnaW5nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0fVxuXG5cdGNvbnN0IGJ0blZpZXdMb2dnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5WaWV3TG9nZ2luZ1wiKTtcblx0aWYgKGJ0blZpZXdMb2dnaW5nKSB7XG5cdFx0YnRuVmlld0xvZ2dpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxvZ2dpbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0Y29kZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5WaWV3Q29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuVmlld0NvZGVcIik7XG5cdGlmIChidG5WaWV3Q29kZSkge1xuXHRcdGJ0blZpZXdDb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdGNvZGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uU2ltcGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25TaW1wbGVcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25TaW1wbGUpIHtcblx0XHRidG5Ob3RpZmljYXRpb25TaW1wbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dTaW1wbGVOb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzcykge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93U2ltcGxlTm90aWZpY2F0aW9uQm9keURpc21pc3MoKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb25cIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzQWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PlxuXHRcdFx0c2hvd1NpbXBsZU5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzQWN0aW9uKClcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQWN0aW9uYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uQWN0aW9uYWJsZVwiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbkFjdGlvbmFibGUpIHtcblx0XHRidG5Ob3RpZmljYXRpb25BY3Rpb25hYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93QWN0aW9uYWJsZU5vdGlmaWNhdGlvbigpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkZvcm1cIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25Gb3JtKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd0Zvcm1Ob3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkZvcm1BZHZhbmNlZFwiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbkZvcm1BZHZhbmNlZCkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkZvcm1BZHZhbmNlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd0Zvcm1BZHZhbmNlZE5vdGlmaWNhdGlvbigpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvblVwZGF0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uVXBkYXRhYmxlXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uVXBkYXRhYmxlKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uVXBkYXRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93VXBkYXRhYmxlTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQ3VzdG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25DdXN0b21cIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25DdXN0b20pIHtcblx0XHRidG5Ob3RpZmljYXRpb25DdXN0b20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dDdXN0b21Ob3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25XaXRoU291bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbldpdGhTb3VuZFwiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbldpdGhTb3VuZCkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbldpdGhTb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cblx0XHRcdHNob3dTb3VuZE5vdGlmaWNhdGlvbihOT1RJRklDQVRJT05fU09VTkRfVVJMKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkNlbnRlclVzZXJTZXR0aW5nc1wiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbkNlbnRlclVzZXJTZXR0aW5ncykge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkNlbnRlclVzZXJTZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cblx0XHRcdGdldE5vdGlmaWNhdGlvbkNlbnRlclVzZXJTZXR0aW5ncygpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbldpdGhJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbldpdGhJbmRpY2F0b3JcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25XaXRoSW5kaWNhdG9yKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uV2l0aEluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd0luZGljYXRvck5vdGlmaWNhdGlvbigpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbldpdGhDdXN0b21JbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbldpdGhDdXN0b21JbmRpY2F0b3JcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25XaXRoQ3VzdG9tSW5kaWNhdG9yKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uV2l0aEN1c3RvbUluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cblx0XHRcdHNob3dDdXN0b21JbmRpY2F0b3JOb3RpZmljYXRpb24oKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93XCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cpIHtcblx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRhd2FpdCBOb3RpZmljYXRpb25zLnNob3coKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYCR7ZXJyfWApO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJIaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGVcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZSkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJIaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdGF3YWl0IE5vdGlmaWNhdGlvbnMuaGlkZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgJHtlcnJ9YCk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uU3R1ZGlvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bk5vdGlmaWNhdGlvblN0dWRpb09wZW5cIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25TdHVkaW9PcGVuKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uU3R1ZGlvT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uU3R1ZGlvT3Blbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChcImh0dHBzOi8vY2RuLm9wZW5maW4uY28vc3R1ZGlvL25vdGlmaWNhdGlvbi9hcHAuanNvblwiKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBub3RpZmljYXRpb25zIGJ5IHJlZ2lzdGVyaW5nIGFuZCBsb2dnaW5nIHRoZSBjb3VudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZU5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoKTtcblx0YXdhaXQgaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuXHRjb25zb2xlLmxvZyhcIk51bWJlciBvZiBub3RpZmljYXRpb25zOlwiLCBhd2FpdCBOb3RpZmljYXRpb25zLmdldE5vdGlmaWNhdGlvbnNDb3VudCgpKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBldmVudHMgZnJvbSB0aGUgbm90aWZpY2F0aW9uIGNlbnRlci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUxpc3RlbmVycygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gTGlzdGVuIGZvciBuZXcgbm90aWZpY2F0aW9ucyBiZWluZyBjcmVhdGVkXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1jcmVhdGVkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ3JlYXRlZDogJHtldmVudC5ub3RpZmljYXRpb24uaWR9YCk7XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDbG9zZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXG5cdFx0aWYgKHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbZXZlbnQubm90aWZpY2F0aW9uLmlkXSkge1xuXHRcdFx0ZGVsZXRlIHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbZXZlbnQubm90aWZpY2F0aW9uLmlkXTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGFibGVOb3RpZmljYXRpb25zKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodXBkYXRhYmxlTm90aWZpY2F0aW9uVGltZXIpO1xuXHRcdFx0XHR1cGRhdGFibGVOb3RpZmljYXRpb25UaW1lciA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1hY3Rpb25cIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50Py5yZXN1bHQ/LmFjdGlvbklkID09PSBcIm9wZW4td2ViLXNpdGVcIikge1xuXHRcdFx0YXdhaXQgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIoZXZlbnQ/LnJlc3VsdD8udXJsIGFzIHN0cmluZyk7XG5cdFx0fSBlbHNlIGlmIChldmVudD8ucmVzdWx0Py5CT0RZX0NMSUNLID09PSBcImRpc21pc3NfZXZlbnRcIikge1xuXHRcdFx0aWYgKGV2ZW50Lm5vdGlmaWNhdGlvbj8uY3VzdG9tRGF0YT8uYWN0aW9uKSB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRgXFx0RGF0YTogJHtcblx0XHRcdFx0XHRcdGV2ZW50Py5ub3RpZmljYXRpb24/LmN1c3RvbURhdGEgPyBKU09OLnN0cmluZ2lmeShldmVudC5ub3RpZmljYXRpb24uY3VzdG9tRGF0YSkgOiBcIk5vbmVcIlxuXHRcdFx0XHRcdH1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJcXHRObyBhY3Rpb25cIik7XG5cdFx0XHR9XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJcXHRCb2R5IGNsaWNrIGRpc21pc3NcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0YFxcdERhdGE6ICR7ZXZlbnQ/LnJlc3VsdD8uY3VzdG9tRGF0YSA/IEpTT04uc3RyaW5naWZ5KGV2ZW50LnJlc3VsdC5jdXN0b21EYXRhKSA6IFwiTm9uZVwifWBcblx0XHRcdCk7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoYFxcdFRhc2s6ICR7ZXZlbnQ/LnJlc3VsdD8udGFzayA/PyBcIk5vbmVcIn1gKTtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgQWN0aW9uOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi10b2FzdC1kaXNtaXNzZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBUb2FzdCBEaXNtaXNzZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBcXHREYXRhOiAke2V2ZW50Py5mb3JtID8gSlNPTi5zdHJpbmdpZnkoZXZlbnQuZm9ybSkgOiBcIk5vbmVcIn1gKTtcblx0XHRsb2dnaW5nQWRkRW50cnkoYEZvcm06ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCIsIChldmVudCkgPT4ge1xuXHRcdHNob3dOb3RpZmljYXRpb25Db3VudChldmVudC5jb3VudCk7XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbi1zb3VuZC10b2dnbGVkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgU291bmQgRW5hYmxlZDogJHtldmVudC5ub3RpZmljYXRpb25Tb3VuZEVuYWJsZWR9YCk7XG5cdH0pO1xuXG5cdGFkZENvbm5lY3Rpb25DaGFuZ2VkRXZlbnRMaXN0ZW5lcigoc3RhdHVzKSA9PiB7XG5cdFx0aWYgKHN0YXR1cy5jb25uZWN0ZWQgIT09IGNvbm5lY3RlZCkge1xuXHRcdFx0Y29ubmVjdGVkID0gc3RhdHVzLmNvbm5lY3RlZDtcblx0XHRcdGNvbm5lY3RlZFZlcnNpb24gPSBzdGF0dXMudmVyc2lvbjtcblx0XHRcdHVwZGF0ZUNvbm5lY3RlZFN0YXRlKCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gVVVJRCBzdHJpbmcuXG4gKiBAcmV0dXJucyBBIHJhbmRvbWx5IGdlbmVyYXRlZCBVVUlELlxuICovXG5mdW5jdGlvbiByYW5kb21VVUlEKCk6IHN0cmluZyB7XG5cdGlmIChcInJhbmRvbVVVSURcIiBpbiB3aW5kb3cuY3J5cHRvKSB7XG5cdFx0Ly8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LmNyeXB0by5yYW5kb21VVUlELCB1c2UgaXRcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRyZXR1cm4gd2luZG93LmNyeXB0by5yYW5kb21VVUlEKCk7XG5cdH1cblx0Ly8gUG9seWZpbGwgdGhlIHdpbmRvdy5jcnlwdG8ucmFuZG9tVVVJRCBpZiB3ZSBhcmUgcnVubmluZyBpbiBhIG5vbiBzZWN1cmUgY29udGV4dCB0aGF0IGRvZXNuJ3QgaGF2ZSBpdFxuXHQvLyB3ZSBhcmUgc3RpbGwgdXNpbmcgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMgd2hpY2ggaXMgYWx3YXlzIGF2YWlsYWJsZVxuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyMy8yODAwMjE4XG5cdC8qKlxuXHQgKiBHZXQgcmFuZG9tIGhleCB2YWx1ZS5cblx0ICogQHBhcmFtIGMgVGhlIG51bWJlciB0byBiYXNlIHRoZSByYW5kb20gdmFsdWUgb24uXG5cdCAqIEByZXR1cm5zIFRoZSByYW5kb20gdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRSYW5kb21IZXgoYzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdGNvbnN0IHJuZCA9IHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0KE51bWJlcihjKSBeIHJuZCkudG9TdHJpbmcoMTYpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCBnZXRSYW5kb21IZXgpO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cuXG4gKiBAcGFyYW0gZW50cnkgVGhlIGVudHJ5IHRvIGFkZC5cbiAqL1xuZnVuY3Rpb24gbG9nZ2luZ0FkZEVudHJ5KGVudHJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlbnRyeX1cXG5cXG4ke2xvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50fWA7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGNvZGUgZXhhbXBsZSB3aXRoIHRoZSBub3RpZmljYXRpb24uXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uT3B0aW9ucyBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBjb2RlIGV4YW1wbGUuXG4gKi9cbmZ1bmN0aW9uIGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb25PcHRpb25zOiBOb3RpZmljYXRpb25PcHRpb25zKTogdm9pZCB7XG5cdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdGNvZGVFbGVtZW50LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uT3B0aW9ucywgdW5kZWZpbmVkLCBcIiAgXCIpO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBjb25uZWN0ZWQgc3RhdGUgb24gdGhlIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3RlZFN0YXRlKCk6IHZvaWQge1xuXHRsb2dnaW5nQWRkRW50cnkoYElzIENvbm5lY3RlZDogJHtjb25uZWN0ZWR9YCk7XG5cdGlmIChjb25uZWN0ZWQpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENvbm5lY3RlZCBWZXJzaW9uOiAke2Nvbm5lY3RlZFZlcnNpb259YCk7XG5cdH1cblxuXHRjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuXHRcdGJ1dHRvbi5kaXNhYmxlZCA9ICFjb25uZWN0ZWQ7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIG5vdGlmaWNhdGlvbiBjb3VudCBvbiB0aGUgdmlldy5cbiAqIEBwYXJhbSBjb3VudCBUaGUgbmV3IGNvdW50IHRvIGRpc3BsYXkuXG4gKi9cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25Db3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvd1wiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93KSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cudGV4dENvbnRlbnQgPSBgU2hvdyBbJHtjb3VudH1dYDtcblx0fVxufVxuXG4vKipcbiAqIERpc3BsYXkgYSB2ZXJ5IGJhc2ljIHNpbXBsZSBub3RpZmljYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dTaW1wbGVOb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIlNpbXBsZSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBzaW1wbGUgbm90aWZpY2F0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRzb3VuZE9wdGlvbnM6IHtcblx0XHRcdG1vZGU6IFwic2lsZW50XCJcblx0XHR9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aGljaCBjYW4gYmUgZGlzbWlzc2VkIGJ5IGNsaWNraW5nIG9uIHRoZSBib2R5LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93U2ltcGxlTm90aWZpY2F0aW9uQm9keURpc21pc3MoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIlNpbXBsZSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBzaW1wbGUgbm90aWZpY2F0aW9uIHRoYXQgYmUgZGlzbWlzc2VkIGJ5IGNsaWNraW5nIHRoZSBib2R5XCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRvblNlbGVjdDogeyBCT0RZX0NMSUNLOiBOb3RpZmljYXRpb25zLkFjdGlvbkJvZHlDbGlja1R5cGUuRElTTUlTU19FVkVOVCB9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aGljaCBjYW4gYmUgZGlzbWlzc2VkIGJ5IGNsaWNraW5nIG9uIHRoZSBib2R5IGFuZCB0aGVuIHRyaWdnZXIgYSBjdXN0b20gYWN0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93U2ltcGxlTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIlNpbXBsZSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBzaW1wbGUgbm90aWZpY2F0aW9uIHRoYXQgYmUgZGlzbWlzc2VkIGJ5IGNsaWNraW5nIHRoZSBib2R5IGFuZCB0cmlnZ2VyIGN1c3RvbSBhY3Rpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdG9uU2VsZWN0OiB7IEJPRFlfQ0xJQ0s6IE5vdGlmaWNhdGlvbnMuQWN0aW9uQm9keUNsaWNrVHlwZS5ESVNNSVNTX0VWRU5UIH0sXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0YWN0aW9uOiBcImN1c3RvbS1hY3Rpb25cIixcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0bWVzc2FnZTogXCJCb2R5IGNsaWNrIGN1c3RvbSBhY3Rpb25cIlxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdoaWNoIGhhcyBhY3Rpb24gYnV0dG9ucywgdGhlIGV2ZW50cyByZXR1cm5lZCB3aWxsXG4gKiBiZSBoYW5kbGVkIHRoZSB0aGUgbm90aWZpY2F0aW9uLWFjdGlvbiBsaXN0ZW5lci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0FjdGlvbmFibGVOb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkFjdGlvbmFibGUgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgbm90aWZpY2F0aW9uIHRoYXQgaGFzIGFuIGFjdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJBY2tub3dsZWRnZWRcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0Y3RhOiB0cnVlLFxuXHRcdFx0XHRvbkNsaWNrOiB7XG5cdFx0XHRcdFx0dGFzazogXCJhY2tub3dsZWRnZS10YXNrXCIsXG5cdFx0XHRcdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0XHRcdFx0bWVzc2FnZTogXCJUaGlzIGlzIHRoZSByZXNwb25zZSBkYXRhXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkNhbmNlbFwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2hpY2ggaGFzIGZvcm0gZmllbGRzLCB0aGUgZGF0YSBmcm9tIHRoZSBmb3JtIHdpbGxcbiAqIGJlIHJldHVybmVkIHRvIHRoZSBub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWQgbGlzdGVuZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dGb3JtTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJGb3JtIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIG5vdGlmaWNhdGlvbiB0aGF0IGhhcyBmb3JtIGRhdGFcIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdGZvcm06IFtcblx0XHRcdHtcblx0XHRcdFx0a2V5OiBcImFtb3VudFwiLFxuXHRcdFx0XHRsYWJlbDogXCJBbW91bnRcIixcblx0XHRcdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJOdW1iZXJcIixcblx0XHRcdFx0XHRtYXg6IDEwMCxcblx0XHRcdFx0XHRtaW46IDFcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdG1pbjoge1xuXHRcdFx0XHRcdFx0YXJnOiAxLFxuXHRcdFx0XHRcdFx0aW52YWxpZE1lc3NhZ2U6IFwiTXVzdCBiZSBhdCBsZWFzdCAxXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1heDoge1xuXHRcdFx0XHRcdFx0YXJnOiAxMDAsXG5cdFx0XHRcdFx0XHRpbnZhbGlkTWVzc2FnZTogXCJDYW5ub3QgYmUgbW9yZSB0aGFuIDEwMFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlNhdmVcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0Y3RhOiB0cnVlLFxuXHRcdFx0XHRzdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkNhbmNlbFwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2hpY2ggaGFzIGZvcm0gZmllbGRzLCB0aGUgZGF0YSBmcm9tIHRoZSBmb3JtIHdpbGxcbiAqIGJlIHJldHVybmVkIHRvIHRoZSBub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWQgbGlzdGVuZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dGb3JtQWR2YW5jZWROb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkZvcm0gQWR2YW5jZWQgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgbm90aWZpY2F0aW9uIHRoYXQgaGFzIGZvcm0gZGF0YVwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0Zm9ybTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRrZXk6IFwiYm9va1wiLFxuXHRcdFx0XHRsYWJlbDogXCJCb29rXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiVGhpcyBpcyB1c2VkIHRvIGxvb2sgdXAgZm9yIGJvb2tcIixcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJUZXh0XCIsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiQm9vayBuYW1lXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdG1pbjoge1xuXHRcdFx0XHRcdFx0YXJnOiA3LFxuXHRcdFx0XHRcdFx0aW52YWxpZE1lc3NhZ2U6IFwiTXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJzIGxvbmdcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWF4OiB7XG5cdFx0XHRcdFx0XHRhcmc6IDksXG5cdFx0XHRcdFx0XHRpbnZhbGlkTWVzc2FnZTogXCJNdXN0IGJlIGF0IG1vc3QgOSBjaGFycyBsb25nXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlOiBcIjEyMzQ1NTRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJ0aW1lXCIsXG5cdFx0XHRcdGtleTogXCJ3aGF0X3RpbWVcIixcblx0XHRcdFx0bGFiZWw6IFwiQ2hvc2UgdGltZT9cIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJTb21lIHRpbWUgY2hvb3NpbmcgaGVscGVyIHRleHRcIixcblx0XHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0XHRob3VyOiAxMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJUaW1lXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJkYXRlXCIsXG5cdFx0XHRcdGtleTogXCJkYXRlX3BpY2t1cFwiLFxuXHRcdFx0XHRsYWJlbDogXCJXaGVuIHRvIHBpY2sgdXA/XCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiU29tZSBkYXRlIGNob29zaW5nIGhlbHBlciB0ZXh0XCIsXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIkRhdGVcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRrZXk6IFwiYm9vazJcIixcblx0XHRcdFx0bGFiZWw6IFwiQm9vayBUeXBlXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiVGhpcyBpcyB1c2VkIHRvIGxvb2sgdXAgZm9yIGJvb2tcIixcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiRHJvcGRvd25cIixcblx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcImJvb2sxXCIsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkJvb2sgMVwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJib29rMlwiLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJCb29rIDJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiYm9vazNcIixcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiQm9vayAzXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwicmFkaW9Hcm91cFwiLFxuXHRcdFx0XHRrZXk6IFwicmFkaW9Hcm91cERlbW9cIixcblx0XHRcdFx0bGFiZWw6IFwiQ2hvc2Ugb25lXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiU29tZSByYWRpbyBjaG9vc2luZyBoZWxwZXIgdGV4dFwiLFxuXHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fMVwiLFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJSYWRpb0dyb3VwXCIsXG5cdFx0XHRcdFx0Z3JvdXA6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDFcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzFcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDJcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDNcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzNcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJjaGVja2JveEdyb3VwXCIsXG5cdFx0XHRcdGtleTogXCJjaGVja2JveEdyb3VwRGVtb1wiLFxuXHRcdFx0XHRsYWJlbDogXCJDaG9zZSBNdWx0aXBsZVwiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlNvbWUgY2hlY2tib3ggY2hvb3NpbmcgaGVscGVyIHRleHRcIixcblx0XHRcdFx0dmFsdWU6IFtcIm9wdGlvbl8xXCIsIFwib3B0aW9uXzJcIl0sXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIkNoZWNrYm94R3JvdXBcIixcblx0XHRcdFx0XHRncm91cDogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gMVwiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fMVwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gMlwiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fMlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJPcHRpb24gM1wiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJvcHRpb25fM1wiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRrZXk6IFwiZGVzY3JpcHRpb25cIixcblx0XHRcdFx0bGFiZWw6IFwiRGVzY3JpcHRpb25cIixcblx0XHRcdFx0dmFsdWU6IFwidmVyeSBsb25nIHRleHQuLi4uXCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiVGhpcyBpcyB1c2VkIHRvIGxvb2sgdXAgZm9yIGJvb2tcIixcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJUZXh0XCIsXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiB0cnVlLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIldyaXRlIGRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFx0cm93czogNVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcIm51bWJlclwiLFxuXHRcdFx0XHRrZXk6IFwiYWdlXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkFnZVwiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlRoaXMgaXMgdXNlZCB0byBsb29rIHVwIGZvciBib29rXCIsXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiTnVtYmVyXCIsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiRW50ZXIgYWdlXCIsXG5cdFx0XHRcdFx0bWluOiAxLFxuXHRcdFx0XHRcdG1heDogOFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0bWluOiB7XG5cdFx0XHRcdFx0XHRhcmc6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1heDoge1xuXHRcdFx0XHRcdFx0YXJnOiA5XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlNhdmVcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0Y3RhOiB0cnVlLFxuXHRcdFx0XHRzdWJtaXQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIkNhbmNlbFwiLFxuXHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gdGhhdCBjYW4gYmUgdXBkYXRlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1VwZGF0YWJsZU5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgaWQgPSByYW5kb21VVUlEKCk7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zICYgeyBjdXN0b21EYXRhOiB7IGNvdW50OiBudW1iZXIgfSB9ID0ge1xuXHRcdHRpdGxlOiBcIlVwZGF0YWJsZSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYW4gdXBkYXRhYmxlIG5vdGlmaWNhdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGNvdW50OiAwXG5cdFx0fSxcblx0XHRpZFxuXHR9O1xuXG5cdGlmIChPYmplY3Qua2V5cyh1cGRhdGFibGVOb3RpZmljYXRpb25zKS5sZW5ndGggPT09IDApIHtcblx0XHR1cGRhdGFibGVOb3RpZmljYXRpb25UaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IG5vdGlmaWNhdGlvbklkIGluIHVwZGF0YWJsZU5vdGlmaWNhdGlvbnMpIHtcblx0XHRcdFx0dXBkYXRhYmxlTm90aWZpY2F0aW9uc1tub3RpZmljYXRpb25JZF0uY3VzdG9tRGF0YS5jb3VudCsrO1xuXHRcdFx0XHRjb25zdCBub3RpZmljYXRpb25VcGRhdGU6IE5vdGlmaWNhdGlvbnMuVXBkYXRhYmxlTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdFx0XHRcdGJvZHk6IGBUaGlzIGlzIGFuIHVwZGF0YWJsZSBub3RpZmljYXRpb24gJHt1cGRhdGFibGVOb3RpZmljYXRpb25zW25vdGlmaWNhdGlvbklkXS5jdXN0b21EYXRhLmNvdW50fWAsXG5cdFx0XHRcdFx0aWQ6IG5vdGlmaWNhdGlvbklkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0YXdhaXQgTm90aWZpY2F0aW9ucy51cGRhdGUobm90aWZpY2F0aW9uVXBkYXRlKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwKTtcblx0fVxuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xuXG5cdHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbaWRdID0gbm90aWZpY2F0aW9uO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2l0aCBjdXN0b20gY29udGVudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0N1c3RvbU5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiQ3VzdG9tIE5vdGlmaWNhdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJjdXN0b21cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdHRlbXBsYXRlT3B0aW9uczoge1xuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRjb21wb3NpdGlvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtaW5UZW1wbGF0ZUFQSVZlcnNpb246IFwiMVwiLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRnYXA6IFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcInN1YlRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJmaXJzdFZhbHVlVGl0bGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJmaXJzdFZhbHVlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcInJlZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJzZWNvbmRWYWx1ZVRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEycHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwic2Vjb25kVmFsdWVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTRweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IFwiYmx1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImV4YW1wbGVJbWFnZVVybFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWN0aW9uYWJsZVRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiYWN0aW9uYWJsZVVybFRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0b29sdGlwS2V5OiBcImFjdGlvbmFibGVVcmxUb29sdGlwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbklkOiBcIm9wZW4td2ViLXNpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vb3BlbmZpbi5jb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJncmlkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IFwiYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiYzBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiYzFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImMyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDAwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMDFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQwMlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDEwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMTFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQxMlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVtcGxhdGVEYXRhOiB7XG5cdFx0XHRzdWJUaXRsZTogXCJTdWIgVGl0bGUg8J+agFwiLFxuXHRcdFx0Zmlyc3RWYWx1ZVRpdGxlOiBcIkZpcnN0IFZhbHVlXCIsXG5cdFx0XHRmaXJzdFZhbHVlOiBcIjEwMFwiLFxuXHRcdFx0c2Vjb25kVmFsdWVUaXRsZTogXCJTZWNvbmQgVmFsdWVcIixcblx0XHRcdHNlY29uZFZhbHVlOiBcIjIwMFwiLFxuXHRcdFx0YzA6IFwiQ29sIDFcIixcblx0XHRcdGMxOiBcIkNvbCAyXCIsXG5cdFx0XHRjMjogXCJDb2wgM1wiLFxuXHRcdFx0ZDAwOiBcIjUwXCIsXG5cdFx0XHRkMDE6IFwiMTUwXCIsXG5cdFx0XHRkMDI6IFwiMjUwXCIsXG5cdFx0XHRkMTA6IFwiNTUwXCIsXG5cdFx0XHRkMTE6IFwiNjUwXCIsXG5cdFx0XHRkMTI6IFwiNzUwXCIsXG5cdFx0XHRleGFtcGxlSW1hZ2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2ltYWdlcy9leGFtcGxlLnBuZ1wiLFxuXHRcdFx0YWN0aW9uYWJsZVVybFRpdGxlOiBcIk9wZW5GaW4gV2Vic2l0ZVwiLFxuXHRcdFx0YWN0aW9uYWJsZVVybFRvb2x0aXA6IFwiaHR0cDovL3d3dy5vcGVuZmluLmNvXCJcblx0XHR9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiBhbmQgcGxheSBhIHNvdW5kIHdpdGggaXQuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uU291bmRVcmwgVGhlIHVybCBvZiB0aGUgc291bmRzIGZpbGUgdG8gcGxheS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1NvdW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblNvdW5kVXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gd2UgZGlzYWJsZSB0aGUgc291bmQgaWYgaXQgaXMgZW5hYmxlZCBhdCB0aGUgTm90aWZpY2F0aW9uIENlbnRlciBsZXZlbFxuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJTb3VuZCBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBub3RpZmljYXRpb24gd2l0aCBzb3VuZCDwn5SJXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0c291bmRPcHRpb25zOiB7IG1vZGU6IFwic2lsZW50XCIgfSxcblx0XHRpZDogcmFuZG9tVVVJRCgpXG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IHBsYXlOb3RpZmljYXRpb24obm90aWZpY2F0aW9uU291bmRVcmwpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdXNlciBzZXR0aW5ncyBmb3IgdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbkNlbnRlclVzZXJTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc3RhdHVzID0gYXdhaXQgTm90aWZpY2F0aW9ucy5nZXRVc2VyU2V0dGluZ1N0YXR1cyhOb3RpZmljYXRpb25zLlVzZXJTZXR0aW5ncy5TT1VORF9FTkFCTEVEKTtcblx0bG9nZ2luZ0FkZEVudHJ5KGBTb3VuZCBFbmFibGVkOiAke3N0YXR1c31gKTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgbm90aWZpY2F0aW9uIHRoYXQgaGFzIGFuIGluZGljYXRvciBiYXIgb24gdGhlIGxlZnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dJbmRpY2F0b3JOb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkluZGljYXRvciBOb3RpZmljYXRpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRpbmRpY2F0b3I6IHtcblx0XHRcdHRleHQ6IFwiTGltaXRcIlxuXHRcdH0sXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcImN1c3RvbVwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0dGVtcGxhdGVPcHRpb25zOiB7XG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGNvbXBvc2l0aW9uczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1pblRlbXBsYXRlQVBJVmVyc2lvbjogXCIxXCIsXG5cdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdGdhcDogXCIxMHB4XCJcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiY29udGVudFwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0aW5kaWNhdG9yOiB7XG5cdFx0XHRcdGFsaWduOiBcImxlZnRcIixcblx0XHRcdFx0Y29sb3I6IE5vdGlmaWNhdGlvbnMuSW5kaWNhdG9yQ29sb3IuUkVEXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZW1wbGF0ZURhdGE6IHtcblx0XHRcdGNvbnRlbnQ6IFwiVGhpcyBpcyBhIGN1c3RvbSBub3RpZmljYXRpb24gd2l0aCBhIHJlZCBpbmRpY2F0b3Igc2hvd2luZyB0byB0aGUgbGVmdCBvZiB0aGUgdG9hc3RcIlxuXHRcdH1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgbm90aWZpY2F0aW9uIHRoYXQgaGFzIGFuIGN1c3RvbSBpbmRpY2F0b3IgYmFyIGNvbG9yIHRoZW1lLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93Q3VzdG9tSW5kaWNhdG9yTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJDdXN0b20gSW5kaWNhdG9yIE5vdGlmaWNhdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJjdXN0b21cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdHRlbXBsYXRlT3B0aW9uczoge1xuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRjb21wb3NpdGlvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtaW5UZW1wbGF0ZUFQSVZlcnNpb246IFwiMVwiLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRnYXA6IFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImNvbnRlbnRcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdGluZGljYXRvcjoge1xuXHRcdFx0XHRhbGlnbjogXCJyaWdodFwiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbmRpY2F0b3I6IHtcblx0XHRcdGNvbG9yOiBcImN1c3RvbS1pbmRpY2F0b3JcIixcblx0XHRcdGZhbGxiYWNrOiBOb3RpZmljYXRpb25zLkluZGljYXRvckNvbG9yLlJFRCxcblx0XHRcdHRleHQ6IFwiQUxFUlQhISFcIlxuXHRcdH0sXG5cdFx0dGVtcGxhdGVEYXRhOiB7XG5cdFx0XHRjb250ZW50OiBcIlRoaXMgaXMgYSBjdXN0b20gbm90aWZpY2F0aW9uIHdpdGggY3VzdG9tIGluZGljYXRvciBzdHlsaW5nXCJcblx0XHR9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogUGxheSBhIHNvdW5kLlxuICogQHBhcmFtIG5vdGlmaWNhdGlvblNvdW5kVXJsIFRoZSB1cmwgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBwbGF5LlxuICovXG5hc3luYyBmdW5jdGlvbiBwbGF5Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblNvdW5kVXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYXVkaW8gPSBuZXcgQXVkaW8obm90aWZpY2F0aW9uU291bmRVcmwpO1xuXHRhd2FpdCBhdWRpby5wbGF5KCk7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgd2hpY2ggY2hlY2tzIGZvciB0aGUgY29ubmVjdGlvbiBjaGFuZ2VkIGV2ZW50LlxuICogQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIGNvbm5lY3Rpb24gc3RhdGUgY2hhbmdlcy5cbiAqL1xuZnVuY3Rpb24gYWRkQ29ubmVjdGlvbkNoYW5nZWRFdmVudExpc3RlbmVyKFxuXHRjYWxsYmFjazogKHN0YXR1czogTm90aWZpY2F0aW9ucy5wcm92aWRlci5Qcm92aWRlclN0YXR1cykgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGlmIChzdGF0dXNJbnRlcnZhbElkID09PSB1bmRlZmluZWQpIHtcblx0XHRzdGF0dXNJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHN0YXR1cyA9IGF3YWl0IE5vdGlmaWNhdGlvbnMucHJvdmlkZXIuZ2V0U3RhdHVzKCk7XG5cdFx0XHRpZiAoc3RhdHVzLmNvbm5lY3RlZCAhPT0gbGFzdENvbm5lY3Rpb25TdGF0dXMpIHtcblx0XHRcdFx0bGFzdENvbm5lY3Rpb25TdGF0dXMgPSBzdGF0dXMuY29ubmVjdGVkO1xuXHRcdFx0XHRjYWxsYmFjayhzdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDApO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=