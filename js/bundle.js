(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Grid
 *
 */

function Grid( sizeX, sizeY, enviroments, items ) {
    var positions = [];
    for( var x = 0; x < sizeX; x++ ) {
        positions[ x ] = [];
        for( var y = 0; y < sizeY; y++ ) {
            positions[ x ][ y ] = new Position();
        }
    }

    enviroments.forEach( function( enviroment ) {
        positions[ enviroment.x ][ enviroment.y ] = enviroment;
    } );
    items.forEach( function( item ) {
        positions[ item.x ][ item.y ] = item;
    } );

}

function Position() {
    var enviroment = null;
    var item = null;
    var robot = null;
}

module.exports = Grid;

},{}],2:[function(require,module,exports){
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
    var maxHealth = 100;
    var maxPower = 100;
    var speed = 10;
    var attack = 10;

    // State
    var health = maxHealth;
    var power = maxPower;
    var position = {
        x: 0,
        y: 0
    }
    var direction = DIRS.S;
    var axis = 'y';
    var action = null;

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

},{}],3:[function(require,module,exports){
var Grid = require( './Grid.js' );
var Robot = require( './Robot.js' );

function init() {
    var test = new Robot();
    debugger
    test.moveForward();
    console.log( test );        
}

init();

},{"./Grid.js":1,"./Robot.js":2}]},{},[3])


//# sourceMappingURL=bundle.js.map
