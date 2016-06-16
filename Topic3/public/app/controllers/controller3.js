
class Controller {

    constructor( ItemServices, $mdDialog ) {
    	     	
    	this.title = 'Edit movie'
       	this.mdDialog = $mdDialog;
       	this.isEditing = true;
		this.editItem = {};
		this.tempItem = {};

    	ItemServices.getItems().then((data) => {
	    	this.items = data.data.results;
    	});
    }

    EditMovie(item) {
    	
    	this.tempItem = item;

    	this.editItem.original_title = item.original_title;
		this.editItem.overview = item.overview;
		this.editItem.poster_path = item.poster_path;
		this.editItem.release_date = new Date(item.release_date);
		
    	//this.isEditing = true;

    }

    UpdateItem() {

    	let index = this.items.indexOf(this.tempItem);
 		
		this.items[index].original_title = this.editItem.original_title;
		this.items[index].overview = this.editItem.overview;
		this.items[index].poster_path = this.editItem.poster_path;
		this.items[index].release_date = this.editItem.release_date;

		this.editItem.original_title = '';
		this.editItem.overview = '';
		this.editItem.poster_path = '';
		this.editItem.release_date = '';

		//clear temp
		this.tempItem = {};
    }

}


Controller.$inject = [ 'ItemServices' , '$mdDialog'];

export default Controller;