(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2940],{80033:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2025-08-03-edges-geometry",function(){return n(26833)}])},52745:function(e,t,n){"use strict";var r=n(35944),i=n(67294);let o=i.forwardRef(e=>{let{children:t,...n}=e,o=i.useRef(null),[s,c]=i.useState();return i.useEffect(()=>{c(o.current)},[]),(0,r.tZ)("div",{ref:o,css:{border:"1px solid",borderRadius:"4px",width:"100%",height:"300px",marginBottom:"1rem"},...n,children:s&&t(s)})});t.Z=i.memo(o)},26833:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z},meta:function(){return N}});var r=n(85893),i=n(11151),o=n(5371),s=n(35944),c=n(52745),a=n(81927),l=n(73286),d=n(60214),u=n(15029),m=n(67294),f="/_next/static/chunks/day58_aluminium_bracket-transformed.1af4057effcd33a6dc8c88922c041541.glb";function h(){let{nodes:e}=(0,a.L)(f),t=e.defaultMaterial;return(0,s.tZ)("mesh",{geometry:t.geometry,material:t.material})}var p=m.memo(function(e){let{}=e;return(0,s.tZ)(c.Z,{children:()=>(0,s.BX)(u.Xz,{children:[(0,s.tZ)("ambientLight",{intensity:.5}),(0,s.tZ)("pointLight",{position:[10,10,10]}),(0,s.tZ)(l.qA,{preset:"sunset"}),(0,s.tZ)(h,{}),(0,s.tZ)(d.z,{})]})})}),g=n(87462),x=n(99477),v=n(67843);let y=m.forwardRef(({threshold:e=15,...t},n)=>{let r=m.useRef(null);m.useImperativeHandle(n,()=>r.current,[]);let i=m.useMemo(()=>[0,0,0,1,0,0],[]),o=m.useRef(),s=m.useRef();return m.useLayoutEffect(()=>{let t=r.current.parent;if(t){let n=t.geometry;if(n!==o.current||e!==s.current){o.current=n,s.current=e;let t=new x.EdgesGeometry(n,e).attributes.position.array;r.current.geometry.setPositions(t),r.current.geometry.attributes.instanceStart.needsUpdate=!0,r.current.geometry.attributes.instanceEnd.needsUpdate=!0,r.current.computeLineDistances()}}}),m.createElement(v.x,(0,g.Z)({segments:!0,points:i,ref:r,raycast:()=>null},t))});var b=n(99137),_=n(19390),j=n(3666),k=n(15845);let w=(0,b.g)({screenspace:!1,color:new x.Color("black"),opacity:1,thickness:.05,size:new x.Vector2},`#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   uniform float screenspace;
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
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace == 0.0) {
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
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${k.i>=154?"colorspace_fragment":"encodings_fragment"}>
   }`);function Z({color:e="black",opacity:t=1,transparent:n=!1,screenspace:r=!1,toneMapped:i=!0,polygonOffset:o=!1,polygonOffsetFactor:s=0,renderOrder:c=0,thickness:a=.05,angle:l=Math.PI,...d}){let u=m.useRef(),[f]=m.useState(()=>new w({side:x.BackSide})),{gl:h}=(0,_.A)(),p=h.getDrawingBufferSize(new x.Vector2);m.useMemo(()=>(0,_.e)({OutlinesMaterial:w}),[]);let v=m.useRef(0),y=m.useRef();return m.useLayoutEffect(()=>{let e=u.current;if(!e)return;let t=e.parent;if(t&&t.geometry&&(v.current!==l||y.current!==t.geometry)){var n;v.current=l,y.current=t.geometry;let r=null==(n=e.children)?void 0:n[0];r&&(l&&r.geometry.dispose(),e.remove(r)),t.skeleton?((r=new x.SkinnedMesh).material=f,r.bind(t.skeleton,t.bindMatrix)):t.isInstancedMesh?(r=new x.InstancedMesh(t.geometry,f,t.count)).instanceMatrix=t.instanceMatrix:(r=new x.Mesh).material=f,e.add(r),r.geometry=l?(0,j.LZ)(t.geometry,l):t.geometry}}),m.useLayoutEffect(()=>{let l=u.current;if(!l)return;let d=l.children[0];d&&(d.renderOrder=c,(0,_.j)(d.material,{transparent:n,thickness:a,color:e,opacity:t,size:p,screenspace:r,toneMapped:i,polygonOffset:o,polygonOffsetFactor:s}))}),m.useEffect(()=>()=>{let e=u.current;if(!e)return;let t=e.children[0];t&&(l&&t.geometry.dispose(),e.remove(t))},[]),m.createElement("group",(0,g.Z)({ref:u},d))}var M=n(43721);function P(e){let{nodes:t}=(0,a.L)(f),n=t.defaultMaterial,[r,i]=m.useState(!1);return(0,s.BX)("mesh",{geometry:n.geometry,castShadow:!0,receiveShadow:!0,onPointerOver:()=>i(!0),onPointerOut:()=>i(!1),...e,children:[(0,s.tZ)("meshStandardMaterial",{roughness:.15,metalness:.5}),(0,s.tZ)(y,{linewidth:2,threshold:15,color:r?"#c02040":"black"}),(0,s.tZ)(Z,{thickness:.01,color:r?"#c02040":"black"})]})}var E=m.memo(function(e){let{}=e;return(0,s.tZ)(c.Z,{children:()=>(0,s.BX)(u.Xz,{shadows:!0,camera:{position:[-5,2.5,5],fov:35},children:[(0,s.tZ)("ambientLight",{intensity:Math.PI/8}),(0,s.tZ)("spotLight",{intensity:Math.PI,decay:0,angle:.2,castShadow:!0,position:[5,2.5,5],"shadow-mapSize":128}),(0,s.tZ)(P,{position:[0,.19,0],rotation:[0,0,-Math.PI/4.45]}),(0,s.tZ)(M.iA,{frames:100,temporal:!0,children:(0,s.tZ)(M.mI,{radius:2,position:[5,2.5,5]})}),(0,s.tZ)(d.z,{makeDefault:!0,dampingFactor:.3}),(0,s.tZ)(l.qA,{preset:"sunset"})]})})});let N={title:"R3F: Edges and Geometry",description:"3D 공간에서의 Edge 컴포넌트를 사용하여 기하학적 형태를 이해하고 활용하는 방법을 알아봅니다.",date:"2025-08-03",readTime:5},S=e=>{let{children:t}=e;return(0,r.jsx)(o.Z,{meta:N,children:t})};function L(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"소개"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/iup24",children:"R3F: Edges and Geometry"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["drei의 ",(0,r.jsx)(t.code,{children:"<Edges />"})," 컴포넌트를 사용하여 모델의 엣지를 강조할 수 있습니다."]}),"\n",(0,r.jsx)(t.h1,{children:"GLTF 모델 가져오기"}),"\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t.p,{children:"원본 GLTF 모델은 다음에서 참조할 수 있습니다."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["원본: ",(0,r.jsx)(t.a,{href:"https://sketchfab.com/3d-models/day58-aluminium-bracket-496d1c0efbbe4dc38df6f09d4b72c0bc",children:"Day#58: Aluminium bracket - Download Free 3D model by JuanG3D (@juang3d) [496d1c0]"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"단순히 GLTF의 geometry와 material을 적용하면 검은색 알루미늄 브라켓을 확인할 수 있습니다."}),"\n",(0,r.jsx)(t.h1,{children:"엣지 강조"}),"\n",(0,r.jsx)(E,{}),"\n",(0,r.jsx)(t.p,{children:"Canvas의 그림자 props를 활성화 하고 물체에도 그림자를 추가합니다."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Edges />"}),", ",(0,r.jsx)(t.code,{children:"<Outlines />"})," 컴포넌트를 사용하여 엣지를 강조합니다."]}),"\n",(0,r.jsx)(t.p,{children:"예제와 같이 hover 시에 선택 강조에 사용하면 좋습니다."})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,Object.assign({},e,{children:(0,r.jsx)(L,e)}))}}},function(e){e.O(0,[3737,3996,5029,7554,9360,7874,7843,7872,9774,2888,179],function(){return e(e.s=80033)}),_N_E=e.O()}]);
//# sourceMappingURL=2025-08-03-edges-geometry-fabf3b711cd60e23.js.map