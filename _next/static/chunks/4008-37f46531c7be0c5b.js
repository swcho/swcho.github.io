"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4008],{90319:function(e,t,r){r.d(t,{R:function(){return a}});var n=r(67294),i=r(99477),o=r(19390);function a(e,t,r){let a=(0,o.A)(e=>e.size),s=(0,o.A)(e=>e.viewport),l="number"==typeof e?e:a.width*s.dpr,c="number"==typeof t?t:a.height*s.dpr,u=("number"==typeof e?r:e)||{},{samples:d=0,depth:f,...p}=u,m=n.useMemo(()=>{let e=new i.WebGLRenderTarget(l,c,{minFilter:i.LinearFilter,magFilter:i.LinearFilter,type:i.HalfFloatType,...p});return f&&(e.depthTexture=new i.DepthTexture(l,c,i.FloatType)),e.samples=d,e},[]);return n.useLayoutEffect(()=>{m.setSize(l,c),d&&(m.samples=d)},[d,m,l,c]),n.useEffect(()=>()=>m.dispose(),[]),m}},40705:function(e,t,r){r.d(t,{G:function(){return x}});var n=r(87462),i=r(67294),o=r(99477),a=r(19390),s=r(85470);let l=e=>e&&e.isOrthographicCamera,c=new o.Color,u=(0,s.Z)();function d(e,t){let{right:r,top:n,left:i,bottom:o,width:a,height:s}=t,l=t.bottom<0||n>e.height||r<0||t.left>e.width;if("top"in e){let t=e.top+e.height,c=i-e.left;return{position:{width:a,height:s,left:c,top:n,bottom:t-o,right:r},isOffscreen:l}}let c=e.height-o;return{position:{width:a,height:s,top:n,left:i,bottom:c,right:r},isOffscreen:l}}function f(e,{left:t,bottom:r,width:n,height:i}){let o;let a=n/i;return l(e.camera)?(e.camera.left!==-(n/2)||e.camera.right!==n/2||e.camera.top!==i/2||e.camera.bottom!==-(i/2))&&(Object.assign(e.camera,{left:-(n/2),right:n/2,top:i/2,bottom:-(i/2)}),e.camera.updateProjectionMatrix()):e.camera.aspect!==a&&(e.camera.aspect=a,e.camera.updateProjectionMatrix()),o=e.gl.autoClear,e.gl.autoClear=!1,e.gl.setViewport(t,r,n,i),e.gl.setScissor(t,r,n,i),e.gl.setScissorTest(!0),o}function p(e,t){e.gl.setScissorTest(!1),e.gl.autoClear=t}function m(e){e.gl.getClearColor(c),e.gl.setClearColor(c,e.gl.getClearAlpha()),e.gl.clear(!0,!0)}function h({visible:e=!0,canvasSize:t,scene:r,index:n,children:o,frames:s,rect:l,track:c}){let u=(0,a.A)(),[h,y]=i.useState(!1),v=0;return(0,a.C)(n=>{if(s===1/0||v<=s){var i;c&&(l.current=null==(i=c.current)?void 0:i.getBoundingClientRect()),v++}if(l.current){let{position:i,isOffscreen:a}=d(t,l.current);if(h!==a&&y(a),e&&!h&&l.current){let e=f(n,i);n.gl.render(o?n.scene:r,n.camera),p(n,e)}}},n),i.useLayoutEffect(()=>{let r=l.current;if(r&&(!e||!h)){let{position:e}=d(t,r),n=f(u,e);m(u),p(u,n)}},[e,h]),i.useEffect(()=>{if(!c)return;let e=l.current,r=u.get().events.connected;return u.setEvents({connected:c.current}),()=>{if(e){let{position:r}=d(t,e),n=f(u,r);m(u),p(u,n)}u.setEvents({connected:r})}},[c]),i.useEffect(()=>{"top"in t||console.warn("Detected @react-three/fiber canvas size does not include position information. <View /> may not work as expected. Upgrade to @react-three/fiber ^8.1.0 for support.\n See https://github.com/pmndrs/drei/issues/944")},[]),i.createElement(i.Fragment,null,o,i.createElement("group",{onPointerOver:()=>null}))}let y=i.forwardRef(({track:e,visible:t=!0,index:r=1,id:s,style:l,className:c,frames:u=1/0,children:d,...f},p)=>{var m,y,v,x;let g=i.useRef(null),{size:w,scene:b}=(0,a.A)(),[S]=i.useState(()=>new o.Scene),[E,M]=i.useReducer(()=>!0,!1),P=i.useCallback((t,r)=>{if(g.current&&e&&e.current&&t.target===e.current){let{width:e,height:n,left:i,top:o}=g.current,a=t.clientX-i,s=t.clientY-o;r.pointer.set(a/e*2-1,-(2*(s/n))+1),r.raycaster.setFromCamera(r.pointer,r.camera)}},[g,e]);return i.useEffect(()=>{var t;e&&(g.current=null==(t=e.current)?void 0:t.getBoundingClientRect()),M()},[e]),i.createElement("group",(0,n.Z)({ref:p},f),E&&(0,a.g)(i.createElement(h,{visible:t,canvasSize:w,frames:u,scene:b,track:e,rect:g,index:r},d),S,{events:{compute:P,priority:r},size:{width:null==(m=g.current)?void 0:m.width,height:null==(y=g.current)?void 0:y.height,top:null==(v=g.current)?void 0:v.top,left:null==(x=g.current)?void 0:x.left}}))}),v=i.forwardRef(({as:e="div",id:t,visible:r,className:o,style:a,index:s=1,track:l,frames:c=1/0,children:d,...f},p)=>{let m=i.useId(),h=i.useRef(null);return i.useImperativeHandle(p,()=>h.current),i.createElement(i.Fragment,null,i.createElement(e,(0,n.Z)({ref:h,id:t,className:o,style:a},f)),i.createElement(u.In,null,i.createElement(y,{visible:r,key:m,track:h,frames:c,index:s},d)))}),x=i.forwardRef((e,t)=>{let r=i.useContext(a.f);return r?i.createElement(y,(0,n.Z)({ref:t},e)):i.createElement(v,(0,n.Z)({ref:t},e))});x.Port=()=>i.createElement(u.Out,null)},18253:function(e,t,r){let n,i,o,a;r.d(t,{J:function(){return eZ}});var s,l,c=r(87462),u=r(19390),d=r(67294),f=r(99477);let p=new f.Box3,m=new f.Vector3;class h extends f.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new f.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new f.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new f.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new f.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new f.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new f.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new f.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new f.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new f.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new f.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),p.setFromBufferAttribute(t),this.boundingBox.union(p))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new f.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)m.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(m)),m.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(m));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class y extends f.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:f.UniformsUtils.clone(f.UniformsUtils.merge([f.UniformsLib.common,f.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new f.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${parseInt(f.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let v=new f.Vector3,x=new f.Vector3,g=new f.Vector4,w=new f.Vector4,b=new f.Vector4,S=new f.Vector3,E=new f.Matrix4,M=new f.Line3,P=new f.Vector3,C=new f.Box3,A=new f.Sphere,z=new f.Vector4;function R(e,t,r){return z.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),z.multiplyScalar(1/z.w),z.x=a/r.width,z.y=a/r.height,z.applyMatrix4(e.projectionMatrixInverse),z.multiplyScalar(1/z.w),Math.abs(Math.max(z.x,z.y))}class _ extends f.Mesh{constructor(e=new h,t=new y({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)v.fromBufferAttribute(t,e),x.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+v.distanceTo(x);let i=new f.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new f.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new f.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let r,s;let l=this.material.worldUnits,c=e.camera;null!==c||l||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let d=this.matrixWorld,p=this.geometry,m=this.material;if(a=m.linewidth+u,i=p.attributes.instanceStart,o=p.attributes.instanceEnd,null===p.boundingSphere&&p.computeBoundingSphere(),A.copy(p.boundingSphere).applyMatrix4(d),l)r=.5*a;else{let e=Math.max(c.near,A.distanceToPoint(n.origin));r=R(c,e,m.resolution)}if(A.radius+=r,!1!==n.intersectsSphere(A)){if(null===p.boundingBox&&p.computeBoundingBox(),C.copy(p.boundingBox).applyMatrix4(d),l)s=.5*a;else{let e=Math.max(c.near,C.distanceToPoint(n.origin));s=R(c,e,m.resolution)}C.expandByScalar(s),!1!==n.intersectsBox(C)&&(l?function(e,t){for(let r=0,s=i.count;r<s;r++){M.start.fromBufferAttribute(i,r),M.end.fromBufferAttribute(o,r);let s=new f.Vector3,l=new f.Vector3;n.distanceSqToSegment(M.start,M.end,l,s);let c=l.distanceTo(s)<.5*a;c&&t.push({point:l,pointOnLine:s,distance:n.origin.distanceTo(l),object:e,face:null,faceIndex:r,uv:null,uv2:null})}}(this,t):function(e,t,r){let i=t.projectionMatrix,o=e.material,s=o.resolution,l=e.matrixWorld,c=e.geometry,u=c.attributes.instanceStart,d=c.attributes.instanceEnd,p=-t.near;n.at(1,b),b.w=1,b.applyMatrix4(t.matrixWorldInverse),b.applyMatrix4(i),b.multiplyScalar(1/b.w),b.x*=s.x/2,b.y*=s.y/2,b.z=0,S.copy(b),E.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0,o=u.count;t<o;t++){g.fromBufferAttribute(u,t),w.fromBufferAttribute(d,t),g.w=1,w.w=1,g.applyMatrix4(E),w.applyMatrix4(E);let o=g.z>p&&w.z>p;if(o)continue;if(g.z>p){let e=g.z-w.z,t=(g.z-p)/e;g.lerp(w,t)}else if(w.z>p){let e=w.z-g.z,t=(w.z-p)/e;w.lerp(g,t)}g.applyMatrix4(i),w.applyMatrix4(i),g.multiplyScalar(1/g.w),w.multiplyScalar(1/w.w),g.x*=s.x/2,g.y*=s.y/2,w.x*=s.x/2,w.y*=s.y/2,M.start.copy(g),M.start.z=0,M.end.copy(w),M.end.z=0;let c=M.closestPointToPointParameter(S,!0);M.at(c,P);let m=f.MathUtils.lerp(g.z,w.z,c),h=m>=-1&&m<=1,y=S.distanceTo(P)<.5*a;if(h&&y){M.start.fromBufferAttribute(u,t),M.end.fromBufferAttribute(d,t),M.start.applyMatrix4(l),M.end.applyMatrix4(l);let i=new f.Vector3,o=new f.Vector3;n.distanceSqToSegment(M.start,M.end,o,i),r.push({point:o,pointOnLine:i,distance:n.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,uv2:null})}}}(this,c,t))}}}class L extends h{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class O extends _{constructor(e=new L,t=new y({color:16777215*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let V=d.forwardRef(function({points:e,color:t=16777215,vertexColors:r,linewidth:n,lineWidth:i,segments:o,dashed:a,...s},l){var p,m;let v=(0,u.A)(e=>e.size),x=d.useMemo(()=>o?new _:new O,[o]),[g]=d.useState(()=>new y),w=(null==r||null==(p=r[0])?void 0:p.length)===4?4:3,b=d.useMemo(()=>{let n=o?new h:new L,i=e.map(e=>{let t=Array.isArray(e);return e instanceof f.Vector3||e instanceof f.Vector4?[e.x,e.y,e.z]:e instanceof f.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=16777215;let e=r.map(e=>e instanceof f.Color?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,o,r,w]);return d.useLayoutEffect(()=>{x.computeLineDistances()},[e,x]),d.useLayoutEffect(()=>{a?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[a,g]),d.useEffect(()=>()=>b.dispose(),[b]),d.createElement("primitive",(0,c.Z)({object:x,ref:l},s),d.createElement("primitive",{object:b,attach:"geometry"}),d.createElement("primitive",(0,c.Z)({object:g,attach:"material",color:t,vertexColors:!!r,resolution:[v.width,v.height],linewidth:null!==(m=null!=n?n:i)&&void 0!==m?m:1,dashed:a,transparent:4===w},s)))});var U=r(20745);let D=new f.Vector3,F=new f.Vector3,I=new f.Vector3,T=new f.Vector2;function B(e,t,r){let n=D.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,o=r.height/2;return[n.x*i+i,-(n.y*o)+o]}let W=e=>1e-10>Math.abs(e)?0:e;function k(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=W(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let j=(s=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>k(e,s)),N=(l=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>k(e,l(t),"translate(-50%,-50%)")),H=d.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:o,fullscreen:a,portal:s,distanceFactor:l,sprite:p=!1,transform:m=!1,occlude:h,onOcclude:y,castShadow:v,receiveShadow:x,material:g,geometry:w,zIndexRange:b=[16777271,0],calculatePosition:S=B,as:E="div",wrapperClass:M,pointerEvents:P="auto",...C},A)=>{let{gl:z,camera:R,scene:_,size:L,raycaster:O,events:V,viewport:k}=(0,u.A)(),[H]=d.useState(()=>document.createElement(E)),$=d.useRef(),G=d.useRef(null),Z=d.useRef(0),q=d.useRef([0,0]),Q=d.useRef(null),J=d.useRef(null),K=(null==s?void 0:s.current)||V.connected||z.domElement.parentNode,X=d.useRef(null),Y=d.useRef(!1),ee=d.useMemo(()=>{var e;return h&&"blending"!==h||Array.isArray(h)&&h.length&&(e=h[0])&&"object"==typeof e&&"current"in e},[h]);d.useLayoutEffect(()=>{let e=z.domElement;h&&"blending"===h?(e.style.zIndex=`${Math.floor(b[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[h]),d.useLayoutEffect(()=>{if(G.current){let e=$.current=U.createRoot(H);if(_.updateMatrixWorld(),m)H.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=S(G.current,R,L);H.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return K&&(i?K.prepend(H):K.appendChild(H)),()=>{K&&K.removeChild(H),e.unmount()}}},[K,m]),d.useLayoutEffect(()=>{M&&(H.className=M)},[M]);let et=d.useMemo(()=>m?{position:"absolute",top:0,left:0,width:L.width,height:L.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...a&&{top:-L.height/2,left:-L.width/2,width:L.width,height:L.height},...r},[r,o,a,L,m]),er=d.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);d.useLayoutEffect(()=>{var t,i;Y.current=!1,m?null==(t=$.current)||t.render(d.createElement("div",{ref:Q,style:et},d.createElement("div",{ref:J,style:er},d.createElement("div",{ref:A,className:n,style:r,children:e})))):null==(i=$.current)||i.render(d.createElement("div",{ref:A,style:et,className:n,children:e}))});let en=d.useRef(!0);(0,u.C)(e=>{if(G.current){R.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=m?q.current:S(G.current,R,L);if(m||Math.abs(Z.current-R.zoom)>t||Math.abs(q.current[0]-e[0])>t||Math.abs(q.current[1]-e[1])>t){let t=function(e,t){let r=D.setFromMatrixPosition(e.matrixWorld),n=F.setFromMatrixPosition(t.matrixWorld),i=r.sub(n),o=t.getWorldDirection(I);return i.angleTo(o)>Math.PI/2}(G.current,R),r=!1;ee&&(Array.isArray(h)?r=h.map(e=>e.current):"blending"!==h&&(r=[_]));let n=en.current;if(r){let e=function(e,t,r,n){let i=D.setFromMatrixPosition(e.matrixWorld),o=i.clone();o.project(t),T.set(o.x,o.y),r.setFromCamera(T,t);let a=r.intersectObjects(n,!0);if(a.length){let e=a[0].distance,t=i.distanceTo(r.ray.origin);return t<e}return!0}(G.current,R,O,r);en.current=e&&!t}else en.current=!t;n!==en.current&&(y?y(!en.current):H.style.display=en.current?"block":"none");let i=Math.floor(b[0]/2),o=h?ee?[b[0],i]:[i-1,0]:b;if(H.style.zIndex=`${function(e,t,r){if(t instanceof f.PerspectiveCamera||t instanceof f.OrthographicCamera){let n=D.setFromMatrixPosition(e.matrixWorld),i=F.setFromMatrixPosition(t.matrixWorld),o=n.distanceTo(i),a=(r[1]-r[0])/(t.far-t.near),s=r[1]-a*t.far;return Math.round(a*o+s)}}(G.current,R,o)}`,m){let[e,t]=[L.width/2,L.height/2],r=R.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:o,bottom:a,right:s}=R,c=j(R.matrixWorldInverse),u=n?`scale(${r})translate(${W(-(s+o)/2)}px,${W((i+a)/2)}px)`:`translateZ(${r}px)`,d=G.current.matrixWorld;p&&((d=R.matrixWorldInverse.clone().transpose().copyPosition(d).scale(G.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),H.style.width=L.width+"px",H.style.height=L.height+"px",H.style.perspective=n?"":`${r}px`,Q.current&&J.current&&(Q.current.style.transform=`${u}${c}translate(${e}px,${t}px)`,J.current.style.transform=N(d,1/((l||10)/400)))}else{let t=void 0===l?1:function(e,t){if(t instanceof f.OrthographicCamera)return t.zoom;if(!(t instanceof f.PerspectiveCamera))return 1;{let r=D.setFromMatrixPosition(e.matrixWorld),n=F.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,o=r.distanceTo(n);return 1/(2*Math.tan(i/2)*o)}}(G.current,R)*l;H.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}q.current=e,Z.current=R.zoom}}if(!ee&&X.current&&!Y.current){if(m){if(Q.current){let e=Q.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=R;if(t||w)C.scale&&(Array.isArray(C.scale)?C.scale instanceof f.Vector3?X.current.scale.copy(C.scale.clone().divideScalar(1)):X.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):X.current.scale.setScalar(1/C.scale));else{let t=(l||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;X.current.scale.set(r,n,1)}Y.current=!0}}}else{let t=H.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/k.factor,r=t.clientWidth*e,n=t.clientHeight*e;X.current.scale.set(r,n,1),Y.current=!0}X.current.lookAt(e.camera.position)}}});let ei=d.useMemo(()=>({vertexShader:m?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[m]);return d.createElement("group",(0,c.Z)({},C,{ref:G}),h&&!ee&&d.createElement("mesh",{castShadow:v,receiveShadow:x,ref:X},w||d.createElement("planeGeometry",null),g||d.createElement("shaderMaterial",{side:f.DoubleSide,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))}),$=d.createContext(null),G=new f.Vector3,Z=new f.Vector3,q=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;G.copy(n).multiplyScalar(i/a).sub(t),Z.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-G.dot(Z)/G.dot(G);return s},Q=new f.Vector3(0,1,0),J=new f.Matrix4,K=({direction:e,axis:t})=>{let{translation:r,translationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:l,fixed:c,axisColors:p,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:x,userData:g}=d.useContext($),w=(0,u.A)(e=>e.controls),b=d.useRef(null),S=d.useRef(null),E=d.useRef(null),M=d.useRef(0),[P,C]=d.useState(!1),A=d.useCallback(n=>{i&&(b.current.innerText=`${r.current[t].toFixed(2)}`,b.current.style.display="block"),n.stopPropagation();let o=new f.Matrix4().extractRotation(S.current.matrixWorld),a=n.point.clone(),s=new f.Vector3().setFromMatrixPosition(S.current.matrixWorld),l=e.clone().applyMatrix4(o).normalize();E.current={clickPoint:a,dir:l},M.current=r.current[t],y({component:"Arrow",axis:t,origin:s,directions:[l]}),w&&(w.enabled=!1),n.target.setPointerCapture(n.pointerId)},[i,e,w,y,r,t]),z=d.useCallback(e=>{if(e.stopPropagation(),P||C(!0),E.current){let{clickPoint:o,dir:a}=E.current,[s,l]=(null==n?void 0:n[t])||[void 0,void 0],c=q(o,a,e.ray.origin,e.ray.direction);void 0!==s&&(c=Math.max(c,s-M.current)),void 0!==l&&(c=Math.min(c,l-M.current)),r.current[t]=M.current+c,i&&(b.current.innerText=`${r.current[t].toFixed(2)}`),J.makeTranslation(a.x*c,a.y*c,a.z*c),v(J)}},[i,v,P,r,n,t]),R=d.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),E.current=null,x(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,x]),_=d.useCallback(e=>{e.stopPropagation(),C(!1)},[]),{cylinderLength:L,coneWidth:O,coneLength:U,matrixL:D}=d.useMemo(()=>{let t=c?l/s*1.6:s/20,r=c?.2:s/5,n=c?1-r:s-r,i=new f.Quaternion().setFromUnitVectors(Q,e.clone().normalize()),o=new f.Matrix4().makeRotationFromQuaternion(i);return{cylinderLength:n,coneWidth:t,coneLength:r,matrixL:o}},[e,s,l,c]),F=P?m:p[t];return d.createElement("group",{ref:S},d.createElement("group",{matrix:D,matrixAutoUpdate:!1,onPointerDown:A,onPointerMove:z,onPointerUp:R,onPointerOut:_},i&&d.createElement(H,{position:[0,-U,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),d.createElement("mesh",{visible:!1,position:[0,(L+U)/2,0],userData:g},d.createElement("cylinderGeometry",{args:[1.4*O,1.4*O,L+U,8,1]})),d.createElement(V,{transparent:!0,raycast:()=>null,depthTest:a,points:[0,0,0,0,L,0],lineWidth:l,side:f.DoubleSide,color:F,opacity:h,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),d.createElement("mesh",{raycast:()=>null,position:[0,L+U/2,0],renderOrder:500},d.createElement("coneGeometry",{args:[O,U,24,1]}),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:F,opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},X=new f.Vector3,Y=new f.Vector3,ee=e=>180*e/Math.PI,et=e=>e*Math.PI/180,er=(e,t,r,n,i)=>{X.copy(e).sub(r),Y.copy(t).sub(r);let o=n.dot(n),a=i.dot(i),s=X.dot(n)/o,l=X.dot(i)/a,c=Y.dot(n)/o,u=Y.dot(i)/a;return Math.atan2(u,c)-Math.atan2(l,s)},en=(e,t)=>{let r=Math.floor(e/t);return e-(r=r<0?r+1:r)*t},ei=e=>{let t=en(e,2*Math.PI);return 1e-6>Math.abs(t)?0:(t<0&&(t+=2*Math.PI),t)},eo=new f.Matrix4,ea=new f.Vector3,es=new f.Ray,el=new f.Vector3,ec=({dir1:e,dir2:t,axis:r})=>{let{rotationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:l,fixed:c,axisColors:p,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:x,userData:g}=d.useContext($),w=(0,u.A)(e=>e.controls),b=d.useRef(null),S=d.useRef(null),E=d.useRef(0),M=d.useRef(0),P=d.useRef(null),[C,A]=d.useState(!1),z=d.useCallback(e=>{i&&(b.current.innerText=`${ee(M.current).toFixed(0)}\xba`,b.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),n=new f.Vector3().setFromMatrixPosition(S.current.matrixWorld),o=new f.Vector3().setFromMatrixColumn(S.current.matrixWorld,0).normalize(),a=new f.Vector3().setFromMatrixColumn(S.current.matrixWorld,1).normalize(),s=new f.Vector3().setFromMatrixColumn(S.current.matrixWorld,2).normalize(),l=new f.Plane().setFromNormalAndCoplanarPoint(s,n);P.current={clickPoint:t,origin:n,e1:o,e2:a,normal:s,plane:l},y({component:"Rotator",axis:r,origin:n,directions:[o,a,s]}),w&&(w.enabled=!1),e.target.setPointerCapture(e.pointerId)},[i,w,y,r]),R=d.useCallback(e=>{if(e.stopPropagation(),C||A(!0),P.current){let{clickPoint:t,origin:o,e1:a,e2:s,normal:l,plane:c}=P.current,[u,d]=(null==n?void 0:n[r])||[void 0,void 0];es.copy(e.ray),es.intersectPlane(c,el),es.direction.negate(),es.intersectPlane(c,el);let p=er(t,el,o,a,s),m=ee(p);e.shiftKey&&(p=et(m=10*Math.round(m/10))),void 0!==u&&void 0!==d&&d-u<2*Math.PI?(p=(p=ei(p))>Math.PI?p-2*Math.PI:p,p=f.MathUtils.clamp(p,u-E.current,d-E.current),M.current=E.current+p):(M.current=ei(E.current+p),M.current=M.current>Math.PI?M.current-2*Math.PI:M.current),i&&(m=ee(M.current),b.current.innerText=`${m.toFixed(0)}\xba`),eo.makeRotationAxis(l,p),ea.copy(o).applyMatrix4(eo).sub(o).negate(),eo.setPosition(ea),v(eo)}},[i,v,C,n,r]),_=d.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),E.current=M.current,P.current=null,x(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,x]),L=d.useCallback(e=>{e.stopPropagation(),A(!1)},[]),O=d.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new f.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),U=c?.65:.65*s,D=d.useMemo(()=>{let e=[];for(let t=0;t<=32;t++){let r=t*(Math.PI/2)/32;e.push(new f.Vector3(Math.cos(r)*U,Math.sin(r)*U,0))}return e},[U]);return d.createElement("group",{ref:S,onPointerDown:z,onPointerMove:R,onPointerUp:_,onPointerOut:L,matrix:O,matrixAutoUpdate:!1},i&&d.createElement(H,{position:[U,U,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),d.createElement(V,{points:D,lineWidth:4*l,visible:!1,userData:g}),d.createElement(V,{transparent:!0,raycast:()=>null,depthTest:a,points:D,lineWidth:l,side:f.DoubleSide,color:C?m:p[r],opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},eu=(e,t,r)=>{let n=Math.abs(e.x)>=Math.abs(e.y)&&Math.abs(e.x)>=Math.abs(e.z)?0:Math.abs(e.y)>=Math.abs(e.x)&&Math.abs(e.y)>=Math.abs(e.z)?1:2,i=[0,1,2].sort((e,r)=>Math.abs(t.getComponent(r))-Math.abs(t.getComponent(e))),o=n===i[0]?i[1]:i[0],a=e.getComponent(n),s=e.getComponent(o),l=t.getComponent(n),c=t.getComponent(o),u=r.getComponent(n),d=r.getComponent(o),f=(d-u*(s/a))/(c-l*(s/a));return[(u-f*l)/a,f]},ed=new f.Ray,ef=new f.Vector3,ep=new f.Matrix4,em=({dir1:e,dir2:t,axis:r})=>{let{translation:n,translationLimits:i,annotations:o,annotationsClass:a,depthTest:s,scale:l,lineWidth:c,fixed:p,axisColors:m,hoveredColor:h,opacity:y,onDragStart:v,onDrag:x,onDragEnd:g,userData:w}=d.useContext($),b=(0,u.A)(e=>e.controls),S=d.useRef(null),E=d.useRef(null),M=d.useRef(null),P=d.useRef(0),C=d.useRef(0),[A,z]=d.useState(!1),R=d.useCallback(e=>{o&&(S.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`,S.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),i=new f.Vector3().setFromMatrixPosition(E.current.matrixWorld),a=new f.Vector3().setFromMatrixColumn(E.current.matrixWorld,0).normalize(),s=new f.Vector3().setFromMatrixColumn(E.current.matrixWorld,1).normalize(),l=new f.Vector3().setFromMatrixColumn(E.current.matrixWorld,2).normalize(),c=new f.Plane().setFromNormalAndCoplanarPoint(l,i);M.current={clickPoint:t,e1:a,e2:s,plane:c},P.current=n.current[(r+1)%3],C.current=n.current[(r+2)%3],v({component:"Slider",axis:r,origin:i,directions:[a,s,l]}),b&&(b.enabled=!1),e.target.setPointerCapture(e.pointerId)},[o,b,v,r]),_=d.useCallback(e=>{if(e.stopPropagation(),A||z(!0),M.current){let{clickPoint:t,e1:a,e2:s,plane:l}=M.current,[c,u]=(null==i?void 0:i[(r+1)%3])||[void 0,void 0],[d,f]=(null==i?void 0:i[(r+2)%3])||[void 0,void 0];ed.copy(e.ray),ed.intersectPlane(l,ef),ed.direction.negate(),ed.intersectPlane(l,ef),ef.sub(t);let[p,m]=eu(a,s,ef);void 0!==c&&(p=Math.max(p,c-P.current)),void 0!==u&&(p=Math.min(p,u-P.current)),void 0!==d&&(m=Math.max(m,d-C.current)),void 0!==f&&(m=Math.min(m,f-C.current)),n.current[(r+1)%3]=P.current+p,n.current[(r+2)%3]=C.current+m,o&&(S.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`),ep.makeTranslation(p*a.x+m*s.x,p*a.y+m*s.y,p*a.z+m*s.z),x(ep)}},[o,x,A,n,i,r]),L=d.useCallback(e=>{o&&(S.current.style.display="none"),e.stopPropagation(),M.current=null,g(),b&&(b.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[o,b,g]),O=d.useCallback(e=>{e.stopPropagation(),z(!1)},[]),U=d.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new f.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),D=p?1/7:l/7,F=p?.225:.225*l,I=A?h:m[r],T=d.useMemo(()=>[new f.Vector3(0,0,0),new f.Vector3(0,F,0),new f.Vector3(F,F,0),new f.Vector3(F,0,0),new f.Vector3(0,0,0)],[F]);return d.createElement("group",{ref:E,matrix:U,matrixAutoUpdate:!1},o&&d.createElement(H,{position:[0,0,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:a,ref:S})),d.createElement("group",{position:[1.7*D,1.7*D,0]},d.createElement("mesh",{visible:!0,onPointerDown:R,onPointerMove:_,onPointerUp:L,onPointerOut:O,scale:F,userData:w},d.createElement("planeGeometry",null),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:s,color:I,polygonOffset:!0,polygonOffsetFactor:-10,side:f.DoubleSide,fog:!1})),d.createElement(V,{position:[-F/2,-F/2,0],transparent:!0,depthTest:s,points:T,lineWidth:c,color:I,opacity:y,polygonOffset:!0,polygonOffsetFactor:-10,userData:w,fog:!1})))},eh=new f.Vector3,ey=new f.Vector3,ev=new f.Vector3,ex=(e,t,r)=>{let n=r.width/2,i=r.height/2;t.updateMatrixWorld(!1);let o=e.project(t);return o.x=o.x*n+n,o.y=-(o.y*i)+i,o},eg=(e,t,r,n=1)=>{let i=eh.set(e.x/r.width*2-1,-(2*(e.y/r.height))+1,n);return i.unproject(t),i},ew=(e,t,r,n)=>{let i=ex(ev.copy(e),r,n),o=0;for(let a=0;a<2;++a){let s=ey.copy(i).setComponent(a,i.getComponent(a)+t),l=eg(s,r,n,s.z);o=Math.max(o,e.distanceTo(l))}return o},eb=new f.Vector3,eS=new f.Vector3,eE=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;eb.copy(n).multiplyScalar(i/a).sub(t),eS.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-eb.dot(eS)/eb.dot(eb);return s},eM=new f.Vector3(0,1,0),eP=new f.Vector3,eC=new f.Matrix4,eA=({direction:e,axis:t})=>{let{scaleLimits:r,annotations:n,annotationsClass:i,depthTest:o,scale:a,lineWidth:s,fixed:l,axisColors:c,hoveredColor:p,opacity:m,onDragStart:h,onDrag:y,onDragEnd:v,userData:x}=d.useContext($),g=(0,u.A)(e=>e.size),w=(0,u.A)(e=>e.controls),b=d.useRef(null),S=d.useRef(null),E=d.useRef(null),M=d.useRef(1),P=d.useRef(1),C=d.useRef(null),[A,z]=d.useState(!1),R=l?1.2:1.2*a,_=d.useCallback(r=>{n&&(b.current.innerText=`${P.current.toFixed(2)}`,b.current.style.display="block"),r.stopPropagation();let i=new f.Matrix4().extractRotation(S.current.matrixWorld),o=r.point.clone(),s=new f.Vector3().setFromMatrixPosition(S.current.matrixWorld),c=e.clone().applyMatrix4(i).normalize(),u=S.current.matrixWorld.clone(),d=u.clone().invert(),p=l?1/ew(S.current.getWorldPosition(eb),a,r.camera,g):1;C.current={clickPoint:o,dir:c,mPLG:u,mPLGInv:d,offsetMultiplier:p},h({component:"Sphere",axis:t,origin:s,directions:[c]}),w&&(w.enabled=!1),r.target.setPointerCapture(r.pointerId)},[n,w,e,h,t,l,a,g]),L=d.useCallback(e=>{if(e.stopPropagation(),A||z(!0),C.current){let{clickPoint:i,dir:o,mPLG:s,mPLGInv:c,offsetMultiplier:u}=C.current,[d,f]=(null==r?void 0:r[t])||[1e-5,void 0],p=eE(i,o,e.ray.origin,e.ray.direction),m=p*u,h=l?m:m/a,v=Math.pow(2,.2*h);e.shiftKey&&(v=Math.round(10*v)/10),v=Math.max(v,d/M.current),void 0!==f&&(v=Math.min(v,f/M.current)),P.current=M.current*v,E.current.position.set(0,R+m,0),n&&(b.current.innerText=`${P.current.toFixed(2)}`),eP.set(1,1,1),eP.setComponent(t,v),eC.makeScale(eP.x,eP.y,eP.z).premultiply(s).multiply(c),y(eC)}},[n,R,y,A,r,t]),O=d.useCallback(e=>{n&&(b.current.style.display="none"),e.stopPropagation(),M.current=P.current,C.current=null,E.current.position.set(0,R,0),v(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[n,w,v,R]),V=d.useCallback(e=>{e.stopPropagation(),z(!1)},[]),{radius:U,matrixL:D}=d.useMemo(()=>{let t=l?s/a*1.8:a/22.5,r=new f.Quaternion().setFromUnitVectors(eM,e.clone().normalize()),n=new f.Matrix4().makeRotationFromQuaternion(r);return{radius:t,matrixL:n}},[e,a,s,l]),F=A?p:c[t];return d.createElement("group",{ref:S},d.createElement("group",{matrix:D,matrixAutoUpdate:!1,onPointerDown:_,onPointerMove:L,onPointerUp:O,onPointerOut:V},n&&d.createElement(H,{position:[0,R/2,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:b})),d.createElement("mesh",{ref:E,position:[0,R,0],renderOrder:500,userData:x},d.createElement("sphereGeometry",{args:[U,12,12]}),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:o,color:F,opacity:m,polygonOffset:!0,polygonOffsetFactor:-10}))))},ez=new f.Matrix4,eR=new f.Matrix4,e_=new f.Matrix4,eL=new f.Matrix4,eO=new f.Matrix4,eV=new f.Matrix4,eU=new f.Matrix4,eD=new f.Matrix4,eF=new f.Matrix4,eI=new f.Box3,eT=new f.Box3,eB=new f.Vector3,eW=new f.Vector3,ek=new f.Vector3,ej=new f.Vector3,eN=new f.Vector3,eH=new f.Vector3(1,0,0),e$=new f.Vector3(0,1,0),eG=new f.Vector3(0,0,1),eZ=d.forwardRef(({matrix:e,onDragStart:t,onDrag:r,onDragEnd:n,autoTransform:i=!0,anchor:o,disableAxes:a=!1,disableSliders:s=!1,disableRotations:l=!1,disableScaling:p=!1,activeAxes:m=[!0,!0,!0],offset:h=[0,0,0],rotation:y=[0,0,0],scale:v=1,lineWidth:x=4,fixed:g=!1,translationLimits:w,rotationLimits:b,scaleLimits:S,depthTest:E=!0,axisColors:M=["#ff2060","#20df80","#2080ff"],hoveredColor:P="#ffff40",annotations:C=!1,annotationsClass:A,opacity:z=1,visible:R=!0,userData:_,children:L,...O},V)=>{let U=(0,u.A)(e=>e.invalidate),D=d.useRef(null),F=d.useRef(null),I=d.useRef(null),T=d.useRef(null),B=d.useRef([0,0,0]),W=d.useRef(new f.Vector3(1,1,1)),k=d.useRef(new f.Vector3(1,1,1));d.useLayoutEffect(()=>{o&&(T.current.updateWorldMatrix(!0,!0),eL.copy(T.current.matrixWorld).invert(),eI.makeEmpty(),T.current.traverse(e=>{e.geometry&&(e.geometry.boundingBox||e.geometry.computeBoundingBox(),eV.copy(e.matrixWorld).premultiply(eL),eT.copy(e.geometry.boundingBox),eT.applyMatrix4(eV),eI.union(eT))}),eB.copy(eI.max).add(eI.min).multiplyScalar(.5),eW.copy(eI.max).sub(eI.min).multiplyScalar(.5),ek.copy(eW).multiply(new f.Vector3(...o)).add(eB),ej.set(...h).add(ek),I.current.position.copy(ej),U())});let j=d.useMemo(()=>({onDragStart:e=>{ez.copy(F.current.matrix),eR.copy(F.current.matrixWorld),t&&t(e),U()},onDrag:e=>{e_.copy(D.current.matrixWorld),eL.copy(e_).invert(),eO.copy(eR).premultiply(e),eV.copy(eO).premultiply(eL),eU.copy(ez).invert(),eD.copy(eV).multiply(eU),i&&F.current.matrix.copy(eV),r&&r(eV,eD,eO,e),U()},onDragEnd:()=>{n&&n(),U()},translation:B,translationLimits:w,rotationLimits:b,axisColors:M,hoveredColor:P,opacity:z,scale:v,lineWidth:x,fixed:g,depthTest:E,userData:_,annotations:C,annotationsClass:A}),[t,r,n,B,w,b,S,E,v,x,g,...M,P,z,_,i,C,A]),N=new f.Vector3;return(0,u.C)(t=>{if(g){let e=ew(I.current.getWorldPosition(N),v,t.camera,t.size);W.current.setScalar(e)}e&&e instanceof f.Matrix4&&(F.current.matrix=e),F.current.updateWorldMatrix(!0,!0),eF.makeRotationFromEuler(I.current.rotation).setPosition(I.current.position).premultiply(F.current.matrixWorld),k.current.setFromMatrixScale(eF),eN.copy(W.current).divide(k.current),(Math.abs(I.current.scale.x-eN.x)>1e-4||Math.abs(I.current.scale.y-eN.y)>1e-4||Math.abs(I.current.scale.z-eN.z)>1e-4)&&(I.current.scale.copy(eN),t.invalidate())}),d.useImperativeHandle(V,()=>F.current,[]),d.createElement($.Provider,{value:j},d.createElement("group",{ref:D},d.createElement("group",(0,c.Z)({ref:F,matrix:e,matrixAutoUpdate:!1},O),d.createElement("group",{visible:R,ref:I,position:h,rotation:y},!a&&m[0]&&d.createElement(K,{axis:0,direction:eH}),!a&&m[1]&&d.createElement(K,{axis:1,direction:e$}),!a&&m[2]&&d.createElement(K,{axis:2,direction:eG}),!s&&m[0]&&m[1]&&d.createElement(em,{axis:2,dir1:eH,dir2:e$}),!s&&m[0]&&m[2]&&d.createElement(em,{axis:1,dir1:eG,dir2:eH}),!s&&m[2]&&m[1]&&d.createElement(em,{axis:0,dir1:e$,dir2:eG}),!l&&m[0]&&m[1]&&d.createElement(ec,{axis:2,dir1:eH,dir2:e$}),!l&&m[0]&&m[2]&&d.createElement(ec,{axis:1,dir1:eG,dir2:eH}),!l&&m[2]&&m[1]&&d.createElement(ec,{axis:0,dir1:e$,dir2:eG}),!p&&m[0]&&d.createElement(eA,{axis:0,direction:eH}),!p&&m[1]&&d.createElement(eA,{axis:1,direction:e$}),!p&&m[2]&&d.createElement(eA,{axis:2,direction:eG})),d.createElement("group",{ref:T},L))))})},85470:function(e,t,r){r.d(t,{Z:function(){return y}});var n,i,o=r(67294);let a=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(n,i,o);return o},s=e=>e?a(e):a;var l=r(52798);let{useDebugValue:c}=o,{useSyncExternalStoreWithSelector:u}=l,d=!1,f=e=>e,p=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?s(e):e,r=(e,r)=>(function(e,t=f,r){r&&!d&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),d=!0);let n=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return c(n),n})(t,e,r);return Object.assign(r,t),r},m=e=>e?p(e):p,h="undefined"!=typeof window&&(null!=(n=window.document)&&n.createElement||(null==(i=window.navigator)?void 0:i.product)==="ReactNative")?o.useLayoutEffect:o.useEffect;function y(){let e=m(e=>({current:[],version:0,set:e}));return{In:({children:t})=>{let r=e(e=>e.set),n=e(e=>e.version);return h(()=>{r(e=>({version:e.version+1}))},[]),h(()=>(r(({current:e})=>({current:[...e,t]})),()=>r(({current:e})=>({current:e.filter(e=>e!==t)}))),[t,n]),null},Out:()=>{let t=e(e=>e.current);return o.createElement(o.Fragment,null,t)}}}},53250:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},50139:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i=r(61688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]);var p=a(e,d[0],d[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},61688:function(e,t,r){e.exports=r(53250)},52798:function(e,t,r){e.exports=r(50139)}}]);
//# sourceMappingURL=4008-37f46531c7be0c5b.js.map