import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>Administration panel</h1>
                <p>Hello World</p>
                <link to='about' className='btn btn-prymary btn-lg'>Learn more</link>
            </div>
        );
    }
}

export default HomePage;
