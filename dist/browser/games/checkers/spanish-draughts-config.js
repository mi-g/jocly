exports.config = {"status":true,"model":{"plazza":"true","title-en":"Spanish Draughts","module":"checkers","maxLevel":20,"summary":"Same as international checkers on a 8x8 board, no backward capture.","thumbnail":"draughts8-thumb3d.png","rules":"rules-spanish-draughts.html","description":"description.html","credits":"credits.html","js":["checkersbase-model.js","draughts-model.js"],"gameOptions":{"preventRepeat":true,"width":4,"height":8,"initial":{"a":[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3]],"b":[[7,0],[7,1],[7,2],[7,3],[6,0],[6,1],[6,2],[6,3],[5,0],[5,1],[5,2],[5,3]]},"variant":{"mustMoveForwardStrict":true,"lastRowCrown":true,"captureLongestLine":true,"lastRowFactor":0.001,"canCaptureBackward":false},"uctTransposition":"state"},"levels":[{"label":"Fast","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"isDefault":true},{"label":"Beginner","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":0.5,"maxNodes":100,"maxLoops":200},{"label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"maxNodes":2500,"maxLoops":500},{"label":"Medium","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":2,"maxNodes":5500,"maxLoops":500},{"label":"Hard","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":5,"maxNodes":2000,"maxLoops":3500},{"label":"Expert","ai":"uct","c":0.8,"playoutDepth":0,"minVisitsExpand":1,"ignoreLeaf":false,"uncertaintyFactor":5,"propagateMultiVisits":false,"maxDuration":60,"maxNodes":15000,"maxLoops":8000}]},"view":{"js":["checkers-xd-view.js","draughts8-xd-view.js"],"css":["checkersbase.css","draughts.css"],"title-en":"Draughts View","skins":[{"name":"classic3d","title":"3D Classic","3d":true,"camera":{"radius":24,"elevationAngle":65,"limitCamMoves":true,"distMax":30,"fov":35},"world":{"lightIntensity":0.7,"skyLightIntensity":0.5,"lightPosition":{"x":-15,"y":15,"z":0},"lightShadowDarkness":0.45,"ambientLightColor":8947848,"color":4686804,"fog":false},"preload":["image|/res/images/wood-chipboard-5.jpg","image|/res/xd-view/meshes/piecetop-bump.jpg","image|/res/xd-view/meshes/piecediff.jpg","image|/res/xd-view/meshes/piecetop-queen-mask.png","smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js","smoothedfilegeo|0|/res/xd-view/meshes/piece-v2.js"]},{"name":"turtles3d","title":"3D Turtles","3d":true,"camera":{"radius":14,"elevationAngle":45,"limitCamMoves":true,"distMax":40},"world":{"lightIntensity":0,"skyLightIntensity":3,"fog":true,"color":3645658,"lightPosition":{"x":-5,"y":18,"z":5},"lightShadowDarkness":0.55,"ambientLightColor":4473924},"preload":["image|/res/images/wood-chipboard-5.jpg","image|/res/xd-view/meshes/turtle.png","image|/res/xd-view/meshes/star.png","image|/res/xd-view/meshes/rock.jpg","smoothedfilegeo|0|/res/xd-view/meshes/turtle-legs-smoothed.js","smoothedfilegeo|0|/res/xd-view/meshes/turtle-head-smoothed.js","smoothedfilegeo|0|/res/xd-view/meshes/turtle-tail-smoothed.js","smoothedfilegeo|0|/res/xd-view/meshes/turtle-hotel.js","smoothedfilegeo|0|/res/xd-view/meshes/turtle-house.js","smoothedfilegeo|0|/res/xd-view/meshes/rainbowflat.js","smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js","smoothedfilegeo|0|/res/xd-view/meshes/rocksmoothed.js","smoothedfilegeo|0|/res/xd-view/meshes/turtle-fences.js"]},{"name":"classical","title":"Classic"},{"name":"marble0","title":"Marble"},{"name":"wood0","title":"Wood"},{"name":"green","title":"Green"}],"visuals":{"600x600":["res/visuals/brazilian-draughts-600x600-3d.jpg","res/visuals/brazilian-draughts-600x600-2d.jpg"]},"sounds":{"move1":"move1","move2":"move2","move3":"move3","move4":"move4","tac1":"tac1","tac2":"tac1","tac3":"tac1","promo":"promo","usermove":null},"module":"checkers","preferredRatio":1,"switchable":true,"animateSelfMoves":false,"useNotation":true,"useShowMoves":true,"defaultOptions":{"sounds":true,"notation":false,"moves":true},"xdView":true}}