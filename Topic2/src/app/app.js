'use strict'

import materialize from 'materialize-css';
import EventEmitter from "./class/EventEmitter";
import Movie from './class/Movie';
import Logger from './class/Logger';
//import Social from "./class/Social";
import Actor from "./class/Actor";

// main function
{

	//point 1,2,3
	let consoleBox = document.getElementById("consoleBoxId");

	let terminator = new Movie ( 'Terminator I', 1985, 60);
	let logger = new Logger(consoleBox);

	//point 4,5
	terminator.on('play', logger.log( terminator ) );
	
	//..

	terminator.play();

	

	// point 6, mix literal with EventEmitter obj
	
	let social = {

		share : function (friendName) {
			this.friendName = friendName;
			let text = `Share ${this.title} with ${this.friendName}`;
			logger.consoleLog(text);
		},

		like : function (friendName) {
			this.friendName = friendName;
			let text = `Like ${this.title} with ${this.friendName}`;
			logger.consoleLog(text);
		}
	}	

	Object.assign(terminator, social);
	

	logger.consoleLog(social);
	logger.consoleLog(terminator);

	terminator.share('Felipe Rojas');
	terminator.like('Felipe Rojas');

	//point 7,8
	let arnold = new Actor('Arnold Schwarzenegger', 50);
	let otherCast = [
		new Actor('Paul Winfield', 50),
		new Actor('Michael Biehn', 50),
		new Actor('Linda Hamilton', 50)
	];

	terminator.addCast(arnold);

	logger.consoleLog(terminator);
	
	terminator.addCast(otherCast); //Movie must contain an array of 4 actors

	logger.consoleLog(terminator);
	
}