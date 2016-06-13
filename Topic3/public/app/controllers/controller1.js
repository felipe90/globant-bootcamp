
class Controller {

    constructor( ItemServices, $mdDialog ) {
    	this.mdDialog = $mdDialog;
    	ItemServices.getItems().then((data) => {
	    	this.items = data.data.results;
    	});
    }

	ShowAuthorDetail ( item ) {
		this.mdDialog.show(
			this.mdDialog.alert()
			.title(item.original_title)
			.textContent(item.overview)
			.ariaLabel('Movie Detail')
			.ok('Back')
			.targetEvent(event)
		);
	}


}

Controller.$inject = [ 'ItemServices' , '$mdDialog' ];

export default Controller;