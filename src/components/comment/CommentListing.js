import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './CommentListing.css';
import {
	getFormattedTime
} from './../../helpers/helpers'

class CommentListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: props.text,
			by: props.by,
			time: props.time,
			id: props.id,
		}
	}

	render() {
		return (
			<div className="comment">
				{this.state.text}
				{getFormattedTime(this.state.time)}
				{this.state.by}
				<Link to={`/reply/${this.state.id}`}>Reply</Link>
			</div>
		)
	}
}

export default CommentListing