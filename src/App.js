import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import database from './database.js';

function formatName (user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting (user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello stranger!</h1>;
}



const user = {
  firstName : 'Seppo',
  lastName  : 'Taalasmaa',
  email     : 'seppo.taalasmaa@jippii.fi'
};

database.user.add(user);
console.log(database.getData());

const element = getGreeting(user);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Peelofoorumi</h2>
        </div>
        <div className="login-form-container">
          <h3>Login</h3>
          <form className="login-form">
            <input placeholder="email" type="email" name="username" />
            <input placeholder="password" type="password" name="password" />
            <input type="submit" value="Login" />
          </form>
          <p>No account? <a href="#register">register here</a>.</p>
        </div>
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {element}
        </p>
      </div>
    );
  }
}
*/

export default App;
