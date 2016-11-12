var gui = require( './gui.js' );
var Grid = require( './Grid.js' );
var Player = require( './Player.js' );

function init() {
    var player = new Player( 'Player 1' );
    var grid = new Grid( {
        width: 100,
        height: 100,
        robots: [ player.robot ]
    } );
    console.log( grid );

    gui.init( {
        controls: player.robot.ACTIONS,
        players: [ player ],
        robot: player.robot.status(),
        endTurn: function() {
            console.log( 'End Turn' );
        }
    } );
}

init();
