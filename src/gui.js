var Vue = require( 'vue/dist/vue.js' );

var gui;
var data = {
	controls: [],
	actions: [],
	player: {
		health: 0,
		power: 0,
		previewPower1: 0,
		previewPower2: 0,
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
		data.player.previewPower2 -= power;
	}
	else {
		data.player.previewPower1 -= power;
	}
}

function endPreview( resetPreview ) {
	if( resetPreview ) {
		data.player.previewPower2 = data.player.previewPower1;
	}
	else {
		data.player.previewPower1 = data.player.previewPower2;
	}
}

function addAction( action ) {
	var power = data.controls[ action ].power;
	if( data.player.power < power ) {
		return flashMessage( 'Not enough power!' );
	}

	data.actions.push( action );
	data.player.power -= power;
	data.player.previewPower1 -= power;
	data.player.previewPower2 -= power;
}

function removeAction( index ) {
	var action = data.actions.splice( index, 1 );
	data.player.power += data.controls[ action ].power;
	data.player.previewPower1 += data.controls[ action ].power;
	data.player.previewPower2 += data.controls[ action ].power;
}

function loadControls( controls ) {
	data.controls = controls;
}

function setPlayer( player ) {
	data.player.health = player.health;
	data.player.power = player.power;
	data.player.previewPower1 = player.power;
	data.player.previewPower2 = player.power;
}

module.exports = {
	init: init,
	loadControls: loadControls,
	setPlayer: setPlayer
}
