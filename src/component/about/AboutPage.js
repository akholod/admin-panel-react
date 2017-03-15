import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Admin panel app, build with React and Redux</p>
                <Link to='/' className='btn btn-prymary btn-lg'>Back home</Link>
            </div>
        );
    }
}

export default AboutPage;
