import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Blog from './Blog';
import NameForm from './NameForm';
import RegisterForm from './RegisterForm';
import './index.css';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
	<div>
		<Blog posts={posts} />
		<NameForm />
		<RegisterForm />
	</div>,
	document.getElementById('root')
);

/*
function formatDate (date) {
	return date.toLocaleTimeString();
}

function Avatar (props) {
	return (
		<img className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name} />
	);
}

function UserInfo (props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	);
}

function Comment (props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

function FormattedDate (props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(), timerID: null};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date : new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<FormattedDate date={this.state.date} />
			</div>
		)
	}
}
const messages = ['foo','bar'];
function App (props) {
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
			<ActionLink />
			<Toggle />
			<LoggingButton />
			<Greeting isLoggedIn={true} />
			<Greeting isLoggedIn={false} />
			<LoginControl />
			<MailBox unreadMessages={messages} />
			<Page />
			<NumberList numbers={numbers} />
		</div>
	);
}

function WarningBanner (props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Warning!
		</div>
	);		
}

function ListItem (props) {
	return (
		<li>{props.value}</li>
	);
}

function NumberList (props) {
	const numbers = props.numbers;
	const listItems = numbers.map((num) => 
		<ListItem key={num.toString()} value={num} />
	);

	return (
		<ul>
			{listItems}
		</ul>
	);
}
const numbers = [1,2,3,4,5];

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state = {showWarning: true};
		this.handleLoginClick = this.handleLoginClick.bind(this);
	}

	handleLoginClick(){
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}));
	}

	render(){
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleLoginClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({
			isLoggedIn: true
		});
	}

	handleLogoutClick() {
		this.setState({
			isLoggedIn: false
		});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />
		}
		else {
			button = <LoginButton onClick={this.handleLoginClick} />
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);

	}
}

function MailBox (props) {
	const unreadMessages = props.unreadMessages;

	return (
		<div>
		<h1>Hello!</h1>
		{unreadMessages.length > 0 &&
			<h2>You have {unreadMessages.length} unread messages.</h2>
		}
		</div>
	);
}

function LoginButton (props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton (props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

function tick () {
	ReactDOM.render(
		<Clock />,
		document.getElementById('root')
	);
}

//setInterval(tick, 1000);

function Welcome (props) {
  return <h1>Hello, {props.name}!</h1>;
}
/*
function App () {
  return (
    <div>
      <Welcome name="Seppo" />
      <Welcome name="Ulla" />
      <Welcome name="Ismo" /> 
    </div>
  );
}

const comment = {
	date   : new Date(),
	text   : 'I am seksiseppo',
	author : {
		name      : 'Seppo Taalasmaa',
		avatarUrl : 'http://placekitten.com/g/64/64'
	}
};

function ActionLink (props) {
	function handleClick (event) {
		event.preventDefault();
		console.log('the link was clicked');
	}

	return (
		<a href="#" onClick={handleClick}>
			Click me!
		</a>
	);
}

class LoggingButton extends React.Component {
	handleClick = () => {
		console.log('this is', this);
	}

	render () {
		return (
			<button onClick={(e) => this.handleClick(e)}>
				Click me
			</button>
		);
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}

	


}

function UserGreeting (props) {
	return (
		<p>Hello user!</p>
	);
}

function GuestGreeting (props) {
	return (
		<p>Hello guest!</p>
	);
}

function Greeting (props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />
	}
	else {
		return <GuestGreeting />
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


ReactDOM.render(
  <Comment
  	date={comment.date}
  	text={comment.text}
  	author={comment.author} />,
  document.getElementById('root')
);


function tick () {
	const element = (
		<div>
			<h1>Hello !!</h1>
			<h2>It is {new Date().toLocaleTimeString()}</h2>
		</div>
	);

	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}	

setInterval(tick, 1000);

function Welcome (props) {
	return <h1>Hello, {props.name}</h1>;
}


class Welcome extends React.Component {
	render() {
		return <h1>Welcome, {this.props.name}</h1>;
	}
}
ReactDOM.render(
  <Welcome name="seppoe" />,
  document.getElementById('root')
);


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
*/