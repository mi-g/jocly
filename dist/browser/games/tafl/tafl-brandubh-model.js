exports.model=Model={Game:{},Board:{},Move:{}},function(){function t(t){var i=t%e;return[i,(t-i)/e]}function i(t,i){return i*e+t}var e;Model.Game.InitGame=function(){var s=this;e=2*this.mOptions.centerDistance+1;var r=[[0,-1],[1,0],[0,1],[-1,0]];this.g.attackersCount=this.mOptions.initial.attackers.length,this.g.defendersCount=this.mOptions.initial.defenders.soldiers.length,this.g.excludeMap={},this.mOptions.exclude.forEach(function(t){s.g.excludeMap[t]=!0}),this.g.home=this.mOptions.initial.defenders.king,this.g.Graph=[],this.g.borders={};for(var a=0;a<e*e;a++){var o=[],n=t(a);r.forEach(function(t){var r=n[0]+t[0];if(r<0||r>=e)o.push(null),s.g.borders[a]=!0;else{var h=n[1]+t[1];if(h<0||h>=e)o.push(null),s.g.borders[a]=!0;else{var d=i(r,h);s.g.excludeMap[d]?o.push(null):o.push(d)}}}),this.g.Graph.push(o)}this.zobrist=new JocGame.Zobrist({board:{type:"array",size:e*e,values:["s1","s-1","k1","k-1"]}})},Model.Move.Init=function(t){var i=this;if(this.f=t.f,this.t=t.t,this.c=[],t.c)for(var e=0;e<t.c.length;e++)i.c.push(t.c[e])},Model.Move.CopyFrom=function(t){this.Init(t)},Model.Move.ToString=function(){var t=this.f+">"+this.t;return this.c.length>0&&(t+="x"+this.c.join(",")),t},Model.Board.Init=function(t){this.zSign=0},Model.Board.InitialPosition=function(i){function s(t,e,s){r.zSign=i.zobrist.update(r.zSign,"board",s+e,t),r.board[t]=r.pieces.length,r.pieces.push({i:r.pieces.length,p:t,s:e,t:s})}var r=this;this.board=[],this.pieces=[];for(var a=0;a<e*e;a++)this.board.push(-1);var o=i.mOptions.attackers;s(i.mOptions.initial.defenders.king,-o,"k");var n=i.mOptions.initial.defenders.soldiers;this.defendersCount=0;for(var h=0;h<n.length;h++)s(n[h],-o,"s"),this.defendersCount++;this.defendersCount=n.length;var d=i.mOptions.initial.attackers;this.attackersCount=0;for(var h=0;h<d.length;h++){s(d[h],o,"s");t(d[h]);this.attackersCount++}},Model.Board.CopyFrom=function(t){var i=this;this.board=[];for(var e=t.board,s=0;s<e.length;s++)i.board.push(e[s]);this.pieces=[];for(var r=t.pieces,a=0;a<r.length;a++){var o=r[a];i.pieces.push({i:o.i,p:o.p,s:o.s,t:o.t})}this.defendersCount=t.defendersCount,this.attackersCount=t.attackersCount,this.mWho=t.mWho,this.zSign=t.zSign},Model.Board.GenerateMoves=function(t){for(var i=this,e=[],s=0;s<this.pieces.length;s++){var r=this.pieces[s];if(!(r.s!=i.mWho||r.p<0))for(var a=0;a<4;a++)for(var o=t.g.Graph[r.p][a];null!=o;){var n=i.board[o];if(!(n<0)||o==t.g.home&&t.mOptions.privateHome&&"k"!=r.t)break;for(var h={f:r.p,t:o,c:[]},d=0;d<4;d++){var p=t.g.Graph[o][d];if(null!=p){var c=i.board[p];if(c>=0){var f=i.pieces[c];if(f.s==-r.s)if("k"==f.t){for(var u=0;u<4;u++){var l=t.g.Graph[p][u];if(null==l)break;var v=i.board[l];if(v<0){if(l!=o&&(l!=t.g.home||!t.mOptions.homeCatch))break}else{var g=i.pieces[v];if(g.s==f.s)break}}4==u&&h.c.push(p)}else{var l=t.g.Graph[p][d];if(null!=l){var v=i.board[l];if(l==t.g.home&&t.mOptions.homeCatch)h.c.push(p);else if(v>=0){var g=i.pieces[v];g.s==r.s&&h.c.push(p)}}}}}}if(e.push(h),!t.mOptions.longMove)break;o=t.g.Graph[o][a]}}this.mMoves=e},Model.Board.Evaluate=function(i){var e="debug"==arguments[3];if(this.mEvaluation=0,this.pieces[0].p<0)return this.mFinished=!0,void(this.mWinner=i.mOptions.attackers);if(this.pieces[0].p in i.g.borders)return this.mFinished=!0,void(this.mWinner=-i.mOptions.attackers);if(i.GetRepeatOccurence(this)>2)return this.mFinished=!0,void(this.mWinner=JocGame.DRAW);for(var s=this.pieces[0].p,r=t(s),a=0,o=i.mOptions.initial.attackers.length+1;o<this.pieces.length;o++){var n=this.pieces[o];if(n.p>=0){var h=t(n.p);a+=Math.max(Math.abs(h[0]-r[0]),Math.abs(h[1]-r[1]))}}var d={},p={};d[s]=1;for(var c=1,f=0,u=0;c>0;){var l={};c=0;for(var v in d){for(var g=d[v],m=g/4,b=i.g.Graph[v],k=0;k<4;k++)for(var M=b[k];M&&!(this.board[M]>=0)&&(M in p||M in d||(M in i.g.borders?f+=g:M in l?l[M]+=m:(u++,c++,l[M]=m)),i.mOptions.longMove);)M=i.g.Graph[M][k];p[v]=g}d=l}var O={attackersCount:this.attackersCount,defendersCount:this.defendersCount,kingPath:f,kingFreedom:u,distKing:a},C=i.mOptions.levelOptions;for(var z in O){var G=O[z],S=C[z+"Factor"]||0,E=G*S;e&&console.log(z,"=",G,"*",S,"=>",E),this.mEvaluation+=E}this.mEvaluation*=i.mOptions.attackers,e&&console.log("Evaluation",this.mEvaluation)},Model.Board.ApplyMove=function(i,e){var s=this,r=this.board[e.f],a=this.pieces[r];if(this.zSign=i.zobrist.update(this.zSign,"board",a.t+a.s,e.f),this.zSign=i.zobrist.update(this.zSign,"board",a.t+a.s,e.t),this.board[e.f]=-1,this.board[e.t]=r,a.p=e.t,this.mWho==i.mOptions.attackers){t(e.f),t(e.t)}for(var o=e.c,n=0;n<o.length;n++){var h=o[n],d=s.board[h],p=s.pieces[d];s.zSign=i.zobrist.update(s.zSign,"board",p.t+p.s,h),s.board[h]=-1,p.p=-1,s.mWho==-i.mOptions.attackers?s.attackersCount--:"s"==p.t&&s.defendersCount--}},Model.Board.taflIntegrity=function(t){var i=this,e=0,s=0;this.board.forEach(function(r,a){if(r>=0){var o=i.pieces[r];o.p,"s"==o.t&&(o.s==t.mOptions.attackers?e++:s++)}}),this.attackersCount,this.defendersCount,this.pieces.forEach(function(t,e){t.p>=0&&i.board[t.p]})},Model.Board.GetSignature=function(){return this.zSign}}();