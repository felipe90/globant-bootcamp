

$( window ).on('load', function() {
	
	(function (argument) {
		

		let githubSection = document.getElementById("githubSection");
		let inputKeyRepo = document.getElementById("repoKey");
		let loading = document.getElementById("progress");
		let repoListHTML = document.getElementById("repoList1");
		let repoListNode = document.getElementById("repoList2");

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
						renderRepoListHTML(res.items);
						renderRepoListNode(res.items);
					})
					.catch(function(error) {
						console.log("Failed!", error);
						githubSection.style.color = "red";
						githubSection.innerHTML = "Something going wrong - Pls refresh page";
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
		add html list to DOM 
	*/	

	function renderRepoListHTML(items) {
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
		repoListHTML.innerHTML = html;
	}

	/*
		atrr json repo list 
		add table node list to DOM 
	*/	
	function renderRepoListNode(items) {
		
		let eUL = document.createElement("table");
		
		items.forEach(function (item, index, array) {
			let eRow = document.createElement("tr");
			let eCol = document.createElement("td");			
			eCol.appendChild(document.createTextNode(item.name));

			eRow.appendChild(eCol);
			eUL.appendChild(eRow);
		});

		repoListNode.appendChild(eUL);
	}

	function renderMeta(data) {
		//posible meta info repo
	}

	})();

});