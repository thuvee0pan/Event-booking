import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { newPost } from '../Store/actions/postAction'

class AddBlog extends Component {

 constructor(props){
    super(props);
     this.state = {
         title: '',
         body: ''
     };
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)

    }
    onChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.newPost(post);
       
    }
  render() {
    return (
        <div>
            <h1 className="display-4 text-center">Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="blogTitle">Title</label>
                <input onChange = {this.onChange} value={this.state.title} type="text" className="form-control" id="blogTitle" name="title" placeholder="Post Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="body">Content</label>
                <textarea onChange = {this.onChange} value={this.state.body} className="form-control" id="body" placeholder="Body" name="body"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Post</button>
            </form>
      </div>
    )
  }
}
AddBlog.propTypes  = {
    newPost: PropTypes.func.isRequired
}
export default connect(null ,{newPost})(AddBlog)