var canvas;
var ctx;

var CELL_SIZE = 30;
var CELL_HALF = Math.round( CELL_SIZE / 2 );

function init( opts ) {
	canvas = document.getElementById( 'canvas' );
	ctx = canvas.getContext( '2d' );

	opts = opts || {};

	var grid = opts.grid || {
		width: 0,
		height: 0,
		positions: []
	};

	canvas.width = grid.width * CELL_SIZE;
	canvas.height = grid.height * CELL_SIZE;

	for( var x = 0; x <= grid.width; x++ ) {
		drawLine( 'x', x );
	}
	for( var y = 0; y <= grid.height; y++ ) {
		drawLine( 'y', y );
	}

	for( var x = 0; x < grid.positions.length; x++ ) {
		for( var y = 0; y < grid.positions[ x ].length; y++ ) {
			var pos = grid.positions[ x ][ y ];
			if( pos.environment ) {
				drawEnironment( pos.environment, x, y );
			}
			if( pos.item ) {
				drawItem( pos.item, x, y );
			}
			if( pos.robot ) {
				drawRobot( pos.robot, x, y );
			}
		}
	}
}

function drawLine( axis, cell ) {
	position = cell * CELL_SIZE;
	
	ctx.strokeStyle = '#AAAAAA';
	ctx.beginPath();

	if( axis == 'x' ) {
		ctx.moveTo( position, 0 );
		ctx.lineTo( position, canvas.width );
	}
	else {
		ctx.moveTo( 0, position );
		ctx.lineTo( canvas.height, position );
	}

	ctx.stroke();
}

function drawEnironment( environment, x, y ) {

}

function drawItem( item, x, y ) {

}

function drawRobot( robot, x, y ) {
	ctx.strokeStyle = robot.colour;
	ctx.fillStyle = robot.colour;
	ctx.beginPath();
	ctx.arc( x + CELL_HALF, y + CELL_HALF, CELL_HALF, 0, Math.PI * 2 );
	ctx.fill();
}

module.exports = {
	init: init
}
