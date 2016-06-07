'use strict'

// import react from "react";
// import reactdom from "react-dom";
// import material from 'material-ui';


import EventEmitter from "./class/EventEmitter";
import Movie from './class/Movie';
import Logger from './class/Logger';

// main function
{

	//let observable = new EventEmitter();

	let terminator = new Movie ( 'Terminator', 1984, 90);
	let logger = new Logger();


	terminator.on('play', logger.log( terminator ) );
	
	//..

	terminator.play();


	/*
		Social Obejct Literal
	*/

	var social = {
		
		share : function (friendName) {
			this.friendName = friendName;
			console.log(`Share ${this.title} with ${this.friendName}`);
		}

		,like  : function (friendName) {
			this.friendName = friendName;
			console.log(`Like ${this.title} with ${this.friendName}`);
		}
	}

	// terminator.assign(social);

	// terminator.share('Felipe Rojas');
	// terminator.like('Felipe Rojas');
	console.log(terminator);
}