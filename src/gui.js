var Vue = require( 'vue/dist/vue.js' );

var gui;
var data = {
	timer: 100,
	players: [],
	controls: [],
	actions: [],
	robot: {
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
var endTurnCallback;

function init( opts ) {
	opts = opts || {};

	gui = new Vue( {
	    el: '#gui',
	    data: data,
	    methods: {
	    	previewAction: previewAction,
	    	endPreview: endPreview,
	    	addAction: addAction,
	    	removeAction: removeAction,
	    	endTurn: endTurn
	    }
	} );

	data.controls = opts.controls || {};

	data.players = opts.players || [];

	opts.robot = opts.robot || {
		health: 0,
		power: 0
	}
	data.robot.health = opts.robot.health;
	data.robot.power.value = opts.robot.power;
	data.robot.power.bar = opts.robot.power;
	data.robot.power.faded = opts.robot.power;

	endTurnCallback = opts.endTurn || function() {};
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
		data.robot.power.bar -= power;
	}
	else {
		data.robot.power.faded -= power;
	}
}

function endPreview() {
	data.robot.power.bar = data.robot.power.value;
	data.robot.power.faded = data.robot.power.value;
}

function addAction( action ) {
	var power = data.controls[ action ].power;
	if( data.robot.power.value < power ) {
		return flashMessage( 'Not enough power!' );
	}

	data.actions.push( action );
	data.robot.power.value -= power;
	data.robot.power.bar -= power;
	data.robot.power.faded -= power;
}

function removeAction( index ) {
	var action = data.actions.splice( index, 1 );
	var power = data.controls[ action ].power;
	data.robot.power.value += power;
	data.robot.power.bar = data.robot.power.value;

	if( index < data.actions.length ) {
		data.robot.power.faded = data.robot.power.value + data.controls[ data.actions[ index ] ].power;
	}
}

function endTurn() {
	endTurnCallback();
}

module.exports = {
	init: init
}
