"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9183],{90319:function(e,t,r){r.d(t,{R:function(){return a}});var n=r(67294),i=r(99477),o=r(19390);function a(e,t,r){let a=(0,o.A)(e=>e.size),s=(0,o.A)(e=>e.viewport),l="number"==typeof e?e:a.width*s.dpr,c="number"==typeof t?t:a.height*s.dpr,u=("number"==typeof e?r:e)||{},{samples:d=0,depth:f,...p}=u,m=n.useMemo(()=>{let e=new i.WebGLRenderTarget(l,c,{minFilter:i.LinearFilter,magFilter:i.LinearFilter,type:i.HalfFloatType,...p});return f&&(e.depthTexture=new i.DepthTexture(l,c,i.FloatType)),e.samples=d,e},[]);return n.useLayoutEffect(()=>{m.setSize(l,c),d&&(m.samples=d)},[d,m,l,c]),n.useEffect(()=>()=>m.dispose(),[]),m}},40705:function(e,t,r){r.d(t,{G:function(){return g}});var n=r(87462),i=r(67294),o=r(99477),a=r(19390),s=r(85470);let l=e=>e&&e.isOrthographicCamera,c=new o.Color,u=(0,s.Z)();function d(e,t){let{right:r,top:n,left:i,bottom:o,width:a,height:s}=t,l=t.bottom<0||n>e.height||r<0||t.left>e.width;if("top"in e){let t=e.top+e.height,c=i-e.left;return{position:{width:a,height:s,left:c,top:n,bottom:t-o,right:r},isOffscreen:l}}let c=e.height-o;return{position:{width:a,height:s,top:n,left:i,bottom:c,right:r},isOffscreen:l}}function f(e,{left:t,bottom:r,width:n,height:i}){let o;let a=n/i;return l(e.camera)?(e.camera.left!==-(n/2)||e.camera.right!==n/2||e.camera.top!==i/2||e.camera.bottom!==-(i/2))&&(Object.assign(e.camera,{left:-(n/2),right:n/2,top:i/2,bottom:-(i/2)}),e.camera.updateProjectionMatrix()):e.camera.aspect!==a&&(e.camera.aspect=a,e.camera.updateProjectionMatrix()),o=e.gl.autoClear,e.gl.autoClear=!1,e.gl.setViewport(t,r,n,i),e.gl.setScissor(t,r,n,i),e.gl.setScissorTest(!0),o}function p(e,t){e.gl.setScissorTest(!1),e.gl.autoClear=t}function m(e){e.gl.getClearColor(c),e.gl.setClearColor(c,e.gl.getClearAlpha()),e.gl.clear(!0,!0)}function h({visible:e=!0,canvasSize:t,scene:r,index:n,children:o,frames:s,rect:l,track:c}){let u=(0,a.A)(),[h,y]=i.useState(!1),v=0;return(0,a.C)(n=>{if(s===1/0||v<=s){var i;c&&(l.current=null==(i=c.current)?void 0:i.getBoundingClientRect()),v++}if(l.current){let{position:i,isOffscreen:a}=d(t,l.current);if(h!==a&&y(a),e&&!h&&l.current){let e=f(n,i);n.gl.render(o?n.scene:r,n.camera),p(n,e)}}},n),i.useLayoutEffect(()=>{let r=l.current;if(r&&(!e||!h)){let{position:e}=d(t,r),n=f(u,e);m(u),p(u,n)}},[e,h]),i.useEffect(()=>{if(!c)return;let e=l.current,r=u.get().events.connected;return u.setEvents({connected:c.current}),()=>{if(e){let{position:r}=d(t,e),n=f(u,r);m(u),p(u,n)}u.setEvents({connected:r})}},[c]),i.useEffect(()=>{"top"in t||console.warn("Detected @react-three/fiber canvas size does not include position information. <View /> may not work as expected. Upgrade to @react-three/fiber ^8.1.0 for support.\n See https://github.com/pmndrs/drei/issues/944")},[]),i.createElement(i.Fragment,null,o,i.createElement("group",{onPointerOver:()=>null}))}let y=i.forwardRef(({track:e,visible:t=!0,index:r=1,id:s,style:l,className:c,frames:u=1/0,children:d,...f},p)=>{var m,y,v,g;let x=i.useRef(null),{size:w,scene:b}=(0,a.A)(),[S]=i.useState(()=>new o.Scene),[E,M]=i.useReducer(()=>!0,!1),C=i.useCallback((t,r)=>{if(x.current&&e&&e.current&&t.target===e.current){let{width:e,height:n,left:i,top:o}=x.current,a=t.clientX-i,s=t.clientY-o;r.pointer.set(a/e*2-1,-(2*(s/n))+1),r.raycaster.setFromCamera(r.pointer,r.camera)}},[x,e]);return i.useEffect(()=>{var t;e&&(x.current=null==(t=e.current)?void 0:t.getBoundingClientRect()),M()},[e]),i.createElement("group",(0,n.Z)({ref:p},f),E&&(0,a.g)(i.createElement(h,{visible:t,canvasSize:w,frames:u,scene:b,track:e,rect:x,index:r},d),S,{events:{compute:C,priority:r},size:{width:null==(m=x.current)?void 0:m.width,height:null==(y=x.current)?void 0:y.height,top:null==(v=x.current)?void 0:v.top,left:null==(g=x.current)?void 0:g.left}}))}),v=i.forwardRef(({as:e="div",id:t,visible:r,className:o,style:a,index:s=1,track:l,frames:c=1/0,children:d,...f},p)=>{let m=i.useId(),h=i.useRef(null);return i.useImperativeHandle(p,()=>h.current),i.createElement(i.Fragment,null,i.createElement(e,(0,n.Z)({ref:h,id:t,className:o,style:a},f)),i.createElement(u.In,null,i.createElement(y,{visible:r,key:m,track:h,frames:c,index:s},d)))}),g=i.forwardRef((e,t)=>{let r=i.useContext(a.f);return r?i.createElement(y,(0,n.Z)({ref:t},e)):i.createElement(v,(0,n.Z)({ref:t},e))});g.Port=()=>i.createElement(u.Out,null)},97146:function(e,t,r){let n,i,o,a;r.d(t,{J:function(){return eD}});var s=r(87462),l=r(19390),c=r(67294),u=r(99477);let d=new u.Box3,f=new u.Vector3;class p extends u.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new u.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new u.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new u.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new u.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new u.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new u.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new u.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new u.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new u.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new u.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new u.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)f.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(f)),f.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(f));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class m extends u.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:u.UniformsUtils.clone(u.UniformsUtils.merge([u.UniformsLib.common,u.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new u.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${parseInt(u.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=new u.Vector3,y=new u.Vector3,v=new u.Vector4,g=new u.Vector4,x=new u.Vector4,w=new u.Vector3,b=new u.Matrix4,S=new u.Line3,E=new u.Vector3,M=new u.Box3,C=new u.Sphere,P=new u.Vector4;function A(e,t,r){return P.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),P.multiplyScalar(1/P.w),P.x=a/r.width,P.y=a/r.height,P.applyMatrix4(e.projectionMatrixInverse),P.multiplyScalar(1/P.w),Math.abs(Math.max(P.x,P.y))}class z extends u.Mesh{constructor(e=new p,t=new m({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)h.fromBufferAttribute(t,e),y.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+h.distanceTo(y);let i=new u.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new u.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new u.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let r,s;let l=this.material.worldUnits,c=e.camera;null!==c||l||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let f=this.matrixWorld,p=this.geometry,m=this.material;if(a=m.linewidth+d,i=p.attributes.instanceStart,o=p.attributes.instanceEnd,null===p.boundingSphere&&p.computeBoundingSphere(),C.copy(p.boundingSphere).applyMatrix4(f),l)r=.5*a;else{let e=Math.max(c.near,C.distanceToPoint(n.origin));r=A(c,e,m.resolution)}if(C.radius+=r,!1!==n.intersectsSphere(C)){if(null===p.boundingBox&&p.computeBoundingBox(),M.copy(p.boundingBox).applyMatrix4(f),l)s=.5*a;else{let e=Math.max(c.near,M.distanceToPoint(n.origin));s=A(c,e,m.resolution)}M.expandByScalar(s),!1!==n.intersectsBox(M)&&(l?function(e,t){for(let r=0,s=i.count;r<s;r++){S.start.fromBufferAttribute(i,r),S.end.fromBufferAttribute(o,r);let s=new u.Vector3,l=new u.Vector3;n.distanceSqToSegment(S.start,S.end,l,s);let c=l.distanceTo(s)<.5*a;c&&t.push({point:l,pointOnLine:s,distance:n.origin.distanceTo(l),object:e,face:null,faceIndex:r,uv:null,uv2:null})}}(this,t):function(e,t,r){let i=t.projectionMatrix,o=e.material,s=o.resolution,l=e.matrixWorld,c=e.geometry,d=c.attributes.instanceStart,f=c.attributes.instanceEnd,p=-t.near;n.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(i),x.multiplyScalar(1/x.w),x.x*=s.x/2,x.y*=s.y/2,x.z=0,w.copy(x),b.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0,o=d.count;t<o;t++){v.fromBufferAttribute(d,t),g.fromBufferAttribute(f,t),v.w=1,g.w=1,v.applyMatrix4(b),g.applyMatrix4(b);let o=v.z>p&&g.z>p;if(o)continue;if(v.z>p){let e=v.z-g.z,t=(v.z-p)/e;v.lerp(g,t)}else if(g.z>p){let e=g.z-v.z,t=(g.z-p)/e;g.lerp(v,t)}v.applyMatrix4(i),g.applyMatrix4(i),v.multiplyScalar(1/v.w),g.multiplyScalar(1/g.w),v.x*=s.x/2,v.y*=s.y/2,g.x*=s.x/2,g.y*=s.y/2,S.start.copy(v),S.start.z=0,S.end.copy(g),S.end.z=0;let c=S.closestPointToPointParameter(w,!0);S.at(c,E);let m=u.MathUtils.lerp(v.z,g.z,c),h=m>=-1&&m<=1,y=w.distanceTo(E)<.5*a;if(h&&y){S.start.fromBufferAttribute(d,t),S.end.fromBufferAttribute(f,t),S.start.applyMatrix4(l),S.end.applyMatrix4(l);let i=new u.Vector3,o=new u.Vector3;n.distanceSqToSegment(S.start,S.end,o,i),r.push({point:o,pointOnLine:i,distance:n.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,uv2:null})}}}(this,c,t))}}}class _ extends p{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class R extends z{constructor(e=new _,t=new m({color:16777215*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let U=c.forwardRef(function({points:e,color:t=16777215,vertexColors:r,linewidth:n,lineWidth:i,segments:o,dashed:a,...d},f){var h,y;let v=(0,l.A)(e=>e.size),g=c.useMemo(()=>o?new z:new R,[o]),[x]=c.useState(()=>new m),w=(null==r||null==(h=r[0])?void 0:h.length)===4?4:3,b=c.useMemo(()=>{let n=o?new p:new _,i=e.map(e=>{let t=Array.isArray(e);return e instanceof u.Vector3||e instanceof u.Vector4?[e.x,e.y,e.z]:e instanceof u.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=16777215;let e=r.map(e=>e instanceof u.Color?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,o,r,w]);return c.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),c.useLayoutEffect(()=>{a?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[a,x]),c.useEffect(()=>()=>b.dispose(),[b]),c.createElement("primitive",(0,s.Z)({object:g,ref:f},d),c.createElement("primitive",{object:b,attach:"geometry"}),c.createElement("primitive",(0,s.Z)({object:x,attach:"material",color:t,vertexColors:!!r,resolution:[v.width,v.height],linewidth:null!==(y=null!=n?n:i)&&void 0!==y?y:1,dashed:a,transparent:4===w},d)))});var V=r(77854);let L=c.createContext(null),O=new u.Vector3,D=new u.Vector3,B=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;O.copy(n).multiplyScalar(i/a).sub(t),D.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-O.dot(D)/O.dot(O);return s},I=new u.Vector3(0,1,0),T=new u.Matrix4,F=({direction:e,axis:t})=>{let{translation:r,translationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:d,fixed:f,axisColors:p,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:g,userData:x}=c.useContext(L),w=(0,l.A)(e=>e.controls),b=c.useRef(null),S=c.useRef(null),E=c.useRef(null),M=c.useRef(0),[C,P]=c.useState(!1),A=c.useCallback(n=>{i&&(b.current.innerText=`${r.current[t].toFixed(2)}`,b.current.style.display="block"),n.stopPropagation();let o=new u.Matrix4().extractRotation(S.current.matrixWorld),a=n.point.clone(),s=new u.Vector3().setFromMatrixPosition(S.current.matrixWorld),l=e.clone().applyMatrix4(o).normalize();E.current={clickPoint:a,dir:l},M.current=r.current[t],y({component:"Arrow",axis:t,origin:s,directions:[l]}),w&&(w.enabled=!1),n.target.setPointerCapture(n.pointerId)},[i,e,w,y,r,t]),z=c.useCallback(e=>{if(e.stopPropagation(),C||P(!0),E.current){let{clickPoint:o,dir:a}=E.current,[s,l]=(null==n?void 0:n[t])||[void 0,void 0],c=B(o,a,e.ray.origin,e.ray.direction);void 0!==s&&(c=Math.max(c,s-M.current)),void 0!==l&&(c=Math.min(c,l-M.current)),r.current[t]=M.current+c,i&&(b.current.innerText=`${r.current[t].toFixed(2)}`),T.makeTranslation(a.x*c,a.y*c,a.z*c),v(T)}},[i,v,C,r,n,t]),_=c.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),E.current=null,g(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,g]),R=c.useCallback(e=>{e.stopPropagation(),P(!1)},[]),{cylinderLength:O,coneWidth:D,coneLength:F,matrixL:W}=c.useMemo(()=>{let t=f?d/s*1.6:s/20,r=f?.2:s/5,n=f?1-r:s-r,i=new u.Quaternion().setFromUnitVectors(I,e.clone().normalize()),o=new u.Matrix4().makeRotationFromQuaternion(i);return{cylinderLength:n,coneWidth:t,coneLength:r,matrixL:o}},[e,s,d,f]),k=C?m:p[t];return c.createElement("group",{ref:S},c.createElement("group",{matrix:W,matrixAutoUpdate:!1,onPointerDown:A,onPointerMove:z,onPointerUp:_,onPointerOut:R},i&&c.createElement(V.V,{position:[0,-F,0]},c.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),c.createElement("mesh",{visible:!1,position:[0,(O+F)/2,0],userData:x},c.createElement("cylinderGeometry",{args:[1.4*D,1.4*D,O+F,8,1]})),c.createElement(U,{transparent:!0,raycast:()=>null,depthTest:a,points:[0,0,0,0,O,0],lineWidth:d,side:u.DoubleSide,color:k,opacity:h,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),c.createElement("mesh",{raycast:()=>null,position:[0,O+F/2,0],renderOrder:500},c.createElement("coneGeometry",{args:[D,F,24,1]}),c.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:k,opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},W=new u.Vector3,k=new u.Vector3,j=e=>180*e/Math.PI,N=e=>e*Math.PI/180,H=(e,t,r,n,i)=>{W.copy(e).sub(r),k.copy(t).sub(r);let o=n.dot(n),a=i.dot(i),s=W.dot(n)/o,l=W.dot(i)/a,c=k.dot(n)/o,u=k.dot(i)/a;return Math.atan2(u,c)-Math.atan2(l,s)},G=(e,t)=>{let r=Math.floor(e/t);return e-(r=r<0?r+1:r)*t},$=e=>{let t=G(e,2*Math.PI);return 1e-6>Math.abs(t)?0:(t<0&&(t+=2*Math.PI),t)},Z=new u.Matrix4,q=new u.Vector3,Q=new u.Ray,J=new u.Vector3,K=({dir1:e,dir2:t,axis:r})=>{let{rotationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:d,fixed:f,axisColors:p,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:g,userData:x}=c.useContext(L),w=(0,l.A)(e=>e.controls),b=c.useRef(null),S=c.useRef(null),E=c.useRef(0),M=c.useRef(0),C=c.useRef(null),[P,A]=c.useState(!1),z=c.useCallback(e=>{i&&(b.current.innerText=`${j(M.current).toFixed(0)}\xba`,b.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),n=new u.Vector3().setFromMatrixPosition(S.current.matrixWorld),o=new u.Vector3().setFromMatrixColumn(S.current.matrixWorld,0).normalize(),a=new u.Vector3().setFromMatrixColumn(S.current.matrixWorld,1).normalize(),s=new u.Vector3().setFromMatrixColumn(S.current.matrixWorld,2).normalize(),l=new u.Plane().setFromNormalAndCoplanarPoint(s,n);C.current={clickPoint:t,origin:n,e1:o,e2:a,normal:s,plane:l},y({component:"Rotator",axis:r,origin:n,directions:[o,a,s]}),w&&(w.enabled=!1),e.target.setPointerCapture(e.pointerId)},[i,w,y,r]),_=c.useCallback(e=>{if(e.stopPropagation(),P||A(!0),C.current){let{clickPoint:t,origin:o,e1:a,e2:s,normal:l,plane:c}=C.current,[d,f]=(null==n?void 0:n[r])||[void 0,void 0];Q.copy(e.ray),Q.intersectPlane(c,J),Q.direction.negate(),Q.intersectPlane(c,J);let p=H(t,J,o,a,s),m=j(p);e.shiftKey&&(p=N(m=10*Math.round(m/10))),void 0!==d&&void 0!==f&&f-d<2*Math.PI?(p=(p=$(p))>Math.PI?p-2*Math.PI:p,p=u.MathUtils.clamp(p,d-E.current,f-E.current),M.current=E.current+p):(M.current=$(E.current+p),M.current=M.current>Math.PI?M.current-2*Math.PI:M.current),i&&(m=j(M.current),b.current.innerText=`${m.toFixed(0)}\xba`),Z.makeRotationAxis(l,p),q.copy(o).applyMatrix4(Z).sub(o).negate(),Z.setPosition(q),v(Z)}},[i,v,P,n,r]),R=c.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),E.current=M.current,C.current=null,g(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,g]),O=c.useCallback(e=>{e.stopPropagation(),A(!1)},[]),D=c.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new u.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),B=f?.65:.65*s,I=c.useMemo(()=>{let e=[];for(let t=0;t<=32;t++){let r=t*(Math.PI/2)/32;e.push(new u.Vector3(Math.cos(r)*B,Math.sin(r)*B,0))}return e},[B]);return c.createElement("group",{ref:S,onPointerDown:z,onPointerMove:_,onPointerUp:R,onPointerOut:O,matrix:D,matrixAutoUpdate:!1},i&&c.createElement(V.V,{position:[B,B,0]},c.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),c.createElement(U,{points:I,lineWidth:4*d,visible:!1,userData:x}),c.createElement(U,{transparent:!0,raycast:()=>null,depthTest:a,points:I,lineWidth:d,side:u.DoubleSide,color:P?m:p[r],opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},X=(e,t,r)=>{let n=Math.abs(e.x)>=Math.abs(e.y)&&Math.abs(e.x)>=Math.abs(e.z)?0:Math.abs(e.y)>=Math.abs(e.x)&&Math.abs(e.y)>=Math.abs(e.z)?1:2,i=[0,1,2].sort((e,r)=>Math.abs(t.getComponent(r))-Math.abs(t.getComponent(e))),o=n===i[0]?i[1]:i[0],a=e.getComponent(n),s=e.getComponent(o),l=t.getComponent(n),c=t.getComponent(o),u=r.getComponent(n),d=r.getComponent(o),f=(d-u*(s/a))/(c-l*(s/a));return[(u-f*l)/a,f]},Y=new u.Ray,ee=new u.Vector3,et=new u.Matrix4,er=({dir1:e,dir2:t,axis:r})=>{let{translation:n,translationLimits:i,annotations:o,annotationsClass:a,depthTest:s,scale:d,lineWidth:f,fixed:p,axisColors:m,hoveredColor:h,opacity:y,onDragStart:v,onDrag:g,onDragEnd:x,userData:w}=c.useContext(L),b=(0,l.A)(e=>e.controls),S=c.useRef(null),E=c.useRef(null),M=c.useRef(null),C=c.useRef(0),P=c.useRef(0),[A,z]=c.useState(!1),_=c.useCallback(e=>{o&&(S.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`,S.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),i=new u.Vector3().setFromMatrixPosition(E.current.matrixWorld),a=new u.Vector3().setFromMatrixColumn(E.current.matrixWorld,0).normalize(),s=new u.Vector3().setFromMatrixColumn(E.current.matrixWorld,1).normalize(),l=new u.Vector3().setFromMatrixColumn(E.current.matrixWorld,2).normalize(),c=new u.Plane().setFromNormalAndCoplanarPoint(l,i);M.current={clickPoint:t,e1:a,e2:s,plane:c},C.current=n.current[(r+1)%3],P.current=n.current[(r+2)%3],v({component:"Slider",axis:r,origin:i,directions:[a,s,l]}),b&&(b.enabled=!1),e.target.setPointerCapture(e.pointerId)},[o,b,v,r]),R=c.useCallback(e=>{if(e.stopPropagation(),A||z(!0),M.current){let{clickPoint:t,e1:a,e2:s,plane:l}=M.current,[c,u]=(null==i?void 0:i[(r+1)%3])||[void 0,void 0],[d,f]=(null==i?void 0:i[(r+2)%3])||[void 0,void 0];Y.copy(e.ray),Y.intersectPlane(l,ee),Y.direction.negate(),Y.intersectPlane(l,ee),ee.sub(t);let[p,m]=X(a,s,ee);void 0!==c&&(p=Math.max(p,c-C.current)),void 0!==u&&(p=Math.min(p,u-C.current)),void 0!==d&&(m=Math.max(m,d-P.current)),void 0!==f&&(m=Math.min(m,f-P.current)),n.current[(r+1)%3]=C.current+p,n.current[(r+2)%3]=P.current+m,o&&(S.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`),et.makeTranslation(p*a.x+m*s.x,p*a.y+m*s.y,p*a.z+m*s.z),g(et)}},[o,g,A,n,i,r]),O=c.useCallback(e=>{o&&(S.current.style.display="none"),e.stopPropagation(),M.current=null,x(),b&&(b.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[o,b,x]),D=c.useCallback(e=>{e.stopPropagation(),z(!1)},[]),B=c.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new u.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),I=p?1/7:d/7,T=p?.225:.225*d,F=A?h:m[r],W=c.useMemo(()=>[new u.Vector3(0,0,0),new u.Vector3(0,T,0),new u.Vector3(T,T,0),new u.Vector3(T,0,0),new u.Vector3(0,0,0)],[T]);return c.createElement("group",{ref:E,matrix:B,matrixAutoUpdate:!1},o&&c.createElement(V.V,{position:[0,0,0]},c.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:a,ref:S})),c.createElement("group",{position:[1.7*I,1.7*I,0]},c.createElement("mesh",{visible:!0,onPointerDown:_,onPointerMove:R,onPointerUp:O,onPointerOut:D,scale:T,userData:w},c.createElement("planeGeometry",null),c.createElement("meshBasicMaterial",{transparent:!0,depthTest:s,color:F,polygonOffset:!0,polygonOffsetFactor:-10,side:u.DoubleSide,fog:!1})),c.createElement(U,{position:[-T/2,-T/2,0],transparent:!0,depthTest:s,points:W,lineWidth:f,color:F,opacity:y,polygonOffset:!0,polygonOffsetFactor:-10,userData:w,fog:!1})))},en=new u.Vector3,ei=new u.Vector3,eo=new u.Vector3,ea=(e,t,r)=>{let n=r.width/2,i=r.height/2;t.updateMatrixWorld(!1);let o=e.project(t);return o.x=o.x*n+n,o.y=-(o.y*i)+i,o},es=(e,t,r,n=1)=>{let i=en.set(e.x/r.width*2-1,-(2*(e.y/r.height))+1,n);return i.unproject(t),i},el=(e,t,r,n)=>{let i=ea(eo.copy(e),r,n),o=0;for(let a=0;a<2;++a){let s=ei.copy(i).setComponent(a,i.getComponent(a)+t),l=es(s,r,n,s.z);o=Math.max(o,e.distanceTo(l))}return o},ec=new u.Vector3,eu=new u.Vector3,ed=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;ec.copy(n).multiplyScalar(i/a).sub(t),eu.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-ec.dot(eu)/ec.dot(ec);return s},ef=new u.Vector3(0,1,0),ep=new u.Vector3,em=new u.Matrix4,eh=({direction:e,axis:t})=>{let{scaleLimits:r,annotations:n,annotationsClass:i,depthTest:o,scale:a,lineWidth:s,fixed:d,axisColors:f,hoveredColor:p,opacity:m,onDragStart:h,onDrag:y,onDragEnd:v,userData:g}=c.useContext(L),x=(0,l.A)(e=>e.size),w=(0,l.A)(e=>e.controls),b=c.useRef(null),S=c.useRef(null),E=c.useRef(null),M=c.useRef(1),C=c.useRef(1),P=c.useRef(null),[A,z]=c.useState(!1),_=d?1.2:1.2*a,R=c.useCallback(r=>{n&&(b.current.innerText=`${C.current.toFixed(2)}`,b.current.style.display="block"),r.stopPropagation();let i=new u.Matrix4().extractRotation(S.current.matrixWorld),o=r.point.clone(),s=new u.Vector3().setFromMatrixPosition(S.current.matrixWorld),l=e.clone().applyMatrix4(i).normalize(),c=S.current.matrixWorld.clone(),f=c.clone().invert(),p=d?1/el(S.current.getWorldPosition(ec),a,r.camera,x):1;P.current={clickPoint:o,dir:l,mPLG:c,mPLGInv:f,offsetMultiplier:p},h({component:"Sphere",axis:t,origin:s,directions:[l]}),w&&(w.enabled=!1),r.target.setPointerCapture(r.pointerId)},[n,w,e,h,t,d,a,x]),U=c.useCallback(e=>{if(e.stopPropagation(),A||z(!0),P.current){let{clickPoint:i,dir:o,mPLG:s,mPLGInv:l,offsetMultiplier:c}=P.current,[u,f]=(null==r?void 0:r[t])||[1e-5,void 0],p=ed(i,o,e.ray.origin,e.ray.direction),m=p*c,h=d?m:m/a,v=Math.pow(2,.2*h);e.shiftKey&&(v=Math.round(10*v)/10),v=Math.max(v,u/M.current),void 0!==f&&(v=Math.min(v,f/M.current)),C.current=M.current*v,E.current.position.set(0,_+m,0),n&&(b.current.innerText=`${C.current.toFixed(2)}`),ep.set(1,1,1),ep.setComponent(t,v),em.makeScale(ep.x,ep.y,ep.z).premultiply(s).multiply(l),y(em)}},[n,_,y,A,r,t]),O=c.useCallback(e=>{n&&(b.current.style.display="none"),e.stopPropagation(),M.current=C.current,P.current=null,E.current.position.set(0,_,0),v(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[n,w,v,_]),D=c.useCallback(e=>{e.stopPropagation(),z(!1)},[]),{radius:B,matrixL:I}=c.useMemo(()=>{let t=d?s/a*1.8:a/22.5,r=new u.Quaternion().setFromUnitVectors(ef,e.clone().normalize()),n=new u.Matrix4().makeRotationFromQuaternion(r);return{radius:t,matrixL:n}},[e,a,s,d]),T=A?p:f[t];return c.createElement("group",{ref:S},c.createElement("group",{matrix:I,matrixAutoUpdate:!1,onPointerDown:R,onPointerMove:U,onPointerUp:O,onPointerOut:D},n&&c.createElement(V.V,{position:[0,_/2,0]},c.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:b})),c.createElement("mesh",{ref:E,position:[0,_,0],renderOrder:500,userData:g},c.createElement("sphereGeometry",{args:[B,12,12]}),c.createElement("meshBasicMaterial",{transparent:!0,depthTest:o,color:T,opacity:m,polygonOffset:!0,polygonOffsetFactor:-10}))))},ey=new u.Matrix4,ev=new u.Matrix4,eg=new u.Matrix4,ex=new u.Matrix4,ew=new u.Matrix4,eb=new u.Matrix4,eS=new u.Matrix4,eE=new u.Matrix4,eM=new u.Matrix4,eC=new u.Box3,eP=new u.Box3,eA=new u.Vector3,ez=new u.Vector3,e_=new u.Vector3,eR=new u.Vector3,eU=new u.Vector3,eV=new u.Vector3(1,0,0),eL=new u.Vector3(0,1,0),eO=new u.Vector3(0,0,1),eD=c.forwardRef(({matrix:e,onDragStart:t,onDrag:r,onDragEnd:n,autoTransform:i=!0,anchor:o,disableAxes:a=!1,disableSliders:d=!1,disableRotations:f=!1,disableScaling:p=!1,activeAxes:m=[!0,!0,!0],offset:h=[0,0,0],rotation:y=[0,0,0],scale:v=1,lineWidth:g=4,fixed:x=!1,translationLimits:w,rotationLimits:b,scaleLimits:S,depthTest:E=!0,axisColors:M=["#ff2060","#20df80","#2080ff"],hoveredColor:C="#ffff40",annotations:P=!1,annotationsClass:A,opacity:z=1,visible:_=!0,userData:R,children:U,...V},O)=>{let D=(0,l.A)(e=>e.invalidate),B=c.useRef(null),I=c.useRef(null),T=c.useRef(null),W=c.useRef(null),k=c.useRef([0,0,0]),j=c.useRef(new u.Vector3(1,1,1)),N=c.useRef(new u.Vector3(1,1,1));c.useLayoutEffect(()=>{o&&(W.current.updateWorldMatrix(!0,!0),ex.copy(W.current.matrixWorld).invert(),eC.makeEmpty(),W.current.traverse(e=>{e.geometry&&(e.geometry.boundingBox||e.geometry.computeBoundingBox(),eb.copy(e.matrixWorld).premultiply(ex),eP.copy(e.geometry.boundingBox),eP.applyMatrix4(eb),eC.union(eP))}),eA.copy(eC.max).add(eC.min).multiplyScalar(.5),ez.copy(eC.max).sub(eC.min).multiplyScalar(.5),e_.copy(ez).multiply(new u.Vector3(...o)).add(eA),eR.set(...h).add(e_),T.current.position.copy(eR),D())});let H=c.useMemo(()=>({onDragStart:e=>{ey.copy(I.current.matrix),ev.copy(I.current.matrixWorld),t&&t(e),D()},onDrag:e=>{eg.copy(B.current.matrixWorld),ex.copy(eg).invert(),ew.copy(ev).premultiply(e),eb.copy(ew).premultiply(ex),eS.copy(ey).invert(),eE.copy(eb).multiply(eS),i&&I.current.matrix.copy(eb),r&&r(eb,eE,ew,e),D()},onDragEnd:()=>{n&&n(),D()},translation:k,translationLimits:w,rotationLimits:b,axisColors:M,hoveredColor:C,opacity:z,scale:v,lineWidth:g,fixed:x,depthTest:E,userData:R,annotations:P,annotationsClass:A}),[t,r,n,k,w,b,S,E,v,g,x,...M,C,z,R,i,P,A]),G=new u.Vector3;return(0,l.C)(t=>{if(x){let e=el(T.current.getWorldPosition(G),v,t.camera,t.size);j.current.setScalar(e)}e&&e instanceof u.Matrix4&&(I.current.matrix=e),I.current.updateWorldMatrix(!0,!0),eM.makeRotationFromEuler(T.current.rotation).setPosition(T.current.position).premultiply(I.current.matrixWorld),N.current.setFromMatrixScale(eM),eU.copy(j.current).divide(N.current),(Math.abs(T.current.scale.x-eU.x)>1e-4||Math.abs(T.current.scale.y-eU.y)>1e-4||Math.abs(T.current.scale.z-eU.z)>1e-4)&&(T.current.scale.copy(eU),t.invalidate())}),c.useImperativeHandle(O,()=>I.current,[]),c.createElement(L.Provider,{value:H},c.createElement("group",{ref:B},c.createElement("group",(0,s.Z)({ref:I,matrix:e,matrixAutoUpdate:!1},V),c.createElement("group",{visible:_,ref:T,position:h,rotation:y},!a&&m[0]&&c.createElement(F,{axis:0,direction:eV}),!a&&m[1]&&c.createElement(F,{axis:1,direction:eL}),!a&&m[2]&&c.createElement(F,{axis:2,direction:eO}),!d&&m[0]&&m[1]&&c.createElement(er,{axis:2,dir1:eV,dir2:eL}),!d&&m[0]&&m[2]&&c.createElement(er,{axis:1,dir1:eO,dir2:eV}),!d&&m[2]&&m[1]&&c.createElement(er,{axis:0,dir1:eL,dir2:eO}),!f&&m[0]&&m[1]&&c.createElement(K,{axis:2,dir1:eV,dir2:eL}),!f&&m[0]&&m[2]&&c.createElement(K,{axis:1,dir1:eO,dir2:eV}),!f&&m[2]&&m[1]&&c.createElement(K,{axis:0,dir1:eL,dir2:eO}),!p&&m[0]&&c.createElement(eh,{axis:0,direction:eV}),!p&&m[1]&&c.createElement(eh,{axis:1,direction:eL}),!p&&m[2]&&c.createElement(eh,{axis:2,direction:eO})),c.createElement("group",{ref:W},U))))})},85470:function(e,t,r){r.d(t,{Z:function(){return y}});var n,i,o=r(67294);let a=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(n,i,o);return o},s=e=>e?a(e):a;var l=r(52798);let{useDebugValue:c}=o,{useSyncExternalStoreWithSelector:u}=l,d=!1,f=e=>e,p=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?s(e):e,r=(e,r)=>(function(e,t=f,r){r&&!d&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),d=!0);let n=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return c(n),n})(t,e,r);return Object.assign(r,t),r},m=e=>e?p(e):p,h="undefined"!=typeof window&&(null!=(n=window.document)&&n.createElement||(null==(i=window.navigator)?void 0:i.product)==="ReactNative")?o.useLayoutEffect:o.useEffect;function y(){let e=m(e=>({current:[],version:0,set:e}));return{In:({children:t})=>{let r=e(e=>e.set),n=e(e=>e.version);return h(()=>{r(e=>({version:e.version+1}))},[]),h(()=>(r(({current:e})=>({current:[...e,t]})),()=>r(({current:e})=>({current:e.filter(e=>e!==t)}))),[t,n]),null},Out:()=>{let t=e(e=>e.current);return o.createElement(o.Fragment,null,t)}}}},53250:function(e,t,r){/**
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
//# sourceMappingURL=9183-f63d42946776e88d.js.map