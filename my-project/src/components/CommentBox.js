import React from 'react'

class CommentBox extends React.Component {
    constructor(props){
        super(props)
        this.handelSubmit = this.handelSubmit.bind(this)
    }
    handelSubmit(event) {
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handelSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input 
                        type='text'
                        className='form-constrol'
                        placeholder='请输入想说的话'
                        ref={(textInput) => {this.textInput = textInput}}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    留言
                </button>
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}

export default CommentBox