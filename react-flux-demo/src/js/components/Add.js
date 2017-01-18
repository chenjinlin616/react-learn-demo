import React from 'react';
import ReactDOM from 'react-dom';

export default class Add extends React.Component{
    upEnter(event){
        let inputTask = '';
        if(event.keyCode === 13){
            inputTask = ReactDOM.findDOMNode(this.refs.inputTask).value;
            if(inputTask != ''){
                console.log(`enter13：${inputTask}`);     //少写了一个$
                //执行父组件的函数
                this.props.addNewTask(inputTask);
            }
        }
    }
    render(){

        return(
            <div className="add">
                <ul></ul>
                <input ref='inputTask' onKeyUp={this.upEnter.bind(this)} type="text" placeholder="输入任务，按enter键"/>
            </div>
        )
    }
};
