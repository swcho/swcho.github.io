"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8924],{33191:(e,t,r)=>{r.d(t,{E:()=>o});var n=r(44501),a=r(14232),i=r(1825),u=r(71804),l=r(41401);let o=a.forwardRef(({sdfGlyphSize:e=64,anchorX:t="center",anchorY:r="middle",font:o,fontSize:s=1,children:v,characters:c,onSync:f,...m},d)=>{let g=(0,u.C)(({invalidate:e})=>e),[p]=a.useState(()=>new i.EY),[h,x]=a.useMemo(()=>{let e=[],t="";return a.Children.forEach(v,r=>{"string"==typeof r||"number"==typeof r?t+=r:e.push(r)}),[e,t]},[v]);return(0,l.DY)(()=>new Promise(e=>(0,i.PY)({font:o,characters:c},e)),["troika-text",o,c]),a.useLayoutEffect(()=>void p.sync(()=>{g(),f&&f(p)})),a.useEffect(()=>()=>p.dispose(),[p]),a.createElement("primitive",(0,n.A)({object:p,ref:d,font:o,text:x,anchorX:t,anchorY:r,fontSize:s,sdfGlyphSize:e},m),h)})},49082:(e,t,r)=>{r.d(t,{N:()=>l});var n=r(44501),a=r(71804),i=r(14232),u=r(78961);let l=i.forwardRef(({makeDefault:e,camera:t,regress:r,domElement:l,enableDamping:o=!0,keyEvents:s=!1,onChange:v,onStart:c,onEnd:f,...m},d)=>{let g=(0,a.C)(e=>e.invalidate),p=(0,a.C)(e=>e.camera),h=(0,a.C)(e=>e.gl),x=(0,a.C)(e=>e.events),D=(0,a.C)(e=>e.setEvents),y=(0,a.C)(e=>e.set),b=(0,a.C)(e=>e.get),U=(0,a.C)(e=>e.performance),E=t||p,C=l||x.connected||h.domElement,w=i.useMemo(()=>new u.N(E),[E]);return(0,a.D)(()=>{w.enabled&&w.update()},-1),i.useEffect(()=>(s&&w.connect(!0===s?C:s),w.connect(C),()=>void w.dispose()),[s,C,r,w,g]),i.useEffect(()=>{let e=e=>{g(),r&&U.regress(),v&&v(e)},t=e=>{c&&c(e)},n=e=>{f&&f(e)};return w.addEventListener("change",e),w.addEventListener("start",t),w.addEventListener("end",n),()=>{w.removeEventListener("start",t),w.removeEventListener("end",n),w.removeEventListener("change",e)}},[v,c,f,w,g,D]),i.useEffect(()=>{if(e){let e=b().controls;return y({controls:w}),()=>y({controls:e})}},[e,w]),i.createElement("primitive",(0,n.A)({ref:d,object:w,enableDamping:o},m))})},54215:(e,t,r)=>{r.d(t,{Y:()=>o});var n=r(44501),a=r(14796),i=r(14232),u=r(71804),l=r(78925);let o=i.forwardRef(({children:e,compute:t,width:r,height:o,samples:v=8,renderPriority:c=0,eventPriority:f=0,frames:m=1/0,stencilBuffer:d=!1,depthBuffer:g=!0,generateMipmaps:p=!1,...h},x)=>{let{size:D,viewport:y}=(0,u.C)(),b=(0,l.j)((r||D.width)*y.dpr,(o||D.height)*y.dpr,{samples:v,stencilBuffer:d,depthBuffer:g,generateMipmaps:p}),[U]=i.useState(()=>new a.Scene),E=i.useCallback((e,t,r)=>{var n,i,u;let l=null==(n=b.texture)||null==(n=n.__r3f.parent)?void 0:n.object;for(;l&&!(l instanceof a.Object3D);)l=null==(u=l.__r3f.parent)?void 0:u.object;if(!l)return!1;r.raycaster.camera||r.events.compute(e,r,null==(i=r.previousRoot)?void 0:i.getState());let[o]=r.raycaster.intersectObject(l);if(!o)return!1;let s=o.uv;if(!s)return!1;t.raycaster.setFromCamera(t.pointer.set(2*s.x-1,2*s.y-1),t.camera)},[]);return i.useImperativeHandle(x,()=>b.texture,[b]),i.createElement(i.Fragment,null,(0,u.o)(i.createElement(s,{renderPriority:c,frames:m,fbo:b},e,i.createElement("group",{onPointerOver:()=>null})),U,{events:{compute:t||E,priority:f}}),i.createElement("primitive",(0,n.A)({object:b.texture},h)))});function s({frames:e,renderPriority:t,children:r,fbo:n}){let a,l,o,s,v=0;return(0,u.D)(t=>{(e===1/0||v<e)&&(a=t.gl.autoClear,l=t.gl.xr.enabled,o=t.gl.getRenderTarget(),s=t.gl.xr.isPresenting,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.xr.isPresenting=!1,t.gl.setRenderTarget(n),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(o),t.gl.autoClear=a,t.gl.xr.enabled=l,t.gl.xr.isPresenting=s,v++)},t),i.createElement(i.Fragment,null,r)}},59341:(e,t,r)=>{r.d(t,{u:()=>l});var n=r(44501),a=r(14232),i=r(71804),u=r(78925);let l=a.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:o,...s},v)=>{let c=(0,i.C)(({set:e})=>e),f=(0,i.C)(({camera:e})=>e),m=(0,i.C)(({size:e})=>e),d=a.useRef(null);a.useImperativeHandle(v,()=>d.current,[]);let g=a.useRef(null),p=(0,u.j)(t);a.useLayoutEffect(()=>{s.manual||(d.current.aspect=m.width/m.height)},[m,s]),a.useLayoutEffect(()=>{d.current.updateProjectionMatrix()});let h=0,x=null,D="function"==typeof o;return(0,i.D)(t=>{D&&(r===1/0||h<r)&&(g.current.visible=!1,t.gl.setRenderTarget(p),x=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,d.current),t.scene.background=x,t.gl.setRenderTarget(null),g.current.visible=!0,h++)}),a.useLayoutEffect(()=>{if(l)return c(()=>({camera:d.current})),()=>c(()=>({camera:f}))},[d,l,c]),a.createElement(a.Fragment,null,a.createElement("perspectiveCamera",(0,n.A)({ref:d},s),!D&&o),a.createElement("group",{ref:g},D&&o(p.texture)))})},78925:(e,t,r)=>{r.d(t,{j:()=>u});var n=r(14232),a=r(14796),i=r(71804);function u(e,t,r){let u=(0,i.C)(e=>e.size),l=(0,i.C)(e=>e.viewport),o="number"==typeof e?e:u.width*l.dpr,s="number"==typeof t?t:u.height*l.dpr,v=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=v,d=null!=f?f:v.depthBuffer,g=n.useMemo(()=>{let e=new a.WebGLRenderTarget(o,s,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...m});return d&&(e.depthTexture=new a.DepthTexture(o,s,a.FloatType)),e.samples=c,e},[]);return n.useLayoutEffect(()=>{g.setSize(o,s),c&&(g.samples=c)},[c,g,o,s]),n.useEffect(()=>()=>g.dispose(),[]),g}},88924:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(18153),a=r(94892),i=r(49082),u=r(54215),l=r(59341),o=r(33191),s=r(45302),v=r(71804),c=r(14232);let f=c.memo(function(e){let{}=e;return(0,n.FD)(s.Hl,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,n.Y)("ambientLight",{intensity:.5}),(0,n.Y)("directionalLight",{position:[10,10,5]}),(0,n.Y)(m,{}),(0,n.Y)(d,{position:[0,1,0],scale:.2}),(0,n.Y)(a._,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,n.Y)(a._,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,n.Y)(i.N,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})});function m(){let[e,t]=c.useState("");c.useEffect(()=>{r.e(3217).then(r.bind(r,3217)).then(e=>t(e.default))},[]);let a=c.useRef();return(0,v.D)(e=>{let{clock:t}=e;a.current&&(a.current.position.x=2*Math.sin(t.elapsedTime))}),(0,n.FD)("mesh",{children:[(0,n.Y)("boxGeometry",{}),(0,n.Y)("meshStandardMaterial",{children:(0,n.FD)(u.Y,{attach:"map",anisotropy:16,children:[(0,n.Y)(l.u,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,n.Y)("color",{attach:"background",args:["orange"]}),(0,n.Y)("ambientLight",{intensity:.5}),(0,n.Y)("directionalLight",{position:[10,10,5]}),(0,n.Y)(o.E,{font:e,ref:a,fontSize:4,color:"#555",children:"hello"}),(0,n.Y)(d,{})]})})]})}function d(e){let t=c.useRef(null),[r,a]=c.useState(!1),[i,u]=c.useState(!1);return(0,v.D)(()=>t.current.rotation.x+=.01),(0,n.Y)("group",{...e,children:(0,n.FD)("mesh",{ref:t,scale:i?1.5:1,onClick:()=>u(e=>!e),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[(0,n.Y)("dodecahedronGeometry",{args:[.75]}),(0,n.Y)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}},94892:(e,t,r)=>{r.d(t,{_:()=>s});var n=r(44501),a=r(14232),i=r(14796),u=r(71804);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},s=a.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:s=1,height:v=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:g=!0,color:p="#000000",depthWrite:h=!1,renderOrder:x,...D},y)=>{let b,U,E=a.useRef(null),C=(0,u.C)(e=>e.scene),w=(0,u.C)(e=>e.gl),M=a.useRef(null);s*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[R,Y,S,L,T,P,k]=a.useMemo(()=>{let e=new i.WebGLRenderTarget(d,d),t=new i.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new i.PlaneGeometry(s,v).rotateX(Math.PI/2),n=new i.Mesh(r),a=new i.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new i.Color(p)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let u=new i.ShaderMaterial(l),c=new i.ShaderMaterial(o);return c.depthTest=u.depthTest=!1,[e,r,a,n,u,c,t]},[d,s,v,e,p]),F=e=>{L.visible=!0,L.material=T,T.uniforms.tDiffuse.value=R.texture,T.uniforms.h.value=e/256,w.setRenderTarget(k),w.render(L,M.current),L.material=P,P.uniforms.tDiffuse.value=k.texture,P.uniforms.v.value=e/256,w.setRenderTarget(R),w.render(L,M.current),L.visible=!1},_=0;return(0,u.D)(()=>{M.current&&(t===1/0||_<t)&&(_++,b=C.background,U=C.overrideMaterial,E.current.visible=!1,C.background=null,C.overrideMaterial=S,w.setRenderTarget(R),w.render(C,M.current),F(c),g&&F(.4*c),w.setRenderTarget(null),E.current.visible=!0,C.overrideMaterial=U,C.background=b)}),a.useImperativeHandle(y,()=>E.current,[]),a.createElement("group",(0,n.A)({"rotation-x":Math.PI/2},D,{ref:E}),a.createElement("mesh",{renderOrder:x,geometry:Y,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{transparent:!0,map:R.texture,opacity:r,depthWrite:h})),a.createElement("orthographicCamera",{ref:M,args:[-s/2,s/2,v/2,-v/2,f,m]}))})}}]);
//# sourceMappingURL=8924.36513aaf4bcf0362.js.map