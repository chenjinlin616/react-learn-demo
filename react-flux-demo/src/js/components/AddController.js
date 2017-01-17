import React from 'react';

import Add from './Add.js';
import EnterAction from './../actions/EnterAction.js';

export default class AddController extends React.Component{
    //子组件Add 按enter键触发
    addNewTask(inputTask){
        console.log(`AddController 的 addNewTask: ${inputTask}`);
        //触发EnterAction
        //这里的new初始化，能在export时就搞定么
        var enterAction = new EnterAction();
        enterAction.addAction(inputTask);
    }
    render(){
        return <Add addNewTask={this.addNewTask.bind(this)}/>
    }
};
