import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import NavBot from './components/NavBot.js';
import Index from './components/Index.js';
import News from './components/News.js';
import Find from './components/Find.js';
import Mine from './components/Mine.js';

import './../app/scss/index.scss';
import testPng from './../app/img/pay-fail.png';
class Message extends React.Component{
    render(){
        return(
            <div className='message'>
                message
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
                <Route path="/" component={NavBot}>
                    <IndexRoute component={Index}/>
                    <Route path="/news" component={News}/>
                    <Route path="/find" component={Find}>
                        <Route path="messages/:id" component={Message}/>
                    </Route>
                    <Route path="/mine" component={Mine}/>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));