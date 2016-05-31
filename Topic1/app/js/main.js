

(function () {

	var button = document.getElementById("hideSectionButton");
	var hidenElement = document.getElementById("hidenSection");
	var requestContent = document.getElementById("requestContent");
	var requestTitle = document.getElementById("requestTitle");



	button.addEventListener("click", function () {
		if(hidenElement.classList.contains('is-hidden')){
    		fadeIn(hidenElement);
    		promise = AJAXRequest("http://api.icndb.com/jokes/random");

    		promise.done(function (res){
    			console.log(res);
    			requestTitle.innerHTML = JSON.parse(res).type;
				requestContent.innerHTML = JSON.parse(res).value.joke;
    		});
  		}
  		else {
    		fadeOut(hidenElement);
  		}
		
	});


	/*
		return ES6 Promise
	*/
	function AJAXRequest (url) {

		return new Promise( function( resolve, reject ) {
	
			var req = new XMLHttpRequest();
			req.open('GET', url);

			req.onload = function() {
				if (req.status == 200) {
					resolve(req.response);
				}
				else {
					reject(Error(req.statusText));
				}
			};

			req.onerror = function() {
			reject(Error("Network Error"));
			};

			req.send();
		});
	}

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

	function fadeIn(element) {

		if (element.classList.contains('is-hidden')){
    		element.classList.remove('is-hidden');
  		}

		element.style.opacity = 0;
		element.style.display = "block";

		(function fade() {
			var val = parseFloat(element.style.opacity);
			if (!((val += .1) > 1)) {
				element.style.opacity = val;
				window.requestAnimationFrame(fade); 
			}	
		})();
	}

})();