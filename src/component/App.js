import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import '../styles/main.scss';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};


export default App;
