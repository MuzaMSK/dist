(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Fr=1e3,Qt=1001,Or=1002,Et=1003,Xa=1004,qa=1005,wt=1006,Ya=1007,Wr=1008,un=1009,Ka=1010,ja=1011,ea=1012,Za=1013,Tn=1014,$i=1015,An=1016,ta=1017,na=1018,ia=1020,Ja=35902,$a=35899,Qa=1021,eo=1022,ci=1023,hi=1026,ra=1027,to=1028,sa=1029,qi=1030,aa=1031,oa=1033,no=33776,io=33777,ro=33778,so=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37488,mo=37489,go=37490,_o=37491,vo=37808,Mo=37809,So=37810,xo=37811,Eo=37812,yo=37813,To=37814,Ao=37815,bo=37816,wo=37817,Ro=37818,Co=37819,Po=37820,Io=37821,Lo=36492,Do=36494,Uo=36495,No=36283,Fo=36284,Oo=36285,Bo=36286,Yi=2300,Br=2301,ir=2302,as=2303,os=2400,ls=2401,cs=2402,Vo=3200;var Ft="srgb",ui="srgb-linear",Ki="linear",ji="srgb",rr=7680;var zo=35044;var Kn=2e3;function Go(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ho(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zi(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ko(){const e=Zi("canvas");return e.style.display="block",e}var hs={},jn=null;function us(...e){const t="THREE."+e.shift();jn?jn("log",t,...e):console.log(t,...e)}function la(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ie(...e){e=la(e);const t="THREE."+e.shift();if(jn)jn("warn",t,...e);else{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Pe(...e){e=la(e);const t="THREE."+e.shift();if(jn)jn("error",t,...e);else{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ji(...e){const t=e.join(" ");t in hs||(hs[t]=!0,Ie(...e))}function Wo(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Xo={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,Vr=180/Math.PI;function fi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[e&255]+vt[e>>8&255]+vt[e>>16&255]+vt[e>>24&255]+"-"+vt[t&255]+vt[t>>8&255]+"-"+vt[t>>16&15|64]+vt[t>>24&255]+"-"+vt[n&63|128]+vt[n>>8&255]+"-"+vt[n>>16&255]+vt[n>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function ze(e,t,n){return Math.max(t,Math.min(n,e))}function qo(e,t){return(e%t+t)%t}function ar(e,t,n){return(1-n)*e+n*t}function ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Xe=class ca{constructor(t=0,n=0){ca.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ze(this.x,t.x,n.x),this.y=ze(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ze(this.x,t,n),this.y=ze(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let o=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3],f=r[s+0],h=r[s+1],_=r[s+2],M=r[s+3];if(u!==M||o!==f||c!==h||l!==_){let S=o*f+c*h+l*_+u*M;S<0&&(f=-f,h=-h,_=-_,M=-M,S=-S);let p=1-a;if(S<.9995){const d=Math.acos(S),y=Math.sin(d);p=Math.sin(p*d)/y,a=Math.sin(a*d)/y,o=o*p+f*a,c=c*p+h*a,l=l*p+_*a,u=u*p+M*a}else{o=o*p+f*a,c=c*p+h*a,l=l*p+_*a,u=u*p+M*a;const d=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=d,c*=d,l*=d,u*=d}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],o=n[i+1],c=n[i+2],l=n[i+3],u=r[s],f=r[s+1],h=r[s+2],_=r[s+3];return e[t]=a*_+l*u+o*h-c*f,e[t+1]=o*_+l*f+c*u-a*h,e[t+2]=c*_+l*h+a*f-o*u,e[t+3]=l*_-a*u-o*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(n/2),l=a(i/2),u=a(r/2),f=o(n/2),h=o(i/2),_=o(r/2);switch(s){case"XYZ":this._x=f*l*u+c*h*_,this._y=c*h*u-f*l*_,this._z=c*l*_+f*h*u,this._w=c*l*u-f*h*_;break;case"YXZ":this._x=f*l*u+c*h*_,this._y=c*h*u-f*l*_,this._z=c*l*_-f*h*u,this._w=c*l*u+f*h*_;break;case"ZXY":this._x=f*l*u-c*h*_,this._y=c*h*u+f*l*_,this._z=c*l*_+f*h*u,this._w=c*l*u-f*h*_;break;case"ZYX":this._x=f*l*u-c*h*_,this._y=c*h*u+f*l*_,this._z=c*l*_-f*h*u,this._w=c*l*u+f*h*_;break;case"YZX":this._x=f*l*u+c*h*_,this._y=c*h*u+f*l*_,this._z=c*l*_-f*h*u,this._w=c*l*u-f*h*_;break;case"XZY":this._x=f*l*u-c*h*_,this._y=c*h*u-f*l*_,this._z=c*l*_+f*h*u,this._w=c*l*u+f*h*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10],f=n+a+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(l-o)*h,this._y=(r-c)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(l-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+c)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+l)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+c)/h,this._y=(o+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=n*l+s*a+i*c-r*o,this._y=i*l+s*o+r*a-n*c,this._z=r*l+s*c+n*o-i*a,this._w=s*l-n*a-i*o-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class ha{constructor(t=0,n=0,i=0){ha.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ds.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ds.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ze(this.x,t.x,n.x),this.y=ze(this.y,t.y,n.y),this.z=ze(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ze(this.x,t,n),this.y=ze(this.y,t,n),this.z=ze(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return or.copy(this).projectOnVector(t),this.sub(or)}reflect(t){return this.sub(or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},or=new B,ds=new wn,Oe=class ua{constructor(t,n,i,r,s,a,o,c,l){ua.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l)}set(t,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],_=i[5],M=i[8],S=r[0],p=r[3],d=r[6],y=r[1],T=r[4],E=r[7],L=r[2],R=r[5],P=r[8];return s[0]=a*S+o*y+c*L,s[3]=a*p+o*T+c*R,s[6]=a*d+o*E+c*P,s[1]=l*S+u*y+f*L,s[4]=l*p+u*T+f*R,s[7]=l*d+u*E+f*P,s[2]=h*S+_*y+M*L,s[5]=h*p+_*T+M*R,s[8]=h*d+_*E+M*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,_=l*s-a*c,M=n*f+i*h+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=f*S,t[1]=(r*l-u*i)*S,t[2]=(o*i-r*a)*S,t[3]=h*S,t[4]=(u*n-r*c)*S,t[5]=(r*s-o*n)*S,t[6]=_*S,t[7]=(i*c-l*n)*S,t[8]=(a*n-i*s)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(lr.makeScale(t,n)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,n){return this.premultiply(lr.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lr=new Oe,fs=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ps=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yo(){const e={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=en(r.r),r.g=en(r.g),r.b=en(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ki:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ui]:{primaries:t,whitePoint:i,transfer:Ki,toXYZ:fs,fromXYZ:ps,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:t,whitePoint:i,transfer:ji,toXYZ:fs,fromXYZ:ps,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),e}var ke=Yo();function en(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qn(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Pn,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pn===void 0&&(Pn=Zi("canvas")),Pn.width=e.width,Pn.height=e.height;const i=Pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=en(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(en(t[n]/255)*255):t[n]=en(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jo=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(cr(i[s].image)):r.push(cr(i[s]))}else r=cr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function cr(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ko.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Zo=0,hr=new B,Ot=class ki extends Jn{constructor(t=ki.DEFAULT_IMAGE,n=ki.DEFAULT_MAPPING,i=Qt,r=Qt,s=wt,a=Wr,o=ci,c=un,l=ki.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=fi(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hr).x}get height(){return this.source.getSize(hr).y}get depth(){return this.source.getSize(hr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Qt:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Qt:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=300;Ot.DEFAULT_ANISOTROPY=1;var at=class da{constructor(t=0,n=0,i=0,r=1){da.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],_=c[5],M=c[9],S=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(M-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(M+p)<.1&&Math.abs(l+_+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,E=(_+1)/2,L=(d+1)/2,R=(u+h)/4,P=(f+S)/4,g=(M+p)/4;return T>E&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=P/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=g/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=g/s),this.set(i,r,s,n),this}let y=Math.sqrt((p-M)*(p-M)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-M)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+_+d-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ze(this.x,t.x,n.x),this.y=ze(this.y,t.y,n.y),this.z=ze(this.z,t.z,n.z),this.w=ze(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ze(this.x,t,n),this.y=ze(this.y,t,n),this.z=ze(this.z,t,n),this.w=ze(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const i=new Ot({width:e,height:t,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$o=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ht=class zr{constructor(t,n,i,r,s,a,o,c,l,u,f,h,_,M,S,p){zr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l,u,f,h,_,M,S,p)}set(t,n,i,r,s,a,o,c,l,u,f,h,_,M,S,p){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=_,d[7]=M,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zr().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,r=1/In.setFromMatrixColumn(t,0).length(),s=1/In.setFromMatrixColumn(t,1).length(),a=1/In.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,_=a*f,M=o*u,S=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=_+M*l,n[5]=h-S*l,n[9]=-o*c,n[2]=S-h*l,n[6]=M+_*l,n[10]=a*c}else if(t.order==="YXZ"){const h=c*u,_=c*f,M=l*u,S=l*f;n[0]=h+S*o,n[4]=M*o-_,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=_*o-M,n[6]=S+h*o,n[10]=a*c}else if(t.order==="ZXY"){const h=c*u,_=c*f,M=l*u,S=l*f;n[0]=h-S*o,n[4]=-a*f,n[8]=M+_*o,n[1]=_+M*o,n[5]=a*u,n[9]=S-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const h=a*u,_=a*f,M=o*u,S=o*f;n[0]=c*u,n[4]=M*l-_,n[8]=h*l+S,n[1]=c*f,n[5]=S*l+h,n[9]=_*l-M,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const h=a*c,_=a*l,M=o*c,S=o*l;n[0]=c*u,n[4]=S-h*f,n[8]=M*f+_,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=_*f+M,n[10]=h-S*f}else if(t.order==="XZY"){const h=a*c,_=a*l,M=o*c,S=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+S,n[5]=a*u,n[9]=_*f-M,n[2]=M*f-_,n[6]=o*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qo,t,el)}lookAt(t,n,i){const r=this.elements;return Tt.subVectors(t,n),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),nn.crossVectors(i,Tt),nn.lengthSq()===0&&(Math.abs(i.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),nn.crossVectors(i,Tt)),nn.normalize(),xi.crossVectors(Tt,nn),r[0]=nn.x,r[4]=xi.x,r[8]=Tt.x,r[1]=nn.y,r[5]=xi.y,r[9]=Tt.y,r[2]=nn.z,r[6]=xi.z,r[10]=Tt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],_=i[13],M=i[2],S=i[6],p=i[10],d=i[14],y=i[3],T=i[7],E=i[11],L=i[15],R=r[0],P=r[4],g=r[8],b=r[12],Y=r[1],A=r[5],O=r[9],W=r[13],G=r[2],z=r[6],H=r[10],U=r[14],ne=r[3],$=r[7],se=r[11],_e=r[15];return s[0]=a*R+o*Y+c*G+l*ne,s[4]=a*P+o*A+c*z+l*$,s[8]=a*g+o*O+c*H+l*se,s[12]=a*b+o*W+c*U+l*_e,s[1]=u*R+f*Y+h*G+_*ne,s[5]=u*P+f*A+h*z+_*$,s[9]=u*g+f*O+h*H+_*se,s[13]=u*b+f*W+h*U+_*_e,s[2]=M*R+S*Y+p*G+d*ne,s[6]=M*P+S*A+p*z+d*$,s[10]=M*g+S*O+p*H+d*se,s[14]=M*b+S*W+p*U+d*_e,s[3]=y*R+T*Y+E*G+L*ne,s[7]=y*P+T*A+E*z+L*$,s[11]=y*g+T*O+E*H+L*se,s[15]=y*b+T*W+E*U+L*_e,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],_=t[14],M=t[3],S=t[7],p=t[11],d=t[15],y=c*_-l*h,T=o*_-l*f,E=o*h-c*f,L=a*_-l*u,R=a*h-c*u,P=a*f-o*u;return n*(S*y-p*T+d*E)-i*(M*y-p*L+d*R)+r*(M*T-S*L+d*P)-s*(M*E-S*R+p*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],_=t[11],M=t[12],S=t[13],p=t[14],d=t[15],y=n*o-i*a,T=n*c-r*a,E=n*l-s*a,L=i*c-r*o,R=i*l-s*o,P=r*l-s*c,g=u*S-f*M,b=u*p-h*M,Y=u*d-_*M,A=f*p-h*S,O=f*d-_*S,W=h*d-_*p,G=y*W-T*O+E*A+L*Y-R*b+P*g;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=(o*W-c*O+l*A)*z,t[1]=(r*O-i*W-s*A)*z,t[2]=(S*P-p*R+d*L)*z,t[3]=(h*R-f*P-_*L)*z,t[4]=(c*Y-a*W-l*b)*z,t[5]=(n*W-r*Y+s*b)*z,t[6]=(p*E-M*P-d*T)*z,t[7]=(u*P-h*E+_*T)*z,t[8]=(a*O-o*Y+l*g)*z,t[9]=(i*Y-n*O-s*g)*z,t[10]=(M*R-S*E+d*y)*z,t[11]=(f*E-u*R-_*y)*z,t[12]=(o*b-a*A-c*g)*z,t[13]=(n*A-i*b+r*g)*z,t[14]=(S*T-M*L-p*y)*z,t[15]=(u*L-f*T+h*y)*z,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,h=s*l,_=s*u,M=s*f,S=a*u,p=a*f,d=o*f,y=c*l,T=c*u,E=c*f,L=i.x,R=i.y,P=i.z;return r[0]=(1-(S+d))*L,r[1]=(_+E)*L,r[2]=(M-T)*L,r[3]=0,r[4]=(_-E)*R,r[5]=(1-(h+d))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(M+T)*P,r[9]=(p-y)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=In.set(r[0],r[1],r[2]).length();const o=In.set(r[4],r[5],r[6]).length(),c=In.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Dt.copy(this);const l=1/a,u=1/o,f=1/c;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=f,Dt.elements[9]*=f,Dt.elements[10]*=f,n.setFromRotationMatrix(Dt),i.x=a,i.y=o,i.z=c,this}makePerspective(t,n,i,r,s,a,o=Kn,c=!1){const l=this.elements,u=2*s/(n-t),f=2*s/(i-r),h=(n+t)/(n-t),_=(i+r)/(i-r);let M,S;if(c)M=s/(a-s),S=a*s/(a-s);else if(o===2e3)M=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===2001)M=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=Kn,c=!1){const l=this.elements,u=2/(n-t),f=2/(i-r),h=-(n+t)/(n-t),_=-(i+r)/(i-r);let M,S;if(c)M=1/(a-s),S=a/(a-s);else if(o===2e3)M=-2/(a-s),S=-(a+s)/(a-s);else if(o===2001)M=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},In=new B,Dt=new ht,Qo=new B(0,0,0),el=new B(1,1,1),nn=new B,xi=new B,Tt=new B,ms=new ht,gs=new wn,dn=class pa{constructor(t=0,n=0,i=0,r=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ms.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ms,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return gs.setFromEuler(this),this.setFromQuaternion(gs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tl=0,_s=new B,Ln=new wn,Kt=new ht,Ei=new B,ti=new B,nl=new B,il=new wn,vs=new B(1,0,0),Ms=new B(0,1,0),Ss=new B(0,0,1),xs={type:"added"},rl={type:"removed"},Dn={type:"childadded",child:null},ur={type:"childremoved",child:null},Pt=class Wi extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wi.DEFAULT_UP.clone();const t=new B,n=new dn,i=new wn,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Oe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ln.setFromAxisAngle(t,n),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(t,n){return Ln.setFromAxisAngle(t,n),this.quaternion.premultiply(Ln),this}rotateX(t){return this.rotateOnAxis(vs,t)}rotateY(t){return this.rotateOnAxis(Ms,t)}rotateZ(t){return this.rotateOnAxis(Ss,t)}translateOnAxis(t,n){return _s.copy(t).applyQuaternion(this.quaternion),this.position.add(_s.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(vs,t)}translateY(t){return this.translateOnAxis(Ms,t)}translateZ(t){return this.translateOnAxis(Ss,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ei.copy(t):Ei.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(ti,Ei,this.up):Kt.lookAt(Ei,ti,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Kt),this.quaternion.premultiply(Ln.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xs),Dn.child=t,this.dispatchEvent(Dn),Dn.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rl),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xs),Dn.child=t,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,t,nl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,il,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),_=a(t.animations),M=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}};Pt.DEFAULT_UP=new B(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sl={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),p=this._getHandJoint(c,M);S!==null&&(p.matrix.fromArray(S.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=S.radius),p.visible=S!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=l.position.distanceTo(u.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sl)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},yi={h:0,s:0,l:0};function fr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=qo(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=fr(s,r,e+1/3),this.g=fr(s,r,e),this.b=fr(s,r,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=ga[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ke.workingToColorSpace(Mt.copy(this),e),Math.round(ze(Mt.r*255,0,255))*65536+Math.round(ze(Mt.g*255,0,255))*256+Math.round(ze(Mt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ft){ke.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),this.setHSL(rn.h+e,rn.s+t,rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(yi);const n=ar(rn.h,yi.h,t),i=ar(rn.s,yi.s,t),r=ar(rn.l,yi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Ge;Ge.NAMES=ga;var al=class _a{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(t),this.near=n,this.far=i}clone(){return new _a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ol=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ut=new B,jt=new B,pr=new B,Zt=new B,Un=new B,Nn=new B,Es=new B,mr=new B,gr=new B,_r=new B,vr=new at,Mr=new at,Sr=new at,ni=class kn{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Ut.subVectors(t,n),r.cross(Ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Ut.subVectors(r,n),jt.subVectors(i,n),pr.subVectors(t,n);const a=Ut.dot(Ut),o=Ut.dot(jt),c=Ut.dot(pr),l=jt.dot(jt),u=jt.dot(pr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,_=(l*c-o*u)*h,M=(a*u-o*c)*h;return s.set(1-_-M,M,_)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,Zt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zt.x),c.addScaledVector(a,Zt.y),c.addScaledVector(o,Zt.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(t,n),Mr.fromBufferAttribute(t,i),Sr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(vr,s.x),a.addScaledVector(Mr,s.y),a.addScaledVector(Sr,s.z),a}static isFrontFacing(t,n,i,r){return Ut.subVectors(i,n),jt.subVectors(t,n),Ut.cross(jt).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ut.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ut.cross(jt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return kn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return kn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;Un.subVectors(r,i),Nn.subVectors(s,i),mr.subVectors(t,i);const c=Un.dot(mr),l=Nn.dot(mr);if(c<=0&&l<=0)return n.copy(i);gr.subVectors(t,r);const u=Un.dot(gr),f=Nn.dot(gr);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Un,a);_r.subVectors(t,s);const _=Un.dot(_r),M=Nn.dot(_r);if(M>=0&&_<=M)return n.copy(s);const S=_*l-c*M;if(S<=0&&l>=0&&M<=0)return o=l/(l-M),n.copy(i).addScaledVector(Nn,o);const p=u*M-_*f;if(p<=0&&f-u>=0&&_-M>=0)return Es.subVectors(s,r),o=(f-u)/(f-u+(_-M)),n.copy(r).addScaledVector(Es,o);const d=1/(p+S+h);return a=S*d,o=h*d,n.copy(i).addScaledVector(Un,a).addScaledVector(Nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Nt):Nt.fromBufferAttribute(r,s),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ti.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ti.copy(n.boundingBox)),Ti.applyMatrix4(e.matrixWorld),this.union(Ti)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ii),Ai.subVectors(this.max,ii),Fn.subVectors(e.a,ii),On.subVectors(e.b,ii),Bn.subVectors(e.c,ii),sn.subVectors(On,Fn),an.subVectors(Bn,On),gn.subVectors(Fn,Bn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-gn.z,gn.y,sn.z,0,-sn.x,an.z,0,-an.x,gn.z,0,-gn.x,-sn.y,sn.x,0,-an.y,an.x,0,-gn.y,gn.x,0];return!xr(t,Fn,On,Bn,Ai)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,Fn,On,Bn,Ai))?!1:(bi.crossVectors(sn,an),t=[bi.x,bi.y,bi.z],xr(t,Fn,On,Bn,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jt=[new B,new B,new B,new B,new B,new B,new B,new B],Nt=new B,Ti=new pi,Fn=new B,On=new B,Bn=new B,sn=new B,an=new B,gn=new B,ii=new B,Ai=new B,bi=new B,_n=new B;function xr(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){_n.fromArray(e,s);const o=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),c=t.dot(_n),l=n.dot(_n),u=i.dot(_n);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var st=new B,wi=new Xe,ll=0,Wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ll++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix3(e),this.setXY(t,wi.x,wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},va=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ma=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ct=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cl=new pi,ri=new B,Er=new B,qr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ri.subVectors(e,this.center);const t=ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ri,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ri.copy(e.center).add(Er)),this.expandByPoint(ri.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hl=0,Rt=new ht,yr=new Pt,Vn=new B,At=new pi,si=new pi,ft=new B,fn=class Sa extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Go(t)?Ma:va)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rt.makeRotationFromQuaternion(t),this.applyMatrix4(Rt),this}rotateX(t){return Rt.makeRotationX(t),this.applyMatrix4(Rt),this}rotateY(t){return Rt.makeRotationY(t),this.applyMatrix4(Rt),this}rotateZ(t){return Rt.makeRotationZ(t),this.applyMatrix4(Rt),this}translate(t,n,i){return Rt.makeTranslation(t,n,i),this.applyMatrix4(Rt),this}scale(t,n,i){return Rt.makeScale(t,n,i),this.applyMatrix4(Rt),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(At.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];si.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(At.min,si.min),At.expandByPoint(ft),ft.addVectors(At.max,si.max),At.expandByPoint(ft)):(At.expandByPoint(si.min),At.expandByPoint(si.max))}At.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ft.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ft.fromBufferAttribute(o,l),c&&(Vn.fromBufferAttribute(t,l),ft.add(Vn)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let g=0;g<i.count;g++)o[g]=new B,c[g]=new B;const l=new B,u=new B,f=new B,h=new Xe,_=new Xe,M=new Xe,S=new B,p=new B;function d(g,b,Y){l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,Y),h.fromBufferAttribute(s,g),_.fromBufferAttribute(s,b),M.fromBufferAttribute(s,Y),u.sub(l),f.sub(l),_.sub(h),M.sub(h);const A=1/(_.x*M.y-M.x*_.y);isFinite(A)&&(S.copy(u).multiplyScalar(M.y).addScaledVector(f,-_.y).multiplyScalar(A),p.copy(f).multiplyScalar(_.x).addScaledVector(u,-M.x).multiplyScalar(A),o[g].add(S),o[b].add(S),o[Y].add(S),c[g].add(p),c[b].add(p),c[Y].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let g=0,b=y.length;g<b;++g){const Y=y[g],A=Y.start,O=Y.count;for(let W=A,G=A+O;W<G;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const T=new B,E=new B,L=new B,R=new B;function P(g){L.fromBufferAttribute(r,g),R.copy(L);const b=o[g];T.copy(b),T.sub(L.multiplyScalar(L.dot(b))).normalize(),E.crossVectors(R,b);const Y=E.dot(c[g])<0?-1:1;a.setXYZW(g,T.x,T.y,T.z,Y)}for(let g=0,b=y.length;g<b;++g){const Y=y[g],A=Y.start,O=Y.count;for(let W=A,G=A+O;W<G;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,u=new B,f=new B;if(t)for(let h=0,_=t.count;h<_;h+=3){const M=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,_=n.count;h<_;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ft.fromBufferAttribute(t,n),ft.normalize(),t.setXYZ(n,ft.x,ft.y,ft.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let _=0,M=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?_=c[S]*o.data.stride+o.offset:_=c[S]*u;for(let d=0;d<u;d++)h[M++]=l[_++]}return new Wt(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sa,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],_=t(h,i);c.push(_)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const _=l[f];u.push(_.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,_=f.length;h<_;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=0,mi=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=new B,Tr=new B,Ri=new B,on=new B,Ar=new B,Ci=new B,br=new B,dl=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tr.copy(e).add(t).multiplyScalar(.5),Ri.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Tr);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ri),a=on.dot(this.direction),o=-on.dot(Ri),c=on.lengthSq(),l=Math.abs(1-s*s);let u,f,h,_;if(l>0)if(u=s*o-a,f=s*a-o,_=r*l,u>=0)if(f>=-_)if(f<=_){const M=1/l;u*=M,f*=M,h=u*(u+s*f+2*a)+f*(s*u+f+2*o)+c}else f=r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;else f=-r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;else f<=-_?(u=Math.max(0,-(-s*r+a)),f=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-o),r),h=f*(f+2*o)+c):(u=Math.max(0,-(s*r+a)),f=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+f*(f+2*o)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+a)),h=-u*u+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Tr).addScaledVector(Ri,f),h}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),i=$t.dot($t)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),l>=0?(r=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,r){Ar.subVectors(t,e),Ci.subVectors(n,e),br.crossVectors(Ar,Ci);let s=this.direction.dot(br),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;on.subVectors(this.origin,e);const o=a*this.direction.dot(Ci.crossVectors(on,Ci));if(o<0)return null;const c=a*this.direction.dot(Ar.cross(on));if(c<0||o+c>s)return null;const l=-a*on.dot(br);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xa=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ys=new ht,vn=new dl,Pi=new qr,Ts=new B,Ii=new B,Li=new B,Di=new B,wr=new B,Ui=new B,As=new B,Ni=new B,St=class extends Pt{constructor(e=new fn,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ui.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],u=r[o];l!==0&&(wr.fromBufferAttribute(u,e),s?Ui.addScaledVector(wr,l):Ui.addScaledVector(wr.sub(t),l))}t.add(Ui)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(r),vn.copy(e.ray).recast(e.near),!(Pi.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Pi,Ts)===null||vn.origin.distanceToSquared(Ts)>(e.far-e.near)**2))&&(ys.copy(r).invert(),vn.copy(e.ray).applyMatrix4(ys),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,M=f.length;_<M;_++){const S=f[_],p=s[S.materialIndex],d=Math.max(S.start,h.start),y=Math.min(a.count,Math.min(S.start+S.count,h.start+h.count));for(let T=d,E=y;T<E;T+=3){const L=a.getX(T),R=a.getX(T+1),P=a.getX(T+2);i=Fi(this,p,e,n,c,l,u,L,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let S=_,p=M;S<p;S+=3){const d=a.getX(S),y=a.getX(S+1),T=a.getX(S+2);i=Fi(this,s,e,n,c,l,u,d,y,T),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let _=0,M=f.length;_<M;_++){const S=f[_],p=s[S.materialIndex],d=Math.max(S.start,h.start),y=Math.min(o.count,Math.min(S.start+S.count,h.start+h.count));for(let T=d,E=y;T<E;T+=3){const L=T,R=T+1,P=T+2;i=Fi(this,p,e,n,c,l,u,L,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let S=_,p=M;S<p;S+=3){const d=S,y=S+1,T=S+2;i=Fi(this,s,e,n,c,l,u,d,y,T),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}}};function fl(e,t,n,i,r,s,a,o){let c;if(t.side===1?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===0,o),c===null)return null;Ni.copy(o),Ni.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Ni);return l<n.near||l>n.far?null:{distance:l,point:Ni.clone(),object:e}}function Fi(e,t,n,i,r,s,a,o,c,l){e.getVertexPosition(o,Ii),e.getVertexPosition(c,Li),e.getVertexPosition(l,Di);const u=fl(e,t,n,i,Ii,Li,Di,As);if(u){const f=new B;ni.getBarycoord(As,Ii,Li,Di,f),r&&(u.uv=ni.getInterpolatedAttribute(r,o,c,l,f,new Xe)),s&&(u.uv1=ni.getInterpolatedAttribute(s,o,c,l,f,new Xe)),a&&(u.normal=ni.getInterpolatedAttribute(a,o,c,l,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new B,materialIndex:0};ni.getNormal(Ii,Li,Di,h.normal),u.face=h,u.barycoord=f}return u}var pl=class extends Ot{constructor(e=null,t=1,n=1,i,r,s,a,o,c=Et,l=Et,u,f){super(null,s,a,o,c,l,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rr=new B,ml=new B,gl=new Oe,En=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(ml.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gl.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mn=new qr,_l=new Xe(.5,.5),Oi=new B,Yr=class{constructor(e=new En,t=new En,n=new En,i=new En,r=new En,s=new En){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],_=r[8],M=r[9],S=r[10],p=r[11],d=r[12],y=r[13],T=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,p-_,E-d).normalize(),i[1].setComponents(c+s,h+l,p+_,E+d).normalize(),i[2].setComponents(c+a,h+u,p+M,E+y).normalize(),i[3].setComponents(c-a,h-u,p-M,E-y).normalize(),n)i[4].setComponents(o,f,S,T).normalize(),i[5].setComponents(c-o,h-f,p-S,E-T).normalize();else if(i[4].setComponents(c-o,h-f,p-S,E-T).normalize(),t===2e3)i[5].setComponents(c+o,h+f,p+S,E+T).normalize();else if(t===2001)i[5].setComponents(o,f,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476+_l.distanceTo(e.center),Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Oi.x=i.normal.x>0?e.max.x:e.min.x,Oi.y=i.normal.y>0?e.max.y:e.min.y,Oi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ea=class extends Ot{constructor(e=[],t=301,n,i,r,s,a,o,c,l){super(e,t,n,i,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends Ot{constructor(e,t,n=Tn,i,r,s,a=Et,o=Et,c,l=hi,u=1){if(l!==1026&&l!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,r,s,a,o,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vl=class extends di{constructor(e,t=Tn,n=301,i,r,s=Et,a=Et,o,c=hi){const l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,i,r,s,a,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bn=class Ta extends fn{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,_=0;M("z","y","x",-1,-1,i,n,t,a,s,0),M("z","y","x",1,-1,i,n,-t,a,s,1),M("x","z","y",1,1,t,i,n,r,a,2),M("x","z","y",1,-1,t,i,-n,r,a,3),M("x","y","z",1,-1,t,n,i,r,s,4),M("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function M(S,p,d,y,T,E,L,R,P,g,b){const Y=E/P,A=L/g,O=E/2,W=L/2,G=R/2,z=P+1,H=g+1;let U=0,ne=0;const $=new B;for(let se=0;se<H;se++){const _e=se*A-W;for(let de=0;de<z;de++)$[S]=(de*Y-O)*y,$[p]=_e*T,$[d]=G,l.push($.x,$.y,$.z),$[S]=0,$[p]=0,$[d]=R>0?1:-1,u.push($.x,$.y,$.z),f.push(de/P),f.push(1-se/g),U+=1}for(let se=0;se<g;se++)for(let _e=0;_e<P;_e++){const de=h+_e+z*se,$e=h+_e+z*(se+1),Ye=h+(_e+1)+z*(se+1),q=h+(_e+1)+z*se;c.push(de,$e,q),c.push($e,Ye,q),ne+=6}o.addGroup(_,ne,b),_+=ne,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Aa=class ba extends fn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=n/c,_=[],M=[],S=[],p=[];for(let d=0;d<u;d++){const y=d*h-a;for(let T=0;T<l;T++){const E=T*f-s;M.push(E,-y,0),S.push(0,0,1),p.push(T/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const T=y+l*d,E=y+l*(d+1),L=y+1+l*(d+1),R=y+1+l*d;_.push(T,E,R),_.push(E,L,R)}this.setIndex(_),this.setAttribute("position",new Ct(M,3)),this.setAttribute("normal",new Ct(S,3)),this.setAttribute("uv",new Ct(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.width,t.height,t.widthSegments,t.heightSegments)}},Ml=class wa extends fn{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new B,h=new B,_=[],M=[],S=[],p=[];for(let d=0;d<=i;d++){const y=[],T=d/i;let E=0;d===0&&a===0?E=.5/n:d===i&&c===Math.PI&&(E=-.5/n);for(let L=0;L<=n;L++){const R=L/n;f.x=-t*Math.cos(r+R*s)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(r+R*s)*Math.sin(a+T*o),M.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),p.push(R+E,1-T),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<n;y++){const T=u[d][y+1],E=u[d][y],L=u[d+1][y],R=u[d+1][y+1];(d!==0||a>0)&&_.push(T,E,R),(d!==i-1||c<Math.PI)&&_.push(E,L,R)}this.setIndex(_),this.setAttribute("position",new Ct(M,3)),this.setAttribute("normal",new Ct(S,3)),this.setAttribute("uv",new Ct(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zn(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function xt(e){const t={};for(let n=0;n<e.length;n++){const i=Zn(e[n]);for(const r in i)t[r]=i[r]}return t}function Sl(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ra(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}var xl={clone:Zn,merge:xt},El=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=El,this.fragmentShader=yl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=Sl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Tl=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Al=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case ls:r=e,a=2*t-n;break;case cs:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case ls:s=e,o=2*n-t;break;case cs:s=1,o=n+i[1]-i[0];break;default:s=e-1,o=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-n),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,_=(n-t)/(i-t),M=_*_,S=M*_,p=-f*S+2*f*M-f*_,d=(1+f)*S+(-1.5-2*f)*M+(-.5+f)*_+1,y=(-1-h)*S+(1.5+h)*M+.5*_,T=h*S-h*M;for(let E=0;E!==a;++E)r[E]=p*s[l+E]+d*s[c+E]+y*s[o+E]+T*s[u+E];return r}},Rl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=(n-t)/(i-t),u=1-l;for(let f=0;f!==a;++f)r[f]=s[c+f]*u+s[o+f]*l;return r}},Cl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends gi{interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this.settings||this.DefaultSettings_,u=l.inTangents,f=l.outTangents;if(!u||!f){const M=(n-t)/(i-t),S=1-M;for(let p=0;p!==a;++p)r[p]=s[c+p]*S+s[o+p]*M;return r}const h=a*2,_=e-1;for(let M=0;M!==a;++M){const S=s[c+M],p=s[o+M],d=_*h+M*2,y=f[d],T=f[d+1],E=e*h+M*2,L=u[E],R=u[E+1];let P=(n-t)/(i-t),g,b,Y,A,O;for(let W=0;W<8;W++){g=P*P,b=g*P,Y=1-P,A=Y*Y,O=A*Y;const G=O*t+3*A*P*y+3*Y*g*L+b*i-n;if(Math.abs(G)<1e-10)break;const z=3*A*(y-t)+6*Y*P*(L-y)+3*g*(i-L);if(Math.abs(z)<1e-10)break;P=P-G/z,P=Math.max(0,Math.min(1,P))}r[M]=O*S+3*A*P*T+3*Y*g*R+b*p}return r}},qt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case ir:t=this.InterpolantFactoryMethodSmooth;break;case as:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return ir;case this.InterpolantFactoryMethodBezier:return as}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(i!==void 0&&Ho(i))for(let a=0,o=i.length;a!==o;++a){const c=i[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ir,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(i)o=!0;else{const l=a*n,u=l-n,f=l+n;for(let h=0;h!==n;++h){const _=t[l+h];if(_!==t[u+h]||_!==t[f+h]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const l=a*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[l+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,o=s*n,c=0;c!==n;++c)t[o+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Br;var _i=class extends qt{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Yi;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Il.prototype.ValueTypeName="color";var Ll=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Ll.prototype.ValueTypeName="number";var Dl=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t);let c=e*a;for(let l=c+a;c!==l;c+=4)wn.slerpFlat(r,0,s,c-a,s,c,o);return r}},Ca=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends qt{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Yi;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends qt{constructor(e,t,n,i){super(e,t,n,i)}};Ul.prototype.ValueTypeName="vector";var Nl=class{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=c.length;u<f;u+=2){const h=c[u],_=c[u+1];if(h.global&&(h.lastIndex=0),h.test(l))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fl=new Nl,Ol=class{constructor(e){this.manager=e!==void 0?e:Fl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Cr=new ht,bs=new B,ws=new B,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bs.setFromMatrixPosition(e.matrixWorld),t.position.copy(bs),ws.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ws),t.updateMatrixWorld(),Cr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vi=new B,zi=new wn,zt=new B,Ia=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vi,zi,zt),zt.x===1&&zt.y===1&&zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vi,zi,zt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vi,zi,zt),zt.x===1&&zt.y===1&&zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vi,zi,zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ln=new B,Rs=new Xe,Cs=new Xe,bt=class extends Ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,Rs,Cs),t.subVectors(Cs,Rs)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*n/c,i*=s.width/o,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bl=class extends Pa{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0}},Vl=class extends Kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},jr=class extends Ia{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zl=class extends Pa{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gl=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Hl=class extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},zn=-90,Gn=1,kl=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(zn,Gn,e,t);i.layers=this.layers,this.add(i);const r=new bt(zn,Gn,e,t);r.layers=this.layers,this.add(r);const s=new bt(zn,Gn,e,t);s.layers=this.layers,this.add(s);const a=new bt(zn,Gn,e,t);a.layers=this.layers,this.add(a);const o=new bt(zn,Gn,e,t);o.layers=this.layers,this.add(o);const c=new bt(zn,Gn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,a,o]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wl=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zr="\\[\\]\\.:\\/",Xl=new RegExp("["+Zr+"]","g"),Jr="[^"+Zr+"]",ql="[^"+Zr.replace("\\.","")+"]",Yl=/((?:WC+[\/:])*)/.source.replace("WC",Jr),Kl=/(WCOD+)?/.source.replace("WCOD",ql),jl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jr),Zl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jr),Jl=new RegExp("^"+Yl+Kl+jl+Zl+"$"),$l=["material","materials","bones","map"],Ql=class{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class Wn{constructor(t,n,i){this.path=n,this.parsedPath=i||Wn.parseTrackName(n),this.node=Wn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new Wn.Composite(t,n,i):new Wn(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xl,"")}static parseTrackName(t){const n=Jl.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);$l.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(t||(t=Wn.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=n.nodeName;Pe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Ql;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iu=new Float32Array(1);function Ps(e,t,n,i){const r=ec(i);switch(n){case Qa:return e*t;case to:return e*t/r.components*r.byteLength;case sa:return e*t/r.components*r.byteLength;case qi:return e*t*2/r.components*r.byteLength;case aa:return e*t*2/r.components*r.byteLength;case eo:return e*t*3/r.components*r.byteLength;case ci:return e*t*4/r.components*r.byteLength;case oa:return e*t*4/r.components*r.byteLength;case no:case io:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ro:case so:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oo:case co:return Math.max(e,16)*Math.max(t,8)/4;case ao:case lo:return Math.max(e,8)*Math.max(t,8)/2;case ho:case uo:case po:case mo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fo:case go:case _o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case Uo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case No:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ec(e){switch(e){case un:case Ka:return{byteLength:1,components:1};case ea:case ja:case An:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Tn:case Za:case $i:return{byteLength:4,components:1};case Ja:case $a:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function La(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function tc(e){const t=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=e.createBuffer();e.bindBuffer(c,h),e.bufferData(c,l,u),o.onUploadCallback();let _;if(l instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=e.SHORT;else if(l instanceof Uint32Array)_=e.UNSIGNED_INT;else if(l instanceof Int32Array)_=e.INT;else if(l instanceof Int8Array)_=e.BYTE;else if(l instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(e.bindBuffer(l,o),f.length===0)e.bufferSubData(l,0,u);else{f.sort((_,M)=>_.start-M.start);let h=0;for(let _=1;_<f.length;_++){const M=f[h],S=f[_];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++h,f[h]=S)}f.length=h+1;for(let _=0,M=f.length;_<M;_++){const S=f[_];e.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
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
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ht={basic:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:xt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:xt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:xt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:xt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:xt([oe.lights,oe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Ht.physical={uniforms:xt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Gi={r:0,b:0,g:0},Sn=new dn,nc=new ht;function ic(e,t,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function _(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=t.get(T,E)}return T}function M(y){let T=!1;const E=_(y);E===null?p(a,o):E&&E.isColor&&(p(E,1),T=!0);const L=e.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(y,T){const E=_(T);E&&(E.isCubeTexture||E.mapping===306)?(l===void 0&&(l=new St(new bn(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Zn(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Sn.copy(T.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nc.makeRotationFromEuler(Sn)),l.material.toneMapped=ke.getTransfer(E.colorSpace)!==ji,(u!==E||f!==E.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new St(new Aa(2,2),new Xt({name:"BackgroundMaterial",uniforms:Zn(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ke.getTransfer(E.colorSpace)!==ji,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(Gi,Ra(e)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,T,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:M,addToRenderList:S,dispose:d}}function rc(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,O,W,G,z){let H=!1;const U=f(A,G,W,O);s!==U&&(s=U,l(s.object)),H=_(A,G,W,z),H&&M(A,G,W,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(A,O,W,G),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return e.createVertexArray()}function l(A){return e.bindVertexArray(A)}function u(A){return e.deleteVertexArray(A)}function f(A,O,W,G){const z=G.wireframe===!0;let H=i[O.id];H===void 0&&(H={},i[O.id]=H);const U=A.isInstancedMesh===!0?A.id:0;let ne=H[U];ne===void 0&&(ne={},H[U]=ne);let $=ne[W.id];$===void 0&&($={},ne[W.id]=$);let se=$[z];return se===void 0&&(se=h(c()),$[z]=se),se}function h(A){const O=[],W=[],G=[];for(let z=0;z<n;z++)O[z]=0,W[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:G,object:A,attributes:{},index:null}}function _(A,O,W,G){const z=s.attributes,H=O.attributes;let U=0;const ne=W.getAttributes();for(const $ in ne)if(ne[$].location>=0){const se=z[$];let _e=H[$];if(_e===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),se===void 0||se.attribute!==_e||_e&&se.data!==_e.data)return!0;U++}return s.attributesNum!==U||s.index!==G}function M(A,O,W,G){const z={},H=O.attributes;let U=0;const ne=W.getAttributes();for(const $ in ne)if(ne[$].location>=0){let se=H[$];se===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const _e={};_e.attribute=se,se&&se.data&&(_e.data=se.data),z[$]=_e,U++}s.attributes=z,s.attributesNum=U,s.index=G}function S(){const A=s.newAttributes;for(let O=0,W=A.length;O<W;O++)A[O]=0}function p(A){d(A,0)}function d(A,O){const W=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;W[A]=1,G[A]===0&&(e.enableVertexAttribArray(A),G[A]=1),z[A]!==O&&(e.vertexAttribDivisor(A,O),z[A]=O)}function y(){const A=s.newAttributes,O=s.enabledAttributes;for(let W=0,G=O.length;W<G;W++)O[W]!==A[W]&&(e.disableVertexAttribArray(W),O[W]=0)}function T(A,O,W,G,z,H,U){U===!0?e.vertexAttribIPointer(A,O,W,z,H):e.vertexAttribPointer(A,O,W,G,z,H)}function E(A,O,W,G){S();const z=G.attributes,H=W.getAttributes(),U=O.defaultAttributeValues;for(const ne in H){const $=H[ne];if($.location>=0){let se=z[ne];if(se===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),se!==void 0){const _e=se.normalized,de=se.itemSize,$e=t.get(se);if($e===void 0)continue;const Ye=$e.buffer,q=$e.type,ie=$e.bytesPerElement,pe=q===e.INT||q===e.UNSIGNED_INT||se.gpuType===1013;if(se.isInterleavedBufferAttribute){const ce=se.data,be=ce.stride,we=se.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<$.locationSize;Le++)d($.location+Le,ce.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<$.locationSize;Le++)p($.location+Le);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let Le=0;Le<$.locationSize;Le++)T($.location+Le,de/$.locationSize,q,_e,be*ie,(we+de/$.locationSize*Le)*ie,pe)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)d($.location+ce,se.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<$.locationSize;ce++)p($.location+ce);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let ce=0;ce<$.locationSize;ce++)T($.location+ce,de/$.locationSize,q,_e,de*ie,de/$.locationSize*ce*ie,pe)}}else if(U!==void 0){const _e=U[ne];if(_e!==void 0)switch(_e.length){case 2:e.vertexAttrib2fv($.location,_e);break;case 3:e.vertexAttrib3fv($.location,_e);break;case 4:e.vertexAttrib4fv($.location,_e);break;default:e.vertexAttrib1fv($.location,_e)}}}}y()}function L(){b();for(const A in i){const O=i[A];for(const W in O){const G=O[W];for(const z in G){const H=G[z];for(const U in H)u(H[U].object),delete H[U];delete G[z]}}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const O=i[A.id];for(const W in O){const G=O[W];for(const z in G){const H=G[z];for(const U in H)u(H[U].object),delete H[U];delete G[z]}}delete i[A.id]}function P(A){for(const O in i){const W=i[O];for(const G in W){const z=W[G];if(z[A.id]===void 0)continue;const H=z[A.id];for(const U in H)u(H[U].object),delete H[U];delete z[A.id]}}}function g(A){for(const O in i){const W=i[O],G=A.isInstancedMesh===!0?A.id:0,z=W[G];if(z!==void 0){for(const H in z){const U=z[H];for(const ne in U)u(U[ne].object),delete U[ne];delete z[H]}delete W[G],Object.keys(W).length===0&&delete i[O]}}}function b(){Y(),a=!0,s!==r&&(s=r,l(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function sc(e,t,n){let i;function r(l){i=l}function s(l,u){e.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,f){f!==0&&(e.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];n.update(h,i,1)}function c(l,u,f,h){if(f===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<l.length;M++)a(l[M],u[M],h[M]);else{_.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let M=0;for(let S=0;S<f;S++)M+=u[S]*h[S];n.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ac(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const g=P===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==1009&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!g)}function c(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),L=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:_,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:L,samples:R}}function oc(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new En,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||i!==0||r;return r=h,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,_){const M=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=e.get(f);if(!r||M===null||M.length===0||s&&!p)s?u(null):l();else{const y=s?0:i,T=y*4;let E=d.clippingState||null;c.value=E,E=u(M,h,T,_);for(let L=0;L!==T;++L)E[L]=n[L];d.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,_,M){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=c.value,M!==!0||p===null){const d=_+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,E=_;T!==S;++T,E+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var hn=4,Is=[.125,.215,.35,.446,.526,.582],yn=20,lc=256,ai=new jr,Ls=new Ge,Pr=null,Ir=0,Lr=0,Dr=!1,cc=new B,Ds=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:s=256,position:a=cc}=r;Pr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ns(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr,Ir,Lr),this._renderer.xr.enabled=Dr,e.scissorTest=!1,Hn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:An,format:ci,colorSpace:ui,depthBuffer:!1},i=Us(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hc(r)),this._blurMaterial=dc(r,e,t),this._ggxMaterial=uc(r,e,t)}return i}_compileMaterial(e){const t=new St(new fn,e);this._renderer.compile(t,ai)}_sceneToCubeUV(e,t,n,i,r){const s=new bt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ls),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(i),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new bn,new xa({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const f=this._backgroundBox,h=f.material;let _=!1;const M=e.background;M?M.isColor&&(h.color.copy(M),e.background=null,_=!0):(h.color.copy(Ls),_=!0);for(let S=0;S<6;S++){const p=S%3;p===0?(s.up.set(0,a[S],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[S],r.y,r.z)):p===1?(s.up.set(0,0,a[S]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[S],r.z)):(s.up.set(0,a[S],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[S]));const d=this._cubeSize;Hn(i,p*d,S>2?d:0,d,d),c.setRenderTarget(i),_&&c.render(f,s),c.render(e,s)}c.toneMapping=u,c.autoClear=l,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ns());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Hn(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,ai)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:f}=this,h=this._sizeLods[n],_=3*h*(n>f-hn?n-f+hn:0),M=4*(this._cubeSize-h);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=f-t,Hn(r,_,M,3*h,2*h),i.setRenderTarget(r),i.render(a,ai),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=f-n,Hn(e,_,M,3*h,2*h),i.setRenderTarget(e),i.render(a,ai)}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const l=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*yn-1),M=r/_,S=isFinite(r)?1+Math.floor(l*M):yn;S>yn&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yn}`);const p=[];let d=0;for(let E=0;E<yn;++E){const L=E/M,R=Math.exp(-L*L/2);p.push(R),E===0?d+=R:E<S&&(d+=2*R)}for(let E=0;E<p.length;E++)p[E]=p[E]/d;f.envMap.value=e.texture,f.samples.value=S,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const T=this._sizeLods[i];Hn(t,3*T*(i>y-hn?i-y+hn:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(t),o.render(u,ai)}};function hc(e){const t=[],n=[],i=[];let r=e;const s=e-hn+1+Is.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>e-hn?c=Is[a-e+hn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,M=6,S=3,p=2,d=1,y=new Float32Array(S*M*_),T=new Float32Array(p*M*_),E=new Float32Array(d*M*_);for(let R=0;R<_;R++){const P=R%3*2/3-1,g=R>2?0:-1,b=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];y.set(b,S*M*R),T.set(h,p*M*R);const Y=[R,R,R,R,R,R];E.set(Y,d*M*R)}const L=new fn;L.setAttribute("position",new Wt(y,S)),L.setAttribute("uv",new Wt(T,p)),L.setAttribute("faceIndex",new Wt(E,d)),i.push(new St(L,null)),r>hn&&r--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Us(e,t,n){const i=new kt(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hn(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function uc(e,t,n){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(e,t,n){const i=new Float32Array(yn),r=new B(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qi(),fragmentShader:`

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

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ns(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fs(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(){return`

		precision mediump float;
		precision mediump int;

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
	`}var Da=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1};this.texture=new Ea([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bn(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Zn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new St(i,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=wt),new kl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function fc(e){let t=new WeakMap,n=new WeakMap,i=null;function r(h,_=!1){return h==null?null:_?a(h):s(h)}function s(h){if(h&&h.isTexture){const _=h.mapping;if(_===303||_===304)if(t.has(h)){const M=t.get(h).texture;return o(M,h.mapping)}else{const M=h.image;if(M&&M.height>0){const S=new Da(M.height);return S.fromEquirectangularTexture(e,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const _=h.mapping,M=_===303||_===304,S=_===301||_===302;if(M||S){let p=n.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Ds(e)),p=M?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return M&&y&&y.height>0||S&&y&&c(y)?(i===null&&(i=new Ds(e)),p=M?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,_){return _===303?h.mapping=301:_===304&&(h.mapping=302),h}function c(h){let _=0;const M=6;for(let S=0;S<M;S++)h[S]!==void 0&&_++;return _===M}function l(h){const _=h.target;_.removeEventListener("dispose",l);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function u(h){const _=h.target;_.removeEventListener("dispose",u);const M=n.get(_);M!==void 0&&(n.delete(_),M.dispose())}function f(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function pc(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const r=e.getExtension(i);return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ji("WebGLRenderer: "+i+" extension not supported."),r}}}function mc(e,t,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const M in h.attributes)t.remove(h.attributes[M]);h.removeEventListener("dispose",a),delete r[h.id];const _=s.get(h);_&&(t.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)t.update(h[_],e.ARRAY_BUFFER)}function l(f){const h=[],_=f.index,M=f.attributes.position;let S=0;if(M===void 0)return;if(_!==null){const y=_.array;S=_.version;for(let T=0,E=y.length;T<E;T+=3){const L=y[T+0],R=y[T+1],P=y[T+2];h.push(L,R,R,P,P,L)}}else{const y=M.array;S=M.version;for(let T=0,E=y.length/3-1;T<E;T+=3){const L=T+0,R=T+1,P=T+2;h.push(L,R,R,P,P,L)}}const p=new(M.count>=65535?Ma:va)(h,1);p.version=S;const d=s.get(f);d&&t.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function gc(e,t,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,_){e.drawElements(i,_,s,h*a),n.update(_,i,1)}function l(h,_,M){M!==0&&(e.drawElementsInstanced(i,_,s,h*a,M),n.update(_,i,M))}function u(h,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,h,0,M);let S=0;for(let p=0;p<M;p++)S+=_[p];n.update(S,i,1)}function f(h,_,M,S){if(M===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)l(h[d]/a,_[d],S[d]);else{p.multiDrawElementsInstancedWEBGL(i,_,0,s,h,0,S,0,M);let d=0;for(let y=0;y<M;y++)d+=_[y]*S[y];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _c(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vc(e,t,n){const i=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let Y=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",Y)};var _=Y;h!==void 0&&h.texture.dispose();const M=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;M===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let L=o.attributes.position.count*E,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*R*4*f),g=new fa(P,L,R,f);g.type=$i,g.needsUpdate=!0;const b=E*4;for(let A=0;A<f;A++){const O=d[A],W=y[A],G=T[A],z=L*R*4*A;for(let H=0;H<O.count;H++){const U=H*b;M===!0&&(r.fromBufferAttribute(O,H),P[z+U+0]=r.x,P[z+U+1]=r.y,P[z+U+2]=r.z,P[z+U+3]=0),S===!0&&(r.fromBufferAttribute(W,H),P[z+U+4]=r.x,P[z+U+5]=r.y,P[z+U+6]=r.z,P[z+U+7]=0),p===!0&&(r.fromBufferAttribute(G,H),P[z+U+8]=r.x,P[z+U+9]=r.y,P[z+U+10]=r.z,P[z+U+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:g,size:new Xe(L,R)},i.set(o,h),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let M=0;for(let p=0;p<l.length;p++)M+=l[p];const S=o.morphTargetsRelative?1:1-M;c.getUniforms().setValue(e,"morphTargetBaseInfluence",S),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Mc(e,t,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const _=l.skeleton;s.get(_)!==u&&(_.update(),s.set(_,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var Sc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function xc(e,t,n,i,r){const s=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:r}),a=new kt(t,n,{type:An,depthBuffer:!1,stencilBuffer:!1}),o=new fn;o.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const c=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new St(o,c),u=new jr(-1,1,1,-1,0,1);let f=null,h=null,_=!1,M,S=null,p=[],d=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let E=0;E<p.length;E++){const L=p[E];L.setSize&&L.setSize(y,T)}},this.setEffects=function(y){p=y,d=p.length>0&&p[0].isRenderPass===!0;const T=s.width,E=s.height;for(let L=0;L<p.length;L++){const R=p[L];R.setSize&&R.setSize(T,E)}},this.begin=function(y,T){if(_||y.toneMapping===0&&p.length===0)return!1;if(S=T,T!==null){const E=T.width,L=T.height;(s.width!==E||s.height!==L)&&this.setSize(E,L)}return d===!1&&y.setRenderTarget(s),M=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return d},this.end=function(y,T){y.toneMapping=M,_=!0;let E=s,L=a;for(let R=0;R<p.length;R++){const P=p[R];if(P.enabled!==!1&&(P.render(y,L,E,T),P.needsSwap!==!1)){const g=E;E=L,L=g}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,c.defines={},ke.getTransfer(f)==="srgb"&&(c.defines.SRGB_TRANSFER="");const R=Sc[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(S),y.render(l,u),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}var Ua=new Ot,Gr=new di(1,1),Na=new fa,Fa=new $o,Oa=new Ea,Os=[],Bs=[],Vs=new Float32Array(16),zs=new Float32Array(9),Gs=new Float32Array(4);function $n(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Os[r];if(s===void 0&&(s=new Float32Array(r),Os[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function ut(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function dt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function er(e,t){let n=Bs[t];n===void 0&&(n=new Int32Array(t),Bs[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Ec(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ut(n,t))return;e.uniform2fv(this.addr,t),dt(n,t)}}function Tc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ut(n,t))return;e.uniform3fv(this.addr,t),dt(n,t)}}function Ac(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ut(n,t))return;e.uniform4fv(this.addr,t),dt(n,t)}}function bc(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),dt(n,t)}else{if(ut(n,i))return;Gs.set(i),e.uniformMatrix2fv(this.addr,!1,Gs),dt(n,i)}}function wc(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),dt(n,t)}else{if(ut(n,i))return;zs.set(i),e.uniformMatrix3fv(this.addr,!1,zs),dt(n,i)}}function Rc(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),dt(n,t)}else{if(ut(n,i))return;Vs.set(i),e.uniformMatrix4fv(this.addr,!1,Vs),dt(n,i)}}function Cc(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Pc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ut(n,t))return;e.uniform2iv(this.addr,t),dt(n,t)}}function Ic(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ut(n,t))return;e.uniform3iv(this.addr,t),dt(n,t)}}function Lc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ut(n,t))return;e.uniform4iv(this.addr,t),dt(n,t)}}function Dc(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Uc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ut(n,t))return;e.uniform2uiv(this.addr,t),dt(n,t)}}function Nc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ut(n,t))return;e.uniform3uiv(this.addr,t),dt(n,t)}}function Fc(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ut(n,t))return;e.uniform4uiv(this.addr,t),dt(n,t)}}function Oc(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Gr.compareFunction=n.isReversedDepthBuffer()?518:515,s=Gr):s=Ua,n.setTexture2D(t||s,r)}function Bc(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Fa,r)}function Vc(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Oa,r)}function zc(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Na,r)}function Gc(e){switch(e){case 5126:return Ec;case 35664:return yc;case 35665:return Tc;case 35666:return Ac;case 35674:return bc;case 35675:return wc;case 35676:return Rc;case 5124:case 35670:return Cc;case 35667:case 35671:return Pc;case 35668:case 35672:return Ic;case 35669:case 35673:return Lc;case 5125:return Dc;case 36294:return Uc;case 36295:return Nc;case 36296:return Fc;case 35678:case 36198:case 36298:case 36306:case 35682:return Oc;case 35679:case 36299:case 36307:return Bc;case 35680:case 36300:case 36308:case 36293:return Vc;case 36289:case 36303:case 36311:case 36292:return zc}}function Hc(e,t){e.uniform1fv(this.addr,t)}function kc(e,t){const n=$n(t,this.size,2);e.uniform2fv(this.addr,n)}function Wc(e,t){const n=$n(t,this.size,3);e.uniform3fv(this.addr,n)}function Xc(e,t){const n=$n(t,this.size,4);e.uniform4fv(this.addr,n)}function qc(e,t){const n=$n(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Yc(e,t){const n=$n(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Kc(e,t){const n=$n(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jc(e,t){e.uniform1iv(this.addr,t)}function Zc(e,t){e.uniform2iv(this.addr,t)}function Jc(e,t){e.uniform3iv(this.addr,t)}function $c(e,t){e.uniform4iv(this.addr,t)}function Qc(e,t){e.uniform1uiv(this.addr,t)}function eh(e,t){e.uniform2uiv(this.addr,t)}function th(e,t){e.uniform3uiv(this.addr,t)}function nh(e,t){e.uniform4uiv(this.addr,t)}function ih(e,t,n){const i=this.cache,r=t.length,s=er(n,r);ut(i,s)||(e.uniform1iv(this.addr,s),dt(i,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=Gr:a=Ua;for(let o=0;o!==r;++o)n.setTexture2D(t[o]||a,s[o])}function rh(e,t,n){const i=this.cache,r=t.length,s=er(n,r);ut(i,s)||(e.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Fa,s[a])}function sh(e,t,n){const i=this.cache,r=t.length,s=er(n,r);ut(i,s)||(e.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Oa,s[a])}function ah(e,t,n){const i=this.cache,r=t.length,s=er(n,r);ut(i,s)||(e.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Na,s[a])}function oh(e){switch(e){case 5126:return Hc;case 35664:return kc;case 35665:return Wc;case 35666:return Xc;case 35674:return qc;case 35675:return Yc;case 35676:return Kc;case 5124:case 35670:return jc;case 35667:case 35671:return Zc;case 35668:case 35672:return Jc;case 35669:case 35673:return $c;case 5125:return Qc;case 36294:return eh;case 36295:return th;case 36296:return nh;case 35678:case 36198:case 36298:case 36306:case 35682:return ih;case 35679:case 36299:case 36307:return rh;case 35680:case 36300:case 36308:case 36293:return sh;case 36289:case 36303:case 36311:case 36292:return ah}}var lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gc(t.type)}},ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oh(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}},Ur=/(\w+)(\])?(\[|\.)?/g;function Hs(e,t){e.seq.push(t),e.map[t.id]=t}function uh(e,t,n){const i=e.name,r=i.length;for(Ur.lastIndex=0;;){const s=Ur.exec(i),a=Ur.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Hs(n,l===void 0?new lh(o,e,t):new ch(o,e,t));break}else{let u=n.map[o];u===void 0&&(u=new hh(o),Hs(n,u)),n=u}}}var Xi=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s);uh(a,e.getUniformLocation(t,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}};function ks(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var dh=37297,fh=0;function ph(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ws=new Oe;function mh(e){ke._getMatrix(Ws,ke.workingColorSpace,e);const t=`mat3( ${Ws.elements.map(n=>n.toFixed(4))} )`;switch(ke.getTransfer(e)){case Ki:return[t,"LinearTransferOETF"];case ji:return[t,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Xs(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ph(e.getShaderSource(t),a)}else return r}function gh(e,t){const n=mh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var _h={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function vh(e,t){const n=_h[t];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Hi=new B;function Mh(){return ke.getLuminanceCoefficients(Hi),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Hi.x.toFixed(4)}, ${Hi.y.toFixed(4)}, ${Hi.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sh(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(li).join(`
`)}function xh(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Eh(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function li(e){return e!==""}function qs(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ys(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(e){return e.replace(yh,Ah)}var Th=new Map;function Ah(e,t){let n=De[t];if(n===void 0){const i=Th.get(t);if(i!==void 0)n=De[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hr(n)}var bh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ks(e){return e.replace(bh,wh)}function wh(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function js(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Rh={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Ch(e){return Rh[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ph={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Ih(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Ph[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lh={302:"ENVMAP_MODE_REFRACTION"};function Dh(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Lh[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uh={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Nh(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Uh[e.combine]||"ENVMAP_BLENDING_NONE"}function Fh(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Oh(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Ch(n),l=Ih(n),u=Dh(n),f=Nh(n),h=Fh(n),_=Sh(n),M=xh(s),S=r.createProgram();let p,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(li).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(li).join(`
`),d.length>0&&(d+=`
`)):(p=[js(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),d=[js(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?De.tonemapping_pars_fragment:"",n.toneMapping!==0?vh("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,gh("linearToOutputTexel",n.outputColorSpace),Mh(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(li).join(`
`)),a=Hr(a),a=qs(a,n),a=Ys(a,n),o=Hr(o),o=qs(o,n),o=Ys(o,n),a=Ks(a),o=Ks(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=y+p+a,E=y+d+o,L=ks(r,r.VERTEX_SHADER,T),R=ks(r,r.FRAGMENT_SHADER,E);r.attachShader(S,L),r.attachShader(S,R),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(A){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(L)||"",G=r.getShaderInfoLog(R)||"",z=O.trim(),H=W.trim(),U=G.trim();let ne=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,S,L,R);else{const se=Xs(r,L,"vertex"),_e=Xs(r,R,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+se+`
`+_e)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(H===""||U==="")&&($=!1);$&&(A.diagnostics={runnable:ne,programLog:z,vertexShader:{log:H,prefix:p},fragmentShader:{log:U,prefix:d}})}r.deleteShader(L),r.deleteShader(R),g=new Xi(r,S),b=Eh(r,S)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(S,dh)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fh++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=R,this}var Bh=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zh(e),t.set(e,n)),n}},zh=class{constructor(e){this.id=Bh++,this.code=e,this.usedTimes=0}};function Gh(e,t,n,i,r,s){const a=new ma,o=new Vh,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,b,Y,A,O){const W=A.fog,G=O.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=t.get(g.envMap||z,H),ne=U&&U.mapping===306?U.image.height:null,$=_[g.type];g.precision!==null&&(h=i.getMaxPrecision(g.precision),h!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=se!==void 0?se.length:0;let de=0;G.morphAttributes.position!==void 0&&(de=1),G.morphAttributes.normal!==void 0&&(de=2),G.morphAttributes.color!==void 0&&(de=3);let $e,Ye,q,ie;if($){const qe=Ht[$];$e=qe.vertexShader,Ye=qe.fragmentShader}else $e=g.vertexShader,Ye=g.fragmentShader,o.update(g),q=o.getVertexShaderID(g),ie=o.getFragmentShaderID(g);const pe=e.getRenderTarget(),ce=e.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,Le=!!g.map,je=!!g.matcap,Be=!!U,ot=!!g.aoMap,lt=!!g.lightMap,gt=!!g.bumpMap,w=!!g.normalMap,pt=!!g.displacementMap,Ue=!!g.emissiveMap,Qe=!!g.metalnessMap,Se=!!g.roughnessMap,Ze=g.anisotropy>0,x=g.clearcoat>0,m=g.dispersion>0,N=g.iridescence>0,X=g.sheen>0,Z=g.transmission>0,k=Ze&&!!g.anisotropyMap,ue=x&&!!g.clearcoatMap,ae=x&&!!g.clearcoatNormalMap,xe=x&&!!g.clearcoatRoughnessMap,Re=N&&!!g.iridescenceMap,J=N&&!!g.iridescenceThicknessMap,Q=X&&!!g.sheenColorMap,me=X&&!!g.sheenRoughnessMap,Te=!!g.specularMap,he=!!g.specularColorMap,Ne=!!g.specularIntensityMap,C=Z&&!!g.transmissionMap,re=Z&&!!g.thicknessMap,ee=!!g.gradientMap,Me=!!g.alphaMap,K=g.alphaTest>0,j=!!g.alphaHash,ve=!!g.extensions;let Ae=0;g.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ae=e.toneMapping);const ct={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:$e,fragmentShader:Ye,defines:g.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,outputColorSpace:pe===null?e.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ui,alphaToCoverage:!!g.alphaToCoverage,map:Le,matcap:je,envMap:Be,envMapMode:Be&&U.mapping,envMapCubeUVHeight:ne,aoMap:ot,lightMap:lt,bumpMap:gt,normalMap:w,displacementMap:pt,emissiveMap:Ue,normalMapObjectSpace:w&&g.normalMapType===1,normalMapTangentSpace:w&&g.normalMapType===0,metalnessMap:Qe,roughnessMap:Se,anisotropy:Ze,anisotropyMap:k,clearcoat:x,clearcoatMap:ue,clearcoatNormalMap:ae,clearcoatRoughnessMap:xe,dispersion:m,iridescence:N,iridescenceMap:Re,iridescenceThicknessMap:J,sheen:X,sheenColorMap:Q,sheenRoughnessMap:me,specularMap:Te,specularColorMap:he,specularIntensityMap:Ne,transmission:Z,transmissionMap:C,thicknessMap:re,gradientMap:ee,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:Me,alphaTest:K,alphaHash:j,combine:g.combine,mapUv:Le&&M(g.map.channel),aoMapUv:ot&&M(g.aoMap.channel),lightMapUv:lt&&M(g.lightMap.channel),bumpMapUv:gt&&M(g.bumpMap.channel),normalMapUv:w&&M(g.normalMap.channel),displacementMapUv:pt&&M(g.displacementMap.channel),emissiveMapUv:Ue&&M(g.emissiveMap.channel),metalnessMapUv:Qe&&M(g.metalnessMap.channel),roughnessMapUv:Se&&M(g.roughnessMap.channel),anisotropyMapUv:k&&M(g.anisotropyMap.channel),clearcoatMapUv:ue&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:ae&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:me&&M(g.sheenRoughnessMap.channel),specularMapUv:Te&&M(g.specularMap.channel),specularColorMapUv:he&&M(g.specularColorMap.channel),specularIntensityMapUv:Ne&&M(g.specularIntensityMap.channel),transmissionMapUv:C&&M(g.transmissionMap.channel),thicknessMapUv:re&&M(g.thicknessMap.channel),alphaMapUv:Me&&M(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(w||Ze),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Le||Me),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||G.attributes.normal===void 0&&w===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&Y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Le&&g.map.isVideoTexture===!0&&ke.getTransfer(g.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Ue&&g.emissiveMap.isVideoTexture===!0&&ke.getTransfer(g.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ve&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&g.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const Y in g.defines)b.push(Y),b.push(g.defines[Y]);return g.isRawShaderMaterial===!1&&(d(b,g),y(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function y(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),g.push(a.mask)}function T(g){const b=_[g.type];let Y;if(b){const A=Ht[b];Y=xl.clone(A.uniforms)}else Y=g.uniforms;return Y}function E(g,b){let Y=u.get(b);return Y!==void 0?++Y.usedTimes:(Y=new Oh(e,b,g,r),l.push(Y),u.set(b,Y)),Y}function L(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:L,releaseShaderCache:R,programs:l,dispose:P}}function Hh(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function kh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Zs(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Js(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,M,S,p,d){let y=e[t];return y===void 0?(y={id:h.id,object:h,geometry:_,material:M,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},e[t]=y):(y.id=h.id,y.object=h,y.geometry=_,y.material=M,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=p,y.group=d),t++,y}function c(h,_,M,S,p,d){const y=o(h,_,M,S,p,d);M.transmission>0?i.push(y):M.transparent===!0?r.push(y):n.push(y)}function l(h,_,M,S,p,d){const y=o(h,_,M,S,p,d);M.transmission>0?i.unshift(y):M.transparent===!0?r.unshift(y):n.unshift(y)}function u(h,_){n.length>1&&n.sort(h||kh),i.length>1&&i.sort(_||Zs),r.length>1&&r.sort(_||Zs)}function f(){for(let h=t,_=e.length;h<_;h++){const M=e[h];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Wh(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new Js,e.set(i,[a])):r>=s.length?(a=new Js,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xh(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Ge};break;case"SpotLight":n={position:new B,direction:new B,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function qh(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Yh=0;function Kh(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function jh(e){const t=new Xh,n=qh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new ht,a=new ht;function o(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let _=0,M=0,S=0,p=0,d=0,y=0,T=0,E=0,L=0,R=0,P=0;l.sort(Kh);for(let b=0,Y=l.length;b<Y;b++){const A=l[b],O=A.color,W=A.intensity,G=A.distance;let z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===1030?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=O.r*W,f+=O.g*W,h+=O.b*W;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],W);P++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const U=A.shadow,ne=n.get(A);ne.shadowIntensity=U.intensity,ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,i.directionalShadow[_]=ne,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=A.shadow.matrix,y++}i.directional[_]=H,_++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(O).multiplyScalar(W),H.distance=G,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[S]=H;const U=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,U.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[S]=U.matrix,A.castShadow){const ne=n.get(A);ne.shadowIntensity=U.intensity,ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=z,E++}S++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(O).multiplyScalar(W),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=H,p++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const U=A.shadow,ne=n.get(A);ne.shadowIntensity=U.intensity,ne.shadowBias=U.bias,ne.shadowNormalBias=U.normalBias,ne.shadowRadius=U.radius,ne.shadowMapSize=U.mapSize,ne.shadowCameraNear=U.camera.near,ne.shadowCameraFar=U.camera.far,i.pointShadow[M]=ne,i.pointShadowMap[M]=z,i.pointShadowMatrix[M]=A.shadow.matrix,T++}i.point[M]=H,M++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(W),H.groundColor.copy(A.groundColor).multiplyScalar(W),i.hemi[d]=H,d++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const g=i.hash;(g.directionalLength!==_||g.pointLength!==M||g.spotLength!==S||g.rectAreaLength!==p||g.hemiLength!==d||g.numDirectionalShadows!==y||g.numPointShadows!==T||g.numSpotShadows!==E||g.numSpotMaps!==L||g.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=p,i.point.length=M,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,g.directionalLength=_,g.pointLength=M,g.spotLength=S,g.rectAreaLength=p,g.hemiLength=d,g.numDirectionalShadows=y,g.numPointShadows=T,g.numSpotShadows=E,g.numSpotMaps=L,g.numLightProbes=P,i.version=Yh++)}function c(l,u){let f=0,h=0,_=0,M=0,S=0;const p=u.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const T=l[d];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),_++}else if(T.isRectAreaLight){const E=i.rectArea[M];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:o,setupView:c,state:i}}function $s(e){const t=new jh(e),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){t.setup(n)}function c(u){t.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Zh(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new $s(e),t.set(r,[o])):s>=a.length?(o=new $s(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Jh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$h=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qh=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],eu=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Qs=new ht,oi=new B,Nr=new B;function tu(e,t,n){let i=new Yr;const r=new Xe,s=new Xe,a=new at,o=new Al,c=new bl,l={},u=n.maxTextureSize,f={0:1,1:0,2:2},h=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Jh,fragmentShader:$h}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const M=new fn;M.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new St(M,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(R,P,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===2&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const b=e.getRenderTarget(),Y=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),O=e.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=d!==this.type;W&&P.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(z=>z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,z=R.length;G<z;G++){const H=R[G],U=H.shadow;if(U===void 0){Ie("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ne=U.getFrameExtents();r.multiply(ne),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,U.mapSize.y=s.y));const $=e.state.buffers.depth.getReversed();if(U.camera._reversedDepth=$,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===3){if(H.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new kt(r.x,r.y,{format:qi,type:An,minFilter:wt,magFilter:wt,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new di(r.x,r.y,$i),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=hi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Et,U.map.depthTexture.magFilter=Et}else H.isPointLight?(U.map=new Da(r.x),U.map.depthTexture=new vl(r.x,Tn)):(U.map=new kt(r.x,r.y),U.map.depthTexture=new di(r.x,r.y,Tn)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=hi,this.type===1?(U.map.depthTexture.compareFunction=$?518:515,U.map.depthTexture.minFilter=wt,U.map.depthTexture.magFilter=wt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Et,U.map.depthTexture.magFilter=Et);U.camera.updateProjectionMatrix()}const se=U.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<se;_e++){if(U.map.isWebGLCubeRenderTarget)e.setRenderTarget(U.map,_e),e.clear();else{_e===0&&(e.setRenderTarget(U.map),e.clear());const de=U.getViewport(_e);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),O.viewport(a)}if(H.isPointLight){const de=U.camera,$e=U.matrix,Ye=H.distance||de.far;Ye!==de.far&&(de.far=Ye,de.updateProjectionMatrix()),oi.setFromMatrixPosition(H.matrixWorld),de.position.copy(oi),Nr.copy(de.position),Nr.add(Qh[_e]),de.up.copy(eu[_e]),de.lookAt(Nr),de.updateMatrixWorld(),$e.makeTranslation(-oi.x,-oi.y,-oi.z),Qs.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Qs,de.coordinateSystem,de.reversedDepth)}else U.updateMatrices(H);i=U.getFrustum(),E(P,g,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===3&&y(U,g),U.needsUpdate=!1}d=this.type,p.needsUpdate=!1,e.setRenderTarget(b,Y,A)};function y(R,P){const g=t.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kt(r.x,r.y,{format:qi,type:An})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(P,null,g,h,S,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(P,null,g,_,S,null)}function T(R,P,g,b){let Y=null;const A=g.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)Y=A;else if(Y=g.isPointLight===!0?c:o,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=Y.uuid,W=P.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let z=G[W];z===void 0&&(z=Y.clone(),G[W]=z,P.addEventListener("dispose",L)),Y=z}if(Y.visible=P.visible,Y.wireframe=P.wireframe,b===3?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:f[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,g.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const O=e.properties.get(Y);O.light=g}return Y}function E(R,P,g,b,Y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&Y===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,R.matrixWorld);const O=t.update(R),W=R.material;if(Array.isArray(W)){const G=O.groups;for(let z=0,H=G.length;z<H;z++){const U=G[z],ne=W[U.materialIndex];if(ne&&ne.visible){const $=T(R,ne,b,Y);R.onBeforeShadow(e,R,P,g,O,$,U),e.renderBufferDirect(g,null,O,$,R,U),R.onAfterShadow(e,R,P,g,O,$,U)}}}else if(W.visible){const G=T(R,W,b,Y);R.onBeforeShadow(e,R,P,g,O,G,null),e.renderBufferDirect(g,null,O,G,R,null),R.onAfterShadow(e,R,P,g,O,G,null)}}const A=R.children;for(let O=0,W=A.length;O<W;O++)E(A[O],P,g,b,Y)}function L(R){R.target.removeEventListener("dispose",L);for(const P in l){const g=l[P],b=R.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function nu(e,t){function n(){let C=!1;const re=new at;let ee=null;const Me=new at(0,0,0,0);return{setMask:function(K){ee!==K&&!C&&(e.colorMask(K,K,K,K),ee=K)},setLocked:function(K){C=K},setClear:function(K,j,ve,Ae,ct){ct===!0&&(K*=Ae,j*=Ae,ve*=Ae),re.set(K,j,ve,Ae),Me.equals(re)===!1&&(e.clearColor(K,j,ve,Ae),Me.copy(re))},reset:function(){C=!1,ee=null,Me.set(-1,0,0,0)}}}function i(){let C=!1,re=!1,ee=null,Me=null,K=null;return{setReversed:function(j){if(re!==j){const ve=t.get("EXT_clip_control");j?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=j;const Ae=K;K=null,this.setClear(Ae)}},getReversed:function(){return re},setTest:function(j){j?pe(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(j){ee!==j&&!C&&(e.depthMask(j),ee=j)},setFunc:function(j){if(re&&(j=Xo[j]),Me!==j){switch(j){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Me=j}},setLocked:function(j){C=j},setClear:function(j){K!==j&&(K=j,re&&(j=1-j),e.clearDepth(j))},reset:function(){C=!1,ee=null,Me=null,K=null,re=!1}}}function r(){let C=!1,re=null,ee=null,Me=null,K=null,j=null,ve=null,Ae=null,ct=null;return{setTest:function(qe){C||(qe?pe(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(qe){re!==qe&&!C&&(e.stencilMask(qe),re=qe)},setFunc:function(qe,Yt,Bt){(ee!==qe||Me!==Yt||K!==Bt)&&(e.stencilFunc(qe,Yt,Bt),ee=qe,Me=Yt,K=Bt)},setOp:function(qe,Yt,Bt){(j!==qe||ve!==Yt||Ae!==Bt)&&(e.stencilOp(qe,Yt,Bt),j=qe,ve=Yt,Ae=Bt)},setLocked:function(qe){C=qe},setClear:function(qe){ct!==qe&&(e.clearStencil(qe),ct=qe)},reset:function(){C=!1,re=null,ee=null,Me=null,K=null,j=null,ve=null,Ae=null,ct=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,_=[],M=null,S=!1,p=null,d=null,y=null,T=null,E=null,L=null,R=null,P=new Ge(0,0,0),g=0,b=!1,Y=null,A=null,O=null,W=null,G=null;const z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const ne=e.getParameter(e.VERSION);ne.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=U>=1):ne.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=U>=2);let $=null,se={};const _e=e.getParameter(e.SCISSOR_BOX),de=e.getParameter(e.VIEWPORT),$e=new at().fromArray(_e),Ye=new at().fromArray(de);function q(C,re,ee,Me){const K=new Uint8Array(4),j=e.createTexture();e.bindTexture(C,j),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<ee;ve++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,K):e.texImage2D(re+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,K);return j}const ie={};ie[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(e.DEPTH_TEST),a.setFunc(3),gt(!1),w(1),pe(e.CULL_FACE),ot(0);function pe(C){u[C]!==!0&&(e.enable(C),u[C]=!0)}function ce(C){u[C]!==!1&&(e.disable(C),u[C]=!1)}function be(C,re){return f[C]!==re?(e.bindFramebuffer(C,re),f[C]=re,C===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=re),C===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=re),!0):!1}function we(C,re){let ee=_,Me=!1;if(C){ee=h.get(re),ee===void 0&&(ee=[],h.set(re,ee));const K=C.textures;if(ee.length!==K.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let j=0,ve=K.length;j<ve;j++)ee[j]=e.COLOR_ATTACHMENT0+j;ee.length=K.length,Me=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,Me=!0);Me&&e.drawBuffers(ee)}function Le(C){return M!==C?(e.useProgram(C),M=C,!0):!1}const je={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};je[103]=e.MIN,je[104]=e.MAX;const Be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ot(C,re,ee,Me,K,j,ve,Ae,ct,qe){if(C===0){S===!0&&(ce(e.BLEND),S=!1);return}if(S===!1&&(pe(e.BLEND),S=!0),C!==5){if(C!==p||qe!==b){if((d!==100||E!==100)&&(e.blendEquation(e.FUNC_ADD),d=100,E=100),qe)switch(C){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",C);break}else switch(C){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",C);break}y=null,T=null,L=null,R=null,P.set(0,0,0),g=0,p=C,b=qe}return}K=K||re,j=j||ee,ve=ve||Me,(re!==d||K!==E)&&(e.blendEquationSeparate(je[re],je[K]),d=re,E=K),(ee!==y||Me!==T||j!==L||ve!==R)&&(e.blendFuncSeparate(Be[ee],Be[Me],Be[j],Be[ve]),y=ee,T=Me,L=j,R=ve),(Ae.equals(P)===!1||ct!==g)&&(e.blendColor(Ae.r,Ae.g,Ae.b,ct),P.copy(Ae),g=ct),p=C,b=!1}function lt(C,re){C.side===2?ce(e.CULL_FACE):pe(e.CULL_FACE);let ee=C.side===1;re&&(ee=!ee),gt(ee),C.blending===1&&C.transparent===!1?ot(0):ot(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const Me=C.stencilWrite;o.setTest(Me),Me&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function gt(C){Y!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),Y=C)}function w(C){C!==0?(pe(e.CULL_FACE),C!==A&&(C===1?e.cullFace(e.BACK):C===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ce(e.CULL_FACE),A=C}function pt(C){C!==O&&(H&&e.lineWidth(C),O=C)}function Ue(C,re,ee){C?(pe(e.POLYGON_OFFSET_FILL),(W!==re||G!==ee)&&(W=re,G=ee,a.getReversed()&&(re=-re),e.polygonOffset(re,ee))):ce(e.POLYGON_OFFSET_FILL)}function Qe(C){C?pe(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function Se(C){C===void 0&&(C=e.TEXTURE0+z-1),$!==C&&(e.activeTexture(C),$=C)}function Ze(C,re,ee){ee===void 0&&($===null?ee=e.TEXTURE0+z-1:ee=$);let Me=se[ee];Me===void 0&&(Me={type:void 0,texture:void 0},se[ee]=Me),(Me.type!==C||Me.texture!==re)&&($!==ee&&(e.activeTexture(ee),$=ee),e.bindTexture(C,re||ie[C]),Me.type=C,Me.texture=re)}function x(){const C=se[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function m(){try{e.compressedTexImage2D(...arguments)}catch(C){Pe("WebGLState:",C)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(C){Pe("WebGLState:",C)}}function X(){try{e.texSubImage2D(...arguments)}catch(C){Pe("WebGLState:",C)}}function Z(){try{e.texSubImage3D(...arguments)}catch(C){Pe("WebGLState:",C)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Pe("WebGLState:",C)}}function ue(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Pe("WebGLState:",C)}}function ae(){try{e.texStorage2D(...arguments)}catch(C){Pe("WebGLState:",C)}}function xe(){try{e.texStorage3D(...arguments)}catch(C){Pe("WebGLState:",C)}}function Re(){try{e.texImage2D(...arguments)}catch(C){Pe("WebGLState:",C)}}function J(){try{e.texImage3D(...arguments)}catch(C){Pe("WebGLState:",C)}}function Q(C){$e.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),$e.copy(C))}function me(C){Ye.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),Ye.copy(C))}function Te(C,re){let ee=l.get(re);ee===void 0&&(ee=new WeakMap,l.set(re,ee));let Me=ee.get(C);Me===void 0&&(Me=e.getUniformBlockIndex(re,C.name),ee.set(C,Me))}function he(C,re){const ee=l.get(re).get(C);c.get(re)!==ee&&(e.uniformBlockBinding(re,ee,C.__bindingPointIndex),c.set(re,ee))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},$=null,se={},f={},h=new WeakMap,_=[],M=null,S=!1,p=null,d=null,y=null,T=null,E=null,L=null,R=null,P=new Ge(0,0,0),g=0,b=!1,Y=null,A=null,O=null,W=null,G=null,$e.set(0,0,e.canvas.width,e.canvas.height),Ye.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:ce,bindFramebuffer:be,drawBuffers:we,useProgram:Le,setBlending:ot,setMaterial:lt,setFlipSided:gt,setCullFace:w,setLineWidth:pt,setPolygonOffset:Ue,setScissorTest:Qe,activeTexture:Se,bindTexture:Ze,unbindTexture:x,compressedTexImage2D:m,compressedTexImage3D:N,texImage2D:Re,texImage3D:J,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:xe,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:ue,scissor:Q,viewport:me,reset:Ne}}function iu(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(x,m){return _?new OffscreenCanvas(x,m):Zi("canvas")}function S(x,m,N){let X=1;const Z=Ze(x);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const k=Math.floor(X*Z.width),ue=Math.floor(X*Z.height);f===void 0&&(f=M(k,ue));const ae=m?M(k,ue):f;return ae.width=k,ae.height=ue,ae.getContext("2d").drawImage(x,0,0,k,ue),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+ue+")."),ae}else return"data"in x&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),x;return x}function p(x){return x.generateMipmaps}function d(x){e.generateMipmap(x)}function y(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(x,m,N,X,Z=!1){if(x!==null){if(e[x]!==void 0)return e[x];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let k=m;if(m===e.RED&&(N===e.FLOAT&&(k=e.R32F),N===e.HALF_FLOAT&&(k=e.R16F),N===e.UNSIGNED_BYTE&&(k=e.R8)),m===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(k=e.R8UI),N===e.UNSIGNED_SHORT&&(k=e.R16UI),N===e.UNSIGNED_INT&&(k=e.R32UI),N===e.BYTE&&(k=e.R8I),N===e.SHORT&&(k=e.R16I),N===e.INT&&(k=e.R32I)),m===e.RG&&(N===e.FLOAT&&(k=e.RG32F),N===e.HALF_FLOAT&&(k=e.RG16F),N===e.UNSIGNED_BYTE&&(k=e.RG8)),m===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(k=e.RG8UI),N===e.UNSIGNED_SHORT&&(k=e.RG16UI),N===e.UNSIGNED_INT&&(k=e.RG32UI),N===e.BYTE&&(k=e.RG8I),N===e.SHORT&&(k=e.RG16I),N===e.INT&&(k=e.RG32I)),m===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(k=e.RGB8UI),N===e.UNSIGNED_SHORT&&(k=e.RGB16UI),N===e.UNSIGNED_INT&&(k=e.RGB32UI),N===e.BYTE&&(k=e.RGB8I),N===e.SHORT&&(k=e.RGB16I),N===e.INT&&(k=e.RGB32I)),m===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),N===e.UNSIGNED_INT&&(k=e.RGBA32UI),N===e.BYTE&&(k=e.RGBA8I),N===e.SHORT&&(k=e.RGBA16I),N===e.INT&&(k=e.RGBA32I)),m===e.RGB&&(N===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),m===e.RGBA){const ue=Z?Ki:ke.getTransfer(X);N===e.FLOAT&&(k=e.RGBA32F),N===e.HALF_FLOAT&&(k=e.RGBA16F),N===e.UNSIGNED_BYTE&&(k=ue==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function E(x,m){let N;return x?m===null||m===1014||m===1020?N=e.DEPTH24_STENCIL8:m===1015?N=e.DEPTH32F_STENCIL8:m===1012&&(N=e.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===1014||m===1020?N=e.DEPTH_COMPONENT24:m===1015?N=e.DEPTH_COMPONENT32F:m===1012&&(N=e.DEPTH_COMPONENT16),N}function L(x,m){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==1003&&x.minFilter!==1006?Math.log2(Math.max(m.width,m.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?m.mipmaps.length:1}function R(x){const m=x.target;m.removeEventListener("dispose",R),g(m),m.isVideoTexture&&u.delete(m)}function P(x){const m=x.target;m.removeEventListener("dispose",P),Y(m)}function g(x){const m=i.get(x);if(m.__webglInit===void 0)return;const N=x.source,X=h.get(N);if(X){const Z=X[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(x),Object.keys(X).length===0&&h.delete(N)}i.remove(x)}function b(x){const m=i.get(x);e.deleteTexture(m.__webglTexture);const N=x.source,X=h.get(N);delete X[m.__cacheKey],a.memory.textures--}function Y(x){const m=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(m.__webglFramebuffer[X]))for(let Z=0;Z<m.__webglFramebuffer[X].length;Z++)e.deleteFramebuffer(m.__webglFramebuffer[X][Z]);else e.deleteFramebuffer(m.__webglFramebuffer[X]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[X])}else{if(Array.isArray(m.__webglFramebuffer))for(let X=0;X<m.__webglFramebuffer.length;X++)e.deleteFramebuffer(m.__webglFramebuffer[X]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let X=0;X<m.__webglColorRenderbuffer.length;X++)m.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[X]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const N=x.textures;for(let X=0,Z=N.length;X<Z;X++){const k=i.get(N[X]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(N[X])}i.remove(x)}let A=0;function O(){A=0}function W(){const x=A;return x>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),A+=1,x}function G(x){const m=[];return m.push(x.wrapS),m.push(x.wrapT),m.push(x.wrapR||0),m.push(x.magFilter),m.push(x.minFilter),m.push(x.anisotropy),m.push(x.internalFormat),m.push(x.format),m.push(x.type),m.push(x.generateMipmaps),m.push(x.premultiplyAlpha),m.push(x.flipY),m.push(x.unpackAlignment),m.push(x.colorSpace),m.join()}function z(x,m){const N=i.get(x);if(x.isVideoTexture&&Qe(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&N.__version!==x.version){const X=x.image;if(X===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,x,m);return}}else x.isExternalTexture&&(N.__webglTexture=x.sourceTexture?x.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+m)}function H(x,m){const N=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){ie(N,x,m);return}else x.isExternalTexture&&(N.__webglTexture=x.sourceTexture?x.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+m)}function U(x,m){const N=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){ie(N,x,m);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+m)}function ne(x,m){const N=i.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&N.__version!==x.version){pe(N,x,m);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+m)}const $={[Fr]:e.REPEAT,[Qt]:e.CLAMP_TO_EDGE,[Or]:e.MIRRORED_REPEAT},se={[Et]:e.NEAREST,[Xa]:e.NEAREST_MIPMAP_NEAREST,[qa]:e.NEAREST_MIPMAP_LINEAR,[wt]:e.LINEAR,[Ya]:e.LINEAR_MIPMAP_NEAREST,[Wr]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(x,m){if(m.type===1015&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===1006||m.magFilter===1007||m.magFilter===1005||m.magFilter===1008||m.minFilter===1006||m.minFilter===1007||m.minFilter===1005||m.minFilter===1008)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,$[m.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,$[m.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,$[m.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,se[m.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,se[m.minFilter]),m.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,_e[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===1003||m.minFilter!==1005&&m.minFilter!==1008||m.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function $e(x,m){let N=!1;x.__webglInit===void 0&&(x.__webglInit=!0,m.addEventListener("dispose",R));const X=m.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const k=G(m);if(k!==x.__cacheKey){Z[k]===void 0&&(Z[k]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[k].usedTimes++;const ue=Z[x.__cacheKey];ue!==void 0&&(Z[x.__cacheKey].usedTimes--,ue.usedTimes===0&&b(m)),x.__cacheKey=k,x.__webglTexture=Z[k].texture}return N}function Ye(x,m,N){return Math.floor(Math.floor(x/N)/m)}function q(x,m,N,X){const k=x.updateRanges;if(k.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,N,X,m.data);else{k.sort((J,Q)=>J.start-Q.start);let ue=0;for(let J=1;J<k.length;J++){const Q=k[ue],me=k[J],Te=Q.start+Q.count,he=Ye(me.start,m.width,4),Ne=Ye(Q.start,m.width,4);me.start<=Te+1&&he===Ne&&Ye(me.start+me.count-1,m.width,4)===he?Q.count=Math.max(Q.count,me.start+me.count-Q.start):(++ue,k[ue]=me)}k.length=ue+1;const ae=e.getParameter(e.UNPACK_ROW_LENGTH),xe=e.getParameter(e.UNPACK_SKIP_PIXELS),Re=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let J=0,Q=k.length;J<Q;J++){const me=k[J],Te=Math.floor(me.start/4),he=Math.ceil(me.count/4),Ne=Te%m.width,C=Math.floor(Te/m.width),re=he,ee=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ne),e.pixelStorei(e.UNPACK_SKIP_ROWS,C),n.texSubImage2D(e.TEXTURE_2D,0,Ne,C,re,ee,N,X,m.data)}x.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ae),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(e.UNPACK_SKIP_ROWS,Re)}}function ie(x,m,N){let X=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(X=e.TEXTURE_3D);const Z=$e(x,m),k=m.source;n.bindTexture(X,x.__webglTexture,e.TEXTURE0+N);const ue=i.get(k);if(k.version!==ue.__version||Z===!0){n.activeTexture(e.TEXTURE0+N);const ae=ke.getPrimaries(ke.workingColorSpace),xe=m.colorSpace===""?null:ke.getPrimaries(m.colorSpace),Re=m.colorSpace===""||ae===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let J=S(m.image,!1,r.maxTextureSize);J=Se(m,J);const Q=s.convert(m.format,m.colorSpace),me=s.convert(m.type);let Te=T(m.internalFormat,Q,me,m.colorSpace,m.isVideoTexture);de(X,m);let he;const Ne=m.mipmaps,C=m.isVideoTexture!==!0,re=ue.__version===void 0||Z===!0,ee=k.dataReady,Me=L(m,J);if(m.isDepthTexture)Te=E(m.format===ra,m.type),re&&(C?n.texStorage2D(e.TEXTURE_2D,1,Te,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,Te,J.width,J.height,0,Q,me,null));else if(m.isDataTexture)if(Ne.length>0){C&&re&&n.texStorage2D(e.TEXTURE_2D,Me,Te,Ne[0].width,Ne[0].height);for(let K=0,j=Ne.length;K<j;K++)he=Ne[K],C?ee&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,Q,me,he.data):n.texImage2D(e.TEXTURE_2D,K,Te,he.width,he.height,0,Q,me,he.data);m.generateMipmaps=!1}else C?(re&&n.texStorage2D(e.TEXTURE_2D,Me,Te,J.width,J.height),ee&&q(m,J,Q,me)):n.texImage2D(e.TEXTURE_2D,0,Te,J.width,J.height,0,Q,me,J.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){C&&re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Me,Te,Ne[0].width,Ne[0].height,J.depth);for(let K=0,j=Ne.length;K<j;K++)if(he=Ne[K],m.format!==1023)if(Q!==null)if(C){if(ee)if(m.layerUpdates.size>0){const ve=Ps(he.width,he.height,m.format,m.type);for(const Ae of m.layerUpdates){const ct=he.data.subarray(Ae*ve/he.data.BYTES_PER_ELEMENT,(Ae+1)*ve/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,Ae,he.width,he.height,1,Q,ct)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,J.depth,Q,he.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,Te,he.width,he.height,J.depth,0,he.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ee&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,J.depth,Q,me,he.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,Te,he.width,he.height,J.depth,0,Q,me,he.data)}else{C&&re&&n.texStorage2D(e.TEXTURE_2D,Me,Te,Ne[0].width,Ne[0].height);for(let K=0,j=Ne.length;K<j;K++)he=Ne[K],m.format!==1023?Q!==null?C?ee&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,Q,he.data):n.compressedTexImage2D(e.TEXTURE_2D,K,Te,he.width,he.height,0,he.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ee&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,Q,me,he.data):n.texImage2D(e.TEXTURE_2D,K,Te,he.width,he.height,0,Q,me,he.data)}else if(m.isDataArrayTexture)if(C){if(re&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Me,Te,J.width,J.height,J.depth),ee)if(m.layerUpdates.size>0){const K=Ps(J.width,J.height,m.format,m.type);for(const j of m.layerUpdates){const ve=J.data.subarray(j*K/J.data.BYTES_PER_ELEMENT,(j+1)*K/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,Q,me,ve)}m.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Q,me,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Q,me,J.data);else if(m.isData3DTexture)C?(re&&n.texStorage3D(e.TEXTURE_3D,Me,Te,J.width,J.height,J.depth),ee&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Q,me,J.data)):n.texImage3D(e.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Q,me,J.data);else if(m.isFramebufferTexture){if(re)if(C)n.texStorage2D(e.TEXTURE_2D,Me,Te,J.width,J.height);else{let K=J.width,j=J.height;for(let ve=0;ve<Me;ve++)n.texImage2D(e.TEXTURE_2D,ve,Te,K,j,0,Q,me,null),K>>=1,j>>=1}}else if(Ne.length>0){if(C&&re){const K=Ze(Ne[0]);n.texStorage2D(e.TEXTURE_2D,Me,Te,K.width,K.height)}for(let K=0,j=Ne.length;K<j;K++)he=Ne[K],C?ee&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,Q,me,he):n.texImage2D(e.TEXTURE_2D,K,Te,Q,me,he);m.generateMipmaps=!1}else if(C){if(re){const K=Ze(J);n.texStorage2D(e.TEXTURE_2D,Me,Te,K.width,K.height)}ee&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q,me,J)}else n.texImage2D(e.TEXTURE_2D,0,Te,Q,me,J);p(m)&&d(X),ue.__version=k.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function pe(x,m,N){if(m.image.length!==6)return;const X=$e(x,m),Z=m.source;n.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+N);const k=i.get(Z);if(Z.version!==k.__version||X===!0){n.activeTexture(e.TEXTURE0+N);const ue=ke.getPrimaries(ke.workingColorSpace),ae=m.colorSpace===""?null:ke.getPrimaries(m.colorSpace),xe=m.colorSpace===""||ue===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=m.isCompressedTexture||m.image[0].isCompressedTexture,J=m.image[0]&&m.image[0].isDataTexture,Q=[];for(let j=0;j<6;j++)!Re&&!J?Q[j]=S(m.image[j],!0,r.maxCubemapSize):Q[j]=J?m.image[j].image:m.image[j],Q[j]=Se(m,Q[j]);const me=Q[0],Te=s.convert(m.format,m.colorSpace),he=s.convert(m.type),Ne=T(m.internalFormat,Te,he,m.colorSpace),C=m.isVideoTexture!==!0,re=k.__version===void 0||X===!0,ee=Z.dataReady;let Me=L(m,me);de(e.TEXTURE_CUBE_MAP,m);let K;if(Re){C&&re&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Me,Ne,me.width,me.height);for(let j=0;j<6;j++){K=Q[j].mipmaps;for(let ve=0;ve<K.length;ve++){const Ae=K[ve];m.format!==1023?Te!==null?C?ee&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,Ne,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ae.width,Ae.height,Te,he,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,Ne,Ae.width,Ae.height,0,Te,he,Ae.data)}}}else{if(K=m.mipmaps,C&&re){K.length>0&&Me++;const j=Ze(Q[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Me,Ne,j.width,j.height)}for(let j=0;j<6;j++)if(J){C?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Q[j].width,Q[j].height,Te,he,Q[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,Q[j].width,Q[j].height,0,Te,he,Q[j].data);for(let ve=0;ve<K.length;ve++){const Ae=K[ve].image[j].image;C?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Ae.width,Ae.height,Te,he,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,Ne,Ae.width,Ae.height,0,Te,he,Ae.data)}}else{C?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,he,Q[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,Te,he,Q[j]);for(let ve=0;ve<K.length;ve++){const Ae=K[ve];C?ee&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Te,he,Ae.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,Ne,Te,he,Ae.image[j])}}}p(m)&&d(e.TEXTURE_CUBE_MAP),k.__version=Z.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function ce(x,m,N,X,Z,k){const ue=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),xe=T(N.internalFormat,ue,ae,N.colorSpace),Re=i.get(m),J=i.get(N);if(J.__renderTarget=m,!Re.__hasExternalTextures){const Q=Math.max(1,m.width>>k),me=Math.max(1,m.height>>k);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,k,xe,Q,me,m.depth,0,ue,ae,null):n.texImage2D(Z,k,xe,Q,me,0,ue,ae,null)}n.bindFramebuffer(e.FRAMEBUFFER,x),Ue(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,Z,J.__webglTexture,0,pt(m)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,Z,J.__webglTexture,k),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(x,m,N){if(e.bindRenderbuffer(e.RENDERBUFFER,x),m.depthBuffer){const X=m.depthTexture,Z=X&&X.isDepthTexture?X.type:null,k=E(m.stencilBuffer,Z),ue=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ue(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pt(m),k,m.width,m.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,pt(m),k,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,k,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,x)}else{const X=m.textures;for(let Z=0;Z<X.length;Z++){const k=X[Z],ue=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),xe=T(k.internalFormat,ue,ae,k.colorSpace);Ue(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pt(m),xe,m.width,m.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,pt(m),xe,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,xe,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(x,m,N){const X=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,x),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(m.depthTexture);if(Z.__renderTarget=m,(!Z.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),de(e.TEXTURE_CUBE_MAP,m.depthTexture);const Re=s.convert(m.depthTexture.format),J=s.convert(m.depthTexture.type);let Q;m.depthTexture.format===1026?Q=e.DEPTH_COMPONENT24:m.depthTexture.format===1027&&(Q=e.DEPTH24_STENCIL8);for(let me=0;me<6;me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Q,m.width,m.height,0,Re,J,null)}}else z(m.depthTexture,0);const k=Z.__webglTexture,ue=pt(m),ae=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,xe=m.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===1026)Ue(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ae,k,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ae,k,0);else if(m.depthTexture.format===1027)Ue(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ae,k,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ae,k,0);else throw new Error("Unknown depthTexture format")}function Le(x){const m=i.get(x),N=x.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==x.depthTexture){const X=x.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),X){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=X}if(x.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)we(m.__webglFramebuffer[X],x,X);else{const X=x.texture.mipmaps;X&&X.length>0?we(m.__webglFramebuffer[0],x,0):we(m.__webglFramebuffer,x,0)}else if(N){m.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[X]),m.__webglDepthbuffer[X]===void 0)m.__webglDepthbuffer[X]=e.createRenderbuffer(),be(m.__webglDepthbuffer[X],x,!1);else{const Z=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,k)}}else{const X=x.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),be(m.__webglDepthbuffer,x,!1);else{const Z=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,k)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(x,m,N){const X=i.get(x);m!==void 0&&ce(X.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&Le(x)}function Be(x){const m=x.texture,N=i.get(x),X=i.get(m);x.addEventListener("dispose",P);const Z=x.textures,k=x.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=m.version,a.memory.textures++),k){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let xe=0;xe<m.mipmaps.length;xe++)N.__webglFramebuffer[ae][xe]=e.createFramebuffer()}else N.__webglFramebuffer[ae]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<m.mipmaps.length;ae++)N.__webglFramebuffer[ae]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(ue)for(let ae=0,xe=Z.length;ae<xe;ae++){const Re=i.get(Z[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=e.createTexture(),a.memory.textures++)}if(x.samples>0&&Ue(x)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const xe=Z[ae];N.__webglColorRenderbuffer[ae]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const Re=s.convert(xe.format,xe.colorSpace),J=s.convert(xe.type),Q=T(xe.internalFormat,Re,J,xe.colorSpace,x.isXRRenderTarget===!0),me=pt(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,Q,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),be(N.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),de(e.TEXTURE_CUBE_MAP,m);for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)ce(N.__webglFramebuffer[ae][xe],x,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe);else ce(N.__webglFramebuffer[ae],x,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(m)&&d(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ae=0,xe=Z.length;ae<xe;ae++){const Re=Z[ae],J=i.get(Re);let Q=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Q=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,J.__webglTexture),de(Q,Re),ce(N.__webglFramebuffer,x,Re,e.COLOR_ATTACHMENT0+ae,Q,0),p(Re)&&d(Q)}n.unbindTexture()}else{let ae=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ae,X.__webglTexture),de(ae,m),m.mipmaps&&m.mipmaps.length>0)for(let xe=0;xe<m.mipmaps.length;xe++)ce(N.__webglFramebuffer[xe],x,m,e.COLOR_ATTACHMENT0,ae,xe);else ce(N.__webglFramebuffer,x,m,e.COLOR_ATTACHMENT0,ae,0);p(m)&&d(ae),n.unbindTexture()}x.depthBuffer&&Le(x)}function ot(x){const m=x.textures;for(let N=0,X=m.length;N<X;N++){const Z=m[N];if(p(Z)){const k=y(x),ue=i.get(Z).__webglTexture;n.bindTexture(k,ue),d(k),n.unbindTexture()}}}const lt=[],gt=[];function w(x){if(x.samples>0){if(Ue(x)===!1){const m=x.textures,N=x.width,X=x.height;let Z=e.COLOR_BUFFER_BIT;const k=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=i.get(x),ae=m.length>1;if(ae)for(let Re=0;Re<m.length;Re++)n.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const xe=x.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Re=0;Re<m.length;Re++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),ae){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]);const J=i.get(m[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,N,X,0,0,N,X,Z,e.NEAREST),c===!0&&(lt.length=0,gt.length=0,lt.push(e.COLOR_ATTACHMENT0+Re),x.depthBuffer&&x.resolveDepthBuffer===!1&&(lt.push(k),gt.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,gt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ae)for(let Re=0;Re<m.length;Re++){n.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]);const J=i.get(m[Re]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const m=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function pt(x){return Math.min(r.maxSamples,x.samples)}function Ue(x){const m=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Qe(x){const m=a.render.frame;u.get(x)!==m&&(u.set(x,m),x.update())}function Se(x,m){const N=x.colorSpace,X=x.format,Z=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||N!=="srgb-linear"&&N!==""&&(ke.getTransfer(N)==="srgb"?(X!==1023||Z!==1009)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",N)),m}function Ze(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=ne,this.rebindTextures=je,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ru(e,t){function n(i,r=""){let s;const a=ke.getTransfer(r);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var su=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,au=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:su,fragmentShader:au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends Jn{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,u=null,f=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",S=new ou,p={},d=t.getContextAttributes();let y=null,T=null;const E=[],L=[],R=new Xe;let P=null;const g=new bt;g.viewport=new at;const b=new bt;b.viewport=new at;const Y=[g,b],A=new Wl;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=E[q];return ie===void 0&&(ie=new dr,E[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=E[q];return ie===void 0&&(ie=new dr,E[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=E[q];return ie===void 0&&(ie=new dr,E[q]=ie),ie.getHandSpace()};function G(q){const ie=L.indexOf(q.inputSource);if(ie===-1)return;const pe=E[ie];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||s),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let q=0;q<E.length;q++){const ie=L[q];ie!==null&&(L[q]=null,E[q].disconnect(ie))}O=null,W=null,S.reset();for(const q in p)delete p[q];e.setRenderTarget(y),h=null,f=null,u=null,i=null,T=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,pe=null,ce=null;d.depth&&(ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?ra:hi,pe=d.stencil?ia:Tn);const be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new kt(f.textureWidth,f.textureHeight,{format:ci,type:un,depthTexture:new di(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new kt(h.framebufferWidth,h.framebufferHeight,{format:ci,type:un,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(q){for(let ie=0;ie<q.removed.length;ie++){const pe=q.removed[ie],ce=L.indexOf(pe);ce>=0&&(L[ce]=null,E[ce].disconnect(pe))}for(let ie=0;ie<q.added.length;ie++){const pe=q.added[ie];let ce=L.indexOf(pe);if(ce===-1){for(let we=0;we<E.length;we++)if(we>=L.length){L.push(pe),ce=we;break}else if(L[we]===null){L[we]=pe,ce=we;break}if(ce===-1)break}const be=E[ce];be&&be.connect(pe)}}const U=new B,ne=new B;function $(q,ie,pe){U.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const ce=U.distanceTo(ne),be=ie.projectionMatrix.elements,we=pe.projectionMatrix.elements,Le=be[14]/(be[10]-1),je=be[14]/(be[10]+1),Be=(be[9]+1)/be[5],ot=(be[9]-1)/be[5],lt=(be[8]-1)/be[0],gt=(we[8]+1)/we[0],w=Le*lt,pt=Le*gt,Ue=ce/(-lt+gt),Qe=Ue*-lt;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Se=Le+Ue,Ze=je+Ue,x=w-Qe,m=pt+(ce-Qe),N=Be*je/Ze*Se,X=ot*je/Ze*Se;q.projectionMatrix.makePerspective(x,m,N,X,Se,Ze),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,pe=q.far;S.texture!==null&&(S.depthNear>0&&(ie=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),A.near=b.near=g.near=ie,A.far=b.far=g.far=pe,(O!==A.near||W!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,W=A.far),A.layers.mask=q.layers.mask|6,g.layers.mask=A.layers.mask&-5,b.layers.mask=A.layers.mask&-3;const ce=q.parent,be=A.cameras;se(A,ce);for(let we=0;we<be.length;we++)se(be[we],ce);be.length===2?$(A,g,b):A.projectionMatrix.copy(g.projectionMatrix),_e(q,A,ce)};function _e(q,ie,pe){pe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&h===null))return o},this.setFoveation=function(q){o=q,f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)},this.getCameraTexture=function(q){return p[q]};let de=null;function $e(q,ie){if(l=ie.getViewerPose(c||s),_=ie,l!==null){const pe=l.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let ce=!1;pe.length!==A.cameras.length&&(A.cameras.length=0,ce=!0);for(let we=0;we<pe.length;we++){const Le=pe[we];let je=null;if(h!==null)je=h.getViewport(Le);else{const ot=u.getViewSubImage(f,Le);je=ot.viewport,we===0&&(e.setRenderTargetTextures(T,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(T))}let Be=Y[we];Be===void 0&&(Be=new bt,Be.layers.enable(we),Be.viewport=new at,Y[we]=Be),Be.matrix.fromArray(Le.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Le.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),we===0&&(A.matrix.copy(Be.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ce===!0&&A.cameras.push(Be)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const we=u.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&S.init(we,i.renderState)}if(be&&be.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<pe.length;we++){const Le=pe[we].camera;if(Le){let je=p[Le];je||(je=new ya,p[Le]=je);const Be=u.getCameraImage(Le);je.sourceTexture=Be}}}}for(let pe=0;pe<E.length;pe++){const ce=L[pe],be=E[pe];ce!==null&&be!==void 0&&be.update(ce,ie,c||s)}de&&de(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ye=new La;Ye.setAnimationLoop($e),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}},xn=new dn,cu=new ht;function hu(e,t){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Ra(e)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,T,E){d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&_(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),M(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),S(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d),T=y.envMap,E=y.envMapRotation;T&&(p.envMap.value=T,xn.copy(E),xn.x*=-1,xn.y*=-1,xn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),p.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(xn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=T*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uu(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const E=T.program;i.uniformBlockBinding(y,E)}function l(y,T){let E=r[y.id];E===void 0&&(M(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",p));const L=T.program;i.updateUBOMapping(y,L);const R=t.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const T=f();y.__bindingPointIndex=T;const E=e.createBuffer(),L=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,L,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],E=y.uniforms,L=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let R=0,P=E.length;R<P;R++){const g=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,Y=g.length;b<Y;b++){const A=g[b];if(_(A,R,b,L)===!0){const O=A.__offset,W=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let z=0;z<W.length;z++){const H=W[z],U=S(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,O+G,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,A.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(y,T,E,L){const R=y.value,P=T+"_"+E;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const g=L[P];if(typeof R=="number"||typeof R=="boolean"){if(g!==R)return L[P]=R,!0}else if(g.equals(R)===!1)return g.copy(R),!0}return!1}function M(y){const T=y.uniforms;let E=0;const L=16;for(let P=0,g=T.length;P<g;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let Y=0,A=b.length;Y<A;Y++){const O=b[Y],W=Array.isArray(O.value)?O.value:[O.value];for(let G=0,z=W.length;G<z;G++){const H=W[G],U=S(H),ne=E%L,$=ne%U.boundary,se=ne+$;E+=$,se!==0&&L-se<U.storage&&(E+=L-se),O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=U.storage}}}const R=E%L;return R>0&&(E+=L-R),y.__size=E,y.__cache={},this}function S(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const y in r)e.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}var du=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gt=null;function fu(){return Gt===null&&(Gt=new pl(du,16,16,qi,An),Gt.name="DFG_LUT",Gt.minFilter=wt,Gt.magFilter=wt,Gt.wrapS=Qt,Gt.wrapT=Qt,Gt.generateMipmaps=!1,Gt.needsUpdate=!0),Gt}var pu=class{constructor(e={}){const{canvas:t=ko(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=un}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=s;const M=h,S=new Set([oa,aa,sa]),p=new Set([un,Tn,ea,ia,ta,na]),d=new Uint32Array(4),y=new Int32Array(4);let T=null,E=null;const L=[],R=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let b=!1;this._outputColorSpace=Ft;let Y=0,A=0,O=null,W=-1,G=null;const z=new at,H=new at;let U=null;const ne=new Ge(0);let $=0,se=t.width,_e=t.height,de=1,$e=null,Ye=null;const q=new at(0,0,se,_e),ie=new at(0,0,se,_e);let pe=!1;const ce=new Yr;let be=!1,we=!1;const Le=new ht,je=new B,Be=new at,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function gt(){return O===null?de:1}let w=n;function pt(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r183"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),w===null){const I="webgl2";if(w=pt(I,v),w===null)throw pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Pe("WebGLRenderer: "+v.message),v}let Ue,Qe,Se,Ze,x,m,N,X,Z,k,ue,ae,xe,Re,J,Q,me,Te,he,Ne,C,re,ee;function Me(){Ue=new pc(w),Ue.init(),C=new ru(w,Ue),Qe=new ac(w,Ue,e,C),Se=new nu(w,Ue),Qe.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),Ze=new _c(w),x=new Hh,m=new iu(w,Ue,Se,x,Qe,C,Ze),N=new fc(g),X=new tc(w),re=new rc(w,X),Z=new mc(w,X,Ze,re),k=new Mc(w,Z,X,re,Ze),Te=new vc(w,Qe,m),J=new oc(x),ue=new Gh(g,N,Ue,Qe,re,J),ae=new hu(g,x),xe=new Wh,Re=new Zh(Ue),me=new ic(g,N,Se,k,_,o),Q=new tu(g,k,Qe),ee=new uu(w,Ze,Qe,Se),he=new sc(w,Ue,Ze),Ne=new gc(w,Ue,Ze),Ze.programs=ue.programs,g.capabilities=Qe,g.extensions=Ue,g.properties=x,g.renderLists=xe,g.shadowMap=Q,g.state=Se,g.info=Ze}Me(),M!==1009&&(P=new xc(M,t.width,t.height,i,r));const K=new lu(g,w);this.xr=K,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(v){v!==void 0&&(de=v,this.setSize(se,_e,!1))},this.getSize=function(v){return v.set(se,_e)},this.setSize=function(v,I,V=!0){if(K.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}se=v,_e=I,t.width=Math.floor(v*de),t.height=Math.floor(I*de),V===!0&&(t.style.width=v+"px",t.style.height=I+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(se*de,_e*de).floor()},this.setDrawingBufferSize=function(v,I,V){se=v,_e=I,de=V,t.width=Math.floor(v*V),t.height=Math.floor(I*V),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===1009){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(z)},this.getViewport=function(v){return v.copy(q)},this.setViewport=function(v,I,V,F){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,I,V,F),Se.viewport(z.copy(q).multiplyScalar(de).round())},this.getScissor=function(v){return v.copy(ie)},this.setScissor=function(v,I,V,F){v.isVector4?ie.set(v.x,v.y,v.z,v.w):ie.set(v,I,V,F),Se.scissor(H.copy(ie).multiplyScalar(de).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(v){Se.setScissorTest(pe=v)},this.setOpaqueSort=function(v){$e=v},this.setTransparentSort=function(v){Ye=v},this.getClearColor=function(v){return v.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,V=!0){let F=0;if(v){let D=!1;if(O!==null){const te=O.texture.format;D=S.has(te)}if(D){const te=O.texture.type,le=p.has(te),ge=me.getClearColor(),fe=me.getClearAlpha(),Ce=ge.r,Fe=ge.g,Ve=ge.b;le?(d[0]=Ce,d[1]=Fe,d[2]=Ve,d[3]=fe,w.clearBufferuiv(w.COLOR,0,d)):(y[0]=Ce,y[1]=Fe,y[2]=Ve,y[3]=fe,w.clearBufferiv(w.COLOR,0,y))}else F|=w.COLOR_BUFFER_BIT}I&&(F|=w.DEPTH_BUFFER_BIT),V&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),me.dispose(),xe.dispose(),Re.dispose(),x.dispose(),N.dispose(),k.dispose(),re.dispose(),ee.dispose(),ue.dispose(),K.dispose(),K.removeEventListener("sessionstart",$r),K.removeEventListener("sessionend",Qr),pn.stop()};function j(v){v.preventDefault(),us("WebGLRenderer: Context Lost."),b=!0}function ve(){us("WebGLRenderer: Context Restored."),b=!1;const v=Ze.autoReset,I=Q.enabled,V=Q.autoUpdate,F=Q.needsUpdate,D=Q.type;Me(),Ze.autoReset=v,Q.enabled=I,Q.autoUpdate=V,Q.needsUpdate=F,Q.type=D}function Ae(v){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ct(v){const I=v.target;I.removeEventListener("dispose",ct),qe(I)}function qe(v){Yt(v),x.remove(v)}function Yt(v){const I=x.get(v).programs;I!==void 0&&(I.forEach(function(V){ue.releaseProgram(V)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,V,F,D,te){I===null&&(I=ot);const le=D.isMesh&&D.matrixWorld.determinant()<0,ge=Va(v,I,V,F,D);Se.setMaterial(F,le);let fe=V.index,Ce=1;if(F.wireframe===!0){if(fe=Z.getWireframeAttribute(V),fe===void 0)return;Ce=2}const Fe=V.drawRange,Ve=V.attributes.position;let ye=Fe.start*Ce,Je=(Fe.start+Fe.count)*Ce;te!==null&&(ye=Math.max(ye,te.start*Ce),Je=Math.min(Je,(te.start+te.count)*Ce)),fe!==null?(ye=Math.max(ye,0),Je=Math.min(Je,fe.count)):Ve!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,Ve.count));const tt=Je-ye;if(tt<0||tt===1/0)return;re.setup(D,F,ge,V,fe);let nt,He=he;if(fe!==null&&(nt=X.get(fe),He=Ne,He.setIndex(nt)),D.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*gt()),He.setMode(w.LINES)):He.setMode(w.TRIANGLES);else if(D.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),Se.setLineWidth(_t*gt()),D.isLineSegments?He.setMode(w.LINES):D.isLineLoop?He.setMode(w.LINE_LOOP):He.setMode(w.LINE_STRIP)}else D.isPoints?He.setMode(w.POINTS):D.isSprite&&He.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ji("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))He.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const _t=D._multiDrawStarts,Ee=D._multiDrawCounts,It=D._multiDrawCount,We=fe?X.get(fe).bytesPerElement:1,Lt=x.get(F).currentProgram.getUniforms();for(let Vt=0;Vt<It;Vt++)Lt.setValue(w,"_gl_DrawID",Vt),He.render(_t[Vt]/We,Ee[Vt])}else if(D.isInstancedMesh)He.renderInstances(ye,tt,D.count);else if(V.isInstancedBufferGeometry){const _t=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ee=Math.min(V.instanceCount,_t);He.renderInstances(ye,tt,Ee)}else He.render(ye,tt)};function Bt(v,I,V){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,Si(v,I,V),v.side=0,v.needsUpdate=!0,Si(v,I,V),v.side=2):Si(v,I,V)}this.compile=function(v,I,V=null){V===null&&(V=v),E=Re.get(V),E.init(I),R.push(E),V.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(E.pushLight(D),D.castShadow&&E.pushShadow(D))}),v!==V&&v.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(E.pushLight(D),D.castShadow&&E.pushShadow(D))}),E.setupLights();const F=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const te=D.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const ge=te[le];Bt(ge,V,D),F.add(ge)}else Bt(te,V,D),F.add(te)}),E=R.pop(),F},this.compileAsync=function(v,I,V=null){const F=this.compile(v,I,V);return new Promise(D=>{function te(){if(F.forEach(function(le){x.get(le).currentProgram.isReady()&&F.delete(le)}),F.size===0){D(v);return}setTimeout(te,10)}Ue.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let tr=null;function Ba(v){tr&&tr(v)}function $r(){pn.stop()}function Qr(){pn.start()}const pn=new La;pn.setAnimationLoop(Ba),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(v){tr=v,K.setAnimationLoop(v),v===null?pn.stop():pn.start()},K.addEventListener("sessionstart",$r),K.addEventListener("sessionend",Qr),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const V=K.enabled===!0&&K.isPresenting===!0,F=P!==null&&(O===null||V)&&P.begin(g,O);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(I),I=K.getCamera()),v.isScene===!0&&v.onBeforeRender(g,v,I,O),E=Re.get(v,R.length),E.init(I),R.push(E),Le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ce.setFromProjectionMatrix(Le,Kn,I.reversedDepth),we=this.localClippingEnabled,be=J.init(this.clippingPlanes,we),T=xe.get(v,L.length),T.init(),L.push(T),K.enabled===!0&&K.isPresenting===!0){const te=g.xr.getDepthSensingMesh();te!==null&&nr(te,I,-1/0,g.sortObjects)}nr(v,I,0,g.sortObjects),T.finish(),g.sortObjects===!0&&T.sort($e,Ye),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&me.addToRenderList(T,v),this.info.render.frame++,be===!0&&J.beginShadows();const D=E.state.shadowsArray;if(Q.render(D,v,I),be===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&P.hasRenderPass())===!1){const te=T.opaque,le=T.transmissive;if(E.setupLights(),I.isArrayCamera){const ge=I.cameras;if(le.length>0)for(let fe=0,Ce=ge.length;fe<Ce;fe++){const Fe=ge[fe];ts(te,le,v,Fe)}lt&&me.render(v);for(let fe=0,Ce=ge.length;fe<Ce;fe++){const Fe=ge[fe];es(T,v,Fe,Fe.viewport)}}else le.length>0&&ts(te,le,v,I),lt&&me.render(v),es(T,v,I)}O!==null&&A===0&&(m.updateMultisampleRenderTarget(O),m.updateRenderTargetMipmap(O)),F&&P.end(g),v.isScene===!0&&v.onAfterRender(g,v,I),re.resetDefaultState(),W=-1,G=null,R.pop(),R.length>0?(E=R[R.length-1],be===!0&&J.setGlobalState(g.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?T=L[L.length-1]:T=null};function nr(v,I,V,F){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ce.intersectsSprite(v)){F&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);const te=k.update(v),le=v.material;le.visible&&T.push(v,te,le,V,Be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ce.intersectsObject(v))){const te=k.update(v),le=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Be.copy(te.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(Le)),Array.isArray(le)){const ge=te.groups;for(let fe=0,Ce=ge.length;fe<Ce;fe++){const Fe=ge[fe],Ve=le[Fe.materialIndex];Ve&&Ve.visible&&T.push(v,te,Ve,V,Be.z,Fe)}}else le.visible&&T.push(v,te,le,V,Be.z,null)}}const D=v.children;for(let te=0,le=D.length;te<le;te++)nr(D[te],I,V,F)}function es(v,I,V,F){const{opaque:D,transmissive:te,transparent:le}=v;E.setupLightsView(V),be===!0&&J.setGlobalState(g.clippingPlanes,V),F&&Se.viewport(z.copy(F)),D.length>0&&Mi(D,I,V),te.length>0&&Mi(te,I,V),le.length>0&&Mi(le,I,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ts(v,I,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){const Ve=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new kt(1,1,{generateMipmaps:!0,type:Ve?An:un,minFilter:Wr,samples:Math.max(4,Qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const D=E.state.transmissionRenderTarget[F.id],te=F.viewport||z;D.setSize(te.z*g.transmissionResolutionScale,te.w*g.transmissionResolutionScale);const le=g.getRenderTarget(),ge=g.getActiveCubeFace(),fe=g.getActiveMipmapLevel();g.setRenderTarget(D),g.getClearColor(ne),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),lt&&me.render(V);const Ce=g.toneMapping;g.toneMapping=0;const Fe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),be===!0&&J.setGlobalState(g.clippingPlanes,F),Mi(v,V,F),m.updateMultisampleRenderTarget(D),m.updateRenderTargetMipmap(D),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ye=0,Je=I.length;ye<Je;ye++){const{object:tt,geometry:nt,material:He,group:_t}=I[ye];if(He.side===2&&tt.layers.test(F.layers)){const Ee=He.side;He.side=1,He.needsUpdate=!0,ns(tt,V,F,nt,He,_t),He.side=Ee,He.needsUpdate=!0,Ve=!0}}Ve===!0&&(m.updateMultisampleRenderTarget(D),m.updateRenderTargetMipmap(D))}g.setRenderTarget(le,ge,fe),g.setClearColor(ne,$),Fe!==void 0&&(F.viewport=Fe),g.toneMapping=Ce}function Mi(v,I,V){const F=I.isScene===!0?I.overrideMaterial:null;for(let D=0,te=v.length;D<te;D++){const le=v[D],{object:ge,geometry:fe,group:Ce}=le;let Fe=le.material;Fe.allowOverride===!0&&F!==null&&(Fe=F),ge.layers.test(V.layers)&&ns(ge,I,V,fe,Fe,Ce)}}function ns(v,I,V,F,D,te){v.onBeforeRender(g,I,V,F,D,te),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(g,I,V,F,v,te),D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,g.renderBufferDirect(V,I,F,D,v,te),D.side=0,D.needsUpdate=!0,g.renderBufferDirect(V,I,F,D,v,te),D.side=2):g.renderBufferDirect(V,I,F,D,v,te),v.onAfterRender(g,I,V,F,D,te)}function Si(v,I,V){I.isScene!==!0&&(I=ot);const F=x.get(v),D=E.state.lights,te=E.state.shadowsArray,le=D.state.version,ge=ue.getParameters(v,D.state,te,I,V),fe=ue.getProgramCacheKey(ge);let Ce=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;const Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=N.get(v.envMap||F.environment,Fe),F.envMapRotation=F.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",ct),Ce=new Map,F.programs=Ce);let Ve=Ce.get(fe);if(Ve!==void 0){if(F.currentProgram===Ve&&F.lightsStateVersion===le)return rs(v,ge),Ve}else ge.uniforms=ue.getUniforms(v),v.onBeforeCompile(ge,g),Ve=ue.acquireProgram(ge,fe),Ce.set(fe,Ve),F.uniforms=ge.uniforms;const ye=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=J.uniform),rs(v,ge),F.needsLights=Ga(v),F.lightsStateVersion=le,F.needsLights&&(ye.ambientLightColor.value=D.state.ambient,ye.lightProbe.value=D.state.probe,ye.directionalLights.value=D.state.directional,ye.directionalLightShadows.value=D.state.directionalShadow,ye.spotLights.value=D.state.spot,ye.spotLightShadows.value=D.state.spotShadow,ye.rectAreaLights.value=D.state.rectArea,ye.ltc_1.value=D.state.rectAreaLTC1,ye.ltc_2.value=D.state.rectAreaLTC2,ye.pointLights.value=D.state.point,ye.pointLightShadows.value=D.state.pointShadow,ye.hemisphereLights.value=D.state.hemi,ye.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ye.spotLightMatrix.value=D.state.spotLightMatrix,ye.spotLightMap.value=D.state.spotLightMap,ye.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ve,F.uniformsList=null,Ve}function is(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Xi.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function rs(v,I){const V=x.get(v);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Va(v,I,V,F,D){I.isScene!==!0&&(I=ot),m.resetTextureUnits();const te=I.fog,le=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,ge=O===null?g.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ui,fe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ce=N.get(F.envMap||le,fe),Fe=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ye=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color;let nt=0;F.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(nt=g.toneMapping);const He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=He!==void 0?He.length:0,Ee=x.get(F),It=E.state.lights;if(be===!0&&(we===!0||v!==G)){const rt=v===G&&F.id===W;J.setState(F,v,rt)}let We=!1;F.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==It.state.version||Ee.outputColorSpace!==ge||D.isBatchedMesh&&Ee.batching===!1||!D.isBatchedMesh&&Ee.batching===!0||D.isBatchedMesh&&Ee.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ee.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ee.instancing===!1||!D.isInstancedMesh&&Ee.instancing===!0||D.isSkinnedMesh&&Ee.skinning===!1||!D.isSkinnedMesh&&Ee.skinning===!0||D.isInstancedMesh&&Ee.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ee.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ee.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ee.instancingMorph===!1&&D.morphTexture!==null||Ee.envMap!==Ce||F.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==J.numPlanes||Ee.numIntersection!==J.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==Ve||Ee.morphTargets!==ye||Ee.morphNormals!==Je||Ee.morphColors!==tt||Ee.toneMapping!==nt||Ee.morphTargetsCount!==_t)&&(We=!0):(We=!0,Ee.__version=F.version);let Lt=Ee.currentProgram;We===!0&&(Lt=Si(F,I,D));let Vt=!1,mn=!1,Rn=!1;const Ke=Lt.getUniforms(),mt=Ee.uniforms;if(Se.useProgram(Lt.program)&&(Vt=!0,mn=!0,Rn=!0),F.id!==W&&(W=F.id,mn=!0),Vt||G!==v){Se.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ke.setValue(w,"projectionMatrix",v.projectionMatrix),Ke.setValue(w,"viewMatrix",v.matrixWorldInverse);const rt=Ke.map.cameraPosition;rt!==void 0&&rt.setValue(w,je.setFromMatrixPosition(v.matrixWorld)),Qe.logarithmicDepthBuffer&&Ke.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ke.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),G!==v&&(G=v,mn=!0,Rn=!0)}if(Ee.needsLights&&(It.state.directionalShadowMap.length>0&&Ke.setValue(w,"directionalShadowMap",It.state.directionalShadowMap,m),It.state.spotShadowMap.length>0&&Ke.setValue(w,"spotShadowMap",It.state.spotShadowMap,m),It.state.pointShadowMap.length>0&&Ke.setValue(w,"pointShadowMap",It.state.pointShadowMap,m)),D.isSkinnedMesh){Ke.setOptional(w,D,"bindMatrix"),Ke.setOptional(w,D,"bindMatrixInverse");const rt=D.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),Ke.setValue(w,"boneTexture",rt.boneTexture,m))}D.isBatchedMesh&&(Ke.setOptional(w,D,"batchingTexture"),Ke.setValue(w,"batchingTexture",D._matricesTexture,m),Ke.setOptional(w,D,"batchingIdTexture"),Ke.setValue(w,"batchingIdTexture",D._indirectTexture,m),Ke.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&Ke.setValue(w,"batchingColorTexture",D._colorsTexture,m));const tn=V.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Te.update(D,V,Lt),(mn||Ee.receiveShadow!==D.receiveShadow)&&(Ee.receiveShadow=D.receiveShadow,Ke.setValue(w,"receiveShadow",D.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null&&(mt.envMapIntensity.value=I.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=fu()),mn&&(Ke.setValue(w,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&za(mt,Rn),te&&F.fog===!0&&ae.refreshFogUniforms(mt,te),ae.refreshMaterialUniforms(mt,F,de,_e,E.state.transmissionRenderTarget[v.id]),Xi.upload(w,is(Ee),mt,m)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Xi.upload(w,is(Ee),mt,m),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ke.setValue(w,"center",D.center),Ke.setValue(w,"modelViewMatrix",D.modelViewMatrix),Ke.setValue(w,"normalMatrix",D.normalMatrix),Ke.setValue(w,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const rt=F.uniformsGroups;for(let Qn=0,Cn=rt.length;Qn<Cn;Qn++){const ss=rt[Qn];ee.update(ss,Lt),ee.bind(ss,Lt)}}return Lt}function za(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Ga(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,I,V){const F=x.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),x.get(v.texture).__webglTexture=I,x.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const V=x.get(v);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const Ha=w.createFramebuffer();this.setRenderTarget=function(v,I=0,V=0){O=v,Y=I,A=V;let F=null,D=!1,te=!1;if(v){const le=x.get(v);if(le.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(w.FRAMEBUFFER,le.__webglFramebuffer),z.copy(v.viewport),H.copy(v.scissor),U=v.scissorTest,Se.viewport(z),Se.scissor(H),Se.setScissorTest(U),W=-1;return}else if(le.__webglFramebuffer===void 0)m.setupRenderTarget(v);else if(le.__hasExternalTextures)m.rebindTextures(v,x.get(v.texture).__webglTexture,x.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ce=v.depthTexture;if(le.__boundDepthTexture!==Ce){if(Ce!==null&&x.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(v)}}const ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(te=!0);const fe=x.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(fe[I])?F=fe[I][V]:F=fe[I],D=!0):v.samples>0&&m.useMultisampledRTT(v)===!1?F=x.get(v).__webglMultisampledFramebuffer:Array.isArray(fe)?F=fe[V]:F=fe,z.copy(v.viewport),H.copy(v.scissor),U=v.scissorTest}else z.copy(q).multiplyScalar(de).floor(),H.copy(ie).multiplyScalar(de).floor(),U=pe;if(V!==0&&(F=Ha),Se.bindFramebuffer(w.FRAMEBUFFER,F)&&Se.drawBuffers(v,F),Se.viewport(z),Se.scissor(H),Se.setScissorTest(U),D){const le=x.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,V)}else if(te){const le=I;for(let ge=0;ge<v.textures.length;ge++){const fe=x.get(v.textures[ge]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+ge,fe.__webglTexture,V,le)}}else if(v!==null&&V!==0){const le=x.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,le.__webglTexture,V)}W=-1},this.readRenderTargetPixels=function(v,I,V,F,D,te,le,ge=0){if(!(v&&v.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=x.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){Se.bindFramebuffer(w.FRAMEBUFFER,fe);try{const Ce=v.textures[ge],Fe=Ce.format,Ve=Ce.type;if(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),!Qe.textureFormatReadable(Fe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ve)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-F&&V>=0&&V<=v.height-D&&w.readPixels(I,V,F,D,C.convert(Fe),C.convert(Ve),te)}finally{const Ce=O!==null?x.get(O).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,I,V,F,D,te,le,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=x.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(I>=0&&I<=v.width-F&&V>=0&&V<=v.height-D){Se.bindFramebuffer(w.FRAMEBUFFER,fe);const Ce=v.textures[ge],Fe=Ce.format,Ve=Ce.type;if(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),!Qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(I,V,F,D,C.convert(Fe),C.convert(Ve),0);const Je=O!==null?x.get(O).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,Je);const tt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Wo(w,tt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(ye),w.deleteSync(tt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,V=0){const F=Math.pow(2,-V),D=Math.floor(v.image.width*F),te=Math.floor(v.image.height*F),le=I!==null?I.x:0,ge=I!==null?I.y:0;m.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,le,ge,D,te),Se.unbindTexture()};const ka=w.createFramebuffer(),Wa=w.createFramebuffer();this.copyTextureToTexture=function(v,I,V=null,F=null,D=0,te=0){let le,ge,fe,Ce,Fe,Ve,ye,Je,tt;const nt=v.isCompressedTexture?v.mipmaps[te]:v.image;if(V!==null)le=V.max.x-V.min.x,ge=V.max.y-V.min.y,fe=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Fe=V.min.y,Ve=V.isBox3?V.min.z:0;else{const mt=Math.pow(2,-D);le=Math.floor(nt.width*mt),ge=Math.floor(nt.height*mt),v.isDataArrayTexture?fe=nt.depth:v.isData3DTexture?fe=Math.floor(nt.depth*mt):fe=1,Ce=0,Fe=0,Ve=0}F!==null?(ye=F.x,Je=F.y,tt=F.z):(ye=0,Je=0,tt=0);const He=C.convert(I.format),_t=C.convert(I.type);let Ee;I.isData3DTexture?(m.setTexture3D(I,0),Ee=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(m.setTexture2DArray(I,0),Ee=w.TEXTURE_2D_ARRAY):(m.setTexture2D(I,0),Ee=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const It=w.getParameter(w.UNPACK_ROW_LENGTH),We=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Lt=w.getParameter(w.UNPACK_SKIP_PIXELS),Vt=w.getParameter(w.UNPACK_SKIP_ROWS),mn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ve);const Rn=v.isDataArrayTexture||v.isData3DTexture,Ke=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const mt=x.get(v),tn=x.get(I),rt=x.get(mt.__renderTarget),Qn=x.get(tn.__renderTarget);Se.bindFramebuffer(w.READ_FRAMEBUFFER,rt.__webglFramebuffer),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Cn=0;Cn<fe;Cn++)Rn&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(v).__webglTexture,D,Ve+Cn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(I).__webglTexture,te,tt+Cn)),w.blitFramebuffer(Ce,Fe,le,ge,ye,Je,le,ge,w.DEPTH_BUFFER_BIT,w.NEAREST);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||x.has(v)){const mt=x.get(v),tn=x.get(I);Se.bindFramebuffer(w.READ_FRAMEBUFFER,ka),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,Wa);for(let rt=0;rt<fe;rt++)Rn?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,mt.__webglTexture,D,Ve+rt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,D),Ke?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tn.__webglTexture,te,tt+rt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,tn.__webglTexture,te),D!==0?w.blitFramebuffer(Ce,Fe,le,ge,ye,Je,le,ge,w.COLOR_BUFFER_BIT,w.NEAREST):Ke?w.copyTexSubImage3D(Ee,te,ye,Je,tt+rt,Ce,Fe,le,ge):w.copyTexSubImage2D(Ee,te,ye,Je,Ce,Fe,le,ge);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ke?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(Ee,te,ye,Je,tt,le,ge,fe,He,_t,nt.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Ee,te,ye,Je,tt,le,ge,fe,He,nt.data):w.texSubImage3D(Ee,te,ye,Je,tt,le,ge,fe,He,_t,nt):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,ye,Je,le,ge,He,_t,nt.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,ye,Je,nt.width,nt.height,He,nt.data):w.texSubImage2D(w.TEXTURE_2D,te,ye,Je,le,ge,He,_t,nt);w.pixelStorei(w.UNPACK_ROW_LENGTH,It),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,mn),te===0&&I.generateMipmaps&&w.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(v){x.get(v).__webglFramebuffer===void 0&&m.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?m.setTextureCube(v,0):v.isData3DTexture?m.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?m.setTexture2DArray(v,0):m.setTexture2D(v,0),Se.unbindTexture()},this.resetState=function(){Y=0,A=0,O=null,Se.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}},et={LANE_WIDTH:3,LANE_COUNT:3,BALL_RADIUS:.8,JUMP_FORCE:.35,GRAVITY:.018,OBSTACLE_SPAWN_DISTANCE:50,OBSTACLE_DESPAWN_DISTANCE:10,OBSTACLE_SIZE:2,SCORE_NORMAL:10,SCORE_JUMP_BONUS:20,CAMERA_Y:5,CAMERA_Z:10,CAMERA_LOOK_AT_Z:-5,OBSTACLE_SPAWN_INTERVAL:1500},mu=class{mesh;velocity;currentLane=1;isJumping=!1;targetX=0;gameState;constructor(e,t){this.gameState=t;const n=new Ml(et.BALL_RADIUS,32,32),i=new Yn({color:35071,emissive:17578,emissiveIntensity:.4,metalness:.6,roughness:.3});this.mesh=new St(n,i),this.mesh.position.set(0,et.BALL_RADIUS,0),this.mesh.castShadow=!0,e.add(this.mesh),this.velocity=new B(0,0,0),this.targetX=0}moveLeft(){this.currentLane>0&&(this.currentLane--,this.targetX=(this.currentLane-1)*et.LANE_WIDTH)}moveRight(){this.currentLane<et.LANE_COUNT-1&&(this.currentLane++,this.targetX=(this.currentLane-1)*et.LANE_WIDTH)}jump(){this.isJumping||(this.velocity.y=et.JUMP_FORCE,this.isJumping=!0)}update(){try{this.mesh.position.x+=(this.targetX-this.mesh.position.x)*.15,this.isJumping&&(this.mesh.position.y+=this.velocity.y,this.velocity.y-=et.GRAVITY,this.mesh.position.y<=et.BALL_RADIUS&&(this.mesh.position.y=et.BALL_RADIUS,this.isJumping=!1,this.velocity.y=0)),this.mesh.rotation.x-=this.gameState.getSpeed()*.5,this.mesh.rotation.z=(this.targetX-this.mesh.position.x)*.1}catch(e){console.error("Player update error:",e)}}reset(){this.currentLane=1,this.targetX=0,this.mesh.position.set(0,et.BALL_RADIUS,0),this.velocity.set(0,0,0),this.isJumping=!1}dispose(e){e.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},gu=class{mesh;lane;passed=!1;jumpedOver=!1;constructor(e,t){this.lane=Math.floor(Math.random()*et.LANE_COUNT);const n=new bn(et.OBSTACLE_SIZE,et.OBSTACLE_SIZE,et.OBSTACLE_SIZE),i=new Yn({color:16729156,emissive:8917265,emissiveIntensity:.2,metalness:.4,roughness:.6});this.mesh=new St(n,i),this.mesh.position.set((this.lane-1)*et.LANE_WIDTH,et.OBSTACLE_SIZE/2,t),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,e.add(this.mesh)}update(e){this.mesh.position.z+=e}isOutOfBounds(){return this.mesh.position.z>et.OBSTACLE_DESPAWN_DISTANCE}checkCollision(e){try{const t=Math.abs(this.mesh.position.x-e.mesh.position.x),n=Math.abs(this.mesh.position.y-e.mesh.position.y),i=Math.abs(this.mesh.position.z-e.mesh.position.z);return t<1.8&&n<1.8&&i<1.8}catch(t){return console.error("Collision check error:",t),!1}}checkJumpOver(e){try{return e.isJumping&&e.mesh.position.y>2&&Math.abs(this.mesh.position.x-e.mesh.position.x)<1.5}catch(t){return console.error("Jump check error:",t),!1}}markJumpedOver(){this.jumpedOver=!0;const e=this.mesh.material;e.color.setHex(4521796),e.emissive.setHex(2263074),e.emissiveIntensity=.5}dispose(e){try{e.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}catch(t){console.error("Dispose error:",t)}}},_u=class{lines;constructor(e){this.lines=[];const t=new Yn({color:16777215,emissive:16777215,emissiveIntensity:.3,transparent:!0,opacity:.5,metalness:.2,roughness:.4});for(let n=0;n<3;n++){const i=(n-1)*et.LANE_WIDTH,r=new bn(.08,.08,200),s=new St(r,t.clone());s.position.set(i,0,0),s.castShadow=!1,s.receiveShadow=!1,s.userData={baseEmissive:.3,phase:n*.5},e.add(s),this.lines.push(s)}}update(e){const t=Date.now()*8e-4;this.lines.forEach((n,i)=>{n.position.z+=e,n.position.z>50&&(n.position.z=-50);const r=n.material,s=n.userData.phase||i*.5,a=Math.sin(t+s)*.15+.3;r.emissiveIntensity=a,r.opacity=.4+a*.2})}dispose(e){this.lines.forEach(t=>{e.remove(t),t.geometry.dispose(),t.material.dispose()})}},vu=class{currentSpeed=0;baseSpeed=.25;currentMode=null;globalSpeedMultiplier=1;modeSpeedConfigs={0:{baseSpeed:.0625,minSpeed:.0625,maxSpeed:.5,speedIncrement:1e-5},1:{baseSpeed:.25,minSpeed:.25,maxSpeed:1.5,speedIncrement:5e-5},2:{baseSpeed:.5,minSpeed:.5,maxSpeed:10,speedIncrement:2e-4}};constructor(){this.currentSpeed=this.baseSpeed}setGlobalSpeedMultiplier(e){this.globalSpeedMultiplier=Math.max(.1,Math.min(10,e))}getGlobalSpeedMultiplier(){return this.globalSpeedMultiplier}resetGlobalSpeed(){this.globalSpeedMultiplier=1}setMode(e){this.currentMode=e;const t=this.modeSpeedConfigs[e.id];t&&(this.baseSpeed=t.baseSpeed,this.currentSpeed=t.baseSpeed)}getCurrentSpeed(){return this.currentSpeed*this.globalSpeedMultiplier}getBaseSpeed(){return this.baseSpeed}increaseSpeed(){if(this.currentMode){const e=this.modeSpeedConfigs[this.currentMode.id];e&&(this.currentSpeed=Math.min(this.currentSpeed+e.speedIncrement,e.maxSpeed))}}getSpeedPercent(){const e=(this.currentMode?this.modeSpeedConfigs[this.currentMode.id]:null)?.maxSpeed||this.baseSpeed*4;return Math.round(this.currentSpeed/e*100)}getSpeedMultiplier(){return this.currentSpeed/this.baseSpeed}reset(){if(this.currentMode){const e=this.modeSpeedConfigs[this.currentMode.id];e&&(this.currentSpeed=e.baseSpeed)}else this.currentSpeed=this.baseSpeed}isAtMaxSpeed(){if(this.currentMode){const e=this.modeSpeedConfigs[this.currentMode.id];if(e)return this.currentSpeed>=e.maxSpeed}return!1}getFormattedSpeed(){return`${this.getSpeedPercent()}%`}},cn=new vu,Mu=class{isPlaying=!0;score=0;distance=0;currentMode=null;reset(e){this.isPlaying=!0,this.score=0,this.distance=0,e?(this.currentMode=e,cn.setMode(e)):(this.currentMode=null,cn.reset())}addScore(e=!1){e?this.score+=et.SCORE_JUMP_BONUS:this.score+=et.SCORE_NORMAL}increaseSpeed(){cn.increaseSpeed()}getSpeed(){return cn.getCurrentSpeed()}getSpeedPercent(){return cn.getSpeedPercent()}},Su=class{scoreElement;speedElement;gameState;modeElement;constructor(e){this.gameState=e,this.scoreElement=document.getElementById("score"),this.speedElement=document.getElementById("speed"),this.modeElement=document.getElementById("mode-display")}update(){this.scoreElement&&(this.scoreElement.textContent=`Score: ${this.gameState.score}`),this.speedElement&&(this.speedElement.textContent=`Speed: ${cn.getFormattedSpeed()}`),this.modeElement&&this.gameState.currentMode&&(this.modeElement.textContent=`Mode: ${this.gameState.currentMode.name}`,this.modeElement.style.color=this.gameState.currentMode.color)}setFinalScore(e){e&&this.scoreElement&&(e.textContent=this.scoreElement.textContent)}},xu=class{player;gameState;onRestart=null;onStart=null;constructor(e,t){this.player=e,this.gameState=t,this.setupControls()}setRestartCallback(e){this.onRestart=e}setStartCallback(e){this.onStart=e}setupControls(){document.addEventListener("keydown",e=>{if(!this.gameState.isPlaying){this.onRestart?this.onRestart():this.onStart&&this.onStart();return}switch(e.code){case"KeyA":case"ArrowLeft":this.player.moveLeft();break;case"KeyD":case"ArrowRight":this.player.moveRight();break;case"Space":case"ArrowUp":this.player.jump();break}}),document.addEventListener("click",()=>{this.gameState.isPlaying||(this.onRestart?this.onRestart():this.onStart&&this.onStart())}),document.addEventListener("touchstart",()=>{this.gameState.isPlaying||(this.onRestart?this.onRestart():this.onStart&&this.onStart())})}},Eu="/assets/music/vika.m4a",yu=class{audio=null;audioContext=null;analyser=null;dataArray=null;isPlaying=!1;currentMusicPath="";constructor(){this.init()}init(){this.currentMusicPath=Eu,this.audio=new Audio(this.currentMusicPath),this.audio.loop=!0,this.audio.volume=.5}setMusicPath(e){if(this.currentMusicPath===e)return;const t=this.isPlaying;this.currentMusicPath=e,this.audio&&this.audio.pause(),this.audio=new Audio(e),this.audio.loop=!0,this.audio.volume=.5,this.audioContext&&this.initAudioContext(),t&&this.play()}initAudioContext(){if(!this.audio)return;this.audioContext&&this.audioContext.close(),this.audioContext=new AudioContext;const e=this.audioContext.createMediaElementSource(this.audio);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.85,e.connect(this.analyser),this.analyser.connect(this.audioContext.destination);const t=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(t)}play(){this.audio&&(this.audioContext||this.initAudioContext(),this.audioContext?.state==="suspended"&&this.audioContext.resume(),this.audio.play().catch(e=>{console.log("🎵 Audio play requires user interaction:",e)}),this.isPlaying=!0)}pause(){this.audio&&(this.audio.pause(),this.isPlaying=!1)}stop(){this.audio&&(this.audio.pause(),this.audio.currentTime=0,this.isPlaying=!1)}getFrequencyData(){return!this.analyser||!this.dataArray?null:(this.analyser.getByteFrequencyData(this.dataArray),this.dataArray)}getAverageFrequency(e){if(!this.dataArray)return 0;let t=0;const n=e.end-e.start;for(let i=e.start;i<e.end;i++)t+=this.dataArray[i];return n>0?t/n/255:0}isAudioPlaying(){return this.isPlaying&&this.audio?.paused===!1}dispose(){this.audio&&(this.audio.pause(),this.audio=null),this.audioContext&&(this.audioContext.close(),this.audioContext=null)}},Tu=class{leftBars=[];rightBars=[];barCount=32;barSize=.4;barSpacing=.5;leftGroup;rightGroup;musicController;materials=[];freqStartIndex=20;freqEndIndex=200;constructor(e,t){this.musicController=t,this.leftGroup=new Xn,this.leftGroup.position.set(-5,0,-5),e.add(this.leftGroup),this.rightGroup=new Xn,this.rightGroup.position.set(5,0,-5),e.add(this.rightGroup),this.createBars(),this.createGlowFloor()}createBars(){for(let e=0;e<this.barCount;e++){const t=new bn(this.barSize,1,this.barSize),n=.55+e/this.barCount*.4,i=new Yn({color:new Ge().setHSL(n,.9,.5),emissive:new Ge().setHSL(n,.9,.4),emissiveIntensity:.8,metalness:.9,roughness:.1,transparent:!0,opacity:.95});this.materials.push(i);const r=new St(t,i.clone());r.position.set(0,.5,(e-this.barCount/2)*(this.barSize+this.barSpacing)),r.scale.set(1,.1,1),r.userData={originalY:.5},this.leftGroup.add(r),this.leftBars.push(r);const s=new St(t,i.clone());s.position.set(0,.5,(e-this.barCount/2)*(this.barSize+this.barSpacing)),s.scale.set(1,.1,1),s.userData={originalY:.5},this.rightGroup.add(s),this.rightBars.push(s)}}createGlowFloor(){const e=this.barCount*(this.barSize+this.barSpacing),t=new bn(2,.1,e),n=new Yn({color:0,emissive:2228292,emissiveIntensity:.5,metalness:.8,roughness:.2,transparent:!0,opacity:.8}),i=new St(t,n);i.position.y=-.2,this.leftGroup.add(i);const r=new Yn({color:0,emissive:4456482,emissiveIntensity:.5,metalness:.8,roughness:.2,transparent:!0,opacity:.8}),s=new St(t,r);s.position.y=-.2,this.rightGroup.add(s)}update(){const e=this.musicController.getFrequencyData();if(!e)return;const t=(this.freqEndIndex-this.freqStartIndex)/this.barCount,n=Date.now()*.001;this.updateBarSide(this.leftBars,e,t,n,1),this.updateBarSide(this.rightBars,e,t,n,-1),this.leftGroup.rotation.y=Math.sin(n*.2)*.05,this.rightGroup.rotation.y=Math.sin(n*.2)*.05}updateBarSide(e,t,n,i,r){e.forEach((s,a)=>{const o=t[Math.floor(this.freqStartIndex+a*n)]/255,c=.2+o*5;s.scale.y+=(c-s.scale.y)*.4,s.position.y=s.userData.originalY+(s.scale.y-1)*.5;const l=s.material,u=o*.2,f=(.55+a%this.barCount/this.barCount*.4+u)%1;l.color.setHSL(f,.9,.5+o*.3),l.emissive.setHSL(f,.9,.3+o*.7),l.emissiveIntensity=.5+o*1.5,l.opacity=.8+o*.2,s.rotation.y=Math.sin(i*2+a*.3)*.1*o*r,s.rotation.z=Math.cos(i*1.5+a*.3)*.05*o})}dispose(e){[...this.leftBars,...this.rightBars].forEach(t=>{t.geometry.dispose(),t.material.dispose()}),e.remove(this.leftGroup),e.remove(this.rightGroup)}},Au={id:0,name:"Я гавно",description:"Easy Mode (Slow)",startSpeed:.0625,speedIncrement:1e-5,maxSpeed:.5,spawnInterval:2e3,color:"#44ff44",musicPath:"/assets/music/vika.m4a"},bu={id:1,name:"Эщкере",description:"Medium Mode (Balanced)",startSpeed:.25,speedIncrement:5e-5,maxSpeed:1.5,spawnInterval:1500,color:"#0088ff",musicPath:"/assets/music/vika.m4a"},wu={id:2,name:"Ты на приколе?",description:"Hard Mode (Insane)",startSpeed:.5,speedIncrement:2e-4,maxSpeed:10,spawnInterval:800,color:"#ff0044",musicPath:"/assets/music/dead.ogg"},kr=[Au,bu,wu],Ru=class{scene;camera;renderer;player;cubes;laneLines;musicController;equalizer;state;scoreManager;inputHandler;gameOverElement=null;startScreenElement=null;gameStarted=!1;selectedMode=kr[1];spawnIntervalId=null;isGameOver=!1;constructor(){console.log("🎮 Initializing Game Manager..."),this.scene=new ol,this.scene.background=new Ge(525837),this.scene.fog=new al(525837,20,80),this.camera=new bt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,et.CAMERA_Y,et.CAMERA_Z),this.camera.lookAt(0,0,et.CAMERA_LOOK_AT_Z),this.renderer=new pu({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.zIndex="1";const e=document.getElementById("app");if(!e){console.error("❌ #app element not found!");return}e.appendChild(this.renderer.domElement);const t=new Hl(16777215,.4);this.scene.add(t);const n=new Gl(16777215,.8);n.position.set(5,10,5),n.castShadow=!0,this.scene.add(n);const i=new Vl(35071,.8,50);i.position.set(0,5,0),this.scene.add(i),this.state=new Mu,this.state.isPlaying=!1,this.scoreManager=new Su(this.state),this.musicController=new yu,this.equalizer=new Tu(this.scene,this.musicController),this.player=new mu(this.scene,this.state),this.cubes=[],this.laneLines=new _u(this.scene),this.gameOverElement=document.getElementById("game-over"),this.startScreenElement=document.getElementById("start-screen"),this.inputHandler=new xu(this.player,this.state),this.inputHandler.setRestartCallback(()=>this.restartGame()),this.inputHandler.setStartCallback(()=>this.startGame()),this.setupResizeHandler(),this.animate()}setupResizeHandler(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}setMode(e){this.selectedMode=e,this.musicController.setMusicPath(e.musicPath),cn.setMode(e),document.querySelectorAll(".mode-btn").forEach(n=>{n.classList.remove("selected"),n.dataset.id===e.id.toString()&&n.classList.add("selected")});const t=document.getElementById("mode-display");t&&(t.textContent=`Mode: ${e.name}`,t.style.color=e.color)}startGame(){this.gameStarted||(this.gameStarted=!0,this.state.reset(this.selectedMode),this.state.isPlaying=!0,this.isGameOver=!1,this.musicController.play(),this.startScreenElement&&(this.startScreenElement.style.display="none"),this.gameOverElement&&(this.gameOverElement.style.display="none"),this.startSpawning())}startSpawning(){this.spawnIntervalId&&clearInterval(this.spawnIntervalId),this.spawnIntervalId=window.setInterval(()=>{this.state.isPlaying&&!this.isGameOver&&this.spawnCube()},this.selectedMode.spawnInterval)}spawnCube(){if(!this.state.isPlaying||this.isGameOver)return;const e=new gu(this.scene,-et.OBSTACLE_SPAWN_DISTANCE);this.cubes.push(e)}checkCollisions(){if(!this.isGameOver){for(const e of this.cubes)if(e.checkCollision(this.player)){this.gameOver();return}}}updateCubes(){for(let e=this.cubes.length-1;e>=0;e--){const t=this.cubes[e];t.update(this.state.getSpeed()),!t.passed&&t.mesh.position.z>this.player.mesh.position.z&&(t.passed=!0,t.checkJumpOver(this.player)?(this.state.addScore(!0),t.markJumpedOver()):this.state.addScore(!1)),t.isOutOfBounds()&&(t.dispose(this.scene),this.cubes.splice(e,1))}}gameOver(){if(this.isGameOver)return;this.isGameOver=!0,this.state.isPlaying=!1,this.musicController.pause(),this.spawnIntervalId&&(clearInterval(this.spawnIntervalId),this.spawnIntervalId=null);const e=document.getElementById("final-score");this.scoreManager.setFinalScore(e),this.gameOverElement&&(this.gameOverElement.style.display="flex"),console.log("💥 Game Over! Press any key to restart in same mode")}restartGame(){this.cubes.forEach(e=>e.dispose(this.scene)),this.cubes=[],this.player.reset(),this.state.reset(this.selectedMode),this.state.isPlaying=!0,this.isGameOver=!1,this.musicController.play(),this.spawnIntervalId&&clearInterval(this.spawnIntervalId),this.startSpawning(),this.gameOverElement&&(this.gameOverElement.style.display="none"),console.log("🔄 Game Restarted! Same mode:",this.selectedMode.name)}animate=()=>{requestAnimationFrame(this.animate),this.state.isPlaying&&!this.isGameOver&&(this.state.distance+=this.state.getSpeed(),this.state.increaseSpeed(),this.player.update(),this.updateCubes(),this.laneLines.update(this.state.getSpeed()),this.equalizer.update(),this.checkCollisions(),this.scoreManager.update()),this.renderer.render(this.scene,this.camera)}};function Cu(){const e=document.createElement("div");e.id="game-ui",e.innerHTML=`
<div id="start-screen">
  <h1>🎮 NEON RUNNER</h1>
  <p>Select Your Fate to Start</p>
  <div class="mode-selector">
    ${kr.map(t=>`
    <button class="mode-btn" data-id="${t.id}" style="border-color: ${t.color}; color: ${t.color}">
      <div class="mode-title">${t.name}</div>
      <div class="mode-desc">${t.description}</div>
    </button>
  `).join("")}
  </div>
  <p class="start-hint">Click a mode above to begin instantly</p>
</div>
<div id="score">Score: 0</div>
<div id="speed">Speed: 0%</div>
<div id="mode-display">Mode: Эщкере</div>
<div id="controls-hint">
  <span>A/← Left</span>
  <span>D/→ Right</span>
  <span>Space/↑ Jump (+20 pts)</span>
</div>
<div id="game-over">
  <h1>💥 CRASHED!</h1>
  <p id="final-score">Score: 0</p>
  <p class="restart-hint">Press ANY KEY to Restart</p>
</div>
<div id="music-indicator">
  <span>🎵 Music</span>
</div>
<div id="speed-control" style="position:fixed;bottom:20px;right:20px;background:rgba(0,0,0,0.7);padding:10px;border-radius:8px;color:#fff;z-index:100;pointer-events:auto;">
  <label>🎚️ Global Speed: <span id="speed-value">1.0x</span></label><br>
  <input type="range" id="speed-slider" min="0.1" max="3" step="0.1" value="1" style="width:150px;">
</div>
`,document.body.appendChild(e),setTimeout(()=>{const t=window.gameManager;if(t){document.querySelectorAll(".mode-btn").forEach(r=>{r.addEventListener("click",()=>{const s=parseInt(r.dataset.id||"1"),a=kr.find(o=>o.id===s);a&&t&&(t.setMode(a),t.startGame())})});const n=document.getElementById("speed-slider"),i=document.getElementById("speed-value");n&&i&&n.addEventListener("input",r=>{const s=parseFloat(r.target.value);cn.setGlobalSpeedMultiplier(s),i.textContent=`${s.toFixed(1)}x`})}},100)}console.log("🚀 Starting game...");Cu();var Pu=new Ru;window.gameManager=Pu;
