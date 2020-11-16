(()=>{var Na=Object.defineProperty,pu=e=>Na(e,"__esModule",{value:!0}),Oa=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),mu=(e,t)=>{pu(e);for(var n in t)Na(e,n,{get:t[n],enumerable:!0})},$c=Oa((Vv,Qc)=>{"use strict";Qc.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),fu=Oa(Fv=>{mu(Fv,{Main:()=>ar});class ar{static getInstance(){return ar.instance||new ar}constructor(){ar.instance=this,this._model=new hu,this._sceneManager=new Ze,this.init()}init(){this._dropManager=new du(this._sceneManager.domElement),this._dropManager.onFileSelected=async e=>{await this._sceneManager.init(),this._sceneManager.loadModel(e)}}get scene(){return this._sceneManager}get model(){return this._model}}const jy=ar.getInstance()});const gu="122",vu=0,Fa=1,yu=2,Ba=1,xu=2,pr=3,Mn=0,it=1,fi=2,Ua=1,En=0,mr=1,ka=2,Ga=3,za=4,bu=5,pi=100,_u=101,wu=102,Ha=103,Va=104,Mu=200,Eu=201,Tu=202,Su=203,Wa=204,ja=205,Au=206,Ru=207,Lu=208,Cu=209,Pu=210,Iu=0,Du=1,Nu=2,uo=3,Ou=4,Fu=5,Bu=6,Uu=7,Kr=0,ku=1,Gu=2,mi=0,zu=1,Hu=2,Vu=3,Wu=4,ju=5,qa=300,ho=301,fo=302,Xa=303,Ya=304,Qr=306,po=307,Wn=1e3,ut=1001,gr=1002,Ye=1003,$r=1004,es=1005,je=1006,mo=1007,jn=1008,Ct=1009,qu=1010,Xu=1011,ts=1012,Yu=1013,ns=1014,Pt=1015,Tn=1016,Zu=1017,Ju=1018,Ku=1019,vr=1020,Qu=1021,It=1022,Dt=1023,$u=1024,eh=1025,go=Dt,gi=1026,yr=1027,th=1028,nh=1029,ih=1030,rh=1031,sh=1032,oh=1033,Za=33776,Ja=33777,Ka=33778,Qa=33779,$a=35840,el=35841,tl=35842,nl=35843,ah=36196,il=37492,rl=37496,lh=37808,ch=37809,uh=37810,hh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,vh=37817,yh=37818,xh=37819,bh=37820,_h=37821,wh=36492,Mh=37840,Eh=37841,Th=37842,Sh=37843,Ah=37844,Rh=37845,Lh=37846,Ch=37847,Ph=37848,Ih=37849,Dh=37850,Nh=37851,Oh=37852,Fh=37853,Bh=2200,Uh=2201,kh=2202,vi=2300,qn=2301,vo=2302,yi=2400,xi=2401,is=2402,yo=2500,sl=2501,Gh=0,ol=1,xo=2,rt=3e3,Xn=3001,bo=3007,xr=3002,zh=3003,al=3004,ll=3005,cl=3006,Hh=3200,Vh=3201,Sn=0,Wh=1,_o=7680,jh=519,rs=35044,br=35048,ul="300 es";function un(){}Object.assign(un.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const n=this._listeners,i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const t=this._listeners,n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}}});const st=[];for(let e=0;e<256;e++)st[e]=(e<16?"0":"")+e.toString(16);let ss=1234567;const Te={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+"-"+st[t&255]+st[t>>8&255]+"-"+st[t>>16&15|64]+st[t>>24&255]+"-"+st[n&63|128]+st[n>>8&255]+"-"+st[n>>16&255]+st[n>>24&255]+st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255];return r.toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(ss=e%2147483647),ss=ss*16807%2147483647,(ss-1)/2147483646},degToRad:function(e){return e*Te.DEG2RAD},radToDeg:function(e){return e*Te.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((t+i)/2),d=o((t+i)/2),u=s((t-i)/2),f=o((t-i)/2),h=s((i-t)/2),m=o((i-t)/2);switch(r){case"XYX":e.set(a*d,l*u,l*f,a*c);break;case"YZY":e.set(l*f,a*d,l*u,a*c);break;case"ZXZ":e.set(l*u,l*f,a*d,a*c);break;case"XZX":e.set(a*d,l*m,l*h,a*c);break;case"YXY":e.set(l*h,a*d,l*m,a*c);break;case"ZYZ":e.set(l*m,l*h,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class ie{constructor(e=0,t=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class mt{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,a,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=a,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],a=n[6],l=n[1],c=n[4],d=n[7],u=n[2],f=n[5],h=n[8],m=i[0],y=i[3],v=i[6],g=i[1],p=i[4],D=i[7],A=i[2],B=i[5],E=i[8];return r[0]=s*m+o*g+a*A,r[3]=s*y+o*p+a*B,r[6]=s*v+o*D+a*E,r[1]=l*m+c*g+d*A,r[4]=l*y+c*p+d*B,r[7]=l*v+c*D+d*E,r[2]=u*m+f*g+h*A,r[5]=u*y+f*p+h*B,r[8]=u*v+f*D+h*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*s*c-t*o*l-n*r*c+n*o*a+i*r*l-i*s*a}getInverse(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const n=e.elements,i=this.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7],f=n[8],h=f*l-c*u,m=c*d-f*a,y=u*a-l*d,v=r*h+s*m+o*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return i[0]=h*g,i[1]=(o*u-f*s)*g,i[2]=(c*s-o*l)*g,i[3]=m*g,i[4]=(f*r-o*d)*g,i[5]=(o*a-c*r)*g,i[6]=y*g,i[7]=(s*d-u*r)*g,i[8]=(l*r-s*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).getInverse(this).transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const a=Math.cos(r),l=Math.sin(r);this.set(n*a,n*l,-n*(a*s+l*o)+s+e,-i*l,i*a,-i*(-l*s+a*o)+o+t,0,0,1)}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],o=i[6],a=i[1],l=i[4],c=i[7];return i[0]=t*r+n*a,i[3]=t*s+n*l,i[6]=t*o+n*c,i[1]=-n*r+t*a,i[4]=-n*s+t*l,i[7]=-n*o+t*c,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}}let bi;const Yn={getDataURL:function(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let qh=0;function He(e,t,n,i,r,s,o,a,l,c){Object.defineProperty(this,"id",{value:qh++}),this.uuid=Te.generateUUID(),this.name="",this.image=e!==void 0?e:He.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:He.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:ut,this.wrapT=i!==void 0?i:ut,this.magFilter=r!==void 0?r:je,this.minFilter=s!==void 0?s:jn,this.anisotropy=l!==void 0?l:1,this.format=o!==void 0?o:Dt,this.internalFormat=null,this.type=a!==void 0?a:Ct,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c!==void 0?c:rt,this.version=0,this.onUpdate=null}He.DEFAULT_IMAGE=void 0;He.DEFAULT_MAPPING=qa;He.prototype=Object.assign(Object.create(un.prototype),{constructor:He,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Te.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(Yn.getDataURL(i[s]))}else r=Yn.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case ut:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case ut:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(He.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});class Ue{constructor(e=0,t=0,n=0,i=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const s=.01,o=.1,a=e.elements,l=a[0],c=a[4],d=a[8],u=a[1],f=a[5],h=a[9],m=a[2],y=a[6],v=a[10];if(Math.abs(c-u)<s&&Math.abs(d-m)<s&&Math.abs(h-y)<s){if(Math.abs(c+u)<o&&Math.abs(d+m)<o&&Math.abs(h+y)<o&&Math.abs(l+f+v-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const p=(l+1)/2,D=(f+1)/2,A=(v+1)/2,B=(c+u)/4,E=(d+m)/4,H=(h+y)/4;return p>D&&p>A?p<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(p),i=B/n,r=E/n):D>A?D<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(D),n=B/i,r=H/i):A<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=H/r),this.set(n,i,r,t),this}let g=Math.sqrt((y-h)*(y-h)+(d-m)*(d-m)+(u-c)*(u-c));return Math.abs(g)<.001&&(g=1),this.x=(y-h)/g,this.y=(d-m)/g,this.z=(u-c)/g,this.w=Math.acos((l+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Nt(e,t,n){this.width=e,this.height=t,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t),n=n||{},this.texture=new He(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Nt.prototype=Object.assign(Object.create(un.prototype),{constructor:Nt,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function hl(e,t,n){Nt.call(this,e,t,n),this.samples=4}hl.prototype=Object.assign(Object.create(Nt.prototype),{constructor:hl,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Nt.prototype.copy.call(this,e),this.samples=e.samples,this}});class bt{constructor(e=0,t=0,n=0,i=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return n.copy(e).slerp(t,i)}static slerpFlat(e,t,n,i,r,s,o){let a=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3];const u=r[s+0],f=r[s+1],h=r[s+2],m=r[s+3];if(d!==m||a!==u||l!==f||c!==h){let y=1-o;const v=a*u+l*f+c*h+d*m,g=v>=0?1:-1,p=1-v*v;if(p>Number.EPSILON){const A=Math.sqrt(p),B=Math.atan2(A,v*g);y=Math.sin(y*B)/A,o=Math.sin(o*B)/A}const D=o*g;if(a=a*y+u*D,l=l*y+f*D,c=c*y+h*D,d=d*y+m*D,y===1-o){const A=1/Math.sqrt(a*a+l*l+c*c+d*d);a*=A,l*=A,c*=A,d*=A}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],a=n[i+1],l=n[i+2],c=n[i+3],d=r[s],u=r[s+1],f=r[s+2],h=r[s+3];return e[t]=o*h+c*d+a*f-l*u,e[t+1]=a*h+c*u+l*d-o*f,e[t+2]=l*h+c*f+o*u-a*d,e[t+3]=c*h-o*d-a*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,a=Math.sin,l=o(n/2),c=o(i/2),d=o(r/2),u=a(n/2),f=a(i/2),h=a(r/2);switch(s){case"XYZ":this._x=u*c*d+l*f*h,this._y=l*f*d-u*c*h,this._z=l*c*h+u*f*d,this._w=l*c*d-u*f*h;break;case"YXZ":this._x=u*c*d+l*f*h,this._y=l*f*d-u*c*h,this._z=l*c*h-u*f*d,this._w=l*c*d+u*f*h;break;case"ZXY":this._x=u*c*d-l*f*h,this._y=l*f*d+u*c*h,this._z=l*c*h+u*f*d,this._w=l*c*d-u*f*h;break;case"ZYX":this._x=u*c*d-l*f*h,this._y=l*f*d+u*c*h,this._z=l*c*h-u*f*d,this._w=l*c*d+u*f*h;break;case"YZX":this._x=u*c*d+l*f*h,this._y=l*f*d+u*c*h,this._z=l*c*h-u*f*d,this._w=l*c*d-u*f*h;break;case"XZY":this._x=u*c*d-l*f*h,this._y=l*f*d-u*c*h,this._z=l*c*h+u*f*d,this._w=l*c*d+u*f*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-a)*f,this._y=(r-l)*f,this._z=(s-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(c-a)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(s-i)/f,this._x=(r+l)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){const n=1e-6;let i=e.dot(t)+1;return i<n?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,a=t._y,l=t._z,c=t._w;return this._x=n*c+s*o+i*l-r*a,this._y=i*c+s*a+r*o-n*l,this._z=r*c+s*l+n*a-i*o,this._w=s*c-n*o-i*a-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),d=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=s*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class R{constructor(e=0,t=0,n=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,a=e.w,l=a*t+s*i-o*n,c=a*n+o*t-r*i,d=a*i+r*n-s*t,u=-r*t-s*n-o*i;return this.x=l*a+u*-r+c*-o-d*-s,this.y=c*a+u*-s+d*-r-l*-o,this.z=d*a+u*-o+l*-s-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,a=t.z;return this.x=i*a-r*o,this.y=r*s-n*a,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Te.clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const wo=new R,dl=new bt;class qt{constructor(e,t){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new R(Infinity,Infinity,Infinity),this.max=t!==void 0?t:new R(-Infinity,-Infinity,-Infinity)}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,s=-Infinity,o=-Infinity;for(let a=0,l=e.length;a<l;a+=3){const c=e[a],d=e[a+1],u=e[a+2];c<t&&(t=c),d<n&&(n=d),u<i&&(i=u),c>r&&(r=c),d>s&&(s=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,s=-Infinity,o=-Infinity;for(let a=0,l=e.count;a<l;a++){const c=e.getX(a),d=e.getY(a),u=e.getZ(a);c<t&&(t=c),d<n&&(n=d),u<i&&(i=u),c>r&&(r=c),d>s&&(s=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new R),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new R),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox),Eo.applyMatrix4(e.matrixWorld),this.union(Eo));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new R),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),os.subVectors(this.max,wr),_i.subVectors(e.a,wr),wi.subVectors(e.b,wr),Mi.subVectors(e.c,wr),An.subVectors(wi,_i),Rn.subVectors(Mi,wi),Zn.subVectors(_i,Mi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Zn.z,Zn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Zn.z,0,-Zn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Zn.y,Zn.x,0];return Mo(t,_i,wi,Mi,os)?(t=[1,0,0,0,1,0,0,0,1],Mo(t,_i,wi,Mi,os)?(as.crossVectors(An,Rn),t=[as.x,as.y,as.z],Mo(t,_i,wi,Mi,os)):!1):!1}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new R),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){const t=_r.copy(e).clamp(this.min,this.max);return t.sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Mo(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){Jn.fromArray(e,s);const a=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=t.dot(Jn),c=n.dot(Jn),d=i.dot(Jn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const hn=[new R,new R,new R,new R,new R,new R,new R,new R],_r=new R,Eo=new qt,_i=new R,wi=new R,Mi=new R,An=new R,Rn=new R,Zn=new R,wr=new R,os=new R,as=new R,Jn=new R,Xh=new qt;class Xt{constructor(e,t){this.center=e!==void 0?e:new R,this.radius=t!==void 0?t:-1}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new R),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new qt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const dn=new R,To=new R,ls=new R,Ln=new R,So=new R,cs=new R,Ao=new R;class Mr{constructor(e,t){this.origin=e!==void 0?e:new R,this.direction=t!==void 0?t:new R(0,0,-1)}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new R),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new R),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){To.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ls),o=Ln.dot(this.direction),a=-Ln.dot(ls),l=Ln.lengthSq(),c=Math.abs(1-s*s);let d,u,f,h;if(c>0)if(d=s*a-o,u=s*o-a,h=r*c,d>=0)if(u>=-h)if(u<=h){const m=1/c;d*=m,u*=m,f=d*(d+s*u+2*o)+u*(s*d+u+2*a)+l}else u=r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+l;else u=-r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+l;else u<=-h?(d=Math.max(0,-(-s*r+o)),u=d>0?-r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+l):u<=h?(d=0,u=Math.min(Math.max(-r,-a),r),f=u*(u+2*a)+l):(d=Math.max(0,-(s*r+o)),u=d>0?r:Math.min(Math.max(-r,-a),r),f=-d*d+u*(u+2*a)+l);else u=s>0?-r:r,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ls).multiplyScalar(u).add(To),f}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,a=n+s;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,i,r,s,o,a;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),c>=0?(r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c),n>s||r>i?null:((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>i?null:((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,r){So.subVectors(t,e),cs.subVectors(n,e),Ao.crossVectors(So,cs);let s=this.direction.dot(Ao),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ln.subVectors(this.origin,e);const a=o*this.direction.dot(cs.crossVectors(Ln,cs));if(a<0)return null;const l=o*this.direction.dot(So.cross(Ln));if(l<0)return null;if(a+l>s)return null;const c=-o*Ln.dot(Ao);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Ae{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,a,l,c,d,u,f,h,m,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=s,v[9]=o,v[13]=a,v[2]=l,v[6]=c,v[10]=d,v[14]=u,v[3]=f,v[7]=h,v[11]=m,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),s=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=s*c,f=s*d,h=o*c,m=o*d;t[0]=a*c,t[4]=-a*d,t[8]=l,t[1]=f+h*l,t[5]=u-m*l,t[9]=-o*a,t[2]=m-u*l,t[6]=h+f*l,t[10]=s*a}else if(e.order==="YXZ"){const u=a*c,f=a*d,h=l*c,m=l*d;t[0]=u+m*o,t[4]=h*o-f,t[8]=s*l,t[1]=s*d,t[5]=s*c,t[9]=-o,t[2]=f*o-h,t[6]=m+u*o,t[10]=s*a}else if(e.order==="ZXY"){const u=a*c,f=a*d,h=l*c,m=l*d;t[0]=u-m*o,t[4]=-s*d,t[8]=h+f*o,t[1]=f+h*o,t[5]=s*c,t[9]=m-u*o,t[2]=-s*l,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){const u=s*c,f=s*d,h=o*c,m=o*d;t[0]=a*c,t[4]=h*l-f,t[8]=u*l+m,t[1]=a*d,t[5]=m*l+u,t[9]=f*l-h,t[2]=-l,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){const u=s*a,f=s*l,h=o*a,m=o*l;t[0]=a*c,t[4]=m-u*d,t[8]=h*d+f,t[1]=d,t[5]=s*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*d+h,t[10]=u-m*d}else if(e.order==="XZY"){const u=s*a,f=s*l,h=o*a,m=o*l;t[0]=a*c,t[4]=-d,t[8]=l*c,t[1]=u*d+m,t[5]=s*c,t[9]=f*d-h,t[2]=h*d-f,t[6]=o*c,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yh,e,Zh)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),Cn.crossVectors(n,_t),Cn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),Cn.crossVectors(n,_t)),Cn.normalize(),us.crossVectors(_t,Cn),i[0]=Cn.x,i[4]=us.x,i[8]=_t.x,i[1]=Cn.y,i[5]=us.y,i[9]=_t.y,i[2]=Cn.z,i[6]=us.z,i[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],a=n[8],l=n[12],c=n[1],d=n[5],u=n[9],f=n[13],h=n[2],m=n[6],y=n[10],v=n[14],g=n[3],p=n[7],D=n[11],A=n[15],B=i[0],E=i[4],H=i[8],Q=i[12],ee=i[1],le=i[5],I=i[9],G=i[13],O=i[2],z=i[6],k=i[10],F=i[14],V=i[3],q=i[7],oe=i[11],se=i[15];return r[0]=s*B+o*ee+a*O+l*V,r[4]=s*E+o*le+a*z+l*q,r[8]=s*H+o*I+a*k+l*oe,r[12]=s*Q+o*G+a*F+l*se,r[1]=c*B+d*ee+u*O+f*V,r[5]=c*E+d*le+u*z+f*q,r[9]=c*H+d*I+u*k+f*oe,r[13]=c*Q+d*G+u*F+f*se,r[2]=h*B+m*ee+y*O+v*V,r[6]=h*E+m*le+y*z+v*q,r[10]=h*H+m*I+y*k+v*oe,r[14]=h*Q+m*G+y*F+v*se,r[3]=g*B+p*ee+D*O+A*V,r[7]=g*E+p*le+D*z+A*q,r[11]=g*H+p*I+D*k+A*oe,r[15]=g*Q+p*G+D*F+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],a=e[9],l=e[13],c=e[2],d=e[6],u=e[10],f=e[14],h=e[3],m=e[7],y=e[11],v=e[15];return h*(+r*a*d-i*l*d-r*o*u+n*l*u+i*o*f-n*a*f)+m*(+t*a*f-t*l*u+r*s*u-i*s*f+i*l*c-r*a*c)+y*(+t*l*d-t*o*f-r*s*d+n*s*f+r*o*c-n*l*c)+v*(-i*o*c-t*a*d+t*o*u+i*s*d-n*s*u+n*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}getInverse(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const n=this.elements,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],d=i[6],u=i[7],f=i[8],h=i[9],m=i[10],y=i[11],v=i[12],g=i[13],p=i[14],D=i[15],A=h*p*u-g*m*u+g*d*y-c*p*y-h*d*D+c*m*D,B=v*m*u-f*p*u-v*d*y+l*p*y+f*d*D-l*m*D,E=f*g*u-v*h*u+v*c*y-l*g*y-f*c*D+l*h*D,H=v*h*d-f*g*d-v*c*m+l*g*m+f*c*p-l*h*p,Q=r*A+s*B+o*E+a*H;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/Q;return n[0]=A*ee,n[1]=(g*m*a-h*p*a-g*o*y+s*p*y+h*o*D-s*m*D)*ee,n[2]=(c*p*a-g*d*a+g*o*u-s*p*u-c*o*D+s*d*D)*ee,n[3]=(h*d*a-c*m*a-h*o*u+s*m*u+c*o*y-s*d*y)*ee,n[4]=B*ee,n[5]=(f*p*a-v*m*a+v*o*y-r*p*y-f*o*D+r*m*D)*ee,n[6]=(v*d*a-l*p*a-v*o*u+r*p*u+l*o*D-r*d*D)*ee,n[7]=(l*m*a-f*d*a+f*o*u-r*m*u-l*o*y+r*d*y)*ee,n[8]=E*ee,n[9]=(v*h*a-f*g*a-v*s*y+r*g*y+f*s*D-r*h*D)*ee,n[10]=(l*g*a-v*c*a+v*s*u-r*g*u-l*s*D+r*c*D)*ee,n[11]=(f*c*a-l*h*a-f*s*u+r*h*u+l*s*y-r*c*y)*ee,n[12]=H*ee,n[13]=(f*g*o-v*h*o+v*s*m-r*g*m-f*s*p+r*h*p)*ee,n[14]=(v*c*o-l*g*o-v*s*d+r*g*d+l*s*p-r*c*p)*ee,n[15]=(l*h*o-f*c*o+f*s*d-r*h*d-l*s*m+r*c*m)*ee,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,a=e.z,l=r*s,c=r*o;return this.set(l*s+n,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+n,c*a-i*s,0,l*a-i*o,c*a+i*s,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,l=r+r,c=s+s,d=o+o,u=r*l,f=r*c,h=r*d,m=s*c,y=s*d,v=o*d,g=a*l,p=a*c,D=a*d,A=n.x,B=n.y,E=n.z;return i[0]=(1-(m+v))*A,i[1]=(f+D)*A,i[2]=(h-p)*A,i[3]=0,i[4]=(f-D)*B,i[5]=(1-(u+v))*B,i[6]=(y+g)*B,i[7]=0,i[8]=(h+p)*E,i[9]=(y-g)*E,i[10]=(1-(u+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const s=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length(),a=this.determinant();a<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const l=1/r,c=1/s,d=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=d,kt.elements[9]*=d,kt.elements[10]*=d,t.setFromRotationMatrix(kt),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,a=2*r/(t-e),l=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),u=-(s+r)/(s-r),f=-2*s*r/(s-r);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,a=1/(t-e),l=1/(n-i),c=1/(s-r),d=(t+e)*a,u=(n+i)*l,f=(s+r)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new R,kt=new Ae,Yh=new R(0,0,0),Zh=new R(1,1,1),Cn=new R,us=new R,_t=new R;class hs{constructor(e=0,t=0,n=0,i=hs.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=Te.clamp,r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],f=r[6],h=r[10];t=t||this._order;switch(t){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(i(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}hs.DefaultOrder="XYZ";hs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const fl=new Ae,pl=new bt;class ml{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Jh=0;const gl=new R,Ti=new bt,fn=new Ae,ds=new R,Er=new R,Kh=new R,Qh=new bt,vl=new R(1,0,0),yl=new R(0,1,0),xl=new R(0,0,1),$h={type:"added"},bl={type:"removed"};function be(){Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Te.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DefaultUp.clone();const e=new R,t=new hs,n=new bt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new mt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=be.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}be.DefaultUp=new R(0,1,0);be.DefaultMatrixAutoUpdate=!0;be.prototype=Object.assign(Object.create(un.prototype),{constructor:be,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this},rotateOnWorldAxis:function(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this},rotateX:function(e){return this.rotateOnAxis(vl,e)},rotateY:function(e){return this.rotateOnAxis(yl,e)},rotateZ:function(e){return this.rotateOnAxis(xl,e)},translateOnAxis:function(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(vl,e)},translateY:function(e){return this.translateOnAxis(yl,e)},translateZ:function(e){return this.translateOnAxis(xl,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(fn.getInverse(this.matrixWorld))},lookAt:function(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Er,ds,this.up):fn.lookAt(ds,Er,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(fn),this.quaternion.premultiply(Ti.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($h)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bl)),this},clear:function(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bl)}return this.children.length=0,this},attach:function(e){return this.updateWorldMatrix(!0,!1),fn.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n],s=r.getObjectByProperty(e,t);if(s!==void 0)return s}return},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new R),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new bt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Kh),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new R),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Qh,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new R),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const d=a[l];r(e.shapes,d)}else r(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(t){const o=s(e.geometries),a=s(e.materials),l=s(e.textures),c=s(e.images),d=s(e.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d)}return n.object=i,n;function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});const Ro=new R,ed=new R,td=new mt;class pn{constructor(e,t){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new R(1,0,0),this.constant=t!==void 0?t:0}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ro.subVectors(n,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new R),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new R);const n=e.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?void 0:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new R),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||td.getNormalMatrix(e),i=this.coplanarPoint(Ro).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Gt=new R,mn=new R,Lo=new R,gn=new R,Si=new R,Ai=new R,_l=new R,Co=new R,Po=new R,Io=new R;class ht{constructor(e,t,n){this.a=e!==void 0?e:new R,this.b=t!==void 0?t:new R,this.c=n!==void 0?n:new R}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new R),i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gt.subVectors(i,t),mn.subVectors(n,t),Lo.subVectors(e,t);const s=Gt.dot(Gt),o=Gt.dot(mn),a=Gt.dot(Lo),l=mn.dot(mn),c=mn.dot(Lo),d=s*l-o*o;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new R),d===0)return r.set(-2,-1,-1);const u=1/d,f=(l*a-o*c)*u,h=(s*c-o*a)*u;return r.set(1-f-h,h,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,r,s,o,a){return this.getBarycoord(e,t,n,i,gn),a.set(0,0),a.addScaledVector(r,gn.x),a.addScaledVector(s,gn.y),a.addScaledVector(o,gn.z),a}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),mn.subVectors(e,t),Gt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Gt.cross(mn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new R),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new pn),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ht.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new R);const n=this.a,i=this.b,r=this.c;let s,o;Si.subVectors(i,n),Ai.subVectors(r,n),Co.subVectors(e,n);const a=Si.dot(Co),l=Ai.dot(Co);if(a<=0&&l<=0)return t.copy(n);Po.subVectors(e,i);const c=Si.dot(Po),d=Ai.dot(Po);if(c>=0&&d<=c)return t.copy(i);const u=a*d-c*l;if(u<=0&&a>=0&&c<=0)return s=a/(a-c),t.copy(n).addScaledVector(Si,s);Io.subVectors(e,r);const f=Si.dot(Io),h=Ai.dot(Io);if(h>=0&&f<=h)return t.copy(r);const m=f*l-a*h;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ai,o);const y=c*h-f*d;if(y<=0&&d-c>=0&&f-h>=0)return _l.subVectors(r,i),o=(d-c)/(d-c+(f-h)),t.copy(i).addScaledVector(_l,o);const v=1/(y+m+u);return s=m*v,o=u*v,t.copy(n).addScaledVector(Si,s).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Do(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function No(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}class me{constructor(e,t,n){return Object.defineProperty(this,"isColor",{value:!0}),t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Te.euclideanModulo(e,1),t=Te.clamp(t,0,1),n=Te.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Do(r,i,e+1/3),this.g=Do(r,i,e),this.b=Do(r,i,e-1/3)}return this}setStyle(e){function t(i){if(i===void 0)return;parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){const o=parseFloat(i[1])/360,a=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(o,a,l)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=wl[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t){t===void 0&&(t=2);const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let o,a;const l=(s+r)/2;if(s===r)o=0,a=0;else{const c=r-s;a=l<=.5?c/(r+s):c/(2-r-s);switch(r){case t:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-t)/c+2;break;case i:o=(t-n)/c+4;break}o/=6}return e.h=o,e.s=a,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(fs);const n=Te.lerp(zt.h,fs.h,t),i=Te.lerp(zt.s,fs.s,t),r=Te.lerp(zt.l,fs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}me.NAMES=wl;me.prototype.r=1;me.prototype.g=1;me.prototype.b=1;class Fo{constructor(e,t,n,i,r,s){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new R,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new me,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=s!==void 0?s:0}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}}let nd=0;function we(){Object.defineProperty(this,"id",{value:nd++}),this.uuid=Te.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=mr,this.side=Mn,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wa,this.blendDst=ja,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}we.prototype=Object.assign(Object.create(un.prototype),{constructor:we,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e===void 0)return;for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ua;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(we.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function wt(e){we.call(this),this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}wt.prototype=Object.create(we.prototype);wt.prototype.constructor=wt;wt.prototype.isMeshBasicMaterial=!0;wt.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const Ve=new R,ps=new ie;function Ee(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Ee.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new me),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new ie),t[n++]=s.x,t[n++]=s.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new R),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ue),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Bo(e,t,n){Ee.call(this,new Int8Array(e),t,n)}Bo.prototype=Object.create(Ee.prototype);Bo.prototype.constructor=Bo;function Uo(e,t,n){Ee.call(this,new Uint8Array(e),t,n)}Uo.prototype=Object.create(Ee.prototype);Uo.prototype.constructor=Uo;function ko(e,t,n){Ee.call(this,new Uint8ClampedArray(e),t,n)}ko.prototype=Object.create(Ee.prototype);ko.prototype.constructor=ko;function Go(e,t,n){Ee.call(this,new Int16Array(e),t,n)}Go.prototype=Object.create(Ee.prototype);Go.prototype.constructor=Go;function Tr(e,t,n){Ee.call(this,new Uint16Array(e),t,n)}Tr.prototype=Object.create(Ee.prototype);Tr.prototype.constructor=Tr;function zo(e,t,n){Ee.call(this,new Int32Array(e),t,n)}zo.prototype=Object.create(Ee.prototype);zo.prototype.constructor=zo;function Sr(e,t,n){Ee.call(this,new Uint32Array(e),t,n)}Sr.prototype=Object.create(Ee.prototype);Sr.prototype.constructor=Sr;function Oe(e,t,n){Ee.call(this,new Float32Array(e),t,n)}Oe.prototype=Object.create(Ee.prototype);Oe.prototype.constructor=Oe;function Ho(e,t,n){Ee.call(this,new Float64Array(e),t,n)}Ho.prototype=Object.create(Ee.prototype);Ho.prototype.constructor=Ho;class id{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const t=[];let n,i,r;const s=e.faces;for(i=0;i<s.length;i++){const o=s[i];o.materialIndex!==r&&(r=o.materialIndex,n!==void 0&&(n.count=i*3-n.start,t.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,t.push(n)),this.groups=t}fromGeometry(e){const t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,s=i[1]&&i[1].length>0,o=e.morphTargets,a=o.length;let l;if(a>0){l=[];for(let v=0;v<a;v++)l[v]={name:o[v].name,data:[]};this.morphTargets.position=l}const c=e.morphNormals,d=c.length;let u;if(d>0){u=[];for(let v=0;v<d;v++)u[v]={name:c[v].name,data:[]};this.morphTargets.normal=u}const f=e.skinIndices,h=e.skinWeights,m=f.length===n.length,y=h.length===n.length;n.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let v=0;v<t.length;v++){const g=t[v];this.vertices.push(n[g.a],n[g.b],n[g.c]);const p=g.vertexNormals;if(p.length===3)this.normals.push(p[0],p[1],p[2]);else{const A=g.normal;this.normals.push(A,A,A)}const D=g.vertexColors;if(D.length===3)this.colors.push(D[0],D[1],D[2]);else{const A=g.color;this.colors.push(A,A,A)}if(r===!0){const A=i[0][v];A!==void 0?this.uvs.push(A[0],A[1],A[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",v),this.uvs.push(new ie,new ie,new ie))}if(s===!0){const A=i[1][v];A!==void 0?this.uvs2.push(A[0],A[1],A[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",v),this.uvs2.push(new ie,new ie,new ie))}for(let A=0;A<a;A++){const B=o[A].vertices;l[A].data.push(B[g.a],B[g.b],B[g.c])}for(let A=0;A<d;A++){const B=c[A].vertexNormals[v];u[A].data.push(B.a,B.b,B.c)}m&&this.skinIndices.push(f[g.a],f[g.b],f[g.c]),y&&this.skinWeights.push(h[g.a],h[g.b],h[g.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Ml(e){if(e.length===0)return-Infinity;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}let rd=1;const Yt=new Ae,Vo=new be,Ri=new R,Mt=new qt,Ar=new qt,nt=new R;function Fe(){Object.defineProperty(this,"id",{value:rd+=2}),this.uuid=Te.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Fe.prototype=Object.assign(Object.create(un.prototype),{constructor:Fe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(Ml(e)>65535?Sr:Tr)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this},rotateY:function(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this},rotateZ:function(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this},translate:function(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this},scale:function(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this},lookAt:function(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this},setFromObject:function(e){const t=e.geometry;if(e.isPoints||e.isLine){const n=new Oe(t.vertices.length*3,3),i=new Oe(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){const r=new Oe(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&(t&&t.isGeometry&&this.fromGeometry(t));return this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new id().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){const t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new Ee(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){const n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new Ee(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){const n=new Float32Array(e.colors.length*3);this.setAttribute("color",new Ee(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){const n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new Ee(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){const n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new Ee(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(const n in e.morphTargets){const i=[],r=e.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],l=new Oe(a.data.length*3,3);l.name=a.name,i.push(l.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){const n=new Oe(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){const n=new Oe(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-Infinity,-Infinity,-Infinity),new R(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Mt.setFromBufferAttribute(r),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,Infinity);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(Mt.min,Ar.min),Mt.expandByPoint(nt),nt.addVectors(Mt.max,Ar.max),Mt.expandByPoint(nt)):(Mt.expandByPoint(Ar.min),Mt.expandByPoint(Ar.max))}Mt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)nt.fromBufferAttribute(o,l),a&&(Ri.fromBufferAttribute(e,l),nt.add(Ri)),i=Math.max(i,n.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const h=e.getX(u+0),m=e.getX(u+1),y=e.getX(u+2);i.fromBufferAttribute(t,h),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),c.subVectors(s,r),d.subVectors(i,r),c.cross(d),o.fromBufferAttribute(n,h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),o.add(c),a.add(c),l.add(c),n.setXYZ(h,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),d.subVectors(i,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i],s=r.array,o=e.attributes[i],a=o.array,l=o.itemSize*t,c=Math.min(a.length,s.length-l);for(let d=0,u=l;d<c;d++,u++)s[u]=a[d]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)},toNonIndexed:function(){function e(o,a){const l=o.array,c=o.itemSize,d=o.normalized,u=new l.constructor(a.length*c);let f=0,h=0;for(let m=0,y=a.length;m<y;m++){f=a[m]*c;for(let v=0;v<c;v++)u[h++]=l[f++]}return new Ee(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const t=new Fe,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=e(a,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const a=[],l=r[o];for(let c=0,d=l.length;c<d;c++){const u=l[c],f=e(u,n);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a],c=l.toJSON(e.data);l.name!==""&&(c.name=l.name),e.data.attributes[a]=c}const i={};let r=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=f.toJSON(e.data);f.name!==""&&(h.name=f.name),c.push(h)}c.length>0&&(i[a]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new Fe().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],d=r[l];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const El=new Ae,Kn=new Mr,Wo=new Xt,Pn=new R,In=new R,Dn=new R,jo=new R,qo=new R,Xo=new R,ms=new R,gs=new R,vs=new R,Li=new ie,Ci=new ie,Pi=new ie,Rr=new R,ys=new R;function ke(e,t){be.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new Fe,this.material=t!==void 0?t:new wt,this.updateMorphTargets()}ke.prototype=Object.assign(Object.create(be.prototype),{constructor:ke,isMesh:!0,copy:function(e){return be.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),e.ray.intersectsSphere(Wo)===!1)return;if(El.getInverse(r),Kn.copy(e.ray).applyMatrix4(El),n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,l=n.morphAttributes.position,c=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,y=f.length;m<y;m++){const v=f[m],g=i[v.materialIndex],p=Math.max(v.start,h.start),D=Math.min(v.start+v.count,h.start+h.count);for(let A=p,B=D;A<B;A+=3){const E=o.getX(A),H=o.getX(A+1),Q=o.getX(A+2);s=xs(this,g,e,Kn,a,l,c,d,u,E,H,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let v=m,g=y;v<g;v+=3){const p=o.getX(v),D=o.getX(v+1),A=o.getX(v+2);s=xs(this,i,e,Kn,a,l,c,d,u,p,D,A),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,y=f.length;m<y;m++){const v=f[m],g=i[v.materialIndex],p=Math.max(v.start,h.start),D=Math.min(v.start+v.count,h.start+h.count);for(let A=p,B=D;A<B;A+=3){const E=A,H=A+1,Q=A+2;s=xs(this,g,e,Kn,a,l,c,d,u,E,H,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let v=m,g=y;v<g;v+=3){const p=v,D=v+1,A=v+2;s=xs(this,i,e,Kn,a,l,c,d,u,p,D,A),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,l=n.faces;let c;const d=n.faceVertexUvs[0];d.length>0&&(c=d);for(let u=0,f=l.length;u<f;u++){const h=l[u],m=o?i[h.materialIndex]:i;if(m===void 0)continue;const y=a[h.a],v=a[h.b],g=a[h.c];if(s=Tl(this,m,e,Kn,y,v,g,Rr),s){if(c&&c[u]){const p=c[u];Li.copy(p[0]),Ci.copy(p[1]),Pi.copy(p[2]),s.uv=ht.getUV(Rr,y,v,g,Li,Ci,Pi,new ie)}s.face=h,s.faceIndex=u,t.push(s)}}}}});function Tl(e,t,n,i,r,s,o,a){let l;if(t.side===it?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side!==fi,a),l===null)return null;ys.copy(a),ys.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(ys);return c<n.near||c>n.far?null:{distance:c,point:ys.clone(),object:e}}function xs(e,t,n,i,r,s,o,a,l,c,d,u){Pn.fromBufferAttribute(r,c),In.fromBufferAttribute(r,d),Dn.fromBufferAttribute(r,u);const f=e.morphTargetInfluences;if(t.morphTargets&&s&&f){ms.set(0,0,0),gs.set(0,0,0),vs.set(0,0,0);for(let m=0,y=s.length;m<y;m++){const v=f[m],g=s[m];if(v===0)continue;jo.fromBufferAttribute(g,c),qo.fromBufferAttribute(g,d),Xo.fromBufferAttribute(g,u),o?(ms.addScaledVector(jo,v),gs.addScaledVector(qo,v),vs.addScaledVector(Xo,v)):(ms.addScaledVector(jo.sub(Pn),v),gs.addScaledVector(qo.sub(In),v),vs.addScaledVector(Xo.sub(Dn),v))}Pn.add(ms),In.add(gs),Dn.add(vs)}e.isSkinnedMesh&&(e.boneTransform(c,Pn),e.boneTransform(d,In),e.boneTransform(u,Dn));const h=Tl(e,t,n,i,Pn,In,Dn,Rr);if(h){a&&(Li.fromBufferAttribute(a,c),Ci.fromBufferAttribute(a,d),Pi.fromBufferAttribute(a,u),h.uv=ht.getUV(Rr,Pn,In,Dn,Li,Ci,Pi,new ie)),l&&(Li.fromBufferAttribute(l,c),Ci.fromBufferAttribute(l,d),Pi.fromBufferAttribute(l,u),h.uv2=ht.getUV(Rr,Pn,In,Dn,Li,Ci,Pi,new ie));const m=new Fo(c,d,u);ht.getNormal(Pn,In,Dn,m.normal),h.face=m}return h}class Sl extends Fe{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super();this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const a=[],l=[],c=[],d=[];let u=0,f=0;h("z","y","x",-1,-1,n,t,e,s,r,0),h("z","y","x",1,-1,n,t,-e,s,r,1),h("x","z","y",1,1,e,n,t,i,s,2),h("x","z","y",1,-1,e,n,-t,i,s,3),h("x","y","z",1,-1,e,t,n,i,r,4),h("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(d,2));function h(m,y,v,g,p,D,A,B,E,H,Q){const ee=D/E,le=A/H,I=D/2,G=A/2,O=B/2,z=E+1,k=H+1;let F=0,V=0;const q=new R;for(let oe=0;oe<k;oe++){const se=oe*le-G;for(let fe=0;fe<z;fe++){const ce=fe*ee-I;q[m]=ce*g,q[y]=se*p,q[v]=O,l.push(q.x,q.y,q.z),q[m]=0,q[y]=0,q[v]=B>0?1:-1,c.push(q.x,q.y,q.z),d.push(fe/E),d.push(1-oe/H),F+=1}}for(let oe=0;oe<H;oe++)for(let se=0;se<E;se++){const fe=u+se+z*oe,ce=u+se+z*(oe+1),ye=u+(se+1)+z*(oe+1),Ne=u+(se+1)+z*oe;a.push(fe,ce,Ne),a.push(ce,ye,Ne),V+=6}o.addGroup(f,V,Q),f+=V,u+=F}}}function Ii(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function lt(e){const t={};for(let n=0;n<e.length;n++){const i=Ii(e[n]);for(const r in i)t[r]=i[r]}return t}const sd={clone:Ii,merge:lt};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function gt(e){we.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}gt.prototype=Object.create(we.prototype);gt.prototype.constructor=gt;gt.prototype.isShaderMaterial=!0;gt.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this};gt.prototype.toJSON=function(e){const t=we.prototype.toJSON.call(this,e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i],s=r.value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function Nn(){be.call(this),this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}Nn.prototype=Object.assign(Object.create(be.prototype),{constructor:Nn,isCamera:!0,copy:function(e,t){return be.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new R),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){be.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){be.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function Qe(e,t,n,i){Nn.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Qe.prototype=Object.assign(Object.create(Nn.prototype),{constructor:Qe,isPerspectiveCamera:!0,copy:function(e,t){return Nn.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=Te.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(Te.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return Te.RAD2DEG*2*Math.atan(Math.tan(Te.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=this.near;let t=e*Math.tan(Te.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/l,i*=s.width/a,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=be.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const Di=90,Ni=1;function Oi(e,t,n){if(be.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Qe(Di,Ni,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new Qe(Di,Ni,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const s=new Qe(Di,Ni,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new R(0,1,0)),this.add(s);const o=new Qe(Di,Ni,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const a=new Qe(Di,Ni,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new R(0,0,1)),this.add(a);const l=new Qe(Di,Ni,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,-1)),this.add(l),this.update=function(c,d){this.parent===null&&this.updateMatrixWorld();const u=c.xr.enabled,f=c.getRenderTarget();c.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,c.setRenderTarget(n,0),c.render(d,i),c.setRenderTarget(n,1),c.render(d,r),c.setRenderTarget(n,2),c.render(d,s),c.setRenderTarget(n,3),c.render(d,o),c.setRenderTarget(n,4),c.render(d,a),n.texture.generateMipmaps=h,c.setRenderTarget(n,5),c.render(d,l),c.setRenderTarget(f),c.xr.enabled=u}}Oi.prototype=Object.create(be.prototype);Oi.prototype.constructor=Oi;function On(e,t,n,i,r,s,o,a,l,c){e=e!==void 0?e:[],t=t!==void 0?t:ho,o=o!==void 0?o:It,He.call(this,e,t,n,i,r,s,o,a,l,c),this.flipY=!1,this._needsFlipEnvMap=!0}On.prototype=Object.create(He.prototype);On.prototype.constructor=On;On.prototype.isCubeTexture=!0;Object.defineProperty(On.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function Qn(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),Nt.call(this,e,e,t),t=t||{},this.texture=new On(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture._needsFlipEnvMap=!1}Qn.prototype=Object.create(Nt.prototype);Qn.prototype.constructor=Qn;Qn.prototype.isWebGLCubeRenderTarget=!0;Qn.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=Dt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},i=new Sl(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:En});r.uniforms.tEquirect.value=t;const s=new ke(i,r),o=t.minFilter;t.minFilter===jn&&(t.minFilter=je);const a=new Oi(1,10,this);return a.update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};Qn.prototype.clear=function(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)};function Fi(e,t,n,i,r,s,o,a,l,c,d,u){He.call(this,null,s,o,a,l,c,i,r,d,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:Ye,this.minFilter=c!==void 0?c:Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Fi.prototype=Object.create(He.prototype);Fi.prototype.constructor=Fi;Fi.prototype.isDataTexture=!0;const Bi=new Xt,bs=new R;class _s{constructor(e,t,n,i,r,s){this.planes=[e!==void 0?e:new pn,t!==void 0?t:new pn,n!==void 0?n:new pn,i!==void 0?i:new pn,r!==void 0?r:new pn,s!==void 0?s:new pn]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}clone(){return new this.constructor().copy(this)}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],l=n[5],c=n[6],d=n[7],u=n[8],f=n[9],h=n[10],m=n[11],y=n[12],v=n[13],g=n[14],p=n[15];return t[0].setComponents(o-i,d-a,m-u,p-y).normalize(),t[1].setComponents(o+i,d+a,m+u,p+y).normalize(),t[2].setComponents(o+r,d+l,m+f,p+v).normalize(),t[3].setComponents(o-r,d-l,m-f,p-v).normalize(),t[4].setComponents(o-s,d-c,m-h,p-g).normalize(),t[5].setComponents(o+s,d+c,m+h,p+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++){const s=t[r].distanceToPoint(n);if(s<i)return!1}return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}}function Al(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){if(t===!0)return;if(n===null)return;i=e.requestAnimationFrame(r),t=!0},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function ld(e,t){const n=t.isWebGL2,i=new WeakMap;function r(c,d){const u=c.array,f=c.usage,h=e.createBuffer();e.bindBuffer(d,h),e.bufferData(d,u,f),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,u){const f=d.array,h=d.updateRange;e.bindBuffer(u,c),h.count===-1?e.bufferSubData(u,0,f):(n?e.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):e.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(e.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){var u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(s(f.buffer,c,d),f.version=c.version)}return{get:o,remove:a,update:l}}class Yo extends Fe{constructor(e,t,n,i){super();this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},e=e||1,t=t||1;const r=e/2,s=t/2,o=Math.floor(n)||1,a=Math.floor(i)||1,l=o+1,c=a+1,d=e/o,u=t/a,f=[],h=[],m=[],y=[];for(let v=0;v<c;v++){const g=v*u-s;for(let p=0;p<l;p++){const D=p*d-r;h.push(D,-g,0),m.push(0,0,1),y.push(p/o),y.push(1-v/a)}}for(let v=0;v<a;v++)for(let g=0;g<o;g++){const p=g+l*v,D=g+l*(v+1),A=g+1+l*(v+1),B=g+1+l*v;f.push(p,D,B),f.push(D,A,B)}this.setIndex(f),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(y,2))}}var cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd="vec3 transformed = vec3( position );",md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Md=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Zd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,vf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,xf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,wf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Df=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,jf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,qf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$f=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Pe={alphamap_fragment:cd,alphamap_pars_fragment:ud,alphatest_fragment:hd,aomap_fragment:dd,aomap_pars_fragment:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,bumpmap_pars_fragment:vd,clipping_planes_fragment:yd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:_d,color_fragment:wd,color_pars_fragment:Md,color_pars_vertex:Ed,color_vertex:Td,common:Sd,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Cd,emissivemap_fragment:Pd,emissivemap_pars_fragment:Id,encodings_fragment:Dd,encodings_pars_fragment:Nd,envmap_fragment:Od,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Bd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Zd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:zd,fog_fragment:Hd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Wd,lightmap_fragment:jd,lightmap_pars_fragment:qd,lights_lambert_vertex:Xd,lights_pars_begin:Yd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Kd,lights_phong_fragment:Qd,lights_phong_pars_fragment:$d,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:rf,lights_fragment_end:sf,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:uf,map_pars_fragment:hf,map_particle_fragment:df,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:vf,morphtarget_vertex:yf,normal_fragment_begin:xf,normal_fragment_maps:bf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Ef,packing:Tf,premultiplied_alpha_fragment:Sf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Lf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Df,shadowmap_vertex:Nf,shadowmask_pars_fragment:Of,skinbase_vertex:Ff,skinning_pars_vertex:Bf,skinning_vertex:Uf,skinnormal_vertex:kf,specularmap_fragment:Gf,specularmap_pars_fragment:zf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmissionmap_fragment:Wf,transmissionmap_pars_fragment:jf,uv_pars_fragment:qf,uv_pars_vertex:Xf,uv_vertex:Yf,uv2_pars_fragment:Zf,uv2_pars_vertex:Jf,uv2_vertex:Kf,worldpos_vertex:Qf,background_frag:$f,background_vert:ep,cube_frag:tp,cube_vert:np,depth_frag:ip,depth_vert:rp,distanceRGBA_frag:sp,distanceRGBA_vert:op,equirect_frag:ap,equirect_vert:lp,linedashed_frag:cp,linedashed_vert:up,meshbasic_frag:hp,meshbasic_vert:dp,meshlambert_frag:fp,meshlambert_vert:pp,meshmatcap_frag:mp,meshmatcap_vert:gp,meshtoon_frag:vp,meshtoon_vert:yp,meshphong_frag:xp,meshphong_vert:bp,meshphysical_frag:_p,meshphysical_vert:wp,normal_frag:Mp,normal_vert:Ep,points_frag:Tp,points_vert:Sp,shadow_frag:Ap,shadow_vert:Rp,sprite_frag:Lp,sprite_vert:Cp},ue={common:{diffuse:{value:new me(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new mt}},sprite:{diffuse:{value:new me(15658734)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new mt}}},Zt={basic:{uniforms:lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new me(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:lt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:lt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new me(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:lt([ue.points,ue.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:lt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:lt([ue.common,ue.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.normal_vert,fragmentShader:Pe.normal_frag},sprite:{uniforms:lt([ue.sprite,ue.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},cube:{uniforms:lt([ue.envmap,{opacity:{value:1}}]),vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:lt([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:lt([ue.lights,ue.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Zt.physical={uniforms:lt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ie(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new me(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function Pp(e,t,n,i,r){const s=new me(0);let o=0,a,l,c=null,d=0,u=null;function f(m,y,v,g){let p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=t.get(p));const D=e.xr,A=D.getSession&&D.getSession();A&&A.environmentBlendMode==="additive"&&(p=null),p===null?h(s,o):p&&p.isColor&&(h(p,1),g=!0),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===Qr)?(l===void 0&&(l=new ke(new Sl(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Ii(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(B,E,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),p.isWebGLCubeRenderTarget&&(p=p.texture),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||d!==p.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=p,d=p.version,u=e.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new ke(new Yo(2,2),new gt({name:"BackgroundMaterial",uniforms:Ii(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||d!==p.version||u!==e.toneMapping)&&(a.material.needsUpdate=!0,c=p,d=p.version,u=e.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function h(m,y){n.buffers.color.setClear(m.r,m.g,m.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(m,y){s.set(m),o=y!==void 0?y:1,h(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,h(s,o)},render:f}}function Ip(e,t,n,i){const r=e.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=y(null);let c=l;function d(O,z,k,F,V){let q=!1;if(o){const oe=m(F,k,z);c!==oe&&(c=oe,f(c.object)),q=v(F,V),q&&g(F,V)}else{const oe=z.wireframe===!0;(c.geometry!==F.id||c.program!==k.id||c.wireframe!==oe)&&(c.geometry=F.id,c.program=k.id,c.wireframe=oe,q=!0)}O.isInstancedMesh===!0&&(q=!0),V!==null&&n.update(V,34963),q&&(H(O,z,k,F),V!==null&&e.bindBuffer(34963,n.get(V).buffer))}function u(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function f(O){return i.isWebGL2?e.bindVertexArray(O):s.bindVertexArrayOES(O)}function h(O){return i.isWebGL2?e.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,z,k){const F=k.wireframe===!0;let V=a[O.id];V===void 0&&(V={},a[O.id]=V);let q=V[z.id];q===void 0&&(q={},V[z.id]=q);let oe=q[F];return oe===void 0&&(oe=y(u()),q[F]=oe),oe}function y(O){const z=[],k=[],F=[];for(let V=0;V<r;V++)z[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:F,object:O,attributes:{},index:null}}function v(O,z){const k=c.attributes,F=O.attributes;if(Object.keys(k).length!==Object.keys(F).length)return!0;for(const V in F){const q=k[V],oe=F[V];if(q===void 0)return!0;if(q.attribute!==oe)return!0;if(q.data!==oe.data)return!0}return c.index!==z}function g(O,z){const k={},F=O.attributes;for(const V in F){const q=F[V],oe={};oe.attribute=q,q.data&&(oe.data=q.data),k[V]=oe}c.attributes=k,c.index=z}function p(){const O=c.newAttributes;for(let z=0,k=O.length;z<k;z++)O[z]=0}function D(O){A(O,0)}function A(O,z){const k=c.newAttributes,F=c.enabledAttributes,V=c.attributeDivisors;if(k[O]=1,F[O]===0&&(e.enableVertexAttribArray(O),F[O]=1),V[O]!==z){const q=i.isWebGL2?e:t.get("ANGLE_instanced_arrays");q[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),V[O]=z}}function B(){const O=c.newAttributes,z=c.enabledAttributes;for(let k=0,F=z.length;k<F;k++)z[k]!==O[k]&&(e.disableVertexAttribArray(k),z[k]=0)}function E(O,z,k,F,V,q){i.isWebGL2===!0&&(k===5124||k===5125)?e.vertexAttribIPointer(O,z,k,V,q):e.vertexAttribPointer(O,z,k,F,V,q)}function H(O,z,k,F){if(i.isWebGL2===!1&&(O.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const V=F.attributes,q=k.getAttributes(),oe=z.defaultAttributeValues;for(const se in q){const fe=q[se];if(fe>=0){const ce=V[se];if(ce!==void 0){const ye=ce.normalized,Ne=ce.itemSize,$=n.get(ce);if($===void 0)continue;const w=$.buffer,x=$.type,P=$.bytesPerElement;if(ce.isInterleavedBufferAttribute){const M=ce.data,N=M.stride,T=ce.offset;M&&M.isInstancedInterleavedBuffer?(A(fe,M.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=M.meshPerAttribute*M.count)):D(fe),e.bindBuffer(34962,w),E(fe,Ne,x,ye,N*P,T*P)}else ce.isInstancedBufferAttribute?(A(fe,ce.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)):D(fe),e.bindBuffer(34962,w),E(fe,Ne,x,ye,0,0)}else if(se==="instanceMatrix"){const ye=n.get(O.instanceMatrix);if(ye===void 0)continue;const Ne=ye.buffer,$=ye.type;A(fe+0,1),A(fe+1,1),A(fe+2,1),A(fe+3,1),e.bindBuffer(34962,Ne),e.vertexAttribPointer(fe+0,4,$,!1,64,0),e.vertexAttribPointer(fe+1,4,$,!1,64,16),e.vertexAttribPointer(fe+2,4,$,!1,64,32),e.vertexAttribPointer(fe+3,4,$,!1,64,48)}else if(se==="instanceColor"){const ye=n.get(O.instanceColor);if(ye===void 0)continue;const Ne=ye.buffer,$=ye.type;A(fe,1),e.bindBuffer(34962,Ne),e.vertexAttribPointer(fe,3,$,!1,12,0)}else if(oe!==void 0){const ye=oe[se];if(ye!==void 0)switch(ye.length){case 2:e.vertexAttrib2fv(fe,ye);break;case 3:e.vertexAttrib3fv(fe,ye);break;case 4:e.vertexAttrib4fv(fe,ye);break;default:e.vertexAttrib1fv(fe,ye)}}}}B()}function Q(){I();for(const O in a){const z=a[O];for(const k in z){const F=z[k];for(const V in F)h(F[V].object),delete F[V];delete z[k]}delete a[O]}}function ee(O){if(a[O.id]===void 0)return;const z=a[O.id];for(const k in z){const F=z[k];for(const V in F)h(F[V].object),delete F[V];delete z[k]}delete a[O.id]}function le(O){for(const z in a){const k=a[z];if(k[O.id]===void 0)continue;const F=k[O.id];for(const V in F)h(F[V].object),delete F[V];delete k[O.id]}}function I(){if(G(),c===l)return;c=l,f(c.object)}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:G,dispose:Q,releaseStatesOfGeometry:ee,releaseStatesOfProgram:le,initAttributes:p,enableAttribute:D,disableUnusedAttributes:B}}function Dp(e,t,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){e.drawArrays(s,c,d),n.update(d,s,1)}function l(c,d,u){if(u===0)return;let f,h;if(r)f=e,h="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](s,c,d,u),n.update(d,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Np(e,t,n){let i;function r(){if(i!==void 0)return i;const E=t.get("EXT_texture_filter_anisotropic");return E!==null?i=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(E){if(E==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&(e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0)?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=n.logarithmicDepthBuffer===!0,d=e.getParameter(34930),u=e.getParameter(35660),f=e.getParameter(3379),h=e.getParameter(34076),m=e.getParameter(34921),y=e.getParameter(36347),v=e.getParameter(36348),g=e.getParameter(36349),p=u>0,D=o||!!t.get("OES_texture_float"),A=p&&D,B=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:D,floatVertexTextures:A,maxSamples:B}}function Op(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new pn,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,h){const m=u.length!==0||f||i!==0||r;return r=f,n=d(u,h,0),i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,h){const m=u.clippingPlanes,y=u.clipIntersection,v=u.clipShadows,g=e.get(u);if(!r||m===null||m.length===0||s&&!v)s?d(null):c();else{const p=s?0:i,D=p*4;let A=g.clippingState||null;l.value=A,A=d(m,f,D,h);for(let B=0;B!==D;++B)A[B]=n[B];g.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,f,h,m){const y=u!==null?u.length:0;let v=null;if(y!==0){if(v=l.value,m!==!0||v===null){const g=h+y*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<g)&&(v=new Float32Array(g));for(let D=0,A=h;D!==y;++D,A+=4)o.copy(u[D]).applyMatrix4(p,a),o.normal.toArray(v,A),v[A+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,v}}function Fp(e){let t=new WeakMap;function n(o,a){return a===Xa?o.mapping=ho:a===Ya&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===Ya)if(t.has(o)){const l=t.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=e.getRenderList(),d=e.getRenderTarget(),u=e.getRenderState(),f=new Qn(l.height/2);return f.fromEquirectangularTexture(e,o),t.set(o,f),e.setRenderTarget(d),e.setRenderList(c),e.setRenderState(u),o.addEventListener("dispose",r),n(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}function Bp(e){const t={};return{has:function(n){if(t[n]!==void 0)return t[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]}}}function Up(e,t,n,i){const r=new WeakMap,s=new WeakMap;function o(u){const f=u.target,h=r.get(f);h.index!==null&&t.remove(h.index);for(const y in h.attributes)t.remove(h.attributes[y]);f.removeEventListener("dispose",o),r.delete(f);const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){let h=r.get(f);return h||(f.addEventListener("dispose",o),f.isBufferGeometry?h=f:f.isGeometry&&(f._bufferGeometry===void 0&&(f._bufferGeometry=new Fe().setFromObject(u)),h=f._bufferGeometry),r.set(f,h),n.memory.geometries++,h)}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],34962);const h=u.morphAttributes;for(const m in h){const y=h[m];for(let v=0,g=y.length;v<g;v++)t.update(y[v],34962)}}function c(u){const f=[],h=u.index,m=u.attributes.position;let y=0;if(h!==null){const p=h.array;y=h.version;for(let D=0,A=p.length;D<A;D+=3){const B=p[D+0],E=p[D+1],H=p[D+2];f.push(B,E,E,H,H,B)}}else{const p=m.array;y=m.version;for(let D=0,A=p.length/3-1;D<A;D+=3){const B=D+0,E=D+1,H=D+2;f.push(B,E,E,H,H,B)}}const v=new(Ml(f)>65535?Sr:Tr)(f,1);v.version=y;const g=s.get(u);g&&t.remove(g),s.set(u,v)}function d(u){const f=s.get(u);if(f){const h=u.index;h!==null&&(f.version<h.version&&c(u))}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function kp(e,t,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,h){e.drawElements(s,h,a,f*l),n.update(h,s,1)}function u(f,h,m){if(m===0)return;let y,v;if(r)y=e,v="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,h,a,f*l,m),n.update(h,s,m)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u}function Gp(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){n.calls++;switch(o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zp(e,t){return e[0]-t[0]}function Hp(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Vp(e){const t={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,l){const c=s.morphTargetInfluences,d=c===void 0?0:c.length;let u=t[o.id];if(u===void 0){u=[];for(let v=0;v<d;v++)u[v]=[v,0];t[o.id]=u}for(let v=0;v<d;v++){const g=u[v];g[0]=v,g[1]=c[v]}u.sort(Hp);for(let v=0;v<8;v++)v<d&&u[v][1]?(i[v][0]=u[v][0],i[v][1]=u[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(zp);const f=a.morphTargets&&o.morphAttributes.position,h=a.morphNormals&&o.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const g=i[v],p=g[0],D=g[1];p!==Number.MAX_SAFE_INTEGER&&D?(f&&o.getAttribute("morphTarget"+v)!==f[p]&&o.setAttribute("morphTarget"+v,f[p]),h&&o.getAttribute("morphNormal"+v)!==h[p]&&o.setAttribute("morphNormal"+v,h[p]),n[v]=D,m+=D):(f&&o.getAttribute("morphTarget"+v)!==void 0&&o.deleteAttribute("morphTarget"+v),h&&o.getAttribute("morphNormal"+v)!==void 0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}const y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function Wp(e,t,n,i){let r=new WeakMap;function s(a){const l=i.render.frame,c=a.geometry,d=t.get(a,c);return r.get(d)!==l&&(c.isGeometry&&d.updateFromObject(a),t.update(d),r.set(d,l)),a.isInstancedMesh&&(n.update(a.instanceMatrix,34962),a.instanceColor!==null&&n.update(a.instanceColor,34962)),d}function o(){r=new WeakMap}return{update:s,dispose:o}}function Lr(e,t,n,i){He.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ut,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Lr.prototype=Object.create(He.prototype);Lr.prototype.constructor=Lr;Lr.prototype.isDataTexture2DArray=!0;function Cr(e,t,n,i){He.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ut,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Cr.prototype=Object.create(He.prototype);Cr.prototype.constructor=Cr;Cr.prototype.isDataTexture3D=!0;const Rl=new He,jp=new Lr,qp=new Cr,Ll=new On,Cl=[],Pl=[],Il=new Float32Array(16),Dl=new Float32Array(9),Nl=new Float32Array(4);function Ui(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Cl[r];if(s===void 0&&(s=new Float32Array(r),Cl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function Ot(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Et(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ol(e,t){let n=Pl[t];n===void 0&&(n=new Int32Array(t),Pl[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Xp(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Yp(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ot(n,t))return;e.uniform2fv(this.addr,t),Et(n,t)}}function Zp(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ot(n,t))return;e.uniform3fv(this.addr,t),Et(n,t)}}function Jp(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ot(n,t))return;e.uniform4fv(this.addr,t),Et(n,t)}}function Kp(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ot(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(n,t)}else{if(Ot(n,i))return;Nl.set(i),e.uniformMatrix2fv(this.addr,!1,Nl),Et(n,i)}}function Qp(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ot(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(n,t)}else{if(Ot(n,i))return;Dl.set(i),e.uniformMatrix3fv(this.addr,!1,Dl),Et(n,i)}}function $p(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ot(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(n,t)}else{if(Ot(n,i))return;Il.set(i),e.uniformMatrix4fv(this.addr,!1,Il),Et(n,i)}}function em(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||Rl,r)}function tm(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||jp,r)}function nm(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||qp,r)}function im(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||Ll,r)}function rm(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function sm(e,t){const n=this.cache;if(Ot(n,t))return;e.uniform2iv(this.addr,t),Et(n,t)}function om(e,t){const n=this.cache;if(Ot(n,t))return;e.uniform3iv(this.addr,t),Et(n,t)}function am(e,t){const n=this.cache;if(Ot(n,t))return;e.uniform4iv(this.addr,t),Et(n,t)}function lm(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function cm(e){switch(e){case 5126:return Xp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return Kp;case 35675:return Qp;case 35676:return $p;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return tm}}function um(e,t){e.uniform1fv(this.addr,t)}function hm(e,t){e.uniform1iv(this.addr,t)}function dm(e,t){e.uniform2iv(this.addr,t)}function fm(e,t){e.uniform3iv(this.addr,t)}function pm(e,t){e.uniform4iv(this.addr,t)}function mm(e,t){const n=Ui(t,this.size,2);e.uniform2fv(this.addr,n)}function gm(e,t){const n=Ui(t,this.size,3);e.uniform3fv(this.addr,n)}function vm(e,t){const n=Ui(t,this.size,4);e.uniform4fv(this.addr,n)}function ym(e,t){const n=Ui(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xm(e,t){const n=Ui(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bm(e,t){const n=Ui(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _m(e,t,n){const i=t.length,r=Ol(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(t[s]||Rl,r[s])}function wm(e,t,n){const i=t.length,r=Ol(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(t[s]||Ll,r[s])}function Mm(e){switch(e){case 5126:return um;case 35664:return mm;case 35665:return gm;case 35666:return vm;case 35674:return ym;case 35675:return xm;case 35676:return bm;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35680:case 36300:case 36308:case 36293:return wm}}function Em(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cm(t.type)}function Fl(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mm(t.type)}Fl.prototype.updateCache=function(e){const t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Et(t,e)};function Bl(e){this.id=e,this.seq=[],this.map={}}Bl.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}};const Zo=/([\w\d_]+)(\])?(\[|\.)?/g;function Ul(e,t){e.seq.push(t),e.map[t.id]=t}function Tm(e,t,n){const i=e.name,r=i.length;for(Zo.lastIndex=0;;){const s=Zo.exec(i),o=Zo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ul(n,c===void 0?new Em(a,e,t):new Fl(a,e,t));break}else{const d=n.map;let u=d[a];u===void 0&&(u=new Bl(a),Ul(n,u)),n=u}}}function Fn(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Tm(r,s,this)}}Fn.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)};Fn.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)};Fn.upload=function(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}};Fn.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n};function kl(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let Sm=0;function Am(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Gl(e){switch(e){case rt:return["Linear","( value )"];case Xn:return["sRGB","( value )"];case xr:return["RGBE","( value )"];case al:return["RGBM","( value, 7.0 )"];case ll:return["RGBM","( value, 16.0 )"];case cl:return["RGBD","( value, 256.0 )"];case bo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case zh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function zl(e,t,n){const i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Am(s)}function Pr(e,t){const n=Gl(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Rm(e,t){const n=Gl(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Lm(e,t){let n;switch(t){case zu:n="Linear";break;case Hu:n="Reinhard";break;case Vu:n="OptimizedCineon";break;case Wu:n="ACESFilmic";break;case ju:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Cm(e){const t=[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return t.filter(Ir).join(`
`)}function Pm(e){const t=[];for(const n in e){const i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Im(e,t){const n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;n[o]=e.getAttribLocation(t,o)}return n}function Ir(e){return e!==""}function Hl(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(e){return e.replace(Dm,Nm)}function Nm(e,t){const n=Pe[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Jo(n)}const Om=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(e){return e.replace(Fm,Wl).replace(Om,Bm)}function Bm(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wl(e,t,n,i)}function Wl(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ql(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Um(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===pr&&(t="SHADOWMAP_TYPE_VSM"),t}function km(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ho:case fo:t="ENVMAP_TYPE_CUBE";break;case Qr:case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fo:case po:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Kr:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function Hm(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Um(n),c=km(n),d=Gm(n),u=zm(n),f=e.gammaFactor>0?e.gammaFactor:1,h=n.isWebGL2?"":Cm(n),m=Pm(s),y=r.createProgram();let v,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[m].filter(Ir).join(`
`),v.length>0&&(v+=`
`),g=[h,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`)):(v=[ql(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),g=[h,ql(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Pe.tonemapping_pars_fragment:"",n.toneMapping!==mi?Lm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Pe.encodings_pars_fragment,n.map?Pr("mapTexelToLinear",n.mapEncoding):"",n.matcap?Pr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Pr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Pr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Pr("lightMapTexelToLinear",n.lightMapEncoding):"",Rm("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Jo(o),o=Hl(o,n),o=Vl(o,n),a=Jo(a),a=Hl(a,n),a=Vl(a,n),o=jl(o),a=jl(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===ul?"":"out highp vec4 pc_fragColor;",n.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=p+v+o,A=p+g+a,B=kl(r,35633,D),E=kl(r,35632,A);if(r.attachShader(y,B),r.attachShader(y,E),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),e.debug.checkShaderErrors){const ee=r.getProgramInfoLog(y).trim(),le=r.getShaderInfoLog(B).trim(),I=r.getShaderInfoLog(E).trim();let G=!0,O=!0;if(r.getProgramParameter(y,35714)===!1){G=!1;const z=zl(r,B,"vertex"),k=zl(r,E,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",ee,z,k)}else ee!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",ee):(le===""||I==="")&&(O=!1);O&&(this.diagnostics={runnable:G,programLog:ee,vertexShader:{log:le,prefix:v},fragmentShader:{log:I,prefix:g}})}r.deleteShader(B),r.deleteShader(E);let H;this.getUniforms=function(){return H===void 0&&(H=new Fn(r,y)),H};let Q;return this.getAttributes=function(){return Q===void 0&&(Q=Im(r,y)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=E,this}function Vm(e,t,n,i,r,s){const o=[],a=i.isWebGL2,l=i.logarithmicDepthBuffer,c=i.floatVertexTextures,d=i.maxVertexUniforms,u=i.vertexTextures;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(E){const H=E.skeleton,Q=H.bones;if(c)return 1024;{const ee=d,le=Math.floor((ee-20)/4),I=Math.min(le,Q.length);return I<Q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Q.length+" bones. This GPU supports "+I+"."),0):I}}function v(E){let H;return E?E.isTexture?H=E.encoding:E.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),H=E.texture.encoding):H=rt,H}function g(E,H,Q,ee,le){const I=ee.fog,G=E.isMeshStandardMaterial?ee.environment:null,O=t.get(E.envMap||G),z=h[E.type],k=le.isSkinnedMesh?y(le):0;E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let F,V;if(z){const se=Zt[z];F=se.vertexShader,V=se.fragmentShader}else F=E.vertexShader,V=E.fragmentShader;const q=e.getRenderTarget(),oe={isWebGL2:a,shaderID:z,shaderName:E.type,vertexShader:F,fragmentShader:V,defines:E.defines,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:u,outputEncoding:q!==null?v(q.texture):e.outputEncoding,map:!!E.map,mapEncoding:v(E.map),matcap:!!E.matcap,matcapEncoding:v(E.matcap),envMap:!!O,envMapMode:O&&O.mapping,envMapEncoding:v(O),envMapCubeUV:!!O&&(O.mapping===Qr||O.mapping===po),lightMap:!!E.lightMap,lightMapEncoding:v(E.lightMap),aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,emissiveMapEncoding:v(E.emissiveMap),bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===Wh,tangentSpaceNormalMap:E.normalMapType===Sn,clearcoatMap:!!E.clearcoatMap,clearcoatRoughnessMap:!!E.clearcoatRoughnessMap,clearcoatNormalMap:!!E.clearcoatNormalMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,alphaMap:!!E.alphaMap,gradientMap:!!E.gradientMap,sheen:!!E.sheen,transmissionMap:!!E.transmissionMap,combine:E.combine,vertexTangents:E.normalMap&&E.vertexTangents,vertexColors:E.vertexColors,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.displacementMap||!!E.transmissionMap,uvsVertexOnly:!(!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatNormalMap||!!E.transmissionMap)&&!!E.displacementMap,fog:!!I,useFog:E.fog,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:l,skinning:E.skinning&&k>0,maxBones:k,useVertexTexture:c,morphTargets:E.morphTargets,morphNormals:E.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:H.directional.length,numPointLights:H.point.length,numSpotLights:H.spot.length,numRectAreaLights:H.rectArea.length,numHemiLights:H.hemi.length,numDirLightShadows:H.directionalShadowMap.length,numPointLightShadows:H.pointShadowMap.length,numSpotLightShadows:H.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&Q.length>0,shadowMapType:e.shadowMap.type,toneMapping:E.toneMapped?e.toneMapping:mi,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,alphaTest:E.alphaTest,doubleSided:E.side===fi,flipSided:E.side===it,depthPacking:E.depthPacking!==void 0?E.depthPacking:!1,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()};return oe}function p(E){const H=[];if(E.shaderID?H.push(E.shaderID):(H.push(E.fragmentShader),H.push(E.vertexShader)),E.defines!==void 0)for(const Q in E.defines)H.push(Q),H.push(E.defines[Q]);if(E.isRawShaderMaterial===!1){for(let Q=0;Q<m.length;Q++)H.push(E[m[Q]]);H.push(e.outputEncoding),H.push(e.gammaFactor)}return H.push(E.customProgramCacheKey),H.join()}function D(E){const H=h[E.type];let Q;if(H){const ee=Zt[H];Q=sd.clone(ee.uniforms)}else Q=E.uniforms;return Q}function A(E,H){let Q;for(let ee=0,le=o.length;ee<le;ee++){const I=o[ee];if(I.cacheKey===H){Q=I,++Q.usedTimes;break}}return Q===void 0&&(Q=new Hm(e,H,E,r),o.push(Q)),Q}function B(E){if(--E.usedTimes===0){const H=o.indexOf(E);o[H]=o[o.length-1],o.pop(),E.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:D,acquireProgram:A,releaseProgram:B,programs:o}}function Wm(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function jm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function qm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Xl(e){const t=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(f,h,m,y,v,g){let p=t[n];const D=e.get(m);return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,program:D.program||s,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},t[n]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.program=D.program||s,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=v,p.group=g),n++,p}function l(f,h,m,y,v,g){const p=a(f,h,m,y,v,g);(m.transparent===!0?r:i).push(p)}function c(f,h,m,y,v,g){const p=a(f,h,m,y,v,g);(m.transparent===!0?r:i).unshift(p)}function d(f,h){i.length>1&&i.sort(f||jm),r.length>1&&r.sort(h||qm)}function u(){for(let f=n,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:l,unshift:c,finish:u,sort:d}}function Xm(e){let t=new WeakMap;function n(r,s){const o=t.get(r);let a;return o===void 0?(a=new Xl(e),t.set(r,new WeakMap),t.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Xl(e),o.set(s,a))),a}function i(){t=new WeakMap}return{get:n,dispose:i}}function Ym(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new R,color:new me};break;case"SpotLight":n={position:new R,direction:new R,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function Zm(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Jm=0;function Km(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function Qm(e,t){const n=new Ym,i=Zm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new Ae,a=new Ae;function l(c,d,u){let f=0,h=0,m=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,v=0,g=0,p=0,D=0,A=0,B=0,E=0;const H=u.matrixWorldInverse;c.sort(Km);for(let ee=0,le=c.length;ee<le;ee++){const I=c[ee],G=I.color,O=I.intensity,z=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=G.r*O,h+=G.g*O,m+=G.b*O;else if(I.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],O);else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(H),I.castShadow){const V=I.shadow,q=i.get(I);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=k,r.directionalShadowMatrix[y]=I.shadow.matrix,A++}r.directional[y]=F,y++}else if(I.isSpotLight){const F=n.get(I);if(F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(H),F.color.copy(G).multiplyScalar(O),F.distance=z,F.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(H),F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,I.castShadow){const V=I.shadow,q=i.get(I);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.spotShadow[g]=q,r.spotShadowMap[g]=k,r.spotShadowMatrix[g]=I.shadow.matrix,E++}r.spot[g]=F,g++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(G).multiplyScalar(O),F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(H),a.identity(),o.copy(I.matrixWorld),o.premultiply(H),a.extractRotation(o),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),F.halfWidth.applyMatrix4(a),F.halfHeight.applyMatrix4(a),r.rectArea[p]=F,p++}else if(I.isPointLight){const F=n.get(I);if(F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(H),F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const V=I.shadow,q=i.get(I);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,r.pointShadow[v]=q,r.pointShadowMap[v]=k,r.pointShadowMatrix[v]=I.shadow.matrix,B++}r.point[v]=F,v++}else if(I.isHemisphereLight){const F=n.get(I);F.direction.setFromMatrixPosition(I.matrixWorld),F.direction.transformDirection(H),F.direction.normalize(),F.skyColor.copy(I.color).multiplyScalar(O),F.groundColor.copy(I.groundColor).multiplyScalar(O),r.hemi[D]=F,D++}}p>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=h,r.ambient[2]=m;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==v||Q.spotLength!==g||Q.rectAreaLength!==p||Q.hemiLength!==D||Q.numDirectionalShadows!==A||Q.numPointShadows!==B||Q.numSpotShadows!==E)&&(r.directional.length=y,r.spot.length=g,r.rectArea.length=p,r.point.length=v,r.hemi.length=D,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=B,r.spotShadowMatrix.length=E,Q.directionalLength=y,Q.pointLength=v,Q.spotLength=g,Q.rectAreaLength=p,Q.hemiLength=D,Q.numDirectionalShadows=A,Q.numPointShadows=B,Q.numSpotShadows=E,r.version=Jm++)}return{setup:l,state:r}}function Yl(e,t){const n=new Qm(e,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,r,d)}const c={lightsArray:i,shadowsArray:r,lights:n};return{init:s,state:c,setupLights:l,pushLight:o,pushShadow:a}}function $m(e,t){let n=new WeakMap;function i(s,o){let a;return n.has(s)===!1?(a=new Yl(e,t),n.set(s,new WeakMap),n.get(s).set(o,a)):n.get(s).has(o)===!1?(a=new Yl(e,t),n.get(s).set(o,a)):a=n.get(s).get(o),a}function r(){n=new WeakMap}return{get:i,dispose:r}}function $n(e){we.call(this),this.type="MeshDepthMaterial",this.depthPacking=Hh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}$n.prototype=Object.create(we.prototype);$n.prototype.constructor=$n;$n.prototype.isMeshDepthMaterial=!0;$n.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function ei(e){we.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}ei.prototype=Object.create(we.prototype);ei.prototype.constructor=ei;ei.prototype.isMeshDistanceMaterial=!0;ei.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Zl(e,t,n){let i=new _s;const r=new ie,s=new ie,o=new Ue,a=[],l=[],c={},d={0:it,1:Mn,2:fi},u=new gt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),f=u.clone();f.defines.HORIZONAL_PASS=1;const h=new Fe;h.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ke(h,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba,this.render=function(B,E,H){if(y.enabled===!1)return;if(y.autoUpdate===!1&&y.needsUpdate===!1)return;if(B.length===0)return;const Q=e.getRenderTarget(),ee=e.getActiveCubeFace(),le=e.getActiveMipmapLevel(),I=e.state;I.setBlending(En),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let G=0,O=B.length;G<O;G++){const z=B[G],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const F=k.getFrameExtents();if(r.multiply(F),s.copy(k.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/F.x),r.x=s.x*F.x,k.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/F.y),r.y=s.y*F.y,k.mapSize.y=s.y)),k.map===null&&!k.isPointLightShadow&&this.type===pr){const q={minFilter:je,magFilter:je,format:Dt};k.map=new Nt(r.x,r.y,q),k.map.texture.name=z.name+".shadowMap",k.mapPass=new Nt(r.x,r.y,q),k.camera.updateProjectionMatrix()}if(k.map===null){const q={minFilter:Ye,magFilter:Ye,format:Dt};k.map=new Nt(r.x,r.y,q),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const V=k.getViewportCount();for(let q=0;q<V;q++){const oe=k.getViewport(q);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),I.viewport(o),k.updateMatrices(z,q),i=k.getFrustum(),A(E,H,k.camera,z,this.type)}!k.isPointLightShadow&&this.type===pr&&v(k,H),k.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(Q,ee,le)};function v(B,E){const H=t.update(m);u.uniforms.shadow_pass.value=B.map.texture,u.uniforms.resolution.value=B.mapSize,u.uniforms.radius.value=B.radius,e.setRenderTarget(B.mapPass),e.clear(),e.renderBufferDirect(E,null,H,u,m,null),f.uniforms.shadow_pass.value=B.mapPass.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,e.setRenderTarget(B.map),e.clear(),e.renderBufferDirect(E,null,H,f,m,null)}function g(B,E,H){const Q=B<<0|E<<1|H<<2;let ee=a[Q];return ee===void 0&&(ee=new $n({depthPacking:Vh,morphTargets:B,skinning:E}),a[Q]=ee),ee}function p(B,E,H){const Q=B<<0|E<<1|H<<2;let ee=l[Q];return ee===void 0&&(ee=new ei({morphTargets:B,skinning:E}),l[Q]=ee),ee}function D(B,E,H,Q,ee,le,I){let G=null,O=g,z=B.customDepthMaterial;if(Q.isPointLight===!0&&(O=p,z=B.customDistanceMaterial),z===void 0){let k=!1;H.morphTargets===!0&&(k=E.morphAttributes&&E.morphAttributes.position&&E.morphAttributes.position.length>0);let F=!1;B.isSkinnedMesh===!0&&(H.skinning===!0?F=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",B));const V=B.isInstancedMesh===!0;G=O(k,F,V)}else G=z;if(e.localClippingEnabled&&H.clipShadows===!0&&H.clippingPlanes.length!==0){const k=G.uuid,F=H.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let q=V[F];q===void 0&&(q=G.clone(),V[F]=q),G=q}return G.visible=H.visible,G.wireframe=H.wireframe,I===pr?G.side=H.shadowSide!==null?H.shadowSide:H.side:G.side=H.shadowSide!==null?H.shadowSide:d[H.side],G.clipShadows=H.clipShadows,G.clippingPlanes=H.clippingPlanes,G.clipIntersection=H.clipIntersection,G.wireframeLinewidth=H.wireframeLinewidth,G.linewidth=H.linewidth,Q.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(Q.matrixWorld),G.nearDistance=ee,G.farDistance=le),G}function A(B,E,H,Q,ee){if(B.visible===!1)return;const le=B.layers.test(E.layers);if(le&&(B.isMesh||B.isLine||B.isPoints)&&((B.castShadow||B.receiveShadow&&ee===pr)&&(!B.frustumCulled||i.intersectsObject(B)))){B.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,B.matrixWorld);const G=t.update(B),O=B.material;if(Array.isArray(O)){const z=G.groups;for(let k=0,F=z.length;k<F;k++){const V=z[k],q=O[V.materialIndex];if(q&&q.visible){const oe=D(B,G,q,Q,H.near,H.far,ee);e.renderBufferDirect(H,null,G,oe,B,V)}}}else if(O.visible){const z=D(B,G,O,Q,H.near,H.far,ee);e.renderBufferDirect(H,null,G,z,B,null)}}const I=B.children;for(let G=0,O=I.length;G<O;G++)A(I[G],E,H,Q,ee)}}function ng(e,t,n){const i=n.isWebGL2;function r(){let U=!1;const ne=new Ue;let re=null;const pe=new Ue(0,0,0,0);return{setMask:function(ae){re!==ae&&!U&&(e.colorMask(ae,ae,ae,ae),re=ae)},setLocked:function(ae){U=ae},setClear:function(ae,ge,ve,Me,he){he===!0&&(ae*=Me,ge*=Me,ve*=Me),ne.set(ae,ge,ve,Me),pe.equals(ne)===!1&&(e.clearColor(ae,ge,ve,Me),pe.copy(ne))},reset:function(){U=!1,re=null,pe.set(-1,0,0,0)}}}function s(){let U=!1,ne=null,re=null,pe=null;return{setTest:function(ae){ae?se(2929):fe(2929)},setMask:function(ae){ne!==ae&&!U&&(e.depthMask(ae),ne=ae)},setFunc:function(ae){if(re!==ae){if(ae)switch(ae){case Iu:e.depthFunc(512);break;case Du:e.depthFunc(519);break;case Nu:e.depthFunc(513);break;case uo:e.depthFunc(515);break;case Ou:e.depthFunc(514);break;case Fu:e.depthFunc(518);break;case Bu:e.depthFunc(516);break;case Uu:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);re=ae}},setLocked:function(ae){U=ae},setClear:function(ae){pe!==ae&&(e.clearDepth(ae),pe=ae)},reset:function(){U=!1,ne=null,re=null,pe=null}}}function o(){let U=!1,ne=null,re=null,pe=null,ae=null,ge=null,ve=null,Me=null,he=null;return{setTest:function(xe){U||(xe?se(2960):fe(2960))},setMask:function(xe){ne!==xe&&!U&&(e.stencilMask(xe),ne=xe)},setFunc:function(xe,Ce,$e){(re!==xe||pe!==Ce||ae!==$e)&&(e.stencilFunc(xe,Ce,$e),re=xe,pe=Ce,ae=$e)},setOp:function(xe,Ce,$e){(ge!==xe||ve!==Ce||Me!==$e)&&(e.stencilOp(xe,Ce,$e),ge=xe,ve=Ce,Me=$e)},setLocked:function(xe){U=xe},setClear:function(xe){he!==xe&&(e.clearStencil(xe),he=xe)},reset:function(){U=!1,ne=null,re=null,pe=null,ae=null,ge=null,ve=null,Me=null,he=null}}}const a=new r,l=new s,c=new o;let d={},u=null,f=null,h=null,m=null,y=null,v=null,g=null,p=null,D=null,A=!1,B=null,E=null,H=null,Q=null,ee=null;const le=e.getParameter(35661);let I=!1,G=0;const O=e.getParameter(7938);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL\ ([0-9])/.exec(O)[1]),I=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(O)[1]),I=G>=2);let z=null,k={};const F=new Ue,V=new Ue;function q(U,ne,re){const pe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(U,ae),e.texParameteri(U,10241,9728),e.texParameteri(U,10240,9728);for(let ge=0;ge<re;ge++)e.texImage2D(ne+ge,0,6408,1,1,0,6408,5121,pe);return ae}const oe={};oe[3553]=q(3553,3553,1),oe[34067]=q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(2929),l.setFunc(uo),x(!1),P(Fa),se(2884),$(En);function se(U){d[U]!==!0&&(e.enable(U),d[U]=!0)}function fe(U){d[U]!==!1&&(e.disable(U),d[U]=!1)}function ce(U){return u!==U?(e.useProgram(U),u=U,!0):!1}const ye={[pi]:32774,[_u]:32778,[wu]:32779};if(i)ye[Ha]=32775,ye[Va]=32776;else{const U=t.get("EXT_blend_minmax");U!==null&&(ye[Ha]=U.MIN_EXT,ye[Va]=U.MAX_EXT)}const Ne={[Mu]:0,[Eu]:1,[Tu]:768,[Wa]:770,[Pu]:776,[Lu]:774,[Au]:772,[Su]:769,[ja]:771,[Cu]:775,[Ru]:773};function $(U,ne,re,pe,ae,ge,ve,Me){if(U===En){f&&(fe(3042),f=!1);return}if(f||(se(3042),f=!0),U!==bu){if(U!==h||Me!==A){if((m!==pi||g!==pi)&&(e.blendEquation(32774),m=pi,g=pi),Me)switch(U){case mr:e.blendFuncSeparate(1,771,1,771);break;case ka:e.blendFunc(1,1);break;case Ga:e.blendFuncSeparate(0,0,769,771);break;case za:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case mr:e.blendFuncSeparate(770,771,1,771);break;case ka:e.blendFunc(770,1);break;case Ga:e.blendFunc(0,769);break;case za:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,p=null,D=null,h=U,A=Me}return}ae=ae||ne,ge=ge||re,ve=ve||pe,(ne!==m||ae!==g)&&(e.blendEquationSeparate(ye[ne],ye[ae]),m=ne,g=ae),(re!==y||pe!==v||ge!==p||ve!==D)&&(e.blendFuncSeparate(Ne[re],Ne[pe],Ne[ge],Ne[ve]),y=re,v=pe,p=ge,D=ve),h=U,A=null}function w(U,ne){U.side===fi?fe(2884):se(2884);let re=U.side===it;ne&&(re=!re),x(re),U.blending===mr&&U.transparent===!1?$(En):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const pe=U.stencilWrite;c.setTest(pe),pe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),N(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits)}function x(U){B!==U&&(U?e.frontFace(2304):e.frontFace(2305),B=U)}function P(U){U!==vu?(se(2884),U!==E&&(U===Fa?e.cullFace(1029):U===yu?e.cullFace(1028):e.cullFace(1032))):fe(2884),E=U}function M(U){U!==H&&(I&&e.lineWidth(U),H=U)}function N(U,ne,re){U?(se(32823),(Q!==ne||ee!==re)&&(e.polygonOffset(ne,re),Q=ne,ee=re)):fe(32823)}function T(U){U?se(3089):fe(3089)}function C(U){U===void 0&&(U=33984+le-1),z!==U&&(e.activeTexture(U),z=U)}function L(U,ne){z===null&&C();let re=k[z];re===void 0&&(re={type:void 0,texture:void 0},k[z]=re),(re.type!==U||re.texture!==ne)&&(e.bindTexture(U,ne||oe[U]),re.type=U,re.texture=ne)}function W(){const U=k[z];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function b(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _(U){F.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),F.copy(U))}function K(U){V.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),V.copy(U))}function X(){d={},z=null,k={},u=null,h=null,B=null,E=null,a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:fe,useProgram:ce,setBlending:$,setMaterial:w,setFlipSided:x,setCullFace:P,setLineWidth:M,setPolygonOffset:N,setScissorTest:T,activeTexture:C,bindTexture:L,unbindTexture:W,compressedTexImage2D:j,texImage2D:Z,texImage3D:b,scissor:_,viewport:K,reset:X}}function ig(e,t,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,u=r.maxSamples,f=new WeakMap;let h,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function y(b,_){return m?new OffscreenCanvas(b,_):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(b,_,K,X){let U=1;if((b.width>X||b.height>X)&&(U=X/Math.max(b.width,b.height)),U<1||_===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const ne=_?Te.floorPowerOfTwo:Math.floor,re=ne(U*b.width),pe=ne(U*b.height);h===void 0&&(h=y(re,pe));const ae=K?y(re,pe):h;ae.width=re,ae.height=pe;const ge=ae.getContext("2d");return ge.drawImage(b,0,0,re,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+re+"x"+pe+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function g(b){return Te.isPowerOfTwo(b.width)&&Te.isPowerOfTwo(b.height)}function p(b){return a?!1:b.wrapS!==ut||b.wrapT!==ut||b.minFilter!==Ye&&b.minFilter!==je}function D(b,_){return b.generateMipmaps&&_&&b.minFilter!==Ye&&b.minFilter!==je}function A(b,_,K,X){e.generateMipmap(b);const U=i.get(_);U.__maxMipLevel=Math.log(Math.max(K,X))*Math.LOG2E}function B(b,_,K){if(a===!1)return _;if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;return _===6403&&(K===5126&&(X=33326),K===5131&&(X=33325),K===5121&&(X=33321)),_===6407&&(K===5126&&(X=34837),K===5131&&(X=34843),K===5121&&(X=32849)),_===6408&&(K===5126&&(X=34836),K===5131&&(X=34842),K===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&t.get("EXT_color_buffer_float"),X}function E(b){return b===Ye||b===$r||b===es?9728:9729}function H(b){const _=b.target;_.removeEventListener("dispose",H),ee(_),_.isVideoTexture&&f.delete(_),o.memory.textures--}function Q(b){const _=b.target;_.removeEventListener("dispose",Q),le(_),o.memory.textures--}function ee(b){const _=i.get(b);if(_.__webglInit===void 0)return;e.deleteTexture(_.__webglTexture),i.remove(b)}function le(b){const _=i.get(b),K=i.get(b.texture);if(!b)return;if(K.__webglTexture!==void 0&&e.deleteTexture(K.__webglTexture),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)e.deleteFramebuffer(_.__webglFramebuffer[X]),_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[X]);else e.deleteFramebuffer(_.__webglFramebuffer),_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer&&e.deleteRenderbuffer(_.__webglColorRenderbuffer),_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer);i.remove(b.texture),i.remove(b)}let I=0;function G(){I=0}function O(){const b=I;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),I+=1,b}function z(b,_){const K=i.get(b);if(b.isVideoTexture&&C(b),b.version>0&&K.__version!==b.version){const X=b.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,b,_);return}}n.activeTexture(33984+_),n.bindTexture(3553,K.__webglTexture)}function k(b,_){const K=i.get(b);if(b.version>0&&K.__version!==b.version){ce(K,b,_);return}n.activeTexture(33984+_),n.bindTexture(35866,K.__webglTexture)}function F(b,_){const K=i.get(b);if(b.version>0&&K.__version!==b.version){ce(K,b,_);return}n.activeTexture(33984+_),n.bindTexture(32879,K.__webglTexture)}function V(b,_){const K=i.get(b);if(b.version>0&&K.__version!==b.version){ye(K,b,_);return}n.activeTexture(33984+_),n.bindTexture(34067,K.__webglTexture)}const q={[Wn]:10497,[ut]:33071,[gr]:33648},oe={[Ye]:9728,[$r]:9984,[es]:9986,[je]:9729,[mo]:9985,[jn]:9987};function se(b,_,K){K?(e.texParameteri(b,10242,q[_.wrapS]),e.texParameteri(b,10243,q[_.wrapT]),(b===32879||b===35866)&&e.texParameteri(b,32882,q[_.wrapR]),e.texParameteri(b,10240,oe[_.magFilter]),e.texParameteri(b,10241,oe[_.minFilter])):(e.texParameteri(b,10242,33071),e.texParameteri(b,10243,33071),(b===32879||b===35866)&&e.texParameteri(b,32882,33071),(_.wrapS!==ut||_.wrapT!==ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(b,10240,E(_.magFilter)),e.texParameteri(b,10241,E(_.minFilter)),_.minFilter!==Ye&&_.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const X=t.get("EXT_texture_filter_anisotropic");if(X){if(_.type===Pt&&t.get("OES_texture_float_linear")===null)return;if(_.type===Tn&&(a||t.get("OES_texture_half_float_linear"))===null)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(e.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function fe(b,_){b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",H),b.__webglTexture=e.createTexture(),o.memory.textures++)}function ce(b,_,K){let X=3553;_.isDataTexture2DArray&&(X=35866),_.isDataTexture3D&&(X=32879),fe(b,_),n.activeTexture(33984+K),n.bindTexture(X,b.__webglTexture),e.pixelStorei(37440,_.flipY),e.pixelStorei(37441,_.premultiplyAlpha),e.pixelStorei(3317,_.unpackAlignment);const U=p(_)&&g(_.image)===!1,ne=v(_.image,U,!1,d),re=g(ne)||a,pe=s.convert(_.format);let ae=s.convert(_.type),ge=B(_.internalFormat,pe,ae);se(X,_,re);let ve;const Me=_.mipmaps;if(_.isDepthTexture)ge=6402,a?_.type===Pt?ge=36012:_.type===ns?ge=33190:_.type===vr?ge=35056:ge=33189:_.type===Pt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===gi&&ge===6402&&(_.type!==ts&&_.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ts,ae=s.convert(_.type))),_.format===yr&&ge===6402&&(ge=34041,_.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=vr,ae=s.convert(_.type))),n.texImage2D(3553,0,ge,ne.width,ne.height,0,pe,ae,null);else if(_.isDataTexture)if(Me.length>0&&re){for(let he=0,xe=Me.length;he<xe;he++)ve=Me[he],n.texImage2D(3553,he,ge,ve.width,ve.height,0,pe,ae,ve.data);_.generateMipmaps=!1,b.__maxMipLevel=Me.length-1}else n.texImage2D(3553,0,ge,ne.width,ne.height,0,pe,ae,ne.data),b.__maxMipLevel=0;else if(_.isCompressedTexture){for(let he=0,xe=Me.length;he<xe;he++)ve=Me[he],_.format!==Dt&&_.format!==It?pe!==null?n.compressedTexImage2D(3553,he,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,he,ge,ve.width,ve.height,0,pe,ae,ve.data);b.__maxMipLevel=Me.length-1}else if(_.isDataTexture2DArray)n.texImage3D(35866,0,ge,ne.width,ne.height,ne.depth,0,pe,ae,ne.data),b.__maxMipLevel=0;else if(_.isDataTexture3D)n.texImage3D(32879,0,ge,ne.width,ne.height,ne.depth,0,pe,ae,ne.data),b.__maxMipLevel=0;else if(Me.length>0&&re){for(let he=0,xe=Me.length;he<xe;he++)ve=Me[he],n.texImage2D(3553,he,ge,pe,ae,ve);_.generateMipmaps=!1,b.__maxMipLevel=Me.length-1}else n.texImage2D(3553,0,ge,pe,ae,ne),b.__maxMipLevel=0;D(_,re)&&A(X,_,ne.width,ne.height),b.__version=_.version,_.onUpdate&&_.onUpdate(_)}function ye(b,_,K){if(_.image.length!==6)return;fe(b,_),n.activeTexture(33984+K),n.bindTexture(34067,b.__webglTexture),e.pixelStorei(37440,_.flipY);const X=_&&(_.isCompressedTexture||_.image[0].isCompressedTexture),U=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let he=0;he<6;he++)!X&&!U?ne[he]=v(_.image[he],!1,!0,c):ne[he]=U?_.image[he].image:_.image[he];const re=ne[0],pe=g(re)||a,ae=s.convert(_.format),ge=s.convert(_.type),ve=B(_.internalFormat,ae,ge);se(34067,_,pe);let Me;if(X){for(let he=0;he<6;he++){Me=ne[he].mipmaps;for(let xe=0;xe<Me.length;xe++){const Ce=Me[xe];_.format!==Dt&&_.format!==It?ae!==null?n.compressedTexImage2D(34069+he,xe,ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+he,xe,ve,Ce.width,Ce.height,0,ae,ge,Ce.data)}}b.__maxMipLevel=Me.length-1}else{Me=_.mipmaps;for(let he=0;he<6;he++)if(U){n.texImage2D(34069+he,0,ve,ne[he].width,ne[he].height,0,ae,ge,ne[he].data);for(let xe=0;xe<Me.length;xe++){const Ce=Me[xe],$e=Ce.image[he].image;n.texImage2D(34069+he,xe+1,ve,$e.width,$e.height,0,ae,ge,$e.data)}}else{n.texImage2D(34069+he,0,ve,ae,ge,ne[he]);for(let xe=0;xe<Me.length;xe++){const Ce=Me[xe];n.texImage2D(34069+he,xe+1,ve,ae,ge,Ce.image[he])}}b.__maxMipLevel=Me.length}D(_,pe)&&A(34067,_,re.width,re.height),b.__version=_.version,_.onUpdate&&_.onUpdate(_)}function Ne(b,_,K,X){const U=s.convert(_.texture.format),ne=s.convert(_.texture.type),re=B(_.texture.internalFormat,U,ne);n.texImage2D(X,0,re,_.width,_.height,0,U,ne,null),e.bindFramebuffer(36160,b),e.framebufferTexture2D(36160,K,X,i.get(_.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function $(b,_,K){if(e.bindRenderbuffer(36161,b),_.depthBuffer&&!_.stencilBuffer){let X=33189;if(K){const U=_.depthTexture;U&&U.isDepthTexture&&(U.type===Pt?X=36012:U.type===ns&&(X=33190));const ne=T(_);e.renderbufferStorageMultisample(36161,ne,X,_.width,_.height)}else e.renderbufferStorage(36161,X,_.width,_.height);e.framebufferRenderbuffer(36160,36096,36161,b)}else if(_.depthBuffer&&_.stencilBuffer){if(K){const X=T(_);e.renderbufferStorageMultisample(36161,X,35056,_.width,_.height)}else e.renderbufferStorage(36161,34041,_.width,_.height);e.framebufferRenderbuffer(36160,33306,36161,b)}else{const X=s.convert(_.texture.format),U=s.convert(_.texture.type),ne=B(_.texture.internalFormat,X,U);if(K){const re=T(_);e.renderbufferStorageMultisample(36161,re,ne,_.width,_.height)}else e.renderbufferStorage(36161,ne,_.width,_.height)}e.bindRenderbuffer(36161,null)}function w(b,_){const K=_&&_.isWebGLCubeRenderTarget;if(K)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const X=i.get(_.depthTexture).__webglTexture;if(_.depthTexture.format===gi)e.framebufferTexture2D(36160,36096,3553,X,0);else if(_.depthTexture.format===yr)e.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function x(b){const _=i.get(b),K=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture){if(K)throw new Error("target.depthTexture not supported in Cube render targets");w(_.__webglFramebuffer,b)}else if(K){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(36160,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=e.createRenderbuffer(),$(_.__webglDepthbuffer[X],b,!1)}else e.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=e.createRenderbuffer(),$(_.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function P(b){const _=i.get(b),K=i.get(b.texture);b.addEventListener("dispose",Q),K.__webglTexture=e.createTexture(),o.memory.textures++;const X=b.isWebGLCubeRenderTarget===!0,U=b.isWebGLMultisampleRenderTarget===!0,ne=g(b)||a;if(a&&b.texture.format===It&&(b.texture.type===Pt||b.texture.type===Tn)&&(b.texture.format=Dt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),X){_.__webglFramebuffer=[];for(let re=0;re<6;re++)_.__webglFramebuffer[re]=e.createFramebuffer()}else if(_.__webglFramebuffer=e.createFramebuffer(),U)if(a){_.__webglMultisampledFramebuffer=e.createFramebuffer(),_.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,_.__webglColorRenderbuffer);const re=s.convert(b.texture.format),pe=s.convert(b.texture.type),ae=B(b.texture.internalFormat,re,pe),ge=T(b);e.renderbufferStorageMultisample(36161,ge,ae,b.width,b.height),e.bindFramebuffer(36160,_.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,_.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),b.depthBuffer&&(_.__webglDepthRenderbuffer=e.createRenderbuffer(),$(_.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(X){n.bindTexture(34067,K.__webglTexture),se(34067,b.texture,ne);for(let re=0;re<6;re++)Ne(_.__webglFramebuffer[re],b,36064,34069+re);D(b.texture,ne)&&A(34067,b.texture,b.width,b.height),n.bindTexture(34067,null)}else n.bindTexture(3553,K.__webglTexture),se(3553,b.texture,ne),Ne(_.__webglFramebuffer,b,36064,3553),D(b.texture,ne)&&A(3553,b.texture,b.width,b.height),n.bindTexture(3553,null);b.depthBuffer&&x(b)}function M(b){const _=b.texture,K=g(b)||a;if(D(_,K)){const X=b.isWebGLCubeRenderTarget?34067:3553,U=i.get(_).__webglTexture;n.bindTexture(X,U),A(X,_,b.width,b.height),n.bindTexture(X,null)}}function N(b){if(b.isWebGLMultisampleRenderTarget)if(a){const _=i.get(b);e.bindFramebuffer(36008,_.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,_.__webglFramebuffer);const K=b.width,X=b.height;let U=16384;b.depthBuffer&&(U|=256),b.stencilBuffer&&(U|=1024),e.blitFramebuffer(0,0,K,X,0,0,K,X,U,9728),e.bindFramebuffer(36160,_.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function T(b){return a&&b.isWebGLMultisampleRenderTarget?Math.min(u,b.samples):0}function C(b){const _=o.render.frame;f.get(b)!==_&&(f.set(b,_),b.update())}let L=!1,W=!1;function j(b,_){b&&b.isWebGLRenderTarget&&(L===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),L=!0),b=b.texture),z(b,_)}function Z(b,_){b&&b.isWebGLCubeRenderTarget&&(W===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),W=!0),b=b.texture),V(b,_)}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=V,this.setupRenderTarget=P,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=N,this.safeSetTexture2D=j,this.safeSetTextureCube=Z}function rg(e,t,n){const i=n.isWebGL2;function r(s){let o;if(s===Ct)return 5121;if(s===Zu)return 32819;if(s===Ju)return 32820;if(s===Ku)return 33635;if(s===qu)return 5120;if(s===Xu)return 5122;if(s===ts)return 5123;if(s===Yu)return 5124;if(s===ns)return 5125;if(s===Pt)return 5126;if(s===Tn)return i?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Qu)return 6406;if(s===It)return 6407;if(s===Dt)return 6408;if(s===$u)return 6409;if(s===eh)return 6410;if(s===gi)return 6402;if(s===yr)return 34041;if(s===th)return 6403;if(s===nh)return 36244;if(s===ih)return 33319;if(s===rh)return 33320;if(s===sh)return 36248;if(s===oh)return 36249;if(s===Za||s===Ja||s===Ka||s===Qa)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$a||s===el||s===tl||s===nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===el)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ah)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===il||s===rl)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===il)return o.COMPRESSED_RGB8_ETC2;if(s===rl)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===lh||s===ch||s===uh||s===hh||s===dh||s===fh||s===ph||s===mh||s===gh||s===vh||s===yh||s===xh||s===bh||s===_h||s===Mh||s===Eh||s===Th||s===Sh||s===Ah||s===Rh||s===Lh||s===Ch||s===Ph||s===Ih||s===Dh||s===Nh||s===Oh||s===Fh)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===wh)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===vr)return i?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ko(e){Qe.call(this),this.cameras=e||[]}Ko.prototype=Object.assign(Object.create(Qe.prototype),{constructor:Ko,isArrayCamera:!0});function Jt(){be.call(this),this.type="Group"}Jt.prototype=Object.assign(Object.create(be.prototype),{constructor:Jt,isGroup:!0});function Dr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Dr.prototype,{constructor:Dr,getHandSpace:function(){if(this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){const t=new Jt;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e)if(l&&e.hand){s=!0;for(let c=0;c<=window.XRHand.LITTLE_PHALANX_TIP;c++)if(e.hand[c]){const d=t.getJointPose(e.hand[c],n),u=l.joints[c];d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=d.radius),u.visible=d!==null;const f=l.joints[window.XRHand.INDEX_PHALANX_TIP],h=l.joints[window.XRHand.THUMB_PHALANX_TIP],m=f.position.distanceTo(h.position),y=.02,v=.005;l.inputState.pinching&&m>y+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=y-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}});function Jl(e,t){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const l=[],c=new Map,d=new Qe;d.layers.enable(1),d.viewport=new Ue;const u=new Qe;u.layers.enable(2),u.viewport=new Ue;const f=[d,u],h=new Ko;h.layers.enable(1),h.layers.enable(2);let m=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let G=l[I];return G===void 0&&(G=new Dr,l[I]=G),G.getTargetRaySpace()},this.getControllerGrip=function(I){let G=l[I];return G===void 0&&(G=new Dr,l[I]=G),G.getGripSpace()},this.getHand=function(I){let G=l[I];return G===void 0&&(G=new Dr,l[I]=G),G.getHandSpace()};function v(I){const G=c.get(I.inputSource);G&&G.dispatchEvent({type:I.type,data:I.inputSource})}function g(){c.forEach(function(I,G){I.disconnect(G)}),c.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function p(I){s=I,le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(I){if(i=I,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);const G=t.getContextAttributes();G.xrCompatible!==!0&&t.makeXRCompatible();const O={antialias:G.antialias,alpha:G.alpha,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:r},z=new XRWebGLLayer(i,t,O);i.updateRenderState({baseLayer:z}),i.requestReferenceSpace(o).then(p),i.addEventListener("inputsourceschange",D)}};function D(I){const G=i.inputSources;for(let O=0;O<l.length;O++)c.set(G[O],l[O]);for(let O=0;O<I.removed.length;O++){const z=I.removed[O],k=c.get(z);k&&(k.dispatchEvent({type:"disconnected",data:z}),c.delete(z))}for(let O=0;O<I.added.length;O++){const z=I.added[O],k=c.get(z);k&&k.dispatchEvent({type:"connected",data:z})}}const A=new R,B=new R;function E(I,G,O){A.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(O.matrixWorld);const z=A.distanceTo(B),k=G.projectionMatrix.elements,F=O.projectionMatrix.elements,V=k[14]/(k[10]-1),q=k[14]/(k[10]+1),oe=(k[9]+1)/k[5],se=(k[9]-1)/k[5],fe=(k[8]-1)/k[0],ce=(F[8]+1)/F[0],ye=V*fe,Ne=V*ce,$=z/(-fe+ce),w=$*-fe;G.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(w),I.translateZ($),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.getInverse(I.matrixWorld);const x=V+$,P=q+$,M=ye-w,N=Ne+(z-w),T=oe*q/P*x,C=se*q/P*x;I.projectionMatrix.makePerspective(M,N,T,C,x,P)}function H(I,G){G===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(G.matrixWorld,I.matrix),I.matrixWorldInverse.getInverse(I.matrixWorld)}this.getCamera=function(I){h.near=u.near=d.near=I.near,h.far=u.far=d.far=I.far,(m!==h.near||y!==h.far)&&(i.updateRenderState({depthNear:h.near,depthFar:h.far}),m=h.near,y=h.far);const G=I.parent,O=h.cameras;H(h,G);for(let k=0;k<O.length;k++)H(O[k],G);I.matrixWorld.copy(h.matrixWorld);const z=I.children;for(let k=0,F=z.length;k<F;k++)z[k].updateMatrixWorld(!0);return O.length===2?E(h,d,u):h.projectionMatrix.copy(d.projectionMatrix),h};let Q=null;function ee(I,G){if(a=G.getViewerPose(s),a!==null){const z=a.views,k=i.renderState.baseLayer;e.setFramebuffer(k.framebuffer);let F=!1;z.length!==h.cameras.length&&(h.cameras.length=0,F=!0);for(let V=0;V<z.length;V++){const q=z[V],oe=k.getViewport(q),se=f[V];se.matrix.fromArray(q.transform.matrix),se.projectionMatrix.fromArray(q.projectionMatrix),se.viewport.set(oe.x,oe.y,oe.width,oe.height),V===0&&h.matrix.copy(se.matrix),F===!0&&h.cameras.push(se)}}const O=i.inputSources;for(let z=0;z<l.length;z++){const k=l[z],F=O[z];k.update(F,G,s)}Q&&Q(I,G)}const le=new Al;le.setAnimationLoop(ee),this.setAnimationLoop=function(I){Q=I},this.dispose=function(){}}Object.assign(Jl.prototype,un.prototype);function sg(e){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,D,A){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),l(g,p)):p.isMeshToonMaterial?(i(g,p),d(g,p)):p.isMeshPhongMaterial?(i(g,p),c(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?f(g,p):u(g,p)):p.isMeshMatcapMaterial?(i(g,p),h(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),y(g,p)):p.isMeshNormalMaterial?(i(g,p),v(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,D,A):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const D=e.get(p).envMap;if(D){g.envMap.value=D,g.flipEnvMap.value=D.isCubeTexture&&D._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const E=e.get(D).__maxMipLevel;E!==void 0&&(g.maxMipLevel.value=E)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let A;p.map?A=p.map:p.specularMap?A=p.specularMap:p.displacementMap?A=p.displacementMap:p.normalMap?A=p.normalMap:p.bumpMap?A=p.bumpMap:p.roughnessMap?A=p.roughnessMap:p.metalnessMap?A=p.metalnessMap:p.alphaMap?A=p.alphaMap:p.emissiveMap?A=p.emissiveMap:p.clearcoatMap?A=p.clearcoatMap:p.clearcoatNormalMap?A=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(A=p.clearcoatRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix));let B;p.aoMap?B=p.aoMap:p.lightMap&&(B=p.lightMap),B!==void 0&&(B.isWebGLRenderTarget&&(B=B.texture),B.matrixAutoUpdate===!0&&B.updateMatrix(),g.uv2Transform.value.copy(B.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,D,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*D,g.scale.value=A*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let B;p.map?B=p.map:p.alphaMap&&(B=p.alphaMap),B!==void 0&&(B.matrixAutoUpdate===!0&&B.updateMatrix(),g.uvTransform.value.copy(B.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let D;p.map?D=p.map:p.alphaMap&&(D=p.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),g.uvTransform.value.copy(D.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias);const D=e.get(p).envMap;D&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===it&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function h(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function y(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function v(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===it&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===it&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ws(e){e=e||{};const t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,s=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,l=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,c=e.powerPreference!==void 0?e.powerPreference:"default",d=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let u=null,f=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=rt,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const h=this;let m=!1,y=null,v=0,g=0,p=null,D=null,A=-1,B=null,E=null;const H=new Ue,Q=new Ue;let ee=null,le=t.width,I=t.height,G=1,O=null,z=null;const k=new Ue(0,0,le,I),F=new Ue(0,0,le,I);let V=!1;const q=new _s;let oe=!1,se=!1;const fe=new Ae,ce=new R,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return p===null?G:1}let $=n;function w(S,J){for(let Y=0;Y<S.length;Y++){const te=S[Y],de=t.getContext(te,J);if(de!==null)return de}return null}try{const S={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if(t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",$e,!1),$===null){const J=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&J.shift(),$=w(J,S),$===null)throw w(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let x,P,M,N,T,C,L,W,j,Z,b,_,K,X,U,ne,re,pe,ae,ge,ve;function Me(){x=new Bp($),P=new Np($,x,e),P.isWebGL2===!1&&(x.get("WEBGL_depth_texture"),x.get("OES_texture_float"),x.get("OES_texture_half_float"),x.get("OES_texture_half_float_linear"),x.get("OES_standard_derivatives"),x.get("OES_element_index_uint"),x.get("OES_vertex_array_object"),x.get("ANGLE_instanced_arrays")),x.get("OES_texture_float_linear"),ge=new rg($,x,P),M=new ng($,x,P),M.scissor(Q.copy(F).multiplyScalar(G).floor()),M.viewport(H.copy(k).multiplyScalar(G).floor()),N=new Gp($),T=new Wm,C=new ig($,x,M,T,P,ge,N),L=new Fp(h),W=new ld($,P),ve=new Ip($,x,W,P),j=new Up($,W,N,ve),Z=new Wp($,j,W,N),re=new Vp($),U=new Op(T),b=new Vm(h,L,x,P,ve,U),_=new sg(T),K=new Xm(T),X=new $m(x,P),ne=new Pp(h,L,M,Z,a),pe=new Dp($,x,N,P),ae=new kp($,x,N,P),N.programs=b.programs,h.capabilities=P,h.extensions=x,h.properties=T,h.renderLists=K,h.state=M,h.info=N}Me();const he=new Jl(h,$);this.xr=he;const xe=new Zl(h,Z,P.maxTextureSize);this.shadowMap=xe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const S=x.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=x.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){if(S===void 0)return;G=S,this.setSize(le,I,!1)},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new ie),S.set(le,I)},this.setSize=function(S,J,Y){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,I=J,t.width=Math.floor(S*G),t.height=Math.floor(J*G),Y!==!1&&(t.style.width=S+"px",t.style.height=J+"px"),this.setViewport(0,0,S,J)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new ie),S.set(le*G,I*G).floor()},this.setDrawingBufferSize=function(S,J,Y){le=S,I=J,G=Y,t.width=Math.floor(S*Y),t.height=Math.floor(J*Y),this.setViewport(0,0,S,J)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Ue),S.copy(H)},this.getViewport=function(S){return S.copy(k)},this.setViewport=function(S,J,Y,te){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,J,Y,te),M.viewport(H.copy(k).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,J,Y,te){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,J,Y,te),M.scissor(Q.copy(F).multiplyScalar(G).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){M.setScissorTest(V=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(){return ne.getClearColor()},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(S,J,Y){let te=0;(S===void 0||S)&&(te|=16384),(J===void 0||J)&&(te|=256),(Y===void 0||Y)&&(te|=1024),$.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",$e,!1),K.dispose(),X.dispose(),T.dispose(),L.dispose(),Z.dispose(),ve.dispose(),he.dispose(),jt.stop()};function Ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function $e(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,Me()}function Wt(S){const J=S.target;J.removeEventListener("dispose",Wt),lr(J)}function lr(S){ci(S),T.remove(S)}function ci(S){const J=T.get(S).program;J!==void 0&&b.releaseProgram(J)}function ui(S,J){S.render(function(Y){h.renderBufferImmediate(Y,J)})}this.renderBufferImmediate=function(S,J){ve.initAttributes();const Y=T.get(S);S.hasPositions&&!Y.position&&(Y.position=$.createBuffer()),S.hasNormals&&!Y.normal&&(Y.normal=$.createBuffer()),S.hasUvs&&!Y.uv&&(Y.uv=$.createBuffer()),S.hasColors&&!Y.color&&(Y.color=$.createBuffer());const te=J.getAttributes();S.hasPositions&&($.bindBuffer(34962,Y.position),$.bufferData(34962,S.positionArray,35048),ve.enableAttribute(te.position),$.vertexAttribPointer(te.position,3,5126,!1,0,0)),S.hasNormals&&($.bindBuffer(34962,Y.normal),$.bufferData(34962,S.normalArray,35048),ve.enableAttribute(te.normal),$.vertexAttribPointer(te.normal,3,5126,!1,0,0)),S.hasUvs&&($.bindBuffer(34962,Y.uv),$.bufferData(34962,S.uvArray,35048),ve.enableAttribute(te.uv),$.vertexAttribPointer(te.uv,2,5126,!1,0,0)),S.hasColors&&($.bindBuffer(34962,Y.color),$.bufferData(34962,S.colorArray,35048),ve.enableAttribute(te.color),$.vertexAttribPointer(te.color,3,5126,!1,0,0)),ve.disableUnusedAttributes(),$.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,J,Y,te,de,Ie){J===null&&(J=ye);const Re=de.isMesh&&de.matrixWorld.determinant()<0,De=hi(S,J,te,de);M.setMaterial(te,Re);let Le=Y.index;const Ke=Y.attributes.position;if(Le===null){if(Ke===void 0||Ke.count===0)return}else if(Le.count===0)return;let Je=1;te.wireframe===!0&&(Le=j.getWireframeAttribute(Y),Je=2),(te.morphTargets||te.morphNormals)&&re.update(de,Y,te,De),ve.setup(de,te,De,Y,Le);let Se,Ge=pe;Le!==null&&(Se=W.get(Le),Ge=ae,Ge.setIndex(Se));const cn=Le!==null?Le.count:Ke.count,ze=Y.drawRange.start*Je,Vn=Y.drawRange.count*Je,tt=Ie!==null?Ie.start*Je:0,co=Ie!==null?Ie.count*Je:Infinity,pt=Math.max(ze,tt),dr=Math.min(cn,ze+Vn,tt+co)-1,di=Math.max(0,dr-pt+1);if(di===0)return;if(de.isMesh)te.wireframe===!0?(M.setLineWidth(te.wireframeLinewidth*Ne()),Ge.setMode(1)):Ge.setMode(4);else if(de.isLine){let fr=te.linewidth;fr===void 0&&(fr=1),M.setLineWidth(fr*Ne()),de.isLineSegments?Ge.setMode(1):de.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else de.isPoints?Ge.setMode(0):de.isSprite&&Ge.setMode(4);if(de.isInstancedMesh)Ge.renderInstances(pt,di,de.count);else if(Y.isInstancedBufferGeometry){const fr=Math.min(Y.instanceCount,Y._maxInstanceCount);Ge.renderInstances(pt,di,fr)}else Ge.render(pt,di)},this.compile=function(S,J){f=X.get(S,J),f.init(),S.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(f.pushLight(te),te.castShadow&&f.pushShadow(te))}),f.setupLights(J);const Y=new WeakMap;S.traverse(function(te){const de=te.material;if(de)if(Array.isArray(de))for(let Ie=0;Ie<de.length;Ie++){const Re=de[Ie];Y.has(Re)===!1&&(et(Re,S,te),Y.set(Re))}else Y.has(de)===!1&&(et(de,S,te),Y.set(de))})};let cr=null;function ao(S){if(he.isPresenting)return;cr&&cr(S)}const jt=new Al;jt.setAnimationLoop(ao),typeof window!="undefined"&&jt.setContext(window),this.setAnimationLoop=function(S){cr=S,he.setAnimationLoop(S),S===null?jt.stop():jt.start()},this.render=function(S,J){let Y,te;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),Y=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),te=arguments[3]),J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;ve.resetDefaultState(),A=-1,B=null,S.autoUpdate===!0&&S.updateMatrixWorld(),J.parent===null&&J.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(J=he.getCamera(J)),S.isScene===!0&&S.onBeforeRender(h,S,J,Y||p),f=X.get(S,J),f.init(),fe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),q.setFromProjectionMatrix(fe),se=this.localClippingEnabled,oe=U.init(this.clippingPlanes,se,J),u=K.get(S,J),u.init(),Lt(S,J,0,h.sortObjects),u.finish(),h.sortObjects===!0&&u.sort(O,z),oe===!0&&U.beginShadows();const de=f.state.shadowsArray;xe.render(de,S,J),f.setupLights(J),oe===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y!==void 0&&this.setRenderTarget(Y),ne.render(u,S,J,te);const Ie=u.opaque,Re=u.transparent;Ie.length>0&&wn(Ie,S,J),Re.length>0&&wn(Re,S,J),S.isScene===!0&&S.onAfterRender(h,S,J),p!==null&&(C.updateRenderTargetMipmap(p),C.updateMultisampleRenderTarget(p)),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1),u=null,f=null};function Lt(S,J,Y,te){if(S.visible===!1)return;const de=S.layers.test(J.layers);if(de){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(J);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){te&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Re=Z.update(S),De=S.material;De.visible&&u.push(S,Re,De,Y,ce.z,null)}}else if(S.isImmediateRenderObject)te&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe),u.push(S,null,S.material,Y,ce.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&(S.skeleton.frame!==N.render.frame&&(S.skeleton.update(),S.skeleton.frame=N.render.frame)),!S.frustumCulled||q.intersectsObject(S))){te&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Re=Z.update(S),De=S.material;if(Array.isArray(De)){const Le=Re.groups;for(let Ke=0,Je=Le.length;Ke<Je;Ke++){const Se=Le[Ke],Ge=De[Se.materialIndex];Ge&&Ge.visible&&u.push(S,Re,Ge,Y,ce.z,Se)}}else De.visible&&u.push(S,Re,De,Y,ce.z,null)}}const Ie=S.children;for(let Re=0,De=Ie.length;Re<De;Re++)Lt(Ie[Re],J,Y,te)}function wn(S,J,Y){const te=J.isScene===!0?J.overrideMaterial:null;for(let de=0,Ie=S.length;de<Ie;de++){const Re=S[de],De=Re.object,Le=Re.geometry,Ke=te===null?Re.material:te,Je=Re.group;if(Y.isArrayCamera){E=Y;const Se=Y.cameras;for(let Ge=0,cn=Se.length;Ge<cn;Ge++){const ze=Se[Ge];De.layers.test(ze.layers)&&(M.viewport(H.copy(ze.viewport)),f.setupLights(ze),ur(De,J,ze,Le,Ke,Je))}}else E=null,ur(De,J,Y,Le,Ke,Je)}}function ur(S,J,Y,te,de,Ie){if(S.onBeforeRender(h,J,Y,te,de,Ie),f=X.get(J,E||Y),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){const Re=hi(Y,J,de,S);M.setMaterial(de),ve.reset(),ui(S,Re)}else h.renderBufferDirect(Y,J,te,de,S,Ie);S.onAfterRender(h,J,Y,te,de,Ie),f=X.get(J,E||Y)}function et(S,J,Y){J.isScene!==!0&&(J=ye);const te=T.get(S),de=f.state.lights,Ie=f.state.shadowsArray,Re=de.state.version,De=b.getParameters(S,de.state,Ie,J,Y),Le=b.getProgramCacheKey(De);let Ke=te.program,Je=!0;if(Ke===void 0)S.addEventListener("dispose",Wt);else if(Ke.cacheKey!==Le)ci(S);else if(te.lightsStateVersion!==Re)Je=!1;else if(De.shaderID!==void 0){const ze=S.isMeshStandardMaterial?J.environment:null;te.envMap=L.get(S.envMap||ze);return}else Je=!1;Je&&(De.uniforms=b.getUniforms(S),S.onBeforeCompile(De,h),Ke=b.acquireProgram(De,Le),te.program=Ke,te.uniforms=De.uniforms,te.outputEncoding=De.outputEncoding);const Se=te.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(te.numClippingPlanes=U.numPlanes,te.numIntersection=U.numIntersection,Se.clippingPlanes=U.uniform),te.environment=S.isMeshStandardMaterial?J.environment:null,te.fog=J.fog,te.envMap=L.get(S.envMap||te.environment),te.needsLights=lo(S),te.lightsStateVersion=Re,te.needsLights&&(Se.ambientLightColor.value=de.state.ambient,Se.lightProbe.value=de.state.probe,Se.directionalLights.value=de.state.directional,Se.directionalLightShadows.value=de.state.directionalShadow,Se.spotLights.value=de.state.spot,Se.spotLightShadows.value=de.state.spotShadow,Se.rectAreaLights.value=de.state.rectArea,Se.ltc_1.value=de.state.rectAreaLTC1,Se.ltc_2.value=de.state.rectAreaLTC2,Se.pointLights.value=de.state.point,Se.pointLightShadows.value=de.state.pointShadow,Se.hemisphereLights.value=de.state.hemi,Se.directionalShadowMap.value=de.state.directionalShadowMap,Se.directionalShadowMatrix.value=de.state.directionalShadowMatrix,Se.spotShadowMap.value=de.state.spotShadowMap,Se.spotShadowMatrix.value=de.state.spotShadowMatrix,Se.pointShadowMap.value=de.state.pointShadowMap,Se.pointShadowMatrix.value=de.state.pointShadowMatrix);const Ge=te.program.getUniforms(),cn=Fn.seqWithValue(Ge.seq,Se);te.uniformsList=cn}function hi(S,J,Y,te){J.isScene!==!0&&(J=ye),C.resetTextureUnits();const de=J.fog,Ie=Y.isMeshStandardMaterial?J.environment:null,Re=p===null?h.outputEncoding:p.texture.encoding,De=L.get(Y.envMap||Ie),Le=T.get(Y),Ke=f.state.lights;if(oe===!0&&(se===!0||S!==B)){const tt=S===B&&Y.id===A;U.setState(Y,S,tt)}Y.version===Le.__version?(Y.fog&&Le.fog!==de||(Le.environment!==Ie||(Le.needsLights&&Le.lightsStateVersion!==Ke.state.version||(Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==U.numPlanes||Le.numIntersection!==U.numIntersection)||(Le.outputEncoding!==Re||Le.envMap!==De)))))&&et(Y,J,te):(et(Y,J,te),Le.__version=Y.version);let Je=!1,Se=!1,Ge=!1;const cn=Le.program,ze=cn.getUniforms(),Vn=Le.uniforms;if(M.useProgram(cn.program)&&(Je=!0,Se=!0,Ge=!0),Y.id!==A&&(A=Y.id,Se=!0),Je||B!==S){if(ze.setValue($,"projectionMatrix",S.projectionMatrix),P.logarithmicDepthBuffer&&ze.setValue($,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),B!==S&&(B=S,Se=!0,Ge=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const tt=ze.map.cameraPosition;tt!==void 0&&tt.setValue($,ce.setFromMatrixPosition(S.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ze.setValue($,"isOrthographic",S.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||Y.skinning)&&ze.setValue($,"viewMatrix",S.matrixWorldInverse)}if(Y.skinning){ze.setOptional($,te,"bindMatrix"),ze.setOptional($,te,"bindMatrixInverse");const tt=te.skeleton;if(tt){const co=tt.bones;if(P.floatVertexTextures){if(tt.boneTexture===void 0){let pt=Math.sqrt(co.length*4);pt=Te.ceilPowerOfTwo(pt),pt=Math.max(pt,4);const dr=new Float32Array(pt*pt*4);dr.set(tt.boneMatrices);const di=new Fi(dr,pt,pt,Dt,Pt);tt.boneMatrices=dr,tt.boneTexture=di,tt.boneTextureSize=pt}ze.setValue($,"boneTexture",tt.boneTexture,C),ze.setValue($,"boneTextureSize",tt.boneTextureSize)}else ze.setOptional($,tt,"boneMatrices")}}return(Se||Le.receiveShadow!==te.receiveShadow)&&(Le.receiveShadow=te.receiveShadow,ze.setValue($,"receiveShadow",te.receiveShadow)),Se&&(ze.setValue($,"toneMappingExposure",h.toneMappingExposure),Le.needsLights&&hr(Vn,Ge),de&&Y.fog&&_.refreshFogUniforms(Vn,de),_.refreshMaterialUniforms(Vn,Y,G,I),Fn.upload($,Le.uniformsList,Vn,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fn.upload($,Le.uniformsList,Vn,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ze.setValue($,"center",te.center),ze.setValue($,"modelViewMatrix",te.modelViewMatrix),ze.setValue($,"normalMatrix",te.normalMatrix),ze.setValue($,"modelMatrix",te.matrixWorld),cn}function hr(S,J){S.ambientLightColor.needsUpdate=J,S.lightProbe.needsUpdate=J,S.directionalLights.needsUpdate=J,S.directionalLightShadows.needsUpdate=J,S.pointLights.needsUpdate=J,S.pointLightShadows.needsUpdate=J,S.spotLights.needsUpdate=J,S.spotLightShadows.needsUpdate=J,S.rectAreaLights.needsUpdate=J,S.hemisphereLights.needsUpdate=J}function lo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){y!==S&&p===null&&$.bindFramebuffer(36160,S),y=S},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return g},this.getRenderList=function(){return u},this.setRenderList=function(S){u=S},this.getRenderState=function(){return f},this.setRenderState=function(S){f=S},this.getRenderTarget=function(){return p},this.setRenderTarget=function(S,J=0,Y=0){p=S,v=J,g=Y,S&&T.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S);let te=y,de=!1;if(S){const Ie=T.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(te=Ie[J],de=!0):S.isWebGLMultisampleRenderTarget?te=T.get(S).__webglMultisampledFramebuffer:te=Ie,H.copy(S.viewport),Q.copy(S.scissor),ee=S.scissorTest}else H.copy(k).multiplyScalar(G).floor(),Q.copy(F).multiplyScalar(G).floor(),ee=V;if(D!==te&&($.bindFramebuffer(36160,te),D=te),M.viewport(H),M.scissor(Q),M.setScissorTest(ee),de){const Ie=T.get(S.texture);$.framebufferTexture2D(36160,36064,34069+J,Ie.__webglTexture,Y)}},this.readRenderTargetPixels=function(S,J,Y,te,de,Ie,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=T.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){let Le=!1;De!==D&&($.bindFramebuffer(36160,De),Le=!0);try{const Ke=S.texture,Je=Ke.format,Se=Ke.type;if(Je!==Dt&&ge.convert(Je)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se!==Ct&&ge.convert(Se)!==$.getParameter(35738)&&!(Se===Pt&&(P.isWebGL2||x.get("OES_texture_float")||x.get("WEBGL_color_buffer_float")))&&!(Se===Tn&&(P.isWebGL2?x.get("EXT_color_buffer_float"):x.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$.checkFramebufferStatus(36160)===36053?J>=0&&J<=S.width-te&&Y>=0&&Y<=S.height-de&&$.readPixels(J,Y,te,de,ge.convert(Je),ge.convert(Se),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Le&&$.bindFramebuffer(36160,D)}}},this.copyFramebufferToTexture=function(S,J,Y){Y===void 0&&(Y=0);const te=Math.pow(2,-Y),de=Math.floor(J.image.width*te),Ie=Math.floor(J.image.height*te),Re=ge.convert(J.format);C.setTexture2D(J,0),$.copyTexImage2D(3553,Y,Re,S.x,S.y,de,Ie,0),M.unbindTexture()},this.copyTextureToTexture=function(S,J,Y,te){te===void 0&&(te=0);const de=J.image.width,Ie=J.image.height,Re=ge.convert(Y.format),De=ge.convert(Y.type);C.setTexture2D(Y,0),$.pixelStorei(37440,Y.flipY),$.pixelStorei(37441,Y.premultiplyAlpha),$.pixelStorei(3317,Y.unpackAlignment),J.isDataTexture?$.texSubImage2D(3553,te,S.x,S.y,de,Ie,Re,De,J.image.data):J.isCompressedTexture?$.compressedTexSubImage2D(3553,te,S.x,S.y,J.mipmaps[0].width,J.mipmaps[0].height,Re,J.mipmaps[0].data):$.texSubImage2D(3553,te,S.x,S.y,Re,De,J.image),te===0&&Y.generateMipmaps&&$.generateMipmap(3553),M.unbindTexture()},this.initTexture=function(S){C.setTexture2D(S,0),M.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Kl(e){ws.call(this,e)}Kl.prototype=Object.assign(Object.create(ws.prototype),{constructor:Kl,isWebGL1Renderer:!0});class Qo extends be{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}function vt(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Te.generateUUID()}Object.defineProperty(vt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(vt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Te.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new vt(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Te.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const ti=new R;function vn(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(vn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(vn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)ti.x=this.getX(t),ti.y=this.getY(t),ti.z=this.getZ(t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ee(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function ni(e){we.call(this),this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}ni.prototype=Object.create(we.prototype);ni.prototype.constructor=ni;ni.prototype.isSpriteMaterial=!0;ni.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let ki;const Nr=new R,Gi=new R,zi=new R,Hi=new ie,Or=new ie,Ql=new Ae,Ms=new R,Fr=new R,Es=new R,$l=new ie,$o=new ie,ec=new ie;function tc(e){if(be.call(this),this.type="Sprite",ki===void 0){ki=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vt(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new vn(n,3,0,!1)),ki.setAttribute("uv",new vn(n,2,3,!1))}this.geometry=ki,this.material=e!==void 0?e:new ni,this.center=new ie(.5,.5)}tc.prototype=Object.assign(Object.create(be.prototype),{constructor:tc,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Ql.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-zi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Ts(Ms.set(-.5,-.5,0),zi,s,Gi,i,r),Ts(Fr.set(.5,-.5,0),zi,s,Gi,i,r),Ts(Es.set(.5,.5,0),zi,s,Gi,i,r),$l.set(0,0),$o.set(1,0),ec.set(1,1);let o=e.ray.intersectTriangle(Ms,Fr,Es,!1,Nr);if(o===null&&(Ts(Fr.set(-.5,.5,0),zi,s,Gi,i,r),$o.set(0,1),o=e.ray.intersectTriangle(Ms,Es,Fr,!1,Nr),o===null))return;const a=e.ray.origin.distanceTo(Nr);if(a<e.near||a>e.far)return;t.push({distance:a,point:Nr.clone(),uv:ht.getUV(Nr,Ms,Fr,Es,$l,$o,ec,new ie),face:null,object:this})},copy:function(e){return be.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Ts(e,t,n,i,r,s){Hi.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(Or.x=s*Hi.x-r*Hi.y,Or.y=r*Hi.x+s*Hi.y):Or.copy(Hi),e.copy(t),e.x+=Or.x,e.y+=Or.y,e.applyMatrix4(Ql)}const Ss=new R,nc=new R;function ea(){be.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}ea.prototype=Object.assign(Object.create(be.prototype),{constructor:ea,isLOD:!0,copy:function(e){be.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){const n=this.levels;if(n.length>0){Ss.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ss);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){Ss.setFromMatrixPosition(e.matrixWorld),nc.setFromMatrixPosition(this.matrixWorld);const n=Ss.distanceTo(nc)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=be.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}});function Br(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),ke.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}Br.prototype=Object.assign(Object.create(ke.prototype),{constructor:Br,isSkinnedMesh:!0,copy:function(e){return ke.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==Infinity?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){ke.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const e=new R,t=new Ue,n=new Ue,i=new R,r=new Ae;return function(s,o){const a=this.skeleton,l=this.geometry;t.fromBufferAttribute(l.attributes.skinIndex,s),n.fromBufferAttribute(l.attributes.skinWeight,s),e.fromBufferAttribute(l.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let c=0;c<4;c++){const d=n.getComponent(c);if(d!==0){const u=t.getComponent(c);r.multiplyMatrices(a.bones[u].matrixWorld,a.boneInverses[u]),o.addScaledVector(i.copy(e).applyMatrix4(r),d)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const ic=new Ae,og=new Ae;function Ur(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}Object.assign(Ur.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:og;ic.multiplyMatrices(o,t[r]),ic.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new Ur(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}return},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function As(){be.call(this),this.type="Bone"}As.prototype=Object.assign(Object.create(be.prototype),{constructor:As,isBone:!0});const rc=new Ae,sc=new Ae,Rs=[],kr=new ke;function oc(e,t,n){ke.call(this,e,t),this.instanceMatrix=new Ee(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}oc.prototype=Object.assign(Object.create(ke.prototype),{constructor:oc,isInstancedMesh:!0,copy:function(e){return ke.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},setColorAt:function(e,t){this.instanceColor===null&&(this.instanceColor=new Ee(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material===void 0)return;for(let r=0;r<i;r++){this.getMatrixAt(r,rc),sc.multiplyMatrices(n,rc),kr.matrixWorld=sc,kr.raycast(e,Rs);for(let s=0,o=Rs.length;s<o;s++){const a=Rs[s];a.instanceId=r,a.object=this,t.push(a)}Rs.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function yt(e){we.call(this),this.type="LineBasicMaterial",this.color=new me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}yt.prototype=Object.create(we.prototype);yt.prototype.constructor=yt;yt.prototype.isLineBasicMaterial=!0;yt.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const ac=new R,lc=new R,cc=new Ae,Ls=new Mr,Cs=new Xt;function Bn(e,t,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),be.call(this),this.type="Line",this.geometry=e!==void 0?e:new Fe,this.material=t!==void 0?t:new yt,this.updateMorphTargets()}Bn.prototype=Object.assign(Object.create(be.prototype),{constructor:Bn,isLine:!0,copy:function(e){return be.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ac.fromBufferAttribute(t,i-1),lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;cc.getInverse(i),Ls.copy(e.ray).applyMatrix4(cc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new R,l=new R,c=new R,d=new R,u=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,h=n.attributes,m=h.position;if(f!==null){const y=f.array;for(let v=0,g=y.length-1;v<g;v+=u){const p=y[v],D=y[v+1];a.fromBufferAttribute(m,p),l.fromBufferAttribute(m,D);const A=Ls.distanceSqToSegment(a,l,d,c);if(A>o)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);if(B<e.near||B>e.far)continue;t.push({distance:B,point:c.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=m.count-1;y<v;y+=u){a.fromBufferAttribute(m,y),l.fromBufferAttribute(m,y+1);const g=Ls.distanceSqToSegment(a,l,d,c);if(g>o)continue;d.applyMatrix4(this.matrixWorld);const p=e.ray.origin.distanceTo(d);if(p<e.near||p>e.far)continue;t.push({distance:p,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const f=n.vertices,h=f.length;for(let m=0;m<h-1;m+=u){const y=Ls.distanceSqToSegment(f[m],f[m+1],d,c);if(y>o)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);if(v<e.near||v>e.far)continue;t.push({distance:v,point:c.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Ps=new R,Is=new R;function Vi(e,t){Bn.call(this,e,t),this.type="LineSegments"}Vi.prototype=Object.assign(Object.create(Bn.prototype),{constructor:Vi,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ps.fromBufferAttribute(t,i),Is.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ps.distanceTo(Is);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)Ps.copy(t[i]),Is.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ps.distanceTo(Is)}return this}});function Ds(e,t){Bn.call(this,e,t),this.type="LineLoop"}Ds.prototype=Object.assign(Object.create(Bn.prototype),{constructor:Ds,isLineLoop:!0});function yn(e){we.call(this),this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}yn.prototype=Object.create(we.prototype);yn.prototype.constructor=yn;yn.prototype.isPointsMaterial=!0;yn.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const uc=new Ae,ta=new Mr,Ns=new Xt,Os=new R;function Fs(e,t){be.call(this),this.type="Points",this.geometry=e!==void 0?e:new Fe,this.material=t!==void 0?t:new yn,this.updateMorphTargets()}Fs.prototype=Object.assign(Object.create(be.prototype),{constructor:Fs,isPoints:!0,copy:function(e){return be.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;uc.getInverse(i),ta.copy(e.ray).applyMatrix4(uc);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes,c=l.position;if(a!==null){const d=a.array;for(let u=0,f=d.length;u<f;u++){const h=d[u];Os.fromBufferAttribute(c,h),na(Os,h,o,i,e,t,this)}}else for(let d=0,u=c.count;d<u;d++)Os.fromBufferAttribute(c,d),na(Os,d,o,i,e,t,this)}else{const a=n.vertices;for(let l=0,c=a.length;l<c;l++)na(a[l],l,o,i,e,t,this)}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function na(e,t,n,i,r,s,o){const a=ta.distanceSqToPoint(e);if(a<n){const l=new R;ta.closestPointToPoint(e,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}function hc(e,t,n,i,r,s,o,a,l){He.call(this,e,t,n,i,r,s,o,a,l),this.format=o!==void 0?o:It,this.minFilter=s!==void 0?s:je,this.magFilter=r!==void 0?r:je,this.generateMipmaps=!1;const c=this;function d(){c.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}hc.prototype=Object.assign(Object.create(He.prototype),{constructor:hc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const e=this.image,t="requestVideoFrameCallback"in e;t===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Gr(e,t,n,i,r,s,o,a,l,c,d,u){He.call(this,null,s,o,a,l,c,i,r,d,u),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Gr.prototype=Object.create(He.prototype);Gr.prototype.constructor=Gr;Gr.prototype.isCompressedTexture=!0;function Wi(e,t,n,i,r,s,o,a,l){He.call(this,e,t,n,i,r,s,o,a,l),this.needsUpdate=!0}Wi.prototype=Object.create(He.prototype);Wi.prototype.constructor=Wi;Wi.prototype.isCanvasTexture=!0;function Bs(e,t,n,i,r,s,o,a,l,c){if(c=c!==void 0?c:gi,c!==gi&&c!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===gi&&(n=ts),n===void 0&&c===yr&&(n=vr),He.call(this,null,i,r,s,o,a,c,n,l),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ye,this.minFilter=a!==void 0?a:Ye,this.flipY=!1,this.generateMipmaps=!1}Bs.prototype=Object.create(He.prototype);Bs.prototype.constructor=Bs;Bs.prototype.isDepthTexture=!0;let ag=0;const Kt=new Ae,ia=new be,Us=new R;function Ht(){Object.defineProperty(this,"id",{value:ag+=2}),this.uuid=Te.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Ht.prototype=Object.assign(Object.create(un.prototype),{constructor:Ht,isGeometry:!0,applyMatrix4:function(e){const t=new mt().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++){const r=this.vertices[n];r.applyMatrix4(e)}for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this},rotateY:function(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this},rotateZ:function(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this},translate:function(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this},scale:function(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this},lookAt:function(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this},fromBufferGeometry:function(e){const t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,l=i.uv2;l!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<r.count;u++)t.vertices.push(new R().fromBufferAttribute(r,u)),o!==void 0&&t.colors.push(new me().fromBufferAttribute(o,u));function c(u,f,h,m){const y=o===void 0?[]:[t.colors[u].clone(),t.colors[f].clone(),t.colors[h].clone()],v=s===void 0?[]:[new R().fromBufferAttribute(s,u),new R().fromBufferAttribute(s,f),new R().fromBufferAttribute(s,h)],g=new Fo(u,f,h,v,y,m);t.faces.push(g),a!==void 0&&t.faceVertexUvs[0].push([new ie().fromBufferAttribute(a,u),new ie().fromBufferAttribute(a,f),new ie().fromBufferAttribute(a,h)]),l!==void 0&&t.faceVertexUvs[1].push([new ie().fromBufferAttribute(l,u),new ie().fromBufferAttribute(l,f),new ie().fromBufferAttribute(l,h)])}const d=e.groups;if(d.length>0)for(let u=0;u<d.length;u++){const f=d[u],h=f.start,m=f.count;for(let y=h,v=h+m;y<v;y+=3)n!==void 0?c(n.getX(y),n.getX(y+1),n.getX(y+2),f.materialIndex):c(y,y+1,y+2,f.materialIndex)}else if(n!==void 0)for(let u=0;u<n.count;u+=3)c(n.getX(u),n.getX(u+1),n.getX(u+2));else for(let u=0;u<r.count;u+=3)c(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this},normalize:function(){this.computeBoundingSphere();const e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new Ae;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const e=new R,t=new R;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];e.subVectors(a,o),t.subVectors(s,o),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);const t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new R;if(e){const n=new R,i=new R;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],l=this.vertices[o.b],c=this.vertices[o.c];n.subVectors(c,l),i.subVectors(a,l),n.cross(i),t[o.a].add(n),t[o.b].add(n),t[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(t[r.a]),s[1].copy(t[r.b]),s[2].copy(t[r.c])):(s[0]=t[r.a].clone(),s[1]=t[r.b].clone(),s[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){const n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const e=new Ht;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];const r=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const l=new R,c={a:new R,b:new R,c:new R};r.push(l),s.push(c)}}const i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],l=i.vertexNormals[r];a.copy(o.normal),l.a.copy(o.vertexNormals[0]),l.b.copy(o.vertexNormals[1]),l.c.copy(o.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i;const r=this.vertices.length,s=this.vertices,o=e.vertices,a=this.faces,l=e.faces,c=this.colors,d=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new mt().getNormalMatrix(t));for(let u=0,f=o.length;u<f;u++){const h=o[u],m=h.clone();t!==void 0&&m.applyMatrix4(t),s.push(m)}for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone());for(let u=0,f=l.length;u<f;u++){const h=l[u];let m,y;const v=h.vertexNormals,g=h.vertexColors,p=new Fo(h.a+r,h.b+r,h.c+r);p.normal.copy(h.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let D=0,A=v.length;D<A;D++)m=v[D].clone(),i!==void 0&&m.applyMatrix3(i).normalize(),p.vertexNormals.push(m);p.color.copy(h.color);for(let D=0,A=g.length;D<A;D++)y=g[D],p.vertexColors.push(y.clone());p.materialIndex=h.materialIndex+n,a.push(p)}for(let u=0,f=e.faceVertexUvs.length;u<f;u++){const h=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let m=0,y=h.length;m<y;m++){const v=h[m],g=[];for(let p=0,D=v.length;p<D;p++)g.push(v[p].clone());this.faceVertexUvs[u].push(g)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){const e={},t=[],n=[],i=4,r=Math.pow(10,i);for(let a=0,l=this.vertices.length;a<l;a++){const c=this.vertices[a],d=Math.round(c.x*r)+"_"+Math.round(c.y*r)+"_"+Math.round(c.z*r);e[d]===void 0?(e[d]=a,t.push(this.vertices[a]),n[a]=t.length-1):n[a]=n[e[d]]}const s=[];for(let a=0,l=this.faces.length;a<l;a++){const c=this.faces[a];c.a=n[c.a],c.b=n[c.b],c.c=n[c.c];const d=[c.a,c.b,c.c];for(let u=0;u<3;u++)if(d[u]===d[(u+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const l=s[a];this.faces.splice(l,1);for(let c=0,d=this.faceVertexUvs.length;c<d;c++)this.faceVertexUvs[c].splice(l,1)}const o=this.vertices.length-t.length;return this.vertices=t,o},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){const i=e[t];this.vertices.push(new R(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function n(a,l){return a.materialIndex-l.materialIndex}e.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===t&&(s=[]),r&&r.length===t&&(o=[]);for(let a=0;a<t;a++){const l=e[a]._id;s&&s.push(i[l]),o&&o.push(r[l])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}const t=[];for(let h=0;h<this.vertices.length;h++){const m=this.vertices[h];t.push(m.x,m.y,m.z)}const n=[],i=[],r={},s=[],o={},a=[],l={};for(let h=0;h<this.faces.length;h++){const m=this.faces[h],y=!0,v=!1,g=this.faceVertexUvs[0][h]!==void 0,p=m.normal.length()>0,D=m.vertexNormals.length>0,A=m.color.r!==1||m.color.g!==1||m.color.b!==1,B=m.vertexColors.length>0;let E=0;if(E=c(E,0,0),E=c(E,1,y),E=c(E,2,v),E=c(E,3,g),E=c(E,4,p),E=c(E,5,D),E=c(E,6,A),E=c(E,7,B),n.push(E),n.push(m.a,m.b,m.c),n.push(m.materialIndex),g){const H=this.faceVertexUvs[0][h];n.push(f(H[0]),f(H[1]),f(H[2]))}if(p&&n.push(d(m.normal)),D){const H=m.vertexNormals;n.push(d(H[0]),d(H[1]),d(H[2]))}if(A&&n.push(u(m.color)),B){const H=m.vertexColors;n.push(u(H[0]),u(H[1]),u(H[2]))}}function c(h,m,y){return y?h|1<<m:h&~(1<<m)}function d(h){const m=h.x.toString()+h.y.toString()+h.z.toString();return r[m]!==void 0||(r[m]=i.length/3,i.push(h.x,h.y,h.z)),r[m]}function u(h){const m=h.r.toString()+h.g.toString()+h.b.toString();return o[m]!==void 0||(o[m]=s.length,s.push(h.getHex())),o[m]}function f(h){const m=h.x.toString()+h.y.toString();return l[m]!==void 0||(l[m]=a.length/2,a.push(h.x,h.y)),l[m]}return e.data={},e.data.vertices=t,e.data.normals=i,s.length>0&&(e.data.colors=s),a.length>0&&(e.data.uvs=[a]),e.data.faces=n,e},clone:function(){return new Ht().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;const t=e.vertices;for(let u=0,f=t.length;u<f;u++)this.vertices.push(t[u].clone());const n=e.colors;for(let u=0,f=n.length;u<f;u++)this.colors.push(n[u].clone());const i=e.faces;for(let u=0,f=i.length;u<f;u++)this.faces.push(i[u].clone());for(let u=0,f=e.faceVertexUvs.length;u<f;u++){const h=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let m=0,y=h.length;m<y;m++){const v=h[m],g=[];for(let p=0,D=v.length;p<D;p++){const A=v[p];g.push(A.clone())}this.faceVertexUvs[u].push(g)}}const r=e.morphTargets;for(let u=0,f=r.length;u<f;u++){const h={};if(h.name=r[u].name,r[u].vertices!==void 0){h.vertices=[];for(let m=0,y=r[u].vertices.length;m<y;m++)h.vertices.push(r[u].vertices[m].clone())}if(r[u].normals!==void 0){h.normals=[];for(let m=0,y=r[u].normals.length;m<y;m++)h.normals.push(r[u].normals[m].clone())}this.morphTargets.push(h)}const s=e.morphNormals;for(let u=0,f=s.length;u<f;u++){const h={};if(s[u].vertexNormals!==void 0){h.vertexNormals=[];for(let m=0,y=s[u].vertexNormals.length;m<y;m++){const v=s[u].vertexNormals[m],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),h.vertexNormals.push(g)}}if(s[u].faceNormals!==void 0){h.faceNormals=[];for(let m=0,y=s[u].faceNormals.length;m<y;m++)h.faceNormals.push(s[u].faceNormals[m].clone())}this.morphNormals.push(h)}const o=e.skinWeights;for(let u=0,f=o.length;u<f;u++)this.skinWeights.push(o[u].clone());const a=e.skinIndices;for(let u=0,f=a.length;u<f;u++)this.skinIndices.push(a[u].clone());const l=e.lineDistances;for(let u=0,f=l.length;u<f;u++)this.lineDistances.push(l[u]);const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const kv=new R,Gv=new R,zv=new R,Hv=new ht,cg={triangulate:function(e,t,n){n=n||2;const i=t&&t.length,r=i?t[0]*n:e.length;let s=dc(e,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,u,f,h;if(i&&(s=lg(e,t,s,n)),e.length>80*n){a=c=e[0],l=d=e[1];for(let m=n;m<r;m+=n)u=e[m],f=e[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>d&&(d=f);h=Math.max(c-a,d-l),h=h!==0?1/h:0}return zr(s,o,n,a,l,h),o}};function dc(e,t,n,i,r){let s,o;if(r===ug(e,t,n,i)>0)for(s=t;s<n;s+=i)o=fc(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=fc(s,e[s],e[s+1],o);return o&&ks(o,o.next)&&(Hr(o),o=o.next),o}function Un(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(ks(n,n.next)||Xe(n.prev,n,n.next)===0)){if(Hr(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function zr(e,t,n,i,r,s,o){if(!e)return;!o&&s&&mg(e,i,r,s);let a=e,l,c;for(;e.prev!==e.next;){if(l=e.prev,c=e.next,s?dg(e,i,r,s):hg(e)){t.push(l.i/n),t.push(e.i/n),t.push(c.i/n),Hr(e),e=c.next,a=c.next;continue}if(e=c,e===a){o?o===1?(e=fg(Un(e),t,n),zr(e,t,n,i,r,s,2)):o===2&&pg(e,t,n,i,r,s):zr(Un(e),t,n,i,r,s,1);break}}}function hg(e){const t=e.prev,n=e,i=e.next;if(Xe(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(ji(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Xe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function dg(e,t,n,i){const r=e.prev,s=e,o=e.next;if(Xe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,d=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=ra(a,l,t,n,i),f=ra(c,d,t,n,i);let h=e.prevZ,m=e.nextZ;for(;h&&h.z>=u&&m&&m.z<=f;){if(h!==e.prev&&h!==e.next&&ji(r.x,r.y,s.x,s.y,o.x,o.y,h.x,h.y)&&Xe(h.prev,h,h.next)>=0)return!1;if(h=h.prevZ,m!==e.prev&&m!==e.next&&ji(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;h&&h.z>=u;){if(h!==e.prev&&h!==e.next&&ji(r.x,r.y,s.x,s.y,o.x,o.y,h.x,h.y)&&Xe(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;m&&m.z<=f;){if(m!==e.prev&&m!==e.next&&ji(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function fg(e,t,n){let i=e;do{const r=i.prev,s=i.next.next;!ks(r,s)&&pc(r,i,i.next,s)&&Vr(r,s)&&Vr(s,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(s.i/n),Hr(i),Hr(i.next),i=e=s),i=i.next}while(i!==e);return Un(i)}function pg(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gg(o,a)){let l=mc(o,a);o=Un(o,o.next),l=Un(l,l.next),zr(o,t,n,i,r,s),zr(l,t,n,i,r,s);return}a=a.next}o=o.next}while(o!==e)}function lg(e,t,n,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:e.length,c=dc(e,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(xg(c));for(r.sort(vg),s=0;s<r.length;s++)yg(r[s],n),n=Un(n,n.next);return n}function vg(e,t){return e.x-t.x}function yg(e,t){if(t=bg(e,t),t){const n=mc(t,e);Un(t,t.next),Un(n,n.next)}}function bg(e,t){let n=t;const i=e.x,r=e.y;let s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s){if(s=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(i===s)return o;const a=o,l=o.x,c=o.y;let d=Infinity,u;n=o;do i>=n.x&&n.x>=l&&i!==n.x&&ji(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),Vr(n,e)&&(u<d||u===d&&(n.x>o.x||n.x===o.x&&_g(o,n)))&&(o=n,d=u)),n=n.next;while(n!==a);return o}function _g(e,t){return Xe(e.prev,e,t.prev)<0&&Xe(t.next,e,e.next)<0}function mg(e,t,n,i){let r=e;do r.z===null&&(r.z=ra(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,wg(r)}function wg(e){let t,n,i,r,s,o,a,l,c=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<c&&!(a++,i=i.nextZ,!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return e}function ra(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xg(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ji(e,t,n,i,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(i-a)-(n-o)*(t-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function gg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Mg(e,t)&&(Vr(e,t)&&Vr(t,e)&&Eg(e,t)&&(Xe(e.prev,e,t.prev)||Xe(e,t.prev,t))||ks(e,t)&&Xe(e.prev,e,e.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ks(e,t){return e.x===t.x&&e.y===t.y}function pc(e,t,n,i){const r=zs(Xe(e,t,n)),s=zs(Xe(e,t,i)),o=zs(Xe(n,i,e)),a=zs(Xe(n,i,t));return r!==s&&o!==a||(r===0&&Gs(e,n,t)||(s===0&&Gs(e,i,t)||o===0&&Gs(n,e,i)))?!0:!!(a===0&&Gs(n,t,i))}function Gs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function zs(e){return e>0?1:e<0?-1:0}function Mg(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&pc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Vr(e,t){return Xe(e.prev,e,e.next)<0?Xe(e,t,e.next)>=0&&Xe(e,e.prev,t)>=0:Xe(e,t,e.prev)<0||Xe(e,e.next,t)<0}function Eg(e,t){let n=e,i=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!==n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function mc(e,t){const n=new sa(e.i,e.x,e.y),i=new sa(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function fc(e,t,n,i){const r=new sa(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Hr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function sa(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ug(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}const kn={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return kn.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];gc(e),vc(n,e);let s=e.length;t.forEach(gc);for(let a=0;a<t.length;a++)i.push(s),s+=t[a].length,vc(n,t[a]);const o=cg.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function gc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function vc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class yc extends Fe{constructor(e,t){super();this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o];s(l)}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function s(o){const a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:100,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,h=t.bevelSize!==void 0?t.bevelSize:f-2,m=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Tg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let p,D=!1,A,B,E,H;v&&(p=v.getSpacedPoints(c),D=!0,u=!1,A=v.computeFrenetFrames(c,!1),B=new R,E=new R,H=new R),u||(y=0,f=0,h=0,m=0);const Q=o.extractPoints(l);let ee=Q.shape;const le=Q.holes,I=!kn.isClockWise(ee);if(I){ee=ee.reverse();for(let T=0,C=le.length;T<C;T++){const L=le[T];kn.isClockWise(L)&&(le[T]=L.reverse())}}const G=kn.triangulateShape(ee,le),O=ee;for(let T=0,C=le.length;T<C;T++){const L=le[T];ee=ee.concat(L)}function z(T,C,L){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().multiplyScalar(L).add(T)}const k=ee.length,F=G.length;function V(T,C,L){let W,j,Z;const b=T.x-C.x,_=T.y-C.y,K=L.x-T.x,X=L.y-T.y,U=b*b+_*_,ne=b*X-_*K;if(Math.abs(ne)>Number.EPSILON){const re=Math.sqrt(U),pe=Math.sqrt(K*K+X*X),ae=C.x-_/re,ge=C.y+b/re,ve=L.x-X/pe,Me=L.y+K/pe,he=((ve-ae)*X-(Me-ge)*K)/(b*X-_*K);W=ae+b*he-T.x,j=ge+_*he-T.y;const xe=W*W+j*j;if(xe<=2)return new ie(W,j);Z=Math.sqrt(xe/2)}else{let re=!1;b>Number.EPSILON?K>Number.EPSILON&&(re=!0):b<-Number.EPSILON?K<-Number.EPSILON&&(re=!0):Math.sign(_)===Math.sign(X)&&(re=!0),re?(W=-_,j=b,Z=Math.sqrt(U)):(W=b,j=_,Z=Math.sqrt(U/2))}return new ie(W/Z,j/Z)}const q=[];for(let T=0,C=O.length,L=C-1,W=T+1;T<C;T++,L++,W++)L===C&&(L=0),W===C&&(W=0),q[T]=V(O[T],O[L],O[W]);const oe=[];let se,fe=q.concat();for(let T=0,C=le.length;T<C;T++){const L=le[T];se=[];for(let W=0,j=L.length,Z=j-1,b=W+1;W<j;W++,Z++,b++)Z===j&&(Z=0),b===j&&(b=0),se[W]=V(L[W],L[Z],L[b]);oe.push(se),fe=fe.concat(se)}for(let T=0;T<y;T++){const C=T/y,L=f*Math.cos(C*Math.PI/2),W=h*Math.sin(C*Math.PI/2)+m;for(let j=0,Z=O.length;j<Z;j++){const b=z(O[j],q[j],W);w(b.x,b.y,-L)}for(let j=0,Z=le.length;j<Z;j++){const b=le[j];se=oe[j];for(let _=0,K=b.length;_<K;_++){const X=z(b[_],se[_],W);w(X.x,X.y,-L)}}}const ce=h+m;for(let T=0;T<k;T++){const C=u?z(ee[T],fe[T],ce):ee[T];D?(E.copy(A.normals[0]).multiplyScalar(C.x),B.copy(A.binormals[0]).multiplyScalar(C.y),H.copy(p[0]).add(E).add(B),w(H.x,H.y,H.z)):w(C.x,C.y,0)}for(let T=1;T<=c;T++)for(let C=0;C<k;C++){const L=u?z(ee[C],fe[C],ce):ee[C];D?(E.copy(A.normals[T]).multiplyScalar(L.x),B.copy(A.binormals[T]).multiplyScalar(L.y),H.copy(p[T]).add(E).add(B),w(H.x,H.y,H.z)):w(L.x,L.y,d/c*T)}for(let T=y-1;T>=0;T--){const C=T/y,L=f*Math.cos(C*Math.PI/2),W=h*Math.sin(C*Math.PI/2)+m;for(let j=0,Z=O.length;j<Z;j++){const b=z(O[j],q[j],W);w(b.x,b.y,d+L)}for(let j=0,Z=le.length;j<Z;j++){const b=le[j];se=oe[j];for(let _=0,K=b.length;_<K;_++){const X=z(b[_],se[_],W);D?w(X.x,X.y+p[c-1].y,p[c-1].x+L):w(X.x,X.y,d+L)}}}ye(),Ne();function ye(){const T=i.length/3;if(u){let C=0,L=k*C;for(let W=0;W<F;W++){const j=G[W];x(j[2]+L,j[1]+L,j[0]+L)}C=c+y*2,L=k*C;for(let W=0;W<F;W++){const j=G[W];x(j[0]+L,j[1]+L,j[2]+L)}}else{for(let C=0;C<F;C++){const L=G[C];x(L[2],L[1],L[0])}for(let C=0;C<F;C++){const L=G[C];x(L[0]+k*c,L[1]+k*c,L[2]+k*c)}}n.addGroup(T,i.length/3-T,0)}function Ne(){const T=i.length/3;let C=0;$(O,C),C+=O.length;for(let L=0,W=le.length;L<W;L++){const j=le[L];$(j,C),C+=j.length}n.addGroup(T,i.length/3-T,1)}function $(T,C){let L=T.length;for(;--L>=0;){const W=L;let j=L-1;j<0&&(j=T.length-1);for(let Z=0,b=c+y*2;Z<b;Z++){const _=k*Z,K=k*(Z+1),X=C+W+_,U=C+j+_,ne=C+j+K,re=C+W+K;P(X,U,ne,re)}}}function w(T,C,L){a.push(T),a.push(C),a.push(L)}function x(T,C,L){M(T),M(C),M(L);const W=i.length/3,j=g.generateTopUV(n,i,W-3,W-2,W-1);N(j[0]),N(j[1]),N(j[2])}function P(T,C,L,W){M(T),M(C),M(W),M(C),M(L),M(W);const j=i.length/3,Z=g.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);N(Z[0]),N(Z[1]),N(Z[3]),N(Z[1]),N(Z[2]),N(Z[3])}function M(T){i.push(a[T*3+0]),i.push(a[T*3+1]),i.push(a[T*3+2])}function N(T){r.push(T.x),r.push(T.y)}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Sg(t,n,e)}}const Tg={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],d=t[r*3+1];return[new ie(s,o),new ie(a,l),new ie(c,d)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],l=t[n*3+2],c=t[i*3],d=t[i*3+1],u=t[i*3+2],f=t[r*3],h=t[r*3+1],m=t[r*3+2],y=t[s*3],v=t[s*3+1],g=t[s*3+2];return Math.abs(a-d)<.01?[new ie(o,1-l),new ie(c,1-u),new ie(f,1-m),new ie(y,1-g)]:[new ie(a,1-l),new ie(d,1-u),new ie(h,1-m),new ie(v,1-g)]}};function Sg(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Rg extends Ht{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new yc(e,t)),this.mergeVertices()}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ag(t,n,e)}}function Ag(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Hs(e,t,n){Fe.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,l=new R,c=new R,d=new R,u=new R,f=new R;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const h=t+1;for(let m=0;m<=n;m++){const y=m/n;for(let v=0;v<=t;v++){const g=v/t;e(g,y,c),r.push(c.x,c.y,c.z),g-a>=0?(e(g-a,y,d),u.subVectors(c,d)):(e(g+a,y,d),u.subVectors(d,c)),y-a>=0?(e(g,y-a,d),f.subVectors(c,d)):(e(g,y+a,d),f.subVectors(d,c)),l.crossVectors(u,f).normalize(),s.push(l.x,l.y,l.z),o.push(g,y)}}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=m*h+y,g=m*h+y+1,p=(m+1)*h+y+1,D=(m+1)*h+y;i.push(v,g,D),i.push(g,p,D)}this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2))}Hs.prototype=Object.create(Fe.prototype);Hs.prototype.constructor=Hs;function oa(e,t,n){Ht.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new Hs(e,t,n)),this.mergeVertices()}oa.prototype=Object.create(Ht.prototype);oa.prototype.constructor=oa;class Cg extends Fe{constructor(e,t){super();this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;const n=[],i=[],r=[],s=[];let o=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let c=0;c<e.length;c++)l(e[c]),this.addGroup(o,a,c),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2));function l(c){const d=i.length/3,u=c.extractPoints(t);let f=u.shape;const h=u.holes;kn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,v=h.length;y<v;y++){const g=h[y];kn.isClockWise(g)===!0&&(h[y]=g.reverse())}const m=kn.triangulateShape(f,h);for(let y=0,v=h.length;y<v;y++){const g=h[y];f=f.concat(g)}for(let y=0,v=f.length;y<v;y++){const g=f[y];i.push(g.x,g.y,0),r.push(0,0,1),s.push(g.x,g.y)}for(let y=0,v=m.length;y<v;y++){const g=m[y],p=g[0]+d,D=g[1]+d,A=g[2]+d;n.push(p,D,A),a+=3}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes;return Lg(t,e)}}function Lg(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class Ig extends Ht{constructor(e,t){super();this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Cg(e,t)),this.mergeVertices()}toJSON(){const e=Ht.prototype.toJSON.call(this),t=this.parameters.shapes;return Pg(t,e)}}function Pg(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function qi(e){we.call(this),this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.setValues(e)}qi.prototype=Object.create(we.prototype);qi.prototype.constructor=qi;qi.prototype.isShadowMaterial=!0;qi.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this};function Qt(e){gt.call(this,e),this.type="RawShaderMaterial"}Qt.prototype=Object.create(gt.prototype);Qt.prototype.constructor=Qt;Qt.prototype.isRawShaderMaterial=!0;function ot(e){we.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}ot.prototype=Object.create(we.prototype);ot.prototype.constructor=ot;ot.prototype.isMeshStandardMaterial=!0;ot.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function $t(e){ot.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Te.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}$t.prototype=Object.create(ot.prototype);$t.prototype.constructor=$t;$t.prototype.isMeshPhysicalMaterial=!0;$t.prototype.copy=function(e){return ot.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new me).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function ii(e){we.call(this),this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ii.prototype=Object.create(we.prototype);ii.prototype.constructor=ii;ii.prototype.isMeshPhongMaterial=!0;ii.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Xi(e){we.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Xi.prototype=Object.create(we.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isMeshToonMaterial=!0;Xi.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Yi(e){we.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Yi.prototype=Object.create(we.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isMeshNormalMaterial=!0;Yi.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Zi(e){we.call(this),this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Zi.prototype=Object.create(we.prototype);Zi.prototype.constructor=Zi;Zi.prototype.isMeshLambertMaterial=!0;Zi.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Ji(e){we.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ji.prototype=Object.create(we.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isMeshMatcapMaterial=!0;Ji.prototype.copy=function(e){return we.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Ki(e){yt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Ki.prototype=Object.create(yt.prototype);Ki.prototype.constructor=Ki;Ki.prototype.isLineDashedMaterial=!0;Ki.prototype.copy=function(e){return yt.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Dg=Object.freeze({__proto__:null,ShadowMaterial:qi,SpriteMaterial:ni,RawShaderMaterial:Qt,ShaderMaterial:gt,PointsMaterial:yn,MeshPhysicalMaterial:$t,MeshStandardMaterial:ot,MeshPhongMaterial:ii,MeshToonMaterial:Xi,MeshNormalMaterial:Yi,MeshLambertMaterial:Zi,MeshDepthMaterial:$n,MeshDistanceMaterial:ei,MeshBasicMaterial:wt,MeshMatcapMaterial:Ji,LineDashedMaterial:Ki,LineBasicMaterial:yt,Material:we});const qe={arraySlice:function(e,t,n){return qe.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let l=0;l!==t;++l)r[o++]=e[a+l]}return r},flattenJSON:function(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o===void 0)return;if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)},subclip:function(e,t,n,i,r){r=r||30;const s=e.clone();s.name=t;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],d=c.getValueSize(),u=[],f=[];for(let h=0;h<c.times.length;++h){const m=c.times[h]*r;if(m<n||m>=i)continue;u.push(c.times[h]);for(let y=0;y<d;++y)f.push(c.values[h*d+y])}if(u.length===0)continue;c.times=qe.convertArray(u,c.times.constructor),c.values=qe.convertArray(f,c.values.constructor),o.push(c)}s.tracks=o;let a=Infinity;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(e,t,n,i){t===void 0&&(t=0),n===void 0&&(n=e),(i===void 0||i<=0)&&(i=30);const r=n.tracks.length,s=t/i;for(let o=0;o<r;++o){const a=n.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=e.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let d=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);let f=0;const h=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);const m=a.times.length-1;let y;if(s<=a.times[0]){const g=d,p=u-d;y=qe.arraySlice(a.values,g,p)}else if(s>=a.times[m]){const g=m*u+d,p=g+u-d;y=qe.arraySlice(a.values,g,p)}else{const g=a.createInterpolant(),p=d,D=u-d;g.evaluate(s),y=qe.arraySlice(g.resultBuffer,p,D)}if(l==="quaternion"){const g=new bt().fromArray(y).normalize().conjugate();g.toArray(y)}const v=c.times.length;for(let g=0;g<v;++g){const p=g*h+f;if(l==="quaternion")bt.multiplyQuaternionsFlat(c.values,p,y,0,c.values,p);else{const D=h-f*2;for(let A=0;A<D;++A)c.values[p+A]-=y[A]}}}return e.blendMode=sl,e}};function dt(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(dt.prototype,{evaluate:function(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(dt.prototype,{beforeStart_:dt.prototype.copySampleValue_,afterEnd_:dt.prototype.copySampleValue_});function aa(e,t,n,i){dt.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}aa.prototype=Object.assign(Object.create(dt.prototype),{constructor:aa,DefaultSettings_:{endingStart:yi,endingEnd:yi},intervalChanged_:function(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case xi:r=e,o=2*t-n;break;case is:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case xi:s=e,a=2*n-t;break;case is:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=r*c,this._offsetNext=s*c},interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,h=(n-t)/(i-t),m=h*h,y=m*h,v=-u*y+2*u*m-u*h,g=(1+u)*y+(-1.5-2*u)*m+(-.5+u)*h+1,p=(-1-f)*y+(1.5+f)*m+.5*h,D=f*y-f*m;for(let A=0;A!==o;++A)r[A]=v*s[c+A]+g*s[l+A]+p*s[a+A]+D*s[d+A];return r}});function Vs(e,t,n,i){dt.call(this,e,t,n,i)}Vs.prototype=Object.assign(Object.create(dt.prototype),{constructor:Vs,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(n-t)/(i-t),d=1-c;for(let u=0;u!==o;++u)r[u]=s[l+u]*d+s[a+u]*c;return r}});function la(e,t,n,i){dt.call(this,e,t,n,i)}la.prototype=Object.assign(Object.create(dt.prototype),{constructor:la,interpolate_:function(e){return this.copySampleValue_(e-1)}});function ct(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qe.convertArray(t,this.TimeBufferType),this.values=qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ct,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:qe.convertArray(e.times,Array),values:qe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}});Object.assign(ct.prototype,{constructor:ct,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:qn,InterpolantFactoryMethodDiscrete:function(e){return new la(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Vs(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new aa(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case vi:t=this.InterpolantFactoryMethodDiscrete;break;case qn:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vi;case this.InterpolantFactoryMethodLinear:return qn;case this.InterpolantFactoryMethodSmooth:return vo}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=qe.arraySlice(n,r,s),this.values=qe.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&qe.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e},optimize:function(){const e=qe.arraySlice(this.times),t=qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===vo,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==l[0]))if(i)a=!0;else{const d=o*n,u=d-n,f=d+n;for(let h=0;h!==n;++h){const m=t[d+h];if(m!==t[u+h]||m!==t[f+h]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const d=o*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,l=0;l!==n;++l)t[a+l]=t[o+l];++s}return s!==e.length?(this.times=qe.arraySlice(e,0,s),this.values=qe.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this},clone:function(){const e=qe.arraySlice(this.times,0),t=qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function ca(e,t,n){ct.call(this,e,t,n)}ca.prototype=Object.assign(Object.create(ct.prototype),{constructor:ca,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:vi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ua(e,t,n,i){ct.call(this,e,t,n,i)}ua.prototype=Object.assign(Object.create(ct.prototype),{constructor:ua,ValueTypeName:"color"});function ri(e,t,n,i){ct.call(this,e,t,n,i)}ri.prototype=Object.assign(Object.create(ct.prototype),{constructor:ri,ValueTypeName:"number"});function ha(e,t,n,i){dt.call(this,e,t,n,i)}ha.prototype=Object.assign(Object.create(dt.prototype),{constructor:ha,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let l=e*o;for(let c=l+o;l!==c;l+=4)bt.slerpFlat(r,0,s,l-o,s,l,a);return r}});function Qi(e,t,n,i){ct.call(this,e,t,n,i)}Qi.prototype=Object.assign(Object.create(ct.prototype),{constructor:Qi,ValueTypeName:"quaternion",DefaultInterpolation:qn,InterpolantFactoryMethodLinear:function(e){return new ha(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function da(e,t,n,i){ct.call(this,e,t,n,i)}da.prototype=Object.assign(Object.create(ct.prototype),{constructor:da,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:vi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function si(e,t,n,i){ct.call(this,e,t,n,i)}si.prototype=Object.assign(Object.create(ct.prototype),{constructor:si,ValueTypeName:"vector"});function Ft(e,t,n,i){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.blendMode=i!==void 0?i:yo,this.uuid=Te.generateUUID(),this.duration<0&&this.resetDuration()}function Ng(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ri;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return ua;case"quaternion":return Qi;case"bool":case"boolean":return ca;case"string":return da}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Og(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ng(e.type);if(e.times===void 0){const n=[],i=[];qe.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Ft,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,s=n.length;r!==s;++r)t.push(Og(n[r]).scale(i));return new Ft(e.name,e.duration,t,e.blendMode)},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(ct.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],l=[];a.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const c=qe.getKeyframeOrder(a);a=qe.sortedArray(a,1,c),l=qe.sortedArray(l,1,c),!i&&a[0]===0&&(a.push(r),l.push(l[0])),s.push(new ri(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new Ft(e,-1,s)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.name.match(r);if(c&&c.length>1){const d=c[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const s=[];for(const o in i)s.push(Ft.CreateFromMorphTargetSequence(o,i[o],t,n));return s},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,h,m){if(f.length!==0){const y=[],v=[];qe.flattenJSON(f,y,v,h),y.length!==0&&m.push(new d(u,y,v))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!u||u.length===0)continue;if(u[0].morphTargets){const f={};let h;for(h=0;h<u.length;h++)if(u[h].morphTargets)for(let m=0;m<u[h].morphTargets.length;m++)f[u[h].morphTargets[m]]=-1;for(const m in f){const y=[],v=[];for(let g=0;g!==u[h].morphTargets.length;++g){const p=u[h];y.push(p.time),v.push(p.morphTarget===m?1:0)}i.push(new ri(".morphTargetInfluence["+m+"]",y,v))}a=f.length*(s||1)}else{const f=".bones["+t[d].name+"]";n(si,f+".position",u,"pos",i),n(Qi,f+".quaternion",u,"rot",i),n(si,f+".scale",u,"scl",i)}}if(i.length===0)return null;const c=new Ft(r,a,i,o);return c}});Object.assign(Ft.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new Ft(this.name,this.duration,e,this.blendMode)}});const $i={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;this.files[e]=t},get:function(e){return this.enabled===!1?void 0:this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Fg(e,t,n){const i=this;let r=!1,s=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,r===!1&&(i.onStart!==void 0&&i.onStart(c,s,o)),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],h=l[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return h}return null}}const Bg=new Fg;function Be(e){this.manager=e!==void 0?e:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Be.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const Vt={};function Bt(e){Be.call(this,e)}Bt.prototype=Object.assign(Object.create(Be.prototype),{constructor:Bt,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=$i.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(Vt[e]!==void 0){Vt[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o);let l;if(a){const c=a[1],d=!!a[2];let u=a[3];u=decodeURIComponent(u),d&&(u=atob(u));try{let f;const h=(this.responseType||"").toLowerCase();switch(h){case"arraybuffer":case"blob":const m=new Uint8Array(u.length);for(let v=0;v<u.length;v++)m[v]=u.charCodeAt(v);h==="blob"?f=new Blob([m.buffer],{type:c}):f=m.buffer;break;case"document":const y=new DOMParser;f=y.parseFromString(u,c);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Vt[e]=[],Vt[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(c){const d=this.response,u=Vt[e];if(delete Vt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),$i.add(e,d);for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(d)}r.manager.itemEnd(e)}else{for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(c){const d=Vt[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onProgress&&h.onProgress(c)}},!1),l.addEventListener("error",function(c){const d=Vt[e];delete Vt[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onError&&h.onError(c)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),l.addEventListener("abort",function(c){const d=Vt[e];delete Vt[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onError&&h.onError(c)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return r.manager.itemStart(e),l},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}});function xc(e){Be.call(this,e)}xc.prototype=Object.assign(Object.create(Be.prototype),{constructor:xc,load:function(e,t,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=Ft.parse(e[n]);t.push(i)}return t}});function bc(e){Be.call(this,e)}bc.prototype=Object.assign(Object.create(Be.prototype),{constructor:bc,load:function(e,t,n,i){const r=this,s=[],o=new Gr;o.image=s;const a=new Bt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let l=0;function c(d){a.load(e[d],function(u){const f=r.parse(u,!0);s[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=je),o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)c(d);else a.load(e,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let h=0;h<f;h++){s[h]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)s[h].mipmaps.push(u.mipmaps[h*u.mipmapCount+m]),s[h].format=u.format,s[h].width=u.width,s[h].height=u.height}}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=je),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}});function Ws(e){Be.call(this,e)}Ws.prototype=Object.assign(Object.create(Be.prototype),{constructor:Ws,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=$i.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(c){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&(this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin)),r.manager.itemStart(e),o.src=e,o}});function fa(e){Be.call(this,e)}fa.prototype=Object.assign(Object.create(Be.prototype),{constructor:fa,load:function(e,t,n,i){const r=new On,s=new Ws(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(l){s.load(e[l],function(c){r.images[l]=c,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)a(l);return r}});function er(e){Be.call(this,e)}er.prototype=Object.assign(Object.create(Be.prototype),{constructor:er,load:function(e,t,n,i){const r=this,s=new Fi,o=new Bt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(a){const l=r.parse(a);if(!l)return;l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:ut,s.wrapT=l.wrapT!==void 0?l.wrapT:ut,s.magFilter=l.magFilter!==void 0?l.magFilter:je,s.minFilter=l.minFilter!==void 0?l.minFilter:je,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=jn),l.mipmapCount===1&&(s.minFilter=je),s.needsUpdate=!0,t&&t(s,l)},n,i),s}});function Wr(e){Be.call(this,e)}Wr.prototype=Object.assign(Object.create(Be.prototype),{constructor:Wr,load:function(e,t,n,i){const r=new He,s=new Ws(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o;const a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?It:Dt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function _e(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(_e.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,a=r-1,l;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),l=n[i]-s,l<0)o=i+1;else if(l>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const c=n[i],d=n[i+1],u=d-c,f=(s-c)/u,h=(i+f)/(r-1);return h},getTangent:function(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new ie:new R);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new R,i=[],r=[],s=[],o=new R,a=new Ae;for(let f=0;f<=e;f++){const h=f/e;i[f]=this.getTangentAt(h,new R),i[f].normalize()}r[0]=new R,s[0]=new R;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const h=Math.acos(Te.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,h))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Te.clamp(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let h=1;h<=e;h++)r[h].applyMatrix4(a.makeRotationAxis(i[h],f*h)),s[h].crossVectors(i[h],r[h])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function Ut(e,t,n,i,r,s,o,a){_e.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Ut.prototype=Object.create(_e.prototype);Ut.prototype.constructor=Ut;Ut.prototype.isEllipseCurve=!0;Ut.prototype.getPoint=function(e,t){const n=t||new ie,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*d+this.aX,l=u*d+f*c+this.aY}return n.set(a,l)};Ut.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};Ut.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};Ut.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function jr(e,t,n,i,r,s){Ut.call(this,e,t,n,n,i,r,s),this.type="ArcCurve"}jr.prototype=Object.create(Ut.prototype);jr.prototype.constructor=jr;jr.prototype.isArcCurve=!0;function pa(){let e=0,t=0,n=0,i=0;function r(s,o,a,l){e=s,t=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,h=(a-o)/d-(l-o)/(d+u)+(l-a)/u;f*=d,h*=d,r(o,a,f,h)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const js=new R,ma=new pa,ga=new pa,va=new pa;function ft(e,t,n,i){_e.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}ft.prototype=Object.create(_e.prototype);ft.prototype.constructor=ft;ft.prototype.isCatmullRomCurve3=!0;ft.prototype.getPoint=function(e,t){const n=t||new R,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let l,c;this.closed||o>0?l=i[(o-1)%r]:(js.subVectors(i[0],i[1]).add(i[0]),l=js);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?c=i[(o+2)%r]:(js.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let h=Math.pow(l.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(c),f);m<1e-4&&(m=1),h<1e-4&&(h=m),y<1e-4&&(y=m),ma.initNonuniformCatmullRom(l.x,d.x,u.x,c.x,h,m,y),ga.initNonuniformCatmullRom(l.y,d.y,u.y,c.y,h,m,y),va.initNonuniformCatmullRom(l.z,d.z,u.z,c.z,h,m,y)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(l.x,d.x,u.x,c.x,this.tension),ga.initCatmullRom(l.y,d.y,u.y,c.y,this.tension),va.initCatmullRom(l.z,d.z,u.z,c.z,this.tension));return n.set(ma.calc(a),ga.calc(a),va.calc(a)),n};ft.prototype.copy=function(e){_e.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};ft.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};ft.prototype.fromJSON=function(e){_e.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function _c(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,l=e*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*e+n}function Ug(e,t){const n=1-e;return n*n*t}function kg(e,t){return 2*(1-e)*e*t}function Gg(e,t){return e*e*t}function qr(e,t,n,i){return Ug(e,t)+kg(e,n)+Gg(e,i)}function zg(e,t){const n=1-e;return n*n*n*t}function Hg(e,t){const n=1-e;return 3*n*n*e*t}function Vg(e,t){return 3*(1-e)*e*e*t}function Wg(e,t){return e*e*e*t}function Xr(e,t,n,i,r){return zg(e,t)+Hg(e,n)+Vg(e,i)+Wg(e,r)}function en(e,t,n,i){_e.call(this),this.type="CubicBezierCurve",this.v0=e||new ie,this.v1=t||new ie,this.v2=n||new ie,this.v3=i||new ie}en.prototype=Object.create(_e.prototype);en.prototype.constructor=en;en.prototype.isCubicBezierCurve=!0;en.prototype.getPoint=function(e,t){const n=t||new ie,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Xr(e,i.x,r.x,s.x,o.x),Xr(e,i.y,r.y,s.y,o.y)),n};en.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};en.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};en.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function xn(e,t,n,i){_e.call(this),this.type="CubicBezierCurve3",this.v0=e||new R,this.v1=t||new R,this.v2=n||new R,this.v3=i||new R}xn.prototype=Object.create(_e.prototype);xn.prototype.constructor=xn;xn.prototype.isCubicBezierCurve3=!0;xn.prototype.getPoint=function(e,t){const n=t||new R,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Xr(e,i.x,r.x,s.x,o.x),Xr(e,i.y,r.y,s.y,o.y),Xr(e,i.z,r.z,s.z,o.z)),n};xn.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};xn.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};xn.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Tt(e,t){_e.call(this),this.type="LineCurve",this.v1=e||new ie,this.v2=t||new ie}Tt.prototype=Object.create(_e.prototype);Tt.prototype.constructor=Tt;Tt.prototype.isLineCurve=!0;Tt.prototype.getPoint=function(e,t){const n=t||new ie;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};Tt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};Tt.prototype.getTangent=function(e,t){const n=t||new ie;return n.copy(this.v2).sub(this.v1).normalize(),n};Tt.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Tt.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Tt.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function tn(e,t){_e.call(this),this.type="LineCurve3",this.v1=e||new R,this.v2=t||new R}tn.prototype=Object.create(_e.prototype);tn.prototype.constructor=tn;tn.prototype.isLineCurve3=!0;tn.prototype.getPoint=function(e,t){const n=t||new R;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};tn.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};tn.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};tn.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};tn.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function nn(e,t,n){_e.call(this),this.type="QuadraticBezierCurve",this.v0=e||new ie,this.v1=t||new ie,this.v2=n||new ie}nn.prototype=Object.create(_e.prototype);nn.prototype.constructor=nn;nn.prototype.isQuadraticBezierCurve=!0;nn.prototype.getPoint=function(e,t){const n=t||new ie,i=this.v0,r=this.v1,s=this.v2;return n.set(qr(e,i.x,r.x,s.x),qr(e,i.y,r.y,s.y)),n};nn.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};nn.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};nn.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function bn(e,t,n){_e.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new R,this.v1=t||new R,this.v2=n||new R}bn.prototype=Object.create(_e.prototype);bn.prototype.constructor=bn;bn.prototype.isQuadraticBezierCurve3=!0;bn.prototype.getPoint=function(e,t){const n=t||new R,i=this.v0,r=this.v1,s=this.v2;return n.set(qr(e,i.x,r.x,s.x),qr(e,i.y,r.y,s.y),qr(e,i.z,r.z,s.z)),n};bn.prototype.copy=function(e){return _e.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};bn.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};bn.prototype.fromJSON=function(e){return _e.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function rn(e){_e.call(this),this.type="SplineCurve",this.points=e||[]}rn.prototype=Object.create(_e.prototype);rn.prototype.constructor=rn;rn.prototype.isSplineCurve=!0;rn.prototype.getPoint=function(e,t){const n=t||new ie,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return n.set(_c(o,a.x,l.x,c.x,d.x),_c(o,a.y,l.y,c.y,d.y)),n};rn.prototype.copy=function(e){_e.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this};rn.prototype.toJSON=function(){const e=_e.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e};rn.prototype.fromJSON=function(e){_e.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this};var jg=Object.freeze({__proto__:null,ArcCurve:jr,CatmullRomCurve3:ft,CubicBezierCurve:en,CubicBezierCurve3:xn,EllipseCurve:Ut,LineCurve:Tt,LineCurve3:tn,QuadraticBezierCurve:nn,QuadraticBezierCurve3:bn,SplineCurve:rn});function Gn(){_e.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Gn.prototype=Object.assign(Object.create(_e.prototype),{constructor:Gn,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Tt(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];if(n&&n.equals(c))continue;t.push(c),n=c}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){_e.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=_e.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){_e.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new jg[i.type]().fromJSON(i))}return this}});function sn(e){Gn.call(this),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}sn.prototype=Object.assign(Object.create(Gn.prototype),{constructor:sn,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new Tt(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new nn(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,s){const o=new en(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new rn(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,r,s),this},absarc:function(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this},ellipse:function(e,t,n,i,r,s,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,i,r,s,o,a),this},absellipse:function(e,t,n,i,r,s,o,a){const l=new Ut(e,t,n,i,r,s,o,a);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this},copy:function(e){return Gn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=Gn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Gn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function tr(e){sn.call(this,e),this.uuid=Te.generateUUID(),this.type="Shape",this.holes=[]}tr.prototype=Object.assign(Object.create(sn.prototype),{constructor:tr,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){sn.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=sn.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){sn.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new sn().fromJSON(i))}return this}});function We(e,t){be.call(this),this.type="Light",this.color=new me(e),this.intensity=t!==void 0?t:1}We.prototype=Object.assign(Object.create(be.prototype),{constructor:We,isLight:!0,copy:function(e){return be.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=be.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function qs(e,t,n){We.call(this,e,n),this.type="HemisphereLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.groundColor=new me(t)}qs.prototype=Object.assign(Object.create(We.prototype),{constructor:qs,isHemisphereLight:!0,copy:function(e){return We.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function _n(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}Object.assign(_n.prototype,{_projScreenMatrix:new Ae,_lightPositionWorld:new R,_lookTarget:new R,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(e.matrixWorld),t.position.copy(s),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function ya(){_n.call(this,new Qe(50,1,.5,500)),this.focus=1}ya.prototype=Object.assign(Object.create(_n.prototype),{constructor:ya,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=Te.RAD2DEG*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),_n.prototype.updateMatrices.call(this,e)}});function Xs(e,t,n,i,r,s){We.call(this,e,t),this.type="SpotLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.target=new be,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new ya}Xs.prototype=Object.assign(Object.create(We.prototype),{constructor:Xs,isSpotLight:!0,copy:function(e){return We.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function xa(){_n.call(this,new Qe(90,1,.5,500)),this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}xa.prototype=Object.assign(Object.create(_n.prototype),{constructor:xa,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Ys(e,t,n,i){We.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new xa}Ys.prototype=Object.assign(Object.create(We.prototype),{constructor:Ys,isPointLight:!0,copy:function(e){return We.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function nr(e,t,n,i,r,s){Nn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}nr.prototype=Object.assign(Object.create(Nn.prototype),{constructor:nr,isOrthographicCamera:!0,copy:function(e,t){return Nn.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=be.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function ba(){_n.call(this,new nr(-5,5,5,-5,.5,500))}ba.prototype=Object.assign(Object.create(_n.prototype),{constructor:ba,isDirectionalLightShadow:!0,updateMatrices:function(e){_n.prototype.updateMatrices.call(this,e)}});function ir(e,t){We.call(this,e,t),this.type="DirectionalLight",this.position.copy(be.DefaultUp),this.updateMatrix(),this.target=new be,this.shadow=new ba}ir.prototype=Object.assign(Object.create(We.prototype),{constructor:ir,isDirectionalLight:!0,copy:function(e){return We.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Zs(e,t){We.call(this,e,t),this.type="AmbientLight"}Zs.prototype=Object.assign(Object.create(We.prototype),{constructor:Zs,isAmbientLight:!0});function wc(e,t,n,i){We.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}wc.prototype=Object.assign(Object.create(We.prototype),{constructor:wc,isRectAreaLight:!0,copy:function(e){return We.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=We.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});class qg{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}function on(e,t){We.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new qg}on.prototype=Object.assign(Object.create(We.prototype),{constructor:on,isLightProbe:!0,copy:function(e){return We.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=We.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Mc(e){Be.call(this,e),this.textures={}}Mc.prototype=Object.assign(Object.create(Be.prototype),{constructor:Mc,load:function(e,t,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new Dg[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new me().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];i.uniforms[r]={};switch(s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new me().setHex(s.value);break;case"v2":i.uniforms[r].value=new ie().fromArray(s.value);break;case"v3":i.uniforms[r].value=new R().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ue().fromArray(s.value);break;case"m3":i.uniforms[r].value=new mt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Ae().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ie().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const oi={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Js(){Fe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Js.prototype=Object.assign(Object.create(Fe.prototype),{constructor:Js,isInstancedBufferGeometry:!0,copy:function(e){return Fe.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=Fe.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function _a(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ee.call(this,e,t,n),this.meshPerAttribute=i||1}_a.prototype=Object.assign(Object.create(Ee.prototype),{constructor:_a,isInstancedBufferAttribute:!0,copy:function(e){return Ee.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=Ee.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function Ec(e){Be.call(this,e)}Ec.prototype=Object.assign(Object.create(Be.prototype),{constructor:Ec,load:function(e,t,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(f,h){if(t[h]!==void 0)return t[h];const m=f.interleavedBuffers,y=m[h],v=r(f,y.buffer),g=new Ks[y.type](v),p=new vt(g,y.stride);return p.uuid=y.uuid,t[h]=p,p}function r(f,h){if(n[h]!==void 0)return n[h];const m=f.arrayBuffers,y=m[h],v=new Uint32Array(y).buffer;return n[h]=v,v}const s=e.isInstancedBufferGeometry?new Js:new Fe,o=e.data.index;if(o!==void 0){const f=new Ks[o.type](o.array);s.setIndex(new Ee(f,1))}const a=e.data.attributes;for(const f in a){const h=a[f];let m;if(h.isInterleavedBufferAttribute){const y=i(e.data,h.data);m=new vn(y,h.itemSize,h.offset,h.normalized)}else{const y=new Ks[h.type](h.array),v=h.isInstancedBufferAttribute?_a:Ee;m=new v(y,h.itemSize,h.normalized)}h.name!==void 0&&(m.name=h.name),s.setAttribute(f,m)}const l=e.data.morphAttributes;if(l)for(const f in l){const h=l[f],m=[];for(let y=0,v=h.length;y<v;y++){const g=h[y];let p;if(g.isInterleavedBufferAttribute){const D=i(e.data,g.data);p=new vn(D,g.itemSize,g.offset,g.normalized)}else{const D=new Ks[g.type](g.array);p=new Ee(D,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),m.push(p)}s.morphAttributes[f]=m}const c=e.data.morphTargetsRelative;c&&(s.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,h=d.length;f!==h;++f){const m=d[f];s.addGroup(m.start,m.count,m.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new R;u.center!==void 0&&f.fromArray(u.center),s.boundingSphere=new Xt(f,u.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}});const Ks={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Qs(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Be.call(this,e),this.options={premultiplyAlpha:"none"}}Qs.prototype=Object.assign(Object.create(Be.prototype),{constructor:Qs,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=$i.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){$i.add(e,a),t&&t(a),r.manager.itemEnd(e)}).catch(function(a){i&&i(a),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function Tc(){this.type="ShapePath",this.color=new me,this.subPaths=[],this.currentPath=null}Object.assign(Tc.prototype,{moveTo:function(e,t){return this.currentPath=new sn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(g){const p=[];for(let D=0,A=g.length;D<A;D++){const B=g[D],E=new tr;E.curves=B.curves,p.push(E)}return p}function i(g,p){const D=p.length;let A=!1;for(let B=D-1,E=0;E<D;B=E++){let H=p[B],Q=p[E],ee=Q.x-H.x,le=Q.y-H.y;if(Math.abs(le)>Number.EPSILON){if(le<0&&(H=p[E],ee=-ee,Q=p[B],le=-le),g.y<H.y||g.y>Q.y)continue;if(g.y===H.y){if(g.x===H.x)return!0}else{const I=le*(g.x-H.x)-ee*(g.y-H.y);if(I===0)return!0;if(I<0)continue;A=!A}}else{if(g.y!==H.y)continue;if(Q.x<=g.x&&g.x<=H.x||H.x<=g.x&&g.x<=Q.x)return!0}}return A}const r=kn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new tr,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const u=[],f=[];let h=[],m=0,y;f[m]=void 0,h[m]=[];for(let g=0,p=s.length;g<p;g++)a=s[g],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!d&&f[m]&&m++,f[m]={s:new tr,p:y},f[m].s.curves=a.curves,d&&m++,h[m]=[]):h[m].push({h:a,p:y[0]});if(!f[0])return n(s);if(f.length>1){let g=!1;const p=[];for(let D=0,A=f.length;D<A;D++)u[D]=[];for(let D=0,A=f.length;D<A;D++){const B=h[D];for(let E=0;E<B.length;E++){const H=B[E];let Q=!0;for(let ee=0;ee<f.length;ee++)i(H.p,f[ee].p)&&(D!==ee&&p.push({froms:D,tos:ee,hole:E}),Q?(Q=!1,u[ee].push(H)):g=!0);Q&&u[D].push(H)}}p.length>0&&(g||(h=u))}let v;for(let g=0,p=f.length;g<p;g++){l=f[g].s,c.push(l),v=h[g];for(let D=0,A=v.length;D<A;D++)l.holes.push(v[D].h)}return c}});function Sc(e){this.type="Font",this.data=e}Object.assign(Sc.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);const n=[],i=Xg(e,t,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function Xg(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const d=i[c];if(d===`
`)a=0,l-=s;else{const u=Yg(d,r,a,l,n);a+=u.offsetX,o.push(u.path)}}return o}function Yg(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new Tc;let a,l,c,d,u,f,h,m;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;){const p=y[v++];switch(p){case"m":a=y[v++]*t+n,l=y[v++]*t+i,o.moveTo(a,l);break;case"l":a=y[v++]*t+n,l=y[v++]*t+i,o.lineTo(a,l);break;case"q":c=y[v++]*t+n,d=y[v++]*t+i,u=y[v++]*t+n,f=y[v++]*t+i,o.quadraticCurveTo(u,f,c,d);break;case"b":c=y[v++]*t+n,d=y[v++]*t+i,u=y[v++]*t+n,f=y[v++]*t+i,h=y[v++]*t+n,m=y[v++]*t+i,o.bezierCurveTo(u,f,h,m,c,d);break}}}return{offsetX:s.ha*t,path:o}}function Ac(e){Be.call(this,e)}Ac.prototype=Object.assign(Object.create(Be.prototype),{constructor:Ac,load:function(e,t,n,i){const r=this,s=new Bt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){let a;try{a=JSON.parse(o)}catch(c){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const l=r.parse(a);t&&t(l)},n,i)},parse:function(e){return new Sc(e)}});let $s;const Zg={getContext:function(){return $s===void 0&&($s=new(window.AudioContext||window.webkitAudioContext)),$s},setContext:function(e){$s=e}};function wa(e){Be.call(this,e)}wa.prototype=Object.assign(Object.create(Be.prototype),{constructor:wa,load:function(e,t,n,i){const r=this,s=new Bt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{const a=o.slice(0),l=Zg.getContext();l.decodeAudioData(a,function(c){t(c)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Rc(e,t,n){on.call(this,void 0,n);const i=new me().set(e),r=new me().set(t),s=new R(i.r,i.g,i.b),o=new R(r.r,r.g,r.b),a=Math.sqrt(Math.PI),l=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(l)}Rc.prototype=Object.assign(Object.create(on.prototype),{constructor:Rc,isHemisphereLightProbe:!0,copy:function(e){return on.prototype.copy.call(this,e),this},toJSON:function(e){const t=on.prototype.toJSON.call(this,e);return t}});function Lc(e,t){on.call(this,void 0,t);const n=new me().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Lc.prototype=Object.assign(Object.create(on.prototype),{constructor:Lc,isAmbientLightProbe:!0,copy:function(e){return on.prototype.copy.call(this,e),this},toJSON:function(e){const t=on.prototype.toJSON.call(this,e);return t}});const Cc=new Ae,Pc=new Ae;function Jg(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Qe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Qe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Jg.prototype,{update:function(e){const t=this._cache,n=t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep;if(n){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(Te.DEG2RAD*t.fov*.5)/t.zoom;let a,l;Pc.elements[12]=-r,Cc.elements[12]=r,a=-o*t.aspect+s,l=o*t.aspect+s,i.elements[0]=2*t.near/(l-a),i.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(i),a=-o*t.aspect-s,l=o*t.aspect-s,i.elements[0]=2*t.near/(l-a),i.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Pc),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Cc)}});class Kg extends be{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.source.detune===void 0?void 0:(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this)}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Qg{constructor(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}function Ic(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Ic.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,l=t+t;a!==l;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]},_slerp:function(e,t,n,i){bt.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const s=this._workIndex*r;bt.multiplyQuaternionsFlat(e,s,e,t,e,n),bt.slerpFlat(e,t,e,t,e,s,i)},_lerp:function(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]*s+e[n+o]*i}},_lerpAdditive:function(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}});const Ma="\\[\\]\\.:\\/",$g=new RegExp("["+Ma+"]","g"),Ea="[^"+Ma+"]",ev="[^"+Ma.replace("\\.","")+"]",tv=/((?:WC+[\/:])*)/.source.replace("WC",Ea),nv=/(WCOD+)?/.source.replace("WCOD",ev),iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ea),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ea),sv=new RegExp("^"+tv+nv+iv+rv+"$"),ov=["material","materials","bones"];function Dc(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Dc.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function at(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(at,{Composite:Dc,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace($g,"")},parseTrackName:function(e){const t=sv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}});Object.assign(at.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[i];if(s===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(at.prototype,{_getValue_unbound:at.prototype.getValue,_setValue_unbound:at.prototype.setValue});function av(){this.uuid=Te.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(av.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=e.length,l=this.nCachedObjects_;for(let c=0,d=arguments.length;c!==d;++c){const u=arguments[c],f=u.uuid;let h=t[f];if(h===void 0){h=a++,t[f]=h,e.push(u);for(let m=0,y=s;m!==y;++m)r[m].push(new at(u,n[m],i[m]))}else if(h<l){o=e[h];const m=--l,y=e[m];t[y.uuid]=h,e[h]=y,t[f]=m,e[m]=u;for(let v=0,g=s;v!==g;++v){const p=r[v],D=p[m];let A=p[h];p[h]=D,A===void 0&&(A=new at(u,n[v],i[v])),p[m]=A}}else e[h]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],l=a.uuid,c=t[l];if(c!==void 0&&c>=r){const d=r++,u=e[d];t[u.uuid]=c,e[c]=u,t[l]=d,e[d]=a;for(let f=0,h=i;f!==h;++f){const m=n[f],y=m[d],v=m[c];m[c]=y,m[d]=v}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,d=t[c];if(d!==void 0)if(delete t[c],d<r){const u=--r,f=e[u],h=--s,m=e[h];t[f.uuid]=d,e[d]=f,t[m.uuid]=u,e[u]=m,e.pop();for(let y=0,v=i;y!==v;++y){const g=n[y],p=g[u],D=g[h];g[d]=p,g[u]=D,g.pop()}}else{const u=--s,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let h=0,m=i;h!==m;++h){const y=n[h];y[d]=y[u],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,l=a.length,c=this.nCachedObjects_,d=new Array(l);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(d);for(let u=c,f=a.length;u!==f;++u){const h=a[u];d[u]=new at(h,e,t)}return d},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],l=e[o];t[l]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class lv{constructor(e,t,n,i){this._mixer=e,this._clip=t,this._localRoot=n||null,this.blendMode=i||t.blendMode;const r=t.tracks,s=r.length,o=new Array(s),a={endingStart:yi,endingEnd:yi};for(let l=0;l!==s;++l){const c=r[l].createInterpolant(null);o[l]=c,c.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,a[1]=r+n,l[0]=e/s,l[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const a=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case sl:for(let c=0,d=a.length;c!==d;++c)a[c].evaluate(s),l[c].accumulateAdditive(o);break;case yo:default:for(let c=0,d=a.length;c!==d;++c)a[c].evaluate(s),l[c].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===kh;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===Bh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=xi,i.endingEnd=xi):(e?i.endingStart=this.zeroSlopeAtStart?xi:yi:i.endingStart=is,t?i.endingEnd=this.zeroSlopeAtEnd?xi:yi:i.endingEnd=is)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,a=s.sampleValues;return o[0]=r,a[0]=t,o[1]=r+e,a[1]=n,this}}function Nc(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Nc.prototype=Object.assign(Object.create(un.prototype),{constructor:Nc,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,a=n.uuid,l=this._bindingsByRootAndName;let c=l[a];c===void 0&&(c={},l[a]=c);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let h=c[f];if(h!==void 0)s[d]=h;else{if(h=s[d],h!==void 0){h._cacheIndex===null&&(++h.referenceCount,this._addInactiveBinding(h,a,f));continue}const m=t&&t._propertyBindings[d].binding.parsedPath;h=new Ic(at.create(n,f,m),u.ValueTypeName,u.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,a,f),s[d]=h}o[d].resultBuffer=h.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,l=a[a.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,a[c]=l,a.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=t[t.length-1],l=e._cacheIndex;a._cacheIndex=l,t[l]=a,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Vs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?Ft.findByName(i,e):e;const o=s!==null?s.uuid:e,a=this._actionsByClip[o];let l=null;if(n===void 0&&(s!==null?n=s.blendMode:n=yo),a!==void 0){const d=a.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=a.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new lv(this,s,t,n);return this._bindAction(c,l),this._addInactiveAction(c,o,r),c},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ft.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==n;++l){const c=t[l];c._update(i,e,r,s)}const o=this._bindings,a=this._nActiveBindings;for(let l=0;l!==a;++l)o[l].apply(s);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const l=s[o];this._deactivateAction(l);const c=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=c,t[c]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class Oc{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Oc(this.value.clone===void 0?this.value:this.value.clone())}}function Fc(e,t,n){vt.call(this,e,t),this.meshPerAttribute=n||1}Fc.prototype=Object.assign(Object.create(vt.prototype),{constructor:Fc,isInstancedInterleavedBuffer:!0,copy:function(e){return vt.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=vt.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=vt.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Bc(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Bc.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Bc.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,t){return this.type=e,this.elementSize=t,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}});function Uc(e,t,n,i){this.ray=new Mr(e,t),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function kc(e,t){return e.distance-t.distance}function Ta(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)Ta(r[s],t,n,!0)}}Object.assign(Uc.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){const i=n||[];return Ta(e,this,i,t),i.sort(kc),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=e.length;r<s;r++)Ta(e[r],this,i,t);return i.sort(kc),i}});const Gc=new ie;class cv{constructor(e,t){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new ie(Infinity,Infinity),this.max=t!==void 0?t:new ie(-Infinity,-Infinity)}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new ie),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new ie),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new ie),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new ie),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){const t=Gc.copy(e).clamp(this.min,this.max);return t.sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zc=new R,eo=new R;class uv{constructor(e,t){this.start=e!==void 0?e:new R,this.end=t!==void 0?t:new R}set(e,t){return this.start.copy(e),this.end.copy(t),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new R),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new R),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new R),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zc.subVectors(e,this.start),eo.subVectors(this.end,this.start);const n=eo.dot(eo),i=eo.dot(zc);let r=i/n;return t&&(r=Te.clamp(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new R),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}}function to(e){be.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}to.prototype=Object.create(be.prototype);to.prototype.constructor=to;to.prototype.isImmediateRenderObject=!0;const zn=new R,no=new Ae,Sa=new Ae;class hv extends Vi{constructor(e){const t=Hc(e),n=new Fe,i=[],r=[],s=new me(0,0,1),o=new me(0,1,0);for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Oe(i,3)),n.setAttribute("color",new Oe(r,3));const a=new yt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Sa.getInverse(this.root.matrixWorld);for(let r=0,s=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(no.multiplyMatrices(Sa,o.matrixWorld),zn.setFromMatrixPosition(no),i.setXYZ(s,zn.x,zn.y,zn.z),no.multiplyMatrices(Sa,o.parent.matrixWorld),zn.setFromMatrixPosition(no),i.setXYZ(s+1,zn.x,zn.y,zn.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Hc(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Hc(e.children[n]));return t}class dv extends Vi{constructor(e,t,n,i){e=e||10,t=t||10,n=new me(n!==void 0?n:4473924),i=new me(i!==void 0?i:8947848);const r=t/2,s=e/t,o=e/2,a=[],l=[];for(let u=0,f=0,h=-o;u<=t;u++,h+=s){a.push(-o,0,h,o,0,h),a.push(h,0,-o,h,0,o);const m=u===r?n:i;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const c=new Fe;c.setAttribute("position",new Oe(a,3)),c.setAttribute("color",new Oe(l,3));const d=new yt({vertexColors:!0,toneMapped:!1});super(c,d);this.type="GridHelper"}}const rr=4,Hn=8,an=Math.pow(2,Hn),Vc=[.125,.215,.35,.446,.526,.582],Wc=Hn-rr+1+Vc.length,sr=20,ln={[rt]:0,[Xn]:1,[xr]:2,[al]:3,[ll]:4,[cl]:5,[bo]:6},Aa=new nr,{_lodPlanes:Yr,_sizeLods:jc,_sigmas:io}=fv();let Ra=null;const ai=(1+Math.sqrt(5))/2,or=1/ai,qc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ai,or),new R(0,ai,-or),new R(or,0,ai),new R(-or,0,ai),new R(ai,or,0),new R(-ai,or,0)];class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=mv(sr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Zc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Yc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Yr.length;e++)Yr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ra),e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e){Ra=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ct,format:go,encoding:pv(e)?e.encoding:xr,depthBuffer:!1},n=Xc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Xc(t),n}_compileMaterial(e){const t=new ke(Yr[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const r=90,s=1,o=new Qe(r,s,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.outputEncoding,u=c.toneMapping,f=c.getClearColor(),h=c.getClearAlpha();c.toneMapping=mi,c.outputEncoding=rt;let m=e.background;if(m&&m.isColor){m.convertSRGBToLinear();const y=Math.max(m.r,m.g,m.b),v=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);m=m.multiplyScalar(Math.pow(2,-v));const g=(v+128)/255;c.setClearColor(m,g),e.background=null}for(let y=0;y<6;y++){const v=y%3;v==0?(o.up.set(0,a[y],0),o.lookAt(l[y],0,0)):v==1?(o.up.set(0,0,a[y]),o.lookAt(0,l[y],0)):(o.up.set(0,a[y],0),o.lookAt(0,0,l[y])),ro(i,v*an,y>2?an:0,an,an),c.setRenderTarget(i),c.render(e,o)}c.toneMapping=u,c.outputEncoding=d,c.setClearColor(f,h)}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Zc()):this._equirectShader==null&&(this._equirectShader=Yc());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new ke(Yr[0],i),s=i.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),s.inputEncoding.value=ln[e.encoding],s.outputEncoding.value=ln[t.texture.encoding],ro(t,0,0,3*an,2*an),n.setRenderTarget(t),n.render(r,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Wc;i++){const r=Math.sqrt(io[i]*io[i]-io[i-1]*io[i-1]),s=qc[(i-1)%qc.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const a=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ke(Yr[i],l),u=l.uniforms,f=jc[n]-1,h=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*sr-1),m=r/h,y=isFinite(r)?1+Math.floor(c*m):sr;y>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${sr}`);const v=[];let g=0;for(let B=0;B<sr;++B){const E=B/m,H=Math.exp(-E*E/2);v.push(H),B==0?g+=H:B<y&&(g+=2*H)}for(let B=0;B<v.length;B++)v[B]=v[B]/g;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=v,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=h,u.mipInt.value=Hn-n,u.inputEncoding.value=ln[e.texture.encoding],u.outputEncoding.value=ln[e.texture.encoding];const p=jc[i],D=3*Math.max(0,an-2*p),A=(i===0?0:2*an)+2*p*(i>Hn-rr?i-Hn+rr:0);ro(t,D,A,3*p,2*p),a.setRenderTarget(t),a.render(d,Aa)}}function pv(e){return e===void 0||e.type!==Ct?!1:e.encoding===rt||e.encoding===Xn||e.encoding===bo}function fv(){const e=[],t=[],n=[];let i=Hn;for(let r=0;r<Wc;r++){const s=Math.pow(2,i);t.push(s);let o=1/s;r>Hn-rr?o=Vc[r-Hn+rr-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,h=3,m=2,y=1,v=new Float32Array(h*f*u),g=new Float32Array(m*f*u),p=new Float32Array(y*f*u);for(let A=0;A<u;A++){const B=A%3*2/3-1,E=A>2?0:-1,H=[B,E,0,B+2/3,E,0,B+2/3,E+1,0,B,E,0,B+2/3,E+1,0,B,E+1,0];v.set(H,h*f*A),g.set(d,m*f*A);const Q=[A,A,A,A,A,A];p.set(Q,y*f*A)}const D=new Fe;D.setAttribute("position",new Ee(v,h)),D.setAttribute("uv",new Ee(g,m)),D.setAttribute("faceIndex",new Ee(p,y)),e.push(D),i>rr&&i--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function Xc(e){const t=new Nt(3*an,3*an,e);return t.texture.mapping=Qr,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function ro(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function mv(e){const t=new Float32Array(e),n=new R(0,1,0),i=new Qt({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:ln[rt]},outputEncoding:{value:ln[rt]}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Ca()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1});return i}function Yc(){const e=new ie(1,1),t=new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:ln[rt]},outputEncoding:{value:ln[rt]}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ca()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1});return t}function Zc(){const e=new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ln[rt]},outputEncoding:{value:ln[rt]}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ca()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1});return e}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ca(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}_e.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(_e.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(Gn.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=new Ht;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.vertices.push(new R(r.x,r.y,r.z||0))}return t}});Object.assign(sn.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function gv(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,e),this.type="catmullrom",this.closed=!0}gv.prototype=Object.create(ft.prototype);function vv(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,e),this.type="catmullrom"}vv.prototype=Object.create(ft.prototype);function Kc(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ft.call(this,e),this.type="catmullrom"}Kc.prototype=Object.create(ft.prototype);Object.assign(Kc.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});dv.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};hv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Be.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),oi.extractUrlBase(e)}});Be.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(cv.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(qt.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Xt.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});_s.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};uv.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(Te,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Te.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Te.ceilPowerOfTwo(e)}});Object.assign(mt.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(Ae.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,s)}});pn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};bt.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(Mr.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(ht.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(ht,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(e,t,n,i)}});Object.assign(tr.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Rg(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ig(this,e)}});Object.assign(ie.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(R.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ue.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ht.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(be.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(be.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(ke.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(ke.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Gh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(ea.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Ur.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Br.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(_e.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});Qe.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(We.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(Ee.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===br},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(br)}}});Object.assign(Ee.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?br:rs),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Fe.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new Ee(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(Fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Js.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(Uc.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(vt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===br},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(vt.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?br:rs),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(yc.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(Qo.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Oc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(we.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Ua}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(ii.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties($t.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(gt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(ws.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(ws.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?Xn:rt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Zl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Nt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(Kg.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this,n=new wa;return n.load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Qg.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Oi.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};Oi.prototype.clear=function(e,t,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(e,t,n,i)};Yn.crossOrigin=void 0;Yn.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Wr;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};Yn.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new fa;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};Yn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Yn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));var yv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function xv(e,t){return t={exports:{}},e(t,t.exports),t.exports}var eu=xv(function(e){(function(t,n){var i=Math.pow(2,-24),r=Math.pow(2,32),s=Math.pow(2,53);function o(c){var d=new ArrayBuffer(256),u=new DataView(d),f,h=0;function m(I){for(var G=d.byteLength,O=h+I;G<O;)G*=2;if(G!==d.byteLength){var z=u;d=new ArrayBuffer(G),u=new DataView(d);for(var k=h+3>>2,F=0;F<k;++F)u.setUint32(F*4,z.getUint32(F*4))}return f=I,u}function y(){h+=f}function v(I){y(m(8).setFloat64(h,I))}function g(I){y(m(1).setUint8(h,I))}function p(I){for(var G=m(I.length),O=0;O<I.length;++O)G.setUint8(h+O,I[O]);y()}function D(I){y(m(2).setUint16(h,I))}function A(I){y(m(4).setUint32(h,I))}function B(I){var G=I%r,O=(I-G)/r,z=m(8);z.setUint32(h,O),z.setUint32(h+4,G),y()}function E(I,G){G<24?g(I<<5|G):G<256?(g(I<<5|24),g(G)):G<65536?(g(I<<5|25),D(G)):G<4294967296?(g(I<<5|26),A(G)):(g(I<<5|27),B(G))}function H(I){var G;if(I===!1)return g(244);if(I===!0)return g(245);if(I===null)return g(246);if(I===n)return g(247);switch(typeof I){case"number":if(Math.floor(I)===I){if(0<=I&&I<=s)return E(0,I);if(-s<=I&&I<0)return E(1,-(I+1))}return g(251),v(I);case"string":var O=[];for(G=0;G<I.length;++G){var z=I.charCodeAt(G);z<128?O.push(z):z<2048?(O.push(192|z>>6),O.push(128|z&63)):z<55296?(O.push(224|z>>12),O.push(128|z>>6&63),O.push(128|z&63)):(z=(z&1023)<<10,z|=I.charCodeAt(++G)&1023,z+=65536,O.push(240|z>>18),O.push(128|z>>12&63),O.push(128|z>>6&63),O.push(128|z&63))}return E(3,O.length),p(O);default:var k;if(Array.isArray(I))for(k=I.length,E(4,k),G=0;G<k;++G)H(I[G]);else if(I instanceof Uint8Array)E(2,I.length),p(I);else{var F=Object.keys(I);for(k=F.length,E(5,k),G=0;G<k;++G){var V=F[G];H(V),H(I[V])}}}}if(H(c),"slice"in d)return d.slice(0,h);for(var Q=new ArrayBuffer(h),ee=new DataView(Q),le=0;le<h;++le)ee.setUint8(le,u.getUint8(le));return Q}function a(c,d,u){var f=new DataView(c),h=0;typeof d!="function"&&(d=function(O){return O}),typeof u!="function"&&(u=function(){return n});function m(O,z){return h+=z,O}function y(O){return m(new Uint8Array(c,h,O),O)}function v(){var O=new ArrayBuffer(4),z=new DataView(O),k=A(),F=k&32768,V=k&31744,q=k&1023;if(V===31744)V=255<<10;else if(V!==0)V+=127-15<<10;else if(q!==0)return q*i;return z.setUint32(0,F<<16|V<<13|q<<13),z.getFloat32(0)}function g(){return m(f.getFloat32(h),4)}function p(){return m(f.getFloat64(h),8)}function D(){return m(f.getUint8(h),1)}function A(){return m(f.getUint16(h),2)}function B(){return m(f.getUint32(h),4)}function E(){return B()*r+B()}function H(){return f.getUint8(h)!==255?!1:(h+=1,!0)}function Q(O){if(O<24)return O;if(O===24)return D();if(O===25)return A();if(O===26)return B();if(O===27)return E();if(O===31)return-1;throw"Invalid length encoding"}function ee(O){var z=D();if(z===255)return-1;var k=Q(z&31);if(k<0||z>>5!==O)throw"Invalid indefinite length element";return k}function le(O,z){for(var k=0;k<z;++k){var F=D();F&128&&(F<224?(F=(F&31)<<6|D()&63,z-=1):F<240?(F=(F&15)<<12|(D()&63)<<6|D()&63,z-=2):(F=(F&15)<<18|(D()&63)<<12|(D()&63)<<6|D()&63,z-=3)),F<65536?O.push(F):(F-=65536,O.push(55296|F>>10),O.push(56320|F&1023))}}function I(){var O=D(),z=O>>5,k=O&31,F,V;if(z===7)switch(k){case 25:return v();case 26:return g();case 27:return p()}if(V=Q(k),V<0&&(z<2||6<z))throw"Invalid length";switch(z){case 0:return V;case 1:return-1-V;case 2:if(V<0){for(var q=[],oe=0;(V=ee(z))>=0;)oe+=V,q.push(y(V));var se=new Uint8Array(oe),fe=0;for(F=0;F<q.length;++F)se.set(q[F],fe),fe+=q[F].length;return se}return y(V);case 3:var ce=[];if(V<0)for(;(V=ee(z))>=0;)le(ce,V);else le(ce,V);return String.fromCharCode.apply(null,ce);case 4:var ye;if(V<0)for(ye=[];!H();)ye.push(I());else for(ye=new Array(V),F=0;F<V;++F)ye[F]=I();return ye;case 5:var Ne={};for(F=0;F<V||V<0&&!H();++F){var $=I();Ne[$]=I()}return Ne;case 6:return d(I(),V);case 7:switch(V){case 20:return!1;case 21:return!0;case 22:return null;case 23:return n;default:return u(V)}}}var G=I();if(h!==c.byteLength)throw"Remaining bytes";return G}var l={encode:o,decode:a};typeof n=="function"&&n.amd?n("cbor/cbor",l):e.exports?e.exports=l:t.CBOR||(t.CBOR=l)})(yv)});const bv=typeof window=="undefined"?$c():window.WebSocket;class Ev{constructor(e,t,n,i=!1,r,s,o){this.reqs=[],this.reps=[],this.requestId=this.getRequestId(),this.debug=i,this.isGreedy=s,this.errCallback=t,this.closeCallback=n,this.alwaysdebug=!1,this.isConnected=!1;let a=null;r||s||o?a=new _v(r,s,o,this.debug):(i&&(this.alwaysdebug=!0),typeof e=="function"&&(a=new wv)),this.openWebsocket(a,e)}sendMessage(e,t=60){this.alwaysdebug&&(e.cmd.debug=!0);let n=e.toCbor();return this.sendRequestObj(n,t)}disconnect(){this.ws.close()}openWebsocket(e=null,t=null){this.ws=new bv("ws://localhost:11222/driver",["rep.sp.nanomsg.org"]),this.ws.parent=this,this.ws.binaryType="arraybuffer",this.ws.onmessage=this.messageHandler,this.ws.onopen=()=>{this.isConnected=!0,this.debug&&console.log("socket open"),e!=null&&this.sendMessage(e).then(t)},this.ws.onerror=this.onSocketError,this.ws.onclose=this.onClose}sendRequestObj(e,t){return new Promise((n,i)=>{let r={id:this.requestId++,parent:this,payload:e,success:n,error:i,send:function(){this.debug&&console.log("attemtping to send request with ID "+this.id),this.timeout=setTimeout(r.send.bind(this),t*1e3);let s=new Uint8Array(e.byteLength+4),o=new DataView(s.buffer);o.setUint32(0,this.id),s.set(new Uint8Array(this.payload),4),this.parent.ws.send(s.buffer)}};this.reqs.push(r),r.send()})}messageHandler(e){console.log("message");let t=e.data;if(t.byteLength<4)return;let n=new DataView(t),i=n.getUint32(0);if(i<2147483648){this.parent.err("bad nng header");return}let r=this.parent.findReqIndex(i);if(r==-1){this.parent.err("got reply that doesn't match known request!");return}let s={id:i,payload:eu.decode(t.slice(4))};s.payload.error==0?this.parent.reqs[r].success(s.payload):this.parent.reqs[r].error(s.payload),clearTimeout(this.parent.reqs[r].timeout),this.parent.reqs.splice(r,1),this.parent.reps.push(s),this.debug&&console.log(s.payload)}getRequestId(){return Math.floor(this.prng()*2147483647)+2147483648}onClose(e){this.parent.isConnected=!1,this.parent.debug&&console.log("socket closed"),typeof this.parent.closeCallback=="function"&&this.parent.closeCallback(e)}onSocketError(e){this.parent.debug&&console.log(e),typeof this.parent.errCallback=="function"&&this.parent.errCallback(e)}err(e){this.debug&&console.log("[DRIVER ERROR]"+e)}findReqIndex(e){let t=0;for(;t<this.reqs.length;t++)if(this.reqs[t].id==e)return t;return-1}prng(){return this.rng==null&&(this.rng=Mv()),this.rng()}}class tu{constructor(e,t){this.cmd=e,this.bin=t}toCbor(){return eu.encode(this)}}class _v extends tu{constructor(e="",t=!1,n="",i=!1){let r={init:{}};e!=""&&(r.init.appid=e),n!=""&&(r.init.onclose=n),t&&(r.init.greedy=!0),i&&(r.init.debug=!0),super(r,null)}}class wv extends tu{constructor(){let e={info:{}};super(e,null)}}function Mv(){function e(r){for(var s=0,o=1779033703^r.length;s<r.length;s++)o=Math.imul(o^r.charCodeAt(s),3432918353),o=o<<13|o>>>19;return function(){return o=Math.imul(o^o>>>16,2246822507),o=Math.imul(o^o>>>13,3266489909),(o^=o>>>16)>>>0}}function t(r,s,o,a){return()=>{var l=s<<9,c=r*5;return c=(c<<7|c>>>25)*9,o^=r,a^=s,s^=o,r^=a,o^=l,a=a<<11|a>>>21,(c>>>0)/4294967296}}var n=Date.now(),i=e(n.toString());return t(i(),i(),i(),i())}const Tv={configVersion:"1.0",serial:"00000",pitch:{value:47.556365966796875},slope:{value:-5.488804340362549},center:{value:.15815216302871704},viewCone:{value:40},invView:{value:1},verticalAngle:{value:0},DPI:{value:338},screenW:{value:2560},screenH:{value:1600},flipImageX:{value:0},flipImageY:{value:0},flipSubp:{value:0}};function Sv(){confirm("HoloPlayService not detected! Click OK to download. If you have it already installed, please make sure it is running.")&&(window.location.href="http://look.glass/holoplayservice")}let Pa=null;function Av(){return Pa||(Pa=new Promise((e,t)=>{new Ev(n=>{n.devices.length==0&&alert("No Looking Glass detected. Please make sure your Looking Glass is plugged in."),e(n.devices)},n=>{console.error("error loading calibration",n),Sv(),t(n)},console.log)})),Pa}function Ia(){return Av().then(e=>{if(e.length==0)throw new Error("no devices");return e[0]})}function nu(){return Ia().then(e=>e.calibration).catch(e=>(console.error("no devices connected. using default calibration."),Tv))}const iu={standard:{quiltResolution:4096,tileCount:new THREE.Vector2(5,9),viewCone:35,fov:12.5},large:{quiltResolution:4096,tileCount:new THREE.Vector2(5,9),viewCone:35,fov:12.5},pro:{quiltResolution:4096,tileCount:new THREE.Vector2(5,9),viewCone:35,fov:12.5},"8k":{quiltResolution:8192,tileCount:new THREE.Vector2(5,9),viewCone:35,fov:12.5},default:{quiltResolution:2048,tileCount:new THREE.Vector2(4,8),viewCone:35,fov:12.5}};function so(e){return Ia().then(t=>iu[t.hardwareVersion][e]).catch(t=>iu.default[e])}function Rv(){return so("quiltResolution")}function Lv(){return so("tileCount")}function Cv(){return so("viewCone")}function ru(){return so("fov")}const Pv=`
  varying vec2 iUv;

  void main() {
    iUv = uv;
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`,Iv=`
  uniform sampler2D quiltTexture;
  uniform float pitch;
  uniform float tilt;
  uniform float center;
  uniform float invView; 
  uniform float flipX; 
  uniform float flipY; 
  uniform float subp; 
  uniform float tilesX;
  uniform float tilesY;
  uniform vec2 quiltViewPortion;
  varying vec2 iUv;

  vec2 texArr(vec3 uvz) {
    float z = floor(uvz.z * tilesX * tilesY);
    float x = (mod(z, tilesX) + uvz.x) / tilesX;
    float y = (floor(z / tilesX) + uvz.y) / tilesY;
    return vec2(x, y) * quiltViewPortion;
  }

  float remap(float value, float from1, float to1, float from2, float to2) {
   return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
  }

  void main() {
    vec4 rgb[3];
    vec3 nuv = vec3(iUv.xy, 0.0);

    // Flip UVs if necessary
    nuv.x = (1.0 - flipX) * nuv.x + flipX * (1.0 - nuv.x);
    nuv.y = (1.0 - flipY) * nuv.y + flipY * (1.0 - nuv.y);

    for (int i = 0; i < 3; i++) {
      nuv.z = (iUv.x + float(i) * subp + iUv.y * tilt) * pitch - center;
      nuv.z = mod(nuv.z + ceil(abs(nuv.z)), 1.0);
      nuv.z = (1.0 - invView) * nuv.z + invView * (1.0 - nuv.z); 
      rgb[i] = texture2D(quiltTexture, texArr(vec3(iUv.x, iUv.y, nuv.z)));
    }

    gl_FragColor = vec4(rgb[0].r, rgb[1].g, rgb[2].b, 1);
  }
`,Dv={uniforms:{quiltTexture:{value:null},pitch:{value:0},tilt:{value:0},center:{value:0},invView:{value:0},flipX:{value:0},flipY:{value:0},subp:{value:0},tilesX:{value:0},tilesY:{value:0},screenW:{value:0},screenH:{value:0},quiltViewPortion:{value:new THREE.Vector2(1,1)}},vertexShader:Pv,fragmentShader:Iv};class Nv{constructor(e,t){nu().then(r=>{this.calibrationData=r,this.updateCalibration()}),this.tileCount=e,this.scene=new THREE.Scene;const n=new THREE.PlaneGeometry(1,1),i=new THREE.ShaderMaterial(Dv);this.quiltPlane=new THREE.Mesh(n,i),this.scene.add(this.quiltPlane),this.camera=new THREE.OrthographicCamera(-.5,.5,.5,-.5,0),this.renderer=t||new THREE.WebGLRenderer,this.renderSize=new THREE.Vector2(window.innerWidth,window.innerHeight),this.domElement=this.renderer.domElement,this.domElement.style.position="absolute"}render(){this.renderer.setSize(this.renderSize.x,this.renderSize.y),this.negateWindowZoomAndOffset(),this.renderer.render(this.scene,this.camera)}update(e,t){this.tileCount.copy(t),this.quiltPlane.material.uniforms.tilesX.value=this.tileCount.x,this.quiltPlane.material.uniforms.tilesY.value=this.tileCount.y,this.quiltPlane.material.uniforms.quiltViewPortion.value.set(Math.floor(e/this.tileCount.x)*this.tileCount.x/e,Math.floor(e/this.tileCount.y)*this.tileCount.y/e)}negateWindowZoomAndOffset(){const e=window.outerWidth/document.body.getBoundingClientRect().width,t=window.outerHeight-window.innerHeight;this.domElement.style.width=`${this.domElement.width/e}px`,this.domElement.style.height=`${this.domElement.height/e}px`,this.domElement.style.left=`${(window.screen.availLeft-window.screenLeft)/e}px`,this.domElement.style.top=`${-(window.screenTop+t)/e}px`}setQuiltImageURL(e){const t=new Image;t.src=e,this.setQuiltImage(t)}setQuiltImage(e){const t=new THREE.Texture;t.image=e,t.minFilter=THREE.NearestFilter,t.magFilter=THREE.NearestFilter,this.setQuiltTexture(t),e.addEventListener("load",()=>{t.needsUpdate=!0,this.render()}),e.complete&&e.load()}setQuiltTexture(e){this.quiltPlane.material.uniforms.quiltTexture.value=e}updateCalibration(){if(!this.calibrationData)return;this.renderSize.set(this.calibrationData.screenW.value,this.calibrationData.screenH.value);const e=this.quiltPlane.material,t=this.calibrationData.screenW.value/this.calibrationData.DPI.value;let n=this.calibrationData.pitch.value*t;n*=Math.cos(Math.atan(1/this.calibrationData.slope.value)),e.uniforms.pitch.value=n;let i=this.calibrationData.screenH.value/(this.calibrationData.screenW.value*this.calibrationData.slope.value);this.calibrationData.flipImageX.value==1&&(i*=-1),e.uniforms.tilt.value=i,e.uniforms.center.value=this.calibrationData.center.value,e.uniforms.invView.value=this.calibrationData.invView.value,e.uniforms.flipX.value=this.calibrationData.flipImageX.value,e.uniforms.flipY.value=this.calibrationData.flipImageY.value,e.uniforms.subp.value=1/(this.calibrationData.screenW.value*3),e.uniforms.tilesX.value=this.tileCount.x,e.uniforms.tilesY.value=this.tileCount.y}}var Da={};try{Da.EventTarget=new EventTarget().constructor}catch(e){(function(t,n){var i=t.create,r=t.defineProperty,s=o.prototype;a(s,"addEventListener",function(c,d,u){for(var f=n.get(this),h=f[c]||(f[c]=[]),m=0,y=h.length;m<y;m++)if(h[m].listener===d)return;h.push({target:this,listener:d,options:u})}),a(s,"dispatchEvent",function(c){var d=n.get(this),u=d[c.type];return u&&(a(c,"target",this),a(c,"currentTarget",this),u.slice(0).forEach(l,c),delete c.currentTarget,delete c.target),!0}),a(s,"removeEventListener",function(c,d){for(var u=n.get(this),f=u[c]||(u[c]=[]),h=0,m=f.length;h<m;h++)if(f[h].listener===d){f.splice(h,1);return}}),Da.EventTarget=o;function o(){n.set(this,i(null))}function a(c,d,u){r(c,d,{configurable:!0,writable:!0,value:u})}function l(c){var d=c.options;d&&d.once&&c.target.removeEventListener(this.type,c.listener),typeof c.listener=="function"?c.listener.call(c.target,this):c.listener.handleEvent(this)}})(Object,new WeakMap)}var jv=Da.EventTarget;class su extends THREE.ArrayCamera{constructor(){super();this.tileCount=new THREE.Vector2,this.target=new THREE.Vector3(0,0,0),this.position.set(0,0,1),this.fov=12.5,this.aspect=2560/1600,this.viewCone=35,Cv().then(e=>{this.viewCone=e}),ru().then(e=>{this.fov=e,this.cameras.forEach(t=>{t.fov=this.fov,t.updateProjectionMatrix()})}),nu().then(e=>{this.aspect=e.screenW.value/e.screenH.value,this.cameras.forEach(t=>{t.aspect=this.aspect,t.updateProjectionMatrix()})})}update(e,t){if(this.tileCount.x!=t.x||this.tileCount.y!=t.y){this.cameras=[];for(let i=0;i<t.x*t.y;i++){const r=new THREE.PerspectiveCamera(this.fov,this.aspect);r.viewport=new THREE.Vector4,this.cameras.push(r)}this.tileCount.copy(t)}const n=new THREE.Vector2(Math.floor(e/t.x),Math.floor(e/t.y));for(let i=0;i<this.cameras.length;i++){const r=this.cameras[i];r.rotation.copy(this.rotation);const s=new THREE.Vector2(i%t.x,Math.floor(i/t.x));r.viewport.set(s.x*n.x,s.y*n.y,n.x,n.y);const o=this.position.distanceTo(this.target),a=THREE.Math.degToRad(THREE.Math.lerp(-this.viewCone/2,this.viewCone/2,i/(this.cameras.length-1))),l=o*Math.tan(a);r.position.copy(this.localToWorld(new THREE.Vector3(l,0,0))),r.updateMatrixWorld(),r.projectionMatrix.elements[8]=-2*l/(2*o*Math.tan(.5*THREE.Math.degToRad(r.fov))*r.aspect)}}lookAt(e){super.lookAt(e),this.target.copy(e)}}var qv=function(){var e=["fullscreen","fullscreenEnabled","fullscreenElement","fullscreenchange","fullscreenerror","exitFullscreen","requestFullscreen"],t=["webkitIsFullScreen","webkitFullscreenEnabled","webkitFullscreenElement","webkitfullscreenchange","webkitfullscreenerror","webkitExitFullscreen","webkitRequestFullscreen"],n=["mozFullScreen","mozFullScreenEnabled","mozFullScreenElement","mozfullscreenchange","mozfullscreenerror","mozCancelFullScreen","mozRequestFullScreen"],i=["","msFullscreenEnabled","msFullscreenElement","MSFullscreenChange","MSFullscreenError","msExitFullscreen","msRequestFullscreen"];document||(document={});var r,s=(r=[e[1],t[1],n[1],i[1]].find(function(a){return document[a]}),[e,t,n,i].find(function(a){return a.find(function(l){return l===r})})||[]);function o(a,l){document[e[0]]=document[s[0]]||!!document[s[2]]||!1,document[e[1]]=document[s[1]]||!1,document[e[2]]=document[s[2]]||null,document.dispatchEvent(new Event(a),l.target)}return document[e[1]]?{}:(document[e[0]]=document[s[0]]||!!document[s[2]]||!1,document[e[1]]=document[s[1]]||!1,document[e[2]]=document[s[2]]||null,document.addEventListener(s[3],o.bind(document,e[3]),!1),document.addEventListener(s[4],o.bind(document,e[4]),!1),document[e[5]]=function(){return document[s[5]]()},void(Element.prototype[e[6]]=function(){return this[s[6]].apply(this,arguments)}))}();class Ov{constructor(e){this.renderer=e,this.lkgDevice=null,Ia().then(t=>{this.lkgDevice=t;const n=this.isOnLkg();n?(this.renderer.render2d=!1,this.moveWarning.style.display="none"):(this.renderer.render2d=!0,this.moveWarning.style.display=""),requestAnimationFrame(this.update.bind(this))}),this.onLkg=null,this.moveWarning=this.makeMoveWarning(),document.body.appendChild(this.moveWarning),this.fullscreenButton=this.makeFullscreenButton(),document.body.appendChild(this.fullscreenButton)}isOnLkg(){const e=window.screen.width==this.lkgDevice.calibration.screenW.value&&window.screen.height==this.lkgDevice.calibration.screenH.value,t=window.screen.availLeft==this.lkgDevice.windowCoords[0];return e&&t}update(){requestAnimationFrame(this.update.bind(this));const e=this.isOnLkg();e&&!this.onLkg?(this.renderer.render2d=!1,this.moveWarning.style.display="none"):!e&&this.onLkg&&(this.renderer.render2d=!0,this.moveWarning.style.display=""),this.onLkg=e,this.onLkg&&!document.fullscreen?(document.hasFocus()?this.fullscreenButton.innerText="click to go fullscreen":this.fullscreenButton.innerText="click to focus window",this.fullscreenButton.style.display=""):this.fullscreenButton.style.display="none"}makeMoveWarning(){const e=document.createElement("div");return e.innerText="drag this window to the Looking Glass",e.style.cssText=`
      background: white;
      border-radius: 8px;
      bottom: 0px;
      display: none;
      font-family: sans-serif;
      font-size: 6em;
      left: 0px;
      margin: 16px;
      opacity: 0.5;
      padding: 8px;
      position: absolute;
      z-index: ${Number.MAX_SAFE_INTEGER};
    `,e}makeFullscreenButton(){const e=document.createElement("div");return e.innerText="go fullscreen",e.style.cssText=`
      background: white;
      border-radius: 8px;
      bottom: 0px;
      display: none;
      font-family: sans-serif;
      font-size: 6em;
      font-weight: bold;
      left: 0px;
      margin: 16px;
      opacity: 0.75;
      padding: 8px;
      pointer-events: none;
      position: absolute;
      z-index: ${Number.MAX_SAFE_INTEGER};
    `,window.addEventListener("click",()=>{this.renderer.domElement.requestFullscreen()}),e}}class ou{constructor(e){this.enforceMandatoryDocumentStyle();let t=e||{};this.quiltResolution=t.quiltResolution||4096,this.tileCount=t.tileCount||new THREE.Vector2(5,9),this.render2d=t.render2d||!1,this.renderQuilt=t.render2d||!1,this.fullscreenHelper=null,t.disableFullscreenUi||(this.fullscreenHelper=new Ov(this)),this.webglRenderer=new THREE.WebGLRenderer,this.domElement=this.webglRenderer.domElement,this.quiltRenderTarget=new THREE.WebGLRenderTarget(this.quiltResolution,this.quiltResolution,{format:THREE.RGBFormat}),this.quiltRenderer=new Nv(this.tileCount,this.webglRenderer),this.quiltRenderer.setQuiltTexture(this.quiltRenderTarget.texture),t.quiltResolution||Rv().then(n=>{this.quiltResolution=n}),t.tileCount||Lv().then(n=>{this.tileCount.copy(n)}),this.debug2dCamera=new THREE.PerspectiveCamera,ru().then(n=>{this.debug2dCamera.fov=n,this.debug2dCamera.updateProjectionMatrix()})}enforceMandatoryDocumentStyle(){document.body.style.margin="0px",document.body.style.overflow="hidden"}render(e,t){if(this.enforceMandatoryDocumentStyle(),this.render2d){this.debug2dCamera.position.copy(t.position),this.debug2dCamera.rotation.copy(t.rotation);const n=window.innerWidth/window.innerHeight;n!=this.debug2dCamera.aspect&&(this.debug2dCamera.aspect=n,this.debug2dCamera.updateProjectionMatrix()),this.webglRenderer.domElement.style.top=this.webglRenderer.domElement.style.left="0px",this.webglRenderer.setSize(window.innerWidth,window.innerHeight),this.webglRenderer.render(e,this.debug2dCamera)}else if(this.renderQuilt){t.update(this.quiltResolution,this.tileCount);const n=Math.min(window.innerWidth,window.innerHeight);this.webglRenderer.domElement.style.width=this.webglRenderer.domElement.style.height=`${n}px`,this.webglRenderer.domElement.style.top=this.webglRenderer.domElement.style.left="0px",this.webglRenderer.setRenderTarget(null),this.webglRenderer.setSize(this.quiltResolution,this.quiltResolution,!1),this.webglRenderer.render(e,t)}else this.quiltRenderTarget.setSize(this.quiltResolution,this.quiltResolution),t.update(this.quiltResolution,this.tileCount),this.webglRenderer.setRenderTarget(this.quiltRenderTarget),this.webglRenderer.setSize(this.quiltResolution,this.quiltResolution,!1),this.webglRenderer.render(e,t),this.webglRenderer.setRenderTarget(null),this.quiltRenderer.update(this.quiltResolution,this.tileCount),this.quiltRenderer.render()}}class St{}St.ANIMATION_DURATION=400,St.DAMPING_DURATION=2e3,St.MOUSE_BUTTON={LEFT:0,MIDDLE:1,RIGHT:2};class xt{static clamp(e,t,n){return e<=t?t:e>=n?n:e}}var At;(function(e){e[e.EASE_OUT=0]="EASE_OUT",e[e.EASE_IN_OUT=1]="EASE_IN_OUT"})(At||(At={}));class Rt{constructor(e,t,n=0,i=St.ANIMATION_DURATION,r=!0){this._timeStampAtSetEnd=0;this._min=-Infinity;this._max=Infinity;this._hasChanged=!1;this._prevDeltaValue=0;this._prevTimeStamp=1;this._prevDeltaTime=1;this._easing=0;this._timeoutId=-1;this._originalStart=e,this._start=e,this._originalEnd=t,this._end=t,this._value=this._start,this._originalAnimationDuration=this._animationDuration=i,this._easing=n,this._triggerRender=r}static removeFromActiveOnes(e){Rt._activeInstances=Rt._activeInstances.filter(t=>t!==e)}static addToActiveOnes(e){Rt._activeInstances.includes(e)||Rt._activeInstances.push(e)}static updateActiveOnes(e){let t=!1;for(const n of Rt._activeInstances)t=t||n._triggerRender,n.update(e);return t}smoothStep(e){if(e<this._animationDuration){const t=e/this._animationDuration;return xt.clamp(t**2*(3-2*t)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=xt.clamp(this._end,this._min,this._max),this._end}exponentialOut(e){if(e<this._animationDuration){const t=e/this._animationDuration;return xt.clamp((1-2**(-10*t))*(1024/1023)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=xt.clamp(this._end,this._min,this._max),this._end}getNextValue(e){return this._easing===1?this.smoothStep(e):this.exponentialOut(e)}increaseEndBy(e,t=!1){this.setEnd(this._end+e,t)}decreaseEndBy(e,t=!1){this.setEnd(this._end-e,t)}setEnd(e,t=!1,n=this._originalAnimationDuration){this._animationDuration=n;const i=t?xt.clamp(e,this._min,this._max):e;Rt.addToActiveOnes(this),this._start=this._value,this._end=i,this._timeStampAtSetEnd=Ze.timeStamp,t||(clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this._end=xt.clamp(this._end,this._min,this._max)},this._animationDuration))}reset(e,t,n=this._originalAnimationDuration){this._animationDuration=n,Rt.addToActiveOnes(this),this._start=e!=null?e:this._originalStart,this._end=t!=null?t:this._originalEnd,this._timeStampAtSetEnd=Ze.timeStamp}update(e){this._prevDeltaTime=e-this._prevTimeStamp;const t=e-this._timeStampAtSetEnd,n=this._value;this._value=this.getNextValue(t),this._prevDeltaValue=this._value-n,this._prevTimeStamp=e,this._value===n?(this._start=this._end,this._hasChanged=!1,Rt.removeFromActiveOnes(this)):this._hasChanged=!0}get animationDuration(){return this._animationDuration}get originalAnimationDuration(){return this._originalAnimationDuration}get start(){return this._start}get value(){return this._value}get end(){return this._end}get hasChangedSinceLastTick(){return this._hasChanged}get prevDeltaValue(){return this._prevDeltaValue}get prevDeltaTime(){return this._prevDeltaTime}get derivateAt0(){return this._easing===0?6.938247437862991:0}}Rt._activeInstances=[];class Zr extends Rt{constructor(e,t,n,i,r=At.EASE_OUT,s=St.ANIMATION_DURATION,o=!0){super(e,t,r,s,o);this._originalMin=this._min=n,this._originalMax=this._max=i}get min(){return this._min}get max(){return this._max}get originalMin(){return this._originalMin}get originalMax(){return this._originalMax}setMin(e){this._min=e;const t=xt.clamp(this._start,this._min,this._max),n=xt.clamp(this._end,this._min,this._max);super.reset(t,n)}setMax(e){this._max=e;const t=xt.clamp(this._start,this._min,this._max),n=xt.clamp(this._end,this._min,this._max);super.reset(t,n)}reset(e,t,n,i,r=!1){this._min=n!=null?n:this._min,this._max=i!=null?i:this._max;const s=e!=null?e:this._originalStart,o=r?xt.clamp(s,this._min,this._max):s,a=t!=null?t:this._originalEnd,l=r?xt.clamp(a,this._min,this._max):a;super.reset(o,l)}isPlaying(){return this.value!==this.end}}class li{static lengthOfSquared(e){let t=0;for(const n of e)t+=n*n;return t}static lengthOf(e){return Math.sqrt(li.lengthOfSquared(e))}static normalize(e){const t=li.lengthOf(e);for(let n=0;n<e.length;++n)e[n]/=t;return e}static getWorldPositionFromUV(e,t){const n=[Math.cos(e)*Math.sin(t),Math.cos(t),Math.sin(e)*Math.sin(t)];return li.normalize(n)}}class au{constructor(e,t){this._isPointerDown=!1;this._mouseMoved=!0;this._triggerClickThreshold={deltaCursor:3,deltaTime:1e3};this._pointer={downTimeStamp:null,startX:null,startY:null,prevX:null,prevY:null,prevDeltaX:0,prevDeltaY:0,prevTimeStamp:0,prevDeltaTime:1,triggerClickOnPointerUp:!1};this._u=new Zr(0,0,-Infinity,Infinity,At.EASE_OUT,St.DAMPING_DURATION);this._v=new Zr(Math.PI/2,Math.PI/2,.01,3.14,At.EASE_OUT,St.DAMPING_DURATION);this._pinch={startValue:{touchDistance:null,distanceValue:null},currentValue:{touchDistance:null,distanceValue:null}};this._cameraNormalizedPosition=li.normalize([0,0,1]);this._timeoutID=null;this._dampOnPointerUp=!1;this._enabled=!1;this.autoRotate=!0;this.autoRotateSpeed=2*Math.PI/12/1e3;this.SENSITIVITY=1.2;this._prevSpeed=[];this.onWheel=e=>{e.preventDefault();const t=1.1,n=this._sceneManager.distance,i=Math.sign(-e.deltaY)>0?n.end/t:n.end*t;n.setEnd(i,!0)};this.onMouseDown=e=>{e.button===St.MOUSE_BUTTON.LEFT&&this.onPointerDown(e.clientX,e.clientY)};this.onTouchStart=e=>{e.preventDefault(),e.touches.length===1?this.onPointerDown(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2?(this._isPointerDown=!1,this._pinch.startValue.touchDistance=this.getTouchDistance(e),this._pinch.startValue.distanceValue=this._sceneManager.distance.value):this.onPointerUp(e)};this.onMouseMove=e=>{this.onPointerMove(e.clientX,e.clientY)};this.onTouchMove=e=>{e.touches.length===1?this.onPointerMove(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2&&this._pinch.startValue.touchDistance?(this._pinch.currentValue.touchDistance=this.getTouchDistance(e),this._pinch.currentValue.distanceValue=this._pinch.startValue.touchDistance/this._pinch.currentValue.touchDistance*this._pinch.startValue.distanceValue,this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue)):this.onPointerUp(e)};this.onPointerUp=e=>{if(this._isPointerDown){const t=performance.now();this._domElement.classList.remove("rotating");const n=this._prevSpeed,i=li.lengthOfSquared(n);if(this._dampOnPointerUp&&!isNaN(i)&&0<i&&i<Infinity){this._dampOnPointerUp=!1;const r=this._u.derivateAt0,s=this._u.originalAnimationDuration,o=[s*n[0]/r,s*n[1]/r];this._u.setEnd(this._u.value+o[0]),this._v.setEnd(this._v.value+o[1])}this._triggerClickThreshold.deltaTime<t-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.triggerClickOnPointerUp}this._isPointerDown=!1,this._pointer.triggerClickOnPointerUp=!1,this._pointer.downTimeStamp=null,this._pointer.startX=null,this._pointer.startY=null,this._pointer.prevX=null,this._pointer.prevY=null,this._pointer.prevTimeStamp=0,this._pointer.prevDeltaX=0,this._pointer.prevDeltaY=0,this._pointer.prevDeltaTime=1,this._pinch.startValue.touchDistance=this._pinch.startValue.distanceValue=this._pinch.currentValue.touchDistance=this._pinch.currentValue.distanceValue=null};this.cancelDamping=()=>{this._dampOnPointerUp=!1};this.onKeyUp=e=>{switch(e.code){case"Space":this.autoRotate=!this.autoRotate,this._sceneManager.needsRender=!0;break}};this._domElement=e,this._sceneManager=t}getTouchDistance(e){const t={x:e.touches[0].clientX,y:e.touches[0].clientY},n={x:e.touches[1].clientX,y:e.touches[1].clientY},i={x:n.x-t.x,y:n.y-t.y},r=Math.sqrt(i.x*i.x+i.y*i.y);return r}onPointerDown(e,t){this.stopRotating(),this._isPointerDown=!0,this._mouseMoved=!1,this._pointer.startX=this._pointer.prevX=e,this._pointer.startY=this._pointer.prevY=t,this._pointer.downTimeStamp=performance.now(),this._pointer.prevTimeStamp=this._pointer.downTimeStamp,this._pointer.triggerClickOnPointerUp=!0,this._domElement.classList.add("rotating"),this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}onPointerMove(e,t){if(this._isPointerDown&&(this._mouseMoved=e!==this._pointer.prevX||t!==this._pointer.prevY,this._mouseMoved)){if(this._domElement.classList.add("rotating"),this._pointer.prevX!=null&&this._pointer.prevY!=null){const i=this._sceneManager.distance.value,r=this._pointer.prevX-e,s=t-this._pointer.prevY,o=r*this.SENSITIVITY/window.innerHeight*i,a=s*this.SENSITIVITY/window.innerHeight*i,l=this._pointer.startX-e,c=this._pointer.startY-t;(this._triggerClickThreshold.deltaCursor<Math.abs(l)||this._triggerClickThreshold.deltaCursor<Math.abs(c))&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaX=this._pointer.prevX-e,this._pointer.prevDeltaY=t-this._pointer.prevY,this._u.reset(this._u.end-o,this._u.end-o),this._v.reset(this._v.end-a,this._v.end-a)}this._pointer.prevX=e,this._pointer.prevY=t;const n=performance.now();this._triggerClickThreshold.deltaTime<n-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaTime=n-this._pointer.prevTimeStamp,this._pointer.prevTimeStamp=n,this._dampOnPointerUp=!0,clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this.cancelDamping,100)}}setUVFromSphereSufracePoint(e){const t=Math.PI-Math.atan2(e[2],e[0]);this._u.reset(t,t);const n=Math.PI/2-Math.asin(e[1]);this._v.reset(n,n)}activate(){this._enabled||(this._enabled=!0,this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition),this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),this._domElement.addEventListener("wheel",this.onWheel),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp),window.addEventListener("keyup",this.onKeyUp))}deactivate(){this._enabled&&(this._enabled=!1,this._isPointerDown=!1,this._domElement.classList.remove("rotating"),this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),this._domElement.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp),window.removeEventListener("keyup",this.onKeyUp))}stopRotating(){this.autoRotate=!1,this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}update(){if(this._enabled){if(this.autoRotate){const e=this._u.end+this.autoRotateSpeed*Ze.deltaFrame;this._u.reset(e,e)}return(this._u.hasChangedSinceLastTick||this._v.hasChangedSinceLastTick)&&(this._prevSpeed[0]=this._u.prevDeltaValue/this._u.prevDeltaTime,this._prevSpeed[1]=this._v.prevDeltaValue/this._v.prevDeltaTime,this._cameraNormalizedPosition=li.getWorldPositionFromUV(this._u.value,this._v.value),this._sceneManager.needsRender=!0),this._cameraNormalizedPosition}}}var lu=function(){function e(w){Be.call(this,w),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(x){return new o(x)}),this.register(function(x){return new l(x)}),this.register(function(x){return new c(x)}),this.register(function(x){return new a(x)}),this.register(function(x){return new r(x)}),this.register(function(x){return new d(x)})}e.prototype=Object.assign(Object.create(Be.prototype),{constructor:e,load:function(w,x,P,M){var N=this,T;this.resourcePath!==""?T=this.resourcePath:this.path!==""?T=this.path:T=oi.extractUrlBase(w),this.manager.itemStart(w);var C=function(W){M?M(W):console.error(W),N.manager.itemError(w),N.manager.itemEnd(w)},L=new Bt(this.manager);L.setPath(this.path),L.setResponseType("arraybuffer"),L.setRequestHeader(this.requestHeader),L.setWithCredentials(this.withCredentials),L.load(w,function(W){try{N.parse(W,T,function(j){x(j),N.manager.itemEnd(w)},C)}catch(j){C(j)}},P,C)},setDRACOLoader:function(w){return this.dracoLoader=w,this},setDDSLoader:function(w){return this.ddsLoader=w,this},setKTX2Loader:function(w){return this.ktx2Loader=w,this},setMeshoptDecoder:function(w){return this.meshoptDecoder=w,this},register:function(w){return this.pluginCallbacks.indexOf(w)===-1&&this.pluginCallbacks.push(w),this},unregister:function(w){return this.pluginCallbacks.indexOf(w)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(w),1),this},parse:function(w,x,P,M){var N,T={},C={};if(typeof w=="string")N=w;else{var L=oi.decodeText(new Uint8Array(w,0,4));if(L===u){try{T[n.KHR_BINARY_GLTF]=new m(w)}catch(X){M&&M(X);return}N=T[n.KHR_BINARY_GLTF].content}else N=oi.decodeText(new Uint8Array(w))}var W=JSON.parse(N);if(W.asset===void 0||W.asset.version[0]<2){M&&M(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}var j=new ce(W,{path:x||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});j.fileLoader.setRequestHeader(this.requestHeader);for(var Z=0;Z<this.pluginCallbacks.length;Z++){var b=this.pluginCallbacks[Z](j);C[b.name]=b,T[b.name]=!0}if(W.extensionsUsed)for(var Z=0;Z<W.extensionsUsed.length;++Z){var _=W.extensionsUsed[Z],K=W.extensionsRequired||[];switch(_){case n.KHR_MATERIALS_UNLIT:T[_]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:T[_]=new p;break;case n.KHR_DRACO_MESH_COMPRESSION:T[_]=new y(W,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:T[_]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:T[_]=new v;break;case n.KHR_MESH_QUANTIZATION:T[_]=new D;break;default:K.indexOf(_)>=0&&C[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}j.setExtensions(T),j.setPlugins(C),j.parse(P,M)}});function t(){var w={};return{get:function(x){return w[x]},add:function(x,P){w[x]=P},remove:function(x){delete w[x]},removeAll:function(){w={}}}}var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(w){if(!w)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=w}function r(w){this.parser=w,this.name=n.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}r.prototype._markDefs=function(){for(var w=this.parser,x=this.parser.json.nodes||[],P=0,M=x.length;P<M;P++){var N=x[P];N.extensions&&N.extensions[this.name]&&N.extensions[this.name].light!==void 0&&w._addNodeRef(this.cache,N.extensions[this.name].light)}},r.prototype._loadLight=function(w){var x=this.parser,P="light:"+w,M=x.cache.get(P);if(M)return M;var N=x.json,T=N.extensions&&N.extensions[this.name]||{},C=T.lights||[],L=C[w],W,j=new me(16777215);L.color!==void 0&&j.fromArray(L.color);var Z=L.range!==void 0?L.range:0;switch(L.type){case"directional":W=new ir(j),W.target.position.set(0,0,-1),W.add(W.target);break;case"point":W=new Ys(j),W.distance=Z;break;case"spot":W=new Xs(j),W.distance=Z,L.spot=L.spot||{},L.spot.innerConeAngle=L.spot.innerConeAngle!==void 0?L.spot.innerConeAngle:0,L.spot.outerConeAngle=L.spot.outerConeAngle!==void 0?L.spot.outerConeAngle:Math.PI/4,W.angle=L.spot.outerConeAngle,W.penumbra=1-L.spot.innerConeAngle/L.spot.outerConeAngle,W.target.position.set(0,0,-1),W.add(W.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+L.type+'".')}return W.position.set(0,0,0),W.decay=2,L.intensity!==void 0&&(W.intensity=L.intensity),W.name=x.createUniqueName(L.name||"light_"+w),M=Promise.resolve(W),x.cache.add(P,M),M},r.prototype.createNodeAttachment=function(w){var x=this,P=this.parser,M=P.json,N=M.nodes[w],T=N.extensions&&N.extensions[this.name]||{},C=T.light;return C===void 0?null:this._loadLight(C).then(function(L){return P._getNodeRef(x.cache,C,L)})};function s(){this.name=n.KHR_MATERIALS_UNLIT}s.prototype.getMaterialType=function(){return wt},s.prototype.extendParams=function(w,x,P){var M=[];w.color=new me(1,1,1),w.opacity=1;var N=x.pbrMetallicRoughness;if(N){if(Array.isArray(N.baseColorFactor)){var T=N.baseColorFactor;w.color.fromArray(T),w.opacity=T[3]}N.baseColorTexture!==void 0&&M.push(P.assignTexture(w,"map",N.baseColorTexture))}return Promise.all(M)};function o(w){this.parser=w,this.name=n.KHR_MATERIALS_CLEARCOAT}o.prototype.getMaterialType=function(w){var x=this.parser,P=x.json.materials[w];return!P.extensions||!P.extensions[this.name]?null:$t},o.prototype.extendMaterialParams=function(w,x){var P=this.parser,M=P.json.materials[w];if(!M.extensions||!M.extensions[this.name])return Promise.resolve();var N=[],T=M.extensions[this.name];if(T.clearcoatFactor!==void 0&&(x.clearcoat=T.clearcoatFactor),T.clearcoatTexture!==void 0&&N.push(P.assignTexture(x,"clearcoatMap",T.clearcoatTexture)),T.clearcoatRoughnessFactor!==void 0&&(x.clearcoatRoughness=T.clearcoatRoughnessFactor),T.clearcoatRoughnessTexture!==void 0&&N.push(P.assignTexture(x,"clearcoatRoughnessMap",T.clearcoatRoughnessTexture)),T.clearcoatNormalTexture!==void 0&&(N.push(P.assignTexture(x,"clearcoatNormalMap",T.clearcoatNormalTexture)),T.clearcoatNormalTexture.scale!==void 0)){var C=T.clearcoatNormalTexture.scale;x.clearcoatNormalScale=new ie(C,C)}return Promise.all(N)};function a(w){this.parser=w,this.name=n.KHR_MATERIALS_TRANSMISSION}a.prototype.getMaterialType=function(w){var x=this.parser,P=x.json.materials[w];return!P.extensions||!P.extensions[this.name]?null:$t},a.prototype.extendMaterialParams=function(w,x){var P=this.parser,M=P.json.materials[w];if(!M.extensions||!M.extensions[this.name])return Promise.resolve();var N=[],T=M.extensions[this.name];return T.transmissionFactor!==void 0&&(x.transmission=T.transmissionFactor),T.transmissionTexture!==void 0&&N.push(P.assignTexture(x,"transmissionMap",T.transmissionTexture)),Promise.all(N)};function l(w){this.parser=w,this.name=n.KHR_TEXTURE_BASISU}l.prototype.loadTexture=function(w){var x=this.parser,P=x.json,M=P.textures[w];if(!M.extensions||!M.extensions[this.name])return null;var N=M.extensions[this.name],T=P.images[N.source],C=x.options.ktx2Loader;if(!C){if(P.extensionsRequired&&P.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return x.loadTextureImage(w,T,C)};function c(w){this.parser=w,this.name=n.EXT_TEXTURE_WEBP,this.isSupported=null}c.prototype.loadTexture=function(w){var x=this.name,P=this.parser,M=P.json,N=M.textures[w];if(!N.extensions||!N.extensions[x])return null;var T=N.extensions[x],C=M.images[T.source],L=C.uri?P.options.manager.getHandler(C.uri):P.textureLoader;return this.detectSupport().then(function(W){if(W)return P.loadTextureImage(w,C,L);if(M.extensionsRequired&&M.extensionsRequired.indexOf(x)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return P.loadTexture(w)})},c.prototype.detectSupport=function(){return this.isSupported||(this.isSupported=new Promise(function(w){var x=new Image;x.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",x.onload=x.onerror=function(){w(x.height===1)}})),this.isSupported};function d(w){this.name=n.EXT_MESHOPT_COMPRESSION,this.parser=w}d.prototype.loadBufferView=function(w){var x=this.parser.json,P=x.bufferViews[w];if(P.extensions&&P.extensions[this.name]){var M=P.extensions[this.name],N=this.parser.getDependency("buffer",M.buffer),T=this.parser.options.meshoptDecoder;if(!T||!T.supported){if(x.extensionsRequired&&x.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([N,T.ready]).then(function(C){var L=M.byteOffset||0,W=M.byteLength||0,j=M.count,Z=M.byteStride,b=new ArrayBuffer(j*Z),_=new Uint8Array(C[0],L,W);return T.decodeGltfBuffer(new Uint8Array(b),j,Z,_,M.mode,M.filter),b})}else return null};var u="glTF",f=12,h={JSON:1313821514,BIN:5130562};function m(w){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var x=new DataView(w,0,f);if(this.header={magic:oi.decodeText(new Uint8Array(w.slice(0,4))),version:x.getUint32(4,!0),length:x.getUint32(8,!0)},this.header.magic!==u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var P=new DataView(w,f),M=0;M<P.byteLength;){var N=P.getUint32(M,!0);M+=4;var T=P.getUint32(M,!0);if(M+=4,T===h.JSON){var C=new Uint8Array(w,f+M,N);this.content=oi.decodeText(C)}else if(T===h.BIN){var L=f+M;this.body=w.slice(L,L+N)}M+=N}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}function y(w,x){if(!x)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=w,this.dracoLoader=x,this.dracoLoader.preload()}y.prototype.decodePrimitive=function(w,x){var P=this.json,M=this.dracoLoader,N=w.extensions[this.name].bufferView,T=w.extensions[this.name].attributes,C={},L={},W={};for(var j in T){var Z=le[j]||j.toLowerCase();C[Z]=T[j]}for(j in w.attributes){var Z=le[j]||j.toLowerCase();if(T[j]!==void 0){var b=P.accessors[w.attributes[j]],_=E[b.componentType];W[Z]=_,L[Z]=b.normalized===!0}}return x.getDependency("bufferView",N).then(function(K){return new Promise(function(X){M.decodeDracoFile(K,function(U){for(var ne in U.attributes){var re=U.attributes[ne],pe=L[ne];pe!==void 0&&(re.normalized=pe)}X(U)},C,W)})})};function v(){this.name=n.KHR_TEXTURE_TRANSFORM}v.prototype.extendTexture=function(w,x){return w=w.clone(),x.offset!==void 0&&w.offset.fromArray(x.offset),x.rotation!==void 0&&(w.rotation=x.rotation),x.scale!==void 0&&w.repeat.fromArray(x.scale),x.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),w.needsUpdate=!0,w};function g(w){ot.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var x=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),P=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),M=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),N=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),T=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),C={specular:{value:new me().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=C,this.onBeforeCompile=function(L){for(var W in C)L.uniforms[W]=C[W];L.fragmentShader=L.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",x).replace("#include <metalnessmap_pars_fragment>",P).replace("#include <roughnessmap_fragment>",M).replace("#include <metalnessmap_fragment>",N).replace("#include <lights_physical_fragment>",T)},Object.defineProperties(this,{specular:{get:function(){return C.specular.value},set:function(L){C.specular.value=L}},specularMap:{get:function(){return C.specularMap.value},set:function(L){C.specularMap.value=L,L?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return C.glossiness.value},set:function(L){C.glossiness.value=L}},glossinessMap:{get:function(){return C.glossinessMap.value},set:function(L){C.glossinessMap.value=L,L?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(w)}g.prototype=Object.create(ot.prototype),g.prototype.constructor=g,g.prototype.copy=function(w){return ot.prototype.copy.call(this,w),this.specularMap=w.specularMap,this.specular.copy(w.specular),this.glossinessMap=w.glossinessMap,this.glossiness=w.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this};function p(){return{name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return g},extendParams:function(w,x,P){var M=x.extensions[this.name];w.color=new me(1,1,1),w.opacity=1;var N=[];if(Array.isArray(M.diffuseFactor)){var T=M.diffuseFactor;w.color.fromArray(T),w.opacity=T[3]}if(M.diffuseTexture!==void 0&&N.push(P.assignTexture(w,"map",M.diffuseTexture)),w.emissive=new me(0,0,0),w.glossiness=M.glossinessFactor!==void 0?M.glossinessFactor:1,w.specular=new me(1,1,1),Array.isArray(M.specularFactor)&&w.specular.fromArray(M.specularFactor),M.specularGlossinessTexture!==void 0){var C=M.specularGlossinessTexture;N.push(P.assignTexture(w,"glossinessMap",C)),N.push(P.assignTexture(w,"specularMap",C))}return Promise.all(N)},createMaterial:function(w){var x=new g(w);return x.fog=!0,x.color=w.color,x.map=w.map===void 0?null:w.map,x.lightMap=null,x.lightMapIntensity=1,x.aoMap=w.aoMap===void 0?null:w.aoMap,x.aoMapIntensity=1,x.emissive=w.emissive,x.emissiveIntensity=1,x.emissiveMap=w.emissiveMap===void 0?null:w.emissiveMap,x.bumpMap=w.bumpMap===void 0?null:w.bumpMap,x.bumpScale=1,x.normalMap=w.normalMap===void 0?null:w.normalMap,x.normalMapType=Sn,w.normalScale&&(x.normalScale=w.normalScale),x.displacementMap=null,x.displacementScale=1,x.displacementBias=0,x.specularMap=w.specularMap===void 0?null:w.specularMap,x.specular=w.specular,x.glossinessMap=w.glossinessMap===void 0?null:w.glossinessMap,x.glossiness=w.glossiness,x.alphaMap=null,x.envMap=w.envMap===void 0?null:w.envMap,x.envMapIntensity=1,x.refractionRatio=.98,x}}}function D(){this.name=n.KHR_MESH_QUANTIZATION}function A(w,x,P,M){dt.call(this,w,x,P,M)}A.prototype=Object.create(dt.prototype),A.prototype.constructor=A,A.prototype.copySampleValue_=function(w){for(var x=this.resultBuffer,P=this.sampleValues,M=this.valueSize,N=w*M*3+M,T=0;T!==M;T++)x[T]=P[N+T];return x},A.prototype.beforeStart_=A.prototype.copySampleValue_,A.prototype.afterEnd_=A.prototype.copySampleValue_,A.prototype.interpolate_=function(w,x,P,M){for(var N=this.resultBuffer,T=this.sampleValues,C=this.valueSize,L=C*2,W=C*3,j=M-x,Z=(P-x)/j,b=Z*Z,_=b*Z,K=w*W,X=K-W,U=-2*_+3*b,ne=_-b,re=1-U,pe=ne-b+Z,ae=0;ae!==C;ae++){var ge=T[X+ae+C],ve=T[X+ae+L]*j,Me=T[K+ae+C],he=T[K+ae]*j;N[ae]=re*ge+pe*ve+U*Me+ne*he}return N};var B={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},E={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},H={9728:Ye,9729:je,9984:$r,9985:mo,9986:es,9987:jn},Q={33071:ut,33648:gr,10497:Wn},ee={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},le={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},I={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G={CUBICSPLINE:void 0,LINEAR:qn,STEP:vi},O={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z(w,x){return typeof w!="string"||w===""?"":(/^https?:\/\//i.test(x)&&/^\//.test(w)&&(x=x.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(w)||(/^data:.*,.*$/i.test(w)||/^blob:.*$/i.test(w))?w:x+w)}function k(w){return w.DefaultMaterial===void 0&&(w.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),w.DefaultMaterial}function F(w,x,P){for(var M in P.extensions)w[M]===void 0&&(x.userData.gltfExtensions=x.userData.gltfExtensions||{},x.userData.gltfExtensions[M]=P.extensions[M])}function V(w,x){x.extras!==void 0&&(typeof x.extras=="object"?Object.assign(w.userData,x.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+x.extras))}function q(w,x,P){for(var M=!1,N=!1,T=0,C=x.length;T<C;T++){var L=x[T];if(L.POSITION!==void 0&&(M=!0),L.NORMAL!==void 0&&(N=!0),M&&N)break}if(!M&&!N)return Promise.resolve(w);for(var W=[],j=[],T=0,C=x.length;T<C;T++){var L=x[T];if(M){var Z=L.POSITION!==void 0?P.getDependency("accessor",L.POSITION):w.attributes.position;W.push(Z)}if(N){var Z=L.NORMAL!==void 0?P.getDependency("accessor",L.NORMAL):w.attributes.normal;j.push(Z)}}return Promise.all([Promise.all(W),Promise.all(j)]).then(function(b){var _=b[0],K=b[1];return M&&(w.morphAttributes.position=_),N&&(w.morphAttributes.normal=K),w.morphTargetsRelative=!0,w})}function oe(w,x){if(w.updateMorphTargets(),x.weights!==void 0)for(var P=0,M=x.weights.length;P<M;P++)w.morphTargetInfluences[P]=x.weights[P];if(x.extras&&Array.isArray(x.extras.targetNames)){var N=x.extras.targetNames;if(w.morphTargetInfluences.length===N.length){w.morphTargetDictionary={};for(var P=0,M=N.length;P<M;P++)w.morphTargetDictionary[N[P]]=P}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function se(w){var x=w.extensions&&w.extensions[n.KHR_DRACO_MESH_COMPRESSION],P;return x?P="draco:"+x.bufferView+":"+x.indices+":"+fe(x.attributes):P=w.indices+":"+fe(w.attributes)+":"+w.mode,P}function fe(w){for(var x="",P=Object.keys(w).sort(),M=0,N=P.length;M<N;M++)x+=P[M]+":"+w[P[M]]+";";return x}function ce(w,x){this.json=w||{},this.extensions={},this.plugins={},this.options=x||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Qs(this.options.manager):this.textureLoader=new Wr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new Bt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}ce.prototype.setExtensions=function(w){this.extensions=w},ce.prototype.setPlugins=function(w){this.plugins=w},ce.prototype.parse=function(w,x){var P=this,M=this.json,N=this.extensions;this.cache.removeAll(),this._invokeAll(function(T){return T._markDefs&&T._markDefs()}),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(T){var C={scene:T[0][M.scene||0],scenes:T[0],animations:T[1],cameras:T[2],asset:M.asset,parser:P,userData:{}};F(N,C,M),V(C,M),w(C)}).catch(x)},ce.prototype._markDefs=function(){for(var w=this.json.nodes||[],x=this.json.skins||[],P=this.json.meshes||[],M=0,N=x.length;M<N;M++)for(var T=x[M].joints,C=0,L=T.length;C<L;C++)w[T[C]].isBone=!0;for(var W=0,j=w.length;W<j;W++){var Z=w[W];Z.mesh!==void 0&&(this._addNodeRef(this.meshCache,Z.mesh),Z.skin!==void 0&&(P[Z.mesh].isSkinnedMesh=!0)),Z.camera!==void 0&&this._addNodeRef(this.cameraCache,Z.camera)}},ce.prototype._addNodeRef=function(w,x){if(x===void 0)return;w.refs[x]===void 0&&(w.refs[x]=w.uses[x]=0),w.refs[x]++},ce.prototype._getNodeRef=function(w,x,P){if(w.refs[x]<=1)return P;var M=P.clone();return M.name+="_instance_"+w.uses[x]++,M},ce.prototype._invokeOne=function(w){var x=Object.values(this.plugins);x.push(this);for(var P=0;P<x.length;P++){var M=w(x[P]);if(M)return M}},ce.prototype._invokeAll=function(w){var x=Object.values(this.plugins);x.unshift(this);for(var P=[],M=0;M<x.length;M++){var N=w(x[M]);N&&P.push(N)}return P},ce.prototype.getDependency=function(w,x){var P=w+":"+x,M=this.cache.get(P);if(!M){switch(w){case"scene":M=this.loadScene(x);break;case"node":M=this.loadNode(x);break;case"mesh":M=this._invokeOne(function(N){return N.loadMesh&&N.loadMesh(x)});break;case"accessor":M=this.loadAccessor(x);break;case"bufferView":M=this._invokeOne(function(N){return N.loadBufferView&&N.loadBufferView(x)});break;case"buffer":M=this.loadBuffer(x);break;case"material":M=this._invokeOne(function(N){return N.loadMaterial&&N.loadMaterial(x)});break;case"texture":M=this._invokeOne(function(N){return N.loadTexture&&N.loadTexture(x)});break;case"skin":M=this.loadSkin(x);break;case"animation":M=this.loadAnimation(x);break;case"camera":M=this.loadCamera(x);break;default:throw new Error("Unknown type: "+w)}this.cache.add(P,M)}return M},ce.prototype.getDependencies=function(w){var x=this.cache.get(w);if(!x){var P=this,M=this.json[w+(w==="mesh"?"es":"s")]||[];x=Promise.all(M.map(function(N,T){return P.getDependency(w,T)})),this.cache.add(w,x)}return x},ce.prototype.loadBuffer=function(w){var x=this.json.buffers[w],P=this.fileLoader;if(x.type&&x.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+x.type+" buffer type is not supported.");if(x.uri===void 0&&w===0)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var M=this.options;return new Promise(function(N,T){P.load(z(x.uri,M.path),N,void 0,function(){T(new Error('THREE.GLTFLoader: Failed to load buffer "'+x.uri+'".'))})})},ce.prototype.loadBufferView=function(w){var x=this.json.bufferViews[w];return this.getDependency("buffer",x.buffer).then(function(P){var M=x.byteLength||0,N=x.byteOffset||0;return P.slice(N,N+M)})},ce.prototype.loadAccessor=function(w){var x=this,P=this.json,M=this.json.accessors[w];if(M.bufferView===void 0&&M.sparse===void 0)return Promise.resolve(null);var N=[];return M.bufferView!==void 0?N.push(this.getDependency("bufferView",M.bufferView)):N.push(null),M.sparse!==void 0&&(N.push(this.getDependency("bufferView",M.sparse.indices.bufferView)),N.push(this.getDependency("bufferView",M.sparse.values.bufferView))),Promise.all(N).then(function(T){var C=T[0],L=ee[M.type],W=E[M.componentType],j=W.BYTES_PER_ELEMENT,Z=j*L,b=M.byteOffset||0,_=M.bufferView!==void 0?P.bufferViews[M.bufferView].byteStride:void 0,K=M.normalized===!0,X,U;if(_&&_!==Z){var ne=Math.floor(b/_),re="InterleavedBuffer:"+M.bufferView+":"+M.componentType+":"+ne+":"+M.count,pe=x.cache.get(re);pe||(X=new W(C,ne*_,M.count*_/j),pe=new vt(X,_/j),x.cache.add(re,pe)),U=new vn(pe,L,b%_/j,K)}else C===null?X=new W(M.count*L):X=new W(C,b,M.count*L),U=new Ee(X,L,K);if(M.sparse!==void 0){var ae=ee.SCALAR,ge=E[M.sparse.indices.componentType],ve=M.sparse.indices.byteOffset||0,Me=M.sparse.values.byteOffset||0,he=new ge(T[1],ve,M.sparse.count*ae),xe=new W(T[2],Me,M.sparse.count*L);C!==null&&(U=new Ee(U.array.slice(),U.itemSize,U.normalized));for(var Ce=0,$e=he.length;Ce<$e;Ce++){var Wt=he[Ce];if(U.setX(Wt,xe[Ce*L]),L>=2&&U.setY(Wt,xe[Ce*L+1]),L>=3&&U.setZ(Wt,xe[Ce*L+2]),L>=4&&U.setW(Wt,xe[Ce*L+3]),L>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return U})},ce.prototype.loadTexture=function(w){var x=this,P=this.json,M=this.options,N=P.textures[w],T=N.extensions||{},C;T[n.MSFT_TEXTURE_DDS]?C=P.images[T[n.MSFT_TEXTURE_DDS].source]:C=P.images[N.source];var L;return C.uri&&(L=M.manager.getHandler(C.uri)),L||(L=T[n.MSFT_TEXTURE_DDS]?x.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(w,C,L)},ce.prototype.loadTextureImage=function(w,x,P){var M=this,N=this.json,T=this.options,C=N.textures[w],L=self.URL||self.webkitURL,W=x.uri,j=!1,Z=!0;return x.mimeType==="image/jpeg"&&(Z=!1),x.bufferView!==void 0&&(W=M.getDependency("bufferView",x.bufferView).then(function(b){if(x.mimeType==="image/png"){var _=new DataView(b,25,1).getUint8(0,!1);Z=_===6||_===4||_===3}j=!0;var K=new Blob([b],{type:x.mimeType});return W=L.createObjectURL(K),W})),Promise.resolve(W).then(function(b){return new Promise(function(_,K){var X=_;P.isImageBitmapLoader===!0&&(X=function(U){_(new Wi(U))}),P.load(z(b,T.path),X,void 0,K)})}).then(function(b){j===!0&&L.revokeObjectURL(W),b.flipY=!1,C.name&&(b.name=C.name),Z||(b.format=It);var _=N.samplers||{},K=_[C.sampler]||{};return b.magFilter=H[K.magFilter]||je,b.minFilter=H[K.minFilter]||jn,b.wrapS=Q[K.wrapS]||Wn,b.wrapT=Q[K.wrapT]||Wn,M.associations.set(b,{type:"textures",index:w}),b})},ce.prototype.assignTexture=function(w,x,P){var M=this;return this.getDependency("texture",P.index).then(function(N){if(P.texCoord!==void 0&&P.texCoord!=0&&!(x==="aoMap"&&P.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+P.texCoord+" for texture "+x+" not yet supported."),M.extensions[n.KHR_TEXTURE_TRANSFORM]){var T=P.extensions!==void 0?P.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(T){var C=M.associations.get(N);N=M.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(N,T),M.associations.set(N,C)}}w[x]=N})},ce.prototype.assignFinalMaterial=function(w){var x=w.geometry,P=w.material,M=x.attributes.tangent!==void 0,N=x.attributes.color!==void 0,T=x.attributes.normal===void 0,C=w.isSkinnedMesh===!0,L=Object.keys(x.morphAttributes).length>0,W=L&&x.morphAttributes.normal!==void 0;if(w.isPoints){var j="PointsMaterial:"+P.uuid,Z=this.cache.get(j);Z||(Z=new yn,we.prototype.copy.call(Z,P),Z.color.copy(P.color),Z.map=P.map,Z.sizeAttenuation=!1,this.cache.add(j,Z)),P=Z}else if(w.isLine){var j="LineBasicMaterial:"+P.uuid,b=this.cache.get(j);b||(b=new yt,we.prototype.copy.call(b,P),b.color.copy(P.color),this.cache.add(j,b)),P=b}if(M||N||T||C||L){var j="ClonedMaterial:"+P.uuid+":";P.isGLTFSpecularGlossinessMaterial&&(j+="specular-glossiness:"),C&&(j+="skinning:"),M&&(j+="vertex-tangents:"),N&&(j+="vertex-colors:"),T&&(j+="flat-shading:"),L&&(j+="morph-targets:"),W&&(j+="morph-normals:");var _=this.cache.get(j);_||(_=P.clone(),C&&(_.skinning=!0),M&&(_.vertexTangents=!0),N&&(_.vertexColors=!0),T&&(_.flatShading=!0),L&&(_.morphTargets=!0),W&&(_.morphNormals=!0),this.cache.add(j,_),this.associations.set(_,this.associations.get(P))),P=_}P.aoMap&&x.attributes.uv2===void 0&&x.attributes.uv!==void 0&&x.setAttribute("uv2",x.attributes.uv),P.normalScale&&!M&&(P.normalScale.y=-P.normalScale.y),P.clearcoatNormalScale&&!M&&(P.clearcoatNormalScale.y=-P.clearcoatNormalScale.y),w.material=P},ce.prototype.getMaterialType=function(){return ot},ce.prototype.loadMaterial=function(w){var x=this,P=this.json,M=this.extensions,N=P.materials[w],T,C={},L=N.extensions||{},W=[];if(L[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var j=M[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];T=j.getMaterialType(),W.push(j.extendParams(C,N,x))}else if(L[n.KHR_MATERIALS_UNLIT]){var Z=M[n.KHR_MATERIALS_UNLIT];T=Z.getMaterialType(),W.push(Z.extendParams(C,N,x))}else{var b=N.pbrMetallicRoughness||{};if(C.color=new me(1,1,1),C.opacity=1,Array.isArray(b.baseColorFactor)){var _=b.baseColorFactor;C.color.fromArray(_),C.opacity=_[3]}b.baseColorTexture!==void 0&&W.push(x.assignTexture(C,"map",b.baseColorTexture)),C.metalness=b.metallicFactor!==void 0?b.metallicFactor:1,C.roughness=b.roughnessFactor!==void 0?b.roughnessFactor:1,b.metallicRoughnessTexture!==void 0&&(W.push(x.assignTexture(C,"metalnessMap",b.metallicRoughnessTexture)),W.push(x.assignTexture(C,"roughnessMap",b.metallicRoughnessTexture))),T=this._invokeOne(function(X){return X.getMaterialType&&X.getMaterialType(w)}),W.push(Promise.all(this._invokeAll(function(X){return X.extendMaterialParams&&X.extendMaterialParams(w,C)})))}N.doubleSided===!0&&(C.side=fi);var K=N.alphaMode||O.OPAQUE;return K===O.BLEND?(C.transparent=!0,C.depthWrite=!1):(C.transparent=!1,K===O.MASK&&(C.alphaTest=N.alphaCutoff!==void 0?N.alphaCutoff:.5)),N.normalTexture!==void 0&&T!==wt&&(W.push(x.assignTexture(C,"normalMap",N.normalTexture)),C.normalScale=new ie(1,1),N.normalTexture.scale!==void 0&&C.normalScale.set(N.normalTexture.scale,N.normalTexture.scale)),N.occlusionTexture!==void 0&&T!==wt&&(W.push(x.assignTexture(C,"aoMap",N.occlusionTexture)),N.occlusionTexture.strength!==void 0&&(C.aoMapIntensity=N.occlusionTexture.strength)),N.emissiveFactor!==void 0&&T!==wt&&(C.emissive=new me().fromArray(N.emissiveFactor)),N.emissiveTexture!==void 0&&T!==wt&&W.push(x.assignTexture(C,"emissiveMap",N.emissiveTexture)),Promise.all(W).then(function(){var X;return T===g?X=M[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(C):X=new T(C),N.name&&(X.name=N.name),X.map&&(X.map.encoding=Xn),X.emissiveMap&&(X.emissiveMap.encoding=Xn),V(X,N),x.associations.set(X,{type:"materials",index:w}),N.extensions&&F(M,X,N),X})},ce.prototype.createUniqueName=function(w){for(var x=at.sanitizeNodeName(w||""),P=1;this.nodeNamesUsed[x];++P)x=w+"_"+P;return this.nodeNamesUsed[x]=!0,x};function ye(w,x,P){var M=x.attributes,N=new qt;if(M.POSITION!==void 0){var T=P.json.accessors[M.POSITION],C=T.min,L=T.max;if(C!==void 0&&L!==void 0)N.set(new R(C[0],C[1],C[2]),new R(L[0],L[1],L[2]));else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;var W=x.targets;if(W!==void 0){for(var j=new R,Z=new R,b=0,_=W.length;b<_;b++){var K=W[b];if(K.POSITION!==void 0){var T=P.json.accessors[K.POSITION],C=T.min,L=T.max;C!==void 0&&L!==void 0?(Z.setX(Math.max(Math.abs(C[0]),Math.abs(L[0]))),Z.setY(Math.max(Math.abs(C[1]),Math.abs(L[1]))),Z.setZ(Math.max(Math.abs(C[2]),Math.abs(L[2]))),j.max(Z)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}N.expandByVector(j)}w.boundingBox=N;var X=new Xt;N.getCenter(X.center),X.radius=N.min.distanceTo(N.max)/2,w.boundingSphere=X}function Ne(w,x,P){var M=x.attributes,N=[];function T(j,Z){return P.getDependency("accessor",j).then(function(b){w.setAttribute(Z,b)})}for(var C in M){var L=le[C]||C.toLowerCase();if(L in w.attributes)continue;N.push(T(M[C],L))}if(x.indices!==void 0&&!w.index){var W=P.getDependency("accessor",x.indices).then(function(j){w.setIndex(j)});N.push(W)}return V(w,x),ye(w,x,P),Promise.all(N).then(function(){return x.targets!==void 0?q(w,x.targets,P):w})}function $(w,x){var P=w.getIndex();if(P===null){var M=[],N=w.getAttribute("position");if(N!==void 0){for(var T=0;T<N.count;T++)M.push(T);w.setIndex(M),P=w.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),w}var C=P.count-2,L=[];if(x===xo)for(var T=1;T<=C;T++)L.push(P.getX(0)),L.push(P.getX(T)),L.push(P.getX(T+1));else for(var T=0;T<C;T++)T%2===0?(L.push(P.getX(T)),L.push(P.getX(T+1)),L.push(P.getX(T+2))):(L.push(P.getX(T+2)),L.push(P.getX(T+1)),L.push(P.getX(T)));L.length/3!==C&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var W=w.clone();return W.setIndex(L),W}return ce.prototype.loadGeometries=function(w){var x=this,P=this.extensions,M=this.primitiveCache;function N(_){return P[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(_,x).then(function(K){return Ne(K,_,x)})}for(var T=[],C=0,L=w.length;C<L;C++){var W=w[C],j=se(W),Z=M[j];if(Z)T.push(Z.promise);else{var b;W.extensions&&W.extensions[n.KHR_DRACO_MESH_COMPRESSION]?b=N(W):b=Ne(new Fe,W,x),M[j]={primitive:W,promise:b},T.push(b)}}return Promise.all(T)},ce.prototype.loadMesh=function(w){for(var x=this,P=this.json,M=P.meshes[w],N=M.primitives,T=[],C=0,L=N.length;C<L;C++){var W=N[C].material===void 0?k(this.cache):this.getDependency("material",N[C].material);T.push(W)}return T.push(x.loadGeometries(N)),Promise.all(T).then(function(j){for(var Z=j.slice(0,j.length-1),b=j[j.length-1],_=[],K=0,X=b.length;K<X;K++){var U=b[K],ne=N[K],re,pe=Z[K];if(ne.mode===B.TRIANGLES||ne.mode===B.TRIANGLE_STRIP||ne.mode===B.TRIANGLE_FAN||ne.mode===void 0)re=M.isSkinnedMesh===!0?new Br(U,pe):new ke(U,pe),re.isSkinnedMesh===!0&&!re.geometry.attributes.skinWeight.normalized&&re.normalizeSkinWeights(),ne.mode===B.TRIANGLE_STRIP?re.geometry=$(re.geometry,ol):ne.mode===B.TRIANGLE_FAN&&(re.geometry=$(re.geometry,xo));else if(ne.mode===B.LINES)re=new Vi(U,pe);else if(ne.mode===B.LINE_STRIP)re=new Bn(U,pe);else if(ne.mode===B.LINE_LOOP)re=new Ds(U,pe);else if(ne.mode===B.POINTS)re=new Fs(U,pe);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+ne.mode);Object.keys(re.geometry.morphAttributes).length>0&&oe(re,M),re.name=x.createUniqueName(M.name||"mesh_"+w),V(re,M),x.assignFinalMaterial(re),_.push(re)}if(_.length===1)return _[0];for(var ae=new Jt,K=0,X=_.length;K<X;K++)ae.add(_[K]);return ae})},ce.prototype.loadCamera=function(w){var x,P=this.json.cameras[w],M=P[P.type];if(!M){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return P.type==="perspective"?x=new Qe(Te.radToDeg(M.yfov),M.aspectRatio||1,M.znear||1,M.zfar||2e6):P.type==="orthographic"&&(x=new nr(-M.xmag,M.xmag,M.ymag,-M.ymag,M.znear,M.zfar)),P.name&&(x.name=this.createUniqueName(P.name)),V(x,P),Promise.resolve(x)},ce.prototype.loadSkin=function(w){var x=this.json.skins[w],P={joints:x.joints};return x.inverseBindMatrices===void 0?Promise.resolve(P):this.getDependency("accessor",x.inverseBindMatrices).then(function(M){return P.inverseBindMatrices=M,P})},ce.prototype.loadAnimation=function(w){for(var x=this.json,P=x.animations[w],M=[],N=[],T=[],C=[],L=[],W=0,j=P.channels.length;W<j;W++){var Z=P.channels[W],b=P.samplers[Z.sampler],_=Z.target,K=_.node!==void 0?_.node:_.id,X=P.parameters!==void 0?P.parameters[b.input]:b.input,U=P.parameters!==void 0?P.parameters[b.output]:b.output;M.push(this.getDependency("node",K)),N.push(this.getDependency("accessor",X)),T.push(this.getDependency("accessor",U)),C.push(b),L.push(_)}return Promise.all([Promise.all(M),Promise.all(N),Promise.all(T),Promise.all(C),Promise.all(L)]).then(function(ne){for(var re=ne[0],pe=ne[1],ae=ne[2],ge=ne[3],ve=ne[4],Me=[],he=0,xe=re.length;he<xe;he++){var Ce=re[he],$e=pe[he],Wt=ae[he],lr=ge[he],ci=ve[he];if(Ce===void 0)continue;Ce.updateMatrix(),Ce.matrixAutoUpdate=!0;var ui;switch(I[ci.path]){case I.weights:ui=ri;break;case I.rotation:ui=Qi;break;case I.position:case I.scale:default:ui=si;break}var cr=Ce.name?Ce.name:Ce.uuid,ao=lr.interpolation!==void 0?G[lr.interpolation]:qn,jt=[];I[ci.path]===I.weights?Ce.traverse(function(S){S.isMesh===!0&&S.morphTargetInfluences&&jt.push(S.name?S.name:S.uuid)}):jt.push(cr);var Lt=Wt.array;if(Wt.normalized){var wn;if(Lt.constructor===Int8Array)wn=1/127;else if(Lt.constructor===Uint8Array)wn=1/255;else if(Lt.constructor==Int16Array)wn=1/32767;else if(Lt.constructor===Uint16Array)wn=1/65535;else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");for(var ur=new Float32Array(Lt.length),et=0,hi=Lt.length;et<hi;et++)ur[et]=Lt[et]*wn;Lt=ur}for(var et=0,hi=jt.length;et<hi;et++){var hr=new ui(jt[et]+"."+I[ci.path],$e.array,Lt,ao);lr.interpolation==="CUBICSPLINE"&&(hr.createInterpolant=function(te){return new A(this.times,this.values,this.getValueSize()/3,te)},hr.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),Me.push(hr)}}var lo=P.name?P.name:"animation_"+w;return new Ft(lo,void 0,Me)})},ce.prototype.loadNode=function(w){var x=this.json,P=this.extensions,M=this,N=x.nodes[w],T=N.name?M.createUniqueName(N.name):"";return function(){var C=[];return N.mesh!==void 0&&C.push(M.getDependency("mesh",N.mesh).then(function(L){var W=M._getNodeRef(M.meshCache,N.mesh,L);return N.weights!==void 0&&W.traverse(function(j){if(!j.isMesh)return;for(var Z=0,b=N.weights.length;Z<b;Z++)j.morphTargetInfluences[Z]=N.weights[Z]}),W})),N.camera!==void 0&&C.push(M.getDependency("camera",N.camera).then(function(L){return M._getNodeRef(M.cameraCache,N.camera,L)})),M._invokeAll(function(L){return L.createNodeAttachment&&L.createNodeAttachment(w)}).forEach(function(L){C.push(L)}),Promise.all(C)}().then(function(C){var L;if(N.isBone===!0?L=new As:C.length>1?L=new Jt:C.length===1?L=C[0]:L=new be,L!==C[0])for(var W=0,j=C.length;W<j;W++)L.add(C[W]);if(N.name&&(L.userData.name=N.name,L.name=T),V(L,N),N.extensions&&F(P,L,N),N.matrix!==void 0){var Z=new Ae;Z.fromArray(N.matrix),L.applyMatrix4(Z)}else N.translation!==void 0&&L.position.fromArray(N.translation),N.rotation!==void 0&&L.quaternion.fromArray(N.rotation),N.scale!==void 0&&L.scale.fromArray(N.scale);return M.associations.set(L,{type:"nodes",index:w}),L})},ce.prototype.loadScene=function(){function w(x,P,M,N){var T=M.nodes[x];return N.getDependency("node",x).then(function(C){if(T.skin===void 0)return C;var L;return N.getDependency("skin",T.skin).then(function(W){L=W;for(var j=[],Z=0,b=L.joints.length;Z<b;Z++)j.push(N.getDependency("node",L.joints[Z]));return Promise.all(j)}).then(function(W){return C.traverse(function(j){if(!j.isMesh)return;for(var Z=[],b=[],_=0,K=W.length;_<K;_++){var X=W[_];if(X){Z.push(X);var U=new Ae;L.inverseBindMatrices!==void 0&&U.fromArray(L.inverseBindMatrices.array,_*16),b.push(U)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',L.joints[_])}j.bind(new Ur(Z,b),j.matrixWorld)}),C})}).then(function(C){P.add(C);var L=[];if(T.children)for(var W=T.children,j=0,Z=W.length;j<Z;j++){var b=W[j];L.push(w(b,C,M,N))}return Promise.all(L)})}return function(P){var M=this.json,N=this.extensions,T=this.json.scenes[P],C=this,L=new Jt;T.name&&(L.name=C.createUniqueName(T.name)),V(L,T),T.extensions&&F(N,L,T);for(var W=T.nodes||[],j=[],Z=0,b=W.length;Z<b;Z++)j.push(w(W[Z],L,M,C));return Promise.all(j).then(function(){return L})}}(),e}(),oo=function(e){er.call(this,e),this.type=Ct};oo.prototype=Object.assign(Object.create(er.prototype),{constructor:oo,parse:function(e){var t=-1,n=1,i=2,r=3,s=4,o=function(G,O){switch(G){case n:console.error("RGBELoader Read Error: "+(O||""));break;case i:console.error("RGBELoader Write Error: "+(O||""));break;case r:console.error("RGBELoader Bad File Format: "+(O||""));break;default:case s:console.error("RGBELoader: Error: "+(O||""))}return t},a=1,l=2,c=4,d=`
`,u=function(G,O,z){O=O||1024;for(var k=G.pos,F=-1,V=0,q="",oe=128,se=String.fromCharCode.apply(null,new Uint16Array(G.subarray(k,k+oe)));0>(F=se.indexOf(d))&&V<O&&k<G.byteLength;)q+=se,V+=se.length,k+=oe,se+=String.fromCharCode.apply(null,new Uint16Array(G.subarray(k,k+oe)));return-1<F?(z!==!1&&(G.pos+=V+F+1),q+se.slice(0,F)):!1},f=function(G){var O,z,k=/^#\?(\S+)$/,F=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,oe=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,se={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(G.pos>=G.byteLength||!(O=u(G)))return o(n,"no header found");if(!(z=O.match(k)))return o(r,"bad initial token");for(se.valid|=a,se.programtype=z[1],se.string+=O+`
`;!(O=u(G),O===!1);){if(se.string+=O+`
`,O.charAt(0)==="#"){se.comments+=O+`
`;continue}if((z=O.match(F))&&(se.gamma=parseFloat(z[1],10)),(z=O.match(V))&&(se.exposure=parseFloat(z[1],10)),(z=O.match(q))&&(se.valid|=l,se.format=z[1]),(z=O.match(oe))&&(se.valid|=c,se.height=parseInt(z[1],10),se.width=parseInt(z[2],10)),se.valid&l&&se.valid&c)break}return se.valid&l?se.valid&c?se:o(r,"missing image size specifier"):o(r,"missing format specifier")},h=function(G,O,z){var k,F,V,q,oe,se,fe,ce,ye,Ne,$,w,x=O,P=z,M;if(x<8||x>32767||(G[0]!==2||G[1]!==2)||G[2]&128)return new Uint8Array(G);if(x!==(G[2]<<8|G[3]))return o(r,"wrong scanline width");if(k=new Uint8Array(4*O*z),!k.length)return o(s,"unable to allocate buffer space");for(F=0,V=0,ce=4*x,M=new Uint8Array(4),se=new Uint8Array(ce);P>0&&V<G.byteLength;){if(V+4>G.byteLength)return o(n);if(M[0]=G[V++],M[1]=G[V++],M[2]=G[V++],M[3]=G[V++],M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=x)return o(r,"bad rgbe scanline format");for(fe=0;fe<ce&&V<G.byteLength;){if(q=G[V++],w=q>128,w&&(q-=128),q===0||fe+q>ce)return o(r,"bad scanline data");if(w)for(oe=G[V++],ye=0;ye<q;ye++)se[fe++]=oe;else se.set(G.subarray(V,V+q),fe),fe+=q,V+=q}for(Ne=x,ye=0;ye<Ne;ye++)$=0,k[F]=se[ye+$],$+=x,k[F+1]=se[ye+$],$+=x,k[F+2]=se[ye+$],$+=x,k[F+3]=se[ye+$],F+=4;P--}return k},m=function(G,O,z,k){var F=G[O+3],V=Math.pow(2,F-128)/255;z[k+0]=G[O+0]*V,z[k+1]=G[O+1]*V,z[k+2]=G[O+2]*V},y=function(){var G=new Float32Array(1),O=new Int32Array(G.buffer);function z(k){G[0]=k;var F=O[0],V=F>>16&32768,q=F>>12&2047,oe=F>>23&255;return oe<103?V:oe>142?(V|=31744,V|=(oe==255?0:1)&&F&8388607,V):oe<113?(q|=2048,V|=(q>>114-oe)+(q>>113-oe&1),V):(V|=oe-112<<10|q>>1,V+=q&1,V)}return function(k,F,V,q){var oe=k[F+3],se=Math.pow(2,oe-128)/255;V[q+0]=z(k[F+0]*se),V[q+1]=z(k[F+1]*se),V[q+2]=z(k[F+2]*se)}}(),v=new Uint8Array(e);v.pos=0;var g=f(v);if(t!==g){var p=g.width,D=g.height,A=h(v.subarray(v.pos),p,D);if(t!==A){switch(this.type){case Ct:var B=A,E=go,H=Ct;break;case Pt:for(var Q=A.length/4*3,ee=new Float32Array(Q),le=0;le<Q;le++)m(A,le*4,ee,le*3);var B=ee,E=It,H=Pt;break;case Tn:for(var Q=A.length/4*3,I=new Uint16Array(Q),le=0;le<Q;le++)y(A,le*4,I,le*3);var B=I,E=It,H=Tn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:p,height:D,data:B,header:g.string,gamma:g.gamma,exposure:g.exposure,format:E,type:H}}}return null},setDataType:function(e){return this.type=e,this},load:function(e,t,n,i){function r(s,o){switch(s.type){case Ct:s.encoding=xr,s.minFilter=Ye,s.magFilter=Ye,s.generateMipmaps=!1,s.flipY=!0;break;case Pt:s.encoding=rt,s.minFilter=je,s.magFilter=je,s.generateMipmaps=!1,s.flipY=!0;break;case Tn:s.encoding=rt,s.minFilter=je,s.magFilter=je,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return er.prototype.load.call(this,e,r,n,i)}});class Jr{static clearContainer(e){for(let t=e.children.length-1;t>=0;--t)e.children[t].children.length>0&&Jr.clearContainer(e.children[t]),e.remove(e.children[t])}static disposeContainer(e){e.traverse(t=>{var n,i,r,s,o;if(t instanceof ke){const a=t.material;(n=a.map)==null||n.dispose(),(i=a.normalMap)==null||i.dispose(),(r=a.metalnessMap)==null||r.dispose(),(s=a.roughnessMap)==null||s.dispose(),(o=a.aoMap)==null||o.dispose(),a.dispose(),t.geometry.dispose()}})}static disposeAndClearContainer(e){Jr.disposeContainer(e),Jr.clearContainer(e)}}class cu{constructor(e){this._gltfLoader=new lu;this._sceneManager=e,this._pmremGenerator=new Jc(this._sceneManager.webglRenderer),this._pmremGenerator.compileEquirectangularShader()}async init(){this._envMap=await this.getCubeMapTexture("assets/images/venice_sunset_1k.hdr")}getCubeMapTexture(e){return new Promise((t,n)=>{new oo().setDataType(Ct).load(e,i=>{const r=this._pmremGenerator.fromEquirectangular(i).texture;this._pmremGenerator.dispose(),t(r)},void 0,n)})}loadScene(e){return new Promise((t,n)=>{this._gltfLoader.load(e,i=>{this.dispose(),this._object=i.scene,this._object.traverse(r=>{r instanceof ke&&(r.material instanceof ot&&(r.material.envMap=this._envMap))}),this._sceneManager.scene.add(this._object),this._sceneManager.needsRender=!0,t()})})}dispose(){var e;this._object&&(Jr.disposeAndClearContainer(this._object),(e=this._object.parent)==null||e.remove(this._object))}}class uu{constructor(e){e=e||{};const t=e.geometry||new Yo(2,2),n=new Qt({vertexShader:`#define GLSLIFY 1
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  gl_Position = vec4(position, 1.0);
  vUv = vec2(position.x, position.y) * 0.5 + 0.5;
}`,fragmentShader:`precision mediump float;
#define GLSLIFY 1
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289_1604150559(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1604150559(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1604150559(vec4 x)
{
  return mod289_1604150559(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1604150559(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade_1604150559(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise_1604150559(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289_1604150559(Pi0);
  Pi1 = mod289_1604150559(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute_1604150559(permute_1604150559(ix) + iy);
  vec4 ixy0 = permute_1604150559(ixy + iz0);
  vec4 ixy1 = permute_1604150559(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt_1604150559(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt_1604150559(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade_1604150559(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_1117569599(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1117569599(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1117569599(vec4 x) {
     return mod289_1117569599(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1117569599(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise_1117569599(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D_1117569599 = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g_1117569599 = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g_1117569599;
  vec3 i1 = min( g_1117569599.xyz, l.zxy );
  vec3 i2 = max( g_1117569599.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D_1117569599.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289_1117569599(i);
  vec4 p = permute_1117569599( permute_1117569599( permute_1117569599(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D_1117569599.wyz - D_1117569599.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1_1117569599 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0_1117569599 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1_1117569599.xy,h.z);
  vec3 p3 = vec3(a1_1117569599.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt_1117569599(vec4(dot(p0_1117569599,p0_1117569599), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0_1117569599 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0_1117569599,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame, float multiplier) {
    vec2 mult = texCoord * resolution;
    float offset = snoise_1117569599(vec3(mult / multiplier, frame));
    float n1 = pnoise_1604150559(vec3(mult, offset), vec3(1.0/texCoord * resolution, 1.0));
    return n1 / 2.0 + 0.5;
}

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame) {
    return grain_2281831123(texCoord, resolution, frame, 2.5);
}

float grain_2281831123(vec2 texCoord, vec2 resolution) {
    return grain_2281831123(texCoord, resolution, 0.0);
}

vec3 blendSoftLight_1540259130(vec3 base, vec3 blend) {
    return mix(
        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), 
        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), 
        step(base, vec3(0.5))
    );
}

// Using conditionals
// vec3 blendSoftLight(vec3 base, vec3 blend) {
//     return vec3(
//         ((blend.r < 0.5) ? (2.0 * base.r * blend.r + base.r * base.r * (1.0 - 2.0 * blend.r)) : (sqrt(base.r) * (2.0 * blend.r - 1.0) + 2.0 * base.r * (1.0 - blend.r))),
//         ((blend.g < 0.5) ? (2.0 * base.g * blend.g + base.g * base.g * (1.0 - 2.0 * blend.g)) : (sqrt(base.g) * (2.0 * blend.g - 1.0) + 2.0 * base.g * (1.0 - blend.g))),
//         ((blend.b < 0.5) ? (2.0 * base.b * blend.b + base.b * base.b * (1.0 - 2.0 * blend.b)) : (sqrt(base.b) * (2.0 * blend.b - 1.0) + 2.0 * base.b * (1.0 - blend.b)))
//     );
// }

uniform vec3 color1;
uniform vec3 color2;
uniform float aspect;
uniform vec2 offset;
uniform vec2 scale;
uniform float noiseAlpha;
uniform bool aspectCorrection;
uniform float grainScale;
uniform float grainTime;
uniform vec2 smooth;

varying vec2 vUv;

void main() {
  vec2 q = vec2(vUv - 0.5);
  if (aspectCorrection) {
    q.x *= aspect;
  }
  q /= scale;
  q -= offset;
  float dst = length(q);
  dst = smoothstep(smooth.x, smooth.y, dst);
  vec3 color = mix(color1, color2, dst);
  
  if (noiseAlpha > 0.0 && grainScale > 0.0) {
    float gSize = 1.0 / grainScale;
    float g = grain_2281831123(vUv, vec2(gSize * aspect, gSize), grainTime);
    vec3 noiseColor = blendSoftLight_1540259130(color, vec3(g));
    gl_FragColor.rgb = mix(color, noiseColor, noiseAlpha);
  } else {
    gl_FragColor.rgb = color;
  }
  gl_FragColor.a = 1.0;
}`,side:Mn,uniforms:{aspectCorrection:{value:!1},aspect:{value:1},grainScale:{value:.005},grainTime:{value:0},noiseAlpha:{value:.25},offset:{value:new ie(0,0)},scale:{value:new ie(1,1)},smooth:{value:new ie(0,1)},color1:{value:new me("#fff")},color2:{value:new me("#283844")}},depthTest:!1}),i=new ke(t,n);i.frustumCulled=!1,i.style=r,e&&i.style(e),this._mesh=i;function r(o){if(o=o||{},Array.isArray(o.colors)){const d=o.colors.map(function(u){return typeof u=="string"||typeof u=="number"?new me(u):u});n.uniforms.color1.value.copy(d[0]),n.uniforms.color2.value.copy(d[1])}if(typeof o.aspect=="number"&&(n.uniforms.aspect.value=o.aspect),typeof o.grainScale=="number"&&(n.uniforms.grainScale.value=o.grainScale),typeof o.grainTime=="number"&&(n.uniforms.grainTime.value=o.grainTime),o.smooth){var a=s(o.smooth,ie);n.uniforms.smooth.value.copy(a)}if(o.offset){var l=s(o.offset,ie);n.uniforms.offset.value.copy(l)}if(typeof o.noiseAlpha=="number"&&(n.uniforms.noiseAlpha.value=o.noiseAlpha),typeof o.scale!="undefined"){var c=o.scale;typeof c=="number"&&(c=[c,c]),c=s(c,ie),n.uniforms.scale.value.copy(c)}typeof o.aspectCorrection!="undefined"&&(n.uniforms.aspectCorrection.value=Boolean(o.aspectCorrection))}const s=(o,a)=>Array.isArray(o)?new a().fromArray(o):o}get mesh(){return this._mesh}}class Ze{constructor(){this._domElement=document.getElementById("playGround");this._camera=new su;this._distance=new Zr(10,10,1,100,At.EASE_OUT,St.ANIMATION_DURATION);this._normalizedCameraPosition=[0,0,1];this._origin=new R(0,0,0);this._lastFPSDrawTimeStamp=0;this._fpsValues=[];this.needsRender=!0;this._requestAnimationFrameId=null;this._isInitialized=!1;this.onWindowResize=()=>{};this.onContextLost=e=>{e.preventDefault(),alert("Unfortunately WebGL has crashed. Please reload the page to continue!")};this.update=e=>{if(Ze._timeStamp=performance.now(),Ze._deltaFrame=Ze._timeStamp-Ze._prevTimeStamp,Ze._prevTimeStamp=Ze._timeStamp,this._requestAnimationFrameId=requestAnimationFrame(this.update),this.needsRender=Rt.updateActiveOnes(Ze._timeStamp)||this.needsRender,this.needsRender){if(this._fpsValues.push(1e3/Ze._deltaFrame),Ze._timeStamp-this._lastFPSDrawTimeStamp>1e3&&this._fpsValues.length>0){const t=Math.round(this._fpsValues.reduce((n,i)=>n+i)/this._fpsValues.length);console.log(`FPS: ${t}`),this._lastFPSDrawTimeStamp=Ze._timeStamp,this._fpsValues.length=0}this._normalizedCameraPosition=this._controls.update(),this._camera.position.set(this._normalizedCameraPosition[0]*this._distance.value,this._normalizedCameraPosition[1]*this._distance.value,this._normalizedCameraPosition[2]*this._distance.value),this._camera.lookAt(this._origin),this._holoRenderer.render(this._scene,this._camera),this.needsRender=!1}};this.animate=e=>{cancelAnimationFrame(this._requestAnimationFrameId),this.update(e)};this._scene=new Qo}async init(){this._isInitialized||(this._isInitialized=!0,this.initBackground(),this.initLights(),this.initControls(),this.initRenderer(),this._sceneLoader=new cu(this),await this._sceneLoader.init())}async loadModel(e){await this._sceneLoader.loadScene(e),this._controls.autoRotate=!0,this.onWindowResize(),this.animate(0)}initBackground(){const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;this._scene.add(new uu({aspect:this._camera.aspect,grainScale:e?0:.001,colors:["#ffffff","#353535"]}).mesh)}initLights(){const e=new Zs(16777215,.1),t=new ir(16777215,.1);t.position.set(.5,0,.866);const n=new qs(16777147,526368,.8);this._scene.add(e,t,n)}initControls(){this._controls=new au(this._domElement,this),this._controls.activate()}initRenderer(){this._holoRenderer=new ou,this._canvas=this._holoRenderer.domElement,this._domElement.appendChild(this._canvas),this._webglRenderer=this._holoRenderer.webglRenderer,this._canvas.addEventListener("webglcontextlost",this.onContextLost),window.addEventListener("resize",this.onWindowResize)}get scene(){return this._scene}static get timeStamp(){return Ze._timeStamp}static get deltaFrame(){return Ze._deltaFrame}get webglRenderer(){return this._webglRenderer}get distance(){return this._distance}get domElement(){return this._domElement}}Ze._timeStamp=0,Ze._deltaFrame=1e3,Ze._prevTimeStamp=0;class hu{constructor(){}}class du{constructor(e){this.onFileSelected=()=>{};this._domElement=e,this._inputElement=document.createElement("input"),this._inputElement.type="file",this._inputElement.accept=".glb",this._inputElement.addEventListener("change",t=>{const n=this._inputElement.files[0];this.processFile(n)}),this._uploadArea=document.getElementById("uploadArea"),this.init()}async init(){document.addEventListener("dragover",e=>{e.preventDefault()}),this._domElement.addEventListener("drop",e=>{e.preventDefault();const t=e.dataTransfer.files[0];this.processFile(t)}),this._uploadArea.addEventListener("click",()=>{this._inputElement.click()}),this._domElement.classList.remove("hidden")}processFile(e){this.onFileSelected(URL.createObjectURL(e))}}fu();})();
/*!
 * fullscreen-polyfill
 * 1.0.2 - 5/23/2018
 * https://github.com/nguyenj/fullscreen-polyfill#readme
 * (c) John Nguyen; MIT License
 */
/*! (c) Andrea Giammarchi - ISC */
/**
 * This files defines the HoloPlayClient class and Message class.
 *
 * Copyright (c) [2019] [Looking Glass Factory]
 *
 * @link    https://lookingglassfactory.com/
 * @file    This files defines the HoloPlayClient class and Message class.
 * @author  Looking Glass Factory.
 * @version 0.0.8
 * @license SEE LICENSE IN LICENSE.md
 */
