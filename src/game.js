var gui = require( './gui.js' );
var renderer = require( './renderer.js' );
var Grid = require( './Grid.js' );
var Player = require( './Player.js' );

function init() {
    var player = new Player( {
        name: 'Player 1',
        colour: '#fffa00'
    } );

    var grid = new Grid( {
        width: 20,
        height: 20,
        robots: [ player.robot ]
    } );

    gui.init( {
        controls: player.robot.ACTIONS,
        players: [ player ],
        robot: player.robot.status(),
        endTurn: function() {
            console.log( 'End Turn' );
        }
    } );

    renderer.init( {
        grid: grid
    } );
}

init();
