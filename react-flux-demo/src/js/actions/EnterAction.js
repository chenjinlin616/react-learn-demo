import React from 'react';
import AppDispathcer from '../dispatcher/AppDispatcher';

// export default class EnterAction extends React.Component{
//无default会报错，不是defalut对象
// export default class EnterAction{
export default {
    //addAction
    addAction: function(text){
        console.log(`EnterAction 的 addAction: ${text}`);
        //触发EnterAction,把动作派发到store
        AppDispathcer.dispatch({
            actionType: 'addAction',
            text: text
        });
    },
    addAction2: function(text){
        console.log(`EnterAction 的 addAction2: ${text}`);
        //触发EnterAction
        AppDispathcer.dispatch({
            actionType: 'addAction2',
            text: text
        });
    }
};

//是一个对象

