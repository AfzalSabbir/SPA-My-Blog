import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import PostView from '../pages/PostView';

let Component = React.Component;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
    console.log(this.props);
  }
  render(){
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">My BLog</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about" activeClassName="active">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/post/:postId" component={PostView}/>
      </Switch>
    </Router>
  );
  }
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
