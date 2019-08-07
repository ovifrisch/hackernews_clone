import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
import PostListing from './../post_listing/PostListing'
import Post from './../post/Post'
import Comment from './../comment/Comment'
import Authenticate from './../authenticate/Authenticate'
import {topstories} from './../../helpers/hackernews_api'


function Header() {
  return (
    <tr>
      <td><Link to={`/posts`}>HackerNews</Link></td>
      <td><Link to={`/newest`}>New</Link></td>
      <td><Link to={`/threads`}>Threads</Link></td>
      <td><Link to={`/front`}>Past</Link></td>
      <td><Link to={`/newcomments`}>Comments</Link></td>
      <td><Link to={`/ask`}>Ask</Link></td>
      <td><Link to={`/show`}>Show</Link></td>
      <td><Link to={`/jobs`}>Jobs</Link></td>
      <td><Link to={`/submit`}>Submit</Link></td>
      <td><Link to={`/login`}>Login</Link></td>
    </tr>
  )
}

class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts : [],
      match: this.props.match,
    }
  }

  componentDidMount() {
    topstories().then((data) => {
      this.setState({
        posts: data
      })
    })
  }

  renderPost(post_id, post_idx) {
    return (
      <PostListing
        id = {post_id}
        idx = {post_idx}
        match = {this.state.match}
      />
    )
  }

  render() {
    var posts = this.state.posts.map((post_id, idx) => {
      return (
        <li key={post_id} className="post">{this.renderPost(post_id, idx + 1)}</li>
      )
    })
    return (
      <div id="posts">
        {posts}
      </div>
    )
  }
}

class Newest extends Component {
  render() {
    return ('Newest')
  }
}

class Threads extends Component {
  render() {
    return ('Threads')
  }
}

class Front extends Component {
  render() {
    return ('Front')
  }
}

class NewComments extends Component {
  render() {
    return ('NewComments')
  }
}

class Ask extends Component {
  render() {
    return ('Ask')
  }
}

class Show extends Component {
  render() {
    return ('Show')
  }
}

class Jobs extends Component {
  render() {
    return ('Jobs')
  }
}

class Submit extends Component {
  render() {
    return ('Submit')
  }
}



function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/posts" component={News} />
      <Route path="/newest" component={Newest} />
      <Route path="/threads" component={Threads} />
      <Route path="/front" component={Front} />
      <Route path="/newcomments" component={NewComments} />
      <Route path="/ask" component={Ask} />
      <Route path="/show" component={Show} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/submit" component={Submit} />
      <Route path={"/posts/:postId"} component={Post} />
      <Route path={"/reply/:commentId"} component={Comment} />
      <Route path={"/login"} component={Authenticate} />
    </Router>
  );
}

export default App;
