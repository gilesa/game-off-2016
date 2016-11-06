/*
 * Robot
 *
 */

var DIRS = {
    N: -1,
    S: 1,
    E: 1,
    W: -1
}

function Robot() {
    // Stats
    this.maxHealth = 100;
    this.maxPower = 100;
    this.speed = 1;
    this.attack = 10;

    // State
    this.health = this.maxHealth;
    this.power = this.maxPower;
    this.position = {
        x: 0,
        y: 0
    }
    this.direction = DIRS.S;
    this.axis = 'y';
    this.action = null;

    // Actions
    // move forward
    // move backward
    // turn left
    // turn right
    // attack
    // self desctruct
    // upgrade
    // repair
}

Robot.prototype.move = function( direction ) {
    this.position[ this.axis ] += this.speed * direction;
}
Robot.prototype.moveForward = function() {
    this.move( this.direction );
}
Robot.prototype.moveBackward = function() {    
    this.move( -this.direction );
}

Robot.prototype.turn = function( modifier ) {
    if( this.axis == 'y' ) {
        this.axis = 'x';
        this.direction *= 1 * modifier;
    }
    else {
        this.axis = 'y';
        this.direction *= -1 * modifier;
    }
}
Robot.prototype.turnLeft = function() {
    this.turn( 1 );   
}
Robot.prototype.turnRight = function() {
    this.turn( -1 );
}

Robot.prototype.attack = function() {
    
}

Robot.prototype.selfDestruct = function() {
    
}

module.exports = Robot;