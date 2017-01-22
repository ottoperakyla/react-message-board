
function getData () {
	return JSON.parse(localStorage.getItem('users'));
}

var database = {
	user : {
		add : function(user) {
			var users = localStorage.getItem('users') ? localStorage.getItem('users') : JSON.stringify({});
			users = JSON.parse(users);
			users[user.email] = user;
			localStorage.setItem('users', JSON.stringify(users));
		},
		exists: function(userName) {
			var users = getData();

			return users ? users.hasOwnProperty(userName) : false;
		}
	},
	topic : {

	},
	post : {

	}
};

export default database;