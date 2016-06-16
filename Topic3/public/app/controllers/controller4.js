class Controller {

    constructor( ItemServices , $location, $mdDialog) {
    	     	
    	this.title = 'Delete movie';
   		this.location = $location;
   		this.mdDialog = $mdDialog;

    	ItemServices.getItems().then((data) => {
	    	this.items = data.data.results;
    	});
    }

    DeleteMovie(item) {
 
    	let index = this.items.indexOf(item);
 		this.items.splice(index, 1)


	 	this.mdDialog.show(
			this.mdDialog.alert()
				.title('Delete New Movie')
				.textContent('Movie '+ item.original_title +' has been delete from data base')
				.ariaLabel('Delete Movie')
				.ok('Got it!')
				.targetEvent(event)
			)
			.finally(function () {
			 	this.location.path('/');
		});
    }

}


Controller.$inject = [ 'ItemServices' , '$location' , '$mdDialog'];

export default Controller;