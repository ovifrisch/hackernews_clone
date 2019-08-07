import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './Comment.css';
import {
	getFormattedTime
} from './../../helpers/helpers'
import CommentForm from './../comment/CommentForm'
import {getItem} from './../../helpers/hackernews_api'

class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.commentId
		}
	}

	componentDidMount() {
		getItem(this.state.id).then((data) => {
			this.setState({
				type: data.type,
				text: data.text,
				by: data.by,
				parent_id: data.parent,
				time: data.time
			})
		})
	}



	render() {
		return (
			<div>
				{this.state.by}
				<br/>
				{getFormattedTime(this.state.time)}
				<br/>
				{this.state.text}
				<br/>
				<CommentForm />
			</div>
		)
	}
}

export default Comment;