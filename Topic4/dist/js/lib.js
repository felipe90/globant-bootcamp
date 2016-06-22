/*
	Indeexd DB misc
	return 
*/

window.onload = function () {
	initIndexedDB();
}


function initIndexedDB() {
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
}

function saveOnIndexedDB(key, data) {
	var db;
	var request = window.indexedDB.open("MyDatabase", 1);

	request.onerror = function(event) {
		console("Why didn't you allow my web app to use IndexedDB?!");
	};


	request.onupgradeneeded = function (event) {

	    var db = event.target.result;

	    // Create another object store called "names" with the autoIncrement flag set as true.    
	    var objStore = db.createObjectStore(key, { autoIncrement : true });
	    
	    objStore.add(data);
	}
}

function ereseOnIndexedDB(key) {
	var db;
	var request = window.indexedDB.transaction([key], "readwrite")
        .objectStore(key)
        .clear();
	request.onsuccess = function(event) {
  		// It's gone!
	};
}

/*
	return Promise
*/
function AJAXRequest (config) {

	return new Promise( function( resolve, reject ) {

		let req = new XMLHttpRequest();
		req.open(config.method, config.url, config.isAsync, config.user, config.password);

		req.onload = function() {
			if (req.status == 200) {
				resolve(req.response);
			}
			else {
				reject(Error(req.statusText));
			}
		};

		req.onerror = function() {
			reject(Error("Somethig going wrong"));
		};

		req.send();
	});
}


/*
	fade out function
*/
function fadeOut(element) {

	element.style.opacity = 1;

	(function fade() {
		if ((element.style.opacity -= .1) < 0) {
			element.style.display = "none";		
			element.classList.add('is-hidden');		
		}else {
			window.requestAnimationFrame(fade);
		}
	})();

}

/*
	fade in function
*/
function fadeIn(element) {

	// if (element.classList.contains('is-hidden')){
	//   		element.classList.remove('is-hidden');
	// 		}

	element.style.opacity = 0;
	element.style.display = "block";

	(function fade() {
		let val = parseFloat(element.style.opacity);
		if (!((val += .1) > 1)) {
			element.style.opacity = val;
			window.requestAnimationFrame(fade); 
		}	
	})();
}