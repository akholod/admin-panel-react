import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <div className='not-found-component'>
            <Jumbotron>
                <h1>404</h1>
                <h2>Page not found!</h2>
                <p>
                    <Link to='/'>Go back to the main page</Link>
                </p>
            </Jumbotron>
        </div>
    );
};

export default NotFoundPage;
