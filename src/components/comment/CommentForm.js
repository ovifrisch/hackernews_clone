import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './CommentForm.css';
import Form from './../form/Form'
import TextArea from './../form/TextArea'


class CommentForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ""
		}
	}

	handleSubmit(event) {
		alert(`a comment was submitted and the comment was ${this.state.value}`)
		event.preventDefault()
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		var areas = [<TextArea name="username" value={this.state.username} rows="6" cols="60" handleChange={(e) => this.handleChange(e)}/>]
		return (
			<div>
				<Form fields={areas} handleSubmit={(e) => this.handleSubmit(e)} />
			</div>
		)
	}
}

export default CommentForm;