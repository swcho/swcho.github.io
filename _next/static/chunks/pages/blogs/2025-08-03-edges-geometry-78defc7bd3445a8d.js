(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1704],{1568:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(18153),i=n(14232);let o=i.forwardRef(e=>{let{children:t,...n}=e,o=i.useRef(null),[s,c]=i.useState();return i.useEffect(()=>{c(o.current)},[]),(0,r.Y)("div",{ref:o,css:{border:"1px solid",borderRadius:"4px",width:"100%",height:"300px",marginBottom:"1rem"},...n,children:s&&t(s)})}),s=i.memo(o)},51802:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2025-08-03-edges-geometry",function(){return n(60050)}])},60050:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I,meta:()=>Y});var r=n(37876),i=n(91668),o=n(91013),s=n(18153),c=n(1568),a=n(35577),l=n(84618),d=n(49082),u=n(45302),m=n(14232);let p="/_next/static/chunks/day58_aluminium_bracket-transformed.1af4057effcd33a6dc8c88922c041541.glb";function h(){let{nodes:e}=(0,a.p)(p),t=e.defaultMaterial;return(0,s.Y)("mesh",{geometry:t.geometry,material:t.material})}let f=m.memo(function(e){let{}=e;return(0,s.Y)(c.A,{children:()=>(0,s.FD)(u.Hl,{children:[(0,s.Y)("ambientLight",{intensity:.5}),(0,s.Y)("pointLight",{position:[10,10,10]}),(0,s.Y)(l.OH,{preset:"sunset"}),(0,s.Y)(h,{}),(0,s.Y)(d.N,{})]})})});var g=n(44501),x=n(14796),y=n(39745);let _=m.forwardRef(({threshold:e=15,geometry:t,...n},r)=>{let i=m.useRef(null);m.useImperativeHandle(r,()=>i.current,[]);let o=m.useMemo(()=>[0,0,0,1,0,0],[]),s=m.useRef(null),c=m.useRef(null);return m.useLayoutEffect(()=>{let n=i.current.parent,r=null!=t?t:null==n?void 0:n.geometry;if(!r||s.current===r&&c.current===e)return;s.current=r,c.current=e;let o=new x.EdgesGeometry(r,e).attributes.position.array;i.current.geometry.setPositions(o),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),m.createElement(y.N,(0,g.A)({segments:!0,points:o,ref:i,raycast:()=>null},n))});var v=n(31648),b=n(71804),k=n(99483),w=n(1895);let j=(0,v.b)({screenspace:!1,color:new x.Color("black"),opacity:1,thickness:.05,size:new x.Vector2},`#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   #include <clipping_planes_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
	     #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
	   #include <morphtarget_vertex>
	   #include <skinning_vertex>
     #include <project_vertex>
     #include <clipping_planes_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,`uniform vec3 color;
   uniform float opacity;
   #include <clipping_planes_pars_fragment>
   void main(){
     #include <clipping_planes_fragment>
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${w.r>=154?"colorspace_fragment":"encodings_fragment"}>
   }`);function M({color:e="black",opacity:t=1,transparent:n=!1,screenspace:r=!1,toneMapped:i=!0,polygonOffset:o=!1,polygonOffsetFactor:s=0,renderOrder:c=0,thickness:a=.05,angle:l=Math.PI,clippingPlanes:d,...u}){let p=m.useRef(null),[h]=m.useState(()=>new j({side:x.BackSide})),{gl:f}=(0,b.C)(),y=f.getDrawingBufferSize(new x.Vector2);m.useMemo(()=>(0,b.e)({OutlinesMaterial:j}),[]);let _=m.useRef(0),v=m.useRef(null);return m.useLayoutEffect(()=>{let e=p.current;if(!e)return;let t=e.parent;if(t&&t.geometry&&(_.current!==l||v.current!==t.geometry)){var n;_.current=l,v.current=t.geometry;let r=null==(n=e.children)?void 0:n[0];r&&(l&&r.geometry.dispose(),e.remove(r)),t.skeleton?((r=new x.SkinnedMesh).material=h,r.bind(t.skeleton,t.bindMatrix)):t.isInstancedMesh?(r=new x.InstancedMesh(t.geometry,h,t.count)).instanceMatrix=t.instanceMatrix:(r=new x.Mesh).material=h,e.add(r),r.geometry=l?(0,k.pb)(t.geometry,l):t.geometry,r.morphTargetInfluences=t.morphTargetInfluences,r.morphTargetDictionary=t.morphTargetDictionary}}),m.useLayoutEffect(()=>{let l=p.current;if(!l)return;let u=l.children[0];if(u){u.renderOrder=c;let m=l.parent;(0,b.s)(u,{morphTargetInfluences:m.morphTargetInfluences,morphTargetDictionary:m.morphTargetDictionary}),(0,b.s)(u.material,{transparent:n,thickness:a,color:e,opacity:t,size:y,screenspace:r,toneMapped:i,polygonOffset:o,polygonOffsetFactor:s,clippingPlanes:d,clipping:d&&d.length>0})}}),m.useEffect(()=>()=>{let e=p.current;if(!e)return;let t=e.children[0];t&&(l&&t.geometry.dispose(),e.remove(t))},[]),m.createElement("group",(0,g.A)({ref:p},u))}var P=n(87174);function E(e){let{nodes:t}=(0,a.p)(p),n=t.defaultMaterial,[r,i]=m.useState(!1);return(0,s.FD)("mesh",{geometry:n.geometry,castShadow:!0,receiveShadow:!0,onPointerOver:()=>i(!0),onPointerOut:()=>i(!1),...e,children:[(0,s.Y)("meshStandardMaterial",{roughness:.15,metalness:.5}),(0,s.Y)(_,{linewidth:2,threshold:15,color:r?"#c02040":"black"}),(0,s.Y)(M,{thickness:.01,color:r?"#c02040":"black"})]})}let N=m.memo(function(e){let{}=e;return(0,s.Y)(c.A,{children:()=>(0,s.FD)(u.Hl,{shadows:!0,camera:{position:[-5,2.5,5],fov:35},children:[(0,s.Y)("ambientLight",{intensity:Math.PI/8}),(0,s.Y)("spotLight",{intensity:Math.PI,decay:0,angle:.2,castShadow:!0,position:[5,2.5,5],"shadow-mapSize":128}),(0,s.Y)(E,{position:[0,.19,0],rotation:[0,0,-Math.PI/4.45]}),(0,s.Y)(P.jK,{frames:100,temporal:!0,children:(0,s.Y)(P.kh,{radius:2,position:[5,2.5,5]})}),(0,s.Y)(d.N,{makeDefault:!0,dampingFactor:.3}),(0,s.Y)(l.OH,{preset:"sunset"})]})})}),Y={title:"R3F: Edges and Geometry",description:"3D 공간에서의 Edge 컴포넌트를 사용하여 기하학적 형태를 이해하고 활용하는 방법을 알아봅니다.",date:"2025-08-03",readTime:5},S=e=>{let{children:t}=e;return(0,r.jsx)(o.A,{meta:Y,children:t})};function D(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"소개"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/iup24",children:"R3F: Edges and Geometry"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["drei의 ",(0,r.jsx)(t.code,{children:"<Edges />"})," 컴포넌트를 사용하여 모델의 엣지를 강조할 수 있습니다."]}),"\n",(0,r.jsx)(t.h1,{children:"GLTF 모델 가져오기"}),"\n",(0,r.jsx)(f,{}),"\n",(0,r.jsx)(t.p,{children:"원본 GLTF 모델은 다음에서 참조할 수 있습니다."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["원본: ",(0,r.jsx)(t.a,{href:"https://sketchfab.com/3d-models/day58-aluminium-bracket-496d1c0efbbe4dc38df6f09d4b72c0bc",children:"Day#58: Aluminium bracket - Download Free 3D model by JuanG3D (@juang3d) [496d1c0]"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"단순히 GLTF의 geometry와 material을 적용하면 검은색 알루미늄 브라켓을 확인할 수 있습니다."}),"\n",(0,r.jsx)(t.h1,{children:"엣지 강조"}),"\n",(0,r.jsx)(N,{}),"\n",(0,r.jsx)(t.p,{children:"Canvas의 그림자 props를 활성화 하고 물체에도 그림자를 추가합니다."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Edges />"}),", ",(0,r.jsx)(t.code,{children:"<Outlines />"})," 컴포넌트를 사용하여 엣지를 강조합니다."]}),"\n",(0,r.jsx)(t.p,{children:"예제와 같이 hover 시에 선택 강조에 사용하면 좋습니다."})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,{...e,children:(0,r.jsx)(D,{...e})})}}},e=>{e.O(0,[7391,683,5695,5302,2077,3665,1611,9745,1534,636,6593,8792],()=>e(e.s=51802)),_N_E=e.O()}]);
//# sourceMappingURL=2025-08-03-edges-geometry-78defc7bd3445a8d.js.map