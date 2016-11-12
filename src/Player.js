var Robot = require( './Robot.js' );

function Player( opts ) {
	opts = opts || {};
	this.name = opts.name || '';
	this.colour = opts.colour || '#000000';
	this.score = 0;
	this.robot = new Robot( {
		colour: this.colour
	} );
}

module.exports = Player;
