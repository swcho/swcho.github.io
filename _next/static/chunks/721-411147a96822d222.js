"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{70917:function(e,t,r){r.d(t,{F4:function(){return u}});var n,i,o=r(87685),a=r(67294);r(27278);var s=r(85662);r(48711),r(8679);var l=function(e,t){var r=arguments;if(null==t||!o.h.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,i=Array(n);i[0]=o.E,i[1]=(0,o.c)(e,t);for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)};function c(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.O)(t)}function u(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}n=l||(l={}),i||(i=n.JSX||(n.JSX={}))},29839:function(e,t,r){r.d(t,{i:function(){return c}});var n=r(67294),i=r(48407),o=Object.defineProperty,a=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t,r)=>(a(e,"symbol"!=typeof t?t+"":t,r),r);class l{constructor(e=Math){s(this,"grad3",[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]),s(this,"grad4",[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]]),s(this,"p",[]),s(this,"perm",[]),s(this,"simplex",[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]),s(this,"dot",(e,t,r)=>e[0]*t+e[1]*r),s(this,"dot3",(e,t,r,n)=>e[0]*t+e[1]*r+e[2]*n),s(this,"dot4",(e,t,r,n,i)=>e[0]*t+e[1]*r+e[2]*n+e[3]*i),s(this,"noise",(e,t)=>{let r,n,i;let o=(e+t)*(.5*(Math.sqrt(3)-1)),a=Math.floor(e+o),s=Math.floor(t+o),l=(3-Math.sqrt(3))/6,c=(a+s)*l,u=e-(a-c),d=t-(s-c),p=0,f=1;u>d&&(p=1,f=0);let m=u-p+l,h=d-f+l,y=u-1+2*l,v=d-1+2*l,x=255&a,g=255&s,w=this.perm[x+this.perm[g]]%12,b=this.perm[x+p+this.perm[g+f]]%12,M=this.perm[x+1+this.perm[g+1]]%12,S=.5-u*u-d*d;S<0?r=0:(S*=S,r=S*S*this.dot(this.grad3[w],u,d));let E=.5-m*m-h*h;E<0?n=0:(E*=E,n=E*E*this.dot(this.grad3[b],m,h));let P=.5-y*y-v*v;return P<0?i=0:(P*=P,i=P*P*this.dot(this.grad3[M],y,v)),70*(r+n+i)}),s(this,"noise3d",(e,t,r)=>{let n,i,o,a,s,l,c,u,d,p;let f=(e+t+r)*(1/3),m=Math.floor(e+f),h=Math.floor(t+f),y=Math.floor(r+f),v=1/6,x=(m+h+y)*v,g=e-(m-x),w=t-(h-x),b=r-(y-x);g>=w?w>=b?(s=1,l=0,c=0,u=1,d=1,p=0):(g>=b?(s=1,l=0,c=0):(s=0,l=0,c=1),u=1,d=0,p=1):w<b?(s=0,l=0,c=1,u=0,d=1,p=1):g<b?(s=0,l=1,c=0,u=0,d=1,p=1):(s=0,l=1,c=0,u=1,d=1,p=0);let M=g-s+v,S=w-l+v,E=b-c+v,P=g-u+2*v,A=w-d+2*v,C=b-p+2*v,_=g-1+3*v,z=w-1+3*v,R=b-1+3*v,L=255&m,U=255&h,O=255&y,V=this.perm[L+this.perm[U+this.perm[O]]]%12,B=this.perm[L+s+this.perm[U+l+this.perm[O+c]]]%12,I=this.perm[L+u+this.perm[U+d+this.perm[O+p]]]%12,W=this.perm[L+1+this.perm[U+1+this.perm[O+1]]]%12,T=.6-g*g-w*w-b*b;T<0?n=0:(T*=T,n=T*T*this.dot3(this.grad3[V],g,w,b));let D=.6-M*M-S*S-E*E;D<0?i=0:(D*=D,i=D*D*this.dot3(this.grad3[B],M,S,E));let F=.6-P*P-A*A-C*C;F<0?o=0:(F*=F,o=F*F*this.dot3(this.grad3[I],P,A,C));let k=.6-_*_-z*z-R*R;return k<0?a=0:(k*=k,a=k*k*this.dot3(this.grad3[W],_,z,R)),32*(n+i+o+a)}),s(this,"noise4d",(e,t,r,n)=>{let i,o,a,s,l,c,u,d,p,f,m,h,y,v,x,g,w;let b=this.grad4,M=this.simplex,S=this.perm,E=(5-Math.sqrt(5))/20,P=(e+t+r+n)*((Math.sqrt(5)-1)/4),A=Math.floor(e+P),C=Math.floor(t+P),_=Math.floor(r+P),z=Math.floor(n+P),R=(A+C+_+z)*E,L=e-(A-R),U=t-(C-R),O=r-(_-R),V=n-(z-R),B=L>U?32:0,I=L>O?16:0,W=U>O?8:0,T=L>V?4:0,D=U>V?2:0,F=O>V?1:0,k=B+I+W+T+D+F;c=M[k][0]>=3?1:0,u=M[k][1]>=3?1:0,d=M[k][2]>=3?1:0,p=M[k][3]>=3?1:0,f=M[k][0]>=2?1:0,m=M[k][1]>=2?1:0,h=M[k][2]>=2?1:0,y=M[k][3]>=2?1:0,v=M[k][0]>=1?1:0,x=M[k][1]>=1?1:0,g=M[k][2]>=1?1:0,w=M[k][3]>=1?1:0;let j=L-c+E,H=U-u+E,N=O-d+E,$=V-p+E,G=L-f+2*E,q=U-m+2*E,Z=O-h+2*E,J=V-y+2*E,Q=L-v+3*E,X=U-x+3*E,K=O-g+3*E,Y=V-w+3*E,ee=L-1+4*E,et=U-1+4*E,er=O-1+4*E,en=V-1+4*E,ei=255&A,eo=255&C,ea=255&_,es=255&z,el=S[ei+S[eo+S[ea+S[es]]]]%32,ec=S[ei+c+S[eo+u+S[ea+d+S[es+p]]]]%32,eu=S[ei+f+S[eo+m+S[ea+h+S[es+y]]]]%32,ed=S[ei+v+S[eo+x+S[ea+g+S[es+w]]]]%32,ep=S[ei+1+S[eo+1+S[ea+1+S[es+1]]]]%32,ef=.6-L*L-U*U-O*O-V*V;ef<0?i=0:(ef*=ef,i=ef*ef*this.dot4(b[el],L,U,O,V));let em=.6-j*j-H*H-N*N-$*$;em<0?o=0:(em*=em,o=em*em*this.dot4(b[ec],j,H,N,$));let eh=.6-G*G-q*q-Z*Z-J*J;eh<0?a=0:(eh*=eh,a=eh*eh*this.dot4(b[eu],G,q,Z,J));let ey=.6-Q*Q-X*X-K*K-Y*Y;ey<0?s=0:(ey*=ey,s=ey*ey*this.dot4(b[ed],Q,X,K,Y));let ev=.6-ee*ee-et*et-er*er-en*en;return ev<0?l=0:(ev*=ev,l=ev*ev*this.dot4(b[ep],ee,et,er,en)),27*(i+o+a+s+l)});for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());for(let e=0;e<512;e++)this.perm[e]=this.p[255&e]}}let c=n.forwardRef(({intensity:e=1,decay:t,decayRate:r=.65,maxYaw:o=.1,maxPitch:a=.1,maxRoll:s=.1,yawFrequency:c=.1,pitchFrequency:u=.1,rollFrequency:d=.1},p)=>{let f=(0,i.A)(e=>e.camera),m=(0,i.A)(e=>e.controls),h=n.useRef(e),y=n.useRef(f.rotation.clone()),[v]=n.useState(()=>new l),[x]=n.useState(()=>new l),[g]=n.useState(()=>new l),w=()=>{(h.current<0||h.current>1)&&(h.current=h.current<0?0:1)};return n.useImperativeHandle(p,()=>({getIntensity:()=>h.current,setIntensity:e=>{h.current=e,w()}}),[]),n.useEffect(()=>{if(m){let e=()=>void(y.current=f.rotation.clone());return m.addEventListener("change",e),e(),()=>void m.removeEventListener("change",e)}},[f,m]),(0,i.C)((e,n)=>{let i=Math.pow(h.current,2),l=o*i*v.noise(e.clock.elapsedTime*c,1),p=a*i*x.noise(e.clock.elapsedTime*u,1),m=s*i*g.noise(e.clock.elapsedTime*d,1);f.rotation.set(y.current.x+p,y.current.y+l,y.current.z+m),t&&h.current>0&&(h.current-=r*n,w())}),null})},70587:function(e,t,r){r.d(t,{q:function(){return a}});var n=r(99477),i=r(67294),o=r(48407);function a({all:e,scene:t,camera:r}){let a=(0,o.A)(({gl:e})=>e),s=(0,o.A)(({camera:e})=>e),l=(0,o.A)(({scene:e})=>e);return i.useLayoutEffect(()=>{let i=[];e&&(t||l).traverse(e=>{!1===e.visible&&(i.push(e),e.visible=!0)}),a.compile(t||l,r||s);let o=new n.WebGLCubeRenderTarget(128),c=new n.CubeCamera(.01,1e5,o);c.update(a,t||l),o.dispose(),i.forEach(e=>e.visible=!1)},[]),null}},44671:function(e,t,r){let n,i,o,a;r.d(t,{J:function(){return eq}});var s,l,c=r(87462),u=r(48407),d=r(67294),p=r(99477);let f=new p.Box3,m=new p.Vector3;class h extends p.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new p.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new p.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new p.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new p.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new p.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new p.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new p.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new p.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new p.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new p.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),f.setFromBufferAttribute(t),this.boundingBox.union(f))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new p.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)m.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(m)),m.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(m));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class y extends p.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:p.UniformsUtils.clone(p.UniformsUtils.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new p.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${parseInt(p.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let v=new p.Vector3,x=new p.Vector3,g=new p.Vector4,w=new p.Vector4,b=new p.Vector4,M=new p.Vector3,S=new p.Matrix4,E=new p.Line3,P=new p.Vector3,A=new p.Box3,C=new p.Sphere,_=new p.Vector4;function z(e,t,r){return _.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),_.multiplyScalar(1/_.w),_.x=a/r.width,_.y=a/r.height,_.applyMatrix4(e.projectionMatrixInverse),_.multiplyScalar(1/_.w),Math.abs(Math.max(_.x,_.y))}class R extends p.Mesh{constructor(e=new h,t=new y({color:16777215*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)v.fromBufferAttribute(t,e),x.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+v.distanceTo(x);let i=new p.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new p.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new p.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let r,s;let l=this.material.worldUnits,c=e.camera;null!==c||l||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let d=this.matrixWorld,f=this.geometry,m=this.material;if(a=m.linewidth+u,i=f.attributes.instanceStart,o=f.attributes.instanceEnd,null===f.boundingSphere&&f.computeBoundingSphere(),C.copy(f.boundingSphere).applyMatrix4(d),l)r=.5*a;else{let e=Math.max(c.near,C.distanceToPoint(n.origin));r=z(c,e,m.resolution)}if(C.radius+=r,!1!==n.intersectsSphere(C)){if(null===f.boundingBox&&f.computeBoundingBox(),A.copy(f.boundingBox).applyMatrix4(d),l)s=.5*a;else{let e=Math.max(c.near,A.distanceToPoint(n.origin));s=z(c,e,m.resolution)}A.expandByScalar(s),!1!==n.intersectsBox(A)&&(l?function(e,t){for(let r=0,s=i.count;r<s;r++){E.start.fromBufferAttribute(i,r),E.end.fromBufferAttribute(o,r);let s=new p.Vector3,l=new p.Vector3;n.distanceSqToSegment(E.start,E.end,l,s);let c=l.distanceTo(s)<.5*a;c&&t.push({point:l,pointOnLine:s,distance:n.origin.distanceTo(l),object:e,face:null,faceIndex:r,uv:null,uv2:null})}}(this,t):function(e,t,r){let i=t.projectionMatrix,o=e.material,s=o.resolution,l=e.matrixWorld,c=e.geometry,u=c.attributes.instanceStart,d=c.attributes.instanceEnd,f=-t.near;n.at(1,b),b.w=1,b.applyMatrix4(t.matrixWorldInverse),b.applyMatrix4(i),b.multiplyScalar(1/b.w),b.x*=s.x/2,b.y*=s.y/2,b.z=0,M.copy(b),S.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0,o=u.count;t<o;t++){g.fromBufferAttribute(u,t),w.fromBufferAttribute(d,t),g.w=1,w.w=1,g.applyMatrix4(S),w.applyMatrix4(S);let o=g.z>f&&w.z>f;if(o)continue;if(g.z>f){let e=g.z-w.z,t=(g.z-f)/e;g.lerp(w,t)}else if(w.z>f){let e=w.z-g.z,t=(w.z-f)/e;w.lerp(g,t)}g.applyMatrix4(i),w.applyMatrix4(i),g.multiplyScalar(1/g.w),w.multiplyScalar(1/w.w),g.x*=s.x/2,g.y*=s.y/2,w.x*=s.x/2,w.y*=s.y/2,E.start.copy(g),E.start.z=0,E.end.copy(w),E.end.z=0;let c=E.closestPointToPointParameter(M,!0);E.at(c,P);let m=p.MathUtils.lerp(g.z,w.z,c),h=m>=-1&&m<=1,y=M.distanceTo(P)<.5*a;if(h&&y){E.start.fromBufferAttribute(u,t),E.end.fromBufferAttribute(d,t),E.start.applyMatrix4(l),E.end.applyMatrix4(l);let i=new p.Vector3,o=new p.Vector3;n.distanceSqToSegment(E.start,E.end,o,i),r.push({point:o,pointOnLine:i,distance:n.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,uv2:null})}}}(this,c,t))}}}class L extends h{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class U extends R{constructor(e=new L,t=new y({color:16777215*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let O=d.forwardRef(function({points:e,color:t=16777215,vertexColors:r,linewidth:n,lineWidth:i,segments:o,dashed:a,...s},l){var f,m;let v=(0,u.A)(e=>e.size),x=d.useMemo(()=>o?new R:new U,[o]),[g]=d.useState(()=>new y),w=(null==r||null==(f=r[0])?void 0:f.length)===4?4:3,b=d.useMemo(()=>{let n=o?new h:new L,i=e.map(e=>{let t=Array.isArray(e);return e instanceof p.Vector3||e instanceof p.Vector4?[e.x,e.y,e.z]:e instanceof p.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=16777215;let e=r.map(e=>e instanceof p.Color?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,o,r,w]);return d.useLayoutEffect(()=>{x.computeLineDistances()},[e,x]),d.useLayoutEffect(()=>{a?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[a,g]),d.useEffect(()=>()=>b.dispose(),[b]),d.createElement("primitive",(0,c.Z)({object:x,ref:l},s),d.createElement("primitive",{object:b,attach:"geometry"}),d.createElement("primitive",(0,c.Z)({object:g,attach:"material",color:t,vertexColors:!!r,resolution:[v.width,v.height],linewidth:null!==(m=null!=n?n:i)&&void 0!==m?m:1,dashed:a,transparent:4===w},s)))});var V=r(20745);let B=new p.Vector3,I=new p.Vector3,W=new p.Vector3,T=new p.Vector2;function D(e,t,r){let n=B.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,o=r.height/2;return[n.x*i+i,-(n.y*o)+o]}let F=e=>1e-10>Math.abs(e)?0:e;function k(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=F(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let j=(s=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>k(e,s)),H=(l=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>k(e,l(t),"translate(-50%,-50%)")),N=d.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:o,fullscreen:a,portal:s,distanceFactor:l,sprite:f=!1,transform:m=!1,occlude:h,onOcclude:y,castShadow:v,receiveShadow:x,material:g,geometry:w,zIndexRange:b=[16777271,0],calculatePosition:M=D,as:S="div",wrapperClass:E,pointerEvents:P="auto",...A},C)=>{let{gl:_,camera:z,scene:R,size:L,raycaster:U,events:O,viewport:k}=(0,u.A)(),[N]=d.useState(()=>document.createElement(S)),$=d.useRef(),G=d.useRef(null),q=d.useRef(0),Z=d.useRef([0,0]),J=d.useRef(null),Q=d.useRef(null),X=(null==s?void 0:s.current)||O.connected||_.domElement.parentNode,K=d.useRef(null),Y=d.useRef(!1),ee=d.useMemo(()=>{var e;return h&&"blending"!==h||Array.isArray(h)&&h.length&&(e=h[0])&&"object"==typeof e&&"current"in e},[h]);d.useLayoutEffect(()=>{let e=_.domElement;h&&"blending"===h?(e.style.zIndex=`${Math.floor(b[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[h]),d.useLayoutEffect(()=>{if(G.current){let e=$.current=V.createRoot(N);if(R.updateMatrixWorld(),m)N.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=M(G.current,z,L);N.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return X&&(i?X.prepend(N):X.appendChild(N)),()=>{X&&X.removeChild(N),e.unmount()}}},[X,m]),d.useLayoutEffect(()=>{E&&(N.className=E)},[E]);let et=d.useMemo(()=>m?{position:"absolute",top:0,left:0,width:L.width,height:L.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...a&&{top:-L.height/2,left:-L.width/2,width:L.width,height:L.height},...r},[r,o,a,L,m]),er=d.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);d.useLayoutEffect(()=>{var t,i;Y.current=!1,m?null==(t=$.current)||t.render(d.createElement("div",{ref:J,style:et},d.createElement("div",{ref:Q,style:er},d.createElement("div",{ref:C,className:n,style:r,children:e})))):null==(i=$.current)||i.render(d.createElement("div",{ref:C,style:et,className:n,children:e}))});let en=d.useRef(!0);(0,u.C)(e=>{if(G.current){z.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);let e=m?Z.current:M(G.current,z,L);if(m||Math.abs(q.current-z.zoom)>t||Math.abs(Z.current[0]-e[0])>t||Math.abs(Z.current[1]-e[1])>t){let t=function(e,t){let r=B.setFromMatrixPosition(e.matrixWorld),n=I.setFromMatrixPosition(t.matrixWorld),i=r.sub(n),o=t.getWorldDirection(W);return i.angleTo(o)>Math.PI/2}(G.current,z),r=!1;ee&&(Array.isArray(h)?r=h.map(e=>e.current):"blending"!==h&&(r=[R]));let n=en.current;if(r){let e=function(e,t,r,n){let i=B.setFromMatrixPosition(e.matrixWorld),o=i.clone();o.project(t),T.set(o.x,o.y),r.setFromCamera(T,t);let a=r.intersectObjects(n,!0);if(a.length){let e=a[0].distance,t=i.distanceTo(r.ray.origin);return t<e}return!0}(G.current,z,U,r);en.current=e&&!t}else en.current=!t;n!==en.current&&(y?y(!en.current):N.style.display=en.current?"block":"none");let i=Math.floor(b[0]/2),o=h?ee?[b[0],i]:[i-1,0]:b;if(N.style.zIndex=`${function(e,t,r){if(t instanceof p.PerspectiveCamera||t instanceof p.OrthographicCamera){let n=B.setFromMatrixPosition(e.matrixWorld),i=I.setFromMatrixPosition(t.matrixWorld),o=n.distanceTo(i),a=(r[1]-r[0])/(t.far-t.near),s=r[1]-a*t.far;return Math.round(a*o+s)}}(G.current,z,o)}`,m){let[e,t]=[L.width/2,L.height/2],r=z.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:o,bottom:a,right:s}=z,c=j(z.matrixWorldInverse),u=n?`scale(${r})translate(${F(-(s+o)/2)}px,${F((i+a)/2)}px)`:`translateZ(${r}px)`,d=G.current.matrixWorld;f&&((d=z.matrixWorldInverse.clone().transpose().copyPosition(d).scale(G.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),N.style.width=L.width+"px",N.style.height=L.height+"px",N.style.perspective=n?"":`${r}px`,J.current&&Q.current&&(J.current.style.transform=`${u}${c}translate(${e}px,${t}px)`,Q.current.style.transform=H(d,1/((l||10)/400)))}else{let t=void 0===l?1:function(e,t){if(t instanceof p.OrthographicCamera)return t.zoom;if(!(t instanceof p.PerspectiveCamera))return 1;{let r=B.setFromMatrixPosition(e.matrixWorld),n=I.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,o=r.distanceTo(n);return 1/(2*Math.tan(i/2)*o)}}(G.current,z)*l;N.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Z.current=e,q.current=z.zoom}}if(!ee&&K.current&&!Y.current){if(m){if(J.current){let e=J.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=z;if(t||w)A.scale&&(Array.isArray(A.scale)?A.scale instanceof p.Vector3?K.current.scale.copy(A.scale.clone().divideScalar(1)):K.current.scale.set(1/A.scale[0],1/A.scale[1],1/A.scale[2]):K.current.scale.setScalar(1/A.scale));else{let t=(l||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;K.current.scale.set(r,n,1)}Y.current=!0}}}else{let t=N.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/k.factor,r=t.clientWidth*e,n=t.clientHeight*e;K.current.scale.set(r,n,1),Y.current=!0}K.current.lookAt(e.camera.position)}}});let ei=d.useMemo(()=>({vertexShader:m?void 0:`
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
      `}),[m]);return d.createElement("group",(0,c.Z)({},A,{ref:G}),h&&!ee&&d.createElement("mesh",{castShadow:v,receiveShadow:x,ref:K},w||d.createElement("planeGeometry",null),g||d.createElement("shaderMaterial",{side:p.DoubleSide,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))}),$=d.createContext(null),G=new p.Vector3,q=new p.Vector3,Z=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;G.copy(n).multiplyScalar(i/a).sub(t),q.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-G.dot(q)/G.dot(G);return s},J=new p.Vector3(0,1,0),Q=new p.Matrix4,X=({direction:e,axis:t})=>{let{translation:r,translationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:l,fixed:c,axisColors:f,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:x,userData:g}=d.useContext($),w=(0,u.A)(e=>e.controls),b=d.useRef(null),M=d.useRef(null),S=d.useRef(null),E=d.useRef(0),[P,A]=d.useState(!1),C=d.useCallback(n=>{i&&(b.current.innerText=`${r.current[t].toFixed(2)}`,b.current.style.display="block"),n.stopPropagation();let o=new p.Matrix4().extractRotation(M.current.matrixWorld),a=n.point.clone(),s=new p.Vector3().setFromMatrixPosition(M.current.matrixWorld),l=e.clone().applyMatrix4(o).normalize();S.current={clickPoint:a,dir:l},E.current=r.current[t],y({component:"Arrow",axis:t,origin:s,directions:[l]}),w&&(w.enabled=!1),n.target.setPointerCapture(n.pointerId)},[i,e,w,y,r,t]),_=d.useCallback(e=>{if(e.stopPropagation(),P||A(!0),S.current){let{clickPoint:o,dir:a}=S.current,[s,l]=(null==n?void 0:n[t])||[void 0,void 0],c=Z(o,a,e.ray.origin,e.ray.direction);void 0!==s&&(c=Math.max(c,s-E.current)),void 0!==l&&(c=Math.min(c,l-E.current)),r.current[t]=E.current+c,i&&(b.current.innerText=`${r.current[t].toFixed(2)}`),Q.makeTranslation(a.x*c,a.y*c,a.z*c),v(Q)}},[i,v,P,r,n,t]),z=d.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),S.current=null,x(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,x]),R=d.useCallback(e=>{e.stopPropagation(),A(!1)},[]),{cylinderLength:L,coneWidth:U,coneLength:V,matrixL:B}=d.useMemo(()=>{let t=c?l/s*1.6:s/20,r=c?.2:s/5,n=c?1-r:s-r,i=new p.Quaternion().setFromUnitVectors(J,e.clone().normalize()),o=new p.Matrix4().makeRotationFromQuaternion(i);return{cylinderLength:n,coneWidth:t,coneLength:r,matrixL:o}},[e,s,l,c]),I=P?m:f[t];return d.createElement("group",{ref:M},d.createElement("group",{matrix:B,matrixAutoUpdate:!1,onPointerDown:C,onPointerMove:_,onPointerUp:z,onPointerOut:R},i&&d.createElement(N,{position:[0,-V,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),d.createElement("mesh",{visible:!1,position:[0,(L+V)/2,0],userData:g},d.createElement("cylinderGeometry",{args:[1.4*U,1.4*U,L+V,8,1]})),d.createElement(O,{transparent:!0,raycast:()=>null,depthTest:a,points:[0,0,0,0,L,0],lineWidth:l,side:p.DoubleSide,color:I,opacity:h,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),d.createElement("mesh",{raycast:()=>null,position:[0,L+V/2,0],renderOrder:500},d.createElement("coneGeometry",{args:[U,V,24,1]}),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:I,opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},K=new p.Vector3,Y=new p.Vector3,ee=e=>180*e/Math.PI,et=e=>e*Math.PI/180,er=(e,t,r,n,i)=>{K.copy(e).sub(r),Y.copy(t).sub(r);let o=n.dot(n),a=i.dot(i),s=K.dot(n)/o,l=K.dot(i)/a,c=Y.dot(n)/o,u=Y.dot(i)/a;return Math.atan2(u,c)-Math.atan2(l,s)},en=(e,t)=>{let r=Math.floor(e/t);return e-(r=r<0?r+1:r)*t},ei=e=>{let t=en(e,2*Math.PI);return 1e-6>Math.abs(t)?0:(t<0&&(t+=2*Math.PI),t)},eo=new p.Matrix4,ea=new p.Vector3,es=new p.Ray,el=new p.Vector3,ec=({dir1:e,dir2:t,axis:r})=>{let{rotationLimits:n,annotations:i,annotationsClass:o,depthTest:a,scale:s,lineWidth:l,fixed:c,axisColors:f,hoveredColor:m,opacity:h,onDragStart:y,onDrag:v,onDragEnd:x,userData:g}=d.useContext($),w=(0,u.A)(e=>e.controls),b=d.useRef(null),M=d.useRef(null),S=d.useRef(0),E=d.useRef(0),P=d.useRef(null),[A,C]=d.useState(!1),_=d.useCallback(e=>{i&&(b.current.innerText=`${ee(E.current).toFixed(0)}\xba`,b.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),n=new p.Vector3().setFromMatrixPosition(M.current.matrixWorld),o=new p.Vector3().setFromMatrixColumn(M.current.matrixWorld,0).normalize(),a=new p.Vector3().setFromMatrixColumn(M.current.matrixWorld,1).normalize(),s=new p.Vector3().setFromMatrixColumn(M.current.matrixWorld,2).normalize(),l=new p.Plane().setFromNormalAndCoplanarPoint(s,n);P.current={clickPoint:t,origin:n,e1:o,e2:a,normal:s,plane:l},y({component:"Rotator",axis:r,origin:n,directions:[o,a,s]}),w&&(w.enabled=!1),e.target.setPointerCapture(e.pointerId)},[i,w,y,r]),z=d.useCallback(e=>{if(e.stopPropagation(),A||C(!0),P.current){let{clickPoint:t,origin:o,e1:a,e2:s,normal:l,plane:c}=P.current,[u,d]=(null==n?void 0:n[r])||[void 0,void 0];es.copy(e.ray),es.intersectPlane(c,el),es.direction.negate(),es.intersectPlane(c,el);let f=er(t,el,o,a,s),m=ee(f);e.shiftKey&&(f=et(m=10*Math.round(m/10))),void 0!==u&&void 0!==d&&d-u<2*Math.PI?(f=(f=ei(f))>Math.PI?f-2*Math.PI:f,f=p.MathUtils.clamp(f,u-S.current,d-S.current),E.current=S.current+f):(E.current=ei(S.current+f),E.current=E.current>Math.PI?E.current-2*Math.PI:E.current),i&&(m=ee(E.current),b.current.innerText=`${m.toFixed(0)}\xba`),eo.makeRotationAxis(l,f),ea.copy(o).applyMatrix4(eo).sub(o).negate(),eo.setPosition(ea),v(eo)}},[i,v,A,n,r]),R=d.useCallback(e=>{i&&(b.current.style.display="none"),e.stopPropagation(),S.current=E.current,P.current=null,x(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[i,w,x]),L=d.useCallback(e=>{e.stopPropagation(),C(!1)},[]),U=d.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new p.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),V=c?.65:.65*s,B=d.useMemo(()=>{let e=[];for(let t=0;t<=32;t++){let r=t*(Math.PI/2)/32;e.push(new p.Vector3(Math.cos(r)*V,Math.sin(r)*V,0))}return e},[V]);return d.createElement("group",{ref:M,onPointerDown:_,onPointerMove:z,onPointerUp:R,onPointerOut:L,matrix:U,matrixAutoUpdate:!1},i&&d.createElement(N,{position:[V,V,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:o,ref:b})),d.createElement(O,{points:B,lineWidth:4*l,visible:!1,userData:g}),d.createElement(O,{transparent:!0,raycast:()=>null,depthTest:a,points:B,lineWidth:l,side:p.DoubleSide,color:A?m:f[r],opacity:h,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},eu=(e,t,r)=>{let n=Math.abs(e.x)>=Math.abs(e.y)&&Math.abs(e.x)>=Math.abs(e.z)?0:Math.abs(e.y)>=Math.abs(e.x)&&Math.abs(e.y)>=Math.abs(e.z)?1:2,i=[0,1,2].sort((e,r)=>Math.abs(t.getComponent(r))-Math.abs(t.getComponent(e))),o=n===i[0]?i[1]:i[0],a=e.getComponent(n),s=e.getComponent(o),l=t.getComponent(n),c=t.getComponent(o),u=r.getComponent(n),d=r.getComponent(o),p=(d-u*(s/a))/(c-l*(s/a));return[(u-p*l)/a,p]},ed=new p.Ray,ep=new p.Vector3,ef=new p.Matrix4,em=({dir1:e,dir2:t,axis:r})=>{let{translation:n,translationLimits:i,annotations:o,annotationsClass:a,depthTest:s,scale:l,lineWidth:c,fixed:f,axisColors:m,hoveredColor:h,opacity:y,onDragStart:v,onDrag:x,onDragEnd:g,userData:w}=d.useContext($),b=(0,u.A)(e=>e.controls),M=d.useRef(null),S=d.useRef(null),E=d.useRef(null),P=d.useRef(0),A=d.useRef(0),[C,_]=d.useState(!1),z=d.useCallback(e=>{o&&(M.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`,M.current.style.display="block"),e.stopPropagation();let t=e.point.clone(),i=new p.Vector3().setFromMatrixPosition(S.current.matrixWorld),a=new p.Vector3().setFromMatrixColumn(S.current.matrixWorld,0).normalize(),s=new p.Vector3().setFromMatrixColumn(S.current.matrixWorld,1).normalize(),l=new p.Vector3().setFromMatrixColumn(S.current.matrixWorld,2).normalize(),c=new p.Plane().setFromNormalAndCoplanarPoint(l,i);E.current={clickPoint:t,e1:a,e2:s,plane:c},P.current=n.current[(r+1)%3],A.current=n.current[(r+2)%3],v({component:"Slider",axis:r,origin:i,directions:[a,s,l]}),b&&(b.enabled=!1),e.target.setPointerCapture(e.pointerId)},[o,b,v,r]),R=d.useCallback(e=>{if(e.stopPropagation(),C||_(!0),E.current){let{clickPoint:t,e1:a,e2:s,plane:l}=E.current,[c,u]=(null==i?void 0:i[(r+1)%3])||[void 0,void 0],[d,p]=(null==i?void 0:i[(r+2)%3])||[void 0,void 0];ed.copy(e.ray),ed.intersectPlane(l,ep),ed.direction.negate(),ed.intersectPlane(l,ep),ep.sub(t);let[f,m]=eu(a,s,ep);void 0!==c&&(f=Math.max(f,c-P.current)),void 0!==u&&(f=Math.min(f,u-P.current)),void 0!==d&&(m=Math.max(m,d-A.current)),void 0!==p&&(m=Math.min(m,p-A.current)),n.current[(r+1)%3]=P.current+f,n.current[(r+2)%3]=A.current+m,o&&(M.current.innerText=`${n.current[(r+1)%3].toFixed(2)}, ${n.current[(r+2)%3].toFixed(2)}`),ef.makeTranslation(f*a.x+m*s.x,f*a.y+m*s.y,f*a.z+m*s.z),x(ef)}},[o,x,C,n,i,r]),L=d.useCallback(e=>{o&&(M.current.style.display="none"),e.stopPropagation(),E.current=null,g(),b&&(b.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[o,b,g]),U=d.useCallback(e=>{e.stopPropagation(),_(!1)},[]),V=d.useMemo(()=>{let r=e.clone().normalize(),n=t.clone().normalize();return new p.Matrix4().makeBasis(r,n,r.clone().cross(n))},[e,t]),B=f?1/7:l/7,I=f?.225:.225*l,W=C?h:m[r],T=d.useMemo(()=>[new p.Vector3(0,0,0),new p.Vector3(0,I,0),new p.Vector3(I,I,0),new p.Vector3(I,0,0),new p.Vector3(0,0,0)],[I]);return d.createElement("group",{ref:S,matrix:V,matrixAutoUpdate:!1},o&&d.createElement(N,{position:[0,0,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:a,ref:M})),d.createElement("group",{position:[1.7*B,1.7*B,0]},d.createElement("mesh",{visible:!0,onPointerDown:z,onPointerMove:R,onPointerUp:L,onPointerOut:U,scale:I,userData:w},d.createElement("planeGeometry",null),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:s,color:W,polygonOffset:!0,polygonOffsetFactor:-10,side:p.DoubleSide,fog:!1})),d.createElement(O,{position:[-I/2,-I/2,0],transparent:!0,depthTest:s,points:T,lineWidth:c,color:W,opacity:y,polygonOffset:!0,polygonOffsetFactor:-10,userData:w,fog:!1})))},eh=new p.Vector3,ey=new p.Vector3,ev=new p.Vector3,ex=(e,t,r)=>{let n=r.width/2,i=r.height/2;t.updateMatrixWorld(!1);let o=e.project(t);return o.x=o.x*n+n,o.y=-(o.y*i)+i,o},eg=(e,t,r,n=1)=>{let i=eh.set(e.x/r.width*2-1,-(2*(e.y/r.height))+1,n);return i.unproject(t),i},ew=(e,t,r,n)=>{let i=ex(ev.copy(e),r,n),o=0;for(let a=0;a<2;++a){let s=ey.copy(i).setComponent(a,i.getComponent(a)+t),l=eg(s,r,n,s.z);o=Math.max(o,e.distanceTo(l))}return o},eb=new p.Vector3,eM=new p.Vector3,eS=(e,t,r,n)=>{let i=t.dot(t),o=t.dot(e)-t.dot(r),a=t.dot(n);if(0===a)return-o/i;eb.copy(n).multiplyScalar(i/a).sub(t),eM.copy(n).multiplyScalar(o/a).add(r).sub(e);let s=-eb.dot(eM)/eb.dot(eb);return s},eE=new p.Vector3(0,1,0),eP=new p.Vector3,eA=new p.Matrix4,eC=({direction:e,axis:t})=>{let{scaleLimits:r,annotations:n,annotationsClass:i,depthTest:o,scale:a,lineWidth:s,fixed:l,axisColors:c,hoveredColor:f,opacity:m,onDragStart:h,onDrag:y,onDragEnd:v,userData:x}=d.useContext($),g=(0,u.A)(e=>e.size),w=(0,u.A)(e=>e.controls),b=d.useRef(null),M=d.useRef(null),S=d.useRef(null),E=d.useRef(1),P=d.useRef(1),A=d.useRef(null),[C,_]=d.useState(!1),z=l?1.2:1.2*a,R=d.useCallback(r=>{n&&(b.current.innerText=`${P.current.toFixed(2)}`,b.current.style.display="block"),r.stopPropagation();let i=new p.Matrix4().extractRotation(M.current.matrixWorld),o=r.point.clone(),s=new p.Vector3().setFromMatrixPosition(M.current.matrixWorld),c=e.clone().applyMatrix4(i).normalize(),u=M.current.matrixWorld.clone(),d=u.clone().invert(),f=l?1/ew(M.current.getWorldPosition(eb),a,r.camera,g):1;A.current={clickPoint:o,dir:c,mPLG:u,mPLGInv:d,offsetMultiplier:f},h({component:"Sphere",axis:t,origin:s,directions:[c]}),w&&(w.enabled=!1),r.target.setPointerCapture(r.pointerId)},[n,w,e,h,t,l,a,g]),L=d.useCallback(e=>{if(e.stopPropagation(),C||_(!0),A.current){let{clickPoint:i,dir:o,mPLG:s,mPLGInv:c,offsetMultiplier:u}=A.current,[d,p]=(null==r?void 0:r[t])||[1e-5,void 0],f=eS(i,o,e.ray.origin,e.ray.direction),m=f*u,h=l?m:m/a,v=Math.pow(2,.2*h);e.shiftKey&&(v=Math.round(10*v)/10),v=Math.max(v,d/E.current),void 0!==p&&(v=Math.min(v,p/E.current)),P.current=E.current*v,S.current.position.set(0,z+m,0),n&&(b.current.innerText=`${P.current.toFixed(2)}`),eP.set(1,1,1),eP.setComponent(t,v),eA.makeScale(eP.x,eP.y,eP.z).premultiply(s).multiply(c),y(eA)}},[n,z,y,C,r,t]),U=d.useCallback(e=>{n&&(b.current.style.display="none"),e.stopPropagation(),E.current=P.current,A.current=null,S.current.position.set(0,z,0),v(),w&&(w.enabled=!0),e.target.releasePointerCapture(e.pointerId)},[n,w,v,z]),O=d.useCallback(e=>{e.stopPropagation(),_(!1)},[]),{radius:V,matrixL:B}=d.useMemo(()=>{let t=l?s/a*1.8:a/22.5,r=new p.Quaternion().setFromUnitVectors(eE,e.clone().normalize()),n=new p.Matrix4().makeRotationFromQuaternion(r);return{radius:t,matrixL:n}},[e,a,s,l]),I=C?f:c[t];return d.createElement("group",{ref:M},d.createElement("group",{matrix:B,matrixAutoUpdate:!1,onPointerDown:R,onPointerMove:L,onPointerUp:U,onPointerOut:O},n&&d.createElement(N,{position:[0,z/2,0]},d.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:b})),d.createElement("mesh",{ref:S,position:[0,z,0],renderOrder:500,userData:x},d.createElement("sphereGeometry",{args:[V,12,12]}),d.createElement("meshBasicMaterial",{transparent:!0,depthTest:o,color:I,opacity:m,polygonOffset:!0,polygonOffsetFactor:-10}))))},e_=new p.Matrix4,ez=new p.Matrix4,eR=new p.Matrix4,eL=new p.Matrix4,eU=new p.Matrix4,eO=new p.Matrix4,eV=new p.Matrix4,eB=new p.Matrix4,eI=new p.Matrix4,eW=new p.Box3,eT=new p.Box3,eD=new p.Vector3,eF=new p.Vector3,ek=new p.Vector3,ej=new p.Vector3,eH=new p.Vector3,eN=new p.Vector3(1,0,0),e$=new p.Vector3(0,1,0),eG=new p.Vector3(0,0,1),eq=d.forwardRef(({matrix:e,onDragStart:t,onDrag:r,onDragEnd:n,autoTransform:i=!0,anchor:o,disableAxes:a=!1,disableSliders:s=!1,disableRotations:l=!1,disableScaling:f=!1,activeAxes:m=[!0,!0,!0],offset:h=[0,0,0],rotation:y=[0,0,0],scale:v=1,lineWidth:x=4,fixed:g=!1,translationLimits:w,rotationLimits:b,scaleLimits:M,depthTest:S=!0,axisColors:E=["#ff2060","#20df80","#2080ff"],hoveredColor:P="#ffff40",annotations:A=!1,annotationsClass:C,opacity:_=1,visible:z=!0,userData:R,children:L,...U},O)=>{let V=(0,u.A)(e=>e.invalidate),B=d.useRef(null),I=d.useRef(null),W=d.useRef(null),T=d.useRef(null),D=d.useRef([0,0,0]),F=d.useRef(new p.Vector3(1,1,1)),k=d.useRef(new p.Vector3(1,1,1));d.useLayoutEffect(()=>{o&&(T.current.updateWorldMatrix(!0,!0),eL.copy(T.current.matrixWorld).invert(),eW.makeEmpty(),T.current.traverse(e=>{e.geometry&&(e.geometry.boundingBox||e.geometry.computeBoundingBox(),eO.copy(e.matrixWorld).premultiply(eL),eT.copy(e.geometry.boundingBox),eT.applyMatrix4(eO),eW.union(eT))}),eD.copy(eW.max).add(eW.min).multiplyScalar(.5),eF.copy(eW.max).sub(eW.min).multiplyScalar(.5),ek.copy(eF).multiply(new p.Vector3(...o)).add(eD),ej.set(...h).add(ek),W.current.position.copy(ej),V())});let j=d.useMemo(()=>({onDragStart:e=>{e_.copy(I.current.matrix),ez.copy(I.current.matrixWorld),t&&t(e),V()},onDrag:e=>{eR.copy(B.current.matrixWorld),eL.copy(eR).invert(),eU.copy(ez).premultiply(e),eO.copy(eU).premultiply(eL),eV.copy(e_).invert(),eB.copy(eO).multiply(eV),i&&I.current.matrix.copy(eO),r&&r(eO,eB,eU,e),V()},onDragEnd:()=>{n&&n(),V()},translation:D,translationLimits:w,rotationLimits:b,axisColors:E,hoveredColor:P,opacity:_,scale:v,lineWidth:x,fixed:g,depthTest:S,userData:R,annotations:A,annotationsClass:C}),[t,r,n,D,w,b,M,S,v,x,g,...E,P,_,R,i,A,C]),H=new p.Vector3;return(0,u.C)(t=>{if(g){let e=ew(W.current.getWorldPosition(H),v,t.camera,t.size);F.current.setScalar(e)}e&&e instanceof p.Matrix4&&(I.current.matrix=e),I.current.updateWorldMatrix(!0,!0),eI.makeRotationFromEuler(W.current.rotation).setPosition(W.current.position).premultiply(I.current.matrixWorld),k.current.setFromMatrixScale(eI),eH.copy(F.current).divide(k.current),(Math.abs(W.current.scale.x-eH.x)>1e-4||Math.abs(W.current.scale.y-eH.y)>1e-4||Math.abs(W.current.scale.z-eH.z)>1e-4)&&(W.current.scale.copy(eH),t.invalidate())}),d.useImperativeHandle(O,()=>I.current,[]),d.createElement($.Provider,{value:j},d.createElement("group",{ref:B},d.createElement("group",(0,c.Z)({ref:I,matrix:e,matrixAutoUpdate:!1},U),d.createElement("group",{visible:z,ref:W,position:h,rotation:y},!a&&m[0]&&d.createElement(X,{axis:0,direction:eN}),!a&&m[1]&&d.createElement(X,{axis:1,direction:e$}),!a&&m[2]&&d.createElement(X,{axis:2,direction:eG}),!s&&m[0]&&m[1]&&d.createElement(em,{axis:2,dir1:eN,dir2:e$}),!s&&m[0]&&m[2]&&d.createElement(em,{axis:1,dir1:eG,dir2:eN}),!s&&m[2]&&m[1]&&d.createElement(em,{axis:0,dir1:e$,dir2:eG}),!l&&m[0]&&m[1]&&d.createElement(ec,{axis:2,dir1:eN,dir2:e$}),!l&&m[0]&&m[2]&&d.createElement(ec,{axis:1,dir1:eG,dir2:eN}),!l&&m[2]&&m[1]&&d.createElement(ec,{axis:0,dir1:e$,dir2:eG}),!f&&m[0]&&d.createElement(eC,{axis:0,direction:eN}),!f&&m[1]&&d.createElement(eC,{axis:1,direction:e$}),!f&&m[2]&&d.createElement(eC,{axis:2,direction:eG})),d.createElement("group",{ref:T},L))))})},82729:function(e,t,r){r.d(t,{_:function(){return n}});function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);
//# sourceMappingURL=721-411147a96822d222.js.map