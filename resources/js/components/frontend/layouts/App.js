import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Home from '../pages/Home';

function App() {
    return (
        <div className="container mt-2">
            <Header />
            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
