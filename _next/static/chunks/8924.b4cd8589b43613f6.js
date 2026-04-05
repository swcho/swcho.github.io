"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8924],{33191:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(44501),a=r(14232),u=r(1825),i=r(88360),o=r(41401);let s=a.forwardRef(({sdfGlyphSize:e=64,anchorX:t="center",anchorY:r="middle",font:s,fontSize:l=1,children:v,characters:c,onSync:f,...m},d)=>{let g=(0,i.C)(({invalidate:e})=>e),[p]=a.useState(()=>new u.EY),[h,x]=a.useMemo(()=>{let e=[],t="";return a.Children.forEach(v,r=>{"string"==typeof r||"number"==typeof r?t+=r:e.push(r)}),[e,t]},[v]);return(0,o.DY)(()=>new Promise(e=>(0,u.PY)({font:s,characters:c},e)),["troika-text",s,c]),a.useLayoutEffect(()=>void p.sync(()=>{g(),f&&f(p)})),a.useEffect(()=>()=>p.dispose(),[p]),a.createElement("primitive",(0,n.A)({object:p,ref:d,font:s,text:x,anchorX:t,anchorY:r,fontSize:l,sdfGlyphSize:e},m),h)})},49082:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(44501),a=r(88360),u=r(14232),i=r(78961);let o=u.forwardRef(({makeDefault:e,camera:t,regress:r,domElement:o,enableDamping:s=!0,keyEvents:l=!1,onChange:v,onStart:c,onEnd:f,...m},d)=>{let g=(0,a.C)(e=>e.invalidate),p=(0,a.C)(e=>e.camera),h=(0,a.C)(e=>e.gl),x=(0,a.C)(e=>e.events),D=(0,a.C)(e=>e.setEvents),y=(0,a.C)(e=>e.set),U=(0,a.C)(e=>e.get),b=(0,a.C)(e=>e.performance),E=t||p,C=o||x.connected||h.domElement,w=u.useMemo(()=>new i.N(E),[E]);return(0,a.D)(()=>{w.enabled&&w.update()},-1),u.useEffect(()=>(l&&w.connect(!0===l?C:l),w.connect(C),()=>void w.dispose()),[l,C,r,w,g]),u.useEffect(()=>{let e=e=>{g(),r&&b.regress(),v&&v(e)},t=e=>{c&&c(e)},n=e=>{f&&f(e)};return w.addEventListener("change",e),w.addEventListener("start",t),w.addEventListener("end",n),()=>{w.removeEventListener("start",t),w.removeEventListener("end",n),w.removeEventListener("change",e)}},[v,c,f,w,g,D]),u.useEffect(()=>{if(e){let e=U().controls;return y({controls:w}),()=>y({controls:e})}},[e,w]),u.createElement("primitive",(0,n.A)({ref:d,object:w,enableDamping:s},m))})},54215:(e,t,r)=>{r.d(t,{Y:()=>s});var n=r(44501),a=r(66691),u=r(14232),i=r(88360),o=r(78925);let s=u.forwardRef(({children:e,compute:t,width:r,height:s,samples:v=8,renderPriority:c=0,eventPriority:f=0,frames:m=1/0,stencilBuffer:d=!1,depthBuffer:g=!0,generateMipmaps:p=!1,...h},x)=>{let{size:D,viewport:y}=(0,i.C)(),U=(0,o.j)((r||D.width)*y.dpr,(s||D.height)*y.dpr,{samples:v,stencilBuffer:d,depthBuffer:g,generateMipmaps:p}),[b]=u.useState(()=>new a.Z58),E=u.useCallback((e,t,r)=>{var n,u,i;let o=null==(n=U.texture)||null==(n=n.__r3f.parent)?void 0:n.object;for(;o&&!(o instanceof a.B69);)o=null==(i=o.__r3f.parent)?void 0:i.object;if(!o)return!1;r.raycaster.camera||r.events.compute(e,r,null==(u=r.previousRoot)?void 0:u.getState());let[s]=r.raycaster.intersectObject(o);if(!s)return!1;let l=s.uv;if(!l)return!1;t.raycaster.setFromCamera(t.pointer.set(2*l.x-1,2*l.y-1),t.camera)},[]);return u.useImperativeHandle(x,()=>U.texture,[U]),u.createElement(u.Fragment,null,(0,i.o)(u.createElement(l,{renderPriority:c,frames:m,fbo:U},e,u.createElement("group",{onPointerOver:()=>null})),b,{events:{compute:t||E,priority:f}}),u.createElement("primitive",(0,n.A)({object:U.texture},h)))});function l({frames:e,renderPriority:t,children:r,fbo:n}){let a,o,s,l,v=0;return(0,i.D)(t=>{(e===1/0||v<e)&&(a=t.gl.autoClear,o=t.gl.xr.enabled,s=t.gl.getRenderTarget(),l=t.gl.xr.isPresenting,t.gl.autoClear=!0,t.gl.xr.enabled=!1,t.gl.xr.isPresenting=!1,t.gl.setRenderTarget(n),t.gl.render(t.scene,t.camera),t.gl.setRenderTarget(s),t.gl.autoClear=a,t.gl.xr.enabled=o,t.gl.xr.isPresenting=l,v++)},t),u.createElement(u.Fragment,null,r)}},59341:(e,t,r)=>{r.d(t,{u:()=>o});var n=r(44501),a=r(14232),u=r(88360),i=r(78925);let o=a.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:o,children:s,...l},v)=>{let c=(0,u.C)(({set:e})=>e),f=(0,u.C)(({camera:e})=>e),m=(0,u.C)(({size:e})=>e),d=a.useRef(null);a.useImperativeHandle(v,()=>d.current,[]);let g=a.useRef(null),p=(0,i.j)(t);a.useLayoutEffect(()=>{l.manual||(d.current.aspect=m.width/m.height)},[m,l]),a.useLayoutEffect(()=>{d.current.updateProjectionMatrix()});let h=0,x=null,D="function"==typeof s;return(0,u.D)(t=>{D&&(r===1/0||h<r)&&(g.current.visible=!1,t.gl.setRenderTarget(p),x=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,d.current),t.scene.background=x,t.gl.setRenderTarget(null),g.current.visible=!0,h++)}),a.useLayoutEffect(()=>{if(o)return c(()=>({camera:d.current})),()=>c(()=>({camera:f}))},[d,o,c]),a.createElement(a.Fragment,null,a.createElement("perspectiveCamera",(0,n.A)({ref:d},l),!D&&s),a.createElement("group",{ref:g},D&&s(p.texture)))})},78925:(e,t,r)=>{r.d(t,{j:()=>i});var n=r(14232),a=r(66691),u=r(88360);function i(e,t,r){let i=(0,u.C)(e=>e.size),o=(0,u.C)(e=>e.viewport),s="number"==typeof e?e:i.width*o.dpr,l="number"==typeof t?t:i.height*o.dpr,v=("number"==typeof e?r:e)||{},{samples:c=0,depth:f,...m}=v,d=null!=f?f:v.depthBuffer,g=n.useMemo(()=>{let e=new a.nWS(s,l,{minFilter:a.k6q,magFilter:a.k6q,type:a.ix0,...m});return d&&(e.depthTexture=new a.VCu(s,l,a.RQf)),e.samples=c,e},[]);return n.useLayoutEffect(()=>{g.setSize(s,l),c&&(g.samples=c)},[c,g,s,l]),n.useEffect(()=>()=>g.dispose(),[]),g}},88924:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(18153),a=r(94892),u=r(49082),i=r(54215),o=r(59341),s=r(33191),l=r(45302),v=r(88360),c=r(14232);let f=c.memo(function(e){let{}=e;return(0,n.FD)(l.Hl,{style:{height:"50vh"},camera:{position:[5,5,5],fov:25},children:[(0,n.Y)("ambientLight",{intensity:.5}),(0,n.Y)("directionalLight",{position:[10,10,5]}),(0,n.Y)(m,{}),(0,n.Y)(d,{position:[0,1,0],scale:.2}),(0,n.Y)(a._,{frames:1,position:[0,-.5,0],blur:1,opacity:.7}),(0,n.Y)(a._,{frames:1,position:[0,-.5,0],blur:3,color:"orange"}),(0,n.Y)(u.N,{minPolarAngle:0,maxPolarAngle:Math.PI/2.1})]})});function m(){let[e,t]=c.useState("");c.useEffect(()=>{r.e(3217).then(r.bind(r,3217)).then(e=>t(e.default))},[]);let a=c.useRef();return(0,v.D)(e=>{let{clock:t}=e;a.current&&(a.current.position.x=2*Math.sin(t.elapsedTime))}),(0,n.FD)("mesh",{children:[(0,n.Y)("boxGeometry",{}),(0,n.Y)("meshStandardMaterial",{children:(0,n.FD)(i.Y,{attach:"map",anisotropy:16,children:[(0,n.Y)(o.u,{makeDefault:!0,manual:!0,aspect:1,position:[0,0,5]}),(0,n.Y)("color",{attach:"background",args:["orange"]}),(0,n.Y)("ambientLight",{intensity:.5}),(0,n.Y)("directionalLight",{position:[10,10,5]}),(0,n.Y)(s.E,{font:e,ref:a,fontSize:4,color:"#555",children:"hello"}),(0,n.Y)(d,{})]})})]})}function d(e){let t=c.useRef(null),[r,a]=c.useState(!1),[u,i]=c.useState(!1);return(0,v.D)(()=>t.current.rotation.x+=.01),(0,n.Y)("group",{...e,children:(0,n.FD)("mesh",{ref:t,scale:u?1.5:1,onClick:()=>i(e=>!e),onPointerOver:()=>a(!0),onPointerOut:()=>a(!1),children:[(0,n.Y)("dodecahedronGeometry",{args:[.75]}),(0,n.Y)("meshStandardMaterial",{color:r?"hotpink":"#5de4c7"})]})})}},94892:(e,t,r)=>{r.d(t,{_:()=>l});var n=r(44501),a=r(14232),u=r(66691),i=r(88360);let o={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},s={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},l=a.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:l=1,height:v=1,blur:c=1,near:f=0,far:m=10,resolution:d=512,smooth:g=!0,color:p="#000000",depthWrite:h=!1,renderOrder:x,...D},y)=>{let U,b,E=a.useRef(null),C=(0,i.C)(e=>e.scene),w=(0,i.C)(e=>e.gl),S=a.useRef(null);l*=Array.isArray(e)?e[0]:e||1,v*=Array.isArray(e)?e[1]:e||1;let[Y,M,R,k,P,L,_]=a.useMemo(()=>{let e=new u.nWS(d,d),t=new u.nWS(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new u.bdM(l,v).rotateX(Math.PI/2),n=new u.eaF(r),a=new u.CSG;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new u.Q1f(p)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let i=new u.BKk(o),c=new u.BKk(s);return c.depthTest=i.depthTest=!1,[e,r,a,n,i,c,t]},[d,l,v,e,p]),T=e=>{k.visible=!0,k.material=P,P.uniforms.tDiffuse.value=Y.texture,P.uniforms.h.value=e/256,w.setRenderTarget(_),w.render(k,S.current),k.material=L,L.uniforms.tDiffuse.value=_.texture,L.uniforms.v.value=e/256,w.setRenderTarget(Y),w.render(k,S.current),k.visible=!1},F=0;return(0,i.D)(()=>{S.current&&(t===1/0||F<t)&&(F++,U=C.background,b=C.overrideMaterial,E.current.visible=!1,C.background=null,C.overrideMaterial=R,w.setRenderTarget(Y),w.render(C,S.current),T(c),g&&T(.4*c),w.setRenderTarget(null),E.current.visible=!0,C.overrideMaterial=b,C.background=U)}),a.useImperativeHandle(y,()=>E.current,[]),a.createElement("group",(0,n.A)({"rotation-x":Math.PI/2},D,{ref:E}),a.createElement("mesh",{renderOrder:x,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{transparent:!0,map:Y.texture,opacity:r,depthWrite:h})),a.createElement("orthographicCamera",{ref:S,args:[-l/2,l/2,v/2,-v/2,f,m]}))})}}]);
//# sourceMappingURL=8924.b4cd8589b43613f6.js.map