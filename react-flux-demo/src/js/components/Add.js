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
                //清空当前input
                this.refs.inputTask.value = ''; //加到原生的input，所以获取的是DOM
                // ReactDOM.findDOMNode(this.refs.inputTask).value = '123';
            }
        }
    }
    render(){
        // console.log(this.props.lists);
        let lists = this.props.lists;
        let listsHtml = lists.map((value, index) => {
            return <li key={index}>{value}</li>
        });
        // console.log(listsHtml);
        return(
            <div className="add">
                <ul>{listsHtml}</ul>
                <input ref='inputTask' onKeyUp={this.upEnter.bind(this)} type="text" placeholder="输入任务，按enter键"/>
            </div>
        )
    }
};

// 官方文档说的很清楚，ref添加到Compoennt上获取的是Compoennt实例，添加到原生HTML上获取的是DOM
