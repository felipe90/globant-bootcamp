

$( window ).on('load', function() {
	
	(function (argument) {
		

		let githubSection = document.getElementById("githubSection");
		let inputKeyRepo = document.getElementById("repoKey");
		let loading = document.getElementById("progress");
		let repoList = document.getElementById("repoList");

		let requesConfig = {
			method : "GET", 
			url :"https://api.github.com/search/repositories?q=%27JavaScript%27&page=1&per_page=10", 
			isAsync : true, 
			user : "",
			password : "",
		}

		inputKeyRepo.addEventListener("keydown", function (event) {

			fadeIn(loading);

			//prevent to search when key code is 8
			if ( event.which !== 8 ) {
				if( githubSection.classList.contains('is-hidden') ){
	    			fadeIn(githubSection);

	    			let promise = AJAXRequest(requesConfig);

					promise.then(function(res) {
						return JSON.parse(res);
					}).then(function (res) {
						renderMeta(res);
						renderRepoList(res.items);
					})
					.catch(function(error) {
						console.log("Failed!", error);
						githubSection.style.color = "red";
						githubSection.innerHTML = "Something going wrong";
					}).then(function (res) {
						fadeOut(loading);
					});


	    		}
	    		else {
	    			fadeOut(githubSection);
	    		}

		    }

		});
		

	/*
		atrr json repo list 
	*/	

	function renderRepoList(items) {
		let html = "<ul class='collection'>";
		items.forEach(function ( item, index, array) {
			html += "<li class='collection-item avatar hoverable'>";
			html += "<h3>"+item.name+"</h3>";
			html += "<p>"+item.full_name+"</p>";
			html += "<p>"+item.description+"</p>";
			html += "<a href='"+item.html_url+"' target='_blank'>"+item.html_url+"</a>";
			html += "</li>";
		}) 
		html += "</ul>";
		repoList.innerHTML = html;
	}

	function renderMeta(data) {
		//posible meta info repo
	}

	})();

});