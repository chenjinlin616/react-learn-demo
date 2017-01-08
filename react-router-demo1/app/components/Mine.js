import React from 'react';
import { Link, IndexLink} from 'react-router';

import './../scss/mine.scss';

export default class Mine extends React.Component{
    render(){
        return(
            <div className='mine'>
                <div className="nav-mine">
                    <ul>
                        <li><IndexLink to="/mine" activeClassName="nav-active">Mine_Center</IndexLink></li>
                        <li><Link to="/Mine_Help" activeClassName="nav-active">Mine_Help</Link></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}