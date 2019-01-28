/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import AddBlog from './AddBlog'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts } from '../Store/actions/postAction'

class Blogs extends Component {
    componentWillMount() {
        console.log('mounting')
        this.props.fetchPosts();
      }
    render() {
        const Posts = this.props.posts.map(post => (
            <div className="jumbotron jumbotron-fluid" key = {post.id}>
            <div className="container">
                    <h1 className="display-5">{post.title}</h1>
                    <p className="lead">{post.body}</p>
            </div>
            </div>
        ));
    return (
        <div>
            <AddBlog />
            <h1 className= "display-4 text-center ">Event Blogs</h1>
            {Posts}
      </div>
    )
  }
}
Blogs.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    // newPost: PropTypes.object
};
  
const mapStateToProps = state => ({
    posts : state.posts.blogPosts
})
export default connect(mapStateToProps, { fetchPosts })(Blogs);