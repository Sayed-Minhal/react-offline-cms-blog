import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from "react-redux";

class Posts extends React.Component {

  readPost(postID) {
    this.props.history.push('blogposts/' + postID.id);
  }

  render() {
//    if (posts.length === 0) { return <h1 style={{ "textAlign": "center" }}>Loading....</h1> } else {
      return (
        <section>
          {
            this.props.posts.map(post => {
              return (
                <article key={post.id}>
                  <Card style={{ "margin": "0.5rem" }}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography component="p">
                        {post.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => this.readPost(post)}>Read full</Button>
                    </CardActions>
                  </Card>
                </article>
              )
            })
          }
        </section>
      )
    }
  }
//}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const PostList = connect(mapStateToProps)(Posts);

export default PostList;