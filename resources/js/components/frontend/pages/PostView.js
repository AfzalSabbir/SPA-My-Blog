import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route } from 'react-router-dom';

let baseUrl = 'http://127.0.0.1:8000';


class PostView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id    : props.match.params.postId,
            title : '',
            body  : ''
        }
    }
    componentDidMount(){
        this.getOne(this.state.id);
    }
    getOne(id) {
        axios.get(`${baseUrl}/api/post/${id}`).then((response) => {
            let post = response.data;
            document.title = post.title+' - My Blog';
            this.setState({
                id    : post.id,
                title : post.title,
                body  : post.body
            });
        }).catch((error) => {
            document.title = '404 (Not Found) - My Blog';
            console.error(error);
        });

    }
    render(){
    return (
        <div>
            <div className="container">
            <h3>{ this.state.title }</h3>
            <p>{ this.state.body }</p>
            </div>
        </div>
    );
	}
}

export default PostView;

if (document.getElementById('postview')) {
    ReactDOM.render(<PostView />, document.getElementById('postview'));
}
