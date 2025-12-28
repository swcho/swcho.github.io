(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1172],{49034:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var i=r(18153),s=r(77328),n=r.n(s),a=r(14232);let l=a.memo(()=>(0,i.Y)(i.FK,{}));var o=r(71745),c=r(48230),v=r.n(c);let u=[{link:"/",text:"Home"}],d=a.memo(()=>{let e=(0,o.useRouter)(),[t,r]=a.useState(!1);return(0,i.FD)("nav",{className:"w-full",children:[(0,i.Y)("div",{id:"progress",className:"top-0 z-20 h-1",style:{background:"linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)"}}),(0,i.FD)("div",{className:"flex flex-wrap items-center justify-between w-full py-3 mx-auto mt-0 md:max-w-4xl",children:[(0,i.Y)("div",{className:"pl-4",children:(0,i.Y)(v(),{className:"text-xl font-extrabold text-gray-900 no-underline hover:no-underline",href:"/",children:"lifetime trails"})}),(0,i.Y)("div",{className:"block pr-4 lg:hidden",children:(0,i.Y)("button",{id:"nav-toggle",type:"button",className:"flex items-center px-3 py-2 text-gray-500 appearance-none hover:text-gray-900 hover:border-teal-500 focus:outline-none",onMouseDown:e=>e.preventDefault(),onClick:()=>r(!t),onBlur:()=>r(!1),children:(0,i.FD)("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.Y)("title",{children:"Menu"}),(0,i.Y)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,i.Y)("div",{id:"nav-content",className:"bg-gray-100 border-b flex-grow lg:border-none lg:flex lg:items-center lg:mt-0 lg:shadow-none lg:w-auto md:bg-transparent mt-2 shadow w-full z-20 ".concat(t?"block":"hidden"),children:(0,i.Y)("ul",{className:"items-center justify-end flex-1 list-reset lg:flex",children:u.map(t=>{let{link:r,text:s}=t;return(0,i.Y)("li",{className:"mr-3",children:(0,i.Y)(v(),{className:e.pathname===r?"inline-block py-2 px-4 text-gray-900 font-bold no-underline":"inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4",href:r,children:s})},r)})})})]})]})}),m=a.memo(e=>{let{children:t,title:r="This is the default title"}=e;return(0,i.FD)("div",{className:"leading-normal tracking-normal bg-gray-100 min-h-screen",children:[(0,i.FD)(n(),{children:[(0,i.Y)("title",{children:r}),(0,i.Y)("meta",{charSet:"utf-8"}),(0,i.Y)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.Y)(d,{}),(0,i.Y)("div",{className:"container w-full px-4 pb-10 mx-auto md:max-w-3xl",children:t}),(0,i.Y)(l,{})]})})},51882:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2025-05-06-stencil-mask",function(){return r(73430)}])},59496:(e,t,r)=>{"use strict";r.d(t,{k:()=>l,n:()=>a});var i=r(44501),s=r(66691),n=r(14232);let a=n.forwardRef(({id:e=1,colorWrite:t=!1,depthWrite:r=!1,...a},l)=>{let o=n.useRef(null),c=n.useMemo(()=>({colorWrite:t,depthWrite:r,stencilWrite:!0,stencilRef:e,stencilFunc:s.sKt,stencilFail:s.kG0,stencilZFail:s.kG0,stencilZPass:s.kG0}),[e,t,r]);return n.useLayoutEffect(()=>{Object.assign(o.current.material,c)}),n.useImperativeHandle(l,()=>o.current,[]),n.createElement("mesh",(0,i.A)({ref:o,renderOrder:-e},a))});function l(e,t=!1){return{stencilWrite:!0,stencilRef:e,stencilFunc:t?s.klZ:s.jsO,stencilFail:s.VVr,stencilZFail:s.VVr,stencilZPass:s.VVr}}},60158:(e,t,r)=>{"use strict";r.d(t,{J:()=>l,j:()=>a});var i=r(18153),s=r(14232);let n=s.createContext({});function a(e){let{staticProps:t,children:r}=e;return(0,i.Y)(n.Provider,{value:t,children:r})}function l(){return s.useContext(n)}},73430:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F,meta:()=>k});var i=r(37876),s=r(91668),n=r(91013),a=r(18153),l=r(14232);let o=l.memo(function(e){let{children:t}=e;return(0,a.Y)("div",{style:{border:"1px solid",borderRadius:"4px",width:"100%",height:"300px",marginBottom:"1rem"},children:t})});var c=r(88360),v=r(45302),u=r(59496),d=r(49082),m=r(94892),h=r(35577);let x=l.memo(function(e){let{scene:t}=(0,h.p)("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");return(0,a.Y)("primitive",{object:t,...e},"01")});function f(e){let t=(0,u.k)(1),r=l.useRef(null);return(0,c.D)(e=>r.current&&(r.current.rotation.y=-e.clock.elapsedTime/2)),(0,a.FD)("group",{...e,children:[(0,a.FD)("mesh",{position:[-.75,0,0],scale:1,ref:r,children:[(0,a.Y)("torusKnotGeometry",{args:[.6,.2,128,64]}),(0,a.Y)("meshNormalMaterial",{...t})]}),(0,a.FD)("mesh",{position:[.75,0,0],children:[(0,a.Y)("sphereGeometry",{args:[.8,64,64]}),(0,a.Y)("meshStandardMaterial",{...t,color:"white"})]})]})}let p=l.memo(function(e){let{}=e;return(0,a.Y)(o,{children:(0,a.FD)(v.Hl,{camera:{position:[0,3,10],fov:50},children:[(0,a.Y)("hemisphereLight",{intensity:1,groundColor:"red"}),(0,a.Y)(d.N,{autoRotate:!0,position:[0,10,10]}),(0,a.Y)(m._,{frames:1,scale:10,position:[0,-1,0],blur:8,opacity:.55}),(0,a.FD)(l.Suspense,{children:[(0,a.Y)(f,{}),(0,a.Y)(x,{position:[0,-1,-3],scale:1.5}),(0,a.Y)("axesHelper",{}),(0,a.Y)("gridHelper",{})]})]})})});var y=r(99855),g=r(44501),D=r(66691);class w extends D.uSd{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.distort=this._distort,e.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      #define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(e){this._time.value=e}get distort(){return this._distort.value}set distort(e){this._distort.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}}let Y=l.forwardRef(({speed:e=1,...t},r)=>{let[i]=l.useState(()=>new w);return(0,c.D)(t=>i&&(i.time=t.clock.elapsedTime*e)),l.createElement("primitive",(0,g.A)({object:i,ref:r,attach:"material"},t))});function b(e){let t=(0,u.k)(1),r=l.useRef(null);return(0,c.D)(e=>r.current&&(r.current.rotation.y=-e.clock.elapsedTime/2)),(0,a.FD)("group",{...e,children:[(0,a.FD)("mesh",{position:[-.75,0,0],scale:1,ref:r,children:[(0,a.Y)("torusKnotGeometry",{args:[.6,.2,128,64]}),(0,a.Y)("meshNormalMaterial",{...t})]}),(0,a.FD)("mesh",{position:[.75,0,0],children:[(0,a.Y)("sphereGeometry",{args:[.8,64,64]}),(0,a.Y)("meshStandardMaterial",{...t,color:"white"})]})]})}let U=l.memo(function(e){let{}=e;return(0,a.Y)(o,{children:(0,a.FD)(v.Hl,{camera:{position:[0,3,10],fov:50},gl:{stencil:!0},children:[(0,a.Y)("hemisphereLight",{intensity:1,groundColor:"red"}),(0,a.Y)(m._,{frames:1,scale:10,position:[0,-1,0],blur:8,opacity:.55}),(0,a.Y)(d.N,{makeDefault:!0,position:[0,10,10]}),(0,a.FD)(l.Suspense,{children:[(0,a.Y)(y.Z,{position:[0,0,0],children:(0,a.FD)(u.n,{id:1,children:[(0,a.Y)("planeGeometry",{args:[2,2,128,128]}),(0,a.Y)(Y,{distort:.5,radius:1,speed:2})]})}),(0,a.FD)("mesh",{children:[(0,a.Y)("planeGeometry",{args:[2,2,128,128]}),(0,a.Y)(Y,{distort:.5,radius:1,speed:2})]}),(0,a.Y)(b,{}),(0,a.Y)(x,{position:[0,-1,-3],scale:1.5}),(0,a.Y)("axesHelper",{}),(0,a.Y)("gridHelper",{})]})]})})}),k={title:"R3f: Stencil mask",description:"Stencil mask 예제를 살펴 봅니다.",date:"2025-05-06",readTime:5},_=e=>{let{children:t}=e;return(0,i.jsx)(n.A,{meta:k,children:t})};function z(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"Stencil mask"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://codesandbox.io/s/z3f2mw",children:"Stencil mask"})}),"\n"]}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(t.p,{children:"먼저 과녁, torus, 구를 배치합니다."}),"\n",(0,i.jsx)(U,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"<planeGeometry />"}),"와 함께 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/shaders/mesh-distort-material",children:"MeshDistortMaterial"}),"를 배치하면 펄럭이는 평면을 만들 수 있습니다."]}),"\n",(0,i.jsxs)(t.p,{children:["동일한 mesh 구성을 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/portals/mask",children:"Mask"})," 안에 배치하고 다시 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/gizmos/transform-controls",children:"TransformControls"}),"로 감싸면 마우스로 이동하는 mask를 구성할 수 있습니다."]})]})}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(_,{...e,children:(0,i.jsx)(z,{...e})})}},85419:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var i=r(18153);r(14232);let s=e=>{let{meta:t,isBlogPost:r}=e;return(0,i.FD)(i.FK,{children:[(0,i.Y)("h1",{className:"font-bold text-gray-800 mb-4 ".concat(r?"text-5xl mt-8 mb-8":"text-lg"),children:t.title}),(0,i.FD)("div",{className:"details",children:[(0,i.Y)("p",{className:"text-gray-500",children:t.description}),(0,i.Y)("p",{className:"text-gray-400 text-right -mt-1",children:(0,i.Y)("span",{className:"mr-4",children:t.date})})]})]})}},91013:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var i=r(18153),s=r(73146),n=r.n(s),a=r(14232),l=r(86089),o=r(60158),c=r(85419),v=r(49034);function u(e){let{children:t,meta:r,staticProps:s}=e;return a.useEffect(()=>{n().highlightAll()},[]),(0,i.Y)(i.FK,{children:(0,i.FD)(v.A,{title:r.title,children:[(0,i.Y)(c.A,{meta:r,isBlogPost:!0}),(0,i.Y)(o.j,{staticProps:s,children:(0,i.Y)("article",{className:"markdown",children:t})}),(0,i.Y)(l.Ay,{repo:"swcho/blog-comments",type:"pathname",label:"utterances",theme:"github-light"})]})})}},94892:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var i=r(44501),s=r(14232),n=r(66691),a=r(88360);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},o={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},c=s.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:c=1,height:v=1,blur:u=1,near:d=0,far:m=10,resolution:h=512,smooth:x=!0,color:f="#000000",depthWrite:p=!1,renderOrder:y,...g},D)=>{let w,Y,b=s.useRef(null),U=(0,a.C)(e=>e.scene),k=(0,a.C)(e=>e.gl),_=s.useRef(null);c*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[z,F,j,S,N,M,C]=s.useMemo(()=>{let e=new n.nWS(h,h),t=new n.nWS(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new n.bdM(c,v).rotateX(Math.PI/2),i=new n.eaF(r),s=new n.CSG;s.depthTest=s.depthWrite=!1,s.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new n.Q1f(f)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let a=new n.BKk(l),u=new n.BKk(o);return u.depthTest=a.depthTest=!1,[e,r,s,i,a,u,t]},[h,c,v,e,f]),R=e=>{S.visible=!0,S.material=N,N.uniforms.tDiffuse.value=z.texture,N.uniforms.h.value=e/256,k.setRenderTarget(C),k.render(S,_.current),S.material=M,M.uniforms.tDiffuse.value=C.texture,M.uniforms.v.value=e/256,k.setRenderTarget(z),k.render(S,_.current),S.visible=!1},T=0;return(0,a.D)(()=>{_.current&&(t===1/0||T<t)&&(T++,w=U.background,Y=U.overrideMaterial,b.current.visible=!1,U.background=null,U.overrideMaterial=j,k.setRenderTarget(z),k.render(U,_.current),R(u),x&&R(.4*u),k.setRenderTarget(null),b.current.visible=!0,U.overrideMaterial=Y,U.background=w)}),s.useImperativeHandle(D,()=>b.current,[]),s.createElement("group",(0,i.A)({"rotation-x":Math.PI/2},g,{ref:b}),s.createElement("mesh",{renderOrder:y,geometry:F,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},s.createElement("meshBasicMaterial",{transparent:!0,map:z.texture,opacity:r,depthWrite:p})),s.createElement("orthographicCamera",{ref:_,args:[-c/2,c/2,v/2,-v/2,d,m]}))})}},e=>{e.O(0,[5334,7391,683,5695,5302,2077,3665,1252,636,6593,8792],()=>e(e.s=51882)),_N_E=e.O()}]);
//# sourceMappingURL=2025-05-06-stencil-mask-21e0c81ef3d4b0a3.js.map