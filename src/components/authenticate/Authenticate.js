import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import Form from './../form/Form'
import TextField from './../form/TextField'
import './Authenticate.css';

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			pass: "",
		}
	}

	handleChangeUsername(e) {
		this.setState({username: e.target.value})
	}

	handleChangePassword(e) {
		this.setState({pass: e.target.value})
	}

	handleSubmit(e) {
		alert('login form submitted')
	}

	render() {
		var fields = [
			<TextField type="text" name="username" value={this.state.username} handleChange={(e) => this.handleChangeUsername(e)}/>,
			<TextField type="password" name="pass" value={this.state.pass} handleChange={(e) => this.handleChangePassword(e)}/>,
		]
		return (
			<div>
				<Form fields={fields} handleSubmit={(e) => this.handleSubmit(e)} />
			</div>
		)
	}
}

class SignupForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			pass: "",
		}
	}

	handleChangeUsername(e) {
		this.setState({username: e.target.value})
	}

	handleChangePassword(e) {
		this.setState({pass: e.target.value})
	}

	handleSubmit(e) {
		alert('signup form submitted')
	}

	render() {
		var fields = [
			<TextField type="text" name="username" value={this.state.username} handleChange={(e) => this.handleChangeUsername(e)}/>,
			<TextField type="password" name="pass" value={this.state.pass} handleChange={(e) => this.handleChangePassword(e)}/>,
		]
		return (
			<div>
				<Form fields={fields} handleSubmit={(e) => this.handleSubmit(e)} />
			</div>
		)
	}
}

class Authenticate extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="authentication">
				<h1>Login</h1>
				<LoginForm />
				<br/>
				<h1>Signup</h1>
				<SignupForm />
			</div>
		)
	}
}

export default Authenticate;