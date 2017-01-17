import React from 'react';

// export default class EnterAction extends React.Component{
//无default会报错，不是defalut对象
export default class EnterAction{
    //addAction
    addAction(text){
        console.log(`EnterAction 的 addAction: ${text}`);
        //触发EnterAction
    }
};

