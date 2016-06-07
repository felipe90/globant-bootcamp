/*
	Logger Class

*/

class Logger {
  
  log(subject) {
    this.subject = subject;
    this.subject.on( 'play', (data) => {
    	console.log(" The 'play' event has been emitted")
    });

  }

}

export default Logger;