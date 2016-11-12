/*
 * Grid
 *
 */

function Grid( opts ) {
    opts = opts || {};
    this.width = opts.width || 0;
    this.height = opts.height || 0;
    this.robots = opts.robots || [];
    this.enviroments = opts.enviroments || [];
    this.items = opts.items || [];

    var positions = [];
    for( var x = 0; x < this.width; x++ ) {
        positions[ x ] = [];
        for( var y = 0; y < this.height; y++ ) {
            positions[ x ][ y ] = new Position();
        }
    }

    this.robots.forEach( function( robot ) {
        positions[ robot.position.x ][ robot.position.y ].robot = robot;
    } );
    this.enviroments.forEach( function( enviroment ) {
        positions[ enviroment.x ][ enviroment.y ].enviroment = enviroment;
    } );
    this.items.forEach( function( item ) {
        positions[ item.x ][ item.y ].item = item;
    } );

    this.positions = positions;
}

function Position() {
    this.enviroment = null;
    this.item = null;
    this.robot = null;
}

module.exports = Grid;
