import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import './Post.css';
import PostListing from './../post_listing/PostListing'
import CommentForm from './../comment/CommentForm'
import CommentSection from './../comment/CommentSection'
import {getItem} from './../../helpers/hackernews_api'

class Post extends Component {
	constructor(props) {
		super(props)
		console.log(props.match)
		this.state = {
			id: props.match.params.postId,
		}
	}

	componentDidMount() {
		getItem(this.state.id).then((data) => {
			this.setState(
				{
					by: data.by,
					kids: data.kids,
					score: data.score,
					time: data.time,
					title: data.title,
					type: data.type,
					url: data.url,
					text: data.text
				}
			)
		})
	}

	componentWillUnmount() {
		console.log("post will unmount")
	}

	render() {
		return (
			<div id="postContent">
				<PostListing id = {this.state.id} match = {this.props.match}/>
				<CommentForm id = {this.state.id}/>
				<br/>
				<CommentSection id = {this.state.id}/>
			</div>
		)
	}
}

export default Post