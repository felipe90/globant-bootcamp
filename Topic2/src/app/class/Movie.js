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
 		this.emit('play');
 	}

 	stop() {
 		this.emit('stop');
 	}

 	resume() {
 		this.emit('resume');
 	}
}

 export default Movie;