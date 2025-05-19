var Snake=(function(){
  const INITIAL_TAIL=4;
  var fixedTail=true;

  var intervalID;
  
var tileCount=10;
  var gridSize=400/tileCount;

const   INTIAL_PLAYER={x:math.floor(tileCount/2),y:math.floor(tileCount/2)};

var velocity={x:0,y:0};
var player={x:INITIAL_PLAYER.x,y:INITIAL_PLAYER.y};

var walls:true;

  var fruit={x:1,y:1};

  var trail=[];
  var trail=INITIAL_TRAIL;

  var rewards=0;
  var points=0;
  var maxpoints=0;

           var ActionEnum={'none':0,'up':1,'down':2,'left':3,'right':4};
  object.freeze(ActionEnum);
  var lastAction=ActionEnum.none;

           
