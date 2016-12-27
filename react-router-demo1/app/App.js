import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, Redirect } from 'react-router';

import NavIndex from './components/NavIndex.js';
import Index from './components/Index.js';
import News from './components/News.js';
import Find from './components/Find.js';
import Mine from './components/Mine.js';

import './../app/scss/index.scss';
import testPng from './../app/img/pay-fail.png';
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
                    <Route path="/news" component={News}/>
                    <Route path="/find" component={Find}>
                        <Route path="/messages/:id" component={FindInside}/>
                        <Redirect from="messages/:id" to="/messages/:id" />
                    </Route>
                    <Route path="/mine" component={Mine}/>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));