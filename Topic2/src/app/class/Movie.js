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
		this.actors = [];
	}
 
 	addCast (args) {
 		console.log(args);

 		if (typeof args!== 'undefined' && args.length > 1) {
 			args.forEach((item) => {
	 			this.actors.push(item);	
 			}); 
 		}
 		else {
 			this.actors.push(args);
 		}
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