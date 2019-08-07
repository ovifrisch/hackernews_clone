import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './CommentSection.css';
import CommentListing from './../comment/CommentListing'
import {getItem} from './../../helpers/hackernews_api'

class CommentSection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			kids: [],
			type: null,
		}
	}

	// fetch all the children of this comment (could be a post)
	componentDidMount() {

		getItem(this.props.id).then((data) => {
			this.setState(
				{
					kids: data.kids,
					type: data.type,
					text: data.text,
					by: data.by,
					parent_id: data.parent,
					time: data.time
				}
			)
		})
	}

	renderComment(comment_id) {
		return (
			<CommentListing
				id = {comment_id}
				text = {this.state.text}
				by = {this.state.by}
				time = {this.state.time}
			/>
		)
	}

	render() {
		var commentTrees;
		if (this.state.kids === undefined) {
			commentTrees = []
		} else {

			var theComment = null;
			var commentStyle = {paddingLeft: '0px'}
			if (this.state.type === "comment") {
				theComment = <li key={this.props.id} className="comment">{this.renderComment(this.props.id)}</li>
				commentStyle = {paddingLeft: '30px'}
			}

			commentTrees = this.state.kids.map((comment_id, idx) => {
				return (
					<CommentSection id={comment_id}/>
				)
			
			})
		}

		return (
			<div className="commentAndChildren" style={commentStyle}>
				{theComment}
				{commentTrees}
			</div>
		)
	}
}

export default CommentSection;