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
	    	action: action
	    }
	} );
}

function action( action ) {
	data.actions.push( action );
}

function setPlayer( player ) {
	data.player.health = player.health;
	data.player.power = player.power;
}

module.exports = {
	init: init,
	setPlayer: setPlayer
}
