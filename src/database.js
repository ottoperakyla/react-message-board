
var database = {
	getData : function () {
		return JSON.parse(localStorage.getItem('users'));
	},
	user : {
		add : function(user) {
			var users = localStorage.getItem('users') ? localStorage.getItem('users') : JSON.stringify({});
			users = JSON.parse(users);
			users[user.email] = user;
			localStorage.setItem('users', JSON.stringify(users));
		}
	},
	topic : {

	},
	post : {

	}
};

export default database;