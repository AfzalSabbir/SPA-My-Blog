import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';

import PostView from '../pages/PostView';

let Component = React.Component;
let baseUrl = 'http://127.0.0.1:8000';

class Home extends Component {
	constructor(props) {
        super(props)
        this.state = {
            id    : 0,
            title : '',
            body  : '',
            posts : []
        }
    }
    componentDidMount(){
		document.title = 'Home - My Blog';
	    console.log(this.props);
        this.getAll();
    }
    getAll() {
        axios.get(`${baseUrl}/api/post`).then((response) => {
            this.setState({
                posts : response.data,
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    getOne(e, post) {

        this.setState({
            id    : post.id,
            title : post.title,
            body  : post.body
        });
    }
    delete(e, id) {
        axios.delete(`${baseUrl}/api/post/+${id}`).then((response) => {
            this.getAll();
        }).catch((error) => {
            console.error(error);
        });
    }
    resetMe() {
        this.setState({
            id    : 0,
            title : '',
            body  : '',
        });
    }
    edit(event, post) {
        this.setState({
            id    : post.id,
            title : post.title,
            body  : post.body,
        });
    }
    /*view(e, id) {
    	console.log(id);
    	window.location = baseUrl+'/post/'+id;
    }*/
    submit(event) {
        event.preventDefault();

        let id = this.state.id;

        if(id == 0) {

            axios.post(`${baseUrl}/api/post`,{
                title: this.state.title,
                body: this.state.body
            }).then((response) => {
                this.resetMe();
                this.getAll();
            }).catch((error) => {
                console.error(error);
            });            
        } else {
            axios.put(`${baseUrl}/api/post/+${id}`,{
                title: this.state.title,
                body: this.state.body
            }).then((response) => {
                this.resetMe();
                this.getAll();
            }).catch((error) => {
                console.error(error);
            });
        }
    }
    titleChange(event) {
        this.setState({
            title: event.target.value
        })
    }
    bodyChange(event) {
        this.setState({
            body: event.target.value
        })
    }
    render(){
	let i = 0
    return (
        <div>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form onSubmit={(e)=>this.submit(event)}>
                            <div className="form-row">
                                <div className="col-6 offset-3">
                                    <input required onChange={ (event)=>this.titleChange(event) } type="text" value={ this.state.title } className="form-control my-2" placeholder="title"/>
                                    <textarea required onChange={ (event)=>this.bodyChange(event) } type="text" value={ this.state.body } className="form-control my-2" placeholder="body" rows="5"> </textarea>
									<div className="btn-group my-2">
	                                    <input type="submit" className="btn btn-success" />
	                                    <button type="button" className="btn btn-info" onClick={()=>this.getAll()}> <i className="fa fa-refresh"></i></button>
	                                </div>
                                </div>
                            </div>
                        </form>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="20">#</th>
                                    <th width="25%">Title</th>
                                    <th>Body</th>
                                    <th width="80">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.posts.map(post=>
                                <tr key={post.id}>
                                    <td>{++i}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <div className="btn-group">
                                        	<Link to={`/post/${post.id}`} className="btn btn-info"><i className="fa fa-eye"></i></Link>
                                            <button onClick={(event)=>this.edit(event, post)} className="btn btn-warning"><i className="fa fa-pencil"></i></button>
                                            <button onClick={(e)=>this.delete(e, post.id)} className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
	}
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
