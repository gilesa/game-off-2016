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
