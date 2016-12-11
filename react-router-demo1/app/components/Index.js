import React from 'react';
import testPng from './../img/pay-fail.png';

export default class Index extends React.Component{
    render(){
        return(
            <div className='news'>
                Index.js
                <img src={testPng}/>
            </div>
        )
    }
}