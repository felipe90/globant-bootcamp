
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