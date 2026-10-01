function Box(x, y, r, fixed, d) {
  var options = {
    density: d,
    friction: 0,
    frictionAir: 0,
    restitution: 1,
    frictionStatic: 0,
    inertia: Infinity,
    inverseInertia: 0,
    isStatic: fixed
  }
  
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
}