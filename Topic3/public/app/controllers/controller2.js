
class Controller {

    constructor( ItemServices, $mdDialog ) {
       	
       	this.mdDialog = $mdDialog;
       	this.message = 'Add new movie';

    	ItemServices.getItems().then((data) => {
	    	this.items = data.data.results;
    	});

    }

    AddItem () {
		let tempItem = {};

		tempItem.original_title = this.newItem.original_title;
		tempItem.overview = this.newItem.overview;
		tempItem.poster_path = this.newItem.poster_path;
		tempItem.release_date = this.newItem.release_date;
		
		this.items.unshift(tempItem);

		this.newItem.original_title = '';
		this.newItem.overview = '';
		this.newItem.poster_path = '';
		this.newItem.release_date = '';


		this.mdDialog.show(
			this.mdDialog.alert()
				.title('Add New Movie')
				.textContent('Movie '+ tempItem.original_title +' addded to data base')
				.ariaLabel('New Movie')
				.ok('Got it!')
				.targetEvent(event)
			);



	}

}

Controller.$inject = [ 'ItemServices' , '$mdDialog'];

export default Controller;