import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header-component'>
            <Nav bsStyle="tabs">
                <li>
                    <IndexLink to='/' activeClassName='active'>Home</IndexLink>
                </li>
                <li>
                    <Link to='/content' activeClassName='active'>Content</Link>
                </li>
                <li>
                    <Link to='/about' activeClassName='active'>About</Link>
                </li>
             </Nav>
        </div>
    );
};

export default Header;




  //
  //
