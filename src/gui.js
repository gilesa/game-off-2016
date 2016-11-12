var Vue = require( 'vue/dist/vue.js' );

var gui;
var data = {
	controls: [],
	actions: [],
	player: {
		health: 0,
		power: {
			value: 0,
			bar: 0,
			faded: 0
		},
		weapon: ''
	},
	msg: ''
}

function init() {
	gui = new Vue( {
	    el: '#gui',
	    data: data,
	    methods: {
	    	previewAction: previewAction,
	    	endPreview: endPreview,
	    	addAction: addAction,
	    	removeAction: removeAction
	    }
	} );
}

function flashMessage( msg, time ) {
	time = time || 2000;
	data.msg = msg;
	setTimeout( function() {
		data.msg = '';
	}, time );
}

function previewAction( power ) {
	if( power > 0 ) {
		data.player.power.bar -= power;
	}
	else {
		data.player.power.faded -= power;
	}
}

function endPreview() {
	data.player.power.bar = data.player.power.value;
	data.player.power.faded = data.player.power.value;
}

function addAction( action ) {
	var power = data.controls[ action ].power;
	if( data.player.power.value < power ) {
		return flashMessage( 'Not enough power!' );
	}

	data.actions.push( action );
	data.player.power.value -= power;
	data.player.power.bar -= power;
	data.player.power.faded -= power;
}

function removeAction( index ) {
	var action = data.actions.splice( index, 1 );
	var power = data.controls[ action ].power;
	data.player.power.value += power;
	data.player.power.bar = data.player.power.value;

	if( index < data.actions.length ) {
		data.player.power.faded = data.player.power.value + data.controls[ data.actions[ index ] ].power;
	}
}

function loadControls( controls ) {
	data.controls = controls;
}

function setPlayer( player ) {
	data.player.health = player.health;
	data.player.power.value = player.power;
	data.player.power.bar = player.power;
	data.player.power.faded = player.power;
}

module.exports = {
	init: init,
	loadControls: loadControls,
	setPlayer: setPlayer
}
