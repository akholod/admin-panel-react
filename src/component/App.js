import React, { Component, PropTypes } from 'react';
import '../styles/main.scss';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Header here</h3>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};


export default App;
