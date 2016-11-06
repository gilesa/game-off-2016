/*
 * Grid
 *
 */

function Grid( opts ) {
    opts = opts || {};
    width = opts.width || 0;
    height = opts.height || 0;
    robots = opts.robots || [];
    enviroments = opts.enviroments || [];
    items = opts.items || [];

    var positions = [];
    for( var x = 0; x < width; x++ ) {
        positions[ x ] = [];
        for( var y = 0; y < height; y++ ) {
            positions[ x ][ y ] = new Position();
        }
    }

    robots.forEach( function( robot ) {
        positions[ robot.position.x ][ robot.position.y ].robot = robot;
    } );
    enviroments.forEach( function( enviroment ) {
        positions[ enviroment.x ][ enviroment.y ].enviroment = enviroment;
    } );
    items.forEach( function( item ) {
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
