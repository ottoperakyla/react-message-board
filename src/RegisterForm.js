import React from 'react';
import database from './database';
import './RegisterForm.css';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			passwordAgain: '',
			errors: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var state = {};
		state[event.target.name] = event.target.value;
		this.setState( state );
	}

	validate() {
		var errors = [];

		if (this.state.password.length < 6) {
			errors.push({id: 1, text: 'Password must be atleast 6 characters long'});
		}

		if (this.state.password !== this.state.passwordAgain) {
			errors.push({id: 2, text: 'Password do not match'});
		}

		if (database.user.exists(this.state.email)) {
			errors.push({id: 3, text: 'User ' + this.state.email + ' already exists'});
		}

		this.setState({errors: errors});
		return errors;
	}

	handleSubmit(event) {
		event.preventDefault();

		console.log(JSON.stringify(this.state));
		var errors = this.validate(this.state);

		if (errors.length === 0) {
			// do register
			database.user.add(this.state);
			alert('Success! Registered user');
			this.setState({
				email: '',
				password: '',
				passwordAgain: ''
			});
		};

	}

	render(){
		return (
			<form className="RegisterForm" onSubmit={this.handleSubmit}>
				{this.state.errors.map((error) => 
					<p key={error.id} className="error">{error.text}</p>
				)}
				<label>Email
					<input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
				</label>
				<label>Password
					<input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
				</label>

				<label>Password again
					<input type="password" value={this.state.passwordAgain} name="passwordAgain" onChange={this.handleChange} />
				</label>

				<input type="submit" value="Submit" />
			</form>
		);
	}

}

export default RegisterForm;