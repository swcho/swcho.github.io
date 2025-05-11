"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3095],{92324:function(e,t,r){r.d(t,{j:function(){return o}});var n=r(87462),a=r(67294),u=r(99477),i=r(48407);let s={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},o=a.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:o=1,height:v=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:x=!0,color:g="#000000",depthWrite:h=!1,renderOrder:p,...y},D)=>{let U,b;let j=a.useRef(null),M=(0,i.A)(e=>e.scene),R=(0,i.A)(e=>e.gl),w=a.useRef(null);o*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[C,E,S,T,k,A,P]=a.useMemo(()=>{let e=new u.WebGLRenderTarget(d,d),t=new u.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new u.PlaneGeometry(o,v).rotateX(Math.PI/2),n=new u.Mesh(r),a=new u.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new u.Color(g)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let i=new u.ShaderMaterial(s),c=new u.ShaderMaterial(l);return c.depthTest=i.depthTest=!1,[e,r,a,n,i,c,t]},[d,o,v,e,g]),L=e=>{T.visible=!0,T.material=k,k.uniforms.tDiffuse.value=C.texture,k.uniforms.h.value=1*e/256,R.setRenderTarget(P),R.render(T,w.current),T.material=A,A.uniforms.tDiffuse.value=P.texture,A.uniforms.v.value=1*e/256,R.setRenderTarget(C),R.render(T,w.current),T.visible=!1},F=0;return(0,i.C)(()=>{w.current&&(t===1/0||F<t)&&(F++,U=M.background,b=M.overrideMaterial,j.current.visible=!1,M.background=null,M.overrideMaterial=S,R.setRenderTarget(C),R.render(M,w.current),L(c),x&&L(.4*c),R.setRenderTarget(null),j.current.visible=!0,M.overrideMaterial=b,M.background=U)}),a.useImperativeHandle(D,()=>j.current,[]),a.createElement("group",(0,n.Z)({"rotation-x":Math.PI/2},y,{ref:j}),a.createElement("mesh",{renderOrder:p,geometry:E,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{transparent:!0,map:C.texture,opacity:r,depthWrite:h})),a.createElement("orthographicCamera",{ref:w,args:[-o/2,o/2,v/2,-v/2,f,m]}))})},7433:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(87462),a=r(67294),u=r(48407),i=r(90319);let s=e=>"function"==typeof e,l=a.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:o,...v},c)=>{let f=(0,u.A)(({set:e})=>e),m=(0,u.A)(({camera:e})=>e),d=(0,u.A)(({size:e})=>e),x=a.useRef(null);a.useImperativeHandle(c,()=>x.current,[]);let g=a.useRef(null),h=(0,i.R)(t);a.useLayoutEffect(()=>{v.manual||(x.current.aspect=d.width/d.height)},[d,v]),a.useLayoutEffect(()=>{x.current.updateProjectionMatrix()});let p=0,y=null,D=s(o);return(0,u.C)(t=>{D&&(r===1/0||p<r)&&(g.current.visible=!1,t.gl.setRenderTarget(h),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,x.current),t.scene.background=y,t.gl.setRenderTarget(null),g.current.visible=!0,p++)}),a.useLayoutEffect(()=>{if(l)return f(()=>({camera:x.current})),()=>f(()=>({camera:m}))},[x,l,f]),a.createElement(a.Fragment,null,a.createElement("perspectiveCamera",(0,n.Z)({ref:x},v),!D&&o),a.createElement("group",{ref:g},D&&o(h.texture)))})},90319:function(e,t,r){r.d(t,{R:function(){return i}});var n=r(67294),a=r(99477),u=r(48407);function i(e,t,r){let i=(0,u.A)(e=>e.size),s=(0,u.A)(e=>e.viewport),l="number"==typeof e?e:i.width*s.dpr,o="number"==typeof t?t:i.height*s.dpr,v=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=v,d=n.useMemo(()=>{let e=new a.WebGLRenderTarget(l,o,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...m});return f&&(e.depthTexture=new a.DepthTexture(l,o,a.FloatType)),e.samples=c,e},[]);return n.useLayoutEffect(()=>{d.setSize(l,o),c&&(d.samples=c)},[c,d,l,o]),n.useEffect(()=>()=>d.dispose(),[]),d}},33095:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(85893),a=r(92324),u=r(30398),i=r(87462),s=r(99477),l=r(67294),o=r(48407),v=r(90319);let c=l.forwardRef(({children:e,compute:t,width:r,height:n,samples:a=8,renderPriority:u=0,eventPriority:c=0,frames:m=1/0,stencilBuffer:d=!1,depthBuffer:x=!0,generateMipmaps:g=!1,...h},p)=>{let{size:y,viewport:D}=(0,o.A)(),U=(0,v.R)((r||y.width)*D.dpr,(n||y.height)*D.dpr,{samples:a,stencilBuffer:d,depthBuffer:x,generateMipmaps:g}),[b]=l.useState(()=>new s.Scene),j=l.useCallback((e,t,r)=>{var n,a;let u=null==(n=U.texture)?void 0:n.__r3f.parent;for(;u&&!(u instanceof s.Object3D);)u=u.__r3f.parent;if(!u)return!1;r.raycaster.camera||r.events.compute(e,r,null==(a=r.previousRoot)?void 0:a.getState());let[i]=r.raycaster.intersectObject(u);if(!i)return!1;let l=i.uv;if(!l)return!1;t.raycaster.setFromCamera(t.pointer.set(2*l.x-1,2*l.y-1),t.camera)},[]);return l.useImperativeHandle(p,()=>U.texture,[U]),l.createElement(l.Fragment,null,(0,o.g)(l.createElement(f,{renderPriority:u,frames:m,fbo:U},e,l.createElement("group",{onPointerOver:()=>null})),b,{events:{compute:t||j,priority:c}}),l.createElement("primitive",(0,i.Z)({object:U.texture},h)))});function f({frames:e,renderPriority:t,children:r,fbo:n}){let a,u,i=0;return(0,o.C)(t=>{(e===1/0||i<e)&&(a=t.gl.autoClear,u=t.gl.xr.enabled,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.setRenderTarget(n),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(null),t.gl.autoClear=a,t.gl.xr.enabled=u,i++)},t),l.createElement(l.Fragment,null,r)}var m=r(7433),d=r(82473),x=r(15029),g=l.memo(function(e){let{}=e;return(0,n.jsxs)(x.Xz,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)("directionalLight",{position:[10,10,5]}),(0,n.jsx)(h,{}),(0,n.jsx)(p,{position:[0,1,0],scale:.2}),(0,n.jsx)(a.j,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,n.jsx)(a.j,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,n.jsx)(u.z,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})});function h(){let[e,t]=l.useState("");l.useEffect(()=>{r.e(656).then(r.bind(r,40656)).then(e=>t(e.default))},[]);let a=l.useRef();return(0,o.C)(e=>{let{clock:t}=e;a.current&&(a.current.position.x=2*Math.sin(t.elapsedTime))}),(0,n.jsxs)("mesh",{children:[(0,n.jsx)("boxGeometry",{}),(0,n.jsx)("meshStandardMaterial",{children:(0,n.jsxs)(c,{attach:"map",anisotropy:16,children:[(0,n.jsx)(m.c,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,n.jsx)("color",{attach:"background",args:["orange"]}),(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)("directionalLight",{position:[10,10,5]}),(0,n.jsx)(d.x,{font:e,ref:a,fontSize:4,color:"#555",children:"hello"}),(0,n.jsx)(p,{})]})})]})}function p(e){let t=l.useRef(null),[r,a]=l.useState(!1),[u,i]=l.useState(!1);return(0,o.C)(()=>t.current.rotation.x+=.01),(0,n.jsx)("group",{...e,children:(0,n.jsxs)("mesh",{ref:t,scale:u?1.5:1,onClick:()=>i(e=>!e),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[(0,n.jsx)("dodecahedronGeometry",{args:[.75]}),(0,n.jsx)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}}}]);
//# sourceMappingURL=3095.e9d2023a5a26d682.js.map