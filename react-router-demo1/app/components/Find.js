import React from 'react'

export default class Find extends React.Component{
    render(){
        return(
            <div className='news'>
                Find.js
                {this.props.children || "Welcome to your Find"}
            </div>
        )
    }
}