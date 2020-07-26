import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import PostView from '../pages/PostView';

function Routes() {
    return (
      <Router>        
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/post/:postId" component={PostView}/>
      </Router>
    );
}

export default Routes;

if (document.getElementById('routes')) {
    ReactDOM.render(<Routes />, document.getElementById('routes'));
}
