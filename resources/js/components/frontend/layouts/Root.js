import React from 'react';
import ReactDOM from 'react-dom';

import Routes from '../partials/Routes';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

import Home from '../pages/Home';

let Component = React.Component;

class Root extends Component {
    render(){
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
    }
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
