

(function () {

	var button = document.getElementById("hideSectionButton");
	var hidenElement = document.getElementById("hidenSection");
	var requestContent = document.getElementById("requestContent");
	var requestTitle = document.getElementById("requestTitle");
	var loadingImg = document.getElementById("loadingImg");
	/*
	Request Object desc.
		method -> can be "GET","POST","PUT","DELETE"
		url -> url to request
		isAsync -> "if the reques asyncronous?"
		user -> The optional user name to use for authentication purposes
		password -> The optional password to use for authentication purposes
	*/

	var requesConfig = {
		method : "GET", 
		url :"http://api.icndb.com/jokes/random", 
		isAsync : true, 
		user : "",
		password : "",
	}

		var badRequesConfig = {
		method : "GET", 
		url :"http://fail", 
		isAsync : true, 
		user : "",
		password : "",
	}


	button.addEventListener("click", function () {
		if( hidenElement.classList.contains('is-hidden') ){
    		fadeIn(hidenElement);

    		//request for a promise
    		var promise = AJAXRequest(requesConfig);


			promise.then(function(res) {
				console.log("Success!", res);
				return JSON.parse(res);
			}).then(function (res) {
				console.log(res);
				requestTitle.innerHTML = "Random Joke";
				requestContent.innerHTML = res.value.joke;
			})
			.catch(function(error) {
				console.log("Failed!", error);
				requestTitle.innerHTML = "Something going wrong";
				requestTitle.style.color = "red";
			}).then(function (res) {
				fadeOut(loadingImg);
			});

  		}

  		else {
    		fadeOut(hidenElement);
  		}
		
	});


	/*
		return Promise
	*/
	function AJAXRequest (config) {

		return new Promise( function( resolve, reject ) {
	
			var req = new XMLHttpRequest();
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
			var val = parseFloat(element.style.opacity);
			if (!((val += .1) > 1)) {
				element.style.opacity = val;
				window.requestAnimationFrame(fade); 
			}	
		})();
	}

})();