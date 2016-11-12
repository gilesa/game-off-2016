var Vue = require( 'vue/dist/vue.js' );

var gui;
var data = {
	actions: [],
	player: {
		health: 0,
		power: 0,
		weapon: ''
	}
}

function init() {
	gui = new Vue( {
	    el: '#gui',
	    data: data,
	    methods: {
	    	addAction: addAction,
	    	removeAction: removeAction
	    }
	} );
}

function addAction( action ) {
	data.actions.push( action );
}

function removeAction( index ) {
	data.actions.splice( index, 1 );
}

function setPlayer( player ) {
	data.player.health = player.health;
	data.player.power = player.power;
}

module.exports = {
	init: init,
	setPlayer: setPlayer
}
