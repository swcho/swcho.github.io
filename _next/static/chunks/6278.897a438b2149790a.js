"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6278],{16278:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var a=r(85893),n=r(55482),u=r(67294),i=r(99477),s=r(48407);let l={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},v=u.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:a=1,height:v=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:x=!0,color:g="#000000",depthWrite:h=!1,renderOrder:p,...y},D)=>{let U,b;let j=u.useRef(null),M=(0,s.A)(e=>e.scene),w=(0,s.A)(e=>e.gl),C=u.useRef(null);a*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[R,E,S,T,k,A,P]=u.useMemo(()=>{let e=new i.WebGLRenderTarget(d,d),t=new i.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new i.PlaneGeometry(a,v).rotateX(Math.PI/2),n=new i.Mesh(r),u=new i.MeshDepthMaterial;u.depthTest=u.depthWrite=!1,u.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new i.Color(g)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let s=new i.ShaderMaterial(l),c=new i.ShaderMaterial(o);return c.depthTest=s.depthTest=!1,[e,r,u,n,s,c,t]},[d,a,v,e,g]),L=e=>{T.visible=!0,T.material=k,k.uniforms.tDiffuse.value=R.texture,k.uniforms.h.value=1*e/256,w.setRenderTarget(P),w.render(T,C.current),T.material=A,A.uniforms.tDiffuse.value=P.texture,A.uniforms.v.value=1*e/256,w.setRenderTarget(R),w.render(T,C.current),T.visible=!1},F=0;return(0,s.C)(()=>{C.current&&(t===1/0||F<t)&&(F++,U=M.background,b=M.overrideMaterial,j.current.visible=!1,M.background=null,M.overrideMaterial=S,w.setRenderTarget(R),w.render(M,C.current),L(c),x&&L(.4*c),w.setRenderTarget(null),j.current.visible=!0,M.overrideMaterial=b,M.background=U)}),u.useImperativeHandle(D,()=>j.current,[]),u.createElement("group",(0,n.Z)({"rotation-x":Math.PI/2},y,{ref:j}),u.createElement("mesh",{renderOrder:p,geometry:E,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},u.createElement("meshBasicMaterial",{transparent:!0,map:R.texture,opacity:r,depthWrite:h})),u.createElement("orthographicCamera",{ref:C,args:[-a/2,a/2,v/2,-v/2,f,m]}))});var c=r(30398);function f(e,t,r){let a=(0,s.A)(e=>e.size),n=(0,s.A)(e=>e.viewport),l="number"==typeof e?e:a.width*n.dpr,o="number"==typeof t?t:a.height*n.dpr,v=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=v,d=u.useMemo(()=>{let e=new i.WebGLRenderTarget(l,o,{minFilter:i.LinearFilter,magFilter:i.LinearFilter,type:i.HalfFloatType,...m});return f&&(e.depthTexture=new i.DepthTexture(l,o,i.FloatType)),e.samples=c,e},[]);return u.useLayoutEffect(()=>{d.setSize(l,o),c&&(d.samples=c)},[c,d,l,o]),u.useEffect(()=>()=>d.dispose(),[]),d}let m=u.forwardRef(({children:e,compute:t,width:r,height:a,samples:l=8,renderPriority:o=0,eventPriority:v=0,frames:c=1/0,stencilBuffer:m=!1,depthBuffer:x=!0,generateMipmaps:g=!1,...h},p)=>{let{size:y,viewport:D}=(0,s.A)(),U=f((r||y.width)*D.dpr,(a||y.height)*D.dpr,{samples:l,stencilBuffer:m,depthBuffer:x,generateMipmaps:g}),[b]=u.useState(()=>new i.Scene),j=u.useCallback((e,t,r)=>{var a,n;let u=null==(a=U.texture)?void 0:a.__r3f.parent;for(;u&&!(u instanceof i.Object3D);)u=u.__r3f.parent;if(!u)return!1;r.raycaster.camera||r.events.compute(e,r,null==(n=r.previousRoot)?void 0:n.getState());let[s]=r.raycaster.intersectObject(u);if(!s)return!1;let l=s.uv;if(!l)return!1;t.raycaster.setFromCamera(t.pointer.set(2*l.x-1,2*l.y-1),t.camera)},[]);return u.useImperativeHandle(p,()=>U.texture,[U]),u.createElement(u.Fragment,null,(0,s.g)(u.createElement(d,{renderPriority:o,frames:c,fbo:U},e,u.createElement("group",{onPointerOver:()=>null})),b,{events:{compute:t||j,priority:v}}),u.createElement("primitive",(0,n.Z)({object:U.texture},h)))});function d({frames:e,renderPriority:t,children:r,fbo:a}){let n,i,l=0;return(0,s.C)(t=>{(e===1/0||l<e)&&(n=t.gl.autoClear,i=t.gl.xr.enabled,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.setRenderTarget(a),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(null),t.gl.autoClear=n,t.gl.xr.enabled=i,l++)},t),u.createElement(u.Fragment,null,r)}let x=e=>"function"==typeof e,g=u.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:a,children:i,...l},o)=>{let v=(0,s.A)(({set:e})=>e),c=(0,s.A)(({camera:e})=>e),m=(0,s.A)(({size:e})=>e),d=u.useRef(null);u.useImperativeHandle(o,()=>d.current,[]);let g=u.useRef(null),h=f(t);u.useLayoutEffect(()=>{l.manual||(d.current.aspect=m.width/m.height)},[m,l]),u.useLayoutEffect(()=>{d.current.updateProjectionMatrix()});let p=0,y=null,D=x(i);return(0,s.C)(t=>{D&&(r===1/0||p<r)&&(g.current.visible=!1,t.gl.setRenderTarget(h),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,d.current),t.scene.background=y,t.gl.setRenderTarget(null),g.current.visible=!0,p++)}),u.useLayoutEffect(()=>{if(a)return v(()=>({camera:d.current})),()=>v(()=>({camera:c}))},[d,a,v]),u.createElement(u.Fragment,null,u.createElement("perspectiveCamera",(0,n.Z)({ref:d},l),!D&&i),u.createElement("group",{ref:g},D&&i(h.texture)))});var h=r(82473),p=r(15029),y=u.memo(function(e){let{}=e;return(0,a.jsxs)(p.Xz,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,a.jsx)("ambientLight",{intensity:.5}),(0,a.jsx)("directionalLight",{position:[10,10,5]}),(0,a.jsx)(D,{}),(0,a.jsx)(U,{position:[0,1,0],scale:.2}),(0,a.jsx)(v,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,a.jsx)(v,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,a.jsx)(c.z,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})});function D(){let[e,t]=u.useState("");u.useEffect(()=>{r.e(656).then(r.bind(r,40656)).then(e=>t(e.default))},[]);let n=u.useRef();return(0,s.C)(e=>{let{clock:t}=e;n.current&&(n.current.position.x=2*Math.sin(t.elapsedTime))}),(0,a.jsxs)("mesh",{children:[(0,a.jsx)("boxGeometry",{}),(0,a.jsx)("meshStandardMaterial",{children:(0,a.jsxs)(m,{attach:"map",anisotropy:16,children:[(0,a.jsx)(g,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,a.jsx)("color",{attach:"background",args:["orange"]}),(0,a.jsx)("ambientLight",{intensity:.5}),(0,a.jsx)("directionalLight",{position:[10,10,5]}),(0,a.jsx)(h.x,{font:e,ref:n,fontSize:4,color:"#555",children:"hello"}),(0,a.jsx)(U,{})]})})]})}function U(e){let t=u.useRef(null),[r,n]=u.useState(!1),[i,l]=u.useState(!1);return(0,s.C)(()=>t.current.rotation.x+=.01),(0,a.jsx)("group",{...e,children:(0,a.jsxs)("mesh",{ref:t,scale:i?1.5:1,onClick:()=>l(e=>!e),onPointerOver:()=>n(!0),onPointerOut:()=>n(!1),children:[(0,a.jsx)("dodecahedronGeometry",{args:[.75]}),(0,a.jsx)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}}}]);
//# sourceMappingURL=6278.897a438b2149790a.js.map