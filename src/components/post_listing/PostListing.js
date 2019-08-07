import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import './PostListing.css';
import Post from './../post/Post'
import {
	getFormattedTime
} from './../../helpers/helpers'
import {getItem} from './../../helpers/hackernews_api'


class PostListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rank: props.idx,
			match: props.match
		}
	}

	// API REQUEST FOR POST INFORMATUON
	componentDidMount() {
		getItem(this.props.id).then((data) => {
			this.setState(
				{
					id: this.props.id,
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
		console.log("postListing will unmount")
	}


	render() {
		var rank_el;
		var route;
		var link;
		if (this.state.rank === undefined) {
			console.log(this.state.match.url)
			rank_el = null;
			route = this.state.match.path
			link = this.state.match.url
		} else {
			rank_el = <td>{this.state.rank}</td>
			route = `${this.state.match.path}/:postId`
			link = `${this.state.match.url}/${this.state.id}`
		}

		if (this.state.url !== undefined) {
			return (
				<table id="post">
					<tbody>
						<tr>
							{rank_el}
							<td>
								<a href={this.state.url}>
									<h4>{this.state.title}</h4>
								</a>
							</td>
						</tr>
						<tr>
							<td>{this.state.score} points by {this.state.by} at {getFormattedTime(this.state.time)}</td>
							<td>
								<Link to={link}>Comments</Link>
							</td>
						</tr>
					</tbody>
				</table>
			)
		}
		else {
			return null;
		}
	}
}

export default PostListing