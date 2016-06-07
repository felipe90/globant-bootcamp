/*
	Movie Class
*/

import EventEmitter from './EventEmitter';

class Movie extends EventEmitter {

	constructor( title, year, duration) {
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
	}
 
 	
 	play() {
 		
 	}

 	stop() {
 		
 	}

 	resume() {
 		
 	}
}

 export default Movie;