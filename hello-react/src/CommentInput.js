import React, {
	Component
} from 'react'

class CommentInput extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			content: ''
		}
	}
	handleUsernameChange(e) {
		this.setState({
			username: e.target.value
		})
	}
	handleContentChange(e) {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit() {
		if (this.props.onSubmit) {
			const {
				username,
				content
			} = this.state
			this.props.onSubmit({
				username,
				content
			})
		}
		this.setState({
			content: ''
		})
	}
	render() {
		return (
			<div className='comment-input'>
		        <div className='comment-field'>
		          <span className='comment-field-name'>用户名：</span>
		          <div className='comment-field-input'>
		            <input onChange={this.handleUsernameChange.bind(this)} value={this.state.username} />
		          </div>
		        </div>
		        <div className='comment-field'>
		          <span className='comment-field-name'>评论内容：</span>
		          <div className='comment-field-input'>
		            <textarea onChange={this.handleContentChange.bind(this)} value={this.state.content} />
		          </div>
		        </div>
		        <div className='comment-field-button'>
		          <button onClick={this.handleSubmit.bind(this)}>
		            发布
		          </button>
		        </div>
		      </div>
		)
	}
}
export default CommentInput