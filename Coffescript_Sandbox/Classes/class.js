// Generated by CoffeeScript 1.9.2
var Animal, Avian, Mammal, Reptile,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.legs = function(text) {
    return $("ul").append("" + text);
  };

  return Animal;

})();

Mammal = (function(superClass) {
  extend(Mammal, superClass);

  function Mammal() {
    return Mammal.__super__.constructor.apply(this, arguments);
  }

  Mammal.prototype.legs = function(amount) {
    var speed;
    speed = parseInt(amount) * 15;
    return Mammal.__super__.legs.call(this, "<li><font color='red'>" + this.name + " has " + amount + " legs and because they're a mammal, can travel at " + speed + " kilometers per hour.</font></li>");
  };

  return Mammal;

})(Animal);

Reptile = (function(superClass) {
  extend(Reptile, superClass);

  function Reptile() {
    return Reptile.__super__.constructor.apply(this, arguments);
  }

  Reptile.prototype.legs = function(amount) {
    var speed;
    speed = parseInt(amount) * 5 + 40;
    return Reptile.__super__.legs.call(this, "<li><font color='green'>" + this.name + " has " + amount + " legs and because they're a reptile, can travel at " + speed + " kilometers per hour.</font></li>");
  };

  return Reptile;

})(Animal);

Avian = (function(superClass) {
  extend(Avian, superClass);

  function Avian() {
    return Avian.__super__.constructor.apply(this, arguments);
  }

  Avian.prototype.legs = function(amount) {
    var speed;
    speed = 50;
    return Avian.__super__.legs.call(this, "<li><font color='blue'>" + this.name + " has " + amount + " legs and because they're Avian, can travel at " + speed + " kilometers per hour.</font></li>");
  };

  return Avian;

})(Animal);