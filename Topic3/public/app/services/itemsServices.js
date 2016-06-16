		
class ItemsService {


	constructor($http,config) {
		this.$http = $http;
		this.config = config;

		this.getData();
	}

	getData () {
		var apiUrl = this.config.apiUrl;

		var promise = this.$http.get(apiUrl)
			.success( (data) => {
					
			 	return data.results; 
			})
			.error( (data) => {
				console.log(data);	
			});
	
		this.dataPromise =  promise;
	}

	getItems () {
		return this.dataPromise;
	}

}

ItemsService.$inject = [ '$http' , 'config'];

export default ItemsService;