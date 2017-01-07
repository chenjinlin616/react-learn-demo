import React from 'react';
import { Link, IndexLink} from 'react-router';
import './../scss/navBot.scss';

export default class NavIndex extends React.Component{
    render(){
        // console.log(this.props.children);
        return(
            <div>
                {this.props.children}
                <div className='nav-bot'>
                    <ul>
                        {/*<li><Link to="/">index</Link></li>*/}
                        {/*<li><Link to="/news" activeStyle={{color: 'red',background:'green'}}>news</Link></li>*/}
                        {/*<li><Link to="/find" activeStyle={{color: 'red',background:'green'}}>find</Link></li>*/}
                        {/*<li><Link to="/mine" activeStyle={{color: 'red',background:'green'}}>mine</Link></li>*/}
                        <li><IndexLink to="/" activeClassName="nav-active">index</IndexLink></li>
                        <li><Link to="/news" activeClassName="nav-active">news</Link></li>
                        <li><Link to="/find" activeClassName="nav-active">find</Link></li>
                        <li><Link to="/mine" activeClassName="nav-active">mine</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}