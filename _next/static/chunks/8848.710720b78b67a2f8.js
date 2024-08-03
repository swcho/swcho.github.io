"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8848],{7433:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(55482),a=r(67294),u=r(48407),i=r(90319);let s=e=>"function"==typeof e,l=a.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:o,...v},c)=>{let f=(0,u.A)(({set:e})=>e),m=(0,u.A)(({camera:e})=>e),d=(0,u.A)(({size:e})=>e),x=a.useRef(null);a.useImperativeHandle(c,()=>x.current,[]);let g=a.useRef(null),h=(0,i.R)(t);a.useLayoutEffect(()=>{v.manual||(x.current.aspect=d.width/d.height)},[d,v]),a.useLayoutEffect(()=>{x.current.updateProjectionMatrix()});let p=0,y=null,D=s(o);return(0,u.C)(t=>{D&&(r===1/0||p<r)&&(g.current.visible=!1,t.gl.setRenderTarget(h),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,x.current),t.scene.background=y,t.gl.setRenderTarget(null),g.current.visible=!0,p++)}),a.useLayoutEffect(()=>{if(l)return f(()=>({camera:x.current})),()=>f(()=>({camera:m}))},[x,l,f]),a.createElement(a.Fragment,null,a.createElement("perspectiveCamera",(0,n.Z)({ref:x},v),!D&&o),a.createElement("group",{ref:g},D&&o(h.texture)))})},90319:function(e,t,r){r.d(t,{R:function(){return i}});var n=r(67294),a=r(99477),u=r(48407);function i(e,t,r){let i=(0,u.A)(e=>e.size),s=(0,u.A)(e=>e.viewport),l="number"==typeof e?e:i.width*s.dpr,o="number"==typeof t?t:i.height*s.dpr,v=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=v,d=n.useMemo(()=>{let e=new a.WebGLRenderTarget(l,o,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...m});return f&&(e.depthTexture=new a.DepthTexture(l,o,a.FloatType)),e.samples=c,e},[]);return n.useLayoutEffect(()=>{d.setSize(l,o),c&&(d.samples=c)},[c,d,l,o]),n.useEffect(()=>()=>d.dispose(),[]),d}},8848:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(85893),a=r(55482),u=r(67294),i=r(99477),s=r(48407);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},v=u.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:n=1,height:v=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:x=!0,color:g="#000000",depthWrite:h=!1,renderOrder:p,...y},D)=>{let U,b;let j=u.useRef(null),M=(0,s.A)(e=>e.scene),R=(0,s.A)(e=>e.gl),w=u.useRef(null);n*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[C,E,S,T,k,A,P]=u.useMemo(()=>{let e=new i.WebGLRenderTarget(d,d),t=new i.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new i.PlaneGeometry(n,v).rotateX(Math.PI/2),a=new i.Mesh(r),u=new i.MeshDepthMaterial;u.depthTest=u.depthWrite=!1,u.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new i.Color(g)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let s=new i.ShaderMaterial(l),c=new i.ShaderMaterial(o);return c.depthTest=s.depthTest=!1,[e,r,u,a,s,c,t]},[d,n,v,e,g]),L=e=>{T.visible=!0,T.material=k,k.uniforms.tDiffuse.value=C.texture,k.uniforms.h.value=1*e/256,R.setRenderTarget(P),R.render(T,w.current),T.material=A,A.uniforms.tDiffuse.value=P.texture,A.uniforms.v.value=1*e/256,R.setRenderTarget(C),R.render(T,w.current),T.visible=!1},F=0;return(0,s.C)(()=>{w.current&&(t===1/0||F<t)&&(F++,U=M.background,b=M.overrideMaterial,j.current.visible=!1,M.background=null,M.overrideMaterial=S,R.setRenderTarget(C),R.render(M,w.current),L(c),x&&L(.4*c),R.setRenderTarget(null),j.current.visible=!0,M.overrideMaterial=b,M.background=U)}),u.useImperativeHandle(D,()=>j.current,[]),u.createElement("group",(0,a.Z)({"rotation-x":Math.PI/2},y,{ref:j}),u.createElement("mesh",{renderOrder:p,geometry:E,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},u.createElement("meshBasicMaterial",{transparent:!0,map:C.texture,opacity:r,depthWrite:h})),u.createElement("orthographicCamera",{ref:w,args:[-n/2,n/2,v/2,-v/2,f,m]}))});var c=r(30398),f=r(90319);let m=u.forwardRef(({children:e,compute:t,width:r,height:n,samples:l=8,renderPriority:o=0,eventPriority:v=0,frames:c=1/0,stencilBuffer:m=!1,depthBuffer:x=!0,generateMipmaps:g=!1,...h},p)=>{let{size:y,viewport:D}=(0,s.A)(),U=(0,f.R)((r||y.width)*D.dpr,(n||y.height)*D.dpr,{samples:l,stencilBuffer:m,depthBuffer:x,generateMipmaps:g}),[b]=u.useState(()=>new i.Scene),j=u.useCallback((e,t,r)=>{var n,a;let u=null==(n=U.texture)?void 0:n.__r3f.parent;for(;u&&!(u instanceof i.Object3D);)u=u.__r3f.parent;if(!u)return!1;r.raycaster.camera||r.events.compute(e,r,null==(a=r.previousRoot)?void 0:a.getState());let[s]=r.raycaster.intersectObject(u);if(!s)return!1;let l=s.uv;if(!l)return!1;t.raycaster.setFromCamera(t.pointer.set(2*l.x-1,2*l.y-1),t.camera)},[]);return u.useImperativeHandle(p,()=>U.texture,[U]),u.createElement(u.Fragment,null,(0,s.g)(u.createElement(d,{renderPriority:o,frames:c,fbo:U},e,u.createElement("group",{onPointerOver:()=>null})),b,{events:{compute:t||j,priority:v}}),u.createElement("primitive",(0,a.Z)({object:U.texture},h)))});function d({frames:e,renderPriority:t,children:r,fbo:n}){let a,i,l=0;return(0,s.C)(t=>{(e===1/0||l<e)&&(a=t.gl.autoClear,i=t.gl.xr.enabled,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.setRenderTarget(n),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(null),t.gl.autoClear=a,t.gl.xr.enabled=i,l++)},t),u.createElement(u.Fragment,null,r)}var x=r(7433),g=r(82473),h=r(15029),p=u.memo(function(e){let{}=e;return(0,n.jsxs)(h.Xz,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)("directionalLight",{position:[10,10,5]}),(0,n.jsx)(y,{}),(0,n.jsx)(D,{position:[0,1,0],scale:.2}),(0,n.jsx)(v,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,n.jsx)(v,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,n.jsx)(c.z,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})});function y(){let[e,t]=u.useState("");u.useEffect(()=>{r.e(656).then(r.bind(r,40656)).then(e=>t(e.default))},[]);let a=u.useRef();return(0,s.C)(e=>{let{clock:t}=e;a.current&&(a.current.position.x=2*Math.sin(t.elapsedTime))}),(0,n.jsxs)("mesh",{children:[(0,n.jsx)("boxGeometry",{}),(0,n.jsx)("meshStandardMaterial",{children:(0,n.jsxs)(m,{attach:"map",anisotropy:16,children:[(0,n.jsx)(x.c,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,n.jsx)("color",{attach:"background",args:["orange"]}),(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)("directionalLight",{position:[10,10,5]}),(0,n.jsx)(g.x,{font:e,ref:a,fontSize:4,color:"#555",children:"hello"}),(0,n.jsx)(D,{})]})})]})}function D(e){let t=u.useRef(null),[r,a]=u.useState(!1),[i,l]=u.useState(!1);return(0,s.C)(()=>t.current.rotation.x+=.01),(0,n.jsx)("group",{...e,children:(0,n.jsxs)("mesh",{ref:t,scale:i?1.5:1,onClick:()=>l(e=>!e),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[(0,n.jsx)("dodecahedronGeometry",{args:[.75]}),(0,n.jsx)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}}}]);
//# sourceMappingURL=8848.710720b78b67a2f8.js.map