


window.onload = function () {


	var textRequestConfig = {
		method : "GET", 
		url : "", 
		isAsync : true, 
		user : "",
		password : "",
	}

	// Button Comp

	var saveBtn = document.getElementById('saveBtn');
	var eraseBtn = document.getElementById('eraseBtn');

	saveBtn.addEventListener('click', function (e) {
		e.preventDefault();
		
		saveOnIndexedDB("data", textAreas[1].value);
		localStorage.setItem("data", textAreas[0].value);

		alert("data saved..")
	})

	eraseBtn.addEventListener('click', function (e) {
		e.preventDefault();
		localStorage.removeItem("data");
		ereseOnIndexedDB("data");
		alert("data erased..")
	})

	// TextArea Comp
	
	var textAreas = document.querySelectorAll('textArea');

	textAreas.forEach(function (item, index, array) {
		item.addEventListener('dragover', handleDragOver, false);
		item.addEventListener('drop', handleDrop, false);
		item.addEventListener('dragend', handleDragEnd, false);

	})

	function handleDragOver(e) {
		if (e.preventDefault) {
			e.preventDefault(); 
		}

		e.dataTransfer.dropEffect = 'move';  

		return false;
	}

	function handleDrop(e) {

		if (e.stopPropagation) {
			e.stopPropagation(); // Stops some browsers from redirecting.
		}
			
		console.log(e.dataTransfer.getData('text/html'));
		this.value = e.dataTransfer.getData('text/html');
		
		return false;
	}

	function handleDragEnd(e) {
		
	}

	// dragg Comp

	var fileText = {
		src : "",
		text : ""
	};
	var draggComp = document.getElementById("draggableComp");

	function handleDragStart(e) {

		this.style.opacity = '0.4';  
	  	e.dataTransfer.effectAllowed = 'move';
	  	e.dataTransfer.setData('text/html', fileText.text);
	}

	function handleDragEnter(e) {		
		this.classList.add('over');
	}

	function handleDragLeave(e) {
		this.classList.remove('over');  
	}

	draggComp.addEventListener('dragstart', handleDragStart, false);
	draggComp.addEventListener('dragenter', handleDragEnter, false);
	draggComp.addEventListener('dragleave', handleDragLeave, false);



	// input Comp

	var fileButton = document.getElementById("draggableInput");

	fileButton.addEventListener('change', function (e) {
		e.preventDefault();
		
		textRequestConfig.url = fileButton.value;
		
		var promise = AJAXRequest(textRequestConfig);		
		fileText =	promise.then(function(res) {
				console.log("Success!");
				
				fileText.text = res;
				fileText.src = fileButton.value;
				draggComp.innerHTML = "File : "+ fileText.src ;
				return fileText;
			})
			.catch(function(error) {
				console.log("Failed!", error);
			});

	}) 
	
}