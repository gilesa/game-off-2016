var Robot = require( './Robot.js' );

function Player( name ) {
	this.name = name;
	this.score = 0;
	this.robot = new Robot();
}

module.exports = Player;
