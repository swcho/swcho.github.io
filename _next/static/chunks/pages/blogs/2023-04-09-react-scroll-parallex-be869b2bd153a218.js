(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9976],{18016:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2023-04-09-react-scroll-parallex",function(){return n(77314)}])},57598:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),s=n(77869),i=n.n(s),l=n(67294),o=n(39850),c=n(49041),a=n(46037),d=n(23489);function u(e){let{children:t,meta:n,staticProps:s}=e;return l.useEffect(()=>{i().highlightAll()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.Z,{title:n.title,children:[(0,r.jsx)(a.Z,{meta:n,isBlogPost:!0}),(0,r.jsx)(c.s,{staticProps:s,children:(0,r.jsx)("article",{className:"markdown",children:t})}),(0,r.jsx)(o.ZP,{repo:"swcho/blog-comments",type:"pathname",label:"utterances",theme:"github-light"})]})})}},49041:function(e,t,n){"use strict";n.d(t,{X:function(){return o},s:function(){return l}});var r=n(85893),s=n(67294);let i=s.createContext({});function l(e){let{staticProps:t,children:n}=e;return(0,r.jsx)(i.Provider,{value:t,children:n})}function o(){return s.useContext(i)}},46037:function(e,t,n){"use strict";var r=n(85893);n(67294),t.Z=e=>{let{meta:t,isBlogPost:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"font-bold text-gray-800 mb-4 ".concat(n?"text-5xl mt-8 mb-8":"text-lg"),children:t.title}),(0,r.jsxs)("div",{className:"details",children:[(0,r.jsx)("p",{className:"text-gray-500",children:t.description}),(0,r.jsx)("p",{className:"text-gray-400 text-right -mt-1",children:(0,r.jsx)("span",{className:"mr-4",children:t.date})})]})]})}},23489:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(85893),s=n(9008),i=n.n(s),l=n(67294);let o=l.memo(()=>(0,r.jsx)(r.Fragment,{}));var c=n(90387),a=n(41664),d=n.n(a);let u=[{link:"/",text:"Home"}],p=l.memo(()=>{let e=(0,c.useRouter)(),[t,n]=l.useState(!1);return(0,r.jsxs)("nav",{className:"w-full",children:[(0,r.jsx)("div",{id:"progress",className:"top-0 z-20 h-1",style:{background:"linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)"}}),(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between w-full py-3 mx-auto mt-0 md:max-w-4xl",children:[(0,r.jsx)("div",{className:"pl-4",children:(0,r.jsx)(d(),{legacyBehavior:!0,className:"text-xl font-extrabold text-gray-900 no-underline hover:no-underline",href:"/",children:"lifetime trails"})}),(0,r.jsx)("div",{className:"block pr-4 lg:hidden",children:(0,r.jsx)("button",{id:"nav-toggle",type:"button",className:"flex items-center px-3 py-2 text-gray-500 appearance-none hover:text-gray-900 hover:border-teal-500 focus:outline-none",onMouseDown:e=>e.preventDefault(),onClick:()=>n(!t),onBlur:()=>n(!1),children:(0,r.jsxs)("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{children:"Menu"}),(0,r.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,r.jsx)("div",{id:"nav-content",className:"bg-gray-100 border-b flex-grow lg:border-none lg:flex lg:items-center lg:mt-0 lg:shadow-none lg:w-auto md:bg-transparent mt-2 shadow w-full z-20 ".concat(t?"block":"hidden"),children:(0,r.jsx)("ul",{className:"items-center justify-end flex-1 list-reset lg:flex",children:u.map(t=>{let{link:n,text:s}=t;return(0,r.jsx)("li",{className:"mr-3",children:(0,r.jsx)(d(),{legacyBehavior:!0,className:e.pathname===n?"inline-block py-2 px-4 text-gray-900 font-bold no-underline":"inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4",href:n,children:s})},n)})})})]})]})}),h=l.memo(e=>{let{children:t,title:n="This is the default title"}=e;return(0,r.jsxs)("div",{className:"leading-normal tracking-normal bg-gray-100 min-h-screen",children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(p,{}),(0,r.jsx)("div",{className:"container w-full px-4 pb-10 mx-auto md:max-w-3xl",children:t}),(0,r.jsx)(o,{})]})});var x=h},77314:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},meta:function(){return l}});var r=n(85893),s=n(11151),i=n(57598);let l={title:"`react-scroll-parallax`",description:"스크롤 효과 라이브러리인 `react-scroll-parallax` 리뷰를 합니다.",date:"2023-04-08",readTime:5},o=e=>{let{children:t,...n}=e;return(0,r.jsx)(i.Z,{meta:l,staticProps:n,children:t})};function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"설정"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/jscottsmith/react-scroll-parallax",children:"jscottsmith/react-scroll-parallax: \uD83D\uDD2E React hooks and components to create parallax scroll effects for banners, images or any other DOM elements."})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://tsdx.io/",children:(0,r.jsx)(t.code,{children:"tsdx"})}),"를 사용합니다.\n마지막 커밋은 2022년 3월이지만 유명한 CLI툴 입니다.\n리엑트 기반의 컴포넌트 라이브러리를 만들 때 boilerplate를 생성합니다.\nrollup을 사용하여 cjs, esm, umd를 지원하는 단일 js 파일을 만들어 줍니다."]}),"\n",(0,r.jsxs)(t.p,{children:["리엑트 17 버전대의 class형 컴포넌트와 hook 기반 라이브러리로 구현하였습니다.\n",(0,r.jsx)(t.code,{children:"ts-monorepo"}),"에 link를 할떄, ",(0,r.jsx)(t.code,{children:"ReactNode"})," 정의가 달라 오류가 났습니다."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ts-monorepo"}),"는 pnpm으로 되어 있기 때문에 다음과 같이 link 명령을 사용합니다."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"pnpm link /Users/swcho/projects/swcho/react-scroll-parallax\n"})}),"\n",(0,r.jsx)(t.p,{children:"사용 예시는 다음과 같습니다."}),"\n",(0,r.jsx)(t.p,{children:"https://react-scroll-parallax-examples.vercel.app/"}),"\n",(0,r.jsx)(t.p,{children:"기본적으로 특정 엘리먼트가 viewport에 진입할 때와 빠져나갈 떄를 기준으로 transform을 설정할 수 있습니다.\n또한 스크롤 변화 시, 이벤트 콜백을 제공하기 때문에 다양하게 활용이 가능해 보입니다."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/jscottsmith/parallax-controller",children:"parallax-controller"}),"라는 모듈을 사용합니다.\n분석을 위해선 추가로 설정을 해 줍니다."]}),"\n",(0,r.jsx)(t.p,{children:"전체적인 테스트 환경은 ts-monorepo 기반으로 구성했습니다."}),"\n",(0,r.jsx)(t.h1,{children:"동작 과정"}),"\n",(0,r.jsx)("img",{src:"/_next/static/media/initial.2ccf4fa9.svg"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<ParallaxProvider>"}),"를 react 코드에 설정해 주면 ",(0,r.jsx)(t.code,{children:"ParallaxController"}),"를 생성 합니다.\n스크롤을 포함하는 엘리먼트를 넘겨주면, ",(0,r.jsx)(t.code,{children:"ParallaxController"})," 객체가 스크롤 관련 처리를 수행합니다.\n",(0,r.jsx)(t.code,{children:"ParallaxController"}),"는 ",(0,r.jsx)(t.code,{children:"scroll"})," 이벤트와 함께, ",(0,r.jsx)(t.code,{children:"resize"}),", ",(0,r.jsx)(t.code,{children:"blur"}),", ",(0,r.jsx)(t.code,{children:"focus"}),", ",(0,r.jsx)(t.code,{children:"load"})," 이벤트를 처리합니다."]}),"\n",(0,r.jsxs)(t.p,{children:["이렇게 스크롤을 포함하는 엘리먼트에 대한 초기 설정을 ",(0,r.jsx)(t.code,{children:"<ParallaxProvider>"}),"에서 하고 나면,\n",(0,r.jsx)(t.code,{children:"<Parallax>"})," 컴포넌트를 사용하여 viewport 영역의 enter, exit, progress 등의 이벤트를 받아 처리할 수 있습니다.\n또한 ",(0,r.jsx)(t.code,{children:"transform"}),", ",(0,r.jsx)(t.code,{children:"opacity"}),"와 같은 css 속성 값의 start, end 값과 progress에 따라 적용하는 easing 함수 등을 설정할 수 있습니다."]}),"\n",(0,r.jsx)(t.h1,{children:"Scroll 이벤트 처리"}),"\n",(0,r.jsx)("img",{src:"/_next/static/media/scroll.5dd66a68.svg"}),"\n",(0,r.jsxs)(t.p,{children:["생성 과정 중에서 전달 받은 target ",(0,r.jsx)(t.code,{children:"HTMLElement"})," dom 객체의 ",(0,r.jsx)(t.code,{children:"scroll"})," 이벤트를 등록합니다.\ntarget 엘리먼트를 전달하지 않을 경우, ",(0,r.jsx)(t.code,{children:"window"})," 객체의 ",(0,r.jsx)(t.code,{children:"scroll"})," 이벤트를 등록합니다."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=crazymonlong&logNo=221580029479",children:"addEventListener의 요상한 옵션들 중의 하나 Passive : 네이버 블로그"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"addEventListener"}),"의 ",(0,r.jsx)(t.code,{children:"passive"})," 옵션은 scroll 이벤트 처리 과정 중 ",(0,r.jsx)(t.code,{children:"preventDefault"}),"를 할 것인지를 브라우저에게 알려주는 역할을 합니다."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"parallax-controller"})," 해당 옵션의 지원여부를 알아내는 코드는 다음과 같습니다."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export function testForPassiveScroll() {\n  let supportsPassiveOption = false;\n  try {\n    const opts = Object.defineProperty({}, 'passive', {\n      get() {\n        supportsPassiveOption = true;\n        return true;\n      },\n    });\n    // @ts-expect-error\n    window.addEventListener('test', null, opts);\n    // @ts-expect-error\n    window.removeEventListener('test', null, opts);\n  } catch (e) {}\n  return supportsPassiveOption;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"opts"}),"라는 proxy 객체를 사용하여 ",(0,r.jsx)(t.code,{children:"passive"}),"라는 옵션을 브라우저가 읽으면 해당 기능을 지원하는 것으로 판단합니다."]}),"\n",(0,r.jsxs)(t.p,{children:["이렇게 알아낸 값으로 ",(0,r.jsx)(t.code,{children:"scroll"})," 이벤트 등록 옵션을 결정합니다.\n물론 성능향상을 위해 ",(0,r.jsx)(t.code,{children:"passive"})," 옵션을 ",(0,r.jsx)(t.code,{children:"true"}),"로 설정합니다."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"...\n  el.addEventListener(\n    'scroll',\n    this._handleScroll,\n    this._supportsPassive ? { passive: true } : false\n  );\n"})}),"\n",(0,r.jsx)(t.h1,{children:"영역 정보"}),"\n",(0,r.jsx)(t.p,{children:"기본적으로 영역에 대한 정보는 다음과 같은 dom 프로퍼티 값을 참조 합니다."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"  ...\n  const width = window.innerWidth || html.clientWidth;\n  const height = window.innerHeight || html.clientHeight;\n  const scrollHeight = html.scrollHeight;\n  const scrollWidth = html.scrollWidth;\n"})}),"\n",(0,r.jsx)(t.h1,{children:"이벤트 동작"}),"\n",(0,r.jsx)("img",{src:"/_next/static/media/events.dc3c1979.svg"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"scroll"})," 이벤트 뿐만아니라 ",(0,r.jsx)(t.code,{children:"resize"}),", ",(0,r.jsx)(t.code,{children:"blur"}),", ",(0,r.jsx)(t.code,{children:"focus"}),", ",(0,r.jsx)(t.code,{children:"load"})," 이벤트에 따라 Update를 진행합니다."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"scroll"})," 이벤트 처리에 추가로 viewport 크기 변경에 의한 값 조정을 모두 재조정하는 ",(0,r.jsx)(t.code,{children:"setCachedAttributes"})," 작업을 수행합니다."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(c,e)}))}},92703:function(e,t,n){"use strict";var r=n(50414);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,l){if(l!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var r,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}(n(67294)),i=(r=n(45697))&&r.__esModule?r:{default:r};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=["pathname","url","title","og:title","issue-number","issue-term"],u=function(e){if(0>d.indexOf(e)){console.warn("Wrong type: "+e);return}return"issue-number"===e?"issue-number":"issue-term"},p=function(e,t,n){if(0>d.indexOf(e)){console.warn("Wrong type: "+e);return}return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?n:void 0},h=function(e){var t,n;function r(e){var t,n;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),(t=(n=c(r).call(this,e))&&("object"===l(n)||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)).myRef=s.default.createRef(),t.state={pending:!0},t}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(r,e),t=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.repo,r=t.type,s=t.specificTerm,i=t.issueNumber,l=u(r),o=p(r,s,i);if("issue-term"!==r||o){if("issue-number"===r&&(isNaN(o)||o<1)){console.warn("When type is '".concat(r,"', valid 'issueNumber' prop must be provided"));return}}else{console.warn("When type is '".concat(r,"', 'specificTerm' prop must be provided"));return}var c=document.createElement("script");c.src="https://utteranc.es/client.js",c.async=!0,c.setAttribute("repo",n),c.setAttribute("crossorigin","anonymous"),c.setAttribute(l,o),c.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(c)}},{key:"render",value:function(){return s.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&s.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&s.default.createElement("div",null,"\uD83D\uDC47\uD83D\uDC47If the settings are valid, the comment widget appear below\uD83D\uDC47\uD83D\uDC47"),this.state.pending&&s.default.createElement("div",null,"Loading script..."))}}],o(r.prototype,t),n&&o(r,n),r}(s.Component);t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},h.propTypes={type:i.default.string.isRequired,repo:i.default.string.isRequired,specificTerm:i.default.string,issueNumber:i.default.number,hashKey:i.default.string,debug:i.default.bool},t.default=h},39850:function(e,t,n){"use strict";Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return r.default}});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}}return t.default=e,t}(n(75826))}},function(e){e.O(0,[3996,9774,2888,179],function(){return e(e.s=18016)}),_N_E=e.O()}]);
//# sourceMappingURL=2023-04-09-react-scroll-parallex-be869b2bd153a218.js.map