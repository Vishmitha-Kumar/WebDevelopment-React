import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

class States extends React.Component{
    

    constructor(){
        super();
        this.state={name:'Vishmitha'}
    }
    fun=()=>{
        this.setState({name:'Isai'})
    }


    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type='button' value='click' onClick={this.fun}></input>
            </div>
        );
    }
}
export default States;