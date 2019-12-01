import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ref1: 'ref'
    }

    // :( old React
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { postId } = this.props.params
    // text refs b/c old React version
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button 
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    )
  }

  render () {
    const { postComments = [] } = this.props

    return (
      <div className="comments">
        { postComments.map((comment, i) => this.renderComment(comment, i))}
        <form 
          ref='commentForm' 
          className='comment-form' 
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref='author' placeholder='author'/>
          <input type="text" ref='comment' placeholder='comment'/>
          <input type='submit' hidden/>
        </form>
      </div>
    )
  }
}

export default Comments