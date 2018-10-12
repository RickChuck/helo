import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Nav extends React.Component {
    
    render() {
        return (
            <ul>
             <li>
              <Link to='/dashboard'>
                <button type='button'>Home</button>
              </Link>
             </li>
            </ul>
        )
    }
}
export default Nav