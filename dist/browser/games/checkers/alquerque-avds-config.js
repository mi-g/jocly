exports.config = {"status":true,"model":{"plazza":"true","title-en":"Alquerque AvdS","module":"checkers","maxLevel":20,"summary":"Alquerque rules proposal from a Draughts historian.","thumbnail":"alquerque-avds3-thumb.png","rules":"rules-alquerque-avds.html","description":"description.html","credits":"credits-avds.html","js":["checkersbase-model.js","alquerque-avds-model.js"],"gameOptions":{"preventRepeat":true,"width":5,"height":5,"initial":{"a":[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,3],[2,4]],"b":[[4,0],[4,1],[4,2],[4,3],[4,4],[3,0],[3,1],[3,2],[3,3],[3,4],[2,0],[2,1]]},"variant":{"canStepBack":true,"mustMoveForward":true,"lastRowFreeze":false,"noMove":"lose","longRangeKing":true,"kingCaptureShort":false,"lastRowCrown":true,"canCaptureBackward":false}},"levels":[{"label":"Fast","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"isDefault":true},{"label":"Beginner","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":0.5,"maxNodes":100,"maxLoops":200},{"label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":1,"maxNodes":2500,"maxLoops":500},{"label":"Medium","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":2,"maxNodes":5500,"maxLoops":500},{"label":"Hard","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.5,"maxDuration":5,"maxNodes":2000,"maxLoops":3500},{"label":"Expert","ai":"uct","c":0.8,"playoutDepth":0,"minVisitsExpand":1,"ignoreLeaf":false,"uncertaintyFactor":5,"propagateMultiVisits":false,"maxDuration":60,"maxNodes":15000,"maxLoops":8000}]},"view":{"js":["checkers-xd-view.js","checkers-xd-view-captbreak.js","alquerque-xd-view.js"],"xdView":true,"css":["checkersbase.css","alquerque.css"],"title-en":"Alquerque Bell View","skins":[{"name":"alquerque3d","title":"3D Classic","3d":true,"camera":{"radius":20,"elevationAngle":45,"limitCamMoves":true},"world":{"lightIntensity":0.8,"color":0,"fog":false,"lightPosition":{"x":-5,"y":18,"z":5},"lightShadowDarkness":0.55,"ambientLightColor":0},"preload":["image|/res/xd-view/meshes/red.png","image|/res/xd-view/meshes/black.png","image|/res/xd-view/meshes/red-king.png","image|/res/xd-view/meshes/black-king.png","image|/res/images/alquarqueboard1.jpg","image|/res/xd-view/meshes/skybox/nx.jpg","image|/res/xd-view/meshes/skybox/ny.jpg","image|/res/xd-view/meshes/skybox/nz.jpg","image|/res/xd-view/meshes/skybox/px.jpg","image|/res/xd-view/meshes/skybox/py.jpg","image|/res/xd-view/meshes/skybox/pz.jpg","smoothedfilegeo|0|/res/xd-view/meshes/board-checkers-slot.js","smoothedfilegeo|0|/res/xd-view/meshes/board-alquerque-external-frame.js","smoothedfilegeo|0|/res/xd-view/meshes/board-checkers-triangle.js","smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js"]},{"name":"2d-wood-alquerque","title":"Wood"}],"visuals":{"600x600":["res/visuals/alquerque-avds3-600x600-3d.jpg","res/visuals/alquerque-avds3-600x600-2d.jpg"]},"module":"checkers","preferredRatio":1,"switchable":true,"animateSelfMoves":false,"useNotation":true,"useShowMoves":true,"sounds":{"move1":"alq_move1","move2":"alq_move2","move3":"alq_move3","move4":"alq_move2","tac1":"alq_tac1","tac2":"alq_tac2","tac3":"alq_tac1","promo":null,"usermove":null},"defaultOptions":{"sounds":true,"notation":false,"moves":true}}}