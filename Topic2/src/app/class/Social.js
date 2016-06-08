/*
	Object Literal - Social 
*/

var Social = {

	share : function (friendName) {
		this.friendName = friendName;
		let text = `Share ${this.title} with ${this.friendName}`;
		logger.log(text);
	},

	like : function (friendName) {
		this.friendName = friendName;
		let text = `Like ${this.title} with ${this.friendName}`;
		logger.log(text);
	}
}

export default Social;