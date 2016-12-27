import React from 'react';
import { Link } from 'react-router';
import './../scss/navBot.scss';

export default class NavIndex extends React.Component{
    render(){
        // console.log(this.props.children);
        return(
            <div>
                {this.props.children}
                <div className='nav-bot'>
                    <ul>
                        <li><Link to="/">index</Link></li>
                        <li><Link to="/news">news</Link></li>
                        <li><Link to="/find">find</Link></li>
                        <li><Link to="/mine">mine</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}