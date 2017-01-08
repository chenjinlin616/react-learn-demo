import React from 'react'

export default class Find extends React.Component{
    render(){
        return(
            <div className='news'>
                <p>Find.js</p>
                {this.props.children || "Welcome to your Find"}
            </div>
        )
    }
}