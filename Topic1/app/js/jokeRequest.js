
$( window ).on('load', function() {


	let button = document.getElementById("hideSectionButton");
	let hidenElement = document.getElementById("jokeSection");
	let requestContent = document.getElementById("requestContent");
	let requestTitle = document.getElementById("requestTitle");
	let loadingImg = document.getElementById("loadingImg");

	/*
	Request Object desc.
		method -> can be "GET","POST","PUT","DELETE"
		url -> url to request
		isAsync -> "if the reques asyncronous?"
		user -> The optional user name to use for authentication purposes
		password -> The optional password to use for authentication purposes
	*/


	let jokeRequesConfig = {
		method : "GET", 
		url :"http://api.icndb.com/jokes/random", 
		isAsync : true, 
		user : "",
		password : "",
	}



	let badRequesConfig = {
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
    		let promise = AJAXRequest(jokeRequesConfig);


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

});