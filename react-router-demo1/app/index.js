import React from 'react';
import ReactDOM from 'react-dom';

import './../app/scss/index.scss';
import testPng from './../app/img/pay-fail.png';

class App extends React.Component{
    render(){
        return (
            <div className='app'>
                <p className="app-p">测试段落1</p>
                <p className="app-p">测试段落2</p>
                <p className="app-p">测试段落3</p>
                <img className="test-png" src={testPng}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));