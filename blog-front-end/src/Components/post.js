import React from 'react';
import {connect} from 'react-redux'
import {getPost} from '../Redux/Actions/post_actions'

class Post extends React.Component {
  componentDidMount(){
   console.log(this.props);
    this.props.dispatch(getPost(this.props.postID))
  }

  render() {
    if (this.props.selected) {
      return (
        <article>
          <h1>{this.props.selected.title}</h1>
          <p>{this.props.selected.content}</p>
        </article>
      )
    } else {
      return <h1 style={{ "textAlign": "center" }}>loading...</h1>
    }
  }
}


const mapStateToProps = state => {
  return { posts: state.posts, selected:state.selected };
};

const PostItem = connect(mapStateToProps)(Post);

export default PostItem;