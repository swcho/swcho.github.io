(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{59852:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/2024-08-03-react-three-fiber-5-viewport",function(){return o(25929)}])},25929:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T},meta:function(){return H}});var n=o(85893),i=o(11151),r=o(57598),l=o(35944),a=o(99477),c=o(40705),s=o(30398),f=o(7433),d=o(82473),m=o(87462),u=o(67294);let h=function(e,t){let o=e+"Geometry";return u.forwardRef(({args:e,children:n,...i},r)=>{let l=u.useRef(null);return u.useImperativeHandle(r,()=>l.current),u.useLayoutEffect(()=>void(null==t||t(l.current))),u.createElement("mesh",(0,m.Z)({ref:l},i),u.createElement(o,{attach:"geometry",args:e}),n)})}("cylinder");var w=o(48407),g=o(99137),p=o(15845);let v=(0,g.g)({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new a.Color,sectionColor:new a.Color,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new a.Vector3,worldPlanePosition:new a.Vector3},`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${p.i>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),Z=u.forwardRef(({args:e,cellColor:t="#000000",sectionColor:o="#2080ff",cellSize:n=.5,sectionSize:i=1,followCamera:r=!1,infiniteGrid:l=!1,fadeDistance:c=100,fadeStrength:s=1,fadeFrom:f=1,cellThickness:d=.5,sectionThickness:h=1,side:g=a.BackSide,...p},Z)=>{(0,w.e)({GridMaterial:v});let x=u.useRef(null);u.useImperativeHandle(Z,()=>x.current,[]);let P=new a.Plane,y=new a.Vector3(0,1,0),C=new a.Vector3(0,0,0);return(0,w.C)(e=>{P.setFromNormalAndCoplanarPoint(y,C).applyMatrix4(x.current.matrixWorld);let t=x.current.material,o=t.uniforms.worldCamProjPosition,n=t.uniforms.worldPlanePosition;P.projectPoint(e.camera.position,o.value),n.value.set(0,0,0).applyMatrix4(x.current.matrixWorld)}),u.createElement("mesh",(0,m.Z)({ref:x,frustumCulled:!1},p),u.createElement("gridMaterial",(0,m.Z)({transparent:!0,"extensions-derivatives":!0,side:g},{cellSize:n,sectionSize:i,cellColor:t,sectionColor:o,cellThickness:d,sectionThickness:h},{fadeDistance:c,fadeStrength:s,fadeFrom:f,infiniteGrid:l,followCamera:r})),u.createElement("planeGeometry",{args:e}))});var x=o(15029);function P(){return(0,l.BX)(l.HY,{children:[(0,l.tZ)("ambientLight",{intensity:1}),(0,l.tZ)("pointLight",{position:[20,30,10]}),(0,l.tZ)("pointLight",{position:[-10,-10,-10],color:"blue"})]})}function y(){let{scene:e,camera:t}=(0,w.A)();return u.useEffect(()=>{let{id:o,children:n}=e;for(let i of(console.log("".concat(o," camera[").concat(t.id,"]: ").concat(t.name)),n)){let{id:t,name:o,type:n}=i;console.log("  - [".concat(t,"]: ").concat(n,"(").concat(o,")")),"main"==o&&i instanceof a.Camera&&e.add(new a.CameraHelper(i))}},[]),(0,l.tZ)(l.HY,{})}function C(e){let{children:t}=e,o=u.useRef(null);return(0,l.BX)("div",{ref:o,style:{position:"relative"},children:[(0,l.BX)("div",{style:{display:"flex",position:"absolute",width:"100%",height:"100%"},children:[(0,l.BX)(c.G,{index:1,className:"view-1",style:{flexGrow:1},children:[t,(0,l.tZ)(y,{}),(0,l.tZ)(s.z,{})]}),(0,l.BX)(c.G,{index:2,className:"view-1",style:{flexGrow:1},children:[t,(0,l.tZ)(y,{}),(0,l.tZ)(f.c,{name:"secondary",makeDefault:!0,position:[5,5,8],fov:35}),(0,l.tZ)(s.z,{})]})]}),(0,l.tZ)(x.Xz,{eventSource:o,className:"canvas",children:(0,l.tZ)(c.G.Port,{})})]})}var j=u.memo(function(e){let{}=e;return(0,l.BX)(C,{children:[(0,l.tZ)(P,{}),(0,l.tZ)(f.c,{name:"main",makeDefault:!0,position:[0,0,5],fov:35}),(0,l.tZ)(d.x,{name:"hello",color:"yellow",children:"Hello"}),(0,l.tZ)("color",{attach:"background",args:["#000000"]}),(0,l.BX)("mesh",{children:[(0,l.tZ)("boxGeometry",{args:[2,2,1]}),(0,l.tZ)("meshBasicMaterial",{wireframe:!0})]}),(0,l.tZ)(h,{children:(0,l.tZ)("meshBasicMaterial",{wireframe:!0})}),(0,l.tZ)(d.x,{name:"hello",color:"yellow",children:"Hello"}),(0,l.tZ)(Z,{args:[10,10],cellColor:"white"})]})});function b(){return(0,l.BX)(l.HY,{children:[(0,l.tZ)("ambientLight",{intensity:1}),(0,l.tZ)("pointLight",{position:[20,30,10]}),(0,l.tZ)("pointLight",{position:[-10,-10,-10],color:"blue"})]})}function B(){let{scene:e,camera:t}=(0,w.A)();return u.useEffect(()=>{let{id:o,children:n}=e;for(let i of(console.log("".concat(o," camera[").concat(t.id,"]: ").concat(t.name)),n)){let{id:t,name:o,type:n}=i;console.log("  - [".concat(t,"]: ").concat(n,"(").concat(o,")")),"main"==o&&i instanceof a.Camera&&e.add(new a.CameraHelper(i))}},[]),(0,l.tZ)(l.HY,{})}function k(e){let{children:t}=e,o=u.useRef(null);return(0,l.BX)("div",{ref:o,style:{position:"relative"},children:[(0,l.BX)("div",{style:{display:"flex",position:"absolute",width:"100%",height:"100%"},children:[(0,l.BX)(c.G,{index:1,className:"view-1",style:{flexGrow:1},children:[t,(0,l.tZ)(B,{})]}),(0,l.BX)(c.G,{index:2,className:"view-1",style:{flexGrow:1},children:[t,(0,l.tZ)(B,{}),(0,l.tZ)(f.c,{name:"secondary",makeDefault:!0,position:[5,5,8],fov:35}),(0,l.tZ)(s.z,{})]})]}),(0,l.tZ)(x.Xz,{eventSource:o,className:"canvas",children:(0,l.tZ)(c.G.Port,{})})]})}var G=u.memo(function(e){let{}=e;return(0,l.BX)(k,{children:[(0,l.tZ)(b,{}),(0,l.tZ)(f.c,{name:"main",makeDefault:!0,position:[3,0,5],fov:35}),(0,l.tZ)(d.x,{name:"hello",color:"yellow",children:"Hello"}),(0,l.tZ)("color",{attach:"background",args:["#000000"]}),(0,l.BX)("mesh",{children:[(0,l.tZ)("boxGeometry",{args:[2,2,1]}),(0,l.tZ)("meshBasicMaterial",{wireframe:!0})]}),(0,l.tZ)(h,{children:(0,l.tZ)("meshBasicMaterial",{wireframe:!0})}),(0,l.tZ)(d.x,{name:"hello",color:"yellow",children:"Hello"}),(0,l.tZ)(Z,{args:[10,10],cellColor:"white"})]})});function X(){let{scene:e,camera:t}=(0,w.A)();return u.useEffect(()=>{let{id:o,children:n}=e;for(let i of(console.log("".concat(o," camera[").concat(t.id,"]: ").concat(t.name||"(no name)")),n)){let{id:t,name:o}=i;if(console.log("  - obj[".concat(t,"]: ").concat(o)),i instanceof a.Camera){let{type:t,visible:n}=i;console.log("    - ".concat(t," ").concat(n)),"main"==o&&e.add(new a.CameraHelper(i))}}},[]),(0,l.tZ)(l.HY,{})}function z(e){let{children:t}=e,o=u.useRef(null);return(0,l.BX)("div",{ref:o,style:{position:"relative"},children:[(0,l.BX)("div",{style:{display:"flex",position:"absolute",width:"100%",height:"100%"},children:[(0,l.BX)(c.G,{className:"view-1",style:{flexGrow:1},children:[(0,l.tZ)("color",{attach:"background",args:["#000000"]}),t,(0,l.tZ)(X,{}),(0,l.tZ)(s.z,{})]}),(0,l.BX)(c.G,{className:"view-1",style:{flexGrow:1},children:[(0,l.tZ)("color",{attach:"background",args:["#000000"]}),t,(0,l.tZ)(X,{}),(0,l.tZ)(f.c,{name:"secondary",makeDefault:!0,position:[5,5,8],fov:35}),(0,l.tZ)(s.z,{})]})]}),(0,l.tZ)(x.Xz,{eventSource:o,className:"canvas",children:(0,l.tZ)(c.G.Port,{})})]})}let _=new a.PerspectiveCamera(53,2,.1,5);function N(){let{scene:e,set:t}=(0,w.A)();return u.useLayoutEffect(()=>{e.add(_),t({camera:_})},[]),(0,l.tZ)(l.HY,{})}_.name="main",_.position.set(0,0,3),_.setViewOffset(100,100,20,0,100,100);var E=u.memo(function(e){let{}=e;return(0,l.BX)(z,{children:[(0,l.tZ)(N,{}),(0,l.BX)("mesh",{children:[(0,l.tZ)("boxGeometry",{args:[2,2,1]}),(0,l.tZ)("meshBasicMaterial",{wireframe:!0})]}),(0,l.tZ)(h,{children:(0,l.tZ)("meshBasicMaterial",{wireframe:!0})}),(0,l.tZ)(Z,{args:[10,10],cellColor:"white"})]})});let H={title:"react-three-fiber: viewport 설정",description:"일반적으로 정 중앙에 위치한 카메라의 중심점을 viewport를 사용해서 원하는 위치로 움직여 봅니다.",date:"2024-08-03",readTime:5},S=e=>{let{children:t}=e;return(0,n.jsx)(r.Z,{meta:H,children:t})};function M(e){let t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",blockquote:"blockquote",a:"a"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"문제"}),"\n",(0,n.jsx)(t.p,{children:"Three JS에서는 camera 위치에 따라 최종 화면이 결정 됩니다."}),"\n",(0,n.jsx)(j,{}),"\n",(0,n.jsx)("p",{}),"\n",(0,n.jsx)(t.p,{children:"위 화면은 카메라의 위치를 (0, 0, 5)로 설정한 것 입니다.\n대상 물체의 위치는 모두 (0, 0, 0)으로 설정하였습니다.\n따라서, perspective camera 설정에 따라 대상 물체를 정면에서 바라보는 모습을 확인할 수 있습니다."}),"\n",(0,n.jsx)(G,{}),"\n",(0,n.jsx)("p",{}),"\n",(0,n.jsx)(t.p,{children:"대상 물체를 조금더 왼쪽에 위치하게 하기 위해서 카메라를 오른쪽으로 움직여 봤습니다.\n이 경우 perspective 속성에 의해 물체의 정면이 아닌 옆면이 보입니다.\n물체의 정면을 유지하면서 왼쪽으로 이동하려하면 카메라 이동보다는 다른 방법을 고민해야 합니다."}),"\n",(0,n.jsxs)(t.h1,{children:["해결: ",(0,n.jsx)(t.code,{children:"setViewOffset"})]}),"\n",(0,n.jsx)(E,{}),"\n",(0,n.jsx)("p",{}),"\n",(0,n.jsx)(t.p,{children:"Perspective 카메라의 viewport를 조정하면 원하는 결과를 얻을 수 있습니다."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"camera.setViewOffset(100, 100, 20, 0, 100, 100);\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["참조: ",(0,n.jsx)(t.a,{href:"https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera.setViewOffset",children:"setViewOffset"})]}),"\n"]})]})}var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(S,Object.assign({},e,{children:(0,n.jsx)(M,e)}))}}},function(e){e.O(0,[3737,447,3996,5029,398,9783,8737,7427,9774,2888,179],function(){return e(e.s=59852)}),_N_E=e.O()}]);
//# sourceMappingURL=2024-08-03-react-three-fiber-5-viewport-01710db2a71e9948.js.map