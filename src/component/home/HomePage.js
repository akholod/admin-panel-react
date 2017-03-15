import React, { Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page-component'>
                <Jumbotron>
                    <h1>Administration panel</h1>
                    <p>Hello World</p>
                    <Button bsStyle={'info'}>
                        <Link to='about' className='btn btn-prymary btn-lg'>Learn more</Link>
                    </Button>
                </Jumbotron>
            </div>

        );
    }
}

export default HomePage;
