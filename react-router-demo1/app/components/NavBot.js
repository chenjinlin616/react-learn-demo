import React from 'react';
import { Link } from 'react-router';
import './../scss/navBot.scss';

export default class NavBot extends React.Component{
    render(){
        // console.log(this.props.children);
        return(
            <div>
                <div className='nav-bot'>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/news">news</Link></li>
                    <li><Link to="/find">find</Link></li>
                    <li><Link to="/mine">mine</Link></li>
                </div>
                {this.props.children}
            </div>
        )
    }
}