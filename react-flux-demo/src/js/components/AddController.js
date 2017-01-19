import React from 'react';

import Add from './Add.js';
import EnterAction from '../actions/EnterAction.js';
import AppStore from '../stores/AppStore.js';

export default class AddController extends React.Component{
    constructor(){
        super();
        this.state = {
            lists: AppStore.getAll()
        };
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        AppStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState({
            lists: AppStore.getAll()
        });
    }
    //子组件Add 按enter键触发
    addNewTask(inputTask){
        console.log(`AddController 的 addNewTask: ${inputTask}`);
        //触发EnterAction
        //这里的new初始化，能在export时就搞定么
        // var enterAction = new EnterAction();
        EnterAction.addAction(inputTask);
        // EnterAction.addAction2(inputTask);
    }
    render(){
        return <Add lists={this.state.lists} addNewTask={this.addNewTask.bind(this)}/>
    }
};
