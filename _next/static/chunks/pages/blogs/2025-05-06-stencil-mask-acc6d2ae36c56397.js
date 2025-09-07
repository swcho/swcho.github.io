(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8412],{6128:function(e,t,r){"use strict";r.d(t,{j:function(){return c}});var i=r(87462),n=r(67294),s=r(99477),a=r(19390);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},c=n.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:c=1,height:u=1,blur:v=1,near:d=0,far:m=10,resolution:h=512,smooth:f=!0,color:x="#000000",depthWrite:p=!1,renderOrder:y,...g},Z)=>{let w,b;let D=n.useRef(null),U=(0,a.A)(e=>e.scene),z=(0,a.A)(e=>e.gl),S=n.useRef(null);c*=Array.isArray(e)?e[0]:e||1,u*=Array.isArray(e)?e[1]:e||1;let[_,j,M,k,B,N,C]=n.useMemo(()=>{let e=new s.WebGLRenderTarget(h,h),t=new s.WebGLRenderTarget(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new s.PlaneGeometry(c,u).rotateX(Math.PI/2),i=new s.Mesh(r),n=new s.MeshDepthMaterial;n.depthTest=n.depthWrite=!1,n.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new s.Color(x)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let a=new s.ShaderMaterial(l),v=new s.ShaderMaterial(o);return v.depthTest=a.depthTest=!1,[e,r,n,i,a,v,t]},[h,c,u,e,x]),X=e=>{k.visible=!0,k.material=B,B.uniforms.tDiffuse.value=_.texture,B.uniforms.h.value=1*e/256,z.setRenderTarget(C),z.render(k,S.current),k.material=N,N.uniforms.tDiffuse.value=C.texture,N.uniforms.v.value=1*e/256,z.setRenderTarget(_),z.render(k,S.current),k.visible=!1},R=0;return(0,a.C)(()=>{S.current&&(t===1/0||R<t)&&(R++,w=U.background,b=U.overrideMaterial,D.current.visible=!1,U.background=null,U.overrideMaterial=M,z.setRenderTarget(_),z.render(U,S.current),X(v),f&&X(.4*v),z.setRenderTarget(null),D.current.visible=!0,U.overrideMaterial=b,U.background=w)}),n.useImperativeHandle(Z,()=>D.current,[]),n.createElement("group",(0,i.Z)({"rotation-x":Math.PI/2},g,{ref:D}),n.createElement("mesh",{renderOrder:y,geometry:j,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},n.createElement("meshBasicMaterial",{transparent:!0,map:_.texture,opacity:r,depthWrite:p})),n.createElement("orthographicCamera",{ref:S,args:[-c/2,c/2,u/2,-u/2,d,m]}))})},58351:function(e,t,r){"use strict";r.d(t,{v:function(){return l},z:function(){return a}});var i=r(87462),n=r(99477),s=r(67294);let a=s.forwardRef(({id:e=1,colorWrite:t=!1,depthWrite:r=!1,...a},l)=>{let o=s.useRef(null),c=s.useMemo(()=>({colorWrite:t,depthWrite:r,stencilWrite:!0,stencilRef:e,stencilFunc:n.AlwaysStencilFunc,stencilFail:n.ReplaceStencilOp,stencilZFail:n.ReplaceStencilOp,stencilZPass:n.ReplaceStencilOp}),[e,t,r]);return s.useLayoutEffect(()=>{Object.assign(o.current.material,c)}),s.useImperativeHandle(l,()=>o.current,[]),s.createElement("mesh",(0,i.Z)({ref:o,renderOrder:-e},a))});function l(e,t=!1){return{stencilWrite:!0,stencilRef:e,stencilFunc:t?n.NotEqualStencilFunc:n.EqualStencilFunc,stencilFail:n.KeepStencilOp,stencilZFail:n.KeepStencilOp,stencilZPass:n.KeepStencilOp}}},90803:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2025-05-06-stencil-mask",function(){return r(69462)}])},5371:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var i=r(35944),n=r(77869),s=r.n(n),a=r(67294),l=r(39850),o=r(68777),c=r(99266),u=r(6039);function v(e){let{children:t,meta:r,staticProps:n}=e;return a.useEffect(()=>{s().highlightAll()},[]),(0,i.tZ)(i.HY,{children:(0,i.BX)(u.Z,{title:r.title,children:[(0,i.tZ)(c.Z,{meta:r,isBlogPost:!0}),(0,i.tZ)(o.s,{staticProps:n,children:(0,i.tZ)("article",{className:"markdown",children:t})}),(0,i.tZ)(l.ZP,{repo:"swcho/blog-comments",type:"pathname",label:"utterances",theme:"github-light"})]})})}},68777:function(e,t,r){"use strict";r.d(t,{X:function(){return l},s:function(){return a}});var i=r(35944),n=r(67294);let s=n.createContext({});function a(e){let{staticProps:t,children:r}=e;return(0,i.tZ)(s.Provider,{value:t,children:r})}function l(){return n.useContext(s)}},99266:function(e,t,r){"use strict";var i=r(35944);r(67294),t.Z=e=>{let{meta:t,isBlogPost:r}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)("h1",{className:"font-bold text-gray-800 mb-4 ".concat(r?"text-5xl mt-8 mb-8":"text-lg"),children:t.title}),(0,i.BX)("div",{className:"details",children:[(0,i.tZ)("p",{className:"text-gray-500",children:t.description}),(0,i.tZ)("p",{className:"text-gray-400 text-right -mt-1",children:(0,i.tZ)("span",{className:"mr-4",children:t.date})})]})]})}},6039:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var i=r(35944),n=r(9008),s=r.n(n),a=r(67294);let l=a.memo(()=>(0,i.tZ)(i.HY,{}));var o=r(80880),c=r(41664),u=r.n(c);let v=[{link:"/",text:"Home"}],d=a.memo(()=>{let e=(0,o.useRouter)(),[t,r]=a.useState(!1);return(0,i.BX)("nav",{className:"w-full",children:[(0,i.tZ)("div",{id:"progress",className:"top-0 z-20 h-1",style:{background:"linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)"}}),(0,i.BX)("div",{className:"flex flex-wrap items-center justify-between w-full py-3 mx-auto mt-0 md:max-w-4xl",children:[(0,i.tZ)("div",{className:"pl-4",children:(0,i.tZ)(u(),{legacyBehavior:!0,className:"text-xl font-extrabold text-gray-900 no-underline hover:no-underline",href:"/",children:"lifetime trails"})}),(0,i.tZ)("div",{className:"block pr-4 lg:hidden",children:(0,i.tZ)("button",{id:"nav-toggle",type:"button",className:"flex items-center px-3 py-2 text-gray-500 appearance-none hover:text-gray-900 hover:border-teal-500 focus:outline-none",onMouseDown:e=>e.preventDefault(),onClick:()=>r(!t),onBlur:()=>r(!1),children:(0,i.BX)("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.tZ)("title",{children:"Menu"}),(0,i.tZ)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,i.tZ)("div",{id:"nav-content",className:"bg-gray-100 border-b flex-grow lg:border-none lg:flex lg:items-center lg:mt-0 lg:shadow-none lg:w-auto md:bg-transparent mt-2 shadow w-full z-20 ".concat(t?"block":"hidden"),children:(0,i.tZ)("ul",{className:"items-center justify-end flex-1 list-reset lg:flex",children:v.map(t=>{let{link:r,text:n}=t;return(0,i.tZ)("li",{className:"mr-3",children:(0,i.tZ)(u(),{legacyBehavior:!0,className:e.pathname===r?"inline-block py-2 px-4 text-gray-900 font-bold no-underline":"inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4",href:r,children:n})},r)})})})]})]})}),m=a.memo(e=>{let{children:t,title:r="This is the default title"}=e;return(0,i.BX)("div",{className:"leading-normal tracking-normal bg-gray-100 min-h-screen",children:[(0,i.BX)(s(),{children:[(0,i.tZ)("title",{children:r}),(0,i.tZ)("meta",{charSet:"utf-8"}),(0,i.tZ)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.tZ)(d,{}),(0,i.tZ)("div",{className:"container w-full px-4 pb-10 mx-auto md:max-w-3xl",children:t}),(0,i.tZ)(l,{})]})});var h=m},69462:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j},meta:function(){return z}});var i=r(85893),n=r(11151),s=r(5371),a=r(35944),l=r(67294),o=l.memo(function(e){let{children:t}=e;return(0,a.tZ)("div",{style:{border:"1px solid",borderRadius:"4px",width:"100%",height:"300px",marginBottom:"1rem"},children:t})}),c=r(19390),u=r(15029),v=r(58351),d=r(60214),m=r(6128),h=r(81927),f=l.memo(function(e){let{scene:t}=(0,h.L)("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");return(0,a.tZ)("primitive",{object:t,...e},"01")});function x(e){let t=(0,v.v)(1),r=l.useRef(null);return(0,c.C)(e=>r.current&&(r.current.rotation.y=-e.clock.elapsedTime/2)),(0,a.BX)("group",{...e,children:[(0,a.BX)("mesh",{position:[-.75,0,0],scale:1,ref:r,children:[(0,a.tZ)("torusKnotGeometry",{args:[.6,.2,128,64]}),(0,a.tZ)("meshNormalMaterial",{...t})]}),(0,a.BX)("mesh",{position:[.75,0,0],children:[(0,a.tZ)("sphereGeometry",{args:[.8,64,64]}),(0,a.tZ)("meshStandardMaterial",{...t,color:"white"})]})]})}var p=l.memo(function(e){let{}=e;return(0,a.tZ)(o,{children:(0,a.BX)(u.Xz,{camera:{position:[0,3,10],fov:50},children:[(0,a.tZ)("hemisphereLight",{intensity:1,groundColor:"red"}),(0,a.tZ)(d.z,{autoRotate:!0,position:[0,10,10]}),(0,a.tZ)(m.j,{frames:1,scale:10,position:[0,-1,0],blur:8,opacity:.55}),(0,a.BX)(l.Suspense,{children:[(0,a.tZ)(x,{}),(0,a.tZ)(f,{position:[0,-1,-3],scale:1.5}),(0,a.tZ)("axesHelper",{}),(0,a.tZ)("gridHelper",{})]})]})})}),y=r(48535),g=r(87462),Z=r(99477);class w extends Z.MeshPhysicalMaterial{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.distort=this._distort,e.vertexShader=`
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
        `)}get time(){return this._time.value}set time(e){this._time.value=e}get distort(){return this._distort.value}set distort(e){this._distort.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}}let b=l.forwardRef(({speed:e=1,...t},r)=>{let[i]=l.useState(()=>new w);return(0,c.C)(t=>i&&(i.time=t.clock.getElapsedTime()*e)),l.createElement("primitive",(0,g.Z)({object:i,ref:r,attach:"material"},t))});function D(e){let t=(0,v.v)(1),r=l.useRef(null);return(0,c.C)(e=>r.current&&(r.current.rotation.y=-e.clock.elapsedTime/2)),(0,a.BX)("group",{...e,children:[(0,a.BX)("mesh",{position:[-.75,0,0],scale:1,ref:r,children:[(0,a.tZ)("torusKnotGeometry",{args:[.6,.2,128,64]}),(0,a.tZ)("meshNormalMaterial",{...t})]}),(0,a.BX)("mesh",{position:[.75,0,0],children:[(0,a.tZ)("sphereGeometry",{args:[.8,64,64]}),(0,a.tZ)("meshStandardMaterial",{...t,color:"white"})]})]})}var U=l.memo(function(e){let{}=e;return(0,a.tZ)(o,{children:(0,a.BX)(u.Xz,{camera:{position:[0,3,10],fov:50},gl:{stencil:!0},children:[(0,a.tZ)("hemisphereLight",{intensity:1,groundColor:"red"}),(0,a.tZ)(m.j,{frames:1,scale:10,position:[0,-1,0],blur:8,opacity:.55}),(0,a.tZ)(d.z,{makeDefault:!0,position:[0,10,10]}),(0,a.BX)(l.Suspense,{children:[(0,a.tZ)(y.Y,{position:[0,0,0],children:(0,a.BX)(v.z,{id:1,children:[(0,a.tZ)("planeGeometry",{args:[2,2,128,128]}),(0,a.tZ)(b,{distort:.5,radius:1,speed:2})]})}),(0,a.BX)("mesh",{children:[(0,a.tZ)("planeGeometry",{args:[2,2,128,128]}),(0,a.tZ)(b,{distort:.5,radius:1,speed:2})]}),(0,a.tZ)(D,{}),(0,a.tZ)(f,{position:[0,-1,-3],scale:1.5}),(0,a.tZ)("axesHelper",{}),(0,a.tZ)("gridHelper",{})]})]})})});let z={title:"R3f: Stencil mask",description:"Stencil mask 예제를 살펴 봅니다.",date:"2025-05-06",readTime:5},S=e=>{let{children:t}=e;return(0,i.jsx)(s.Z,{meta:z,children:t})};function _(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"Stencil mask"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://codesandbox.io/s/z3f2mw",children:"Stencil mask"})}),"\n"]}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(t.p,{children:"먼저 과녁, torus, 구를 배치합니다."}),"\n",(0,i.jsx)(U,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"<planeGeometry />"}),"와 함께 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/shaders/mesh-distort-material",children:"MeshDistortMaterial"}),"를 배치하면 펄럭이는 평면을 만들 수 있습니다."]}),"\n",(0,i.jsxs)(t.p,{children:["동일한 mesh 구성을 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/portals/mask",children:"Mask"})," 안에 배치하고 다시 ",(0,i.jsx)(t.a,{href:"https://drei.docs.pmnd.rs/gizmos/transform-controls",children:"TransformControls"}),"로 감싸면 마우스로 이동하는 mask를 구성할 수 있습니다."]})]})}var j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(S,Object.assign({},e,{children:(0,i.jsx)(_,e)}))}}},function(e){e.O(0,[3737,3996,5029,7554,9360,205,9774,2888,179],function(){return e(e.s=90803)}),_N_E=e.O()}]);
//# sourceMappingURL=2025-05-06-stencil-mask-acc6d2ae36c56397.js.map