exports.view=View={Game:{},Board:{},Move:{}},function(){function e(e,t){switch(t){default:e.PlaySound("zip"+Math.floor(4*Math.random()));break;case"mana":e.PlaySound("wind")}}var t=1500;View.Game.xdInit=function(e){function i(e,t,i,n){var o="smoothedfilegeo|0|"+a+"/res/xd-view/meshes/mana-piece-smoothed2.js";e.getResource(o,function(e,a){for(var o=[],s=0;s<a.length;s++){var r=a[s].clone();r.specular={r:.1,g:.1,b:.1},r.shininess=10,n==-1?(r.color={r:.5,g:.2,b:0},"blackstripe"==r.name&&"damyo"==i&&(r.color={r:1,g:.8,b:.8})):(r.color={r:1,g:1,b:1},"blackstripe"==r.name&&"damyo"==i&&(r.color={r:0,g:0,b:0})),o.push(r)}var d=new THREE.Mesh(e,new THREE.MultiMaterial(o));d.castShadow=!0,t(d)})}var a=this.mViewOptions.fullPath,n=this.mOptions;e.createGadget("lightside",{"3d":{type:"custom3d",create:function(){var e=new THREE.SpotLight(12303291,.6,0,1.05,1,2);return e.shadow.camera.near=10,e.shadow.camera.far=40,e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e},z:15e3,x:15e3}}),e.createGadget("board",{"2d":{type:"image",file:this.mViewOptions.fullPath+"/res/images/boardexp.png",rotate:45,width:t*this.mOptions.width/.75,height:t*this.mOptions.height/.75},orange3d:{type:"custommesh3d",rotate:45,z:0,create:function(){var e=this,t=new THREE.CylinderGeometry(500,500,1,64,1,!1),i=new THREE.MeshPhongMaterial({color:14327863,specular:1118481,shininess:1}),o=new THREE.Mesh(t,i);return this.getResource("smoothedfilegeo|0|"+a+"/res/xd-view/meshes/strokeblack.js",function(t,i){for(var a=new THREE.MeshPhongMaterial({color:1118481,specular:0,shininess:100}),s=0;s<n.height;s++)for(var r=0;r<n.width;r++){var d=-(1.5*n.width)/2+1.5*r+.75,l=1.5*n.height/2-1.5*s-.75,c=n.initial[s][r],h=0;switch(c){default:break;case"2":h=.375;break;case"3":h=.25}for(var m=(c-1)*h/2,u=0;u<n.initial[s][r];u++)for(var p=0;p<2;p++){var g=new THREE.Mesh(t,a);g.position.y=.5,g.position.x=p>0?l:l-m+u*h,g.position.z=p<1?d:d-m+u*h,g.rotation.y=Math.ceil(2*Math.random())*Math.PI+p*Math.PI/2,g.scale.set(.3,.5,.5),o.add(g)}}o.receiveShadow=!0,e.objectReady(o)}),null}}});var o=function(e){var t=new THREE.PlaneGeometry(4,3,1,1),i=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading,emissive:{r:1,g:1,b:1}}),a=new THREE.Mesh(t,i);return this.objectReady(a),null};e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return o.call(this,e)}}}),e.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return o.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return o.call(this,e)}}}),e.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return o.call(this,e)}}});var s=[{text:"NW",classic2d:{x:2.5*-t,y:2.5*-t},orange3d:{x:2.5*-t,y:2.5*-t,rotate:-45,color:0}},{text:"NE",classic2d:{x:2.5*t,y:2.5*-t},orange3d:{x:2.5*t,y:2.5*-t,rotate:225,color:0}},{text:"SW",classic2d:{x:2.5*-t,y:2.5*t},orange3d:{x:2.5*-t,y:2.5*t,rotate:45,color:0}},{text:"SE",classic2d:{x:2.5*t,y:2.5*t},orange3d:{x:2.5*t,y:2.5*t,rotate:135,color:0}}],a=this.mViewOptions.fullPath;for(var r in s){var d=s[r];!function(i){e.createGadget("orient#"+i.text,{"2d":{type:"element",width:.9*t,height:.9*t,css:{color:"Black","text-align":"center"},initialClasses:"mana-select mana-select-view",x:i.classic2d.x,y:i.classic2d.y,z:4,display:function(e,t,a){e.css({"font-size":.3*a+"pt","line-height":1*a+"px"}).text(i.text)}},orange3d:{type:"meshfile",file:a+"/res/xd-view/meshes/select-smoothed.js",scale:[1,1,1],smooth:0,x:i.orange3d.x,y:i.orange3d.y,rotate:i.orange3d.rotate-90,materials:{square:{transparent:!0,opacity:0},"mat.arrow":{color:i.orange3d.color,shininess:255},ring:{shininess:10,emissive:{r:.6,g:.6,b:.6}}}}})}(d)}for(var l=0;l<this.g.Graph.length;l++)!function(i){e.createGadget("text#"+i,{"2d":{type:"element",width:.2*t,height:.2*t,initialClasses:"mana-text",z:4,display:function(e,t,a){e.css({"font-size":.5*a+"pt","line-height":1*a+"px"}).text(i)}},orange3d:{type:"custommesh3d",rotateX:-90,create:function(){var e=this;return this.getResource("font|"+a+"/res/xd-view/fonts/helvetiker_regular.typeface.json",function(t){var a=new THREE.TextGeometry(""+i,{size:.2,height:.05,curveSegments:6,font:t}),n=new THREE.MeshPhongMaterial({color:16711680}),o=new THREE.Mesh(a,n);e.objectReady(o)}),null}}}),e.createGadget("cell#"+i,{"2d":{type:"element",width:1.05*t,height:1.05*t,initialClasses:"mana-select",z:5},orange3d:{type:"meshfile",file:a+"/res/xd-view/meshes/select-smoothed.js",scale:[.9,.9,.9],smooth:0,z:0,castShadow:!1,materials:{square:{transparent:!0,opacity:0},"mat.arrow":{transparent:!0,opacity:0},ring:{shininess:10,emissive:{r:.6,g:.6,b:.6}}}}})}(l);for(var c=1;c>=-1;c-=2){for(var r=0;r<this.mOptions.damyoCount;r++)!function(n,o){e.createGadget("damyo#"+n+"#"+o,{"2d":{type:"sprite",file:a+"/res/images/manapieces.png",clipx:150,clipy:1==n?0:150,clipwidth:150,clipheight:150,width:t/.75,height:t/.75,x:t,z:7},orange3d:{type:"custommesh3d",create:function(e){i(this,e,"damyo",n)},rotate:1==n?90:-90,scale:[.3,.3,.3]}})}(c,r);for(var r=0;r<this.mOptions.roninCount;r++)!function(n,o){e.createGadget("ronin#"+n+"#"+o,{"2d":{type:"sprite",file:a+"/res/images/manapieces.png",clipx:0,clipy:1==n?0:150,clipwidth:150,clipheight:150,width:1.1*t,height:1.1*t,x:t*o,z:7},orange3d:{type:"custommesh3d",create:function(e){i(this,e,"ronin",n)},rotate:1==n?90:-90,scale:[.3,.3,.3]}})}(c,r)}e.createGadget("cancel",{"2d":{type:"element",initialClasses:"mana-cancel",y:t*this.mOptions.height/(this.mOptions.height+2)*(this.mOptions.height/2+.5),z:4},orange3d:{type:"meshfile",file:this.mViewOptions.fullPath+"/res/xd-view/meshes/select-ring-undo.js",smooth:0,scale:[1,1,1],materials:{ring:{shininess:10,emissive:{r:.6,g:.6,b:.6}}}}}),e.createGadget("mana",{"2d":{type:"sprite",file:this.mViewOptions.fullPath+"/res/images/manapieces.png",clipx:300,clipy:0,clipwidth:150,clipheight:150,width:.9*t,height:.9*t,z:8},orange3d:{type:"meshfile",file:this.mViewOptions.fullPath+"/res/xd-view/meshes/mana.js",scale:[1,1,1],materials:{manamat:{shininess:500,specular:{r:.3,g:.3,b:.3},diffuse:{r:.6,g:0,b:0},color:16711680}}}})},View.Game.xdBuildScene=function(e){var i=this;e.updateGadget("lightside",{"3d":{visible:!0}}),e.updateGadget("board",{"2d":{visible:!0},orange3d:{visible:!0,receiveShadow:!0,z:-500}}),e.updateGadget("cancel",{"2d":{width:.85*t,height:.85*t}});e.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,z:3e3,y:1==this.mViewAs?1e4:-1e4,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[3,3,3]}}),e.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,z:1500,x:1==this.mViewAs?-5500:5500,y:1==this.mViewAs?8900:-8900,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[.75,.75,.75]}}),e.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,z:3e3,y:1==this.mViewAs?-1e4:1e4,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[3,3,3]}}),e.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,z:1500,x:1==this.mViewAs?5500:-5500,y:1==this.mViewAs?-8900:8900,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[.75,.75,.75]}});for(var a=1;a>=-1;a-=2){for(var n=0;n<i.mOptions.damyoCount;n++){var o="damyo#"+a+"#"+n;e.updateGadget(o,{orange3d:{rotate:(i.mViewAs==JocGame.PLAYER_B?180:0)+(1==a?90:-90)}})}for(var n=0;n<i.mOptions.roninCount;n++){var o="ronin#"+a+"#"+n;e.updateGadget(o,{orange3d:{rotate:(i.mViewAs==JocGame.PLAYER_B?180:0)+(1==a?90:-90)}})}}},View.Board.getRCCoord=function(e,t,i){var a=Math.floor(t/e.mOptions.width),n=t%e.mOptions.width;if(arguments.length<3&&(i=this.orient),"NE"==i||"SW"==i){var o=a;a=n,n=o}return"NE"!=i&&"NW"!=i||(n=e.mOptions.width-1-n),"NE"!=i&&"SE"!=i||(a=e.mOptions.height-1-a),[a,n]},View.Board.getVCoord=function(e,i,a){e.mViewAs==JocGame.PLAYER_B&&(i=e.g.Graph.length-1-i);var n=this.getRCCoord(e,i,a),o=n[0],s=n[1];return[t*(-e.mOptions.height/2+o+.5),t*(-e.mOptions.width/2+s+.5)]},View.Board.pieceOutPosition=function(e,i){var a=e.mOptions.damyoCount,n=e.mOptions.roninCount+a,o=12e3/n,s=3.8*t;return"d"==i.t?x=(i.i-n/2+.5)*o:x=(a+i.i-n/2+.5)*o,e.mViewAs!=i.s&&(s=-s,x=-x),[x,s]},View.Board.manaUpdateCells=function(e,t,i){for(var a=0;a<t.g.Graph.length;a++){var n=this.getVCoord(t,a,i);e.updateGadget("text#"+a,{base:{visible:t.mNotation&&1!=this.stage,x:n[0],y:n[1]}}),e.updateGadget("cell#"+a,{base:{x:n[0],y:n[1]}})}},View.Board.xdDisplay=function(e,i){function a(t){for(var a=0;a<i.mOptions.damyoCount;a++){var n="damyo#"+t+"#"+a;e.updateGadget(n,{base:{visible:!1}})}for(var a=0;a<i.mOptions.roninCount;a++){var n="ronin#"+t+"#"+a;e.updateGadget(n,{base:{visible:!1}})}}if(this.manaUpdateCells(e,i,this.orient),1==this.stage)e.updateGadget("board",{"2d":{rotate:45,width:t*i.mOptions.width*.7,height:t*i.mOptions.height*.7},orange3d:{rotate:45}});else{var n=i.g.Orients[this.orient].angle;e.updateGadget("board",{"2d":{rotate:i.mViewAs==JocGame.PLAYER_B?n+180:n,width:t*i.mOptions.width/.75,height:t*i.mOptions.height/.75},orange3d:{rotate:i.mViewAs==JocGame.PLAYER_B?180-n+90:90-n}})}if(this.mana<0)e.updateGadget("mana",{base:{visible:!1,x:-7e3,y:0},orange3d:{scale:[.3,.3,.3]}});else{this.board[this.mana]>=0&&this.pieces[this.board[this.mana]].t;var o=this.getVCoord(i,this.mana,this.orient);e.updateGadget("mana",{base:{visible:!0,x:o[0],y:o[1],scale:[.3,.3,.3]}})}1==this.stage?(a(JocGame.PLAYER_A),a(JocGame.PLAYER_B)):this.stage<=2&&a(JocGame.PLAYER_B);for(var s=0;s<this.pieces.length;s++){var r=this.pieces[s],d=("d"==r.t?"damyo":"ronin")+"#"+r.s+"#"+r.i;if(r.p<0)if(this.stage<3)e.updateGadget(d,{base:{visible:!1,x:0,y:0},"2d":{},orange3d:{}});else{var o=this.pieceOutPosition(i,r);e.updateGadget(d,{base:{visible:!0,x:o[0],y:o[1]},"2d":{},orange3d:{}})}else{var o=this.getVCoord(i,r.p,this.orient);e.updateGadget(d,{base:{visible:!0,x:o[0],y:o[1]},"2d":{z:7},orange3d:{}})}}},View.Board.xdBuildHTStateMachine=function(i,a,n){function o(e,t){var o=Q.board[e],s=null,r=null;o>=0&&(s=Q.pieces[o],r=("r"==s.t?"ronin":"damyo")+"#"+s.s+"#"+s.i),i.updateGadget("cell#"+e,{base:{visible:!0,click:function(){a.smQueueEvent("E_CLICK",{pos:e,type:t})}},"2d":{classes:("cancel"==t?"mana-cancel mana-select-view":"")+(n.mShowMoves?" mana-select-view":"")}}),r&&i.updateGadget(r,{base:{click:function(){a.smQueueEvent("E_CLICK",{pos:e,type:t})}}}),e==Q.mana&&i.updateGadget("mana",{base:{click:function(){a.smQueueEvent("E_CLICK",{pos:e,type:t})}}})}function s(e){}function r(e){for(var t=0;t<n.g.Graph.length;t++)i.updateGadget("cell#"+t,{base:{visible:!1,click:null}});for(var a=-1;a<=1;a+=2){for(var o=0;o<n.mOptions.damyoCount;o++)i.updateGadget("damyo#"+a+"#"+o,{base:{click:null}});for(var o=0;o<n.mOptions.roninCount;o++)i.updateGadget("ronin#"+a+"#"+o,{base:{click:null}})}i.updateGadget("cancel",{base:{visible:!1,click:null}}),i.updateGadget("mana",{base:{click:null}})}function d(e){if(Q.stage<=2)a.smQueueEvent("E_STAGE"+Q.stage,{});else{var t=Q.manaMovablePieces(n);a.smQueueEvent("E_MOVE",{movables:t})}}function l(e){for(var o=0;o<n.g.Graph.length;o++)i.updateGadget("text#"+o,{base:{visible:!1}});i.updateGadget("board",{"2d":{width:t*n.mOptions.width*.7,height:t*n.mOptions.height*.7,rotate:45},orange3d:{rotate:45}});for(var s in H)!function(e){i.updateGadget("orient#"+e,{base:{visible:!0,click:function(){a.smQueueEvent("E_ORIENT",{orient:e})}}})}(H[s])}function c(e){for(var t in H)!function(e){i.updateGadget("orient#"+e,{base:{visible:!1,click:null}})}(H[t])}function h(e){n.PlaySound("chains"),i.updateGadget("board",{orange3d:{rotate:90-n.g.Orients[e.orient].angle},"2d":{rotate:n.g.Orients[e.orient].angle,width:t*n.mOptions.width/.75,height:t*n.mOptions.height/.75}},1e3,function(){a.smQueueEvent("E_ORIENT_DONE",{orient:e.orient})})}function m(e){Q.manaUpdateCells(i,n,e.orient)}function u(e){i.updateGadget("cancel",{base:{visible:!0,click:function(){a.smQueueEvent("E_CANCEL",{})}}})}function p(e){i.updateGadget("cancel",{base:{visible:!1,click:null}})}function g(e){n.PlaySound("sabers");for(var t=0;t<n.mOptions.damyoCount;t++){var a="damyo#"+Q.mWho+"#"+t,o=Q.pieceOutPosition(n,{t:"d",s:Q.mWho,i:t});i.updateGadget(a,{base:{visible:!0,x:o[0],y:o[1]}})}for(var t=0;t<n.mOptions.roninCount;t++){var a="ronin#"+Q.mWho+"#"+t,o=Q.pieceOutPosition(n,{t:"r",s:Q.mWho,i:t});i.updateGadget(a,{base:{visible:!0,x:o[0],y:o[1]}})}}function E(e){var o,s,r=null;if(Y.length<n.mOptions.damyoCount)r="damyo#"+Q.mWho+"#"+Y.length,o="d",s=Y.length;else{if(!(j.length<n.mOptions.roninCount))return void a.smQueueEvent("E_ALL_PLACED",{});r="ronin#"+Q.mWho+"#"+j.length,o="r",s=j.length}var d=Q.pieceOutPosition(n,{t:o,s:Q.mWho,i:s});i.updateGadget("cancel",{base:{visible:!0,x:d[0],y:d[1]},"2d":{width:.85*t,height:.85*t}}),i.updateGadget(r,{base:{click:function(){a.smQueueEvent("E_CANCEL",{})}}});for(var l=0;l<n.g.Graph.length;l++){var c=Q.getRCCoord(n,l,k||Q.orient),h=Q.getVCoord(n,l,k||Q.orient);if(Q.mWho==-1&&c[1]<=1||1==Q.mWho&&c[1]>=n.mOptions.width-2){for(var m=!1,u=0;u<Y.length;u++)Y[u]==l&&(m=!0);for(var u=0;u<j.length;u++)j[u]==l&&(m=!0);m||function(e){i.updateGadget("cell#"+e,{base:{visible:!0,x:h[0],y:h[1],click:function(){a.smQueueEvent("E_PLACE",{pos:e,pieceId:r,pieceType:o})}},"2d":{classes:n.mShowMoves?"mana-select-view":""}})}(l)}}}function v(e){k=e.orient}function f(t){e(n);var o=Q.getVCoord(n,t.pos,k||Q.orient);i.updateGadget(t.pieceId,{base:{x:o[0],y:o[1]}},400,function(){a.smQueueEvent("E_PLACED",t)})}function _(e){"d"==e.pieceType&&Y.push(e.pos),"r"==e.pieceType&&j.push(e.pos)}function b(e){var t={p:{d:Y,r:j}};1==Q.mWho&&(t.o=k),n.MakeMove(t)}function y(e){for(var t=0;t<n.mOptions.damyoCount;t++)i.updateGadget("damyo#"+Q.mWho+"#"+t,{base:{visible:!1,x:0,y:0}});for(var t=0;t<n.mOptions.roninCount;t++)i.updateGadget("ronin#"+Q.mWho+"#"+t,{base:{visible:!1,x:0,y:0}})}function S(e){Y=[],j=[]}function G(e){var t=[],i=-1;Q.mana>=0&&(i=n.g.CValue[Q.mana]);for(var a in z){var s=Q.pieces[a];(i<0||n.g.CValue[s.p]==i)&&t.push({type:"move",pieceIndex:a,movable:z[a]})}if(0==t.length){for(var a in z)t.push({type:"move",pieceIndex:a,movable:z[a]});if(Q.roninOut[Q.mWho]>0)for(var r=0;r<n.g.Graph.length;r++)Q.board[r]<0&&(n.mOptions.insertAnywhere||n.g.CValue[r]==i)&&t.push({type:"insert",pos:r})}for(var a=0;a<t.length;a++){var d=t[a];switch(d.type){case"insert":o(d.pos,"insert");break;case"move":o(Q.pieces[d.pieceIndex].p,"move")}}}function w(e){z=e.movables}function C(e){Q.board[e.pos]<0?a.smQueueEvent("E_CELL_CLICK",{pos:e.pos}):a.smQueueEvent("E_PIECE_CLICK",{pieceIndex:Q.board[e.pos]})}function A(e){var a=z[e.pieceIndex];for(var n in a)o(n,"dest");i.updateGadget("cancel",{"2d":{width:1.05*t,height:1.05*t}}),o(B,"cancel")}function O(e){"cancel"==e.type?a.smQueueEvent("E_CANCEL",{}):a.smQueueEvent("E_MOVE_COMPLETE",{pos:e.pos})}function x(e){W={m:[B,D]}}function N(e){D=e.pos}function M(e){B=e.pos}function T(t){function o(){e(n);var t=Q.getVCoord(n,c[h],Q.orient);i.updateGadget(l,{base:{x:t[0],y:t[1]},"2d":{z:8},orange3d:{}},s,function(){h++,h==c.length?a.smQueueEvent("E_ANIM_DONE",{}):o()})}var s=400,r=Q.board[B],d=Q.pieces[r],l=("d"==d.t?"damyo":"ronin")+"#"+Q.mWho+"#"+d.i,c=z[r][D],h=1;o()}function I(t){for(var o,s=0;s<Q.pieces.length&&(o=Q.pieces[s],!("r"==o.t&&o.s==Q.mWho&&o.p<0));s++);var r="ronin#"+o.s+"#"+o.i;i.updateGadget(r,{base:{visible:!0}});var d=Q.getVCoord(n,B,Q.orient);e(n),i.updateGadget(r,{base:{visible:!0,x:d[0],y:d[1]}},400,function(){a.smQueueEvent("E_ANIM_DONE",{})})}function L(e){W={i:B}}function P(e){n.MakeMove(W)}function V(){e(n,"mana");var o=W.m?W.m[1]:W.i;if(o==Q.mana)return void a.smQueueEvent("E_ANIM_DONE",{});Q.mana<0&&i.updateGadget("mana",{"2d":{x:-t*n.mOptions.width/(n.mOptions.width+2)*(n.mOptions.width/2+.5),y:0,visible:!0},orange3d:{visible:!0}});var s=Q.getVCoord(n,o,Q.orient);i.updateGadget("mana",{base:{visible:!0},"3d":{z:1e3}},200,function(){i.updateGadget("mana",{base:{x:s[0],y:s[1]}},400,function(){i.updateGadget("mana",{"3d":{z:0}},200,function(){a.smQueueEvent("E_ANIM_DONE",{})})})})}function R(){var e=Q.board[D];if(e<0)a.smQueueEvent("E_ANIM_DONE",{});else{var t=Q.pieces[e],o=Q.pieceOutPosition(n,t);"d"==t.t?n.PlaySound("deathdamyo"):(n.PlaySound("sabers"),n.PlaySound("death"+Math.ceil(3*Math.random()))),i.updateGadget(("d"==t.t?"damyo#":"ronin#")+t.s+"#"+t.i,{base:{x:o[0],y:o[1],visible:!0}},400,function(){a.smQueueEvent("E_ANIM_DONE",{})})}}var k,z,B,D,W,Q=this,H=["NW","NE","SW","SE"],Y=[],j=[];a.smTransition("S_INIT","E_INIT","S_READY",[s]),a.smEntering("S_READY",[d]),a.smTransition("S_READY","E_STAGE1","S_STAGE1",[]),a.smEntering("S_STAGE1",[y,l]),a.smTransition("S_STAGE1","E_ORIENT","S_ORIENTING",[h]),a.smLeaving("S_STAGE1",[r,c]),a.smTransition("S_ORIENTING","E_ORIENT_DONE","S_PLACING",[v,m,g]),a.smTransition("S_READY","E_STAGE2","S_PLACING",[m,g]),a.smTransition("S_READY","E_STAGE3","S_PLACING",[m,y]),a.smTransition("S_READY","E_MOVE","S_SELECT",[w]),a.smEntering("S_SELECT",[G]),a.smLeaving("S_SELECT",[r]),a.smTransition("S_SELECT","E_CLICK",null,[M,C]),a.smTransition("S_SELECT","E_PIECE_CLICK","S_SELECT2",[]),a.smTransition("S_SELECT","E_CELL_CLICK","S_ANIM_INSERT",[M,I]),a.smTransition("S_ANIM_INSERT","E_ANIM_DONE","S_ANIM_MANA",[L]),a.smEntering("S_SELECT2",[A]),a.smTransition("S_SELECT2","E_CLICK",null,[O]),a.smTransition("S_SELECT2","E_CANCEL","S_SELECT",[]),a.smTransition("S_SELECT2","E_MOVE_COMPLETE","S_ANIM_MOVE",[N,T]),a.smLeaving("S_SELECT2",[r]),a.smTransition("S_ANIM_MOVE","E_ANIM_DONE","S_ANIM_CAPT",[x]),a.smTransition("S_PLACING","E_CANCEL","S_READY",[S]),a.smTransition("S_PLACING","E_ALL_PLACED",null,[b]),a.smEntering("S_PLACING",[u,E]),a.smLeaving("S_PLACING",[p,r]),a.smTransition("S_PLACING","E_PLACE","S_ANIM_PLACE",[_,f]),a.smEntering("S_ANIM_PLACE",[]),a.smTransition("S_ANIM_PLACE","E_PLACED","S_PLACING",[]),a.smEntering("S_ANIM_MANA",[V]),a.smTransition("S_ANIM_MANA","E_ANIM_DONE",null,[P]),a.smEntering("S_ANIM_CAPT",[R]),a.smTransition("S_ANIM_CAPT","E_ANIM_DONE","S_ANIM_MANA",[]),a.smTransition(["S_READY","S_STAGE1","S_ORIENTING","S_PLACING","S_ANIM_PLACE","S_SELECT","S_SELECT2","S_ANIM_MOVE","S_ANIM_INSERT","S_ANIM_MANA"],"E_END","S_END",[]),a.smEntering("S_END",[r])},View.Board.xdPlayedMove=function(i,a,n){function o(){function t(){e(a);var n=o[s],r=l.getVCoord(a,n.pos,l.orient);i.updateGadget(n.pieceId,{base:{x:r[0],y:r[1]}},300,function(){s++,s==o.length?a.MoveShown():t()})}for(var o=[],s=0,r=0;r<n.p.d.length;r++)o.push({pieceId:"damyo#"+l.mWho+"#"+r,pos:n.p.d[r],t:"d",i:r,s:l.mWho});for(var r=0;r<n.p.r.length;r++)o.push({pieceId:"ronin#"+l.mWho+"#"+r,pos:n.p.r[r],t:"d",i:r,s:l.mWho});for(var r=0;r<o.length;r++){var d=l.pieceOutPosition(a,o[r]);i.updateGadget(o[r].pieceId,{base:{visible:!0,x:d[0],y:d[1]}})}t()}function s(){if(a.mOldBoard.mana==l.mana)return void a.MoveShown();a.mOldBoard.mana<0&&i.updateGadget("mana",{base:{x:-7e3,y:0,visible:!0}});var t=l.getVCoord(a,l.mana,l.orient);i.updateGadget("mana",{base:{visible:!0},"3d":{z:1e3}},200,function(){e(a,"mana"),i.updateGadget("mana",{base:{x:t[0],y:t[1]}},400,function(){i.updateGadget("mana",{"3d":{z:0}},200,function(){a.MoveShown()})})})}function r(e){"d"==e.t?a.PlaySound("deathdamyo"):(a.PlaySound("sabers"),a.PlaySound("death"+Math.ceil(3*Math.random())));var t=l.pieceOutPosition(a,e);i.updateGadget(("d"==e.t?"damyo#":"ronin#")+e.s+"#"+e.i,{base:{x:t[0],y:t[1],visible:!0}},400,function(){s()})}function d(){e(a);var t=l.getVCoord(a,g[E],l.orient);i.updateGadget(p,{base:{x:t[0],y:t[1]},"2d":{z:8},orange3d:{}},h,function(){E++,E==g.length?a.mOldBoard.board[n.m[1]]>=0?r(a.mOldBoard.pieces[a.mOldBoard.board[n.m[1]]]):s():d()})}var l=this;if(n.o)i.updateGadget("board",{"2d":{rotate:a.g.Orients[n.o].angle,width:t*a.mOptions.width/.75,height:t*a.mOptions.height/.75},orange3d:{rotate:90-a.g.Orients[n.o].angle}},1e3,function(){o()});else if(n.p)o();else if(n.m){var c=a.mOldBoard.manaMovablePieces(a),h=400,m=a.mOldBoard.board[n.m[0]],u=a.mOldBoard.pieces[m],p=("d"==u.t?"damyo":"ronin")+"#"+this.mWho+"#"+u.i,g=c[m][n.m[1]],E=1;d()}else if(void 0!==n.i){for(var u,v=0;v<a.mOldBoard.pieces.length&&(u=a.mOldBoard.pieces[v],!("r"==u.t&&u.s==this.mWho&&u.p<0));v++);var p="ronin#"+u.s+"#"+u.i;i.updateGadget(p,{base:{visible:!0}});var f=this.getVCoord(a,n.i,this.orient);i.updateGadget(p,{base:{visible:!0,x:f[0],y:f[1]}},400,function(){s()})}return!1}}();