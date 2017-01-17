import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            k1: 'v1',
            k2: 'v2'
        };
    }
    render(){
        var k1 = this.state.k1;
        var k2 = this.state.k2;
        return(
            <div className="index">
                <p>state的值：{k1}</p>
                <p>state的值：{k2}</p>
            </div>
        )
    }
};

ReactDOM.render(<App/>, document.querySelector('#app'));
