import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
        <div className="justify-content-center bg-gray py-3 text-center bg-secondary text-white">
            &copy; 2020 - My Blog
        </div>
    );
}

export default Footer;

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
