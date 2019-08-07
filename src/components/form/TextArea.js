import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './TextArea.css'

class TextArea extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div>
					<textarea name={this.props.name} rows={this.props.rows} cols={this.props.cols} value={this.props.value} onChange={(e) => this.props.handleChange(e)}></textarea>
					<br/>
				</div>
		)
	}
}

export default TextArea;