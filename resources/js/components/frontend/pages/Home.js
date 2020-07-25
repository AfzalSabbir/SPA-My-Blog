import React from 'react';
import ReactDOM from 'react-dom';

let Component = React.Component;

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
        this.getAll();
    }
    getAll() {
        axios.get('http://127.0.0.1:8000/api/post').then((response) => {
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
        axios.delete(`http://127.0.0.1:8000/api/post/+${id}`).then((response) => {
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
    submit(event) {
        event.preventDefault();

        let id = this.state.id;

        if(id == 0) {

            axios.post(`http://127.0.0.1:8000/api/post`,{
                title: this.state.title,
                body: this.state.body
            }).then((response) => {
                this.resetMe();
                this.getAll();
            }).catch((error) => {
                console.error(error);
            });            
        } else {
            axios.put(`http://127.0.0.1:8000/api/post/+${id}`,{
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
                                    <input onChange={ (event)=>this.titleChange(event) } type="text" value={ this.state.title } className="form-control my-2" placeholder="title"/>
                                    <input onChange={ (event)=>this.bodyChange(event) } type="text" value={ this.state.body } className="form-control my-2" placeholder="body"/>
                                    <input type="submit" className="btn btn-success my-2" />
                                </div>
                            </div>
                        </form>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="20">#</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th width="80">Action <button className="btn btn-success btn-sm py-0" onClick={()=>this.getAll()}> <i className="fa fa-refresh"></i></button></th>
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
