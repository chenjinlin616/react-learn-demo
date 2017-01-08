import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';

import NavIndex from './components/NavIndex.js';
import Index from './components/Index.js';
import News from './components/News.js';
import Find from './components/Find.js';
import Mine from './components/Mine.js';
import Mine_Center from './components/Mine_Center.js';
import Mine_Help from './components/Mine_Help.js';

import './../app/scss/index.scss';

class FindInside extends React.Component{
    render(){
        return(
            <div className='message'>
                FindInside {this.props.params.id}
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            // <div className='app'>
            //     <p className="app-p">测试段落1</p>
            //     <p className="app-p">测试段落2</p>
            //     <p className="app-p">测试段落3</p>
            //     <img className="test-png" src={testPng}/>
            // </div>
            // {/*<Router history={browserHistory}>*/}  //服务器端
            <Router history={hashHistory}>
                <Route path="/" component={NavIndex}>
                    <IndexRoute component={Index}/>
                    {/*<IndexRedirect to="/news" />*/}
                    <Route path="/news" component={News}/>
                    <Route path="/find" component={Find}>
                        <Route path="/msg/:id" component={FindInside}/>
                        <Redirect from="msg/:id" to="/msg/:id"/>
                        {/*<Redirect from="msg/:id" to="/mine"/>*/}
                    </Route>
                    <Route path="/mine" component={Mine}>
                        <IndexRoute component={Mine_Center}/>
                        <Route path="/mine_help" component={Mine_Help}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));