window.onload = function() {
  canv=document.getElementById("world");
  ctx = canv.getContext("2d");
  setup();
}

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Constraint = Matter.Constraint;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;
var engine;
var world;
var mConstraint;

function setup() {
  engine = Engine.create();
  var render = Render.create({
    element: document.body,
    engine: engine,
    canvas: canv,
    options: {
      width: canv.width,
      height: canv.height,
      wireframes: false
    }
  });
  
  world = engine.world;
  Engine.run(engine);
  Render.run(render);
  
  for (var x=595; x<=755; x+=40) {
    var fixed = true;
    var p = new Box(x, 100, 0, fixed)
    fixed = false;
    var p1 = (x==595) ? new Box(x, 100, 20, fixed, 0.002)  : new Box(x, 100, 20, fixed, 0.001);
    World.add(world, [p.body, p1.body]);
    
    var options = {
      bodyA: p.body,
      bodyB: p1.body,
      length: 300,
      stiffness: 1
    }
    
    var constraint = Constraint.create(options);
    World.add(world, constraint);
  }
  
  var canvasmouse = Mouse.create(canv.elt);
  var options = {
    mouse: canvasmouse
  }
  
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(this.r, 0);
  ctx.stroke();
}