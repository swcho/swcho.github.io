"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{6128:function(e,t,r){r.d(t,{j:function(){return v}});var n=r(87462),a=r(67294),u=r(99477),i=r(19390);let o={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},v=a.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:v=1,height:s=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:g=!0,color:h="#000000",depthWrite:p=!1,renderOrder:x,...y},D)=>{let U,b;let M=a.useRef(null),R=(0,i.A)(e=>e.scene),Z=(0,i.A)(e=>e.gl),w=a.useRef(null);v*=Array.isArray(e)?e[0]:e||1,s*=Array.isArray(e)?e[1]:e||1;let[C,T,E,S,k,A,P]=a.useMemo(()=>{let e=new u.WebGLRenderTarget(d,d),t=new u.WebGLRenderTarget(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new u.PlaneGeometry(v,s).rotateX(Math.PI/2),n=new u.Mesh(r),a=new u.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new u.Color(h)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let i=new u.ShaderMaterial(o),c=new u.ShaderMaterial(l);return c.depthTest=i.depthTest=!1,[e,r,a,n,i,c,t]},[d,v,s,e,h]),L=e=>{S.visible=!0,S.material=k,k.uniforms.tDiffuse.value=C.texture,k.uniforms.h.value=1*e/256,Z.setRenderTarget(P),Z.render(S,w.current),S.material=A,A.uniforms.tDiffuse.value=P.texture,A.uniforms.v.value=1*e/256,Z.setRenderTarget(C),Z.render(S,w.current),S.visible=!1},F=0;return(0,i.C)(()=>{w.current&&(t===1/0||F<t)&&(F++,U=R.background,b=R.overrideMaterial,M.current.visible=!1,R.background=null,R.overrideMaterial=E,Z.setRenderTarget(C),Z.render(R,w.current),L(c),g&&L(.4*c),Z.setRenderTarget(null),M.current.visible=!0,R.overrideMaterial=b,R.background=U)}),a.useImperativeHandle(D,()=>M.current,[]),a.createElement("group",(0,n.Z)({"rotation-x":Math.PI/2},y,{ref:M}),a.createElement("mesh",{renderOrder:x,geometry:T,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{transparent:!0,map:C.texture,opacity:r,depthWrite:p})),a.createElement("orthographicCamera",{ref:w,args:[-v/2,v/2,s/2,-s/2,f,m]}))})},7433:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(87462),a=r(67294),u=r(19390),i=r(90319);let o=e=>"function"==typeof e,l=a.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:v,...s},c)=>{let f=(0,u.A)(({set:e})=>e),m=(0,u.A)(({camera:e})=>e),d=(0,u.A)(({size:e})=>e),g=a.useRef(null);a.useImperativeHandle(c,()=>g.current,[]);let h=a.useRef(null),p=(0,i.R)(t);a.useLayoutEffect(()=>{s.manual||(g.current.aspect=d.width/d.height)},[d,s]),a.useLayoutEffect(()=>{g.current.updateProjectionMatrix()});let x=0,y=null,D=o(v);return(0,u.C)(t=>{D&&(r===1/0||x<r)&&(h.current.visible=!1,t.gl.setRenderTarget(p),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,g.current),t.scene.background=y,t.gl.setRenderTarget(null),h.current.visible=!0,x++)}),a.useLayoutEffect(()=>{if(l)return f(()=>({camera:g.current})),()=>f(()=>({camera:m}))},[g,l,f]),a.createElement(a.Fragment,null,a.createElement("perspectiveCamera",(0,n.Z)({ref:g},s),!D&&v),a.createElement("group",{ref:h},D&&v(p.texture)))})},18569:function(e,t,r){r.d(t,{T:function(){return l}});var n=r(87462),a=r(99477),u=r(67294),i=r(19390),o=r(90319);let l=u.forwardRef(({children:e,compute:t,width:r,height:l,samples:s=8,renderPriority:c=0,eventPriority:f=0,frames:m=1/0,stencilBuffer:d=!1,depthBuffer:g=!0,generateMipmaps:h=!1,...p},x)=>{let{size:y,viewport:D}=(0,i.A)(),U=(0,o.R)((r||y.width)*D.dpr,(l||y.height)*D.dpr,{samples:s,stencilBuffer:d,depthBuffer:g,generateMipmaps:h}),[b]=u.useState(()=>new a.Scene),M=u.useCallback((e,t,r)=>{var n,u;let i=null==(n=U.texture)?void 0:n.__r3f.parent;for(;i&&!(i instanceof a.Object3D);)i=i.__r3f.parent;if(!i)return!1;r.raycaster.camera||r.events.compute(e,r,null==(u=r.previousRoot)?void 0:u.getState());let[o]=r.raycaster.intersectObject(i);if(!o)return!1;let l=o.uv;if(!l)return!1;t.raycaster.setFromCamera(t.pointer.set(2*l.x-1,2*l.y-1),t.camera)},[]);return u.useImperativeHandle(x,()=>U.texture,[U]),u.createElement(u.Fragment,null,(0,i.g)(u.createElement(v,{renderPriority:c,frames:m,fbo:U},e,u.createElement("group",{onPointerOver:()=>null})),b,{events:{compute:t||M,priority:f}}),u.createElement("primitive",(0,n.Z)({object:U.texture},p)))});function v({frames:e,renderPriority:t,children:r,fbo:n}){let a,o,l=0;return(0,i.C)(t=>{(e===1/0||l<e)&&(a=t.gl.autoClear,o=t.gl.xr.enabled,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.setRenderTarget(n),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(null),t.gl.autoClear=a,t.gl.xr.enabled=o,l++)},t),u.createElement(u.Fragment,null,r)}},90319:function(e,t,r){r.d(t,{R:function(){return i}});var n=r(67294),a=r(99477),u=r(19390);function i(e,t,r){let i=(0,u.A)(e=>e.size),o=(0,u.A)(e=>e.viewport),l="number"==typeof e?e:i.width*o.dpr,v="number"==typeof t?t:i.height*o.dpr,s=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=s,d=n.useMemo(()=>{let e=new a.WebGLRenderTarget(l,v,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...m});return f&&(e.depthTexture=new a.DepthTexture(l,v,a.FloatType)),e.samples=c,e},[]);return n.useLayoutEffect(()=>{d.setSize(l,v),c&&(d.samples=c)},[c,d,l,v]),n.useEffect(()=>()=>d.dispose(),[]),d}},68252:function(e,t,r){r.r(t);var n=r(35944),a=r(6128),u=r(60214),i=r(18569),o=r(7433),l=r(82473),v=r(15029),s=r(19390),c=r(67294);function f(){let[e,t]=c.useState("");c.useEffect(()=>{r.e(656).then(r.bind(r,40656)).then(e=>t(e.default))},[]);let a=c.useRef();return(0,s.C)(e=>{let{clock:t}=e;a.current&&(a.current.position.x=2*Math.sin(t.elapsedTime))}),(0,n.BX)("mesh",{children:[(0,n.tZ)("boxGeometry",{}),(0,n.tZ)("meshStandardMaterial",{children:(0,n.BX)(i.T,{attach:"map",anisotropy:16,children:[(0,n.tZ)(o.c,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,n.tZ)("color",{attach:"background",args:["orange"]}),(0,n.tZ)("ambientLight",{intensity:.5}),(0,n.tZ)("directionalLight",{position:[10,10,5]}),(0,n.tZ)(l.x,{font:e,ref:a,fontSize:4,color:"#555",children:"hello"}),(0,n.tZ)(m,{})]})})]})}function m(e){let t=c.useRef(null),[r,a]=c.useState(!1),[u,i]=c.useState(!1);return(0,s.C)(()=>t.current.rotation.x+=.01),(0,n.tZ)("group",{...e,children:(0,n.BX)("mesh",{ref:t,scale:u?1.5:1,onClick:()=>i(e=>!e),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[(0,n.tZ)("dodecahedronGeometry",{args:[.75]}),(0,n.tZ)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}t.default=c.memo(function(e){let{}=e;return(0,n.BX)(v.Xz,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,n.tZ)("ambientLight",{intensity:.5}),(0,n.tZ)("directionalLight",{position:[10,10,5]}),(0,n.tZ)(f,{}),(0,n.tZ)(m,{position:[0,1,0],scale:.2}),(0,n.tZ)(a.j,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,n.tZ)(a.j,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,n.tZ)(u.z,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})})}}]);
//# sourceMappingURL=8252.ae9a48e8ebf89c63.js.map