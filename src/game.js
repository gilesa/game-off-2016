var gui = require( './gui.js' );
var Grid = require( './Grid.js' );
var Robot = require( './Robot.js' );

function init() {
    gui.init();

    var player = new Robot();
    var grid = new Grid( {
        width: 100,
        height: 100,
        robots: [ player ]
    } );
    console.log( grid );

    gui.loadControls( player.ACTIONS );
    gui.setPlayer( player.status() );
}

init();
