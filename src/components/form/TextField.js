import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './TextField.css'

class TextField extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div>
					<input type={this.props.type} autocomplete="off" name={this.props.name} value={this.props.value} onChange={(e) => this.props.handleChange(e)}/>
					<br/>
				</div>
		)
	}
}

export default TextField;