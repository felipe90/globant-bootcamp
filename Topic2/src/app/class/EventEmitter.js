/*
	EventEmitter Class
*/


//
let isFunction = function(obj) {
    return typeof obj == 'function' || false;
};

class EventEmitter {
	
	constructor() {
		// get a map of listeners
		this.listeners = new Map();
	}

	//	add event listener
 	on( label, callback ) {
 		this.listeners.has(label) || this.listeners.set(label, []);
 		this.listeners.get(label).push(callback);
 	}

 	// remove event listener
	off( label, callback ) {
 		let listeners = this.listeners.get(label), index;

 		if ( listeners && listeners.length) {
 			index = listeners.reduce ( ( i, listener, index) => {
 				return ( isFunction(listener) && listener === callback) ? i = index : i;
 			}, -1);

 			if (index > -1) {
 				listeners.splice(index, 1);
 				this.listeners.set(label, listeners);
 				return true;
 			}
 		}
 		return false;
 	}

 	// notify changes
 	emit( label, args ) {
      let listeners = this.listeners.get(label);

      if (listeners && listeners.length && args!=undefined) {
          listeners.forEach( (listener) => {
              console.log(listeners); 
              listener(args);

          });
          return true;
      } 
      else if ( typeof args === "undefined" ) {
        listeners[0](); //default action
        return true;
      }
      return false;
 	}

 }

export default EventEmitter;