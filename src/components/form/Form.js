import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './Form.css'

class Form extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<form autocomplete="off" onSubmit={(e) => this.props.handleSubmit(e)}>
				{this.props.fields}
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Form;



