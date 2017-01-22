import React from 'react';
import database from './database';
import './RegisterForm.css';

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			passwordAgain: ''
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
			errors.push('Password must be atleast 6 characters long');
		}

		if (this.state.password !== this.state.passwordAgain) {
			errors.push('Password do not match');
		}

		if (database.user.exists(this.state.email)) {
			errors.push('User ' + this.state.email + ' already exists');
		}

		return errors;
	}

	handleSubmit(event) {
		event.preventDefault();

		console.log(JSON.stringify(this.state));
		var validationErrors = this.validate(this.state);

		if (validationErrors.length) {
			alert(JSON.stringify(validationErrors))
		}
		else {
			// do register
			database.user.add(this.state);
			alert('Success! Registered user');
			this.setState({
				email: '',
				password: '',
				passwordAgain: ''
			});
		}

	}

	render(){
		return (
			<form className="RegisterForm" onSubmit={this.handleSubmit}>
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