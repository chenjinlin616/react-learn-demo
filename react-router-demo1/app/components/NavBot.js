import React from 'react'
import { Link } from 'react-router'
import './../scss/navBot.scss'

export default class NavBot extends React.Component{
    render(){
        return(
            <div className='nav-bot'>
                <li><Link to="/">index</Link></li>
                <li><Link to="/news">news</Link></li>
                <li><Link to="/find">find</Link></li>
                <li><Link to="/mine">mine</Link></li>
                {this.props.children}
            </div>
        )
    }
}