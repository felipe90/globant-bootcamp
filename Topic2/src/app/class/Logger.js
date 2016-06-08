/*
	Logger Class

*/

class Logger {

	constructor(element) {
		this.consoleBox = element;
	}

	consoleLog(data) {
		console.log(data);
		if(typeof data == "object"){
			data = "Object:  "+ JSON.stringify(data); 
		}
		this.consoleBox.value += "\n\t -> "+data;
	}

	log(subject) {
		this.subject = subject;
		this.subject.on( 'play', (data) => {
			this.consoleLog(" The 'play' event of '"+this.subject.title+"' has been emitted")
	});

	}

}

export default Logger;